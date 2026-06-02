/* ──────────────────────────────────────────────────────────────────────────
 * workClient — per-gebruiker synchronisatie met de /api/work backend.
 *
 * Alles is *best-effort*. Bij elke niet-OK respons geven we null/false terug
 * zodat de aanroeper stilletjes terugvalt op localStorage:
 *   · 401  -> niet ingelogd (bv. `npm run dev` zonder echte auth)
 *   · 503  -> storage nog niet geconfigureerd in Azure
 *   · netwerk-/parsefout
 *
 * Zo blijft de app lokaal werken én gaat hij vanzelf synchroniseren zodra
 * login + Table Storage live staan — zonder regressie.
 * ─────────────────────────────────────────────────────────────────────── */

const ENDPOINT = "/api/work";

/* null = nog onbekend, true/false = laatst bekende beschikbaarheid. */
let _available = null;

export function serverKnownUnavailable() {
  return _available === false;
}

async function request(method, body) {
  try {
    const res = await fetch(ENDPOINT, {
      method,
      credentials: "include",
      headers: body ? { "Content-Type": "application/json" } : undefined,
      body: body ? JSON.stringify(body) : undefined,
    });

    if (res.status === 401 || res.status === 503) {
      _available = false;
      return null;
    }
    if (!res.ok) return null;

    _available = true;

    if (method === "GET") {
      const ct = res.headers.get("content-type") || "";
      if (!ct.includes("application/json")) return null;
      return await res.json();
    }
    return { ok: true };
  } catch {
    return null;
  }
}

/* Haalt het volledige werk + de promptkit van de ingelogde gebruiker op.
 * Geeft null terug als de server niet beschikbaar is (→ gebruik localStorage). */
export async function loadAll() {
  const data = await request("GET");
  if (!data || !data.ok) return null;
  return {
    work: data.work && typeof data.work === "object" ? data.work : {},
    promptkit: Array.isArray(data.promptkit) ? data.promptkit : [],
  };
}

/* Slaat het werk van één les op. Geeft true/false terug. */
export async function saveLesson(slug, data) {
  if (!slug) return false;
  const r = await request("POST", { slug, data: data || {} });
  return !!r;
}

/* Vervangt de complete promptkit van de gebruiker. */
export async function savePromptkit(list) {
  const r = await request("POST", {
    promptkit: Array.isArray(list) ? list : [],
  });
  return !!r;
}

/* Wist alle serverdata van de gebruiker (AVG · "verwijder mijn werk"). */
export async function wipeAll() {
  const r = await request("DELETE");
  return !!r;
}
