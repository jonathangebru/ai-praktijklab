# Uitvoeringsplan — alle 17 lessen op nieuwe standaard

> Werkdocument · mei 2026
> Doel: alle lessen van Module 01 en 02 brengen op het kwaliteits- en
> interactieniveau van les 1.4 (proof-of-depth + interactiviteit).

---

## Wat er al staat

- ✅ **Les 1.4** — rijk schema (12 secties), ~2.900 woorden, 18 interactiepunten,
  exporteerbare lesopzet als markdown
- ✅ **Audit v1** met 3 herschreven lessen: 1.2 (casuslab), 1.7 (casusbespreking),
  2.5 (promptlab) — in eigen formaat-schema, klaar om te integreren
- ✅ **Hook** `useLessonWork(slug)` met debounced localStorage + cross-tab sync
- ✅ **Interactiebibliotheek**: `WriteBlock`, `TryItYourself`, `RubricSelfRater`,
  `ReflectionWriter`, `MijnWerkPanel`, `MijnWerkAfsluiting`
- ✅ `Lesson.jsx` rendert het rijke schema en herkent `format: "diepteles"`

---

## Lesoverzicht — wat te doen per les

Legenda: ⚠ = audit markeerde als kritiek · ✅ = klaar

### Module 01 — Basiscursus AI

| # | Lesnaam | Status nu | Beoogde format | Werk |
|---|---------|-----------|----------------|------|
| 1.1 | Wat is AI en generatieve AI? | Basisinhoud + schoolnaam | Diepteles + microles-intro | Uitbreiden naar ~3.000w + workspaces + generic |
| 1.2 | Wat kan AI wel/niet? ⚠ | Audit-JSON klaar | **Casuslab** | Audit-JSON migreren naar productie + workspaces |
| 1.3 | Prompting voor docenten | Basisinhoud + schoolnaam | Diepteles met promptlab-segment | Uitbreiden + generic + 4× tryItYourself |
| 1.4 | AI voor lesvoorbereiding ✅ | DONE | Diepteles | — |
| 1.5 | Differentiatie en feedback | Fallback | Diepteles | Volledig schrijven (~3.000w) |
| 1.6 | Toetsing en integriteit | Fallback | **Casusbespreking** | Volledig schrijven met Npuls-handreiking |
| 1.7 | Privacy & ethiek ⚠ | Audit-JSON klaar | **Casusbespreking** | Audit-JSON migreren + AI Act callout component |
| 1.8 | Praktijkopdracht 1 | Fallback | **Praktijkopdracht** | Volledig schrijven met transfer-haak + collega-feedback |

### Module 02 — AI-geletterdheid, programmeerdidactiek, vibe coding

| # | Lesnaam | Status nu | Beoogde format | Werk |
|---|---------|-----------|----------------|------|
| 2.1 | AI-geletterdheid ⚠ | Fallback | Diepteles + kennischeck | Volledig schrijven met AI-GO! framework |
| 2.2 | Programmeerdidactiek | Fallback | Diepteles | Volledig schrijven |
| 2.3 | AI-assisted development | Basisinhoud + schoolnaam | Diepteles | Uitbreiden + generic |
| 2.4 | Vibe coding | Basisinhoud + schoolnaam | Diepteles met reflectiecyclus | Uitbreiden + generic |
| 2.5 | Prompten voor software | Audit-JSON klaar | **Promptlab** | Audit-JSON migreren + 4-rondes component |
| 2.6 | Debuggen met AI | Fallback | Diepteles met legacy-code werkvorm | Volledig schrijven |
| 2.7 | Ontwerpen + prototypen | Fallback | Diepteles | Volledig schrijven, eventueel 90 min splitsen |
| 2.8 | Beoordelen met AI | Fallback | **Reflectiecyclus** | Volledig schrijven met Npuls-toetsing |
| 2.9 | Praktijkopdracht 2 | Fallback | **Praktijkopdracht** | Volledig schrijven |

---

## Cross-cutting werk

| Onderdeel | Wat | Effort |
|---|---|---|
| **Nieuwe format-componenten** | CasusLab (FailureCase, FailureMatrix), CasusBespreking (CasusCard, PerspectiveStack, PositionTaker, LegalCallout, ActionPlan), PromptLab (PromptIteration, PromptComparator), PraktijkOpdracht (PathSelector, PeerReviewBlock), KnowledgeCheck (QuickCheck, ResultBlock) | ~2 dagen |
| **Promptkit-integratie** | Promptbibliotheek krijgt tab "Mijn promptkit" — toont prompts uit alle lessen die docent zelf bewaarde | 0.5 dag |
| **Kennischecks** | 4 stuks tussen sleutellessen (na 1.4, 1.8, 2.4, 2.9) — 5–7 vragen met directe feedback | 1 dag |
| **Generic-maken** | Schoolnamen weg uit 1.1, 1.3, 2.3, 2.4 | 0.25 dag |
| **Responsive check** | Mobiel + tablet voor alle nieuwe componenten | 0.5 dag |

---

## Fasering en volgorde

```
FASE 1 · Voorbereiding (1 dag)
├─ Plan op schijf [DEZE STAP]
├─ Generic-maken van 1.1, 1.3, 2.3, 2.4 (schoolnamen weg)
└─ Audit-JSON van 1.2, 1.7, 2.5 lezen, schema-mapping naar productie

FASE 2 · Format-componenten (2 dagen)
├─ CasusLab (voor 1.2)
├─ CasusBespreking (voor 1.6 en 1.7)
├─ PromptLab (voor 2.5; sub-blok in 1.3 en 2.6)
├─ PraktijkOpdracht (voor 1.8 en 2.9)
└─ KnowledgeCheck (4× tussen lessen)

FASE 3 · Content schrijven (8-10 dagen)
├─ Batch 1 — audit-migraties (1.2, 1.7, 2.5)        ~1 dag
├─ Batch 2 — ⚠ priority + missend (2.1, 1.5, 1.6)   ~2 dagen
├─ Batch 3 — Module 1 afronden (1.1, 1.3, 1.8)      ~2 dagen
├─ Batch 4 — Module 2 missend (2.2, 2.6, 2.7, 2.8)  ~3 dagen
└─ Batch 5 — Module 2 uitbreiden (2.3, 2.4, 2.9)    ~2 dagen

FASE 4 · Cross-cutting (1.5 dagen)
├─ Promptkit-tab in promptbibliotheek
├─ Kennischecks plaatsen
└─ Visual coherence pass

FASE 5 · QA (1 dag)
├─ Responsive check
├─ Doorklikken hele cursus van les 1.1 t/m 2.9
└─ Console-error check + lighthouse-quickscan

Totaal: ~13-15 werkdagen
```

---

## Werkwijze

- Per les leveren in deze volgorde: schema → opening → conceptueel → stappen
  → workedExamples → vakvariaties → valkuilen → geoefendSpoor → eindcriteria
  → reflection → verderLezen → workspaces/tryItYourself
- Voorbeelden generiek (geen schoolnamen, geen herleidbare leerlingdata)
- Toon: 'je', actieve vorm, korte zinnen, geen marketingtaal
- Bronnen verankeren in onderzoekssynthese uit `audit-v1.md`
- Na elke batch: één tussenstand, één visuele check, één console-error check

---

## Status (live bijgewerkt tijdens uitvoering)

- [ ] Fase 1 · Voorbereiding
- [ ] Fase 2 · Format-componenten
- [ ] Fase 3 · Content schrijven (5 batches)
- [ ] Fase 4 · Cross-cutting
- [ ] Fase 5 · QA
