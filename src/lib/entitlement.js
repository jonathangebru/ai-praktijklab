import { useEffect, useState } from "react";

/* ──────────────────────────────────────────────────────────────────────────
 * Entitlement — bepaalt of een gebruiker betaalde toegang heeft.
 *
 * VEILIGHEIDSVLAG: zolang ENTITLEMENT_ENFORCED === false verandert er NIETS —
 * iedereen houdt volledige toegang (zoals nu). Zet 'm op true (na Mollie +
 * besluit) om de paywall te activeren. Server-zijde checkt dezelfde grens in
 * de betaalde functies zodra enforcement aanstaat.
 * ─────────────────────────────────────────────────────────────────────── */

export const ENTITLEMENT_ENFORCED = false;

// Gratis toegankelijk zonder betaling (de "kennismaking").
export const FREE_MODULE_IDS = ["basiscursus-ai"];

/* Eén keer per sessie ophalen en cachen. */
let _cache = null;
let _inflight = null;

async function fetchEntitlement() {
  if (_cache) return _cache;
  if (_inflight) return _inflight;
  _inflight = (async () => {
    try {
      const res = await fetch("/api/entitlement", {
        headers: { accept: "application/json" },
        credentials: "include",
      });
      if (!res.ok) throw new Error("bad status");
      const data = await res.json();
      _cache = { active: !!data.active, tier: data.tier || null, source: data.source || "none" };
    } catch {
      // Geen /api (lokale dev) of fout → in dev niet blokkeren.
      _cache = { active: import.meta.env.DEV, tier: null, source: "unavailable" };
    }
    return _cache;
  })();
  return _inflight;
}

export function useEntitlement() {
  const [state, setState] = useState({ loading: true, active: false, tier: null });
  useEffect(() => {
    let alive = true;
    fetchEntitlement().then((e) => {
      if (alive) setState({ loading: false, ...e });
    });
    return () => {
      alive = false;
    };
  }, []);
  return state;
}

/* Bepaalt of een module toegankelijk is. Gratis modules en uitgezette
 * enforcement → altijd toegang. */
export function hasModuleAccess(moduleId, entitlement) {
  if (!ENTITLEMENT_ENFORCED) return true;
  if (FREE_MODULE_IDS.includes(moduleId)) return true;
  return !!entitlement?.active;
}
