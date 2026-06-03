/* ──────────────────────────────────────────────────────────────────────────
 * progressClient — haalt de geanonimiseerde voortgangsaggregaten op voor het
 * beheerder-dashboard (/api/progress).
 *
 * Best-effort, net als workClient: bij elke niet-OK respons geven we null terug
 * zodat het dashboard stilletjes terugvalt op voorbeelddata:
 *   · 401  -> niet ingelogd
 *   · 403  -> wel ingelogd, maar geen beheerder
 *   · 503  -> storage nog niet geconfigureerd
 *   · netwerk-/parsefout
 * ─────────────────────────────────────────────────────────────────────── */

const ENDPOINT = "/api/progress";

export async function loadProgress() {
  try {
    const res = await fetch(ENDPOINT, {
      credentials: "include",
      headers: { accept: "application/json" },
    });
    if (!res.ok) return null;
    const ct = res.headers.get("content-type") || "";
    if (!ct.includes("application/json")) return null;
    const data = await res.json();
    return data && data.ok ? data : null;
  } catch {
    return null;
  }
}
