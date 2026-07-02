/* eslint-disable */
"use strict";

/**
 * POST /api/chat
 *
 * Streaming chat endpoint — proxies naar Azure OpenAI (gpt-4o-mini) en geeft
 * de delta's terug als Server-Sent Events.
 *
 * Body: { messages: [{role, content}], temperature?, maxTokens? }
 * Response: text/event-stream met "data: {delta}\n\n" frames, eindigend met
 * "data: [DONE]\n\n".
 *
 * Caps: 8000 input tokens (~32k chars heuristisch), 1500 output tokens.
 * Rate limit: 30 calls/60s per IP — soft (in-memory).
 */

const { app } = require("@azure/functions");
const { checkAccess } = require("../shared/entitlement");

/* ─── Rate limit (in-memory; reset bij container restart) ────────────────── */
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 30;
const rateMap = new Map(); // ip -> [timestamps]

function rateLimit(ip) {
  const now = Date.now();
  const arr = (rateMap.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  if (arr.length >= RATE_MAX) {
    const retryAfter = Math.ceil(
      (RATE_WINDOW_MS - (now - arr[0])) / 1000
    );
    return { ok: false, retryAfter: Math.max(retryAfter, 1) };
  }
  arr.push(now);
  rateMap.set(ip, arr);
  return { ok: true };
}

/* ─── Helpers ─────────────────────────────────────────────────────────────── */
function getHeader(req, name) {
  if (typeof req.headers?.get === "function") return req.headers.get(name);
  return req.headers?.[name] || req.headers?.[name.toLowerCase()];
}

function getIp(req) {
  return (
    getHeader(req, "x-forwarded-for")?.split(",")[0]?.trim() ||
    getHeader(req, "x-azure-clientip") ||
    getHeader(req, "client-ip") ||
    "anon"
  );
}

async function readBody(req) {
  if (!req) return {};
  try {
    if (typeof req.json === "function") return await req.json();
    if (req.body) {
      return typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    }
  } catch {
    return {};
  }
  return {};
}

function validateMessages(messages) {
  if (!Array.isArray(messages) || messages.length === 0) return false;
  for (const m of messages) {
    if (!m || typeof m !== "object") return false;
    if (!["system", "user", "assistant"].includes(m.role)) return false;
    if (typeof m.content !== "string") return false;
  }
  return true;
}

/* Heuristiek: ~4 chars per token. 8000 tokens ≈ 32 000 chars input. */
function estimateChars(messages) {
  return messages.reduce((s, m) => s + (m.content?.length || 0), 0);
}

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "3600",
};

const SSE_HEADERS = {
  ...CORS,
  "Content-Type": "text/event-stream; charset=utf-8",
  "Cache-Control": "no-cache, no-transform",
  Connection: "keep-alive",
  "X-Accel-Buffering": "no",
};

const JSON_HEADERS = {
  ...CORS,
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store",
};

/* ─── Handler ─────────────────────────────────────────────────────────────── */
app.http("chat", {
  methods: ["POST", "OPTIONS"],
  authLevel: "anonymous",
  route: "chat",
  handler: async (req, context) => {
    if (req.method === "OPTIONS") {
      return { status: 204, headers: CORS };
    }

    const ip = getIp(req);
    const limit = rateLimit(ip);
    if (!limit.ok) {
      return {
        status: 429,
        headers: {
          ...JSON_HEADERS,
          "Retry-After": String(limit.retryAfter),
        },
        jsonBody: { ok: false, error: "rate_limited", retryAfter: limit.retryAfter },
      };
    }

    const body = await readBody(req);
    const messages = body.messages;
    const temperature =
      typeof body.temperature === "number"
        ? Math.max(0, Math.min(1.5, body.temperature))
        : 0.7;
    const maxTokens =
      typeof body.maxTokens === "number"
        ? Math.max(16, Math.min(1500, Math.round(body.maxTokens)))
        : 1500;

    if (!validateMessages(messages)) {
      return {
        status: 400,
        headers: JSON_HEADERS,
        jsonBody: { ok: false, error: "invalid_messages" },
      };
    }

    if (estimateChars(messages) > 32_000) {
      return {
        status: 400,
        headers: JSON_HEADERS,
        jsonBody: { ok: false, error: "input_too_long" },
      };
    }

    /* Betaalmuur (inert zolang ENTITLEMENT_ENFORCED-app-setting ≠ "true").
     * Gratis module vrij; daarbuiten actieve entitlement vereist. */
    const access = await checkAccess(req, body?.moduleId, context);
    if (!access.allowed) {
      context.log(`CHAT_DENIED module=${body?.moduleId || "?"}`);
      return {
        status: 402,
        headers: JSON_HEADERS,
        jsonBody: { ok: false, error: "entitlement_required" },
      };
    }

    const endpoint = process.env.AOAI_ENDPOINT;
    const deployment = process.env.AOAI_DEPLOYMENT;
    const apiVersion = process.env.AOAI_API_VERSION;
    const key = process.env.AOAI_KEY;

    if (!endpoint || !deployment || !apiVersion || !key) {
      context.log("CHAT_CONFIG_MISSING");
      return {
        status: 500,
        headers: JSON_HEADERS,
        jsonBody: { ok: false, error: "config_missing" },
      };
    }

    const url = `${endpoint.replace(/\/$/, "")}/openai/deployments/${deployment}/chat/completions?api-version=${apiVersion}`;

    let upstream;
    try {
      upstream = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": key,
        },
        body: JSON.stringify({
          messages,
          temperature,
          max_tokens: maxTokens,
          stream: true,
        }),
      });
    } catch (err) {
      context.log("CHAT_UPSTREAM_FETCH_FAIL " + (err?.message || err));
      return {
        status: 502,
        headers: JSON_HEADERS,
        jsonBody: { ok: false, error: "upstream_unreachable" },
      };
    }

    if (!upstream.ok || !upstream.body) {
      const txt = await upstream.text().catch(() => "");
      context.log(
        "CHAT_UPSTREAM_BAD " + upstream.status + " " + txt.slice(0, 200)
      );
      return {
        status: 502,
        headers: JSON_HEADERS,
        jsonBody: { ok: false, error: "upstream_error", status: upstream.status },
      };
    }

    /* Transform: Azure OpenAI SSE → onze SSE met alleen delta-tekst */
    const decoder = new TextDecoder();
    const encoder = new TextEncoder();

    const stream = new ReadableStream({
      async start(controller) {
        const reader = upstream.body.getReader();
        let buffer = "";
        let totalDelta = 0;
        try {
          while (true) {
            const { value, done } = await reader.read();
            if (done) break;
            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split("\n");
            buffer = lines.pop() || "";
            for (const raw of lines) {
              const line = raw.trim();
              if (!line) continue;
              if (!line.startsWith("data:")) continue;
              const payload = line.slice(5).trim();
              if (payload === "[DONE]") {
                controller.enqueue(encoder.encode("data: [DONE]\n\n"));
                continue;
              }
              try {
                const json = JSON.parse(payload);
                const delta = json.choices?.[0]?.delta?.content;
                if (typeof delta === "string" && delta.length > 0) {
                  totalDelta += delta.length;
                  controller.enqueue(
                    encoder.encode(
                      `data: ${JSON.stringify({ delta })}\n\n`
                    )
                  );
                }
              } catch {
                /* ignore parse errors on individual frames */
              }
            }
          }
          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
        } catch (err) {
          context.log("CHAT_STREAM_ERR " + (err?.message || err));
          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify({ error: "stream_failed" })}\n\n`
            )
          );
        } finally {
          context.log(
            `CHAT_OK ip=${ip} chars=${totalDelta} maxOut=${maxTokens}`
          );
          controller.close();
        }
      },
    });

    return {
      status: 200,
      headers: SSE_HEADERS,
      body: stream,
    };
  },
});
