import { modules } from "./modules";

/* ──────────────────────────────────────────────────────────────────────────
 * Leerpaden — rolgebaseerde routes door de modules, met een niveauladder.
 *
 * Onderbouwing (zie docs/onderzoek-features-en-antwoordcontrole.md):
 *  · rolgebaseerd kiezen (AI-GO!-methode) × een niveauladder
 *    (UNESCO Acquire → Deepen → Create).
 *  · prerequisites tussen paden (Microsoft Elevate-stijl gating — hier zacht:
 *    we tonen de aanbeveling, we blokkeren niet).
 *  · een badge per pad, bovenop de module-certificaten.
 *
 * Een pad verwijst naar bestaande modules (op id). Voortgang en "behaald"
 * worden in de pagina berekend uit de echte module-voortgang.
 * ──────────────────────────────────────────────────────────────────────── */

export const paths = [
  {
    id: "starter",
    label: "Beginnende docent",
    role: "Je begint net met AI in je lessen",
    niveau: "Acquire",
    intro:
      "Van nul naar zelfverzekerd AI inzetten bij je dagelijkse werk. Je leert de basis en wint meteen tijd terug op voorbereiding, nakijken en administratie.",
    moduleIds: ["basiscursus-ai", "werkdruk-en-organisatie"],
    prerequisite: null,
    badge: "AI-basis voor docenten",
  },
  {
    id: "praktijk",
    label: "Docent in de praktijk",
    role: "Je gebruikt AI al en wilt het écht goed inzetten in de klas",
    niveau: "Deepen",
    intro:
      "Verdiep je didactiek: AI-geletterdheid onderwijzen, toegankelijk lesmateriaal maken en je werkdruk gericht verlichten — met de docent stevig aan het stuur.",
    moduleIds: [
      "basiscursus-ai",
      "ai-geletterdheid-onderwijzen",
      "toegankelijkheid-en-inclusie",
      "werkdruk-en-organisatie",
    ],
    prerequisite: "starter",
    badge: "AI in de onderwijspraktijk",
  },
  {
    id: "techniek",
    label: "ICT- en techniekdocent",
    role: "Je geeft les in techniek, informatica of programmeren",
    niveau: "Deepen → Create",
    intro:
      "Van basiskennis naar AI-assisted development en programmeerdidactiek in een AI-tijdperk — kansen én risico's, met de vakdiepte die jouw leerlingen nodig hebben.",
    moduleIds: ["basiscursus-ai", "ai-geletterdheid"],
    prerequisite: null,
    badge: "AI & programmeerdidactiek",
  },
  {
    id: "leiderschap",
    label: "Schoolleider & teamleider",
    role: "Je stuurt beleid, een team of een sectie aan",
    niveau: "Beleid",
    intro:
      "Van de basis naar AI-beleid en de AI Act, en naar teamontwikkeling: hoe krijg je je organisatie verantwoord én aantoonbaar mee, met afspraken die op een vergadertafel standhouden.",
    moduleIds: ["basiscursus-ai", "ai-beleid", "groei-en-team"],
    prerequisite: null,
    badge: "AI-beleid & leiderschap",
  },
  {
    id: "kartrekker",
    label: "Lerarenopleider & kartrekker",
    role: "Je trekt AI-scholing binnen je school of opleiding",
    niveau: "Create",
    intro:
      "Word de kartrekker die collega's meeneemt: AI-geletterdheid onderwijzen, teamleren organiseren en toegankelijk onderwijs ontwerpen — van eigen praktijk naar die van je team.",
    moduleIds: [
      "ai-geletterdheid-onderwijzen",
      "groei-en-team",
      "toegankelijkheid-en-inclusie",
    ],
    prerequisite: "praktijk",
    badge: "AI-kartrekker",
  },
];

/* Alle lessen van een pad (in module-volgorde), handig voor tellingen. */
export function pathLessons(path) {
  return path.moduleIds.flatMap((id) => modules[id]?.lessons || []);
}

/* De modulobjecten van een pad, in volgorde. */
export function pathModules(path) {
  return path.moduleIds.map((id) => modules[id]).filter(Boolean);
}

export function findPath(id) {
  return paths.find((p) => p.id === id) || null;
}
