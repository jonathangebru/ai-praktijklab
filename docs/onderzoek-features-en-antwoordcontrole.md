# Onderzoek: feature-gaps, antwoordcontrole & curriculum

_Vastgelegd 16 juni 2026. Bron: twee diepte-onderzoeken (fan-out websearch + adversariële
verificatie). Per claim staat het verificatieresultaat (bv. 3-0 = unaniem bevestigd).
Niet alle deelvragen leverden overlevende claims op — dat staat expliciet bij "open"._

---

## 1 · Curriculum — welke modules erbij, hoe groeperen, kunnen we paden maken?

### Gaten t.o.v. de kaders (afgeleid, geen kant-en-klare lijst in de bronnen)
- **Toegankelijkheid, inclusie & SEN** — UNESCO-dimensie "Human-centred mindset" is bij ons
  het minst belegd; DigCompEdu "Empowering Learners"; Microsoft-spoor "Accessibility & inclusivity".
- **Privacy/AVG in de praktijk (verdieping)** — DigComp 2.2 noemt data protection/e-privacy als
  cross-cutting; nu één les in module 1.
- **Bias/fairness + duurzaamheid & maatschappelijke impact** — DigComp 2.2 noemt "discrimination
  and bias" én "environmental sustainability" letterlijk als verplichte aandachtspunten.
- **AI & werkdrukverlaging** (administratie/communicatie) — DigCompEdu "Digital Resources /
  Professional Engagement".
- **Vakspecifieke verdieping** en **multimodale AI** — géén kader dekt dit; eigen ontwerpruimte
  en differentiator.

### Groepering — 5 sporen (Microsoft-strands + DigCompEdu's 6 gebieden als precedent)
1. **Fundament** → M1
2. **Didactiek & toepassing** → M2, M3, + vakspecifiek, multimodaal
3. **Verantwoord & beleid** → M4, + privacy-verdieping, bias & duurzaamheid
4. **Werkdruk & toegankelijkheid** → werkdruk-module, inclusie/SEN-module
5. **Leiderschap & teamontwikkeling** → M5, M4 (deels)

### Leerpaden — rol × niveau
Combineer **rolgebaseerd** (AI-GO!-methode, bewust níét gelaagd) met een **niveauladder**
(UNESCO Acquire→Deepen→Create; DigCompEdu 6 fasen; Microsoft Elevate Explorer→Expert→Fellow
met gating). Voorstel: 5 paden (Beginnende docent · Docent in de praktijk · ICT-/techniekdocent ·
Schoolleider/teamleider · Lerarenopleider), elk met prerequisites en een badge per pad.

Bronnen: [UNESCO AI-CFT](https://www.unesco.org/en/articles/ai-competency-framework-teachers) ·
[DigCompEdu](https://joint-research-centre.ec.europa.eu/digcompedu/digcompedu-framework_en) ·
[DigComp 2.2](https://education.ec.europa.eu/focus-topics/digital-education/actions/plan/updating-the-european-digital-competence-framework) ·
[AI-GO! (Zuyd/Npuls)](https://www.zuyd.nl/sites/default/files/pvo-ai-go.-raamwerk-ai-geletterdheid-in-het-onderwijs.pdf) ·
[Microsoft Educator Center](https://learn.microsoft.com/en-us/training/educator-center/) ·
[Google AI Educator Series](https://blog.google/products-and-platforms/products/education/teacher-ai-literacy-training/)

---

## 2 · Feature-gaps t.o.v. vergelijkbare platformen (DEEL A)

Bevestigd (3-0, primaire bronnen):
- **P0 · SURFconext SSO + LTI** met Brightspace/Canvas/Moodle. Grasple koppelt out-of-the-box;
  voor andere LMS'en via LTI-config. Toegangsdrempel #1 voor NL-scholen.
  [Grasple](https://help.grasple.com/en/articles/88151-combining-lti-and-single-sign-on-e-g-surfconext-for-your-organisation)
- **P0 · Privacy-compliance** — Privacyconvenant **4.0** + Model Verwerkersovereenkomst **4.0**
  (de "3.0" uit eerdere stukken is verouderd). MVO tekenen, Bijlagen 1-4, beveiligingsbijlage 2
  via ROSA, DPIA-medewerking (art. 9.1c MVO). Verkoop-blokkade.
  [privacyconvenant.nl](https://www.privacyconvenant.nl/downloads/) · [SIVON](https://sivon.nl/dpia-leveranciersinformatie/)
- **P1 · Micro-credentials/badges per module** — Google's lerarentraining (via ISTE+ASCD) doet dit.
- **P1 · Data-residency** — Azure OpenAI **EU Data Zones** (`DataZoneStandard`). Let op:
  residency ≠ soevereiniteit (CLOUD Act). [Azure](https://azure.microsoft.com/en-us/blog/announcing-the-availability-of-azure-openai-data-zones-and-latest-updates-from-azure-ai/)

Open (geen overlevende claims — branche-standaard, niet als feit te brengen): adaptieve leerpaden,
spaced repetition, gamification, content-authoring voor scholen, meertaligheid, PWA/offline, WCAG.

---

## 3 · Antwoordcontrole — open antwoorden betrouwbaar + deterministisch beoordelen (DEEL B)

**Probleem (3-0):** een kale LLM-jury heeft systematische biases (verbosity, position,
self-preference, concreteness, preference-leakage) en bij een closed-source API is er lage
reproduceerbaarheid (model kan achter de API wijzigen).

**Aanbevolen pijplijn (elk onderdeel geverifieerd):**
1. **Rubric + referentie-antwoord in de prompt** ("rule-augmented prompting") — grootste hefboom.
2. **0-5 scoreschaal** — sterkste alignment met mensen (ICC 0.853 vs 0-10's 0.805). [2601.03444](https://arxiv.org/pdf/2601.03444)
3. **JSON-schema-constrained output** — score per criterium + onderbouwing.
4. **temperature = 0**. Nuance: temp 0.1-1.0 verandert alignment nauwelijks — **schaal-kalibratie
   domineert over decoding-randomness**. Energie in rubrics, niet in temp-tuning.
5. **GradeRAG (fase 2):** expert-voorbeeldantwoorden ophalen en meegeven → tot +21.8% op gpt-4o-mini
   temp=0 (kleine testset n=124). [EDM2025](https://educationaldatamining.org/EDM2025/proceedings/2025.EDM.short-papers.81/index.html)
6. **Mens-in-de-lus / formatief framen:** absolute overeenkomst blijft beperkt (Kappa 0.000-0.331).
   Scores zijn feedback, geen cijfer.

Niet overgenomen (sneuvelde verificatie): multi-agent "AutoSCORE"-decompositie (abstain),
"pairwise is positioneel stabieler" (gerefuteerd 1-2).

Bronnen: [2411.15594v6](https://arxiv.org/html/2411.15594v6) · [2411.16594](https://arxiv.org/pdf/2411.16594) ·
[2601.03444](https://arxiv.org/pdf/2601.03444) · [EDM2025/GradeRAG](https://educationaldatamining.org/EDM2025/proceedings/2025.EDM.short-papers.81/index.html)

---

## 4 · Wat is geïmplementeerd (16 juni 2026)

Deterministische rubric-scoring op de **writeblock**-coach (de open-antwoord-route die in alle
diepteles-stappen zit), in lijn met §3:

- **`api/src/functions/coach.js`** — `writeblock`-mode herschreven naar rubric-scorer:
  `temperature: 0` (scoring-modes), 0-5 per criterium met onderbouwing, eerbiedigt een meegegeven
  `context.rubric` (vergrendelt namen + volgorde) en `context.referenceAnswer` (gold standard);
  zonder rubric leidt het model 3-5 criteria af uit de stap-context. Strikte server-validatie
  (clamp 0-5, namen uit de rubric, afgeleide totaalband sterk/op weg/nog dun).
- **`src/lib/aiClient.js`** — geeft `scores` + `overall` door.
- **`src/components/lesson-actions.jsx`** — `InlineCheckPanel` toont 0-5 pips per criterium +
  onderbouwing + totaalband; valt terug op de oude ja/deels/nee bij oudere responses.
  Disclaimer aangepast: "Deterministische rubric-score (temp 0). Formatief bedoeld."
- **`src/pages/Lesson.jsx`** + **`src/data/lessonDetails.js`** — `workspace.rubric` /
  `workspace.referenceAnswer` als dataconventie; twee exemplar-rubrics in les 1.4 (briefing,
  differentiatie) als bewijs van de verankerde route.
- **`src/components/lesson-formats.jsx`** — de rubric-check uitgebreid naar de open antwoorden in
  de format-componenten (voorheen géén AI-check): CasusLab-voorspellingen + wat-kan-AI-matrix,
  CasusBespreking "eigen reactie", ActionPlan-stappen (1.7) en de PromptLab-promptkit. Elk krijgt
  een afgeleide rubric uit de eigen stap-context (titel/body/perspectieven), of een verankerde
  rubric als die in de data staat.

**Dekking nu:** elke substantiële open-antwoord-writeblock op het platform heeft een
deterministische rubric-check (diepteles-stappen + CasusLab + CasusBespreking + ActionPlan +
PromptLab). Peer-feedback-velden (collega's woorden, niet die van de docent) bewust niet.

**Model geverifieerd:** coach draait op Azure OpenAI `oai-praktijklab` → `gpt-4o-mini` (2024-07-18),
GlobalStandard, status Succeeded. Migratiedoel beschikbaar: `gpt-5-mini` (2025-08-07) staat al in
de subscription.

### Vervolg (nog niet gedaan)
- Verankerde rubrics + referentie-antwoorden voor álle diepteles-stappen (fan-out, adversarieel
  geverifieerd: referentie moet zijn eigen rubric 5/5 halen, criteria moeten uit de les te halen zijn).
- GradeRAG: expert-voorbeeldindex via de bestaande `text-embedding-3-small`-deployment.
- Feature-backlog §2 (SURFconext/LTI, MVO 4.0, badges, EU Data Zones).
- Curriculum §1 (nieuwe modules + paden-feature).
