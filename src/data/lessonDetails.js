// Detailed content for selected lessons. Other lessons fall back to a
// generic-but-realistic structure built from the module data.
//
// Batch-content uit /audit/ wordt onderaan gemerged en overrijdt eerdere
// simpele entries waar ze dezelfde slug hebben.

import { batchModule1 } from "../../audit/batch-module-1.js";
import { batchModule2 } from "../../audit/batch-module-2.js";
import { batchModule2Rest } from "../../audit/batch-module-2-rest.js";
import { batchKennischecks } from "../../audit/batch-kennischecks.js";

const baseLessonDetails = {
  lesvoorbereiding: {
    format: "diepteles",

    summary:
      "Lesvoorbereiding is een van de eerste dingen die docenten met AI proberen — en een van de eerste plekken waar de tijdwinst weer wegloopt aan generieke teksten. In deze les bouw je een werkstructuur die jouw voorbereiding écht halveert: scherpe briefing, vier doorgewerkte voorbeelden met commentaar, vakvariaties en een rubric voor wanneer je opzet 'af' is.",

    duration: {
      total: "75-90 minuten",
      blocks: [
        { label: "Aanleiding", min: 8 },
        { label: "Conceptueel kader", min: 12 },
        { label: "Briefing schrijven", min: 10 },
        { label: "Leerdoelen", min: 10 },
        { label: "Differentiëren", min: 15 },
        { label: "Toetsvragen", min: 10 },
        { label: "Casus + rubric", min: 12 },
        { label: "Herlezen", min: 8 },
      ],
    },

    opening: {
      eyebrow: "Aanleiding",
      aanleiding: `Het is zondagavond. Je hebt vier lessen voor de komende week. Je weet wat je wilt bereiken — een gedifferentieerde opdracht over rolmodellen voor een 3 vmbo-tl-klas, een korte formatieve toets over verzuring voor 5 havo, een casuscollege wondzorg voor mbo niveau 4 en een feedback-rubric voor een hbo-essay. Drie uur, denk je, dan staat het.

Wat er meestal gebeurt: AI geeft je teksten die te braaf zijn, leerdoelen die je toch zelf overschrijft en quizvragen die de stof niet écht toetsen. Aan het einde van die avond ben je niet sneller klaar — je hebt alleen meer kladversies. De belofte 'AI halveert je voorbereiding' voelt eerder als een belofte aan iemand anders.

Deze les laat zien hoe je AI inzet voor lesvoorbereiding zonder dat je daar onder de streep méér tijd in stopt. Niet omdat AI ineens slimmer wordt, maar omdat jij scherper briefer en kritischer terugleest.`,
      waaromNu: `OECD-onderzoek (2024) wijst uit dat 37% van de docenten al regelmatig generatieve AI inzet voor planning en toetsing. Zonder werkstructuur ontstaat dan de typische voorbereidingstijd-paradox: je vraagt AI iets, je krijgt iets bruikbaars-maar-niet-genoeg, en je gaat alsnog handmatig herschrijven. Hier breek je die cyclus.`,
    },

    conceptueel: {
      eyebrow: "Conceptueel kader",
      intro: `Lesvoorbereiding bestaat uit werkzaamheden die AI uitstekend kan ondersteunen, en uit werkzaamheden waar het structureel tekortschiet. Voor variëren, samenvatten, herschrijven op een ander taalniveau en een ruwe rubric leveren is AI zo'n beetje het ideale hulpmiddel. Voor invoelen wat in jóúw klas werkt, oordelen over vakdiepte en herkennen welke leerling welke ondersteuning nodig heeft is geen taalmodel ter wereld een vervanger.

Het verschil zit niet in wát je vraagt, maar vanaf welk punt je AI inschakelt. Vraag je het te vroeg, dan moet AI gokken naar context die alleen jij hebt — je krijgt iets generieks. Vraag je het te laat, dan herhaal je werk dat al klaar lag in je hoofd.

De praktische werkregel: geef AI altijd vier dingen vooraf — je vak, je niveau, je leerlingenkenmerken en je didactische voorkeur. Daarna laat je AI variëren binnen die kaders. Niet andersom. Geen vraag als 'wat is een goede les over fotosynthese', wel een vraag als 'ik geef morgen 50 minuten les over fotosynthese aan 2 havo, waarvan vijf leerlingen taalzwak. Welke drie startwerkvormen komen rechtstreeks uit de leerstof voort?'

Daarmee schuif je AI van bron naar gereedschap. Het maakt verschil voor de kwaliteit van wat eruit komt — en voor je gevoel achteraf dat het jouw les is, niet die van een chatbot.`,
      mentalModel: {
        naam: "AI als junior co-teacher",
        beschrijving: `Stel je een gemotiveerde stagiair voor die alles heeft gelezen, geen klassenervaring heeft, je leerlingen niet kent en altijd brave antwoorden geeft als je 'm niet bevraagt. Dat is AI in lesvoorbereiding. Goed in variëren en uitwerken — zwak in inschatten of het past. Jouw rol is briefen, terugkaatsen en kiezen. Niet uitvoeren.`,
      },
      kernbegrippen: [
        {
          term: "Briefing",
          uitleg: "De set context die je altijd vooraf meegeeft: vak, niveau, leerlingenkenmerken, lesduur, didactische voorkeur. Geen briefing = geen bruikbare output.",
        },
        {
          term: "Iteratie",
          uitleg: "Niet opnieuw beginnen maar verfijnen. Een goede tweede prompt is bijna altijd: 'maak X lastiger', 'vervang voorbeeld door Y', 'voeg één hint toe'.",
        },
        {
          term: "Vakdiepte",
          uitleg: "Kennis die alleen jij hebt: misconcepties die jouw leerlingen elk jaar maken, voorbeelden die in jouw context wel/niet werken, koppelingen met eerder lesmateriaal. AI mist dit per definitie.",
        },
        {
          term: "Steigers",
          uitleg: "Gedoseerde ondersteuning per niveau — woordhulp, structuur, voorbeelden, contextverbreding. Als AI 'differentiëren' alleen vertaalt naar 'korter en langer', is je briefing te vaag geweest.",
        },
      ],
    },

    learningGoals: [
      "Je schrijft een briefing met vier ingrediënten waarmee AI bruikbare lesmaterialen levert.",
      "Je herwerkt AI's output voor leerdoelen, differentiatie, quizvragen en rubrics tot iets dat klaar is voor je klas.",
      "Je herkent vijf typische valkuilen en hebt per valkuil een werkende fix.",
      "Je benoemt welk deel van je voorbereiding je bewust niet aan AI uitbesteedt — en waarom.",
    ],

    scenario: {
      title: "Klaslokaalscenario",
      context:
        "Je geeft maandagochtend 60 minuten les over 'duurzame mode' aan een 3 mavo-klas. Drie leerlingen lezen op 2F-niveau, de rest op 3F. Je hebt twintig minuten om een lesopzet te maken die zowel uitdaagt als ondersteunt — en die je vanmiddag nog met de vaksectie wilt delen.",
      role: "Docent Nederlands · 3 mavo",
      tools: "ChatGPT (school-account) · digibord · werkbladen",
    },

    steps: [
      {
        title: "Schets de context — vier ingrediënten in één prompt",
        body: "Vak, niveau, lesduur, leerlingenkenmerken en jouw didactische voorkeur. Sla deze briefing op zodat je 'm hergebruikt voor volgende lessen — verander alleen het onderwerp en de duur.",
        time: "10 min",
        voorbeeld:
          "'Je ondersteunt een docent Nederlands op 3 mavo. Lesduur 60 min. Klas van 26 met drie 2F-leerlingen en een groepje dat snel afhaakt bij langere teksten. Mijn voorkeur: starten met een werkvorm, niet met theorie.'",
        workspace: {
          field: "briefing",
          label: "Schrijf je eigen briefing",
          shortLabel: "Mijn briefing",
          hint: "Vak · niveau · lesduur · leerlingenkenmerken · jouw voorkeur",
          placeholder:
            "Je ondersteunt een docent ... op ... Lesduur ... Klas van ... met ... Mijn voorkeur: ...",
          rows: 5,
        },
      },
      {
        title: "Drie versies van het leerdoel — kies en herschrijf",
        body: "Vraag altijd drie versies. Eén is bijna nooit goed; drie forceren keuze. Kies de versie die jouw vakvisie het beste raakt en herschrijf de laatste 20% zelf — dat 20% is wat van AI's les jouw les maakt.",
        time: "10 min",
        workspace: {
          field: "leerdoel-keuze",
          label: "Mijn gekozen + bijgeschaafde leerdoel",
          shortLabel: "Mijn leerdoel",
          hint: "Plak je gekozen versie en herschrijf de laatste 20% in je vakvisie",
          placeholder:
            "De leerling kan ... [vakdiepte die AI miste]",
          rows: 4,
        },
      },
      {
        title: "Differentieer met expliciete steigers",
        body: "Vraag basis, gemiddeld en uitdagend met gelijke leerdoelen. Geef AI expliciet aan welke steigers per niveau passen: woordhulp + voorgestructureerd voor basis, voorbeeld + open einde voor gemiddeld, contextverbreding voor uitdagend.",
        time: "15 min",
        workspace: {
          field: "differentiatie",
          label: "Mijn drie niveaus mét steigers",
          shortLabel: "Differentiatie",
          hint: "Basis · gemiddeld · uitdagend — benoem per niveau de steiger",
          placeholder:
            "Basis (woordhulp + structuur): ...\nGemiddeld (voorbeeldzin + open einde): ...\nUitdagend (bronnenvergelijking + standpunt): ...",
          rows: 6,
        },
      },
      {
        title: "Quizvragen mét afleiders op misconcepties",
        body: "Vraag MC-vragen waarbij elke afleider gebaseerd is op een denkfout die jouw leerlingen typisch maken. Voeg toe: 'leg per afleider in één zin uit waarom hij verleidelijk fout is'. Daarmee bouw je tegelijk een diagnostisch instrument.",
        time: "10 min",
        workspace: {
          field: "quizvragen",
          label: "Mijn quizvragen met onderbouwde afleiders",
          shortLabel: "Quizvragen",
          hint: "Geef per afleider één zin: waarom is hij verleidelijk fout?",
          placeholder:
            "Vraag: ...\nA) ... — verleidelijk omdat ...\nB) ... — verleidelijk omdat ...\nC) ... ✓\nD) ... — verleidelijk omdat ...",
          rows: 6,
        },
      },
      {
        title: "Eén casus met écht dilemma",
        body: "Een goede casus heeft géén evident antwoord. Vraag AI om twee perspectieven die elkaar geloofwaardig tegenspreken — geen strawman, maar twee verdedigbare posities. Toets zelf of allebei vakinhoudelijk verdedigbaar zijn.",
        time: "8 min",
        workspace: {
          field: "casus",
          label: "Mijn dilemma-casus",
          shortLabel: "Casus",
          hint: "Korte situatie + twee verdedigbare posities",
          placeholder:
            "Situatie: ...\nPositie A (verdedigbaar omdat ...): ...\nPositie B (verdedigbaar omdat ...): ...",
          rows: 5,
        },
      },
      {
        title: "Herlees alles als vakgenoot",
        body: "Vraag jezelf: zou ik dit aan een collega laten zien? Schrap wat braaf is, vervang wat oppervlakkig is, voeg vakdiepte toe waar AI braver was. Het is jouw les, niet AI's les.",
        time: "12 min",
        workspace: {
          field: "herlees-notities",
          label: "Mijn herlees-notities — wat heb ik gewijzigd?",
          shortLabel: "Herlees-notities",
          hint: "Wat heb je geschrapt, vervangen, of toegevoegd? Eén zin per wijziging.",
          placeholder:
            "Geschrapt: ...\nVervangen door eigen voorbeeld: ...\nVakdiepte toegevoegd: ...",
          rows: 4,
        },
      },
    ],

    workedExamples: [
      {
        title: "Leerdoelen genereren",
        prompt:
          "Je bent docent Nederlands op 3 mavo. Schrijf drie versies van een SMART-leerdoel voor een les van 60 minuten over duurzame mode, gericht op tekstbegrip en kritisch lezen. Houd taalniveau B1 en varieer in cognitieve diepte.",
        voorbeeldOutput: `V1 — De leerling kan na de les drie argumenten noemen vóór duurzame mode.
V2 — De leerling kan uitleggen waarom duurzame mode duurder is dan fast fashion, met minstens één economisch en één ecologisch argument.
V3 — De leerling kan een eigen standpunt formuleren over duurzame mode aan de hand van twee bronnen.`,
        commentaar:
          "V1 is herkenbaar maar test alleen reproductie — niet wat je in 3 mavo wilt bij kritisch lezen. V2 vraagt begrip en koppelt aan economie/ecologie: bruikbaar, mits je een vakbron meeneemt. V3 klinkt mooi maar 'eigen standpunt formuleren' is zonder criteria niet meetbaar. Pak V2, voeg toe: 'en koppel dit aan minimaal één duurzaamheidsindicator uit de gelezen tekst'. Meetbaar én vakgericht.",
        tryItYourself: {
          field: "we-leerdoel-prompt",
          label: "Schrijf de leerdoel-prompt voor jouw vak",
          shortLabel: "Eigen leerdoel-prompt",
          hint: "Vervang vak, niveau en onderwerp door je eigen lessituatie",
          example:
            "Je bent docent [vak] op [niveau]. Schrijf drie versies van een SMART-leerdoel...",
        },
      },
      {
        title: "Gedifferentieerd opdrachtblad",
        prompt:
          "Herschrijf de opdracht 'lees de tekst over fast fashion en beantwoord drie vragen' op drie niveaus (basis, gemiddeld, uitdagend). Leerdoel blijft gelijk: kritisch lezen. Steigers per niveau: basis = woordhulp + voorgestructureerde vragen, gemiddeld = open vragen + één voorbeeldzin, uitdagend = bronnenvergelijking + eigen standpunt. Houd taalniveau B1.",
        voorbeeldOutput: `Basis — Lees de tekst. Onderstreep vijf moeilijke woorden; je krijgt een woordhulp. Beantwoord daarna: 1) Wat is fast fashion? 2) Noem twee gevolgen. 3) Welk gevolg vind jij erger en waarom?

Gemiddeld — Lees de tekst. Beantwoord in eigen woorden: a) Waarom is fast fashion populair? b) Wat is een tegenargument? Voorbeeldzin: 'Fast fashion is populair omdat...'

Uitdagend — Lees de tekst plus de bijgevoegde tweede bron. Schrijf in 150 woorden welke bron je sterker vindt, met twee argumenten en één tegenargument.`,
        commentaar:
          "AI levert redelijk verschil per niveau, maar de typische valkuil is dat steigers alléén in lengte zitten. Check: krijgt het basisniveau écht woordhulp (vraag AI om die vijf woorden + uitleg toe te voegen)? Is de voorbeeldzin in gemiddeld een steiger of een gegeven antwoord? Voor uitdagend: voeg toe dat de tweede bron tegengesteld moet zijn, anders krijg je 'kritisch lezen' zonder kritisch lezen.",
        tryItYourself: {
          field: "we-differentiatie-prompt",
          label: "Schrijf de differentiatie-prompt voor jouw opdracht",
          shortLabel: "Eigen differentiatie-prompt",
          hint: "Benoem expliciet de steigers per niveau in je prompt",
          example:
            "Herschrijf [opdracht] op drie niveaus. Steigers per niveau: basis = ..., gemiddeld = ..., uitdagend = ...",
        },
      },
      {
        title: "Quizvragen met afleiders",
        prompt:
          "Maak vijf meerkeuzevragen over duurzame mode voor 3 mavo. Geef per vraag één juiste antwoord en drie afleiders die zijn gebaseerd op typische denkfouten van leerlingen op dit niveau. Leg per afleider in één zin uit waarom hij verleidelijk fout is.",
        voorbeeldOutput: `Waarom is duurzame mode duurder dan fast fashion?
A) Omdat de stof beter is. — Verleidelijk: leerlingen denken aan tastbare kwaliteit en missen arbeids- en milieukosten.
B) Omdat er minder van geproduceerd wordt. — Verleidelijk: lijkt economisch logisch, maar fast fashion produceert juist in lagere kwaliteit/hogere oplage.
C) Omdat eerlijke arbeids- en milieukosten verrekend worden. ✓
D) Omdat het uit Europa komt. — Verleidelijk: koppelt prijs aan herkomst — werkt niet altijd.`,
        commentaar:
          "Sterke afleiders raken een misconceptie, niet een willekeurige fout. Check elke afleider: kennen jouw leerlingen deze denkfout? Zo niet, vervang door iets uit je eigen lespraktijk. AI verzint plausibele fouten, niet de fouten van jouw klas. Gebruik wat je vorig jaar bij nakijken hebt gezien.",
        tryItYourself: {
          field: "we-quiz-prompt",
          label: "Schrijf de quizvraag-prompt voor jouw onderwerp",
          shortLabel: "Eigen quiz-prompt",
          hint: "Vraag expliciet om misconcepties uit jouw klas — niet generieke fouten",
          example:
            "Maak vijf MC-vragen over [onderwerp] voor [niveau]. Afleiders gebaseerd op deze misconcepties van mijn klas: ...",
        },
      },
      {
        title: "Feedback-rubric",
        prompt:
          "Stel een rubric op met drie criteria (inhoud, argumentatie, taalgebruik) voor een schrijfopdracht van 3 mavo over duurzame mode. Gebruik niveaus 1-4 met leerlinggerichte indicatoren. Geef per niveau een voorbeeldzin uit een fictieve leerlingtekst die op dat niveau zit. Max 250 woorden.",
        voorbeeldOutput: `Inhoud · niveau 3 — Je noemt minstens twee feiten en koppelt ze aan duurzaamheid. Voorbeeldzin: 'Fast fashion gebruikt veel water bij het verven, dat is slecht voor het milieu.'

Argumentatie · niveau 3 — Je geeft een argument en een tegenargument, en kiest beargumenteerd een kant. Voorbeeldzin: 'Sommigen vinden fast fashion goedkoop, maar als je de echte kosten meetelt…'

Taalgebruik · niveau 3 — Zinnen zijn helder, je gebruikt vaktaal correct (duurzaamheid, productieketen).`,
        commentaar:
          "De voorbeeldzinnen maken de rubric pas bruikbaar — vraag AI er expliciet om, anders krijg je abstracte beschrijvingen die niemand met dezelfde maat invult. Test je rubric door eigen oude leerlingteksten erin te leggen: kun je consistent dezelfde score geven? Zo niet, herschrijf het niveau waar je twijfelt.",
        tryItYourself: {
          field: "we-rubric-prompt",
          label: "Schrijf de rubric-prompt voor jouw schrijfopdracht",
          shortLabel: "Eigen rubric-prompt",
          hint: "Eis voorbeeldzinnen per niveau, anders blijft de rubric abstract",
          example:
            "Stel een rubric op voor [opdracht] op [niveau]. Geef per niveau één voorbeeldzin uit een fictieve leerlingtekst.",
        },
      },
    ],

    vakvariaties: [
      {
        vak: "Nederlands · vo",
        body: "Voor tekstbegrip en schrijfopdrachten werkt deze workflow direct. Vraag AI om dezelfde tekst op B1, B2 en C1 — kies dan zelf. Voor literaire teksten: AI is goed in herschrijven, zwak in literaire diepte. Thematische analyse hou je zelf.",
      },
      {
        vak: "Wiskunde · vo",
        body: "Voor algebra en meetkunde vraagt AI vaak om voorbeelden vooraf. Geef AI eerst drie eigen voorbeeldsommen, vraag dan om varianten met andere getallen en context. Verifieer elke gegenereerde som — AI maakt geregeld kleine rekenfouten in tussenstappen.",
      },
      {
        vak: "Zorg · mbo niveau 3-4",
        body: "Voor casuïstiek is AI sterk in variatie, zwak in klinische nuance. Toets elke gegenereerde casus aan een geldende richtlijn (NHG, V&VN, beroepsprofiel). AI's medische 'feiten' zijn vaak gemiddelden — risicogroep, leeftijd, comorbiditeit komen niet altijd terug.",
      },
      {
        vak: "ICT · mbo/hbo",
        body: "Voor programmeer-opdrachten kan AI direct werkende code geven. Daarom: ontwerp opdrachten die mondelinge verantwoording verplicht maken. Anders kopiëren studenten je AI-prompt rechtstreeks en leveren een functionele oplossing zonder begrip.",
      },
      {
        vak: "Moderne vreemde talen · vo/hbo",
        body: "Bij vertalingen en grammatica is AI sterk, maar mist culturele context. Voeg altijd toe: 'voor een Nederlandse beginner op niveau X' en 'leg cultureel verschil uit als dat speelt'. Voor spreekvaardigheid: AI voor varianten, niet voor uitspraakvoorbeeld.",
      },
      {
        vak: "Burgerschap / maatschappijleer · vo/mbo",
        body: "AI is sterk in perspectieven schetsen, voorzichtig met actuele politiek (knowledge cutoff). Voor dilemma's: vraag expliciet om twee verdedigbare posities — geen strawman. Toets elk feit dat AI geeft over de huidige Nederlandse situatie.",
      },
    ],

    valkuilen: [
      {
        titel: "Te vroeg vragen, te weinig context",
        watGebeurtEr:
          "'Maak een les over X' levert generieke voorbeelden uit onbekend land of niveau. Je merkt het pas als je halverwege bent en zit dan al vast aan een verkeerde toon.",
        fix: "Begin nooit zonder vak, niveau, lesduur en leerlingenkenmerken. Sla je standaardbriefing op en hergebruik 'm.",
      },
      {
        titel: "Eén keer vragen, dan opnieuw beginnen",
        watGebeurtEr:
          "Je leest het antwoord, vindt het matig, en typt een hele nieuwe prompt. Je verliest het werk dat al goed was.",
        fix: "Verfijn altijd binnen hetzelfde gesprek. 'Maak vraag 2 lastiger', 'vervang voorbeeld door iets uit techniek', 'voeg één hint toe'.",
      },
      {
        titel: "Geloven dat AI jouw vakdiepte heeft",
        watGebeurtEr:
          "AI levert iets plausibels dat feitelijk fout is — een verkeerde formule, misleidend voorbeeld, halve bron. Het klinkt overtuigend.",
        fix: "Stel jezelf bij elk inhoudelijk antwoord de vraag: zou ik dit aan een vakgenoot durven laten zien? Bij twijfel: terug naar bron.",
      },
      {
        titel: "Differentiatie zonder steigers",
        watGebeurtEr:
          "AI geeft drie 'niveaus' die alleen verschillen in lengte. De zwakke leerling krijgt geen woordhulp; de sterke krijgt geen verdieping.",
        fix: "Specificeer per niveau wélke steigers je inzet: woordhulp, structuur, voorbeeld, contextverbreding. Vraag AI ernaar te benoemen in het antwoord.",
      },
      {
        titel: "AVG-lekken in voorbeelden",
        watGebeurtEr:
          "Je plakt een leerlingstuk in om feedback te krijgen, met naam, klas of opmerking erin. Data verlaat je school-tenant.",
        fix: "Anonimiseer voor je deelt. Gebruik je school-account waar mogelijk. Geen persoonlijke ChatGPT met leerlingdata — punt.",
      },
    ],

    geoefendSpoor: {
      eyebrow: "Voor de geoefende docent",
      titel: "Bouw een prompt-template-bibliotheek voor je vakgroep",
      beschrijving:
        "Heb je al maanden ervaring met prompten en zoek je een vervolgstap? De grootste tijdwinst zit nu niet meer bij jou, maar bij je collega's. Verzamel je acht tot tien best-werkende prompts, anonimiseer, structureer per vak/doel/situatie en bespreek met je vaksectie welke jullie gemeenschappelijk hergebruiken. Investering ~90 minuten. Opbrengst: per docent uren per maand — en, niet onbelangrijk, een collegiaal gesprek over wat 'goed' eigenlijk is.",
      opdracht:
        "Lever vóór de eerstvolgende vaksectievergadering een eigen promptkit op met minimaal acht prompts, geordend per type werk (leerdoelen, differentiatie, toetsing, casus, rubric). Deel met je opleidingsmanager.",
    },

    eindcriteria: [
      {
        criterium: "Briefing-volledigheid",
        onder: "Vak en onderwerp genoemd; rest onbekend voor AI.",
        op: "Vak, niveau, leerlingenkenmerken én lesduur expliciet meegegeven.",
        boven: "+ Didactische voorkeur én één expliciete valkuil-instructie ('vermijd metaforen').",
      },
      {
        criterium: "Leerdoelen",
        onder: "Eén AI-leerdoel rechtstreeks overgenomen.",
        op: "Drie versies vergeleken, één gekozen en bijgeschaafd op vakvisie.",
        boven: "+ Gekoppeld aan een kerndoel of beroepscompetentie; meetbaar gemaakt met indicator.",
      },
      {
        criterium: "Differentiatie",
        onder: "Drie 'niveaus' die alleen in lengte verschillen.",
        op: "Drie niveaus met expliciete steigers benoemd (woordhulp, structuur, voorbeeld).",
        boven: "+ Variatie in werkvorm én evaluatiemoment per niveau — niet alleen in opdracht.",
      },
      {
        criterium: "Toetsvragen",
        onder: "AI-vragen letterlijk overgenomen.",
        op: "Afleiders bewerkt richting klas-misconcepties; uitleg per afleider toegevoegd.",
        boven: "+ Verbonden aan eerder lesmateriaal en aan een transferdoel buiten de les.",
      },
      {
        criterium: "Vakdiepte-check",
        onder: "Geen feitencheck uitgevoerd.",
        op: "Hoofdfeiten geverifieerd in ten minste één vakbron.",
        boven: "+ Eén bewuste keuze waarbij je AI's voorstel hebt afgewezen — gemotiveerd.",
      },
    ],

    reflection: [
      "Welke stap in je voorbereiding stopte je het meest tegen om uit handen te geven — en wat zegt dat over wat jij als essentieel voor je vak ziet?",
      "Op welk moment gaf AI iets dat plausibel was maar inhoudelijk niet klopte? Hoe ontdek je dat als je het onderwerp níet zelf goed kent — en wat betekent dat voor je werkwijze?",
      "Welke twee veranderingen ga je vanavond concreet in je voorbereidingsroutine inbouwen, en hoe weet je over twee weken of het ook echt heeft gewerkt?",
    ],

    checklist: [
      "Briefing met vier ingrediënten klaar (vak, niveau, leerlingen, voorkeur)",
      "Drie leerdoelversies vergeleken, één gekozen en bijgeschaafd",
      "Opdrachtblad op drie niveaus mét expliciete steigers per niveau",
      "Quizvragen met afleiders gekoppeld aan klas-misconcepties",
      "Discussiecasus met écht dilemma (twee verdedigbare posities)",
      "Vakdiepte-check: hoofdfeiten geverifieerd in vakbron",
      "AVG-check: geen leerlinggegevens gedeeld",
      "Eén ding bewust níet door AI laten doen",
    ],

    verderLezen: [
      {
        titel: "Werken aan AI-geletterdheid op school",
        bron: "Kennisnet",
        jaar: 2025,
        link: "https://www.kennisnet.nl/artificial-intelligence/werken-aan-ai-geletterdheid-op-school/",
        waarom: "Vier dimensies en vier stappen, direct toepasbaar op je eigen school.",
      },
      {
        titel: "AI-GO! Raamwerk voor AI-geletterdheid",
        bron: "Npuls",
        jaar: 2025,
        link: "https://npuls.nl/kennisbank/ai-go-een-raamwerk-voor-ai-geletterdheid-in-het-onderwijs",
        waarom: "Voor mbo/hbo/wo, wetenschappelijk onderbouwd via umbrella review.",
      },
      {
        titel: "AI Competency Framework for Teachers",
        bron: "UNESCO",
        jaar: 2024,
        link: "https://www.unesco.org/en/articles/ai-competency-framework-teachers",
        waarom: "Internationaal kader met drie progressie-niveaus — handig om je eigen positie te bepalen.",
      },
      {
        titel: "Effective Teacher Professional Development",
        bron: "Darling-Hammond e.a. · Learning Policy Institute",
        jaar: 2017,
        link: "https://learningpolicyinstitute.org/sites/default/files/product-files/Effective_Teacher_Professional_Development_REPORT.pdf",
        waarom: "Zeven kenmerken van werkbare PD — bruikbaar als je collega's wilt overtuigen.",
      },
    ],

    nextLesson: "differentiatie-feedback",
  },

  "wat-is-ai": {
    summary:
      "Voor je AI verantwoord kunt inzetten in je les, helpt het om scherp te krijgen wát het eigenlijk is en wat 'generatief' betekent. Geen techniekverhaal — een werkdefinitie waarmee je morgen voor de klas staat.",
    learningGoals: [
      "Je kunt in twee zinnen uitleggen wat generatieve AI is voor je studenten.",
      "Je kent de drie modellen die je in jouw vak waarschijnlijk tegenkomt.",
      "Je herkent waar 'AI' niet veel meer is dan een marketinglabel.",
    ],
    scenario: {
      title: "Klaslokaalscenario",
      context:
        "Een eerstejaars hbo-student stelt in college de vraag: 'Wat ís ChatGPT eigenlijk?' Je hebt 90 seconden. Hoe leg je het uit zonder te liegen én zonder een college techniek te geven?",
      role: "Docent · hbo, willekeurige opleiding",
      tools: "ChatGPT · Copilot · Gemini",
    },
    steps: [
      {
        title: "Begin bij wat studenten al doen",
        body: "Vraag wat ze gisteren met AI hebben gedaan. Bouw je definitie op vanuit hun praktijk, niet vanuit techniek.",
      },
      {
        title: "Eén werkdefinitie",
        body: "Generatieve AI = systemen die op basis van enorme hoeveelheden tekst nieuwe tekst, code of beelden maken. Geen kennis, wél patronen.",
      },
      {
        title: "Drie soorten zien",
        body: "Chatbots, code-assistenten en beeldgeneratoren. Laat per soort kort één voorbeeld zien.",
      },
      {
        title: "Maak één misverstand expliciet",
        body: "AI weet niets, het voorspelt. Dit kost dertig seconden en voorkomt veel verwarring later in je vak.",
      },
    ],
    examples: [
      {
        title: "Werkdefinitie voor je vak",
        prompt:
          "Schrijf één definitie van generatieve AI in maximaal 35 woorden, geschikt voor een eerstejaars [vak]-student. Vermijd technische termen en metaforen die niet kloppen.",
      },
      {
        title: "Drie voorbeelden in mijn vak",
        prompt:
          "Geef drie concrete voorbeelden van hoe generatieve AI nu al wordt gebruikt in [vakgebied], met per voorbeeld één regel over wat goed werkt en één regel over wat oppassen vraagt.",
      },
    ],
    reflection: [
      "Welk misverstand over AI kom je het meest tegen bij collega's?",
      "Welk woord uit je definitie zou een leerling waarschijnlijk verkeerd lezen?",
    ],
    checklist: [
      "Definitie in eigen vakwoorden geformuleerd",
      "Drie voorbeelden uit mijn vak op een rij",
      "Eén misverstand geadresseerd",
    ],
    nextLesson: "wat-kan-ai",
  },

  "prompting-voor-docenten": {
    summary:
      "Een goede prompt is het verschil tussen onbruikbare AI-tekst en een eerste versie waarop je verder kunt bouwen. Je leert hier de structuur die docenten in vo, mbo en hbo het meest oplevert.",
    learningGoals: [
      "Je herkent vier ingrediënten van een effectieve prompt.",
      "Je herschrijft eigen vage prompts naar gerichte vragen.",
      "Je weet wanneer je beter níet AI inschakelt.",
    ],
    scenario: {
      title: "Klaslokaalscenario",
      context:
        "Je hebt morgen een formatieve toets over de stelling van Pythagoras voor 2 vmbo-tl. Je vraagt AI 'maak een toets', krijgt iets braves terug, en denkt: hier kan ik niets mee.",
      role: "Docent wiskunde · 2 vmbo-tl",
      tools: "ChatGPT",
    },
    steps: [
      {
        title: "Vier ingrediënten",
        body: "Rol — Context — Taak — Vorm. Mis je één van deze, dan dwaalt AI af.",
      },
      {
        title: "Herschrijf je vage prompt",
        body: "Maak van 'maak een toets' iets als: 'Je bent een docent wiskunde 2 vmbo-tl. Maak vijf formatieve vragen over de stelling van Pythagoras die de typische denkfout rond het kwadrateren blootleggen. Geef per vraag uitleg.'",
      },
      {
        title: "Itereer kort en scherp",
        body: "Begin nooit opnieuw, verfijn altijd. Vraag 'maak vraag 3 lastiger' of 'vervang het voorbeeld door iets uit de techniek'.",
      },
    ],
    examples: [
      {
        title: "Het basisrecept",
        prompt:
          "Je bent een ervaren docent [vak] op [niveau]. Schrijf [aantal] [output] over [onderwerp] voor leerlingen die [kenmerk]. Houd taalniveau [B1/B2/C1] en gebruik [Nederlandse/internationale] voorbeelden.",
      },
      {
        title: "Iteratieprompt",
        prompt:
          "Maak vraag 2 toegankelijker voor leerlingen die moeite hebben met algebra, zonder het leerdoel te veranderen. Voeg één hint toe die ik tijdens de les kan geven.",
      },
    ],
    reflection: [
      "Welke vier ingrediënten waren in jouw vorige prompts vaak afwezig?",
      "Welke taak zou je nooit aan AI willen overlaten — en waarom?",
    ],
    checklist: [
      "Vier ingrediënten gebruikt: rol, context, taak, vorm",
      "Iteratie gedaan in plaats van opnieuw beginnen",
      "Kritisch herlezen voor vakdiepte",
    ],
    nextLesson: "lesvoorbereiding",
  },

  "ai-assisted-development": {
    summary:
      "AI-assisted development verandert hoe studenten code schrijven, debuggen en leren. Niet beter of slechter, maar fundamenteel anders. In deze les krijg je grip op de workflows en tooling die jouw studenten al gebruiken.",
    learningGoals: [
      "Je herkent het verschil tussen autocomplete, agents en chat-based coding.",
      "Je werkt zelf één werkflow door in Cursor of vergelijkbaar.",
      "Je weet welke vragen je studenten móét stellen over hun proces.",
    ],
    scenario: {
      title: "Klaslokaalscenario",
      context:
        "Een tweedejaars student informatica laat een werkende webapp zien. Op de vraag 'wat gebeurt er in regel 42?' zegt ze: 'Geen idee, dat heeft Cursor gemaakt.' Dit is geen incident.",
      role: "Docent · mbo niveau 4, software-development",
      tools: "Cursor · GitHub Copilot · Claude",
    },
    steps: [
      {
        title: "Vier werkvormen onderscheiden",
        body: "Autocomplete (regel-voor-regel), chat-assist (gesprek), agentic (taak delegeren), inline-edit. Elke werkvorm vraagt andere didactische begeleiding.",
      },
      {
        title: "Zelf één workflow doorlopen",
        body: "Maak met Cursor een mini-tool van 30 regels. Let scherp op het moment waarop jij gestopt bent met begrijpen.",
      },
      {
        title: "De drie vragen die altijd terugkomen",
        body: "1) Kun jij regel voor regel uitleggen wat dit doet? 2) Wat zou breken als ik dit weghaal? 3) Welke alternatieven heeft AI niet voorgesteld?",
      },
      {
        title: "Begeleiding herontwerpen",
        body: "Bij standups, code-reviews en demo's verschuif je naar proces-vragen en mondelinge verantwoording.",
      },
    ],
    examples: [
      {
        title: "Architectuur-prompt",
        prompt:
          "Ik bouw een [type applicatie] voor [doel]. Stel drie architectuuropties voor met per optie: voordelen, nadelen en in welke situatie ik 'm zou kiezen. Geen code, alleen ontwerp.",
      },
      {
        title: "Begrijpen-prompt",
        prompt:
          "Leg deze code regel-voor-regel uit alsof je het aan een eerstejaars uitlegt. Markeer drie plekken waar een beginner het waarschijnlijk verkeerd zou begrijpen.",
      },
      {
        title: "Refactor-prompt",
        prompt:
          "Refactor deze functie zodat hij beter testbaar is. Leg per wijziging in één zin uit waarom dat de testbaarheid verbetert, en geef één unit-test die zonder de refactor moeilijk zou zijn.",
      },
    ],
    reflection: [
      "Op welk moment stopte jij met begrijpen wat de AI deed?",
      "Hoe kun je verantwoorden dat je studenten écht leren programmeren, ook met AI in de buurt?",
    ],
    checklist: [
      "Eén werkflow zelf doorlopen",
      "Drie verantwoordingsvragen in mijn beoordelingsformulier",
      "Mondelinge verantwoording opgenomen in toetsplan",
    ],
    nextLesson: "vibe-coding",
  },

  "vibe-coding": {
    summary:
      "'Vibe coding' — coderen op gevoel met een agent — is supersnel voor prototypes, maar gevaarlijk als enige werkwijze in het leerproces. Je leert wanneer het waarde toevoegt en wanneer juist niet.",
    learningGoals: [
      "Je kunt 'vibe coding' helder definiëren voor je vak.",
      "Je maakt een didactische beslis-routekaart: wanneer wel, wanneer niet.",
      "Je herontwerpt één opdracht zodat vibe coding óf niet kan, óf juist productief is.",
    ],
    scenario: {
      title: "Klaslokaalscenario",
      context:
        "Bij projectonderwijs leveren drie van vier teams een werkend prototype op dat ze in twee uur 'eruit hebben gepraat'. De vraag is niet of dat mag, maar wat ze nu eigenlijk geleerd hebben.",
      role: "Docent · hbo, ICT-opleiding",
      tools: "Cursor agents · v0 · bolt.new",
    },
    steps: [
      {
        title: "Definitie expliciet maken",
        body: "Vibe coding = werken op intentie zonder regel-voor-regel begrip, vertrouwend op de agent. Niet erg voor een wegwerp-prototype. Wel erg als leerdoel 'algoritmisch denken' is.",
      },
      {
        title: "Bouw een eigen vibe-prototype",
        body: "Doe het zelf eerst. Merk waar jouw conceptuele begrip de doorslag gaf, en waar je het zonder ervaring had gemist.",
      },
      {
        title: "Beslis-routekaart maken",
        body: "Doel = prototype? Vibe mag. Doel = leren wat een loop is? Vibe is dan een didactische valkuil. Doel = ergens tussenin? Combineer, met expliciete reflectie.",
      },
      {
        title: "Eén opdracht herontwerpen",
        body: "Schrijf de opdracht zo dat de student wél uitlegt wat de gegenereerde code doet, of dat er een tussenstap is waarin AI niet helpt.",
      },
    ],
    examples: [
      {
        title: "Prototype-prompt (vibe-stijl)",
        prompt:
          "Bouw een kleine [type app] met [feature 1, feature 2, feature 3]. Houd 't simpel, hardcode wat kan, ik wil over 20 minuten iets klikbaars zien.",
      },
      {
        title: "Begrip-checken na vibe",
        prompt:
          "Leg in maximaal 150 woorden uit hoe de hoofdfunctie van deze app werkt. Geef twee plekken aan waar een ervaren ontwikkelaar het anders zou aanpakken en waarom.",
      },
    ],
    reflection: [
      "Welke leerdoelen verliezen waarde bij vibe coding — en welke juist niet?",
      "Hoe leg je het verschil tussen 'kan iets bouwen' en 'begrijpt wat hij bouwt' uit aan je studenten?",
    ],
    checklist: [
      "Definitie van vibe coding op papier",
      "Beslis-routekaart voor mijn vak gemaakt",
      "Eén opdracht herontworpen",
      "Mondelinge toelichting ingebouwd",
    ],
    nextLesson: "prompten-voor-software",
  },

  /* ──────────────────────────────────────────────────────────────────────── */
  /*  LES 1.2 — Wat kan AI wel en niet? · Casuslab                            */
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

    cases: [
      {
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

    failureMatrix: [
      {
        category: "Hallucinatie van feiten/bronnen",
        howToSpot:
          "Plausibele titel + fictieve auteur · jaartallen die niet bij elkaar passen · 'klinkt goed maar onverifieerbaar'.",
        fix: "Bronnen altijd handmatig nazoeken in een echte database voor je deelt.",
      },
      {
        category: "Bias door trainingsdata",
        howToSpot:
          "Antwoord behandelt twee groepen alsof het hetzelfde is · standaardvoorbeelden komen uit één context.",
        fix: "Vraag expliciet naar verschillen tussen relevante groepen — gender, leeftijd, regio, cultuur.",
      },
      {
        category: "Beperkte actualiteit",
        howToSpot:
          "Verkiezingsuitslagen, prijzen, regelgeving, recente events — vooral kwetsbaar.",
        fix: "Vraag altijd de datum van trainingsdata. Voor actualiteit: tool met zoekfunctie of zelf verifiëren.",
      },
      {
        category: "Oppervlakkige vakdiepte",
        howToSpot:
          "Antwoord klinkt goed maar mist de tweede laag waar een vakdocent op doorvraagt.",
        fix: "Geef AI eerst een mini-college als context, of vraag expliciet om twee onderscheiden filosofische/wetenschappelijke posities.",
      },
    ],

    workedExamples: [
      {
        title: "Voorspel-prompt",
        prompt:
          "Ik ga je zo iets vragen over [onderwerp uit mijn vak]. Voor je antwoord geeft: noem drie soorten fouten die je bij dit soort vragen vaak maakt. Daarna geef je je antwoord en markeer je per onderdeel hoe zeker je bent.",
        voorbeeldOutput:
          "Bij vragen over historische bronnen: 1) ik verzin titels die niet bestaan; 2) ik dateer onnauwkeurig; 3) ik haal auteurs door elkaar. Voor je antwoord controleer ik elke bronvermelding extra.\n[antwoord met zekerheidsmarkering]",
        commentaar:
          "Door AI vooraf te dwingen zijn eigen risico's te benoemen, krijg je een metalaag die je kunt gebruiken om te checken. Effectief — maar werkt alleen als je AI er ook echt op afrekent.",
        tryItYourself: {
          field: "we-1-2-voorspel-prompt",
          label: "Schrijf de voorspel-prompt voor jouw vak",
          shortLabel: "Eigen voorspel-prompt",
          hint: "Welk onderwerp uit je vak ga je testen? Wat zijn voor jou de bekende risico's?",
        },
      },
      {
        title: "Bronnen-check-prompt",
        prompt:
          "Geef alleen bronnen die je kunt verifiëren in een openbare bibliotheek of online database. Voor elke bron: titel, auteur, jaar, en hoe ik kan checken of de bron echt bestaat. Als je twijfelt: zeg dat eerlijk.",
        voorbeeldOutput:
          "Bron 1: Tooze, A. (2006). *The Wages of Destruction*. Penguin. Verifieerbaar via Picarta of WorldCat.\nBron 2: [twijfel] Een artikel van Mommsen uit 1934 dat ik niet zeker kan plaatsen — niet gebruiken zonder eigen verificatie.",
        commentaar:
          "AI is hier eerlijker dan we vaak verwachten — als je expliciet om twijfel vraagt. De truc: 'als je twijfelt: zeg dat eerlijk' werkt veel beter dan 'wees voorzichtig'.",
        tryItYourself: {
          field: "we-1-2-bronnen-prompt",
          label: "Bronnen-check-prompt voor jouw vakgebied",
          shortLabel: "Eigen bronnen-prompt",
          hint: "Welke databases of bronnen kun jij makkelijk verifiëren in jouw vak?",
        },
      },
    ],

    reflection: [
      "Welke van de vier categorieën verraste jou en welke categorie kende je al?",
      "Bij welk soort opdracht in je vak zou je AI bewust niet inzetten, en wat verwacht je dat hierdoor verandert in je werkproces?",
      "Hoe leg je een student het verschil uit tussen 'AI weet niet' en 'AI lijkt te weten'?",
    ],

    eindcriteria: [
      {
        criterium: "Voorspelvermogen",
        onder: "Je voorspellingen kwamen niet overeen met wat AI gaf.",
        op: "Drie van vier voorspellingen kwamen uit.",
        boven: "Alle vier uit + je kunt per casus uitleggen waarom je dit verwachtte.",
      },
      {
        criterium: "Categorisatie",
        onder: "Je benoemt fouten in eigen woorden zonder categorie.",
        op: "Je koppelt iedere fout aan een van vier categorieën.",
        boven: "Je voegt zelf een vijfde categorie toe die specifiek voor jouw vak relevant is.",
      },
      {
        criterium: "Eigen matrix",
        onder: "Matrix overgenomen uit voorbeeld.",
        op: "Matrix ingevuld met eigen voorbeelden uit jouw vak.",
        boven: "+ Per categorie een concrete check-routine die je in je werkproces inbouwt.",
      },
    ],

    checklist: [
      "Vier casussen zelf getest en voorspelling vergeleken met output",
      "Eigen wat-kan-AI matrix ingevuld voor mijn vak",
      "Eén afspraak met mezelf gemaakt over wanneer ik AI niet gebruik",
      "Matrix gedeeld of besproken met één collega",
      "AVG-check: geen herleidbare leerlinggegevens in mijn testprompts gezet",
    ],

    verderLezen: [
      {
        titel: "What is AI Literacy? Competencies and Design Considerations",
        bron: "Long & Magerko · CHI Conference",
        jaar: 2020,
        link: "https://dl.acm.org/doi/fullHtml/10.1145/3313831.3376727",
        waarom: "Vijf vragen om AI-geletterdheid te ontleden — bruikbaar als check voor je matrix.",
      },
      {
        titel: "AI Competency Framework for Teachers",
        bron: "UNESCO",
        jaar: 2024,
        link: "https://www.unesco.org/en/articles/ai-competency-framework-teachers",
        waarom: "Internationale referentie voor wat docenten over AI moeten weten.",
      },
    ],

    nextLesson: "prompting-voor-docenten",
  },

  /* ──────────────────────────────────────────────────────────────────────── */
  /*  LES 1.7 — Privacy, ethiek en verantwoord gebruik · Casusbespreking      */
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

    casusbesprekingTitle: "Drie casussen, drie perspectieven, jouw positie.",
    casusbesprekingIntro:
      "Per casus zie je drie perspectieven en twee collega-uitspraken. Kies een positie. Niet meteen reageren — eerst zorgvuldig formuleren waarom.",

    cases: [
      {
        title: "Casus A — De snelle rapporttekst",
        context:
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
          },
          {
            author: "Collega 2",
            quote:
              "We wachten gewoon op een schoolrichtlijn. Tot die er is, doe ik wat werkt.",
          },
        ],
      },
      {
        title: "Casus B — De toolaankoop zonder DPIA",
        context:
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
              "Geen DPIA uitgevoerd. Geen heldere verwerkersovereenkomst gezien. AI Act art. 4 verplicht ons aantoonbare AI-geletterdheid van personeel.",
          },
        ],
        statements: [
          {
            author: "Schoolleider",
            quote:
              "Andere scholen gebruiken het, dus dan zal het wel goed zitten.",
          },
          {
            author: "ICT-coördinator",
            quote: "Pilot eerst zes weken, dan beoordelen we het echt.",
          },
        ],
      },
      {
        title: "Casus C — De student met de bias-klacht",
        context:
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
          },
          {
            author: "Student zelf, later in mail",
            quote:
              "Wat ik wil weten is wat de school hier nu structureel mee gaat doen.",
          },
        ],
      },
    ],

    legalCallout: {
      source: "EU AI Act · artikel 4 · van kracht sinds 2 februari 2025",
      title: "Wat de wet zegt",
      body: `"Providers and deployers of AI systems shall take measures to ensure, to their best extent, a sufficient level of AI literacy of their staff and other persons dealing with the operation and use of AI systems on their behalf, taking into account their technical knowledge, experience, education and training and the context the AI systems are to be used in."

Jouw school is een deployer zodra zij AI-tools inzet of toestaat. Toezicht door nationale autoriteiten start 2 augustus 2026.`,
      link: "https://artificialintelligenceact.eu/article/4/",
    },

    actionPlan: {
      source: "Kennisnet · vier-stappen voor je eigen school",
      title: "Vier stappen — vul in vóór je het lokaal verlaat",
      steps: [
        {
          title: "Inventariseer welke AI-systemen op jouw school in gebruik zijn",
          body: "Welke tools draaien er — formeel én informeel? Maak een eerste lijst.",
          workspace: {
            field: "actionplan-1-inventaris",
            label: "Drie AI-tools die ik bij collega's heb gezien",
            placeholder: "1. ...\n2. ...\n3. ...",
            rows: 3,
          },
        },
        {
          title: "Breng in kaart wie ermee werkt",
          body: "Wie raakt het? Docenten? Administratie? Leerlingen via opdrachten?",
          workspace: {
            field: "actionplan-2-mensen",
            label: "Wie raakt het in mijn school",
            placeholder: "Docenten: ...\nAdministratie: ...\nLeerlingen: ...",
            rows: 3,
          },
        },
        {
          title: "Bepaal het passende kennisniveau per rol",
          body: "Wat moet een mentor weten dat een vakdocent niet hoeft? Of andersom?",
          workspace: {
            field: "actionplan-3-niveau",
            label: "Per rol: wat moet die persoon weten",
            placeholder: "Mentor: ...\nVakdocent: ...\nOpleidingsmanager: ...",
            rows: 3,
          },
        },
        {
          title: "Ontwikkel rol-specifieke competenties",
          body: "Welk hiaat valt je nu op? En bij wie ga je dat oppakken?",
          workspace: {
            field: "actionplan-4-actie",
            label: "Mijn eerstvolgende actie + met wie",
            placeholder: "Hiaat: ...\nWie: ...\nWanneer: ...",
            rows: 3,
          },
        },
      ],
    },

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

    verderLezen: [
      {
        titel: "EU AI Act, artikel 4 — AI Literacy",
        bron: "Europese Commissie",
        jaar: 2024,
        link: "https://artificialintelligenceact.eu/article/4/",
        waarom: "De wettelijke verplichting in het origineel — kort en helder.",
      },
      {
        titel: "Werken aan AI-geletterdheid op school",
        bron: "Kennisnet",
        jaar: 2025,
        link: "https://www.kennisnet.nl/artificial-intelligence/werken-aan-ai-geletterdheid-op-school/",
        waarom: "De vier-stappen die je hierboven hebt ingevuld, in hun eigen woorden.",
      },
      {
        titel: "Voldoen aan de AI-verordening",
        bron: "Kennisnet",
        jaar: 2025,
        link: "https://www.kennisnet.nl/artificial-intelligence/voldoen-aan-de-ai-verordening/",
        waarom: "Praktische handvatten voor onderwijsorganisaties die deployer zijn.",
      },
    ],

    nextLesson: "praktijkopdracht-1",
  },

  /* ──────────────────────────────────────────────────────────────────────── */
  /*  LES 2.5 — Prompten voor softwareontwikkeling · Promptlab                */
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

    promptlabTitle: "Vier rondes — van vaag idee naar productie-klaar.",

    rounds: [
      {
        intent: "Ronde 1 — Van intentie naar architectuur",
        startPrompt: "Bouw een API voor een boekingssysteem.",
        hint: "AI gokt: REST? GraphQL? Welke entiteiten? Welke auth? Wat is een 'boeking' hier eigenlijk? Resultaat: 200 regels code die misschien niet aansluit op wat de klant nodig heeft. Herschrijf de prompt zodat AI eerst ontwerpvragen stelt vóórdat hij code schrijft. Geen code — alleen ontwerp.",
        improvedPrompt:
          "Ik bouw een boekingssysteem voor een kapsalon met max 3 stylisten. Geen code nog — stel mij eerst vijf ontwerpvragen die je vóór implementatie moet beantwoorden. Daarna: drie architectuuropties met per optie voor- en nadelen en in welk scenario je 'm zou kiezen.",
        learnPoint:
          "Door AI te dwingen vragen te stellen, krijg je een ontwerpdialoog in plaats van een gok. Onderwijspunt: studenten die deze gewoonte aanleren, leveren betere systemen op.",
      },
      {
        intent: "Ronde 2 — Van architectuur naar test-eerst code",
        startPrompt:
          "Maak nu de endpoints voor het boeken en annuleren.",
        hint: "AI levert vier endpoints. Werken in de happy path. Geen tests. Edge cases (dubbele boeking, annulering na deadline) zijn vergeten of stilzwijgend aangenomen. Herschrijf de prompt zodat AI eerst de tests schrijft, dan pas de implementatie. Vraag expliciet naar drie edge cases.",
        improvedPrompt:
          "Schrijf voor de endpoints POST /bookings en DELETE /bookings/:id eerst Jest-tests, inclusief drie edge cases: dubbele boeking op zelfde tijdslot, annulering binnen 24 uur, en niet-bestaande boeking-ID. Daarna pas de implementatie die de tests laat slagen.",
        learnPoint:
          "Test-first promptvolgorde zet AI in een ander modus: het moet specificatie expliciet maken. Onderwijspunt: dit is dezelfde discipline als TDD — alleen nu met AI als pair.",
      },
      {
        intent: "Ronde 3 — Van werkende code naar leesbare code",
        startPrompt: "Refactor deze code.",
        hint: "AI hernoemt variabelen, splitst functies op, en je kunt achteraf moeilijk uitleggen waarom de code 'beter' is. Studenten denken: het ziet er anders uit, dus het is goed. Herschrijf de prompt zodat AI per refactor-stap moet uitleggen welk principe of welke smell het adresseert.",
        improvedPrompt:
          "Refactor deze functie. Per wijziging: noem expliciet welke code smell het adresseert (lange functie, dubbele code, magische getallen, onduidelijke naam, of iets anders). Geef per wijziging één unit-test die zonder de refactor lastig te schrijven was.",
        learnPoint:
          "Een refactor zonder verantwoording is geen leermoment. Onderwijspunt: studenten die per refactor de smell kunnen benoemen, denken in patronen — niet alleen in cosmetica.",
      },
      {
        intent: "Ronde 4 — Van code naar overdrachtsdocument",
        startPrompt: "Schrijf documentatie voor deze code.",
        hint: "AI levert een README met installatie-stappen. De ontwerpkeuzes, alternatieven en bekende beperkingen ontbreken. Iemand die over een half jaar deze codebase oppakt, is verloren. Herschrijf de prompt zodat de documentatie een opvolger helpt — niet alleen een installatie.",
        improvedPrompt:
          "Schrijf een overdrachtsdocument van max 400 woorden voor een ontwikkelaar die over zes maanden deze codebase oppakt. Behandel: (1) drie belangrijke ontwerpkeuzes en waarom, (2) twee alternatieven die we hebben afgewezen, (3) drie bekende beperkingen die nog niet opgelost zijn, (4) één gevaarlijke aanname die toekomstige aanpassingen moet kennen.",
        learnPoint:
          "Documentatie als overdracht maakt het denkproces zichtbaar. Onderwijspunt: dit is je beoordelingsmoment — een student die dit document goed schrijft, heeft de code begrepen. Een student die het niet kan, niet.",
      },
    ],

    reflection: [
      "Welke van de vier rondes voelde voor jou als 'natuurlijk gedrag' en welke voelde geforceerd? Wat zegt dat over je eigen werkmanier?",
      "Hoe ga je een student begeleiden die ronde 4 (overdrachtsdocument) niet kan invullen, ondanks dat zijn code werkt? Beschrijf de gesprekslijn in vier stappen.",
      "Welke ronde zou je als eerste aan je studenten leren en waarom — of zou je een andere volgorde kiezen?",
    ],

    eindcriteria: [
      {
        criterium: "Eigen prompt-iteratie",
        onder: "Eén poging per ronde, daarna model-prompt overgenomen.",
        op: "Per ronde eigen versie geschreven én verschil met model-prompt benoemd.",
        boven: "+ Per ronde één verbetering bedacht die niet in de model-prompt staat.",
      },
      {
        criterium: "Verantwoording",
        onder: "Verbetering benoemd zonder waarom.",
        op: "Per verbetering: welk probleem het oplost.",
        boven: "+ Welk didactisch principe je studenten hiermee leert.",
      },
      {
        criterium: "Eigen promptkit",
        onder: "Vier slots ingevuld met de model-prompts.",
        op: "Vier slots ingevuld met eigen opdracht en eigen aanpassingen.",
        boven: "+ Promptkit getest met één student of collega en aangepast op feedback.",
      },
    ],

    checklist: [
      "Vier rondes zelf doorlopen en eigen pogingen bewaard",
      "Model-prompts vergeleken met eigen poging en verschil benoemd",
      "Eigen promptkit van vier prompts ingevuld voor een eigen opdracht",
      "Eén lesactiviteit gepland waarin studenten ronde 1 of 2 zelf doen",
      "Mondelinge verantwoordingsvragen voor ronde 4 voorbereid",
    ],

    verderLezen: [
      {
        titel: "AI Competency Framework for Teachers — AI pedagogy",
        bron: "UNESCO",
        jaar: 2024,
        link: "https://www.unesco.org/en/articles/ai-competency-framework-teachers",
        waarom: "De competentie 'AI pedagogy' raakt direct aan wat je hier hebt geoefend.",
      },
      {
        titel: "Visie op Toetsing en Examinering. Naar AI-bewuste toetspraktijken",
        bron: "Npuls",
        jaar: 2024,
        link: "https://www.npuls.nl/_assets/cdcb37e6-11f7-468f-962b-06fe599a8a23/Visie-op-toetsing-en-examinering-onderbouwing-Npuls.pdf",
        waarom: "Hoe Nederlands hoger onderwijs nadenkt over toetsen mét AI in de hand.",
      },
      {
        titel: "AI-GO! Raamwerk voor AI-geletterdheid in het onderwijs",
        bron: "Npuls",
        jaar: 2025,
        link: "https://npuls.nl/kennisbank/ai-go-een-raamwerk-voor-ai-geletterdheid-in-het-onderwijs",
        waarom: "Het Nederlandse raamwerk voor AI-geletterdheid in mbo, hbo en wo.",
      },
    ],

    nextLesson: "debuggen-met-ai",
  },
};

// Merge batch-content over base. Batch-entries vervangen base-entries met
// dezelfde slug (batch heeft de uitgebreide/audit-versie).
export const lessonDetails = {
  ...baseLessonDetails,
  ...batchModule1,
  ...batchModule2,
  ...batchModule2Rest,
  ...batchKennischecks,
};

export const defaultLesson = (lesson, module) => ({
  summary: `${lesson.title} is een onderdeel van ${module.title}. Je werkt aan ${lesson.goal.toLowerCase()} Deze les is opgebouwd uit een korte introductie, een werkvorm en een opdracht waar je morgen al iets aan hebt.`,
  learningGoals: [
    lesson.goal,
    `Je past het geleerde direct toe in een eigen lessituatie of casus.`,
    `Je herkent één valkuil en kunt deze bespreken met collega's.`,
  ],
  scenario: {
    title: "Klaslokaalscenario",
    context: `Je bereidt een les voor binnen ${module.audience}. De situatie sluit aan op de praktijk van een doorsnee lesweek — een onderwerp dat tijd kost, een groep die uiteenloopt en de wens om AI op een verantwoorde manier mee te nemen.`,
    role: `Docent — ${module.audience}`,
    tools: "AI-tool naar keuze · school-account",
  },
  steps: [
    { title: "Oriëntatie", body: "Begin met de context die jouw situatie uniek maakt: vak, niveau, leerlingenkenmerken." },
    { title: "Verkenning", body: "Probeer twee prompts uit en vergelijk wat je terugkrijgt. Wat is bruikbaar, wat is generiek?" },
    { title: "Toepassing", body: "Gebruik wat je hebt in een concreet stuk van je les. Hou het klein." },
    { title: "Reflectie", body: "Bespreek met een collega waar je vakdiepte misty hebt en welk deel van je werk je liever zelf doet." },
  ],
  examples: [
    {
      title: "Basisprompt voor deze les",
      prompt: `Je bent een ervaren docent ${module.audience}. Help me met ${lesson.goal.toLowerCase().replace(/\.$/, "")} in een les over [vul onderwerp in]. Maak het concreet, op niveau, en geef een voorbeeld waaruit ik kan kiezen.`,
    },
  ],
  reflection: [
    "Welk deel van het werk wil je juist níet aan AI overlaten?",
    "Welke vakdiepte voegde jij toe die AI miste?",
  ],
  checklist: [
    "Voorbeeld uitgewerkt voor mijn eigen lessituatie",
    "AVG-check gedaan",
    "Reflectie met collega gepland",
  ],
  nextLesson: null,
});
