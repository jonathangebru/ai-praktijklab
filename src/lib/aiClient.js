import { trackEvent } from "./appInsights";

/* ──────────────────────────────────────────────────────────────────────────
 * AI client — wrapt /api/chat (streaming) en /api/coach (single-shot).
 *
 * In dev: /api wordt door SWA emulator afgehandeld. In productie idem.
 * ─────────────────────────────────────────────────────────────────────── */

const API_BASE = "/api";

class AIError extends Error {
  constructor(message, { status, code } = {}) {
    super(message);
    this.name = "AIError";
    this.status = status;
    this.code = code;
  }
}

/* ─── streamChat ──────────────────────────────────────────────────────────
 * Async generator. Yields delta-strings. Throws AIError bij failure.
 *
 * Gebruik:
 *   const ac = new AbortController();
 *   for await (const chunk of streamChat({ messages, signal: ac.signal })) {
 *     setText((t) => t + chunk);
 *   }
 * ─────────────────────────────────────────────────────────────────────── */
export async function* streamChat({
  messages,
  signal,
  temperature,
  maxTokens,
}) {
  if (!Array.isArray(messages) || messages.length === 0) {
    throw new AIError("Geen berichten meegegeven.", { code: "no_messages" });
  }

  let res;
  try {
    res = await fetch(`${API_BASE}/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages, temperature, maxTokens }),
      signal,
    });
  } catch (err) {
    if (err?.name === "AbortError") throw err;
    trackEvent("ai-chat-fetch-fail", { msg: err?.message || String(err) });
    throw new AIError("Geen verbinding met de AI-service.", {
      code: "network",
    });
  }

  if (res.status === 429) {
    const retryAfter = Number(res.headers.get("retry-after")) || 30;
    trackEvent("ai-chat-rate-limited", { retryAfter });
    throw new AIError(
      `Even pauze — te veel verzoeken (probeer over ${retryAfter}s opnieuw).`,
      { status: 429, code: "rate_limited" }
    );
  }

  if (!res.ok) {
    let detail = "";
    try {
      const j = await res.json();
      detail = j?.error || "";
    } catch {
      /* ignore */
    }
    trackEvent("ai-chat-bad-status", { status: res.status, detail });
    throw new AIError(
      `AI-service gaf foutcode ${res.status}${detail ? ` (${detail})` : ""}.`,
      { status: res.status, code: detail || "bad_status" }
    );
  }

  if (!res.body) {
    throw new AIError("Lege response van AI-service.", { code: "no_body" });
  }

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let yielded = 0;

  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() || "";
      for (const raw of lines) {
        const line = raw.trim();
        if (!line.startsWith("data:")) continue;
        const payload = line.slice(5).trim();
        if (payload === "[DONE]") return;
        try {
          const json = JSON.parse(payload);
          if (json.error) {
            throw new AIError(`AI-stream-fout: ${json.error}`, {
              code: json.error,
            });
          }
          if (typeof json.delta === "string" && json.delta.length > 0) {
            yielded += json.delta.length;
            yield json.delta;
          }
        } catch (err) {
          if (err instanceof AIError) throw err;
          /* parse error op losse frame — negeer */
        }
      }
    }
  } finally {
    try {
      reader.releaseLock();
    } catch {
      /* ignore */
    }
    trackEvent("ai-chat-stream-done", { chars: yielded });
  }
}

/* ─── coach ───────────────────────────────────────────────────────────────
 * Single-shot. Returns { feedback, suggestions }.
 * ─────────────────────────────────────────────────────────────────────── */
export async function coach({ mode, input, context, signal }) {
  if (!mode || !input) {
    throw new AIError("Mode en input zijn verplicht.", { code: "bad_args" });
  }

  let res;
  try {
    res = await fetch(`${API_BASE}/coach`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mode, input, context }),
      signal,
    });
  } catch (err) {
    if (err?.name === "AbortError") throw err;
    trackEvent("ai-coach-fetch-fail", { mode, msg: err?.message });
    throw new AIError("Geen verbinding met de AI-coach.", { code: "network" });
  }

  if (res.status === 429) {
    const retryAfter = Number(res.headers.get("retry-after")) || 30;
    trackEvent("ai-coach-rate-limited", { mode, retryAfter });
    throw new AIError(
      `Even pauze — te veel verzoeken (probeer over ${retryAfter}s opnieuw).`,
      { status: 429, code: "rate_limited" }
    );
  }

  let data = null;
  try {
    data = await res.json();
  } catch {
    /* ignore */
  }

  if (!res.ok || !data?.ok) {
    const detail = data?.error || "bad_status";
    trackEvent("ai-coach-bad-status", { mode, status: res.status, detail });
    throw new AIError(`AI-coach werkte niet (${detail}).`, {
      status: res.status,
      code: detail,
    });
  }

  trackEvent("ai-coach-ok", { mode, fbChars: data.feedback?.length || 0 });

  return {
    feedback: data.feedback || "",
    suggestions: Array.isArray(data.suggestions) ? data.suggestions : [],
  };
}

export { AIError };
