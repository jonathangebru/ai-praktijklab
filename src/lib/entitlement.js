import { useEffect, useState } from "react";

/* ──────────────────────────────────────────────────────────────────────────
 * Entitlement — bepaalt of een gebruiker betaalde toegang heeft.
 *
 * VEILIGHEIDSVLAG — ÉÉN schakelaar: of de paywall aanstaat komt van de server
 * (/api/entitlement geeft `enforced` terug, gestuurd door de app-setting
 * ENTITLEMENT_ENFORCED). Zolang die uit staat verandert er NIETS — iedereen
 * houdt volledige toegang, precies zoals nu. Dezelfde vlag zet dus UI én de
 * betaalde functies (coach/chat/badge) tegelijk om, zónder herbouw.
 *
 * De constante hieronder is enkel de fallback wanneer /api/entitlement even
 * onbereikbaar is (lokale dev / offline).
 * ─────────────────────────────────────────────────────────────────────── */

export const ENTITLEMENT_ENFORCED = false;

// Gratis toegankelijk zonder betaling (de "kennismaking").
// Spiegelt FREE_MODULE_IDS in api/src/shared/entitlement.js.
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
      _cache = {
        active: !!data.active,
        tier: data.tier || null,
        source: data.source || "none",
        // Server is de bron van waarheid voor de schakelaar; alleen als het veld
        // ontbreekt (oude API) vallen we terug op de compile-time constante.
        enforced: typeof data.enforced === "boolean" ? data.enforced : ENTITLEMENT_ENFORCED,
      };
    } catch {
      // Geen /api (lokale dev) of fout → in dev niet blokkeren.
      _cache = {
        active: import.meta.env.DEV,
        tier: null,
        source: "unavailable",
        enforced: ENTITLEMENT_ENFORCED,
      };
    }
    return _cache;
  })();
  return _inflight;
}

export function useEntitlement() {
  const [state, setState] = useState({
    loading: true,
    active: false,
    tier: null,
    enforced: ENTITLEMENT_ENFORCED,
  });
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

/* Staat de paywall aan? Server-vlag wint; anders de compile-time fallback. */
export function isEnforced(entitlement) {
  return typeof entitlement?.enforced === "boolean"
    ? entitlement.enforced
    : ENTITLEMENT_ENFORCED;
}

/* Bepaalt of een module toegankelijk is. Gratis modules en uitgezette
 * enforcement → altijd toegang. Spiegelt moduleAllowed() server-side. */
export function hasModuleAccess(moduleId, entitlement) {
  if (!isEnforced(entitlement)) return true;
  if (FREE_MODULE_IDS.includes(moduleId)) return true;
  return !!entitlement?.active;
}

/* Beheerder: ken toegang toe (of trek in) voor één persoon (e-mail) of een
 * heel e-maildomein (school). Serverzijde beheerder-only afgedwongen.
 *  scope: "person" (key = e-mailadres) | "domain" (key = e-maildomein)
 *  validUntil: ISO-datum of "" (= onbeperkt); revoke: true trekt in. */
export async function grantEntitlement({ scope, key, tier, validUntil = "", revoke = false }) {
  let res;
  try {
    res = await fetch("/api/entitlement", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ scope, key, tier, validUntil, revoke }),
    });
  } catch {
    throw new Error("Geen verbinding met de server.");
  }
  let data = null;
  try {
    data = await res.json();
  } catch {
    /* ignore */
  }
  if (!res.ok || !data?.ok) {
    const detail = data?.error || `status ${res.status}`;
    if (detail === "forbidden") throw new Error("Alleen een beheerder kan toegang verlenen.");
    if (detail === "key_required") throw new Error("Vul een e-mailadres of domein in.");
    throw new Error(`Toekennen lukte niet (${detail}).`);
  }
  return data;
}
