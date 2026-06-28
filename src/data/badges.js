/* ──────────────────────────────────────────────────────────────────────────
 * Open Badges 3.0 — achievement-definities, afgeleid uit modules en paden.
 *
 * Een "Achievement" is de badge-definitie (wat je hebt behaald). De feitelijke,
 * ondertekende credential (AchievementCredential / Verifiable Credential) wordt
 * server-side uitgegeven door /api/badge en is verifieerbaar op /verify.
 * ─────────────────────────────────────────────────────────────────────── */

export const ISSUER = {
  id: "https://praktijklab.datagrid.nl",
  name: "AI PraktijkLab · Datagrid",
};

export function moduleAchievement(m) {
  return {
    kind: "module",
    refId: m.id,
    id: `${ISSUER.id}/badges/module/${m.id}`,
    name: `${m.title} — Module ${m.number}`,
    description: `Volledige afronding van Module ${m.number} (${m.title}) van AI PraktijkLab.`,
    criteria: {
      narrative: `Alle ${m.lessons.length} onderdelen van Module ${m.number} afgerond, inclusief kennischeck(s) en praktijkopdracht.`,
    },
  };
}

export function pathAchievement(p) {
  return {
    kind: "path",
    refId: p.id,
    id: `${ISSUER.id}/badges/path/${p.id}`,
    name: `${p.badge} — leerpad ${p.label}`,
    description: `Volledige afronding van het leerpad "${p.label}" (niveau ${p.niveau}) van AI PraktijkLab.`,
    criteria: {
      narrative: `Alle modules van het leerpad "${p.label}" volledig afgerond.`,
    },
  };
}
