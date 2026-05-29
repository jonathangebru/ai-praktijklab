// Batch Module 02 — 8 nieuwe/uitgebreide lessen op nieuwe standaard.
// Te mergen in src/data/lessonDetails.js.

export const batchModule2 = {
  /* ────────────────────────────────────────────────────────────────────────
   *  LES 2.1 — AI-geletterdheid in het onderwijs · Diepteles
   * ──────────────────────────────────────────────────────────────────────── */

  "ai-geletterdheid": {
    format: "diepteles",

    summary:
      "AI-geletterdheid is geen vinkje. Het is een werkpraktijk over vier dimensies: kennis, vaardigheden, attitudes en ethisch bewustzijn. In deze les bouw je per dimensie één werkblok, koppel je het aan AI-GO! (Npuls) en aan artikel 4 van de AI Act, en lever je een eigen ontwikkelplan op waarmee jij — en je sectie — aantoonbaar verder kunt.",

    duration: {
      total: "75-90 minuten",
      blocks: [
        { label: "Aanleiding", min: 8 },
        { label: "Conceptueel kader", min: 12 },
        { label: "Kennisdimensie", min: 10 },
        { label: "Vaardigheidsdimensie", min: 12 },
        { label: "Attitude-dimensie", min: 10 },
        { label: "Ethische dimensie", min: 12 },
        { label: "Eigen ontwikkelplan", min: 10 },
        { label: "Sectie-afspraak", min: 6 },
      ],
    },

    opening: {
      eyebrow: "Aanleiding",
      aanleiding: `Het is dinsdagmiddag, kort overleg na de les. Een collega zegt: 'Ik heb een AI-cursus gevolgd, dus ik ben nu AI-geletterd.' Een andere collega lacht: 'Ik gebruik ChatGPT elke dag, dus ik ben dat al lang.' Een derde haalt zijn schouders op: 'Ik snap er nog niks van — ik wacht wel tot er beleid komt.'

Drie collega's, drie heel verschillende ideeën over wat AI-geletterdheid is. Geen van drieën heeft volledig gelijk. En geen van drieën heeft volledig ongelijk. Het probleem is niet hun antwoord, het probleem is dat ze geen gemeenschappelijke taal hebben om de vraag te bespreken. Zolang die taal er niet is, blijft elk schoolgesprek over AI hangen op de eerste anekdote.

In deze les pak je die taal op. Niet om je drie collega's te corrigeren, maar om je eigen ontwikkelplan scherp te krijgen — en om met je sectie één gezamenlijke afspraak te maken die concreter is dan 'we doen iets met AI'. Je werkt langs vier dimensies, met per dimensie één concrete uitwerking voor je eigen vak.`,
      waaromNu: `Sinds 2 februari 2025 is artikel 4 van de EU AI Act van kracht: scholen moeten aantoonbaar zorgen voor 'a sufficient level of AI literacy' van hun personeel. Toezicht start 2 augustus 2026. Tegelijk publiceerde Npuls het AI-GO!-raamwerk (juli 2025) met vier dimensies — exact dezelfde indeling die Kennisnet hanteert. Dat is geen toeval, dat is de Nederlandse consensus aan het ontstaan.`,
    },

    conceptueel: {
      eyebrow: "Conceptueel kader",
      intro: `AI-geletterdheid is geen optelsom van vaardigheden. Het is een werkmodel langs vier dimensies die in de Nederlandse context (Kennisnet, Npuls AI-GO!) consistent terugkomen: kennis, vaardigheden, attitudes en ethisch bewustzijn. Geen van vier is zonder de andere drie compleet. Een docent met diepe kennis maar zonder ethische reflex zet zijn school in juridisch risico. Een docent met scherpe ethische reflex maar zonder praktische vaardigheid blijft passief. De combinatie maakt het verschil.

De eerste dimensie — kennis — is wat je weet over hoe AI werkt: dat het patronen voorspelt, geen feiten kent, en getraind is op afgebakende data met blinde vlekken. Dit is geen techniekverhaal, dit is de werkdefinitie waarmee je bij collega's en studenten misverstanden voorkomt. De tweede dimensie — vaardigheden — is wat je ermee kunt: prompten, valideren, bronnen checken, output bewerken, eindkeuzes maken. Dit is hands-on en oefenbaar.

De derde dimensie — attitudes — is wat je houding bepaalt: kritisch zonder cynisch te worden, nieuwsgierig zonder kritiekloos te zijn, bereid om eigen werkwijze aan te passen wanneer een tool dat verdient. Dit klinkt zacht, is hard. Een docent die elk AI-onderwerp afkapt of juist alles omarmt, is op deze dimensie niet geletterd. De vierde dimensie — ethisch bewustzijn — is wat je doet wanneer er een dilemma is: AVG-bewust handelen, bias herkennen, transparantie naar studenten over wat door AI is gegenereerd, verantwoording afleggen.

De praktische werkregel: je bent niet 'op' geletterd of 'onder' geletterd. Je beweegt per dimensie op een schaal, en je beweegt per onderwerp anders. Voor mbo-software is je vaardigheidsdimensie waarschijnlijk hoger dan voor mbo-zorg, en dat is oké. Het kader helpt je benoemen waar jij staat, waar je sectie staat en wat de volgende stap is — niet of je 'mag' meedoen.`,
      mentalModel: {
        naam: "AI-geletterdheid als rijbewijs-plus",
        beschrijving: `Een rijbewijs zegt: je beheerst basisvaardigheden, kent verkeersregels en hebt verantwoordelijkheid begrepen. Het zegt niet dat je een Formule 1-coureur bent. Zo is AI-geletterdheid ook. Vier dimensies — kennis, vaardigheden, attitudes, ethisch bewustzijn — zijn samen genoeg om verantwoord te rijden in je eigen vak. Niet om elke nieuwe technologie blind te omarmen.`,
      },
      kernbegrippen: [
        {
          term: "Kennisdimensie",
          uitleg: "Wat je weet over hoe AI werkt: voorspellen versus weten, trainingsdata, knowledge cutoff, modelverschillen. Niet techniek voor de techniek — werkkennis om misverstanden te ontmaskeren.",
        },
        {
          term: "Vaardigheidsdimensie",
          uitleg: "Wat je doet: prompten, output beoordelen, bronnen valideren, iteratief verfijnen, eindkeuzes maken. Oefenbaar in elke vakcontext.",
        },
        {
          term: "Attitude-dimensie",
          uitleg: "Hoe je je verhoudt: kritisch én nieuwsgierig, bereid tot leren, niet polariserend. De zachte dimensie die hard verschil maakt in een sectiegesprek.",
        },
        {
          term: "Ethische dimensie",
          uitleg: "Wat je doet bij dilemma's: AVG, bias, transparantie, verantwoording. Verankerd in AI Act art. 4 — dit is geen optie, dit is wet.",
        },
      ],
    },

    learningGoals: [
      "Je benoemt de vier dimensies van AI-geletterdheid (AI-GO!/Kennisnet) en kunt per dimensie één voorbeeld uit je eigen vak geven.",
      "Je positioneert jezelf eerlijk per dimensie en formuleert per dimensie één concrete groei-actie voor de komende twee maanden.",
      "Je legt uit hoe artikel 4 van de AI Act vertaalt naar jouw rol als docent — geen jurisprudentie, wel werkpraktijk.",
      "Je bereidt één sectie-afspraak voor die concreter is dan 'we doen iets met AI' en die binnen vier weken meetbaar is.",
    ],

    scenario: {
      title: "Werksituatie",
      context:
        "Je bent docent op een mbo niveau 4 software-opleiding (of vergelijkbaar vo/hbo). Je opleidingsmanager vraagt jou en je sectie om vóór de zomer een 'AI-aanpak' op tafel te leggen. Niet groot, wel concreet. Je hebt zelf nog twijfels over wat je goed doet en wat niet. Je wil straks in de sectie een gesprek voeren dat ergens heen gaat.",
      role: "Docent · mbo niveau 4 software-development of hbo/vo, vak naar keuze",
      tools: "AI-GO! raamwerk (Npuls) · Kennisnet vier-stappen · AI Act art. 4 · papier voor je ontwikkelplan",
    },

    steps: [
      {
        title: "Kennisdimensie — drie misverstanden die jij kunt rechtzetten",
        body: "Wat weet je écht over hoe AI werkt? Schrijf drie misverstanden op die je in je eigen omgeving hoort (van collega's, studenten, ouders). Per misverstand: noteer wat de juiste werkdefinitie is in maximaal twee zinnen. Doel: zo klein dat je het in een gangoverleg kunt zeggen.",
        time: "10 min",
        voorbeeld:
          "'AI weet wat de juiste oorzaak van WO2 is.' Werkdefinitie: AI voorspelt taalpatronen op basis van trainingsdata. Voor historische feiten geldt: plausibel ≠ juist. Bronnen altijd zelf nazoeken.",
        workspace: {
          field: "kennisdimensie-misverstanden",
          label: "Drie misverstanden + drie werkdefinities",
          shortLabel: "Kennisdimensie",
          hint: "Per misverstand: één zin probleem, één zin werkdefinitie",
          placeholder:
            "1. Misverstand: ... → Werkdefinitie: ...\n2. Misverstand: ... → Werkdefinitie: ...\n3. Misverstand: ... → Werkdefinitie: ...",
          rows: 6,
        },
      },
      {
        title: "Vaardigheidsdimensie — één werkflow die jij beheerst",
        body: "Beschrijf één AI-werkflow waar jij goed in bent. Niet als opschepperij, als nulmeting. Geef vier stappen: prompt → output → validatie → eindkeuze. Wat zou een collega die deze workflow nog niet doet, van jou kunnen leren in twintig minuten?",
        time: "12 min",
        workspace: {
          field: "vaardigheidsdimensie-workflow",
          label: "Mijn workflow in vier stappen",
          shortLabel: "Vaardigheidsdimensie",
          hint: "Concreet: welke tool, welke prompt-structuur, welke validatiestap, welke eindkeuze",
          placeholder:
            "Stap 1 (prompt): ...\nStap 2 (output verwerken): ...\nStap 3 (validatie): ...\nStap 4 (eindkeuze): ...",
          rows: 6,
        },
      },
      {
        title: "Attitude-dimensie — schrijf je eigen positie eerlijk op",
        body: "Volwassen leren begint bij eerlijkheid. Beantwoord drie vragen kort: (1) waar ben ik te enthousiast over AI? (2) waar ben ik te terughoudend? (3) welke verandering in mijn houding zou mijn studenten direct ten goede komen? Geen sociaal wenselijke antwoorden — die helpen niemand.",
        time: "10 min",
        workspace: {
          field: "attitude-dimensie",
          label: "Drie eerlijke antwoorden over mijn houding",
          shortLabel: "Attitude",
          hint: "Te enthousiast over · te terughoudend op · wat zou mijn studenten direct helpen",
          placeholder:
            "Te enthousiast over: ...\nTe terughoudend op: ...\nVerandering met directe impact: ...",
          rows: 5,
        },
      },
      {
        title: "Ethische dimensie — drie dilemma's uit je eigen praktijk",
        body: "Noteer drie ethische dilemma's die jij dit semester bent tegengekomen (of zou kunnen tegenkomen). Per dilemma: wie is betrokken, welke wet/richtlijn raakt het (AVG, AI Act art. 4, schoolbeleid, beroepscode), en welke voorlopige keuze maak jij? 'Voorlopig' is hier oké — dit is een ontwikkeldocument.",
        time: "12 min",
        voorbeeld:
          "Dilemma: student levert essay in dat duidelijk AI-bewerkt is, niet transparant gemeld. Betrokken: student, ik, examencommissie. Raakt: AI Act art. 4 (transparantie-eis aan deployer), schoolbeleid academische integriteit. Voorlopig: mondeling navragen, geen sanctie zonder gesprek, lestijd reserveren voor transparantie-afspraken.",
        workspace: {
          field: "ethische-dimensie-dilemmas",
          label: "Drie dilemma's met voorlopige keuze",
          shortLabel: "Ethische dimensie",
          hint: "Per dilemma: betrokken · richtlijn · voorlopige keuze",
          placeholder:
            "1. Dilemma: ...\n   Betrokken: ...\n   Richtlijn: ...\n   Voorlopige keuze: ...\n2. ...\n3. ...",
          rows: 8,
        },
      },
      {
        title: "Eigen ontwikkelplan — per dimensie één actie binnen twee maanden",
        body: "Vertaal je vier blokken naar een tweemaandsplan. Per dimensie: één actie, één einddatum, één manier om te zien of het is gelukt. Geen tien acties. Vier. Een actie die je vandaag niet kunt formuleren, ga je over twee maanden ook niet doen.",
        time: "10 min",
        workspace: {
          field: "ontwikkelplan",
          label: "Mijn vier acties voor de komende twee maanden",
          shortLabel: "Ontwikkelplan",
          hint: "Per dimensie: actie · einddatum · meetpunt",
          placeholder:
            "Kennis: actie ... · klaar voor ... · gelukt als ...\nVaardigheden: ...\nAttitude: ...\nEthisch: ...",
          rows: 6,
        },
      },
      {
        title: "Sectie-afspraak — één concrete vraag voor de eerstvolgende vergadering",
        body: "Formuleer één vraag waar je sectie binnen één vergadering een knoop op kan doorhakken. Geen 'wat vinden we van AI'. Wel 'spreken we af dat we elke werkstuk-opdracht vóór juni één keer met AI testen om te zien wat AI eruit zou maken — ja of nee?' Concreet, beslisbaar, eindig.",
        time: "6 min",
        workspace: {
          field: "sectie-afspraak",
          label: "Mijn beslisbare sectie-vraag",
          shortLabel: "Sectie-afspraak",
          hint: "Ja/nee-formulering · binnen één vergadering te beslissen · meetbaar gevolg",
          placeholder: "Voorstel: ... Voor: ... Tegen: ... Beslismoment: ...",
          rows: 4,
        },
      },
    ],

    workedExamples: [
      {
        title: "Kennisdimensie — werkdefinitie schrijven",
        prompt:
          "Schrijf in maximaal 40 woorden een werkdefinitie van generatieve AI, geschikt voor een collega-docent zonder ICT-achtergrond. Vermijd technische jargon. Eindig met één zin over wat dit voor zijn lespraktijk betekent.",
        voorbeeldOutput: `Generatieve AI maakt nieuwe tekst, code of beelden door patronen uit grote hoeveelheden trainingsdata te combineren. Het herkent waarschijnlijkheid, niet waarheid. Voor je lespraktijk betekent dit: AI levert plausibele eerste versies — vakdiepte en feitencheck blijven jouw werk.`,
        commentaar:
          "Sterke werkdefinitie omdat hij de cruciale onderscheid maakt (patronen versus waarheid) zonder techniekverhaal. De laatste zin verbindt naar werk, niet naar techniek. Risico: 'patronen' is voor sommige collega's nog te abstract. Test bij één concrete collega — als die fronst, verfijn.",
        tryItYourself: {
          field: "we-werkdefinitie",
          label: "Schrijf jouw werkdefinitie",
          shortLabel: "Eigen werkdefinitie",
          hint: "Max 40 woorden, geen jargon, eindig met implicatie voor jouw vak",
          example:
            "Generatieve AI is ... Voor [jouw vak] betekent dit: ...",
        },
      },
      {
        title: "Vaardigheidsdimensie — workflow voor sectie-overdracht",
        prompt:
          "Beschrijf in vier genummerde stappen mijn workflow voor het maken van differentiatiemateriaal met AI. Schrijf het zo dat een collega die nooit met AI heeft gewerkt, het in twintig minuten kan reproduceren. Eindig met één zin over wat de collega waarschijnlijk fout zal doen de eerste keer.",
        voorbeeldOutput: `1. Open een AI-chat met je school-account (niet je privé-account).
2. Plak deze briefingstructuur in: vak, niveau, leerlingenkenmerken, lesduur, voorkeur.
3. Vraag drie versies, niet één. Kies en bewerk de laatste 20% zelf.
4. Test in de klas binnen één week en noteer wat werkte/niet werkte.
Veel-gemaakte beginnersfout: te weinig context geven — de eerste output voelt generiek, en in plaats van te verfijnen begint men opnieuw.`,
        commentaar:
          "De vierde stap (test binnen een week) is wat een workflow van een uitleg onderscheidt. De waarschuwende laatste zin is goud — het is precies wat een collega anders blind in zou stappen. Voor jouw eigen versie: noem de school-tool bij naam en geef een concreet briefingvoorbeeld.",
        tryItYourself: {
          field: "we-workflow",
          label: "Schrijf jouw workflow voor één AI-taak",
          shortLabel: "Eigen workflow",
          hint: "Vier stappen + één zin over de typische beginnersfout",
          example:
            "1. ... 2. ... 3. ... 4. ... Beginnersfout: ...",
        },
      },
      {
        title: "Ethische dimensie — verantwoordingsmail naar opleidingsmanager",
        prompt:
          "Schrijf een mail van max 150 woorden aan mijn opleidingsmanager. Onderwerp: hoe ik dit semester AI-gebruik door studenten ga verantwoorden conform AI Act artikel 4. Toon: zakelijk-vriendelijk, geen jargon, eindig met één concrete vraag aan de manager.",
        voorbeeldOutput: `Onderwerp: Verantwoording AI-gebruik dit semester

Beste [naam],

Vanaf 2 februari 2025 verplicht artikel 4 van de AI Act ons als school om aantoonbare AI-geletterdheid van personeel te borgen. Voor mijn vakken pas ik drie afspraken toe: (1) studenten melden in elk werkstuk welke AI-tools ze gebruikt hebben en waarvoor, (2) bij grotere opdrachten plan ik een korte mondelinge verantwoording in, (3) ik registreer dit per opdracht in een eenvoudig logboek.

Mijn vraag aan jou: kan jij vóór 15 juni bevestigen of deze afspraken aansluiten op het sectiebeleid, of moet ik ze eerst ter sectie inbrengen?

Vriendelijke groet,
[naam]`,
        commentaar:
          "Sterke mail omdat de wettelijke grond expliciet is, de eigen aanpak concreet is (drie punten, niet zes), en de afsluitende vraag de bal terugspeelt. Risico: 'logboek' kan extra werk lijken — overweeg of een bestaand systeem dit kan dragen. De toon is direct zonder te veel paniek over de wet.",
        tryItYourself: {
          field: "we-verantwoordingsmail",
          label: "Schrijf jouw verantwoordingsmail",
          shortLabel: "Eigen mail",
          hint: "Max 150 woorden, drie concrete afspraken, één vraag terug",
          example:
            "Beste [manager], Vanaf [datum] ... Mijn afspraken: 1. ... 2. ... 3. ... Mijn vraag: ...",
        },
      },
    ],

    vakvariaties: [
      {
        vak: "ICT/software · mbo niveau 4 en hbo informatica",
        body: "Vaardigheidsdimensie ligt hier vaak hoog (Cursor, Copilot, Claude in de IDE), kennisdimensie soms te laag ('het werkt, dus ik begrijp het'). Werk in deze dimensie aan modelverschillen, contextlimieten en wat 'agentic' betekent. Voor ethische dimensie: licentievragen rond gegenereerde code zijn vakspecifiek.",
      },
      {
        vak: "Zorg · mbo niveau 3-4",
        body: "Hoge ethische dimensie nodig: leerlinggegevens raken patiëntgegevens raken AVG. Werk vooral aan de attitudedimensie — voorkom 'AI mag niet in zorg' (te terughoudend) én 'AI doet diagnostiek wel even' (te enthousiast). AI-GO! biedt taal om dat genuanceerd te bespreken.",
      },
      {
        vak: "Talen · vo en hbo",
        body: "Vaardigheidsdimensie is sterk (vertalen, herschrijven, woordenschat) — werk aan de kennisdimensie rond bias in vertaling en culturele context. Voor ethische dimensie: hoe transparant ben je tegen studenten over wat jij zelf met AI hebt voorbereid?",
      },
      {
        vak: "Wiskunde / exact · vo",
        body: "Kennisdimensie is cruciaal: leerlingen moeten snappen waarom AI rekenfouten maakt in tussenstappen. Vaardigheidsdimensie: AI voor variatie in oefenmateriaal, niet voor uitleg-van-concepten. Ethisch: hoe scheid je 'AI als hulpmiddel' van 'AI als antwoordmachine' in toetsing?",
      },
      {
        vak: "Maatschappij / burgerschap · vo en mbo",
        body: "Sterke ethische dimensie vereist: hier komen bias, polarisatie en actualiteit samen. Attitude-dimensie: niet wegduiken voor controversie, niet meegaan in elk hype-verhaal. AI-GO! plus AI Act zijn hier directe gespreksstof — niet alleen achtergrond.",
      },
      {
        vak: "Onderwijsmanagement / coördinator · alle niveaus",
        body: "Voor managers/coördinatoren ligt de aanpak in de organisatorische vertaling: hoe vertaal je vier dimensies naar functieprofielen, naar PD-plannen, naar inkoopcriteria? De Kennisnet vier-stappen zijn dan je werkdocument — niet je theorie.",
      },
    ],

    valkuilen: [
      {
        titel: "AI-geletterdheid als checklist behandelen",
        watGebeurtEr:
          "Je vinkt 'cursus gevolgd', 'tool geprobeerd' en 'beleid gelezen' af, en denkt: klaar. Twee maanden later kun je geen enkele dimensie operationeel toepassen.",
        fix: "Maak elke dimensie meetbaar in eigen praktijk: één voorbeeld, één workflow, één eerlijke positie, één dilemma met keuze. Vinkjes zonder voorbeeld tellen niet.",
      },
      {
        titel: "Eén dimensie overschatten ten koste van de andere",
        watGebeurtEr:
          "Hoge vaardigheidsdimensie zonder ethische reflex (de 'powergebruiker' die data lekt) of hoog ethisch bewustzijn zonder vaardigheid (de 'criticus' die nooit zelf iets probeert).",
        fix: "Test bewust waar je laag scoort. Als je vier dimensies inschat en alleen 'vaardigheden' hoog is, weet je waar je werk ligt — niet bij meer cursussen, wel bij andere dimensies.",
      },
      {
        titel: "AI Act art. 4 als juridisch dreigement gebruiken",
        watGebeurtEr:
          "Je deelt collega's mee dat 'de wet ons verplicht', collega's voelen druk maar geen richting, gesprek polariseert tussen 'paniek' en 'het zal wel meevallen'.",
        fix: "Gebruik art. 4 als kader voor proportioneel beleid, niet als stok. De wet zegt 'sufficient level' — dat is per rol verschillend, en dat is jouw kans om aanpak op maat te maken.",
      },
      {
        titel: "Sectie-afspraken die niet beslisbaar zijn",
        watGebeurtEr:
          "'We moeten iets met AI' is geen afspraak, dat is een wens. Volgende vergadering staat hetzelfde punt weer op de agenda, niemand weet wat er besloten is.",
        fix: "Formuleer elke sectie-vraag als ja/nee met einddatum en zichtbaar gevolg. 'Spreken we af dat alle vaksecties vóór 1 oktober één lesopdracht hebben getest met AI?' is beslisbaar.",
      },
      {
        titel: "Privédata in publieke modellen",
        watGebeurtEr:
          "Je oefent een prompt met een echt leerlingstuk, naam erin, school-context herkenbaar. Data verlaat je school-tenant naar een Amerikaanse server.",
        fix: "Anonimiseer voor je deelt. Gebruik school-account waar mogelijk. Voor het oefenen van AI-geletterdheid: gebruik fictieve namen en gegenereerde voorbeelden — niet echte leerlingdata.",
      },
    ],

    geoefendSpoor: {
      eyebrow: "Voor de geoefende docent",
      titel: "Bouw een sectie-roadmap langs de vier dimensies",
      beschrijving:
        "Heb je je eigen plan al rond en wil je je sectie meenemen? Maak een roadmap waarop je sectiegenoten zichzelf positioneren per dimensie (anoniem), en bespreek waar de zwakke schakel zit. Vaak blijkt: één dimensie laag bij meerdere collega's. Dáár ligt je PD-investering, niet bij brede 'AI-trainingen'. Investering: één voorbereidingsmiddag plus één sectievergadering. Opbrengst: een gericht plan in plaats van een algemene cursus.",
      opdracht:
        "Lever vóór de zomer een sectie-roadmap op met vier dimensies, twee acties per dimensie en een verantwoordingsmoment in november. Deel met je opleidingsmanager en met de FG van je school.",
    },

    eindcriteria: [
      {
        criterium: "Vier dimensies eigen gemaakt",
        onder: "Twee of minder dimensies operationeel beschreven met eigen voorbeeld.",
        op: "Vier dimensies elk met eigen voorbeeld en eigen actie.",
        boven: "+ Per dimensie de samenhang met de andere drie expliciet benoemd.",
      },
      {
        criterium: "Werkdefinities",
        onder: "Definities overgenomen uit kader, niet eigen taalgebruik.",
        op: "Eigen werkdefinities in maximaal 40 woorden, geschikt voor één collega zonder achtergrond.",
        boven: "+ Werkdefinities getest bij een echte collega en verfijnd op basis van diens reactie.",
      },
      {
        criterium: "Wettelijke verankering",
        onder: "AI Act genoemd zonder concrete vertaling naar eigen praktijk.",
        op: "AI Act art. 4 vertaald in twee tot drie concrete praktijkafspraken voor eigen vak.",
        boven: "+ Afspraken afgestemd met opleidingsmanager of FG vóór invoering.",
      },
      {
        criterium: "Ontwikkelplan",
        onder: "Acties zijn algemeen ('meer leren over AI').",
        op: "Per dimensie één SMART-actie met einddatum en meetpunt.",
        boven: "+ Acties zijn opgenomen in je formele functioneringsdocument of PD-plan.",
      },
      {
        criterium: "Sectie-afspraak",
        onder: "Verkennend voorstel zonder beslismoment.",
        op: "Ja/nee-formulering, einddatum, zichtbaar gevolg.",
        boven: "+ Voorstel afgestemd met opleidingsmanager vóór de sectie-vergadering om kansrijkheid te vergroten.",
      },
    ],

    reflection: [
      "Op welke van de vier dimensies sta je hoger dan je een jaar geleden dacht — en wat is er gebeurd waardoor je dat zelf bent gaan zien?",
      "Welke dimensie heb je tot nu toe vermeden, en wat zegt dat over hoe jij het beroep van docent in een AI-tijdperk definieert?",
      "Wat gaat je sectie waarschijnlijk doen met jouw voorstel — en welke voorbereiding is er nodig om dat resultaat te verbeteren?",
    ],

    checklist: [
      "Vier dimensies (kennis, vaardigheden, attitudes, ethisch) elk met eigen voorbeeld uitgewerkt",
      "Drie misverstanden in mijn omgeving + werkdefinities op een rij",
      "Eén workflow in vier stappen die ik aan een collega kan overdragen",
      "Drie dilemma's met voorlopige ethische keuze opgeschreven",
      "AI Act art. 4 vertaald naar drie concrete praktijkafspraken",
      "Ontwikkelplan met vier SMART-acties voor twee maanden klaar",
      "Sectie-vraag beslisbaar geformuleerd voor eerstvolgende vergadering",
      "AVG-check: geen leerlinggegevens in oefenprompts gezet",
    ],

    verderLezen: [
      {
        titel: "AI-GO! Raamwerk voor AI-geletterdheid in het onderwijs",
        bron: "Npuls",
        jaar: 2025,
        link: "https://npuls.nl/kennisbank/ai-go-een-raamwerk-voor-ai-geletterdheid-in-het-onderwijs",
        waarom: "Wetenschappelijk onderbouwd kader (umbrella review) — vier dimensies vormen de basis van deze les.",
      },
      {
        titel: "Werken aan AI-geletterdheid op school",
        bron: "Kennisnet",
        jaar: 2025,
        link: "https://www.kennisnet.nl/artificial-intelligence/werken-aan-ai-geletterdheid-op-school/",
        waarom: "Vier-stappen aanpak voor po/vo, direct toepasbaar op je sectie of school.",
      },
      {
        titel: "EU AI Act, artikel 4 — AI Literacy",
        bron: "Europese Commissie",
        jaar: 2024,
        link: "https://artificialintelligenceact.eu/article/4/",
        waarom: "De wettelijke verankering — kort, helder, leesbaar zonder juridische achtergrond.",
      },
      {
        titel: "AI Competency Framework for Teachers",
        bron: "UNESCO",
        jaar: 2024,
        link: "https://www.unesco.org/en/articles/ai-competency-framework-teachers",
        waarom: "Internationale referentie met progressieniveaus Acquire/Deepen/Create — handig om je sectie te positioneren.",
      },
    ],

    nextLesson: "programmeerdidactiek",
  },

  /* ────────────────────────────────────────────────────────────────────────
   *  LES 2.2 — Programmeerdidactiek in een AI-tijdperk · Diepteles
   * ──────────────────────────────────────────────────────────────────────── */

  "programmeerdidactiek": {
    format: "diepteles",

    summary:
      "Cursor en Copilot staan op elke laptop. De vraag is niet meer of studenten AI gebruiken — die vraag is achterhaald. De vraag is welke pedagogische keuze jij maakt en hoe je leerdoelen herijkt. In deze les werk je drie strategieën uit (verbod, integratie, transparantie), kies je gemotiveerd je positie en herontwerp je één concrete lesopzet die past bij jouw vak en niveau.",

    duration: {
      total: "75-90 minuten",
      blocks: [
        { label: "Aanleiding", min: 8 },
        { label: "Conceptueel kader", min: 14 },
        { label: "Algoritmisch denken versus code typen", min: 10 },
        { label: "Drie strategieën verkennen", min: 12 },
        { label: "Positie kiezen + verantwoorden", min: 10 },
        { label: "Lesopzet herontwerpen", min: 18 },
        { label: "Toetsing meebewegen", min: 8 },
        { label: "Sectie-check", min: 5 },
      ],
    },

    opening: {
      eyebrow: "Aanleiding",
      aanleiding: `Het is half oktober. Een tweedejaars student levert zijn opdracht 'bouw een tic-tac-toe-game' in. Functionele code, vier classes, redelijke structuur. Mondelinge toelichting: 'Ik heb Cursor de architectuur laten voorstellen en daarna gevraagd om de minimax-functie. Werkt prima.' Hij vertelt eerlijk wat hij heeft gedaan. Geen plagiaat. Geen overtreding. En toch zit je met de vraag: heeft hij geleerd wat ik wilde dat hij leerde?

Een halve generatie geleden was de discussie nog: 'Mag je een rekenmachine bij wiskunde?' Het antwoord werd: ja, met afspraken — en het onderwijs verschoof. Wiskundeonderwijs ging niet meer over handmatig delen, het ging over begrip en strategie. Nu staan we voor een vergelijkbare verschuiving, maar groter. Een rekenmachine doet één ding. Een AI-coderingsassistent doet bijna alles — als je het laat.

Deze les is geen ja-of-nee-vraag. Deze les is: welke didactische keuze maak je expliciet, hoe verantwoord je die, en hoe ziet je herontworpen lesopzet eruit? Drie strategieën zijn op tafel — verbod, integratie, transparantie. Geen daarvan is universeel juist. Je bouwt een gemotiveerde keuze voor jouw context.`,
      waaromNu: `OECD's Digital Education Outlook 2026 stelt: 37% van docenten gebruikt al generatieve AI in werk, maar systemische pedagogische herijking ontbreekt in vrijwel alle westerse landen. Voor programmeeronderwijs is dit acuter dan voor andere vakken — Cursor en Copilot zijn standaard in de IDE waar studenten dagelijks werken.`,
    },

    conceptueel: {
      eyebrow: "Conceptueel kader",
      intro: `Programmeerdidactiek bouwt al decennia op een onderscheid dat in de praktijk vaak vervaagde: algoritmisch denken versus code typen. Algoritmisch denken is het ontwerpen van een oplossing — probleem ontleden, structuur bedenken, data modelleren, edge cases zien, complexiteit inschatten. Code typen is het uitschrijven daarvan in een taal. Het eerste is wat we vakinhoudelijk willen overdragen, het tweede is implementatie-discipline. Zolang die twee in elkaar overlopen, leerde een student beide tegelijk door simpelweg veel te programmeren.

AI verbreekt die koppeling. Een student kan zonder de eerste vaardigheid de tweede laten genereren. Hij produceert iets dat werkt. En de student denkt dat hij heeft geprogrammeerd. Voor jou als docent betekent dit: leerdoelen die impliciet aan 'code geschreven' hingen, leveren nu geen bewijs meer voor begrip. Wil je weten of een student kan ontwerpen, dan moet je dát expliciet toetsen — niet meer afleiden uit het feit dat de oplossing op zijn scherm staat.

Drie pedagogische strategieën zijn in 2025-2026 in de praktijk te onderscheiden. Verbod: AI-tools zijn uit tijdens contacttijd en in toetsmomenten. Integratie: AI is een werkpartner, studenten leren prompt-discipline en validatie naast traditionele technieken. Transparantie: AI mag overal, maar studenten verantwoorden expliciet wat ze door AI laten doen en wat ze zelf doen. Geen van drieën is zwakker per definitie. De waarde zit in de combinatie van strategie, leerdoel en toetsmoment.

Een eerlijke werkregel: je strategie bepaalt je toetsing en niet andersom. Wie kiest voor 'integratie' moet aanvaarden dat productevaluatie alleen niet meer aantoont dat een student kan ontwerpen — mondelinge verantwoording, live coding-momenten en architectuurschetsen op papier worden dan onontbeerlijk. Wie kiest voor 'verbod' moet aanvaarden dat de eigen lestijd realistisch begrensd is — buiten contacttijd gebeurt wat gebeurt. Wie kiest voor 'transparantie' moet bereid zijn elke beoordelingsmoment opnieuw te bevragen: heb ik in deze opdracht écht gezien wat ik wilde zien?`,
      mentalModel: {
        naam: "AI als rekenmachine-plus voor code",
        beschrijving: `Een rekenmachine verlost je van handmatige berekening, niet van begrip wat de berekening doet. AI doet hetzelfde voor code: het verlost je van uitschrijven, niet van ontwerpen. Het verschil is schaal — een rekenmachine vervangt twee stappen, AI vervangt dertig. Daarom is bewust onderscheiden van 'denkwerk' en 'typwerk' didactisch acuter dan in elke eerdere generatie.`,
      },
      kernbegrippen: [
        {
          term: "Algoritmisch denken",
          uitleg: "Probleem ontleden, structuur ontwerpen, data modelleren, edge cases zien. Dit is wat je vakinhoudelijk overdraagt — wel of geen AI in de buurt.",
        },
        {
          term: "Code typen",
          uitleg: "De vakinhoud uitschrijven in een taal. AI kan dit grotendeels overnemen; de vakvraag is: in welke context wil je dat juist niet?",
        },
        {
          term: "Pedagogische strategie",
          uitleg: "De expliciete keuze voor verbod, integratie of transparantie. Strategie bepaalt toetsing — niet andersom.",
        },
        {
          term: "Verantwoordingsgesprek",
          uitleg: "Mondelinge of schriftelijke toelichting waarin de student onderscheid maakt tussen eigen denkwerk en AI-bijdrage. Dé bewijslaag in een integratie- of transparantiestrategie.",
        },
      ],
    },

    learningGoals: [
      "Je benoemt het didactische onderscheid tussen algoritmisch denken en code typen en kunt voor één eigen leerdoel aangeven welk van de twee centraal staat.",
      "Je vergelijkt drie pedagogische strategieën (verbod, integratie, transparantie) op leerdoel-fit, uitvoerbaarheid en toetsing.",
      "Je kiest gemotiveerd één strategie voor één van je eigen vakonderdelen en verantwoordt je keuze in maximaal 150 woorden.",
      "Je herontwerpt één concrete lesopzet of opdracht zodat de strategie zichtbaar is in zowel werkvorm als toetsmoment.",
    ],

    scenario: {
      title: "Werksituatie",
      context:
        "Je bent docent op een mbo niveau 4 software-opleiding (of hbo informatica). Je geeft de module objectgeoriënteerd programmeren. Sinds vorig jaar gebruiken vrijwel alle studenten Cursor of vergelijkbaar in hun werkproces. Je merkt dat de eindopdrachten technisch beter zijn dan ooit, en dat tegelijk je twijfel groeit of de studenten écht hebben begrepen wat ze leveren. Je wilt deze module voor het komende semester herontwerpen.",
      role: "Docent · mbo niveau 4 software-development of hbo informatica",
      tools: "Bestaande modulebeschrijving · Cursor of Copilot · papier voor lesopzet-schets",
    },

    steps: [
      {
        title: "Vakdoel splitsen — algoritmisch denken of code typen?",
        body: "Pak één leerdoel uit je huidige module. Splits het in tweeën: welk deel gaat over algoritmisch denken (ontwerp, structuur, redeneren) en welk deel over code typen (uitvoering)? Wees specifiek — 'de student kan een klasse-hiërarchie ontwerpen' is denken; 'de student kan een constructor schrijven in Python' is typen.",
        time: "10 min",
        voorbeeld:
          "Leerdoel: 'De student bouwt een werkende klasse-hiërarchie voor een bibliotheekapplicatie.' Splitsing: ontwerpdeel = welke entiteiten, welke relaties, welke verantwoordelijkheden (denken). Implementatiedeel = de classes in Python uitschrijven (typen). Conclusie: ontwerp wil ik toetsen, implementatie kan AI doen — mits ik het ontwerp apart aftoets.",
        workspace: {
          field: "vakdoel-splitsing",
          label: "Mijn leerdoel — denken versus typen",
          shortLabel: "Vakdoel splitsen",
          hint: "Wat is denkwerk · wat is uitvoering · welk deel toets ik?",
          placeholder:
            "Leerdoel: ...\nDenkwerk: ...\nUitvoering: ...\nWelk deel toets ik bewust apart: ...",
          rows: 6,
        },
      },
      {
        title: "Drie strategieën verkennen — wat hou ik over per strategie?",
        body: "Voor elk van de drie strategieën: wat blijft van mijn huidige werkvorm overeind, en wat moet ik aanpassen? Maak een matrixje op papier. Doel: voelen welke strategie wrijving geeft met je werkpraktijk — die wrijving is informatie.",
        time: "12 min",
        workspace: {
          field: "drie-strategieen",
          label: "Wat moet ik aanpassen per strategie?",
          shortLabel: "Strategieën",
          hint: "Per strategie: blijft hetzelfde · moet anders · concrete maatregel",
          placeholder:
            "Verbod: blijft ... · moet anders ... · maatregel ...\nIntegratie: ...\nTransparantie: ...",
          rows: 8,
        },
      },
      {
        title: "Positie kiezen + verantwoorden",
        body: "Schrijf in max 150 woorden welke strategie je voor dit vakonderdeel kiest en waarom. Eis aan jezelf: noem minstens één afweging waarbij je een nadeel van je gekozen strategie expliciet erkent. Een keuze zonder erkend nadeel is een ongereflecteerde keuze.",
        time: "10 min",
        voorbeeld:
          "Voor de module 'algoritmen en datastructuren' kies ik verbod tijdens contacttijd en in twee tussentijdse opdrachten, daarna integratie voor het eindproject. Reden: het denken over keuze-tussen-datastructuren is een kerncompetentie die ik in toetsing moet zien zonder AI. Nadeel: studenten die buiten contacttijd AI gebruiken in hun eigen oefenproces krijgen daar minder begeleiding op — dat los ik op met een kort begeleidingsblok in week vier.",
        workspace: {
          field: "positie-keuze",
          label: "Mijn gekozen strategie + verantwoording",
          shortLabel: "Positie",
          hint: "Max 150 woorden · noem expliciet één nadeel dat je accepteert",
          placeholder:
            "Strategie: ...\nReden: ...\nNadeel dat ik accepteer: ...\nManier waarop ik dat opvang: ...",
          rows: 6,
        },
      },
      {
        title: "Lesopzet herontwerpen — eerste contactmoment",
        body: "Schrijf één concrete les van 90 minuten waarin je gekozen strategie zichtbaar is in opening, werkvorm en afsluiting. Wat zien studenten in week één dat ze anders maakt denken over AI-gebruik in deze module?",
        time: "18 min",
        voorbeeld:
          "Opening (15 min): live coding-demo zonder AI, met fouten en correcties. Doel: laten zien dat denken hardop een onderdeel van het vak is. Werkvorm (50 min): tweetallen schetsen op papier een klasse-diagram, daarna pas naar laptop met de afspraak: AI mag de implementatie doen, maar één van de twee studenten kan elk moment uitleggen waarom. Afsluiting (25 min): elke groep krijgt twee minuten om hun ontwerpkeuze te verantwoorden — niet de code, het ontwerp.",
        workspace: {
          field: "lesopzet-herontwerp",
          label: "Mijn herontworpen lesopzet (90 min)",
          shortLabel: "Lesopzet",
          hint: "Opening · werkvorm · afsluiting — strategie moet expliciet zichtbaar zijn",
          placeholder:
            "Opening (... min): ...\nWerkvorm (... min): ...\nAfsluiting (... min): ...",
          rows: 8,
        },
      },
      {
        title: "Toetsing meebewegen — twee meetmomenten",
        body: "Twee toetsmomenten die passen bij je strategie. Verbod en integratie vragen verschillende bewijsvormen. Schrijf per moment: wat meet je, in welke vorm, en hoe weet je dat je écht meet wat je wilde meten.",
        time: "8 min",
        workspace: {
          field: "toetsing-meebewegen",
          label: "Twee toetsmomenten",
          shortLabel: "Toetsing",
          hint: "Wat · hoe · waarom dit valide bewijs is",
          placeholder:
            "Moment 1: ... vorm ... validiteit ...\nMoment 2: ... vorm ... validiteit ...",
          rows: 6,
        },
      },
      {
        title: "Sectie-check — wat moet kloppen met collega-modules?",
        body: "Jouw module staat niet alleen. Welke afspraken moet je met de docent van de voorgaande en volgende module maken om je strategie te laten werken? Eén regel per collega.",
        time: "5 min",
        workspace: {
          field: "sectie-check",
          label: "Afspraken met collega-modules",
          shortLabel: "Sectie-check",
          hint: "Eén afspraak per voor/na-module — concreet",
          placeholder:
            "Met module ervoor: ...\nMet module erna: ...",
          rows: 3,
        },
      },
    ],

    workedExamples: [
      {
        title: "Strategiekeuze verantwoorden (integratie)",
        prompt:
          "Schrijf in max 150 woorden waarom ik voor de module 'webapps met React' integratie kies als pedagogische strategie. Noem twee nadelen die ik accepteer en hoe ik die in mijn werkvorm opvang.",
        voorbeeldOutput: `Voor de module webapps met React kies ik integratie. Studenten werken sowieso met Cursor en Copilot in hun stage en eerste baan; ze leren niet door uit hun toolkit te stappen, maar door discipline op te bouwen binnen die toolkit. We werken volgens een prompt-validate-verantwoord-routine: studenten prompten, valideren met tests, en kunnen bij elke commit één kernkeuze mondeling toelichten.

Twee nadelen die ik accepteer: (1) studenten die zwak zijn in JavaScript-basics blijven daar zwak in, want AI verbergt dat; ik vang dat op met twee korte schrijftoetsen zonder tool. (2) Beoordeling is intensiever omdat ik vaker mondeling moet verifiëren; ik plan dit in als blokken van vijftien minuten per student in week zes en twaalf.`,
        commentaar:
          "Sterke verantwoording omdat de nadelen niet worden weggeschreven maar opgevangen met concrete maatregelen (schrijftoetsen, geplande gesprekken). De koppeling naar werkpraktijk (stage, eerste baan) maakt de keuze ook naar studenten verdedigbaar. Risico om op te letten: de schrijftoetsen moeten écht plaatsvinden, anders verdampt de integratie naar laissez-faire.",
        tryItYourself: {
          field: "we-strategie-verantwoording",
          label: "Verantwoord je eigen strategiekeuze",
          shortLabel: "Eigen verantwoording",
          hint: "Max 150 woorden · twee nadelen + concrete opvang",
          example:
            "Voor [module] kies ik [strategie]. Reden: ... Nadeel 1: ... opvang: ... Nadeel 2: ... opvang: ...",
        },
      },
      {
        title: "Lesopzet maken (verbod-strategie, eerste week)",
        prompt:
          "Ontwerp een les van 90 minuten voor een mbo niveau 4 software-klas, module objectgeoriënteerd programmeren, eerste contactmoment van het semester. Strategie: verbod op AI-tools tijdens contacttijd. Toon werkvorm waarin het verbod productief is, niet straffend.",
        voorbeeldOutput: `Opening (15 min): elke student schrijft één regel op papier — een Python-snippet die volgens hen 'iets nuttigs' doet in een eigen project van vorig jaar. Hardop voorlezen met buurman. Doel: activeren wat ze al kunnen zonder hulp.

Werkvorm (60 min): in tweetallen aan papier en bord — geen laptop. Opdracht: ontwerp een klasse-hiërarchie voor een fietsenverhuur (drie typen fietsen, klanten, verhuurperiodes). Eis: schets eerst entiteiten, dan relaties, dan verantwoordelijkheden. Loop twee keer langs voor sturing. Halverwege rouleren naar buur-tweetal om elkaars schets feedback te geven.

Afsluiting (15 min): twee tweetallen presenteren ontwerp (zes minuten elk). Klassikale reflectie: welke verantwoordelijkheid in welke klasse — en waarom dáár? Huiswerk: ontwerp uitwerken in code mét AI-tool naar keuze, maar volgende les begin je met je papieren ontwerp in de hand.`,
        commentaar:
          "Het verbod is productief omdat het denken zichtbaar maakt op papier en bord — niet omdat AI 'mag niet'. De afsluiting koppelt al naar volgende les: thuis mag AI, maar het bewijs van denken is je papieren ontwerp. Risico: als je niet langsloopt voor sturing, zakt de werkvorm in. Plan twee sturingsmomenten expliciet in.",
        tryItYourself: {
          field: "we-lesopzet",
          label: "Ontwerp jouw lesopzet (90 min)",
          shortLabel: "Eigen lesopzet",
          hint: "Opening · werkvorm · afsluiting — strategie moet de werkvorm dragen, niet bestraffen",
          example:
            "Opening (... min): ... Werkvorm (... min): ... Afsluiting (... min): ...",
        },
      },
      {
        title: "Toetsvorm — verantwoordingsgesprek scripten",
        prompt:
          "Schrijf vijf vragen voor een verantwoordingsgesprek van zeven minuten dat hoort bij een coding-opdracht waarin AI is toegestaan. Doel: zien of de student zelf het ontwerp begrijpt. Niet: betrappen op AI-gebruik.",
        voorbeeldOutput: `1. Loop me door je hoofdkeuze in het ontwerp. Welke alternatieven heb je overwogen?
2. Wijs op één plek waar je code anders had geschreven dan je AI-assistent voorstelde. Waarom?
3. Als ik klant ben en vraag om een vierde fietstype toe te voegen — waar in jouw code zou ik moeten beginnen?
4. Welke test zou breken als ik de constructor van klasse X verander? En waarom?
5. Stel: een collega neemt over deze code in zes maanden. Wat moet zij eerst weten?`,
        commentaar:
          "De vragen meten begrip, niet of AI is gebruikt — dat is precies wat een verantwoordingsgesprek moet doen in een integratie-strategie. Vraag 2 is slim omdat het studenten dwingt verschil te maken tussen AI-voorstel en eigen keuze. Vraag 5 vertaalt naar onderhoudbaarheid, een vakcompetentie. Voeg eventueel een live-coding-component toe (vijf minuten kleine wijziging) om motoriek te zien.",
        tryItYourself: {
          field: "we-verantwoordingsgesprek",
          label: "Schrijf jouw vijf vragen",
          shortLabel: "Eigen gespreksvragen",
          hint: "Meet begrip van ontwerp, niet AI-detectie",
          example:
            "1. ... 2. ... 3. ... 4. ... 5. ...",
        },
      },
    ],

    vakvariaties: [
      {
        vak: "Software-development · mbo niveau 4",
        body: "Studenten zitten dagelijks in Cursor. Verbod tijdens contacttijd werkt voor begrip-momenten, integratie voor projecten dichtbij beroepspraktijk. Combineer: eerste vier weken meer verbod, daarna verschuiven naar integratie met expliciete verantwoording.",
      },
      {
        vak: "Informatica · hbo eerstejaars",
        body: "Sterke neiging tot 'het werkt dus klaar'. Investeer in week één in algoritmisch-denken-zonder-laptop. Begin integratie pas in periode twee, als studenten basis-vocabulaire hebben om met AI-output te discussiëren.",
      },
      {
        vak: "Informatica · vo bovenbouw",
        body: "Andere context: examenprogramma stelt eisen aan zelfstandige codeervaardigheid. Verbod tijdens schoolexamens en SE-momenten is bijna onvermijdelijk. Transparantie in projecten — leerlingen leren mondeling toelichten wat ze maakten en waarom.",
      },
      {
        vak: "Game development · mbo/hbo",
        body: "AI levert sterk werk in boilerplate en herhalende systemen, zwak in gameplay-tuning en player-experience-keuzes. Strategie: integratie voor systeemcode, verbod of transparantie voor designkeuzes. Studenten leren onderscheiden waar AI bijdraagt en waar smaak telt.",
      },
      {
        vak: "Data engineering · hbo",
        body: "Pipelines zijn deels boilerplate (AI sterk), deels architectuur (AI nuttig maar verantwoording vereist). Werk met scenario's waar studenten een gegenereerde pipeline moeten breken en repareren — daar zit het denkbewijs.",
      },
      {
        vak: "Programmeren in andere vakken (wiskunde, natuurkunde, onderzoek)",
        body: "Voor niet-software-opleidingen waar coderen instrument is: integratie ligt voor de hand. Verantwoording verschuift dan naar 'kun je het resultaat interpreteren' — niet 'kun je de code uitleggen'. Stem af met vakdocent over wat 'voldoende begrip' betekent.",
      },
    ],

    valkuilen: [
      {
        titel: "Strategie kiezen zonder leerdoelen erbij te pakken",
        watGebeurtEr:
          "Je kiest 'integratie' omdat dat modern voelt, maar je leerdoelen meten nog steeds 'kan een functie schrijven'. Spanningen tussen werkvorm en toetsing maken studenten cynisch.",
        fix: "Begin altijd met je leerdoel splitsen (denken/typen). Pas dan je strategie kiezen. Pas dan je toetsing aanpassen. In die volgorde.",
      },
      {
        titel: "Verbod als straf in plaats van werkvorm",
        watGebeurtEr:
          "'Geen AI in mijn les' wordt 'het kamp van de docent die niet meegaat met de tijd'. Studenten omzeilen, je legitimiteit kalft af.",
        fix: "Verbind elk verbodsmoment aan een productieve werkvorm (papier, bord, peer). Het verbod is geen kerncomponent — de werkvorm is. AI-uit is een randvoorwaarde.",
      },
      {
        titel: "Integratie zonder mondelinge verantwoording",
        watGebeurtEr:
          "Je laat AI toe, beoordeelt eindproduct, en weet niet of de student begrijpt wat hij inlevert. Cijfers worden hoog en geldig tegelijk twijfelachtig.",
        fix: "Integratie vereist sowieso een verantwoordingsmoment — mondeling, live-coding of architectuurschets. Plan dit als vast onderdeel van de toetscyclus, niet als optie.",
      },
      {
        titel: "Transparantie zonder kader",
        watGebeurtEr:
          "Studenten 'mogen alles' mits ze het melden — maar wat ze moeten melden en hoe is vaag. Sommige leveren een dagboek in, anderen een zin.",
        fix: "Maak een transparantieformulier met drie velden: wat heeft AI gedaan, wat heb ik gedaan, welke keuze maakte ik anders dan AI voorstelde. Vast format = vergelijkbare beoordeling.",
      },
      {
        titel: "Strategie veranderen midden in de module",
        watGebeurtEr:
          "Week vier merk je dat het niet werkt. Je verandert van integratie naar verbod. Studenten voelen het als willekeur, de leerdoelen blijven hetzelfde.",
        fix: "Beslis vóór de module welke strategie waar geldt. Maak een mini-roadmap zichtbaar voor studenten. Wijzigen binnen het semester: alleen na expliciete uitleg en met behoud van eerder behaalde resultaten.",
      },
    ],

    geoefendSpoor: {
      eyebrow: "Voor de geoefende docent",
      titel: "Schrijf een sectiebrede strategiekaart voor jullie module-set",
      beschrijving:
        "Heb je je eigen module al herontworpen en wil je verder? Schrijf met je sectie een kaart waarop voor elke module in jullie opleiding de strategie zichtbaar is — verbod, integratie, transparantie — en hoe ze elkaar opvolgen. Eerstejaars meer verbod, derdejaars meer transparantie. Studenten leren niet alleen programmeren mét AI, ze leren ook expliciet hun eigen positie ontwikkelen. Investering: één sectievergadering plus drie uur voor de coördinator. Opbrengst: coherente opleiding, geen module-eilanden meer.",
      opdracht:
        "Lever vóór de nieuwe schooljaarstart een sectiekaart op met per module strategie + leerdoelen-splitsing + minstens één afspraak met de voorgaande en volgende module. Deel met de opleidingsmanager.",
    },

    eindcriteria: [
      {
        criterium: "Leerdoel-splitsing",
        onder: "Leerdoel niet ontleed in denken versus typen.",
        op: "Eén leerdoel duidelijk ontleed en aangewezen welk deel je primair toetst.",
        boven: "+ Splitsing toegepast op meerdere leerdoelen en met collega vergeleken.",
      },
      {
        criterium: "Strategiekeuze",
        onder: "Strategie genoemd zonder afweging.",
        op: "Strategie gekozen met expliciete verantwoording én één nadeel-met-opvang.",
        boven: "+ Strategie verbonden aan voorgaande/volgende modules in de opleiding.",
      },
      {
        criterium: "Lesopzet",
        onder: "Algemene werkvorm zonder zichtbare strategie.",
        op: "Strategie expliciet zichtbaar in opening, werkvorm én afsluiting.",
        boven: "+ Lesopzet getest met een collega of in een pilot-les en bijgesteld.",
      },
      {
        criterium: "Toetsing",
        onder: "Bestaande toetsvorm overgenomen zonder aanpassing.",
        op: "Twee meetmomenten waarvan minstens één gericht op denkbewijs (niet codeproduct).",
        boven: "+ Beoordelingsrubric herzien zodat bewijs van denken expliciet beoordeeld wordt.",
      },
      {
        criterium: "Sectie-afstemming",
        onder: "Eigen keuze zonder gesprek met collega's.",
        op: "Eén concrete afspraak met collega van voorgaande of volgende module.",
        boven: "+ Sectie-brede strategiekaart of gespreksverslag.",
      },
    ],

    reflection: [
      "Welke van je huidige leerdoelen wordt eigenlijk niet meer aangetoond door wat studenten inleveren — en wat zegt dat over wat je impliciet wel/niet meer toetst?",
      "Welk deel van programmeerdidactiek dat jij belangrijk vindt, dreigt te verdampen als je niets verandert? En wat hou je vervolgens stevig vast?",
      "Hoe ga je je strategiekeuze uitleggen aan een student die zegt: 'maar ik krijg straks ook AI op mijn werk' — wat is je antwoord dat zowel zijn punt erkent als jouw didactische keuze verdedigt?",
    ],

    checklist: [
      "Eén leerdoel uit eigen module gesplitst in denken versus typen",
      "Drie strategieën verkend en wrijvingspunten benoemd",
      "Strategie gekozen + verantwoording van max 150 woorden met één erkend nadeel",
      "Lesopzet van 90 minuten herontworpen — strategie zichtbaar in opening, werkvorm en afsluiting",
      "Twee toetsmomenten ontworpen waarvan minstens één denkbewijs meet",
      "Verantwoordingsgesprek-script (vijf vragen) klaar voor integratie/transparantie",
      "Eén afspraak met collega van voorgaande of volgende module",
      "Beoordelingsrubric gescand op denkbewijs (niet alleen codeproduct)",
    ],

    verderLezen: [
      {
        titel: "AI Competency Framework for Teachers — AI Pedagogy",
        bron: "UNESCO",
        jaar: 2024,
        link: "https://www.unesco.org/en/articles/ai-competency-framework-teachers",
        waarom: "Competentie 'AI pedagogy' biedt vocabulaire voor strategiekeuzes — internationaal vergelijkbaar.",
      },
      {
        titel: "Visie op Toetsing en Examinering. Naar AI-bewuste toetspraktijken",
        bron: "Npuls",
        jaar: 2024,
        link: "https://www.npuls.nl/_assets/cdcb37e6-11f7-468f-962b-06fe599a8a23/Visie-op-toetsing-en-examinering-onderbouwing-Npuls.pdf",
        waarom: "Nederlandse referentie voor het herontwerpen van toetsing wanneer AI op tafel ligt.",
      },
      {
        titel: "Digital Education Outlook 2026",
        bron: "OECD",
        jaar: 2026,
        link: "https://www.oecd.org/content/dam/oecd/en/publications/reports/2026/01/oecd-digital-education-outlook-2026_940e0dd8/062a7394-en.pdf",
        waarom: "Internationaal beeld van pedagogische verschuiving rond AI — handig voor sectie-discussie.",
      },
      {
        titel: "What is AI Literacy? Competencies and Design Considerations",
        bron: "Long & Magerko · CHI Conference",
        jaar: 2020,
        link: "https://dl.acm.org/doi/fullHtml/10.1145/3313831.3376727",
        waarom: "Vijf vragen waarmee je toetst of een opdracht conceptueel begrip vraagt — bruikbaar voor opdrachtontwerp.",
      },
    ],

    nextLesson: "ai-assisted-development",
  },

  /* ────────────────────────────────────────────────────────────────────────
   *  LES 2.3 — AI-assisted development uitgelegd · Diepteles
   * ──────────────────────────────────────────────────────────────────────── */

  "ai-assisted-development": {
    format: "diepteles",

    summary:
      "AI-assisted development is geen knop, het zijn vier verschillende werkvormen. Autocomplete, chat, agentic en inline-edit vragen elk een andere docent-aanpak. In deze les bouw je per werkvorm een mentaal model, oefen je drie kernvragen die je altijd aan studenten stelt, en lever je voor jouw vakcontext een didactisch werkdocument op dat je sectie kan overnemen.",

    duration: {
      total: "75-90 minuten",
      blocks: [
        { label: "Aanleiding", min: 8 },
        { label: "Conceptueel kader", min: 12 },
        { label: "Vier werkvormen onderscheiden", min: 14 },
        { label: "Zelf doorlopen", min: 14 },
        { label: "Drie kernvragen oefenen", min: 10 },
        { label: "Werkdocument schrijven", min: 12 },
        { label: "Beoordeling herontwerpen", min: 10 },
        { label: "Sectiecheck", min: 5 },
      ],
    },

    opening: {
      eyebrow: "Aanleiding",
      aanleiding: `Een tweedejaars student van een mbo niveau 4 software-opleiding presenteert haar webapp. Functionele login, drie pagina's, een database-koppeling die werkt. Op de vraag 'wat gebeurt er in regel 42?' antwoordt ze rustig: 'Geen idee, dat heeft Cursor gemaakt.' Ze liegt niet, ze schaamt zich niet. Voor haar is het normaal: regel 42 is wat de IDE invulde toen zij doorging met regel 43. Ze ervaart geen probleem.

Dit is geen incident en geen studentkwestie alleen. AI-assisted development is binnen twee jaar in vrijwel elke programmeer-IDE standaard geworden. Cursor, GitHub Copilot, Claude in de editor — verschillende namen, vier werkvormen die door elkaar lopen. De student weet vaak niet welk gedrag bij welke werkvorm hoort, en de docent — als die er niet bewust in is getraind — ook niet.

Deze les gaat niet over 'mogen studenten AI gebruiken'. Die discussie is achterhaald. Deze les gaat over wat jij als docent moet kunnen onderscheiden om studenten zinvol te begeleiden. Vier werkvormen, drie kernvragen, en een werkdocument dat in je sectie te delen is.`,
      waaromNu: `OECD's Digital Education Outlook 2026 stelt: 'AI-assistance has become the default coding environment for incoming students.' Nederlandse opleidingen lopen achter in didactisch antwoord. Het AI-GO! raamwerk (Npuls 2025) benoemt expliciet 'tool-bewust werken' als vaardigheidsdimensie — een eis aan docent én student.`,
    },

    conceptueel: {
      eyebrow: "Conceptueel kader",
      intro: `AI-assisted development is een verzamelterm voor minstens vier verschillende werkvormen die in dezelfde IDE samenkomen. Wie deze vier niet onderscheidt, geeft studenten één label en mist precies de plek waar het didactisch interessant wordt. De vier werkvormen verschillen op twee dimensies: hoeveel context AI ziet, en hoeveel autonomie AI krijgt om beslissingen te nemen.

Autocomplete is regel-voor-regel suggesties terwijl je typt — laag op autonomie, lokaal op context. AI raadt wat je waarschijnlijk wilt schrijven, jij accepteert of negeert. Het lijkt onschuldig en is dat vaak ook — tot het moment dat een student blindelings accepteert wat een patroonherkenning voorstelt en de logica nooit zelf heeft uitgedacht. Chat-assist is gesprek over je code — hoger op context, lager op autonomie. Je legt een probleem voor, AI legt een redenering en oplossing voor, jij beslist. Dit nodigt uit tot dialoog en is didactisch goed te benutten als studenten verplicht zijn die dialoog zichtbaar te maken.

Agentic werken is taakdelegatie — hoog op autonomie. Je geeft een doel ('voeg een betaalpagina toe aan deze app'), de agent neemt zelf meerdere stappen: leest bestanden, schrijft, test, rapporteert. Voor productiewerk een tijdwinst. Voor onderwijs een didactische valkuil — de student kan een feature 'oogsten' zonder de tussenstappen ooit te hebben gezien. Inline-edit is gerichte herschrijving — je selecteert code en vraagt om verbetering. Smal op context, controleerbaar op uitkomst. Goed voor refactor-momenten, gevaarlijk als het de gewoonte wordt om nooit zelf een refactor te bedenken.

De vakvraag is niet 'welke werkvorm is goed of slecht', maar welke past bij welk leerdoel en welk niveau. Een eerstejaars moet autocomplete bewust kunnen wegklikken — anders bouwt hij geen eigen vocabulaire op. Een vierdejaars moet juist alle vier werkvormen beheersen én kunnen verantwoorden welke hij waar inzet. Daar tussenin ligt jouw didactisch ontwerp.

Drie kernvragen blijven over alle werkvormen heen relevant. Eén: kun je regel voor regel uitleggen wat dit doet? Twee: wat zou breken als ik dit weghaal? Drie: welke alternatieven heeft AI niet voorgesteld? Wie deze drie systematisch stelt — niet als verhoor, wel als professioneel gesprek — krijgt het verschil tussen 'het werkt' en 'ik begrijp' zichtbaar. En dat is wat je studenten moet leren beheersen voor ze straks in een team van twintig developers staan.`,
      mentalModel: {
        naam: "AI als pair programmer met vier rollen",
        beschrijving: `Een pair programmer is iemand naast je die meedenkt. AI is dat ook — maar het wisselt voortdurend van rol. Soms type-aanvuller (autocomplete), soms sparringpartner (chat), soms stagiair die je een opdracht geeft (agentic), soms editor die je tekst verbetert (inline-edit). Wie niet weet welke rol op welk moment actief is, weet ook niet wat hij eigenlijk delegeert. Vier rollen herkennen is werkdiscipline — voor jou en voor je studenten.`,
      },
      kernbegrippen: [
        {
          term: "Autocomplete",
          uitleg: "Regel-voor-regel suggesties terwijl je typt. Laag autonomie, lokale context. Risico: blind accepteren bouwt geen eigen vocabulaire op.",
        },
        {
          term: "Chat-assist",
          uitleg: "Gesprek over je code. Goed voor dialoog en uitleg — leerwinst zit in wat je zelf vraagt en doorvraagt.",
        },
        {
          term: "Agentic werken",
          uitleg: "Taakdelegatie waarbij AI meerdere stappen autonoom uitvoert. Productief voor werk, riskant voor leren — de tussenstappen blijven onzichtbaar.",
        },
        {
          term: "Inline-edit",
          uitleg: "Gerichte herschrijving van geselecteerde code. Smal en controleerbaar. Gewoonte-risico: nooit meer zelf bedenken hoe je refactort.",
        },
      ],
    },

    learningGoals: [
      "Je onderscheidt vier werkvormen van AI-assisted development en kunt per werkvorm aangeven welk didactisch risico en welke kans erbij hoort.",
      "Je doorloopt zelf één korte mini-tool in elk van de vier werkvormen en markeert het moment waarop je stopte met volledig begrijpen.",
      "Je oefent drie kernvragen ('regel-voor-regel', 'wat zou breken', 'welke alternatieven') als gewoonte in begeleidingsgesprekken.",
      "Je levert een werkdocument op met vier werkvormen, drie vragen en een beoordelingscomponent voor je eigen sectie of opleiding.",
    ],

    scenario: {
      title: "Werksituatie",
      context:
        "Je begeleidt een groep tweedejaars mbo niveau 4 software-development of hbo informatica. Ze leveren al maanden code die functioneel werkt, maar je merkt dat de discussies in code-reviews steeds oppervlakkiger worden. Iedereen accepteert elkaars code, niemand vraagt door. Je wil je werkwijze zo aanpassen dat AI-assisted development zichtbaar wordt in je begeleiding — niet als straf, wel als beroepsdiscipline.",
      role: "Docent · mbo niveau 4 software-development of hbo informatica",
      tools: "Cursor of GitHub Copilot of Claude in editor · een eigen mini-project van max 30 regels · papier voor reflectie",
    },

    steps: [
      {
        title: "Vier werkvormen scherp benoemen voor je eigen praktijk",
        body: "Maak een schema met vier kolommen — autocomplete, chat, agentic, inline-edit. Per werkvorm: één zin over wat het doet, één zin over wanneer je het zelf gebruikt, één zin over wat een eerstejaars hier verkeerd kan gaan doen.",
        time: "14 min",
        voorbeeld:
          "Agentic — Wat het doet: meerdere stappen autonoom uitvoeren. Wanneer ik het gebruik: in productiecode voor patronen die ik al beheers. Eerstejaars-valkuil: een feature 'oogsten' zonder dat de student de tussenstappen ooit heeft gezien — geen leerervaring, wel een product.",
        workspace: {
          field: "vier-werkvormen-schema",
          label: "Mijn vier-werkvormen-schema",
          shortLabel: "Werkvormen-schema",
          hint: "Per werkvorm: wat · wanneer ik · eerstejaars-valkuil",
          placeholder:
            "Autocomplete — wat: ... wanneer: ... valkuil: ...\nChat — ...\nAgentic — ...\nInline-edit — ...",
          rows: 8,
        },
      },
      {
        title: "Zelf doorlopen — mini-tool in elke werkvorm",
        body: "Bouw één mini-tool van max 30 regels (bv. een functie die een lijst boeken sorteert op meerdere criteria). Doorloop het bewust vier keer — eerst alleen autocomplete, dan met chat, dan met agentic-instructie, dan met inline-edit-refactor. Noteer per ronde: waar stopte ik met écht begrijpen?",
        time: "14 min",
        workspace: {
          field: "zelf-doorlopen",
          label: "Mijn vier rondes — waar haakte ik af?",
          shortLabel: "Zelf doorlopen",
          hint: "Per ronde: één concrete observatie over jouw begrip-grens",
          placeholder:
            "Autocomplete: ik haakte af bij ...\nChat: ...\nAgentic: ...\nInline-edit: ...",
          rows: 6,
        },
      },
      {
        title: "Drie kernvragen oefenen — script voor begeleidingsgesprek",
        body: "Schrijf een script van vier minuten waarin jij de drie kernvragen aan een student stelt over een willekeurig stuk code. Het script moet professioneel klinken (niet als verhoor) én concrete vervolgvragen bevatten als de student vastloopt.",
        time: "10 min",
        voorbeeld:
          "Opening: 'Loop me even door wat hier gebeurt.' Doorvraag 1: 'Pak regel 17. Wat is hier de keuze?' Doorvraag 2: 'Als ik regels 22 t/m 25 weghaal, wat breekt er en wat blijft werken?' Doorvraag 3: 'Toen je dit liet genereren, welke aanpak heeft de assistent niet voorgesteld die je achteraf interessant vindt?' Slot: 'Wat zou je veranderen als je dit zelf opnieuw moest doen?'",
        workspace: {
          field: "drie-kernvragen-script",
          label: "Mijn begeleidingsgesprek-script (4 min)",
          shortLabel: "Vragen-script",
          hint: "Opening + drie kernvragen + één afsluiting · professioneel, niet verhorend",
          placeholder:
            "Opening: ...\nKernvraag 1: ...\nKernvraag 2: ...\nKernvraag 3: ...\nAfsluiting: ...",
          rows: 6,
        },
      },
      {
        title: "Werkdocument voor sectie — vier werkvormen + drie vragen",
        body: "Combineer je schema en je script in één werkdocument van max één A4. Toon: collega-naar-collega. Doel: een sectiegenoot kan dit lezen en morgen toepassen, zonder uitleg van jou erbij.",
        time: "12 min",
        workspace: {
          field: "werkdocument-sectie",
          label: "Mijn werkdocument (max 1 A4)",
          shortLabel: "Werkdocument",
          hint: "Structuur: korte intro · vier werkvormen-tabel · drie kernvragen-blok · één concrete afspraak",
          placeholder:
            "Intro (50 w): ...\nWerkvormen-tabel: ...\nDrie kernvragen + voorbeeldgebruik: ...\nSectie-afspraak: ...",
          rows: 8,
        },
      },
      {
        title: "Beoordeling herontwerpen — wat zie je terug in cijfers?",
        body: "Pak één bestaande coderingsopdracht uit je eigen module. Herschrijf de beoordelingsrubric zodat de drie kernvragen herkenbaar in de criteria zitten. Doel: code die werkt is een drempel, niet een eindcijfer. Begrip is wat het cijfer onderscheidt.",
        time: "10 min",
        workspace: {
          field: "beoordeling-herontwerp",
          label: "Mijn herontworpen beoordelingsrubric",
          shortLabel: "Beoordeling",
          hint: "Drie criteria die begrip beoordelen naast functionaliteit",
          placeholder:
            "Criterium 1 (begrip per regel): ...\nCriterium 2 (impact-analyse): ...\nCriterium 3 (alternatieven kunnen benoemen): ...",
          rows: 6,
        },
      },
      {
        title: "Sectiecheck — één gesprek deze week",
        body: "Plan één gesprek van vijftien minuten met een collega-developer of -docent voordat de week om is. Laat je werkdocument lezen, vraag om één concrete kritiek. Schrijf de feedback op.",
        time: "5 min",
        workspace: {
          field: "sectiecheck-plan",
          label: "Mijn gespreksplan + feedbacknotitie",
          shortLabel: "Sectiecheck",
          hint: "Wie · wanneer · welke specifieke vraag",
          placeholder:
            "Met: ... Wanneer: ... Vraag: 'Welke kernvraag zou jij anders stellen — en waarom?'",
          rows: 3,
        },
      },
    ],

    workedExamples: [
      {
        title: "Werkvorm-schema voor mbo niveau 4 software-development",
        prompt:
          "Schrijf een schema van vier werkvormen AI-assisted development voor mijn mbo-software-klas (niveau 4, tweedejaars). Per werkvorm één regel over wat het is, één regel over wanneer ze het mogen gebruiken in mijn vak, één regel over waar ze de mist in gaan.",
        voorbeeldOutput: `Autocomplete — IDE vult typen aan terwijl je werkt. Mogen ze gebruiken in alle code-opdrachten. Mist-de-mist: blind tab indrukken zonder lezen — code groeit, begrip niet.

Chat-assist — gesprek met AI over een probleem. Mogen ze gebruiken bij debug en uitleg. Mist-de-mist: AI-uitleg klakkeloos overnemen zonder zelf na te lopen.

Agentic — AI voert meerdere stappen autonoom uit. Mogen ze pas in periode 3, na de architectuur-toets. Mist-de-mist: feature geleverd, tussenstappen nooit gezien — verantwoording faalt.

Inline-edit — geselecteerde code laten herschrijven. Mogen ze altijd, mits ze de wijziging één-zin kunnen benoemen. Mist-de-mist: 'beter' zonder uitleg wat beter is.`,
        commentaar:
          "Sterke kaart omdat per werkvorm zowel grens als kans is benoemd. De gradatie ('mogen vanaf periode 3') is didactisch passend bij niveau-progressie. Aandachtspunt: 'mogen' kan straffend voelen — overweeg formulering 'gebruiken we gericht vanaf periode 3' of vergelijkbaar. Test bij studenten of de grenzen werkbaar zijn.",
        tryItYourself: {
          field: "we-werkvorm-schema",
          label: "Schrijf jouw werkvorm-schema",
          shortLabel: "Eigen schema",
          hint: "Vier werkvormen, drie regels per werkvorm, gradatie passend bij je niveau",
          example:
            "Autocomplete — wat ... wanneer ... mist ...\nChat-assist — ...\nAgentic — ...\nInline-edit — ...",
        },
      },
      {
        title: "Begeleidingsgesprek-script voor hbo informatica",
        prompt:
          "Schrijf een script van vijf minuten waarin ik als docent met een hbo-eerstejaars zijn AI-bewerkte code bespreek. Toon: collegiaal, niet verhorend. Doel: zien of hij het ontwerp begrijpt. Niet: betrappen op AI-gebruik.",
        voorbeeldOutput: `0:00 — 'Loop me door wat dit programma doet, alsof ik nu binnenkom.'
0:45 — Wijs op één concrete regel: 'Hoezo deze conditie hier?'
1:30 — 'Stel dat ik regels 18 t/m 22 weghaal — wat blijft werken, wat breekt?'
2:30 — 'Toen je dit liet genereren, welke alternatieve aanpak vond je achteraf interessant?'
3:30 — 'Wat zou je hier veranderen als je dit zelf opnieuw moest doen?'
4:30 — 'Eén ding waar je tevreden over bent en één waar je bij volgende opdracht op gaat letten.'`,
        commentaar:
          "Vijf minuten is een goede begroting — kort genoeg om in te plannen, lang genoeg om signalen te krijgen. De tijdsmarkers helpen je in de praktijk om niet vast te lopen. Vraag op 2:30 ('welke alternatieve aanpak') werkt vooral als de student gewend is hieraan — eerste keer zal hij stamelen, dat is informatie. Voeg bij twijfel een 'live-coding wijziging in 1 minuut' toe als zesde stap.",
        tryItYourself: {
          field: "we-script",
          label: "Schrijf jouw 5-minuten-script",
          shortLabel: "Eigen script",
          hint: "Met tijdsmarkers — opening, drie vragen, afsluiting",
          example:
            "0:00 — ...\n1:00 — ...\n2:30 — ...\n4:00 — ...",
        },
      },
      {
        title: "Inline-uitleg-prompt: 'leg deze code uit aan een eerstejaars'",
        prompt:
          "Leg deze functie regel voor regel uit, op het taalniveau van een eerstejaars mbo niveau 4 software-development. Markeer expliciet drie regels waar een beginner het meest waarschijnlijk verkeerd zou begrijpen, en noem per regel het misverstand.",
        voorbeeldOutput: `Regel 1: We definiëren een functie genaamd sortBoeken die een lijst neemt.
Regel 2: We maken een lege lijst die we als resultaat teruggeven.
[...]
Drie verwarringspunten voor een beginner:
- Regel 7 (lambda x: x['titel']): beginners denken dat 'lambda' iets met getallen is. Het is een anonieme functie — hier sorteren we op het veld 'titel'.
- Regel 11 (return None bij lege lijst): beginners verwachten een lege lijst terug, niet None. Dit is een ontwerpkeuze die documentatie verdient.
- Regel 14 (sorted versus list.sort): beginners weten vaak niet dat sorted een nieuwe lijst maakt en list.sort de oude verandert. Dit kost in toekomstige code regelmatig fouten.`,
        commentaar:
          "Sterke prompt omdat AI niet alleen uitlegt, maar ook drie didactische signalen oplevert. Bruikbaar als startpunt voor klassikale bespreking: jij hebt al drie discussiepunten in handen voordat de les begint. Risico: AI markeert soms triviale punten — herijk altijd op basis van wat jouw klas eerder verkeerd las.",
        tryItYourself: {
          field: "we-uitleg-prompt",
          label: "Maak je eigen uitleg-prompt",
          shortLabel: "Eigen uitleg-prompt",
          hint: "Voor jouw vak en niveau — vraag expliciet om verwarringspunten",
          example:
            "Leg deze [code/regel/functie] uit aan een [niveau]. Markeer drie plekken waar een beginner het verkeerd zou begrijpen, met per plek het misverstand.",
        },
      },
      {
        title: "Refactor-prompt met verantwoording",
        prompt:
          "Refactor deze functie zodat hij beter testbaar en leesbaar is. Per wijziging: noem expliciet welke code smell of welk principe het adresseert. Geef per wijziging één unit-test die zonder de refactor moeilijker te schrijven was.",
        voorbeeldOutput: `Wijziging 1 — Extracted method 'calculateDiscount' (was inline). Smell: long method. Test: 'discount voor seniorleeftijd wordt correct berekend' — zonder extractie zou je de hele orderFlow moeten mocken.

Wijziging 2 — Hernoemd 'd' naar 'discountPercentage'. Smell: cryptic name. Test: leesbaarheidstest impliciet — bij codereview is intentie nu zichtbaar.

Wijziging 3 — Vervangen magische getal 0.15 door const SENIOR_DISCOUNT_RATE. Principe: tell, don't compute. Test: bij wijziging van het tarief blijft alle test-data geldig — wijziging op één plek.`,
        commentaar:
          "Deze prompt is goud voor onderwijs omdat de AI niet alleen herschrijft maar onderwijs-grade verantwoording levert. Studenten leren mee — de smells en principes worden expliciet. Direct te gebruiken in een werkvorm waarin studenten dezelfde refactor zonder AI proberen, daarna vergelijken met deze output, en hun keuzes verantwoorden.",
        tryItYourself: {
          field: "we-refactor-prompt",
          label: "Schrijf jouw refactor-prompt voor één eigen functie",
          shortLabel: "Eigen refactor-prompt",
          hint: "Eis: per wijziging een code smell of principe + één unit-test die zonder refactor moeilijker was",
          example:
            "Refactor deze [functie]. Per wijziging: smell of principe + unit-test die zonder refactor lastiger te schrijven was.",
        },
      },
    ],

    vakvariaties: [
      {
        vak: "Software-development · mbo niveau 4",
        body: "Eerstejaars hebben baat bij beperking van autocomplete en agentic — bouw eerst vocabulaire op. Tweedejaars krijgen chat-assist met verplichte verantwoording. Derdejaars: alle vier werkvormen toegestaan, mits zichtbaar in code-review en eindopdrachten.",
      },
      {
        vak: "Informatica · hbo eerstejaars",
        body: "Periode 1: vooral chat-assist als sparringpartner, autocomplete bewust uit voor leer-momenten. Vanaf periode 2: agentic geïntroduceerd in projectcontext. Vraag standaard naar 'welke alternatieven niet voorgesteld' — daar zit het kritisch denken.",
      },
      {
        vak: "Informatica · vo bovenbouw",
        body: "Examenprogramma verlangt zelfstandige codeervaardigheid. Werkvormen onderscheiden helpt leerlingen onderscheiden tussen oefenfase (waar AI hulp is) en toetsmoment (waar het op eigen kracht moet). Zonder dit onderscheid leren ze verkeerde gewoontes voor het examen.",
      },
      {
        vak: "Game development · mbo/hbo",
        body: "Agentic is sterk in boilerplate (input-handlers, save-systems), zwak in game-feel en player-onboarding. Onderwijs: laat AI het skelet bouwen, studenten doen de tuning en verantwoorden waarom hun keuze beter werkt voor de doelgroep.",
      },
      {
        vak: "Datawetenschap / data engineering · hbo",
        body: "Chat-assist sterk voor datacleaning-keuzes (wat doe je met outliers, missing values, schaal). Vraag naar 'wat zou breken' wanneer studenten een transformatie toepassen — zo zien ze data-aannames die anders impliciet blijven.",
      },
      {
        vak: "Cybersecurity · mbo/hbo",
        body: "Agentic gevaarlijk: een student die 'maak deze app veilig' delegeert leert niets over threat modeling. Inline-edit voor specifieke hardening-stappen is wel passend. Verantwoording per wijziging is hier letterlijk veiligheidskritisch.",
      },
    ],

    valkuilen: [
      {
        titel: "Vier werkvormen op één hoop gooien",
        watGebeurtEr:
          "Je hebt regels over 'AI in mijn vak' zonder onderscheid. Studenten begrijpen niet wanneer iets wel/niet bedoeld is. Discussie polariseert tussen 'mag alles' en 'mag niets'.",
        fix: "Maak het schema expliciet zichtbaar in je modulehandleiding. Bespreek het in week één klassikaal. Wat je niet onderscheidt, kunnen studenten niet bewust toepassen.",
      },
      {
        titel: "Drie kernvragen als verhoor inzetten",
        watGebeurtEr:
          "Studenten ervaren begeleidingsgesprek als toetsmoment. Sluiten zich af. Antwoorden defensief. Het signaal dat je wilde krijgen, krijg je niet.",
        fix: "Open elk gesprek met een neutrale vraag ('loop me even door wat hier gebeurt'). De drie kernvragen komen pas daarna, in dezelfde toon als bij een collega. Verantwoording is geen rechtszaak.",
      },
      {
        titel: "Agentic delegeren zonder transparantie-eis",
        watGebeurtEr:
          "Student levert een feature die werkt, jij beoordeelt het eindproduct, niemand heeft de tussenstappen gezien. Cijfer wordt formeel correct, didactisch leeg.",
        fix: "Bij agentic-gebruik: eis altijd een log of beschrijving van wat de agent heeft gedaan, plus één eigen wijziging die de student bewust heeft toegevoegd of veranderd. Zonder bewijs van eigen ingreep: geen volledige beoordeling.",
      },
      {
        titel: "Beoordeling niet meebewegen met werkvorm",
        watGebeurtEr:
          "Je laat alle werkvormen toe, maar je rubric meet alleen functionaliteit. Studenten begrijpen niet wat extra cijfers oplevert. Onderscheid verdwijnt.",
        fix: "Rubric in drie lagen: code werkt (drempel) → begrip per regel zichtbaar → alternatieven kunnen benoemen. Cijfer onderscheidt zich op de bovenste lagen. Maak dit expliciet in week één.",
      },
      {
        titel: "Eigen onbekendheid verbergen",
        watGebeurtEr:
          "Je hebt zelf nooit met agentic gewerkt en bluft. Studenten zien dat. Je geloofwaardigheid op AI-onderwerpen kalft af, ook waar je wél deskundig bent.",
        fix: "Doorloop de vier werkvormen zelf voor je het van studenten verlangt. Eerlijk in les zeggen 'agentic gebruik ik zelf weinig, maar ik wil dat we het samen verkennen' werkt beter dan doen alsof.",
      },
    ],

    geoefendSpoor: {
      eyebrow: "Voor de geoefende docent",
      titel: "Bouw een tool-bewuste opleidingsleerlijn over drie jaar",
      beschrijving:
        "Heb je vier werkvormen al in je eigen module en wil je verder? Schrijf met je sectie een leerlijn: in welk jaar mogen welke werkvormen, welke verantwoording wordt verlangd, welke toetsmomenten passen erbij. Eerstejaars meer autocomplete-bewust en chat-dialoog, tweedejaars meer agentic met verantwoording, derdejaars vrij gebruik mits zichtbaar in oplevering. Resultaat: studenten zien progressie, en jij krijgt een sectiebreed verhaal richting werkveld. Investering: één studiedag plus drie sectievergaderingen. Opbrengst: geen module-eilanden meer.",
      opdracht:
        "Lever vóór de evaluatiecyclus een leerlijn op met per leerjaar de toegestane werkvormen, de verlangde verantwoording en het toetsmoment. Bespreek met je opleidingsmanager en met één werkveldcontact (stagebegeleider).",
    },

    eindcriteria: [
      {
        criterium: "Onderscheid werkvormen",
        onder: "Werkvormen niet onderscheiden in eigen praktijk.",
        op: "Vier werkvormen beschreven met wat, wanneer, valkuil.",
        boven: "+ Werkvormen gekoppeld aan progressie in leerjaren of niveaus.",
      },
      {
        criterium: "Zelf doorlopen",
        onder: "Eén werkvorm geprobeerd, drie alleen gelezen over.",
        op: "Mini-tool in alle vier werkvormen doorlopen, eigen begrips-grens benoemd.",
        boven: "+ Eigen ervaring vertaald in concrete les-anekdotes die je in klas kunt gebruiken.",
      },
      {
        criterium: "Kernvragen-script",
        onder: "Drie vragen genoemd zonder gespreksvolgorde.",
        op: "Script met opening, drie kernvragen en afsluiting — professionele toon.",
        boven: "+ Script getest met één student en bijgesteld op basis van werkbaarheid.",
      },
      {
        criterium: "Werkdocument",
        onder: "Losse aantekeningen zonder structuur.",
        op: "Eén A4 met schema, vragen en sectie-afspraak — collega-leesbaar zonder uitleg.",
        boven: "+ Werkdocument besproken met een collega en sectie en aangepast.",
      },
      {
        criterium: "Beoordeling herontworpen",
        onder: "Rubric onveranderd — alleen functionaliteit.",
        op: "Rubric herzien met drie niveaus: werkt · begrip · alternatieven.",
        boven: "+ Rubric afgestemd op leerlijn en met examencommissie gedeeld.",
      },
    ],

    reflection: [
      "Op welke van de vier werkvormen ben je zelf onbewust afhankelijk geworden — en hoe weet je dat zonder bewust te testen?",
      "Welke van de drie kernvragen is in jouw klascultuur het moeilijkst om als 'normaal' te stellen — en wat zegt dat over jullie professionele gespreksgewoontes?",
      "Wat verandert er voor jou als beoordelaar wanneer 'code werkt' een drempel is in plaats van een cijfer — en hoe rechtvaardig je dat richting studenten die nu volledige cijfers haalden?",
    ],

    checklist: [
      "Vier-werkvormen-schema (autocomplete, chat, agentic, inline-edit) ingevuld",
      "Mini-tool zelf doorlopen in alle vier werkvormen — begrips-grens genoteerd",
      "Begeleidingsscript van 4-5 minuten met drie kernvragen klaar",
      "Werkdocument van max één A4 voor sectie geschreven",
      "Beoordelingsrubric herzien met drie lagen (werkt · begrip · alternatieven)",
      "Eén collega-gesprek over werkdocument gepland en uitgevoerd",
      "Eén opdracht herontworpen waarin werkvormen-onderscheid zichtbaar is",
      "Eerlijk in les benoemd welke werkvorm jij zelf het minst beheerst",
    ],

    verderLezen: [
      {
        titel: "Visie op Toetsing en Examinering. Naar AI-bewuste toetspraktijken",
        bron: "Npuls",
        jaar: 2024,
        link: "https://www.npuls.nl/_assets/cdcb37e6-11f7-468f-962b-06fe599a8a23/Visie-op-toetsing-en-examinering-onderbouwing-Npuls.pdf",
        waarom: "Vertaalt 'AI in proces' naar concrete toetsherontwerp-stappen voor hbo en mbo.",
      },
      {
        titel: "AI-GO! Raamwerk voor AI-geletterdheid in het onderwijs",
        bron: "Npuls",
        jaar: 2025,
        link: "https://npuls.nl/kennisbank/ai-go-een-raamwerk-voor-ai-geletterdheid-in-het-onderwijs",
        waarom: "Tool-bewust werken expliciet benoemd als vaardigheid — ondersteunt jouw werkvorm-onderscheid.",
      },
      {
        titel: "AI Competency Framework for Teachers — AI Foundations",
        bron: "UNESCO",
        jaar: 2024,
        link: "https://www.unesco.org/en/articles/ai-competency-framework-teachers",
        waarom: "Internationale referentie voor wat docenten over AI-werkvormen moeten kunnen onderscheiden.",
      },
      {
        titel: "Digital Education Outlook 2026 — AI in classrooms",
        bron: "OECD",
        jaar: 2026,
        link: "https://www.oecd.org/content/dam/oecd/en/publications/reports/2026/01/oecd-digital-education-outlook-2026_940e0dd8/062a7394-en.pdf",
        waarom: "Cijfers over hoe wijdverbreid AI-assisted development inmiddels is — handig voor sectie-discussie.",
      },
    ],

    nextLesson: "vibe-coding",
  },
};
