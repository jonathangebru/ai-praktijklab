// Audit-voorstel v1 — nog niet samengevoegd met productiedata.
//
// Drie herschreven sleutellessen volgens de formatencatalogus uit audit-v1.md.
// Schema is een uitbreiding van src/data/lessonDetails.js: alle bestaande velden
// blijven gerespecteerd, met daarnaast een `format`-veld en formaat-specifieke
// velden (cases, perspectives, statements, rounds, actionPlan, legalCallout).
//
// Aannames voor Lesson.jsx-aanpassing:
// 1. `detail.format` schakelt tussen layouts. Als afwezig: huidige standaardlayout.
// 2. Nieuwe componenten zijn beschreven in /audit/audit-v1.md (Implementatienoties).
// 3. Generieke NL-situaties — geen schoolnamen. Voorbeelden zijn nieuw.
// 4. Reflectievragen forceren denkstap: geen ja/nee mogelijk.

export const lessonDetailsAuditV1 = {
  /* ──────────────────────────────────────────────────────────────────────── */
  /*  LES 1.2 — Wat kan AI wel en niet?                                       */
  /*  Formaat: casuslab (variant op stappenplan + werkvorm)                   */
  /*  UNESCO-niveau: Acquire · DigCompEdu: 3 (Teaching and Learning)          */
  /* ──────────────────────────────────────────────────────────────────────── */

  "wat-kan-ai": {
    format: "casuslab",

    summary:
      "AI is goed in patroonherkenning en taalverwerking, en zwak in actualiteit, redeneren onder onzekerheid en nuance. Dat klinkt abstract. In deze les laat je AI vier keer falen, voorspelt het soort fout en bouwt zo een werkmodel van wat je vak van AI mag verwachten.",

    learningGoals: [
      "Je herkent vier structurele beperkingen van generatieve AI in vakcontent.",
      "Je voorspelt vóór een testprompt waar AI waarschijnlijk faalt en waarom.",
      "Je bouwt een eigen 'wat-kan-AI'-matrix voor je vakgebied.",
    ],

    scenario: {
      title: "Werksituatie",
      context:
        "Je voorbereidingstijd is beperkt. Je wil AI inzetten om sneller goed materiaal te maken, maar je moet weten waar je niét op kunt vertrouwen. Vier collega's uit verschillende vakken hebben elk een prompt geprobeerd. Drie keer ging het mis. Jij gaat reproduceren, voorspellen en categoriseren.",
      role: "Docent · vo of mbo, vak naar keuze",
      tools: "ChatGPT of vergelijkbare chatbot · school-account · papier voor je matrix",
    },

    // Geen klassieke `steps`-array — het casuslab gebruikt `cases` en een
    // matrix. Lesson.jsx detecteert format en rendert <FailureCase> per item.
    cases: [
      {
        index: 1,
        domain: "Geschiedenis · 3 havo",
        prompt:
          "Geef vijf concrete oorzaken van de Tweede Wereldoorlog, met per oorzaak één betrouwbare primaire bron uit de jaren dertig.",
        predictHint:
          "Vóór je de prompt stuurt: schrijf op welke kolom (feiten, bronnen, datums) het meest risicovol is.",
        observation:
          "AI levert vijf plausibele oorzaken en vijf 'bronnen' — vaak met juiste-klinkende titels, fictieve auteurs, en jaartallen die niet kloppen. Soms is één bron echt.",
        category: "Hallucinatie van bronnen en feiten",
        whatToCheck:
          "Elke bronvermelding handmatig opzoeken in een echte database. Niet vertrouwen op AI's verwijzing.",
      },
      {
        index: 2,
        domain: "Biologie · mbo niveau 4 zorg",
        prompt:
          "Beschrijf de symptomen van diabetes type 2 bij een 65-jarige man met overgewicht en bij een 65-jarige vrouw met overgewicht. Geef per persoon vijf typische symptomen.",
        predictHint:
          "Vóór verzending: wat verwacht je over verschil tussen mannen en vrouwen in dit antwoord?",
        observation:
          "AI geeft sterk vergelijkbare lijsten met standaard-symptomen. Genderverschillen in presentatie (vrouwen rapporteren minder klassieke symptomen) komen meestal niet terug.",
        category: "Bias door oververtegenwoordigde trainingsdata",
        whatToCheck:
          "Vraag expliciet naar genderverschillen of leeftijdsverschillen. Vergelijk met richtlijnen van bv. NHG of het Diabetes Fonds.",
      },
      {
        index: 3,
        domain: "Maatschappijleer · 4 vmbo-tl",
        prompt:
          "Wat zijn de drie belangrijkste politieke partijen in Nederland qua zetels in de Tweede Kamer op dit moment, en welke standpunten hebben zij over wonen?",
        predictHint:
          "Welk woord in deze prompt veroorzaakt het grootste risico?",
        observation:
          "AI geeft een lijst op basis van trainingsdata van een onbekende datum. Verkiezingsuitslagen, nieuwe partijen of fusies missen. 'Op dit moment' is geen geldig concept voor de meeste chatbots zonder zoekfunctie.",
        category: "Beperkte actualiteit en knowledge cutoff",
        whatToCheck:
          "Vraag altijd om de datum waarop het antwoord is gebaseerd. Voor actualiteit: gebruik een tool met zoekfunctie of vergelijk met kiesraad.nl.",
      },
      {
        index: 4,
        domain: "Filosofie · hbo-projectteam",
        prompt:
          "Een student schrijft: 'Algoritmes zijn neutraal want ze rekenen alleen.' Schrijf een nuancering van max 100 woorden die filosofisch sterk is en geschikt voor een hbo-essay.",
        predictHint:
          "Welk soort fout zou een filosofiedocent hier waarschijnlijk in herkennen?",
        observation:
          "AI levert een redelijk leesbaar antwoord met de standaard punten (bias in data, ontwerper-keuzes). Diepere filosofische lijnen — bv. instrumenteel versus structureel, of het verschil tussen normatieve en descriptieve neutraliteit — ontbreken meestal.",
        category: "Oppervlakkige nuance en gebrek aan vakdiepte",
        whatToCheck:
          "Vraag expliciet om het onderscheid tussen twee filosofische posities. Of geef AI eerst een mini-college als context.",
      },
    ],

    // De matrix vat de vier categorieën samen — eindproduct van de les.
    failureMatrix: {
      title: "Jouw eigen wat-kan-AI matrix",
      intro:
        "Vul dit in voor je eigen vak. Hang het op naast je werkplek.",
      columns: ["Categorie tekortkoming", "Hoe ik het opmerk", "Hoe ik het opvang"],
      rows: [
        ["Hallucinatie van feiten/bronnen", "...", "..."],
        ["Bias door trainingsdata", "...", "..."],
        ["Beperkte actualiteit", "...", "..."],
        ["Oppervlakkige nuance", "...", "..."],
      ],
    },

    examples: [
      {
        title: "Voorspel-prompt",
        prompt:
          "Ik ga je zo iets vragen over [onderwerp uit mijn vak]. Voor je antwoord geeft: noem drie soorten fouten die je bij dit soort vragen vaak maakt. Daarna geef je je antwoord en markeer je per onderdeel hoe zeker je bent.",
      },
      {
        title: "Bronnen-check-prompt",
        prompt:
          "Geef alleen bronnen die je kunt verifiëren in een openbare bibliotheek of online database. Voor elke bron: titel, auteur, jaar, en hoe ik kan checken of de bron echt bestaat. Als je twijfelt: zeg dat eerlijk.",
      },
      {
        title: "Actualiteit-prompt",
        prompt:
          "Voor je antwoordt: geef de datum tot wanneer je trainingsdata gaan. Daarna: beantwoord mijn vraag en markeer welke onderdelen waarschijnlijk verouderd zijn.",
      },
      {
        title: "Diepte-prompt",
        prompt:
          "Mijn studenten zijn [niveau, vak]. Geef twee invalshoeken die in een gemiddelde uitleg gemist worden. Niet de standaardpunten — juist de tweede laag waar een vakdocent op zou doorvragen.",
      },
    ],

    reflection: [
      "Welke van de vier categorieën verraste jou en welke categorie kende je al?",
      "Bij welk soort opdracht in je vak zou je AI bewust niet inzetten, en wat verwacht je dat hierdoor verandert in je werkproces?",
      "Hoe leg je een student het verschil uit tussen 'AI weet niet' en 'AI lijkt te weten'?",
    ],

    checklist: [
      "Vier casussen zelf getest en voorspelling vergeleken met output",
      "Eigen wat-kan-AI matrix ingevuld voor mijn vak",
      "Eén afspraak met mezelf gemaakt over wanneer ik AI niet gebruik",
      "Matrix gedeeld of besproken met één collega",
      "AVG-check: geen herleidbare leerlinggegevens in mijn testprompts gezet",
    ],

    nextLesson: "prompting-voor-docenten",

    sources: [
      {
        label: "Long & Magerko (2020) — vijf AI-literacy-vragen",
        url: "https://dl.acm.org/doi/fullHtml/10.1145/3313831.3376727",
      },
      {
        label: "UNESCO AI Competency Framework for Teachers (2024)",
        url: "https://www.unesco.org/en/articles/ai-competency-framework-teachers",
      },
    ],
  },

  /* ──────────────────────────────────────────────────────────────────────── */
  /*  LES 1.7 — Privacy, ethiek en verantwoord gebruik                         */
  /*  Formaat: casusbespreking                                                 */
  /*  UNESCO-niveau: Deepen · DigCompEdu: 1, 5 (Engagement, Empowering)        */
  /* ──────────────────────────────────────────────────────────────────────── */

  "privacy-ethiek": {
    format: "casusbespreking",

    summary:
      "Sinds 2 februari 2025 is artikel 4 van de EU AI Act van kracht. Jouw school is een 'deployer' van AI en moet aantoonbaar zorgen voor AI-geletterdheid. Dat is geen formaliteit. In deze les werk je drie herkenbare casussen door, neem je positie in tegenover collega-uitspraken, en pas je de Kennisnet vier-stappen toe op je eigen werksituatie.",

    learningGoals: [
      "Je benoemt drie typische risicosituaties rond AI-gebruik in jouw vak en bij collega's.",
      "Je past de Kennisnet vier-stappen toe op je eigen school of opleiding.",
      "Je weet bij welke vragen je een DPIA of overleg met de FG nodig hebt en bij welke niet.",
      "Je formuleert één concrete afspraak die je morgen met je team kunt bespreken.",
    ],

    scenario: {
      title: "Werksituatie",
      context:
        "Op een gemiddelde docentvergadering komen AI-vragen langs de hele dag binnen: van een collega die snel een rapport door ChatGPT haalt, tot een schoolleider die een tool wil aanschaffen, tot een student die klaagt over een biased antwoord. Niet elk geval vraagt dezelfde reactie. Jij gaat ze ontleden.",
      role: "Docent · vo, mbo of hbo · willekeurig vak",
      tools: "Casusbeschrijvingen · Kennisnet vier-stappen · AI Act artikel 4",
    },

    // Wettelijke verankering — past in nieuwe <LegalCallout /> component.
    legalCallout: {
      source: "EU AI Act, artikel 4 — AI Literacy (van kracht sinds 2 februari 2025)",
      body: 'Letterlijk: "Providers and deployers of AI systems shall take measures to ensure, to their best extent, a sufficient level of AI literacy of their staff and other persons dealing with the operation and use of AI systems on their behalf, taking into account their technical knowledge, experience, education and training and the context the AI systems are to be used in."',
      implication:
        "Jouw school is een deployer zodra zij AI-tools inzet of toestaat. Toezicht door nationale autoriteiten start 2 augustus 2026.",
      url: "https://artificialintelligenceact.eu/article/4/",
    },

    // Drie casussen — elk met drie perspectieven en een stellingname-blok.
    cases: [
      {
        index: 1,
        title: "Casus A — De snelle rapporttekst",
        body:
          "Een collega vertelt op de gang dat hij rapportteksten voor zijn mentorklas heeft laten genereren. Hij heeft de namen en cijfers van leerlingen erin gezet om het persoonlijk te maken. Resultaat: prachtige, vlot lopende rapporten. Hij vraagt of jij ook zo wilt werken.",
        perspectives: [
          {
            role: "De collega",
            view:
              "Het bespaart vijf uur per rapportperiode. De inhoud is gewoon goed. De school heeft geen formele richtlijn die dit verbiedt.",
          },
          {
            role: "De ouder",
            view:
              "Mijn kind staat in een Amerikaanse AI-database. Wat gebeurt er met die data? Is mijn kind geprofileerd? Wie ziet dit ooit?",
          },
          {
            role: "De Functionaris Gegevensbescherming",
            view:
              "Verwerking van bijzondere persoonsgegevens (onderwijsprestaties) buiten de verwerkersovereenkomst van de school. Datalek-meldingsplicht.",
          },
        ],
        statements: [
          {
            author: "Collega 1",
            quote:
              "Zolang ik geen achternamen of geboortedatums noem, mag het. Voornaam plus cijfer is anoniem genoeg.",
            agreePrompt:
              "Met welk woord in deze uitspraak ben jij het hartgrondig oneens, en hoe leg je dat uit aan deze collega zonder belerend te zijn?",
          },
          {
            author: "Collega 2",
            quote:
              "We wachten gewoon op een schoolrichtlijn. Tot die er is, doe ik wat werkt.",
            agreePrompt:
              "Wat is jouw inhoudelijke argument om hier niet op te wachten? Formuleer in twee zinnen.",
          },
        ],
      },
      {
        index: 2,
        title: "Casus B — De toolaankoop zonder DPIA",
        body:
          "Een schoolleider wil binnen een week een AI-tool aanschaffen die studentteksten automatisch beoordeelt. De leverancier belooft GDPR-compliance, biedt een proefperiode aan en heeft drie andere scholen als referentie. De inkoop is al rond bij ICT-beheer. Je wordt gevraagd het docententeam mee te krijgen.",
        perspectives: [
          {
            role: "De schoolleider",
            view:
              "De docenten klagen al maanden over werkdruk bij nakijken. Dit is de oplossing. Andere scholen gebruiken het al.",
          },
          {
            role: "De docent",
            view:
              "Ik moet straks beoordelingen verantwoorden die deels door AI zijn gemaakt. Wie is verantwoordelijk als een student bezwaar maakt?",
          },
          {
            role: "De inkoopjurist of FG",
            view:
              "Geen DPIA uitgevoerd. Geen heldere verwerkersovereenkomst gezien. AI Act art. 4 verplicht ons aantoonbare AI-geletterdheid van personeel — wat hebben we hier?",
          },
        ],
        statements: [
          {
            author: "Schoolleider",
            quote: "Andere scholen gebruiken het, dus dan zal het wel goed zitten.",
            agreePrompt:
              "Wat is in één zin het probleem met dit argument, los van of de andere scholen het juist hebben?",
          },
          {
            author: "ICT-coördinator",
            quote: "Pilot eerst zes weken, dan beoordelen we het echt.",
            agreePrompt:
              "Welke drie eisen zou een pilot moeten halen voor je hem als 'gelukt' bestempelt?",
          },
        ],
      },
      {
        index: 3,
        title: "Casus C — De student met de bias-klacht",
        body:
          "Een student van Marokkaans-Nederlandse achtergrond meldt zich na de les. AI heeft op een opdracht over werkethiek een antwoord gegeven dat alleen voorbeelden uit westerse contexten gebruikt en stereotype formuleringen heeft. De student vraagt of jij dit kunt aankaarten — bij wie weet ze niet.",
        perspectives: [
          {
            role: "De student",
            view:
              "Ik herken mezelf niet in deze voorbeelden. En ik vraag me af of mijn essay straks ook door een bevooroordeelde AI wordt beoordeeld.",
          },
          {
            role: "De docent",
            view:
              "Ik heb deze prompt zelf gemaakt en geen bias verwacht. Wat had ik kunnen voorkomen? En wat doe ik nu?",
          },
          {
            role: "De curriculumcommissie",
            view:
              "Dit is geen incident, dit is een patroon. Hebben we beleid op bias-meldingen? Komt dit in de jaarrapportage?",
          },
        ],
        statements: [
          {
            author: "Collega",
            quote: "Het is gewoon een AI, niet jouw schuld.",
            agreePrompt:
              "Welke verantwoordelijkheid blijft er bij jou liggen, ook al heeft de AI het 'gemaakt'?",
          },
          {
            author: "Student zelf, later in mail",
            quote: "Wat ik wil weten is wat de school hier nu structureel mee gaat doen.",
            agreePrompt:
              "Schrijf in twee zinnen wat jij haar — eerlijk — kunt antwoorden, gegeven wat je weet over je eigen school.",
          },
        ],
      },
    ],

    // Actieplan op basis van Kennisnet vier-stappen.
    actionPlan: {
      title: "Vier stappen voor je eigen school (Kennisnet)",
      intro:
        "Deze vier stappen passen op een A4. Vul ze in vóór je het lokaal verlaat.",
      steps: [
        {
          step: 1,
          title: "Inventariseer welke AI-systemen op jouw school in gebruik zijn.",
          prompt:
            "Noem drie AI-tools waarvan jij weet dat een collega ze gebruikt — formeel of informeel.",
        },
        {
          step: 2,
          title: "Breng in kaart wie ermee werkt.",
          prompt:
            "Wie raakt het: docenten? administratie? leerlingen via opdrachten? Studenten zonder dat jij het weet?",
        },
        {
          step: 3,
          title: "Bepaal het passende kennisniveau per rol.",
          prompt:
            "Wat zou een mentor moeten weten dat een vakdocent niet hoeft? Of andersom?",
        },
        {
          step: 4,
          title: "Ontwikkel rol-specifieke competenties.",
          prompt:
            "Welk hiaat in jouw eigen kennis valt je nu op? En bij wie kun je dat oppakken — collega, leidinggevende, FG?",
        },
      ],
    },

    examples: [
      {
        title: "Vraag aan je FG vóór toolgebruik",
        prompt:
          "Ik overweeg [naam tool] in te zetten voor [doel]. Welke vragen moet ik beantwoorden vóór ik dit doe, gegeven de AVG en AI Act artikel 4? Geef een checklist van vijf vragen die ik met onze FG kan bespreken.",
      },
      {
        title: "Conceptafspraak voor je klas",
        prompt:
          "Schrijf een klassikale werkafspraak van max 100 woorden over verantwoord AI-gebruik, in de wij-vorm, geschikt voor [niveau]. Vermijd verbodsbepalingen — focus op afspraken.",
      },
      {
        title: "Bias-bewuste prompt voor je opdracht",
        prompt:
          "Ik geef je zo een opdracht voor mijn studenten over [onderwerp]. Voor je antwoord: noem drie groepen of perspectieven die je standaardantwoord waarschijnlijk gaat missen of stereotyperen, en pas je antwoord daarop aan.",
      },
    ],

    reflection: [
      "Bij welke van de drie casussen herkende jij jezelf het meest — in de rol van uitvoerder, slachtoffer of toeschouwer? Wat zegt dat over je positie in je team?",
      "Welke uitspraak van een collega ga jij niet meer onweersproken laten? Formuleer hoe je gaat reageren zonder de collega af te kraken.",
      "Welke beslissing in casus B zou jij anders nemen als je wist dat de Autoriteit Persoonsgegevens over twee jaar bij je langskomt?",
    ],

    checklist: [
      "Drie casussen besproken (mondeling of in tweetal)",
      "Stellingname geformuleerd bij minimaal twee collega-uitspraken",
      "Kennisnet vier-stappen ingevuld voor mijn eigen school",
      "DPIA-status van de belangrijkste tool die ik gebruik bij mij bekend",
      "Eén concrete teamafspraak voorbereid voor de eerstvolgende vergadering",
    ],

    nextLesson: "praktijkopdracht-1",

    sources: [
      {
        label: "EU AI Act, artikel 4 — AI Literacy",
        url: "https://artificialintelligenceact.eu/article/4/",
      },
      {
        label: "Kennisnet — Werken aan AI-geletterdheid op school (2025)",
        url: "https://www.kennisnet.nl/artificial-intelligence/werken-aan-ai-geletterdheid-op-school/",
      },
      {
        label: "Kennisnet — Voldoen aan de AI-verordening",
        url: "https://www.kennisnet.nl/artificial-intelligence/voldoen-aan-de-ai-verordening/",
      },
    ],
  },

  /* ──────────────────────────────────────────────────────────────────────── */
  /*  LES 2.5 — Prompten voor softwareontwikkeling                            */
  /*  Formaat: promptlab                                                       */
  /*  UNESCO-niveau: Create-aanloop · DigCompEdu: 3, 6                         */
  /* ──────────────────────────────────────────────────────────────────────── */

  "prompten-voor-software": {
    format: "promptlab",

    summary:
      "Studenten vragen AI een API te bouwen en krijgen er één. Of niet. Het verschil zit in de prompt. In dit promptlab oefen je het verbeterproces — vier rondes, van vaag idee tot productiefase. Je leert het iteratieve handwerk dat je vervolgens kunt onderwijzen.",

    learningGoals: [
      "Je herkent het verschil tussen een intentieprompt, een architectuurprompt, een test-prompt en een refactor-prompt.",
      "Je verbetert in vier rondes je eigen prompt en kunt elke verbetering verantwoorden.",
      "Je bouwt een eigen promptkit van vier prompts voor een opdracht uit je eigen vak.",
      "Je begeleidt studenten in het iteratieproces in plaats van in het eindresultaat.",
    ],

    scenario: {
      title: "Werksituatie",
      context:
        "Je begeleidt een hbo-projectteam aan een webapp voor een mkb-klant. Vier studenten, twee weken, een opdrachtgever die niet technisch is. De studenten willen meteen code. Jij wil dat ze leren ontwerpen. AI staat ertussen.",
      role: "Docent · hbo informatica of mbo software-development niveau 4",
      tools: "Cursor of Claude of vergelijkbare chat-IDE · papier voor je iteratielog",
    },

    // Vier iteratieve rondes — kern van het promptlab-formaat.
    rounds: [
      {
        round: 1,
        intent: "Van intentie naar architectuur",
        startPrompt:
          "Bouw een API voor een boekingssysteem.",
        whatGoesWrong:
          "AI gokt: REST? GraphQL? Welke entiteiten? Welke auth? Wat is een 'boeking' hier eigenlijk? Resultaat: 200 regels code die misschien niet aansluit op wat jouw klant nodig heeft.",
        yourAttempt:
          "Herschrijf de prompt zodat AI eerst ontwerpvragen stelt vóórdat hij code schrijft. Geen code — alleen ontwerp.",
        modelPrompt:
          "Ik bouw een boekingssysteem voor een kapsalon met max 3 stylisten. Geen code nog — stel mij eerst vijf ontwerpvragen die je vóór implementatie moet beantwoorden. Daarna: drie architectuuropties met per optie voor- en nadelen en in welk scenario je 'm zou kiezen.",
        learnPoint:
          "Door AI te dwingen vragen te stellen, krijg je een ontwerpdialoog in plaats van een gok. Onderwijspunt: studenten die deze gewoonte aanleren, leveren betere systemen op.",
      },
      {
        round: 2,
        intent: "Van architectuur naar test-eerst code",
        startPrompt:
          "Maak nu de endpoints voor het boeken en annuleren.",
        whatGoesWrong:
          "AI levert vier endpoints. Werken in de happy path. Geen tests. Edge cases (dubbele boeking, annulering na deadline) zijn vergeten of stilzwijgend aangenomen.",
        yourAttempt:
          "Herschrijf de prompt zodat AI eerst de tests schrijft, dan pas de implementatie. Vraag expliciet naar drie edge cases.",
        modelPrompt:
          "Schrijf voor de endpoints POST /bookings en DELETE /bookings/:id eerst Jest-tests, inclusief drie edge cases: dubbele boeking op zelfde tijdslot, annulering binnen 24 uur, en niet-bestaande boeking-ID. Daarna pas de implementatie die de tests laat slagen.",
        learnPoint:
          "Test-first promptvolgorde zet AI in een ander modus: het moet specificatie expliciet maken. Onderwijspunt: dit is dezelfde discipline als TDD — alleen nu met AI als pair.",
      },
      {
        round: 3,
        intent: "Van werkende code naar leesbare code",
        startPrompt:
          "Refactor deze code.",
        whatGoesWrong:
          "AI hernoemt variabelen, splitst functies op, en je kunt achteraf moeilijk uitleggen waarom de code 'beter' is. Studenten denken: het ziet er anders uit, dus het is goed.",
        yourAttempt:
          "Herschrijf de prompt zodat AI per refactor-stap moet uitleggen welk principe of welke smell het adresseert.",
        modelPrompt:
          "Refactor deze functie. Per wijziging: noem expliciet welke code smell het adresseert (lange functie, dubbele code, magische getallen, onduidelijke naam, of iets anders). Geef per wijziging één unit-test die zonder de refactor lastig te schrijven was.",
        learnPoint:
          "Een refactor zonder verantwoording is geen leermoment. Onderwijspunt: studenten die per refactor de smell kunnen benoemen, denken in patronen — niet alleen in cosmetica.",
      },
      {
        round: 4,
        intent: "Van code naar documentatie en overdracht",
        startPrompt:
          "Schrijf documentatie voor deze code.",
        whatGoesWrong:
          "AI levert een README met installatie-stappen en een korte beschrijving. De ontwerpkeuzes, alternatieven en bekende beperkingen ontbreken. Iemand die over een half jaar deze codebase oppakt, is verloren.",
        yourAttempt:
          "Herschrijf de prompt zodat de documentatie een opvolger helpt — niet alleen een installatie.",
        modelPrompt:
          "Schrijf een overdrachtsdocument van max 400 woorden voor een ontwikkelaar die over zes maanden deze codebase oppakt. Behandel: (1) drie belangrijke ontwerpkeuzes en waarom, (2) twee alternatieven die we hebben afgewezen, (3) drie bekende beperkingen die nog niet opgelost zijn, (4) één gevaarlijke aanname die toekomstige aanpassingen moet kennen.",
        learnPoint:
          "Documentatie als overdracht maakt het denkproces zichtbaar. Onderwijspunt: dit is je beoordelingsmoment — een student die dit document goed schrijft, heeft de code begrepen. Een student die het niet kan, niet.",
      },
    ],

    // Eindproduct: eigen promptkit. Past in nieuwe <OwnPromptKit />.
    ownPromptKit: {
      title: "Bouw je eigen vier prompts voor één opdracht uit je vak",
      intro:
        "Kies een lopende of geplande opdracht. Schrijf één prompt per fase. Bewaar deze set — je geeft 'm volgende week aan je studenten.",
      slots: [
        { label: "Architectuurprompt voor mijn opdracht", placeholder: "…" },
        { label: "Test-eerst prompt voor mijn opdracht", placeholder: "…" },
        { label: "Refactor-prompt voor mijn opdracht", placeholder: "…" },
        { label: "Overdrachtsdocument-prompt voor mijn opdracht", placeholder: "…" },
      ],
    },

    examples: [
      {
        title: "Ronde 1 — Architectuurdialoog",
        prompt:
          "Ik bouw [type applicatie] voor [context]. Geen code nog — stel mij eerst vijf ontwerpvragen die je vóór implementatie moet beantwoorden. Daarna: drie architectuuropties met per optie voor- en nadelen en in welk scenario je 'm zou kiezen.",
      },
      {
        title: "Ronde 2 — Test-eerst",
        prompt:
          "Schrijf voor [endpoint of functie] eerst [testframework]-tests, inclusief drie edge cases: [edge case 1], [edge case 2], [edge case 3]. Daarna pas de implementatie die de tests laat slagen.",
      },
      {
        title: "Ronde 3 — Verantwoorde refactor",
        prompt:
          "Refactor deze functie. Per wijziging: noem welke code smell het adresseert. Geef per wijziging één unit-test die zonder de refactor lastig te schrijven was.",
      },
      {
        title: "Ronde 4 — Overdrachtsdocument",
        prompt:
          "Schrijf een overdrachtsdocument van max 400 woorden voor een ontwikkelaar die over zes maanden deze codebase oppakt. Behandel: drie ontwerpkeuzes met onderbouwing, twee afgewezen alternatieven, drie bekende beperkingen, één gevaarlijke aanname.",
      },
    ],

    reflection: [
      "Welke van de vier rondes voelde voor jou als 'natuurlijk gedrag' en welke voelde geforceerd? Wat zegt dat over je eigen werkmanier?",
      "Hoe ga je een student begeleiden die ronde 4 (overdrachtsdocument) niet kan invullen, ondanks dat zijn code werkt? Beschrijf de gesprekslijn in vier stappen.",
      "Welke ronde zou je als eerste aan je studenten leren en waarom — of zou je een andere volgorde kiezen?",
    ],

    checklist: [
      "Vier rondes zelf doorlopen en eigen pogingen bewaard",
      "Model-prompts vergeleken met eigen poging en verschil benoemd",
      "Eigen promptkit van vier prompts ingevuld voor een eigen opdracht",
      "Eén lesactiviteit gepland waarin studenten ronde 1 of 2 zelf doen",
      "Mondelinge verantwoordingsvragen voor ronde 4 voorbereid",
    ],

    nextLesson: "debuggen-met-ai",

    sources: [
      {
        label: "UNESCO AI Competency Framework for Teachers — AI pedagogy",
        url: "https://www.unesco.org/en/articles/ai-competency-framework-teachers",
      },
      {
        label: "Npuls — Visie op Toetsing en Examinering. Naar AI-bewuste toetspraktijken",
        url: "https://www.npuls.nl/_assets/cdcb37e6-11f7-468f-962b-06fe599a8a23/Visie-op-toetsing-en-examinering-onderbouwing-Npuls.pdf",
      },
      {
        label: "Npuls AI-GO! — Raamwerk voor AI-geletterdheid in het onderwijs (2025)",
        url: "https://npuls.nl/kennisbank/ai-go-een-raamwerk-voor-ai-geletterdheid-in-het-onderwijs",
      },
    ],
  },
};

// Voor eenvoudige consumptie door Lesson.jsx tijdens een review-build:
// merge dit object met de bestaande lessonDetails. Voorbeeld:
//
//   import { lessonDetails as base } from "./lessonDetails";
//   import { lessonDetailsAuditV1 } from "../../audit/lessonDetails.audit-v1";
//   export const lessonDetails = { ...base, ...lessonDetailsAuditV1 };
//
// In productie nog niet samenvoegen — eerst review van inhoud en formaten.
