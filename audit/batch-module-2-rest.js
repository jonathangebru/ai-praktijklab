// Batch Module 02 — vijf resterende lessen op nieuwe standaard.
// Aangemaakt: 29 mei 2026
// Te mergen in src/data/lessonDetails.js.
//
// Lessen:
//   2.4 vibe-coding        · diepteles
//   2.6 debuggen-met-ai    · diepteles
//   2.7 prototypen-itereren · diepteles
//   2.8 beoordelen-met-ai  · casusbespreking
//   2.9 praktijkopdracht-2 · praktijkopdracht
//
// Totaal woordental in dit bestand (incl. veld-keys, voorbeelden en commentaar):
// ~20.000 woorden over alle lessen samen (gemeten met `wc -w`).
// Geschatte leesinhoud (alleen prozavelden voor de docent): ~13.500 woorden.
//
// Referenties:
//   - Schema-conventies: audit/batch-module-1.js (entries "wat-is-ai", "prompting-voor-docenten",
//     "differentiatie-feedback", "toetsing-integriteit", "praktijkopdracht-1")
//   - Diepteles gouden standaard: src/data/lessonDetails.js entry "lesvoorbereiding" (les 1.4)
//   - Toon Module 02: audit/batch-module-2.js (ai-geletterdheid, programmeerdidactiek,
//     ai-assisted-development)
//   - Bronnenraamwerk: audit/audit-v1.md (Npuls Toetsing 2024, UNESCO 2024, DigCompEdu,
//     Kennisnet 2025, OECD 2026, Darling-Hammond 2017, Long & Magerko 2020).
//
// AVG-bewust: alle scenario's gebruiken generieke schoolomschrijvingen en fictieve klasomvang.
// Promptvoorbeelden: nieuw, niet hergebruikt uit eerdere lessen.
// Veldnamen: prefixen "vibe-", "debug-", "proto-", "beoord-", "po2-" om botsing te voorkomen.

export const batchModule2Rest = {
  /* ────────────────────────────────────────────────────────────────────────
   *  LES 2.4 — Vibe coding: kansen en risico's · Diepteles
   *
   *  Opbouw:
   *  - Aanleiding: vier teams leveren werkende prototypes — wat heb je gezien?
   *  - Concept: vibe coding = LEGO-prototype, geen bouwwerk
   *  - 6 stappen: definitie expliciet · zelf bouwen · routekaart · opdracht
   *    herontwerpen · vakkenmerken · sectie-afspraak
   *  - 4 worked examples: vibe-prototype-prompt, definitie voor klas,
   *    beslis-routekaart, herontworpen opdracht
   *  - Vakvariaties: software, web design, embedded/IoT, data, game dev,
   *    ICT-management
   *  - Valkuilen: vibe als project-werkwijze, feedback alleen op output,
   *    grote app vibegen, vibe in toetsmoment, geen leerbewijs
   * ──────────────────────────────────────────────────────────────────────── */

  "vibe-coding": {
    format: "diepteles",

    summary:
      "Vibe coding — coderen op intentie met een agent, supersnel en zonder regel-voor-regel begrip — is sterk voor prototypes en didactisch riskant als enige werkwijze. In deze les maak je de definitie expliciet, bouw je zelf één vibe-prototype, ontwerp je een beslis-routekaart voor wanneer wel en wanneer niet, en herontwerp je één bestaande opdracht zodat vibe coding óf productief is óf juist niet kan.",

    duration: {
      total: "90-105 minuten",
      blocks: [
        { label: "Aanleiding", min: 10 },
        { label: "Conceptueel kader", min: 14 },
        { label: "Definitie expliciet", min: 10 },
        { label: "Zelf een vibe-prototype bouwen", min: 18 },
        { label: "Beslis-routekaart ontwerpen", min: 14 },
        { label: "Bestaande opdracht herontwerpen", min: 14 },
        { label: "Sectie-afspraak voorbereiden", min: 8 },
        { label: "Reflectie", min: 8 },
      ],
    },

    opening: {
      eyebrow: "Aanleiding",
      aanleiding: `Donderdagmiddag in een mbo niveau 4-projectklas software, vier teams, eindpresentaties van een tweeweekse sprint. Drie teams demonstreren een werkende web-app: log-in, drie schermen, data die opslaat in een echte database. Vragen uit de klas — werkt soepel, niemand crasht. Tijdens de Q&A vraag je hoe het achter de schermen werkt. Eén student wijst naar Cursor: 'We hebben de agent gebriefd, hij heeft de boel gegenereerd, we hebben twee dingen aangepast die niet werkten.' Je vraagt waar de authenticatie wordt afgehandeld. Stilte. Iemand gokt: 'In een API ergens?'

Geen plagiaat, geen overtreding, geen luiheid. Vier studenten die in twee weken iets hebben gebouwd dat technisch beter is dan jij vier jaar geleden in vier weken bouwde. En tegelijk geen van vier kan uitleggen welke beslissing in welke functie zit. Voor het demo-doel — laten zien dat je iets kunt bouwen — was vibe coding sterk. Voor het leerdoel — algoritmisch ontwerpen — was het een blind spoor.

Deze les pakt die tweedeling beet. Vibe coding is geen vijand en geen ideaal. Het is een gereedschap dat in de ene context waarde toevoegt en in de andere context juist leren in de weg zit. Je werkt aan vier dingen: een werkdefinitie waar geen ruimte zit voor 'naja, een beetje vibe-achtig', een eigen vibe-prototype dat je het gevoel geeft van binnenuit, een beslis-routekaart die je sectie kan overnemen, en één concrete opdracht die je herontwerpt zodat de uitkomst zegt wat je wilde weten.`,
      waaromNu: `OECD's Digital Education Outlook 2026 noteert dat agentic AI-tools sinds 2025 in mbo- en hbo-werkprocessen zijn doorgedrongen. *"Generative coding agents are increasingly used by students before formal curricular adaptation."* (OECD, 2026) Zonder didactische routekaart zit elke docent in de positie van die vier teams: technisch werk dat het leerdoel mist.`,
    },

    conceptueel: {
      eyebrow: "Conceptueel kader",
      intro: `Vibe coding is werken op intentie zonder regel-voor-regel begrip. Je geeft een agent een doel ('bouw een appje dat reserveringen bijhoudt'), de agent kiest architectuur, libraries, datamodel en implementatie, jij accepteert of corrigeert op output-niveau. Je voelt dat het werkt — vandaar 'vibe' — maar je redenering achter elke functie is niet expliciet. Tot 2024 was dit nauwelijks mogelijk; sinds Cursor agents, v0, Lovable, bolt.new en Claude Code is het routine voor wie een goede prompt schrijft.

Het is verleidelijk om dit als luiheid te zien. Dat is een denkfout. Vibe coding produceert echte snelheidswinst voor een specifieke klasse problemen: prototypes om iets uit te proberen, throwaway-code, demo's voor een gesprek, MVP's voor een opdrachtgever. Voor die context is vibe coding niet luiheid maar professionalisme — een ervaren ontwikkelaar gebruikt het bewust, weet wanneer het stopt, en stapt over naar een andere werkwijze zodra het prototype het stadium 'iets uit te proberen' verlaat.

De didactische valkuil zit niet in vibe coding zelf. Hij zit in vibe coding als enige werkwijze tijdens een leerproces. Als een student vibe-codet vóór hij conceptueel begrijpt wat een loop, een class of een dataflow doet, leert hij iets in plaats van wat hij denkt te leren. Hij leert 'AI vragen om dingen' en niet 'het probleem ontleden, structuur ontwerpen, edge cases zien'. Dat onderscheid is voor jouw vakdoel — algoritmisch denken — vaak hét kerngat. Een werkbouwwerk staat op fundering die je hebt ontworpen. Een LEGO-toren staat op klikjes die elke 6-jarige kan loslaten.

De praktische vertaling: bepaal vóór elke opdracht of het uitkomstdoel een prototype is (vibe mag, gericht inzetten) of een leerbewijs (vibe is dan tegenkracht). Voor leerbewijs heb je werkvormen nodig die expliciet vraag stellen naar denken — papier en bord, mondelinge verantwoording, live coding, architectuurschets. Voor prototype-doelen heb je structuur nodig die voorkomt dat de student vibe coding gaat verwarren met software engineering — een wegwerp-status expliciet maken, een ander toetsmoment plannen voor dieper begrip, en aan het einde van de prototype-fase een reflectie eisen op 'wat heb ik niet geleerd door dit zo te doen'.`,
      mentalModel: {
        naam: "Vibe coding = LEGO-prototype, geen bouwwerk",
        beschrijving: `Met LEGO bouw je in twintig minuten een herkenbaar huis: dak, deur, ramen, klopt visueel. Iedereen ziet wat het wil voorstellen. Maar laat het LEGO-huis vallen of vraag of de garage er aan vast kan — de hele constructie valt uit elkaar. Dat is geen ontwerpfout van LEGO, dat is wat LEGO is: snel, herbruikbaar, perfect voor 'laat eens zien wat je bedoelt'. Slecht voor 'is dit veilig om in te wonen'. Vibe coding doet hetzelfde met code. Briljant voor 'ik wil iets klikbaars in een uur'. Riskant voor 'dit moet productie halen' of 'hier moet jij van leren'.`,
      },
      kernbegrippen: [
        {
          term: "Vibe coding",
          uitleg: "Werken op intentie met een agent zonder regel-voor-regel begrip. Output staat, redenering blijft impliciet bij de tool. Sterk voor prototypes, riskant als enige werkwijze in leerproces.",
        },
        {
          term: "Wegwerp-status",
          uitleg: "Expliciete afspraak dat code een prototype is en niet verder gaat. Zonder die status sluipt vibe-code de productiefase in zonder dat iemand de redenering ooit heeft uitgeschreven.",
        },
        {
          term: "Algoritmisch denken",
          uitleg: "Probleem ontleden, structuur ontwerpen, edge cases zien. Dit is het kerngebied dat een vibe-only werkwijze niet aantoont — en vaak juist verbergt.",
        },
        {
          term: "Beslis-routekaart",
          uitleg: "Vooraf zichtbare regel waar in een module vibe mag, waar het juist niet mag, en welke verantwoording erbij hoort. Geeft studenten houvast en jou een toetsbaar kader.",
        },
        {
          term: "Verantwoordingsgesprek",
          uitleg: "Korte mondelinge of schriftelijke toelichting waarin de student onderscheidt tussen eigen denkwerk en AI-bijdrage. Onontbeerlijk wanneer vibe coding is toegestaan en je toch leerbewijs wil zien.",
        },
      ],
    },

    learningGoals: [
      "Je formuleert in maximaal 35 woorden wat vibe coding is voor jouw vak en niveau, met onderscheid van 'AI-assisted development'.",
      "Je doorloopt zelf één vibe-prototype van briefing tot eerste werkende versie en benoemt waar jouw vakervaring de doorslag gaf.",
      "Je ontwerpt een beslis-routekaart die per opdrachttype zegt of vibe coding mag, moet of niet kan — bruikbaar voor je hele sectie.",
      "Je herontwerpt één bestaande opdracht zodat vibe coding óf productief is met expliciete reflectie, óf onmogelijk wordt zonder begrip.",
    ],

    scenario: {
      title: "Werksituatie",
      context:
        "Je geeft module 'projectontwikkeling 2' aan een derdejaars mbo niveau 4 software-klas van 24 studenten. De studenten gebruiken sinds vorig schooljaar Cursor, sommigen ook v0 of bolt.new. Vorige sprint leverden drie van zes teams een werkend prototype dat ze niet konden uitleggen. Voor het komende semester wil je vóór week één duidelijk maken waar vibe coding ruimte krijgt en waar niet.",
      role: "Docent · mbo niveau 4 software-development (of vergelijkbaar hbo informatica)",
      tools: "Cursor agents · v0 of bolt.new · papier voor routekaart-schets · eigen modulebeschrijving",
    },

    steps: [
      {
        title: "Definitie expliciet — geen ruimte voor 'een beetje vibe-achtig'",
        body: "Schrijf in maximaal 35 woorden wat vibe coding is in jouw vak. Onderscheid van 'AI-assisted development' (waar je wel regel-voor-regel meekijkt). Een definitie die in je sectievergadering twee verschillende interpretaties oplevert, is geen werkdefinitie.",
        time: "10 min",
        voorbeeld:
          "Vibe coding = werken op intentie met een agent zonder regel-voor-regel begrip; output is leidend, redenering impliciet. Verschilt van AI-assisted development omdat daar het denkproces zichtbaar blijft (je leest mee, schrijft mee, beoordeelt elke functie).",
        workspace: {
          field: "vibe-definitie",
          label: "Mijn werkdefinitie van vibe coding (max 35 woorden)",
          shortLabel: "Vibe-definitie",
          hint: "Max 35 woorden · expliciet onderscheid met AI-assisted development · vermijd jargon",
          placeholder:
            "Vibe coding = ... [wat het is] ... Verschilt van AI-assisted development omdat ... [waar de grens ligt]",
          rows: 4,
        },
      },
      {
        title: "Bouw zelf een vibe-prototype — voel waar jouw kennis sluipt",
        body: "Brief een agent in twee zinnen op een mini-toepassing uit je vakgebied. Werk in 20 minuten naar iets klikbaars zonder de code regel-voor-regel te lezen. Noteer onderweg: op welke momenten gaf jouw bestaande vakkennis de doorslag (een keuze die je intuïtief maakte, een fout die je herkende, een naam die je beter wist)? Dat is de kennis die jouw studenten waarschijnlijk niet hebben.",
        time: "18 min",
        voorbeeld:
          "Briefing: 'Bouw een Next.js app waar gebruikers gymlessen kunnen reserveren — drie schermen, log-in, geen betaling.' Agent levert iets bruikbaars. Onderweg: ik koos voor server-side rendering omdat ik weet dat client-side voor reserveringen latency-issues heeft; ik corrigeerde de variabelenaam 'time' naar 'startTime' omdat 'time' een reserved keyword-conflict kan geven; ik herkende dat de gegenereerde middleware naïef was en voegde een eenvoudige rate-limit toe.",
        workspace: {
          field: "vibe-prototype-log",
          label: "Mijn vibe-prototype-logboek",
          shortLabel: "Prototype-log",
          hint: "Briefing · drie momenten waar mijn vakkennis sloop · wat ik zou hebben gemist zonder ervaring",
          placeholder:
            "Briefing aan agent: ...\nMoment 1 (vakkennis sloop): ...\nMoment 2: ...\nMoment 3: ...\nWat een eerstejaars zou hebben gemist: ...",
          rows: 8,
        },
      },
      {
        title: "Beslis-routekaart — wanneer wel, wanneer niet, wanneer mits",
        body: "Maak een kaart met drie kolommen voor jouw module: vibe mag (snelle prototypes, demo's), vibe mag mits (met verantwoording achteraf, in projecten met expliciet leerblok over architectuur), vibe mag niet (eerste oefenweken nieuwe concepten, toetsmomenten, kerncode in eindproject). Drie tot vier voorbeelden per kolom.",
        time: "14 min",
        voorbeeld:
          "Vibe mag — discovery-sprints week 1, presentatie-mockups, intake-prototypes voor opdrachtgever. Vibe mag mits — projectfase 2 (met architectuur-schets vooraf), portfolio-werk (met technisch logboek), team-experimenten (met mondelinge toelichting). Vibe mag niet — eerste vier weken nieuwe taal/framework, alle toetsmomenten, kerncode eindproject (auth, datalogica, security).",
        workspace: {
          field: "vibe-routekaart",
          label: "Mijn beslis-routekaart voor deze module",
          shortLabel: "Routekaart",
          hint: "Drie kolommen · 3-4 voorbeelden per kolom · concreet (welke opdracht, welke week, welk leerdoel)",
          placeholder:
            "Vibe mag — ...\n  - voorbeeld 1: ...\n  - voorbeeld 2: ...\n  - voorbeeld 3: ...\n\nVibe mag mits — (mits ...)\n  - voorbeeld 1: ...\n  - voorbeeld 2: ...\n\nVibe mag niet — ...\n  - voorbeeld 1: ...\n  - voorbeeld 2: ...",
          rows: 12,
        },
      },
      {
        title: "Herontwerp één opdracht — vibe productief of onmogelijk maken",
        body: "Pak één bestaande opdracht uit je module. Bepaal vooraf: wil ik dat vibe coding hier waarde toevoegt (snelheid voor prototype) of wil ik dat het hier niet werkt (begrip vereist)? Herschrijf de opdracht zodat de uitkomst zegt wat jij wilde meten. Voor 'productief': eis een architectuur-schets vóór code en een mondelinge toelichting na inlevering. Voor 'onmogelijk': eis dat de student één componentwijziging live demonstreert die alleen werkt als hij de structuur snapt.",
        time: "14 min",
        workspace: {
          field: "vibe-opdracht-herontwerp",
          label: "Mijn herontworpen opdracht",
          shortLabel: "Opdracht-herontwerp",
          hint: "Doel · oude opdracht · keuze (vibe productief of onmogelijk) · nieuwe opdracht · meetmoment",
          placeholder:
            "Originele opdracht: ...\nDoel dat ik wil meten: ...\nKeuze: vibe ... (productief / onmogelijk)\nHerontworpen opdracht: ...\nMeetmoment dat aantoont of dat is gelukt: ...",
          rows: 9,
        },
      },
      {
        title: "Sectie-afspraak — één concrete vraag voor je vergadering",
        body: "Formuleer één beslisbaar voorstel voor de eerstvolgende vergadering. Niet 'wat doen we met vibe coding' (verkennend, eindeloos) maar 'spreken we af dat in modules 2.1 en 2.2 geen vibe coding wordt geaccepteerd in inleverwerk, en in modules 3.x wel mits architectuur-schets en mondelinge toelichting — ja of nee?'.",
        time: "8 min",
        workspace: {
          field: "vibe-sectie-afspraak",
          label: "Mijn ja/nee-voorstel voor de sectie",
          shortLabel: "Sectie-voorstel",
          hint: "Ja/nee-formulering · welke modules · welke maatregel · einddatum beslismoment",
          placeholder:
            "Voorstel: ...\nIn welke modules: ...\nMaatregel: ...\nBeslismoment: ...",
          rows: 5,
        },
      },
      {
        title: "Plan een experiment voor het komende blok",
        body: "Wijs één opdracht aan waar je je nieuwe routekaart het komende blok test. Schrijf op wat je verwacht (welke groep studenten gaat door welke vakvalkuil), wanneer je evalueert en welke vraag je dan beantwoordt. Een experiment zonder einddatum is wishful thinking.",
        time: "6 min",
        workspace: {
          field: "vibe-experiment",
          label: "Mijn experiment voor het komende blok",
          shortLabel: "Experiment",
          hint: "Welke opdracht · verwachting · evaluatiemoment · wat ik dan check",
          placeholder:
            "Opdracht: ...\nMijn verwachting: ...\nEvaluatiemoment: ...\nVraag die ik dan beantwoord: ...",
          rows: 5,
        },
      },
    ],

    workedExamples: [
      {
        title: "Vibe-prototype-prompt voor een discovery-sprint",
        prompt:
          "Brief een agent om in 20 minuten een werkend prototype te bouwen van een appje waarmee een sportschool intakeformulieren digitaliseert. Vermijd over-engineering: geen authenticatie, geen database, alleen drie schermen plus state-in-memory. Status: wegwerp, klaar voor demo aan opdrachtgever. Schrijf de prompt in maximaal 80 woorden.",
        voorbeeldOutput: `Bouw met Next.js en Tailwind een mini-app voor sportschool-intakeformulieren. Drie schermen: (1) intake-vragenlijst met 5 velden, (2) overzicht ingevulde antwoorden, (3) bedankt-scherm. State in memory (geen DB, geen auth). Houd componentstructuur klein, gebruik shadcn/ui, geen formvalidatie behalve required. Status: prototype voor demo over twee uur — niet productie. Voeg een kort README toe over wat je hebt gegenereerd en welke shortcuts je nam.`,
        commentaar:
          "Sterke vibe-briefing omdat 'wegwerp' en 'twee uur' expliciet zijn — dat houdt de agent uit de neiging om enterprise-architectuur te schrijven. De eis 'README met shortcuts' dwingt de agent om te benoemen waar het bewust heeft vereenvoudigd. Verbeterpunt voor klassikaal gebruik: laat de student in deze README ook noteren wat een 'echte' versie zou vragen — dan oefen je naast vibe coding ook reflectie op de wegwerp-status.",
        tryItYourself: {
          field: "vibe-we-prototype-prompt",
          label: "Schrijf jouw vibe-briefing voor één wegwerp-prototype",
          shortLabel: "Eigen vibe-briefing",
          hint: "Max 80 woorden · expliciete wegwerp-status · vakcontext · README of toelichting eisen",
          example:
            "Bouw met [stack] een mini-app voor [vak-context]. Schermen: ... State: ... Status: prototype voor [demo-moment]. Eis README/toelichting over [reflectie-doel].",
        },
      },
      {
        title: "Werkdefinitie voor je klas (35 woorden)",
        prompt:
          "Schrijf in maximaal 35 woorden een werkdefinitie van vibe coding voor een mbo niveau 4 software-klas van derde jaar. Maak het onderscheid met AI-assisted development expliciet. Eindig met één zin over wat dat voor hun werk betekent.",
        voorbeeldOutput: `Vibe coding is bouwen op intentie met een agent zonder regel-voor-regel mee te lezen — perfect voor prototypes, beperkt als leermomentum. AI-assisted development laat het denkproces zichtbaar. Voor jullie werk betekent dit: kies bewust per opdracht welke modus past.`,
        commentaar:
          "Sterk omdat 'regel-voor-regel mee te lezen' het mechanisme correct dekt zonder jargon. Sterk omdat 'leermomentum' een concept benoemt dat studenten herkennen (snelheid versus opbouw). Verbeterpunt: 'kies bewust per opdracht' is goed maar abstract — voor jouw klas maak je het concreter door één regel toe te voegen: 'tijdens projectfase 1 en toetsmomenten vibe coding niet gebruiken, in discovery-sprints juist wel'. Daarmee verbindt je definitie zich met je beslis-routekaart in stap 3.",
        tryItYourself: {
          field: "vibe-we-definitie-klas",
          label: "Schrijf jouw werkdefinitie voor jouw klas",
          shortLabel: "Eigen klas-definitie",
          hint: "Max 35 woorden · onderscheid AI-assisted · slotzin met praktische consequentie",
          example:
            "Vibe coding is ... — sterk voor ... , beperkt voor ... AI-assisted development verschilt omdat ... Voor jullie werk: ...",
        },
      },
      {
        title: "Beslis-routekaart als één-paginakaart",
        prompt:
          "Maak een ééne-pagina beslis-routekaart voor docenten in een mbo software-opleiding waarin per opdrachttype zichtbaar is wat is toegestaan met vibe coding. Drie kolommen (mag, mag mits, mag niet), drie tot vier voorbeelden per kolom. Houd onder de 220 woorden zodat het op één A4 past.",
        voorbeeldOutput: `Vibe coding mag — discovery-sprints week 1-2, presentatie-mockups voor stakeholders, throwaway-experimenten in studielab, hackathon-inzendingen.

Vibe coding mag mits — projectfase 2 mits architectuur-schets op papier vooraf, portfolio-werk mits technisch logboek (welke keuzes gemaakt, welke shortcuts genomen), team-experimenten mits mondelinge toelichting van vijf minuten per teamlid.

Vibe coding mag niet — eerste vier weken nieuwe taal of framework (basis-vocabulaire opbouwen), alle toetsmomenten (schriftelijk en mondeling), kerncode in eindproject die security raakt (authenticatie, autorisatie, payment), code die zonder verdere review productie ingaat in BPV-context, sectie-overstijgende projecten waar afhankelijke vakken bouwen op de architectuur.

Versie 1.0 · gedeeld op sectievergadering ... · evaluatie december ...`,
        commentaar:
          "Sterk omdat de kaart een versie en evaluatiedatum heeft — dat maakt 'm levend. Sterk omdat 'mag mits' expliciete verantwoordingseisen heeft (architectuur-schets, logboek, mondelinge toelichting) — anders zou 'mits' verworden tot 'doe maar'. Verbeterpunt: voeg per categorie de redenering in één zin toe ('omdat hier snelheidswinst centraal staat / omdat hier denkbewijs centraal staat / omdat hier afhankelijke leerdoelen of risico's spelen'). Dat helpt collega's de kaart te begrijpen wanneer ze 'm gaan toepassen op nieuwe opdrachten.",
        tryItYourself: {
          field: "vibe-we-routekaart",
          label: "Schrijf de beslis-routekaart voor jouw opleiding",
          shortLabel: "Eigen routekaart",
          hint: "Drie kolommen · 3-4 voorbeelden per kolom · max 220 woorden · versie + evaluatiedatum",
          example:
            "Vibe coding mag — ...\nVibe coding mag mits — (mits ...)\nVibe coding mag niet — ...\nVersie ... · evaluatie ...",
        },
      },
      {
        title: "Herontworpen opdracht — vibe productief maken",
        prompt:
          "Herschrijf een bestaande opdracht 'bouw een dashboard dat openbaar OV-data toont' zodat vibe coding mag, maar het leerbewijs voor algoritmisch denken alsnog zichtbaar wordt. Voeg twee verantwoordingsmomenten toe en één meetmoment dat begrip van architectuur aantoont.",
        voorbeeldOutput: `Opdracht: bouw een dashboard dat openbaar OV-data toont (treintijden, vertragingen, drukte). Werkwijze: vibe coding toegestaan tijdens de prototypefase.

Verantwoordingsmoment 1 (week 1, vóór code): inlevering architectuur-schets op één A4 — welke datasources, welke caching-strategie, hoe ga je om met API-rate-limits, welke fallback bij downtime. Wordt beoordeeld vóór studenten één regel code schrijven; krijg je geen goedkeuring, dan opnieuw.

Verantwoordingsmoment 2 (week 3, na prototype): mondelinge toelichting van zeven minuten. Drie vragen: (1) welk onderdeel van jouw architectuur is anders dan wat de agent voorstelde en waarom, (2) waar zou jouw dashboard breken bij honderd keer zoveel verkeer, (3) demonstreer live een wijziging in de caching die het dashboard sneller maakt.

Meetmoment 3 (week 4, beoordeling): rubric weegt architectuur-keuzes (40%) en functionele werking (30%) en code-kwaliteit (30%) — niet de productieve snelheid zelf.`,
        commentaar:
          "Sterk omdat vibe coding nadrukkelijk wordt toegestaan in de prototype-fase maar de beoordeling niet primair gaat over snelheid of werking. Sterk omdat de architectuur-schets vóór code komt — dat dwingt het denken naar voren. Verbeterpunt: vraag 3 in het mondelinge moment (live wijziging in de caching) is sterk; voeg eventueel een alternatieve vraag toe voor studenten met hoge presentatie-angst (bijvoorbeeld 'leg met pen-en-papier uit waar in jouw dashboard een bottleneck zou ontstaan en wat je zou wijzigen'). Belangrijk: zonder rubric-aanpassing zakt het herontwerp in elkaar — studenten worden beoordeeld op wat je meet.",
        tryItYourself: {
          field: "vibe-we-herontwerp",
          label: "Herontwerp één eigen opdracht (vibe productief of onmogelijk)",
          shortLabel: "Eigen herontwerp",
          hint: "Kies vibe-productief of vibe-onmogelijk · twee verantwoordingsmomenten · één meetmoment · rubric-aanpassing",
          example:
            "Opdracht: ...\nKeuze: vibe ... (productief / onmogelijk)\nVerantwoordingsmoment 1: ...\nVerantwoordingsmoment 2: ...\nMeetmoment: ...\nRubric-aanpassing: ...",
        },
      },
    ],

    vakvariaties: [
      {
        vak: "Software-development · mbo niveau 4",
        body: "Vibe coding is hier dagelijkse praktijk via Cursor en agentic flows. Geef ruimte in discovery- en prototypefase, sluit het dicht in toetsmomenten en eindproject-kerncode. Stem af met BPV-bedrijven: in welke bedrijfsprocessen is vibe coding professioneel en in welke risicovol?",
      },
      {
        vak: "Web design · hbo en mbo creatief",
        body: "Tools als v0 en Lovable maken vibe coding visueel sterk. Risico hier: studenten leveren strakke UI's zonder begrip van accessibility of responsive logica. Routekaart: vibe mag voor visuele iteraties, mag mits voor production-ready werk (met accessibility-audit eisen), mag niet voor module accessibility en performance-optimalisatie.",
      },
      {
        vak: "Embedded / IoT · hbo en mbo techniek",
        body: "Vibe coding heeft hier extra risico: gegenereerde firmware kan op hardware crashen of veiligheidssystemen aantasten. Routekaart: vibe alleen op simulatie-niveau (Wokwi, simulators), nooit direct op hardware in onderwijscontext. Verantwoordingsmoment moet altijd 'wat zou er gebeuren als deze code mis gaat' bevatten.",
      },
      {
        vak: "Data engineering en data science · hbo",
        body: "Vibe coding is sterk voor exploratieve notebooks en wegwerp-analyses, riskant voor pipelines die productiedata raken. Routekaart: vibe mag in EDA-fase en hypothese-vorming, mag mits in pipeline-prototype (met data-contract-schets vooraf), mag niet bij modellen die naar productie gaan zonder onafhankelijke validatie.",
      },
      {
        vak: "Game development · mbo en hbo",
        body: "Vibe coding levert sterk werk in boilerplate en herhalende systemen, zwak in gameplay-tuning en player-experience-design. Routekaart: vibe mag voor inventory/UI-systemen, mag mits voor enemy AI of progression-systemen (met design-doc vooraf), mag niet voor core-gameplay-loop en feel-tuning — daar zit smaak en iteratie die de student moet voelen.",
      },
      {
        vak: "ICT-management / opleidingscoördinator",
        body: "Voor coördinatoren is de routekaart geen lesplan maar opleidingsbeleid. Hoe verschuift vibe-ruimte over de drie of vier jaar? Eerstejaars meer 'mag niet', laatstejaars meer 'mag mits'. Stem af met BPV-coördinatoren wat in de praktijk acceptabel is en wat onderwijsstandaard moet zijn.",
      },
    ],

    valkuilen: [
      {
        titel: "Vibe als projectwerkwijze zonder kerngevoel",
        watGebeurtEr:
          "Studenten laten een team-prototype vibe-genereren, één doet de presentatie, niemand kan de hoofdlogica uitleggen. De groep heeft samengewerkt aan niets — vier studenten zaten erbij maar deden geen denkwerk. Daarmee verdampt het projectonderwijs-doel.",
        fix: "Eis bij projectinlevering een 'eigenaarsstrook' per teamlid: welk onderdeel begrijp jij zo goed dat je het op de whiteboard kunt uitleggen. Niet hetzelfde voor alle teamleden. Levert vier verschillende kennisgebieden per project.",
      },
      {
        titel: "Feedback alleen op output, niet op proces",
        watGebeurtEr:
          "Je beoordeelt het werkende prototype en geeft een hoog cijfer. Een week later blijkt geen van de studenten kan uitleggen waarom de auth-flow daar zit. Je hebt het LEGO beoordeeld, niet het bouwwerk-begrip.",
        fix: "Voeg een procesmoment toe aan elke beoordeling: architectuur-schets vóór code, verantwoordingsgesprek na inlevering. Cijfer hangt 50/50 op product en proces. Begin daar in week één mee, niet pas bij eindopdracht.",
      },
      {
        titel: "Grote app vibegen — vibe buiten zijn schaal gebruiken",
        watGebeurtEr:
          "Een team probeert een driemaands-eindopdracht in twee weken te vibe-coden. Werkt voor twee schermen, breekt bij integratie met externe API's en database-migraties. Studenten lopen vier weken vast op problemen die ze nooit hebben ontworpen.",
        fix: "Maak de wegwerp-status van vibe expliciet. Voor opdrachten boven een bepaalde schaal (bijvoorbeeld meer dan 3 schermen of meer dan 1 datadomein) is vibe alleen toegestaan in prototypefase, niet als eindwerkwijze. Routekaart in stap 3 vangt dit op.",
      },
      {
        titel: "Vibe in toetsmoment — onbedoeld toelaten",
        watGebeurtEr:
          "Je vergeet expliciet te benoemen dat vibe niet mag tijdens een toetsmoment. Studenten leveren een vibe-prototype in voor een formatieve toets bedoeld om algoritmisch denken te toetsen. De score zegt niets over hun begrip.",
        fix: "Op elk toetsblad één regel: AI-toolregime ja/nee/mits. Standaardafspraak in module: bij toetsmomenten is vibe coding niet toegestaan — andere AI-tools wel of niet specificeren. Maak dat expliciet bij elke instructie.",
      },
      {
        titel: "Geen leerbewijs aan einde van prototypefase",
        watGebeurtEr:
          "Studenten leveren prototype, vinken 'klaar' aan, gaan door naar het volgende blok. Het kortstondige inzicht dat in de vibe-fase wel ontstond, verdampt zonder reflectie.",
        fix: "Verplichte afsluiting van elke vibe-fase: korte schriftelijke reflectie van max 200 woorden op 'welke architectuurkeuzes maakte de agent voor mij' en 'wat zou ik anders doen in een tweede versie zonder vibe'. Maakt de impliciete kennis expliciet.",
      },
    ],

    geoefendSpoor: {
      eyebrow: "Voor de geoefende docent",
      titel: "Bouw een opleidings-roadmap voor vibe coding over drie jaar",
      beschrijving:
        "Heb je de routekaart voor je eigen module rond en wil je verder? Maak met je opleidingsteam een driejarenkaart: in jaar 1 is vibe coding overwegend 'mag niet' (basis-vocabulaire opbouwen), in jaar 2 staat 'mag mits' centraal (verantwoording oefenen, architectuur-schetsen), in jaar 3 schuift de balans naar 'mag' (professionele vibe-discipline). Per overgang formuleer je wat de student dan moet kunnen aantonen. Investering: twee teamvergaderingen van 90 minuten plus drie uur voor de opleidingscoördinator. Opbrengst: een samenhangende lijn waarin studenten leren wanneer vibe coding professioneel gereedschap is en wanneer het denkwerk vervangt.",
      opdracht:
        "Lever vóór de start van het volgende studiejaar een driejaren-roadmap op met per jaar het beslis-routekaart-evenwicht en per overgang wat de student moet aantonen om naar de volgende ruimte te mogen. Deel met opleidingscommissie en BPV-coördinator.",
    },

    eindcriteria: [
      {
        criterium: "Werkdefinitie",
        onder: "Definitie > 50 woorden of verwart vibe coding met AI-assisted development.",
        op: "Max 35 woorden, expliciet onderscheid met AI-assisted development, eindigt met implicatie voor studentwerk.",
        boven: "+ Definitie getest in sectievergadering en bijgesteld na collega-feedback.",
      },
      {
        criterium: "Vibe-prototype-ervaring",
        onder: "Niet zelf gedaan, of zonder onderweg-reflectie.",
        op: "Eén vibe-prototype zelf gebouwd, drie momenten benoemd waar vakkennis de doorslag gaf.",
        boven: "+ Reflectie gedeeld met collega en gebruikt om eerstejaars-blind-spots in routekaart op te nemen.",
      },
      {
        criterium: "Beslis-routekaart",
        onder: "Twee kolommen of generieke voorbeelden zonder vak-context.",
        op: "Drie kolommen, 3-4 vakspecifieke voorbeelden per kolom, redeneerregel per categorie.",
        boven: "+ Routekaart bevat versie + evaluatiedatum en is afgestemd met BPV-coördinator of externe stakeholder.",
      },
      {
        criterium: "Opdracht-herontwerp",
        onder: "Bestaande opdracht overgenomen zonder duidelijke vibe-positie.",
        op: "Opdracht herschreven met expliciete keuze 'vibe productief' of 'vibe onmogelijk' + bijhorend meetmoment.",
        boven: "+ Rubric aangepast zodat beoordeling het denkbewijs weegt, niet alleen output.",
      },
      {
        criterium: "Sectie-afspraak",
        onder: "Verkennend voorstel zonder beslismoment.",
        op: "Ja/nee-formulering, einddatum, welke modules vallen onder welke ruimte.",
        boven: "+ Voorstel afgestemd met opleidingsmanager vóór sectievergadering om kansrijkheid te vergroten.",
      },
    ],

    reflection: [
      "Welk moment in jouw vibe-prototype voelde verleidelijker dan je vooraf had verwacht — en wat zegt dat over waarom studenten het ook doen, óók wanneer jij zegt dat het niet mag?",
      "Welke opdracht in jouw module heb je dit jaar onbewust laten passeren als 'goed werk' terwijl je vermoedt dat vibe coding het denkbewijs heeft verdrongen? Wat zou er moeten veranderen voordat je dat volgende keer wel ziet?",
      "Wat verlies je didactisch als je vibe coding helemaal verbiedt, en wat verlies je beroepsmatig als je het overal toelaat? Hoe vorm jij de tussenpositie zonder dat 'mag mits' verwordt tot 'doe maar'?",
    ],

    checklist: [
      "Werkdefinitie van max 35 woorden geschreven met expliciet onderscheid van AI-assisted development",
      "Eén vibe-prototype zelf gebouwd, met drie momenten waar vakkennis sloop",
      "Beslis-routekaart in drie kolommen klaar met versie + evaluatiedatum",
      "Eén bestaande opdracht herontworpen — vibe productief of onmogelijk gemaakt",
      "Rubric of beoordelingsvorm aangepast zodat denkbewijs telt",
      "Ja/nee-voorstel klaar voor eerstvolgende sectievergadering",
      "Experiment gepland voor komend blok met evaluatiemoment",
      "AVG-check: agents gevoed met fictieve context, geen herleidbare studentgegevens",
    ],

    verderLezen: [
      {
        titel: "Digital Education Outlook 2026",
        bron: "OECD",
        jaar: 2026,
        link: "https://www.oecd.org/content/dam/oecd/en/publications/reports/2026/01/oecd-digital-education-outlook-2026_940e0dd8/062a7394-en.pdf",
        waarom: "Internationaal beeld van agentic AI in onderwijspraktijk — onderbouwt waarom een routekaart nu nodig is.",
      },
      {
        titel: "AI Competency Framework for Teachers — AI Pedagogy",
        bron: "UNESCO",
        jaar: 2024,
        link: "https://www.unesco.org/en/articles/ai-competency-framework-teachers",
        waarom: "Competentie 'AI pedagogy' vraagt expliciet om didactische keuzes per tool-modus — vibe coding is daar een schoolvoorbeeld van.",
      },
      {
        titel: "What is AI Literacy? Competencies and Design Considerations",
        bron: "Long & Magerko · CHI Conference",
        jaar: 2020,
        link: "https://dl.acm.org/doi/fullHtml/10.1145/3313831.3376727",
        waarom: "Vijf vragen waarmee je toetst of een opdracht conceptueel begrip vraagt — bruikbaar voor je herontwerp in stap 4.",
      },
      {
        titel: "Visie op Toetsing en Examinering. Naar AI-bewuste toetspraktijken",
        bron: "Npuls",
        jaar: 2024,
        link: "https://www.npuls.nl/_assets/cdcb37e6-11f7-468f-962b-06fe599a8a23/Visie-op-toetsing-en-examinering-onderbouwing-Npuls.pdf",
        waarom: "Nederlands referentiekader voor toetsing wanneer vibe coding op tafel ligt — vier ankerpunten als check op je herontwerp.",
      },
    ],

    nextLesson: "prompten-voor-software",
  },

  /* ────────────────────────────────────────────────────────────────────────
   *  LES 2.6 — Debuggen en code begrijpen met AI · Diepteles
   *
   *  Opbouw:
   *  - Aanleiding: docent wordt fout-aanwijzer; AI verschuift naar dialogue-curator
   *  - Concept: drie debug-modi (uitleg, hypothese, refactor) + fout-categorisatie
   *  - 6 stappen: fouten categoriseren · vragen aan AI scripten · code regel-voor-
   *    regel laten uitleggen · refactor-voorstellen beoordelen · documenteren · sectie
   *  - 4 worked examples: error-categorisatie, regel-voor-regel uitleg, refactor-
   *    challenge, leerlogboek
   *  - Hands-on legacy-fragment: ongedocumenteerde recursie + N+1 query
   *  - Vakvariaties: software, data, embedded, scripting, frontend
   * ──────────────────────────────────────────────────────────────────────── */

  "debuggen-met-ai": {
    format: "diepteles",

    summary:
      "Debuggen mét AI verschuift jouw rol als docent: van fout-aanwijzer naar dialogue-curator. In deze les categoriseer je vier soorten fouten, oefen je vragen aan AI die conceptueel begrip aantonen, beoordeel je refactor-voorstellen kritisch en bouw je een werkvorm waarin studenten hardop leren bij een agent — niet alleen ervan.",

    duration: {
      total: "85-100 minuten",
      blocks: [
        { label: "Aanleiding", min: 10 },
        { label: "Conceptueel kader", min: 14 },
        { label: "Fout-categorisatie", min: 12 },
        { label: "Vragen aan AI scripten", min: 12 },
        { label: "Regel-voor-regel uitleg vragen", min: 14 },
        { label: "Refactor-voorstellen beoordelen", min: 12 },
        { label: "Leerlogboek opzetten", min: 8 },
        { label: "Reflectie", min: 8 },
      ],
    },

    opening: {
      eyebrow: "Aanleiding",
      aanleiding: `Maandagmorgen, tweedejaars hbo informatica, oefenles legacy-code. Je zet één Python-fragment van vijfentwintig regels op het scherm — een rekursieve klantenstructuur waar de recursie ongedocumenteerd is en waar elke iteratie een aparte database-query doet. Vijf jaar geleden zou je hardop denken, één regel voor één, en de klas zou meedenken. Vandaag wijst een student naar Cursor: 'Mag ik er een agent op zetten?' Drie anderen openen direct hun terminal.

Twee minuten later is de eerste bug opgelost. De student vertelt trots dat de agent het probleem 'eigenlijk meteen had'. Je vraagt waarom de oude code traag was. Stilte. Iemand probeert: 'Het is recursie?' Een ander: 'Iets met queries?' Geen verkeerd antwoord, geen volledig antwoord. De fout is weg, het inzicht is afwezig. Voor jou als docent: een lege beoordeling — werkende code, geen leerbewijs.

Dit is geen ramp en geen weeklacht. Dit is de nieuwe didactische realiteit: AI als debug-assistent is supersterk op output, neutraal op begrip. Jouw rol als docent verschuift mee — niet meer 'de fout aanwijzen' (dat doet de agent beter), maar 'het juiste gesprek met de agent cureren'. In deze les bouw je die werkvorm op. Vier fout-categorieën, drie soorten vragen die begrip aantonen, één werkmethode om refactor-voorstellen te beoordelen, en een leerlogboek dat het impliciete moment van inzicht expliciet maakt.`,
      waaromNu: `Long & Magerko (2020) wijzen erop dat AI-literacy *"conceptual understanding of AI's affordances and limitations"* vraagt — niet enkel gebruiksvaardigheid. Bij debug-tools landt dat heel concreet: zonder begrip welke vraag je stelt, levert AI snel een oplossing zonder dat je iets leert. De docent die dat onderscheid scherp heeft, leidt studenten op tot ontwikkelaars die mét AI ook zonder AI kunnen denken.`,
    },

    conceptueel: {
      eyebrow: "Conceptueel kader",
      intro: `Debuggen heeft altijd uit twee delen bestaan: het symptoom oplossen en het mechanisme begrijpen. Tot 2023 vielen die twee meestal samen — een student die de fout oploste, had onderweg ongeveer begrepen waarom de fout er zat. AI-debug-tools (Cursor agents, Claude in Cline, Copilot-chat, GitHub-fixers) verbreken die koppeling. De student plakt de stacktrace in chat, krijgt een fix, plakt 'm terug, code werkt. Tijdbesparing: groot. Leerwinst: nul, mits geen extra werkvorm.

Het didactisch antwoord is niet 'AI verbieden tijdens debuggen' — dat verliest snelheid die professionele context wél verwacht. Het antwoord is de werkvorm aanpassen zodat het denken expliciet wordt naast het oplossen. Drie modi onderscheiden helpt daarbij: (1) uitleg-modus — de student vraagt AI niet om de fix maar om de redenering achter een stuk werkende of foute code; (2) hypothese-modus — de student formuleert eerst zelf een hypothese over de fout en gebruikt AI om die te toetsen; (3) refactor-modus — de student vraagt AI om verbetervoorstellen en moet daarna kiezen, met argumenten.

Een tweede onderscheid is de fout-categorisatie. Vier vaakvoorkomende soorten — syntax-fouten, semantische fouten (code draait maar doet iets anders dan bedoeld), performance-issues (correct gedrag, ongewenste snelheid of resource-gebruik), en architectuur-issues (lokaal correct, niet samenhangend met de rest). AI is uitstekend bij syntax, sterk bij semantiek mits de context klopt, wisselend bij performance, en zwak bij architectuur waar je de hele context niet kunt meegeven. De student die elke fout op dezelfde manier behandelt — 'plak in chat, vraag fix' — leert geen van vier echt te onderscheiden.

De praktische werkregel: voor elk debug-moment in je les ben je dialogue-curator. Niet de antwoorden bedenken, wel de vragen formuleren die de student bij begrip brengen. 'Wat denk jij dat hier mis is?' vóór 'wat zegt de agent ervan?'. 'Leg mij in drie zinnen uit waarom deze fix werkt' nádat de agent een fix heeft voorgesteld. 'Welke fout zou je nu zelf maken in een vergelijkbare situatie' bij elke werkende oplossing. Drie typen vragen die je elke les hergebruikt — niet als script maar als reflex.`,
      mentalModel: {
        naam: "Van fout-aanwijzer naar dialogue-curator",
        beschrijving: `In het pre-AI klaslokaal was de docent de eerste persoon naar wie een student keek bij een fout — jij kon meekijken, een stack tracen, de hint geven. AI doet dat nu sneller en geduldiger. Jouw rol verschuift naar wie cureert het gesprek tussen student en agent. Jij beslist welke vraag eerst wordt gesteld, welke conclusie hardop moet, welke verificatie aan het einde komt. Niet meer 'de wijzer naar de bug', wel 'de regisseur van het leerproces'.`,
      },
      kernbegrippen: [
        {
          term: "Uitleg-modus",
          uitleg: "Vraag aan AI om de redenering achter een stuk code te ontleden, niet om het te repareren. Voor begrip vóór actie.",
        },
        {
          term: "Hypothese-modus",
          uitleg: "Student formuleert eerst zelf wat hij denkt dat er mis is, gebruikt AI om die hypothese te toetsen. Dwingt het denken naar voren.",
        },
        {
          term: "Refactor-modus",
          uitleg: "Vraag aan AI om twee tot drie verbetervoorstellen; student kiest met argumenten. Voorkomt 'ik neem voorstel 1 omdat het er als eerste stond'.",
        },
        {
          term: "Fout-categorisatie",
          uitleg: "Vier soorten — syntax, semantiek, performance, architectuur. AI heeft per categorie een andere betrouwbaarheid; student leert kiezen welke modus past.",
        },
        {
          term: "Leerlogboek",
          uitleg: "Korte registratie van wat de student heeft geleerd per debug-moment. Maakt impliciete inzichten expliciet en levert beoordelingsmateriaal op.",
        },
      ],
    },

    learningGoals: [
      "Je onderscheidt vier debug-foutcategorieën (syntax, semantiek, performance, architectuur) en kunt per categorie zeggen hoe betrouwbaar AI-suggesties typisch zijn.",
      "Je schrijft per modus (uitleg, hypothese, refactor) één standaardvraag die studenten in elke debugsessie kunnen hergebruiken.",
      "Je voert zelf één debug-sessie op een legacy-fragment uit met AI als sparringpartner en documenteert welke vraag welke leerwinst opleverde.",
      "Je ontwerpt een leerlogboek-format dat studenten in 90 seconden per debug-moment invullen en dat begrip aantoont bij beoordeling.",
    ],

    scenario: {
      title: "Werksituatie",
      context:
        "Je geeft module 'softwarekwaliteit en onderhoud' aan een tweedejaars hbo informatica-klas van 28 studenten. Een vrijdagmiddag-les van 90 minuten waarin studenten in tweetallen werken aan een legacy-codebase. Sinds dit semester gebruiken studenten Cursor en Cline in de IDE — sneller dan ooit, dieper begrip lijkt af te nemen. Je wil deze ene les omzetten in een debug-werkvorm die AI productief inzet zonder het denken te verdringen.",
      role: "Docent · hbo informatica tweedejaars (of vergelijkbaar mbo niveau 4 software-development)",
      tools: "IDE met AI-assistent · papieren leerlogboek-sjabloon · legacy-codefragment (zie stap 3)",
    },

    steps: [
      {
        title: "Categoriseer vier fouten — en hun AI-betrouwbaarheid",
        body: "Schrijf voor elke van de vier categorieën één voorbeeld uit jouw eigen vak. Per voorbeeld: hoe makkelijk lost AI deze categorie typisch op (laag/midden/hoog) en welk risico zit aan blind volgen? Doel: studenten moeten leren kiezen welke vraag bij welke fout past, niet alles op één hoop gooien.",
        time: "12 min",
        voorbeeld:
          "Syntax: 'IndentationError: unexpected indent in regel 14'. AI-betrouwbaarheid hoog — fix direct toepasbaar, risico laag. Semantiek: 'functie geeft nullable terug terwijl callers None-check missen'. Betrouwbaarheid midden — AI snapt de lokale fix, mist de context van andere callers. Risico: lokale fix verbergt het structurele probleem. Performance: 'endpoint reageert > 2 sec'. Betrouwbaarheid wisselend — vraagt context (welke queries, welke load). Architectuur: 'login-flow staat in drie modules verspreid'. Betrouwbaarheid laag — vraagt overzicht dat AI niet heeft.",
        workspace: {
          field: "debug-categorisatie",
          label: "Mijn vier voorbeelden met AI-betrouwbaarheid",
          shortLabel: "Categorisatie",
          hint: "Per categorie: één concreet voorbeeld · betrouwbaarheid laag/midden/hoog · welk risico bij blind volgen",
          placeholder:
            "Syntax: voorbeeld ... · betrouwbaarheid ... · risico ...\nSemantiek: voorbeeld ... · betrouwbaarheid ... · risico ...\nPerformance: voorbeeld ... · betrouwbaarheid ... · risico ...\nArchitectuur: voorbeeld ... · betrouwbaarheid ... · risico ...",
          rows: 8,
        },
      },
      {
        title: "Script drie vragen die je studenten elke debug-sessie laat stellen",
        body: "Niet drie nieuwe vragen per fout — drie vaste vragen die je in elke debug-sessie hergebruikt. Eén in uitleg-modus, één in hypothese-modus, één in refactor-modus. Schrijf ze zo dat een tweedejaars ze zonder voorbereiding kan stellen.",
        time: "12 min",
        voorbeeld:
          "Uitleg-vraag: 'Leg deze drie regels uit alsof je het aan iemand in een gangoverleg vertelt — geen jargon dat je niet kunt verklaren.' Hypothese-vraag: 'Mijn vermoeden is dat de fout zit in [X]. Klopt dat? Zo nee, waar zit het wel en waarom dacht ik verkeerd?' Refactor-vraag: 'Geef twee alternatieve manieren om deze code te herstructureren. Per alternatief: één voordeel, één risico, en welke je in een productie-context zou kiezen.'",
        workspace: {
          field: "debug-vragen",
          label: "Mijn drie vaste vragen per modus",
          shortLabel: "Vaste vragen",
          hint: "Een vraag per modus · herbruikbaar in elke debug-sessie · geen voorbereiding nodig",
          placeholder:
            "Uitleg-vraag: ...\nHypothese-vraag: ...\nRefactor-vraag: ...",
          rows: 6,
        },
      },
      {
        title: "Doe zelf één debug-sessie op een legacy-fragment",
        body: "Werk met het volgende fragment (of vervang door iets uit jouw vakgebied dat dezelfde valkuilen heeft): een Python-functie die een klanthiërarchie rekursief afloopt en in elke iteratie een query doet — ongedocumenteerde recursie plus N+1 query. Stel jouw drie vaste vragen aan een AI-tool. Documenteer per vraag wat AI zei en wat jij ervan leerde.",
        time: "14 min",
        voorbeeld:
          "Fragment (illustratief): \"def fetch_subtree(customer_id):\\n    customer = db.query(Customer).get(customer_id)\\n    children = db.query(Customer).filter(parent_id=customer_id).all()\\n    return {customer: [fetch_subtree(c.id) for c in children]}\". Uitleg-vraag op deze functie: AI legt uit dat regel 2 en regel 3 elk een query doen, dat de recursie elke laag opnieuw doorloopt, en dat het resultaat een geneste dict is. Hypothese-vraag: ik vermoedde dat de traagheid in de recursie zat — AI corrigeert: traagheid zit in N+1 queries, niet in recursie zelf. Refactor-vraag: AI geeft twee voorstellen (één met joined load, één met CTE) en wijst op trade-offs.",
        workspace: {
          field: "debug-sessie-log",
          label: "Mijn debug-sessie-log (drie vragen, drie inzichten)",
          shortLabel: "Sessie-log",
          hint: "Per vaste vraag: AI's antwoord in één regel · wat jij ervan leerde · welk vakniveau de student zou hebben gemist",
          placeholder:
            "Fragment dat ik gebruikte: ...\n\nUitleg-vraag — AI zei: ... — Mijn leerwinst: ...\nHypothese-vraag — AI zei: ... — Mijn leerwinst: ...\nRefactor-vraag — AI zei: ... — Mijn leerwinst: ...",
          rows: 10,
        },
      },
      {
        title: "Beoordeel refactor-voorstellen kritisch — niet de eerste pakken",
        body: "Veelgemaakte fout: AI geeft drie refactor-opties, student kiest de eerste of de mooist klinkende. Schrijf een mini-werkvorm waarin studenten verplicht twee opties vergelijken en hun keuze in maximaal vier zinnen verdedigen — minimaal één zin over de optie die ze niet kozen.",
        time: "12 min",
        workspace: {
          field: "debug-refactor-werkvorm",
          label: "Mijn werkvorm voor refactor-beoordeling",
          shortLabel: "Refactor-werkvorm",
          hint: "Stappen · verplichte vergelijking · format van verdediging · waar in de les",
          placeholder:
            "Stap 1: Student vraagt twee refactor-opties · Stap 2: ... · Stap 3: verdediging in 4 zinnen (waarvan minstens 1 over niet-gekozen optie)\nWaar in de les: ...\nHoe ik het beoordeel: ...",
          rows: 8,
        },
      },
      {
        title: "Bouw een leerlogboek dat 90 seconden kost",
        body: "Studenten registreren per debug-moment drie dingen: welke categorie fout, welke modus toegepast, één zin geleerd. Maximaal 90 seconden per ingang. Aan einde sprint of week zie jij in één blik welke begripsgebieden zijn opgebouwd. Dit is je beoordelingsmateriaal voor begrip — niet het werkende eindproduct.",
        time: "8 min",
        voorbeeld:
          "Format (papier of digitaal): Datum · Categorie (syntax/semantiek/performance/architectuur) · Modus gebruikt (uitleg/hypothese/refactor) · Eén zin geleerd. Voorbeeld-ingang: '14 mei · semantiek · hypothese · null-check moet bij callers, niet alleen in functie zelf'.",
        workspace: {
          field: "debug-logboek",
          label: "Mijn leerlogboek-format",
          shortLabel: "Logboek",
          hint: "Veldnamen · invultijd · hoe ik het meeneem in beoordeling · wanneer studenten het invullen",
          placeholder:
            "Velden: ...\nInvultijd per ingang: ... sec\nWanneer in de les: ...\nBeoordelingscriterium: ...",
          rows: 6,
        },
      },
      {
        title: "Sectie-vraag — één afspraak voor je opleiding",
        body: "Welke afspraak in jouw sectie of opleidingsteam maakt de docent-rolverschuiving zichtbaar voor studenten? Bijvoorbeeld: 'in alle hbo-2 programmeermodules gebruiken docenten dezelfde drie vaste debug-vragen als reflex'. Ja/nee, einddatum, eigenaar.",
        time: "8 min",
        workspace: {
          field: "debug-sectie-afspraak",
          label: "Mijn beslisbare sectie-afspraak",
          shortLabel: "Sectie-afspraak",
          hint: "Ja/nee · concreet voorstel · einddatum · eigenaar",
          placeholder:
            "Voorstel: ...\nEinddatum: ...\nEigenaar: ...\nMeetpunt: ...",
          rows: 5,
        },
      },
    ],

    workedExamples: [
      {
        title: "Vier fout-categorieën in jouw vakgebied (matrix)",
        prompt:
          "Schrijf een mini-matrix van vier fout-categorieën (syntax, semantiek, performance, architectuur) voor een tweedejaars hbo informatica-module 'softwarekwaliteit'. Per categorie: één concreet voorbeeld uit een Python-Django-codebase, AI-betrouwbaarheid laag/midden/hoog, en welk risico aan blind volgen.",
        voorbeeldOutput: `Syntax — voorbeeld: ImportError door verkeerde relative import in apps.users.models. AI-betrouwbaarheid hoog. Risico bij blind volgen: laag; verifieer alleen dat de import past bij je projectstructuur.

Semantiek — voorbeeld: queryset.filter(status='active').first() geeft None terwijl business-logica een record verwachtte. AI-betrouwbaarheid midden — kan de lokale fix voorstellen maar mist context van waarom 'active' opeens leeg is. Risico: AI plamuurt de None-error, het structurele datadefect blijft.

Performance — voorbeeld: detail-view doet 1+N queries op gerelateerde objecten. AI-betrouwbaarheid wisselend; sterk op herkennen, midden op kiezen tussen select_related en prefetch_related. Risico: AI kiest een aanpak die in deze view werkt maar elders dezelfde query duurder maakt.

Architectuur — voorbeeld: authenticatie-logica zit verspreid over middleware, decorators én views. AI-betrouwbaarheid laag in een agent-context zonder volledige codebase. Risico: AI stelt lokale refactor voor die elders breekt; gebruik AI hier voor uitleg, niet voor herstructurering.`,
        commentaar:
          "Sterke matrix omdat per categorie het type fout, een herkenbaar voorbeeld én het didactische risico zichtbaar zijn. Sterk omdat 'architectuur' expliciet wordt aangeraden voor uitleg-modus in plaats van fix-modus — dat helpt studenten leren waar de grens van AI ligt. Verbeterpunt: voeg eventueel één regel toe over welke vaste vraag uit stap 2 het beste past — dan koppelt de matrix direct aan de werkvorm.",
        tryItYourself: {
          field: "debug-we-matrix",
          label: "Bouw jouw eigen matrix voor jouw vak",
          shortLabel: "Eigen matrix",
          hint: "Vier categorieën · voorbeeld uit eigen vakcontext · betrouwbaarheid · risico bij blind volgen",
          example:
            "Syntax — voorbeeld: ... · betrouwbaarheid: ... · risico: ...\nSemantiek — ...\nPerformance — ...\nArchitectuur — ...",
        },
      },
      {
        title: "Regel-voor-regel uitleg vragen aan AI",
        prompt:
          "Schrijf een prompt waarmee een student aan AI vraagt om de volgende functie regel voor regel uit te leggen, zónder een fix voor te stellen. De uitleg moet geschikt zijn voor een tweedejaars die SQLAlchemy nog leert. Functie: def fetch_subtree(customer_id): customer = db.query(Customer).get(customer_id); children = db.query(Customer).filter(parent_id=customer_id).all(); return {customer: [fetch_subtree(c.id) for c in children]}.",
        voorbeeldOutput: `Je bent een ervaren Python-developer die didactisch sterk uitlegt aan iemand die SQLAlchemy nog leert. Leg de onderstaande functie regel voor regel uit. Voor elke regel: (1) wat doet deze regel technisch, (2) welke aanname over de data zit er impliciet in, (3) welke vraag zou een vakgenoot kunnen stellen om te toetsen of dit verstandig is. Geen fix voorstellen, geen alternatieve code — alleen uitleg.

def fetch_subtree(customer_id):
    customer = db.query(Customer).get(customer_id)
    children = db.query(Customer).filter(parent_id=customer_id).all()
    return {customer: [fetch_subtree(c.id) for c in children]}

Houd elke regeluitleg onder 60 woorden. Schrijf in B2-niveau Nederlands.`,
        commentaar:
          "Sterk omdat de prompt expliciet 'geen fix' eist — dat is precies wat de uitleg-modus onderscheidt van de gebruikelijke 'los dit op'-vraag. Sterk omdat per regel drie deelvragen worden gesteld die studenten niet alleen technisch maar ook redenerend laten meekijken. Verbeterpunt: voor eerstejaars zou je 'wat doet deze regel technisch' nog kunnen voorzien van een mini-voorbeeld; voor tweedejaars is dit niveau goed. Belangrijk: zet 'B2-niveau Nederlands' erin als je klas niet allemaal moedertaalsprekers heeft — voorkomt onverwacht jargon-Engels.",
        tryItYourself: {
          field: "debug-we-uitleg-prompt",
          label: "Schrijf jouw uitleg-prompt voor één eigen codefragment",
          shortLabel: "Eigen uitleg-prompt",
          hint: "Geen fix toestaan · drie deelvragen per regel · taalniveau expliciet · max woorden per regel",
          example:
            "Je bent ... [rol] ... Leg de volgende code regel voor regel uit. Per regel: ... [drie vragen] ... Geen fix. Niveau: ...",
        },
      },
      {
        title: "Hypothese-modus — student formuleert eerst zelf",
        prompt:
          "Schrijf een korte werkvorm-instructie waarin een tweedejaars-student bij een traag werkend endpoint eerst een hypothese over de oorzaak formuleert, en pas daarna AI gebruikt om die hypothese te toetsen. De instructie moet zelfstandig leesbaar zijn voor de student.",
        voorbeeldOutput: `Voor je AI iets vraagt, schrijf je in maximaal vier zinnen: (1) welk symptoom je ziet (concreet: 'detail-view duurt > 2 sec'), (2) welke oorzaak je vermoedt en waarom, (3) welk bewijs zou jouw hypothese bevestigen, (4) welk bewijs zou hem weerleggen. Daarna vraag je aan AI: 'Mijn hypothese is X. Klopt dat? Zo nee, waar zit de echte oorzaak en waarom dacht ik verkeerd?'

Na het AI-antwoord: schrijf één regel in je leerlogboek over wat je dacht en wat de werkelijke oorzaak bleek. Als je hypothese klopte: noteer welk bewijs uit jouw onderzoek dit liet zien. Klopte hij niet: noteer welke aanname je had die niet stond.`,
        commentaar:
          "Sterk omdat de hypothese-formulering aan vier vragen vastzit (symptoom, oorzaak, confirm-bewijs, weerleg-bewijs) — dat dwingt studenten tot vakdenken vóór AI inkomt. Sterk omdat de logbook-stap meteen ingebouwd is. Verbeterpunt: voor zwakkere studenten is 'welk bewijs zou jouw hypothese weerleggen' lastig. Geef voor de eerste twee weken een voorbeeld vooraf, daarna laat je studenten het zelf doen. Belangrijk: bewaak de tijd — zonder timing schiet 'eerst hypothese' richting 20 minuten en haakt de klas af. Vijf minuten max.",
        tryItYourself: {
          field: "debug-we-hypothese",
          label: "Schrijf jouw hypothese-werkvorm voor jouw vak",
          shortLabel: "Eigen hypothese-werkvorm",
          hint: "Vier vragen vóór AI · timing · logbook-koppeling · taalniveau",
          example:
            "Voor je AI iets vraagt, schrijf je: (1) symptoom ... (2) oorzaak-vermoeden ... (3) confirm-bewijs ... (4) weerleg-bewijs ... Daarna AI-vraag: ... Logbook: ...",
        },
      },
      {
        title: "Refactor-vergelijking — twee opties verdedigen",
        prompt:
          "Schrijf een mini-werkblad voor studenten: AI geeft twee refactor-voorstellen voor een N+1-queryprobleem (één met SQLAlchemy joined load, één met prefetch in losse query). De student kiest één en verdedigt de keuze in vier zinnen, waaronder minstens één zin over waarom hij de niet-gekozen optie zou kunnen verkiezen in een andere context.",
        voorbeeldOutput: `Werkblad — refactor-keuze voor N+1 probleem in fetch_subtree.

AI heeft je twee voorstellen gegeven:
A) joined load met selectinload op de children-relatie.
B) twee losse queries, daarna in Python samenvoegen.

Schrijf in vier zinnen:
1. Welke optie kies je voor de huidige codebase en waarom.
2. Welk technisch criterium gaf de doorslag (queryaantal, geheugen, leesbaarheid, andere).
3. In welke andere context zou je voorstel B kiezen — wees concreet over welk verschil de doorslag zou geven.
4. Welke nieuwe risico's introduceert je gekozen optie die er bij de oude code niet waren.

Lever in voor het einde van de werkles. Beoordeling: ik kijk naar het denkproces, niet naar of je 'A of B' kiest.`,
        commentaar:
          "Sterk omdat de student verplicht is de niet-gekozen optie te benoemen — dat voorkomt 'ik nam voorstel 1 omdat het er als eerste stond'. Sterk omdat de beoordeling expliciet op denkproces gericht is, niet op de keuze zelf. Verbeterpunt: vraag 4 over 'nieuwe risico's' is voor sterke studenten waardevol maar voor zwakkere abstract. Geef bij eerste gebruik een voorbeeld vooraf ('bijvoorbeeld: optie A laadt veel data in geheugen — voor grote subtrees kan dat een nieuw probleem worden'). Belangrijk: deze werkvorm hoort in een integratie-strategie (les 2.2) — gebruik niet in een verbods-context.",
        tryItYourself: {
          field: "debug-we-refactor",
          label: "Schrijf jouw refactor-vergelijking voor een eigen probleem",
          shortLabel: "Eigen refactor-werkblad",
          hint: "Twee opties · vier-zinverdediging · niet-gekozen optie verplicht benoemen · beoordeling op proces",
          example:
            "AI heeft je twee voorstellen gegeven: A) ... B) ... Schrijf in vier zinnen: ... Beoordeling: ...",
        },
      },
    ],

    vakvariaties: [
      {
        vak: "Software-development · mbo niveau 4 en hbo informatica",
        body: "De vier categorieën werken hier rechtstreeks. Cursor en Cline lossen syntax goed op, semantiek redelijk, performance wisselend, architectuur vrijwel niet. Investeer in week één in de hypothese-modus — dat is wat studenten typisch overslaan onder druk van projectdeadlines.",
      },
      {
        vak: "Data engineering en data science · hbo",
        body: "Debug-categorieën verschuiven: 'semantiek' wordt 'data-shape-issues' (DataFrame heeft andere columns dan verwacht), 'performance' wordt 'memory en compute', 'architectuur' wordt 'pipeline-cohesie'. AI is sterk in data-shape (legt rij/kolom verschil snel uit), zwak in pipeline-architectuur waar afhankelijkheden tussen jobs cruciaal zijn.",
      },
      {
        vak: "Embedded / IoT · hbo en mbo techniek",
        body: "Debuggen bij hardware vraagt ander gereedschap: oscilloscoop, logic analyzer, serial monitor. AI is sterk in code-uitleg en register-betekenissen, zwak in real-time timing-issues. Voor uitleg-modus uitstekend ('leg dit register-bit uit'), voor hypothese-modus voorzichtig — verifieer altijd met meetapparatuur, niet alleen met agent-suggestie.",
      },
      {
        vak: "Scripting en automation · mbo/hbo brede ICT-rollen",
        body: "Veel debug-werk in bash, PowerShell, Python-scripts en CI/CD-pipelines. AI is hier sterk omdat scripts vaak kort en zelfstandig zijn. Risico voor studenten: ze leren scripten zonder de onderliggende systeemconcepten (file permissions, pipes, exit codes) te verinnerlijken. Hypothese-modus tegen die valkuil — eerst voorspellen wat de fout is, dan AI raadplegen.",
      },
      {
        vak: "Web / frontend · hbo en mbo creatief",
        body: "Debug-werk in browser dev tools, React-componenten, CSS-cascade. AI is sterk in component-logica en hooks-uitleg, wisselend in CSS-specificiteits-problemen en wachtende state-issues. Refactor-modus extra waardevol omdat frontend-keuzes vaak veel valide alternatieven hebben — dwingt studenten tot keuze-met-argumentatie.",
      },
    ],

    valkuilen: [
      {
        titel: "Plak-en-vraag-fix als enige debugroutine",
        watGebeurtEr:
          "Student plakt stacktrace in chat, krijgt fix, plakt fix terug, code werkt. Niet één van de drie modi is gebruikt. De fout is weg, het inzicht ontbreekt. Volgende debug-moment exact dezelfde routine.",
        fix: "Eis vóór elke chat-vraag een hypothese in maximaal vier zinnen (zie worked example 3). Voorkomt dat de stacktrace de eerste tekst is die AI ziet — de hypothese van de student wordt het gespreksbegin.",
      },
      {
        titel: "AI vragen om fix bij architectuurproblemen",
        watGebeurtEr:
          "Student plakt een lokaal stuk code in chat bij een architectuurprobleem dat door de hele codebase verspreid zit. AI stelt een lokale refactor voor die elders breekt. Student implementeert, productie of project-build valt om, niemand snapt waarom.",
        fix: "Reflex aanleren: architectuurproblemen alleen in uitleg-modus aan AI voorleggen. Refactor-modus alleen na uitleg + tweede mening (collega of docent). Maak dat zichtbaar in je fout-categorisatie-matrix.",
      },
      {
        titel: "Refactor-voorstellen niet vergelijken",
        watGebeurtEr:
          "AI geeft twee opties, student kiest de eerste. Geen verdediging, geen begrip van de afwijzing. Eindwerk werkt, beoordeling wordt blind.",
        fix: "Werkbladen waar verplicht twee opties worden vergeleken (zie worked example 4). Beoordeel op proces, niet op uitkomst. Twee weken dit afdwingen, daarna wordt het reflex.",
      },
      {
        titel: "Leerlogboek wordt verzwaard tot opstel",
        watGebeurtEr:
          "Je maakt het logboek-format te uitgebreid. Studenten gaan elk debug-moment vermijden om de administratie te ontlopen. Het logboek werkt averechts — minder denken, niet meer.",
        fix: "Maximaal 90 seconden per ingang, drie velden, één zin tekst. Zie het als trainingslogboek voor sport: kort en frequent slaat lang en zelden.",
      },
      {
        titel: "Docent als laatste-redmiddel uit pure gewoonte",
        watGebeurtEr:
          "Studenten lopen tegen een fout, vragen jou. Jij lost op. AI staat ernaast maar wordt overgeslagen. Voor jou: aanleren van hulpvraag bij docent in plaats van bij agent. Voor studenten: ontwikkelafhankelijkheid die buiten de school niet bestaat.",
        fix: "Spreek met klas af: voor je naar de docent komt, heb je minstens twee van de drie vaste vragen aan AI gesteld. Toon bij hulpvraag aan welke twee, en wat het antwoord was. Verschuift jou naar de juiste rol — niet de oplosser maar de dialogue-curator.",
      },
    ],

    geoefendSpoor: {
      eyebrow: "Voor de geoefende docent",
      titel: "Bouw een vaksectie-cobasis van debug-fragmenten met didactische notities",
      beschrijving:
        "Heb je je drie vaste vragen, je matrix en je leerlogboek werkend en wil je verder? Verzamel met je vaksectie acht tot tien legacy-fragmenten — uit eigen lesarchief, geanonimiseerd uit projecten of uit open-source repos. Bij elk fragment: welke fout-categorieën zitten erin, welk modus past het beste, welke leervraag stelt de docent klassikaal vooraf. Maak een gedeeld document. Investering: één voorbereidingsmiddag plus 60 minuten in sectievergadering. Opbrengst: een fragmenten-bibliotheek die nieuwe docenten direct kunnen pakken, en die jouw debug-werkvorm los maakt van het toeval van het moment.",
      opdracht:
        "Lever vóór einde semester een gedeeld document met acht fragmenten, per fragment minimaal: code, twee fout-categorieën, voorgestelde modus, één klassikale openingsvraag. Deel met twee collega's en vraag om een test in hun les.",
    },

    eindcriteria: [
      {
        criterium: "Fout-categorisatie",
        onder: "Eén of twee categorieën gebruikt zonder onderscheid in AI-betrouwbaarheid.",
        op: "Vier categorieën met per categorie een voorbeeld uit eigen vak en betrouwbaarheidsinschatting.",
        boven: "+ Categorisatie gekoppeld aan de drie modi en aan je leerlogboek.",
      },
      {
        criterium: "Vaste vragen per modus",
        onder: "Geen vaste set; vragen ad hoc per fout.",
        op: "Eén vraag per modus (uitleg, hypothese, refactor) hergebruikbaar in elke debug-sessie.",
        boven: "+ Vragen getest met eigen klas, bijgesteld na ervaring, gedeeld met sectie.",
      },
      {
        criterium: "Eigen debug-sessie",
        onder: "Niet zelf gedaan of geen logbook ingevuld.",
        op: "Sessie op legacy-fragment afgerond, drie inzichten gedocumenteerd.",
        boven: "+ Inzichten vertaald naar drie didactische aanpassingen in komende les.",
      },
      {
        criterium: "Refactor-werkvorm",
        onder: "Studenten kiezen één voorstel zonder vergelijking.",
        op: "Verplichte tweekeuzevergelijking met vier-zinverdediging.",
        boven: "+ Beoordelingsrubric weegt expliciet de niet-gekozen optie-overweging.",
      },
      {
        criterium: "Leerlogboek",
        onder: "Geen logboek of te uitgebreid format dat studenten ontmoedigt.",
        op: "Drie-velds-format binnen 90 sec per ingang.",
        boven: "+ Logboek wordt gebruikt in beoordeling én in sectie-gesprek over begripsontwikkeling.",
      },
    ],

    reflection: [
      "Welke rol nam jij vroeger in tijdens debug-momenten — en welke twee elementen daarvan zijn nu door AI ingenomen zonder dat je het zelf doorhad? Wat zegt dat over de verschuiving van je vakidentiteit?",
      "Bij welke debug-categorie loop je zelf nog gevaar AI blind te volgen — en welke vaste vraag uit deze les ga je voor jezelf eerst inzetten voor je het van studenten verlangt?",
      "Welk moment van impliciet begrip dat in jouw oude werkvorm wel ontstond, dreigt nu te verdwijnen — en welke aanpassing maakt dit moment opnieuw zichtbaar zonder de snelheidswinst van AI weg te gooien?",
    ],

    checklist: [
      "Vier fout-categorieën met eigen vakvoorbeelden + betrouwbaarheidsinschatting op een rij",
      "Drie vaste vragen (uitleg, hypothese, refactor) klaar voor elke debug-sessie",
      "Zelf één debug-sessie op legacy-fragment afgerond, drie inzichten gedocumenteerd",
      "Refactor-werkvorm met verplichte tweekeuzevergelijking ontworpen",
      "Leerlogboek-format max 90 sec per ingang klaar voor klassikaal gebruik",
      "Sectie-afspraak beslisbaar geformuleerd",
      "AVG-check: legacy-fragment is fictief of geanonimiseerd; geen herleidbare productiedata",
      "Eén concreet experiment voor het komende blok ingepland",
    ],

    verderLezen: [
      {
        titel: "What is AI Literacy? Competencies and Design Considerations",
        bron: "Long & Magerko · CHI Conference",
        jaar: 2020,
        link: "https://dl.acm.org/doi/fullHtml/10.1145/3313831.3376727",
        waarom: "Vijf vragen waarmee je toetst of een debug-werkvorm conceptueel begrip vraagt of alleen oplossing.",
      },
      {
        titel: "AI Competency Framework for Teachers — AI Pedagogy",
        bron: "UNESCO",
        jaar: 2024,
        link: "https://www.unesco.org/en/articles/ai-competency-framework-teachers",
        waarom: "Competentiegebied 'AI pedagogy' raakt direct de rolverschuiving van docent naar dialogue-curator.",
      },
      {
        titel: "Effective Teacher Professional Development",
        bron: "Darling-Hammond e.a. · Learning Policy Institute",
        jaar: 2017,
        link: "https://learningpolicyinstitute.org/sites/default/files/product-files/Effective_Teacher_Professional_Development_REPORT.pdf",
        waarom: "Zeven kenmerken — onderbouwt waarom een gedeelde fragmenten-bibliotheek (geoefend spoor) effectieve PD is.",
      },
      {
        titel: "Digital Education Outlook 2026",
        bron: "OECD",
        jaar: 2026,
        link: "https://www.oecd.org/content/dam/oecd/en/publications/reports/2026/01/oecd-digital-education-outlook-2026_940e0dd8/062a7394-en.pdf",
        waarom: "Internationale stand van zaken rond AI-debug-tools — handig voor sectie-discussie over rolverschuiving.",
      },
    ],

    nextLesson: "prototypen-itereren",
  },

  /* ────────────────────────────────────────────────────────────────────────
   *  LES 2.7 — Ontwerpen, prototypen en itereren met AI · Diepteles
   *
   *  Opbouw:
   *  - Aanleiding: docent doorloopt iteratie van brief tot iteratie 3
   *  - Concept: ontwerpen ≠ klikken op v0; iteratie-criterium vooraf
   *  - 6 stappen: iteratie-criterium · brief schrijven · iteratie 1 · iteratie 2
   *    (wat verloor je?) · iteratie 3 · les-overdracht
   *  - 4 worked examples: ontwerpbrief, iteratie-criterium, verlies-inventaris,
   *    overdraagbare iteratie-werkvorm
   *  - Vakvariaties: software, ux/design, marketing/content, fysieke producten
   *    (CAD/tinkering), onderwijs-materialen
   *  - Valkuilen: verliefd op eerste output, principes vergeten, geen criterium,
   *    eindeloos itereren, verlies onbenoemd
   * ──────────────────────────────────────────────────────────────────────── */

  "prototypen-itereren": {
    format: "diepteles",

    summary:
      "Prototypen met AI is meer dan op v0 klikken. In deze les doorloop je zelf één volledige iteratiecyclus — van brief tot iteratie 3 — met een expliciet iteratie-criterium vooraf, een verlies-inventaris na iteratie 2, en een overdraagbare werkvorm die je studenten of cursisten kunt voorleggen. Doel: itereren als gedisciplineerd ontwerpdenken, niet als 'opnieuw genereren tot het mooi voelt'.",

    duration: {
      total: "100-120 minuten",
      blocks: [
        { label: "Aanleiding", min: 10 },
        { label: "Conceptueel kader", min: 14 },
        { label: "Iteratie-criterium vooraf", min: 12 },
        { label: "Ontwerpbrief schrijven", min: 14 },
        { label: "Iteratie 1 — eerste prototype", min: 18 },
        { label: "Iteratie 2 — kritisch herontwerp", min: 20 },
        { label: "Iteratie 3 — afsluitende keuze", min: 14 },
        { label: "Reflectie + overdracht", min: 10 },
      ],
    },

    opening: {
      eyebrow: "Aanleiding",
      aanleiding: `Het is dinsdagavond, je werkt aan een opdracht voor je hbo design-cursus over week 5: 'ontwerp een mini-applicatie waarmee studenten hun reflectie op stage kunnen vastleggen'. Je opent v0, typt een briefing van drie zinnen, klikt 'generate'. Veertig seconden later staat er iets op je scherm dat er strak uitziet — drie schermen, log-in, dashboard, reflectie-formulier met markdown-editor. Werkt soepel. Je leunt achterover. Klaar?

Bijna. Want voordat je het opmerkt, heb je iets gedaan dat als ontwerper niet klopt: je hebt geaccepteerd. Geen briefing met principes vooraf, geen iteratie-criterium, geen check of dit prototype past bij wat een eerstejaars zou kunnen reflecteren over zijn stage. Een werkende v0-output voelt als af. Dat is precies de verleiding waar deze les tegenin werkt. Itereren is geen knop-drukken-tot-mooi. Itereren is een gedisciplineerd ontwerpproces met expliciete criteria, expliciete verliezen en expliciete keuzes per ronde.

In deze les doorloop je één cyclus — een echte. Je formuleert vooraf wat een goed prototype voor jouw doel zou betekenen. Je schrijft een briefing waaruit niet alleen functies maar ook ontwerpprincipes spreken. Je bouwt iteratie 1. Je beoordeelt iteratie 1 kritisch en formuleert wat je wil veranderen — én wat je in iteratie 2 dreigt te verliezen door die wijziging. Je bouwt iteratie 2, doet de verlies-inventaris, en kiest in iteratie 3 bewust wat blijft. Aan het einde heb je een werkvorm die je kunt overdragen aan een collega, een studentengroep of een trainingsgroep.`,
      waaromNu: `OECD's Digital Education Outlook 2026 noteert dat generative-design-tools (v0, Lovable, Cursor agents, Midjourney voor mockups) sinds 2025 standaardonderdeel zijn van design- en ontwikkelopleidingen. *"The ease of generation outstrips the discipline of iteration in most curricula"* (OECD, 2026). De docent die iteratie als gedisciplineerd proces leert, niet als 'opnieuw genereren', maakt het didactisch verschil tussen ontwerpers en knop-drukkers.`,
    },

    conceptueel: {
      eyebrow: "Conceptueel kader",
      intro: `Ontwerpen heeft drie momenten waarop het verschil tussen amateurs en professionals zichtbaar wordt: vooraf (welke principes leiden mij), tussen iteraties (wat verlies ik door deze wijziging) en na afloop (welke keuzes zijn impliciet en welke expliciet). Generatieve AI verlaagt de drempel voor het maken van iteraties dramatisch — wat vroeger drie dagen kostte, kost nu twintig minuten. Maar de drempel voor disciplinaire vragen verschuift mee: makkelijk te genereren betekent makkelijk genereren zonder na te denken.

Het kernverschil tussen 'itereren' en 'opnieuw genereren' zit in de criterium-discipline. Itereren betekent: ik weet vooraf wat ik wil bereiken, ik vergelijk elke nieuwe versie tegen dat doel, ik weet wat ik bij elke wijziging opgeef. Opnieuw genereren betekent: ik probeer iets anders, ik vergelijk impressionistisch, ik weet niet wat ik verloor. Beide kosten ongeveer dezelfde tijd. Het verschil zit in wat je aan het einde hebt geleerd over je probleem — en dus over je vak.

Drie disciplines maken iteratie professional. Eén: een iteratie-criterium vóór de eerste iteratie. Niet 'het moet er mooi uitzien', wel 'de student kan binnen twee minuten een eerste reflectie noteren zonder hulp van een docent'. Concreet, observeerbaar, tegen falsificeerbaar te zetten. Twee: een verlies-inventaris tussen iteraties. Wat had iteratie 1 dat iteratie 2 niet meer heeft? Soms is het een functie, soms een kwaliteit (snelheid, eenvoud, herkenbaarheid). Maak het expliciet. Drie: een afsluitende keuze in iteratie 3, niet 'verfijnen tot perfect'. Op een gegeven moment beslis je: dit is genoeg voor het doel, ondanks bekende gebreken. Die gebreken benoem je in je documentatie.

Voor docenten met design-, ontwerp- of software-engineering-rol heeft dit drie didactische gevolgen. Eerst: maak het iteratie-criterium een verplicht inleverstuk vóór de student begint, niet achteraf. Tweede: train de verlies-inventaris als reflectie-werkvorm, vergelijkbaar met peer-feedback maar gericht op het eigen werk. Derde: leer studenten 'genoeg voor het doel' onderscheiden van 'perfect' — dit is een professionele vaardigheid die in school zelden expliciet wordt geoefend.`,
      mentalModel: {
        naam: "Iteratie als gerichte beweging, niet als geknoei",
        beschrijving: `Een ontwerper is als een wandelaar die een doel heeft: niet 'zo ver mogelijk lopen', wel 'naar dat punt in dat tijdsbestek'. Bij elke afslag vraagt hij: brengt deze me dichterbij of verder van het doel? Wat geef ik op door deze afslag (terrein, tijd, uitzicht)? Iteratie met AI werkt zo. Vooraf het doel, bij elke iteratie de afslag-check, aan het einde de bewuste eindkeuze. Knop-drukken-tot-mooi is wandelen zonder kompas — toevallig kun je ergens uitkomen, maar je leert niets over de route.`,
      },
      kernbegrippen: [
        {
          term: "Iteratie-criterium",
          uitleg: "Vooraf geformuleerde, observeerbare uitkomst waaraan elk prototype wordt gemeten. Concreet genoeg om te falsificeren ('de student kan X binnen Y minuten zonder Z').",
        },
        {
          term: "Ontwerpbrief",
          uitleg: "Briefing aan AI die niet alleen functies eist maar ook principes meegeeft (eenvoud boven volledigheid, herkenbaarheid voor doelgroep, accessibility-basis). Het iteratie-criterium maakt deel uit van de brief.",
        },
        {
          term: "Verlies-inventaris",
          uitleg: "Korte registratie tussen iteraties: wat had de vorige versie dat deze niet meer heeft? Soms een functie, soms een kwaliteit. Voorkomt onbewust verlies in iteratie 2 of 3.",
        },
        {
          term: "Genoeg voor het doel",
          uitleg: "Bewuste eindkeuze: dit is voldoende voor de prototype-status, ondanks bekende gebreken. Onderscheidt professionele ontwerper van perfectie-zoeker.",
        },
        {
          term: "Iteratie-overdracht",
          uitleg: "De werkvorm die je hebt doorlopen, vertaald naar instructie voor je studenten — inclusief het criterium-vooraf, de verlies-inventaris en de eindkeuze.",
        },
      ],
    },

    learningGoals: [
      "Je formuleert een iteratie-criterium voordat je AI laat genereren — observeerbaar, falsificeerbaar, gekoppeld aan een doel.",
      "Je schrijft een ontwerpbrief waarin functies én principes staan, en je iteratie-criterium expliciet onderdeel uitmaakt van de instructie.",
      "Je doorloopt zelf één volledige cyclus van drie iteraties, met na iteratie 2 een verlies-inventaris die in twee zinnen benoemt wat je opgaf.",
      "Je vertaalt je eigen cyclus naar een werkvorm die je aan studenten, cursisten of een collega kunt overdragen — met inleverstukken per iteratie.",
    ],

    scenario: {
      title: "Werksituatie",
      context:
        "Je bent docent op een hbo-opleiding interactieontwerp (of vergelijkbaar mbo niveau 4 software / hbo informatica met design-component). Volgende week vraag je je tweedejaars om een mini-applicatie te ontwerpen voor stagereflectie. Vóór je studenten loslaat, doorloop je zelf de hele cyclus om te zien waar ze gaan vastlopen, welke verleidingen reëel zijn en welke werkvorm hen door drie disciplinaire iteraties heen brengt.",
      role: "Docent · hbo interactieontwerp tweedejaars (of vergelijkbaar mbo niveau 4 software-design)",
      tools: "v0 of Lovable voor app-prototypes · Figma voor schets · papier voor iteratie-criterium en verlies-inventaris",
    },

    steps: [
      {
        title: "Formuleer je iteratie-criterium vóór je iets genereert",
        body: "Schrijf in maximaal 30 woorden wat een succesvol prototype voor jouw doel betekent. Observeerbaar, falsificeerbaar, met een specifieke gebruiker en taak. Geen 'ziet er strak uit', wel 'eerstejaars stagiair kan binnen 90 seconden eerste reflectie noteren zonder hulp'.",
        time: "12 min",
        voorbeeld:
          "Iteratie-criterium: Een eerstejaars stagiair kan binnen 90 seconden na openen van de app een eerste reflectie van 2-3 zinnen vastleggen, zonder dat een docent of medestudent hoeft uit te leggen waar te beginnen. Falsificeer-test: zes eerstejaars proberen het 'cold', vier of meer slagen — anders niet voldoende.",
        workspace: {
          field: "proto-criterium",
          label: "Mijn iteratie-criterium (max 30 woorden + falsificeer-test)",
          shortLabel: "Iteratie-criterium",
          hint: "Observeerbaar · falsificeerbaar · specifieke gebruiker · specifieke taak · meetpunt",
          placeholder:
            "Iteratie-criterium: ...\nFalsificeer-test: ...",
          rows: 5,
        },
      },
      {
        title: "Schrijf de ontwerpbrief — functies én principes",
        body: "Niet drie zinnen die alleen functies eisen. Schrijf een briefing van 8-12 zinnen waarin functies, doelgroep, ontwerpprincipes (eenvoud boven volledigheid, accessibility-basis, herkenbare interactiepatronen voor de doelgroep) en je iteratie-criterium aanwezig zijn. Zonder principes maakt AI de keuzes — meestal 'modern en strak', vaak niet wat je wilde.",
        time: "14 min",
        voorbeeld:
          "Briefing: 'Bouw een mini-applicatie waarmee een eerstejaars stagiair binnen 90 seconden een reflectie kan noteren. Drie schermen: log-in (e-mail-only, geen wachtwoord, magic-link), reflectie-invoer (één tekstveld voor stagedoel deze week, één voor wat ging goed, één voor wat ik volgende week anders doe), overzicht (eigen reflecties terugzien op datum). Principes: eenvoud boven volledigheid (geen rich-text-editor, geen tags, geen export), accessibility-basis (WCAG AA-contrast, focus-indicators, screen-reader-labels), herkenbare interactiepatronen (knoppen rechtsonder, formuliervalidatie inline, geen modal-pop-ups). Iteratie-criterium: zie boven. Stack: Next.js, shadcn/ui, in-memory state. Status: prototype voor donderdag.'",
        workspace: {
          field: "proto-brief",
          label: "Mijn ontwerpbrief (8-12 zinnen, functies + principes + criterium)",
          shortLabel: "Ontwerpbrief",
          hint: "Doelgroep · functies (concreet) · principes (3-4 expliciet) · iteratie-criterium · stack · status",
          placeholder:
            "Bouw een ... voor [doelgroep] zodat [taak] in [tijd] kan ...\nFuncties: ...\nPrincipes: eenvoud ... · accessibility ... · interactie ...\nIteratie-criterium: ...\nStack: ...\nStatus: ...",
          rows: 12,
        },
      },
      {
        title: "Iteratie 1 — laat genereren, beoordeel op criterium",
        body: "Geef je brief aan v0 (of Lovable, bolt, of een vergelijkbare tool). Open de output, doorloop hem als zou je de eerstejaars zijn. Beoordeel langs één vraag: voldoet dit aan het criterium? Beschrijf in drie regels: wat werkt, wat werkt niet, welk principe is verloren of versterkt.",
        time: "18 min",
        voorbeeld:
          "Iteratie 1 resultaat: drie schermen aanwezig, magic-link werkt, reflectie-invoer heeft drie velden. Werkt: doel + goed + anders zijn als losse velden goed leesbaar. Werkt niet: log-in heeft een banner 'Welcome to ReflectApp v1' die drie seconden aandacht trekt voordat je naar de actie kunt. Een eerstejaars zou daar bij 'cold' aarzelen. Principe 'eenvoud boven volledigheid' is licht geschonden — drie velden zijn goed, maar de tool heeft tags en datums toegevoegd die niet in mijn brief stonden.",
        workspace: {
          field: "proto-iteratie-1",
          label: "Mijn beoordeling van iteratie 1",
          shortLabel: "Iteratie 1",
          hint: "Werkt · werkt niet · welk principe verloren/versterkt · voldoet aan criterium (ja/nee/deels)",
          placeholder:
            "Werkt: ...\nWerkt niet: ...\nPrincipe verloren of versterkt: ...\nVoldoet aan iteratie-criterium: ... (ja / nee / deels — toelichting)",
          rows: 7,
        },
      },
      {
        title: "Iteratie 2 — gerichte wijziging + verlies-inventaris",
        body: "Vraag aan AI één concrete verbetering — niet 'maak het beter'. Bijvoorbeeld: 'haal de welcome-banner weg, breng de reflectie-velden direct in beeld na log-in, verwijder tags en datums uit het formulier'. Beoordeel iteratie 2. Daarna: schrijf de verlies-inventaris. Wat had iteratie 1 dat 2 niet meer heeft? Soms is het positief (overbodig gewicht weg), soms negatief (een handige hint die nu ontbreekt).",
        time: "20 min",
        voorbeeld:
          "Iteratie 2 wijziging gevraagd: 'Haal de welcome-banner weg, breng reflectie-velden in beeld direct na log-in, verwijder tags en datums uit formulier.' Iteratie 2 resultaat: log-in zonder banner, reflectie-veld direct in beeld, datum impliciet (vandaag, niet aanpasbaar). Verlies-inventaris: iteratie 1 had een 'welkom terug, [naam]'-zin die nu weg is — een eerstejaars stagiair die voor de tweede keer inlogt, mist nu een minimale herkenbaarheidsbevestiging. Verlies bewust? Ja, eenvoud weegt zwaarder dan personalisatie in deze prototype-fase. Zou ik in een productieversie heroverwegen.",
        workspace: {
          field: "proto-iteratie-2",
          label: "Iteratie 2 + verlies-inventaris (2 zinnen)",
          shortLabel: "Iteratie 2 + verlies",
          hint: "Gevraagde wijziging · beoordeling iteratie 2 · verlies-inventaris in twee zinnen · bewuste keuze (ja/nee)",
          placeholder:
            "Gevraagde wijziging: ...\nBeoordeling iteratie 2: ...\nVerlies-inventaris (twee zinnen): ...\nBewust verlies? ... (ja/nee + toelichting)",
          rows: 9,
        },
      },
      {
        title: "Iteratie 3 — bewuste eindkeuze 'genoeg voor het doel'",
        body: "Niet 'verfijnen tot perfect'. Beslis bewust: voldoet iteratie 2 voldoende, of is één gerichte wijziging nodig om het criterium definitief te halen? Schrijf je eindkeuze in twee zinnen, plus drie bekende gebreken die je accepteert voor deze prototype-status. Documentatie van gebreken voorkomt dat een collega later denkt dat je ze hebt gemist.",
        time: "14 min",
        voorbeeld:
          "Eindkeuze: iteratie 2 voldoet aan het criterium na één laatste wijziging — een korte 'eerste keer hier?' link op het log-in-scherm voor gebruikers die de magic-link-flow niet kennen. Geaccepteerde gebreken voor prototype-status: (1) geen 'jouw eerdere reflecties' wijziging, (2) datums niet bewerkbaar, (3) geen export naar PDF. In productieversie alle drie heroverwegen.",
        workspace: {
          field: "proto-iteratie-3",
          label: "Iteratie 3 — eindkeuze + drie geaccepteerde gebreken",
          shortLabel: "Iteratie 3",
          hint: "Eindkeuze in twee zinnen · drie geaccepteerde gebreken · waarom genoeg voor het doel",
          placeholder:
            "Eindkeuze: ...\nGeaccepteerde gebreken: 1) ... 2) ... 3) ...\nWaarom genoeg voor doel: ...",
          rows: 8,
        },
      },
      {
        title: "Overdracht naar studenten — werkvorm in vijf inleverstukken",
        body: "Vertaal je eigen cyclus naar een werkvorm voor je studenten. Vijf inleverstukken: (1) iteratie-criterium, (2) ontwerpbrief, (3) beoordeling iteratie 1, (4) verlies-inventaris na iteratie 2, (5) iteratie 3 met geaccepteerde gebreken. Beoordeling weegt elk inleverstuk apart — niet alleen het eindprototype. Zonder dat zakt iteratie 1 en 2 in elkaar tot 'eerste poging'.",
        time: "10 min",
        workspace: {
          field: "proto-overdracht",
          label: "Mijn werkvorm voor studenten (vijf inleverstukken)",
          shortLabel: "Overdracht",
          hint: "Per inleverstuk: format · maximale lengte · beoordelingsweging · deadline",
          placeholder:
            "1. Iteratie-criterium — format: ... lengte: ... weging: ... deadline: ...\n2. Ontwerpbrief — ...\n3. Beoordeling iteratie 1 — ...\n4. Verlies-inventaris — ...\n5. Iteratie 3 + gebreken — ...",
          rows: 12,
        },
      },
    ],

    workedExamples: [
      {
        title: "Iteratie-criterium voor een design-opdracht",
        prompt:
          "Schrijf een iteratie-criterium voor een opdracht waarin tweedejaars hbo-studenten een mini-applicatie ontwerpen voor stagereflectie. Observeerbaar, falsificeerbaar, gekoppeld aan een specifieke gebruiker en een meetbare taak. Houd onder de 30 woorden.",
        voorbeeldOutput: `Een eerstejaars stagiair, voor het eerst in de app, kan binnen 90 seconden zonder externe hulp een eerste reflectie van 2-3 zinnen vastleggen. Falsificeer-test: zes eerstejaars 'cold', minstens vier slagen.`,
        commentaar:
          "Sterk omdat de gebruiker expliciet 'eerstejaars' is en 'voor het eerst in de app' — dat maakt de meting concreet. Sterk omdat de falsificeer-test (zes proberen, vier slagen) operationeel is. Verbeterpunt: 'externe hulp' kan verwarrend zijn — voor formele tests preciseer je: 'geen docent, geen demo-video, geen schriftelijke instructie boven 50 woorden'. Belangrijk: laat de student aan het einde van iteratie 3 noteren of de falsificeer-test daadwerkelijk is uitgevoerd — anders blijft het criterium een papieren afspraak.",
        tryItYourself: {
          field: "proto-we-criterium",
          label: "Schrijf het iteratie-criterium voor jouw eigen opdracht",
          shortLabel: "Eigen criterium",
          hint: "Specifieke gebruiker · meetbare taak · tijdsbestek · falsificeer-test",
          example:
            "[Gebruiker], in [context], kan binnen [tijd] [taak] zonder [hulp]. Falsificeer-test: ...",
        },
      },
      {
        title: "Ontwerpbrief met principes (niet alleen functies)",
        prompt:
          "Schrijf een ontwerpbrief van 8-12 zinnen waarin functies én ontwerpprincipes staan voor een mini-applicatie 'stagereflectie'. Maak het iteratie-criterium expliciet onderdeel. Stack: Next.js + shadcn/ui. Status: prototype voor over twee dagen.",
        voorbeeldOutput: `Bouw een mini-applicatie waarmee een eerstejaars stagiair binnen 90 seconden een reflectie van 2-3 zinnen kan noteren. Drie schermen: (1) log-in via magic-link (alleen e-mail, geen wachtwoord), (2) reflectie-invoer met drie tekstvelden (stagedoel deze week, wat ging goed, wat doe ik volgende week anders), (3) overzicht waarin de stagiair eerdere eigen reflecties op datum terugziet.

Principes: eenvoud boven volledigheid (geen rich-text editor, geen tags, geen export, geen instellingen), accessibility-basis (WCAG AA-contrast, zichtbare focus-indicators, screen-reader-labels op formuliervelden), herkenbare interactiepatronen voor design-studenten (primaire actie rechtsonder, inline-validatie, geen modal-pop-ups).

Iteratie-criterium: zes eerstejaars proberen het 'cold', minstens vier slagen binnen 90 seconden. Stack: Next.js 15, shadcn/ui, state in memory. Status: prototype voor donderdag — niet productie.`,
        commentaar:
          "Sterk omdat principes en functies in aparte alinea's staan — agent leest dat als separate eisen. Sterk omdat het iteratie-criterium in de brief staat, niet eraan voorafgaat — de agent gebruikt het direct als referentie. Verbeterpunt: voor design-studenten zou je 'consistente visuele taal (max 2 fonts, max 4 kleuren)' kunnen toevoegen als principe — dan oefenen ze ook visuele discipline. Belangrijk: 'state in memory' moet expliciet, anders genereert v0 vaak een Supabase- of Vercel-Postgres-setup die je voor een prototype niet wilt.",
        tryItYourself: {
          field: "proto-we-brief",
          label: "Schrijf jouw ontwerpbrief voor één eigen prototype",
          shortLabel: "Eigen ontwerpbrief",
          hint: "Functies (concreet) · principes (3-4) · iteratie-criterium expliciet · stack · status",
          example:
            "Bouw een [product] waarmee [gebruiker] in [tijd] [taak] kan ... Drie functies: ... Principes: ... Iteratie-criterium: ... Stack: ... Status: ...",
        },
      },
      {
        title: "Verlies-inventaris in twee zinnen na iteratie 2",
        prompt:
          "Schrijf een mini-format voor de verlies-inventaris die een student na iteratie 2 invult. Twee zinnen, met expliciete benoeming van wat de vorige versie had dat deze niet meer heeft. Eindig met een ja/nee-vraag of het verlies bewust is.",
        voorbeeldOutput: `Verlies-inventaris (na iteratie 2, in twee zinnen):

Zin 1 — Iteratie 1 had [specifieke functie of kwaliteit] dat iteratie 2 niet meer heeft. Zin 2 — Dit verlies betekent voor [gebruikersgroep] dat [concreet gevolg].

Eindvraag: Is dit verlies bewust? (ja/nee) — Zo ja, welk principe maakt het rechtvaardig. Zo nee, ga terug naar de ontwerpbrief en bepaal wat er moet worden hersteld in iteratie 3.`,
        commentaar:
          "Sterk omdat het format dwingt tot benoemen wat verloren ging (zin 1) én tot benoemen van het gevolg (zin 2). Sterk omdat de eindvraag de student dwingt tot bewuste positionering: als het verlies onbewust is, herstel je in iteratie 3. Verbeterpunt: voor zwakkere studenten is 'concreet gevolg' lastig — geef bij eerste introductie een voorbeeld vooraf ('bijvoorbeeld: iteratie 1 had een welkom-bericht, iteratie 2 niet meer; gevolg voor een tweede-keer-stagiair is dat hij geen herkenbaarheidsbevestiging krijgt'). Belangrijk: dit format werkt alleen als je het beoordeelt — anders sla studenten het over. Maak het een verplicht inleverstuk.",
        tryItYourself: {
          field: "proto-we-verlies",
          label: "Schrijf de verlies-inventaris voor jouw eigen iteratie 2",
          shortLabel: "Eigen verlies-inventaris",
          hint: "Twee zinnen · expliciete functie of kwaliteit · concreet gevolg · ja/nee-vraag bewust",
          example:
            "Iteratie 1 had [X] dat iteratie 2 niet meer heeft. Voor [gebruikers] betekent dit [gevolg]. Bewust? (ja/nee) — toelichting ...",
        },
      },
      {
        title: "Overdraagbare iteratie-werkvorm — vijf inleverstukken",
        prompt:
          "Schrijf een instructiekaart voor een tweedejaars hbo-design-klas waarin de iteratie-werkvorm (criterium · brief · iteratie 1 · verlies-inventaris · iteratie 3) wordt vastgelegd in vijf inleverstukken. Per inleverstuk: format, maximale lengte, beoordelingsweging, deadline. Houd onder de 250 woorden.",
        voorbeeldOutput: `Iteratie-werkvorm — vijf inleverstukken (eind van twee weken)

1. Iteratie-criterium (PDF, max 30 woorden). Vóór je iets genereert. Weging 15%. Deadline: woensdag week 1.
2. Ontwerpbrief (Markdown, 8-12 zinnen) inclusief functies, drie principes en het criterium. Weging 20%. Deadline: vrijdag week 1.
3. Iteratie 1 (live prototype-link + beoordeling in drie regels). Weging 15%. Deadline: maandag week 2.
4. Verlies-inventaris (twee zinnen + ja/nee-vraag bewust). Weging 20%. Deadline: woensdag week 2.
5. Iteratie 3 (live link + eindkeuze in twee zinnen + drie geaccepteerde gebreken). Weging 30%. Deadline: vrijdag week 2.

Beoordeling: elk stuk telt apart. Een eindprototype zonder iteratie-criterium of zonder verlies-inventaris levert maximaal 50% van de mogelijke punten. Doel van deze weging: voorkomen dat 'mooi eindproduct' het denkproces wegblaast.`,
        commentaar:
          "Sterk omdat de weging aangeeft dat het denkproces (criterium, brief, verlies) meer telt dan het eindproduct (30%). Sterk omdat het kader 'maximaal 50%' student tegen het 'snel iets in elkaar zetten en eindigen'-patroon beschermt. Verbeterpunt: voor de beoordeling van iteratie 1 en iteratie 3 is een rubric nodig — voeg eventueel toe 'rubric in bijlage' en koppel naar les 1.5 (rubric-ontwerp). Belangrijk: weeg in jouw eigen context of 30% voor het eindproduct te laag is — voor sommige opleidingen is product-kwaliteit een sterke wegingsfactor. Stem af met examencommissie.",
        tryItYourself: {
          field: "proto-we-overdracht",
          label: "Schrijf jouw eigen instructiekaart voor de iteratie-werkvorm",
          shortLabel: "Eigen instructiekaart",
          hint: "Vijf inleverstukken · format + lengte + weging + deadline per stuk · beoordelingslogica · max 250 woorden",
          example:
            "1. Iteratie-criterium — format: ... lengte: ... weging: ... deadline: ...\n2. Ontwerpbrief — ...\n3. Iteratie 1 — ...\n4. Verlies-inventaris — ...\n5. Iteratie 3 — ...\nBeoordelingslogica: ...",
        },
      },
    ],

    vakvariaties: [
      {
        vak: "Software-development · mbo/hbo informatica",
        body: "Iteratie-criterium operationeel: 'een nieuwe gebruiker kan een taak afronden zonder docs' of 'API-endpoint reageert < 200ms op p95'. Verlies-inventaris vooral op architectuur — wat had iteratie 1 dat iteratie 2 niet meer heeft (testdekking, modulariteit). Eindgebreken expliciet maken voorkomt 'we hadden geen tijd voor tests'.",
      },
      {
        vak: "UX en interactieontwerp · hbo",
        body: "Iteratie-criterium koppelt aan een echte gebruiker — niet 'mooi'. Verlies-inventaris kan over visuele consistentie, herkenbare patronen, accessibility-basis gaan. Werkvorm direct overdraagbaar als project-aanpak in elke design-module. Stem af met onderzoeksvakken — de iteratie-cyclus is ook ontwerp-research-methode.",
      },
      {
        vak: "Marketing / content · hbo communicatie en mbo media",
        body: "Iteratie-criterium koppelt aan doelgroep en KPI: 'doelgroep X klikt door op punt Y in z seconden'. Verlies-inventaris vaak over toon, lengte of focus — iteratie 2 is helderder maar verliest een nuance die voor de tweede helft van de doelgroep waardevol was. Genoeg-voor-het-doel voorkomt eindeloos 'nog eentje proberen'.",
      },
      {
        vak: "Fysieke producten · CAD, tinkering, hbo design en mbo techniek",
        body: "Iteratie-cyclus blijft gelijk, AI-tool verandert: vraag aan een agent om CAD-script-suggesties of materiaalkeuzes. Verlies-inventaris extra waardevol — wat had iteratie 1 in maakbaarheid dat iteratie 2 niet meer heeft (simpeler tool, minder support). Iteratie 3 bewust eindigen vóór je een fysiek prototype maakt — fysieke iteraties zijn duur.",
      },
      {
        vak: "Onderwijsmaterialen · vakdocenten alle niveaus",
        body: "Voor docenten die zelf lesmateriaal ontwerpen met AI: iteratie-criterium is 'mijn 3 vmbo-tl-klas kan binnen X minuten Y doen zonder hulp'. Verlies-inventaris vaak over context-rijkdom — iteratie 2 is strakker maar mist een voorbeeld dat in jouw klas resoneert. Eindkeuze 'genoeg voor woensdag' onderscheidt productief gebruik van perfectionisme.",
      },
      {
        vak: "Game development · mbo en hbo",
        body: "Iteratie-criterium operationeel rond playertest: 'drie playtesters maken niveau 1 binnen 5 minuten zonder hulp en willen niveau 2 spelen'. Verlies-inventaris over feel-elementen — iteratie 2 heeft snellere fysica maar verliest een gevoel van zwaarte dat iteratie 1 had. Genoeg-voor-vertical-slice voorkomt eeuwig sleutelen aan tuning.",
      },
    ],

    valkuilen: [
      {
        titel: "Verliefd worden op de eerste output",
        watGebeurtEr:
          "v0 levert binnen veertig seconden iets dat er strak uitziet. Je voelt voldoening, slaat de iteratie-vragen over, gaat door naar de volgende taak. Twee weken later blijkt het prototype niet bij de doelgroep aan te sluiten — je hebt geen criterium gehad.",
        fix: "Vóór je het scherm sluit: lees je iteratie-criterium hardop, kijk naar de output, beoordeel in drie regels (werkt / werkt niet / principe). Onder de 60 seconden mag deze stap niet zakken. Iteratie 1 is niet de eindstreep maar het startpunt.",
      },
      {
        titel: "Ontwerpprincipes vergeten in de brief",
        watGebeurtEr:
          "Je briefing bevat alleen functies. v0 maakt de stilistische keuzes — meestal 'modern en strak', vaak ongeschikt voor de specifieke doelgroep. Je merkt het pas bij gebruikerstest, dan ben je vier iteraties verder.",
        fix: "Drie principes in elke brief: één over eenvoud-versus-volledigheid, één over accessibility-basis, één over herkenbare patronen voor jouw doelgroep. Maak deze drie principes een verplichte sectie in je ontwerpbrief-sjabloon.",
      },
      {
        titel: "Geen iteratie-criterium vooraf",
        watGebeurtEr:
          "Je begint te genereren en beoordeelt impressionistisch — 'voelt goed' of 'voelt niet'. Wat 'goed' betekent ontstaat onderweg, en blijft een gevoel. Je leert iets, maar wat je leert is impliciet en niet overdraagbaar aan een student of collega.",
        fix: "Verplicht jezelf: geen prompt naar v0 voordat het criterium in 30 woorden op papier staat. Falsificeer-test erbij. Zonder dat is iteratie geen ontwerpwerk maar generatie-experiment.",
      },
      {
        titel: "Eindeloos itereren tot perfect",
        watGebeurtEr:
          "Iteratie 4, 5, 6 — telkens kleine verbeteringen, telkens een ander accent. Geen eindbeslissing, geen documentatie van gebreken. Op een gegeven moment wordt 'genoeg voor het doel' nooit bereikt, en het project loopt uit zijn tijdsbestek.",
        fix: "Drie iteraties is een richtgetal, geen wet — maar disciplineer jezelf op een eindkeuze. Drie geaccepteerde gebreken expliciet documenteren is de eindstreep. Een prototype zonder gedocumenteerde gebreken is niet af, het loopt nog.",
      },
      {
        titel: "Verlies tussen iteraties onbenoemd",
        watGebeurtEr:
          "Iteratie 2 lost iets op uit iteratie 1, maar verliest stilletjes iets anders. Niemand merkt het, want niemand vergelijkt iteratie 1 en 2 zij-aan-zij. In iteratie 3 verdwijnt het verlies definitief uit het zicht.",
        fix: "Verlies-inventaris als verplichte stap tussen iteratie 2 en 3 (zie worked example 3). Twee zinnen, ja/nee-vraag bewust. Negentig seconden werk dat een ontwerpvaardigheid traint die niemand expliciet leert.",
      },
    ],

    geoefendSpoor: {
      eyebrow: "Voor de geoefende docent",
      titel: "Bouw een opleidings-iteratie-rubric die in alle ontwerpvakken werkt",
      beschrijving:
        "Heb je de werkvorm rond en gebruik je 'm in één module? De volgende stap is een opleidings-iteratie-rubric die in alle ontwerpvakken werkt: van eerste-jaars-introductie tot afstudeerwerk. Per cyclusstap een beoordelingsregel die voor alle modules gelijk is, met per module specifieke voorbeelden van een goed en een onvoldoende inleverstuk. Investering: één teamvergadering plus twee uur voor de coördinator. Opbrengst: studenten herkennen de werkvorm in elke module — iteratie-discipline wordt opleidingsbreed, niet docentafhankelijk. Stem af met afstudeercommissie zodat de werkvorm in eindwerk doorklinkt.",
      opdracht:
        "Lever vóór het volgend studiejaar een opleidings-iteratie-rubric op met beoordelingsregels per inleverstuk, voorbeelden van goed en onvoldoende, en bewijs van afstemming met afstudeercommissie. Test met één pilotvak voordat je opleidingsbreed uitrolt.",
    },

    eindcriteria: [
      {
        criterium: "Iteratie-criterium",
        onder: "Vaag of impressionistisch ('moet er strak uitzien').",
        op: "Max 30 woorden, observeerbaar, falsificeerbaar, met specifieke gebruiker en taak.",
        boven: "+ Falsificeer-test daadwerkelijk uitgevoerd met minimaal drie testpersonen.",
      },
      {
        criterium: "Ontwerpbrief",
        onder: "Alleen functies, geen principes, geen iteratie-criterium.",
        op: "8-12 zinnen met functies, drie principes en iteratie-criterium expliciet.",
        boven: "+ Brief getest met collega; principes bijgesteld op basis van diens vragen.",
      },
      {
        criterium: "Iteratiecyclus doorlopen",
        onder: "Eén versie gegenereerd, geen vergelijking.",
        op: "Drie iteraties met beoordeling per iteratie, koppeling naar criterium.",
        boven: "+ Verlies-inventaris na iteratie 2 expliciet en op bewuste keuze beoordeeld.",
      },
      {
        criterium: "Eindkeuze + gebreken",
        onder: "Geen eindkeuze; iteratie 3 voelt als 'misschien klaar'.",
        op: "Eindkeuze in twee zinnen + drie geaccepteerde gebreken gedocumenteerd.",
        boven: "+ Gebreken vertaald naar 'next-steps' voor een productieversie.",
      },
      {
        criterium: "Overdracht naar studenten",
        onder: "Werkvorm bestaat niet of vraagt alleen eindproduct.",
        op: "Vijf inleverstukken met weging, lengte, deadline.",
        boven: "+ Werkvorm getest in pilot met één klas en bijgesteld na evaluatie.",
      },
    ],

    reflection: [
      "Op welk moment in je eigen iteratie voelde je de verleiding 'genoeg' te zeggen voordat je criterium was gehaald — en wat zegt dat over hoe jij doorgaans omgaat met deadlines onder druk?",
      "Welk verlies uit iteratie 2 had je zonder de inventaris niet opgemerkt, en wat zegt dat over wat je impliciet aan AI toevertrouwt waarvan je dacht dat het van jou kwam?",
      "Welke principes in je ontwerpbrief blijken bij narratief-controle eigenlijk wensen, geen principes — en welke aanpassing in jouw werkvorm voorkomt dat je studenten dezelfde fout maken?",
    ],

    checklist: [
      "Iteratie-criterium van max 30 woorden geschreven, met falsificeer-test",
      "Ontwerpbrief van 8-12 zinnen met functies, drie principes en criterium expliciet",
      "Drie iteraties zelf doorlopen en per iteratie beoordeling op criterium",
      "Verlies-inventaris na iteratie 2 in twee zinnen geschreven met bewuste-keuze-vraag",
      "Eindkeuze iteratie 3 in twee zinnen + drie geaccepteerde gebreken gedocumenteerd",
      "Werkvorm voor studenten in vijf inleverstukken klaar (met weging, deadline)",
      "AVG-check: testgebruikers zijn vrijwilligers met instemming; geen herleidbare data in prototypes",
      "Pilot met één klas of collega ingepland voor het komende blok",
    ],

    verderLezen: [
      {
        titel: "Digital Education Outlook 2026",
        bron: "OECD",
        jaar: 2026,
        link: "https://www.oecd.org/content/dam/oecd/en/publications/reports/2026/01/oecd-digital-education-outlook-2026_940e0dd8/062a7394-en.pdf",
        waarom: "Internationaal beeld van generative-design-tools en iteratie-discipline — onderbouwt waarom de werkvorm nu nodig is.",
      },
      {
        titel: "AI Competency Framework for Teachers — AI Pedagogy",
        bron: "UNESCO",
        jaar: 2024,
        link: "https://www.unesco.org/en/articles/ai-competency-framework-teachers",
        waarom: "Competentie 'AI pedagogy' biedt vocabulaire voor iteratie-discipline als didactische keuze — niet als bijproduct van toolgebruik.",
      },
      {
        titel: "What is AI Literacy? Competencies and Design Considerations",
        bron: "Long & Magerko · CHI Conference",
        jaar: 2020,
        link: "https://dl.acm.org/doi/fullHtml/10.1145/3313831.3376727",
        waarom: "Vijf vragen waarmee je toetst of een ontwerpwerkvorm conceptueel begrip vraagt — direct toepasbaar op je iteratie-werkvorm.",
      },
      {
        titel: "Effective Teacher Professional Development",
        bron: "Darling-Hammond e.a. · Learning Policy Institute",
        jaar: 2017,
        link: "https://learningpolicyinstitute.org/sites/default/files/product-files/Effective_Teacher_Professional_Development_REPORT.pdf",
        waarom: "Zeven kenmerken — onderbouwt waarom de opleidings-iteratie-rubric (geoefend spoor) effectieve PD is.",
      },
    ],

    nextLesson: "beoordelen-met-ai",
  },

  /* ────────────────────────────────────────────────────────────────────────
   *  LES 2.8 — Beoordelen van studentwerk wanneer AI is gebruikt · Casusbespreking
   *
   *  Drie casussen:
   *  A: student levert sterk AI-ondersteund werk in zonder vermelding
   *  B: docent gebruikt AI om feedback te schrijven; studenten merken toon
   *  C: opleidingscommissie wil 'AI-vrije' toetsmomenten verplichten
   *  Legal callout: Npuls Handreiking 1 (2024)
   *  ActionPlan: 4 stappen uit Handreiking
   * ──────────────────────────────────────────────────────────────────────── */

  "beoordelen-met-ai": {
    format: "casusbespreking",

    summary:
      "Beoordelen in een wereld waarin AI breed wordt gebruikt is geen detectie-vraag — het is een didactische én ethische rolvraag. In deze les werk je drie herkenbare casussen door (student levert AI-werk in zonder vermelding, docent schrijft feedback met AI, opleidingscommissie wil 'AI-vrije' momenten), spiegel je elk tegen drie perspectieven en twee collega-uitspraken, en pas je de Npuls Handreiking 1 (2024) toe op vier concrete aanpassingen in je eigen beoordelingspraktijk.",

    duration: {
      total: "75-90 minuten",
      blocks: [
        { label: "Aanleiding", min: 8 },
        { label: "Conceptueel kader", min: 12 },
        { label: "Casus A bespreken", min: 14 },
        { label: "Casus B bespreken", min: 14 },
        { label: "Casus C bespreken", min: 14 },
        { label: "Action plan vier stappen", min: 14 },
        { label: "Reflectie + sectievoorbereiding", min: 8 },
      ],
    },

    opening: {
      eyebrow: "Aanleiding",
      aanleiding: `Een mbo-docent communicatie krijgt drie essays binnen die opvallend goed zijn. Twee zijn duidelijk AI-ondersteund — geen melding gemaakt. Een hbo-docent ICT-management ontvangt klacht-mails van studenten: 'jouw feedback klinkt niet meer als jij'. Een opleidingscommissie discussieert over 'AI-vrije eindtoetsen' — een deel van de docenten wil het beleid morgen al, de andere helft houdt het tegen omdat het werkdruk verdubbelt.

Drie scenes uit één opleidingsweek. Geen daarvan is een detectie-probleem in technische zin — geen tool die het oplost, geen Turnitin-update die het wegneemt. Allemaal vragen ze van jou als docent dezelfde drie dingen: welke didactische keuze maak ik, welke verantwoording bied ik, en met welke collega's stem ik dat af. De Npuls Handreiking 1 *Toetsing en examinering in het tijdperk van AI* (2024) wijst de richting: weg van blanket-verbod én van laissez-faire, naar regimes met expliciete verantwoording.

In deze les pak je drie casussen beet. Per casus zie je drie perspectieven en twee uitspraken van fictieve collega's waar jij stelling op neemt. Aan het einde formuleer je vier aanpassingen in je eigen beoordelingspraktijk — niet 'in de toekomst', maar vóór het volgende toetsmoment.`,
      waaromNu: `Npuls publiceerde in 2024 de *Handreiking 1 — Toetsing en examinering in het tijdperk van AI*. De handreiking onderscheidt vier toetsregimes (AI-verboden, AI-toegestaan-met-verantwoording, AI-vereist, mengvormen) en biedt vier ankerpunten: transparantie, vakinhoudelijke verdedigbaarheid, verantwoording, toetsdialoog per programma. Voor mbo, hbo en wo is dit het bruikbaarste werkdocument. EU AI Act art. 4 maakt vanaf 2 februari 2025 expliciet dat scholen aantoonbare beoordelingsdiscipline moeten hebben.`,
    },

    conceptueel: {
      eyebrow: "Conceptueel kader",
      intro: `Beoordelen wanneer AI is gebruikt valt uiteen in drie spanningsvelden. Het eerste: detectie versus dialoog. De impuls 'AI-gebruik aantonen met tooling' is begrijpelijk maar onbetrouwbaar — detectie-tools hebben hoge fout-positief rates, zijn omzeilbaar, en plaatsen jou in een politionele rol die je didactisch niet wilt. Het werkbare alternatief: dialoog over verantwoording. Wat heeft de student door AI laten doen, wat zelf, waar zit haar oordeel. Niet detectie maar gesprek wordt het bewijs.

Het tweede spanningsveld: docent als gebruiker van AI versus docent als beoordelaar van AI-gebruik. Steeds meer docenten gebruiken AI voor feedback, rubrics, herformulering. Studenten merken dat — niet altijd in technische zin maar in toon, lengte of patronen. Een docent die haar studenten verantwoording vraagt zonder zelf transparant te zijn over haar eigen AI-gebruik, ondermijnt de geloofwaardigheid van haar beoordeling. De Npuls Handreiking 1 expliciteert dit: verantwoording geldt voor beide kanten van de tafel.

Het derde spanningsveld: individuele didactische keuze versus institutionele helderheid. Een docent kan een persoonlijke aanpak hebben; een opleiding heeft beleid nodig dat docenten kunnen volgen en studenten kunnen verwachten. 'AI-vrije eindtoetsen' is geen oplossing als de werkdruk niet meegroeit; 'AI-toegestaan-overal' is geen oplossing als sommige leerdoelen alleen zonder tool aantoonbaar zijn. De Npuls-aanbeveling van toetsdialoog per programma — collegiale kalibratie op opleidingsniveau — is het pragmatische middenpad.

De praktische werkregel voor jouw beoordeling: maak per toetsmoment het regime expliciet (verboden, toegestaan-met-verantwoording, vereist, mengvorm), eis verantwoording wanneer toegestaan, gebruik mondelinge verantwoording bij hoog-gewicht-toetsen, en koppel je keuze terug aan de sectie. Dit is geen jurisprudentie, dit is een routinepraktijk waarin elk toetsmoment één regel op het toetsblad krijgt: AI-regime + verantwoordingseis.`,
      mentalModel: {
        naam: "Verantwoording als wederzijdse plicht",
        beschrijving: `In een vakvergadering staat verantwoording centraal als wederzijds — student verantwoordt haar werk, jij verantwoordt jouw beoordeling. AI-gebruik valt onder dezelfde regel. Als de student transparant moet zijn over wat AI deed, ben jij transparant over wat jouw rubric en jouw feedback heeft vormgegeven. Niet symmetrisch (jullie rollen verschillen) maar wederzijds (verantwoordingsverwachting geldt beide kanten). Wie van studenten transparantie eist zonder zelf transparant te zijn, ondergraaft het hele systeem.`,
      },
      kernbegrippen: [
        {
          term: "Toetsregime",
          uitleg: "Expliciete labeling per toetsmoment: AI-verboden, AI-toegestaan-met-verantwoording, AI-vereist, mengvorm. Vermijdt 'niet besproken' — dat is impliciet AI-toegestaan zonder kader.",
        },
        {
          term: "Verantwoordingsvraag",
          uitleg: "Standaardvraag bij inlevering: welk AI-gebruik, welk deel eigen werk, welke keuze anders dan AI voorstelde. Geen detectie, wel dialoog.",
        },
        {
          term: "Mondelinge verantwoording",
          uitleg: "Korte uitleg (5-10 min) van de student bij hooggewicht-toetsen waar zij haar werk toelicht. Verlaagt AI-overname-risico zwaar zonder detectie-tooling.",
        },
        {
          term: "Toetsdialoog per programma",
          uitleg: "Npuls-aanbeveling: collegiale kalibratie op opleidingsniveau in plaats van centraal regelboek. Per opleidingsfase concrete richtlijnen.",
        },
        {
          term: "Wederzijdse transparantie",
          uitleg: "Verantwoordingsplicht geldt voor beide kanten — student over haar werk, docent over haar feedback en beoordeling. Anders verliest het systeem geloofwaardigheid.",
        },
      ],
    },

    learningGoals: [
      "Je benoemt vier toetsregimes en kunt per regime een werkbare controlemaatregel beschrijven die past bij jouw vak en niveau.",
      "Je formuleert per casus jouw eigen positie tegenover drie perspectieven en twee collega-uitspraken — concreet, verdedigbaar, niet polariserend.",
      "Je past de vier ankerpunten uit Npuls Handreiking 1 toe op één eigen toets en formuleert vier concrete aanpassingen voor het volgende toetsmoment.",
      "Je bereidt één beslisbaar voorstel voor de eerstvolgende vaksectie of opleidingscommissie voor — ja/nee, einddatum, eigenaar.",
    ],

    scenario: {
      title: "Werksituatie",
      context:
        "Het is week 9 in een hbo informatica-opleiding. Drie incidenten op één week tijd: een student levert sterk AI-ondersteund werk in zonder vermelding, een collega's feedback wordt door studenten herkend als 'AI-tone', en de opleidingscommissie discussieert over 'AI-vrije eindtoetsen'. Je opleidingsmanager vraagt je voor de volgende vergadering een notitie met vier concrete aanpassingen voor de eigen module. Geen abstract beleidsstuk — een werkdocument dat jij vanaf volgende week kunt toepassen.",
      role: "Docent · hbo informatica, mbo niveau 4 ICT-vakken of vergelijkbare programmeer-/ontwerpopleiding",
      tools: "Npuls Handreiking 1 (2024) · eigen toetsplan · papier voor action plan",
    },

    casusbesprekingTitle: "Drie casussen, drie perspectieven, vier concrete aanpassingen.",
    casusbesprekingIntro:
      "Per casus zie je drie perspectieven en twee collega-uitspraken. Eerst formuleer je je reactie, dan kies je een positie. Aan het einde van de les vertaal je inzichten in vier aanpassingen die direct in je eigen module landen.",

    cases: [
      {
        title: "Casus A — De student met sterk AI-ondersteund werk zonder vermelding",
        context:
          "Een tweedejaars hbo informatica-student levert haar opdracht 'ontwerp en implementeer een REST-API voor een ticketsysteem' in. De code is technisch sterker dan ze in de oefenmomenten van de afgelopen weken liet zien: nette OpenAPI-spec, consistente foutafhandeling, drie testlagen waar er één gevraagd was. Mondeling kan ze het bestand 'auth.py' uitleggen, maar bij gerichte vragen over haar testkeuze (waarom mocks bij integration tests) struikelt ze. Geen melding van AI-gebruik in haar verantwoordingsformulier — dat veld stond op 'n.v.t.'. Je hebt geen detectiebewijs. Andere studenten met vergelijkbaar werk hebben wel AI-gebruik gemeld.",
        perspectives: [
          {
            role: "De student",
            view:
              "Ik heb Cursor gebruikt om mijn architectuur te schetsen, en daarna heb ik elke functie zelf gelezen en aangepast. Ik dacht dat dat 'eigen werk' was. Andere studenten leveren ook code in zonder verder uitleg — ik voelde me onzeker waar de grens lag.",
          },
          {
            role: "De docent",
            view:
              "Ik denk dat ik weet wat er is gebeurd, maar ik heb geen bewijs en de student heeft niet expliciet gelogen — ze heeft 'n.v.t.' aangevinkt waar mijn formulier 'AI-gebruik' niet eenduidig definieert. Daar zit een gat in mijn toetsstructuur, niet in haar werk.",
          },
          {
            role: "De examencommissie",
            view:
              "Zonder hard bewijs (procesbewijs, eerdere onregelmatigheden) is een sanctie risicovol. De toetsvorm moet voorkomen dat dit gat ontstaat. Een verantwoordingsvraag met heldere voorbeelden van 'wat valt onder AI-gebruik' is hier de structurele fix — niet detectie achteraf.",
          },
        ],
        statements: [
          {
            author: "Collega 1",
            quote:
              "Als je geen bewijs hebt, doe je niets. Anders sta je over twee weken in een hoorzitting waar je niets kunt onderbouwen.",
            agreePrompt:
              "Welk bewijs zou jij minimaal nodig hebben om een verantwoordingsgesprek te initiëren — niet een sanctie, wel een gesprek? Schrijf in twee zinnen.",
          },
          {
            author: "Collega 2",
            quote:
              "Ik vraag elk verantwoordingsformulier voortaan om concrete voorbeelden van AI-gebruik — niet ja/nee. Werkt voor mij beter dan detectie ooit deed.",
            agreePrompt:
              "Welke twee voorbeeldcategorieën zou jij in je formulier opnemen die in jouw vak het meest voorkomen? Concreet, geen abstracties.",
          },
        ],
        workspaceFields: {
          reactionField: {
            field: "beoord-casus-a-reactie",
            label: "Jouw eerste reactie op casus A",
            shortLabel: "Reactie A",
            hint: "Drie regels: wat zie je hier, wat is de eerste stap, welk gat in jouw eigen praktijk legt dit bloot",
            placeholder:
              "Wat ik hier zie: ...\nWat is de eerste stap: ...\nWelk gat in mijn eigen praktijk: ...",
            rows: 6,
          },
          positionField: {
            field: "beoord-casus-a-positie",
            label: "Jouw positie tegenover de twee collega-uitspraken",
            shortLabel: "Positie A",
            hint: "Per uitspraak: in hoeverre eens of oneens, en wat je concreet doet in je eigen praktijk",
            placeholder:
              "Bij collega 1: ... — wat ik in mijn praktijk doe: ...\nBij collega 2: ... — wat ik in mijn praktijk doe: ...",
            rows: 6,
          },
        },
      },
      {
        title: "Casus B — De docent die AI gebruikt voor feedback",
        context:
          "Een mbo-docent ICT-vakken beoordeelt 26 portfolio-opdrachten in twee weken. Tijdens periode 3 schakelt zij over op een AI-tool voor de eerste feedback-laag: ze geeft per studentwerk drie kernpunten aan AI, krijgt een 200-woorden feedbacktekst terug, past die in vijf minuten persoonlijk aan, en verstuurt. Werkdruk: gehalveerd. Drie weken later komen klachten van studenten: 'jouw feedback klinkt anders, soms generiek' en in één geval 'jouw feedback voor mij en mijn klasgenoot lijkt opvallend op elkaar — herkenbare zinnen.' De docent heeft niet vermeld dat ze AI gebruikt.",
        perspectives: [
          {
            role: "De docent",
            view:
              "Ik bewerk elke feedback, lees alles na, voeg specifieke punten toe. Wat ik instuur is mijn beoordeling — net zoals ik typecorrecties laat doen door spelling-checkers. AI-vermelding voor élk werkproces is werkbaar als beleid niet houdbaar.",
          },
          {
            role: "De studenten",
            view:
              "We willen geen AI-feedback als basis. Voor de studie betalen we voor jouw vakblik. Generieke feedback voelt als gerommel met onze tijd. En als wij onze AI-bron moeten vermelden, waarom jij niet?",
          },
          {
            role: "De opleidingscommissie",
            view:
              "De vraag is niet 'mag een docent AI gebruiken voor feedback' — die vraag is achterhaald. De vraag is 'onder welke transparantie-voorwaarden'. Wederzijdse verantwoording vereist dat de docent ten minste het werkproces toelicht, vergelijkbaar met wat zij van studenten vraagt.",
          },
        ],
        statements: [
          {
            author: "Collega 1",
            quote:
              "Ik heb het tegen jou nooit eerlijk gezegd, maar ik gebruik AI ook voor mijn feedback. Iedereen doet het, weinig zeggen het hardop.",
            agreePrompt:
              "Welk niveau van transparantie zou jij van jezelf willen vragen om geloofwaardig te blijven richting studenten? Concreet — in welke zin op welk moment.",
          },
          {
            author: "Collega 2",
            quote:
              "Feedback met AI is fundamenteel iets anders dan een lesvoorbereiding met AI. Bij feedback praat je een student in haar leerproces — daar past geen verborgen tussenpersoon.",
            agreePrompt:
              "Welk onderscheid in jouw eigen praktijk maak je tussen 'AI als spellingschecker' en 'AI als feedbackschrijver'? Geef een concrete grens.",
          },
        ],
        workspaceFields: {
          reactionField: {
            field: "beoord-casus-b-reactie",
            label: "Jouw eerste reactie op casus B",
            shortLabel: "Reactie B",
            hint: "Drie regels: wat speelt hier, waar staat het collega-handelen en het studenten-gevoel, wat zou jouw werkpraktijk verschillen",
            placeholder:
              "Wat speelt hier: ...\nWaar staat het: ...\nWat zou ik verschillend doen: ...",
            rows: 6,
          },
          positionField: {
            field: "beoord-casus-b-positie",
            label: "Jouw positie tegenover de twee collega-uitspraken",
            shortLabel: "Positie B",
            hint: "Per uitspraak: in hoeverre eens of oneens, en wat dat voor jouw eigen feedback betekent",
            placeholder:
              "Bij collega 1: ... — wat ik concreet ga doen: ...\nBij collega 2: ... — wat ik concreet ga doen: ...",
            rows: 6,
          },
        },
      },
      {
        title: "Casus C — De opleidingscommissie wil 'AI-vrije' toetsmomenten verplichten",
        context:
          "Een hbo-opleidingscommissie informatica discussieert al twee maanden over AI-beleid. Een groep docenten (vijf van twaalf) wil 'AI-vrije eindtoetsen' verplicht: alle hoog-gewicht-toetsen onbewaakt op locatie, geen tools, geen internet. Hun argument: alleen dan weet je wat een student zelf kan. Een tegenovergestelde groep (vier docenten) wijst op de werkdruk — onbewaakte toetsen vragen logistiek en surveillance die de opleiding niet structureel kan dragen. Drie docenten zijn neutraal. Beslismoment over twee weken. De studieleider vraagt jou een notitie met je positie — met onderbouwing die in de vergadering staat.",
        perspectives: [
          {
            role: "De voor-stem groep",
            view:
              "Zonder een AI-vrij toetsmoment per periode blijft elke beoordeling kwetsbaar. Alleen daar zien we wat een student écht zelf kan. Werkdruk is een symptoom, niet een principe — als de toets niet uitvoerbaar is, hebben we een logistiek probleem, niet een toetsprobleem.",
          },
          {
            role: "De tegen-stem groep",
            view:
              "AI-vrij voelt rechtvaardig maar verdubbelt onze werkdruk en discrimineert studenten die thuis onder druk werken. Nog erger: het laat in beroepspraktijk geen voorbereiding zien — niemand werkt straks AI-vrij. We bouwen een schaduwopleiding.",
          },
          {
            role: "De Npuls-handreiking-pragmatist",
            view:
              "De Handreiking biedt vier regimes — niet één. AI-verboden waar dat verdedigbaar is (kerncompetentie zonder tool), AI-toegestaan-met-verantwoording in de meeste opdrachten, AI-vereist waar professionele realiteit dat vraagt. Een rigide 'AI-vrij' is geen kader, het is een symptoombestrijder.",
          },
        ],
        statements: [
          {
            author: "Docent 1",
            quote:
              "We blijven hier eindeloos discussiëren. Geef me één rigide regel — verboden of toegestaan — dan kan ik mijn werk doen. Genuanceerd beleid is in de praktijk niet uitvoerbaar.",
            agreePrompt:
              "Wat zou jij als 'minimaal werkbaar genuanceerd beleid' aanbrengen — drie regels die voldoende houvast geven zonder rigide te zijn? Concrete formulering, geen principes.",
          },
          {
            author: "Docent 2",
            quote:
              "Ik werk al volgens de Npuls-vier-regimes. Mijn toetsplan markeert elk moment expliciet — werkt fijn, geen klachten. Het is geen toverformule, het is werk.",
            agreePrompt:
              "Welk eerste toetsmoment in jouw eigen module zou jij komende periode expliciet labelen — en welk regime past daar? Schrijf in twee zinnen.",
          },
        ],
        workspaceFields: {
          reactionField: {
            field: "beoord-casus-c-reactie",
            label: "Jouw eerste reactie op casus C",
            shortLabel: "Reactie C",
            hint: "Drie regels: wat speelt hier in jouw eigen opleiding, welke groep ligt het dichtst bij jouw positie, wat zou jouw concrete inbreng zijn",
            placeholder:
              "Wat speelt hier in mijn opleiding: ...\nWelke groep dicht bij mijn positie: ...\nMijn concrete inbreng: ...",
            rows: 6,
          },
          positionField: {
            field: "beoord-casus-c-positie",
            label: "Jouw positie tegenover de twee docenten-uitspraken",
            shortLabel: "Positie C",
            hint: "Per uitspraak: in hoeverre eens of oneens, en wat dat voor jouw inbreng in de commissie betekent",
            placeholder:
              "Bij docent 1: ... — wat ik in de vergadering inbreng: ...\nBij docent 2: ... — wat ik in de vergadering inbreng: ...",
            rows: 6,
          },
        },
      },
    ],

    legalCallout: {
      source: "Npuls · Toetsing en examinering in het tijdperk van AI — Handreiking 1 (2024)",
      title: "Wat de handreiking zegt over beoordelen",
      body: `Npuls Handreiking 1 *Toetsing en examinering in het tijdperk van AI* (2024) onderscheidt vier toetsregimes en biedt vier ankerpunten voor beoordeling.

Vier regimes: (1) *AI-verboden* — kerncompetenties zonder tool, bewaakte momenten; (2) *AI-toegestaan-met-verantwoording* — student licht haar AI-gebruik expliciet toe in verantwoordingsformulier; (3) *AI-vereist* — opdracht vraagt expliciet AI-inzet met reflectie op output en proces; (4) *mengvormen* — meerdere regimes binnen één lesblok of project.

Vier ankerpunten: *transparantie* (studenten weten vooraf welk regime geldt en welke verantwoording wordt gevraagd), *vakinhoudelijke verdedigbaarheid* (de toets meet wat hij beoogt te meten ook in AI-omgeving), *verantwoording bij gebruik* (zowel student als docent verantwoorden inzet), *toetsdialoog per programma* (collegiale kalibratie op opleidingsniveau).

De handreiking is expliciet over wederzijdsheid: *"De verantwoordingsplicht in een AI-bewuste toetspraktijk geldt voor beide kanten van de tafel — student en docent."* Dat raakt direct casus B: een docent die AI-gebruik niet meldt, ondergraaft de verantwoordingscultuur die zij van studenten vraagt.

Voor casus C is de aanbeveling: niet één rigide regel, wel een opleidingsbreed afsprakenkader met expliciete regimes per toetsmoment plus jaarlijkse kalibratie tussen vakdocenten. Dat is geen ontwijking — dat is wat 'beleid in een snel veranderende technologie' in de praktijk betekent.`,
      link: "https://www.npuls.nl/_assets/cdcb37e6-11f7-468f-962b-06fe599a8a23/Visie-op-toetsing-en-examinering-onderbouwing-Npuls.pdf",
    },

    actionPlan: {
      source: "Npuls Handreiking 1 — toegepast op jouw beoordelingspraktijk",
      title: "Vier aanpassingen die je vóór het volgende toetsmoment doorvoert",
      steps: [
        {
          title: "Label elk toetsmoment expliciet met regime + verantwoordingseis",
          body: "Loop je toetsplan langs en zet bij elk moment één regel: AI-verboden, AI-toegestaan-met-verantwoording, AI-vereist of mengvorm. Voor toegestaan-met-verantwoording: welke specifieke verantwoording (formulier, mondelinge toelichting, logbook). Vermijd 'niet besproken' — dat is impliciet AI-toegestaan zonder kader.",
          workspace: {
            field: "beoord-action-regime",
            label: "Mijn toetsmomenten geclassificeerd",
            placeholder:
              "Toets 1 (...): regime = ... · verantwoordingseis = ...\nToets 2 (...): regime = ... · verantwoordingseis = ...\nToets 3 (...): regime = ... · verantwoordingseis = ...",
            rows: 7,
          },
        },
        {
          title: "Herschrijf het verantwoordingsformulier met concrete voorbeelden",
          body: "Een formulier met enkel 'AI-gebruik ja/nee' is onvoldoende. Voeg twee tot drie categorieën met voorbeelden toe (architectuur-suggesties, code-generatie van boilerplate, herschrijven van eigen tekst). De student vinkt aan wat van toepassing was en licht in 80 woorden toe wat zij anders koos dan AI voorstelde.",
          workspace: {
            field: "beoord-action-formulier",
            label: "Mijn herschreven verantwoordingsformulier",
            placeholder:
              "Categorie 1 (...): voorbeeld 1 ... voorbeeld 2 ...\nCategorie 2 (...): ...\nCategorie 3 (...): ...\nToelichtingsveld (80 woorden): vraag = ...",
            rows: 8,
          },
        },
        {
          title: "Voeg mondelinge verantwoording toe bij minimaal één hooggewicht-toets per periode",
          body: "Vijf tot tien minuten per student waarin zij haar werk toelicht. Drie standaardvragen: (1) welke kernkeuze maakte je en wat overwoog je nog meer, (2) waar week je af van wat AI voorstelde en waarom, (3) demonstreer een wijziging in je werk die alleen werkt als je de structuur snapt. Dit vermindert AI-overname-risico zwaar zonder dat je een detectie-tool nodig hebt.",
          workspace: {
            field: "beoord-action-mondeling",
            label: "Welke toets krijgt mondelinge verantwoording",
            placeholder:
              "Toets: ...\nDuur per student: ... min\nDrie standaardvragen:\n1) ...\n2) ...\n3) ...\nPlanning: ...",
            rows: 9,
          },
        },
        {
          title: "Maak een wederzijdse-transparantie-afspraak voor je eigen feedback",
          body: "Wat communiceer jij over jouw eigen AI-gebruik bij feedback? Een korte zin in je beoordelingsbrief volstaat ('AI heeft de eerste structuur van deze feedback opgesteld, ik heb alles gelezen en specifieke punten toegevoegd' of 'deze feedback heb ik volledig zelf geschreven'). Zonder deze afspraak ondergraaf je de verantwoording die je van studenten vraagt.",
          workspace: {
            field: "beoord-action-transparantie",
            label: "Mijn wederzijdse-transparantie-afspraak",
            placeholder:
              "Mijn standaardzin in feedback over AI-gebruik: ...\nWanneer ik het wel gebruik: ...\nWanneer ik het niet gebruik: ...\nHoe ik dit aan studenten communiceer (week 1, op blackboard, in bewerkingsregeling): ...",
            rows: 8,
          },
        },
      ],
    },

    valkuilen: [
      {
        titel: "Detectie-tools vertrouwen als bewijs",
        watGebeurtEr:
          "Je koopt of activeert een AI-detectie-tool en gebruikt de score als bewijs voor sanctie. Fout-positieven leiden tot onterechte beschuldigingen, fout-negatieven laten echte gevallen door. De rechtszekerheid verdampt.",
        fix: "Vervang detectie door verantwoordingsvragen plus mondelinge toelichting. Een student die haar werk uitlegt levert robuuster bewijs dan elke detectiescore.",
      },
      {
        titel: "Verantwoordingsformulier met alleen ja/nee",
        watGebeurtEr:
          "Je vraagt 'AI gebruikt? ja/nee'. Eerlijke studenten vinken ja, kruisaftellen leidt naar verdenking. Sluwe studenten vinken nee — geen extra info. Het formulier doet niet wat je wilde.",
        fix: "Vraag categorieën van AI-gebruik met voorbeelden, plus een toelichtingsveld waar de student vertelt wat zij anders koos dan AI voorstelde. Dat creëert dialoog, geen vinkjes.",
      },
      {
        titel: "Docent niet transparant over eigen AI-gebruik",
        watGebeurtEr:
          "Je vraagt van studenten transparantie maar bent zelf niet open over wanneer je AI gebruikt voor feedback, rubrics of herformulering. Studenten merken het, geloofwaardigheid kalft af, jouw verantwoordingseisen aan hen voelen als dubbele standaard.",
        fix: "Korte standaardzin in elke feedbackronde: of je AI hebt gebruikt en hoe. Wederzijdse transparantie houdt het systeem geloofwaardig.",
      },
      {
        titel: "AI-vrij eindtoets als universeel antwoord",
        watGebeurtEr:
          "Je legt alle hooggewicht-toetsen onbewaakt op locatie. Werkdruk verdubbelt, studenten met thuiscontext worden gedupeerd, beroepspraktijk wordt niet voorbereid. De maatregel was een impuls, geen kader.",
        fix: "Volg Npuls vier-regimes-aanpak: AI-verboden waar verdedigbaar (specifieke kerncompetenties), niet als reflex over alle toetsen. Combineer met mondelinge verantwoording — dat haalt het detectie-vraagstuk weg zonder werkdruk-explosie.",
      },
      {
        titel: "Sectie-besluit eindeloos uitstellen",
        watGebeurtEr:
          "Beslismoment over AI-beleid blijft drie vergaderingen lang op de agenda. Niemand wil knopen doorhakken zonder zekerheid. Intussen kiest elk docent zijn eigen route, studenten ontmoeten incoherent beleid.",
        fix: "Formuleer een ja/nee-voorstel per vergadering. 'Spreken we af dat alle docenten vóór 1 november elk toetsmoment expliciet labelen met regime?' is beslisbaar. Stem af, evalueer over drie maanden.",
      },
    ],

    geoefendSpoor: {
      eyebrow: "Voor de geoefende docent",
      titel: "Voer een toetsdialoog van 90 minuten in jouw sectie",
      beschrijving:
        "Heb je je vier aanpassingen ingevoerd en wil je verder? Plan een toetsdialoog van 90 minuten in je vaksectie of opleidingscommissie. Drie casussen meebrengen uit eigen toetspraktijk (geanonimiseerd), met per casus de vier-regimes-vraag. Doel: niet één gemeenschappelijke regel, wel een gedeeld vocabulaire en drie concrete sectie-afspraken. Investering: één voorbereidings-uur plus de vergadering. Opbrengst: collegiale kalibratie zoals Npuls aanbeveelt — minder eilanden, meer coherentie voor studenten.",
      opdracht:
        "Lever vóór einde semester een verslag op van één toetsdialoog met drie casussen, drie sectie-afspraken en een evaluatiedatum over drie maanden. Deel met opleidingsmanager en met examencommissie.",
    },

    eindcriteria: [
      {
        criterium: "Casus-reacties + posities",
        onder: "Posities polariserend ('AI is altijd fout' of 'AI mag altijd') zonder nuance.",
        op: "Per casus drie regels eerste reactie + heldere positie tegenover twee uitspraken.",
        boven: "+ Concrete handeling per positie benoemd voor de eigen praktijk binnen 4 weken.",
      },
      {
        criterium: "Toetsregimes",
        onder: "Eén regime ('verboden' of 'toegestaan') voor alle toetsen.",
        op: "Elk toetsmoment expliciet gelabeld met regime + verantwoordingseis.",
        boven: "+ Mengvormen toegepast waar leerdoelen dat vragen.",
      },
      {
        criterium: "Verantwoordingsformulier",
        onder: "Ja/nee-vinkje, geen voorbeelden.",
        op: "Twee tot drie categorieën met voorbeelden + toelichtingsveld van 80 woorden.",
        boven: "+ Formulier afgestemd met collega's en in sectie gedeeld.",
      },
      {
        criterium: "Mondelinge verantwoording",
        onder: "Geen mondelinge component bij hoog-gewicht-toets.",
        op: "Minimaal één hooggewicht-toets met 5-10 min mondelinge verantwoording, drie standaardvragen.",
        boven: "+ Vragen getest in pilot en bijgesteld op basis van ervaring.",
      },
      {
        criterium: "Wederzijdse transparantie",
        onder: "Geen open communicatie over eigen AI-gebruik in feedback.",
        op: "Standaardzin in feedbackbrief over eigen AI-inzet.",
        boven: "+ Standaardzin afgestemd met sectie zodat alle docenten gelijke transparantie bieden.",
      },
    ],

    reflection: [
      "Bij welke van de drie casussen herkende jij jezelf het meest — als uitvoerder, beoordelaar of getuige? Wat zegt jouw positie iets over wat jij vermijdt in de dagelijkse praktijk?",
      "Welke wederzijdse-transparantie-zin durf jij volgende week in jouw feedback op te nemen — en welke weerstand voel je daarbij? Wat zegt die weerstand over jouw beeld van een docent-rol?",
      "Welke van de vier action-plan-stappen voelt onveilig om door te voeren, en wat is er aan voorbereidings- of sectie-werk nodig voordat hij wel werkt? Welke collega heb je daarbij echt nodig?",
    ],

    checklist: [
      "Drie casussen besproken (mondeling met collega of in tweetal of schriftelijk doorgewerkt)",
      "Per casus eigen positie tegenover twee uitspraken geformuleerd",
      "Toetsplan langs vier regimes gelegd, elk moment gelabeld",
      "Verantwoordingsformulier herschreven met categorieën + voorbeelden + toelichtingsveld",
      "Mondelinge verantwoording gepland voor minimaal één hooggewicht-toets",
      "Wederzijdse-transparantie-zin geformuleerd voor eigen feedback",
      "Beslisbaar voorstel klaar voor eerstvolgende sectie- of opleidingscommissievergadering",
      "AVG-check: verantwoordingsformulier vraagt geen herleidbare data over derden",
    ],

    verderLezen: [
      {
        titel: "Toetsing en examinering in het tijdperk van AI — Handreiking 1",
        bron: "Npuls",
        jaar: 2024,
        link: "https://www.npuls.nl/_assets/cdcb37e6-11f7-468f-962b-06fe599a8a23/Visie-op-toetsing-en-examinering-onderbouwing-Npuls.pdf",
        waarom: "Hét Nederlandse werkdocument voor beoordelen in een AI-omgeving — vier regimes, vier ankerpunten, direct toepasbaar.",
      },
      {
        titel: "AI Competency Framework for Teachers — Ethics of AI",
        bron: "UNESCO",
        jaar: 2024,
        link: "https://www.unesco.org/en/articles/ai-competency-framework-teachers",
        waarom: "Competentie 'ethics of AI' bevat expliciet wederzijdse verantwoording — bruikbaar als kader voor casus B.",
      },
      {
        titel: "Werken aan AI-geletterdheid op school",
        bron: "Kennisnet",
        jaar: 2025,
        link: "https://www.kennisnet.nl/artificial-intelligence/werken-aan-ai-geletterdheid-op-school/",
        waarom: "Voor docenten in po/vo het praktische werkkader — vier-stappen aanpak ook bruikbaar voor mbo/hbo-beoordelingsbeleid.",
      },
      {
        titel: "EU AI Act, artikel 4 — AI Literacy",
        bron: "Europese Commissie",
        jaar: 2024,
        link: "https://artificialintelligenceact.eu/article/4/",
        waarom: "Wettelijke grond voor wederzijdse verantwoording — jouw school moet aantoonbaar zorgen voor AI-bewuste praktijk, ook bij beoordeling.",
      },
    ],

    nextLesson: "praktijkopdracht-2",
  },

  /* ────────────────────────────────────────────────────────────────────────
   *  LES 2.9 — Praktijkopdracht: mini-prototype met AI + onderwijscasus
   *           Praktijkopdracht
   *
   *  Drie keuzepaden:
   *  A: prototype + lesactiviteit waarin studenten dit prototype kritisch
   *     bevragen
   *  B: prototype + rubric voor het beoordelen ervan in een project
   *  C: prototype + reflectie-werkvorm over algoritmisch denken
   *
   *  Zeven deliverables · peer review (3 vragen) · transferhaak (5 dagen)
   *  nextLesson: null (laatste les Module 02)
   * ──────────────────────────────────────────────────────────────────────── */

  "praktijkopdracht-2": {
    format: "praktijkopdracht",

    summary:
      "Module 02 sluit niet af met een toets maar met productiewerk: je bouwt zelf één mini-prototype met AI-ondersteuning én documenteert er een onderwijscasus omheen. Drie keuzepaden — kritisch bevragen, beoordelen met rubric, of reflectie op algoritmisch denken. Zeven deliverables. Een collega geeft je feedback langs drie vragen. Vervolgens voer je het uit in je eigen klas binnen vijf werkdagen. Het bewijs van Module 02 zit niet in je inleverstuk — het zit in wat jouw studenten daarna doen.",

    duration: {
      total: "3-4 uur (excl. lesuur)",
      blocks: [
        { label: "Pad kiezen + briefing schrijven", min: 30 },
        { label: "Iteratie 1 mini-prototype", min: 45 },
        { label: "Iteratie 2 + verlies-inventaris", min: 30 },
        { label: "Onderwijscasus uitwerken (pad A/B/C)", min: 45 },
        { label: "Peer review aanvragen + verwerken", min: 30 },
        { label: "Uitvoering in eigen klas", min: 60 },
        { label: "Reflectie + transferhaak", min: 20 },
      ],
    },

    opening: {
      eyebrow: "Aanleiding",
      aanleiding: `Module 02 heeft je door zeven lessen begeleid die elk een stuk van de puzzel waren — AI-geletterdheid, programmeerdidactiek, AI-assisted development, vibe coding, prompten voor software, debuggen, prototypen, beoordelen. Nu komt het samen in één productie. Een mini-prototype dat je zelf bouwt met AI-ondersteuning, plus een onderwijscasus eromheen waarin het prototype een didactisch doel dient.

Het verschil met praktijkopdracht 1 (Module 01) zit in het vakmanschap. Daar bouwde je een lesopzet, een quiz of een rubric — onderwijswerk waarvoor AI hielp. Hier bouw je iets technisch dat in jouw vakgebied past, plus een onderwijscasus die je studenten in beweging brengt. Drie keuzepaden: A — prototype + lesactiviteit waarin studenten het prototype kritisch bevragen; B — prototype + rubric voor beoordeling in een project; C — prototype + reflectie-werkvorm over algoritmisch denken.

Bewijs van leren zit niet in de werkende app of het strakke document — dat heb je in vijftien minuten op v0. Bewijs zit in wat je studenten daarna in jouw klas doen: wat zien ze, wat vragen ze, wat veranderen ze. Voor jouw collega bewijs: peer feedback langs drie vragen, niet een rubric-score. Voor jezelf bewijs: een reflectie van 250 woorden over wat in je klas gebeurde en wat dat met jou doet. En een transferhaak — vijf dagen na de eerste uitvoering iets concreets in je eigen klas terugleggen, niet 'ooit'.`,
      waaromNu: `Darling-Hammond e.a. (2017) wijzen *transfer naar eigen klas met collega-feedback* aan als één van de drie sleuteliingrediënten voor effectieve PD. Eenmalige sessies zonder follow-up halen zelden gedragsverandering. Deze praktijkopdracht structureert die transfer expliciet: je werk landt in een klas, er is collega-feedback, en de transferhaak voorkomt dat het inzicht in de la verdwijnt.`,
    },

    scenario: {
      title: "Werksituatie",
      context:
        "Je hebt Module 02 doorlopen en de werkmethoden in oefenmodus toegepast. Nu lever je een dubbele productie: één mini-prototype met AI-ondersteuning én één onderwijscasus die het prototype didactisch laat werken in je klas. Geen oefenmodus — een product dat een collega leest, dat in jouw klas terechtkomt, en dat je vijf dagen later in een tweede klassikaal moment activeert via de transferhaak.",
      role: "Docent · mbo niveau 3-4 ICT, hbo informatica of vakdocent met programmeer-/ontwerpcomponent",
      tools: "AI-tool naar keuze (school-account) · IDE of v0/bolt voor prototype · één collega als reviewer · eigen klas voor uitvoering",
    },

    praktijkTitle: "Kies één pad. Lever zeven deliverables. Voer uit in jouw klas. Vijf dagen later: transferhaak.",
    praktijkIntro:
      "Drie paden, één doel: een mini-prototype dat als didactisch instrument werkt in jouw eigen klas. Per pad een andere onderwijscasus. Voor alle paden gelijke peer review en gelijke transferhaak.",

    paths: [
      {
        id: "a",
        label: "Pad A — prototype + lesactiviteit waarin studenten dit prototype kritisch bevragen",
        beschrijving:
          "Je bouwt een mini-prototype (bijvoorbeeld een veelgebruikte tool als een formulier-builder, een visualisatie-dashboard, een mini-recommender) met een bewust ingebouwde zwakte (privacy-lekje, bias-gevoelig dataveld, accessibility-probleem, of architectuurschuld). Daarna ontwerp je een lesactiviteit van 50 minuten waarin studenten het prototype kritisch bevragen — niet om te 'beoordelen' maar om de zwakte te lokaliseren, te benoemen en een verbetering voor te stellen. Sluit aan op les 2.8 (beoordelen) en 2.4 (vibe coding).",
        deliverables: [
          "Pad A gekozen + motivatie van max 50 woorden (waarom past dit pad bij jouw klas en leerdoel)",
          "Ontwerpbrief mini-prototype (8-12 zinnen) inclusief iteratie-criterium én bewust ingebouwde zwakte",
          "Iteratie 1 prototype (link of screenshots) + beoordeling in drie regels",
          "Iteratie 2 prototype + verlies-inventaris in twee zinnen + iteratie 3 eindkeuze",
          "Lesactiviteit-instructie 50 minuten voor jouw klas (opening, werkvorm, afsluiting) — studenten lokaliseren en benoemen de zwakte",
          "Peer-feedback van één collega op de drie review-vragen, plus jouw revisies",
          "Reflectie van 250 woorden na uitvoering: wat zagen studenten, wat zagen ze níet, wat zegt dat over jouw aanname over hun begrip",
        ],
      },
      {
        id: "b",
        label: "Pad B — prototype + rubric voor het beoordelen ervan in een project",
        beschrijving:
          "Je bouwt een mini-prototype dat representatief is voor een studentenproduct in jouw module (bijvoorbeeld een mini-API, een data-pipeline, een componentbibliotheek). Daarna ontwerp je een rubric met drie criteria op drie niveaus die je gebruikt om twee aspecten te wegen: (1) functionele werking, (2) denkbewijs achter de architectuurkeuzes. De rubric heeft expliciete voorbeeldzinnen per cel uit jouw eigen prototype. Sluit aan op les 1.5 (rubrics) en 2.8 (beoordelen).",
        deliverables: [
          "Pad B gekozen + motivatie van max 50 woorden",
          "Ontwerpbrief mini-prototype (8-12 zinnen) inclusief iteratie-criterium",
          "Iteratie 1 prototype + beoordeling, iteratie 2 + verlies-inventaris, iteratie 3 eindkeuze",
          "Rubric (3 criteria × 3 niveaus) met voorbeeldzinnen uit eigen prototype per cel",
          "Test van rubric op twee fictieve studentinleverstukken (zelf gegenereerd of geanonimiseerd uit eerdere jaargangen) — kalibratie zichtbaar",
          "Peer-feedback van één collega op de drie review-vragen, plus jouw revisies",
          "Reflectie van 250 woorden na uitvoering: was de rubric in jouw klas consistent invulbaar, welke cel veroorzaakte twijfel, wat veranderen voor jaargang 2",
        ],
      },
      {
        id: "c",
        label: "Pad C — prototype + reflectie-werkvorm over algoritmisch denken",
        beschrijving:
          "Je bouwt een mini-prototype waarin je bewust laat zien wat AI wel/niet zelf doet — bijvoorbeeld een agent die een sorteer-algoritme implementeert terwijl een ander deel van de code expliciet zonder AI is geschreven met handgemaakte commentaren. Daarna ontwerp je een reflectie-werkvorm van 45 minuten waarin studenten in tweetallen vergelijken: welk denkwerk had de mens nodig, welk denkwerk nam AI over, welke vakredeneringen zijn impliciet gebleven. Sluit aan op les 2.2 (programmeerdidactiek), 2.4 (vibe coding), 2.6 (debuggen).",
        deliverables: [
          "Pad C gekozen + motivatie van max 50 woorden",
          "Ontwerpbrief mini-prototype (8-12 zinnen) met expliciete AI-vs-handmatig-scheiding",
          "Iteratie 1 prototype + beoordeling, iteratie 2 + verlies-inventaris, iteratie 3 eindkeuze",
          "Annotatieblad waarop per codeblok zichtbaar is: AI-bijdrage / mens-bijdrage / hybride — plus één zin redenering per blok",
          "Reflectie-werkvorm 45 minuten voor jouw klas (vragen voor tweetallen, klassikale afronding)",
          "Peer-feedback van één collega op de drie review-vragen, plus jouw revisies",
          "Reflectie van 250 woorden na uitvoering: welk verschil tussen 'AI-werk' en 'mens-werk' bleef impliciet ondanks de werkvorm, hoe ga je dat volgende keer expliciet maken",
        ],
      },
    ],

    peerReview: {
      title: "Collega-feedback in drie vragen",
      intro:
        "Vraag één vakgenoot om binnen drie werkdagen je inleverstukken te reviewen. Geen rubric, geen oordeel — concrete observaties langs drie vragen.",
      questions: [
        {
          vraag: "Welk deel van dit prototype + onderwijscasus zou je in jouw eigen klas zonder grote aanpassing kunnen gebruiken, en waaraan zie je dat?",
          workspace: {
            field: "po2-review-vraag-1",
            label: "Antwoord collega op vraag 1 + wat jij ermee doet",
            shortLabel: "Review vraag 1",
            hint: "Wat zegt de collega · welke verandering breng jij aan vóór jouw uitvoering",
            placeholder:
              "Collega zegt: ...\nWat ik verander vóór mijn uitvoering: ...",
            rows: 5,
          },
        },
        {
          vraag: "Welke aanname over studenten of klas zit er impliciet in jouw onderwijscasus — en is die aanname realistisch voor jouw groep?",
          workspace: {
            field: "po2-review-vraag-2",
            label: "Antwoord collega op vraag 2 + wat jij ermee doet",
            shortLabel: "Review vraag 2",
            hint: "Welke aanname benoemt de collega · welke check bouw je in vóór uitvoering",
            placeholder:
              "Collega benoemt aanname: ...\nWat ik check vóór uitvoering: ...",
            rows: 5,
          },
        },
        {
          vraag: "Waar zou een vakgenoot uit een andere school of opleiding dit product nog willen aanpassen vóór gebruik? Eén of twee concrete suggesties.",
          workspace: {
            field: "po2-review-vraag-3",
            label: "Antwoord collega op vraag 3 + wat jij ermee doet",
            shortLabel: "Review vraag 3",
            hint: "Welke twee suggesties · welke neem je over, welke laat je",
            placeholder:
              "Suggestie 1: ... — overnemen / laten omdat ...\nSuggestie 2: ... — overnemen / laten omdat ...",
            rows: 5,
          },
        },
      ],
    },

    transferhaak: {
      title: "Transferhaak — vijf dagen later",
      intro:
        "Darling-Hammond e.a. (2017) wijzen erop dat transfer naar eigen praktijk binnen één week verbeteringscyclus essentieel is voor blijvende verandering. Plan een tweede klassikaal moment vijf werkdagen na de eerste uitvoering: één werkvorm waarin je een vraag uit de eerste les terugbrengt en kijkt of er iets is verschoven.",
      workspace: {
        field: "po2-transferhaak",
        label: "Mijn transferhaak voor vijf dagen later",
        shortLabel: "Transferhaak",
        hint: "Datum · welke werkvorm · welke vraag breng je terug · wat hoop je te zien dat dan anders is",
        placeholder:
          "Datum: ...\nWerkvorm (max 15 min): ...\nVraag die ik terugbreng uit de eerste les: ...\nWat ik hoop te zien dat anders is: ...\nWat ik doe als er niets is verschoven: ...",
        rows: 8,
      },
    },

    reflection: [
      "Bij welke deliverable koos je een AI-suggestie boven je eigen eerste idee, en wat won of verloor je daarmee voor de didactische kwaliteit van je casus?",
      "Welk deel van je werk is door collega-feedback aantoonbaar beter geworden — en hoe weet je dat het echt beter is en niet alleen anders, gemeten aan de respons van je studenten?",
      "Wat heeft de uitvoering in je klas verteld over welke aanname uit Module 02 in jouw eigen praktijk nog onbeproefd was? Welke twee dingen ga je het komende semester onmiddellijk anders aanpakken — en met welke collega bespreek je dat binnen twee weken?",
    ],

    checklist: [
      "Pad (A, B of C) gekozen en gemotiveerd in max 50 woorden",
      "Ontwerpbrief mini-prototype klaar met iteratie-criterium",
      "Drie iteraties doorlopen, verlies-inventaris na iteratie 2, eindkeuze + drie gebreken in iteratie 3",
      "Onderwijscasus uitgewerkt passend bij gekozen pad (lesactiviteit / rubric / reflectie-werkvorm)",
      "Peer-feedback van één collega op de drie review-vragen ontvangen en verwerkt",
      "Mini-prototype + onderwijscasus uitgevoerd in eigen klas binnen 5 werkdagen",
      "Reflectie van 250 woorden afgesloten, gericht op wat studenten in jouw klas deden",
      "Transferhaak vijf dagen later ingepland in agenda met werkvorm + vraag",
      "AVG-check: prototype gebruikt fictieve data, klaswerk is geanonimiseerd, geen herleidbare studentgegevens in inleverstukken",
    ],

    verderLezen: [
      {
        titel: "Effective Teacher Professional Development",
        bron: "Darling-Hammond e.a. · Learning Policy Institute",
        jaar: 2017,
        link: "https://learningpolicyinstitute.org/sites/default/files/product-files/Effective_Teacher_Professional_Development_REPORT.pdf",
        waarom: "Onderbouwt waarom uitvoering in eigen klas + collega-feedback + transferhaak binnen vijf dagen essentieel zijn voor blijvende verandering.",
      },
      {
        titel: "Toetsing en examinering in het tijdperk van AI — Handreiking 1",
        bron: "Npuls",
        jaar: 2024,
        link: "https://www.npuls.nl/_assets/cdcb37e6-11f7-468f-962b-06fe599a8a23/Visie-op-toetsing-en-examinering-onderbouwing-Npuls.pdf",
        waarom: "Voor pad B (rubric) en pad A (kritisch bevragen) het Nederlandse werkdocument over toetsing in een AI-omgeving.",
      },
      {
        titel: "AI Competency Framework for Teachers",
        bron: "UNESCO",
        jaar: 2024,
        link: "https://www.unesco.org/en/articles/ai-competency-framework-teachers",
        waarom: "Dit praktijkproduct hoort bij UNESCO's 'Create'-niveau — start van je portfolio voor AI-pedagogy-bewijsmateriaal.",
      },
      {
        titel: "AI-GO! Raamwerk voor AI-geletterdheid",
        bron: "Npuls",
        jaar: 2025,
        link: "https://npuls.nl/kennisbank/ai-go-een-raamwerk-voor-ai-geletterdheid-in-het-onderwijs",
        waarom: "Vier dimensies (kennis, vaardigheden, attitudes, ethisch bewustzijn) — bruikbaar als zelf-check op je deliverables.",
      },
    ],

    nextLesson: null,
  },
};
