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
          rubric: [
            {
              name: "Vak en niveau benoemd",
              good: "concreet vak én leerjaar/niveau (bv. '3 mavo'), niet 'de onderbouw'",
            },
            {
              name: "Lesduur expliciet",
              good: "een concrete tijd in minuten staat erin",
            },
            {
              name: "Leerlingkenmerken specifiek",
              good: "echte kenmerken van déze klas (niveauverschil, gedrag), geen cliché",
            },
            {
              name: "Didactische voorkeur",
              good: "een eigen voorkeur over werkvorm of opbouw is benoemd",
            },
            {
              name: "Herbruikbaar als rolinstructie",
              good: "begint met een rol voor de AI en is een sjabloon waarin alleen onderwerp/duur wisselt",
            },
          ],
          referenceAnswer:
            "Je ondersteunt een docent Nederlands op 3 mavo. Lesduur 60 minuten. Klas van 26 met drie leerlingen op 2F-niveau en een groepje dat snel afhaakt bij langere teksten. Mijn voorkeur: starten met een korte werkvorm, niet met theorie; maximaal twee instructiemomenten van vijf minuten. Geef je antwoord zo dat ik alleen onderwerp en lesduur hoef te wisselen voor een volgende les.",
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
          rubric: [
            {
              name: "Drie niveaus aanwezig",
              good: "basis, gemiddeld én uitdagend zijn alle drie uitgewerkt",
            },
            {
              name: "Gelijk leerdoel over niveaus",
              good: "alle drie de varianten werken naar hetzelfde leerdoel toe",
            },
            {
              name: "Steiger per niveau benoemd",
              good: "elk niveau noemt expliciet zijn eigen steiger (woordhulp, voorbeeld, contextverbreding)",
            },
            {
              name: "Verschil zit in denkstap",
              good: "niveaus verschillen in cognitieve complexiteit, niet alleen in tekstlengte",
            },
            {
              name: "Lesklaar en concreet",
              good: "je zou het morgen zo kunnen uitdelen, geen abstracte beschrijving",
            },
          ],
          referenceAnswer:
            "Leerdoel (alle niveaus): de leerling onderbouwt een standpunt over duurzame mode met minstens twee argumenten. Basis: leerling ordent vier aangeleverde argumenten in voor/tegen met een woordhulp en zinstarters (steiger: structuur + woordhulp). Gemiddeld: leerling schrijft twee eigen argumenten na één uitgewerkt voorbeeld, einde open (steiger: model + open transfer). Uitdagend: leerling vergelijkt twee bronnen die elkaar tegenspreken en kiest beargumenteerd een standpunt (steiger: contextverbreding). Het verschil zit in de denkstap — ordenen versus produceren versus afwegen — niet in het aantal woorden.",
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


/* ─── Module 03 · AI-geletterdheid onderwijzen ─────────────────────────────────────────── */
const module3Details = {
"kerndoelen-leerlijn": {
    "format": "diepteles",
    "summary": "Vanaf augustus 2027 zijn de kerndoelen digitale geletterdheid — inclusief AI — wettelijk verplicht in het vo; het mbo werkt met DigComp-gebaseerde keuzedelen en het hbo met instellingskaders. De vraag is niet óf jouw leerlingen AI-geletterd moeten worden, maar wat dat concreet betekent voor jouw groep, jouw vak, dit schooljaar. In deze les vertaal je de SLO-kerndoelen en het AI-GO-raamwerk naar een leerlijn van drie haalbare stappen voor je eigen klas — geen beleidsdocument, een werkdocument dat je volgende periode al gebruikt.",
    "duration": {
      "total": "50 minuten",
      "blocks": [
        {
          "label": "Aanleiding",
          "min": 6
        },
        {
          "label": "Conceptueel kader",
          "min": 10
        },
        {
          "label": "Kerndoelen selecteren",
          "min": 8
        },
        {
          "label": "AI-GO-dimensies mappen",
          "min": 8
        },
        {
          "label": "Beginsituatie peilen",
          "min": 6
        },
        {
          "label": "Leerlijn van drie stappen schetsen",
          "min": 8
        },
        {
          "label": "Sectie-afstemming",
          "min": 4
        }
      ]
    },
    "opening": {
      "eyebrow": "Aanleiding",
      "aanleiding": "Een teamleider op een vo-school stuurt in september een mail: 'Vanaf augustus 2027 gelden de nieuwe kerndoelen digitale geletterdheid. Wie pakt AI op?' Stilte in de teamvergadering. De informaticadocent wijst naar de mentoren ('het is een burgerschapsthema'), de mentoren wijzen naar informatica ('het is techniek'), en de talendocent denkt: mijn leerlingen gebruiken het elke dag voor hun schrijfopdrachten — maar is het dan mijn taak?\n\nDit patroon zie je overal: AI-geletterdheid is van iedereen en daardoor van niemand. Het gevolg is dat leerlingen hun AI-vaardigheden opbouwen via TikTok-tutorials en trial-and-error, zonder dat iemand structureel toetst wat ze begrijpen en wat niet. Terwijl de bouwstenen er allang liggen: SLO heeft conceptkerndoelen digitale geletterdheid waarin AI expliciet is opgenomen, Npuls publiceerde met AI-GO een raamwerk met vier dimensies, en UNESCO biedt met het AI Competency Framework internationale ijkpunten.\n\nDeze les is de vertaalslag. Niet 'wat zegt het raamwerk' maar 'wat betekent dat voor mijn 3 havo, mijn niveau 4-klas of mijn propedeusegroep — in drie stappen die ik dit jaar haal'. Aan het einde heb je een leerlijn op één A4 die je aan je sectie kunt voorleggen.",
      "waaromNu": "De wettelijke kerndoelen digitale geletterdheid gelden per augustus 2027 in het vo — scholen die nu beginnen, hebben twee schooljaren om een leerlijn op te bouwen en bij te stellen. Voor mbo en hbo geldt de EU AI Act (art. 4, AI-geletterdheidsplicht, van kracht sinds 2 februari 2025) als externe drijver. Wie wacht tot het moet, bouwt onder druk; wie nu begint, bouwt op ervaring."
    },
    "conceptueel": {
      "eyebrow": "Conceptueel kader",
      "intro": "Drie bouwstenen bepalen wat 'AI-geletterdheid onderwijzen' inhoudt, en ze opereren op verschillende hoogtes. De SLO-kerndoelen digitale geletterdheid (definitieve invoering augustus 2027) zijn de wettelijke laag voor het vo: ze beschrijven wat leerlingen aan het einde van de onderbouw moeten kennen en kunnen, verdeeld over domeinen als praktische kennis en vaardigheden, digitale informatie, en digitale media — met AI als terugkerend element. Kerndoelen zijn bewust globaal geformuleerd: ze zeggen wát, niet hóe en niet wanneer. Die vertaalruimte is geen gebrek, het is jouw professionele speelveld.\n\nDe tweede bouwsteen is het AI-GO-raamwerk (Npuls, 2025), ontwikkeld voor mbo, hbo en wo maar bruikbaar in elk niveau. AI-GO onderscheidt vier dimensies: kennis (hoe werkt het, wat kan het niet), vaardigheden (effectief en doelgericht gebruiken), attitudes (kritisch, nieuwsgierig, niet naïef) en ethisch bewustzijn (privacy, bias, eerlijkheid). De kracht van die vierdeling: hij voorkomt dat je leerlijn alleen over 'knoppenkennis' gaat. Een leerling die perfect kan prompten maar elke output gelooft, scoort hoog op vaardigheid en faalt op attitude — en is daarmee niet AI-geletterd.\n\nDe derde bouwsteen is het UNESCO AI Competency Framework for Teachers (2024), dat niet over leerlingen gaat maar over jou: het beschrijft in drie niveaus (Acquire, Deepen, Create) wat een docent moet beheersen om AI-geletterdheid te kunnen onderwijzen. Deze module werkt op Deepen-niveau: je past toe, vertaalt naar context en ontwerpt eigen materiaal.\n\nDe werkregel voor deze les: een leerlijn is pas een leerlijn als hij drie eigenschappen heeft. Hij is gekoppeld (elk onderdeel wijst aantoonbaar naar een kerndoel of AI-GO-dimensie), hij is gefaseerd (wat komt eerst, wat bouwt daarop voort) en hij is belegd (per stap is duidelijk in welk vak of moment het gebeurt en wie het doet). Een lijst losse leuke AI-lessen is geen leerlijn — dat is een grabbelton.",
      "mentalModel": {
        "naam": "Kerndoel als bestemming, leerlijn als route",
        "beschrijving": "Een kerndoel is een bestemming op de kaart: 'de leerling kan AI-toepassingen kritisch gebruiken'. Het zegt niets over de route. De leerlijn is jouw route: welke tussenstops (lessen, opdrachten, toetsmomenten), in welke volgorde, met welk vervoermiddel (vak, mentoruur, project). Twee scholen met hetzelfde kerndoel kunnen totaal verschillende routes rijden — en allebei aankomen. Wat niet kan: in de bus stappen zonder bestemming. Dan rijd je leuke lessen rond zonder ooit aan te komen."
      },
      "kernbegrippen": [
        {
          "term": "Kerndoelen digitale geletterdheid",
          "uitleg": "Wettelijke doelen (SLO, invoering augustus 2027) voor het vo die beschrijven wat leerlingen moeten kennen en kunnen rond digitale technologie, inclusief AI. Globaal geformuleerd — de school bepaalt de uitwerking."
        },
        {
          "term": "AI-GO-raamwerk",
          "uitleg": "Npuls-raamwerk (2025) met vier dimensies van AI-geletterdheid: kennis, vaardigheden, attitudes en ethisch bewustzijn. Voorkomt dat een leerlijn alleen over tooltjes gaat."
        },
        {
          "term": "Leerlijn",
          "uitleg": "Gefaseerde opbouw van doelen, activiteiten en toetsmomenten over een langere periode. Drie eisen: gekoppeld aan doelen, gefaseerd in opbouw, belegd bij vakken en personen."
        },
        {
          "term": "Beginsituatie",
          "uitleg": "Wat je leerlingen nú al doen, weten en geloven over AI — vaak meer gebruik en minder begrip dan je verwacht. Zonder peiling van de beginsituatie ontwerp je voor een fictieve klas."
        }
      ]
    },
    "learningGoals": [
      "Je benoemt welke SLO-kerndoelen digitale geletterdheid (of welk mbo/hbo-kader) voor jouw groep relevant zijn en selecteert er maximaal drie als startpunt.",
      "Je mapt je geselecteerde doelen op de vier AI-GO-dimensies en ziet waar je leerlijn eenzijdig dreigt te worden.",
      "Je peilt de beginsituatie van je eigen groep met een werkvorm van maximaal tien minuten lestijd.",
      "Je schetst een leerlijn van drie stappen (per stap: doel, activiteit, bewijs) die binnen dit schooljaar uitvoerbaar is in jouw eigen lessen."
    ],
    "scenario": {
      "title": "Werksituatie",
      "context": "Je bent docent (vo onderbouw/bovenbouw, mbo of hbo) en je team heeft afgesproken dat AI-geletterdheid 'iets van iedereen' wordt. Mooi principe, maar niemand heeft het concreet gemaakt. Jij wilt voor jouw eigen groep — één klas waarvoor jij verantwoordelijk bent — een leerlijn van drie stappen op papier hebben die je in de eerstvolgende sectievergadering kunt laten zien als werkend voorbeeld.",
      "role": "Docent · vo, mbo of hbo — elk vak",
      "tools": "SLO-conceptkerndoelen digitale geletterdheid (of jouw mbo/hbo-kader) · AI-GO-raamwerk (Npuls) · één A4 of digitaal werkblad"
    },
    "steps": [
      {
        "title": "Kerndoelen selecteren — maximaal drie",
        "body": "Open de SLO-kerndoelen digitale geletterdheid (vo) of jouw eigen kader (mbo: keuzedeel digitale vaardigheden; hbo: instellingskader of DigComp). Selecteer maximaal drie doelen die raken aan AI én aan jouw vak. Schrijf per doel in één zin wat het voor jouw vak betekent. De verleiding is alles te willen dekken — weersta die. Drie doelen die je echt uitwerkt zijn meer waard dan tien die je benoemt.",
        "time": "8 min",
        "voorbeeld": "Docent Nederlands, 3 havo. Doel 1: leerlingen herkennen dat digitale systemen (waaronder AI) informatie genereren die niet neutraal is — betekent voor mijn vak: AI-gegenereerde teksten vergelijken op toon en perspectief. Doel 2: leerlingen gebruiken digitale technologie passend bij een doel — betekent: weten wanneer AI helpt bij schrijven en wanneer het je stem wegneemt. Doel 3: leerlingen reflecteren op hun eigen techniekgebruik — betekent: schrijflogboek met AI-verantwoording.",
        "workspace": {
          "field": "kerndoelen-selectie",
          "label": "Mijn drie kerndoelen + vakvertaling",
          "shortLabel": "Kerndoelen",
          "hint": "Max drie doelen · per doel één zin wat het in jouw vak betekent",
          "placeholder": "Doel 1: ... — in mijn vak betekent dit: ...\nDoel 2: ... — in mijn vak betekent dit: ...\nDoel 3: ... — in mijn vak betekent dit: ...",
          "rows": 6
        }
      },
      {
        "title": "AI-GO-dimensies mappen — waar zit je gat?",
        "body": "Leg je drie doelen naast de vier AI-GO-dimensies: kennis, vaardigheden, attitudes, ethisch bewustzijn. Kruis aan welke dimensie elk doel vooral raakt. Bijna iedereen ontdekt hier hetzelfde patroon: kennis en vaardigheden zijn gedekt, attitudes en ethisch bewustzijn niet. Benoem expliciet welke dimensie in jouw selectie onderbelicht blijft en wat je daaraan doet — een doel aanpassen, of bewust accepteren en noteren voor de sectie.",
        "time": "8 min",
        "voorbeeld": "Mapping: doel 1 = kennis + ethisch bewustzijn, doel 2 = vaardigheden, doel 3 = attitudes. Gat: ethisch bewustzijn hangt aan slechts één doel. Keuze: ik voeg aan doel 2 een ethische randvraag toe ('wiens werk train je mee als je AI gebruikt?') in plaats van een vierde doel te nemen.",
        "workspace": {
          "field": "kerndoelen-aigomap",
          "label": "Mapping op de vier AI-GO-dimensies",
          "shortLabel": "AI-GO-map",
          "hint": "Per doel: welke dimensie(s) · welke dimensie blijft onderbelicht · wat doe je daarmee",
          "placeholder": "Doel 1 → dimensie(s): ...\nDoel 2 → dimensie(s): ...\nDoel 3 → dimensie(s): ...\nOnderbelicht: ... — mijn keuze: ...",
          "rows": 6
        }
      },
      {
        "title": "Beginsituatie peilen — ontwerp een tien-minuten-peiling",
        "body": "Ontwerp een werkvorm van maximaal tien minuten lestijd waarmee je peilt wat je groep nú doet en denkt rond AI. Geen enquête van dertig vragen — drie gerichte vragen volstaan: wat gebruik je (anoniem, briefjes of digitale poll), waarvoor gebruikte je het de laatste keer, en één misconceptie-detector ('AI zoekt het antwoord op internet op — waar of niet waar?'). Plan ook wanneer je de peiling afneemt.",
        "time": "6 min",
        "voorbeeld": "Mbo niveau 4, klas van 24. Werkvorm: binnenkomst-poll via Mentimeter (anoniem). Vraag 1: welke AI-tools gebruikte je afgelopen week (meerkeuze + 'geen'). Vraag 2: waarvoor het laatst (open, één zin). Vraag 3: stelling 'ChatGPT weet dingen zoals een encyclopedie' — eens/oneens. Afname: dinsdag eerste lesblok, resultaten meteen op het bord als gespreksopening.",
        "workspace": {
          "field": "kerndoelen-beginsituatie",
          "label": "Mijn tien-minuten-peiling",
          "shortLabel": "Beginsituatie",
          "hint": "Drie vragen · werkvorm · afnamemoment — anoniem waar het over eigen gebruik gaat",
          "placeholder": "Vraag 1 (gebruik): ...\nVraag 2 (laatste keer): ...\nVraag 3 (misconceptie-detector): ...\nWerkvorm + moment: ...",
          "rows": 6
        }
      },
      {
        "title": "Leerlijn van drie stappen schetsen",
        "body": "Schets nu de leerlijn: drie stappen, chronologisch, binnen dit schooljaar. Per stap noteer je drie dingen — doel (uit je selectie), activiteit (welke les of opdracht, hoeveel lestijd) en bewijs (waaraan zie je dat het gelukt is). Houd het klein: stap 1 mag een half lesuur zijn. De opbouw volgt een vaste logica: eerst begrijpen (wat is AI, wat kan het niet), dan kritisch gebruiken (controleren, wegen), dan verantwoord toepassen (eigen werk, eigen keuzes).",
        "time": "8 min",
        "voorbeeld": "Stap 1 (november, 1 lesuur): peiling + klassengesprek 'wat denkt AI eigenlijk?' — bewijs: elke leerling formuleert één ding dat AI niet kan. Stap 2 (januari, 2 lesuren): verificatie-opdracht — AI-antwoord over lesstof controleren met twee bronnen — bewijs: ingevuld controleblad. Stap 3 (maart, ingebed in bestaande opdracht): werkstuk met AI-verantwoordingsparagraaf — bewijs: paragraaf waarin de leerling benoemt wat AI deed en wat zijzelf.",
        "workspace": {
          "field": "kerndoelen-leerlijn-schets",
          "label": "Mijn leerlijn in drie stappen",
          "shortLabel": "Leerlijn",
          "hint": "Per stap: doel · activiteit + lestijd · bewijs — chronologisch en haalbaar dit schooljaar",
          "placeholder": "Stap 1 (maand, lestijd): doel ... · activiteit ... · bewijs ...\nStap 2 (maand, lestijd): doel ... · activiteit ... · bewijs ...\nStap 3 (maand, lestijd): doel ... · activiteit ... · bewijs ...",
          "rows": 8
        }
      },
      {
        "title": "Sectie-afstemming — één vraag, één aanbod",
        "body": "Een leerlijn van één docent is een begin, geen leerlijn. Formuleer voor je eerstvolgende sectie- of teamvergadering één vraag (wat heb jij van collega's nodig — bijvoorbeeld: wie pakt de kennisbasis op zodat ik kan voortbouwen?) en één aanbod (wat kunnen collega's van jou overnemen — bijvoorbeeld: mijn peiling-werkvorm staat klaar voor elk vak).",
        "time": "4 min",
        "workspace": {
          "field": "kerndoelen-sectie",
          "label": "Mijn vraag en aanbod voor de sectie",
          "shortLabel": "Sectie",
          "hint": "Eén concrete vraag · één concreet aanbod · welke vergadering",
          "placeholder": "Vraag aan collega's: ...\nAanbod aan collega's: ...\nVergadering van: ...",
          "rows": 3
        }
      }
    ],
    "workedExamples": [
      {
        "title": "Kerndoel vertalen naar vakcontext (met AI als sparringpartner)",
        "prompt": "Ik ben docent biologie, 2 vwo. Het kerndoel luidt (samengevat): 'de leerling kan kritisch omgaan met door digitale technologie gegenereerde informatie.' Geef mij vijf concrete vertalingen van dit doel naar mijn vak — elk in één zin, elk toetsbaar, elk uitvoerbaar binnen één lesuur. Geen algemene mediawijsheid; het moet over biologie-inhoud gaan.",
        "voorbeeldOutput": "1. De leerling controleert een AI-gegenereerde uitleg over fotosynthese aan de hand van het eigen leerboek en markeert minstens één onnauwkeurigheid of versimpeling.\n2. De leerling vergelijkt twee AI-antwoorden op dezelfde vraag over erfelijkheid en benoemt welk antwoord beter onderbouwd is en waarom.\n3. De leerling laat AI een voedselweb genereren voor een Nederlands ecosysteem en toetst drie relaties aan een betrouwbare bron.\n4. De leerling herkent in een AI-tekst over vaccinaties welke claims controleerbaar zijn en welke meningen of aannames.\n5. De leerling formuleert bij een AI-gegenereerd biologie-antwoord twee controlevragen die je aan een expert zou stellen.",
        "commentaar": "Sterk aan deze vertaling: elk doel is toetsbaar geformuleerd ('markeert minstens één', 'toetst drie relaties') en blijft binnen de vakinhoud — het kerndoel wordt biologie-onderwijs, geen los AI-lesje. Let op: vertaling 4 schuurt tegen een gevoelig onderwerp (vaccinaties); didactisch waardevol maar kies bewust of jouw klas daar klaar voor is. Vraag bij AI-vertalingen altijd door: 'welke van deze vijf vergt voorkennis die mijn leerlingen in periode 2 nog niet hebben?'",
        "tryItYourself": {
          "field": "kerndoelen-we-vertaling",
          "label": "Vertaal één kerndoel naar jouw vak",
          "shortLabel": "Eigen vertaling",
          "hint": "Vijf vertalingen vragen · toetsbaar · binnen één lesuur · vakinhoudelijk",
          "example": "Ik ben docent [vak], [niveau]. Het kerndoel luidt: ... Geef vijf concrete vertalingen — elk één zin, toetsbaar, uitvoerbaar in één lesuur, over mijn vakinhoud."
        }
      },
      {
        "title": "Leerlijn-check langs de vier AI-GO-dimensies",
        "prompt": "Hier is mijn concept-leerlijn AI-geletterdheid voor 3 havo (drie stappen): [stap 1: klassengesprek wat AI niet kan; stap 2: verificatie-opdracht; stap 3: werkstuk met AI-verantwoording]. Toets deze leerlijn aan de vier AI-GO-dimensies (kennis, vaardigheden, attitudes, ethisch bewustzijn). Per dimensie: gedekt of niet, en zo niet — één kleine aanpassing die het repareert zonder extra lesuren.",
        "voorbeeldOutput": "Kennis: deels gedekt. Stap 1 raakt grenzen van AI, maar de basiswerking (voorspellen, niet opzoeken) komt nergens expliciet terug. Aanpassing: open stap 1 met de vraag 'hoe komt AI aan zijn antwoord?' en laat drie hypothesen op het bord staan.\n\nVaardigheden: gedekt in stap 2 (verifiëren) en stap 3 (verantwoord gebruiken).\n\nAttitudes: impliciet aanwezig maar nergens zichtbaar gemaakt. Aanpassing: voeg aan stap 2 een afsluitende vraag toe — 'ben je AI meer of minder gaan vertrouwen, en waarom?' — twee minuten, maakt attitude-ontwikkeling bespreekbaar.\n\nEthisch bewustzijn: niet gedekt. Aanpassing: in stap 3 één verplichte zin in de verantwoording — 'één nadeel van mijn AI-gebruik voor anderen of voor mezelf is...'. Geen extra lesuur, wel een denkstap.",
        "commentaar": "Dit is precies waar een raamwerk voor dient: niet als afvinklijst maar als gatendetector. De voorgestelde reparaties zijn klein (een openingsvraag, een afsluitvraag, één verplichte zin) — dat is realistisch. Valkuil bij deze check: AI zegt al snel dat alles 'deels gedekt' is. Vraag door naar het bewijs: 'op welk moment in welke stap zou een observant de dimensie zíen?'",
        "tryItYourself": {
          "field": "kerndoelen-we-check",
          "label": "Check jouw leerlijn langs AI-GO",
          "shortLabel": "Eigen check",
          "hint": "Plak je drie stappen in · vraag per dimensie: gedekt of niet + kleine reparatie",
          "example": "Hier is mijn concept-leerlijn voor [groep]: [drie stappen]. Toets aan de vier AI-GO-dimensies. Per dimensie: gedekt of niet, en zo niet één kleine aanpassing zonder extra lesuren."
        }
      },
      {
        "title": "Beginsituatie-peiling laten aanscherpen",
        "prompt": "Ik wil in tien minuten peilen wat mijn mbo niveau 2-studenten (entree richting logistiek, taalniveau 2F) doen en denken rond AI. Hier zijn mijn drie conceptvragen: [1. Welke AI gebruik je? 2. Waarvoor? 3. Klopt het dat AI alles weet?]. Herschrijf ze op taalniveau 2F, maak vraag 3 een betere misconceptie-detector, en stel één werkvorm voor waarbij niemand zich hoeft te schamen voor zijn antwoord.",
        "voorbeeldOutput": "Vraag 1 (herschreven): 'Welke van deze apps heb je deze week gebruikt?' — met logo's/namen: ChatGPT, Snapchat My AI, Google Gemini, TikTok-zoeken, geen van deze. Aankruisen, anoniem.\n\nVraag 2: 'Wat was het laatste waar je AI voor gebruikte? Eén woord of één zin is genoeg.' \n\nVraag 3 (betere detector): stelling met twee smaken — 'Als ChatGPT iets zegt, is het opgezocht op internet: klopt / klopt niet / weet ik niet.' De optie 'weet ik niet' is essentieel: hij maakt eerlijk twijfelen mogelijk en levert jou de echte verdeling.\n\nWerkvorm: papieren briefjes in een doos bij binnenkomst, jij turft op het bord terwijl zij aan de starttaak werken. Geen handen opsteken, geen namen — bij deze doelgroep is gezichtsverlies de grootste antwoordvervuiler.",
        "commentaar": "De aanpassing van vraag 3 is het leerpunt: een ja/nee-stelling zonder 'weet ik niet' dwingt gokken af en vervuilt je peiling. De werkvormkeuze (briefjes, geen handen) past bij de doelgroep — bij een hbo-groep kan een live poll juist wél, daar is de drempel anders. Neem de turfresultaten serieus als lesmateriaal: 'veertien van jullie denken dat AI het opzoekt — laten we dat eens testen' is een sterkere lesopening dan elke presentatie.",
        "tryItYourself": {
          "field": "kerndoelen-we-peiling",
          "label": "Scherp jouw peiling aan",
          "shortLabel": "Eigen peiling",
          "hint": "Geef doelgroep + taalniveau mee · vraag om misconceptie-detector + schaamtevrije werkvorm",
          "example": "Ik wil in tien minuten peilen wat mijn [groep, niveau, taalniveau] doet en denkt rond AI. Mijn conceptvragen: [...]. Herschrijf op niveau, verbeter de misconceptie-detector en stel een werkvorm voor zonder gezichtsverlies."
        }
      }
    ],
    "vakvariaties": [
      {
        "vak": "Talen · vo en mbo",
        "body": "AI raakt het hart van je vak: schrijven en formuleren. Koppel je leerlijn aan schrijfvaardigheid — stap 1 over wat AI met taal doet (voorspellen, geen bedoelen), stap 2 over AI-teksten herkennen en verbeteren, stap 3 over eigen stem versus AI-stem. Het kerndoel 'passend technologiegebruik' krijgt hier zijn scherpste invulling."
      },
      {
        "vak": "Exacte vakken · vo bovenbouw",
        "body": "AI maakt overtuigende rekenfouten — dat is didactisch goud. Bouw je leerlijn rond verificatie: AI-uitwerkingen controleren, redeneerfouten lokaliseren, eenheden checken. De kennis-dimensie (waarom maakt een taalmodel rekenfouten?) verbindt informatica-inzicht met je vakinhoud."
      },
      {
        "vak": "Zaakvakken (geschiedenis, aardrijkskunde, maatschappijleer)",
        "body": "Bronkritiek is al jouw vak — AI is er een nieuwe bron bij, met eigen eigenaardigheden (geen vindplaats, wel een toon van zekerheid). Je leerlijn kan vrijwel volledig in bestaande lessen landen: elke bronopdracht krijgt een AI-variant. De attitude- en ethiek-dimensies (wiens perspectief ontbreekt in AI-output?) liggen hier voor het oprapen."
      },
      {
        "vak": "Beroepsgerichte vakken · mbo",
        "body": "Vertrek vanuit de beroepspraktijk, niet vanuit het raamwerk: welke AI komt jouw student in de eerste stageweek tegen? Bouw de leerlijn rond die toepassingen (planning, klantcommunicatie, technische ondersteuning). Het kwalificatiedossier en keuzedeel digitale vaardigheden bieden de formele kapstok; AI-GO levert de vier dimensies als check."
      },
      {
        "vak": "Hbo · propedeuse, elk domein",
        "body": "Studenten komen binnen met sterk uiteenlopende AI-routine. Peil eerst (stap 0), differentieer daarna: een basisspoor (werking en grenzen) en een verdiepingsspoor (vakspecifieke verificatie). Koppel aan de studiehandleiding en aan het instellingsbeleid rond AI in toetsing — je leerlijn moet daarmee sporen, niet ermee botsen."
      },
      {
        "vak": "Mentoraat en burgerschap",
        "body": "Het mentoruur is de plek voor de attitude- en ethiekdimensies die in vaklessen sneuvelen: AI-vriendschapsapps, deepfakes in de klas-appgroep, AI en stress rond schoolwerk. Claim niet de hele leerlijn — wees de plek waar de overstijgende gesprekken landen en spreek met vakdocenten af wie wat doet."
      }
    ],
    "valkuilen": [
      {
        "titel": "De leerlijn begint bij de tool in plaats van bij het doel",
        "watGebeurtEr": "Het team plant 'een les over ChatGPT' en 'iets met beeldgeneratie'. Leuke lessen, maar als de tool verandert (en hij verandert), is de leerlijn waardeloos — en niemand kan uitleggen welk kerndoel ermee gediend was.",
        "fix": "Begin elke stap met het doel uit je selectie en kies de tool als laatste. Test: kun je elke stap uitleggen zonder een toolnaam te noemen? Dan is hij toekomstvast."
      },
      {
        "titel": "Alles willen dekken in jaar één",
        "watGebeurtEr": "De werkgroep maakt een prachtige matrix met twaalf kerndoelen, vier dimensies en zes leerjaren. Het document is af, indrukwekkend — en niemand voert het uit, want elke docent ziet alleen een berg.",
        "fix": "Drie doelen, drie stappen, één schooljaar, jouw eigen klas. Pas als dat draait, opschalen. Een kleine leerlijn die bestaat verslaat een complete die op de plank ligt."
      },
      {
        "titel": "Beginsituatie aannemen in plaats van peilen",
        "watGebeurtEr": "Je ontwerpt voor 'leerlingen die alles al met AI doen' — en ontdekt halverwege dat een derde van de klas het nooit gebruikt (geen account, geen interesse, of ouders die het verbieden). Je leerlijn vergroot precies de kloof die hij moest dichten.",
        "fix": "Altijd eerst de tien-minuten-peiling, anoniem. Ontwerp voor de werkelijke spreiding: een instap voor niet-gebruikers en verdieping voor dagelijkse gebruikers."
      },
      {
        "titel": "AI-geletterdheid als apart vak behandelen",
        "watGebeurtEr": "Er komt een projectweek 'AI' of een losse cursus naast het rooster. Leerlingen doen mee, vinken af, en niets landt in de vakken — transfer naar echte schooltaken blijft uit.",
        "fix": "Bed minimaal twee van je drie stappen in bestaande vakopdrachten in. AI-geletterdheid beklijft waar hij aan echte inhoud hangt — een werkstuk, een practicum, een stageopdracht."
      },
      {
        "titel": "Wachten op het definitieve beleid",
        "watGebeurtEr": "'Eerst moet de school een visie hebben.' De visie komt er over een jaar, de werkgroep daarna. Intussen leren je leerlingen AI gebruiken van influencers, twee jaar lang.",
        "fix": "Jouw klas heeft geen schoolvisie nodig om te beginnen — drie stappen in je eigen lessen mag altijd. Documenteer wat je doet; jouw ervaring wordt straks de input voor het beleid in plaats van andersom."
      }
    ],
    "geoefendSpoor": {
      "eyebrow": "Voor de geoefende docent",
      "titel": "Bouw de doorlopende leerlijn voor je hele afdeling",
      "beschrijving": "Draait jouw drie-stappen-leerlijn al? Trek hem dan door: maak met twee of drie collega's een doorlopende lijn over leerjaren of opleidingsfasen heen. Leerjaar 1 bouwt kennis en eerste vaardigheden, leerjaar 2 verdiept verificatie en attitudes, leerjaar 3 vraagt zelfstandige, verantwoorde toepassing. Gebruik de vier AI-GO-dimensies als rijen en de leerjaren als kolommen — elke cel één concreet, belegd lesmoment. Investering: twee werksessies van anderhalf uur. Opbrengst: een afdelingslijn die de kerndoelen aantoonbaar dekt vóór de deadline van augustus 2027.",
      "opdracht": "Lever vóór het einde van dit schooljaar een afdelingsmatrix op (dimensies × leerjaren) met per cel doel, activiteit, vak en eigenaar — en presenteer hem in tien minuten aan de teamleider."
    },
    "eindcriteria": [
      {
        "criterium": "Doelselectie",
        "onder": "Geen of meer dan vijf doelen, zonder vakvertaling.",
        "op": "Maximaal drie doelen geselecteerd, elk met een vakvertaling van één zin.",
        "boven": "+ Selectie onderbouwd tegenover een collega met argumenten uit kerndoel én klas."
      },
      {
        "criterium": "AI-GO-mapping",
        "onder": "Dimensies niet gebruikt of alleen genoemd.",
        "op": "Elk doel gemapt, onderbelichte dimensie benoemd met een concrete keuze.",
        "boven": "+ Kleine reparatie doorgevoerd die de zwakke dimensie zichtbaar maakt zonder extra lesuren."
      },
      {
        "criterium": "Beginsituatie",
        "onder": "Aannames over de klas zonder peiling.",
        "op": "Tien-minuten-peiling ontworpen met drie vragen waarvan één misconceptie-detector.",
        "boven": "+ Peiling afgenomen en resultaten verwerkt in de leerlijn."
      },
      {
        "criterium": "Leerlijn",
        "onder": "Losse lesideeën zonder volgorde of bewijs.",
        "op": "Drie stappen met per stap doel, activiteit met lestijd en bewijs — haalbaar dit schooljaar.",
        "boven": "+ Minimaal twee stappen ingebed in bestaande vakopdrachten."
      },
      {
        "criterium": "Afstemming",
        "onder": "Leerlijn blijft persoonlijk document.",
        "op": "Eén vraag en één aanbod geformuleerd voor de sectievergadering.",
        "boven": "+ Leerlijn gepresenteerd in sectie en minstens één afspraak met een collega gemaakt."
      }
    ],
    "reflection": [
      "Welke van de vier AI-GO-dimensies vind jij persoonlijk het moeilijkst om te onderwijzen — en is dat omdat hij didactisch lastig is, of omdat je er zelf nog niet uit bent?",
      "Je leerlijn beslaat drie stappen in één schooljaar. Welk kerndoel laat je daarmee bewust nog liggen, en wie in je school moet dat weten?",
      "Als een leerling vraagt 'waarom moeten we dit leren, ik gebruik AI toch al elke dag?' — wat is jouw antwoord dat zijn ervaring serieus neemt én het verschil tussen gebruiken en begrijpen raakt?"
    ],
    "checklist": [
      "Maximaal drie kerndoelen geselecteerd met vakvertaling per doel",
      "Doelen gemapt op de vier AI-GO-dimensies, gat benoemd en keuze gemaakt",
      "Tien-minuten-peiling ontworpen (drie vragen, één misconceptie-detector, anoniem)",
      "Leerlijn van drie stappen geschetst: doel, activiteit, lestijd en bewijs per stap",
      "Minimaal twee stappen ingebed in bestaande vakopdrachten",
      "Eén vraag en één aanbod klaar voor de eerstvolgende sectievergadering",
      "Peiling ingepland in een concrete les binnen vier weken"
    ],
    "verderLezen": [
      {
        "titel": "Conceptkerndoelen digitale geletterdheid",
        "bron": "SLO",
        "jaar": 2024,
        "link": "https://www.slo.nl",
        "waarom": "De wettelijke basis (invoering augustus 2027) — lees minimaal de doelen van het domein waarin AI expliciet terugkomt."
      },
      {
        "titel": "AI-GO! Raamwerk voor AI-geletterdheid in het onderwijs",
        "bron": "Npuls",
        "jaar": 2025,
        "link": "https://npuls.nl/kennisbank/ai-go-een-raamwerk-voor-ai-geletterdheid-in-het-onderwijs",
        "waarom": "De vier dimensies (kennis, vaardigheden, attitudes, ethisch bewustzijn) zijn de gatendetector voor elke leerlijn."
      },
      {
        "titel": "AI Competency Framework for Teachers",
        "bron": "UNESCO",
        "jaar": 2024,
        "link": "https://www.unesco.org/en/articles/ai-competency-framework-teachers",
        "waarom": "Internationaal ijkpunt voor wat jij als docent moet beheersen om AI-geletterdheid te onderwijzen — handig om je eigen niveau te plaatsen."
      },
      {
        "titel": "Werken aan AI-geletterdheid op school",
        "bron": "Kennisnet",
        "jaar": 2025,
        "link": "https://www.kennisnet.nl/artificial-intelligence/werken-aan-ai-geletterdheid-op-school/",
        "waarom": "Praktische vier-stappen-aanpak voor po en vo — de brug tussen raamwerk en eerste les."
      }
    ]
  },
  "ai-uitleggen": {
    "format": "diepteles",
    "summary": "Vraag een klas hoe ChatGPT aan zijn antwoorden komt en je hoort: 'hij zoekt het op', 'hij weet alles', 'er zit een soort Google in'. Misconcepties zijn geen domheid — het zijn logische verklaringen van leerlingen die nooit een betere kregen. In deze les bouw je een uitleg van de werking en grenzen van generatieve AI op het niveau van jouw klas: zonder jargon, met een analogie die klopt én waarvan je de grens kent, en met werkvormen die misconcepties eerst blootleggen voordat jij gaat uitleggen.",
    "duration": {
      "total": "60 minuten",
      "blocks": [
        {
          "label": "Aanleiding",
          "min": 6
        },
        {
          "label": "Conceptueel kader",
          "min": 12
        },
        {
          "label": "Misconcepties van je klas inventariseren",
          "min": 8
        },
        {
          "label": "Kernuitleg schrijven op klasniveau",
          "min": 12
        },
        {
          "label": "Analogie kiezen + grens benoemen",
          "min": 8
        },
        {
          "label": "Onthullende werkvorm ontwerpen",
          "min": 10
        },
        {
          "label": "Begripscheck formuleren",
          "min": 4
        }
      ]
    },
    "opening": {
      "eyebrow": "Aanleiding",
      "aanleiding": "Een docent economie legt in 4 havo uit dat je AI-antwoorden moet controleren. Een leerling steekt zijn vinger op: 'Maar meneer, waarom zou ChatGPT liegen? Wat heeft hij daaraan?' De docent begint over 'hallucinaties' — en ziet de klas afhaken bij het woord alleen al. Een ander probeert het met 'het is gewoon statistiek', waarop een leerling concludeert: 'dus het klopt meestal, net als het weerbericht.' Elke uitleg die halverwege blijft steken, plant een nieuwe misconceptie.\n\nHet probleem is niet dat leerlingen niets weten over AI — het is dat ze er een werkend maar verkeerd model van hebben. 'AI zoekt op' verklaart waarom hij snel is. 'AI weet alles' verklaart waarom hij overal antwoord op heeft. Die modellen voelen logisch en worden elke dag bevestigd door gebruik. Wie daar met een definitie overheen praat, verandert niets: het oude model blijft zitten en het nieuwe woordje ('taalmodel') wordt eraan vastgeplakt.\n\nDeze les draait de volgorde om. Eerst maak je zichtbaar wat jouw leerlingen werkelijk denken — met werkvormen die misconcepties uitlokken in plaats van wegmoffelen. Dan pas bouw je je uitleg: drie zinnen kern, één analogie die je tot het breekpunt kent, en een check waarmee je ziet of het nieuwe model is geland of alleen het nieuwe woordje.",
      "waaromNu": "De SLO-kerndoelen digitale geletterdheid (augustus 2027) vragen expliciet dat leerlingen de werking van digitale systemen — waaronder AI — op hoofdlijnen begrijpen. Het AI-GO-raamwerk zet 'kennis' als eerste dimensie: zonder werkend mentaal model is kritisch gebruik (les 3.3) gokwerk. En de klas wacht niet: leerlingen gebruiken AI dagelijks en bouwen hun misconcepties nu op."
    },
    "conceptueel": {
      "eyebrow": "Conceptueel kader",
      "intro": "Wat moet een leerling minimaal begrijpen om AI-geletterd te kunnen handelen? Geen neurale netwerken, geen wiskunde. Drie inzichten dragen vrijwel alle kritische vaardigheden die volgen. Eén: generatieve AI voorspelt het volgende stukje tekst op basis van patronen in enorme hoeveelheden trainingstekst — hij zoekt niets op en raadpleegt geen database met feiten. Twee: omdat hij patronen voorspelt, klinkt zijn output altijd vloeiend en zelfverzekerd — ook als de inhoud niet klopt. De toon van zekerheid is een eigenschap van de vorm, geen signaal over de inhoud. Drie: de output hangt af van wat erin ging — de trainingsdata (met alle gaten en scheefheden van dien) en jouw prompt. Wie deze drie heeft, kan beredeneren waarom je AI-antwoorden controleert, waarom AI over sommige onderwerpen meer onzin produceert dan over andere, en waarom twee mensen verschillende antwoorden krijgen.\n\nMisconcepties verdwijnen niet door uitleg alleen — dat is de harde les uit decennia natuurkunde- en biologiedidactiek, en hij geldt onverkort voor AI. Een misconceptie ('AI zoekt op') is een werkend model dat dagelijks bevestigd lijkt te worden. Het wijkt pas als de leerling zélf een observatie doet die er niet in past: een conflict-ervaring. Daarom is de didactische volgorde van deze les vast: eerst uitlokken (laat leerlingen voorspellen wat AI doet), dan confronteren (laat de voorspelling stuk lopen op een demonstratie), dan pas verklaren (jouw drie-zinnen-uitleg als oplossing van het raadsel). Uitleg die een raadsel oplost, beklijft; uitleg die niets oplost, vervliegt.\n\nAnalogieën zijn onmisbaar én gevaarlijk. 'AI is als een heel belezen vriend die nooit toegeeft dat hij iets niet weet' maakt de zekerheids-illusie invoelbaar — maar suggereert ook intentie ('nooit toegeeft') die er niet is. Elke analogie breekt ergens. De professionele omgang: kies bewust één analogie, gebruik haar consequent, en benoem expliciet in de les waar ze ophoudt te kloppen. Een klas die de grens van de analogie kent, heeft een dieper model dan een klas die de analogie alleen kan herhalen.\n\nTot slot taalniveau. Jargon is geen verdieping maar een filter: elk vakwoord dat je gebruikt zonder het nodig te hebben, sluit leerlingen uit. De vuistregel: als je het niet aan je klas kunt uitleggen in woorden die ze al hebben, begrijp je het zelf nog niet scherp genoeg — terug naar je eigen model, niet naar moeilijkere woorden.",
      "mentalModel": {
        "naam": "De voorspelmachine, niet de weetmachine",
        "beschrijving": "Een weetmachine zoekt het antwoord op en geeft het terug — zoals een woordenboek of een database. Een voorspelmachine bouwt het antwoord woord voor woord, op basis van wat statistisch gezien het meest waarschijnlijke vervolg is. Generatieve AI is het tweede, maar gedraagt zich in de ogen van de gebruiker als het eerste. Vrijwel elke misconceptie in de klas ('hij zoekt op', 'hij weet', 'hij liegt expres') is terug te voeren op die verwisseling. Wie het onderscheid heeft, kan zelf afleiden waarom controleren nodig is."
      },
      "kernbegrippen": [
        {
          "term": "Misconceptie",
          "uitleg": "Een werkend maar onjuist mentaal model ('AI zoekt het op'). Verdwijnt niet door uitleg, alleen door een conflict-ervaring waarin het model zichtbaar faalt — gevolgd door een beter alternatief."
        },
        {
          "term": "Conflict-ervaring",
          "uitleg": "Een demonstratie of opdracht waarin de voorspelling van de leerling stuk loopt op de werkelijkheid. Hét didactische scharnier van deze les: eerst het raadsel, dan de uitleg."
        },
        {
          "term": "Analogie-grens",
          "uitleg": "Het punt waarop een vergelijking ophoudt te kloppen ('belezen vriend' suggereert intentie die AI niet heeft). Goede AI-didactiek benoemt de grens expliciet in plaats van te hopen dat niemand hem opzoekt."
        },
        {
          "term": "Zekerheids-illusie",
          "uitleg": "AI-output klinkt altijd vloeiend en stellig, ongeacht of de inhoud klopt. De toon is een eigenschap van de vorm — leerlingen moeten leren dat stelligheid geen kwaliteitssignaal is."
        }
      ]
    },
    "learningGoals": [
      "Je benoemt de drie kerninzichten (voorspellen niet opzoeken, stelligheid zegt niets, output hangt af van input) en legt ze uit in taal die jouw klas al heeft.",
      "Je inventariseert de werkelijke misconcepties van jouw eigen groep met een uitlokkende werkvorm in plaats van aannames.",
      "Je kiest één analogie voor jouw klasniveau en benoemt expliciet waar ze breekt.",
      "Je ontwerpt een conflict-ervaring van maximaal vijftien minuten waarin minstens één misconceptie zichtbaar stuk loopt — gevolgd door jouw uitleg als oplossing."
    ],
    "scenario": {
      "title": "Werksituatie",
      "context": "Je gaat binnen drie weken een les (of lesonderdeel van 20-30 minuten) geven waarin je jouw groep uitlegt hoe generatieve AI werkt en waar het ophoudt. De groep gebruikt AI al — sommigen dagelijks, anderen nooit. Je hebt geen informatica-achtergrond nodig; je hebt een scherpe eigen uitleg, één goede analogie en één onthullende demonstratie nodig.",
      "role": "Docent · vo onderbouw/bovenbouw, mbo of hbo — elk vak",
      "tools": "AI-tool met schoolaccount voor de demonstratie · bord of flap voor hypothesen · je werkblad uit deze les"
    },
    "steps": [
      {
        "title": "Misconcepties inventariseren — wat denkt jouw klas écht?",
        "body": "Ontwerp een uitlokkende vraag waarmee je de mentale modellen van je groep boven tafel krijgt. Niet 'wat is AI?' (levert definities op die ze ergens hoorden) maar een voorspellingsvraag: 'Ik ga ChatGPT zo iets vragen over [onderwerp dat de klas goed kent]. Wat denk je dat er gebeurt, en waaróm denk je dat?' Verzamel de verklaringen — daar zitten de modellen in. Noteer de drie misconcepties die je verwacht bij jouw groep.",
        "time": "8 min",
        "voorbeeld": "Klas 2 vmbo-tl. Uitlokvraag: 'Ik vraag ChatGPT zo naar de geschiedenis van ónze school. Wat komt eruit — en hoe weet hij dat?' Verwachte verklaringen: 'hij kijkt op de schoolwebsite' (model: opzoeker), 'hij weet alles wat ooit op internet stond' (model: alwetende database), 'dan zegt hij dat hij het niet weet' (model: eerlijke assistent — interessant, want vaak verzint hij juist een plausibel verhaal).",
        "workspace": {
          "field": "uitleggen-misconcepties",
          "label": "Mijn uitlokvraag + verwachte misconcepties",
          "shortLabel": "Misconcepties",
          "hint": "Eén voorspellingsvraag over iets dat de klas goed kent · drie verwachte misconcepties met het model erachter",
          "placeholder": "Uitlokvraag: ...\nMisconceptie 1: ... (model erachter: ...)\nMisconceptie 2: ... (model erachter: ...)\nMisconceptie 3: ... (model erachter: ...)",
          "rows": 6
        }
      },
      {
        "title": "Kernuitleg schrijven — drie zinnen, taal van de klas",
        "body": "Schrijf de drie kerninzichten uit in maximaal drie zinnen die jouw klas zonder vertaling begrijpt. Verboden woorden: taalmodel, parameters, trainen, neuraal, algoritme, hallucineren — tenzij je het woord ter plekke uitlegt met iets dat ze al kennen. Test elke zin: zou een leerling hem aan een klasgenoot kunnen doorvertellen?",
        "time": "12 min",
        "voorbeeld": "Voor 2 vmbo-tl: 'ChatGPT zoekt niks op — hij maakt elke zin zelf, woord voor woord, door te gokken welk woord het beste past, zoals de woordvoorspeller op je telefoon maar dan duizend keer beter. Daardoor klinkt alles wat hij zegt even zelfverzekerd, ook als het niet klopt. En wat eruit komt hangt af van wat erin ging: van alle teksten waarvan hij geleerd heeft, en van hoe jij je vraag stelt.'",
        "workspace": {
          "field": "uitleggen-kernuitleg",
          "label": "Mijn kernuitleg in drie zinnen",
          "shortLabel": "Kernuitleg",
          "hint": "Drie zinnen · geen jargon · doorvertelbaar door een leerling aan een klasgenoot",
          "placeholder": "Zin 1 (voorspellen, niet opzoeken): ...\nZin 2 (stelligheid zegt niets): ...\nZin 3 (output hangt af van input): ...",
          "rows": 5
        }
      },
      {
        "title": "Analogie kiezen + de grens benoemen",
        "body": "Kies één analogie die bij jouw groep past en formuleer expliciet waar ze breekt. Kandidaten: de woordvoorspeller op je telefoon (sterk: zelfde mechanisme; grens: doet de schaal tekort), de heel belezen vriend die nooit 'weet ik niet' zegt (sterk: zekerheids-illusie; grens: suggereert intentie), de gemiddelde-van-internet-stem (sterk: bias invoelbaar; grens: abstract voor jongere groepen). Schrijf ook op wannéér in de les je de grens benoemt — direct erbij, of als verdieping nadat de analogie heeft gewerkt.",
        "time": "8 min",
        "voorbeeld": "Keuze voor 2 vmbo-tl: de woordvoorspeller op je telefoon. Grens die ik benoem: 'jouw telefoon voorspelt één woord en kent alleen jouw appjes; ChatGPT voorspelt hele verhalen en heeft zo ongeveer het hele internet gelezen — daardoor lijkt het op begrijpen, maar het blijft voorspellen.' Moment: grens benoem ik direct, want anders concluderen ze dat ChatGPT \"dus dom\" is zoals hun telefoon-voorspeller.",
        "workspace": {
          "field": "uitleggen-analogie",
          "label": "Mijn analogie + breekpunt",
          "shortLabel": "Analogie",
          "hint": "Eén analogie · waar ze breekt · wanneer je de grens benoemt",
          "placeholder": "Analogie: ...\nWaarom passend bij mijn groep: ...\nWaar ze breekt: ...\nMoment waarop ik de grens benoem: ...",
          "rows": 6
        }
      },
      {
        "title": "Conflict-ervaring ontwerpen — laat het model stuk lopen",
        "body": "Ontwerp een demonstratie of opdracht van maximaal vijftien minuten waarin minstens één misconceptie uit stap 1 zichtbaar faalt. Beproefde vormen: vraag AI naar iets hyperlokaals dat de klas wél kent (de eigen school, de buurt, de docent) en laat de klas de output factchecken; laat AI twee keer dezelfde vraag beantwoorden en vergelijk; vraag AI naar een bron en controleer of die bestaat. Cruciaal: de leerlingen doen de voorspelling vóóraf (stap 1), zodat het verschil tussen verwachting en uitkomst hún raadsel wordt — en jouw kernuitleg de oplossing.",
        "time": "10 min",
        "voorbeeld": "Demonstratie (12 min, klassikaal): klas voorspelt wat ChatGPT zegt over 'de geschiedenis van [onze school]'. Ik stel de vraag live via het schoolaccount. Output op het bord; klas turft in tweetallen wat klopt, wat niet klopt en wat niet te controleren is. Typische uitkomst: plausibel verhaal met verzonnen stichtingsjaar en niet-bestaande fusie. Sleutelvraag aan de klas: 'hij kon dit niet opzoeken — waar komt dit verhaal dan vandaan?' Dán pas mijn drie zinnen.",
        "workspace": {
          "field": "uitleggen-conflict",
          "label": "Mijn conflict-ervaring (max 15 min)",
          "shortLabel": "Conflict-ervaring",
          "hint": "Voorspelling vooraf · demonstratie · sleutelvraag · daarna pas jouw uitleg",
          "placeholder": "Welke misconceptie loop stuk: ...\nWerkvorm (min): ...\nSleutelvraag aan de klas: ...\nHoe mijn kernuitleg het raadsel oplost: ...",
          "rows": 7
        }
      },
      {
        "title": "Begripscheck — landde het model of alleen het woordje?",
        "body": "Formuleer een exit-vraag die toetst of het nieuwe model is geland. Geen reproductie ('wat doet AI?') maar transfer: een nieuwe situatie waarin het oude model een fout antwoord geeft en het nieuwe model een goed antwoord. Eén vraag, twee minuten, briefje of digitaal.",
        "time": "4 min",
        "voorbeeld": "Exit-vraag: 'Je vraagt ChatGPT naar de bijwerkingen van een medicijn en het antwoord klinkt heel zeker en professioneel. Je klasgenoot zegt: dan zal het wel kloppen. Wat zeg jij — en gebruik in je antwoord hoe ChatGPT aan zijn antwoorden komt.' Een leerling met het oude model zegt 'meestal klopt het wel'; een leerling met het nieuwe model legt uit dat stelligheid niets zegt omdat het voorspelde tekst is.",
        "workspace": {
          "field": "uitleggen-begripscheck",
          "label": "Mijn exit-vraag",
          "shortLabel": "Begripscheck",
          "hint": "Transfer-situatie · oud model faalt, nieuw model slaagt · 2 minuten",
          "placeholder": "Exit-vraag: ...\nAntwoord vanuit oud model (fout): ...\nAntwoord vanuit nieuw model (goed): ...",
          "rows": 5
        }
      }
    ],
    "workedExamples": [
      {
        "title": "Je eigen uitleg laten testen op jargon en niveau",
        "prompt": "Hier is mijn uitleg van hoe ChatGPT werkt, bedoeld voor 3 vmbo-kader (taalniveau 1F/2F): [uitleg plakken]. Doe drie dingen: (1) markeer elk woord dat voor deze groep jargon is of te abstract, (2) herschrijf de uitleg op het juiste taalniveau zonder de inhoud te versimpelen tot onwaarheid, (3) noem één plek waar mijn uitleg technisch net niet klopt of een misconceptie kan planten.",
        "voorbeeldOutput": "(1) Jargon/abstract: 'gegenereerd', 'database', 'statistisch waarschijnlijk', 'context'. \n\n(2) Herschreven: 'ChatGPT heeft heel veel teksten gelezen — boeken, websites, gesprekken. Als jij iets vraagt, zoekt hij níet het antwoord op. Hij bouwt een nieuw antwoord, woord voor woord, door steeds te gokken: welk woord past hier het beste? Dat gokken gaat zó goed dat het lijkt alsof hij het écht weet. Maar soms gokt hij verkeerd — en dat hoor je niet aan hem, want hij klinkt altijd even zeker.'\n\n(3) Technisch punt: je schreef 'hij onthoudt alles wat je hem vertelt'. Dat plant een misconceptie: het model onthoudt binnen het gesprek (context), maar leert niet automatisch van jouw input voor altijd. Voor deze groep volstaat: 'binnen één gesprek onthoudt hij wat je zei; begin je opnieuw, dan is hij het kwijt.'",
        "commentaar": "Let op wat de herschrijving níet doet: ze maakt het niet kinderachtig en niet onwaar. 'Gokken welk woord past' is technisch verdedigbaar én op niveau. Punt 3 toont de waarde van deze check: docenten planten onbedoeld misconcepties ('hij onthoudt alles', 'hij leert van jou') die later moeilijk weg te krijgen zijn. Laat je uitleg altijd op dit soort plekken doorlichten — en controleer de correctie zelf weer, want ook AI kan hier de fout in gaan.",
        "tryItYourself": {
          "field": "uitleggen-we-niveau",
          "label": "Laat jouw kernuitleg doorlichten",
          "shortLabel": "Eigen niveau-check",
          "hint": "Geef doelgroep + taalniveau · vraag om jargon-markering, herschrijving én één technische zwakte",
          "example": "Hier is mijn uitleg voor [groep, taalniveau]: [...]. Markeer jargon, herschrijf op niveau zonder onwaar te worden, en noem één plek waar ik een misconceptie kan planten."
        }
      },
      {
        "title": "Een misconceptie-demonstratie genereren voor jouw vak",
        "prompt": "Ik ben docent aardrijkskunde, 3 havo. Mijn leerlingen denken dat ChatGPT informatie opzoekt. Ontwerp drie korte klassikale demonstraties (max 10 minuten elk) binnen mijn vakgebied waarin die misconceptie zichtbaar stuk loopt. Per demonstratie: de opdracht, wat er waarschijnlijk gebeurt, en de sleutelvraag die ik daarna aan de klas stel.",
        "voorbeeldOutput": "1. De verzonnen buurtanalyse. Vraag live: 'Beschrijf de demografische ontwikkeling van [eigen wijk/dorp] sinds 2010.' Waarschijnlijk: vloeiend verhaal met plausibele maar deels onjuiste of oncontroleerbare cijfers. Sleutelvraag: 'Welke cijfers kunnen we nu checken via CBS in je atlas of online — en als hij het niet opzocht, waar komen ze dan vandaan?'\n\n2. De twee antwoorden. Stel twee keer exact dezelfde vraag ('Noem de drie belangrijkste oorzaken van de droogte in de Sahel') in twee aparte gesprekken. Waarschijnlijk: overlappende maar verschillend geordende en deels andere oorzaken. Sleutelvraag: 'Een encyclopedie geeft twee keer hetzelfde antwoord — waarom hij niet?'\n\n3. De niet-bestaande bron. Vraag: 'Geef drie wetenschappelijke bronnen over bodemdaling in het Groene Hart, met auteur en jaartal.' Waarschijnlijk: minstens één bron blijkt niet of net anders te bestaan. Sleutelvraag: 'Hoe kan een systeem een bron noemen die niet bestaat — wat zegt dat over hoe hij antwoorden maakt?'",
        "commentaar": "Alle drie de demonstraties laten de klas zélf het bewijs verzamelen — de docent beweert niets, de observatie doet het werk. Demonstratie 1 is het sterkst voor deze leeftijd omdat de eigen omgeving controleerbaar én interessant is. Belangrijke voorbereiding: draai de demonstratie vooraf zelf, want AI-output wisselt. Als de output een keer wél klopt, is dat geen mislukking — 'soms klopt het, en je weet vooraf niet wanneer' is precies het punt.",
        "tryItYourself": {
          "field": "uitleggen-we-demo",
          "label": "Genereer demonstraties voor jouw vak",
          "shortLabel": "Eigen demonstratie",
          "hint": "Geef vak + niveau + de misconceptie · vraag om opdracht, verwachte uitkomst en sleutelvraag",
          "example": "Ik ben docent [vak], [niveau]. Mijn leerlingen denken dat [misconceptie]. Ontwerp drie demonstraties van max 10 minuten in mijn vakgebied waarin dit stuk loopt — met opdracht, verwachte uitkomst en sleutelvraag."
        }
      },
      {
        "title": "Analogie stress-testen voordat de klas het doet",
        "prompt": "Ik wil in 5 vwo de analogie gebruiken: 'ChatGPT is een heel belezen vriend die nooit toegeeft dat hij iets niet weet.' Stress-test deze analogie: (1) welke drie eigenschappen van generatieve AI maakt ze goed invoelbaar, (2) welke twee misconcepties kan ze juist planten, (3) welke kritische vraag gaat een slimme leerling stellen waarmee de analogie breekt — en hoe vang ik die op zonder de analogie weg te gooien?",
        "voorbeeldOutput": "(1) Goed invoelbaar: de zekerheids-illusie (de vriend praat altijd door), de brede maar ondiepe kennis (veel gelezen, niets meegemaakt), en het sociale effect (je gelooft een vlotte prater sneller).\n\n(2) Risico-misconcepties: intentie ('hij geeft niet toe' klinkt als bewust verbergen — AI verbergt niets, er is geen weten-dat-je-niet-weet) en geheugen (een vriend onthoudt jullie vorige gesprek; het model standaard niet).\n\n(3) De brekende vraag: 'Maar een vriend kán toch leren van zijn fouten als ik hem verbeter?' Opvang: 'Goed gezien — daar breekt de vergelijking. Binnen één gesprek past hij zich aan, maar morgen is jouw correctie weg. Onthoud: elke vergelijking klopt tot een bepaald punt, en jullie hebben net het punt gevonden. Dat punt zelf leert je iets: het is geen vriend, het is een tekstmachine die op een vriend lijkt.'",
        "commentaar": "De kracht zit in (3): de brekende vraag wordt geen bedreiging maar een leermoment — 'jullie hebben het breekpunt gevonden' beloont kritisch denken en verdiept het model. Doe deze stress-test bij elke analogie die je overweegt; vijf minuten voorbereiding voorkomt dat je in de les moet improviseren op precies het moment dat de klas scherp is.",
        "tryItYourself": {
          "field": "uitleggen-we-analogie",
          "label": "Stress-test jouw analogie",
          "shortLabel": "Eigen stress-test",
          "hint": "Geef analogie + niveau · vraag naar sterke kanten, risico-misconcepties en de brekende vraag + opvang",
          "example": "Ik wil in [groep] de analogie gebruiken: '...'. Stress-test: wat maakt ze invoelbaar, welke misconcepties kan ze planten, welke kritische vraag breekt haar — en hoe vang ik die op?"
        }
      }
    ],
    "vakvariaties": [
      {
        "vak": "Vo onderbouw · alle vakken",
        "body": "Hou het concreet en lokaal: demonstraties over de eigen school, buurt of klas werken het best omdat leerlingen zelf kunnen controleren. De woordvoorspeller-analogie sluit aan bij hun telefoongebruik. Vermijd het woord 'hallucineren' — 'een verhaal bouwen dat niet klopt' zegt hetzelfde zonder mystiek."
      },
      {
        "vak": "Vo bovenbouw · exacte vakken",
        "body": "Deze groep kan een laag dieper: laat ze ervaren dat AI bij rekenen tekst voorspelt in plaats van rekent (grote vermenigvuldiging, net-niet-standaard som). De vraag 'waarom kan iets dat zo goed schrijft zo slecht rekenen?' opent de kern van het voorspelmodel scherper dan elke uitleg."
      },
      {
        "vak": "Talen · vo en mbo",
        "body": "Gebruik je vakinhoud als demonstratiemateriaal: laat AI een gedicht 'analyseren' dat niet bestaat, of een idioom verklaren dat je verzint. De klas ziet dat vloeiende taal geen begrip bewijst — wat meteen het gesprek opent over wat 'begrijpen' in jouw vak eigenlijk is."
      },
      {
        "vak": "Mbo · beroepsgericht",
        "body": "Koppel aan de beroepspraktijk: laat AI een veiligheidsinstructie, recept of klantmail voor het eigen vakgebied schrijven en laat studenten met hun vakkennis de fouten vinden. De student is hier de expert en AI de stagiair — die omkering motiveert en maakt het voorspelmodel invoelbaar."
      },
      {
        "vak": "Hbo · propedeuse",
        "body": "Studenten hebben vaak halfgoede technische kennis van YouTube en sociale media — meer misconcepties op een hoger abstractieniveau ('het is gewoon statistiek, dus neutraal'). Besteed expliciet aandacht aan trainingsdata en bias: wiens teksten zitten erin, wiens niet, en wat betekent dat voor output over jouw vakgebied?"
      },
      {
        "vak": "Praktijk- en kunstvakken",
        "body": "Werk met beeld: laat een beeldgenerator een vakhandeling of object uit jouw domein maken (handen, gereedschap, notenschrift, technische details gaan vaak mis). De fouten zijn direct zichtbaar zonder leeswerk en de vraag 'waarom gaat dít steeds mis?' leidt naar hetzelfde voorspelmodel."
      }
    ],
    "valkuilen": [
      {
        "titel": "Uitleggen vóórdat misconcepties zichtbaar zijn",
        "watGebeurtEr": "Je opent met een heldere presentatie over taalmodellen. De klas knikt, noteert, en houdt het oude model ('hij zoekt op') gewoon vast — het nieuwe verhaal wordt een laagje vernis op de misconceptie.",
        "fix": "Altijd de volgorde uitlokken → confronteren → verklaren. Laat leerlingen eerst voorspellen, laat de voorspelling stuk lopen, en bied je uitleg aan als oplossing van hún raadsel."
      },
      {
        "titel": "De analogie zonder grens",
        "watGebeurtEr": "'AI is gewoon je telefoon-woordvoorspeller' blijft hangen — en een leerling concludeert dat AI dom en onschuldig is. Of 'belezen vriend' blijft hangen — en de klas blijft intentie toeschrijven ('hij wil indruk maken').",
        "fix": "Benoem bij elke analogie expliciet het breekpunt, of laat de klas het zelf vinden ('waar klopt deze vergelijking niet meer?'). De grens vinden ís de verdieping."
      },
      {
        "titel": "Demonstratie niet vooraf gedraaid",
        "watGebeurtEr": "Je vraagt AI live naar de eigen school en krijgt — net vandaag — een keurig correct antwoord. De klas concludeert het omgekeerde van wat je wilde: 'zie je wel, hij weet het gewoon.'",
        "fix": "Draai elke demonstratie vooraf en heb een tweede klaar staan. En als het tóch gebeurt, gebruik het: 'soms klopt het — en je weet vooraf niet wanneer. Hoe weet je nu dus wanneer je moet controleren?'"
      },
      {
        "titel": "AI dom of eng maken in plaats van begrijpelijk",
        "watGebeurtEr": "De les wordt een verzameling AI-blunders. Lacherig effect, maar leerlingen die AI dagelijks goed zien presteren, haken af: 'die docent snapt het niet, bij mij werkt het prima.' Je verliest geloofwaardigheid bij precies de zwaarste gebruikers.",
        "fix": "Erken expliciet wat AI goed kan — dat is geloofwaardig en waar. De boodschap is niet 'het werkt niet' maar 'het werkt anders dan je denkt, en als je snapt hoe, gebruik je het beter dan nu.'"
      },
      {
        "titel": "Jargon als vlucht naar voren",
        "watGebeurtEr": "Bij een lastige leerlingvraag ('maar hoe wéét hij dan welk woord past?') grijp je naar 'neurale netwerken' en 'parameters'. De vraag verdwijnt, het begrip ook — en de klas leert dat doorvragen woordenbrij oplevert.",
        "fix": "Bereid de twee diepste vragen voor die je verwacht en formuleer antwoorden in klastaal. En oefen de eerlijkste zin in het docentenrepertoire: 'precies hoe dat van binnen werkt, weet ik niet — wat we wél zeker weten is dat hij voorspelt en niet opzoekt.'"
      }
    ],
    "geoefendSpoor": {
      "eyebrow": "Voor de geoefende docent",
      "titel": "Laat leerlingen de uitleg geven — peer-teaching met analogie-toets",
      "beschrijving": "Staat jouw uitlegles? Draai dan de rollen om: laat tweetallen hun eigen analogie voor generatieve AI ontwerpen ('AI is als een ... omdat ...'), inclusief het verplichte breekpunt ('maar de vergelijking klopt niet meer als ...'). De tweetallen presenteren in twee minuten; de klas zoekt per analogie het breekpunt. Wie een analogie kan bouwen én breken, demonstreert dieper begrip dan elke toets meet. Investering: één lesuur. Opbrengst: een klassenset eigen analogieën — en jij hoort precies wie het model heeft en wie nog het woordje.",
      "opdracht": "Voer de peer-teaching-les uit, verzamel de analogieën met breekpunten, en kies de twee sterkste als vast uitlegmateriaal voor je volgende klassen. Deel ze met je sectie."
    },
    "eindcriteria": [
      {
        "criterium": "Misconceptie-inventarisatie",
        "onder": "Aannames over wat de klas denkt, zonder uitlokvraag.",
        "op": "Uitlokvraag ontworpen plus drie verwachte misconcepties met het model erachter.",
        "boven": "+ Inventarisatie in de klas uitgevoerd en eigen verwachtingen bijgesteld op de uitkomst."
      },
      {
        "criterium": "Kernuitleg",
        "onder": "Uitleg bevat onverklaard jargon of is versimpeld tot onwaarheid.",
        "op": "Drie zinnen, jargonvrij, technisch verdedigbaar, doorvertelbaar op klasniveau.",
        "boven": "+ Uitleg getest bij een leerling of collega en aangescherpt op de reactie."
      },
      {
        "criterium": "Analogie",
        "onder": "Analogie gekozen zonder grens.",
        "op": "Eén analogie met expliciet breekpunt en een gepland moment om dat te benoemen.",
        "boven": "+ Brekende leerlingvraag voorzien en opvang geformuleerd die kritisch denken beloont."
      },
      {
        "criterium": "Conflict-ervaring",
        "onder": "Uitleg zonder demonstratie, of demonstratie zonder voorspelling vooraf.",
        "op": "Werkvorm van max 15 minuten waarin een misconceptie zichtbaar faalt, met sleutelvraag.",
        "boven": "+ Demonstratie vooraf gedraaid en een tweede achter de hand voor als de eerste 'lukt'."
      },
      {
        "criterium": "Begripscheck",
        "onder": "Geen check, of een reproductievraag.",
        "op": "Transfer-exit-vraag waarin oud model faalt en nieuw model slaagt.",
        "boven": "+ Exit-antwoorden geanalyseerd en vervolgactie bepaald voor leerlingen bij wie het oude model zit."
      }
    ],
    "reflection": [
      "Welke misconceptie over AI had jij zelf tot vrij recent — en wat heeft bij jou het model doen kantelen? Wat zegt dat over wat jouw leerlingen nodig hebben?",
      "Hoe leg je het verschil uit tussen 'AI begrijpt je vraag' en 'AI reageert passend op je vraag' — en durf je toe te geven waar jouw eigen begrip ophoudt?",
      "Een leerling die AI dagelijks gebruikt zegt: 'het maakt mij niet uit hoe het werkt, het werkt toch.' Wanneer heeft hij gelijk — en in welke situatie gaat die houding hem opbreken?"
    ],
    "checklist": [
      "Uitlokvraag ontworpen en drie verwachte misconcepties genoteerd",
      "Kernuitleg van drie zinnen geschreven, jargonvrij en technisch verdedigbaar",
      "Eén analogie gekozen met expliciet breekpunt en benoem-moment",
      "Conflict-ervaring van max 15 minuten ontworpen met sleutelvraag",
      "Demonstratie vooraf zelf gedraaid, tweede demonstratie achter de hand",
      "Exit-vraag geformuleerd die transfer toetst in plaats van reproductie",
      "Les of lesonderdeel ingepland binnen drie weken",
      "AVG-check: demonstraties via schoolaccount, geen leerlinggegevens in prompts"
    ],
    "verderLezen": [
      {
        "titel": "AI Competency Framework for Teachers — AI foundations and applications",
        "bron": "UNESCO",
        "jaar": 2024,
        "link": "https://www.unesco.org/en/articles/ai-competency-framework-teachers",
        "waarom": "Beschrijft welk niveau van technisch begrip een docent nodig heeft om het te kunnen onderwijzen — geruststellend concreet: geen informatica-graad vereist."
      },
      {
        "titel": "Artificial intelligence in het onderwijs — uitlegartikelen",
        "bron": "Kennisnet",
        "jaar": 2025,
        "link": "https://www.kennisnet.nl/artificial-intelligence/",
        "waarom": "Nederlandstalige, jargonarme uitleg van de werking van generatieve AI — bruikbaar als basis voor je eigen drie-zinnen-uitleg."
      },
      {
        "titel": "AI-GO! Raamwerk voor AI-geletterdheid in het onderwijs",
        "bron": "Npuls",
        "jaar": 2025,
        "link": "https://npuls.nl/kennisbank/ai-go-een-raamwerk-voor-ai-geletterdheid-in-het-onderwijs",
        "waarom": "De kennisdimensie van AI-GO geeft de ondergrens: wat moet een student minimaal begrijpen — handig om je uitleg op te ijken."
      },
      {
        "titel": "What is AI Literacy? Competencies and Design Considerations",
        "bron": "Long & Magerko · CHI Conference",
        "jaar": 2020,
        "link": "https://dl.acm.org/doi/fullHtml/10.1145/3313831.3376727",
        "waarom": "Bevat de competentie-lijst waar veel AI-geletterdheidscurricula op bouwen — inclusief de misconcepties die het onderzoek in klassen aantrof."
      }
    ]
  },
  "kritisch-met-ai": {
    "format": "diepteles",
    "summary": "Tegen een klas zeggen 'controleer altijd wat AI zegt' werkt niet — controleren is een vaardigheid, geen vermaning. In deze les ontwerp je verificatie-opdrachten waarin leerlingen AI-output systematisch controleren: claims isoleren, fouten lokaliseren en bronnen wegen. Je leert de foutsoorten kennen die generatieve AI typisch maakt, bouwt een verificatieroutine van drie stappen op het niveau van jouw groep, en ontwerpt één complete opdracht — inclusief nakijkmodel — die je binnen twee weken kunt draaien.",
    "duration": {
      "total": "70 minuten",
      "blocks": [
        {
          "label": "Aanleiding",
          "min": 6
        },
        {
          "label": "Conceptueel kader",
          "min": 14
        },
        {
          "label": "Foutenmateriaal verzamelen",
          "min": 12
        },
        {
          "label": "Verificatieroutine op klasniveau",
          "min": 10
        },
        {
          "label": "Verificatie-opdracht ontwerpen",
          "min": 16
        },
        {
          "label": "Nakijkmodel + klassengesprek",
          "min": 8
        },
        {
          "label": "Inplannen + collega-check",
          "min": 4
        }
      ]
    },
    "opening": {
      "eyebrow": "Aanleiding",
      "aanleiding": "Een docent geschiedenis geeft haar 4 vwo-klas de welgemeende waarschuwing mee: 'AI verzint weleens wat, dus controleer alles.' Twee weken later leest ze werkstukken vol AI-feiten — inclusief een overtuigend maar nooit gesloten verdrag. Ze spreekt een leerling aan. Die is oprecht verbaasd: 'Maar ik héb het gecontroleerd. Ik heb het nog een keer aan ChatGPT gevraagd en hij zei hetzelfde.'\n\nDaar staat het hele probleem in twee zinnen. De leerling wíl het goed doen, maar heeft geen routine voor wat 'controleren' inhoudt. Hetzelfde systeem nogmaals vragen voelt als controleren — net als de eerste link aanklikken, of kijken of het antwoord 'logisch klinkt'. Verificatie is een vakvaardigheid met stappen, criteria en oefening. Niemand leert het van een waarschuwing, zoals niemand leert zwemmen van het bordje 'pas op: diep'.\n\nIn deze les bouw je het oefenmateriaal. Je verzamelt AI-output met fouten op jouw vakgebied (makkelijker dan je denkt), bouwt een verificatieroutine van drie stappen die jouw groep aankan, en ontwerpt een opdracht waarin fouten vinden het wérk is — niet de bijvangst. De omkering is didactisch goud: niet 'gebruik AI maar pas op', maar 'hier is AI-output, jouw taak als expert is de keuring'.",
      "waaromNu": "Verificatie is de kern van de attitude- en vaardigheden-dimensies van het AI-GO-raamwerk en komt expliciet terug in de SLO-kerndoelen digitale geletterdheid (kritisch omgaan met digitale informatie, invoering augustus 2027). Onderzoek naar informatievaardigheden laat al jaren zien dat jongeren betrouwbaarheid beoordelen op uiterlijk en vlotheid — precies de kenmerken waarop AI-output maximaal scoort. Zonder geoefende routine is 'controleer het even' een lege opdracht."
    },
    "conceptueel": {
      "eyebrow": "Conceptueel kader",
      "intro": "Wie verificatie wil onderwijzen, moet eerst weten wát er mis kan zijn. AI-fouten vallen grofweg in vier soorten, en elke soort vraagt een andere detectiestrategie. Feitfouten: onjuiste jaartallen, namen, getallen, gebeurtenissen — vindbaar door naslag. Verzonnen bronnen: verwijzingen naar boeken, artikelen of websites die niet (of nét anders) bestaan — vindbaar door de bron zelf op te zoeken. Redeneerfouten: de feiten kloppen, maar de conclusie volgt niet, een stap ontbreekt of oorzaak en gevolg zijn verwisseld — vindbaar door de redenering na te lopen, niet door te googelen. En scheve weergave: niets is aantoonbaar fout, maar perspectieven ontbreken, nuance is weggevallen of het antwoord weerspiegelt vooral één kant — de moeilijkste soort, vindbaar door de vraag 'wie zou dit anders vertellen?'. Leerlingen die alleen op feitfouten jagen, missen drie van de vier categorieën.\n\nDe tweede bouwsteen is de verificatieroutine. Uit de informatievaardigheden-didactiek (onder meer de lateral reading-onderzoeken van Wineburg en collega's bij het Stanford History Education Group) weten we dat experts anders controleren dan beginners: ze blijven niet ín de tekst zoeken naar betrouwbaarheidssignalen, maar gaan ernaast — andere bronnen, andere vensters. Vertaald naar AI-output in de klas wordt dat een routine van drie stappen: (1) claims isoleren — welke controleerbare beweringen staan hier eigenlijk, onderstreep ze; (2) ernaast leggen — per kernclaim minstens één onafhankelijke bron zoeken, en 'onafhankelijk' betekent: niet hetzelfde AI-systeem en niet een site die de AI-tekst herkauwt; (3) wegen en besluiten — klopt het, klopt het niet, of is het niet vast te stellen? Die derde uitkomst expliciet toestaan is cruciaal: 'niet vast te stellen' is een professioneel oordeel, geen falen.\n\nDe derde bouwsteen is de didactische omkering. In een klassieke opdracht produceert de leerling en keurt de docent. In een verificatie-opdracht produceert AI en keurt de leerling — de leerling wordt corrector, met jouw vakinhoud als gereedschap. Dat werkt om drie redenen. Het maakt kritisch lezen actief (er vált echt iets te vinden), het beloont vakkennis (wie de stof kent, vindt méér), en het oefent precies de rol die leerlingen buiten school nodig hebben. Maar het staat of valt met de kwaliteit van je foutenmateriaal: fouten moeten vindbaar zijn op het niveau van de groep, en de opdracht moet 'goedgekeurd' als mogelijke uitkomst toestaan — anders leer je de klas dat AI-output per definitie fout is, wat net zo onkritisch is als alles geloven.",
      "mentalModel": {
        "naam": "De leerling als keurmeester",
        "beschrijving": "Een keurmeester gelooft niet en verwerpt niet — hij keurt volgens een procedure: wat beweert dit product, wat zegt de onafhankelijke meting, wat is mijn oordeel per onderdeel? Verificatie-onderwijs zet de leerling in die rol tegenover AI-output. Het verschil met 'wees kritisch' is de procedure: een keurmeester zonder meetprotocol is gewoon iemand met een mening. De routine (isoleren, ernaast leggen, wegen) is het meetprotocol; jouw vakinhoud is het meetinstrument."
      },
      "kernbegrippen": [
        {
          "term": "Vier foutsoorten",
          "uitleg": "Feitfouten, verzonnen bronnen, redeneerfouten en scheve weergave. Elke soort vraagt een eigen detectiestrategie — wie alleen feiten checkt, mist de rest."
        },
        {
          "term": "Verificatieroutine",
          "uitleg": "Drie stappen: claims isoleren, per kernclaim een onafhankelijke bron ernaast leggen, wegen en besluiten (klopt / klopt niet / niet vast te stellen)."
        },
        {
          "term": "Lateral reading",
          "uitleg": "Niet ín de tekst zoeken naar betrouwbaarheid, maar ernaast: andere bronnen openen en vergelijken. Hét expertgedrag uit het informatievaardigheden-onderzoek, direct toepasbaar op AI-output."
        },
        {
          "term": "Onafhankelijke bron",
          "uitleg": "Een bron die niet uit hetzelfde AI-systeem komt en niet de AI-tekst herkauwt. 'Ik heb het nog een keer gevraagd' is geen verificatie — dat is dezelfde gok herhalen."
        },
        {
          "term": "Didactische omkering",
          "uitleg": "AI produceert, de leerling keurt. Maakt kritisch lezen actief en beloont vakkennis — mits de fouten vindbaar zijn op klasniveau en 'goedgekeurd' een mogelijke uitkomst is."
        }
      ]
    },
    "learningGoals": [
      "Je benoemt de vier foutsoorten in AI-output en herkent per soort de passende detectiestrategie.",
      "Je verzamelt zelf AI-output met vindbare fouten op jouw vakgebied en archiveert die als lesmateriaal.",
      "Je formuleert een verificatieroutine van drie stappen in taal en stappen die jouw groep aankan.",
      "Je ontwerpt één complete verificatie-opdracht (instructie, materiaal, werkblad, nakijkmodel) die binnen twee weken in je les draait."
    ],
    "scenario": {
      "title": "Werksituatie",
      "context": "Je wilt dat jouw groep niet alleen wéét dat AI-output fouten bevat, maar getraind raakt in het vinden en wegen ervan. Je hebt één lesuur (of een blokuur in mbo/hbo) beschikbaar binnen twee weken. Je ontwerpt in deze les de complete opdracht: het foutenmateriaal, het werkblad met de routine, en het nakijkmodel waarmee jij (of de klas zelf) de keuring beoordeelt.",
      "role": "Docent · vo, mbo of hbo — elk vak met controleerbare inhoud",
      "tools": "AI-tool met schoolaccount · jouw leerboek/bronnenlijst als meetinstrument · werkblad-sjabloon"
    },
    "steps": [
      {
        "title": "Foutenmateriaal verzamelen — laat AI over jouw vak schrijven",
        "body": "Genereer drie AI-teksten over onderwerpen die jouw groep deze periode behandelt, met prompts die fouten waarschijnlijker maken: vraag naar specifieke details (jaartallen, namen, getallen), naar bronnen, naar oorzaak-gevolg-uitleg, of naar iets hyperlokaal of zeer recent. Loop de output na met je vakkennis en markeer per tekst welke fouten erin zitten en van welke soort. Selecteer de tekst met de beste mix: minstens twee foutsoorten, vindbaar op het niveau van je groep, en óók passages die gewoon kloppen.",
        "time": "12 min",
        "voorbeeld": "Docent biologie, 4 havo, thema ecologie. Prompt: 'Leg uit hoe de wolf het ecosysteem van de Veluwe sinds zijn terugkeer heeft veranderd, met concrete aantallen en twee wetenschappelijke bronnen.' Output bevat: kloppende hoofdlijn (predatie-effect), een verzonnen telling ('in 2021 leefden er 47 wolven op de Veluwe'), één bron die niet bestaat, en een redeneerfout (effect op bosverjonging gepresenteerd als bewezen terwijl het hypothese is). Vier vindplekken, drie foutsoorten — bruikbaar.",
        "workspace": {
          "field": "kritisch-foutenmateriaal",
          "label": "Mijn foutenmateriaal",
          "shortLabel": "Foutenmateriaal",
          "hint": "Prompt · welke fouten zitten erin · welke soort per fout · vindbaar op klasniveau?",
          "placeholder": "Prompt gebruikt: ...\nFout 1: ... (soort: ...)\nFout 2: ... (soort: ...)\nFout 3: ... (soort: ...)\nWat klopt er wél: ...",
          "rows": 8
        }
      },
      {
        "title": "Verificatieroutine vertalen naar jouw groep",
        "body": "Vertaal de drie stappen (isoleren, ernaast leggen, wegen) naar de taal en het niveau van jouw groep, en bepaal welke bronnen als 'onafhankelijk' gelden in jouw vak. Voor een onderbouwklas: 'onderstreep elke bewering die je zou kunnen checken' — 'zoek het op in je boek of op [twee aangewezen sites]' — 'zet er een ✓, ✗ of ? bij'. Voor hbo: claims classificeren, bronsoort verantwoorden, weging onderbouwen. Leg ook vast hoeveel claims je minimaal gecontroleerd wilt zien.",
        "time": "10 min",
        "voorbeeld": "3 vmbo-tl, vak aardrijkskunde. Stap 1: 'Onderstreep alle feiten in de tekst: getallen, namen, jaartallen, plaatsen.' Stap 2: 'Kies de vijf belangrijkste en zoek elk op in je atlas, je boek of op de CBS-site — niet in ChatGPT.' Stap 3: 'Zet ✓ (klopt), ✗ (klopt niet) of ? (kon ik niet vinden) en schrijf bij elke ✗ op waar jij het juiste antwoord vond.' Minimum: vijf claims, waarvan minstens één ✗ onderbouwd.",
        "workspace": {
          "field": "kritisch-routine",
          "label": "Mijn verificatieroutine op klasniveau",
          "shortLabel": "Routine",
          "hint": "Drie stappen in klastaal · welke bronnen gelden als onafhankelijk · minimum aantal claims",
          "placeholder": "Stap 1 (isoleren): ...\nStap 2 (ernaast leggen): ... — toegestane bronnen: ...\nStap 3 (wegen): ...\nMinimum: ...",
          "rows": 7
        }
      },
      {
        "title": "De opdracht ontwerpen — keuring als kerntaak",
        "body": "Bouw de complete opdracht: context ('jij bent de corrector/keurmeester/factchecker van de redactie'), het AI-materiaal uit stap 1, het werkblad met je routine, groepsvorm en tijden. Beproefde opzet voor één lesuur: 5 min instructie en rolneming, 25 min keuren in tweetallen, 10 min uitkomsten vergelijken met een ander tweetal (waar verschillen jullie oordelen — dáár zit het leergesprek), 10 min klassikale oogst. Bouw differentiatie in: snelle tweetallen krijgen de vraag welke fout het gevaarlijkst is en waarom.",
        "time": "16 min",
        "voorbeeld": "Opdrachtkop voor 4 havo geschiedenis: 'De redactie van een geschiedenissite heeft dit AI-artikel over de Koude Oorlog klaarstaan. Jij bent eindredacteur: het gaat alleen online als jij het goedkeurt. Keur het artikel met het werkblad. Eindoordeel: publiceren / publiceren na correcties (welke?) / afkeuren (waarom?).' Tweetallen, 25 minuten, boek en twee aangewezen sites toegestaan. Verlenging voor snelle tweetallen: 'welke fout zou de meeste lezers misleiden — en waarom juist die?'",
        "workspace": {
          "field": "kritisch-opdracht",
          "label": "Mijn verificatie-opdracht",
          "shortLabel": "Opdracht",
          "hint": "Rol/context · werkvorm met tijden · groepsgrootte · differentiatie voor snelle leerlingen",
          "placeholder": "Rol + context: ...\nWerkvorm + tijden: ...\nGroepsvorm: ...\nDifferentiatie: ...\nEindoordeel-vraag: ...",
          "rows": 8
        }
      },
      {
        "title": "Nakijkmodel maken — wat is een goede keuring?",
        "body": "Maak het nakijkmodel: welke fouten zitten er aantoonbaar in (jouw lijst uit stap 1), wat telt als gevonden, en — belangrijker — hoe beoordeel je de kwaliteit van het keurproces? Een leerling die drie fouten vindt met goede bronvermelding keurt beter dan een die er vijf 'vindt' waarvan twee onterecht. Reserveer expliciet waardering voor terechte ?-oordelen ('niet vast te stellen') en voor terecht goedgekeurde passages.",
        "time": "8 min",
        "voorbeeld": "Model: 4 ingebouwde vindplekken (2 feitfouten, 1 verzonnen bron, 1 redeneerfout). Goede keuring = minstens 3 gevonden mét onafhankelijke bron erbij; onterechte afkeuringen kosten meer dan gemiste fouten ('een corrector die goede tekst wegkeurt is ook een probleem'); maximaal twee ?-oordelen, mits toegelicht. Klassengesprek-vraag achteraf: 'welke fout vond bijna niemand — en wat zegt dat over waar wij blind voor zijn?'",
        "workspace": {
          "field": "kritisch-nakijkmodel",
          "label": "Mijn nakijkmodel",
          "shortLabel": "Nakijkmodel",
          "hint": "Ingebouwde fouten · wat telt als gevonden · waardering voor ?-oordelen en terechte goedkeuring",
          "placeholder": "Ingebouwde fouten: ...\nGoede keuring = ...\nOmgang met onterechte afkeuring: ...\nKlassengesprek-vraag: ...",
          "rows": 6
        }
      },
      {
        "title": "Inplannen + collega-check",
        "body": "Plan de les concreet in (datum, klas, lokaal met of zonder devices) en leg je opdracht in vijf minuten voor aan één collega met de vraag: 'zijn deze fouten vindbaar voor mijn groep, en is het nakijkmodel eerlijk?' Een tweede paar vakogen vangt de fout die jij als maker niet meer ziet.",
        "time": "4 min",
        "workspace": {
          "field": "kritisch-planning",
          "label": "Planning + collega-check",
          "shortLabel": "Planning",
          "hint": "Datum en klas · devices nodig? · welke collega checkt wat",
          "placeholder": "Les gepland op: ... klas: ...\nDevices/bronnen geregeld: ...\nCollega-check door: ... — gevraagd op: ...",
          "rows": 3
        }
      }
    ],
    "workedExamples": [
      {
        "title": "Foutenrijk materiaal uitlokken met een gerichte prompt",
        "prompt": "Schrijf een informatieve tekst van 300 woorden voor 4 havo over de oorzaken van de hyperinflatie in Duitsland in 1923. Noem concrete bedragen, data en percentages, verwijs naar twee historische bronnen met auteur en jaar, en leg de causale keten stap voor stap uit.",
        "voorbeeldOutput": "[AI levert een vloeiende tekst met: kloppende hoofdlijn over herstelbetalingen en de Ruhrbezetting; een specifiek maar onjuist wisselkoers-cijfer; een bronvermelding naar een boek met nét verkeerde titel en jaartal; en een causale keten waarin de volgorde van geldpers en vertrouwensverlies stilzwijgend is omgedraaid.]",
        "commentaar": "De prompt is bewust gebouwd om alle vier foutsoorten uit te lokken: 'concrete bedragen en percentages' lokt feitfouten, 'twee bronnen met auteur en jaar' lokt verzonnen bronnen, 'causale keten stap voor stap' lokt redeneerfouten, en het onderwerp zelf nodigt uit tot versimpelde eenzijdigheid (scheve weergave). Controleer de output altijd volledig zelf vóór je hem inzet — jij moet elke fout kennen, anders kun je niet nakijken. En bewaar de prompt: volgend jaar genereer je er in twee minuten vers materiaal mee.",
        "tryItYourself": {
          "field": "kritisch-we-uitlokken",
          "label": "Lok foutenrijk materiaal uit voor jouw vak",
          "shortLabel": "Eigen materiaal",
          "hint": "Vraag om details + bronnen + causale uitleg over jouw lesstof · controleer daarna alles zelf",
          "example": "Schrijf een informatieve tekst van 300 woorden voor [groep] over [onderwerp uit mijn lesstof]. Noem concrete getallen en data, verwijs naar twee bronnen met auteur en jaar, en leg de oorzaak-gevolg-keten stap voor stap uit."
        }
      },
      {
        "title": "Werkblad genereren bij jouw routine",
        "prompt": "Maak een werkblad van één A4 voor 3 vmbo-tl bij een verificatie-opdracht. De routine: (1) onderstreep alle controleerbare feiten, (2) kies de vijf belangrijkste en zoek elk op in boek, atlas of CBS-site, (3) oordeel per feit: ✓, ✗ of ?, met vindplaats bij elke ✗. Taalniveau 2F, duidelijke invulvakken, en sluit af met een eindoordeel-vraag: publiceren, corrigeren of afkeuren?",
        "voorbeeldOutput": "WERKBLAD — JIJ KEURT DIT ARTIKEL\nJouw naam + die van je keurpartner: ___\n\nStap 1 — Onderstreep in de tekst alle feiten die je kunt checken: getallen, namen, jaartallen, plaatsen.\n\nStap 2 — Kies de 5 belangrijkste feiten. Zet ze hieronder.\n\nStap 3 — Zoek elk feit op. Niet in ChatGPT! Wel in: je boek, de atlas, cbs.nl.\n\n| Feit uit de tekst | Waar gezocht? | ✓ / ✗ / ? | Bij ✗: wat is het juiste antwoord + waar gevonden? |\n| 1. | | | |\n| 2. | | | |\n| 3. | | | |\n| 4. | | | |\n| 5. | | | |\n\nEINDOORDEEL (kruis aan):\n☐ Publiceren — de tekst klopt voldoende\n☐ Eerst verbeteren — dit moet anders: ___\n☐ Afkeuren — want: ___\n\nBonusvraag: welke fout zou de meeste lezers geloven? Waarom juist die?",
        "commentaar": "Het werkblad doet drie dingen goed: de tabel dwingt de routine af (geen losse meningen), de ?-kolom maakt 'niet kunnen vinden' een legitiem antwoord, en het eindoordeel dwingt tot wegen — niet elke fout betekent afkeuren. Check bij gegenereerde werkbladen altijd het taalniveau zelf ('controleerbaar' werd hier terecht 'die je kunt checken') en of de toegestane bronnen kloppen met wat jouw school werkelijk heeft.",
        "tryItYourself": {
          "field": "kritisch-we-werkblad",
          "label": "Genereer jouw werkblad",
          "shortLabel": "Eigen werkblad",
          "hint": "Geef je routine + taalniveau + toegestane bronnen mee · vraag om invulstructuur en eindoordeel",
          "example": "Maak een werkblad van één A4 voor [groep] bij een verificatie-opdracht. Routine: [drie stappen]. Taalniveau [niveau], invulvakken, eindoordeel-vraag: publiceren, corrigeren of afkeuren."
        }
      },
      {
        "title": "Bronnen leren wegen — de vervolgvraag na het vinden",
        "prompt": "Mijn 5 vwo-leerlingen kunnen inmiddels AI-feitfouten vinden met naslag. Nu wil ik een niveau dieper: bronnen wégen. Ontwerp een korte werkvorm (20 min) waarin leerlingen voor één betwiste claim uit een AI-tekst drie gevonden bronnen moeten rangschikken op betrouwbaarheid — en hun rangorde verdedigen. Geef ook de drie weegvragen die ze per bron stellen.",
        "voorbeeldOutput": "Werkvorm 'De rangorde' (20 min, drietallen). Elke groep krijgt één betwiste claim plus drie door jou voorgeselecteerde bronnen die elkaar deels tegenspreken: bijvoorbeeld een krantenartikel, een Wikipedia-lemma en een rapport van een belangenorganisatie. Opdracht: rangschik van meest naar minst betrouwbaar vóór deze claim, en schrijf per bron één zin verdediging. Daarna confrontatie: twee drietallen vergelijken rangordes en moeten verschillen uitpraten tot één gezamenlijke rangorde — of een beargumenteerd 'wij blijven het oneens'.\n\nDrie weegvragen per bron: (1) Wie heeft dit gemaakt en wat wint die persoon of club bij dit verhaal? (2) Hoe weet de maker dit — staat er eigen onderzoek, een verwijzing, of niets? (3) Hoe vers is het, en maakt dat voor déze claim uit?\n\nAfronding klassikaal: welke rangorde-ruzie was het interessantst? Conclusie die je wilt horen: betrouwbaarheid hangt af van de claim — dezelfde bron kan voor de ene vraag sterk zijn en voor de andere zwak.",
        "commentaar": "De confrontatiestap is het didactische hart: rangordes vergelijken dwingt tot argumenteren over criteria in plaats van over meningen. De drie weegvragen zijn een bruikbare versimpeling van klassieke bronkritiek (belang, onderbouwing, actualiteit) — voor vo bovenbouw precies genoeg. Voorbereiding die je niet kunt overslaan: de drie bronnen per claim zelf selecteren, anders verzandt de les in zoeken in plaats van wegen.",
        "tryItYourself": {
          "field": "kritisch-we-wegen",
          "label": "Ontwerp jouw weeg-werkvorm",
          "shortLabel": "Eigen weegvorm",
          "hint": "Eén betwiste claim + drie voorgeselecteerde bronnen · rangschikken, verdedigen, confronteren",
          "example": "Mijn [groep] kan AI-fouten vinden met naslag. Ontwerp een werkvorm van 20 minuten waarin ze voor één betwiste claim drie bronnen rangschikken op betrouwbaarheid en hun rangorde verdedigen — met drie weegvragen per bron."
        }
      }
    ],
    "vakvariaties": [
      {
        "vak": "Geschiedenis en maatschappijleer",
        "body": "Jouw vak hééft de gereedschapskist al: bronkritiek. Presenteer AI als nieuwe bronsoort met een bijzonder kenmerk — geen vindplaats, wel maximale stelligheid. Verificatie-opdrachten passen naadloos in bestaande brononderzoek-lessen; de scheve-weergave-foutsoort (wiens perspectief ontbreekt?) is hier de koninklijke verdieping."
      },
      {
        "vak": "Exacte vakken",
        "body": "Laat AI uitwerkingen van sommen of practicumverslagen genereren en zet de klas als nakijker in. Redeneerfouten zijn hier de hoofdprijs: het antwoord kan kloppen terwijl de afleiding rammelt. Leerlingen die een fout in een 'perfecte' uitwerking vinden, oefenen precies het stapsgewijs controleren dat het vak vraagt."
      },
      {
        "vak": "Talen",
        "body": "Verificatie gaat hier ook over taal zelf: laat AI beweringen doen over grammaticaregels, etymologie of literatuurgeschiedenis en laat leerlingen de naslag doen. Tweede spoor: AI-samenvattingen van gelezen teksten keuren — wat is weggevallen, wat is erbij verzonnen? Dat traint close reading onder een nieuwe vlag."
      },
      {
        "vak": "Mbo · beroepsgericht",
        "body": "Maak het beroepsecht: AI schrijft een veiligheidsprotocol, zorgplan, onderhoudsadvies of klantofferte, en de student keurt met het handboek en de geldende normen ernaast. De vraag 'wat gebeurt er als dit fout de praktijk ingaat?' geeft de keuring urgentie die een schoolse factcheck nooit haalt. Koppel aan het kwalificatiedossier: kritisch informatie beoordelen stáát er al in."
      },
      {
        "vak": "Hbo · alle domeinen",
        "body": "Til de routine naar onderzoeksniveau: studenten verifiëren AI-output inclusief het natrekken van wetenschappelijke referenties (bestaat het artikel, zegt het wat AI beweert?). De confrontatie 'de bron bestaat, maar zegt iets anders' is leerzamer dan de verzonnen bron — plan er materiaal voor in."
      },
      {
        "vak": "Kunst- en praktijkvakken",
        "body": "Verificatie hoeft niet tekstueel: laat AI werkbeschrijvingen, materiaallijsten of stappenplannen voor een praktijkopdracht genereren en laat studenten ze keuren door uitvoering — werkt dit recept, klopt deze verfmenging, is deze houtverbinding zo maakbaar? De praktijk is hier de onafhankelijke bron."
      }
    ],
    "valkuilen": [
      {
        "titel": "De opdracht bewijst dat AI altijd fout is",
        "watGebeurtEr": "Je selecteert alleen rampzalige output. De klas concludeert: AI is rommel. Vervolgens zien ze thuis dat het uitstekend werkt, en jouw les verliest met terugwerkende kracht geloofwaardigheid.",
        "fix": "Neem altijd passages op die gewoon kloppen en maak 'publiceren' een reëel mogelijke uitkomst. De leerstelling is niet 'AI faalt' maar 'je weet vooraf niet wáár het faalt — daarom keur je'."
      },
      {
        "titel": "Controleren bij hetzelfde systeem",
        "watGebeurtEr": "Leerlingen 'verifiëren' door de vraag opnieuw aan ChatGPT te stellen, of aan een andere chatbot die op vergelijkbare data is getraind. Twee keer hetzelfde antwoord voelt als bevestiging.",
        "fix": "Definieer 'onafhankelijke bron' expliciet in je routine en wijs toegestane naslagbronnen aan. Bespreek het klassikaal: waarom is nóg een keer vragen geen check? (Zelfde voorspelmachine, zelfde patronen.)"
      },
      {
        "titel": "Fouten boven het niveau van de groep",
        "watGebeurtEr": "De ingebouwde redeneerfout vergt inzicht dat de klas nog niet heeft. Leerlingen vinden niets, raken gefrustreerd en vullen willekeurig ✗-jes in om maar iets te scoren.",
        "fix": "Kalibreer op je groep: onderbouw vooral feitfouten en verzonnen bronnen (opzoekbaar), bovenbouw en mbo/hbo ook redeneer- en perspectieffouten. Laat één collega het materiaal vooraf keuren op vindbaarheid."
      },
      {
        "titel": "De keuring eindigt zonder oogst",
        "watGebeurtEr": "De bel gaat na het invullen van het werkblad. De klas heeft fouten gevonden maar nooit vergeleken wíe wat vond en waarom — het generaliseerbare inzicht (waar zijn wij blind voor, wat is een goede check) komt nooit boven tafel.",
        "fix": "Plan de oogst als hard blok van tien minuten en bewaak hem. Eén vraag volstaat: 'welke fout vond bijna niemand — en hoe had je hem wél kunnen vinden?' Daar zit de transfer."
      },
      {
        "titel": "Eenmalige les in plaats van routine",
        "watGebeurtEr": "De verificatie-les was leuk en geslaagd. Daarna komt hij nooit terug, en bij het volgende werkstuk plakken leerlingen weer ongecontroleerde AI-tekst — de vaardigheid is niet geautomatiseerd.",
        "fix": "Veranker de routine in terugkerende momenten: elk werkstuk met AI-gebruik bevat een mini-keuringsbijlage (drie gecontroleerde claims met bron). Vijf minuten per keer, en de routine wordt gewoonte."
      }
    ],
    "geoefendSpoor": {
      "eyebrow": "Voor de geoefende docent",
      "titel": "Laat leerlingen zelf foutenmateriaal maken voor elkaar",
      "beschrijving": "Draait de verificatie-opdracht? Keer hem dan nóg een keer om: laat tweetallen zelf een AI-tekst over de lesstof genereren, de fouten erin opsporen en documenteren, en de tekst als keuringsopdracht aan een ander tweetal voorleggen — inclusief eigen nakijkmodel. Wie een goede keuringsopdracht kan bouwen, beheerst de stof én de foutsoorten dubbel. Jij beoordeelt niet de keuring maar het nakijkmodel: zijn de gedocumenteerde fouten echt fouten, met juiste bronnen? Investering: één blokuur. Opbrengst: een zichzelf voedende bank van vers keuringsmateriaal per thema.",
      "opdracht": "Voer de omkeerles uit in één klas, verzamel de drie beste leerling-gemaakte keuringsopdrachten en neem ze op in je vaksectie-materiaal voor volgend jaar."
    },
    "eindcriteria": [
      {
        "criterium": "Foutenmateriaal",
        "onder": "Geen eigen materiaal, of materiaal waarvan je de fouten zelf niet kent.",
        "op": "Eén AI-tekst met minstens twee foutsoorten, volledig zelf gecontroleerd en gedocumenteerd.",
        "boven": "+ Materiaal bevat ook kloppende passages en is door een collega op vindbaarheid gekeurd."
      },
      {
        "criterium": "Verificatieroutine",
        "onder": "'Controleer het' zonder stappen of brondefinitie.",
        "op": "Drie stappen in klastaal met expliciete definitie van onafhankelijke bronnen en een minimum.",
        "boven": "+ Routine bevat de ?-uitkomst en weegt onterechte afkeuring mee."
      },
      {
        "criterium": "Opdrachtontwerp",
        "onder": "Losse factcheck-vraag zonder rol, tijden of werkvorm.",
        "op": "Complete opdracht met keurmeester-rol, werkvorm met tijden, groepsvorm en differentiatie.",
        "boven": "+ Vergelijk-stap tussen groepen ingebouwd waar oordeelsverschillen het leergesprek voeden."
      },
      {
        "criterium": "Nakijkmodel",
        "onder": "Alleen 'aantal gevonden fouten' telt.",
        "op": "Model waardeert proces: bronvermelding, terechte ?-oordelen en terechte goedkeuring.",
        "boven": "+ Model bestraft onterechte afkeuring zwaarder dan gemiste fouten, met uitleg waarom."
      },
      {
        "criterium": "Verankering",
        "onder": "Eenmalige les zonder vervolg.",
        "op": "Les ingepland binnen twee weken plus één terugkeermoment (bijv. keuringsbijlage bij werkstuk).",
        "boven": "+ Routine vastgelegd als vaste vakafspraak en gedeeld met de sectie."
      }
    ],
    "reflection": [
      "Hoe verifieer jij zelf AI-output in je lesvoorbereiding — eerlijk antwoord? Welke stap van je eigen routine sla je over als je haast hebt, en wat betekent dat voor wat je je leerlingen voorleeft?",
      "Welke foutsoort is in jouw vak het gevaarlijkst — niet het makkelijkst vindbaar, maar het schadelijkst als hij doorglipt? Krijgt die soort in jouw opdracht het meeste gewicht?",
      "Een leerling vindt in jouw zorgvuldig voorbereide foutenmateriaal een fout die jij niet had gezien. Wat doe je op dat moment voor de klas — en wat zegt je antwoord over de keurcultuur die je wilt bouwen?"
    ],
    "checklist": [
      "Drie AI-teksten gegenereerd met fout-uitlokkende prompts, beste geselecteerd",
      "Alle fouten in het materiaal zelf gevonden, gedocumenteerd en op soort gelabeld",
      "Verificatieroutine van drie stappen vertaald naar klastaal, onafhankelijke bronnen aangewezen",
      "Complete opdracht ontworpen: rol, werkvorm met tijden, groepsvorm, differentiatie",
      "Nakijkmodel klaar met waardering voor proces, ?-oordelen en terechte goedkeuring",
      "Oogst-blok van tien minuten ingepland met één transfervraag",
      "Collega-check gevraagd op vindbaarheid en eerlijkheid van het model",
      "Terugkeermoment verankerd (bijv. keuringsbijlage bij het volgende werkstuk)",
      "AVG-check: materiaal via schoolaccount gegenereerd, geen persoonsgegevens in prompts of teksten"
    ],
    "verderLezen": [
      {
        "titel": "Werken aan AI-geletterdheid op school",
        "bron": "Kennisnet",
        "jaar": 2025,
        "link": "https://www.kennisnet.nl/artificial-intelligence/werken-aan-ai-geletterdheid-op-school/",
        "waarom": "Plaatst kritisch omgaan met AI-output in de bredere schoolaanpak — handig om je verificatie-les aan de leerlijn van 3.1 te koppelen."
      },
      {
        "titel": "AI-GO! Raamwerk voor AI-geletterdheid in het onderwijs",
        "bron": "Npuls",
        "jaar": 2025,
        "link": "https://npuls.nl/kennisbank/ai-go-een-raamwerk-voor-ai-geletterdheid-in-het-onderwijs",
        "waarom": "De vaardigheden- en attitudedimensies geven de ijkpunten waarop je verificatie-opdracht moet scoren."
      },
      {
        "titel": "Civic Online Reasoning — onderzoek en lesmateriaal over lateral reading",
        "bron": "Stanford History Education Group",
        "jaar": 2021,
        "link": "https://cor.inquirygroup.org",
        "waarom": "De onderzoeksbasis onder 'ernaast leggen in plaats van erin zoeken' — met vrij beschikbare opdrachten die je naar AI-context kunt vertalen."
      },
      {
        "titel": "AI Competency Framework for Teachers — Ethics of AI",
        "bron": "UNESCO",
        "jaar": 2024,
        "link": "https://www.unesco.org/en/articles/ai-competency-framework-teachers",
        "waarom": "Verbindt kritisch beoordelen van AI-output aan de ethische competenties die je in les 3.5 verder uitwerkt."
      }
    ]
  },
  "ai-informatievaardigheden": {
    "format": "diepteles",
    "summary": "Je school doet al jaren aan informatievaardigheden: zoeken, bronnen beoordelen, mediawijsheid. AI maakt dat werk niet overbodig — het maakt het urgenter en verandert de spelregels: zoekmachines vatten samen in plaats van verwijzen, beeld en stem zijn naadloos te vervalsen, en 'de bron checken' wordt lastig als er geen bron meer zichtbaar is. In deze les inventariseer je wat er al staat aan informatievaardigheden-onderwijs in jouw school, bepaal je per onderdeel wat AI eraan verandert, en ontwerp je één geüpdatete les — inclusief een deepfake-werkvorm die weerbaar maakt zonder bang te maken.",
    "duration": {
      "total": "60 minuten",
      "blocks": [
        {
          "label": "Aanleiding",
          "min": 6
        },
        {
          "label": "Conceptueel kader",
          "min": 12
        },
        {
          "label": "Bestaand aanbod inventariseren",
          "min": 10
        },
        {
          "label": "Wat verandert AI per onderdeel?",
          "min": 10
        },
        {
          "label": "Eén les updaten + deepfake-werkvorm",
          "min": 14
        },
        {
          "label": "Afstemmen met mediacoach/bibliotheek",
          "min": 8
        }
      ]
    },
    "opening": {
      "eyebrow": "Aanleiding",
      "aanleiding": "Een mediathecaris geeft al tien jaar dezelfde succesvolle les bronbeoordeling aan brugklassen: kijk wie de site maakt, check de datum, vergelijk twee bronnen. Dit jaar steekt een leerling haar vinger op: 'Maar mevrouw, ik zoek niks meer op. Ik vraag het gewoon aan AI, die heeft alles al gelezen.' De mediathecaris realiseert zich: haar hele les veronderstelt dat informatie een vindplaats heeft — een site, een maker, een datum. Wat als het antwoord geen vindplaats meer toont?\n\nTegelijk speelt twee gangen verderop iets anders. In de pauze gaat een filmpje rond waarin een klasgenoot dingen 'zegt' die ze nooit gezegd heeft — een deepfake, in twee minuten gemaakt met een gratis app. De mentor wil er een les aan wijden maar twijfelt: maak je leerlingen weerbaar, of geef je ze vooral ideeën en angst?\n\nDeze twee scènes horen bij elkaar. AI verandert beide kanten van informatievaardigheid: het vinden (antwoorden zonder bron) en het vertrouwen (beeld en geluid bewijzen niets meer). Het goede nieuws: je school heeft al een fundament — bronkritiek-lessen, mediawijsheid-projecten, een mediathecaris of mediacoach. Deze les leert je dat fundament te benutten in plaats van ernaast iets nieuws te bouwen: inventariseer wat er staat, bepaal wat AI per onderdeel verandert, en update gericht.",
      "waaromNu": "De SLO-kerndoelen digitale geletterdheid (augustus 2027) brengen digitale informatie, media en AI onder één paraplu — scholen die informatievaardigheden en AI-geletterdheid als losse projecten draaien, doen dubbel werk en missen de samenhang. Bovendien is synthetische media geen toekomstmuziek: deepfakes circuleren nú in klas-appgroepen, en de eerste reflex van scholen (verbieden en zwijgen) maakt leerlingen niet weerbaarder."
    },
    "conceptueel": {
      "eyebrow": "Conceptueel kader",
      "intro": "AI verschuift drie pijlers onder het klassieke informatievaardigheden-onderwijs. De eerste pijler was: informatie heeft een vindplaats. Zoekonderwijs draaide om bronnen vinden en beoordelen — wie schreef dit, wanneer, met welk belang. Generatieve AI levert antwoorden zonder zichtbare herkomst: de tekst is nieuw gebouwd, samengesteld uit patronen van miljoenen bronnen die je niet kunt aanwijzen. Dat maakt bronkritiek niet overbodig, maar verlegt de eerste vraag: niet meer 'is deze bron betrouwbaar?' maar 'is dit überhaupt een bron — of een samenvatting zonder afzender?' Leerlingen moeten het verschil leren tussen informatie raadplegen (met vindplaats, controleerbaar) en informatie genereren (zonder vindplaats, te verifiëren via de routine uit les 3.3).\n\nDe tweede pijler was: zien is geloven. Foto's en video golden als sterk bewijs; mediawijsheidslessen gingen over framing en selectie, niet over totale fabricage. Synthetische media — deepfakes, stemkloons, gegenereerde 'foto's' — halen die pijler weg. De didactische valkuil hier is dubbel: paniekdidactiek ('niets is meer echt!') maakt leerlingen cynisch en passief, terwijl detectie-didactiek ('let op de handen en de oogjes') een vals gevoel van vaardigheid geeft — de technische artefacten van vandaag zijn volgend jaar weg. Wat overblijft als houdbare strategie is herkomst- en contextdenken: niet 'ziet dit er echt uit?' maar 'waar komt dit vandaan, wie verspreidt het, wordt het door een onafhankelijke bron bevestigd?' Precies het lateral-reading-gedrag uit les 3.3, nu toegepast op beeld.\n\nDe derde pijler was: de bibliotheek-les staat los van het vak. Informatievaardigheden waren vaak het domein van de mediathecaris, een projectweek of het vak Nederlands. AI-geletterdheid dreigt hetzelfde lot: een los lesje. De kans ligt in koppeling — niet een nieuwe les ernaast, maar bestaande lessen updaten. Een bronkritiek-les krijgt een AI-antwoord als extra te beoordelen 'bron'. Een mediawijsheid-les over beeldmanipulatie krijgt een synthetisch-media-blok. Een zoekopdracht krijgt de vergelijkingsvraag: wat vond de zoekmachine, wat zei de AI-samenvatting, en waar wijken ze af? Updaten in plaats van bijbouwen scheelt lestijd én laat leerlingen de samenhang zien.",
      "mentalModel": {
        "naam": "Van echtheidscheck naar herkomstcheck",
        "beschrijving": "De oude vraag bij een tekst, foto of filmpje was: 'is dit echt?' — te beantwoorden door goed kijken. Die vraag is dood: synthetische media zijn niet meer betrouwbaar van echt te onderscheiden met het blote oog. De houdbare vraag is: 'wat is de herkomst?' — wie publiceerde dit het eerst, in welke context, en bevestigt een onafhankelijke partij het? Een leerling die bij elk opvallend bericht of beeld reflexmatig naar herkomst vraagt in plaats van naar uiterlijk kijkt, is weerbaar — wat de generatietechniek volgend jaar ook kan."
      },
      "kernbegrippen": [
        {
          "term": "Raadplegen versus genereren",
          "uitleg": "Een zoekmachine verwijst naar bestaande bronnen met vindplaats; generatieve AI bouwt een nieuw antwoord zonder afzender. Twee verschillende handelingen die elk een eigen controle vragen — leerlingen halen ze door elkaar."
        },
        {
          "term": "Synthetische media",
          "uitleg": "Door AI gegenereerd of gemanipuleerd beeld, geluid of video — deepfakes, stemkloons, gegenereerde foto's. Niet betrouwbaar met het oog te detecteren; weerbaarheid zit in herkomst- en contextdenken."
        },
        {
          "term": "Herkomstcheck",
          "uitleg": "De houdbare verificatiestrategie voor beeld en bericht: wie publiceerde dit het eerst, in welke context, en bevestigt een onafhankelijke bron het? Vervangt de doodlopende echtheidscheck ('zie ik artefacten?')."
        },
        {
          "term": "Paniekdidactiek",
          "uitleg": "Lessen die vooral schok en angst produceren ('niets is meer echt'). Effect: cynisme en passiviteit in plaats van vaardigheid. Het alternatief: leerlingen een handelingsroutine geven die werkt, plus de ervaring dat ze hem kunnen toepassen."
        },
        {
          "term": "Koppelkans",
          "uitleg": "Een bestaande les of opdracht in het curriculum die met een kleine ingreep AI-geletterdheid meeneemt — bronkritiek-les, mediawijsheid-project, zoekopdracht. Updaten in plaats van bijbouwen."
        }
      ]
    },
    "learningGoals": [
      "Je inventariseert welk informatievaardigheden- en mediawijsheid-onderwijs er al is in jouw school of opleiding, en wie het geeft.",
      "Je benoemt per bestaand onderdeel wat generatieve AI eraan verandert: wat blijft geldig, wat is achterhaald, wat ontbreekt.",
      "Je ontwerpt één geüpdatete les waarin een bestaande bronkritiek- of mediawijsheidsopdracht een AI-component krijgt.",
      "Je ontwerpt een deepfake-werkvorm die herkomstdenken traint en weerbaar maakt zonder paniekdidactiek of detectie-illusie."
    ],
    "scenario": {
      "title": "Werksituatie",
      "context": "Jouw school of opleiding heeft her en der informatievaardigheden-onderwijs: een mediathecaris die brugklaslessen geeft, een collega Nederlands die bronvermelding behandelt, een mentor-les over nepnieuws, een onderzoekslijn in de bovenbouw of propedeuse. Niemand heeft het overzicht en AI komt er overal doorheen. Jij gaat het overzicht maken voor jouw eigen omgeving, één les concreet updaten en de afstemming starten met degene die het meeste raakvlak heeft.",
      "role": "Docent, mentor of mediacoach · vo, mbo of hbo",
      "tools": "Curriculum/PTA of studiehandleiding · contact met mediathecaris of mediacoach · AI-tool met schoolaccount voor materiaal"
    },
    "steps": [
      {
        "title": "Inventariseren — wat staat er al?",
        "body": "Breng in kaart welk onderwijs jouw school al heeft dat raakt aan informatievaardigheden, bronkritiek en mediawijsheid. Loop systematisch langs: vaklessen (Nederlands, zaakvakken, onderzoeksvaardigheden), mentorlessen/burgerschap, mediatheek/mediacoach-aanbod, projectweken en externe programma's. Noteer per vondst: wat, wie geeft het, welk leerjaar, en — eerlijk — weet je het zeker of vermoed je het?",
        "time": "10 min",
        "voorbeeld": "Vo-school, inventarisatie van een docent Nederlands: (1) mediatheek-les 'zoeken en vinden', brugklas, mediathecaris — zeker. (2) Bronvermelding bij betoog, 3e klas, sectie Nederlands — zeker, doe ik zelf. (3) Nepnieuws-mentorles, 2e klas, wisselt per mentor — vermoeden, moet ik checken. (4) Profielwerkstuk-begeleiding met bronnenlijst-eis, bovenbouw, decanen + begeleiders — zeker, maar inhoud wisselt sterk.",
        "workspace": {
          "field": "infovaard-inventaris",
          "label": "Mijn inventarisatie",
          "shortLabel": "Inventaris",
          "hint": "Per onderdeel: wat · wie · leerjaar · zeker of vermoeden",
          "placeholder": "1. ... — door ... — leerjaar ... — zeker/vermoeden\n2. ...\n3. ...\n4. ...",
          "rows": 7
        }
      },
      {
        "title": "Per onderdeel: wat verandert AI?",
        "body": "Leg je inventaris langs drie vragen: wat blijft geldig (bronkritiek-principes verouderen niet), wat is achterhaald of onvolledig (een zoekles die AI-antwoorden negeert mist de praktijk van leerlingen), en wat ontbreekt volledig (synthetische media, raadplegen-versus-genereren)? Markeer per onderdeel: houden / updaten / gat. Kies daarna het onderdeel met de beste verhouding tussen impact en moeite — dat wordt jouw update in stap 3.",
        "time": "10 min",
        "voorbeeld": "Mediatheek-les 'zoeken en vinden': principes houden, maar mist volledig dat leerlingen AI raadplegen in plaats van zoeken — status: updaten, hoge impact (hele brugklas), lage moeite (mediathecaris wil graag). Bronvermelding 3e klas: houden + kleine update (hoe vermeld je AI-gebruik?). Nepnieuws-mentorles: verouderd (gaat over fotoshop-tijdperk) — status: updaten met synthetische media. Gat: nergens leert iemand het verschil raadplegen/genereren — meenemen in de mediatheek-update.",
        "workspace": {
          "field": "infovaard-aiveranderingen",
          "label": "Houden / updaten / gat per onderdeel",
          "shortLabel": "AI-impact",
          "hint": "Per onderdeel uit je inventaris: houden, updaten of gat · kies je update-doelwit (impact × moeite)",
          "placeholder": "Onderdeel 1: houden/updaten — want ...\nOnderdeel 2: ...\nGrootste gat: ...\nMijn update-doelwit: ... — want impact ... en moeite ...",
          "rows": 7
        }
      },
      {
        "title": "Eén les updaten — AI-component in een bestaande opdracht",
        "body": "Werk de update uit. Vuistregel: de bestaande les blijft herkenbaar (de eigenaar moet hem blijven willen geven), de AI-component kost maximaal een derde van de lestijd, en hij eindigt in een handelingsregel die leerlingen meenemen. Sterke updatevormen: een AI-antwoord toevoegen als extra te beoordelen 'bron' naast de bestaande bronnen; een vergelijkingsopdracht zoekmachine-versus-AI-samenvatting; een herkomstcheck-oefening bij een viral beeld.",
        "time": "8 min",
        "voorbeeld": "Update van de brugklas-mediatheekles (50 min): eerste 30 minuten blijven gelijk (zoeken, twee bronnen vergelijken). Nieuw blok (15 min): dezelfde vraag aan een AI-chatbot stellen, antwoord naast de twee gevonden bronnen leggen, drie verschillen noteren — heeft het AI-antwoord een maker? een datum? een vindplaats? Afsluitende handelingsregel (5 min, klassikaal geformuleerd): 'een AI-antwoord is een startpunt zonder afzender — voor je het gebruikt, zoek je er minstens één echte bron bij.'",
        "workspace": {
          "field": "infovaard-lesupdate",
          "label": "Mijn geüpdatete les",
          "shortLabel": "Lesupdate",
          "hint": "Wat blijft · nieuw AI-blok (max 1/3 lestijd) · afsluitende handelingsregel",
          "placeholder": "Bestaande les: ...\nWat blijft (min): ...\nNieuw AI-blok (min): ...\nHandelingsregel waarmee leerlingen vertrekken: ...",
          "rows": 7
        }
      },
      {
        "title": "Deepfake-werkvorm ontwerpen — weerbaar zonder bang",
        "body": "Ontwerp een werkvorm van 20-25 minuten rond synthetische media. Drie ontwerpeisen: (1) geen detectie-illusie — train herkomstvragen, niet 'kijk naar de handen'; (2) geen paniek — eindig met wat leerlingen kúnnen doen, niet met wat allemaal nep kan zijn; (3) bescherm de klas — gebruik publiek materiaal of zelf gegenereerd materiaal over publieke figuren of fictieve personen, nooit beelden van leerlingen of collega's, en bespreek expliciet dat deepfakes maken van klasgenoten strafbaar en schadelijk is.",
        "time": "6 min",
        "voorbeeld": "Werkvorm 'Eerst de herkomst' (25 min, 3 havo of mbo): drietallen krijgen drie schermafbeeldingen van virale berichten-met-beeld (door jou voorbereid: één echt, één uit context, één synthetisch — alle drie publieke figuren). Opdracht: per bericht níet oordelen over echtheid, maar drie herkomstvragen beantwoorden: wie plaatste dit het eerst, wat zegt een nieuwscheck-site (aangewezen: bijvoorbeeld een factcheck-rubriek), welke onafhankelijke bron bevestigt het? Oogst: welke vraag gaf het snelst uitsluitsel? Afsluiting: klassengesprek over de regel 'opvallend beeld = eerst herkomst, dan delen' plus het expliciete gesprek over deepfakes van bekenden: maken en doorsturen is strafbaar (smaad, AVG) en beschadigt echte mensen.",
        "workspace": {
          "field": "infovaard-deepfake",
          "label": "Mijn deepfake-werkvorm",
          "shortLabel": "Deepfake-vorm",
          "hint": "Materiaal (publiek/fictief!) · herkomstvragen · oogst · afsluiting incl. strafbaarheid van deepfakes van bekenden",
          "placeholder": "Materiaal (3 voorbeelden, herkomst bekend bij mij): ...\nHerkomstvragen die leerlingen stellen: ...\nOogstvraag: ...\nAfsluiting + norm over deepfakes van klasgenoten: ...",
          "rows": 8
        }
      },
      {
        "title": "Afstemmen — mediacoach, mediathecaris of kartrekker",
        "body": "Plan een gesprek van twintig minuten met de persoon die in jouw school het dichtst op dit thema zit (mediathecaris, mediacoach, ICT-kartrekker, of de collega van het vak waar je les onder valt). Agenda: jouw inventaris delen (zij vullen aan wat jij miste), jouw update voorleggen, en één afspraak maken over wie welk gat oppakt. Geen werkgroep optuigen — één gesprek, één afspraak.",
        "time": "4 min",
        "workspace": {
          "field": "infovaard-afstemming",
          "label": "Mijn afstemmingsgesprek",
          "shortLabel": "Afstemming",
          "hint": "Met wie · wanneer · de ene afspraak die je wilt maken",
          "placeholder": "Gesprek met: ...\nGepland op: ...\nAfspraak die ik voorstel: ...",
          "rows": 3
        }
      }
    ],
    "workedExamples": [
      {
        "title": "Vergelijkingsopdracht zoekmachine versus AI genereren",
        "prompt": "Ontwerp een opdracht van 20 minuten voor 2 havo/vwo waarin leerlingen dezelfde vraag op twee manieren beantwoorden: via een zoekmachine en via een AI-chatbot. Doel: ze ontdekken zelf het verschil tussen raadplegen (bron met vindplaats) en genereren (antwoord zonder afzender). Geef de onderzoeksvraag, het invulschema en de drie nabespreking-vragen. Onderwerp: iets uit aardrijkskunde, thema klimaat.",
        "voorbeeldOutput": "Onderzoeksvraag: 'Hoeveel is de zeespiegel voor de Nederlandse kust sinds 1900 gestegen?'\n\nDeel 1 (8 min): zoek het antwoord via een zoekmachine. Noteer: het antwoord, de site waar het staat, wie die site maakt, en de datum van publicatie.\n\nDeel 2 (5 min): stel dezelfde vraag aan de AI-chatbot. Noteer: het antwoord, de site waar het staat (?), wie het schreef (?), de datum (?).\n\nDeel 3 (7 min, invulschema): zet beide antwoorden naast elkaar. Vergelijk: komen de getallen overeen? Welke kolom heeft lege vakjes — en waarom? Welk antwoord kun je doorgeven aan iemand anders mét bewijs erbij?\n\nNabespreking: (1) Wat kon je bij de zoekmachine wél invullen en bij de AI niet? (2) Betekent een leeg vakje dat het antwoord fout is? (Nee — het betekent dat je het niet kúnt nagaan zonder extra werk.) (3) Wat is dus je regel als je AI gebruikt voor een werkstuk?",
        "commentaar": "De lege vakjes zijn de les: leerlingen ontdekken het verschil tussen raadplegen en genereren doordat het schema het zichtbaar maakt — niemand hoeft het uit te leggen. Nabesprekingsvraag 2 is essentieel om de balans te bewaren: het AI-antwoord kan prima kloppen, het punt is controleerbaarheid. Let bij uitvoering op: sommige AI-tools tonen tegenwoordig wél bronlinks — perfect lesmateriaal, want dan wordt de vervolgvraag 'klik de link: zegt de bron echt wat de AI samenvat?'",
        "tryItYourself": {
          "field": "infovaard-we-vergelijk",
          "label": "Genereer jouw vergelijkingsopdracht",
          "shortLabel": "Eigen vergelijking",
          "hint": "Eén controleerbare vakvraag · invulschema met herkomstkolommen · drie nabesprekingsvragen",
          "example": "Ontwerp een opdracht van 20 minuten voor [groep] waarin leerlingen dezelfde vraag beantwoorden via een zoekmachine én een AI-chatbot, met invulschema (antwoord, site, maker, datum) en drie nabesprekingsvragen. Onderwerp: [vak/thema]."
        }
      },
      {
        "title": "Deepfake-lesmateriaal veilig samenstellen",
        "prompt": "Ik wil voor mijn mbo-klas (niveau 3, marketing) een herkomstcheck-oefening met drie viral berichten: één echt, één echt-beeld-verkeerde-context, één synthetisch. Help me veilig materiaal samenstellen: (1) welke soorten publiek materiaal kan ik gebruiken zonder personen te schaden, (2) hoe documenteer ik per voorbeeld de werkelijke herkomst zodat ik de oogst kan begeleiden, (3) welke fout moet ik vermijden bij het tonen van het synthetische voorbeeld?",
        "voorbeeldOutput": "(1) Veilige materiaalsoorten: factcheck-archieven van nieuwsredacties (zij documenteren herkomst al), bekende historische gevallen van uit-context-beeld (natuurrampen, demonstraties), en synthetisch beeld dat je zelf genereert van een fictief persoon of product — voor een marketingklas extra passend: een nep-productfoto of een gegenereerde 'tevreden klant'. Vermijd: actuele politieke deepfakes (polariseert de les weg van de vaardigheid) en alles met herkenbare privépersonen.\n\n(2) Documentatie per voorbeeld: originele vindplaats + datum, eerste verspreider, welke factcheck of bron de werkelijke status bevestigt, en de zoekstappen waarmee leerlingen dat zelf kunnen vinden — zodat jij tijdens de oogst kunt zeggen 'welke stap bracht je daar?'\n\n(3) De fout om te vermijden: het synthetische voorbeeld als 'spot de fout'-puzzel presenteren. Zodra leerlingen artefacten gaan zoeken (rare vingers, vage randen), leer je ze een detectiestrategie die volgend jaar niet meer werkt — en die faalt tegen goede fakes van nu. Toon het beeld, laat de herkomstvragen het werk doen, en benoem expliciet: 'aan dit beeld zelf kun je het niet zien — daarom vroegen we naar herkomst.'",
        "commentaar": "Punt 3 is het didactische scharnier van elke deepfake-les: de verleiding om 'kijk-trucs' te leren is groot omdat ze direct succes geven, maar je traint een vaardigheid met houdbaarheidsdatum. De marketingcontext biedt hier een kans die je niet moet laten liggen: deze studenten gaan zelf synthetisch beeld máken in hun beroep — verbind de les dus aan de beroepsethiek: wat vermeld je als een productfoto gegenereerd is?",
        "tryItYourself": {
          "field": "infovaard-we-materiaal",
          "label": "Stel jouw veilige materiaal samen",
          "shortLabel": "Eigen materiaal",
          "hint": "Drie voorbeelden (echt / uit context / synthetisch) · herkomst gedocumenteerd · geen privépersonen",
          "example": "Ik wil voor [groep] een herkomstcheck-oefening met drie viral berichten: één echt, één uit context, één synthetisch. Help me veilig materiaal samenstellen, met documentatie van de werkelijke herkomst en de valkuilen bij het tonen."
        }
      },
      {
        "title": "AI-bronvermelding-afspraak voor werkstukken formuleren",
        "prompt": "Mijn 3e klassen leren bronvermelding bij het betoog. Ik wil daar een werkbare afspraak aan toevoegen voor AI-gebruik. Formuleer drie varianten van een AI-vermeldingsafspraak (licht / midden / uitgebreid), elk in leerlingtaal, en adviseer welke past bij een eerste kennismaking. De afspraak moet uitvoerbaar zijn zonder controle-illusie: ik kan niet bewijzen wat ze deden, dus de afspraak moet eerlijkheid belonen.",
        "voorbeeldOutput": "Licht: 'Onder je bronnenlijst staat één zin: ik heb voor dit betoog wel/geen AI gebruikt, en zo ja: waarvoor.' \n\nMidden: 'Onder je bronnenlijst staan drie regels: welke AI-tool, wat je ermee deed (ideeën, structuur, tekst verbeteren, tekst schrijven), en wat je daarna zelf hebt gecontroleerd of veranderd.'\n\nUitgebreid: 'Je levert naast je betoog een AI-logboekje in: per gebruik de prompt, wat je overnam, wat je verwierp en waarom.'\n\nAdvies voor een eerste kennismaking: midden. De lichte variant levert alleen ja/nee op (geen leerwaarde, wel afvink-cultuur), de uitgebreide is bij een eerste keer zo veel werk dat hij oneerlijkheid uitlokt. De midden-variant is in twee minuten in te vullen en — belangrijker — de derde regel ('wat heb je zelf gecontroleerd') stuurt het gedrag dat je wilt: AI-gebruik mág, klakkeloos overnemen niet. Beloon eerlijke vermeldingen expliciet in je feedback en beoordeel de vermelding zelf nooit negatief — anders leer je de klas binnen één opdracht dat verzwijgen loont.",
        "commentaar": "De slotzin van het advies is de kern: een vermeldingsafspraak staat of valt met wat er gebeurt na een eerlijke vermelding. Eén leerling die nadeel ervaart van eerlijkheid, en de hele klas leert zwijgen. Dit raakt vooruit aan les 3.5 (klas-afspraken): vermelding is geen opsporingsinstrument maar een gespreksopener. Neem je gekozen variant op in de opdrachtinstructie zelf, niet als losse mededeling — afspraken in de instructie worden serieuzer genomen.",
        "tryItYourself": {
          "field": "infovaard-we-vermelding",
          "label": "Formuleer jouw vermeldingsafspraak",
          "shortLabel": "Eigen afspraak",
          "hint": "Drie varianten in leerlingtaal · kies wat past · eerlijkheid moet lonen",
          "example": "Mijn [groep] leert bronvermelding bij [opdracht]. Formuleer drie varianten van een AI-vermeldingsafspraak (licht/midden/uitgebreid) in leerlingtaal en adviseer welke past — uitvoerbaar zonder controle-illusie, eerlijkheid moet lonen."
        }
      }
    ],
    "vakvariaties": [
      {
        "vak": "Nederlands en moderne vreemde talen",
        "body": "Bronvermelding, betoog en leesvaardigheid zijn jouw natuurlijke koppelkansen. Voeg aan elke bestaande bronnenopdracht de AI-vermeldingsafspraak toe en gebruik AI-samenvattingen van teksten als materiaal voor close reading: wat liet de samenvatting weg, en verandert dat de strekking?"
      },
      {
        "vak": "Zaakvakken",
        "body": "Bronkritiek is je kerninventaris — de update is het toevoegen van bronloze antwoorden en synthetisch beeld als nieuwe categorieën. Historisch beeldmateriaal naast gegenereerd 'historisch' beeld leggen is een sterke werkvorm: waarom is het tweede geen bron, ook als het overtuigender oogt?"
      },
      {
        "vak": "Mentoraat en burgerschap",
        "body": "Hier landt de sociale kant: deepfakes in de klas-appgroep, gedeelde berichten zonder check, groepsdruk om door te sturen. Werk samen met de vakdocenten: jij doet de normen en het gesprek (wat doet het met iemand, wat is strafbaar), zij doen de vaardigheid (herkomstcheck). Samen is het een leerlijn, apart zijn het twee halve lessen."
      },
      {
        "vak": "Mbo · alle richtingen",
        "body": "Koppel aan burgerschap (kritische denkvaardigheden staan in de kwalificatie-eisen) én aan de beroepscontext: welke informatie vertrouwt een zorgmedewerker, monteur of marketeer, en wat kost een fout? Studenten die zelf synthetische content gaan maken (media, marketing) krijgen de makerskant erbij: wat vermeld je, wat is misleiding?"
      },
      {
        "vak": "Hbo · propedeuse en onderzoekslijnen",
        "body": "De koppelkans is de onderzoeksleerlijn: informatievaardigheid heet hier al snel 'wetenschappelijke informatievaardigheden'. Update de bestaande bibliotheek-instructie met AI-zoektools en bronloze antwoorden, en maak het natrekken van AI-gegeven referenties een standaardoefening in periode 1."
      },
      {
        "vak": "Kunstvakken en CKV",
        "body": "Synthetische media zijn hier niet alleen risico maar ook materiaal en onderwerp. Laat studenten gegenereerd beeld maken en vervolgens zelf de herkomstvraag beantwoorden vanaf de andere kant: wat zou een kijker moeten weten over dit beeld? Maker-perspectief verdiept het kijker-perspectief."
      }
    ],
    "valkuilen": [
      {
        "titel": "Een nieuw vak bouwen naast wat er al staat",
        "watGebeurtEr": "AI-geletterdheid wordt een eigen lessenreeks naast de bestaande mediawijsheid-lessen. Dubbele lestijd, geen samenhang, en leerlingen behandelen het als twee losse vinkjes — terwijl het één vaardigheid is.",
        "fix": "Altijd eerst inventariseren, dan updaten. Pas als een gat écht nergens onder te brengen is, bouw je iets nieuws — en dan zo klein mogelijk."
      },
      {
        "titel": "Detectie-trucs aanleren",
        "watGebeurtEr": "De les leert 'kijk naar de handen, de oogjes, de schaduwen'. Leerlingen voelen zich vaardig — tot de generatietechniek die artefacten een jaar later niet meer maakt. Erger: goede fakes 'slagen' nu voor hun test.",
        "fix": "Train herkomstvragen (wie plaatste dit eerst, wat zegt een onafhankelijke bron) in plaats van kijk-trucs. Benoem expliciet in de les: aan het beeld zelf kun je het niet betrouwbaar zien."
      },
      {
        "titel": "Paniekdidactiek",
        "watGebeurtEr": "De les is een parade van schokvoorbeelden: alles kan nep zijn, niets is te vertrouwen. Leerlingen worden niet kritisch maar cynisch — 'het is toch allemaal nep' is net zo onkritisch als alles geloven, en het ondermijnt ook vertrouwen in échte informatie.",
        "fix": "Eindig elke les met handelingsperspectief: de herkomstroutine werkt, en leerlingen hebben hem net zelf met succes toegepast. Verhouding vuistregel: één schokvoorbeeld, drie oefenkansen."
      },
      {
        "titel": "Lesmateriaal dat de klas zelf beschadigt",
        "watGebeurtEr": "Een docent maakt voor het 'leereffect' een deepfake van een collega of laat leerlingen er een maken van elkaar. Het materiaal gaat een eigen leven leiden — wat begon als les is nu een incident met echte schade.",
        "fix": "IJzeren regel: nooit synthetisch materiaal van leerlingen, collega's of andere herkenbare privépersonen — ook niet met toestemming, ook niet 'alleen voor de les'. Publieke figuren uit gedocumenteerde factchecks of fictieve personen volstaan didactisch volledig."
      },
      {
        "titel": "De mediathecaris ontdekken nadat je alles hebt gebouwd",
        "watGebeurtEr": "Je ontwerpt drie weken aan een prachtige lessenreeks en hoort dan dat de mediacoach een bijna identiek programma draait in een ander leerjaar. Dubbel werk, en de collega voelt zich gepasseerd.",
        "fix": "Het afstemmingsgesprek (stap 5) komt vóór het grote bouwen, niet erna. Twintig minuten met de juiste collega bespaart weken en levert meestal materiaal én een bondgenoot op."
      }
    ],
    "geoefendSpoor": {
      "eyebrow": "Voor de geoefende docent",
      "titel": "Maak de informatievaardigheden-kaart van je hele school",
      "beschrijving": "Heb je jouw eigen omgeving geïnventariseerd en één les geüpdatet? Trek het breed: maak met de mediathecaris/mediacoach en één collega per afdeling de complete kaart — welk informatievaardigheden- en mediawijsheid-onderwijs bestaat er, per leerjaar, met AI-status (houden/updaten/gat). Leg de kaart naast de SLO-kerndoelen digitale geletterdheid en markeer wat in augustus 2027 gedekt moet zijn. Investering: twee gesprekken plus een middag uitwerken. Opbrengst: hét werkdocument waarmee je school van losse lessen naar een doorlopende lijn gaat — en jij van docent naar kartrekker.",
      "opdracht": "Lever vóór het einde van het schooljaar de kaart op (onderdelen × leerjaren, met eigenaar en AI-status per cel) en presenteer hem samen met de mediacoach aan de schoolleiding, inclusief de drie urgentste gaten."
    },
    "eindcriteria": [
      {
        "criterium": "Inventarisatie",
        "onder": "Alleen het eigen vak bekeken, of aannames zonder check.",
        "op": "Minstens vier onderdelen in kaart met wie, leerjaar en zeker/vermoeden-status.",
        "boven": "+ Vermoedens nagevraagd bij de eigenaren en inventaris gecorrigeerd."
      },
      {
        "criterium": "AI-impact-analyse",
        "onder": "Alles moet anders, of alles kan blijven — geen onderscheid.",
        "op": "Per onderdeel houden/updaten/gat met motivering, en een gekozen update-doelwit.",
        "boven": "+ Keuze onderbouwd op impact × moeite en getoetst bij de eigenaar van het onderdeel."
      },
      {
        "criterium": "Lesupdate",
        "onder": "Compleet nieuwe les naast het bestaande aanbod.",
        "op": "Bestaande les geüpdatet: herkenbaar gebleven, AI-blok max 1/3 lestijd, eindigt in handelingsregel.",
        "boven": "+ Update besproken met de eigenaar van de les en door die persoon omarmd."
      },
      {
        "criterium": "Deepfake-werkvorm",
        "onder": "Detectie-trucs of schokvoorbeelden zonder handelingsperspectief, of risicovol materiaal.",
        "op": "Herkomstvragen centraal, veilig materiaal met gedocumenteerde herkomst, afsluiting met norm en routine.",
        "boven": "+ Werkvorm uitgevoerd en bijgesteld op wat leerlingen werkelijk deden."
      },
      {
        "criterium": "Afstemming",
        "onder": "Solo gebouwd zonder contact met mediathecaris/mediacoach.",
        "op": "Gesprek gepland met de juiste collega, met inventaris en één voorgestelde afspraak.",
        "boven": "+ Afspraak gemaakt en taakverdeling vastgelegd voor minstens één gat."
      }
    ],
    "reflection": [
      "Wanneer heb jij voor het laatst zelf een bericht of beeld gedeeld zonder herkomstcheck — en wat maakte dat je hem oversloeg? Wat zegt dat over wat je van leerlingen vraagt?",
      "Cynisme ('alles is toch nep') is bij jongeren een reëler risico dan naïviteit. Waar zie je dat in jouw klassen al, en wat in jouw lesontwerp werkt er actief tegen?",
      "Welk deel van het klassieke informatievaardigheden-onderwijs durf jij hardop achterhaald te noemen in je sectie — en wat zet je ervoor in de plaats?"
    ],
    "checklist": [
      "Inventarisatie gemaakt: minstens vier onderdelen met eigenaar, leerjaar en status",
      "Per onderdeel bepaald: houden, updaten of gat — met update-doelwit gekozen",
      "Eén bestaande les geüpdatet met AI-blok (max 1/3 lestijd) en handelingsregel",
      "Deepfake-werkvorm ontworpen rond herkomstvragen, zonder detectie-trucs",
      "Materiaal veilig samengesteld: publiek/fictief, herkomst gedocumenteerd, geen privépersonen",
      "Norm over deepfakes van bekenden expliciet in de afsluiting opgenomen",
      "Afstemmingsgesprek gepland met mediathecaris, mediacoach of kartrekker",
      "AVG-check: geen beelden of gegevens van leerlingen of collega's in lesmateriaal of prompts"
    ],
    "verderLezen": [
      {
        "titel": "Conceptkerndoelen digitale geletterdheid — domein digitale informatie en media",
        "bron": "SLO",
        "jaar": 2024,
        "link": "https://www.slo.nl",
        "waarom": "De wettelijke kapstok (augustus 2027) waaronder informatievaardigheden, mediawijsheid en AI samenkomen — leg je schoolkaart hiernaast."
      },
      {
        "titel": "Artificial intelligence — dossier met artikelen over deepfakes en mediawijsheid",
        "bron": "Kennisnet",
        "jaar": 2025,
        "link": "https://www.kennisnet.nl/artificial-intelligence/",
        "waarom": "Nederlandstalige, schoolgerichte uitleg over synthetische media en wat scholen er didactisch mee kunnen."
      },
      {
        "titel": "Civic Online Reasoning — lesmateriaal voor herkomstdenken",
        "bron": "Stanford History Education Group",
        "jaar": 2021,
        "link": "https://cor.inquirygroup.org",
        "waarom": "De onderzoeksbasis en vrij beschikbare opdrachten voor lateral reading — het fundament onder de herkomstcheck."
      },
      {
        "titel": "AI Competency Framework for Teachers — Human-centred mindset",
        "bron": "UNESCO",
        "jaar": 2024,
        "link": "https://www.unesco.org/en/articles/ai-competency-framework-teachers",
        "waarom": "Plaatst mediawijsheid en kritisch denken in het bredere docentcompetentie-kader — de dimensie waar deze les het zwaarst op leunt."
      }
    ]
  },
  "check-mod3": {
    "format": "kennischeck",
    "summary": "Tussencheck Module 03. Vijf vragen over de didactische kern van 3.1 t/m 3.4: kerndoelen en leerlijn, AI uitleggen zonder misconcepties te planten, verificatie-didactiek en herkomstdenken. Klaar voor de casusbespreking en het bouwen van je eigen les.",
    "duration": {
      "total": "12 min",
      "blocks": [
        {
          "label": "5 vragen",
          "min": 8
        },
        {
          "label": "Advies",
          "min": 4
        }
      ]
    },
    "learningGoals": [
      "Je test of de bouwstenen van een leerlijn (kerndoelen, AI-GO-dimensies, beginsituatie) zijn geland.",
      "Je herkent de didactische volgorde voor misconcepties en de kern van de verificatieroutine.",
      "Je weet of je klaar bent voor de casusbespreking (3.5) en het bouwen van eigen lesmateriaal (3.6)."
    ],
    "scenario": {
      "title": "Halverwege Module 03",
      "context": "Vijf vragen na de lessen 3.1 t/m 3.4. Per vraag directe uitleg. Advies aan het einde: door naar 3.5 of even terug.",
      "role": "Voor jezelf",
      "tools": "Geen"
    },
    "checkTitle": "Even kijken wat is geland tot en met 3.4.",
    "checkItems": [
      {
        "type": "Meerkeuze · leerlijn-eisen",
        "q": "Les 3.1 stelt drie eisen aan een leerlijn AI-geletterdheid. Welke drie?",
        "options": [
          {
            "label": "Gekoppeld aan doelen, gefaseerd in opbouw, belegd bij vakken en personen.",
            "explain": "Klopt. Zonder koppeling is het een grabbelton, zonder fasering een losse verzameling, zonder belegging blijft het van niemand."
          },
          {
            "label": "Digitaal, klassikaal en toetsbaar.",
            "explain": "Toetsbaarheid zit in 'bewijs per stap', maar dit is niet de driedeling uit 3.1."
          },
          {
            "label": "Verplicht, jaarlijks en schoolbreed.",
            "explain": "Een leerlijn mag klein beginnen — bij één klas van één docent. Schoolbreed is de vervolgstap, geen eis."
          },
          {
            "label": "Tool-onafhankelijk, leuk en kort.",
            "explain": "Tool-onafhankelijkheid is een goede test uit 3.1, maar 'leuk en kort' zijn geen leerlijn-eisen."
          }
        ],
        "correct": 0
      },
      {
        "type": "Meerkeuze · AI-GO-dimensies",
        "q": "Welke twee AI-GO-dimensies blijken in concept-leerlijnen van docenten het vaakst onderbelicht?",
        "options": [
          {
            "label": "Kennis en vaardigheden.",
            "explain": "Andersom: deze twee zijn bijna altijd gedekt — lessen over werking en gebruik zijn het makkelijkst te bedenken."
          },
          {
            "label": "Attitudes en ethisch bewustzijn.",
            "explain": "Klopt. Kritische houding en ethische weging hangen vaak aan geen enkel concreet lesmoment — daarom mapt 3.1 elke leerlijn expliciet op alle vier de dimensies."
          },
          {
            "label": "Vaardigheden en ethisch bewustzijn.",
            "explain": "Vaardigheden zijn juist meestal goed gedekt; het gat zit bij attitudes én ethiek."
          },
          {
            "label": "Kennis en attitudes.",
            "explain": "Kennis is doorgaans gedekt; het patroon is dat de twee 'zachte' dimensies samen wegvallen."
          }
        ],
        "correct": 1
      },
      {
        "type": "Meerkeuze · misconceptie-didactiek",
        "q": "Een collega wil de klas uitleggen hoe AI werkt en opent met een heldere presentatie over taalmodellen. Wat zegt les 3.2 over deze aanpak?",
        "options": [
          {
            "label": "Prima — een goede uitleg vooraf voorkomt dat misconcepties ontstaan.",
            "explain": "Misconcepties zíjn er al door dagelijks gebruik. Uitleg eroverheen wordt een laagje vernis op het oude model."
          },
          {
            "label": "Riskant — zonder conflict-ervaring vooraf plakt het nieuwe woordje op het oude model.",
            "explain": "Klopt. De volgorde is uitlokken → confronteren → verklaren: eerst de voorspelling laten stuklopen, dan pas de uitleg als oplossing van het raadsel."
          },
          {
            "label": "Fout — docenten zonder informatica-achtergrond moeten de werking niet uitleggen.",
            "explain": "Juist wel: drie jargonvrije kernzinnen volstaan en elke docent kan die bouwen."
          },
          {
            "label": "Prima — mits de presentatie de term 'hallucineren' vermijdt.",
            "explain": "Jargon vermijden is goed, maar lost het volgorde-probleem niet op: zonder conflict-ervaring landt het model niet."
          }
        ],
        "correct": 1
      },
      {
        "type": "Meerkeuze · verificatieroutine",
        "q": "Een leerling 'controleert' een AI-antwoord door dezelfde vraag nogmaals aan ChatGPT te stellen. Wat is volgens les 3.3 het kernprobleem?",
        "options": [
          {
            "label": "Niets — twee keer hetzelfde antwoord is een redelijke bevestiging.",
            "explain": "Nee: dezelfde voorspelmachine herhaalt dezelfde patronen. Consistentie is geen juistheid."
          },
          {
            "label": "De leerling had een andere chatbot moeten gebruiken.",
            "explain": "Ook andere chatbots zijn op vergelijkbare data getraind — nog steeds geen onafhankelijke bron."
          },
          {
            "label": "Verificatie vereist een onafhankelijke bron — buiten het AI-systeem, niet een herkauwing ervan.",
            "explain": "Klopt. Stap 2 van de routine (ernaast leggen) definieert onafhankelijk expliciet: naslag, vakbronnen, niet nóg een keer vragen."
          },
          {
            "label": "De leerling had de prompt specifieker moeten formuleren.",
            "explain": "Betere prompts geven betere output, maar lossen het verificatieprobleem niet op."
          }
        ],
        "correct": 2
      },
      {
        "type": "Waar of niet waar · deepfake-didactiek",
        "q": "De beste deepfake-les leert leerlingen visuele artefacten herkennen: rare handen, vage randen, onnatuurlijke ogen. Waar of niet waar?",
        "options": [
          {
            "label": "Niet waar — detectie-trucs verouderen; train herkomstvragen die houdbaar blijven.",
            "explain": "Klopt. Les 3.4: de artefacten van vandaag zijn volgend jaar weg. 'Wie plaatste dit het eerst, wat bevestigt een onafhankelijke bron?' werkt ongeacht de generatietechniek."
          },
          {
            "label": "Waar — leerlingen moeten leren zien wat nep is.",
            "explain": "Dat klinkt logisch maar bouwt een detectie-illusie: goede fakes slagen voor de kijk-test, en de trucs verouderen met elke modelgeneratie."
          }
        ],
        "correct": 0
      }
    ],
    "reflection": [
      "Welke van de vier lessen (leerlijn, uitleggen, verificatie, informatievaardigheden) heeft al iets concreets in jouw lespraktijk veranderd — en welke nog niet? Wat is daar de drempel?",
      "Je gaat zo door naar klas-afspraken (3.5) en eigen lesmateriaal (3.6). Welke bouwsteen uit 3.1–3.4 moet je daarvoor nog even terughalen?"
    ],
    "checklist": [
      "Vijf vragen beantwoord — uitleg per antwoord gelezen",
      "Bij minder dan vier goed: de betreffende les(sen) teruggekeken",
      "Werkbladen uit 3.1 t/m 3.4 bij de hand voor de komende lessen",
      "Volgende les (3.5 Verantwoord gebruik in de klas) ingepland"
    ]
  },
  "verantwoord-in-de-klas": {
    "format": "casusbespreking",
    "summary": "AI-afspraken die op school werken zijn geen verbodsbordjes — het zijn werkafspraken die leerlingen snappen, mee hebben gemaakt en kunnen naleven. In deze les werk je drie herkenbare casussen door (het werkstuk zonder vermelding in een klas zonder afspraken, de collega met het totaalverbod naast jouw afsprakenaanpak, en de kansenkloof tussen leerlingen mét en zonder AI-toegang thuis), spiegel je elk aan drie perspectieven en twee docentuitspraken, en bouw je een action plan van vier stappen waarmee je vóór de volgende toetsperiode werkbare klas-afspraken hebt — mét je klas gemaakt, niet aan je klas opgelegd.",
    "duration": {
      "total": "55 minuten",
      "blocks": [
        {
          "label": "Aanleiding",
          "min": 5
        },
        {
          "label": "Conceptueel kader",
          "min": 8
        },
        {
          "label": "Casus A bespreken",
          "min": 10
        },
        {
          "label": "Casus B bespreken",
          "min": 10
        },
        {
          "label": "Casus C bespreken",
          "min": 10
        },
        {
          "label": "Action plan vier stappen",
          "min": 8
        },
        {
          "label": "Reflectie",
          "min": 4
        }
      ]
    },
    "opening": {
      "eyebrow": "Aanleiding",
      "aanleiding": "Een docent Nederlands leest een boekverslag dat nét te glad loopt voor de leerling die het inleverde. Er zijn geen klas-afspraken over AI, dus formeel is er niets overtreden — maar er is ook niets geleerd. Eén verdieping hoger hangt bij een collega een A4 op de deur: 'AI = FRAUDE'. Zijn leerlingen gebruiken het gewoon, alleen vertellen ze het hem niet meer. En in de mentorklas vertelt een leerling dat ze thuis geen AI mag gebruiken van haar ouders, terwijl haar buurman een betaald account heeft en er elke avond zijn huiswerk mee 'samen doet'.\n\nDrie scènes, één onderliggende vraag: hoe maak je AI-gebruik in jouw klas bespreekbaar en werkbaar — zonder politieagent te worden en zonder laissez-faire? De verbodscultuur faalt aantoonbaar: het gebruik gaat ondergronds, eerlijke leerlingen worden gestraft en het leergesprek sterft. Maar 'alles mag' faalt net zo hard: leerdoelen verdampen en de leerling met de beste tools wint.\n\nDe uitweg is dezelfde als bij elke klassennorm die werkt: afspraken die leerlingen mee maken, die per situatie verschillen (oefenen is geen toets), en waarin eerlijkheid loont. In deze les bespreek je drie casussen, neem je positie in tegenover collega-uitspraken, en bouw je het action plan waarmee je dit met je eigen klas gaat doen.",
      "waaromNu": "De SLO-kerndoelen (augustus 2027) vragen niet alleen vaardigheden maar ook verantwoord gebruik; het AI-GO-raamwerk zet ethisch bewustzijn als volwaardige dimensie. Kennisnet adviseert scholen expliciet om van incidentenbeleid naar gedragen afspraken te gaan. En de timing is praktisch: elke toetsperiode zonder afspraken produceert nieuwe incidenten die het gesprek verder vergiftigen."
    },
    "conceptueel": {
      "eyebrow": "Conceptueel kader",
      "intro": "Drie spanningsvelden bepalen het gesprek over verantwoord AI-gebruik in de klas. Het eerste: regels versus normen. Een regel ('AI verboden bij werkstukken') is snel opgeschreven en niet te handhaven — je kunt AI-gebruik niet betrouwbaar detecteren, dus de regel selecteert op brutaliteit: wie durft, wint. Een norm ('hier laat je zien wat je zelf kunt, en je bent open over je hulpmiddelen') is langzamer gebouwd maar zelf-dragend: leerlingen die de norm snappen en mee hebben gemaakt, bewaken hem deels zelf. Werkbare klas-afspraken zijn normen met een handvol concrete regels eraan, niet andersom.\n\nHet tweede spanningsveld: integriteit als karakterkwestie versus integriteit als leersituatie-ontwerp. De reflex bij een AI-incident is moreel: deze leerling is oneerlijk. Vruchtbaarder is de ontwerpvraag: welke situatie heb ik gebouwd waarin dit de logische keuze was? Een opdracht die thuis, ongezien, op product wordt beoordeeld, zonder afspraken over hulpmiddelen, nodigt uit tot maximale hulp — dat is geen karakterfout van de leerling maar een ontwerpfout van de opdracht. Integriteit onderwijzen betekent twee dingen tegelijk: het gesprek voeren over eerlijkheid én situaties ontwerpen waarin eerlijkheid een begaanbare weg is. Wie alleen het eerste doet, preekt; wie alleen het tweede doet, ontloopt het vormingsdoel.\n\nHet derde spanningsveld: gelijke regels versus gelijke kansen. 'Iedereen mag AI gebruiken' klinkt eerlijk, maar leerlingen verschillen in toegang (gratis versus betaalde accounts, wel of geen device of thuisondersteuning), in vaardigheid en in wat ouders toestaan. Afspraken die toegang veronderstellen, vergroten de kloof stilzwijgend. De school die AI-gebruik serieus toestaat, organiseert ook de toegang — schoolaccounts, oefentijd in de les — of begrenst opdrachten zo dat thuisvoordeel beperkt weegt.\n\nDe praktische werkregel die alle drie de velden samenbrengt: maak afspraken per situatiesoort (oefenen, huiswerk, werkstuk, toets), maak ze mét de klas, laat eerlijkheid lonen, en herzie ze op een vast moment. Afspraken die nooit herzien worden, zijn binnen een jaar dode letters — de technologie verandert sneller dan het schooljaar.",
      "mentalModel": {
        "naam": "Verkeersregels, geen verbodsborden",
        "beschrijving": "Een stad zonder verkeersregels is chaos; een stad met alleen verbodsborden staat stil. Werkende verkeersregels zeggen wat waar mag (hier 30, daar 100, hier fietsers eerst) en iedereen snapt waarom — daarom houdt men zich er grotendeels aan, ook zonder agent op elke hoek. Klas-afspraken over AI werken zo: per situatie (oefenen, werkstuk, toets) een helder regime met een begrijpelijk waarom, samen vastgesteld. De vraag is nooit 'AI: ja of nee?' maar 'in déze situatie: wat, hoe en met welke openheid?'"
      },
      "kernbegrippen": [
        {
          "term": "Verbodscultuur",
          "uitleg": "Beleid dat op detectie en straf leunt. Faalt dubbel: gebruik gaat ondergronds (detectie is onbetrouwbaar) en eerlijke leerlingen zijn de dupe. Het leergesprek over goed gebruik sterft als eerste."
        },
        {
          "term": "Situatie-afspraken",
          "uitleg": "Afspraken per situatiesoort in plaats van één generieke regel: bij oefenen mag veel, bij een werkstuk geldt vermelding, bij een toets geldt het toetsregime. Leerlingen snappen verschillen — mits het waarom erbij zit."
        },
        {
          "term": "Eerlijkheid laten lonen",
          "uitleg": "De toets voor elke afspraak: wordt een leerling die open is over AI-gebruik daar ooit slechter van? Zo ja, dan leert de klas binnen één opdracht dat zwijgen wint — en is de afspraak dood."
        },
        {
          "term": "Ontwerpfout versus karakterfout",
          "uitleg": "De vraag bij een incident: welke opdracht- en afspraaksituatie maakte dit gedrag logisch? Verschuift de reactie van straffen naar herontwerpen — zonder het normgesprek te schrappen."
        },
        {
          "term": "Toegangskloof",
          "uitleg": "Verschillen in AI-toegang thuis (accounts, devices, ouderregels, vaardigheid). Afspraken die toegang veronderstellen, vergroten de kloof — de school die gebruik toestaat, organiseert ook toegang."
        }
      ]
    },
    "learningGoals": [
      "Je analyseert AI-incidenten als combinatie van normvraag en ontwerpvraag in plaats van als pure fraudekwestie.",
      "Je formuleert per casus een eigen positie tegenover drie perspectieven en twee docentuitspraken — concreet en zonder te vervallen in verbod of laissez-faire.",
      "Je ontwerpt een proces om met je eigen klas situatie-afspraken te maken waarin eerlijkheid loont.",
      "Je weegt de toegangskloof expliciet mee in je afspraken en opdrachtontwerp."
    ],
    "scenario": {
      "title": "Werksituatie",
      "context": "Jouw school heeft nog geen uitgewerkt AI-beleid, of een beleid dat in de praktijk per docent verschilt. Jij wilt niet wachten: vóór de volgende toetsperiode wil je met je eigen klas (of je mentorklas) werkbare afspraken hebben. Je teamleider weet ervan en is benieuwd — wat jij bouwt, kan model staan voor het team. Deze les bespreek je drie casussen die je vrijwel zeker zelf gaat tegenkomen, en bouw je je aanpak.",
      "role": "Docent of mentor · vo, mbo of hbo",
      "tools": "Eigen opdracht- en toetspraktijk · de leerlijn uit 3.1 en de vermeldingsafspraak uit 3.4 als bouwstenen · papier voor het action plan"
    },
    "casusbesprekingTitle": "Drie casussen, drie perspectieven, vier stappen naar klas-afspraken.",
    "casusbesprekingIntro": "Per casus zie je drie perspectieven en twee uitspraken van fictieve collega's. Eerst formuleer je je eigen reactie, dan kies je positie. Daarna vertaal je de inzichten in een action plan van vier stappen voor jouw eigen klas.",
    "cases": [
      {
        "title": "Casus A — Het boekverslag zonder vermelding, in een klas zonder afspraken",
        "context": "Een leerling uit 4 havo levert een boekverslag in dat opvallend veel beter geschreven is dan zijn eerdere werk: foutloze zinnen, vlotte structuur, maar nauwelijks persoonlijke leeservaring. De docent Nederlands vermoedt fors AI-gebruik. Er zijn in deze klas geen afspraken gemaakt over AI bij opdrachten; in de studiewijzer staat er niets over. Aangesproken zegt de leerling: 'Ik heb AI alleen gebruikt om mijn tekst te verbeteren. Dat doet toch iedereen? Het stond nergens dat het niet mocht.' Zijn leesnotities kan hij niet laten zien — 'die heb ik niet bewaard'. De docent staat voor de keuze: cijfer geven, opnieuw laten maken, of escaleren als fraude.",
        "perspectives": [
          {
            "role": "De leerling",
            "view": "Ik snap het probleem niet. Bij wiskunde mag een rekenmachine, bij Nederlands gebruik ik een taalhulp. Niemand heeft ooit gezegd wat wel en niet mag — en nu ik het eerlijk vertel, lijkt het alsof ík de fraudeur ben. Had het dan ergens opgeschreven."
          },
          {
            "role": "De docent",
            "view": "Hij heeft formeel gelijk: er stond niets. Dat is mijn omissie, niet de zijne. Maar het leerdoel — zelf formuleren, zelf reflecteren op wat je las — is wél verdampt, en daar gaat het mij om. Als ik dit cijfer gewoon meetel, zeg ik tegen de hele klas dat het leerdoel niet bestaat. Als ik straf, straf ik op een regel die er niet was."
          },
          {
            "role": "De teamleider",
            "view": "Dit incident is een symptoom. Als één docent dit nu 'oplost' met een sanctie, krijgen we volgende maand hetzelfde gesprek bij geschiedenis en biologie. Wat ik nodig heb is geen vonnis maar een werkwijze: welke afspraken, hoe gemaakt, hoe gecommuniceerd — zodat de volgende casus een leergesprek is in plaats van een conflict."
          }
        ],
        "statements": [
          {
            "author": "Collega 1",
            "quote": "Geen regel, geen overtreding. Ik zou het cijfer gewoon geven, mijn studiewijzer aanpassen, en verder gaan. Leergeld voor ons, niet voor hem.",
            "agreePrompt": "Stel: je geeft het cijfer. Welk gesprek voer je dan wél met deze leerling — en welke ene zin zorgt dat het leerdoel weer in beeld komt zonder verwijt?"
          },
          {
            "author": "Collega 2",
            "quote": "Cijfer geven is capituleren. Ik laat hem het verslag mondeling toelichten — vijf minuten over zijn leeservaring. Wat hij dan laat zien, dát beoordeel ik.",
            "agreePrompt": "Welke twee vragen zou jij in zo'n toelichtingsgesprek stellen die leeservaring meten in plaats van AI-gebruik opsporen? Formuleer ze concreet."
          }
        ],
        "workspaceFields": {
          "reactionField": {
            "field": "verantwoord-casus-a-reactie",
            "label": "Jouw eerste reactie op casus A",
            "shortLabel": "Reactie A",
            "hint": "Drie regels: wat zie je hier, wat is je eerste stap richting deze leerling, welk gat in jouw eigen praktijk legt dit bloot",
            "placeholder": "Wat ik hier zie: ...\nMijn eerste stap richting de leerling: ...\nWelk gat in mijn eigen praktijk: ...",
            "rows": 6
          },
          "positionField": {
            "field": "verantwoord-casus-a-positie",
            "label": "Jouw positie tegenover de twee collega-uitspraken",
            "shortLabel": "Positie A",
            "hint": "Per uitspraak: in hoeverre eens of oneens, en wat je concreet doet in je eigen praktijk",
            "placeholder": "Bij collega 1: ... — wat ik in mijn praktijk doe: ...\nBij collega 2: ... — wat ik in mijn praktijk doe: ...",
            "rows": 6
          }
        }
      },
      {
        "title": "Casus B — Jouw afsprakenaanpak naast het totaalverbod van de collega",
        "context": "Jij hebt met je 3 vmbo-klas afspraken gemaakt: AI mag bij het voorbereiden en oefenen, bij ingeleverd werk hoort een korte vermelding, en bij toetsen is het uit. Het werkt — leerlingen zijn opener geworden en het gesprek over goed gebruik komt op gang. Maar je collega die dezelfde klas Engels geeft, hanteert een totaalverbod: 'AI is fraude, punt.' Leerlingen beklagen zich bij jou: 'Bij u mag het wél — wat is het nou?' Eén leerling is bij Engels betrapt op AI-gebruik bij een oefenopdracht en heeft een 1 gekregen; bij jou had diezelfde handeling binnen de afspraken gepast. De collega zegt in de teamkamer, half grappend: 'Jij maakt het ze wel makkelijk, hè.' De teamleider hoort het aan en zegt voorlopig niets.",
        "perspectives": [
          {
            "role": "De leerlingen",
            "view": "We willen best regels volgen, maar dan moeten het wel dézelfde regels zijn. Nu hangt het ervan af welk lokaal je binnenloopt. En die 1 bij Engels voelt oneerlijk: het was een óefenopdracht, en bij u hadden we juist geleerd hoe je AI daarbij goed gebruikt."
          },
          {
            "role": "De collega",
            "view": "Ik zie elke dag wat dat spul aanricht: niemand schrijft nog zelf een zin. Engels leer je door te doen, niet door te laten genereren. Misschien is mijn verbod streng, maar het is tenminste duidelijk. En eerlijk: ik heb geen tijd en geen zin om per opdracht regimes te bedenken — ik moet ook gewoon lesgeven."
          },
          {
            "role": "De teamleider",
            "view": "Twee docenten, twee culturen, één klas — dit gaat schuren tot het knapt. Ik ga geen winnaar aanwijzen: de één heeft de duidelijkheid, de ander het leergesprek. Wat ik wil is dat ze samen één begrijpelijke lijn voor deze klas formuleren, en dat de uitkomst niet afhangt van wie het hardst roept in de teamkamer."
          }
        ],
        "statements": [
          {
            "author": "Collega 1",
            "quote": "Ieder zijn vak, ieder zijn regels. Leerlingen kunnen prima omgaan met verschillen tussen docenten — dat is bij huiswerk en te-laat-komen ook zo.",
            "agreePrompt": "Waar ligt voor jou de grens tussen gezonde vakverschillen en verwarrende willekeur? Noem één AI-afspraak die wat jou betreft schoolbreed gelijk moet zijn, en één die per vak mag verschillen."
          },
          {
            "author": "Collega 2",
            "quote": "Die collega met het verbod bereik je niet met raamwerken. Vraag hem één ding: wat doe je als je het niet kunt bewijzen? Daar klapt elk verbod op stuk — en dáár begint het echte gesprek.",
            "agreePrompt": "Hoe zou jij dat gesprek met de verbods-collega openen — eerste twee zinnen, letterlijk — zonder dat het belerend wordt? Schrijf ze uit."
          }
        ],
        "workspaceFields": {
          "reactionField": {
            "field": "verantwoord-casus-b-reactie",
            "label": "Jouw eerste reactie op casus B",
            "shortLabel": "Reactie B",
            "hint": "Drie regels: wat speelt hier, wat doe je richting de leerlingen met die 1, wat doe je richting de collega",
            "placeholder": "Wat speelt hier: ...\nRichting de leerlingen: ...\nRichting de collega: ...",
            "rows": 6
          },
          "positionField": {
            "field": "verantwoord-casus-b-positie",
            "label": "Jouw positie tegenover de twee collega-uitspraken",
            "shortLabel": "Positie B",
            "hint": "Per uitspraak: in hoeverre eens of oneens, en wat dat betekent voor hoe jij de afstemming aanpakt",
            "placeholder": "Bij collega 1: ... — wat dit betekent voor mijn aanpak: ...\nBij collega 2: ... — wat dit betekent voor mijn aanpak: ...",
            "rows": 6
          }
        }
      },
      {
        "title": "Casus C — De kansenkloof: betaald account versus geen toegang",
        "context": "In jouw mentorklas (mbo niveau 4, eerste jaar) wordt AI-gebruik bij opdrachten steeds normaler — conform de afspraken die je hebt gemaakt. Dan valt je iets op. Drie studenten leveren consequent werk in dat met een betaald AI-abonnement is verfijnd ('mijn vader heeft het voor zijn werk, ik mag het gebruiken'). Twee studenten hebben thuis geen eigen laptop en doen alles op hun telefoon in de bus. Eén studente vertelt dat ze van haar ouders geen AI mag gebruiken — levensbeschouwelijke bezwaren tegen 'machines die denken'. De opdrachten wegen mee voor het portfolio. Formeel houdt iedereen zich aan de afspraken; feitelijk concurreren ze met ongelijk gereedschap. Op de teamdag stelt iemand voor: 'Dan verbieden we AI-gebruik thuis toch gewoon — gelijke monniken, gelijke kappen.'",
        "perspectives": [
          {
            "role": "De student met het betaalde account",
            "view": "Moet ik me schamen dat ik goede tools heb? Straks op mijn werk gebruik ik die ook. Ik houd me aan alle afspraken, ik vermeld wat ik doe. Je gaat toch ook niet verbieden dat iemand thuis een ouder heeft die meeleest met zijn verslag?"
          },
          {
            "role": "De studente zonder toegang",
            "view": "Ik zeg er nooit wat van, maar ik zie heus wel dat mijn werk er kariger uitziet. Niet omdat ik dommer ben — omdat ik in de bus op een telefoon typ wat zij thuis met een assistent polijsten. Als de opleiding wil dat we AI gebruiken, moet de opleiding zorgen dat ik het ook kán."
          },
          {
            "role": "De opleidingscoördinator",
            "view": "Verbieden wat thuis gebeurt is onhandhaafbaar theater — dat voorstel valt af. De echte vragen zijn er twee: organiseren wij toegang (schoolaccounts, openingstijden van het OLC, lestijd voor AI-werk) en ontwerpen wij opdrachten waarin thuisgereedschap minder zwaar weegt? Dat tweede kunnen docenten morgen al; dat eerste kost geld en moet dus nu op tafel."
          }
        ],
        "statements": [
          {
            "author": "Docent 1",
            "quote": "Kansenongelijkheid is van alle tijden: de één had altijd al een studeerkamer en bijles, de ander niet. AI verandert daar niks wezenlijks aan — laten we niet doen alsof dit nieuw is.",
            "agreePrompt": "Wat is volgens jou wél nieuw of anders aan de AI-toegangskloof vergeleken met bijles en studeerkamers — of heeft deze docent gewoon gelijk? Onderbouw in drie zinnen."
          },
          {
            "author": "Docent 2",
            "quote": "Ik heb mijn portfolio-opdrachten herontworpen: het denkwerk en de eerste versie gebeuren ín de les, thuis wordt alleen afgewerkt. Sindsdien maakt het thuisgereedschap veel minder uit — en ik zie eindelijk weer wie wat kan.",
            "agreePrompt": "Pak één eigen opdracht die nu zwaar op thuiswerk leunt: welk deel zou jij naar de les halen om de kloof te verkleinen, en wat moet daarvoor wijken? Wees concreet."
          }
        ],
        "workspaceFields": {
          "reactionField": {
            "field": "verantwoord-casus-c-reactie",
            "label": "Jouw eerste reactie op casus C",
            "shortLabel": "Reactie C",
            "hint": "Drie regels: wat zie je in je eigen klassen van deze kloof, wat vind je van het verbodsvoorstel, wat kun jij morgen al doen",
            "placeholder": "Wat ik hiervan herken in mijn klassen: ...\nMijn oordeel over 'thuis verbieden': ...\nWat ik morgen al kan doen: ...",
            "rows": 6
          },
          "positionField": {
            "field": "verantwoord-casus-c-positie",
            "label": "Jouw positie tegenover de twee docentuitspraken",
            "shortLabel": "Positie C",
            "hint": "Per uitspraak: in hoeverre eens of oneens, en wat dat betekent voor jouw opdrachtontwerp en je inbreng op de teamdag",
            "placeholder": "Bij docent 1: ... — mijn inbreng op de teamdag: ...\nBij docent 2: ... — wat ik in mijn opdrachten verander: ...",
            "rows": 6
          }
        }
      }
    ],
    "legalCallout": {
      "source": "Kennisnet · Werken aan AI-geletterdheid op school + AVG-kaders voor het onderwijs",
      "title": "Wat de kaders zeggen over afspraken en gegevens in de klas",
      "body": "Kennisnet adviseert scholen om AI-gebruik niet per incident te reguleren maar via gedragen afspraken die aansluiten op de onderwijsvisie — gemaakt mét de mensen die ermee werken, periodiek herzien, en gekoppeld aan het leren over AI in plaats van alleen aan handhaving. Voor de klas vertaalt zich dat naar situatie-afspraken: per soort werk (oefenen, huiswerk, werkstuk, toets) helder wat mag en welke openheid wordt gevraagd.\n\nTwee juridische ankers horen daarbij. Ten eerste de AVG: leerlingen mogen geen persoonsgegevens — van zichzelf, klasgenoten of docenten — invoeren in AI-tools die daar niet voor zijn gecontracteerd. Dat is geen leerling-verantwoordelijkheid alleen: de school kiest de tools (verwerkersovereenkomsten, schoolaccounts) en de docent bouwt de afspraak 'geen namen, geen herleidbare verhalen in de prompt' expliciet in de klas-afspraken in. Handelingsgericht betekent dat: niet bang maken, maar voordoen hoe je een casus anonimiseert vóór je hem aan AI voorlegt.\n\nTen tweede de EU AI Act (art. 4, van kracht sinds 2 februari 2025): organisaties die AI inzetten — ook scholen — zorgen voor een passend niveau van AI-geletterdheid bij hun mensen. Klas-afspraken die leerlingen leren wanneer en hoe je AI verantwoord gebruikt, zijn daarmee geen extraatje maar onderdeel van wat van de school wordt verwacht.\n\nVoor casus A betekent dit: zonder afspraken vooraf is een fraudesanctie wankel — bouw eerst het kader. Voor casus B: vakverschillen mogen, maar de AVG-regels en de basisnormen (openheid, eerlijkheid loont) horen schoolbreed gelijk te zijn. Voor casus C: wie AI-gebruik toestaat in meewegend werk, moet de toegangsvraag adresseren — anders organiseert de school zelf de ongelijkheid.",
      "link": "https://www.kennisnet.nl/artificial-intelligence/werken-aan-ai-geletterdheid-op-school/"
    },
    "actionPlan": {
      "source": "Toegepast op jouw klas — vier stappen vóór de volgende toetsperiode",
      "title": "Van verbodsbordjes naar werkafspraken: vier stappen met je klas",
      "steps": [
        {
          "title": "Inventariseer het echte gebruik — anoniem en zonder oordeel",
          "body": "Begin niet met regels maar met de werkelijkheid: wat doet jouw klas al met AI? Gebruik de tien-minuten-peiling uit les 3.1 (anoniem: welke tools, waarvoor, hoe vaak) en voeg één vraag toe: 'waar twijfel je zelf weleens of het oké is?' Die twijfelvraag levert de agenda voor het afsprakengesprek — leerlingen weten meestal precies waar de grijze zones zitten.",
          "workspace": {
            "field": "verantwoord-action-inventaris",
            "label": "Mijn gebruiksinventarisatie",
            "placeholder": "Peilingsvragen (incl. twijfelvraag): ...\nWerkvorm + moment: ...\nWat ik verwacht te zien: ...\nWat ik doe met de uitkomst in het afsprakengesprek: ...",
            "rows": 7
          }
        },
        {
          "title": "Maak situatie-afspraken mét de klas — maximaal vijf, met het waarom erbij",
          "body": "Reserveer één lesuur (of mentoruur). Leg de situatiesoorten op tafel — oefenen, huiswerk, werkstuk, toets — en bouw per soort samen de afspraak: wat mag, wat hoort erbij (vermelding), wat niet en waarom. Jij bewaakt drie ankers die niet onderhandelbaar zijn: eerlijkheid loont (openheid wordt nooit bestraft), geen persoonsgegevens in AI-tools, en bij toetsen geldt het toetsregime. De rest is echt gesprek. Maximaal vijf afspraken, in leerlingtaal, zichtbaar in het lokaal of de studiewijzer.",
          "workspace": {
            "field": "verantwoord-action-afspraken",
            "label": "Mijn concept-afspraken (max 5) + het waarom",
            "placeholder": "Afspraak 1 (situatie: oefenen): ... — waarom: ...\nAfspraak 2 (huiswerk): ... — waarom: ...\nAfspraak 3 (werkstuk/portfolio): ... — waarom: ...\nAfspraak 4 (toets): ... — waarom: ...\nAfspraak 5 (gegevens/AVG): ... — waarom: ...",
            "rows": 8
          }
        },
        {
          "title": "Voer het integriteitsgesprek — los van incidenten",
          "body": "Plan het gesprek over eerlijkheid en eigen werk op een moment zónder aanleiding — na een incident is elk woord verdacht. Werkvorm die werkt: drie dilemma's op papier ('AI schreef mijn inleiding en ik heb hem herschreven — is dit mijn werk?'), eerst stil voor jezelf positie kiezen, dan in viertallen, dan klassikaal de verschillen oogsten. Doel is geen consensus maar taal: de klas krijgt woorden voor het verschil tussen hulp, samenwerking en uitbesteden. Sluit af met de koppeling naar de afspraken van stap 2.",
          "workspace": {
            "field": "verantwoord-action-integriteit",
            "label": "Mijn integriteitsgesprek",
            "placeholder": "Moment (los van incidenten): ...\nDrie dilemma's die passen bij mijn vak:\n1) ...\n2) ...\n3) ...\nWerkvorm: ...\nKoppeling naar de afspraken: ...",
            "rows": 8
          }
        },
        {
          "title": "Plan het herzieningsmoment en regel de toegang",
          "body": "Zet nu al een herzieningsmoment in de agenda (na zes tot acht weken): welke afspraak werkt, welke knelt, wat is er veranderd? Eén leskwartier volstaat. Regel parallel de toegangsvraag uit casus C: check welke schoolaccounts of voorzieningen er zijn, en herontwerp minstens één meewegende opdracht zo dat het denkwerk in de les gebeurt en thuisgereedschap minder zwaar weegt.",
          "workspace": {
            "field": "verantwoord-action-herziening",
            "label": "Herziening + toegang",
            "placeholder": "Herzieningsmoment gepland op: ...\nDrie evaluatievragen aan de klas: ...\nToegang: wat is er op school (accounts, OLC, lestijd): ...\nWelke opdracht ik herontwerp (denkwerk naar de les): ...",
            "rows": 7
          }
        }
      ]
    },
    "valkuilen": [
      {
        "titel": "Afspraken maken ná het eerste incident",
        "watGebeurtEr": "Het afsprakengesprek begint als strafzitting: de klas voelt dat de regels tegen één leerling zijn gericht. De afspraken worden ervaren als sanctie-met-terugwerkende-kracht en niemand voelt zich er eigenaar van.",
        "fix": "Maak afspraken op een neutraal moment, het liefst aan het begin van een periode. Is er al een incident geweest? Benoem dat expliciet als aanleiding-maar-niet-onderwerp en behandel de casus zelf apart."
      },
      {
        "titel": "Afspraken opleggen in plaats van samen maken",
        "watGebeurtEr": "Je deelt een keurig A4 met regels uit. De klas knikt, niemand voelt eigenaarschap, en bij de eerste grijze zone is de houding 'het stond niet op het lijstje, dus het mag'. Opgelegde regels worden gelezen als te omzeilen grenzen.",
        "fix": "Bouw de afspraken in een lesuur mét de klas, vanuit hun eigen twijfelvragen. Jij bewaakt de drie ankers (eerlijkheid loont, geen persoonsgegevens, toetsregime) — de formulering en de grijze zones zijn van de klas."
      },
      {
        "titel": "Eerlijkheid bestraffen zonder het te merken",
        "watGebeurtEr": "Een leerling vermeldt keurig haar AI-gebruik en krijgt 'voor de zekerheid' een lager cijfer of een streng gesprek; haar zwijgende klasgenoten ontspringen de dans. Binnen één opdracht weet de klas: vermelden is dom.",
        "fix": "Audit jezelf: is een open leerling bij jou ooit slechter af dan een zwijgende? Beoordeel het werk binnen de afspraken op kwaliteit, en reageer op vermeldingen met interesse ('hoe heb je gecontroleerd wat AI voorstelde?'), nooit met argwaan."
      },
      {
        "titel": "Eén generieke regel voor alle situaties",
        "watGebeurtEr": "'AI mag, mits vermeld' geldt voor alles — ook de woordjestoets en de instaptoets. Of 'AI uit' geldt overal — ook bij het oefenen thuis waar het onhandhaafbaar is. De regel verliest gezag omdat hij in sommige situaties zichtbaar onzinnig is.",
        "fix": "Differentieer naar situatiesoort (oefenen, huiswerk, werkstuk, toets) en leg per soort het waarom uit. Leerlingen accepteren verschillen prima — wat ze niet accepteren is willekeur zonder uitleg."
      },
      {
        "titel": "De toegangskloof negeren omdat de afspraken 'neutraal' zijn",
        "watGebeurtEr": "De afspraken gelden voor iedereen gelijk, dus het voelt eerlijk. Intussen poetst de student met het betaalde account zijn portfolio en typt de student zonder laptop in de bus. De kloof groeit onder een laag formele gelijkheid.",
        "fix": "Stel bij elke meewegende opdracht de vraag: hoe zwaar weegt thuisgereedschap hier? Haal denkwerk naar de les, regel schoolaccounts of werkplekken, en bespreek de kloof open in het team — verzwijgen maakt hem alleen maar normaler."
      }
    ],
    "geoefendSpoor": {
      "eyebrow": "Voor de geoefende docent",
      "titel": "Til de klas-afspraken naar een teamafspraak — zonder het beleidsmoeras",
      "beschrijving": "Werken jouw klas-afspraken? Dan ben je de aangewezen persoon om de casus-B-frictie in je team te verkleinen. Organiseer een werksessie van 60 minuten met de docenten die aan dezelfde klas(sen) lesgeven: ieder brengt zijn huidige praktijk mee, jij brengt je afspraken en je herzieningservaring. Doel is niet één uniform reglement maar een gedeelde basislaag: drie afspraken die overal gelden (eerlijkheid loont, geen persoonsgegevens in AI-tools, vermelding bij meewegend werk) plus expliciete ruimte voor vakverschillen daarbovenop. Investering: één sessie plus een half uur voorbereiding. Opbrengst: leerlingen ervaren één lijn, en de verbods-collega hoeft geen gezicht te verliezen — zijn vak-regime past in de bovenlaag.",
      "opdracht": "Voer de werksessie binnen zes weken uit en lever de basislaag (drie schoolbrede ankers + vakruimte-afspraak) op één A4 op aan de teamleider, met een evaluatiedatum na één periode."
    },
    "eindcriteria": [
      {
        "criterium": "Casus-analyse",
        "onder": "Casussen gelezen als fraudekwesties met één schuldige.",
        "op": "Per casus norm- én ontwerpvraag benoemd, met eigen positie tegenover de uitspraken.",
        "boven": "+ Per positie een concrete handeling voor de eigen praktijk binnen vier weken."
      },
      {
        "criterium": "Gebruiksinventarisatie",
        "onder": "Afspraken bedacht zonder te weten wat de klas werkelijk doet.",
        "op": "Anonieme peiling ontworpen inclusief twijfelvraag, met gepland afnamemoment.",
        "boven": "+ Peiling afgenomen en de twijfelvragen van leerlingen als agenda voor het gesprek gebruikt."
      },
      {
        "criterium": "Situatie-afspraken",
        "onder": "Eén generieke regel, of een lijst zonder waarom.",
        "op": "Maximaal vijf afspraken naar situatiesoort, in leerlingtaal, met waarom en drie vaste ankers.",
        "boven": "+ Afspraken daadwerkelijk mét de klas gebouwd en zichtbaar gemaakt in lokaal of studiewijzer."
      },
      {
        "criterium": "Integriteitsgesprek",
        "onder": "Integriteit alleen besproken naar aanleiding van een incident.",
        "op": "Dilemma-werkvorm ontworpen voor een incident-vrij moment, gekoppeld aan de afspraken.",
        "boven": "+ Gesprek gevoerd en de taal van de klas (hulp/samenwerken/uitbesteden) teruggehoord in latere lessen."
      },
      {
        "criterium": "Herziening en toegang",
        "onder": "Afspraken als eindproduct behandeld; toegangskloof niet gewogen.",
        "op": "Herzieningsmoment gepland en minstens één opdracht herontworpen op de toegangsvraag.",
        "boven": "+ Toegangsvoorzieningen op school gecheckt en bevindingen geagendeerd bij team of coördinator."
      }
    ],
    "reflection": [
      "Bij welke casus voelde je de sterkste eerste impuls — straffen, sussen of wegkijken? Wat zegt die impuls over jouw eigen schoolloopbaan als leerling?",
      "Welke van de drie ankers (eerlijkheid loont, geen persoonsgegevens, toetsregime) is in jouw huidige praktijk het minst waargemaakt — en wat is de eerste kleine stap?",
      "Stel dat jouw klas-afspraken over een jaar perfect werken: wat zíe je dan concreet anders in je les? Beschrijf één observeerbaar moment — en check over een jaar of het er is."
    ],
    "checklist": [
      "Drie casussen doorgewerkt met eigen reactie en positie per casus",
      "Gebruiksinventarisatie ontworpen (anoniem, met twijfelvraag) en ingepland",
      "Concept-afspraken klaar: max vijf, naar situatiesoort, met waarom en drie ankers",
      "Lesuur voor het samen maken van afspraken gepland vóór de volgende toetsperiode",
      "Integriteitsgesprek met drie vak-dilemma's voorbereid voor een incident-vrij moment",
      "Herzieningsmoment (6-8 weken) in de agenda gezet",
      "Eén meewegende opdracht herontworpen met denkwerk in de les",
      "AVG-anker expliciet in de afspraken: geen persoonsgegevens in AI-tools, anonimiseren voorgedaan"
    ],
    "verderLezen": [
      {
        "titel": "Werken aan AI-geletterdheid op school",
        "bron": "Kennisnet",
        "jaar": 2025,
        "link": "https://www.kennisnet.nl/artificial-intelligence/werken-aan-ai-geletterdheid-op-school/",
        "waarom": "Het Nederlandse werkkader voor gedragen afspraken in plaats van incidentenbeleid — de basis onder het action plan van deze les."
      },
      {
        "titel": "AI Competency Framework for Teachers — Ethics of AI",
        "bron": "UNESCO",
        "jaar": 2024,
        "link": "https://www.unesco.org/en/articles/ai-competency-framework-teachers",
        "waarom": "Plaatst integriteit en verantwoord gebruik in het docentcompetentie-kader — inclusief de voorbeeldrol van de docent zelf."
      },
      {
        "titel": "Toetsing en examinering in het tijdperk van AI — Handreiking 1",
        "bron": "Npuls",
        "jaar": 2024,
        "link": "https://www.npuls.nl/_assets/cdcb37e6-11f7-468f-962b-06fe599a8a23/Visie-op-toetsing-en-examinering-onderbouwing-Npuls.pdf",
        "waarom": "De vier toetsregimes geven het toets-anker onder je klas-afspraken — vooral relevant voor mbo en hbo."
      },
      {
        "titel": "EU AI Act, artikel 4 — AI Literacy",
        "bron": "Europese Commissie",
        "jaar": 2024,
        "link": "https://artificialintelligenceact.eu/article/4/",
        "waarom": "De wettelijke grond onder de geletterdheidsplicht van scholen — handig als je team vraagt waarom dit geen vrijblijvend project is."
      }
    ]
  },
  "lesmateriaal-maken": {
    "format": "promptlab",
    "summary": "Je hebt in 3.1 t/m 3.5 de bouwstenen verzameld: leerlijn, uitleg, verificatie, herkomstdenken, klas-afspraken. In dit promptlab bouw je er in 75 minuten een complete AI-geletterdheidsles van voor je eigen vak — met AI als co-ontwerper. Vier rondes: van vaag lesidee naar scherp lesdoel, van lesdoel naar werkvorm op maat, van werkvorm naar leerlingmateriaal op niveau, en van conceptles naar gereviewde les met exit ticket. Het eindproduct geef je in les 3.7 écht.",
    "learningGoals": [
      "Je herkent het verschil tussen een wensprompt ('maak een les'), een ontwerpprompt (doel, groep, randvoorwaarden) en een reviewprompt (criteria, kritische tegenlezer).",
      "Je dwingt AI per ronde tot didactische scherpte: eerst vragen stellen, dan leveren — en jij blijft de ontwerper die kiest.",
      "Je bouwt een complete, uitvoerbare AI-geletterdheidsles voor je eigen vak en groep: lesdoel, werkvormen met tijden, leerlingmateriaal en exit ticket.",
      "Je laat de conceptles kritisch reviewen tegen de AI-GO-dimensies en jouw klascontext, en verwerkt de review beargumenteerd."
    ],
    "scenario": {
      "title": "Werksituatie",
      "context": "Je gaat binnen drie weken een AI-geletterdheidsles geven in je eigen vak — dat is de praktijkopdracht van 3.7. Vandaag bouw je die les. Je hebt je leerlijn uit 3.1 (welke stap is dit?), je peiling van de beginsituatie, en je werkbladen uit 3.2 t/m 3.5. AI is je co-ontwerper, maar jij kent de klas — elke ronde eindigt met jouw keuzes, niet met de output van het model.",
      "role": "Docent · vo, mbo of hbo — elk vak",
      "tools": "AI-tool met schoolaccount · je werkbladen uit 3.1 t/m 3.5 · de promptbibliotheek van het platform"
    },
    "promptlabTitle": "Vier rondes — van vaag lesidee naar les die je volgende week geeft.",
    "rounds": [
      {
        "intent": "Ronde 1 — Van vaag idee naar scherp lesdoel (ca. 15 min)",
        "startPrompt": "Maak een les over AI voor mijn klas.",
        "hint": "AI gokt alles: doelgroep, niveau, duur, voorkennis, wat 'over AI' betekent. Resultaat: een generieke les die voor niemand is — meestal een uitleg-les met een quizje, los van jouw leerlijn en jouw vak. Herschrijf de prompt zodat AI eerst vijf gerichte ontwerpvragen aan jóu stelt voordat het iets voorstelt, en geef je context uit 3.1 alvast mee: leerlijn-stap, groep, beginsituatie.",
        "improvedPrompt": "Ik ben docent [vak] en bouw een AI-geletterdheidsles van [50] minuten voor [3 havo, 28 leerlingen]. Context: dit is stap 2 van mijn leerlijn (stap 1 was: wat AI niet kan; mijn peiling liet zien dat de helft denkt dat AI informatie opzoekt). Stel mij eerst vijf ontwerpvragen die je beantwoord moet hebben om een goed lesdoel te formuleren — over mijn vak, mijn groep en wat haalbaar is in één lesuur. Daarna: drie mogelijke lesdoelen, elk in één zin, elk toetsbaar binnen de les zelf.",
        "learnPoint": "Door AI eerst te laten vragen, lever jij de context die het verschil maakt tussen een generieke en een passende les — en ontdek je zelf welke ontwerpkeuzes je nog niet had gemaakt. Onderwijspunt: een toetsbaar lesdoel ('aan het einde kan elke leerling...') is het anker waar alle volgende rondes aan hangen. Kies er één en hou de andere twee als reserve."
      },
      {
        "intent": "Ronde 2 — Van lesdoel naar werkvorm met didactische eisen (ca. 20 min)",
        "startPrompt": "Bedenk een leuke werkvorm bij dit lesdoel.",
        "hint": "'Leuk' levert een carrousel, een kahoot of een posteropdracht op — vorm zonder didactische functie. Wat ontbreekt: groepsgrootte, tijden, wat de leerling dóet dat het lesdoel dichterbij brengt, differentiatie en het bruikbare eindproduct. Herschrijf de prompt met harde didactische eisen en vraag om twee alternatieven die wezenlijk verschillen — niet twee smaken van hetzelfde.",
        "improvedPrompt": "Lesdoel: [aan het einde controleert elke leerling een AI-antwoord over onze lesstof met twee onafhankelijke bronnen en geeft een onderbouwd eindoordeel]. Ontwerp twee wezenlijk verschillende werkvormen van elk 25 minuten voor 28 leerlingen in [3 havo]. Eisen per werkvorm: exacte tijdsindeling, groepsgrootte met reden, wat de leerling concreet doet en oplevert, één differentiatie-optie voor snelle en voor langzame leerlingen, en welke voorbereiding het mij kost in minuten. Geen quiz, geen poster — de leerlingen moeten het controleren zélf oefenen.",
        "learnPoint": "Didactische eisen in de prompt ('wat de leerling concreet doet en oplevert') dwingen werkvormen af die het lesdoel dienen in plaats van de levendigheid. Onderwijspunt: vraag altijd naar de voorbereidingskosten in minuten — een werkvorm die jou drie uur knipwerk kost, overleeft het echte rooster niet. Kies één werkvorm en noteer wáárom: die redenering is je ontwerpverantwoording voor 3.7."
      },
      {
        "intent": "Ronde 3 — Van werkvorm naar leerlingmateriaal op niveau (ca. 20 min)",
        "startPrompt": "Maak een werkblad bij deze werkvorm.",
        "hint": "Zonder niveau-aanduiding krijg je een werkblad in beleidstaal: 'evalueer de betrouwbaarheid van de gegenereerde output'. Te moeilijk, te abstract, en de instructies veronderstellen voorkennis die jouw groep niet heeft. Herschrijf met taalniveau, voorkennis-grens en de eis dat elke instructie één handeling is. Lever ook je foutenmateriaal-eisen mee als de werkvorm AI-output gebruikt (les 3.3: fouten vindbaar op klasniveau, ook kloppende passages).",
        "improvedPrompt": "Maak het leerlingmateriaal bij deze werkvorm: [werkvorm uit ronde 2 plakken]. Doelgroep: [3 havo, taalniveau 2F, voorkennis: één les over wat AI niet kan]. Eisen: (1) elke instructie is één handeling in één zin, (2) geen vakjargon — 'controleer' in plaats van 'verifieer', (3) invulruimte die stuurt (tabel of genummerde vakken, geen lege regels), (4) bovenaan in leerlingtaal wat ze aan het einde kunnen, (5) onderaan een eindoordeel-vraag met drie smaken: klopt / klopt deels, namelijk... / klopt niet, want... Lever als platte tekst die ik in mijn eigen sjabloon plak.",
        "learnPoint": "Leerlingmateriaal is de plek waar lesontwerp slaagt of sneuvelt: een briljante werkvorm met een onleesbaar werkblad wordt chaos. Onderwijspunt: de eis 'één handeling per zin' is de snelste kwaliteitstest voor elk gegenereerd werkblad — en check het taalniveau altijd zelf, AI overschat structureel wat 2F is. Genereer daarna met dezelfde aanpak je eigen lesmateriaal-bijlagen: het AI-foutenmateriaal, de bronnenlijst, de instructiedia."
      },
      {
        "intent": "Ronde 4 — Van conceptles naar gereviewde les met exit ticket (ca. 20 min)",
        "startPrompt": "Is dit een goede les?",
        "hint": "Op deze vraag antwoordt AI vrijwel altijd: 'Een sterke les! Enkele kleine suggesties...' — applaus is geen review. Wat je nodig hebt is een tegenlezer met criteria en de opdracht om problemen te vinden. Herschrijf de prompt met een expliciete reviewersrol, jouw toetscriteria (AI-GO-dimensies, klas-afspraken uit 3.5, tijdsrealisme) en de eis van concrete reparaties. Sluit af met het exit ticket dat je lesdoel meet.",
        "improvedPrompt": "Je bent een kritische didactiek-collega die mijn conceptles reviewt vóór ik hem geef. Hier is de les: [lesdoel + werkvorm + materiaal plakken]. Review op vijf punten en wees streng: (1) haalt een gemiddelde leerling het lesdoel binnen de tijd — reken de minuten na, (2) welke AI-GO-dimensie (kennis, vaardigheden, attitudes, ethisch bewustzijn) komt er bekaaid af, (3) waar kan de les ontsporen — noem de twee waarschijnlijkste momenten en wat ik dan doe, (4) klopt de les met mijn klas-afspraken [afspraken kort noemen], (5) stel een exit ticket van maximaal twee vragen voor dat het lesdoel écht meet, geen tevredenheidsvraag. Geef per punt een concrete reparatie, geen compliment.",
        "learnPoint": "Een reviewprompt met rol, criteria en reparatieplicht maakt van AI een bruikbare tegenlezer — zonder die drie krijg je een applausmachine. Onderwijspunt: de minuten-narekening (punt 1) vangt de klassiekste ontwerpfout: te veel willen in één lesuur. Verwerk de review beargumenteerd — noteer ook wat je néét overneemt en waarom, want dat is precies de ontwerpverantwoording die je in 3.7 aan je peer-reviewer laat zien."
      }
    ],
    "reflection": [
      "In welke ronde week jouw eigen prompt het verst af van de model-prompt — en was jouw versie beter voor jouw context of miste hij een eis? Wat neem je daarvan mee naar je dagelijkse promptgebruik?",
      "Welke ontwerpkeuze heeft AI je in dit lab uit handen proberen te nemen (doelgroep-inschatting, werkvormkeuze, moeilijkheidsgraad) — en waar heb jij teruggepakt? Waar had je scherper moeten zijn?",
      "Je leerlingen gaan AI straks ook gebruiken om dingen te maken. Welke van de vier rondes (eerst vragen, eisen stellen, niveau bewaken, kritisch reviewen) wil je hen het eerst aanleren, en in welke opdracht kan dat al?"
    ],
    "eindcriteria": [
      {
        "criterium": "Eigen prompt-iteratie",
        "onder": "Model-prompts overgenomen met alleen het vak ingevuld.",
        "op": "Per ronde een eigen versie met eigen context (leerlijn-stap, groep, beginsituatie) én verschil met de model-prompt benoemd.",
        "boven": "+ Per ronde één eis toegevoegd die niet in de model-prompt staat en die aantoonbaar uit jouw klascontext komt."
      },
      {
        "criterium": "Ontwerpregie",
        "onder": "AI-output per ronde overgenomen zonder keuze of motivering.",
        "op": "Per ronde een expliciete eigen keuze (gekozen doel, werkvorm, reparaties) met één zin waarom.",
        "boven": "+ Bij de review minstens één AI-suggestie beargumenteerd verworpen."
      },
      {
        "criterium": "De les zelf",
        "onder": "Losse onderdelen die niet op elkaar aansluiten.",
        "op": "Complete les: toetsbaar doel, werkvorm met tijden, leerlingmateriaal op niveau, exit ticket dat het doel meet.",
        "boven": "+ Les gereviewd langs alle vijf reviewpunten en bijgesteld; voorbereidingstijd realistisch begroot."
      },
      {
        "criterium": "Aansluiting op de module",
        "onder": "Les staat los van leerlijn en klas-afspraken.",
        "op": "Les is een benoemde stap uit de eigen leerlijn (3.1) en spoort met de klas-afspraken (3.5).",
        "boven": "+ Verificatieroutine (3.3) of herkomstcheck (3.4) zit als leerlinghandeling in de werkvorm."
      }
    ],
    "checklist": [
      "Vier rondes doorlopen met eigen prompts, eigen pogingen bewaard",
      "Lesdoel gekozen: toetsbaar binnen de les, passend bij leerlijn-stap en beginsituatie",
      "Werkvorm gekozen met tijdsindeling, groepsgrootte, differentiatie en begrote voorbereidingstijd",
      "Leerlingmateriaal gegenereerd en zelf gecontroleerd op taalniveau en één-handeling-per-zin",
      "Eventueel AI-foutenmateriaal volledig zelf nagelopen (les 3.3-routine)",
      "Kritische review uitgevoerd, reparaties verwerkt, verworpen suggesties gemotiveerd",
      "Exit ticket van maximaal twee vragen klaar — meet het lesdoel, geen tevredenheid",
      "Lesdatum geprikt binnen drie weken: dit is je les voor praktijkopdracht 3.7",
      "AVG-check: geen leerlinggegevens in prompts, materiaal via schoolaccount gegenereerd"
    ],
    "verderLezen": [
      {
        "titel": "AI-GO! Raamwerk voor AI-geletterdheid in het onderwijs",
        "bron": "Npuls",
        "jaar": 2025,
        "link": "https://npuls.nl/kennisbank/ai-go-een-raamwerk-voor-ai-geletterdheid-in-het-onderwijs",
        "waarom": "De vier dimensies zijn je reviewcriteria in ronde 4 — en de check of je les meer is dan een tooltjes-les."
      },
      {
        "titel": "AI Competency Framework for Teachers — AI Pedagogy",
        "bron": "UNESCO",
        "jaar": 2024,
        "link": "https://www.unesco.org/en/articles/ai-competency-framework-teachers",
        "waarom": "Dit lab is AI Pedagogy op Deepen-niveau: AI inzetten om eigen onderwijs te ontwerpen zonder de ontwerpregie af te staan."
      },
      {
        "titel": "Werken aan AI-geletterdheid op school",
        "bron": "Kennisnet",
        "jaar": 2025,
        "link": "https://www.kennisnet.nl/artificial-intelligence/werken-aan-ai-geletterdheid-op-school/",
        "waarom": "Plaatst jouw ene les in de schoolbrede aanpak — handig wanneer collega's je les willen overnemen."
      }
    ]
  },
  "praktijkopdracht-3": {
    "format": "praktijkopdracht",
    "summary": "Module 03 sluit niet af met een toets maar met de echte vuurproef: je geeft de AI-geletterdheidsles die je in 3.6 bouwde aan je eigen klas. Drie keuzepaden — één les geven en bijstellen, een lessenserie van drie korte momenten, of een vakoverstijgend project met een collega. Zeven deliverables, peer review langs drie vragen vóór de uitvoering, leerlingreacties als bewijsmateriaal, en een transferhaak vijf dagen later. Het bewijs van Module 03 zit niet in je lesontwerp — het zit in wat jouw leerlingen tijdens en na de les laten zien.",
    "duration": {
      "total": "2,5 uur (excl. lesuitvoering)",
      "blocks": [
        {
          "label": "Pad kiezen + les(sen) gereedmaken",
          "min": 25
        },
        {
          "label": "Peer review aanvragen + verwerken",
          "min": 30
        },
        {
          "label": "Leerlingreactie-meting voorbereiden",
          "min": 20
        },
        {
          "label": "Uitvoering in eigen klas (buiten deze tijd)",
          "min": 0
        },
        {
          "label": "Reacties analyseren + les bijstellen",
          "min": 40
        },
        {
          "label": "Reflectie schrijven",
          "min": 20
        },
        {
          "label": "Transferhaak plannen",
          "min": 15
        }
      ]
    },
    "opening": {
      "eyebrow": "Aanleiding",
      "aanleiding": "Module 03 heeft je langs zes lessen gebracht die elk een bouwsteen waren: kerndoelen vertalen naar een leerlijn, AI uitleggen zonder misconcepties te planten, verificatie-opdrachten ontwerpen, informatievaardigheden updaten, klas-afspraken bouwen, en in het promptlab een complete les maken. Nu komt het moment waarop al dat ontwerpwerk de enige test ondergaat die telt: een echt lokaal, echte leerlingen, echte verwarring en echte aha-momenten.\n\nHet verschil met een gewone lesobservatie zit in wat je verzamelt. Je geeft niet alleen de les — je meet wat hij doet. Het exit ticket uit 3.6 vertelt je of het lesdoel is gehaald; de misconceptie-vraag uit je peiling (3.1) vertelt je of er iets is verschoven in hoe leerlingen over AI denken; en je eigen observaties vertellen je waar het ontwerp kraakte. Die drie samen zijn je bewijsmateriaal — niet je gevoel na afloop, dat na elke les met werkvormen rooskleurig of juist somber kleurt.\n\nDrie paden, oplopend in ambitie. Pad A: je geeft de ene les uit 3.6, meet, en stelt bij — de koninklijke route voor wie dit voor het eerst doet. Pad B: je knipt de les op tot een serie van drie korte momenten over drie weken — voor wie weet dat één lesuur bij zijn groep vervliegt. Pad C: je geeft de les samen met een collega van een ander vak als vakoverstijgend project — voor wie de leerlijn uit 3.1 meteen breder wil trekken. Voor alle paden geldt dezelfde peer review vooraf en dezelfde transferhaak achteraf.",
      "waaromNu": "Darling-Hammond e.a. (2017) wijzen uitvoering in de eigen praktijk met collega-feedback en een snelle verbetercyclus aan als kerningrediënten van professionalisering die beklijft. Eén gegeven les met meting en bijstelling verandert meer aan je didactiek dan vijf ontworpen lessen op de plank. En de klas wacht niet: elke week zonder AI-geletterdheidsles is een week waarin je leerlingen het zichzelf leren."
    },
    "scenario": {
      "title": "Werksituatie",
      "context": "Je hebt in 3.6 een complete AI-geletterdheidsles gebouwd voor je eigen vak: toetsbaar lesdoel, werkvorm met tijden, leerlingmateriaal, exit ticket. Binnen drie weken geef je hem écht. Vooraf laat je één collega de les reviewen langs drie vragen. Tijdens de les verzamel je exit tickets en observaties. Daarna analyseer je wat er gebeurde, stel je de les bij tot een versie 2, en activeer je vijf werkdagen later de transferhaak — één kort moment waarin je checkt of er iets is blijven hangen.",
      "role": "Docent · vo, mbo of hbo — elk vak",
      "tools": "Je les uit 3.6 · één collega als reviewer · je eigen klas · exit tickets (papier of digitaal) · 15 minuten in een les vijf dagen later"
    },
    "praktijkTitle": "Kies één pad. Lever zeven deliverables. Geef de les écht. Vijf dagen later: transferhaak.",
    "praktijkIntro": "Drie paden, één kern: jouw AI-geletterdheidsles overleeft het contact met echte leerlingen en wordt er beter van. Per pad een andere uitvoeringsvorm; voor alle paden dezelfde peer review, dezelfde meting en dezelfde transferhaak.",
    "paths": [
      {
        "id": "a",
        "label": "Pad A — één les geven, meten en bijstellen",
        "beschrijving": "Je geeft de les uit 3.6 één keer, precies zoals ontworpen — en je meet wat hij doet. Vooraf: peer review en een nulmeting (de misconceptie-vraag uit je 3.1-peiling, twee minuten). Tijdens: je werkvorm draaien, exit tickets verzamelen, en direct na de les tien minuten je observaties noteren — waar liep het anders dan gepland, welke leerlingvraag verraste je. Daarna: exit tickets analyseren tegen je lesdoel, de les bijstellen tot versie 2, en documenteren wat je waarom veranderde. Dit pad is de koninklijke route voor de eerste keer: één les, volledig doorgemeten, levert meer ontwerpinzicht op dan drie lessen op gevoel.",
        "deliverables": [
          "Pad A gekozen + motivatie van max 50 woorden (waarom past één doorgemeten les bij jou en deze klas)",
          "Definitieve lesopzet na peer review: lesdoel, werkvorm met tijden, leerlingmateriaal, exit ticket — plus wat je op de review hebt aangepast",
          "Nulmeting: de misconceptie-vraag vooraf gesteld, uitslag in twee zinnen",
          "Peer-feedback van één collega op de drie review-vragen, plus jouw revisies",
          "Bewijs van uitvoering: ingevulde exit tickets (geanonimiseerd geteld), je observatienotitie van tien minuten, en eventueel foto's van leerlingwerk zonder herleidbare gegevens",
          "Versie 2 van de les: wat je veranderde, met per verandering de leerlingreactie of meting die erom vroeg",
          "Reflectie van 250 woorden: wat deden leerlingen anders dan je ontwerp aannam, en wat zegt dat over je beeld van hun AI-werkelijkheid"
        ]
      },
      {
        "id": "b",
        "label": "Pad B — lessenserie: drie korte momenten over drie weken",
        "beschrijving": "Je knipt de les uit 3.6 op tot drie momenten van 15-20 minuten, verspreid over drie weken in je gewone vaklessen: bijvoorbeeld moment 1 de misconceptie-demonstratie (3.2), moment 2 de verificatie-oefening (3.3), moment 3 de toepassing op een echte vakopdracht met vermelding (3.4/3.5). Dit pad past bij groepen waar één vol lesuur over AI niet landt, en het test iets dat pad A niet kan testen: beklijft het tussen de momenten? Per moment een mini-exit-vraag (één vraag, één minuut); na moment 3 vergelijk je de drie uitslagen — dat is je leercurve-bewijs.",
        "deliverables": [
          "Pad B gekozen + motivatie van max 50 woorden (waarom werkt opgeknipt beter voor deze groep)",
          "Serie-opzet: drie momenten met per moment doel, werkvorm (15-20 min), plek in de gewone vakles en mini-exit-vraag",
          "Peer-feedback van één collega op de drie review-vragen, plus jouw revisies",
          "Bewijs van uitvoering moment 1 en 2: mini-exit-uitslagen plus per moment drie regels observatie",
          "Bewijs van uitvoering moment 3 plus de vergelijking van de drie mini-exit-uitslagen: wat is er over drie weken verschoven, wat zakte weg",
          "Versie 2 van de serie: welk moment je herontwerpt en waarom — onderbouwd met de uitslagen",
          "Reflectie van 250 woorden: wat leerde de spreiding je over beklijven — wat bleef hangen zonder herhaling, wat bleek na een week alweer weg"
        ]
      },
      {
        "id": "c",
        "label": "Pad C — vakoverstijgend project met een collega",
        "beschrijving": "Je geeft de les uit 3.6 als tweeluik met een collega van een ander vak: dezelfde AI-geletterdheidskern (bijvoorbeeld de verificatieroutine of de herkomstcheck), toegepast op twee vakinhouden. Jij geeft jouw les, de collega een aangepaste variant in zijn vak, en jullie sluiten af met één gezamenlijk moment (15 min, eventueel in een mentoruur) waarin leerlingen de overeenkomst expliciet maken: 'wat deed je bij beide vakken hetzelfde?'. Dit pad test transfer — herkennen leerlingen de routine als vak-overstijgende vaardigheid? — en bouwt meteen aan de sectie-brede leerlijn uit 3.1. Zwaarder in afstemming, dubbel in opbrengst.",
        "deliverables": [
          "Pad C gekozen + motivatie van max 50 woorden, plus de collega en het tweede vak",
          "Tweeluik-opzet: jouw les, de vakvariant van de collega (samen aangepast), en het gezamenlijke afsluitmoment met de transfervraag",
          "Peer-feedback van een derde collega (niet je projectpartner) op de drie review-vragen, plus jullie revisies",
          "Bewijs van uitvoering van beide lessen: exit tickets van beide vakken (geanonimiseerd geteld) plus per les drie regels observatie",
          "Bewijs van het afsluitmoment: de leerlingantwoorden op de transfervraag — herkennen ze de routine als dezelfde?",
          "Versie 2 van het tweeluik plus één afspraak met de collega over verankering volgend schooljaar",
          "Reflectie van 250 woorden: waar bleek de routine vak-overstijgend te landen en waar bleef hij aan één vak kleven — en wat betekent dat voor de leerlijn uit 3.1"
        ]
      }
    ],
    "peerReview": {
      "title": "Collega-feedback in drie vragen — vóór je de les geeft",
      "intro": "Vraag één vakgenoot om binnen drie werkdagen je lesontwerp te reviewen — vóór de uitvoering, zodat de feedback nog iets kan voorkomen. Geen rubric, geen oordeel — concrete observaties langs drie vragen.",
      "questions": [
        {
          "vraag": "Reken de minuten na: haalt een gemiddelde leerling van deze groep het lesdoel binnen de geplande tijd — en welk onderdeel loopt als eerste uit?",
          "workspace": {
            "field": "po3-review-vraag-1",
            "label": "Antwoord collega op vraag 1 + wat jij ermee doet",
            "shortLabel": "Review vraag 1",
            "hint": "Welk onderdeel loopt volgens de collega uit · wat schrap of verkort jij vóór de uitvoering",
            "placeholder": "Collega rekent na: ...\nWat ik schrap/verkort vóór de uitvoering: ...",
            "rows": 5
          }
        },
        {
          "vraag": "Welke aanname over wat deze leerlingen al van AI weten of kunnen zit impliciet in het ontwerp — en is die realistisch gezien wat jij van deze groep weet?",
          "workspace": {
            "field": "po3-review-vraag-2",
            "label": "Antwoord collega op vraag 2 + wat jij ermee doet",
            "shortLabel": "Review vraag 2",
            "hint": "Welke aanname benoemt de collega · welke vangrail bouw je in voor als hij niet klopt",
            "placeholder": "Collega benoemt aanname: ...\nVangrail die ik inbouw: ...",
            "rows": 5
          }
        },
        {
          "vraag": "Stel: de AI-demonstratie of -oefening pakt in de les anders uit dan gepland (output klopt ineens wél, tool hapert, leerling vraagt iets dat je niet kunt beantwoorden). Waar zit het grootste risico en wat is dan het plan?",
          "workspace": {
            "field": "po3-review-vraag-3",
            "label": "Antwoord collega op vraag 3 + wat jij ermee doet",
            "shortLabel": "Review vraag 3",
            "hint": "Het waarschijnlijkste ontsporingsmoment · jouw plan B in één zin",
            "placeholder": "Grootste risico volgens collega: ...\nMijn plan B: ...",
            "rows": 5
          }
        }
      ]
    },
    "transferhaak": {
      "title": "Transferhaak — vijf dagen later",
      "intro": "Eén les verandert nog geen gedrag — de check vijf werkdagen later vertelt je of er iets is geworteld. Plan een kort moment (max 15 minuten) in een gewone vakles: breng één vraag of situatie uit de AI-les terug en kijk wat er nog staat. Sterke vormen: dezelfde misconceptie-vraag nóg eens stellen (vergelijk met je nulmeting), of een nieuwe AI-output tonen met de vraag 'wat doen we hiermee?' — en turven wie er spontaan de routine bijpakt.",
      "workspace": {
        "field": "po3-transferhaak",
        "label": "Mijn transferhaak voor vijf dagen later",
        "shortLabel": "Transferhaak",
        "hint": "Datum · werkvorm (max 15 min) · welke vraag breng je terug · wat hoop je te zien · wat doe je als er niets is blijven hangen",
        "placeholder": "Datum: ...\nWerkvorm (max 15 min): ...\nVraag/situatie die ik terugbreng: ...\nWat ik hoop te zien: ...\nWat ik doe als er niets is verschoven: ...",
        "rows": 8
      }
    },
    "reflection": [
      "Welk moment in de uitvoering week het sterkst af van je ontwerp — en was dat een ontwerpfout, een verkeerde aanname over de groep, of gewoon een dinsdagmiddag? Hoe onderscheid je die drie?",
      "Wat vertelden de exit tickets je dat je eigen gevoel na de les níet vertelde — en wat betekent dat voor hoe je voortaan je lessen evalueert?",
      "Je hebt nu één AI-geletterdheidsles die werkt (versie 2). Wat is er nodig — van jou, je sectie, je rooster — om hiervan stap 2 en 3 van je leerlijn uit 3.1 te maken, en welke collega spreek je daar binnen twee weken op aan?"
    ],
    "checklist": [
      "Pad (A, B of C) gekozen en gemotiveerd in max 50 woorden",
      "Lesontwerp uit 3.6 gereedgemaakt: doel, werkvorm, materiaal, exit ticket compleet",
      "Peer review vóór de uitvoering ontvangen op de drie vragen en verwerkt",
      "Nulmeting of mini-exit-vragen voorbereid (misconceptie-vraag uit 3.1 hergebruikt)",
      "Les(sen) uitgevoerd in de eigen klas binnen drie weken",
      "Exit tickets geanonimiseerd geanalyseerd tegen het lesdoel, observatienotitie gemaakt",
      "Versie 2 van de les(sen) gedocumenteerd met per wijziging de meting of reactie erachter",
      "Reflectie van 250 woorden afgerond, gericht op wat leerlingen deden",
      "Transferhaak vijf werkdagen later ingepland én uitgevoerd",
      "AVG-check: exit tickets en leerlingwerk geanonimiseerd, geen leerlinggegevens in AI-tools, beeldmateriaal zonder herkenbare leerlingen"
    ],
    "verderLezen": [
      {
        "titel": "Effective Teacher Professional Development",
        "bron": "Darling-Hammond e.a. · Learning Policy Institute",
        "jaar": 2017,
        "link": "https://learningpolicyinstitute.org/sites/default/files/product-files/Effective_Teacher_Professional_Development_REPORT.pdf",
        "waarom": "Onderbouwt waarom uitvoering in de eigen klas, collega-feedback en een snelle verbetercyclus de kern van deze praktijkopdracht zijn."
      },
      {
        "titel": "AI Competency Framework for Teachers",
        "bron": "UNESCO",
        "jaar": 2024,
        "link": "https://www.unesco.org/en/articles/ai-competency-framework-teachers",
        "waarom": "Met deze gegeven les werk je aantoonbaar op Deepen-niveau in de dimensie AI pedagogy — bewijsmateriaal voor je professionaliseringsportfolio."
      },
      {
        "titel": "Werken aan AI-geletterdheid op school",
        "bron": "Kennisnet",
        "jaar": 2025,
        "link": "https://www.kennisnet.nl/artificial-intelligence/werken-aan-ai-geletterdheid-op-school/",
        "waarom": "De schoolbrede aanpak waarin jouw les en leerlijn passen — handig voor het gesprek met teamleider of sectie na deze opdracht."
      },
      {
        "titel": "AI-GO! Raamwerk voor AI-geletterdheid in het onderwijs",
        "bron": "Npuls",
        "jaar": 2025,
        "link": "https://npuls.nl/kennisbank/ai-go-een-raamwerk-voor-ai-geletterdheid-in-het-onderwijs",
        "waarom": "Gebruik de vier dimensies als zelf-check op je versie 2: welke dimensie bleef in de uitvoering onderbelicht en verdient een plek in je volgende leerlijn-stap?"
      }
    ]
  },
};

/* ─── Module 04 · AI-beleid en de AI Act ─────────────────────────────────────────── */
const module4Details = {
"ai-act-school": {
    "format": "diepteles",
    "summary": "Sinds 2 februari 2025 is AI-geletterdheid geen ambitie meer maar een wettelijke plicht — en vanaf 2 augustus 2026 kan daarop worden gehandhaafd. In deze les leer je de AI Act lezen zoals een school hem moet lezen: welke praktijken zijn verboden (zoals emotieherkenning in de klas), welke toepassingen zijn hoog-risico (toelating, beoordeling, proctoring) en wat artikel 4 concreet van jouw team vraagt. Je sluit af met een quickscan van je eigen toepassingen en een bestuursmemo van een half A4 dat morgen op tafel kan.",
    "duration": {
      "total": "60 minuten",
      "blocks": [
        {
          "label": "Aanleiding",
          "min": 6
        },
        {
          "label": "Conceptueel kader",
          "min": 12
        },
        {
          "label": "Quickscan verboden praktijken",
          "min": 10
        },
        {
          "label": "Hoog-risico-toepassingen wegen",
          "min": 12
        },
        {
          "label": "Geletterdheidsplicht vertalen",
          "min": 10
        },
        {
          "label": "Bestuursmemo schrijven",
          "min": 8
        },
        {
          "label": "Deadline-check",
          "min": 2
        }
      ]
    },
    "opening": {
      "eyebrow": "Aanleiding",
      "aanleiding": "Dinsdagochtend, MT-overleg. De bestuurder schuift een mail van de raad van toezicht door: 'Voldoen wij eigenlijk aan de AI Act?' Drie paar ogen kijken naar jou. Je school gebruikt surveillance-software bij digitale toetsen, een adaptief oefenplatform dat niveau-adviezen geeft, en tientallen docenten werken met ChatGPT of Copilot — niemand weet precies wie, waarvoor en met welke gegevens. Je antwoord is eerlijk: 'Dat weet ik niet.' En dat antwoord is vanaf nu niet meer goed genoeg.\n\nDe AI-verordening (EU 2024/1689) is op 1 augustus 2024 in werking getreden en wordt gefaseerd van kracht. Twee onderdelen gelden al sinds 2 februari 2025: het verbod op een reeks AI-praktijken (artikel 5) en de AI-geletterdheidsplicht (artikel 4). Vanaf 2 augustus 2026 zijn de meeste overige verplichtingen van toepassing — waaronder de eisen aan hoog-risicosystemen uit bijlage III — en kan de nationale toezichthouder handhaven. Scholen die nu beginnen, bouwen rustig op; scholen die wachten, moeten straks rennen.\n\nDeze les maakt je geen jurist. Wel iemand die de kaart kan lezen: welke vragen stel je aan een leverancier, welke toepassingen verdienen voorrang, en wat zet je in een memo richting bestuur. Je eindigt met twee artefacten — een quickscan van je eigen toepassingen en een bestuursmemo van een half A4 — die samen het startpunt zijn van alles wat in 4.2 tot en met 4.6 volgt.",
      "waaromNu": "AI Act artikel 4 (geletterdheidsplicht) en artikel 5 (verboden praktijken) gelden sinds 2 februari 2025. Vanaf 2 augustus 2026 worden de hoog-risicoverplichtingen uit bijlage III van toepassing en kan worden gehandhaafd met aanzienlijke boetes. Onderwijs staat expliciet in de verordening: toelating, beoordeling, niveaubepaling en proctoring zijn hoog-risicotoepassingen; emotieherkenning in onderwijsinstellingen is verboden."
    },
    "conceptueel": {
      "eyebrow": "Conceptueel kader",
      "intro": "De AI Act is risicogebaseerd opgebouwd: een piramide met vier lagen. Bovenin de verboden praktijken — die mogen helemaal niet. Daaronder hoog-risicosystemen — die mogen, maar onder zware eisen. Daaronder systemen met transparantieverplichtingen (gebruikers moeten weten dat ze met AI praten of dat content gegenereerd is). Onderin minimaal risico — verreweg de meeste toepassingen. Voor scholen is één rolbegrip cruciaal: jouw school is vrijwel altijd gebruiksverantwoordelijke (deployer), niet aanbieder. De zwaarste plichten — conformiteitsbeoordeling, technische documentatie, CE-markering — liggen bij de aanbieder. Jouw plichten als gebruiksverantwoordelijke (artikel 26) zijn anders maar reëel: het systeem gebruiken volgens de instructies, menselijk toezicht organiseren, de werking monitoren en betrokkenen informeren.\n\nDe verboden praktijken van artikel 5 gelden sinds 2 februari 2025 — onverkort, ook voor scholen. Voor het onderwijs het meest relevant: AI-systemen die emoties afleiden in onderwijsinstellingen zijn verboden (met een smalle uitzondering voor medische en veiligheidsredenen). Verder verboden: sociale scoring, manipulatieve technieken die schade veroorzaken, en het ongericht verzamelen van gezichtsbeelden. Het venijn zit in de marketingtaal: 'engagement-detectie' in een proctoringtool, 'welzijnsmonitoring' in een leerlingvolg-app of 'aandachtsanalyse' via de webcam — als het systeem feitelijk gemoedstoestanden afleidt, valt het onder het verbod, hoe vriendelijk de folder ook klinkt.\n\nHoog-risico staat in bijlage III, punt 3 (onderwijs en beroepsopleiding): systemen voor toelating of toegang, voor het evalueren van leerresultaten en het sturen van het leerproces, voor het bepalen van het passende onderwijsniveau, en voor het monitoren en detecteren van ongeoorloofd gedrag tijdens toetsen — online proctoring dus. Hoog-risico betekent niet verboden; het betekent dat de aanbieder aan zware eisen moet voldoen en dat jij als school moet kunnen aantonen dat er menselijk toezicht is en dat besluiten niet blind op het systeem leunen. Dat raakt aan een oudere bekende: AVG artikel 22 verbiedt al sinds 2018 besluiten met aanzienlijke gevolgen die uitsluitend op geautomatiseerde verwerking berusten — een afwijzing of beoordeling waar geen mens serieus naar gekeken heeft, was dus al problematisch vóór de AI Act bestond.\n\nBlijft over: artikel 4, de geletterdheidsplicht. De tekst vraagt van aanbieders én gebruiksverantwoordelijken dat hun personeel een 'toereikend niveau van AI-geletterdheid' heeft, afgestemd op technische kennis, ervaring, opleiding en de context waarin de systemen worden gebruikt. Geen certificaateis, geen verplicht curriculum — wel een aantoonbare inspanning. De werkbare vertaling voor een school: weet wat je in huis hebt (register), zorg dat mensen geschoold zijn naar hun rol (scholing), en leg afspraken vast (beleid). Die drieslag is precies de opbouw van deze module.",
      "mentalModel": {
        "naam": "De risicopiramide, gelezen vanaf de werkvloer",
        "beschrijving": "Lees de AI Act niet als jurist (van artikel 1 naar 113) maar als school: begin bij wat je feitelijk in huis hebt en klim de piramide op. Per toepassing drie vragen: zit hier iets verbodens in (artikel 5)? Raakt dit toelating, beoordeling, niveaubepaling of toetsing (bijlage III)? En zo nee: weten de mensen die ermee werken wat ze doen (artikel 4)? Wie deze drie vragen per toepassing kan beantwoorden, heeft negentig procent van het schoolwerk gedaan."
      },
      "kernbegrippen": [
        {
          "term": "AI-geletterdheidsplicht (artikel 4)",
          "uitleg": "Sinds 2 februari 2025: personeel dat met AI werkt moet een toereikend niveau van AI-geletterdheid hebben, afgestemd op rol en context. Geen diploma-eis — wel een aantoonbare, gedocumenteerde inspanning."
        },
        {
          "term": "Verboden praktijk (artikel 5)",
          "uitleg": "AI die sinds 2 februari 2025 helemaal niet mag, ongeacht waarborgen. Voor scholen het meest relevant: emotieherkenning in onderwijsinstellingen — vaak verstopt achter termen als 'engagement-detectie' of 'welzijnsmonitoring'."
        },
        {
          "term": "Hoog-risicotoepassing (bijlage III, punt 3)",
          "uitleg": "Toelating en toegang, evaluatie van leerresultaten, bepalen van onderwijsniveau, en proctoring. Mag wél — maar met zware aanbiederseisen en een zorgplicht voor de school als gebruiker."
        },
        {
          "term": "Gebruiksverantwoordelijke (deployer, artikel 26)",
          "uitleg": "De rol die een school vrijwel altijd heeft: gebruiken volgens de instructies, menselijk toezicht organiseren, werking monitoren, betrokkenen informeren. De conformiteitslast ligt bij de aanbieder — jouw vragen aan de leverancier leggen de bewijslast waar hij hoort."
        },
        {
          "term": "AVG artikel 22",
          "uitleg": "Al sinds 2018: geen uitsluitend geautomatiseerde besluiten met aanzienlijke gevolgen voor een leerling of student. Een AI-advies mag; een AI-besluit zonder serieuze menselijke weging niet."
        }
      ]
    },
    "learningGoals": [
      "Je plaatst elke AI-toepassing in je school in de juiste AI Act-categorie (verboden, hoog-risico, transparantie, minimaal) en benoemt per categorie de bijbehorende plicht en datum.",
      "Je herkent verboden praktijken óók wanneer ze verstopt zitten in leveranciersmarketing zoals 'engagement-detectie' of 'welzijnsmonitoring', en je formuleert de controlevraag aan de leverancier.",
      "Je vertaalt de geletterdheidsplicht van artikel 4 naar een eerste concrete invulling voor jouw team, gedifferentieerd naar rol.",
      "Je schrijft een bestuursmemo van een half A4 met drie bevindingen, twee acties met eigenaar en datum, en één beslisvraag."
    ],
    "scenario": {
      "title": "Werksituatie",
      "context": "Je bent teamleider, schoolleider of ICT-coördinator op een vo-school, mbo-college of hbo-opleiding. Het bestuur heeft gevraagd om vóór de volgende MT-vergadering inzicht: waar staan wij ten opzichte van de AI Act? Er is geen AI-register, wel een verwerkersregister bij de FG, en er circuleren minstens tien AI-toepassingen — van proctoring tot losse ChatGPT-accounts. Je hebt zestig minuten en je wilt eindigen met iets wat je kunt versturen.",
      "role": "Teamleider, schoolleider of ICT-coördinator · vo, mbo of hbo",
      "tools": "Lijst van gebruikte systemen · verwerkersregister (via de FG) · papier of document voor de memo"
    },
    "steps": [
      {
        "title": "Quickscan verboden praktijken",
        "body": "Pak de vijf meest gebruikte AI-toepassingen in jouw school of team en leg ze langs de artikel 5-lijst. De kernvraag per toepassing: leidt dit systeem emoties of gemoedstoestanden af van leerlingen, studenten of personeel? Let op verhullende termen — 'aandachtsdetectie', 'engagement-score', 'stemanalyse voor welzijn'. Bij twijfel: noteer als rode vlag, niet als groen vinkje.",
        "time": "10 min",
        "voorbeeld": "Toepassing: proctoringtool bij digitale schoolexamens, met 'aandachtsdetectie via webcam' in de productsheet. Beoordeling: rode vlag — als de tool gemoedstoestand of aandacht afleidt uit gezichtsexpressie, raakt dat het verbod op emotieherkenning in onderwijsinstellingen (sinds februari 2025). Actie: leverancier schriftelijk vragen wat de functie technisch doet en of die uitschakelbaar is.",
        "workspace": {
          "field": "aiact-quickscan",
          "label": "Mijn quickscan verboden praktijken",
          "shortLabel": "Quickscan",
          "hint": "Vijf toepassingen · per toepassing: emotie-afleiding ja/nee/onbekend · rode vlag of groen",
          "placeholder": "Toepassing 1: ... — emotie-afleiding: ... — oordeel: ...\nToepassing 2: ...\nToepassing 3: ...\nToepassing 4: ...\nToepassing 5: ...",
          "rows": 7
        }
      },
      {
        "title": "Hoog-risico-toepassingen wegen",
        "body": "Loop de vier onderwijscategorieën uit bijlage III punt 3 langs: toelating/toegang, evaluatie van leerresultaten, niveaubepaling, proctoring. Welke systemen in jouw school raken deze categorieën? Noteer per systeem: de categorie, wie de aanbieder is, en wat jullie gebruikersplicht is (menselijk toezicht, gebruik volgens instructies, betrokkenen informeren). Vergeet de AVG-laag niet: wordt er ergens uitsluitend geautomatiseerd besloten?",
        "time": "12 min",
        "voorbeeld": "Systeem: adaptief oefenplatform dat per leerling een niveau-advies genereert dat meegaat in het determinatiebesluit. Categorie: bijlage III punt 3 — bepalen van onderwijsniveau. Aanbieder: de leverancier; wij zijn gebruiksverantwoordelijke. Onze plicht: het advies is input, nooit het besluit — de mentor weegt en de teamleider tekent. AVG-check: besluit is niet uitsluitend geautomatiseerd, dus artikel 22-proof, mits we dat ook zo documenteren.",
        "workspace": {
          "field": "aiact-hoogrisico",
          "label": "Mijn hoog-risico-inventaris",
          "shortLabel": "Hoog-risico",
          "hint": "Per systeem: bijlage III-categorie · aanbieder · onze gebruikersplicht · AVG art. 22-check",
          "placeholder": "Systeem: ... — categorie: ... — aanbieder: ... — onze plicht: ... — art. 22: ...\nSysteem: ...\nSysteem: ...",
          "rows": 7
        }
      },
      {
        "title": "Geletterdheidsplicht vertalen naar jouw team",
        "body": "Artikel 4 vraagt een niveau dat past bij rol en context — een docent die AI in de les gebruikt heeft iets anders nodig dan de roostermaker of het lid van de toelatingscommissie. Maak een driedeling: basis (iedereen), gebruikers (wie AI actief inzet), beslissers (wie op AI-output besluiten baseert). Schrijf per groep één zin: wat moeten zij minimaal weten of kunnen, en hoe organiseren we dat dit jaar?",
        "time": "10 min",
        "voorbeeld": "Basis (alle medewerkers): weet wat AI wel en niet is, kent de schoolafspraken — teamsessie van een uur in september. Gebruikers (docenten die AI inzetten): kunnen output controleren en weten welke gegevens er nooit in mogen — Module 1 van dit platform plus sectie-afspraak. Beslissers (toelatings- en determinatiecommissies): kennen bijlage III en AVG art. 22, kunnen uitleggen hoe menselijk toezicht is geborgd — aparte werksessie met de FG.",
        "workspace": {
          "field": "aiact-geletterdheid",
          "label": "Mijn artikel 4-driedeling",
          "shortLabel": "Geletterdheid",
          "hint": "Basis · gebruikers · beslissers — per groep: minimumniveau + hoe georganiseerd + wanneer",
          "placeholder": "Basis: ... — via ... — gereed: ...\nGebruikers: ... — via ... — gereed: ...\nBeslissers: ... — via ... — gereed: ...",
          "rows": 6
        }
      },
      {
        "title": "Bestuursmemo schrijven",
        "body": "Half A4, drie blokken: drie bevindingen uit je quickscan en hoog-risico-inventaris, twee acties met eigenaar en datum, één beslisvraag waar het bestuur ja of nee op kan zeggen. Geen juridisch essay — een werkdocument dat de volgende vergadering een besluit oplevert. Eis aan jezelf: noem minimaal één ding dat goed geregeld is. Een memo dat alleen alarm slaat, wordt weggelegd.",
        "time": "8 min",
        "voorbeeld": "Bevindingen: (1) proctoringtool heeft 'aandachtsdetectie' — mogelijk strijdig met art. 5, navraag loopt; (2) niveau-adviezen adaptief platform gaan zonder vastgelegde menselijke weging mee in determinatie; (3) er is geen AI-register, wel een actueel verwerkersregister — goede basis. Acties: leveranciersverklaring proctoring (eigenaar: ICT-coördinator, vóór 1 juli); wegingsprocedure determinatie vastleggen (eigenaar: teamleider, vóór start schooljaar). Beslisvraag: stemt het bestuur in met een AI-register en een scholingsplan artikel 4 vóór 1 oktober?",
        "workspace": {
          "field": "aiact-memo",
          "label": "Mijn bestuursmemo (half A4)",
          "shortLabel": "Bestuursmemo",
          "hint": "Drie bevindingen (minstens één positieve) · twee acties met eigenaar en datum · één beslisvraag",
          "placeholder": "Bevinding 1: ...\nBevinding 2: ...\nBevinding 3: ...\nActie 1: ... — eigenaar: ... — datum: ...\nActie 2: ... — eigenaar: ... — datum: ...\nBeslisvraag: ...",
          "rows": 8
        }
      },
      {
        "title": "Deadline-check",
        "body": "Zet twee data in de jaaragenda van je team of MT: een moment vóór 2 augustus 2026 waarop het AI-register en het scholingsplan staan, en een jaarlijks terugkeermoment voor de review. Compliance is geen project met een einde — het is een ritme.",
        "time": "2 min",
        "workspace": {
          "field": "aiact-deadlines",
          "label": "Mijn twee agendadata",
          "shortLabel": "Deadlines",
          "hint": "Gereed-moment vóór aug 2026 · jaarlijks reviewmoment",
          "placeholder": "Gereed-moment: ... (vóór 2 aug 2026)\nJaarlijkse review: ...",
          "rows": 3
        }
      }
    ],
    "workedExamples": [
      {
        "title": "Drie toepassingen classificeren met AI als sparringpartner",
        "prompt": "Ik beschrijf drie AI-toepassingen op onze school. Geef per toepassing de meest waarschijnlijke AI Act-categorie (verboden / hoog-risico / transparantie / minimaal), het relevante artikel of bijlage-onderdeel, en de eerste controlevraag die ik aan de leverancier of intern moet stellen. Toepassing 1: proctoringsoftware die tijdens digitale toetsen webcam en schermactiviteit analyseert. Toepassing 2: een welzijns-app die op basis van gezichtsexpressie een stemmingsscore per leerling toont. Toepassing 3: een tekstgenerator waarmee docenten lesbrieven schrijven.",
        "voorbeeldOutput": "1. Proctoringsoftware — hoog-risico (bijlage III, punt 3: monitoren en detecteren van ongeoorloofd gedrag tijdens toetsen). Controlevraag: kan de leverancier de hoog-risicodocumentatie en de instructies voor menselijk toezicht overleggen, en analyseert de tool uitsluitend gedrag of ook emoties?\n\n2. Welzijns-app met stemmingsscore — vermoedelijk verboden (artikel 5: emotieherkenning in onderwijsinstellingen; de uitzondering voor medische of veiligheidsredenen lijkt hier niet van toepassing). Controlevraag: stopzetten of bevriezen, en aan de leverancier vragen welke technische functie de score genereert. Bespreek dit met de FG vóór verder gebruik.\n\n3. Tekstgenerator voor lesbrieven — minimaal risico onder de AI Act. Wel relevant: artikel 4 (kunnen docenten output controleren?) en de AVG zodra er persoonsgegevens van leerlingen in prompts belanden. Controlevraag: is afgesproken welke gegevens er nooit in mogen?",
        "commentaar": "Sterk aan deze output: per toepassing categorie, grondslag én een handelingsgerichte controlevraag. Maar AI-classificatie is een startpunt, geen juridisch advies — leg de uitkomst altijd naast je FG of jurist, zeker bij de rode vlag van toepassing 2. En onthoud: de categorie hangt af van wat de tool feitelijk doet, niet van wat de folder zegt. Vraag dus door op techniek, niet op marketing.",
        "tryItYourself": {
          "field": "we-aiact-classificatie",
          "label": "Classificeer drie toepassingen van jouw school",
          "shortLabel": "Eigen classificatie",
          "hint": "Per toepassing: categorie · grondslag · controlevraag — en check daarna met je FG",
          "example": "1. [toepassing]: categorie ... — grondslag ... — controlevraag ...\n2. ...\n3. ..."
        }
      },
      {
        "title": "Leveranciersvraag formuleren die de bewijslast goed legt",
        "prompt": "Schrijf een zakelijke mail (max 150 woorden) aan onze proctoringleverancier. Context: hun productsheet noemt 'aandachtsdetectie via webcam'. Ik wil weten: wat doet die functie technisch, leidt het systeem emoties of gemoedstoestanden af, onder welke AI Act-categorie plaatst de leverancier het product zelf, en welke documentatie kunnen zij overleggen. Toon: feitelijk, niet beschuldigend, met antwoordtermijn.",
        "voorbeeldOutput": "Onderwerp: AI Act-classificatie [productnaam] — verzoek om schriftelijke toelichting\n\nGeachte heer/mevrouw,\n\nOnze school gebruikt [product] bij digitale toetsen. In het kader van onze AI Act-inventarisatie ontvangen wij graag vóór [datum] schriftelijk antwoord op vier vragen:\n\n1. Wat doet de functie 'aandachtsdetectie' technisch — welke signalen worden geanalyseerd en welke conclusies trekt het systeem?\n2. Leidt het systeem emoties of gemoedstoestanden af van kandidaten (artikel 5 AI-verordening)?\n3. Onder welke AI Act-categorie classificeert u het product, en welke documentatie (conformiteit, instructies voor menselijk toezicht) kunt u overleggen?\n4. Is de functie per instelling uitschakelbaar?\n\nWij vragen dit als gebruiksverantwoordelijke in de zin van artikel 26. Met vriendelijke groet, [naam, functie]",
        "commentaar": "De mail doet drie dingen goed: hij vraagt naar techniek in plaats van naar geruststelling, hij benoemt de eigen rol (gebruiksverantwoordelijke) waardoor de aanbiedersplicht expliciet bij de leverancier ligt, en hij stelt een termijn. Bewaar het antwoord in je dossier — bij een toezichtsvraag is aantoonbare navraag de helft van je verdediging. Geen of een ontwijkend antwoord is óók informatie: escaleer dan naar de FG.",
        "tryItYourself": {
          "field": "we-aiact-leveranciersmail",
          "label": "Schrijf jouw leveranciersmail",
          "shortLabel": "Leveranciersmail",
          "hint": "Vier vragen · eigen rol benoemen · antwoordtermijn · feitelijke toon",
          "example": "Onderwerp: ... Vraag 1: ... Vraag 2: ... Vraag 3: ... Vraag 4: ... Termijn: ..."
        }
      },
      {
        "title": "Geletterdheidsparagraaf voor het jaarplan",
        "prompt": "Schrijf een paragraaf van max 120 woorden voor ons jaarplan waarin we de invulling van AI Act artikel 4 vastleggen. Drie doelgroepen: alle medewerkers (basis), actieve gebruikers, beslissers. Concreet: wat, via welk middel, wanneer gereed. Geen beleidsproza.",
        "voorbeeldOutput": "AI-geletterdheid (AI Act artikel 4). Onze school zorgt voor een toereikend niveau van AI-geletterdheid, afgestemd op rol. Alle medewerkers volgen in periode 1 een basissessie (één uur): wat AI is, wat de schoolafspraken zijn. Medewerkers die AI actief inzetten in les of werkproces ronden vóór 1 februari Module 1 van het scholingsprogramma af en tekenen de teamafspraken. Leden van toelatings-, determinatie- en examencommissies volgen een werksessie met de functionaris gegevensbescherming over hoog-risicotoepassingen en menselijk toezicht (vóór 1 april). De ICT-coördinator houdt deelname bij in het scholingsregister; het MT evalueert jaarlijks in juni. Hiermee documenteren wij de inspanning die artikel 4 sinds 2 februari 2025 vraagt.",
        "commentaar": "Let op de drie ingrediënten die deze paragraaf verdedigbaar maken: differentiatie naar rol (precies wat artikel 4 vraagt), data en eigenaren (aantoonbaarheid), en een registratie- en evaluatiemoment (ritme in plaats van eenmaligheid). Wat je niet moet doen: 'wij vinden AI-geletterdheid belangrijk' opschrijven zonder middel of datum — dat is een intentie, geen invulling van een wettelijke plicht.",
        "tryItYourself": {
          "field": "we-aiact-jaarplan",
          "label": "Schrijf jouw jaarplanparagraaf",
          "shortLabel": "Jaarplanparagraaf",
          "hint": "Drie doelgroepen · middel · datum · wie registreert",
          "example": "Basis: ... vóór ... Gebruikers: ... vóór ... Beslissers: ... vóór ... Registratie: ..."
        }
      }
    ],
    "vakvariaties": [
      {
        "vak": "Teamleider vo",
        "body": "Jouw scope: docentgebruik en leerlinggebruik in je afdeling, plus de digitale SE-omgeving. Quickscan-prioriteit: proctoring- en surveillancefuncties bij toetsen en alles wat 'leerlingwelzijn meet'. Determinatie- en bevorderingsbesluiten met AI-input zijn jouw hoog-risico-hoek: leg de menselijke weging vast."
      },
      {
        "vak": "ICT-coördinator mbo",
        "body": "Examinering is in het mbo sterk gereguleerd — proctoring en beoordelingsondersteuning bij examens eerst. Koppel je AI-inventaris direct aan het verwerkersregister en trek samen op met de FG en de examencommissie. Jij bent vaak de enige die alle systemen kent: jouw lijst is het fundament van les 4.2."
      },
      {
        "vak": "Examencommissielid of toetscommissie hbo",
        "body": "Proctoring bij tentamens en AI-ondersteunde beoordeling raken direct aan jullie borgingstaak. Vraag per systeem naar de bijlage III-status en de instructies voor menselijk toezicht. Les 4.4 werkt dit uit; neem uit deze les vooral de leveranciersvragen mee."
      },
      {
        "vak": "Schoolleider zonder eigen FG-capaciteit",
        "body": "Kleinere scholen delen vaak een FG op bestuursniveau. Doe de quickscan zelf (die vraagt geen jurist), maar agendeer de rode vlaggen bestuurlijk: AI Act-compliance is een bestuursverantwoordelijkheid en leent zich voor een gezamenlijk register over scholen heen."
      },
      {
        "vak": "Stafmedewerker kwaliteit of bestuursbureau",
        "body": "Jij kunt de quickscan opschalen naar bestuursniveau: één format, alle scholen of opleidingen, één geaggregeerd beeld voor de raad van toezicht. Pas op voor schijnvolledigheid — zonder werkvloerinput (les 4.2) mis je het schaduwgebruik dat juist het grootste risico draagt."
      },
      {
        "vak": "Kartrekker zonder formele rol",
        "body": "Je hebt geen mandaat nodig om een quickscan te doen — wel om er gevolg aan te geven. Doe de scan voor je eigen team, schrijf de memo, en bied hem je teamleider aan als startpunt. De memo-vorm (drie bevindingen, twee acties, één beslisvraag) is precies gemaakt om zonder positie tóch beweging te creëren."
      }
    ],
    "valkuilen": [
      {
        "titel": "Wachten tot augustus 2026",
        "watGebeurtEr": "'Handhaving is pas in 2026, dus we hebben tijd.' Maar artikel 4 en 5 gelden al sinds februari 2025 — een verboden praktijk is nu verboden, niet straks. En een geletterdheidsplan, register en leveranciersdossier bouw je niet in een zomervakantie.",
        "fix": "Behandel 2 augustus 2026 als opleverdatum, niet als startdatum. Plan terug: register en scholingsplan dit schooljaar, leveranciersverklaringen binnen drie maanden, rode vlaggen per direct."
      },
      {
        "titel": "De AI Act bij ICT parkeren",
        "watGebeurtEr": "Compliance wordt 'iets van de ICT-coördinator'. Maar de hoog-risicocategorieën gaan over toelating, determinatie en toetsing — besluiten van teamleiders, commissies en directie. De ICT-coördinator kan systemen inventariseren, geen onderwijsbesluiten herontwerpen.",
        "fix": "Maak een duo-eigenaarschap: ICT-coördinator voor systemen en leveranciers, een MT-lid voor besluiten en processen. De memo uit deze les adresseer je aan beiden."
      },
      {
        "titel": "De verboden-lijst te smal lezen",
        "watGebeurtEr": "Je zoekt naar een systeem dat letterlijk 'emotieherkenning' heet en vindt niets. Intussen draait er een proctoringtool met 'aandachtsdetectie' en een welzijns-app met 'stemmingsscores' — functioneel hetzelfde, commercieel anders verpakt.",
        "fix": "Scan op functie, niet op naam. De testvraag: trekt dit systeem conclusies over de gemoedstoestand van een mens? Bij ja of onbekend: leveranciersvraag eruit, gebruik bevriezen tot het antwoord er is."
      },
      {
        "titel": "Aanbiedersplichten op je eigen bord leggen",
        "watGebeurtEr": "Je leest over conformiteitsbeoordelingen en technische documentatie en concludeert dat de school dat allemaal moet regelen. Verlamming volgt — het lijkt onbegonnen werk.",
        "fix": "Scheid de rollen: conformiteit is de plicht van de aanbieder; jouw school is gebruiksverantwoordelijke met artikel 26-plichten — toezicht, instructies volgen, informeren. Jouw instrument is de goede vraag aan de leverancier, niet het zelf schrijven van technische dossiers."
      },
      {
        "titel": "Geletterdheid afvinken met één studiedag",
        "watGebeurtEr": "Eén plenaire middag over AI, presentielijst erbij, klaar. Maar artikel 4 vraagt een niveau afgestemd op rol en context — de toelatingscommissie heeft iets wezenlijk anders nodig dan de conciërge, en een eenmalige sessie veroudert binnen een jaar.",
        "fix": "Differentieer (basis/gebruikers/beslissers) en maak er een ritme van: jaarlijkse basisupdate, rolspecifieke verdieping, registratie van deelname. De driedeling uit stap 3 is je minimumstructuur."
      }
    ],
    "geoefendSpoor": {
      "eyebrow": "Voor de geoefende kartrekker",
      "titel": "Zet een AI-register met jaarcyclus op",
      "beschrijving": "Heb je de quickscan en de memo af en wil je door? Bouw het AI-register dat je school vanaf augustus 2026 aantoonbaar nodig heeft: per toepassing de AI Act-categorie, de aanbieder, de gebruikersplichten, een eigenaar en een reviewdatum. Koppel het aan het bestaande verwerkingsregister van de FG zodat het geen tweede schaduwadministratie wordt. Investering: twee dagdelen samen met de FG, daarna een uur per kwartaal. Opbrengst: aantoonbaarheid richting toezichthouder, rust in het MT, en het fundament waar lessen 4.2 en 4.3 direct op voortbouwen.",
      "opdracht": "Lever vóór het einde van het schooljaar een gevuld AI-register op met per toepassing categorie, eigenaar en reviewdatum. Deel met bestuur en FG, en agendeer de eerste jaarreview."
    },
    "eindcriteria": [
      {
        "criterium": "Quickscan verboden praktijken",
        "onder": "Toepassingen op naam gescand, niet op functie.",
        "op": "Vijf toepassingen gescand op emotie-afleiding, rode vlaggen expliciet benoemd.",
        "boven": "+ Leveranciersvraag verstuurd voor elke rode vlag, antwoorden gedossierd."
      },
      {
        "criterium": "Hoog-risico-inventaris",
        "onder": "Hoog-risico verward met verboden, of categorieën niet herkend.",
        "op": "Relevante systemen geplaatst in bijlage III-categorieën met benoemde gebruikersplicht.",
        "boven": "+ AVG art. 22-check per systeem en menselijke weging gedocumenteerd."
      },
      {
        "criterium": "Geletterdheidsaanzet",
        "onder": "Eén generieke scholingsactie voor iedereen.",
        "op": "Driedeling basis/gebruikers/beslissers met middel en datum per groep.",
        "boven": "+ Aanzet vertaald naar een jaarplanparagraaf met registratie en evaluatiemoment."
      },
      {
        "criterium": "Bestuursmemo",
        "onder": "Alarmerende of vage memo zonder beslisvraag.",
        "op": "Half A4: drie bevindingen (waarvan één positief), twee acties met eigenaar en datum, één beslisvraag.",
        "boven": "+ Memo geagendeerd en besluit genoteerd in het volgende MT- of bestuursoverleg."
      },
      {
        "criterium": "Rol- en deadlinebesef",
        "onder": "Aanbieders- en gebruikersplichten lopen door elkaar.",
        "op": "Eigen rol als gebruiksverantwoordelijke benoemd; twee data in de jaaragenda gezet.",
        "boven": "+ Duo-eigenaarschap (systemen + besluiten) belegd en bevestigd."
      }
    ],
    "reflection": [
      "Welke toepassing in jouw school heb je tijdens de quickscan bewust overgeslagen of klein gemaakt — en wat zegt die aarzeling over waar het echte gesprek moet plaatsvinden?",
      "Wie is in jouw organisatie nu feitelijk eigenaar van AI Act-compliance — en klopt dat met wie er wakker van zou moeten liggen? Wat is jouw eerste zet om dat eigenaarschap goed te beleggen?",
      "Wat antwoord je een docent die zegt: 'Ik gebruik gewoon ChatGPT voor mijn lesbrieven, daar gaat die hele AI Act toch niet over'? Formuleer een antwoord dat zijn punt deels erkent én artikel 4 serieus neemt."
    ],
    "checklist": [
      "Vijf toepassingen gescand op artikel 5 — rode vlaggen genoteerd",
      "Leveranciersvraag geformuleerd voor minstens één rode vlag of onduidelijke functie",
      "Hoog-risicosystemen geplaatst in de vier bijlage III-categorieën met gebruikersplicht",
      "AVG artikel 22-check gedaan op besluiten met AI-input",
      "Artikel 4-driedeling (basis/gebruikers/beslissers) ingevuld met middel en datum",
      "Bestuursmemo van een half A4 geschreven met beslisvraag",
      "Twee data in de jaaragenda: gereed-moment vóór 2 augustus 2026 + jaarlijkse review",
      "Memo gedeeld met of geagendeerd bij MT, bestuur of FG"
    ],
    "verderLezen": [
      {
        "titel": "Verordening (EU) 2024/1689 — de AI-verordening, geconsolideerde tekst",
        "bron": "EUR-Lex",
        "jaar": 2024,
        "link": "https://eur-lex.europa.eu",
        "waarom": "De brontekst zelf — zoek op 2024/1689 en lees artikel 4, artikel 5, artikel 26 en bijlage III punt 3. Een uur lezen die elke discussie met leveranciers scherper maakt."
      },
      {
        "titel": "Toezicht op AI en algoritmes",
        "bron": "Autoriteit Persoonsgegevens",
        "jaar": 2025,
        "link": "https://www.autoriteitpersoonsgegevens.nl",
        "waarom": "De AP coördineert het Nederlandse algoritmetoezicht en publiceert uitleg over de samenloop van AI Act en AVG — direct relevant voor de artikel 22-check."
      },
      {
        "titel": "AI en de AI-verordening in het onderwijs",
        "bron": "Kennisnet",
        "jaar": 2025,
        "link": "https://www.kennisnet.nl",
        "waarom": "Vertaalt de verordening naar po/vo/mbo-praktijk, inclusief de geletterdheidsplicht en voorbeelden van hoog-risicotoepassingen in de school."
      },
      {
        "titel": "Kennisbank AI — wet- en regelgeving voor mbo, hbo en wo",
        "bron": "Npuls",
        "jaar": 2025,
        "link": "https://www.npuls.nl",
        "waarom": "Voor mbo en hoger onderwijs de plek waar AI Act, toetsing en instellingsbeleid samenkomen — opstap naar les 4.4."
      }
    ]
  },
  "ai-inventarisatie": {
    "format": "diepteles",
    "summary": "Je kunt geen beleid maken over iets wat je niet ziet. Deze les volgt de Kennisnet-aanpak: eerst systematisch in kaart brengen welk AI-gebruik er al ís — gecontracteerde systemen, gedoogde tools én het schaduwgebruik via privé-accounts dat in vrijwel elke school de grootste laag blijkt. Je leert een inventarisatie opzetten die eerlijke antwoorden uitlokt in plaats van sociaal wenselijke, en je sluit af met een gevulde inventarisatiekaart, een anonieme peiling en een rapportage van één pagina.",
    "duration": {
      "total": "55 minuten",
      "blocks": [
        {
          "label": "Aanleiding",
          "min": 6
        },
        {
          "label": "Conceptueel kader",
          "min": 10
        },
        {
          "label": "Drie lagen in kaart",
          "min": 10
        },
        {
          "label": "Anonieme peiling ontwerpen",
          "min": 12
        },
        {
          "label": "Embedded AI-check",
          "min": 6
        },
        {
          "label": "Risico-triage",
          "min": 6
        },
        {
          "label": "Rapportage + vervolgafspraak",
          "min": 5
        }
      ]
    },
    "opening": {
      "eyebrow": "Aanleiding",
      "aanleiding": "Teamvergadering, agendapunt 4: 'AI op school'. De teamleider vraagt: 'Wie gebruikt er eigenlijk AI in zijn werk?' Twee handen, aarzelend. Daarna de rondvraag in de wandelgang: de docent Engels laat ChatGPT al een jaar toetsvragen genereren, de mentor vat oudergesprekken samen met een gratis transcriptietool, drie collega's gebruiken een AI-functie in hun methode-software zonder te weten dat het AI is, en in havo 4 heeft naar schatting de helft van de leerlingen een eigen chatbot-routine voor huiswerk. Twee handen in de vergadering; tientallen gebruikers in werkelijkheid.\n\nDit gat tussen wat zichtbaar is en wat gebeurt, heeft een naam: schaduwgebruik. Het is geen onwil — het is het normale patroon wanneer technologie sneller beweegt dan beleid. Maar voor een school die sinds februari 2025 een geletterdheidsplicht heeft en richting augustus 2026 haar hoog-risicotoepassingen op orde moet hebben (les 4.1), is niet-weten geen neutrale toestand meer. De Kennisnet-aanpak voor AI-beleid begint daarom niet bij regels maar bij inventariseren: eerst zien, dan vinden, dan afspreken.\n\nDeze les leert je inventariseren op een manier die werkt. De valkuil is namelijk niet technisch maar sociaal: wie inventariseert met een sanctietoon, krijgt een lege lijst en houdt het schaduwgebruik precies waar het zat — in de schaduw. Je ontwerpt een peiling die eerlijkheid uitlokt, je checkt de AI die al ongemerkt in je bestaande systemen zit, en je trieert de oogst naar urgentie. Eindproduct: een inventarisatiekaart en een rapportage van één pagina die de feitelijke basis vormt voor het beleid van les 4.3.",
      "waaromNu": "Kennisnet zet inventarisatie als eerste stap in de aanpak voor AI-beleid op school: zicht op feitelijk gebruik gaat vooraf aan afspraken. De AI Act maakt die volgorde urgent — de geletterdheidsplicht (sinds februari 2025) en de hoog-risicoverplichtingen (vanaf augustus 2026) zijn alleen in te vullen voor toepassingen die je kent. Elke maand zonder inventaris groeit het schaduwgebruik verder."
    },
    "conceptueel": {
      "eyebrow": "Conceptueel kader",
      "intro": "AI-gebruik in een school is een ijsberg met drie lagen. Boven water: de gecontracteerde systemen — tools met een verwerkersovereenkomst, bekend bij de FG, zichtbaar in het verwerkersregister. Op de waterlijn: het gedoogde gebruik — tools die teams of secties zelf hebben gevonden, soms besproken in een vergadering, nooit formeel geregeld. Onder water, en vrijwel altijd de grootste laag: het schaduwgebruik — privé-accounts van docenten, gratis tools waar leerlinggegevens in verdwijnen, AI-routines van leerlingen en studenten, en AI-functies die leveranciers via een update in bestaande pakketten hebben gezet zonder dat iemand het merkte. Een inventarisatie die alleen de bovenste laag telt, produceert schijnzekerheid.\n\nVoor elke laag past een andere methode. De gecontracteerde laag inventariseer je via documenten: verwerkersregister, contractenoverzicht, navraag bij de FG. De gedoogde laag via gesprek: teamleiders en secties weten wat er circuleert. De schaduwlaag bereik je alleen met een anonieme peiling — en die slaagt of faalt op toon. Drie ontwerpprincipes: vraag naar taken in plaats van tools ('waarvoor gebruik je AI' levert meer op dan 'welke tools gebruik je'), garandeer expliciet dat antwoorden niet tot sancties leiden, en peil leerlingen of studenten apart — hun gebruik is een eigen werkelijkheid die docentenschattingen structureel onderschatten.\n\nDe vierde bron wordt het vaakst vergeten: embedded AI. Leerlingvolgsystemen, ELO's, methodesoftware en officepakketten krijgen AI-functies via updates — een 'slimme samenvatting' hier, een 'adaptieve suggestie' daar. Niemand heeft er een besluit over genomen, dus niemand voelt zich eigenaar. Toch telt het mee voor artikel 4 en kan het bijlage III raken zodra het leerresultaten evalueert of niveaus adviseert. De standaardvraag aan elke kernleverancier: welke AI-functies zitten er in ons pakket, welke staan aan, en welke staan standaard aan zonder dat wij dat kozen?\n\nInventariseren zonder vervolg is erger dan niet inventariseren: het wekt verwachtingen en levert enquêtemoeheid op. Plan daarom vóór je peilt al het vervolg — een rapportage met datum, een terugkoppeling aan iedereen die meedeed, en een triage die de oogst sorteert in drie bakken: direct regelen (persoonsgegevens of hoog-risico in het geding), afspraak nodig (breed gebruik zonder kader), vrij laten (laag risico, geen gegevens). Die drie bakken zijn de grondstof van les 4.3.",
      "mentalModel": {
        "naam": "De ijsberg van AI-gebruik",
        "beschrijving": "Boven water drijft wat gecontracteerd is, op de waterlijn wat gedoogd wordt, onder water wat niemand geregistreerd heeft — privé-accounts, leerlinggebruik en AI-functies die via updates binnenkwamen. Beleid dat alleen op de zichtbare punt is gebouwd, kapseist op wat eronder zit. Inventariseren is duiken: per laag een eigen methode, en de wil om te zien wat je liever niet zag."
      },
      "kernbegrippen": [
        {
          "term": "AI-register (inventarisatiekaart)",
          "uitleg": "Doorlopend overzicht van AI-toepassingen met per toepassing: doel, gebruikers, gegevens die erin gaan, AI Act-categorie en eigenaar. Geen momentopname maar een levend document, gekoppeld aan het verwerkersregister."
        },
        {
          "term": "Schaduwgebruik",
          "uitleg": "AI-gebruik buiten elk formeel kader: privé-accounts, gratis tools, eigen routines van personeel en leerlingen. In vrijwel elke school de grootste laag — en alleen zichtbaar te maken zonder sanctietoon."
        },
        {
          "term": "Embedded AI",
          "uitleg": "AI-functies die via updates in bestaande systemen verschijnen (LVS, ELO, methodes, officepakket). Niemand besloot erover, dus niemand is eigenaar — totdat jij de leveranciersvraag stelt."
        },
        {
          "term": "Anonieme peiling",
          "uitleg": "Het enige instrument dat de schaduwlaag bereikt. Ontwerpprincipes: vraag naar taken in plaats van tools, garandeer sanctievrijheid expliciet, en peil leerlingen of studenten apart."
        },
        {
          "term": "Triage",
          "uitleg": "De oogst sorteren in drie bakken: direct regelen, afspraak nodig, vrij laten. Voorkomt dat de inventaris een lijst blijft en maakt hem tot grondstof voor beleid."
        }
      ]
    },
    "learningGoals": [
      "Je brengt het AI-gebruik in je school in kaart langs drie lagen (gecontracteerd, gedoogd, schaduw) en kiest per laag de passende inventarisatiemethode.",
      "Je ontwerpt een anonieme peiling van zes tot acht vragen die eerlijke antwoorden uitlokt — taakgericht, sanctievrij, met een aparte leerling- of studentvariant.",
      "Je stelt de embedded AI-vraag aan je drie kernleveranciers en verwerkt de antwoorden in de inventarisatiekaart.",
      "Je trieert de volledige oogst in drie bakken (direct regelen, afspraak nodig, vrij laten) en vat het beeld samen in een rapportage van één pagina met vervolgafspraak."
    ],
    "scenario": {
      "title": "Werksituatie",
      "context": "Je bent teamleider of ICT-coördinator en hebt na les 4.1 een bestuursmemo liggen waarin een AI-register is toegezegd. Nu moet dat register gevuld. Het verwerkersregister van de FG is actueel maar dekt alleen gecontracteerde systemen; over docent- en leerlinggebruik bestaan alleen anekdotes. Je hebt twee weken tot de volgende teamvergadering en wilt daar een eerste feitelijk beeld presenteren — geen perfecte telling, wel een eerlijke foto.",
      "role": "Teamleider, schoolleider of ICT-coördinator · vo, mbo of hbo",
      "tools": "Verwerkersregister (via de FG) · peiling-tool van school · contactgegevens van drie kernleveranciers"
    },
    "steps": [
      {
        "title": "Drie lagen in kaart — start met wat je al weet",
        "body": "Zet de ijsberg op papier. Laag 1 (gecontracteerd): haal uit het verwerkersregister en contractenoverzicht alles wat AI bevat of claimt. Laag 2 (gedoogd): noteer wat jij en je naaste collega's wéten dat circuleert. Laag 3 (schaduw): schrijf je aannames op — die toets je straks met de peiling. Het verschil tussen weten en aannemen expliciet maken is hier de hele oefening.",
        "time": "10 min",
        "voorbeeld": "Laag 1: adaptief rekenplatform (contract, VWO), proctoringtool (contract), AI-functie in de ELO (in contract, nooit besproken). Laag 2: sectie Engels gebruikt ChatGPT voor toetsvragen (besproken in sectieoverleg, niets vastgelegd). Laag 3 — aannames: meerderheid docenten gebruikt incidenteel een gratis chatbot; leerlingen bovenbouw structureel; minstens één collega plakt leerlingteksten in een gratis tool. Te toetsen met de peiling.",
        "workspace": {
          "field": "inv-drielagen",
          "label": "Mijn ijsberg in drie lagen",
          "shortLabel": "Drie lagen",
          "hint": "Laag 1 uit documenten · laag 2 uit gesprekken · laag 3 als expliciete aannames",
          "placeholder": "Laag 1 (gecontracteerd): ...\nLaag 2 (gedoogd): ...\nLaag 3 (aannames over schaduwgebruik): ...",
          "rows": 7
        }
      },
      {
        "title": "Anonieme peiling ontwerpen",
        "body": "Zes tot acht vragen, taakgericht en sanctievrij. Open met een kadertekst die expliciet zegt: dit is om te leren wat er speelt, niet om iemand aan te spreken; antwoorden zijn anoniem en leiden niet tot maatregelen tegen personen. Vraag naar taken ('voor welke werkzaamheden zet je weleens AI in?'), naar gegevens ('komen er weleens leerling- of studentgegevens in een AI-tool terecht?') en naar behoefte ('waar zou je afspraken of hulp bij willen?'). Maak een aparte, kortere variant voor leerlingen of studenten.",
        "time": "12 min",
        "voorbeeld": "Kadertekst: 'We willen weten hoe AI op onze school gebruikt wordt, zodat afspraken aansluiten bij de praktijk. Anoniem, geen gevolgen voor personen.' Vragen: 1. Voor welke taken gebruik je weleens AI? (open) 2. Hoe vaak? (nooit/maandelijks/wekelijks/dagelijks) 3. Via welk soort account? (school/privé/weet niet) 4. Komen er weleens gegevens van leerlingen in terecht? (ja/nee/weet niet) 5. Wat levert het je op? 6. Waar twijfel je over? 7. Welke afspraak of hulp zou jou helpen?",
        "workspace": {
          "field": "inv-peiling",
          "label": "Mijn peiling (kadertekst + vragen)",
          "shortLabel": "Peiling",
          "hint": "Kadertekst met sanctievrijheid · 6-8 taakgerichte vragen · aparte leerling/studentvariant genoteerd",
          "placeholder": "Kadertekst: ...\nVraag 1: ...\nVraag 2: ...\nVraag 3: ...\nVraag 4: ...\nVraag 5: ...\nVraag 6: ...\nLeerling/studentvariant — drie vragen: ...",
          "rows": 9
        }
      },
      {
        "title": "Embedded AI-check bij drie kernleveranciers",
        "body": "Kies de drie systemen waar je school het meest op leunt (LVS, ELO, grootste methodepakket) en formuleer per leverancier dezelfde drievraag: welke AI-functies zitten in ons pakket, welke staan bij ons aan, en welke staan standaard aan zonder dat wij dat kozen? Zet een antwoordtermijn en noteer wie de antwoorden in de inventarisatiekaart verwerkt.",
        "time": "6 min",
        "workspace": {
          "field": "inv-embedded",
          "label": "Mijn embedded AI-check",
          "shortLabel": "Embedded check",
          "hint": "Drie systemen · drievraag per leverancier · termijn + wie verwerkt",
          "placeholder": "Systeem 1: ... — verstuurd op: ... — termijn: ...\nSysteem 2: ...\nSysteem 3: ...\nVerwerking door: ...",
          "rows": 5
        }
      },
      {
        "title": "Risico-triage — drie bakken",
        "body": "Sorteer alles wat je nu hebt (lagen 1 en 2, aannames laag 3, embedded-vermoedens) in drie bakken. Direct regelen: persoonsgegevens in ongecontracteerde tools, of raakvlak met verboden/hoog-risico uit les 4.1. Afspraak nodig: breed gebruik zonder kader, maar zonder acuut gegevensrisico. Vrij laten: laag risico, geen gegevens, geen besluiten. Wees streng op bak één — die is korter dan je angst suggereert en langer dan je hoopt.",
        "time": "6 min",
        "voorbeeld": "Direct regelen: oudergesprek-transcripties in gratis tool (persoonsgegevens, geen contract); 'aandachtsdetectie' in proctoring (rode vlag 4.1). Afspraak nodig: ChatGPT voor toetsvragen en lesmateriaal (breed, geen leerlingdata); leerlinggebruik bij huiswerk. Vrij laten: AI-gegenereerde afbeeldingen voor posters; brainstormen zonder gegevens.",
        "workspace": {
          "field": "inv-triage",
          "label": "Mijn triage in drie bakken",
          "shortLabel": "Triage",
          "hint": "Direct regelen · afspraak nodig · vrij laten — met per item één regel waarom",
          "placeholder": "Direct regelen: ...\nAfspraak nodig: ...\nVrij laten: ...",
          "rows": 7
        }
      },
      {
        "title": "Rapportage van één pagina + vervolgafspraak",
        "body": "Vat samen op één pagina: de foto (drie lagen, aantallen waar je ze hebt), de drie opvallendste bevindingen, de triage, en twee vervolgafspraken — wanneer de peilingresultaten worden teruggekoppeld aan iedereen die meedeed, en wanneer de inventaris opnieuw wordt geijkt. Terugkoppelen is geen beleefdheid: het is de voorwaarde om bij de volgende peiling wéér eerlijke antwoorden te krijgen.",
        "time": "5 min",
        "workspace": {
          "field": "inv-rapport",
          "label": "Mijn rapportage-opzet (één pagina)",
          "shortLabel": "Rapportage",
          "hint": "Foto · drie bevindingen · triage · terugkoppeldatum + herijkingsdatum",
          "placeholder": "Foto in drie zinnen: ...\nBevinding 1: ...\nBevinding 2: ...\nBevinding 3: ...\nTerugkoppeling aan deelnemers op: ...\nHerijking inventaris op: ...",
          "rows": 8
        }
      }
    ],
    "workedExamples": [
      {
        "title": "Peilingsvragen scherpstellen met AI",
        "prompt": "Hier zijn mijn vijf conceptvragen voor een anonieme AI-peiling onder docenten. Herschrijf ze zo dat ze (a) naar taken vragen in plaats van naar tools, (b) geen sociaal wenselijke antwoorden uitlokken en (c) geen verhoor-toon hebben. Conceptvragen: 1. Welke AI-tools gebruik jij? 2. Gebruik je AI tijdens werktijd? 3. Heb je daar toestemming voor? 4. Voer je leerlinggegevens in AI in? 5. Vind je dat AI verboden moet worden?",
        "voorbeeldOutput": "1. Voor welke werkzaamheden zet je weleens AI in — denk aan lesvoorbereiding, feedback, mails, samenvattingen? (open)\n2. Hoe vaak gebruik je AI voor je werk? (nooit / een paar keer per maand / wekelijks / dagelijks)\n3. Gebruik je daarvoor vooral een schoolaccount, een privé-account, of weet je het niet zeker?\n4. Komen er bij dat gebruik weleens gegevens over leerlingen terecht in zo'n tool — namen, cijfers, verslagen? (ja / nee / weet ik niet)\n5. Wat zou jou helpen om AI met meer vertrouwen of veiliger in te zetten — afspraken, voorbeelden, scholing, iets anders?",
        "commentaar": "Let op wat er verdween: 'toestemming' (verhoor-toon — de vraag impliceert overtreding) en 'moet AI verboden worden' (polariserend en zinloos voor inventarisatie). En wat erbij kwam: 'weet ik niet' als antwoordoptie bij de gegevensvraag — die categorie is goud waard, want hij toont waar geletterdheid ontbreekt in plaats van waar regels overtreden worden. De behoeftenvraag (5) maakt van de peiling meteen een startpunt voor draagvlak in les 4.3.",
        "tryItYourself": {
          "field": "we-inv-peilingsvragen",
          "label": "Stel jouw conceptvragen scherp",
          "shortLabel": "Eigen peilingsvragen",
          "hint": "Taakgericht · sanctievrij · met 'weet ik niet'-opties waar onwetendheid informatief is",
          "example": "Vraag oud: ... → herschreven: ...\nVraag oud: ... → herschreven: ..."
        }
      },
      {
        "title": "Een rij van de inventarisatiekaart invullen",
        "prompt": "Vul een rij van onze AI-inventarisatiekaart in voor deze toepassing: docenten van de sectie Engels gebruiken ChatGPT (gratis privé-accounts) om toetsvragen en oefenmateriaal te genereren. Kolommen: toepassing, doel, gebruikers, gegevens die erin gaan, laag (gecontracteerd/gedoogd/schaduw), AI Act-relevantie, triage-bak, eigenaar, vervolgactie.",
        "voorbeeldOutput": "Toepassing: ChatGPT (gratis, privé-accounts). Doel: genereren van toetsvragen en oefenmateriaal Engels. Gebruikers: 4-6 docenten sectie Engels. Gegevens: lesstof en voorbeeldzinnen; voor zover bekend geen leerlinggegevens — te verifiëren in peiling. Laag: gedoogd (besproken in sectie, niets vastgelegd). AI Act-relevantie: minimaal risico; wel artikel 4 (kunnen gebruikers output op kwaliteit en bias controleren?). Triage: afspraak nodig — breed gebruik zonder kader, geen acuut gegevensrisico. Eigenaar: sectievoorzitter Engels. Vervolgactie: meenemen in teamafspraken les 4.3; schoolaccount-alternatief onderzoeken.",
        "commentaar": "De kracht zit in de kolom 'gegevens' met de eerlijke toevoeging 'te verifiëren' — een inventaris die onzekerheid markeert is bruikbaarder dan een die zekerheid veinst. En in de kolom 'eigenaar': een rij zonder eigenaar is een rij die veroudert. Valkuil: de kaart volproppen met dertig kolommen. Negen kolommen die je bijhoudt verslaan dertig die je eenmalig invult.",
        "tryItYourself": {
          "field": "we-inv-registerrij",
          "label": "Vul twee rijen voor jouw school in",
          "shortLabel": "Eigen registerrijen",
          "hint": "Negen kolommen · markeer onzekerheid expliciet · elke rij een eigenaar",
          "example": "Toepassing: ... doel: ... gebruikers: ... gegevens: ... laag: ... AI Act: ... triage: ... eigenaar: ... actie: ..."
        }
      },
      {
        "title": "Terugkoppeling aan het team schrijven",
        "prompt": "Schrijf een terugkoppeling van max 150 woorden aan alle collega's die de anonieme AI-peiling invulden. Resultaten: 68% gebruikt weleens AI, vooral lesvoorbereiding en mails; 40% via privé-accounts; 15% weet niet zeker of er leerlinggegevens in terechtkwamen; grootste behoefte: duidelijke afspraken en voorbeelden. Toon: waarderend, eerlijk over de aandachtspunten, met concreet vervolg en zonder beschuldiging.",
        "voorbeeldOutput": "Beste collega's,\n\nDank — 52 van jullie vulden de AI-peiling in. Wat we zien: ruim twee derde gebruikt weleens AI, vooral voor lesvoorbereiding en mails. Dat is meer dan we dachten en er zitten mooie voorbeelden tussen; die delen we binnenkort.\n\nTwee aandachtspunten, zonder oordeel: veel gebruik loopt via privé-accounts, en een deel van ons weet niet zeker of er weleens leerlinggegevens in een tool terechtkomen. Dat is geen verwijt — het laat zien dat afspraken en duidelijkheid nu nodig zijn, en daar vroegen jullie zelf ook het meest om.\n\nVervolg: in de studiemiddag van [datum] maken we samen de eerste teamafspraken op basis van deze uitkomsten. Tot die tijd één verzoek: geen namen of herleidbare leerlinggegevens in AI-tools.\n\n[Naam]",
        "commentaar": "Drie dingen doen het werk: de resultaten worden teruggegeven aan de mensen die ze gaven (voorwaarde voor de volgende eerlijke peiling), de aandachtspunten worden benoemd zonder schuldvraag, en er staat één gedragsverzoek in dat per direct kan — de rest wacht op het beleidsproces. Valkuil: in deze mail al regels afkondigen die nog niet besproken zijn; dan voelt de peiling achteraf als fuik.",
        "tryItYourself": {
          "field": "we-inv-terugkoppeling",
          "label": "Schrijf jouw terugkoppeling",
          "shortLabel": "Terugkoppeling",
          "hint": "Waarderend · aandachtspunten zonder schuldvraag · één direct gedragsverzoek · vervolgdatum",
          "example": "Dank voor ... Wat we zien: ... Twee aandachtspunten: ... Vervolg: ... Eén verzoek per direct: ..."
        }
      }
    ],
    "vakvariaties": [
      {
        "vak": "Teamleider vo",
        "body": "Peil leerlingen apart en serieus — bovenbouwgebruik is vrijwel zeker structureel en docentenschattingen zitten er fors naast. Een korte klassikale peiling via mentoren levert meer op dan een mail. Betrek de leerlingenraad: die maakt de leerlingvariant beter én vergroot de respons."
      },
      {
        "vak": "ICT-coördinator mbo",
        "body": "Jouw extra laag: AI-gebruik op stage en in de beroepspraktijkvorming. Studenten gebruiken op het leerbedrijf vaak tools die op school onbesproken zijn. Neem één bpv-vraag op in de studentpeiling en bespreek het beeld met de bpv-coördinator."
      },
      {
        "vak": "Opleidingscoördinator hbo",
        "body": "Inventariseer per opleiding, niet instellingsbreed-in-één-keer: gebruik verschilt sterk per domein. Vergeet de onderzoekskant niet — AI in afstudeerbegeleiding en literatuuronderzoek is een eigen categorie met eigen integriteitsvragen."
      },
      {
        "vak": "Bestuursbureau / bovenschoolse staf",
        "body": "Standaardiseer het peilingformat over scholen heen zodat beelden vergelijkbaar zijn, maar laat elke school zijn eigen kadertekst en terugkoppeling doen — anonimiteitsbeloften van een bestuurskantoor worden op de werkvloer minder vertrouwd dan die van de eigen teamleider."
      },
      {
        "vak": "Kleine school of klein team",
        "body": "Bij minder dan vijftien respondenten is 'anoniem' rekbaar — open antwoorden kunnen herleidbaar zijn. Kies dan voor een gespreksronde in duo's met een gespreksleider van buiten het team, en rapporteer alleen patronen, nooit voorbeelden die op één persoon terug te voeren zijn."
      },
      {
        "vak": "Kartrekker zonder formele rol",
        "body": "Een schoolbrede peiling vraagt mandaat, maar een sectie- of teaminventarisatie niet. Begin daar, laat het format zien werken, en bied teamleiding het opschaalbare resultaat aan. Eén goed gevulde teamkaart overtuigt meer dan een voorstel op papier."
      }
    ],
    "valkuilen": [
      {
        "titel": "Inventariseren met sanctietoon",
        "watGebeurtEr": "De peiling opent met 'in verband met de AI Act inventariseren wij ongeoorloofd AI-gebruik'. Respons: laag. Antwoorden: sociaal wenselijk. Het schaduwgebruik blijft precies waar het was — alleen weet iedereen nu dat erover gezwegen moet worden.",
        "fix": "Kadertekst met expliciete sanctievrijheid, vragen naar taken en behoeften, en een teamleider die in de vergadering zelf als eerste vertelt waar zij AI voor gebruikt. Eerlijkheid lokt eerlijkheid uit."
      },
      {
        "titel": "Eén foto in plaats van een ritme",
        "watGebeurtEr": "De inventarisatie wordt een eenmalig project. Zes maanden later is de kaart verouderd: drie nieuwe tools, twee leveranciersupdates met AI-functies, en het beleid verwijst naar een werkelijkheid die niet meer bestaat.",
        "fix": "Zet de herijking in de jaaragenda vóór je de eerste peiling verstuurt. Halfjaarlijks de kaart bijwerken kost een uur; een verouderde kaart opnieuw opbouwen kost weken."
      },
      {
        "titel": "Tools tellen, doelen en data vergeten",
        "watGebeurtEr": "De inventaris wordt een tool-lijst: 'ChatGPT, Copilot, Gemini'. Maar voor risico en beleid is de tool de minst interessante kolom — dezelfde chatbot is onschuldig bij een brainstorm en problematisch bij een leerlingdossier.",
        "fix": "Inventariseer per gebruik, niet per tool: doel, gegevens die erin gaan, en wie er iets mee beslist. De triage draait op die drie kolommen."
      },
      {
        "titel": "Peilen zonder terug te koppelen",
        "watGebeurtEr": "Collega's vullen eerlijk in en horen nooit meer iets. Bij de volgende peiling is de respons gehalveerd en het vertrouwen ook. Enquêtemoeheid is geen natuurverschijnsel — het is het gevolg van onbeantwoorde moeite.",
        "fix": "Plan de terugkoppeldatum vóór de uitvraag en noem hem in de kadertekst. Wat terugkomt: het beeld, de aandachtspunten zonder schuldvraag, en wat ermee gebeurt."
      },
      {
        "titel": "Embedded AI over het hoofd zien",
        "watGebeurtEr": "De hele inventaris draait om chatbots, terwijl het leerlingvolgsysteem stilletjes een AI-functie kreeg die niveau-adviezen genereert — potentieel bijlage III — en niemand het als AI-gebruik herkent.",
        "fix": "De drievraag aan elke kernleverancier is vast onderdeel van de inventarisatie: welke AI-functies zitten erin, welke staan aan, welke stonden standaard aan zonder ons besluit. Herhaal bij elke grote update."
      }
    ],
    "geoefendSpoor": {
      "eyebrow": "Voor de geoefende kartrekker",
      "titel": "Koppel het AI-register aan het verwerkingsregister en maak er een cyclus van",
      "beschrijving": "Is je eerste inventarisatie rond? Maak hem dan structureel: koppel de AI-inventarisatiekaart aan het verwerkingsregister van de FG zodat elke nieuwe verwerkersovereenkomst automatisch een AI-checkvraag krijgt, beleg eigenaarschap per laag (FG voor gecontracteerd, teamleiders voor gedoogd, een jaarlijkse peiling voor schaduw), en neem de embedded-drievraag op in elk leveranciersgesprek. Investering: één werksessie met de FG plus een uur per kwartaal. Opbrengst: een register dat in augustus 2026 niet opnieuw opgebouwd hoeft te worden — en een school die nieuwe tools ziet aankomen in plaats van achteraf ontdekt.",
      "opdracht": "Lever vóór het einde van het schooljaar een gekoppeld register op met eigenaar per laag, plus een jaarkalender met peilmoment, herijkingsmoment en leverancierscheck. Deel met FG en MT."
    },
    "eindcriteria": [
      {
        "criterium": "Drie-lagenbeeld",
        "onder": "Alleen gecontracteerde systemen geteld.",
        "op": "Alle drie de lagen in kaart, met aannames over de schaduwlaag expliciet gemarkeerd.",
        "boven": "+ Aannames getoetst met een uitgevoerde peiling en bijgesteld."
      },
      {
        "criterium": "Peilingontwerp",
        "onder": "Toolvragen met verhoor-toon, geen anonimiteitskader.",
        "op": "6-8 taakgerichte vragen, expliciete sanctievrijheid, aparte leerling/studentvariant.",
        "boven": "+ Peiling getest bij twee collega's op toon en uitgevoerd met terugkoppeling."
      },
      {
        "criterium": "Embedded AI-check",
        "onder": "Bestaande systemen niet bevraagd.",
        "op": "Drievraag uitgezet bij drie kernleveranciers met termijn en verwerkingsafspraak.",
        "boven": "+ Antwoorden verwerkt in de kaart en drievraag opgenomen in het standaard leveranciersgesprek."
      },
      {
        "criterium": "Triage",
        "onder": "Ongesorteerde lijst zonder urgentie-onderscheid.",
        "op": "Drie bakken gevuld met per item één regel motivering.",
        "boven": "+ Bak 'direct regelen' omgezet in acties met eigenaar en datum."
      },
      {
        "criterium": "Rapportage en ritme",
        "onder": "Inventaris blijft een los document.",
        "op": "Eén-pagina-rapportage met drie bevindingen, terugkoppeldatum en herijkingsdatum.",
        "boven": "+ Rapportage besproken in team of MT en herijking in de jaaragenda bevestigd."
      }
    ],
    "reflection": [
      "Welke aanname over het schaduwgebruik in jouw school zou je het liefst niét bevestigd zien — en wat zegt dat over waar jouw inventarisatie het eerlijkst moet zijn?",
      "Hoe geloofwaardig is een anonimiteitsbelofte uit jouw mond, gegeven jouw rol? Wat moet je doen of laten — of wie moet je naast je zetten — om die belofte te laten werken?",
      "Als de peiling uitwijst dat tachtig procent van je team AI gebruikt zonder kader: is dat dan slecht nieuws over je team, of over het kader? Wat betekent je antwoord voor de toon van les 4.3?"
    ],
    "checklist": [
      "IJsberg in drie lagen ingevuld — aannames expliciet gemarkeerd",
      "Peiling van 6-8 vragen ontworpen met sanctievrije kadertekst",
      "Aparte leerling- of studentvariant gemaakt of gepland",
      "Embedded-drievraag uitgezet bij drie kernleveranciers met termijn",
      "Triage in drie bakken gedaan met motivering per item",
      "Rapportage van één pagina opgezet met drie bevindingen",
      "Terugkoppeldatum en herijkingsdatum in de agenda gezet",
      "AVG-check: peiling is anoniem, open antwoorden niet herleidbaar bij kleine teams"
    ],
    "verderLezen": [
      {
        "titel": "Aan de slag met AI-beleid op school",
        "bron": "Kennisnet",
        "jaar": 2025,
        "link": "https://www.kennisnet.nl",
        "waarom": "De aanpak waarop deze les leunt: inventariseren als eerste stap vóór visie en afspraken, met werkvormen voor po, vo en mbo."
      },
      {
        "titel": "Kennisbank AI — instellingsbeleid en AI-geletterdheid",
        "bron": "Npuls",
        "jaar": 2025,
        "link": "https://www.npuls.nl",
        "waarom": "Voor mbo, hbo en wo: hoe instellingen het feitelijke AI-gebruik van studenten en docenten in beeld brengen en houden."
      },
      {
        "titel": "Verwerkingsregister en verantwoordingsplicht",
        "bron": "Autoriteit Persoonsgegevens",
        "jaar": 2025,
        "link": "https://www.autoriteitpersoonsgegevens.nl",
        "waarom": "Het verwerkingsregister is de natuurlijke kapstok voor je AI-register — hier staat wat er al verplicht geregistreerd moet zijn."
      },
      {
        "titel": "Verordening (EU) 2024/1689 — artikel 4 en bijlage III",
        "bron": "EUR-Lex",
        "jaar": 2024,
        "link": "https://eur-lex.europa.eu",
        "waarom": "De wettelijke reden waarom niet-weten geen optie meer is: geletterdheidsplicht en hoog-risicocategorieën gelden alleen voor wie zijn toepassingen kent."
      }
    ]
  },
  "beleid-onderwijsvisie": {
    "format": "diepteles",
    "summary": "Twee scholen, dezelfde tool, tegengesteld beleid — en allebei verdedigbaar. Dat kan, omdat goed AI-beleid geen tool-vraag beantwoordt maar een visie-vraag: wat voor onderwijs willen wij, en wat betekent AI dáárvoor? In deze les destilleer je drie visie-ankers uit je eigen schoolplan, vertaal je elk anker naar toetsbare afspraken in wel/niet/waarom-vorm, toets je het concept op draagvlak bij je grootste criticus, en redigeer je alles tot één A4 dat een leerling van veertien kan navertellen.",
    "duration": {
      "total": "70 minuten",
      "blocks": [
        {
          "label": "Aanleiding",
          "min": 7
        },
        {
          "label": "Conceptueel kader",
          "min": 13
        },
        {
          "label": "Visie-ankers destilleren",
          "min": 12
        },
        {
          "label": "Van anker naar afspraak",
          "min": 15
        },
        {
          "label": "Draagvlaktoets",
          "min": 10
        },
        {
          "label": "Eén-A4 redigeren",
          "min": 10
        },
        {
          "label": "Besluitroute plannen",
          "min": 3
        }
      ]
    },
    "opening": {
      "eyebrow": "Aanleiding",
      "aanleiding": "Een werkgroep van vier enthousiaste collega's levert na drie maanden een AI-protocol op: veertien pagina's, zevenendertig regels, een stroomschema per tool. Het MT stelt het vast, het verdwijnt op het intranet, en een half jaar later weet niemand meer wat erin staat — behalve dat de tools die erin genoemd worden inmiddels twee keer van naam en functie zijn veranderd. Dit is geen karikatuur; dit is het standaardlot van beleid dat bij de tool begint.\n\nVergelijk twee scholen. School A verbiedt AI-chatbots in de onderbouw: hun visie draait om eerst zelf leren denken en formuleren, en ze kunnen precies uitleggen welk leerproces ze beschermen. School B zet AI juist breed in bij dezelfde leeftijdsgroep: hun visie draait om leren omgaan met de echte wereld, begeleid in plaats van afgeschermd. Tegengesteld beleid, beide gedragen, beide uitlegbaar aan ouders, leerlingen en inspectie. Wat ze gemeen hebben is niet de uitkomst maar de volgorde: visie eerst, afspraak daarna. De Kennisnet-aanpak voor AI-beleid zet die volgorde centraal: na het inventariseren (les 4.2) komt niet meteen het regelboek, maar het gesprek over wat voor onderwijs je wilt zijn.\n\nIn deze les doorloop je die route in het klein. Je haalt drie ankers uit je bestaande schoolplan of koersdocument — je hoeft geen nieuwe visie te schrijven, je hebt er al een. Je vertaalt elk anker naar maximaal twee afspraken in wel/niet/waarom-vorm. Je toetst het concept bij drie mensen onder wie je grootste criticus. En je redigeert het tot één A4 in taal die een leerling van veertien of een eerstejaars student snapt. Dat A4 is geen eindpunt — het is het besluitrijpe hart van het beleidsvoorstel dat je in les 4.6 compleet maakt.",
      "waaromNu": "De inventarisatie van les 4.2 levert in vrijwel elke school dezelfde conclusie op: er is veel gebruik en geen kader. De reflex is dan een tool-protocol — dat veroudert binnen een jaar en wordt niet nageleefd omdat niemand het 'waarom' kent. Kennisnet zet daarom de onderwijsvisie centraal in de beleidsstap. En de AI Act geeft het gesprek een deadline: vóór augustus 2026 moeten afspraken er aantoonbaar zijn — dan kun je ze maar beter laten deugen."
    },
    "conceptueel": {
      "eyebrow": "Conceptueel kader",
      "intro": "Het verschil tussen een protocol en een schoolafspraak zit in wat er gebeurt als de wereld verandert. Een protocol regelt tools en situaties: 'ChatGPT is toegestaan bij opdracht type X mits Y'. Elke nieuwe tool, elke update, elk randgeval vraagt een nieuwe regel — het document groeit, veroudert en verliest gezag. Een schoolafspraak regelt principes die uit de visie volgen: 'AI mag denkwerk ondersteunen, niet vervangen, omdat wij leerlingen leren zelf te formuleren'. Die afspraak is toepasbaar op tools die nog niet bestaan. Beleid dat bij de visie begint is dus niet soft of abstract — het is onderhoudsarm.\n\nDe route loopt in drie stappen. Stap één: visie-ankers destilleren. Elk schoolplan bevat zinnen over wat de school leerlingen of studenten gunt — zelfstandigheid, brede vorming, gelijke kansen, beroepstrots, onderzoekende houding. Een anker is zo'n zin, teruggebracht tot zijn kern en geschikt als toetssteen: je moet er een AI-vraag aan kunnen voorleggen. 'Wij willen dat elke leerling leert zelfstandig te denken' is een anker; 'wij staan voor kwalitatief goed onderwijs' is het niet — daar kun je niets aan toetsen omdat niemand het oneens is.\n\nStap twee: van anker naar afspraak, in wel/niet/waarom-vorm. Per anker maximaal twee afspraken, elk met drie delen: wat we wél doen met AI, wat we níet doen, en waarom — de verwijzing naar het anker. Het waarom is geen versiering: het is het deel dat naleving draagt. Mensen volgen regels die ze snappen en omzeilen regels die ze niet snappen. Toetsbaarheid is de tweede eis: een afspraak moet in gedrag zichtbaar zijn. 'Wij gaan verantwoord om met AI' is niet toetsbaar; 'leerlinggegevens gaan nooit in een AI-tool zonder verwerkersovereenkomst' wel.\n\nStap drie: draagvlak — en dat is geen communicatietruc achteraf. Gedragen beleid ontstaat wanneer de mensen die ermee moeten werken het concept hebben kunnen verbouwen vóór het werd vastgesteld. Drie groepen mogen niet ontbreken: de criticus (de collega die het hardst 'weer een protocol' zal zeggen — diens bezwaren maken je tekst beter of leggen een echte fout bloot), de leerling of student (die binnen tien seconden ziet welke afspraak in de praktijk genegeerd gaat worden), en de medezeggenschap (MR, OR, studentenraad — formeel nodig bij vaststelling, maar vroeg betrekken is het verschil tussen instemming en gevecht). Eén A4 als vorm is daarbij geen stijlkeuze maar een draagvlak-instrument: wat op één pagina past, wordt gelezen, onthouden en aangehaald.",
      "mentalModel": {
        "naam": "De zeef: visie filtert tools",
        "beschrijving": "Beleid als hek probeert elke tool tegen te houden of toe te laten — en moet bij elke nieuwe tool verbouwd worden. Beleid als zeef legt drie visie-vragen over alles wat binnenkomt: ondersteunt of vervangt dit het leren dat wij belangrijk vinden? Gaan er gegevens in die er niet in horen? Vergroot of verkleint dit verschillen tussen onze leerlingen? Een zeef hoef je niet te vervangen als er iets nieuws doorheen wil — dat is het hele punt."
      },
      "kernbegrippen": [
        {
          "term": "Visie-anker",
          "uitleg": "Een kernzin uit het bestaande schoolplan die als toetssteen werkt: je kunt er een AI-vraag aan voorleggen en er volgt een richting uit. Geen anker: zinnen waar niemand het oneens mee kan zijn."
        },
        {
          "term": "Wel/niet/waarom-vorm",
          "uitleg": "Het format per afspraak: wat we wél doen, wat we níet doen, en waarom — met expliciete verwijzing naar het anker. Het waarom draagt de naleving."
        },
        {
          "term": "Toetsbare afspraak",
          "uitleg": "Een afspraak die in gedrag zichtbaar is, zodat je kunt zien of hij geleefd wordt. 'Verantwoord omgaan met' is niet toetsbaar; 'geen leerlinggegevens in tools zonder verwerkersovereenkomst' wel."
        },
        {
          "term": "Gedragen beleid",
          "uitleg": "Beleid dat verbouwd is door de mensen die ermee moeten werken vóór het werd vastgesteld — criticus, leerlingen/studenten en medezeggenschap incluis. Draagvlak is een ontwerpfase, geen communicatiefase."
        },
        {
          "term": "Beleidscyclus",
          "uitleg": "Eén A4 met een eigenaar en een herzieningsdatum. Beleid zonder herzieningsdatum is een foto die veroudert; de jaarlijkse herijking houdt de zeef schoon."
        }
      ]
    },
    "learningGoals": [
      "Je destilleert drie visie-ankers uit je bestaande schoolplan of koersdocument en herkent het verschil tussen een toetsbaar anker en een lege koepelzin.",
      "Je vertaalt elk anker naar maximaal twee afspraken in wel/niet/waarom-vorm die toetsbaar zijn in gedrag.",
      "Je organiseert een draagvlaktoets bij minimaal drie mensen — onder wie je grootste criticus en een leerling of student — en verwerkt wat schuurt.",
      "Je redigeert het geheel tot één A4 in taal die een veertienjarige snapt, met eigenaar en herzieningsdatum, en je plant de besluitroute langs MT en medezeggenschap."
    ],
    "scenario": {
      "title": "Werksituatie",
      "context": "De inventarisatie van les 4.2 ligt op tafel: veel gebruik, geen kader, en een team dat om duidelijkheid vraagt. Het MT heeft jou gevraagd een concept-schoolafspraak voor te bereiden voor de studiemiddag over zes weken. Je hebt het schoolplan, de peilingresultaten en zeventig minuten. De verleiding is een regellijst; de opdracht die je jezelf geeft is één A4 dat over drie jaar nog klopt.",
      "role": "Teamleider, schoolleider of kartrekker met beleidsopdracht · vo, mbo of hbo",
      "tools": "Schoolplan of koersdocument · inventarisatie en peilingresultaten uit les 4.2 · papier of document voor het A4"
    },
    "steps": [
      {
        "title": "Visie-ankers destilleren uit het schoolplan",
        "body": "Pak je schoolplan of koersdocument en markeer zinnen die iets zeggen over wat jullie leerlingen of studenten gunnen — over leren, zelfstandigheid, kansen, vorming, beroep. Breng er drie terug tot ankerformaat: één zin, toetsbaar, geschikt om een AI-vraag aan voor te leggen. Test elk anker: kan een redelijk mens het hiermee oneens zijn? Zo nee, dan is het een koepelzin en geen anker.",
        "time": "12 min",
        "voorbeeld": "Uit het schoolplan: 'Wij leiden op tot zelfstandige, kritische denkers die hun plek vinden in een veranderende samenleving.' Ankers: (1) Leerlingen leren éérst zelf formuleren en denken — hulpmiddelen komen daarna. (2) Wij bereiden voor op de echte wereld, dus ook op werken met AI. (3) Elke leerling verdient gelijke kansen, ongeacht wat er thuis aan geld of hulp is. Let op: anker 1 en 2 schuren met elkaar — dat is goud, want precies daar moet de afspraak straks kleur bekennen.",
        "workspace": {
          "field": "visie-ankers",
          "label": "Mijn drie visie-ankers",
          "shortLabel": "Visie-ankers",
          "hint": "Drie ankers van één zin · toetsbaar · noteer waar ze onderling schuren",
          "placeholder": "Anker 1: ...\nAnker 2: ...\nAnker 3: ...\nWaar ze schuren: ...",
          "rows": 6
        }
      },
      {
        "title": "Van anker naar afspraak — wel/niet/waarom",
        "body": "Per anker maximaal twee afspraken, elk in drie delen: wat we wél doen, wat we níet doen, waarom (verwijzing naar het anker). Toetsbaarheidseis: elke afspraak moet in gedrag zichtbaar zijn. Gebruik de inventarisatie van 4.2 als realiteitscheck — een afspraak die tachtig procent van het feitelijke gebruik verbiedt zonder alternatief, is geen afspraak maar een wens.",
        "time": "15 min",
        "voorbeeld": "Anker: leerlingen leren éérst zelf formuleren. Afspraak: WEL — in de onderbouw maken leerlingen eerste versies van teksten en uitwerkingen zelf, AI mag daarna voor feedback en verbetering. NIET — AI-gegenereerde teksten inleveren als eigen eerste versie. WAAROM — formuleren is denken; wie de eerste versie uitbesteedt, besteedt het denken uit. Toetsbaar: docenten kunnen om de eerste versie vragen; werkvormen maken de eerste versie zichtbaar (in de klas, op papier, in versiegeschiedenis).",
        "workspace": {
          "field": "visie-afspraken",
          "label": "Mijn afspraken per anker (wel/niet/waarom)",
          "shortLabel": "Afspraken",
          "hint": "Max 2 afspraken per anker · drie delen elk · toetsbaar in gedrag · realiteitscheck met 4.2",
          "placeholder": "Anker 1 — afspraak: WEL ... NIET ... WAAROM ...\nAnker 2 — afspraak: WEL ... NIET ... WAAROM ...\nAnker 3 — afspraak: WEL ... NIET ... WAAROM ...",
          "rows": 9
        }
      },
      {
        "title": "Draagvlaktoets bij drie mensen",
        "body": "Leg het concept voor aan drie mensen: je grootste criticus, een leerling of student, en iemand uit de medezeggenschap. Vraag niet 'wat vind je ervan' maar drie gerichte vragen: welke afspraak ga jij of gaan anderen in de praktijk negeren? Welk waarom overtuigt je niet? Wat ontbreekt er waardoor jij er last van krijgt? Noteer letterlijk wat schuurt — verdedig niets tijdens het gesprek.",
        "time": "10 min",
        "voorbeeld": "Criticus (docent wiskunde): 'Die eerste-versie-regel is bij mij niet controleerbaar — huiswerk maak je thuis.' Leerling: 'Iedereen gebruikt het toch voor de eerste versie, jullie zien dat niet.' MR-lid: 'Wat betekent dit voor de werkdruk van docenten die het moeten handhaven?' Verwerking: de afspraak verschuift van controle achteraf naar werkvormen die de eerste versie in de les laten ontstaan — toetsbaar geworden via ontwerp in plaats van toezicht.",
        "workspace": {
          "field": "visie-draagvlak",
          "label": "Mijn draagvlaktoets — wat schuurt",
          "shortLabel": "Draagvlaktoets",
          "hint": "Drie mensen · per persoon wat schuurt (letterlijk) · wat je in het concept aanpast",
          "placeholder": "Criticus zegt: ... → aanpassing: ...\nLeerling/student zegt: ... → aanpassing: ...\nMedezeggenschap zegt: ... → aanpassing: ...",
          "rows": 7
        }
      },
      {
        "title": "Eén-A4 redigeren in leerlingtaal",
        "body": "Redigeer alles tot één A4 met vaste structuur: WAAROM (de visie in drie zinnen), WAT (de afspraken in wel/niet/waarom-vorm), HOE BIJ TWIJFEL (één route: bij wie meld je een twijfelgeval), WIE (eigenaar + herzieningsdatum). Taaltest: lees het voor aan een leerling van veertien of een eerstejaars student — elk woord dat uitleg nodig heeft, vervang je. Jargon dat sneuvelt: 'kaders', 'borging', 'richtinggevend'.",
        "time": "10 min",
        "voorbeeld": "Kop: 'Zo gaan wij om met AI'. Waarom: 'Op onze school leer je eerst zelf denken en schrijven — daarna kan AI je helpen om het beter te maken. We bereiden je voor op een wereld mét AI, en dat doen we eerlijk en veilig.' Wat: drie afspraken in wel/niet/waarom. Bij twijfel: 'Weet je niet of iets mag? Vraag het je docent; docenten vragen het [naam]. Geen domme vragen, wel domme stiltes.' Wie: 'Eigenaar: [teamleider]. We bekijken elk jaar in juni of dit nog klopt.'",
        "workspace": {
          "field": "visie-a4",
          "label": "Mijn één-A4 (structuur + kerntekst)",
          "shortLabel": "Eén-A4",
          "hint": "Waarom · wat · hoe bij twijfel · wie — in taal die een veertienjarige snapt",
          "placeholder": "WAAROM (3 zinnen): ...\nWAT (afspraken): ...\nHOE BIJ TWIJFEL: ...\nWIE (eigenaar + herzieningsdatum): ...",
          "rows": 9
        }
      },
      {
        "title": "Besluitroute plannen",
        "body": "Welke gremia moeten dit zien, in welke volgorde, met welke rol? Minimaal: team (verbouwen), MT (vaststellen), medezeggenschap (instemmen of adviseren — check je eigen reglement), en de communicatie naar leerlingen, studenten en ouders. Zet data bij elke stap. Dit is het bruggetje naar les 4.6, waar de route onderdeel wordt van het complete beleidsvoorstel.",
        "time": "3 min",
        "workspace": {
          "field": "visie-besluitroute",
          "label": "Mijn besluitroute met data",
          "shortLabel": "Besluitroute",
          "hint": "Gremium · rol (verbouwen/vaststellen/instemmen) · datum",
          "placeholder": "Team (verbouwen): ...\nMT (vaststellen): ...\nMR/OR/studentenraad (instemmen/adviseren): ...\nCommunicatie leerlingen + ouders: ...",
          "rows": 4
        }
      }
    ],
    "workedExamples": [
      {
        "title": "Van koepelzin naar anker naar afspraak",
        "prompt": "Uit ons schoolplan: 'Wij staan voor eigentijds, toekomstgericht onderwijs waarin elke leerling zich optimaal kan ontwikkelen.' Help me hier een toetsbaar visie-anker uit te destilleren en vertaal dat anker naar één AI-afspraak in wel/niet/waarom-vorm voor een vmbo-school. De afspraak moet toetsbaar zijn in gedrag.",
        "voorbeeldOutput": "De zin is een koepelzin — niemand kan ertegen zijn, dus hij stuurt niets. De toetsbare kern zit in 'elke leerling optimaal': dat impliceert dat verschillen tussen leerlingen er niet toe mogen doen. Anker: 'Wat een leerling thuis aan geld, apparaten of hulp heeft, mag op school geen verschil maken.'\n\nAfspraak: WEL — alle AI-gebruik dat we voor schoolwerk vragen of aanraden, kan met gratis toegang via school; opdrachten zijn zo ontworpen dat een betaald abonnement geen voordeel geeft. NIET — opdrachten meegeven die alleen goed te maken zijn met tools die niet elke leerling heeft. WAAROM — wij beloven dat elke leerling zich optimaal kan ontwikkelen; dat houdt op als de portemonnee van thuis meedoet in het cijfer.\n\nToetsbaar: bij elke nieuwe opdracht met AI-component checkt de docent of de gratis route volstaat; leerlingen kunnen melden wanneer dat niet zo is.",
        "commentaar": "De beweging om te onthouden: van koepelzin naar de kern die wél schuurt ('thuis mag geen verschil maken') naar gedrag dat je kunt zien (de gratis-route-check per opdracht). Merk op dat de afspraak niets over specifieke tools zegt — hij geldt voor tools die nog niet bestaan. Dit anker komt terug in les 4.5 over kansengelijkheid; daar krijgt het zijn casuïstiek.",
        "tryItYourself": {
          "field": "we-visie-ankerafspraak",
          "label": "Destilleer jouw anker en afspraak",
          "shortLabel": "Anker + afspraak",
          "hint": "Koepelzin uit eigen schoolplan → toetsbaar anker → wel/niet/waarom-afspraak",
          "example": "Koepelzin: ... → Anker: ... → WEL: ... NIET: ... WAAROM: ... Toetsbaar via: ..."
        }
      },
      {
        "title": "Beleidsproza herschrijven naar leerlingtaal",
        "prompt": "Herschrijf deze conceptpassage naar taal die een leerling van veertien snapt, zonder dat de afspraak zachter wordt: 'De school hanteert het uitgangspunt dat generatieve AI-applicaties ondersteunend dienen te zijn aan het primaire leerproces. Het is niet toegestaan om AI-gegenereerde content in te dienen als ware het authentiek eigen werk, tenzij de docent expliciet anders kenbaar maakt. Bij geconstateerde overtreding volgt een passende maatregel conform het leerlingenstatuut.'",
        "voorbeeldOutput": "Zo gebruiken we AI bij ons op school:\n\nAI mag je helpen bij het leren — niet het leren van je overnemen. Je mag AI gebruiken om iets uit te leggen, te oefenen of feedback te krijgen op werk dat je zelf hebt gemaakt.\n\nLever je werk van AI in alsof jij het hebt gemaakt? Dat is hetzelfde als andermans werk inleveren, en zo behandelen we het ook. Twijfel je of het mag bij een opdracht? Vraag het vooraf aan je docent — bij elke opdracht hoort duidelijkheid over wat mag.\n\nGemaakte afspraken gelden voor iedereen: ook docenten vertellen het erbij als zij AI hebben gebruikt voor jouw feedback.",
        "commentaar": "De herschrijving doet meer dan vereenvoudigen: 'tenzij de docent expliciet anders kenbaar maakt' werd 'bij elke opdracht hoort duidelijkheid' — daarmee verschuift de plicht naar waar hij hoort, namelijk vooraf helder zijn in plaats van achteraf straffen. En de slotzin voegt wederkerigheid toe (docenten zijn ook transparant), wat de afspraak geloofwaardiger maakt. Let op de valkuil: leerlingtaal mag de afspraak niet verzachten — 'dat is hetzelfde als andermans werk inleveren' is eerder harder dan het origineel.",
        "tryItYourself": {
          "field": "we-visie-leerlingtaal",
          "label": "Herschrijf jouw moeilijkste passage",
          "shortLabel": "Leerlingtaal",
          "hint": "Even streng, half zo lang, geen jargon — en check of de plicht bij de juiste persoon ligt",
          "example": "Origineel: ... → Herschreven: ..."
        }
      },
      {
        "title": "Gespreksscript voor de criticus ('weer een protocol')",
        "prompt": "Een ervaren collega reageert op mijn concept-A4 met: 'Weer een papieren werkelijkheid. Over een jaar ligt dit naast alle andere protocollen die niemand naleeft. Ik ga mijn lessen niet verbouwen voor de hype van dit jaar.' Schrijf een reactie van max 120 woorden die zijn punt serieus neemt, niet defensief is, en hem een concrete rol geeft.",
        "voorbeeldOutput": "Je hebt over die papieren werkelijkheid vaker gelijk gehad dan me lief is — de meeste protocollen hier halen hun eerste verjaardag niet. Daarom is dit er bewust geen: één A4, geen toollijst, en elke afspraak moet uitleggen waaróm hij bestaat. Lukt dat niet, dan hoort hij er niet in.\n\nWat ik van je vraag is geen verbouwde les. Ik vraag je het A4 stuk te lezen zoals alleen jij dat kunt: wijs me de afspraak aan die in de praktijk genegeerd gaat worden, en zeg me waarom. Als jij hem niet kapot krijgt, durf ik hem aan het team voor te leggen. Koffie, twintig minuten, jij kiest het moment?",
        "commentaar": "Het script werkt omdat het de criticus gelijk geeft waar hij gelijk heeft (protocollen sneuvelen inderdaad), het ontwerp verdedigt met precies de principes uit deze les (één A4, waarom-plicht), en de weerstand omzet in de nuttigste rol die er is: stresstest. De grootste fout zou zijn hem te overtuigen dat AI belangrijk is — dat was zijn bezwaar niet. Zijn bezwaar was de papieren werkelijkheid, en dat bezwaar deel je.",
        "tryItYourself": {
          "field": "we-visie-criticus",
          "label": "Schrijf jouw reactie aan jouw criticus",
          "shortLabel": "Criticus-script",
          "hint": "Erken wat klopt · verdedig het ontwerp, niet de hype · geef een concrete stresstest-rol",
          "example": "Wat ik erken: ... Waarom dit anders is ontworpen: ... Wat ik concreet van je vraag: ..."
        }
      }
    ],
    "vakvariaties": [
      {
        "vak": "Teamleider vo",
        "body": "Jouw schaal is het team of de afdeling — perfect om de hele cyclus te oefenen vóór het schoolbreed gaat. Let op de onderbouw/bovenbouw-spanning: één A4 kan per bouw één afspraak laten verschillen, mits het waarom dat draagt ('eerst zelf leren formuleren' weegt zwaarder in leerjaar 1 dan in 6 vwo)."
      },
      {
        "vak": "Schoolleider vo/mbo",
        "body": "Jij bewaakt de volgorde: visie vóór regels, team vóór MT, medezeggenschap vroeg. Grootste risico op jouw stoel: het A4 zelf schrijven en dan 'ophalen'. Gedragen beleid vraagt dat het team het concept echt kan verbouwen — plan de studiemiddag als werksessie, niet als presentatie."
      },
      {
        "vak": "ICT-coördinator",
        "body": "Jouw verleiding is het tool-protocol — je kent de tools immers het best. Jouw waarde zit elders: jij bewaakt dat elke afspraak technisch klopt (kán de gratis route wel?) en voedt de afspraken met de inventarisatie uit 4.2. Laat het waarom aan de onderwijsmensen en wees streng op de uitvoerbaarheid."
      },
      {
        "vak": "Opleidingsmanager mbo/hbo",
        "body": "In mbo en hbo komt er een laag bij: het beroepenveld. Een anker als 'wij leiden op voor de beroepspraktijk van over vijf jaar' betekent dat AI-vaardig afleveren onderdeel van de belofte is — bespreek met de werkveldcommissie wat het werkveld feitelijk vraagt. En stem de afspraken af op het toetsbeleid van les 4.4: die twee documenten mogen elkaar niet tegenspreken."
      },
      {
        "vak": "Bestuurder / bovenschools",
        "body": "Weersta de verleiding van één bestuursbreed protocol. Werkbaarder: drie bestuursbrede principes (gegevensbescherming, kansengelijkheid, transparantie) als kader, en elke school vult het A4 in vanuit de eigen visie. Verschil tussen scholen is dan geen inconsistentie maar bewijs dat de visie echt stuurt."
      },
      {
        "vak": "Kartrekker zonder formele rol",
        "body": "Jij kunt deze hele les uitvoeren als voorstel: ankers destilleren, afspraken schetsen, draagvlaktoets in het klein. Wat je niet kunt: vaststellen. Lever het A4 op als 'concept ter verbouwing' aan je teamleider — en wees expliciet dat de draagvlaktoets nog door het team heen moet, anders word jij het gezicht van regels die niemand gevraagd heeft."
      }
    ],
    "valkuilen": [
      {
        "titel": "Beginnen bij de tool",
        "watGebeurtEr": "Het beleid wordt een toollijst: dit mag, dat niet. Binnen een jaar zijn de tools veranderd en het document gezagloos. Erger: niemand heeft geleerd zelf te wegen, dus elke nieuwe tool produceert een nieuwe beleidsvraag.",
        "fix": "Begin bij drie visie-ankers en formuleer afspraken die tool-onafhankelijk zijn. De testvraag: geldt deze afspraak ook voor een tool die volgend jaar gelanceerd wordt? Zo nee, herschrijven."
      },
      {
        "titel": "Het waarom weglaten",
        "watGebeurtEr": "De afspraken zijn er, kort en helder — maar zonder motivering. Mensen volgen regels die ze snappen en omzeilen regels die ze niet snappen; binnen een half jaar is de naleving een wassen neus en handhaving een gevecht.",
        "fix": "Elke afspraak in wel/niet/waarom-vorm, met het waarom expliciet aan een anker gekoppeld. Kun je het waarom niet in één zin uitleggen, dan deugt de afspraak waarschijnlijk niet."
      },
      {
        "titel": "Draagvlak verwarren met informeren",
        "watGebeurtEr": "Het concept wordt 'gedeeld ter informatie' en op de studiemiddag 'toegelicht'. Iedereen knikt, niemand voelt eigenaarschap, en bij het eerste lastige geval blijkt het beleid van 'de werkgroep' te zijn — niet van het team.",
        "fix": "Laat het team het concept verbouwen vóór vaststelling: criticus, leerlingen/studenten en medezeggenschap krijgen het concept wanneer het nog kan veranderen. De vraag is niet 'wat vind je ervan' maar 'wat ga jij negeren en waarom'."
      },
      {
        "titel": "Veertien pagina's willen dichttimmeren",
        "watGebeurtEr": "Elk randgeval krijgt een regel, elke regel een uitzondering. Het document wordt volledig en onbruikbaar tegelijk — niemand leest het, dus in de praktijk beslist iedereen alsnog zelf.",
        "fix": "Eén A4 plus één twijfelroute ('weet je het niet, vraag het hier') vangt meer randgevallen dan dertig regels. Wat niet op het A4 past, is óf overbodig óf hoort in een ander document (toetsbeleid, verwerkersregister)."
      },
      {
        "titel": "Vaststellen zonder herzieningsdatum",
        "watGebeurtEr": "Het A4 wordt feestelijk vastgesteld en daarna nooit meer aangeraakt. Drie jaar later verwijst het naar een werkelijkheid die niet meer bestaat en is 'het AI-beleid' intern synoniem voor gedateerd.",
        "fix": "Eigenaar en herzieningsdatum zijn vaste onderdelen van het A4 zelf. Jaarlijkse herijking van een levend document kost een uur; een dood document reanimeren kost het hele proces opnieuw."
      }
    ],
    "geoefendSpoor": {
      "eyebrow": "Voor de geoefende kartrekker",
      "titel": "Begeleid een visie-sessie van negentig minuten met je hele team",
      "beschrijving": "Heb je het A4 in concept en wil je het draagvlak verdiepen? Ontwerp een teamsessie van negentig minuten waarin het team zelf de route loopt: in drietallen ankers destilleren uit het schoolplan (20 min), per drietal één afspraak in wel/niet/waarom-vorm (25 min), afspraken kruislings stresstesten op de vraag 'wat wordt genegeerd' (25 min), plenair de oogst naast jouw concept leggen (20 min). Jouw concept wordt daarmee van 'het stuk van de kartrekker' tot 'wat wij vinden, opgeschreven'. Investering: één studiemiddag-blok plus twee uur voorbereiding. Opbrengst: beleid dat het team kan navertellen omdat het team het gemaakt heeft.",
      "opdracht": "Voer de sessie uit vóór de vaststelling in het MT en verwerk de oogst zichtbaar in versie 2 van het A4 — met een korte terugkoppeling aan het team over wat er door hun inbreng veranderde."
    },
    "eindcriteria": [
      {
        "criterium": "Visie-ankers",
        "onder": "Koepelzinnen overgenomen waar niemand het oneens mee kan zijn.",
        "op": "Drie toetsbare ankers gedestilleerd uit het eigen schoolplan, onderlinge spanning benoemd.",
        "boven": "+ Ankers getoetst bij collega's: herkennen zij hierin de school?"
      },
      {
        "criterium": "Afspraken",
        "onder": "Toolregels of niet-toetsbare intenties ('verantwoord omgaan met').",
        "op": "Per anker max twee afspraken in wel/niet/waarom-vorm, toetsbaar in gedrag.",
        "boven": "+ Realiteitscheck met de inventarisatie van 4.2 expliciet gemaakt."
      },
      {
        "criterium": "Draagvlaktoets",
        "onder": "Concept alleen gedeeld met gelijkgestemden.",
        "op": "Getoetst bij criticus, leerling/student en medezeggenschap; schurende punten verwerkt.",
        "boven": "+ Teamsessie georganiseerd waarin het team het concept verbouwde."
      },
      {
        "criterium": "Eén-A4",
        "onder": "Meerdere pagina's beleidsproza met jargon.",
        "op": "Eén A4 in leerlingtaal met waarom/wat/twijfelroute/eigenaar/herzieningsdatum.",
        "boven": "+ Taaltest uitgevoerd met echte leerling of student en tekst daarop aangepast."
      },
      {
        "criterium": "Besluitroute",
        "onder": "Geen route — het A4 zweeft.",
        "op": "Gremia, rollen en data gepland, medezeggenschapsrol gecheckt in eigen reglement.",
        "boven": "+ Eerste gremium heeft het concept al behandeld; reacties verwerkt."
      }
    ],
    "reflection": [
      "Welk visie-anker van jouw school schuurt het hardst met het feitelijke AI-gebruik uit je inventarisatie — en is dat een reden om het gedrag te veranderen of om eerlijker te zijn over het anker?",
      "Wie is in jouw team de criticus die je liever ontwijkt — en wat zegt het over je concept dat je het hem of haar nog niet hebt durven voorleggen?",
      "Als je jouw A4 over drie jaar terugleest: welke afspraak overleeft die periode het waarschijnlijkst, en welke heb je eigenlijk nu al alleen opgeschreven omdat hij dit jaar urgent voelt?"
    ],
    "checklist": [
      "Drie toetsbare visie-ankers gedestilleerd uit het eigen schoolplan",
      "Onderlinge spanning tussen ankers benoemd",
      "Per anker maximaal twee afspraken in wel/niet/waarom-vorm",
      "Elke afspraak toetsbaar in gedrag — realiteitscheck met inventarisatie 4.2 gedaan",
      "Draagvlaktoets bij criticus, leerling/student en medezeggenschap uitgevoerd",
      "Eén-A4 geredigeerd in leerlingtaal met twijfelroute",
      "Eigenaar en herzieningsdatum op het A4 zelf gezet",
      "Besluitroute met gremia, rollen en data gepland"
    ],
    "verderLezen": [
      {
        "titel": "Aan de slag met AI-beleid op school — van visie naar afspraken",
        "bron": "Kennisnet",
        "jaar": 2025,
        "link": "https://www.kennisnet.nl",
        "waarom": "De aanpak achter deze les: waarom visie vóór regels gaat, met gespreksvormen en voorbeelden voor het teamgesprek."
      },
      {
        "titel": "Kennisbank AI — instellingsbeleid voor mbo, hbo en wo",
        "bron": "Npuls",
        "jaar": 2025,
        "link": "https://www.npuls.nl",
        "waarom": "Hoe instellingen in mbo en hoger onderwijs AI-beleid koppelen aan onderwijsvisie en toetsbeleid — leeswerk vóór les 4.4."
      },
      {
        "titel": "Verordening (EU) 2024/1689 — de AI-verordening",
        "bron": "EUR-Lex",
        "jaar": 2024,
        "link": "https://eur-lex.europa.eu",
        "waarom": "Je afspraken moeten binnen dit kader passen: check je A4 tegen artikel 4 en 5 en bijlage III uit les 4.1."
      },
      {
        "titel": "AVG in het onderwijs — privacy en leerlinggegevens",
        "bron": "Autoriteit Persoonsgegevens",
        "jaar": 2025,
        "link": "https://www.autoriteitpersoonsgegevens.nl",
        "waarom": "De gegevensafspraken op je A4 (wat mag er nooit een tool in) hebben hier hun wettelijke bodem."
      }
    ]
  },
  "toetsing-organisatie": {
    "format": "diepteles",
    "summary": "Eén AI-kwetsbare toets is een didactisch vraagstuk; een toetsprogramma vol AI-kwetsbare toetsen is een organisatierisico. Deze les tilt het toetsvraagstuk van docentniveau (Module 2 en 3) naar organisatieniveau, langs de Npuls-handreikingen: je scant een compleet toetsprogramma op AI-kwetsbaarheid, ontwerpt een regimebalans waarin elk leerresultaat minstens één robuust bewijsmoment heeft, formuleert drie beslisvragen voor de examencommissie en zet een kalibratiecyclus op. Eindproduct: een programmascan en een agendamemo waarmee de examencommissie kan besluiten in plaats van brandjes blussen.",
    "duration": {
      "total": "65 minuten",
      "blocks": [
        {
          "label": "Aanleiding",
          "min": 7
        },
        {
          "label": "Conceptueel kader",
          "min": 12
        },
        {
          "label": "Programmascan",
          "min": 12
        },
        {
          "label": "Regimebalans ontwerpen",
          "min": 12
        },
        {
          "label": "Examencommissie-agenda",
          "min": 12
        },
        {
          "label": "Kalibratieplan",
          "min": 8
        },
        {
          "label": "AI Act-check proctoring",
          "min": 2
        }
      ]
    },
    "opening": {
      "eyebrow": "Aanleiding",
      "aanleiding": "De examencommissie van een mbo-college telt aan het einde van periode 2 elf binnengekomen vragen van docenten. 'Mag ik dit verslag ongeldig verklaren als ik denk dat het AI is?' 'Telt een AI-detectiescore als bewijs?' 'Moet ik mijn toets nu verbouwen?' Elf vragen, elf ad-hoc antwoorden — en daarmee ontstaat er, zonder dat iemand het besloot, jurisprudentie. De docent die streng antwoord kreeg, vertelt het door; de docent die ruimte kreeg ook. Binnen een jaar heeft de opleiding feitelijk toetsbeleid — alleen heeft niemand het vastgesteld, is het intern tegenstrijdig en houdt het bij het eerste beroepschrift geen stand.\n\nHet alternatief is geen strenger antwoord per vraag, maar een ander niveau van kijken. De Npuls-handreikingen over toetsing en examinering verschuiven de blik van de individuele toets naar het toetsprogramma: het geheel aan toetsmomenten waarmee een opleiding bewijst dat leerresultaten behaald zijn. Op dat niveau is één AI-kwetsbare toets geen ramp — mits het programma als geheel voor elk leerresultaat minstens één robuust bewijsmoment bevat. En op dat niveau ligt er een heldere rol voor de examencommissie: niet elke toets zelf controleren, maar het kader stellen waarbinnen docenten en toetscommissies kunnen werken.\n\nDeze les is het organisatie-vervolg op wat je in eerdere modules op lesniveau deed. Je scant een toetsprogramma op AI-kwetsbaarheid, je ontwerpt de regimebalans, je schrijft de drie beslisvragen waarmee de examencommissie van reactief naar kaderstellend gaat, en je plant de kalibratiecyclus die het geheel levend houdt. Wie deze les afrondt, heeft het toetshoofdstuk van zijn beleidsvoorstel (les 4.6) inhoudelijk klaar.",
      "waaromNu": "Npuls publiceerde handreikingen over toetsing en examinering in het tijdperk van AI met vier toetsregimes en de aanbeveling van een toetsdialoog per programma. Tegelijk maakt de AI Act proctoring expliciet hoog-risico (bijlage III, verplichtingen vanaf augustus 2026) en verbiedt de AVG (art. 22) besluiten die uitsluitend geautomatiseerd tot stand komen — een ongeldigverklaring op basis van alleen een detectiescore is dus ook juridisch drijfzand. Examencommissies die nu kaders stellen, voorkomen jurisprudentie-per-ongeluk."
    },
    "conceptueel": {
      "eyebrow": "Conceptueel kader",
      "intro": "De kernverschuiving van deze les: van toets naar toetsprogramma. Op toetsniveau is de vraag 'is dit essay nog valide nu AI bestaat?' vaak deprimerend — veel klassieke toetsvormen zijn in hun eentje niet meer AI-bestendig te maken zonder draconische maatregelen. Op programmaniveau wordt de vraag werkbaar: levert het geheel van toetsmomenten voor elk leerresultaat nog geloofwaardig bewijs? Een thuisgeschreven verslag mag AI-kwetsbaar zijn als hetzelfde leerresultaat óók blijkt uit een praktijkobservatie, een mondeling of een bewaakte uitvoering. AI-bestendigheid is een eigenschap van het programma, niet van elke afzonderlijke toets — dat inzicht haalt de paniek uit het gesprek en maakt ontwerpen mogelijk.\n\nHet ontwerpinstrument is de regimebalans. De vier Npuls-regimes (AI-verboden, AI-toegestaan-met-verantwoording, AI-vereist, mengvorm) ken je uit eerdere lessen op toetsniveau; op programmaniveau gaat het om de verdeling. Drie ontwerpregels: élk leerresultaat heeft minstens één robuust bewijsmoment (bewaakt, mondeling, of praktijkobservatie — een moment waar AI-overname feitelijk uitgesloten of zichtbaar is); AI-verboden is schaars en verdedigbaar (alleen waar het leerdoel zonder tool aantoonbaar moet zijn, want elke bewaakte toets kost organisatie en werkdruk); en het programma weerspiegelt de beroepspraktijk of vervolgopleiding (een programma zonder enige AI-toegestaan-toets bereidt niet voor op een werkveld dat vol AI zit).\n\nDan de examencommissie. In het mbo borgt zij op grond van de wet- en regelgeving rond examinering de kwaliteit en geldigheid van diplomering; in hbo en wo geeft de WHW haar de taak de kwaliteit van toetsing en examens te borgen en vast te stellen of een student voldoet aan de eindtermen. Voor AI betekent dat drie dingen — en nadrukkelijk niet een vierde. Wél: de fraudedefinitie actualiseren (wat is 'ongeoorloofde hulp' in een wereld met AI, en hoe verhoudt zich dat tot de regime-labels), regime-labeling verplicht stellen (elke toets in het programma draagt zijn regime expliciet, zodat 'niet besproken' niet meer bestaat), en de programmabalans periodiek toetsen (de scan uit deze les als jaarlijkse cyclus). Níet: zelf elke toets beoordelen of per incident jurisprudentie maken. Een examencommissie die kaders stelt, maakt zichzelf van bottleneck tot borging.\n\nTwee dossiers verdienen aparte scherpte. Detectiescores: AI-detectietools kennen substantiële foutmarges en zijn omzeilbaar; een ongeldigverklaring die alleen op een score leunt, is procedureel kwetsbaar en raakt aan het AVG-verbod op uitsluitend geautomatiseerde besluiten met aanzienlijke gevolgen. De houdbare lijn: een score kan hoogstens aanleiding zijn voor een gesprek, nooit bewijs voor een sanctie — bewijs komt uit procesinformatie en mondelinge verantwoording. En proctoring: wie surveillance-software inzet bij digitale toetsen, gebruikt een hoog-risicosysteem (bijlage III) — dat vraagt de leverancierscheck en het menselijk toezicht uit les 4.1, plus de expliciete vraag of er geen verboden emotieherkenning in zit.",
      "mentalModel": {
        "naam": "Het toetsprogramma als draagconstructie",
        "beschrijving": "Een gebouw stort niet in omdat één balk zwak is — het stort in als er geen dragende constructie is die de belasting herverdeelt. Behandel je toetsprogramma zo: per leerresultaat vraag je niet 'is elke toets sterk?' maar 'waar wordt het gewicht gedragen als deze toets bezwijkt?' AI-kwetsbare toetsen mogen bestaan in een programma met dragende momenten; een programma zonder dragende momenten is onveilig, hoe streng elke losse toets ook oogt."
      },
      "kernbegrippen": [
        {
          "term": "Toetsprogramma",
          "uitleg": "Het geheel aan toetsmomenten waarmee een opleiding bewijst dat leerresultaten behaald zijn. Het niveau waarop AI-bestendigheid georganiseerd wordt — niet per losse toets."
        },
        {
          "term": "AI-kwetsbaarheid",
          "uitleg": "De mate waarin een toets met AI te maken is zonder dat de student het leerdoel beheerst. Geen morele categorie maar een ontwerpgegeven: kwetsbaar mag, mits het programma het opvangt."
        },
        {
          "term": "Robuust bewijsmoment",
          "uitleg": "Toetsmoment waar AI-overname feitelijk uitgesloten of zichtbaar is: bewaakte uitvoering, mondeling, praktijkobservatie. Ontwerpregel: minstens één per leerresultaat."
        },
        {
          "term": "Examencommissie als kadersteller",
          "uitleg": "De wettelijke borger van toets- en examenkwaliteit (mbo-examenregelgeving, WHW). Bij AI: fraudedefinitie actualiseren, regime-labeling verplichten, programmabalans toetsen — niet per incident jurisprudentie maken."
        },
        {
          "term": "Kalibratiecyclus",
          "uitleg": "Terugkerende sessies waarin docenten casussen en regime-keuzes naast elkaar leggen (de Npuls-toetsdialoog), plus een jaarlijkse programmascan. Houdt het kader levend zonder regelgroei."
        }
      ]
    },
    "learningGoals": [
      "Je scant een compleet toetsprogramma op AI-kwetsbaarheid en benoemt per leerresultaat of er een robuust bewijsmoment is.",
      "Je ontwerpt een regimebalans op programmaniveau volgens de drie ontwerpregels: robuust moment per leerresultaat, AI-verboden schaars en verdedigbaar, programma weerspiegelt de praktijk.",
      "Je formuleert drie beslisbare agendapunten voor de examencommissie (fraudedefinitie, regime-labeling, jaarlijkse balanscheck) met per punt een ja/nee-voorstel.",
      "Je plant een kalibratiecyclus en voert de AI Act-check op proctoring uit (hoog-risicostatus, geen detectiescore als enig bewijs)."
    ],
    "scenario": {
      "title": "Werksituatie",
      "context": "Je bent teamleider, lid van een toets- of examencommissie, of kartrekker met een toetsopdracht in mbo of hbo. De examencommissie van jouw opleiding beantwoordt AI-vragen per incident en vraagt nu om structuur: een analyse van het toetsprogramma van één opleiding of leerjaar plus een voorstel voor de eerstvolgende commissievergadering. Je hebt het toetsplan voor je en 65 minuten.",
      "role": "Teamleider, examencommissielid of toetscommissielid · mbo of hbo (vo: vertaal naar PTA en examensecretaris)",
      "tools": "Toetsplan of PTA van één opleiding/leerjaar · Npuls-handreikingen · papier voor de scan"
    },
    "steps": [
      {
        "title": "Programmascan — waar draagt de constructie?",
        "body": "Zet de toetsmomenten van één opleiding of leerjaar onder elkaar met per moment: welk leerresultaat, welke vorm, en de kwetsbaarheidsvraag — zou een student dit met AI kunnen maken zonder het leerdoel te beheersen? Label hoog/midden/laag. Markeer daarna per leerresultaat of er minstens één robuust bewijsmoment is. De gaten die je nu ziet, zijn je werklijst.",
        "time": "12 min",
        "voorbeeld": "Leerresultaat 'klantgericht communiceren': verslag klantgesprek (thuis, hoog kwetsbaar), kennistoets (bewaakt, laag), praktijkobservatie op stage (robuust) — gedekt. Leerresultaat 'onderzoekend werken': literatuurverslag (hoog), onderzoeksplan (hoog), presentatie zonder doorvragen (midden) — géén robuust moment. Gat gevonden: dit leerresultaat leunt volledig op AI-kwetsbare producten.",
        "workspace": {
          "field": "toetsorg-scan",
          "label": "Mijn programmascan",
          "shortLabel": "Programmascan",
          "hint": "Per toetsmoment: leerresultaat · vorm · kwetsbaarheid hoog/midden/laag — daarna per leerresultaat: robuust moment ja/nee",
          "placeholder": "Moment 1: leerresultaat ... — vorm ... — kwetsbaarheid ...\nMoment 2: ...\nMoment 3: ...\n\nLeerresultaten zonder robuust bewijsmoment: ...",
          "rows": 9
        }
      },
      {
        "title": "Regimebalans ontwerpen",
        "body": "Repareer de gaten uit de scan met de vier regimes. Per gat: welk bestaand moment kan robuust worden (mondelinge verantwoording toevoegen is vaak goedkoper dan een nieuwe bewaakte toets) en welke toetsen kunnen juist ontspannen naar AI-toegestaan-met-verantwoording? Pas de drie ontwerpregels toe en wees zuinig met AI-verboden: elke bewaakte toets kost rooster, surveillance en werkdruk.",
        "time": "12 min",
        "voorbeeld": "Gat 'onderzoekend werken': aan het onderzoeksplan wordt een verantwoordingsgesprek van tien minuten gekoppeld (robuust gemaakt, geen extra toets). Het literatuurverslag gaat van 'niet besproken' naar AI-toegestaan-met-verantwoording — eerlijk, want het gebeurde toch al. De kennistoets blijft bewaakt (verdedigbaar: begrippenkennis zonder tool is hier het leerdoel). Netto: één gat gedicht, nul extra bewaakte momenten, twee regimes eerlijk gelabeld.",
        "workspace": {
          "field": "toetsorg-balans",
          "label": "Mijn regimebalans",
          "shortLabel": "Regimebalans",
          "hint": "Per gat: hoe robuust gemaakt · welke toetsen ontspannen naar toegestaan-met-verantwoording · check: AI-verboden schaars en verdedigbaar?",
          "placeholder": "Gat 1: ... → oplossing: ...\nGat 2: ... → oplossing: ...\nToetsen die ontspannen kunnen: ...\nAI-verboden blijft voor: ... omdat: ...",
          "rows": 8
        }
      },
      {
        "title": "Drie beslisvragen voor de examencommissie",
        "body": "Vertaal je analyse naar drie agendapunten waar de commissie ja of nee op kan zeggen. Standaardset: (1) actualiseren we de fraudedefinitie zó dat 'ongeoorloofde hulp' gekoppeld is aan het regime-label per toets? (2) stellen we regime-labeling verplicht voor elk toetsmoment vanaf volgend studiejaar? (3) nemen we de jaarlijkse programmascan op in de kwaliteitscyclus? Formuleer per punt het voorstel in één zin plus de consequentie van nee.",
        "time": "12 min",
        "voorbeeld": "Punt 1: 'De commissie stelt vast dat AI-gebruik ongeoorloofd is wanneer het regime-label van de toets dat uitsluit — en alleen dan.' Consequentie van nee: elke fraudezaak blijft een welles-nietes zonder norm. Punt 2: 'Vanaf 2026-2027 draagt elk toetsmoment in het toetsplan een regime-label; toetsen zonder label worden niet vastgesteld.' Consequentie van nee: 'niet besproken' blijft het grootste regime. Punt 3: 'De toetscommissie voert jaarlijks de programmascan uit en rapporteert gaten aan de examencommissie vóór 1 mei.'",
        "workspace": {
          "field": "toetsorg-agenda",
          "label": "Mijn drie beslisvragen",
          "shortLabel": "Beslisvragen",
          "hint": "Per punt: voorstel in één zin · consequentie van nee · wie voert uit",
          "placeholder": "Punt 1 (fraudedefinitie): voorstel ... — bij nee: ... — uitvoering: ...\nPunt 2 (regime-labeling): ...\nPunt 3 (jaarlijkse scan): ...",
          "rows": 8
        }
      },
      {
        "title": "Kalibratieplan — de toetsdialoog organiseren",
        "body": "Kaders zonder kalibratie verstenen. Plan twee sessies per jaar waarin docenten geanonimiseerde casussen en regime-keuzes naast elkaar leggen: waar trokken we verschillende grenzen bij vergelijkbare gevallen, en wat betekent dat voor het kader? Bepaal wie organiseert, wie deelneemt (in elk geval docenten van verschillende vakken of leerjaren) en hoe de uitkomsten bij de examencommissie terugkomen.",
        "time": "8 min",
        "workspace": {
          "field": "toetsorg-kalibratie",
          "label": "Mijn kalibratieplan",
          "shortLabel": "Kalibratie",
          "hint": "Twee data · organisator · deelnemers · hoe uitkomsten terugkomen bij de commissie",
          "placeholder": "Sessie 1: datum ... — organisator ... — deelnemers ...\nSessie 2: ...\nTerugkoppeling aan examencommissie via: ...",
          "rows": 5
        }
      },
      {
        "title": "AI Act-check op proctoring en detectie",
        "body": "Sluit af met twee controlevragen uit les 4.1: is de proctoring- of surveillance-software die jullie bij digitale toetsen gebruiken door de hoog-risico-check geweest (leveranciersdocumentatie, menselijk toezicht, geen emotieherkenning)? En staat ergens vastgelegd dat een detectiescore nooit het enige bewijs voor een maatregel is (AVG art. 22)? Zo nee: dit zijn agendapunten vier en vijf.",
        "time": "2 min",
        "workspace": {
          "field": "toetsorg-aiactcheck",
          "label": "Mijn AI Act-check",
          "shortLabel": "AI Act-check",
          "hint": "Proctoring door 4.1-check: ja/nee · detectiescore-regel vastgelegd: ja/nee · vervolgactie",
          "placeholder": "Proctoring gecheckt: ...\nDetectiescore-regel vastgelegd: ...\nVervolgactie: ...",
          "rows": 3
        }
      }
    ],
    "workedExamples": [
      {
        "title": "Fraudeparagraaf actualiseren",
        "prompt": "Onze huidige fraudeparagraaf zegt: 'Onder fraude wordt verstaan het gebruik van ongeoorloofde hulpmiddelen, waaronder het overnemen van werk van derden.' Herschrijf deze paragraaf (max 150 woorden) zodat hij werkt in een toetsprogramma met regime-labels per toets, geen detectiescores als enig bewijs accepteert, en de bewijsroute via verantwoording laat lopen. Doelgroep: examenreglement mbo/hbo.",
        "voorbeeldOutput": "Elk toetsmoment draagt een AI-regime-label: AI-verboden, AI-toegestaan-met-verantwoording, AI-vereist of mengvorm. Het label staat in de toetsinstructie en is voor aanvang bekend.\n\nOnder ongeoorloofde hulp wordt verstaan: het gebruik van hulpmiddelen — waaronder AI-systemen — dat het regime-label van het betreffende toetsmoment uitsluit, alsmede het niet of onjuist afleggen van de gevraagde verantwoording bij toetsen waar verantwoording vereist is.\n\nEen vermoeden van ongeoorloofde hulp wordt onderbouwd met procesinformatie en een verantwoordingsgesprek met de student. De uitkomst van een geautomatiseerd detectie-instrument kan aanleiding zijn voor een gesprek, maar geldt nooit als zelfstandig of doorslaggevend bewijs. Besluiten worden genomen door de examencommissie na hoor en wederhoor.",
        "commentaar": "Drie verschuivingen dragen deze paragraaf: fraude is gekoppeld aan het label (dus zonder label geen fraudeverwijt — wat de organisatie dwingt te labelen), de verantwoordingsplicht is zelf onderdeel van de norm (niet verantwoorden ís de overtreding, geen detectie nodig), en de detectiescore is expliciet gedegradeerd tot gespreksaanleiding. Laat de definitieve formulering altijd langs een jurist of de bestuurssecretaris — dit is reglementtekst, geen lesmateriaal.",
        "tryItYourself": {
          "field": "we-toetsorg-fraudeparagraaf",
          "label": "Herschrijf jullie fraudeparagraaf",
          "shortLabel": "Fraudeparagraaf",
          "hint": "Koppel aan regime-labels · verantwoording als norm · detectiescore nooit zelfstandig bewijs",
          "example": "Elk toetsmoment draagt ... Onder ongeoorloofde hulp wordt verstaan ... Een vermoeden wordt onderbouwd met ..."
        }
      },
      {
        "title": "Memo aan de examencommissie",
        "prompt": "Schrijf een memo van max 200 woorden aan onze examencommissie. Context: elf ad-hoc AI-vragen dit jaar, programmascan uitgevoerd (twee leerresultaten zonder robuust bewijsmoment), drie beslisvragen voorbereid. Doel: de commissie beweegt van incident-antwoorden naar kaderstellen. Toon: collegiaal, feitelijk, met urgentie zonder alarmisme.",
        "voorbeeldOutput": "Aan: examencommissie [opleiding] — Betreft: van AI-incidenten naar AI-kader\n\nDit studiejaar beantwoordde de commissie elf losse AI-vragen van docenten. De antwoorden waren elk verdedigbaar, maar samen vormen ze ongeschreven beleid dat niemand heeft vastgesteld — en dat bij een beroepszaak kwetsbaar is.\n\nIk heb het toetsprogramma van [opleiding] gescand. Kernbeeld: de meeste leerresultaten zijn gedekt door minstens één robuust bewijsmoment; voor twee leerresultaten ([X] en [Y]) ontbreekt dat en leunen we volledig op AI-kwetsbare producten. Reparatie kan zonder extra bewaakte toetsen, via verantwoordingsgesprekken bij bestaande momenten.\n\nVoorstel voor de vergadering van [datum] — drie beslispunten:\n1. Fraudedefinitie koppelen aan regime-labels per toets.\n2. Regime-labeling verplicht stellen per toetsmoment vanaf [studiejaar].\n3. De programmascan jaarlijks opnemen in de kwaliteitscyclus.\n\nPer punt ligt een uitgewerkt ja/nee-voorstel klaar. Met deze drie besluiten beantwoordt de commissie de komende elf vragen vooraf in plaats van achteraf.\n\n[Naam, rol]",
        "commentaar": "De memo doet wat een commissiestuk moet doen: hij toont het patroon achter de incidenten (ongeschreven beleid), geeft één concreet scanresultaat als bewijs van huiswerk, en eindigt in beslisbare punten met datum. De slotzin is het verkoopargument dat commissies overtuigt: kaderstellen is mínder werk dan incidenten blijven beantwoorden. Vul de placeholders met echte leerresultaten — abstracte memo's worden doorgeschoven.",
        "tryItYourself": {
          "field": "we-toetsorg-memo",
          "label": "Schrijf jouw commissiememo",
          "shortLabel": "Commissiememo",
          "hint": "Patroon achter incidenten · één scanresultaat · drie beslispunten met datum",
          "example": "Betreft: ... Kernbeeld: ... Voorstel — drie beslispunten: 1. ... 2. ... 3. ..."
        }
      },
      {
        "title": "Screeningsvragenlijst voor de jaarlijkse scan",
        "prompt": "Maak een screeningsvragenlijst van zes vragen waarmee een toetscommissie jaarlijks elk toetsprogramma op AI-bestendigheid scant. De vragen moeten met ja/nee/deels te beantwoorden zijn en samen de drie ontwerpregels dekken (robuust moment per leerresultaat, AI-verboden schaars en verdedigbaar, programma weerspiegelt de praktijk), plus proctoring en detectie.",
        "voorbeeldOutput": "1. Heeft elk leerresultaat in dit programma minstens één robuust bewijsmoment (bewaakt, mondeling of praktijkobservatie)? ja / nee / deels — zo nee: welke leerresultaten niet?\n2. Draagt elk toetsmoment een expliciet regime-label dat vooraf bekend is bij studenten? ja / nee / deels\n3. Is voor elke AI-verboden toets gedocumenteerd waaróm het leerdoel zonder tool aantoonbaar moet zijn? ja / nee / deels\n4. Bevat het programma toetsmomenten waarin studenten AI gebruiken zoals de beroepspraktijk dat vraagt? ja / nee / deels\n5. Is de ingezette proctoring- of surveillance-software door de hoog-risico-check (AI Act) geweest? ja / nee / n.v.t.\n6. Is vastgelegd dat een detectiescore nooit zelfstandig bewijs is voor een maatregel? ja / nee\n\nScore-afspraak: elke 'nee' wordt een actiepunt met eigenaar; 'deels' wordt toegelicht in de rapportage aan de examencommissie.",
        "commentaar": "Zes vragen is bewust weinig: een scan die een middag kost, wordt jaarlijks gedaan; een scan die een week kost, wordt eenmalig gedaan. Vraag 3 is de slimste van de lijst — hij dwingt de verdedigbaarheidstoets af die voorkomt dat AI-verboden uit reflex groeit. Pas op met vraag 4 in het vo: daar weegt het examenprogramma zwaarder dan de beroepspraktijk; vervang hem door een vraag over aansluiting op het PTA.",
        "tryItYourself": {
          "field": "we-toetsorg-screening",
          "label": "Stel jouw screeningslijst samen",
          "shortLabel": "Screeningslijst",
          "hint": "Max 6 ja/nee/deels-vragen · dek de drie ontwerpregels + proctoring + detectie · score-afspraak erbij",
          "example": "1. ... 2. ... 3. ... 4. ... 5. ... 6. ... Score-afspraak: ..."
        }
      }
    ],
    "vakvariaties": [
      {
        "vak": "Examencommissielid mbo",
        "body": "Jullie borgen diplomering binnen de mbo-examenregelgeving; de kwalificatiedossiers geven houvast — veel werkprocessen worden al met praktijkobservatie getoetst en zijn dus robuust. Scan vooral de kennis- en verslagcomponenten, en stem de fraudedefinitie af met de andere opleidingen binnen het college: studenten vergelijken onderling."
      },
      {
        "vak": "Toetscommissie of examencommissie hbo",
        "body": "De WHW legt de borging van toetskwaliteit bij jullie. De programmascan sluit aan op de toetsplannen die er al zijn voor accreditatie — voeg de kwetsbaarheidskolom toe in plaats van een nieuw document te bouwen. Afstudeertrajecten verdienen voorrang: daar is het gewicht het hoogst en de AI-kwetsbaarheid vaak ook."
      },
      {
        "vak": "Teamleider of examensecretaris vo",
        "body": "Vertaal: toetsprogramma wordt PTA, examencommissie wordt examensecretaris plus schoolleiding. De scan werkt identiek op een PTA — vooral handelingsdelen en praktische opdrachten zijn kwetsbaar. De regimebalans moet passen binnen het eindexamenbesluit; centrale examens zijn per definitie robuust, dus de schoolexamens dragen de scan."
      },
      {
        "vak": "Opleidingsmanager",
        "body": "Jij gaat niet over de toetsinhoud maar wel over rooster, werkdruk en surveillance-capaciteit. Jouw rol in de regimebalans: bewaken dat reparaties via verantwoordingsgesprekken lopen waar dat kan, en dat de kosten van elke extra bewaakte toets expliciet op tafel komen voordat de commissie besluit."
      },
      {
        "vak": "Docentlid van de toetsdialoog",
        "body": "Breng naar elke kalibratiesessie één eigen casus mee waarin je twijfelde over je regime-keuze. De dialoog werkt alleen met echt materiaal — geanonimiseerd, maar concreet. Jouw les-niveau-ervaring uit Module 2 en 3 is precies wat het programmaniveau nodig heeft om geen papieren exercitie te worden."
      },
      {
        "vak": "Bestuurder / centrale staf",
        "body": "Faciliteer, harmoniseer niet te vroeg: laat opleidingen eerst zelf scannen en kalibreren, en haal daarna pas gemeenschappelijke patronen op voor instellingsbrede kaders (fraudedefinitie, detectiescore-regel, proctoring-inkoop). Die laatste drie zijn wél bij uitstek centraal: één leverancierscheck is efficiënter dan twintig."
      }
    ],
    "valkuilen": [
      {
        "titel": "Elke toets afzonderlijk AI-bestendig willen maken",
        "watGebeurtEr": "Elke docent moet elke toets verbouwen; de werkdruk explodeert, de creativiteit slaat om in surveillance, en het lukt alsnog niet — want een thuisopdracht is in zijn eentje niet waterdicht te krijgen.",
        "fix": "Organiseer bestendigheid op programmaniveau: minstens één robuust bewijsmoment per leerresultaat, en laat overige toetsen eerlijk gelabeld kwetsbaar zijn. De draagconstructie doet het werk, niet elke balk."
      },
      {
        "titel": "De examencommissie laat jurisprudentie ontstaan",
        "watGebeurtEr": "Elf incidentantwoorden worden ongeschreven beleid: intern tegenstrijdig, nergens vastgesteld, en bij het eerste beroepschrift onverdedigbaar. Docenten gokken intussen welk antwoord ze zouden krijgen.",
        "fix": "De drie kaderbesluiten (fraudedefinitie aan labels, labeling verplicht, jaarlijkse scan) beantwoorden toekomstige vragen vooraf. Incidenten die daarna nog komen, toetsen het kader in plaats van het te vervangen."
      },
      {
        "titel": "Detectiescore als bewijs behandelen",
        "watGebeurtEr": "Een student wordt geconfronteerd met '87% AI-waarschijnlijkheid' als bewijs. De tool heeft een onbekende foutmarge, de student geen verweer tegen een getal, en de zaak sneuvelt bij beroep — met beschadigd vertrouwen aan beide kanten.",
        "fix": "Leg vast: een detectiescore is hoogstens gespreksaanleiding, nooit zelfstandig bewijs. Bewijs loopt via procesinformatie en verantwoordingsgesprek — en besluiten met aanzienlijke gevolgen vragen sowieso menselijke weging (AVG art. 22)."
      },
      {
        "titel": "AI-verboden als reflex laten groeien",
        "watGebeurtEr": "Na elk incident schuift een toets naar 'bewaakt op locatie'. Binnen twee jaar is het halve programma surveillance: roosters knellen, werkdruk stijgt, en studenten leren nergens werken zoals het werkveld werkt.",
        "fix": "De verdedigbaarheidseis (screeningsvraag 3): AI-verboden alleen waar het leerdoel zonder tool aantoonbaar móet zijn, schriftelijk gemotiveerd. Elke andere reparatie eerst via verantwoording proberen."
      },
      {
        "titel": "Kader vaststellen zonder kalibratie",
        "watGebeurtEr": "De labels en definities staan op papier, maar docenten interpreteren ze verschillend: wat bij de één 'toegestaan met verantwoording' heet, heet bij de ander fraude. Studenten ervaren willekeur met een keurig kader erboven.",
        "fix": "Twee kalibratiesessies per jaar met echte, geanonimiseerde casussen. Niet om docenten gelijk te schakelen, wel om verschillen zichtbaar te maken en het kader bij te slijpen waar de verschillen onverdedigbaar zijn."
      }
    ],
    "geoefendSpoor": {
      "eyebrow": "Voor de geoefende kartrekker",
      "titel": "Begeleid een volledige toetsdialoog-cyclus voor één opleiding",
      "beschrijving": "Scan af, besluiten genomen? Maak de cyclus dan rond: organiseer binnen één studiejaar de hele keten — programmascan met de toetscommissie, twee kalibratiesessies met docenten, rapportage aan de examencommissie, en één bijgestelde versie van het toetsplan waarin de regimebalans zichtbaar is verbeterd. Documenteer de keten zelf (wie deed wat, wat veranderde er) zodat hij volgend jaar door een ander herhaald kan worden. Investering: vier dagdelen verspreid over het jaar. Opbrengst: een opleiding waar AI-bestendigheid een cyclus is in plaats van een project — en accreditatie- of inspectie-proof documentatie als bijvangst.",
      "opdracht": "Lever aan het einde van het studiejaar het cyclus-draaiboek op (scan, sessies, rapportage, bijgesteld toetsplan) en draag het over aan de toetscommissie met een evaluatiemoment in het nieuwe jaar."
    },
    "eindcriteria": [
      {
        "criterium": "Programmascan",
        "onder": "Losse toetsen beoordeeld zonder koppeling aan leerresultaten.",
        "op": "Volledig programma gescand; per leerresultaat robuust bewijsmoment ja/nee vastgesteld.",
        "boven": "+ Scan uitgevoerd met een collega of toetscommissielid en geijkt op verschillen."
      },
      {
        "criterium": "Regimebalans",
        "onder": "Reparatie door overal bewaakte toetsen toe te voegen.",
        "op": "Gaten gedicht volgens de drie ontwerpregels, met verantwoordingsgesprekken als eerste instrument.",
        "boven": "+ Werkdruk- en roosterconsequenties expliciet gemaakt en met de opleidingsmanager besproken."
      },
      {
        "criterium": "Beslisvragen examencommissie",
        "onder": "Algemene zorgen geagendeerd zonder voorstel.",
        "op": "Drie ja/nee-voorstellen met consequentie-van-nee en uitvoerder.",
        "boven": "+ Memo verstuurd en de punten staan op de agenda van een concrete vergadering."
      },
      {
        "criterium": "Kalibratiecyclus",
        "onder": "Geen terugkeermoment gepland.",
        "op": "Twee sessies per jaar gepland met organisator, deelnemers en terugkoppelroute.",
        "boven": "+ Eerste sessie uitgevoerd met echte casussen en uitkomsten teruggelegd bij de commissie."
      },
      {
        "criterium": "AI Act- en AVG-scherpte",
        "onder": "Proctoring en detectie buiten beeld gelaten.",
        "op": "Hoog-risico-check op proctoring gedaan; detectiescore-regel geformuleerd.",
        "boven": "+ Beide vastgelegd in reglement of toetsbeleid met verwijzing naar bijlage III en AVG art. 22."
      }
    ],
    "reflection": [
      "Welk leerresultaat in jouw programma bleek bij de scan het zwakst gedekt — en hoe lang wist je dat eigenlijk al voordat de scan het expliciet maakte?",
      "Waar trek jij persoonlijk de grens voor AI-verboden toetsen — en zou je die grens kunnen verdedigen tegenover een student die zegt dat het werkveld nergens AI-vrij is?",
      "Wat heeft jouw examencommissie nodig om van incident-modus naar kader-modus te bewegen: informatie, mandaat, of moed? En welke van die drie kun jij leveren?"
    ],
    "checklist": [
      "Toetsprogramma van één opleiding of leerjaar volledig gescand",
      "Per leerresultaat vastgesteld of er een robuust bewijsmoment is",
      "Gaten gerepareerd in een regimebalans volgens de drie ontwerpregels",
      "AI-verboden toetsen elk voorzien van een verdedigbaarheidsmotivering",
      "Drie beslisvragen voor de examencommissie geformuleerd met consequentie-van-nee",
      "Kalibratiecyclus gepland: twee sessies, organisator, terugkoppelroute",
      "Proctoring-software gecheckt op hoog-risicostatus en emotieherkenning",
      "Detectiescore-regel geformuleerd: gespreksaanleiding, nooit zelfstandig bewijs"
    ],
    "verderLezen": [
      {
        "titel": "Handreikingen toetsing en examinering in het tijdperk van AI",
        "bron": "Npuls",
        "jaar": 2024,
        "link": "https://www.npuls.nl",
        "waarom": "De basis van deze les: vier regimes, ankerpunten en de toetsdialoog — nu toegepast op programmaniveau."
      },
      {
        "titel": "Verordening (EU) 2024/1689 — bijlage III, punt 3",
        "bron": "EUR-Lex",
        "jaar": 2024,
        "link": "https://eur-lex.europa.eu",
        "waarom": "De hoog-risicostatus van proctoring en beoordelingssystemen in de brontekst — onmisbaar voor de leverancierscheck."
      },
      {
        "titel": "Geautomatiseerde besluitvorming en de AVG (artikel 22)",
        "bron": "Autoriteit Persoonsgegevens",
        "jaar": 2025,
        "link": "https://www.autoriteitpersoonsgegevens.nl",
        "waarom": "Waarom een detectiescore nooit zelfstandig bewijs mag zijn: de wettelijke grens aan uitsluitend geautomatiseerde besluiten."
      },
      {
        "titel": "Toetsing en examinering met AI in het funderend onderwijs",
        "bron": "Kennisnet",
        "jaar": 2025,
        "link": "https://www.kennisnet.nl",
        "waarom": "De vo-vertaling: PTA, schoolexamens en de rol van de examensecretaris bij AI-vraagstukken."
      }
    ]
  },
  "check-mod4": {
    "format": "kennischeck",
    "summary": "Tussencheck Module 04. Vijf vragen over de AI Act, de inventarisatie-aanpak, beleid vanuit visie en de rol van de examencommissie. Klaar voor de casusbespreking over kansengelijkheid en de praktijkopdracht.",
    "duration": {
      "total": "12 min",
      "blocks": [
        {
          "label": "5 vragen",
          "min": 8
        },
        {
          "label": "Advies",
          "min": 4
        }
      ]
    },
    "learningGoals": [
      "Je test of de AI Act-basis is geland: data, verboden praktijken en hoog-risicocategorieën.",
      "Je checkt of de beleidsroute klopt in je hoofd: inventariseren, visie, afspraken, toetsorganisatie.",
      "Je weet of je klaar bent voor de casusbespreking (4.5) en de praktijkopdracht (4.6)."
    ],
    "scenario": {
      "title": "Na les 4.1 t/m 4.4",
      "context": "Vijf vragen over de wetgevings- en beleidslessen. Per vraag directe uitleg. Advies aan het einde: door naar 4.5, of eerst even terug naar de les waar het wrong.",
      "role": "Voor jezelf",
      "tools": "Geen"
    },
    "checkTitle": "Even kijken wat is geland uit 4.1 t/m 4.4.",
    "checkItems": [
      {
        "type": "Meerkeuze · AI Act-tijdlijn",
        "q": "Sinds wanneer geldt de AI-geletterdheidsplicht (artikel 4 AI Act), en vanaf wanneer kan erop worden gehandhaafd?",
        "options": [
          {
            "label": "De plicht geldt sinds 2 februari 2025; handhaving is mogelijk vanaf 2 augustus 2026.",
            "explain": "Klopt. De plicht bestaat dus al — augustus 2026 is de opleverdatum voor aantoonbaarheid, niet de startdatum."
          },
          {
            "label": "Alles gaat pas in op 2 augustus 2026.",
            "explain": "Nee — artikel 4 en de verboden praktijken gelden al sinds 2 februari 2025. Wie wacht tot 2026, is te laat begonnen."
          },
          {
            "label": "De plicht geldt sinds de inwerkingtreding op 1 augustus 2024, inclusief handhaving.",
            "explain": "De verordening trad toen in werking, maar wordt gefaseerd van kracht — artikel 4 vanaf februari 2025, handhaving later."
          },
          {
            "label": "De geletterdheidsplicht geldt alleen voor techbedrijven, niet voor scholen.",
            "explain": "Nee. De plicht geldt voor aanbieders én gebruiksverantwoordelijken — en een school die AI inzet is gebruiksverantwoordelijke."
          }
        ],
        "correct": 0
      },
      {
        "type": "Meerkeuze · verboden praktijken",
        "q": "Welke AI-toepassing is sinds februari 2025 verboden in onderwijsinstellingen (artikel 5 AI Act)?",
        "options": [
          {
            "label": "Een adaptief oefenplatform dat opgaven aanpast aan het niveau van de leerling.",
            "explain": "Niet verboden. Kan wel hoog-risico worden zodra het niveau-besluiten stuurt — maar dat is een andere categorie met andere plichten."
          },
          {
            "label": "Een systeem dat via de webcam emoties of aandacht van leerlingen afleest.",
            "explain": "Klopt. Emotieherkenning in onderwijsinstellingen is verboden (smalle uitzondering voor medische of veiligheidsredenen) — ook als het 'engagement-detectie' heet."
          },
          {
            "label": "Een tekstgenerator waarmee docenten lesmateriaal maken.",
            "explain": "Minimaal risico onder de AI Act. Wel relevant: artikel 4 en de AVG zodra er persoonsgegevens in prompts gaan."
          },
          {
            "label": "Online proctoring bij digitale toetsen.",
            "explain": "Niet verboden, wél hoog-risico (bijlage III): zware eisen aan de aanbieder en zorgplicht voor de school. Verboden wordt het pas als er emotieherkenning in zit."
          }
        ],
        "correct": 1
      },
      {
        "type": "Meerkeuze · inventarisatie",
        "q": "Wat hoort volgens les 4.2 allemaal bij een volledige AI-inventarisatie op school?",
        "options": [
          {
            "label": "Alle tools waarvoor een verwerkersovereenkomst is afgesloten.",
            "explain": "Dat is alleen de bovenste laag van de ijsberg — de gecontracteerde systemen. De grootste laag mis je dan."
          },
          {
            "label": "De tools die docenten in de teamvergadering noemen.",
            "explain": "Dat is de gedoogde laag plus sociaal wenselijke antwoorden. Zonder anonieme peiling blijft het schaduwgebruik onzichtbaar."
          },
          {
            "label": "Drie lagen — gecontracteerd, gedoogd en schaduwgebruik — plus de AI-functies die in bestaande systemen zijn ingebouwd.",
            "explain": "Klopt. Inclusief de anonieme peiling voor de schaduwlaag en de drievraag aan kernleveranciers over embedded AI."
          },
          {
            "label": "Alleen het AI-gebruik van leerlingen en studenten — daar zit het risico.",
            "explain": "Te smal: docentgebruik met leerlinggegevens in privé-accounts is vaak het acuutste risico van allemaal."
          }
        ],
        "correct": 2
      },
      {
        "type": "Meerkeuze · beleid en visie",
        "q": "Waar begint een gedragen AI-schoolafspraak volgens les 4.3?",
        "options": [
          {
            "label": "Bij een actuele lijst van toegestane en verboden tools.",
            "explain": "Dat is het tool-protocol: binnen een jaar verouderd en zonder 'waarom' wordt het niet nageleefd."
          },
          {
            "label": "Bij de onderwijsvisie van de school, vertaald naar toetsbare afspraken in wel/niet/waarom-vorm.",
            "explain": "Klopt. Visie-ankers maken afspraken tool-onafhankelijk en geven het waarom dat naleving draagt."
          },
          {
            "label": "Bij het fraudereglement — eerst de sancties helder.",
            "explain": "Sancties zonder gedeeld waarom maken het beleid tot een handhavingsgevecht. Het fraudereglement volgt uit het kader (les 4.4), niet andersom."
          },
          {
            "label": "Bij wat vergelijkbare scholen hebben vastgesteld.",
            "explain": "Nuttig als inspiratie, maar twee scholen kunnen met dezelfde tool tegengesteld én verdedigbaar beleid hebben — juist omdat hun visie verschilt."
          }
        ],
        "correct": 1
      },
      {
        "type": "Meerkeuze · toetsing op organisatieniveau",
        "q": "Wat is volgens les 4.4 de rol van de examencommissie bij AI en toetsing?",
        "options": [
          {
            "label": "Elke ingeleverde toets zelf op AI-gebruik controleren.",
            "explain": "Onuitvoerbaar en niet haar taak — de commissie borgt kwaliteit, ze surveilleert niet."
          },
          {
            "label": "Een AI-detectietool aanschaffen en de scores als bewijs hanteren.",
            "explain": "Detectiescores zijn hoogstens gespreksaanleiding, nooit zelfstandig bewijs — onbetrouwbaar én strijdig met de geest van AVG art. 22."
          },
          {
            "label": "Kaders stellen: de fraudedefinitie actualiseren, regime-labels per toets verplichten en de programmabalans jaarlijks toetsen.",
            "explain": "Klopt. Zo beantwoordt de commissie toekomstige incidentvragen vooraf in plaats van per geval jurisprudentie te laten ontstaan."
          },
          {
            "label": "AI verbieden bij alle toetsen en examens.",
            "explain": "Een blanket-verbod is onverdedigbaar (werkdruk, beroepspraktijk) en onnodig: één robuust bewijsmoment per leerresultaat draagt het programma."
          }
        ],
        "correct": 2
      }
    ],
    "reflection": [
      "Welke van de vier lessen (wet, inventarisatie, visie, toetsorganisatie) is in jouw school het verst weg van de praktijk — en is dat de plek waar jij moet beginnen?",
      "Welke vraag uit deze check zou jouw MT of examencommissie nu fout beantwoorden — en wat ga je daarmee doen?"
    ],
    "checklist": [
      "Vijf vragen beantwoord — uitleg per antwoord gelezen",
      "De les met de meeste missers genoteerd om terug te kijken",
      "Volgende les (4.5 Kansengelijkheid & duurzaamheid) ingepland"
    ]
  },
  "kansengelijkheid-duurzaamheid": {
    "format": "casusbespreking",
    "summary": "AI-beleid dat alleen over wetgeving en tools gaat, mist twee vragen die over vijf jaar het oordeel over jouw school bepalen: wie profiteert er eigenlijk van AI — en wie betaalt de rekening? In deze les werk je drie casussen door: betaalde abonnementen die de portemonnee van thuis de klas in halen, een AI-first digitaliseringsplan dat botst met de eigen duurzaamheidsambitie, en twee afdelingen van één school waar dezelfde leerling totaal verschillende AI-kansen krijgt. Per casus drie perspectieven en twee uitspraken om stelling op te nemen. Je sluit af met vier beleidsaanpassingen die kansengelijkheid en duurzaamheid in je AI-beleid verankeren.",
    "duration": {
      "total": "50 minuten",
      "blocks": [
        {
          "label": "Aanleiding",
          "min": 6
        },
        {
          "label": "Conceptueel kader",
          "min": 8
        },
        {
          "label": "Casus A bespreken",
          "min": 9
        },
        {
          "label": "Casus B bespreken",
          "min": 9
        },
        {
          "label": "Casus C bespreken",
          "min": 9
        },
        {
          "label": "Action plan vier stappen",
          "min": 7
        },
        {
          "label": "Reflectie",
          "min": 2
        }
      ]
    },
    "opening": {
      "eyebrow": "Aanleiding",
      "aanleiding": "Een havo-4-leerling levert werk in dat met een betaald AI-abonnement van veertig euro per maand tot stand kwam — thuis aangeschaft, vanzelfsprekend als een rekenmachine. Haar klasgenoot heeft thuis één gedeelde laptop en geen abonnement. Zelfde opdracht, zelfde docent, zelfde cijferlijst. Intussen presenteert de ICT-coördinator trots het nieuwe digitaliseringsplan ('AI-first') aan een MT dat vorig jaar een klimaatneutrale ambitie voor 2030 vaststelde — en niemand in de vergadering legt de twee documenten naast elkaar. En in dezelfde school bloeit een NT2-leerling op bij een docent die AI als taalmaatje inzet, terwijl de afdeling ernaast alles verbiedt: binnen één gebouw bepaalt de gang waarin je les hebt welke toekomst je oefent.\n\nDrie scenes, één patroon: de verdelingsvragen van AI zijn geen bijzaak naast het 'echte' beleid — ze zíjn beleid. Wie profiteert, wie mist de boot, en welke kosten schuiven we door naar elders en later? Dat zijn bestuurlijke vragen, en ze horen thuis in hetzelfde A4 dat je in les 4.3 schreef. UNESCO waarschuwt sinds 2023 dat generatieve AI bestaande ongelijkheid kan vergroten als instellingen er niet bewust op sturen; over de milieukosten van AI — stroom voor training en gebruik, drinkwater voor koeling van datacenters — groeit de feitenbasis elk jaar.\n\nIn deze les neem je per casus stelling tegenover drie betrokkenen en twee collega-uitspraken. Geen van de casussen heeft een schoon antwoord — wel betere en slechtere afwegingen. Aan het einde vertaal je je posities naar vier concrete aanpassingen in het AI-beleid van jouw school of team: een kansen-check, een basistoegangsregel, een duurzaamheidsparagraaf en een jaarlijkse equity-scan. Die vier landen rechtstreeks in je praktijkopdracht (4.6).",
      "waaromNu": "UNESCO's richtsnoeren voor generatieve AI in het onderwijs (2023) zetten kansengelijkheid centraal: zonder bewust beleid vergroot AI de kloof tussen leerlingen mét en zonder toegang, thuisondersteuning en geoefende docenten. Tegelijk wordt het energie- en waterverbruik van AI-datacenters een publiek thema waar scholen met duurzaamheidsambities op aangesproken worden. Wie nu beleid schrijft (les 4.3 en 4.6), moet beide paragrafen nu meeschrijven — achteraf repareren is duurder en ongeloofwaardiger."
    },
    "conceptueel": {
      "eyebrow": "Conceptueel kader",
      "intro": "Kansengelijkheid bij AI heeft drie verdiepingen, en de meeste schoolgesprekken blijven op de eerste steken. Verdieping één: toegang — wie heeft de tools, de apparaten en het abonnement? Dit is de zichtbaarste laag en de makkelijkst te repareren: schoolbrede licenties, gratis routes, geen opdrachten die een betaald abonnement belonen. Verdieping twee: vaardigheid — wie heeft docenten en ouders die productief AI-gebruik vóórdoen? Een leerling die thuis leert prompten, kritisch controleren en herschrijven, bouwt een voorsprong op die niet in toegangsstatistieken zichtbaar is. Verdieping drie: profijt — voor wie wordt AI een hefboom en voor wie een afhankelijkheid? Dezelfde chatbot die een NT2-leerling laat meedoen, kan een zwakke schrijver het oefenen afnemen. Beleid dat alleen verdieping één regelt, produceert gelijke toegang tot ongelijke uitkomsten.\n\nDaarbij hoort een ongemakkelijke observatie: het grootste kansenrisico in een school is vaak niet de leerling-portemonnee maar de docent-loterij. Tussen twee klassen, twee teams of twee afdelingen van dezelfde school kan het verschil in AI-didactiek groter zijn dan tussen twee scholen. Kansengelijkheid is daarmee óók een professionaliseringsvraag — en dus een teamleiders-vraag, geen individuele docentkeuze.\n\nDuurzaamheid dan. De feiten verdienen precisie zonder alarmisme: het trainen van grote modellen kost veel energie, maar voor een school telt vooral het gebruik — elke prompt draait op datacenters die stroom verbruiken en vaak drinkwater voor koeling. Eén losse prompt is verwaarloosbaar; duizend leerlingen met dagelijkse AI-routines zijn dat niet, en de optelsom over alle scholen is een maatschappelijke kostenpost die deels buiten beeld blijft omdat hij elders neerslaat — bij datacenters, energienetten en waterwinning, niet op de schoolbegroting. Een school hoeft geen klimaatwetenschap te bedrijven om hier beleid op te voeren; proportionaliteit volstaat als principe: zet AI in waar het aantoonbaar waarde toevoegt aan leren, niet als standaardgereedschap voor alles — en wees eerlijk dat dit principe óók geldt als de licentie al betaald is.\n\nDe twee thema's horen in één les omdat ze hetzelfde beleidsgebrek blootleggen: kosten en baten die ongelijk verdeeld zijn, worden onzichtbaar in beleid dat alleen naar de gemiddelde gebruiker kijkt. Het instrument tegen die blindheid is simpel en herhaalbaar — bij elk AI-besluit twee vragen hardop stellen: wie profiteert hier het minst van, en welke kosten leggen we buiten ons zicht? De vier action-plan-stappen van deze les maken die twee vragen tot routine.",
      "mentalModel": {
        "naam": "De twee onzichtbare kolommen",
        "beschrijving": "Elk AI-besluit heeft een zichtbare boekhouding (licentiekosten, tijdwinst, leeropbrengst) en twee onzichtbare kolommen: de verdeling (wie profiteert het minst?) en de externe rekening (energie, water, afhankelijkheid — betaald door elders en later). Bestuurlijk volwassen AI-beleid maakt die twee kolommen bij elk besluit expliciet. Niet om elk besluit te blokkeren — om te weten wat je besluit."
      },
      "kernbegrippen": [
        {
          "term": "Drie verdiepingen van kansengelijkheid",
          "uitleg": "Toegang (wie heeft de tools), vaardigheid (wie leert er productief mee werken) en profijt (voor wie is AI hefboom, voor wie afhankelijkheid). Beleid dat alleen toegang regelt, lost een derde van het probleem op."
        },
        {
          "term": "Docent-loterij",
          "uitleg": "Het kansenverschil dat ontstaat doordat AI-didactiek per docent of afdeling verschilt binnen één school. Vaak groter dan het verschil tussen scholen — en daarmee een professionaliserings- en sturingsvraag."
        },
        {
          "term": "Basistoegangsregel",
          "uitleg": "De afspraak dat al het AI-gebruik dat school vraagt of aanraadt via een gratis of door school betaalde route kan, en dat opdrachten geen betaald abonnement mogen belonen."
        },
        {
          "term": "Proportionaliteitsprincipe",
          "uitleg": "AI inzetten waar het aantoonbaar waarde toevoegt aan leren — niet als standaard voor alles. Het werkbare duurzaamheidsprincipe voor scholen: geen klimaatboekhouding per prompt, wel een bewuste inzet-afweging."
        },
        {
          "term": "Equity-scan",
          "uitleg": "Jaarlijkse check op de drie verdiepingen per team of afdeling: waar lopen toegang, vaardigheid en profijt uiteen? Maakt de docent-loterij zichtbaar en bestuurbaar."
        }
      ]
    },
    "learningGoals": [
      "Je analyseert AI-vraagstukken op de drie verdiepingen van kansengelijkheid (toegang, vaardigheid, profijt) in plaats van alleen op toegang.",
      "Je formuleert per casus een eigen, verdedigbare positie tegenover drie perspectieven en twee collega-uitspraken — zonder te vluchten in 'het is complex'.",
      "Je weegt de milieukosten van AI proportioneel mee in schoolbeleid: feitelijk, zonder alarmisme én zonder wegkijken.",
      "Je vertaalt je posities naar vier beleidsaanpassingen (kansen-check, basistoegangsregel, duurzaamheidsparagraaf, equity-scan) die direct in je beleidsvoorstel van les 4.6 landen."
    ],
    "scenario": {
      "title": "Werksituatie",
      "context": "Het concept-A4 uit les 4.3 ligt er en het toetshoofdstuk uit 4.4 ook. Bij de draagvlaktoets stelde een ouderraadslid de vraag waar je nog geen antwoord op had: 'Mooi beleid — maar geldt het ook voor het kind dat thuis geen veertig euro per maand voor AI heeft?' En de leerlingenraad agendeerde, tot verrassing van het MT, het energieverbruik van AI. Je werkt drie casussen door om je antwoord te vormen vóór het beleidsvoorstel naar besluitvorming gaat.",
      "role": "Teamleider, schoolleider, ICT-coördinator of kartrekker · vo, mbo of hbo",
      "tools": "Concept-A4 uit les 4.3 · inventarisatie uit 4.2 · papier voor het action plan"
    },
    "casusbesprekingTitle": "Drie casussen, drie perspectieven, vier beleidsaanpassingen.",
    "casusbesprekingIntro": "Per casus zie je drie perspectieven en twee uitspraken van betrokkenen. Eerst je eerste reactie, dan je positie. Aan het einde vertaal je alles in vier aanpassingen die kansengelijkheid en duurzaamheid in jouw AI-beleid verankeren.",
    "cases": [
      {
        "title": "Casus A — Het betaalde abonnement in de klas",
        "context": "Op een havo/vwo-school geven steeds meer docenten opdrachten waarbij AI-gebruik is toegestaan en feitelijk loont. Een deel van de leerlingen werkt thuis met betaalde abonnementen (snellere modellen, betere output, hogere limieten), aangeschaft door ouders die het kunnen en willen betalen. Andere leerlingen gebruiken gratis varianten met limieten, of hebben thuis nauwelijks een geschikt apparaat. De cijfers van de eerste groep op AI-toegestane opdrachten liggen merkbaar hoger. De ouderraad vraagt het MT: vergoedt de school abonnementen, verbiedt ze het gebruik, of accepteren we dit verschil? De begroting heeft geen post voor schoolbrede licenties; het team is verdeeld.",
        "perspectives": [
          {
            "role": "De leerling zonder abonnement",
            "view": "Ik doe niks fout en sta toch op achterstand. Bij de toetsweek is iedereen gelijk, maar bij opdrachten thuis win je met geld. Zeg het dan gewoon eerlijk: wie betaalt, krijgt hogere cijfers. En nee, ik ga dat niet in de klas hardop zeggen — je geeft niet toe dat het thuis krap is."
          },
          {
            "role": "De docent die AI-opdrachten geeft",
            "view": "Ik kan toch niet wachten met realistische opdrachten tot elk gezin hetzelfde besteedt? Met dezelfde logica had ik nooit huiswerk mogen geven — thuisondersteuning was altijd al ongelijk. Ik wil dit wel eerlijker maken, maar dan moet de school me iets geven: een schoollicentie, of in elk geval een regel waar ik me aan kan houden."
          },
          {
            "role": "De schoolleider met de begroting",
            "view": "Een schoolbrede licentie kost serieus geld dat ik ergens anders weghaal — bij conciërges, bij klassenverkleining. Voordat ik die afweging maak, wil ik weten: is dit een echt en blijvend verschil, of een hype-effect? En als we niks doen, wat kost dát — niet in euro's maar in wat voor school we zijn?"
          }
        ],
        "statements": [
          {
            "author": "Collega 1",
            "quote": "Huiswerk was altijd al ongelijk — bijlesindustrie, hoogopgeleide ouders, een stille kamer om te werken. AI verandert daar principieel niets aan, dus laten we niet ineens heilig doen.",
            "agreePrompt": "Waar zit volgens jou het verschil — of de overeenkomst — tussen de bijlesindustrie en betaalde AI-abonnementen? En wat betekent jouw antwoord concreet voor één opdracht in jouw school?"
          },
          {
            "author": "Collega 2",
            "quote": "Simpele regel: voor schoolwerk ontwerpen we alleen opdrachten waarbij de gratis route volstaat. Wat leerlingen privé extra kopen, kunnen wij niet verbieden — maar het mag nooit het verschil maken in de beoordeling.",
            "agreePrompt": "Is deze regel in jouw school uitvoerbaar? Noem één opdracht waar hij nu al zou knellen en hoe je dat oplost — herontwerp, schoollicentie of toetsregime."
          }
        ],
        "workspaceFields": {
          "reactionField": {
            "field": "kgd-casus-a-reactie",
            "label": "Jouw eerste reactie op casus A",
            "shortLabel": "Reactie A",
            "hint": "Drie regels: wat zie je hier op de drie verdiepingen (toegang, vaardigheid, profijt) · wat is de eerste stap · wat kost niets doen",
            "placeholder": "Wat ik zie op de drie verdiepingen: ...\nEerste stap: ...\nWat niets doen kost: ...",
            "rows": 6
          },
          "positionField": {
            "field": "kgd-casus-a-positie",
            "label": "Jouw positie tegenover de twee uitspraken",
            "shortLabel": "Positie A",
            "hint": "Per uitspraak: eens/oneens met motivering · wat je in jouw beleid opneemt",
            "placeholder": "Bij collega 1: ... — wat ik in beleid opneem: ...\nBij collega 2: ... — wat ik in beleid opneem: ...",
            "rows": 6
          }
        }
      },
      {
        "title": "Casus B — AI-first versus klimaatneutraal",
        "context": "Een scholengroep stelde vorig jaar een duurzaamheidsagenda vast: klimaatneutraal in 2030, zonnepanelen, een afgewogen vleesloze kantine-dag — inclusief lespakketten waarin leerlingen hun eigen voetafdruk berekenen. Dit jaar presenteert dezelfde scholengroep een digitaliseringsplan met AI als speerpunt: AI-assistenten voor alle docenten, AI-vaardigheden in elk leerjaar, pilots met AI-tutoren. De duurzaamheidscoördinator vraagt in de MT-vergadering of iemand de milieu-impact van het AI-plan heeft doorgerekend. Stilte. De leerlingenraad — getraind door de eigen lespakketten — stelt dezelfde vraag schriftelijk en verwijst naar het energie- en waterverbruik van datacenters. Het MT moet reageren; 'dat is verwaarloosbaar' en 'dan doen we geen AI' voelen allebei onhoudbaar.",
        "perspectives": [
          {
            "role": "De duurzaamheidscoördinator",
            "view": "Ik gun het AI-plan alles, maar we leren leerlingen hun douchebeurten verantwoorden terwijl we zelf duizenden dagelijkse prompts uitrollen zonder één zin over de voetafdruk. Het gaat me niet om het verbieden — het gaat me om de geloofwaardigheid van álles wat we over duurzaamheid zeggen."
          },
          {
            "role": "De ICT-coördinator",
            "view": "Laten we de proporties bewaken: het effect van één school op het wereldwijde datacenterverbruik is een afrondingsfout, en AI bespaart elders ook — minder herwerk, minder papier, betere ondersteuning. Als we elk nieuw plan langs de strengste duurzaamheidsmeetlat leggen, doen we straks niets meer. Maar een eerlijke paragraaf erover schrijven? Prima, dat hoort gewoon bij goed bestuur."
          },
          {
            "role": "De bestuurder",
            "view": "Voor mij is dit een consistentievraag, geen rekenvraag. We hebben twee beloften gedaan — toekomstgericht onderwijs en klimaatverantwoordelijkheid — en ik weiger te kiezen alsof het er één moet zijn. Ik wil een AI-plan met een duurzaamheidsparagraaf die uitlegbaar is aan de leerlingenraad die wij zelf kritisch hebben leren denken."
          }
        ],
        "statements": [
          {
            "author": "Collega 1",
            "quote": "Die hele milieudiscussie is whataboutism. Eén vliegreis van het MT naar een congres kost meer dan een jaar schoolbreed prompten. Begin dáár en val AI niet lastig.",
            "agreePrompt": "Klopt de vergelijking feitelijk — en al zou hij kloppen, is dat een argument om de AI-paragraaf te schrappen of juist om beide aan te pakken? Formuleer je antwoord in drie zinnen alsof de leerlingenraad meeleest."
          },
          {
            "author": "Collega 2",
            "quote": "Proportionaliteit is ons principe: AI waar het leren aantoonbaar versterkt, geen AI als standaardsausje over alles. Dat is meteen ook ons duurzaamheidsbeleid — bewust gebruik in plaats van symboolmaatregelen.",
            "agreePrompt": "Noem één AI-toepassing in jouw school die deze proportionaliteitstoets vermoedelijk niet doorstaat — en wat je daarmee doet: stoppen, versmallen of bewust voortzetten met motivering."
          }
        ],
        "workspaceFields": {
          "reactionField": {
            "field": "kgd-casus-b-reactie",
            "label": "Jouw eerste reactie op casus B",
            "shortLabel": "Reactie B",
            "hint": "Drie regels: wat speelt hier echt (consistentie, feiten, geloofwaardigheid) · wat zou jouw MT nu antwoorden · wat is er nodig voor een beter antwoord",
            "placeholder": "Wat hier echt speelt: ...\nWat mijn MT nu zou antwoorden: ...\nWat nodig is voor een beter antwoord: ...",
            "rows": 6
          },
          "positionField": {
            "field": "kgd-casus-b-positie",
            "label": "Jouw positie tegenover de twee uitspraken",
            "shortLabel": "Positie B",
            "hint": "Per uitspraak: eens/oneens met motivering · wat dit betekent voor de duurzaamheidsparagraaf in jouw beleid",
            "placeholder": "Bij collega 1: ... — betekenis voor mijn paragraaf: ...\nBij collega 2: ... — betekenis voor mijn paragraaf: ...",
            "rows": 6
          }
        }
      },
      {
        "title": "Casus C — Twee gangen, twee toekomsten",
        "context": "Binnen één mbo-college lopen twee werelden. Bij de opleiding Zorg zet een bevlogen team AI breed in: een NT2-student die eerder stilviel in verslagen, doet volwaardig mee dankzij een AI-taalmaatje; een student met dyslexie levert voor het eerst zonder hulpvragen in. Bij de opleiding Techniek, één gang verderop, heeft het team AI categorisch verbannen: 'eerst het vak leren'. Een docent Techniek ziet dat zijn studenten straks solliciteren naast Zorg-studenten die twee jaar AI-werkervaring meenemen — bij werkgevers die er expliciet om vragen. De ondersteuningscoördinator ziet nog iets anders: studenten met ondersteuningsbehoeften bij Techniek missen precies de hulpmiddelen waarmee hun evenknieën bij Zorg opbloeien. Beide teams beroepen zich op dezelfde vrijheid: 'wij gaan over ons eigen onderwijs.'",
        "perspectives": [
          {
            "role": "De ondersteuningscoördinator",
            "view": "Voor studenten met een taalachterstand of dyslexie is dit geen gadget-discussie — AI is voor hen wat de bril was voor slechtzienden. Dat de ene afdeling dat hulpmiddel omarmt en de andere het verbiedt, betekent dat ondersteuning afhangt van je opleidingskeuze. Dat kan ik aan geen enkele student uitleggen."
          },
          {
            "role": "De teamvoorzitter Techniek",
            "view": "Ons verbod is geen conservatisme — het is vakdidactiek. Wie het meten, tekenen en rekenen aan AI uitbesteedt voordat hij het beheerst, is straks de monteur die blind vertrouwt op een systeem dat hij niet kan controleren. Dat is nog gevaarlijk ook. Maar ik geef toe: voor de ondersteuningsgevallen hebben we geen antwoord, en dat schuurt."
          },
          {
            "role": "De ouder",
            "view": "Mijn dochter zit bij Techniek, haar vriendin bij Zorg — zelfde school, zelfde brief met dezelfde beloften bij de open dag. De één leert werken zoals het bedrijfsleven werkt, de ander mag dat pas na haar diploma ontdekken. Niemand heeft ons bij de studiekeuze verteld dat dit verschil bestond. Waarom beslist een team dit eigenlijk per gang?"
          }
        ],
        "statements": [
          {
            "author": "Collega 1",
            "quote": "Teamautonomie is een groot goed, maar autonomie gaat over hóe je leerdoelen bereikt — niet over of studenten met een ondersteuningsbehoefte hun hulpmiddel krijgen en of ze arbeidsmarktklaar afstuderen. Daar hoort een schoolbrede ondergrens.",
            "agreePrompt": "Formuleer die ondergrens in maximaal twee regels: wat moet op élke afdeling van jouw school gegarandeerd zijn, ongeacht de didactische kleur van het team?"
          },
          {
            "author": "Collega 2",
            "quote": "Het verschil tussen die teams is geen schande, het is een natuurlijk experiment. Laat beide routes twee jaar lopen, meet wat het doet met vakbeheersing én arbeidsmarktpositie, en beslis dan op basis van iets beters dan overtuigingen.",
            "agreePrompt": "Wat is er mis — en wat is er waardevol — aan twee jaar 'experimenteren' met echte studenten? Noem één ding dat je nú al zou gelijktrekken en één verschil dat je bewust zou laten bestaan."
          }
        ],
        "workspaceFields": {
          "reactionField": {
            "field": "kgd-casus-c-reactie",
            "label": "Jouw eerste reactie op casus C",
            "shortLabel": "Reactie C",
            "hint": "Drie regels: waar zit het echte kansenprobleem (ondersteuning, arbeidsmarkt, informatie aan ouders) · wat herken je in je eigen school · wat zou jouw eerste interventie zijn",
            "placeholder": "Het echte kansenprobleem: ...\nWat ik herken in mijn school: ...\nMijn eerste interventie: ...",
            "rows": 6
          },
          "positionField": {
            "field": "kgd-casus-c-positie",
            "label": "Jouw positie tegenover de twee uitspraken",
            "shortLabel": "Positie C",
            "hint": "Per uitspraak: eens/oneens met motivering · wat dit betekent voor teamautonomie in jouw beleid",
            "placeholder": "Bij collega 1: ... — betekenis voor mijn beleid: ...\nBij collega 2: ... — betekenis voor mijn beleid: ...",
            "rows": 6
          }
        }
      }
    ],
    "legalCallout": {
      "source": "UNESCO · Guidance for generative AI in education and research (2023) — en de Nederlandse doorvertaling",
      "title": "Wat de internationale richtsnoeren zeggen over kansen en kosten",
      "body": "UNESCO publiceerde in 2023 als eerste VN-organisatie richtsnoeren voor generatieve AI in het onderwijs. Twee lijnen daaruit dragen deze les.\n\nKansengelijkheid: de richtsnoeren stellen dat generatieve AI bestaande digitale kloven kan verdiepen — tussen landen, maar net zo goed binnen scholen: tussen wie wel en geen toegang heeft, wie wel en geen begeleiding krijgt bij het gebruik, en wie wel en niet leert om AI-output kritisch te beoordelen. De aanbeveling aan instellingen: stuur er bewust op dat AI-inzet inclusie vergroot in plaats van verkleint, en let in het bijzonder op leerlingen met ondersteuningsbehoeften, voor wie AI zowel een krachtig hulpmiddel als een nieuwe drempel kan zijn. Dat is precies het spanningsveld van casus A en C.\n\nDuurzaamheid en proportionaliteit: UNESCO beveelt aan het gebruik van AI te wegen tegen pedagogische meerwaarde — niet elke taak hoeft door een groot model te lopen. De milieukosten van AI (energieverbruik van training en gebruik, waterverbruik voor koeling van datacenters) zijn reëel en groeien met de schaal; voor een individuele school is de juiste reactie geen klimaatboekhouding per prompt, maar een proportionaliteitsprincipe in beleid en een eerlijke paragraaf in de communicatie — zeker voor scholen die leerlingen zelf tot kritische duurzaamheidsvragen opleiden (casus B).\n\nVoor de Nederlandse praktijk vertalen Kennisnet (po/vo/mbo) en Npuls (mbo/hbo/wo) deze lijnen naar handreikingen voor schoolbeleid; de AI Act voegt er met artikel 4 aan toe dat AI-geletterdheid — inclusief het kunnen wegen van deze maatschappelijke effecten — een organisatieplicht is en geen vrijblijvende ambitie.",
      "link": "https://www.unesco.org"
    },
    "actionPlan": {
      "source": "Drie casussen — vertaald naar vier verankeringen in jouw AI-beleid",
      "title": "Vier aanpassingen die kansengelijkheid en duurzaamheid in je beleid verankeren",
      "steps": [
        {
          "title": "Voer de kansen-check in bij elk AI-besluit",
          "body": "Neem in je beleidsproces (en in het format van je beleidsvoorstel uit 4.6) twee verplichte vragen op die bij elk AI-besluit schriftelijk beantwoord worden: wie profiteert hier het minst van, en welke kosten leggen we buiten ons zicht? Twee zinnen per besluit volstaan — het gaat om het ritueel dat de onzichtbare kolommen zichtbaar maakt vóór de hamer valt.",
          "workspace": {
            "field": "kgd-action-kansencheck",
            "label": "Mijn kansen-check geformuleerd",
            "placeholder": "De twee vragen zoals ze in ons besluitformat komen:\n1. ...\n2. ...\nWaar verankerd (beleidsformat / MT-agenda / werkgroep): ...\nWie bewaakt dat het gebeurt: ...",
            "rows": 6
          }
        },
        {
          "title": "Leg de basistoegangsregel vast",
          "body": "Formuleer de regel die casus A beantwoordt: al het AI-gebruik dat school voor schoolwerk vraagt of aanraadt, kan via een gratis of door school betaalde route, en opdrachten worden zo ontworpen en beoordeeld dat een betaald privé-abonnement geen voordeel oplevert. Benoem ook de consequentie: welke schoollicentie of welk herontwerp is er nodig om deze regel waar te maken — en wat zet je daarvoor in de begroting van je voorstel?",
          "workspace": {
            "field": "kgd-action-basistoegang",
            "label": "Mijn basistoegangsregel + consequenties",
            "placeholder": "De regel in twee zinnen: ...\nWat er nodig is om hem waar te maken (licentie / herontwerp / toetsregime): ...\nKostenindicatie voor het beleidsvoorstel: ...",
            "rows": 6
          }
        },
        {
          "title": "Schrijf de duurzaamheidsparagraaf — eerlijk en proportioneel",
          "body": "Eén paragraaf voor je beleidsvoorstel, drie elementen: erkenning van de feiten (AI-gebruik kost energie en koelwater in datacenters; de optelsom telt, ook al is één prompt verwaarloosbaar), het proportionaliteitsprincipe (AI waar het leren aantoonbaar versterkt, geen AI als standaardsausje), en consistentie met bestaande duurzaamheidsambities van de school. Schrijf hem zó dat de leerlingenraad hem kan lezen zonder dat je je schaamt.",
          "workspace": {
            "field": "kgd-action-duurzaamheid",
            "label": "Mijn duurzaamheidsparagraaf (concept)",
            "placeholder": "Erkenning van de feiten: ...\nOns proportionaliteitsprincipe: ...\nConsistentie met onze bestaande ambities: ...\nEén voorbeeld van AI-gebruik dat we hierom NIET standaard maken: ...",
            "rows": 7
          }
        },
        {
          "title": "Plan de jaarlijkse equity-scan",
          "body": "De docent-loterij van casus C maak je alleen bestuurbaar door hem te meten. Plan een jaarlijkse scan langs de drie verdiepingen, uitgesplitst per team of afdeling: toegang (kan elke leerling/student wat school vraagt?), vaardigheid (waar wordt productief AI-gebruik aangeleerd en waar niet?), profijt (hoe vergaat het leerlingen met ondersteuningsbehoeften per afdeling?). Koppel de scan aan een bestaand moment — de kwaliteitscyclus of de jaarlijkse beleidsherijking uit 4.3 — en spreek een schoolbrede ondergrens af voor wat overal gegarandeerd is.",
          "workspace": {
            "field": "kgd-action-equityscan",
            "label": "Mijn equity-scan-opzet",
            "placeholder": "Scanmoment (gekoppeld aan): ...\nDrie vragen per afdeling/team:\n1. Toegang: ...\n2. Vaardigheid: ...\n3. Profijt (incl. ondersteuningsbehoeften): ...\nOnze schoolbrede ondergrens: ...\nWie voert uit en rapporteert aan wie: ...",
            "rows": 8
          }
        }
      ]
    },
    "valkuilen": [
      {
        "titel": "Kansengelijkheid versmallen tot toegang",
        "watGebeurtEr": "De school regelt een gratis licentie voor iedereen en vinkt kansengelijkheid af. Intussen leert de ene klas kritisch AI-gebruik en de andere niets, en bouwen leerlingen met geoefende ouders thuis een onzichtbare voorsprong op.",
        "fix": "Werk met de drie verdiepingen: toegang regel je met licenties, vaardigheid met curriculum en professionalisering, profijt met monitoring per groep. Pas als alle drie in beeld zijn, is de paragraaf af."
      },
      {
        "titel": "De docent-loterij onbespreekbaar laten",
        "watGebeurtEr": "Onder de vlag van teamautonomie groeien binnen één school twee werelden — en niemand agendeert het, want het voelt als kritiek op collega's. De rekening ligt bij leerlingen die niets te kiezen hadden.",
        "fix": "Maak het verschil zichtbaar zonder schuldvraag (de equity-scan) en spreek een ondergrens af die autonomie begrenst waar hij leerlingen raakt: ondersteuningshulpmiddelen en arbeidsmarktvoorbereiding zijn geen teamkeuze."
      },
      {
        "titel": "Duurzaamheid wegwuiven of opblazen",
        "watGebeurtEr": "Het gesprek polariseert tussen 'verwaarloosbaar, doorlopen' en 'AI is een klimaatramp, stoppen'. Beide kampen hebben halve feiten, het beleid krijgt geen paragraaf, en de leerlingenraad prikt er doorheen.",
        "fix": "Proportionaliteit als principe: erken de feiten (gebruik kost energie en koelwater, schaal telt), weeg per toepassing de pedagogische meerwaarde, en schrijf het op. Eerlijkheid is hier belangrijker dan precisie."
      },
      {
        "titel": "Beleid schrijven voor de gemiddelde leerling",
        "watGebeurtEr": "Alle afspraken kloppen voor de leerling met een laptop, een stille kamer en handige ouders. Voor de NT2-student, de leerling met dyslexie en het gezin met één gedeeld apparaat klopt er stilletjes niets van.",
        "fix": "Toets elke afspraak op de randen, niet op het midden: loop het concept-A4 langs met de ondersteuningscoördinator en minstens één leerling voor wie de gratis route de enige route is."
      },
      {
        "titel": "Statements verzamelen in plaats van stelling nemen",
        "watGebeurtEr": "De casussen worden 'interessant bevonden', iedereen ziet alle kanten, en het beleidsvoorstel krijgt een paragraaf vol 'enerzijds-anderzijds' waar geen schoolleider een besluit op kan baseren.",
        "fix": "Dwing jezelf per casus tot een positie met één erkende prijs: 'wij kiezen X en accepteren dat dit Y kost.' De vier action-plan-stappen zijn precies zulke keuzes — geen beschouwingen."
      }
    ],
    "geoefendSpoor": {
      "eyebrow": "Voor de geoefende kartrekker",
      "titel": "Organiseer een dilemmasessie met leerlingen of studenten aan tafel",
      "beschrijving": "Heb je je vier verankeringen geformuleerd? Test ze dan bij de groep over wie ze gaan. Organiseer een sessie van zestig minuten met zes tot acht leerlingen of studenten (gemengd: mét en zonder betaalde abonnementen, mét en zonder ondersteuningsbehoefte) en leg ze casus A en C voor — niet jouw oplossingen, eerst de casussen zelf. Vraag daarna pas een reactie op jouw basistoegangsregel en ondergrens. Investering: één uur sessie plus een uur verwerking. Opbrengst: beleid dat de werkelijkheid van leerlingen heeft gezien vóór vaststelling — en een leerlingenraad of studentenraad die straks in de medezeggenschap vóór je voorstel is omdat ze het mee hebben gemaakt.",
      "opdracht": "Voer de sessie uit vóór je praktijkopdracht (4.6) en verwerk minimaal twee inzichten zichtbaar in je beleidsvoorstel — met bronvermelding 'aangepast na sessie met leerlingen/studenten'."
    },
    "eindcriteria": [
      {
        "criterium": "Analyse op drie verdiepingen",
        "onder": "Kansengelijkheid alleen als toegangsvraag behandeld.",
        "op": "Per casus toegang, vaardigheid en profijt onderscheiden in de reactie.",
        "boven": "+ De drie verdiepingen toegepast op een echte situatie in de eigen school."
      },
      {
        "criterium": "Positiebepaling",
        "onder": "Enerzijds-anderzijds zonder keuze, of polariserende oneliner.",
        "op": "Per casus een positie met motivering én één erkende prijs van die keuze.",
        "boven": "+ Posities getoetst in gesprek met iemand die het oneens is."
      },
      {
        "criterium": "Duurzaamheidsafweging",
        "onder": "Weggewuifd ('verwaarloosbaar') of opgeblazen ('klimaatramp').",
        "op": "Feiten erkend, proportionaliteitsprincipe geformuleerd, consistentie met schoolambities gecheckt.",
        "boven": "+ Eén bestaande AI-toepassing daadwerkelijk langs de proportionaliteitstoets gelegd."
      },
      {
        "criterium": "Basistoegang en ondergrens",
        "onder": "Geen regel, of een verbod dat het probleem verplaatst.",
        "op": "Basistoegangsregel en schoolbrede ondergrens geformuleerd met consequenties (licentie/herontwerp).",
        "boven": "+ Kostenindicatie gemaakt en afgestemd met begrotingsverantwoordelijke."
      },
      {
        "criterium": "Verankering in beleid",
        "onder": "Inzichten blijven los van het beleidsdocument.",
        "op": "Vier action-plan-stappen ingevuld en klaar om in het 4.6-voorstel te landen.",
        "boven": "+ Equity-scan gekoppeld aan een bestaand kwaliteitsmoment met uitvoerder en rapportageroute."
      }
    ],
    "reflection": [
      "Welke leerling of student uit de drie casussen lijkt het meest op iemand in jouw eigen school — en wist je tijdens het lezen meteen wie, of moest je zoeken? Wat zegt dat over wie jij in beeld hebt?",
      "Waar sta jij zelf in de spanning tussen teamautonomie en schoolbrede ondergrens — en is jouw positie dezelfde wanneer het over jouw eigen team gaat als wanneer het over dat van een ander gaat?",
      "Welke van de vier verankeringen (kansen-check, basistoegang, duurzaamheidsparagraaf, equity-scan) gaat in jouw school de meeste weerstand oproepen — en van wie? Wat is je openingszin in dat gesprek?"
    ],
    "checklist": [
      "Drie casussen doorgewerkt — schriftelijk of in gesprek met een collega",
      "Per casus positie bepaald tegenover de twee uitspraken, met één erkende prijs",
      "Kansen-check (twee vragen) geformuleerd voor het eigen besluitproces",
      "Basistoegangsregel geformuleerd met consequenties en kostenindicatie",
      "Duurzaamheidsparagraaf in concept geschreven — leesbaar voor de leerlingenraad",
      "Equity-scan opgezet met drie vragen, scanmoment en schoolbrede ondergrens",
      "Ondersteuningscoördinator (of vergelijkbare rol) als gesprekspartner genoteerd",
      "Vier verankeringen klaargezet voor het beleidsvoorstel van les 4.6"
    ],
    "verderLezen": [
      {
        "titel": "Guidance for generative AI in education and research",
        "bron": "UNESCO",
        "jaar": 2023,
        "link": "https://www.unesco.org",
        "waarom": "De internationale basis voor de kansengelijkheids- en proportionaliteitslijn van deze les — met expliciete aandacht voor leerlingen met ondersteuningsbehoeften."
      },
      {
        "titel": "AI en kansengelijkheid in het funderend onderwijs",
        "bron": "Kennisnet",
        "jaar": 2025,
        "link": "https://www.kennisnet.nl",
        "waarom": "De Nederlandse doorvertaling voor po/vo/mbo: digitale kloof, thuissituatie en wat scholen concreet kunnen regelen."
      },
      {
        "titel": "Kennisbank AI — verantwoord en duurzaam gebruik",
        "bron": "Npuls",
        "jaar": 2025,
        "link": "https://www.npuls.nl",
        "waarom": "Voor mbo en hoger onderwijs: hoe instellingen maatschappelijke en ecologische effecten van AI meewegen in instellingsbeleid."
      },
      {
        "titel": "Verordening (EU) 2024/1689 — artikel 4 en overwegingen",
        "bron": "EUR-Lex",
        "jaar": 2024,
        "link": "https://eur-lex.europa.eu",
        "waarom": "AI-geletterdheid omvat ook het kunnen wegen van kansen, risico's en maatschappelijke effecten — de wettelijke haak voor deze les in je beleidsvoorstel."
      }
    ]
  },
  "praktijkopdracht-4": {
    "format": "praktijkopdracht",
    "summary": "Module 04 sluit af met het product waar alles naartoe werkte: een besluitrijp AI-beleidsvoorstel voor je eigen school of team. Drie keuzepaden — teamafspraken, schoolbreed beleid of toetsbeleid. Je bouwt het voorstel uit de artefacten van les 4.1 t/m 4.5 (quickscan, inventarisatie, visie-A4, programmascan, vier verankeringen), laat het reviewen door een criticus én een beslisser, en agendeert het op een echte vergadering. Het bewijs van deze module is geen document in een la — het is een genomen of geagendeerd besluit.",
    "duration": {
      "total": "3 uur (excl. het besluitmoment zelf)",
      "blocks": [
        {
          "label": "Pad kiezen + startfoto",
          "min": 20
        },
        {
          "label": "Bouwstenen uit 4.1-4.5 verzamelen",
          "min": 25
        },
        {
          "label": "Conceptvoorstel schrijven",
          "min": 60
        },
        {
          "label": "Peer review aanvragen + verwerken",
          "min": 30
        },
        {
          "label": "Besluitrijp maken",
          "min": 30
        },
        {
          "label": "Reflectie + borgingsafspraak",
          "min": 15
        }
      ]
    },
    "opening": {
      "eyebrow": "Aanleiding",
      "aanleiding": "Module 04 heeft je door zes lessen geleid die elk een bouwsteen opleverden: een AI Act-quickscan en bestuursmemo (4.1), een inventarisatie met triage (4.2), een visie-gedreven A4 met afspraken (4.3), een programmascan met beslisvragen voor de examencommissie (4.4) en vier verankeringen voor kansengelijkheid en duurzaamheid (4.5). Losse bouwstenen overtuigen niemand — een voorstel dat ze samenbrengt en op een vergadertafel legt wél. Dat is deze praktijkopdracht: van bouwstenen naar besluit.\n\n'Besluitrijp' is daarbij een ambacht, geen bijvoeglijk naamwoord. Een besluitrijp voorstel heeft een beslisvraag waar ja of nee op kan volgen, maakt kosten en werkdruk expliciet in plaats van ze weg te moffelen, kent zijn eigen zwakke plekken en benoemt ze zelf, en heeft de route langs team en medezeggenschap al uitgestippeld. Het verschil tussen een visiestuk en een besluitrijp voorstel is het verschil tussen 'interessant, agenderen we nog eens' en een genomen besluit met een datum.\n\nJe kiest één van drie paden, passend bij je rol en je speelveld: teamafspraken voor je eigen team of sectie, een schoolbreed beleidsvoorstel voor MT of bestuur, of een toetsbeleidsvoorstel voor de examencommissie. Voor alle paden geldt dezelfde lat: zeven deliverables, een peer review door een criticus én een beslisser, en — dit is het echte examen — agendering op een echte vergadering binnen tien werkdagen. Het bewijs van Module 04 zit niet in je document. Het zit in wat de mensen met mandaat ermee doen.",
      "waaromNu": "De AI Act geeft dit voorstel zijn deadline: de geletterdheidsplicht geldt sinds februari 2025 en vanaf augustus 2026 moeten hoog-risicotoepassingen op orde zijn en kan worden gehandhaafd. Een school die nu een besluitrijp voorstel agendeert, beslist zelf over haar aanpak; een school die wacht, laat de kalender beslissen. En bestuurlijk geldt wat in elke les terugkwam: gedragen beleid vraagt tijd voor verbouwing door team en medezeggenschap — die tijd is er alleen als het voorstel er nú ligt."
    },
    "scenario": {
      "title": "Werksituatie",
      "context": "Je hebt les 4.1 t/m 4.5 doorlopen en de werkstukken liggen in je workspace. Nu lever je het eindproduct: een AI-beleidsvoorstel voor je eigen context, klaar voor besluitvorming. Geen oefendocument — een stuk dat een echte vergadering haalt, met een beslisvraag, een begroting in tijd en geld, en een uitvoeringsroute. Binnen tien werkdagen na afronding staat het op een agenda: teamoverleg, MT of examencommissie.",
      "role": "Teamleider, schoolleider, ICT-coördinator, examencommissielid of kartrekker · vo, mbo of hbo",
      "tools": "Eigen workspace-artefacten uit 4.1-4.5 · schoolplan en begrotingskader · één criticus en één beslisser als reviewers · een echte vergaderagenda"
    },
    "praktijkTitle": "Kies één pad. Lever zeven deliverables. Agendeer binnen tien werkdagen op een echte vergadering.",
    "praktijkIntro": "Drie paden, één lat: een besluitrijp voorstel dat de bouwstenen van deze module samenbrengt. Per pad een andere schaal en een ander gremium. Voor alle paden dezelfde peer review en dezelfde agenderingseis.",
    "paths": [
      {
        "id": "a",
        "label": "Pad A — Teamafspraken: één A4 voor je eigen team of sectie, besluitrijp voor het teamoverleg",
        "beschrijving": "Je maakt het AI-afsprakendocument voor je eigen team of sectie definitief: van het concept-A4 uit les 4.3 naar een versie die het team in één overleg kan verbouwen en vaststellen. Kleinste schaal, snelste besluit — en daarmee het pad waar je de hele cyclus (concept, verbouwing, besluit, evaluatie) het snelst écht doorloopt. Geschikt voor teamleiders, sectievoorzitters en kartrekkers zonder schoolbreed mandaat.",
        "deliverables": [
          "Pad A gekozen + motivatie van max 50 woorden (waarom dit pad past bij jouw rol en speelveld)",
          "Startfoto: de drie relevantste bevindingen uit je inventarisatie (4.2) voor dít team, plus de teamspecifieke rode vlaggen uit je quickscan (4.1)",
          "Het team-A4: visie-anker, afspraken in wel/niet/waarom-vorm, twijfelroute, eigenaar en herzieningsdatum — inclusief de basistoegangsregel uit 4.5",
          "Werkvorm-ontwerp voor het teamoverleg (30-45 min) waarin het team het A4 verbouwt in plaats van aanhoort: opening, verbouwronde, besluitvraag",
          "Beslisdocument van één pagina: beslisvraag, wat het team toezegt, wat het de teamleden kost (tijd, gedragsverandering), evaluatiedatum na drie maanden",
          "Peer review door één criticus uit het team en één beslisser (teamleider of schoolleider), plus jouw verwerking",
          "Reflectie van 250 woorden ná het teamoverleg: wat werd er verbouwd, wat werd er besloten, en wat zegt het verschil tussen jouw concept en het besluit over je team"
        ]
      },
      {
        "id": "b",
        "label": "Pad B — Schoolbreed beleidsvoorstel: een notitie voor MT of bestuur die alle modulebouwstenen samenbrengt",
        "beschrijving": "Je schrijft het integrale AI-beleidsvoorstel voor je school of instelling: compliance (4.1), feitelijk gebruik (4.2), visie en afspraken (4.3), toetsorganisatie (4.4, op hoofdlijnen) en de kansen- en duurzaamheidsverankeringen (4.5) — samengebracht in een notitie van maximaal zes pagina's plus het A4 als bijlage. Grootste schaal, langste route; het besluit dat je vraagt is dan ook geen eindbeleid maar een startbesluit: stelt het MT het kader vast en geeft het de uitvoeringsroute vrij? Geschikt voor schoolleiders, ICT-coördinatoren met beleidsopdracht en stafmedewerkers.",
        "deliverables": [
          "Pad B gekozen + motivatie van max 50 woorden",
          "Startfoto: AI Act-stand van zaken (quickscan + hoog-risico-inventaris uit 4.1) en het drie-lagenbeeld uit 4.2, samengevat op één pagina",
          "De beleidsnotitie (max 6 pagina's): visie-ankers en afspraken-A4, artikel 4-scholingsparagraaf, basistoegangsregel en duurzaamheidsparagraaf, toetsorganisatie op hoofdlijnen met verwijzing naar de examencommissieroute",
          "Begroting in tijd en geld: licenties, scholing, uitvoeringsuren — plus wat het kost om níets te doen (compliance-risico, kansenongelijkheid)",
          "Beslisdocument: één beslisvraag voor het MT/bestuur, uitvoeringsroute met gremia en data (team, MR/OR, communicatie), en de drie zwakste plekken van het voorstel zelf benoemd",
          "Peer review door één criticus (collega die het hardst 'weer beleid' zegt) en één beslisser (MT-lid of bestuurder), plus jouw verwerking",
          "Reflectie van 250 woorden ná agendering: hoe landde het, welke vraag uit de vergadering had je niet voorzien, en wat is de status van het besluit"
        ]
      },
      {
        "id": "c",
        "label": "Pad C — Toetsbeleid: een voorstel voor de examencommissie dat het toetsprogramma AI-bestendig organiseert",
        "beschrijving": "Je werkt de lijn van les 4.4 uit tot een formeel voorstel aan de examencommissie (vo: examensecretaris en schoolleiding): programmascan, regimebalans, geactualiseerde fraudeparagraaf, detectiescore-regel en kalibratiecyclus. Het meest afgebakende pad, met het meest formele gremium — en daarmee het pad waar precisie in formulering het zwaarst weegt: jouw tekst wordt reglement. Geschikt voor examencommissie- en toetscommissieleden, examensecretarissen en teamleiders met toetsportefeuille.",
        "deliverables": [
          "Pad C gekozen + motivatie van max 50 woorden",
          "Startfoto: de programmascan van één opleiding of leerjaar (4.4) met per leerresultaat de robuust-bewijsmoment-status, plus de AI Act-check op proctoring (4.1)",
          "De regimebalans: gerepareerde gaten, ontspannen toetsen, en per AI-verboden toets de verdedigbaarheidsmotivering",
          "Concept-reglementtekst: geactualiseerde fraudeparagraaf (gekoppeld aan regime-labels) en de detectiescore-regel — juridisch gecheckt of met check-afspraak",
          "Beslisdocument: de drie beslisvragen (fraudedefinitie, verplichte labeling, jaarlijkse scan) elk met consequentie-van-nee, uitvoerder en ingangsdatum, plus de kalibratiecyclus-planning",
          "Peer review door één docent die de regimes moet gaan toepassen en één lid van het beslisgremium, plus jouw verwerking",
          "Reflectie van 250 woorden ná agendering: welk beslispunt haalde het, welk niet of nog niet, en wat leert dat over het verschil tussen toetslogica en commissielogica"
        ]
      }
    ],
    "peerReview": {
      "title": "Review door een criticus én een beslisser — drie vragen",
      "intro": "Vraag twee reviewers: de collega die het meest kritisch is op nieuw beleid (de criticus) en iemand uit het gremium dat moet besluiten (de beslisser). Vraag ze binnen drie werkdagen om concrete observaties langs drie vragen — geen rapportcijfer, geen beleefdheden.",
      "questions": [
        {
          "vraag": "Welke afspraak of welk beslispunt in dit voorstel gaat in de praktijk genegeerd worden — en waaraan zie je dat nu al?",
          "workspace": {
            "field": "po4-review-vraag-1",
            "label": "Antwoord reviewers op vraag 1 + wat jij ermee doet",
            "shortLabel": "Review vraag 1",
            "hint": "Wat zeggen criticus en beslisser · welke afspraak herschrijf, schrap of verdedig je",
            "placeholder": "Criticus zegt: ...\nBeslisser zegt: ...\nWat ik aanpas vóór agendering: ...",
            "rows": 5
          }
        },
        {
          "vraag": "Zijn de kosten eerlijk in beeld — tijd, geld, werkdruk, en de prijs van de gekozen ondergrens? Wat is er weggemoffeld of te rooskleurig?",
          "workspace": {
            "field": "po4-review-vraag-2",
            "label": "Antwoord reviewers op vraag 2 + wat jij ermee doet",
            "shortLabel": "Review vraag 2",
            "hint": "Welke kostenpost ontbreekt of is geschoond · wat zet je alsnog expliciet in het voorstel",
            "placeholder": "Wat ontbreekt of is te rooskleurig: ...\nWat ik expliciet toevoeg: ...",
            "rows": 5
          }
        },
        {
          "vraag": "Kan het gremium hier ja of nee op zeggen — is de beslisvraag scherp, de route helder en het mandaat juist? Zo nee: wat moet er anders vóór dit op een agenda kan?",
          "workspace": {
            "field": "po4-review-vraag-3",
            "label": "Antwoord reviewers op vraag 3 + wat jij ermee doet",
            "shortLabel": "Review vraag 3",
            "hint": "Is de beslisvraag beslisbaar · klopt het gremium · wat herformuleer je",
            "placeholder": "Beslisser zegt over de beslisvraag: ...\nWat ik herformuleer: ...\nDefinitieve beslisvraag: ...",
            "rows": 5
          }
        }
      ]
    },
    "transferhaak": {
      "title": "Transferhaak — het besluitmoment binnen tien werkdagen",
      "intro": "Een voorstel dat geen vergadering haalt, is een oefening gebleven. Plan vóór je het voorstel afrondt het echte moment: agendering op het teamoverleg, het MT of de examencommissie binnen tien werkdagen. En plan meteen het moment daarná — want ook een uitgesteld of afgewezen besluit vraagt een vervolgzet, en een aangenomen besluit vraagt een eerste uitvoeringsstap binnen twee weken.",
      "workspace": {
        "field": "po4-transferhaak",
        "label": "Mijn besluitmoment + vervolgzet",
        "shortLabel": "Besluitmoment",
        "hint": "Vergadering + datum · wie agendeert · beslisvraag in één zin · vervolgzet bij ja, bij uitstel en bij nee",
        "placeholder": "Vergadering en datum: ...\nGeagendeerd via: ...\nBeslisvraag in één zin: ...\nBij ja — eerste uitvoeringsstap binnen twee weken: ...\nBij uitstel — wat ik vraag (datum nieuw moment, wat er nog nodig is): ...\nBij nee — wat ik wil leren en wat het kleinst mogelijke alternatief is: ...",
        "rows": 8
      }
    },
    "reflection": [
      "Welke bouwsteen uit les 4.1-4.5 bleek bij het samenstellen het zwakst — en heb je hem gerepareerd, weggelaten of eerlijk als zwakke plek benoemd in het voorstel? Wat zegt die keuze over jou als beleidsmaker?",
      "Wat veranderde er door de review van de beslisser dat de criticus niet zag — en omgekeerd? Wat leert je dat over wie je voortaan wanneer in een beleidsproces betrekt?",
      "Stel: over een jaar evalueer je dit beleid. Aan welke twee signalen zie je dan dat het geleefd wordt — en aan welke twee dat het een papieren werkelijkheid is geworden? Wie spreekt jou erop aan als dat laatste gebeurt?"
    ],
    "checklist": [
      "Pad (A, B of C) gekozen en gemotiveerd in max 50 woorden",
      "Startfoto samengesteld uit de eigen artefacten van 4.1 en 4.2",
      "Kernvoorstel geschreven (team-A4 / beleidsnotitie / toetsvoorstel) met de 4.5-verankeringen erin",
      "Kosten eerlijk in beeld: tijd, geld, werkdruk én de kosten van niets doen",
      "Beslisdocument met scherpe beslisvraag, uitvoeringsroute en zelfbenoemde zwakke plekken",
      "Peer review door criticus én beslisser ontvangen en zichtbaar verwerkt",
      "Voorstel geagendeerd op een echte vergadering binnen tien werkdagen",
      "Vervolgzet gepland voor ja, uitstel én nee",
      "Reflectie van 250 woorden geschreven ná het besluitmoment",
      "AVG-check: voorstel en bijlagen bevatten geen herleidbare leerling-, student- of personeelsgegevens"
    ],
    "verderLezen": [
      {
        "titel": "Aan de slag met AI-beleid op school",
        "bron": "Kennisnet",
        "jaar": 2025,
        "link": "https://www.kennisnet.nl",
        "waarom": "Leg je eindvoorstel ernaast als laatste check: dekt jouw stuk de stappen die de handreiking aan schoolbesturen meegeeft?"
      },
      {
        "titel": "Handreikingen toetsing en examinering in het tijdperk van AI",
        "bron": "Npuls",
        "jaar": 2024,
        "link": "https://www.npuls.nl",
        "waarom": "Voor pad C het referentiedocument; voor pad A en B de borging dat je toetshoofdstuk niet strijdig is met wat de examencommissie straks vaststelt."
      },
      {
        "titel": "Verordening (EU) 2024/1689 — de AI-verordening",
        "bron": "EUR-Lex",
        "jaar": 2024,
        "link": "https://eur-lex.europa.eu",
        "waarom": "De compliance-claims in je voorstel (data, categorieën, plichten) moeten naar de brontekst kunnen wijzen — zeker als een bestuurder doorvraagt."
      },
      {
        "titel": "AVG-verantwoordingsplicht voor organisaties",
        "bron": "Autoriteit Persoonsgegevens",
        "jaar": 2025,
        "link": "https://www.autoriteitpersoonsgegevens.nl",
        "waarom": "Je beleidsvoorstel raakt de verantwoordingsplicht: register, grondslagen en menselijke weging bij besluiten — de AVG-bodem onder je AI-afspraken."
      }
    ]
  },
};

/* ─── Module 05 · AI voor je eigen groei en je team ─────────────────────────────────────────── */
const module5Details = {
"ai-leerpartner": {
    "format": "diepteles",
    "summary": "Je hebt AI ingezet voor je lessen, je toetsen, je organisatie. Deze les draait de camera om: AI als partner voor jouw eigen professionele ontwikkeling. Je voert een gestructureerd reflectiegesprek over een echte les, laat AI je lesopzet analyseren op didactische patronen, en bouwt een terugkerende routine waarmee je je eigen onderwijs blijft onderzoeken — zonder dat het een extra taak wordt die na drie weken sneuvelt.",
    "duration": {
      "total": "55 minuten",
      "blocks": [
        {
          "label": "Aanleiding",
          "min": 6
        },
        {
          "label": "Conceptueel kader",
          "min": 10
        },
        {
          "label": "Reflectiegesprek over een echte les",
          "min": 12
        },
        {
          "label": "Lesanalyse op didactische patronen",
          "min": 12
        },
        {
          "label": "Feedback op je didactiek organiseren",
          "min": 9
        },
        {
          "label": "Routine ontwerpen + borgen",
          "min": 6
        }
      ]
    },
    "opening": {
      "eyebrow": "Aanleiding",
      "aanleiding": "Dinsdagavond, kwart over negen. De les van vanmiddag zit nog in je hoofd: het ging niet slecht, maar ook niet goed. Het middendeel zakte in, drie leerlingen haakten zichtbaar af, en je instructie duurde langer dan gepland. Normaal gesproken denk je hier vijf minuten over na, neem je je voor het anders te doen, en is het over twee weken vergeten. Niet omdat je niet wilt leren — maar omdat gestructureerde reflectie tijd, een gesprekspartner en een vaste vorm vraagt, en die drie zijn er zelden tegelijk.\n\nIntervisie bestaat, maar staat vier keer per jaar in de agenda. Lesbezoek bestaat, maar voelt als beoordeling. Een coach bestaat, maar niet voor elke docent. Het gat tussen 'ik wil over mijn onderwijs nadenken' en 'er is iemand die met mij meedenkt' is structureel — en precies dat gat kan AI deels vullen. Niet als vervanging van de collega of de coach, wél als altijd-beschikbare sparringpartner die goede vragen stelt, patronen spiegelt en je dwingt om aannames uit te schrijven.\n\nDeze les is de omslag van Module 5: tot nu toe gebruikte je AI vóór je leerlingen. Vanaf nu gebruik je het ook voor jezelf. Je leert drie toepassingen die elk een ander stuk van je professionele ontwikkeling raken: het reflectiegesprek (na de les), de lesanalyse (vóór de les) en didactische feedback (op je ontwerpen). En je sluit af met de vraag die alles bepaalt: hoe maak je hier een routine van die het einde van het schooljaar haalt?",
      "waaromNu": "UNESCO's AI Competency Framework for Teachers (2024) benoemt 'AI for professional learning' als aparte dimensie — en juist die dimensie ontbreekt in vrijwel al het bestaande professionaliseringsaanbod. Docenten leren AI gebruiken voor hun lessen, zelden voor hun eigen groei. Wie deze dimensie beheerst, heeft een duurzaam voordeel: de tools veranderen, het vermogen om jezelf te blijven ontwikkelen niet."
    },
    "conceptueel": {
      "eyebrow": "Conceptueel kader",
      "intro": "Professionele reflectie kent een klassiek probleem: je bent zelf je enige bron. Je herinnert je de les zoals jij hem beleefde, je beoordeelt je keuzes met dezelfde aannames waarmee je ze maakte, en zonder tegenstem bevestigt reflectie vooral wat je al dacht. Korthagen noemde dit decennia geleden al: reflectie zonder confrontatie met een ander perspectief blijft cirkelen. Daarom werken intervisie en collegiale consultatie — een ander stelt de vraag die jij jezelf niet stelt.\n\nAI kan die confrontatiefunctie deels overnemen, mits je het goed inricht. Het verschil tussen 'AI als applausmachine' en 'AI als kritische vriend' zit volledig in jouw instructie. Vraag je 'wat vind je van mijn lesopzet', dan krijg je complimenten met wat suggesties — beleefd, breed, bruikbaarheid laag. Geef je AI een expliciete rol ('je bent een kritische didactiek-coach, stel me één vraag tegelijk, geef geen advies tot ik erom vraag'), een concreet artefact (je lesopzet, je beschrijving van wat er gebeurde) en een normenkader (jouw eigen leerdoel, een didactisch model), dan ontstaat iets dat op een goed coachgesprek begint te lijken.\n\nDrie toepassingen verdienen onderscheid omdat ze verschillend werken. Het reflectiegesprek is dialogisch: AI stelt vragen, jij antwoordt, en het denkwerk gebeurt bij jou — AI is hier vroedvrouw, geen orakel. De lesanalyse is analytisch: AI scant een lesopzet of lessenserie op patronen die jij niet meer ziet omdat je er te dichtbij staat — instructieduur, vraagtypen, wie er aan het werk is. Didactische feedback is normatief: AI legt je ontwerp naast een expliciet kader en benoemt waar het schuurt. Voor alle drie geldt dezelfde wet als in elke eerdere module: AI levert ruw materiaal, jij beoordeelt. Het verschil is dat het materiaal nu over jou gaat — en dat vraagt een extra waakzaamheid, want feedback op jezelf accepteer je sneller als hij vleit en verwerp je sneller als hij raakt.\n\nEén grens hoort hier expliciet op tafel: je reflecteert over je eigen handelen, niet over herleidbare leerlingen of collega's. 'Drie leerlingen haakten af' is prima; namen, diagnoses of herkenbare situatiebeschrijvingen horen niet in een AI-gesprek. Dezelfde AVG-discipline die je in eerdere modules opbouwde, geldt onverkort voor je eigen ontwikkelwerk.",
      "mentalModel": {
        "naam": "AI als kritische vriend op afroep",
        "beschrijving": "Een kritische vriend (Costa & Kallick) is iemand die je vertrouwt én die ongemakkelijke vragen stelt. AI kan die rol op afroep spelen — om half tien 's avonds, tien minuten lang, over precies die ene les. Maar de vriend is zo kritisch als jij hem instrueert: zonder expliciete rol, artefact en normenkader krijg je een applausmachine. De kwaliteit van je professionele gesprek met AI is een ontwerpkeuze, geen toolfeature."
      },
      "kernbegrippen": [
        {
          "term": "Reflectiegesprek",
          "uitleg": "Dialogische vorm: AI stelt één vraag tegelijk over een les die je beschrijft. Het denkwerk gebeurt bij jou — AI mag pas adviseren als jij erom vraagt."
        },
        {
          "term": "Lesanalyse",
          "uitleg": "Analytische vorm: AI scant je lesopzet of lessenserie op patronen — verhouding instructie/verwerking, vraagtypen, activering. Patronen zijn hypotheses, geen oordelen."
        },
        {
          "term": "Normenkader",
          "uitleg": "Het expliciete kader waaraan AI je werk toetst: jouw leerdoel, een didactisch model, jullie schoolvisie. Zonder kader krijg je generieke feedback; met kader krijg je toetsbare feedback."
        },
        {
          "term": "Applausmachine-effect",
          "uitleg": "De neiging van AI om te complimenteren en mee te bewegen. Bestrijd je met rolinstructie ('wees kritisch, stel vragen, geen advies tot ik vraag') en met de opdracht om expliciet tegenargumenten te geven."
        }
      ]
    },
    "learningGoals": [
      "Je voert een gestructureerd reflectiegesprek met AI over één echte les, waarin AI vragen stelt en jij het denkwerk doet.",
      "Je laat AI een eigen lesopzet analyseren op minstens drie didactische patronen en beoordeelt per patroon of het klopt met je praktijk.",
      "Je organiseert AI-feedback op één didactisch ontwerp langs een expliciet normenkader dat je zelf formuleert.",
      "Je ontwerpt een reflectieroutine van maximaal vijftien minuten per week die realistisch past in jouw werkritme."
    ],
    "scenario": {
      "title": "Werksituatie",
      "context": "Je bent een ervaren docent en hebt Module 1 of 2 afgerond. AI inzetten voor lesmateriaal is routine geworden. Maar je eigen ontwikkeling loopt nog op het oude ritme: een studiedag, een enkele intervisie, en verder vooral zelf doorploeteren. Je wilt een vorm vinden waarin je wekelijks kort en scherp over je eigen onderwijs nadenkt — en je vermoedt dat AI daarbij kan helpen, mits je het serieuzer aanpakt dan 'even vragen wat AI ervan vindt.'",
      "role": "Docent vo/mbo/hbo · ervaren AI-gebruiker · kartrekker in wording",
      "tools": "AI-tool naar keuze (school-account) · één recente lesopzet · tien minuten herinnering aan je laatste les"
    },
    "steps": [
      {
        "title": "Kies één echte les en beschrijf hem in vijf regels",
        "body": "Neem een les van de afgelopen twee weken die niet vlekkeloos liep — daar zit het leermateriaal. Beschrijf in vijf regels: wat was het doel, wat deed jij, wat deden de leerlingen of studenten, waar haperde het, en wat was jouw eerste verklaring. Geen namen, geen herleidbare details. Deze beschrijving is het artefact voor je reflectiegesprek.",
        "time": "6 min",
        "voorbeeld": "Doel: leerlingen passen de stelling van Pythagoras toe in contextopgaven. Ik deed: 20 minuten instructie met drie voorbeelden, daarna zelfstandig werken. Leerlingen deden: eerste tien minuten geconcentreerd, daarna onrust achterin. Haperde: de overgang naar zelfstandig werken — een deel kon niet starten. Mijn eerste verklaring: de contextopgaven waren een te grote stap na mijn abstracte voorbeelden.",
        "workspace": {
          "field": "leerpartner-lesbeschrijving",
          "label": "Mijn les in vijf regels",
          "shortLabel": "Lesbeschrijving",
          "hint": "Doel · wat deed jij · wat deden zij · waar haperde het · jouw eerste verklaring",
          "placeholder": "Doel: ...\nIk deed: ...\nZij deden: ...\nHaperde: ...\nMijn eerste verklaring: ...",
          "rows": 6
        }
      },
      {
        "title": "Voer het reflectiegesprek — AI stelt vragen, jij denkt",
        "body": "Instrueer AI expliciet: 'Je bent mijn kritische reflectiecoach. Ik beschrijf een les. Stel me één vraag tegelijk om mijn analyse te verdiepen. Geef geen advies tot ik erom vraag. Wees niet complimenteus.' Plak je vijf regels en voer het gesprek — minimaal vijf vragen diep. Let op het moment waarop een vraag je verrast of irriteert: daar zit meestal de aanname die je nog niet had gezien.",
        "time": "12 min",
        "voorbeeld": "AI vroeg na drie rondes: 'Je zegt dat de stap te groot was — maar je beschrijft dat de onrust achterin begon, niet verspreid door de klas. Wat weet je over die specifieke groep bij de overgang naar zelfstandig werken?' Dat irriteerde me eerst, en toen viel het kwartje: het was geen niveauprobleem maar een patroon van die vier leerlingen bij élke werkvormwissel. Mijn eerste verklaring klopte niet.",
        "workspace": {
          "field": "leerpartner-reflectiegesprek",
          "label": "Opbrengst van het reflectiegesprek",
          "shortLabel": "Reflectiegesprek",
          "hint": "Welke vraag raakte · welke aanname kantelde · wat is je herziene verklaring",
          "placeholder": "De vraag die me raakte: ...\nMijn aanname die kantelde: ...\nHerziene verklaring: ...\nWat ik volgende les anders doe: ...",
          "rows": 6
        }
      },
      {
        "title": "Lesanalyse — laat AI patronen benoemen in je lesopzet",
        "body": "Nu de analytische toepassing. Plak een complete lesopzet (of een lessenserie-overzicht) en vraag AI om patronen te benoemen: verhouding docenttijd/leerlingtijd, soorten vragen die je stelt, waar activering zit en waar consumptie, wat er gebeurt met leerlingen die klaar zijn. Vraag expliciet om drie patronen mét bewijs uit de tekst. Beoordeel daarna per patroon: herken ik dit, klopt het bewijs, en is het erg?",
        "time": "12 min",
        "voorbeeld": "AI benoemde: (1) In drie van de vier lessen begint de verwerking pas na minuut 25 — je instructie claimt structureel de helft. (2) Vrijwel al je verwerkingsvragen zijn reproductief; de analyse-vragen stel jij klassikaal en beantwoord je vaak zelf. (3) Er staat nergens wat snelle leerlingen doen. Patroon 1 en 3 herkende ik direct; patroon 2 betwijfelde ik — tot ik mijn eigen lesopzet herlas en het bewijs zag staan.",
        "workspace": {
          "field": "leerpartner-lesanalyse",
          "label": "Drie patronen + mijn beoordeling",
          "shortLabel": "Lesanalyse",
          "hint": "Per patroon: herken ik dit · klopt het bewijs · is het erg · actie ja/nee",
          "placeholder": "Patroon 1: ... — herken: ... — actie: ...\nPatroon 2: ... — herken: ... — actie: ...\nPatroon 3: ... — herken: ... — actie: ...",
          "rows": 7
        }
      },
      {
        "title": "Didactische feedback langs jouw eigen normenkader",
        "body": "De derde toepassing vraagt het meeste van jou: je formuleert eerst zelf het kader. Kies drie criteria waaraan jouw onderwijs wat jou betreft moet voldoen — uit een didactisch model, jullie schoolvisie of je eigen overtuiging. Leg dan één ontwerp (lesopzet, opdracht, toets) naast dat kader en vraag AI: 'Toets dit ontwerp aan deze drie criteria. Benoem per criterium waar het schuurt, met citaat. Geen complimenten.'",
        "time": "9 min",
        "workspace": {
          "field": "leerpartner-normenkader",
          "label": "Mijn normenkader + de scherpste schuring",
          "shortLabel": "Normenkader",
          "hint": "Drie criteria · de schuring die het meest raakt · wat je ermee doet",
          "placeholder": "Criterium 1: ...\nCriterium 2: ...\nCriterium 3: ...\nScherpste schuring: ...\nWat ik aanpas: ...",
          "rows": 7
        }
      },
      {
        "title": "Ontwerp je reflectieroutine — vijftien minuten, vast moment",
        "body": "Reflectie die niet in je ritme zit, bestaat niet. Ontwerp een wekelijkse routine van maximaal vijftien minuten: welk vast moment, welke van de drie toepassingen (rouleren mag), en welk bewaarpunt — waar landen je inzichten zodat je over drie maanden je eigen ontwikkeling terugziet? Plan het eerste moment nu in je agenda. Een routine zonder eerste afspraak is een voornemen.",
        "time": "6 min",
        "voorbeeld": "Vrijdag 8:15-8:30, voor de eerste les. Week 1 en 3: reflectiegesprek over de opvallendste les. Week 2: lesanalyse van de komende week. Week 4: normenkader-check op één ontwerp. Bewaarpunt: één notitie per week in een doorlopend document 'Mijn lespraktijk 2026-2027' — alleen het kerninzicht en de actie, drie regels max.",
        "workspace": {
          "field": "leerpartner-routine",
          "label": "Mijn reflectieroutine",
          "shortLabel": "Routine",
          "hint": "Vast moment · welke toepassing wanneer · bewaarpunt · eerste afspraak staat in agenda",
          "placeholder": "Vast moment: ...\nRitme (welke toepassing in welke week): ...\nBewaarpunt: ...\nEerste afspraak in agenda: ja/nee, datum ...",
          "rows": 5
        }
      }
    ],
    "workedExamples": [
      {
        "title": "Rolinstructie voor een kritisch reflectiegesprek",
        "prompt": "Je bent mijn kritische reflectiecoach, opgeleid in de reflectiecyclus van Korthagen. Ik beschrijf zo een les die niet liep zoals ik wilde. Stel me één vraag tegelijk. Begin bij wat er feitelijk gebeurde, ga daarna pas naar mijn aandeel en mijn aannames. Geef geen advies en geen complimenten tot ik er expliciet om vraag. Als ik in algemeenheden praat, vraag dan door naar het concrete moment.",
        "voorbeeldOutput": "Goed, ik ben er klaar voor. Beschrijf de les. Ik begin daarna met vragen over wat er feitelijk gebeurde — nog niet over wat je ervan vindt.\n\n[Na de lesbeschrijving:] Eerste vraag: je schrijft 'de overgang naar zelfstandig werken haperde'. Wat zag je precies gebeuren in de eerste twee minuten na je instructie — wie deed wat?",
        "commentaar": "De kracht zit in drie elementen: de fasering (feiten vóór duiding — klassiek Korthagen), het verbod op advies en complimenten, en de doorvraag-instructie bij algemeenheden. Zonder die laatste glijdt het gesprek naar abstracties ('de klas was onrustig') waar niets te leren valt. Let op: AI houdt de rol gemiddeld vier tot zes beurten vol en begint dan toch te adviseren — herinner het dan kort aan de instructie.",
        "tryItYourself": {
          "field": "leerpartner-we-rolinstructie",
          "label": "Schrijf jouw rolinstructie",
          "shortLabel": "Eigen rolinstructie",
          "hint": "Rol · fasering · verbod op advies/complimenten · doorvraag-instructie",
          "example": "Je bent mijn ... Stel me één vraag tegelijk. Begin bij ... Geef geen ... tot ik ..."
        }
      },
      {
        "title": "Lesanalyse-prompt met bewijsplicht",
        "prompt": "Hieronder staat mijn lesopzet voor vier lessen [vak, niveau]. Analyseer als didactisch onderzoeker, niet als adviseur. Benoem drie patronen in mijn ontwerp — bijvoorbeeld in de verhouding instructie/verwerking, de cognitieve niveaus van mijn vragen, of wat er gebeurt met verschillen tussen leerlingen. Eis: per patroon een citaat of verwijzing uit mijn eigen tekst als bewijs. Geen verbetervoorstellen.",
        "voorbeeldOutput": "Patroon 1 — Instructie claimt de eerste helft. In les 1, 2 en 4 begint de eerste leerlingactiviteit pas na 22-28 minuten ('na de uitleg van de drie voorbeelden gaan leerlingen zelfstandig aan opgave 4-9'). Alleen les 3 opent met een activiteit.\n\nPatroon 2 — Vragen zijn overwegend reproductief in de verwerking. De opgaven vragen toepassen van het voorgedane recept; de enige analysevraag ('waarom werkt dit niet bij een stompe hoek?') staat in jouw klassikale afsluiting, niet bij de leerlingen.\n\nPatroon 3 — Differentiatie is onbenoemd. In geen van de vier lessen staat wat er gebeurt met leerlingen die opgave 9 na tien minuten af hebben, of die bij opgave 4 vastlopen.",
        "commentaar": "De bewijsplicht is het werkzame bestanddeel: zonder citaat-eis produceert AI plausibele patronen die ook over andermans lesopzet hadden kunnen gaan. Het verbod op verbetervoorstellen houdt de regie bij jou — eerst beslis jíj welk patroon je erg vindt, dan pas komt de verbetervraag. Check elk citaat: AI parafraseert weleens iets dat er net niet staat.",
        "tryItYourself": {
          "field": "leerpartner-we-analyse",
          "label": "Schrijf jouw analyse-prompt",
          "shortLabel": "Eigen analyse-prompt",
          "hint": "Onderzoeker-rol · drie patronen · bewijsplicht met citaat · geen verbetervoorstellen",
          "example": "Analyseer mijn lesopzet als ... Benoem drie patronen in ... Eis: per patroon ... Geen ..."
        }
      },
      {
        "title": "Normenkader-feedback op een toetsontwerp",
        "prompt": "Toets mijn projectopdracht [tekst] aan drie criteria die voor mij zwaar wegen: (1) het denkwerk zit bij de student, niet bij het materiaal; (2) een student kan op elk moment zien waar hij staat ten opzichte van het einddoel; (3) de opdracht is uitvoerbaar voor de student die thuis geen hulp heeft. Benoem per criterium waar mijn ontwerp schuurt, met citaat. Wees streng. Sluit af met de vraag die ik mezelf volgens jou nog niet heb gesteld.",
        "voorbeeldOutput": "Criterium 1 — schuurt in stap 2: 'de docent levert het analysekader aan' — daarmee doe jij het denkwerk dat je in je doel bij de student legt. Criterium 2 — schuurt het hardst: er is één beoordelingsmoment aan het eind en geen tussentijdse ijkpunten; een student weet zes weken lang niet waar hij staat. Criterium 3 — grotendeels op orde; alleen de eis 'interview een professional uit je netwerk' veronderstelt een netwerk dat niet elke student heeft.\n\nDe vraag die je jezelf nog niet hebt gesteld: waarom staat 'zelfstandigheid' in je doel, terwijl elke stap in je planning is voorgestructureerd?",
        "commentaar": "Het kader komt van de docent — dat is de kern. Dezelfde opdracht langs andere criteria geeft andere feedback; AI toetst, jij normeert. De slotvraag ('die ik mezelf nog niet heb gesteld') levert verrassend vaak het beste materiaal van het hele gesprek en kost één zin in je prompt. Criterium 3 is hier een mooi voorbeeld van een eigen norm die in geen enkel standaard didactisch model staat — juist die maken het kader van jou.",
        "tryItYourself": {
          "field": "leerpartner-we-kader",
          "label": "Toets één eigen ontwerp aan jouw kader",
          "shortLabel": "Eigen kader-check",
          "hint": "Drie eigen criteria · citaat-eis · slotvraag 'die ik mezelf nog niet stelde'",
          "example": "Toets mijn ... aan: (1) ... (2) ... (3) ... Benoem per criterium ... Sluit af met ..."
        }
      }
    ],
    "vakvariaties": [
      {
        "vak": "Talen · vo/mbo",
        "body": "Laat AI je feedbackgedrag analyseren: plak tien geanonimiseerde feedbackzinnen die je onder schrijfwerk zette en vraag naar patronen. Veel taaldocenten ontdekken dat ze vooral fouten markeren en zelden de volgende stap benoemen — een patroon dat je zelf niet meer ziet."
      },
      {
        "vak": "Exacte vakken · vo",
        "body": "Sterk: AI je uitlegvolgorde laten bevragen. Beschrijf hoe je een lastig concept (kracht, mol, afgeleide) opbouwt en laat AI de plekken benoemen waar je een denkstap impliciet laat. De vraag 'welke voorkennis veronderstel je hier zonder het te checken' levert bijna altijd iets op."
      },
      {
        "vak": "Praktijkvakken · mbo",
        "body": "Reflecteer op je begeleidingsgedrag tijdens praktijkuren: wanneer grijp je in, wanneer laat je een student worstelen? Beschrijf drie ingrijpmomenten van afgelopen week en laat AI doorvragen op je criterium. Veel praktijkdocenten blijken op tempo in te grijpen, niet op leerwaarde."
      },
      {
        "vak": "Hbo · docent-onderzoekers",
        "body": "Gebruik het normenkader-gesprek met je eigen onderzoeksliteratuur als kader: 'toets mijn werkvorm aan wat ik zelf in mijn lectoraatswerk over formatief handelen beweer.' De confrontatie tussen je espoused theory en je theory-in-use is precies wat Argyris bedoelde — en AI maakt haar goedkoop organiseerbaar."
      },
      {
        "vak": "Mentoraat en coaching · alle sectoren",
        "body": "Extra AVG-waakzaamheid: mentorsituaties zijn snel herleidbaar. Reflecteer op je eigen gespreksgedrag in geabstraheerde vorm ('een leerling die stilvalt als ik naar thuis vraag') en nooit op de casus zelf. De vraag 'welk gespreksdoel had ík eigenlijk' is hier de krachtigste."
      }
    ],
    "valkuilen": [
      {
        "titel": "De applausmachine accepteren",
        "watGebeurtEr": "Je vraagt 'wat vind je van mijn les' zonder rolinstructie. AI noemt je opzet 'goed doordacht' met drie milde suggesties. Je voelt je bevestigd, er verandert niets, en na vier weken concludeer je dat AI-reflectie niets oplevert.",
        "fix": "Altijd: rol + artefact + normenkader + verbod op complimenten. En de controlevraag achteraf: heeft dit gesprek me ergens geraakt of verrast? Zo nee, dan was het geen reflectie maar bevestiging."
      },
      {
        "titel": "AI het oordeel over jou laten vellen",
        "watGebeurtEr": "Je vraagt 'wat doe ik fout' en neemt het antwoord als diagnose. AI kent je klas niet, je geschiedenis niet, je context niet — het patroon dat het benoemt kan kloppen, maar het oordeel is geleend.",
        "fix": "AI levert hypotheses en vragen, jij velt oordelen. Concreet: herformuleer elke AI-conclusie als vraag ('klopt het dat...?') en toets hem aan je eigen waarneming vóór je er iets mee doet."
      },
      {
        "titel": "Reflecteren met herleidbare leerling-informatie",
        "watGebeurtEr": "In de flow van het gesprek typ je 'Daan, die met die diagnose' — en er staan persoonsgegevens van een minderjarige in een AI-systeem. Eén keer is al één keer te veel.",
        "fix": "Vaste regel: jouw handelen is het onderwerp, nooit de herleidbare ander. Abstraheer vooraf ('een leerling die...'), gebruik het school-account, en herlees je input vóór verzenden — dezelfde discipline als bij lesmateriaal, met hogere inzet."
      },
      {
        "titel": "De routine te groot ontwerpen",
        "watGebeurtEr": "Enthousiast plan je drie reflectiemomenten per week van een half uur. Week één lukt, week twee half, week drie sneuvelt het bij de eerste drukte — en met de routine sneuvelt het hele idee.",
        "fix": "Ontwerp op je slechtste week, niet je beste: één moment, maximaal vijftien minuten, vast in de agenda, gekoppeld aan iets dat al bestaat (de vrijdagkoffie, de weekafsluiting). Uitbreiden kan altijd nog."
      },
      {
        "titel": "Inzichten verzamelen zonder bewaarpunt",
        "watGebeurtEr": "Elk gesprek levert iets op, maar het staat verspreid over chatgeschiedenissen. Na drie maanden kun je je eigen ontwikkeling niet terugzien — en juist dat terugzien is wat reflectie motiverend houdt.",
        "fix": "Eén doorlopend document, drie regels per week: kerninzicht + actie + wat ervan kwam. Dit document is later goud waard — bij je gesprekkencyclus, en als bewijsmateriaal als je collega's gaat trainen (les 5.3)."
      }
    ],
    "geoefendSpoor": {
      "eyebrow": "Voor de geoefende docent",
      "titel": "Bouw een persoonlijk ontwikkeldossier met AI als analysepartner",
      "beschrijving": "Loopt je routine al een paar weken? Til hem dan naar dossierniveau. Verzamel je wekelijkse drieregel-notities per kwartaal en laat AI er een meta-analyse op doen: welke thema's keren terug, welke voornemens haalden de praktijk en welke niet, waar zit je blinde vlek volgens het patroon van je eigen notities. Bespreek de uitkomst in je gesprekkencyclus of met een collega — daarmee verbind je je private routine aan het formele ontwikkelgesprek.",
      "opdracht": "Lever na één kwartaal een meta-analyse van je eigen reflectienotities op, plus één ontwikkeldoel voor het volgende kwartaal dat rechtstreeks uit een terugkerend patroon komt. Neem het mee naar je eerstvolgende ontwikkelgesprek."
    },
    "eindcriteria": [
      {
        "criterium": "Reflectiegesprek",
        "onder": "Gesprek gevoerd zonder rolinstructie; AI adviseerde, jij las.",
        "op": "Gesprek met rolinstructie gevoerd, minimaal vijf vragen diep, één gekantelde aanname benoemd.",
        "boven": "+ Herziene verklaring getoetst in de eerstvolgende les en de uitkomst genoteerd."
      },
      {
        "criterium": "Lesanalyse",
        "onder": "Patronen overgenomen zonder bewijscheck.",
        "op": "Drie patronen met bewijs ontvangen en per patroon beoordeeld: herken ik dit, klopt het, actie ja/nee.",
        "boven": "+ Eén patroon gecheckt tegen de werkelijkheid (bijv. lesopname of collega-observatie)."
      },
      {
        "criterium": "Normenkader",
        "onder": "Feedback gevraagd zonder eigen criteria.",
        "op": "Drie eigen criteria geformuleerd en één ontwerp erlangs laten toetsen, met citaat-eis.",
        "boven": "+ Normenkader gedeeld met een collega en aangescherpt op basis van dat gesprek."
      },
      {
        "criterium": "Routine",
        "onder": "Voornemen zonder moment of bewaarpunt.",
        "op": "Routine van max vijftien minuten met vast moment, rouleerschema en bewaarpunt; eerste afspraak staat in de agenda.",
        "boven": "+ Routine drie weken volgehouden en op basis daarvan één keer bijgesteld."
      }
    ],
    "reflection": [
      "Welke vraag uit het reflectiegesprek irriteerde je het meest — en wat zegt die irritatie over de aanname die je het liefst intact houdt?",
      "Je gebruikt AI nu voor je eigen ontwikkeling. Wat verandert dat aan hoe je tegen het AI-gebruik van je leerlingen of studenten aankijkt?",
      "Reflectie met AI is privé en veilig — maar groei vraagt op enig moment ook een echte ander. Welk inzicht uit deze les ga je met welke collega delen, en wanneer?"
    ],
    "checklist": [
      "Eén echte les in vijf regels beschreven, zonder herleidbare gegevens",
      "Reflectiegesprek gevoerd met rolinstructie — minimaal vijf vragen diep",
      "Eén gekantelde aanname expliciet genoteerd",
      "Lesanalyse uitgevoerd: drie patronen met bewijs, per patroon beoordeeld",
      "Eigen normenkader van drie criteria geformuleerd en één ontwerp getoetst",
      "Reflectieroutine ontworpen: max vijftien minuten, vast moment, bewaarpunt",
      "Eerste routinemoment in de agenda gezet",
      "Doorlopend bewaardocument aangemaakt voor wekelijkse drieregel-notities"
    ],
    "verderLezen": [
      {
        "titel": "AI Competency Framework for Teachers — dimensie 'AI for professional learning'",
        "bron": "UNESCO",
        "jaar": 2024,
        "link": "https://www.unesco.org",
        "waarom": "Het internationale kader waarin deze les past: AI niet alleen vóór je onderwijs, maar voor je eigen professionele groei — met Create als hoogste niveau."
      },
      {
        "titel": "Kennisbank AI in het onderwijs — professionalisering",
        "bron": "Kennisnet",
        "jaar": 2025,
        "link": "https://www.kennisnet.nl",
        "waarom": "Nederlandse handvatten voor verantwoord AI-gebruik door docenten, inclusief de AVG-kaders die ook voor je eigen reflectiewerk gelden."
      },
      {
        "titel": "AI-GO! Raamwerk voor AI-geletterdheid",
        "bron": "Npuls",
        "jaar": 2025,
        "link": "https://www.npuls.nl",
        "waarom": "De dimensie 'attitudes' uit AI-GO! is precies wat deze les traint: kritisch en onderzoekend blijven tegenover AI-output over jezelf."
      },
      {
        "titel": "Professionalisering en werkdruk in het onderwijs",
        "bron": "Voion",
        "jaar": 2025,
        "link": "https://www.voion.nl",
        "waarom": "Realistische cijfers over professionaliseringstijd van docenten — relevant bij het ontwerpen van een routine die je slechtste week overleeft."
      }
    ]
  },
  "teamleren-met-ai": {
    "format": "diepteles",
    "summary": "Eén docent die AI beheerst is een eiland; een team dat samen onderzoekt is een beweging. In deze les ontwerp je een PLG-cyclus (professionele leergemeenschap) waarin jouw team AI-praktijken systematisch uitprobeert, bespreekt en deelt. Je kiest een onderzoeksvraag die het team echt heeft, ontwerpt vier bijeenkomsten van elk een uur, en bouwt het deelmechanisme waarmee opbrengsten het team-overstijgende niveau halen — zodat het leren niet stopt als de cyclus stopt.",
    "duration": {
      "total": "60 minuten",
      "blocks": [
        {
          "label": "Aanleiding",
          "min": 6
        },
        {
          "label": "Conceptueel kader",
          "min": 12
        },
        {
          "label": "Onderzoeksvraag van het team scherpstellen",
          "min": 10
        },
        {
          "label": "PLG-cyclus van vier bijeenkomsten ontwerpen",
          "min": 16
        },
        {
          "label": "Deelmechanisme + rolverdeling",
          "min": 10
        },
        {
          "label": "Startvoorwaarden checken",
          "min": 6
        }
      ]
    },
    "opening": {
      "eyebrow": "Aanleiding",
      "aanleiding": "In de teamkamer hangt een vertrouwd patroon. Twee collega's experimenteren volop met AI en vertellen er enthousiast over. Vijf collega's luisteren welwillend en doen er niets mee. Drie collega's vinden er het hunne van en zwijgen. En jij — kartrekker, vaak ongevraagd — ziet dat het enthousiasme van de twee niet vanzelf overslaat. Sterker: hoe harder zij lopen, hoe groter de afstand voelt voor de rest.\n\nDe reflex is dan: een studiemiddag organiseren. Iemand presenteert, iedereen knikt, en zes weken later is er niets veranderd. Dat ligt niet aan de presentatie — het ligt aan het model. Kennis overdragen verandert geen lespraktijk; samen onderzoeken doet dat wel. Een professionele leergemeenschap draait het om: niet één expert die zendt, maar een team dat een gedeelde vraag heeft, in de eigen lessen kleine experimenten doet, en de uitkomsten op tafel legt — ook de mislukte.\n\nVoor AI is dit model uitzonderlijk geschikt, om drie redenen. De technologie verandert zo snel dat geen enkele expert lang expert blijft — onderzoeken is realistischer dan kennen. De praktijkverschillen tussen vakken zijn zo groot dat één recept nooit past — vergelijken levert meer op dan kopiëren. En de weerstand is deels gevoelsmatig — meedoen aan een onderzoekje is een kleinere drempel dan een overtuiging opgeven. In deze les ontwerp je de cyclus die dit organiseert: vier bijeenkomsten, één teamvraag, experimenten in echte lessen, en een deelmechanisme dat de opbrengst vasthoudt.",
      "waaromNu": "Onderzoek naar effectieve docentprofessionalisering (o.a. Darling-Hammond e.a., 2017) is eenduidig: duurzame verandering vraagt samenwerking, actieve werkvormen, koppeling aan eigen praktijk en een langere duur dan één sessie. Precies de elementen die een PLG-cyclus structureert — en die in het meeste AI-professionaliseringsaanbod (webinar, studiedag, e-learning) ontbreken."
    },
    "conceptueel": {
      "eyebrow": "Conceptueel kader",
      "intro": "Een professionele leergemeenschap is geen vergadering met een ander naambordje. Het onderscheid zit in drie kenmerken. Ten eerste: een gedeelde onderzoeksvraag die uit de praktijk van het team komt — niet 'we moeten iets met AI' maar 'krijgen onze leerlingen betere feedback als wij AI inzetten bij het nakijken van schrijfopdrachten?'. Ten tweede: een experimenteercyclus — tussen de bijeenkomsten proberen deelnemers iets uit in hun eigen les, klein en afgebakend. Ten derde: collectieve kennisopbouw — de uitkomsten worden vergeleken, geduid en vastgelegd, zodat het team iets wéét wat het eerst niet wist.\n\nDe valkuil van AI-PLG's is dat ze tool-gedreven worden: elke bijeenkomst showt iemand een nieuwe toepassing, iedereen is onder de indruk, niemand verandert iets. Het tegengif is de onderzoeksvraag als anker. Een goede teamvraag gaat over leerlingen of studenten, niet over tools — de tool is het middel waarmee je de vraag onderzoekt. 'Wat doet ChatGPT?' is geen onderzoeksvraag; 'wordt de feedbackdialoog in mijn klas rijker als leerlingen eerst AI-feedback krijgen en daarna de mijne?' wel.\n\nDe cyclus zelf volgt een vast ritme dat je per bijeenkomst varieert: terugblik op de experimenten (wat deed je, wat zag je), duiding (wat betekent dat voor onze vraag), nieuw experiment ontwerpen (wat probeert ieder de komende weken), en afspraken (wie, wat, wanneer). De verhouding is heilig: minstens de helft van elke bijeenkomst gaat over wat er in echte lessen gebeurde. Zodra de balans kantelt naar presenteren en discussiëren, is het geen PLG meer maar een gespreksgroep.\n\nTot slot de rol van de kartrekker — die van jou dus. Je bent procesontwerper en geen inhoudelijk expert, en dat verschil moet je actief bewaken. De kartrekker die alle antwoorden heeft, maakt het team lui; de kartrekker die het proces bewaakt en de vraag scherp houdt, maakt het team eigenaar. Concreet betekent dit: jij ontwerpt de cyclus, het team kiest de vraag; jij bewaakt het ritme, het team levert de inhoud.",
      "mentalModel": {
        "naam": "De PLG als gezamenlijk laboratorium",
        "beschrijving": "Denk aan je team niet als publiek dat overtuigd moet worden, maar als onderzoeksgroep met negen verschillende laboratoria — negen klassen waarin hetzelfde experiment net anders uitpakt. De waarde zit niet in het beste experiment maar in de vergelijking: waarom werkte het bij wiskunde wel en bij Engels niet? Die vraag kan geen studiedag beantwoorden — alleen een team dat systematisch vergelijkt."
      },
      "kernbegrippen": [
        {
          "term": "Onderzoeksvraag van het team",
          "uitleg": "Eén vraag, over leerlingen/studenten (niet over tools), onderzoekbaar in eigen lessen binnen één cyclus. De vraag is van het team — gekozen, niet opgelegd."
        },
        {
          "term": "Experimenteercyclus",
          "uitleg": "Tussen bijeenkomsten voert ieder teamlid een klein, afgebakend experiment uit in de eigen les. Klein = één les, één werkvorm, één observatiepunt."
        },
        {
          "term": "Collectieve kennisopbouw",
          "uitleg": "Uitkomsten worden vergeleken en vastgelegd in een vorm die het team overleeft: een gezamenlijk document, een prakijkenbank, afspraken. Zonder vastlegging verdampt de opbrengst."
        },
        {
          "term": "Kartrekker als procesontwerper",
          "uitleg": "Jij bewaakt ritme, vraag en veiligheid — niet de inhoud. Het moment waarop een teamlid jou corrigeert op inhoud is geen gezagsverlies maar bewijs dat de PLG werkt."
        }
      ]
    },
    "learningGoals": [
      "Je formuleert met (of namens) je team één onderzoeksvraag over AI die over leerlingen of studenten gaat en binnen één cyclus onderzoekbaar is.",
      "Je ontwerpt een PLG-cyclus van vier bijeenkomsten met per bijeenkomst doel, werkvorm en experiment-opdracht.",
      "Je ontwerpt een deelmechanisme waarmee opbrengsten worden vastgelegd en het team overleven.",
      "Je benoemt de startvoorwaarden (tijd, mandaat, veiligheid) en checkt welke daarvan in jouw context nog geregeld moeten worden."
    ],
    "scenario": {
      "title": "Werksituatie",
      "context": "Je bent de informele of formele kartrekker AI in je team of sectie. De schoolleiding wil 'dat het team meegenomen wordt', maar er ligt geen plan. Jij krijgt de ruimte om iets op te zetten — vier bijeenkomsten dit halfjaar, te plannen in bestaande overlegtijd. Het team telt enthousiastelingen, afwachters en sceptici. Je ontwerpt vandaag de cyclus waarmee dit team van losse meningen naar gedeelde kennis komt.",
      "role": "Kartrekker AI · docent met taakuren of opleider in de school",
      "tools": "Jaaragenda van het team · AI-tool naar keuze als ontwerppartner · dit canvas"
    },
    "steps": [
      {
        "title": "Inventariseer wat er al gebeurt — de stille praktijken",
        "body": "Voordat je een vraag formuleert: breng in kaart wat teamleden al doen met AI, inclusief wat ze niet rondbazuinen. Schrijf op wat je weet of vermoedt per collega: gebruikt veel / experimenteert soms / afwachtend / kritisch. Dit bepaalt je startpunt — een team met drie stille gebruikers heeft een andere eerste bijeenkomst nodig dan een team waar nog niemand iets doet.",
        "time": "8 min",
        "workspace": {
          "field": "teamleren-inventarisatie",
          "label": "Wat gebeurt er al in mijn team",
          "shortLabel": "Inventarisatie",
          "hint": "Per collega of groepje: gebruikt veel · soms · afwachtend · kritisch — plus wat je níet weet",
          "placeholder": "Veel-gebruikers: ...\nSoms: ...\nAfwachtend: ...\nKritisch: ...\nWat ik eigenlijk niet weet: ...",
          "rows": 6
        }
      },
      {
        "title": "Stel de onderzoeksvraag scherp — over leerlingen, niet over tools",
        "body": "Formuleer drie kandidaat-vragen voor je team. Toets elke vraag aan drie criteria: gaat hij over leerlingen/studenten (niet over tools), is hij in eigen lessen onderzoekbaar binnen één cyclus, en raakt hij iets waar het team echt mee zit? Kies je favoriet — maar bedenk: in de eerste bijeenkomst kiest het téam, en jouw drie kandidaten zijn startmateriaal, geen voldongen feit.",
        "time": "10 min",
        "voorbeeld": "Kandidaat 1: 'Leren onze leerlingen meer van AI-feedback vooraf of docent-feedback achteraf bij schrijfopdrachten?' — over leerlingen, onderzoekbaar, raakt de nakijkdruk. Kandidaat 2: 'Welke AI-tool is het best voor ons vak?' — afgekeurd, gaat over tools. Kandidaat 3: 'Wat gebeurt er met de zelfstandigheid van studenten als wij AI-hulp toestaan bij praktijkopdrachten?' — over studenten, onderzoekbaar, raakt een teamzorg. Kandidaat 1 en 3 gaan mee naar het team.",
        "workspace": {
          "field": "teamleren-onderzoeksvraag",
          "label": "Drie kandidaat-vragen + toetsing",
          "shortLabel": "Onderzoeksvraag",
          "hint": "Per vraag: over leerlingen? · onderzoekbaar in één cyclus? · raakt een echte teamzorg?",
          "placeholder": "Vraag 1: ... — toetsing: ...\nVraag 2: ... — toetsing: ...\nVraag 3: ... — toetsing: ...\nMijn favoriet + waarom: ...",
          "rows": 7
        }
      },
      {
        "title": "Ontwerp de cyclus — vier bijeenkomsten van een uur",
        "body": "Ontwerp nu de vier bijeenkomsten. Vast ritme: bijeenkomst 1 = vraag kiezen + eerste mini-experiment ontwerpen; 2 en 3 = terugblik op experimenten (minimaal 30 van de 60 minuten!), duiding, volgend experiment; 4 = oogsten, vastleggen, besluiten over vervolg. Per bijeenkomst: doel, werkvorm en de experiment-opdracht waarmee iedereen de deur uitgaat. Gebruik AI als ontwerppartner voor werkvormen — maar de structuur bepaal jij.",
        "time": "16 min",
        "voorbeeld": "Bijeenkomst 2 (week 4): doel = eerste experimenten vergelijken. Werkvorm: carrousel in drietallen — ieder vertelt 4 minuten langs vast format (wat deed ik, wat zag ik, wat verraste me), drietal kiest één verrassing voor plenair. Plenair: verrassingen op flap, patroon zoeken. Laatste kwartier: experiment 2 ontwerpen — zelfde vraag, één variabele anders. Iedereen vertrekt met één zin: 'In week 5 of 6 probeer ik ... en ik let op ...'",
        "workspace": {
          "field": "teamleren-cyclusontwerp",
          "label": "Mijn cyclus van vier bijeenkomsten",
          "shortLabel": "Cyclusontwerp",
          "hint": "Per bijeenkomst: doel · werkvorm · experiment-opdracht waarmee iedereen vertrekt",
          "placeholder": "B1 (week ...): doel ... · werkvorm ... · experiment ...\nB2 (week ...): ...\nB3 (week ...): ...\nB4 (week ...): ...",
          "rows": 9
        }
      },
      {
        "title": "Bouw het deelmechanisme — opbrengst die het team overleeft",
        "body": "Bepaal hoe opbrengsten worden vastgelegd en gedeeld. Minimaal: een gezamenlijk levend document waarin per experiment drie regels staan (wat, wat zagen we, wat betekent het). Bepaal ook het podium: waar landt de eindopbrengst — teamoverleg, studiedag, nieuwsbrief, de sectie ernaast? Een PLG zonder deelmechanisme produceert mooie gesprekken en niets dat blijft.",
        "time": "6 min",
        "workspace": {
          "field": "teamleren-deelmechanisme",
          "label": "Mijn deelmechanisme",
          "shortLabel": "Deelmechanisme",
          "hint": "Levend document: waar, wie vult, welk format · eindpodium: waar landt de opbrengst",
          "placeholder": "Levend document: ... (format per experiment: ...)\nWie bewaakt het bijhouden: ...\nEindpodium: ...",
          "rows": 5
        }
      },
      {
        "title": "Check de startvoorwaarden — tijd, mandaat, veiligheid",
        "body": "Drie voorwaarden bepalen of je cyclus kans maakt. Tijd: staan de vier momenten in bestaande overlegtijd of komt het 'erbij'? Mandaat: weet de schoolleiding ervan en telt deelname als professionalisering? Veiligheid: kunnen mislukte experimenten verteld worden zonder gezichtsverlies — ook door de sceptici? Benoem per voorwaarde de status en je actie. De voorwaarde die je overslaat, is de reden dat het straks stokt.",
        "time": "6 min",
        "voorbeeld": "Tijd: bijeenkomst 1 en 3 passen in geplande teamoverleggen; 2 en 4 moeten apart — actie: deze week met teamleider regelen vóór ik het team iets beloof. Mandaat: teamleider is positief maar het staat nergens — actie: korte mail laten bevestigen dat dit als professionaliseringsuren telt. Veiligheid: twee collega's zijn fel tegen — actie: hen vooraf persoonlijk uitnodigen als kritische onderzoekers, niet als bekeerlingen.",
        "workspace": {
          "field": "teamleren-startvoorwaarden",
          "label": "Startvoorwaarden: status + actie",
          "shortLabel": "Startvoorwaarden",
          "hint": "Tijd · mandaat · veiligheid — per voorwaarde: geregeld of actie nodig",
          "placeholder": "Tijd: ... — actie: ...\nMandaat: ... — actie: ...\nVeiligheid: ... — actie: ...",
          "rows": 5
        }
      }
    ],
    "workedExamples": [
      {
        "title": "AI als ontwerppartner voor bijeenkomst 1",
        "prompt": "Ik start een PLG van negen docenten (vo, gemengd team: 2 enthousiast over AI, 4 afwachtend, 3 kritisch). Bijeenkomst 1 duurt 60 minuten. Doelen: (1) team kiest uit twee kandidaat-onderzoeksvragen, (2) ieder ontwerpt een mini-experiment voor de eigen les, (3) de kritische collega's voelen zich onderzoeker, niet doelwit. Ontwerp drie alternatieve opbouwen voor deze bijeenkomst en benoem per opbouw het grootste risico.",
        "voorbeeldOutput": "Opbouw A — Start bij de zorg: open met 'wat zou er mis kunnen gaan als we AI verkeerd inzetten?' (10 min, iedereen). Sceptici leveren het startmateriaal en staan daarmee binnen. Daarna vragen kiezen, dan experiment ontwerpen. Risico: blijft hangen in zorgen als je de overgang naar de onderzoeksvraag niet strak timet.\n\nOpbouw B — Start bij de praktijk: drie collega's (vooraf gevraagd, mix van enthousiast én sceptisch) vertellen elk 3 minuten één echte ervaring. Daarna vraagkeuze. Risico: voelt als showcase als de sceptische stem ontbreekt — die vooraf-mix is essentieel.\n\nOpbouw C — Start bij de leerling: ieder neemt één recent stuk leerlingwerk in gedachten en beantwoordt 'wat had deze leerling nodig dat ik niet kon geven?' Verbindt de PLG direct aan de klas. Risico: de stap naar AI kan geforceerd voelen — werkt alleen als de onderzoeksvragen echt uit leerlingbehoeften vertrekken.",
        "commentaar": "Drie bruikbare opbouwen, maar de keuze blijft een teamkennis-vraag die alleen jij kunt beantwoorden: opbouw A werkt bij stevige maar uitgesproken sceptici, C bij een team met hart voor de klas maar AI-moeheid. Let op wat AI hier goed doet — risico's per variant benoemen — en wat het niet kan: weten dat jouw meest kritische collega dichtslaat bij plenaire startrondes. Dat weet jij.",
        "tryItYourself": {
          "field": "teamleren-we-bijeenkomst1",
          "label": "Ontwerp jouw bijeenkomst 1 met AI",
          "shortLabel": "Eigen bijeenkomst 1",
          "hint": "Geef teamsamenstelling + drie doelen mee · vraag om alternatieven mét risico's",
          "example": "Ik start een PLG van ... docenten (...). Doelen: ... Ontwerp drie alternatieve opbouwen en benoem per opbouw het grootste risico."
        }
      },
      {
        "title": "Experiment-format dat klein genoeg blijft",
        "prompt": "Onze PLG-vraag is: 'Leren leerlingen meer van AI-feedback vooraf of docent-feedback achteraf bij schrijfopdrachten?' Ontwerp een mini-experiment-format dat elk teamlid in één gewone les kan uitvoeren, ongeacht vak. Eisen: maximaal 20 minuten voorbereiding, geen extra lesuur, één concreet observatiepunt, en een invulformat van maximaal vijf regels voor de terugkoppeling.",
        "voorbeeldOutput": "Experiment 'Eén alinea, twee routes': kies één korte schrijftaak die je toch al geeft. Helft van de klas krijgt vooraf AI-feedback op hun opzet (vaste prompt, 5 min), andere helft werkt zoals altijd en krijgt jouw feedback achteraf. Observatiepunt: de revisie — wat veranderen leerlingen daadwerkelijk aan hun tekst?\n\nTerugkoppelformat (5 regels):\n1. Vak + klas + taak: ...\n2. Wat ik deed: ...\n3. Wat ik zag bij de revisies (concreet): ...\n4. Wat me verraste: ...\n5. Wat ik het team wil vragen: ...",
        "commentaar": "De kracht: het experiment lift mee op een bestaande taak (geen extra werk), heeft één observatiepunt (de revisie — niet 'wat vonden leerlingen ervan') en het format eindigt met een vraag aan het team, wat de volgende bijeenkomst voedt. Bewaak zelf de wetenschappelijke bescheidenheid: dit is geen onderzoek met n=28, het is gestructureerd kijken. Dat is voor een PLG precies genoeg.",
        "tryItYourself": {
          "field": "teamleren-we-experiment",
          "label": "Ontwerp jouw experiment-format",
          "shortLabel": "Eigen experiment-format",
          "hint": "Lift mee op bestaande taak · één observatiepunt · terugkoppeling in vijf regels",
          "example": "Onze PLG-vraag is: ... Ontwerp een mini-experiment dat elk teamlid in één gewone les kan uitvoeren. Eisen: ..."
        }
      },
      {
        "title": "Het levende document — oogst van bijeenkomst 4 structureren",
        "prompt": "Onze PLG rondt na vier bijeenkomsten af. In ons levende document staan elf mini-experimenten (per stuk: wat, wat zagen we, wat betekent het). Structureer dit materiaal tot een opbrengstpagina van maximaal één A4 voor de rest van de school: wat hebben we onderzocht, wat weten we nu, wat adviseren we, wat weten we nog niet. Behoud de nuance — geen succesverhaal maken van gemengde resultaten.",
        "voorbeeldOutput": "**Wat we onderzochten:** of leerlingen meer leren van AI-feedback vooraf of docent-feedback achteraf, in 11 experimenten over 6 vakken.\n\n**Wat we nu weten:** AI-feedback vooraf leidde in 8 van 11 experimenten tot meer revisies — maar de revisies waren oppervlakkiger (spelling, formulering) dan na docent-feedback (structuur, inhoud). Bij talen werkte de combinatie het best: AI vooraf op vorm, docent achteraf op inhoud.\n\n**Wat we adviseren:** AI-feedback inzetten als voorronde, niet als vervanging. Vaste prompt per vak beschikbaar in de bijlage.\n\n**Wat we nog niet weten:** of het effect blijft als de nieuwigheid eraf is, en of zwakkere schrijvers er evenveel aan hebben — dat is de vraag voor cyclus 2.",
        "commentaar": "Let op de vierdeling — vooral 'wat we nog niet weten' maakt het geloofwaardig en opent de deur naar een volgende cyclus. AI is sterk in het structureren van dit soort ruw materiaal, maar check elke geclaimde telling ('8 van 11') tegen het brondocument: samenvattend afronden richting een mooier verhaal is precies wat AI hier geneigd is te doen.",
        "tryItYourself": {
          "field": "teamleren-we-oogst",
          "label": "Structureer jouw (verwachte) oogst",
          "shortLabel": "Eigen oogstpagina",
          "hint": "Vierdeling: onderzocht · weten we nu · adviseren we · weten we nog niet",
          "example": "Structureer ons PLG-materiaal tot één A4: wat hebben we onderzocht, wat weten we nu, wat adviseren we, wat weten we nog niet. Behoud de nuance."
        }
      }
    ],
    "vakvariaties": [
      {
        "vak": "Vaksectie · vo",
        "body": "Eén vak, één doorlopende leerlijn: de PLG kan dicht op de vakdidactiek zitten ('wat doet AI-feedback met de schrijfvaardigheidslijn van klas 1 naar 4?'). Voordeel: experimenten zijn direct vergelijkbaar. Risico: vakblindheid — nodig één keer iemand van een andere sectie uit als frisse blik."
      },
      {
        "vak": "Interdisciplinair team · mbo",
        "body": "Teams rond een opleiding mixen avo- en praktijkdocenten. Kies een vraag op het niveau van de student, niet het vak: 'wat gebeurt er met de beroepshouding van studenten als AI-gebruik normaal wordt in praktijkopdrachten?' De vergelijking tussen praktijklokaal en theorieles is hier juist de winst."
      },
      {
        "vak": "Opleidingsteam · hbo",
        "body": "Hbo-teams hebben vaak al onderzoekscultuur — benut die: koppel de PLG aan een bestaande kwaliteitscyclus of een lectoraat. Valkuil is de andere kant: eindeloos methodologisch verfijnen in plaats van uitproberen. Vier bijeenkomsten, elf kleine experimenten verslaat één perfect onderzoeksdesign dat nooit start."
      },
      {
        "vak": "Bovenschools netwerk · alle sectoren",
        "body": "Kartrekkers van meerdere scholen kunnen een netwerk-PLG vormen. De experimenten lopen dan per school, de vergelijking is goud ('waarom lukt op school A wat op school B strandt?'). Vraagt strakkere afspraken over het levende document — afstand maakt vrijblijvend."
      },
      {
        "vak": "Klein team of duo-start",
        "body": "Geen negen collega's beschikbaar? Een PLG van drie werkt ook — zelfde cyclus, lichtere werkvormen. Begin desnoods als duo en laat de eerste oogst nieuwe leden werven: een concreet resultaat overtuigt collega's beter dan een uitnodiging."
      }
    ],
    "valkuilen": [
      {
        "titel": "De PLG wordt een toolshow",
        "watGebeurtEr": "Elke bijeenkomst demonstreert iemand iets nieuws. Iedereen is onder de indruk, niemand experimenteert, en na vier bijeenkomsten heeft het team veel gezien en niets onderzocht.",
        "fix": "De onderzoeksvraag is het anker: elke werkvorm en elk experiment moet eraan bijdragen. Demonstraties mogen — maximaal tien minuten, en altijd gevolgd door 'wat betekent dit voor onze vraag?'"
      },
      {
        "titel": "Alleen de gelovigen doen mee",
        "watGebeurtEr": "Je nodigt het team uit, de twee enthousiastelingen komen, de rest 'heeft het druk'. De PLG wordt een clubje en vergroot precies de kloof die hij moest dichten.",
        "fix": "Persoonlijke uitnodiging vóór de plenaire aankondiging, met de kritische collega's eerst — in de rol van kritisch onderzoeker. En regel het mandaat: deelname in taakuren of professionaliseringstijd, niet 'erbij'."
      },
      {
        "titel": "Experimenten die geen experiment zijn",
        "watGebeurtEr": "'Ik ga eens wat proberen met AI' — en bij de terugblik heeft de helft niets gedaan en vertelt de andere helft anekdotes zonder observatiepunt. De vergelijking, het hart van de PLG, komt nooit van de grond.",
        "fix": "Iedereen vertrekt uit elke bijeenkomst met één ingevulde zin: 'In week ... probeer ik ... in klas ... en ik let op ...'. Het terugkoppelformat van vijf regels is verplicht startmateriaal voor de volgende bijeenkomst."
      },
      {
        "titel": "De kartrekker wordt de expert",
        "watGebeurtEr": "Vragen gaan via jou, jij bereidt alles voor, jij weet het meest — en het team leunt achterover. Bij jouw eerste drukke periode valt alles stil, want het was jouw PLG, niet die van het team.",
        "fix": "Verdeel rollen vanaf bijeenkomst 2: een ander zit voor, weer een ander bewaakt het document. Beantwoord inhoudelijke vragen stelselmatig met 'wie heeft dit geprobeerd?' in plaats van met je eigen antwoord."
      },
      {
        "titel": "Oogsten vergeten",
        "watGebeurtEr": "De cyclus was waardevol, iedereen voelde het — en drie maanden later kan niemand benoemen wat het opleverde. Bij de begroting van volgend jaar sneuvelen de uren, want er is geen zichtbaar resultaat.",
        "fix": "Bijeenkomst 4 is heilig en levert altijd een tastbaar product: de opbrengstpagina van één A4 plus het levende document. Stuur beide actief naar schoolleiding én naar het podium dat je in stap 4 koos."
      }
    ],
    "geoefendSpoor": {
      "eyebrow": "Voor de geoefende kartrekker",
      "titel": "Ontwerp cyclus 2 vóór cyclus 1 eindigt",
      "beschrijving": "De grootste sterfte onder PLG's zit tussen cyclus 1 en 2: de energie was er, het resultaat was er, en toch start het vervolg nooit. Doorbreek dat door in bijeenkomst 3 al een doorkijk te agenderen: welke vraag dient zich aan uit onze 'wat we nog niet weten'-lijst, wie wil cyclus 2 trekken (niet jij — dat is de test van eigenaarschap), en welke overlegtijd claimen we nu al in de jaaragenda van volgend halfjaar?",
      "opdracht": "Lever bij het einde van cyclus 1 een startdocument voor cyclus 2 op: vervolgvraag, nieuwe trekker, geplande data. Als er geen nieuwe trekker opstaat, agendeer dan precies dát als gesprek met je schoolleiding — het zegt iets over de borging die les 5.6 verder uitwerkt."
    },
    "eindcriteria": [
      {
        "criterium": "Onderzoeksvraag",
        "onder": "Vraag gaat over tools of is te breed voor één cyclus.",
        "op": "Vraag gaat over leerlingen/studenten, is onderzoekbaar in eigen lessen en raakt een echte teamzorg.",
        "boven": "+ Meerdere kandidaat-vragen voorbereid zodat het team echt iets te kiezen heeft."
      },
      {
        "criterium": "Cyclusontwerp",
        "onder": "Vier bijeenkomsten gepland zonder experimenten ertussen.",
        "op": "Vier bijeenkomsten met doel, werkvorm en experiment-opdracht; terugblik claimt minimaal de helft van bijeenkomst 2 en 3.",
        "boven": "+ Werkvormen gevarieerd per bijeenkomst en rolverdeling (voorzitter, documentbewaker) ingebouwd."
      },
      {
        "criterium": "Deelmechanisme",
        "onder": "Geen vastlegging voorzien.",
        "op": "Levend document met vast format plus een benoemd eindpodium voor de opbrengst.",
        "boven": "+ Opbrengstpagina-format klaar en afspraak met schoolleiding over waar de oogst landt."
      },
      {
        "criterium": "Startvoorwaarden",
        "onder": "Cyclus ontworpen zonder tijd, mandaat of veiligheid te checken.",
        "op": "Per voorwaarde status en actie benoemd; kritische collega's hebben een uitnodigingsstrategie.",
        "boven": "+ Mandaat schriftelijk bevestigd en alle vier de data staan in de teamagenda."
      }
    ],
    "reflection": [
      "Welke collega zie je bij voorbaat al niet meedoen — en wat zegt jouw voorspelling over de uitnodiging die je voor die collega zou moeten ontwerpen?",
      "Een PLG vraagt dat jij als kartrekker inhoudelijk een stap terug doet. Waar ga jij dat het moeilijkst vinden, en hoe merkt het team dat aan jou?",
      "Stel: na cyclus 1 is de scepsis in je team niet kleiner geworden, maar wél beter onderbouwd. Is dat winst? Wat zegt je antwoord over wat je eigenlijk wilt bereiken?"
    ],
    "checklist": [
      "Teaminventarisatie gemaakt: wie gebruikt, wie wacht af, wie is kritisch",
      "Drie kandidaat-onderzoeksvragen geformuleerd en getoetst aan de drie criteria",
      "Cyclus van vier bijeenkomsten ontworpen met doel, werkvorm en experiment-opdracht",
      "Terugblik op experimenten claimt minimaal de helft van bijeenkomst 2 en 3",
      "Levend document opgezet met vast format van vijf regels per experiment",
      "Eindpodium voor de opbrengst gekozen",
      "Startvoorwaarden gecheckt: tijd, mandaat, veiligheid — acties uitgezet",
      "Kritische collega's persoonlijk uitgenodigd als kritische onderzoekers"
    ],
    "verderLezen": [
      {
        "titel": "Effective Teacher Professional Development",
        "bron": "Darling-Hammond e.a. · Learning Policy Institute",
        "jaar": 2017,
        "link": "https://learningpolicyinstitute.org",
        "waarom": "Het onderzoeksfundament onder deze les: samenwerking, actieve werkvormen, eigen praktijk en duur als sleutels van effectieve professionalisering."
      },
      {
        "titel": "AI Competency Framework for Teachers",
        "bron": "UNESCO",
        "jaar": 2024,
        "link": "https://www.unesco.org",
        "waarom": "Plaatst teamleren binnen de dimensie 'AI for professional learning' — bruikbaar als gemeenschappelijke taal in je eerste PLG-bijeenkomst."
      },
      {
        "titel": "Samen professionaliseren rond digitalisering",
        "bron": "Kennisnet",
        "jaar": 2025,
        "link": "https://www.kennisnet.nl",
        "waarom": "Praktische handvatten voor het organiseren van teamleren rond digitale thema's in de Nederlandse schoolcontext."
      },
      {
        "titel": "Werkdruk en professionele ruimte in het vo",
        "bron": "Voion",
        "jaar": 2025,
        "link": "https://www.voion.nl",
        "waarom": "Onderbouwing voor het gesprek met je schoolleiding over tijd en mandaat — de startvoorwaarde die het vaakst sneuvelt."
      }
    ]
  },
  "train-the-teacher": {
    "format": "diepteles",
    "summary": "Vroeg of laat wordt het gevraagd: 'Kun jij niet eens iets over AI doen voor het team?' Deze les maakt je daar klaar voor — niet met een standaardpresentatie, maar met een sessieontwerp dat werkt voor een zaal vol verschillen: de collega die alles al doet, de collega die nooit iets met AI deed, en de collega die vindt dat het allemaal onzin is. Je ontwerpt een complete collega-sessie van 90 minuten met activerende werkvormen, een doordachte aanpak van weerstand, en differentiatie voor drie startniveaus tegelijk.",
    "duration": {
      "total": "70 minuten",
      "blocks": [
        {
          "label": "Aanleiding",
          "min": 6
        },
        {
          "label": "Conceptueel kader",
          "min": 14
        },
        {
          "label": "Doel en doelgroep scherpstellen",
          "min": 10
        },
        {
          "label": "Sessie van 90 minuten ontwerpen",
          "min": 20
        },
        {
          "label": "Weerstandsscenario's voorbereiden",
          "min": 12
        },
        {
          "label": "Generale repetitie + materiaalcheck",
          "min": 8
        }
      ]
    },
    "opening": {
      "eyebrow": "Aanleiding",
      "aanleiding": "De teamleider houdt je staande bij het kopieerapparaat: 'Jij bent toch goed met die AI-dingen? De studiedag van maart heeft nog een gat van anderhalf uur. Kun jij iets doen voor het hele team?' Je zegt ja — natuurlijk zeg je ja — en pas op de fietsroute naar huis landt de vraag echt. Het hele team. Dat is de collega die haar toetsen al maanden met AI bouwt én de collega die zijn wachtwoorden op een post-it bewaart. De enthousiaste jonge hond én de ervaren docent die hardop zegt dat dit 'wéér zo'n hype' is die overwaait zoals het digibord-evangelie van 2009.\n\nDe klassieke fout is nu: een presentatie bouwen. Veertig slides over wat AI is, wat het kan, en wat de school ervan vindt. Het loopt altijd hetzelfde af: de gevorderden vervelen zich, de beginners haken af bij slide twaalf, en de sceptici krijgen gelijk — want er gebeurde inderdaad niets dat hun les morgen anders maakt. Je was geen trainer, je was een zender. En zenden is precies wat jij als docent je leerlingen ook al niet aandoet.\n\nDe omslag van deze les: behandel je collega-sessie als een les voor de moeilijkste klas die je ooit had — een klas met extreme niveauverschillen, volwassen weerstand en collega's die jouw geloofwaardigheid 's middags in de teamkamer naverteld hebben. Alles wat je didactisch kunt, heb je hier nodig: activeren, differentiëren, veiligheid bouwen. En één ding extra: de erkenning dat weerstand van professionals zelden dom is — er zit bijna altijd een legitieme zorg onder die je kunt benutten in plaats van bestrijden.",
      "waaromNu": "Met de AI-geletterdheidsverplichting uit de AI Act (sinds februari 2025) en de groeiende vraag naar interne AI-expertise zoeken scholen het steeds vaker dichtbij: de eigen kartrekker traint het eigen team. Dat is goedkoper én effectiever dan externe inhuur — mits de kartrekker het ambacht van collega's trainen beheerst. Dat ambacht is iets anders dan zelf goed zijn met AI."
    },
    "conceptueel": {
      "eyebrow": "Conceptueel kader",
      "intro": "Collega's trainen verschilt op drie punten fundamenteel van lesgeven aan jongeren — en wie die verschillen negeert, ontwerpt een sessie die strandt. Ten eerste: volwassen professionals leren via hun bestaande praktijk. Ze nemen twintig jaar ervaring mee en toetsen alles wat jij zegt aan die ervaring. Abstracte uitleg gaat erlangs; een werkvorm die hun eigen lesmateriaal als startpunt neemt, landt. De ontwerpregel is daarom: binnen het eerste half uur werkt iedere deelnemer aan iets van zichzelf.\n\nTen tweede: de niveauverschillen zijn extremer dan in welke klas ook, en ze zijn beladen. Een leerling die iets niet kan, vindt dat normaal; een ervaren docent die zich incompetent voelt waar een jongere collega vloeiend werkt, ervaart statusverlies. Differentiatie in een collega-sessie is dus niet alleen praktisch maar ook emotioneel ontwerp: niemand mag publiek door het ijs zakken. Werkvormen met zelfgekozen instapniveau, duo's die je bewust samenstelt, en opdrachten waarin 'ik heb dit nog nooit gedaan' een legitieme startpositie is.\n\nTen derde: weerstand is informatie. Onder 'AI is een hype' zit vaak de zorg jarenlange expertise te zien devalueren. Onder 'hier is geen tijd voor' zit een reëel werkdrukprobleem. Onder 'het is fraude-gereedschap' zit een serieuze toetsings-zorg die je in Module 1 en 3 zelf hebt leren articuleren. De trainersfout is weerstand willen winnen met argumenten — dan wordt het een debat en verlies je de zaal. De vakbeweging is: de zorg expliciet erkennen, hem scherper maken dan de inbrenger zelf deed, en hem ombuigen tot onderzoeksmateriaal voor de sessie. De scepticus die zich serieus genomen voelt, wordt je beste co-docent; genegeerd wordt hij je ondermijner in de wandelgangen.\n\nTot slot het sessiedoel zelf. Eén sessie verandert geen praktijk — dat weet je uit les 5.2. Een realistische ambitie voor 90 minuten is: iedere deelnemer vertrekt met één concreet ding dat hij deze week in zijn eigen les kan gebruiken, plus de wetenschap waar hij terecht kan voor de volgende stap. 'Het team enthousiast maken' is geen doel, dat is een hoop. 'Ieder teamlid heeft één eigen werkblad-met-AI gemaakt en weet wat de vervolgstap is' — dat is een doel waar je een sessie op kunt bouwen.",
      "mentalModel": {
        "naam": "De sessie als les voor je moeilijkste klas",
        "beschrijving": "Alles wat je didactisch weet, geldt hier verscherpt: activeren in plaats van zenden, differentiëren op drie niveaus, veiligheid vóór uitdaging. Plus één volwassen extra: status. Een leerling die iets niet kan vindt dat normaal; een professional die zich incompetent voelt waar zijn jongere collega vloeiend werkt, beschermt zichzelf — met afhaken of met aanvallen. Ontwerp dus zo dat niemand publiek door het ijs zakt."
      },
      "kernbegrippen": [
        {
          "term": "Praktijk-eerst-principe",
          "uitleg": "Volwassen professionals leren via hun eigen praktijk. Ontwerpregel: binnen 30 minuten werkt iedereen aan eigen materiaal — geen demo-data, geen verzonnen voorbeelden."
        },
        {
          "term": "Statusveilige differentiatie",
          "uitleg": "Niveauverschillen opvangen zonder iemand publiek te laten zakken: zelfgekozen instapniveau, bewust samengestelde duo's, en 'nooit gedaan' als legitieme startpositie."
        },
        {
          "term": "Weerstand als informatie",
          "uitleg": "Onder elke weerstand zit een zorg (status, werkdruk, toetsing, waarden). Erken de zorg, maak hem scherper dan de inbrenger deed, en buig hem om tot onderzoeksmateriaal."
        },
        {
          "term": "Vertrek-met-iets-doel",
          "uitleg": "Het realistische doel van één sessie: ieder vertrekt met één direct bruikbaar product voor de eigen les, plus zicht op de vervolgstap. Enthousiasme is bijvangst, geen doel."
        }
      ]
    },
    "learningGoals": [
      "Je formuleert een realistisch sessiedoel in termen van wat deelnemers meenemen, niet wat jij vertelt.",
      "Je ontwerpt een collega-sessie van 90 minuten waarin iedereen binnen 30 minuten aan eigen materiaal werkt.",
      "Je ontwerpt differentiatie voor drie startniveaus tegelijk, zonder dat iemand publiek door het ijs zakt.",
      "Je bereidt drie weerstandsscenario's voor met per scenario de onderliggende zorg en jouw eerste respons."
    ],
    "scenario": {
      "title": "Werksituatie",
      "context": "Je hebt anderhalf uur op de studiedag (of een teamoverleg) toegezegd gekregen voor een AI-sessie met je hele team: 14 collega's, van dagelijkse AI-gebruikers tot digitaal onwennige docenten, plus minstens twee uitgesproken sceptici. De teamleider verwacht 'dat het team er iets aan heeft'. Jij gaat het concreter maken dan dat — en je ontwerpt vandaag de complete sessie, inclusief je plan voor de lastige momenten.",
      "role": "Kartrekker AI · ontwerper en uitvoerder van de teamsessie",
      "tools": "AI-tool als ontwerppartner · de werkvormen uit Module 1-5 als bronmateriaal · jaaragenda voor het vervolgmoment"
    },
    "steps": [
      {
        "title": "Sessiedoel formuleren — wat heeft íeder bij vertrek?",
        "body": "Schrijf je sessiedoel als vertrekzin: 'Aan het eind van deze sessie heeft iedere deelnemer ... en weet iedereen ...'. Toets: is dit haalbaar voor de minst ervaren deelnemer én niet beledigend voor de meest ervaren? Een doel dat alleen voor het midden werkt, is geen doel voor een teamsessie.",
        "time": "8 min",
        "voorbeeld": "Aan het eind heeft iedere deelnemer één eigen lesproduct (opdracht, werkblad of toetsvraag) dat met AI-hulp is gemaakt of verbeterd, getoetst aan de eigen vakcriteria — en weet iedereen waar het vervolg te vinden is (de twee inloopmomenten in april). Voor de gevorderden: hun product is een variant die ze nog niet eerder maakten, bijvoorbeeld gedifferentieerd op drie niveaus.",
        "workspace": {
          "field": "trainer-sessiedoel",
          "label": "Mijn sessiedoel als vertrekzin",
          "shortLabel": "Sessiedoel",
          "hint": "Iedere deelnemer heeft ... en weet ... — haalbaar voor de zwakste, niet beledigend voor de sterkste",
          "placeholder": "Aan het eind van deze sessie heeft iedere deelnemer ...\n... en weet iedereen ...\nVoor de gevorderden geldt extra: ...",
          "rows": 4
        }
      },
      {
        "title": "Breng de zaal in kaart — drie groepen, drie behoeften",
        "body": "Verdeel je deelnemers (op naam, voor jezelf) over drie groepen: starters (nog nauwelijks AI-ervaring), gebruikers (doen al iets, willen verder) en gevorderden (kunnen meer dan jij op onderdelen). Noteer per groep: wat hebben zij nodig om de sessie als winst te ervaren, en wat is voor hen het afhaakrisico? Markeer apart wie je als scepticus verwacht — die kan in elke groep zitten.",
        "time": "10 min",
        "workspace": {
          "field": "trainer-zaalkaart",
          "label": "Mijn zaal in drie groepen",
          "shortLabel": "Zaalkaart",
          "hint": "Per groep: wie · wat hebben ze nodig · afhaakrisico — plus: wie zijn de sceptici",
          "placeholder": "Starters (namen/aantal): ... — nodig: ... — risico: ...\nGebruikers: ... — nodig: ... — risico: ...\nGevorderden: ... — nodig: ... — risico: ...\nVerwachte sceptici + vermoedelijke onderliggende zorg: ...",
          "rows": 8
        }
      },
      {
        "title": "Ontwerp de sessie — 90 minuten, praktijk binnen 30",
        "body": "Bouw nu het draaiboek. Vaste eisen: opening die alle drie de groepen binnenhaalt (geen 'wat is AI'-uitleg), eigen-materiaal-werkblok van minimaal 40 minuten met instapkeuze per niveau, een deelmoment waarin producten zichtbaar worden, en een afsluiting met het vervolg. Schrijf per blok: tijd, werkvorm, wat de starters doen, wat de gevorderden doen, en wat jíj doet (hint: vooral rondlopen).",
        "time": "20 min",
        "voorbeeld": "0-10 ervaringslijn: iedereen plakt een post-it op een as van 'nooit gebruikt' tot 'dagelijks' — met de uitspraak: élke positie is vandaag een werkpositie. 10-25 demo-met-tegenwicht: ik bouw live een opdracht met AI én laat zien waar het mis ging; sceptici-vraag vooraf: 'let op wat er sneuvelt'. 25-70 werkblok in duo's (starter + gebruiker gemixt, gevorderden samen met een verdiepingskaart): iedereen bouwt of verbetert één eigen lesproduct; ik loop rond, drie geplande check-ins bij de starters. 70-85 marktplaats: producten op tafel, twee rondes kijken bij een ander. 85-90 vervolg: inloopmomenten + waar de prompts staan.",
        "workspace": {
          "field": "trainer-draaiboek",
          "label": "Mijn draaiboek van 90 minuten",
          "shortLabel": "Draaiboek",
          "hint": "Per blok: tijd · werkvorm · wat doen starters/gevorderden · wat doe jij",
          "placeholder": "0-..: ...\n..-..: ...\n..-..: (werkblok eigen materiaal, min. 40 min) ...\n..-..: (deelmoment) ...\n..-90: (vervolg) ...",
          "rows": 9
        }
      },
      {
        "title": "Bereid drie weerstandsscenario's voor",
        "body": "Kies de drie weerstandsuitingen die jij in jouw team het meest waarschijnlijk acht (bijvoorbeeld: 'dit is fraude-gereedschap', 'hier heb ik geen tijd voor', 'straks vervangt het ons'). Schrijf per scenario: de onderliggende zorg, je eerste respons (erken + verscherp, geen weerlegging), en hoe je de zorg ombuigt naar de werkvorm. Oefen je eerste respons hardop — de eerste tien seconden bepalen of het een gesprek wordt of een debat.",
        "time": "12 min",
        "voorbeeld": "Uiting: 'Leerlingen leren straks niets meer.' Onderliggende zorg: het vak holt uit, toetsing wordt zinloos — een legitieme didactische zorg. Eerste respons: 'Eens dat dat het echte risico is — sterker: er zijn opdrachten die nu al niets meer meten. Welke van jouw opdrachten is het kwetsbaarst, denk je?' Ombuiging: deze collega gaat in het werkblok zijn meest AI-gevoelige opdracht herontwerpen — zijn scepsis is precies het juiste gereedschap daarvoor.",
        "workspace": {
          "field": "trainer-weerstand",
          "label": "Mijn drie weerstandsscenario's",
          "shortLabel": "Weerstand",
          "hint": "Per scenario: uiting · onderliggende zorg · eerste respons (erken + verscherp) · ombuiging naar werkvorm",
          "placeholder": "Scenario 1: '...' — zorg: ... — respons: ... — ombuiging: ...\nScenario 2: ...\nScenario 3: ...",
          "rows": 8
        }
      },
      {
        "title": "Generale repetitie — test je sessie vóór de sessie",
        "body": "Twee checks vóór de echte uitvoering. Materiaalcheck: werkt alles in het lokaal van de studiedag — accounts, wifi, de prompt-startkaarten per niveau geprint? Microtest: doe het werkblok-deel met één collega (het liefst een starter) en kijk waar hij vastloopt; elk struikelpunt dat je nu vindt, struikelt straks niet voor veertien man. Plan beide deze week.",
        "time": "8 min",
        "workspace": {
          "field": "trainer-generale",
          "label": "Mijn generale repetitie",
          "shortLabel": "Generale",
          "hint": "Materiaalcheck: wat, wanneer · microtest: met wie, wanneer · wat de test moet uitwijzen",
          "placeholder": "Materiaalcheck (datum): accounts ..., lokaal ..., startkaarten ...\nMicrotest met (collega, datum): ...\nWaar ik specifiek op let: ...",
          "rows": 5
        }
      }
    ],
    "workedExamples": [
      {
        "title": "Startkaarten op drie niveaus genereren",
        "prompt": "Voor mijn teamsessie maak ik prompt-startkaarten op drie niveaus voor het werkblok 'verbeter één eigen lesproduct met AI'. Doelgroep: docenten vo, alle vakken. Maak per niveau één kaart: STARTER (nog nooit met AI gewerkt — letterlijk eerste stappen, invul-prompt met haakjes), GEBRUIKER (kan prompten — focus op verbeteren en kritisch toetsen van output), GEVORDERD (wil verdieping — bijvoorbeeld differentiëren op drie niveaus of een toetsvariant bouwen). Elke kaart: doel, stappenplan van max 5 stappen, één valkuil-waarschuwing.",
        "voorbeeldOutput": "KAART STARTER — 'Je eerste werkblad met AI'. Doel: één bestaande opdracht laten herschrijven. Stappen: 1. Pak een opdracht die je al gebruikt. 2. Typ: 'Herschrijf deze opdracht voor [klas/niveau], behoud het leerdoel: [plak opdracht]'. 3. Lees de output: wat klopt, wat klopt niet voor jouw klas? 4. Typ wat er anders moet ('maak vraag 3 makkelijker'). 5. Neem alleen over wat jíj goed vindt. Valkuil: de output is een voorstel, geen waarheid — jij blijft de vakdocent.\n\nKAART GEVORDERD — 'Eén opdracht, drie niveaus'. Doel: je beste opdracht differentiëren. Stappen: 1. Kies een opdracht die voor de helft van je klas te makkelijk of te moeilijk is. 2. Vraag AI om drie varianten (basis/op niveau/uitdaging) met gelijk leerdoel. 3. Check: verschilt de dénkstap of alleen de tekstlengte? 4. Scherp de zwakste variant aan. 5. Leg de drie naast je rubric. Valkuil: AI differentieert vaak op tekstlengte in plaats van op cognitieve complexiteit — daar zit jouw vakmanschap.",
        "commentaar": "De starterkaart begint bij een bestaande opdracht — praktijk-eerst, geen demo-data — en eindigt met regie ('alleen overnemen wat jij goed vindt'). De gevorderden-kaart bevat een echte verdieping (denkstap versus tekstlengte) zodat ook jouw beste collega iets nieuws doet. Print de kaarten: niveaukeuze via een fysieke kaart pakken is statusveiliger dan hardop zeggen in welke groep je zit.",
        "tryItYourself": {
          "field": "trainer-we-startkaarten",
          "label": "Genereer jouw drie startkaarten",
          "shortLabel": "Eigen startkaarten",
          "hint": "Per niveau: doel · max 5 stappen · één valkuil — toegespitst op jouw team en werkblok",
          "example": "Maak prompt-startkaarten op drie niveaus voor mijn werkblok '...'. Doelgroep: ... Per kaart: doel, stappenplan van max 5 stappen, één valkuil-waarschuwing."
        }
      },
      {
        "title": "Weerstand oefenen met AI als sparringpartner",
        "prompt": "Speel een ervaren docent (25 jaar voor de klas, geschiedenis) die tijdens mijn AI-teamsessie zegt: 'Dit is gewoon de zoveelste hype. Het digibord zou ook alles veranderen. Over drie jaar praat niemand hier meer over en hebben wij er weer uren in zitten.' Blijf in je rol, reageer zoals een echte collega — dus niet te snel overtuigd. Ik oefen mijn respons. Geef me na drie gespreksbeurten feedback: erkende ik de zorg echt of ging ik verkapt in de verdediging?",
        "voorbeeldOutput": "[Als collega:] 'Kijk, ik zie jou enthousiast zijn en dat siert je. Maar ik heb hier de mediatheek-revolutie meegemaakt, het studiehuis, het digibord. Telkens moesten wij om. Waarom zou dit anders zijn?'\n\n[Na drie beurten, als feedbackgever:] Je opende sterk: 'die hype-moeheid snap ik, je hebt drie golven overleefd die minder brachten dan beloofd' — dat is echte erkenning. Maar in beurt twee zei je 'toch is AI fundamenteel anders omdat...' en daar werd het alsnog een verdediging; ik voelde me als collega meteen weer toehoorder. Sterker was geweest: mijn eigen criterium terugvragen — 'waar zou jíj aan zien dat dit wél blijvend is?' Dan moet ik nadenken in plaats van terugduwen.",
        "commentaar": "Rollenspel met AI is laagdrempelig oefenen voor het moment dat er echt veertien paar ogen op je gericht zijn. De feedbackvraag achteraf ('erkende ik de zorg of verdedigde ik?') is essentieel — zonder die vraag oefen je vooral je eigen gelijk. Let op: echte collega's zijn grilliger dan AI ze speelt. Gebruik dit als warming-up, niet als garantie.",
        "tryItYourself": {
          "field": "trainer-we-rollenspel",
          "label": "Oefen jouw lastigste weerstandsscenario",
          "shortLabel": "Eigen rollenspel",
          "hint": "Beschrijf de collega concreet · blijf-in-rol-instructie · feedbackvraag na drie beurten",
          "example": "Speel een collega die ... en zegt: '...'. Blijf in je rol, reageer als een echte collega. Geef me na drie beurten feedback: erkende ik de zorg echt?"
        }
      },
      {
        "title": "Draaiboek laten stresstesten",
        "prompt": "Hieronder mijn draaiboek voor een AI-teamsessie van 90 minuten met 14 docenten (3 starters, 8 gebruikers, 3 gevorderden, onder wie 2 sceptici). [draaiboek] Stresstest het op vier punten: (1) waar loopt de tijd het waarschijnlijkst uit, (2) op welk moment kan een starter publiek door het ijs zakken, (3) waar krijgen de gevorderden niets nieuws, (4) welk moment is het kwetsbaarst als een scepticus de vloer pakt. Per punt: het risico + een concrete aanpassing.",
        "voorbeeldOutput": "(1) Tijd: je demo-met-tegenwicht staat op 15 minuten maar bevat een live AI-interactie — reken op uitloop naar 22. Aanpassing: bereid een screenshot-fallback voor en bewaak de demo op een wekker, het werkblok is heilig. (2) Statusrisico: de marktplaats vraagt iedereen het product op tafel te leggen — voor een starter met een half gelukt werkblad is dat publiek zakken. Aanpassing: maak de marktplaats een keuze tussen 'product tonen' of 'één inzicht delen'. (3) Gevorderden: je verdiepingskaart noemt differentiëren, maar twee van je drie gevorderden doen dat al. Aanpassing: tweede verdiepingsoptie — laat hen een startkaart-station bemensen; co-docentschap is voor deze groep de echte verdieping. (4) Sceptisch moment: de plenaire opening op de ervaringslijn geeft een scepticus een podium bij minuut 3. Aanpassing: geef de post-it-ronde een schriftelijke vorm en haal de gesproken toelichting naar de duo's.",
        "commentaar": "De vier stresstest-vragen dwingen AI langs precies de breukvlakken van collega-sessies: tijd, status, verveling en regie. Punt 3 laat de mooiste aanpassing zien — gevorderden inzetten als co-docent lost twee problemen tegelijk op. Weeg punt 4 zelf: een schriftelijke opening is veiliger maar vlakker; soms is de scepticus aan het woord juist je beste opening. Dat blijft jouw teamkennis.",
        "tryItYourself": {
          "field": "trainer-we-stresstest",
          "label": "Stresstest jouw draaiboek",
          "shortLabel": "Eigen stresstest",
          "hint": "Vier vragen: tijd · statusrisico · gevorderden · sceptisch moment — per punt risico + aanpassing",
          "example": "Stresstest mijn draaiboek op: (1) waar loopt de tijd uit, (2) waar zakt een starter publiek door het ijs, (3) waar krijgen gevorderden niets nieuws, (4) welk moment is kwetsbaar als een scepticus de vloer pakt."
        }
      }
    ],
    "vakvariaties": [
      {
        "vak": "Kleine vaksectie · vo",
        "body": "Bij vier collega's van hetzelfde vak kun je de hele sessie rond één gedeeld product bouwen — bijvoorbeeld samen de toetsweek-opgaven AI-bestendig maken. Differentiatie verloopt dan via rolverdeling (bouwer, criticus, tester) in plaats van via niveaukaarten."
      },
      {
        "vak": "Groot interdisciplinair team · mbo",
        "body": "Twintig docenten van wisselende vakken: werk met vakclusters in het werkblok en maak je startkaarten vak-neutraal ('jouw lesproduct' in plaats van 'jouw grammatica-opdracht'). Reserveer extra rondlooptijd — praktijkdocenten hebben vaak andere voorbeelden nodig dan avo-collega's."
      },
      {
        "vak": "Hbo-opleidingsteam",
        "body": "Verwacht inhoudelijk stevigere weerstand: hbo-collega's lezen zelf onderzoek en prikken door retoriek heen. Dat is winst — onderbouw je sessie met de bronnen uit deze leerlijn en nodig de kritische collega expliciet uit om de bewijsbasis te challengen. Co-onderzoek werkt hier beter dan training."
      },
      {
        "vak": "Studiedag-plenair · alle sectoren",
        "body": "Soms krijg je geen 90 minuten met één team maar 45 met de hele school. Verklein dan je doel radicaal: één werkvorm, één product, één vervolg. Een plenaire sessie kan nieuwsgierig maken; het echte werk gebeurt daarna in teams — zeg dat ook hardop."
      },
      {
        "vak": "Online of hybride sessie",
        "body": "Het werkblok overleeft online alleen met breakout-duo's en een gedeeld document waarin je live meekijkt. Schrap de marktplaats, vervang door drie deelnemers die hun scherm delen. Verdubbel je geplande check-ins bij starters: online afhaken is onzichtbaar afhaken."
      }
    ],
    "valkuilen": [
      {
        "titel": "De sessie wordt een presentatie",
        "watGebeurtEr": "Je wilt zoveel mogelijk meegeven en bouwt veertig slides. Het wordt zenden; de zaal consumeert, vergeet, en de sceptici zien hun gelijk bevestigd: weer een verhaal, geen verandering.",
        "fix": "Hard criterium: binnen 30 minuten werkt iedereen aan eigen materiaal, en het werkblok krijgt minimaal 40 van de 90 minuten. Alles wat je wilt vertellen maar niet past: in een naslag-document voor daarna."
      },
      {
        "titel": "Ontwerpen voor het midden",
        "watGebeurtEr": "Je sessie past bij de gemiddelde gebruiker. De starters verdrinken stilletjes, de gevorderden vervelen zich hoorbaar — en juist die twee groepen bepalen 's middags in de teamkamer hoe de sessie wordt naverteld.",
        "fix": "Ontwerp expliciet voor de randen: startkaarten met zelfgekozen instapniveau, geplande check-ins bij starters, en voor gevorderden echte verdieping of een co-docentrol. Het midden redt zichzelf."
      },
      {
        "titel": "Weerstand winnen met argumenten",
        "watGebeurtEr": "Een scepticus opent de aanval, jij weerlegt met feiten, hij verschanst zich, de zaal kijkt naar een debat. Ook als je wint, verlies je — niemand verandert van gedrag na een publiek verloren discussie.",
        "fix": "Erken en verscherp de zorg in plaats van hem te weerleggen, en buig om naar de werkvorm. Bereid je drie waarschijnlijkste scenario's voor en oefen de eerste tien seconden hardop — die bepalen alles."
      },
      {
        "titel": "Live demo zonder vangnet",
        "watGebeurtEr": "De wifi hapert, het schoolaccount doet raar, of AI geeft live precies het soort zwakke output dat jouw verhaal ondergraaft op het verkeerde moment. Drie minuten gestuntel kost je de geloofwaardigheid waarop de hele sessie rust.",
        "fix": "Elke demo heeft een fallback (screenshots van een eerder gelukte run) en een tegenwicht-frame: kondig vooraf aan dát er iets mis zal gaan en maak het mislukken tot lesmateriaal. Test alles in het echte lokaal."
      },
      {
        "titel": "Geen vervolg na de sessie",
        "watGebeurtEr": "De sessie was een succes, de energie was voelbaar — en zes weken later is alles bij het oude. Eén sessie verandert geen praktijk; dat wist je, maar er stond niets gepland om op terug te vallen.",
        "fix": "Het vervolg bestaat vóór de sessie begint: twee inloopmomenten in de agenda, een vindplaats voor de startkaarten en prompts, en idealiter de PLG-cyclus van les 5.2 als landingsbaan. Benoem het vervolg in je afsluiting — concreet, met data."
      }
    ],
    "geoefendSpoor": {
      "eyebrow": "Voor de geoefende trainer",
      "titel": "Leid een tweede kartrekker op via co-trainerschap",
      "beschrijving": "Eén trainer is een kwetsbaarheid — bij jouw vertrek of drukte stopt alles. Gebruik je volgende sessie om een tweede kartrekker op te leiden: kies een collega met potentie (vaak een 'gebruiker' met didactisch gezag, niet per se de grootste AI-expert), ontwerp de sessie samen, verdeel de blokken, en doe na afloop een gezamenlijke nabespreking langs het draaiboek: wat liep, wat niet, wat zegt dat over ons ontwerp? Twee trainers die elkaars taal spreken zijn het begin van de borging waar les 5.6 om vraagt.",
      "opdracht": "Verzorg je eerstvolgende sessie als duo, met een rolverdeling op papier. Lever na afloop een gezamenlijke nabespreking van één pagina op: drie dingen die we behouden, twee die we anders doen, één afspraak over wie de volgende sessie leidt."
    },
    "eindcriteria": [
      {
        "criterium": "Sessiedoel",
        "onder": "Doel beschrijft wat jij gaat vertellen of hoopt ('enthousiasmeren').",
        "op": "Vertrekzin-doel: wat iedere deelnemer bij vertrek heeft en weet, haalbaar voor de zwakste, niet beledigend voor de sterkste.",
        "boven": "+ Doel afgestemd met teamleider en gekoppeld aan een vervolgtraject."
      },
      {
        "criterium": "Draaiboek",
        "onder": "Overwegend zenden; eigen-materiaal-werk ontbreekt of is sluitpost.",
        "op": "Praktijk binnen 30 minuten, werkblok van minimaal 40 minuten, deelmoment en vervolg ingebouwd.",
        "boven": "+ Draaiboek gestresstest (tijd, status, gevorderden, scepsis) en op minstens twee punten aangepast."
      },
      {
        "criterium": "Differentiatie",
        "onder": "Eén aanpak voor iedereen.",
        "op": "Drie startniveaus bediend met zelfgekozen instap; niemand kan publiek door het ijs zakken.",
        "boven": "+ Gevorderden ingezet als co-docent of stationsbegeleider."
      },
      {
        "criterium": "Weerstandsvoorbereiding",
        "onder": "Geen scenario's; je improviseert op het moment zelf.",
        "op": "Drie scenario's uitgewerkt met onderliggende zorg, eerste respons en ombuiging naar de werkvorm.",
        "boven": "+ Lastigste scenario hardop geoefend (rollenspel met AI of collega) en respons bijgesteld."
      },
      {
        "criterium": "Generale repetitie",
        "onder": "Materiaal en werkblok ongetest de sessie in.",
        "op": "Materiaalcheck in het echte lokaal gepland plus microtest van het werkblok met één collega.",
        "boven": "+ Struikelpunten uit de microtest aantoonbaar verwerkt in startkaarten of draaiboek."
      }
    ],
    "reflection": [
      "Welke deelnemer vrees je het meest — de starter die verdrinkt, de gevorderde die geeuwt of de scepticus die aanvalt? Wat zegt die vrees over het gat in jouw eigen trainersrepertoire?",
      "Je traint collega's in iets waarvan je zelf nog dagelijks leert. Hoe ga je om met de vraag waarop je het antwoord niet weet — en wat modelleer je daarmee voor het team?",
      "Stel dat na jouw sessie drie collega's iets blijvend anders doen en elf niet. Is de sessie dan geslaagd? Wat is — eerlijk — jouw maatstaf, en hoe verhoudt die zich tot wat je in les 5.5 gaat meten?"
    ],
    "checklist": [
      "Sessiedoel geformuleerd als vertrekzin, getoetst aan zwakste én sterkste deelnemer",
      "Zaalkaart gemaakt: drie groepen met behoeften en afhaakrisico's, sceptici gemarkeerd",
      "Draaiboek van 90 minuten klaar — praktijk binnen 30 minuten, werkblok minimaal 40 minuten",
      "Startkaarten op drie niveaus gemaakt en geprint",
      "Drie weerstandsscenario's uitgewerkt: zorg, eerste respons, ombuiging",
      "Lastigste scenario hardop geoefend",
      "Demo voorzien van fallback en tegenwicht-frame",
      "Vervolg geregeld vóór de sessie: inloopmomenten gepland, vindplaats materiaal klaar",
      "Materiaalcheck en microtest deze week ingepland"
    ],
    "verderLezen": [
      {
        "titel": "AI Competency Framework for Teachers",
        "bron": "UNESCO",
        "jaar": 2024,
        "link": "https://www.unesco.org",
        "waarom": "Geeft je sessie een internationaal kader — handig om voor sceptici te laten zien dat dit groter is dan een schoolhype."
      },
      {
        "titel": "Effective Teacher Professional Development",
        "bron": "Darling-Hammond e.a. · Learning Policy Institute",
        "jaar": 2017,
        "link": "https://learningpolicyinstitute.org",
        "waarom": "De zeven kenmerken van effectieve professionalisering — leg je eigen sessieontwerp ernaast als kwaliteitscheck."
      },
      {
        "titel": "AI-geletterdheid in het onderwijs",
        "bron": "Kennisnet",
        "jaar": 2025,
        "link": "https://www.kennisnet.nl",
        "waarom": "Nederlandstalig bronmateriaal dat je rechtstreeks in je naslag-document voor deelnemers kunt opnemen."
      },
      {
        "titel": "Professionalisering en strategisch HRM in het vo",
        "bron": "Voion",
        "jaar": 2025,
        "link": "https://www.voion.nl",
        "waarom": "Voor het gesprek met je schoolleiding over structurele tijd voor interne training — de randvoorwaarde achter elk vervolg."
      }
    ]
  },
  "onderwijs-herontwerpen": {
    "format": "diepteles",
    "summary": "Tot nu toe paste je AI in op bestaand onderwijs: een opdracht hier, een toets daar. Deze les stelt de grotere vraag: als AI structureel verandert wat leerlingen en studenten moeten kunnen, wat moet er dan structureel anders in wat wij aanbieden? Je analyseert één onderwijseenheid — een periode, module of leerlijn — op wat AI fundamenteel raakt, onderscheidt optimalisatie van transformatie, en herontwerpt de eenheid vanuit herijkte doelen. Dit is de Create-les in optima forma: je maakt onderwijs dat er nog niet was.",
    "duration": {
      "total": "80 minuten",
      "blocks": [
        {
          "label": "Aanleiding",
          "min": 7
        },
        {
          "label": "Conceptueel kader",
          "min": 15
        },
        {
          "label": "Eenheid kiezen + raakvlakanalyse",
          "min": 14
        },
        {
          "label": "Doelen herijken",
          "min": 14
        },
        {
          "label": "Herontwerp op hoofdlijnen",
          "min": 20
        },
        {
          "label": "Draagvlaktoets + eerste stap",
          "min": 10
        }
      ]
    },
    "opening": {
      "eyebrow": "Aanleiding",
      "aanleiding": "Er is een verschil tussen je huis verbouwen en je afvragen of je op de goede plek woont. De afgelopen modules heb je verbouwd: opdrachten AI-bestendig gemaakt, feedback slimmer georganiseerd, toetsen herzien. Nuttig werk — maar het vertrok steeds vanuit wat er al stond. De stille aanname onder al dat werk was: het onderwijs blijft in essentie hetzelfde, AI komt erbij.\n\nDie aanname begint te knellen. Neem een verslag-opdracht van zes weken in de bovenbouw of een beroepsproduct in het mbo. Je kunt hem AI-bestendig maken met procesbeoordeling en verantwoordingsgesprekken — verbouwen. Maar de eerlijke vraag eronder is groter: waaróm laten we ze dit eigenlijk maken? Als het doel was 'informatie verzamelen, structureren en presenteren', dan is een deel van dat doel verschoven van eindvaardigheid naar instapvaardigheid: het is niet meer wat het werkveld of het vervolgonderwijs als prestatie beschouwt, het is wat iedereen met AI in een middag doet. Wat wél schaars en waardevol wordt — scherpe vragen stellen, bronnen en AI-output op waarde schatten, een eigen positie innemen, samenwerken met mensen én systemen — zit in de huidige eenheid hooguit impliciet.\n\nDeze les gaat over dat grotere gesprek. Niet om alles om te gooien — het meeste van je onderwijs blijft waardevol, en transformatiedrift is net zo onverstandig als stilstand. Maar ergens in jouw curriculum zit minstens één eenheid waar het knelt: waar de doelen stammen uit een wereld zonder AI en het herontwerp meer vraagt dan een verbouwing. Die eenheid pak je vandaag. Je doet het grondig: eerst analyseren wat AI er werkelijk raakt, dan doelen herijken, dan pas ontwerpen — en je eindigt met een verhaal waarmee je je team meekrijgt, want een eenzame transformatie is een mislukte transformatie.",
      "waaromNu": "UNESCO benoemt op het hoogste niveau van haar AI Competency Framework for Teachers (Create) precies dit: docenten die niet alleen AI gebruiken, maar hun pedagogische praktijk ermee transformeren. Curriculumherzieningen in Nederland (vo én mbo-kwalificatiedossiers) lopen jaren achter op de technologie — de docenten die nu zelf leren herontwerpen, bepalen straks hoe die herzieningen er in de praktijk uitzien."
    },
    "conceptueel": {
      "eyebrow": "Conceptueel kader",
      "intro": "Het kernonderscheid van deze les is optimalisatie versus transformatie. Optimalisatie: hetzelfde doel, efficiënter of beter bereikt — AI als hulpmiddel binnen het bestaande ontwerp. Transformatie: het doel zelf verandert, omdat de wereld waarvoor je opleidt veranderd is — en het ontwerp volgt. Beide zijn legitiem; de fout zit in verwarring. Wie transformeert waar optimalisatie volstond, vernielt werkend onderwijs. Wie optimaliseert waar transformatie nodig was, poetst een achterhaald doel op. Het SAMR-model (Substitution, Augmentation, Modification, Redefinition) geeft hier taal voor — maar onthoud dat het een analyse-instrument is, geen ladder om te beklimmen: niet alles hoeft naar Redefinition.\n\nWanneer is transformatie aan de orde? Drie signalen. Eén: het doel van de eenheid is door AI verschoven van eindvaardigheid naar instapvaardigheid — wat eerst de prestatie was, is nu het startpunt (de samenvatting, het standaardverslag, de basisvertaling, de boilerplate-code). Twee: de eenheid traint vooral het produceren van een artefact, terwijl het denken eromheen — de vraag stellen, het resultaat wegen, de keuze verantwoorden — impliciet blijft; AI maakt precies dat impliciete deel tot het schaarse deel. Drie: het werkveld of vervolgonderwijs waarvoor de eenheid opleidt, werkt zelf inmiddels structureel anders. Eén signaal is een aanleiding voor gesprek; twee of drie signalen samen zijn een ontwerpopdracht.\n\nDe ontwerpvolgorde is dan heilig, en hij is dezelfde als bij elke curriculumklus — Wiggins en McTighe's backward design, maar nu met een herijkingsstap vooraf. Eerst: wat moet een leerling of student aan het eind kunnen en zijn, gegeven een wereld mét AI? Schrap doelen die instapvaardigheid werden, behoud doelen die mens-werk blijven, en voeg doelen toe die AI urgent maakt. Dan: welk bewijs aanvaard je daarvoor — wat moet je zíen om overtuigd te zijn? Pas daarna: welke leeractiviteiten leiden daarheen, en welke rol speelt AI daarin per fase. Wie bij de activiteiten begint ('we gaan iets met AI doen in periode 3'), bouwt decoratie; wie bij de doelen begint, bouwt onderwijs.\n\nEn dan de menselijke kant, die in elk transformatieverhaal wordt onderschat. Een herontworpen eenheid raakt collega's: hun lessen, hun toetsen, hun vertrouwde materiaal, soms hun professionele identiteit. De transformatie die jij in je eentje bedenkt en uitrolt, sterft bij de eerste roosterwijziging. Daarom eindigt deze les niet bij het ontwerp maar bij de draagvlaktoets: wie moet dit mede willen, wat is hun belang, en wat is de kleinste eerste stap die het herontwerp bewijsbaar maakt zonder dat iemand zijn hele praktijk hoeft om te gooien? Transformatie is een richting waarin je beweegt, geen big bang die je aankondigt.",
      "mentalModel": {
        "naam": "Verbouwen of verhuizen",
        "beschrijving": "Optimalisatie is verbouwen: het huis staat goed, de keuken kan beter. Transformatie is concluderen dat de plek zelf niet meer past bij hoe je leeft — en dan alsnog niet impulsief verhuizen, maar eerst precies bepalen wat je nodig hebt. De meeste eenheden in je curriculum vragen een verbouwing. Deze les gaat over die ene eenheid waar je, als je eerlijk bent, al een tijdje weet dat verbouwen niet genoeg is."
      },
      "kernbegrippen": [
        {
          "term": "Optimalisatie versus transformatie",
          "uitleg": "Optimalisatie: zelfde doel, beter bereikt met AI. Transformatie: het doel zelf herijkt omdat de wereld is veranderd. Beide legitiem — de fout zit in verwarring tussen de twee."
        },
        {
          "term": "Instapvaardigheid",
          "uitleg": "Een vaardigheid die door AI verschoof van prestatie naar startpunt: het standaardverslag, de samenvatting, de basisvertaling. Een doel dat instapvaardigheid werd, kan geen einddoel van je eenheid blijven."
        },
        {
          "term": "Backward design met herijking",
          "uitleg": "Eerst doelen herijken (schrappen, behouden, toevoegen — gegeven een wereld mét AI), dan bewijs bepalen, dan pas activiteiten ontwerpen. Wie bij activiteiten begint, bouwt decoratie."
        },
        {
          "term": "Draagvlaktoets",
          "uitleg": "De check vóór uitvoering: wie moet dit mede willen, wat is hun belang, en wat is de kleinste eerste stap die het herontwerp bewijst zonder andermans praktijk omver te lopen."
        }
      ]
    },
    "learningGoals": [
      "Je analyseert één onderwijseenheid op wat AI er structureel raakt en onderbouwt of optimalisatie volstaat of transformatie nodig is, aan de hand van de drie signalen.",
      "Je herijkt de doelen van de eenheid: je benoemt expliciet wat je schrapt, behoudt en toevoegt — met argumenten.",
      "Je herontwerpt de eenheid op hoofdlijnen volgens backward design: doelen, bewijs, activiteiten, met een expliciete AI-rol per fase.",
      "Je voert een draagvlaktoets uit en formuleert de kleinste eerste stap waarmee het herontwerp zich kan bewijzen."
    ],
    "scenario": {
      "title": "Werksituatie",
      "context": "Je bent ervaren docent en kartrekker. In jouw curriculum zit een onderwijseenheid — een projectperiode, een vaste module, een leerlijn-onderdeel van vier tot tien weken — waarvan je al langer voelt dat AI hem in het hart raakt. Niet de opdracht is het probleem; het doel is gaan schuiven. Je sectie of team weet het eigenlijk ook, maar niemand heeft het grotere gesprek geopend. Jij opent het — met een doordacht herontwerp als gespreksstuk, niet als voldongen feit.",
      "role": "Docent-ontwerper · kartrekker met curriculumambitie",
      "tools": "De huidige eenheid op papier (planner, studiewijzer of moduleboek) · AI-tool als ontwerppartner · de doelen/eindtermen waar de eenheid aan hangt"
    },
    "steps": [
      {
        "title": "Kies je eenheid en leg de huidige bedoeling bloot",
        "body": "Kies één eenheid van vier tot tien weken waar het knelt. Beschrijf eerst de huidige bedoeling in drie regels: wat moeten leerlingen/studenten aan het eind kunnen, wat maken ze daarvoor, en hoe wordt het beoordeeld. Wees eerlijk over de werkelijke bedoeling, niet de papieren — soms is het echte doel van een eenheid 'zes weken gevuld en een cijfer gegenereerd', en ook dat mag op tafel.",
        "time": "8 min",
        "workspace": {
          "field": "herontwerp-eenheid",
          "label": "Mijn eenheid + huidige bedoeling",
          "shortLabel": "Eenheid",
          "hint": "Welke eenheid · wat moeten ze kunnen · wat maken ze · hoe beoordeeld — eerlijke versie",
          "placeholder": "Eenheid: ... (periode/duur: ...)\nBedoeling: aan het eind kunnen ze ...\nZe maken: ...\nBeoordeling: ...\nEerlijke voetnoot: ...",
          "rows": 6
        }
      },
      {
        "title": "Raakvlakanalyse — toets de drie signalen",
        "body": "Loop de drie transformatiesignalen langs. Signaal 1: welk doel van deze eenheid is instapvaardigheid geworden — wat doet AI in een middag dat hier zes weken kost? Signaal 2: welk denkwerk rondom het artefact blijft impliciet — wat wordt nergens expliciet aangeleerd of beoordeeld? Signaal 3: hoe werkt het werkveld of vervolgonderwijs waarvoor dit opleidt inmiddels zelf? Conclusie: optimaliseren of transformeren — en waarom.",
        "time": "12 min",
        "voorbeeld": "Eenheid: profielwerkstuk-voorbereiding (vo bovenbouw, 8 weken). Signaal 1: bronnen samenvatten en een opzet structureren — AI doet het in minuten; check. Signaal 2: de onderzoeksvraag aanscherpen en bronnen wegen gebeurt impliciet, in de wandelgangen van de begeleiding; check. Signaal 3: vervolgonderwijs verwacht inmiddels dat studenten mét AI werken maar verantwoorden wat ervan is; check. Drie signalen — dit is een ontwerpopdracht, geen verbouwing.",
        "workspace": {
          "field": "herontwerp-raakvlak",
          "label": "Drie signalen + conclusie",
          "shortLabel": "Raakvlakanalyse",
          "hint": "Per signaal: wat zie je concreet · conclusie: optimaliseren of transformeren, en waarom",
          "placeholder": "Signaal 1 (instapvaardigheid): ...\nSignaal 2 (impliciet denkwerk): ...\nSignaal 3 (werkveld/vervolg): ...\nConclusie + onderbouwing: ...",
          "rows": 7
        }
      },
      {
        "title": "Herijk de doelen — schrappen, behouden, toevoegen",
        "body": "Nu het hart van de les. Maak drie kolommen. SCHRAPPEN (of degraderen tot middel): doelen die instapvaardigheid werden. BEHOUDEN: doelen die mens-werk blijven — vaak de denk-, oordeel- en samenwerkdoelen. TOEVOEGEN: doelen die AI urgent maakt — kritisch wegen van AI-output, regie op een mens-machine-werkproces, verantwoorden van keuzes. Per doel één regel argument. Wees streng op de toevoeg-kolom: 'kan prompten' is geen einddoel, dat is gereedschap.",
        "time": "14 min",
        "voorbeeld": "SCHRAPPEN als doel (wordt middel): 'kan informatie uit bronnen samenvatten en ordenen' — instapvaardigheid; blijft als werkstap, verdwijnt als beoordeeld einddoel. BEHOUDEN: 'formuleert een onderzoekbare vraag' — wordt zelfs zwaarder, want de vraag is het enige dat AI niet voor je heeft; 'neemt een onderbouwde eigen positie in'. TOEVOEGEN: 'weegt AI-output op betrouwbaarheid en bias en documenteert die weging'; 'verantwoordt welk deel van het werkproces hij aan AI delegeerde en waarom dat de kwaliteit diende'.",
        "workspace": {
          "field": "herontwerp-doelen",
          "label": "Herijkte doelen: schrappen · behouden · toevoegen",
          "shortLabel": "Doelen herijken",
          "hint": "Drie kolommen, per doel één regel argument · streng op de toevoeg-kolom",
          "placeholder": "SCHRAPPEN/degraderen: ... — want ...\nBEHOUDEN: ... — want ...\nTOEVOEGEN: ... — want ...",
          "rows": 8
        }
      },
      {
        "title": "Herontwerp op hoofdlijnen — bewijs eerst, dan activiteiten",
        "body": "Backward design in twee bewegingen. Eerst het bewijs: wat moet je per herijkt doel zíen om overtuigd te zijn — welk product, welk gesprek, welke handeling? Dan de weken op hoofdlijnen: welke leeractiviteiten leiden daarheen, en wat is de AI-rol per fase (verboden / gereedschap / onderwerp van studie)? Je hoeft geen weekplanner te maken — een skelet van fases met per fase doel, bewijsmoment en AI-rol volstaat. Gebruik AI als ontwerppartner, maar laat hem nooit de doelen kiezen.",
        "time": "20 min",
        "voorbeeld": "Fase 1 (week 1-2) Vraag en vooronderzoek — doel: onderzoekbare vraag; bewijs: vraagverdediging van 5 minuten; AI-rol: gereedschap voor verkenning, maar de vraagkeuze wordt mondeling verdedigd zonder scherm. Fase 2 (week 3-5) Onderzoek met AI als assistent — bewijs: logboek met gewogen AI-output (wat nam ik over, wat verwierp ik, waarom); AI-rol: gereedschap én onderwerp. Fase 3 (week 6-8) Positie en product — bewijs: eindproduct plus verantwoordingsgesprek langs het logboek; AI-rol: gereedschap, maar de positie-paragraaf is aantoonbaar eigen denkwerk.",
        "workspace": {
          "field": "herontwerp-skelet",
          "label": "Mijn herontwerp-skelet",
          "shortLabel": "Herontwerp",
          "hint": "Per fase: doel · bewijsmoment · AI-rol (verboden/gereedschap/onderwerp)",
          "placeholder": "Fase 1 (week ...): doel ... · bewijs ... · AI-rol ...\nFase 2 (week ...): ...\nFase 3 (week ...): ...",
          "rows": 8
        }
      },
      {
        "title": "Draagvlaktoets + kleinste eerste stap",
        "body": "Twee slotvragen. Draagvlak: wie raakt dit herontwerp (collega's die de eenheid mede-uitvoeren, de toetscommissie, de teamleider, het vervolgonderwijs) en wat is per betrokkene het belang dat je moet adresseren? Kleinste eerste stap: welk deel van het herontwerp kun je komende periode als pilot draaien — klein genoeg om geen toestemming-circus te vergen, groot genoeg om iets te bewijzen? Formuleer beide. Het herontwerp is je gespreksstuk; de pilot is je bewijsvoering.",
        "time": "10 min",
        "voorbeeld": "Draagvlak: collega X voert de eenheid mee uit (belang: geen extra nakijkwerk — het logboek-gesprek vervangt nakijktijd, reken het voor); toetscommissie (belang: vergelijkbaarheid — laat zien dat de bewijsmomenten aan dezelfde eindtermen hangen). Kleinste stap: fase 1 als pilot in één klas komende periode — de vraagverdediging van 5 minuten. Kost één lesweek anders inrichten, bewijst of het schaarse doel ('de vraag') trainbaar en toetsbaar is.",
        "workspace": {
          "field": "herontwerp-draagvlak",
          "label": "Draagvlaktoets + eerste stap",
          "shortLabel": "Draagvlak",
          "hint": "Per betrokkene: belang + hoe adresseren · pilot: wat, waar, wanneer, wat bewijst hij",
          "placeholder": "Betrokkene 1: ... — belang: ... — adresseren door: ...\nBetrokkene 2: ...\nKleinste eerste stap (pilot): ... — bewijst: ... — wanneer: ...",
          "rows": 7
        }
      }
    ],
    "workedExamples": [
      {
        "title": "AI de advocaat van het bestaande laten spelen",
        "prompt": "Ik wil de onderwijseenheid [beschrijving + huidige doelen] transformeren omdat [jouw drie-signalen-analyse]. Speel de advocaat van het bestaande ontwerp: geef de vijf sterkste argumenten waarom deze eenheid NIET getransformeerd zou moeten worden, inclusief wat er verloren gaat bij mijn herontwerp en welke risico's ik onderschat. Wees zo scherp als mijn meest ervaren collega zou zijn.",
        "voorbeeldOutput": "1. Je 'instapvaardigheid'-argument veronderstelt dat alle leerlingen AI vlot gebruiken — je zwakste leerlingen kunnen het verslag-bouwen zelf nog niet eens; voor hen schrap je een doel dat ze nooit gehaald hebben. 2. De huidige eenheid traint óók doorzettingsvermogen en projectdiscipline over zes weken; jouw fasemodel met bewijsmomenten knipt dat in stukjes. 3. Je nieuwe doelen (wegen, verantwoorden) zijn moeilijker te beoordelen — verwacht discussie over betrouwbaarheid en cijferdruk. 4. De begeleidingslast verschuift naar gesprekken: heb je geteld of dat rooster-technisch past bij 28 leerlingen? 5. Het vervolgonderwijs-argument is anekdotisch — welke opleiding heeft dit geëist, of vermoed je het?",
        "commentaar": "Dit is de belangrijkste prompt van de les. Transformatieplannen sneuvelen zelden op het ontwerp en bijna altijd op het onbesproken bezwaar — en dit gesprek laat je de bezwaren horen vóór je collega's ze uitspreken. Argument 1 en 4 zijn hier echte ontwerpcorrecties (differentiatie inbouwen; begeleidingstijd doorrekenen), argument 5 is een onderzoeksopdracht. Verwerk wat raakt, noteer je weerwoord op de rest — dat weerwoord ís je voorbereiding op het teamgesprek.",
        "tryItYourself": {
          "field": "herontwerp-we-advocaat",
          "label": "Laat AI jouw herontwerp aanvallen",
          "shortLabel": "Advocaat-test",
          "hint": "Geef eenheid + signalen-analyse mee · vraag de vijf sterkste tegenargumenten · verwerk wat raakt",
          "example": "Speel de advocaat van het bestaande ontwerp: geef de vijf sterkste argumenten waarom mijn eenheid ... NIET getransformeerd moet worden, inclusief wat er verloren gaat."
        }
      },
      {
        "title": "Bewijsmomenten ontwerpen voor een nieuw doel",
        "prompt": "Eén van mijn herijkte doelen is: 'de student weegt AI-output op betrouwbaarheid en bias en documenteert die weging.' Doelgroep: [niveau]. Ontwerp drie verschillende bewijsvormen waarmee ik dit doel valide kan beoordelen, met per vorm: wat ik precies zie, hoe ik onderscheid tussen oppervlakkige en diepe weging, en de tijdsinvestering per student voor mij als beoordelaar.",
        "voorbeeldOutput": "Vorm A — Gewogen logboek: per AI-interactie noteert de student overgenomen/aangepast/verworpen + één regel waarom. Je ziet het wegen zelf. Diep versus oppervlakkig: oppervlakkig is 'klonk goed'; diep verwijst naar een check ('bron klopte niet met mijn methode', 'voorbeeld paste niet bij doelgroep'). Tijd: 5 min per student. Vorm B — Plantingssessie: jij stopt bewust drie gebreken in een AI-output (verzonnen bron, bias, redeneerfout); student krijgt 20 minuten om te vinden en herstellen. Hard bewijs, goed vergelijkbaar. Tijd: opzet eenmalig 1 uur, beoordeling 3 min per student. Vorm C — Weegverdediging: student kiest de AI-output die hij het méést heeft aangepast en verdedigt in 4 minuten waarom. Diepste bewijs, duurste vorm: 6-8 min per student inclusief wissel.",
        "commentaar": "Drie vormen met expliciete tijdsprijs — dat laatste maakt het gesprek met collega's concreet (vorm B is je vriend bij grote klassen, vorm C bij kleine groepen of als steekproef). De plantingssessie is een onderschatte vorm: hij maakt het wegen direct meetbaar en is herbruikbaar over jaren. Combineer: logboek als doorlopende oefening, planting als toets, verdediging als steekproef bij twijfelgevallen.",
        "tryItYourself": {
          "field": "herontwerp-we-bewijs",
          "label": "Ontwerp bewijsvormen voor jouw nieuwe doel",
          "shortLabel": "Eigen bewijsvormen",
          "hint": "Drie vormen · per vorm: wat zie je, diep vs. oppervlakkig, tijdsprijs per student",
          "example": "Eén van mijn herijkte doelen is: '...'. Ontwerp drie bewijsvormen met per vorm: wat ik precies zie, hoe ik diep van oppervlakkig onderscheid, en de tijdsinvestering per student."
        }
      },
      {
        "title": "Het teamgesprek voorbereiden — van herontwerp naar gespreksstuk",
        "prompt": "Ik presenteer mijn herontwerp van [eenheid] aan mijn sectie van zes collega's. Maak van mijn herontwerp [skelet] een gespreksstuk van één A4 dat uitnodigt tot meedenken in plaats van mij verdedigen: open met het gedeelde probleem (niet mijn oplossing), presenteer de doelherijking als voorstel met open vragen, en sluit af met drie beslispunten waar de sectie echt iets over te zeggen heeft. De pilot in mijn eigen klas is al besloten — dat is geen beslispunt, formuleer het als aanbod.",
        "voorbeeldOutput": "**Het probleem dat we allemaal zien** — Bij de laatste ronde [eenheid] kostte het beoordelen meer moeite dan ooit om vast te stellen wat van de leerling was. Drie collega's noemden onafhankelijk hetzelfde: 'ik weet niet meer wat ik aan het beoordelen ben.' Dat is geen handhavingsprobleem; onze doelen stammen uit 2019.\n\n**Voorstel: doelen herijken** — [schrap/behoud/voeg-toe-tabel] — met per regel de vraag: zien jullie dit ook zo?\n\n**Wat ik alvast aanbied** — Komende periode draai ik fase 1 als pilot in mijn 5H-klas en deel de resultaten, wat ze ook zijn.\n\n**Drie beslispunten voor ons** — 1. Herkennen we de doelverschuiving, of zien jullie signalen die ik mis? 2. Welk bewijsmoment vinden jullie het minst werkbaar — en wat is jullie alternatief? 3. Als de pilot iets oplevert: willen we dit dan in [volgend schooljaar] sectiebreed, of eerst een tweede pilot bij een ander?",
        "commentaar": "De structuur doet het werk: probleem vóór oplossing (herkenning eerst), herijking als vraag (mede-eigenaarschap), pilot als aanbod (niemand hoeft iets), beslispunten waar echt iets te beslissen valt (geen schijninspraak). Beslispunt 2 is slim — het nodigt kritiek uit op het minst bedreigende onderdeel en levert je gratis ontwerpverbetering. Eén waarschuwing: als het 'gedeelde probleem' niet echt gedeeld is, valt alles; toets die openingszin eerst bij één collega.",
        "tryItYourself": {
          "field": "herontwerp-we-gespreksstuk",
          "label": "Maak jouw gespreksstuk",
          "shortLabel": "Eigen gespreksstuk",
          "hint": "Probleem eerst · herijking als vraag · pilot als aanbod · drie echte beslispunten",
          "example": "Maak van mijn herontwerp een gespreksstuk van één A4: open met het gedeelde probleem, doelherijking als voorstel met open vragen, pilot als aanbod, drie echte beslispunten."
        }
      }
    ],
    "vakvariaties": [
      {
        "vak": "Talen · vo",
        "body": "De klassieke kandidaat: de schrijfvaardigheidslijn. Niet schrappen — herijken: van 'kan een betoog schrijven' naar 'kan een betoog laten ontstaan en verantwoorden welk deel eigen denkwerk is'. De brief en het verslag worden instapvaardigheid; stem, publiekgerichtheid en revisie-oordeel worden de schaarse doelen."
      },
      {
        "vak": "Zaakvakken · vo",
        "body": "Werkstuk- en presentatie-eenheden zijn transformatie-kandidaat nummer één: informatie verzamelen en ordenen is instapvaardigheid geworden. De herijking gaat richting vraagarticulatie, bronnenkritiek (inclusief AI als bron) en positie innemen — vaardigheden die het vak altijd al bedoelde maar zelden expliciet toetste."
      },
      {
        "vak": "Mbo · beroepsgericht",
        "body": "Hier weegt signaal 3 het zwaarst: hoe werkt het werkveld inmiddels zelf? Bel twee leerbedrijven vóór je herijkt — als de planner, het verslag of de offerte daar al met AI gemaakt wordt, is jouw eenheid die het handmatig aanleert geen vakmanschap maar nostalgie. Let op de kwalificatiedossier-grens: doelen herijken kan binnen de examinering vaak méér dan secties denken, maar check het bij de examencommissie."
      },
      {
        "vak": "Hbo",
        "body": "Beroepsproducten (adviesrapport, onderzoeksverslag, plan van aanpak) zijn bijna allemaal deels instapvaardigheid geworden. De herijking richting 'professional die met AI-systemen samenwerkt en daarvoor verantwoordelijkheid draagt' sluit direct aan op wat werkgevers vragen. Benut de curriculumcommissie en koppel aan de eerstvolgende accreditatieronde — transformatie heeft daar een formele landingsplek."
      },
      {
        "vak": "Exacte vakken · alle sectoren",
        "body": "Wees hier terughoudender met transformatie: conceptuele opbouw (begrip van kracht, verhoudingen, bewijsvoering) blijft grotendeels mens-werk en de doelen staan minder onder druk. De transformatie-kandidaat zit meestal in de praktische opdrachten en onderzoeksverslagen — niet in de leerlijn zelf. Eén goed herontworpen PO is hier meer waard dan een herijkt curriculum."
      }
    ],
    "valkuilen": [
      {
        "titel": "Transformatiedrift — alles moet anders",
        "watGebeurtEr": "Eenmaal door de transformatiebril zie je overal achterhaalde doelen. Je wilt drie eenheden tegelijk omgooien, het team schiet in de weerstand, en ook je sterkste idee sneuvelt in het geweld.",
        "fix": "Eén eenheid, drie signalen, anders niet. En check per doel eerlijk of optimalisatie volstaat — de meeste van je onderwijs is verbouwing, geen verhuizing. Schaarste in je transformaties maakt elke transformatie geloofwaardiger."
      },
      {
        "titel": "Beginnen bij de activiteiten",
        "watGebeurtEr": "'We gaan in periode 3 iets met AI doen' — er komt een hippe opdracht, de doelen blijven oud, en bij de beoordeling wreekt zich dat niemand weet wat er nu eigenlijk geleerd moest worden.",
        "fix": "De volgorde is heilig: doelen herijken, bewijs bepalen, dán activiteiten. Als je je herontwerp niet kunt samenvatten als 'ze moeten nu X kunnen in plaats van Y, en dat zie ik aan Z', ben je te vroeg gaan bouwen."
      },
      {
        "titel": "Nieuwe doelen die geen doelen zijn",
        "watGebeurtEr": "In de toevoeg-kolom verschijnt 'kan goed prompten' of 'kan werken met AI-tools'. Dat zijn gereedschapsvaardigheden die over twee jaar anders heten — je vervangt een verouderd doel door een doel met houdbaarheidsdatum.",
        "fix": "Toets elk nieuw doel op duurzaamheid: gaat het over denken, wegen, verantwoorden, samenwerken — of over een tool? Toolvaardigheden zijn middelen in je activiteiten, geen einddoelen in je eenheid."
      },
      {
        "titel": "De eenzame transformatie",
        "watGebeurtEr": "Jouw herontwerp is briljant en van jou alleen. Collega's voeren het halfslachtig uit of omzeilen het; bij jouw eerste ziekteweek of overstap valt het stil. De eenheid wordt een monument voor wat had gekund.",
        "fix": "Draagvlaktoets vóór uitvoering, gespreksstuk in plaats van presentatie, en de pilot in je eigen klas als bewijs in plaats van overtuigingsmateriaal vooraf. Transformatie die niet deelbaar is, is hem niet."
      },
      {
        "titel": "Herontwerpen zonder de leerling te zien",
        "watGebeurtEr": "Het hele ontwerp redeneert vanuit doelen, werkveld en AI — en vergeet de vijftienjarige die de basisvaardigheid nog niet eens beheerst. Voor de zwakste leerlingen schrap je een doel dat ze nooit haalden en voeg je er een toe dat nog verder weg ligt.",
        "fix": "Loop je herontwerp na met drie gezichten voor ogen: je sterkste, je gemiddelde en je zwakste leerling. Instapvaardigheden blijven voor sommigen leerdoelen — bouw de route ernaartoe in, in plaats van hem weg te definiëren."
      }
    ],
    "geoefendSpoor": {
      "eyebrow": "Voor de geoefende ontwerper",
      "titel": "Van eenheid naar leerlijn — de doorlopende herijking",
      "beschrijving": "Eén herontworpen eenheid is een bewijs; een herijkte leerlijn is een curriculum. Pak na je eerste geslaagde pilot de leerlijn waar je eenheid in zit en herhaal de analyse over de jaren heen: welke doelen verschuiven wanneer van eindvaardigheid naar instapvaardigheid, en hoe bouwt de lijn het schaarse werk (vragen, wegen, verantwoorden) op van jaar één naar het eindniveau? Doe dit niet alleen — dit is bij uitstek de onderzoeksvraag voor een tweede PLG-cyclus (les 5.2) met je sectie.",
      "opdracht": "Lever een leerlijn-herijking op één A3 op: per leerjaar de verschuivende doelen en de opbouw van de nieuwe. Agendeer hem als onderzoeksvraag voor je sectie, niet als blauwdruk — en koppel de borging aan je praktijkopdracht in les 5.6."
    },
    "eindcriteria": [
      {
        "criterium": "Raakvlakanalyse",
        "onder": "Conclusie ('we moeten transformeren') zonder de signalen te toetsen.",
        "op": "Drie signalen expliciet getoetst met concrete observaties; conclusie volgt uit de analyse.",
        "boven": "+ Signaal 3 geverifieerd bij een echte bron (werkveld, vervolgopleiding) in plaats van verondersteld."
      },
      {
        "criterium": "Doelherijking",
        "onder": "Oude doelen plus 'iets met AI' erbij.",
        "op": "Schrappen, behouden en toevoegen alle drie gevuld, per doel één regel argument; toevoeg-doelen zijn duurzaam (denken/wegen/verantwoorden, geen toolvaardigheden).",
        "boven": "+ Herijking getoetst met de advocaat-van-het-bestaande en aantoonbaar bijgesteld."
      },
      {
        "criterium": "Herontwerp",
        "onder": "Activiteiten ontworpen zonder bewijsmomenten, of een weekplanner zonder doelkoppeling.",
        "op": "Skelet met per fase doel, bewijsmoment en expliciete AI-rol; bewijs ontworpen vóór activiteiten.",
        "boven": "+ Bewijsvormen doorgerekend op beoordelaarstijd en gedifferentieerd voor zwakkere leerlingen."
      },
      {
        "criterium": "Draagvlak en eerste stap",
        "onder": "Herontwerp klaar, uitrol 'volgt nog'.",
        "op": "Betrokkenen met belangen in kaart, gespreksstuk-aanpak gekozen, pilot gedefinieerd met wat hij moet bewijzen.",
        "boven": "+ Gespreksstuk getoetst bij één collega en pilot ingepland met datum en klas."
      }
    ],
    "reflection": [
      "Welk doel uit jouw schrap-kolom deed bijna pijn om op te schrijven — en is dat omdat het doel waardevol is, of omdat jíj er goed in bent geworden les in te geven?",
      "De drie signalen kun je ook op je eigen rol toepassen: welk deel van jouw docentschap is door AI instapvaardigheid geworden, en wat is jouw schaarse werk?",
      "Over vijf jaar kijkt iemand naar jouw herontworpen eenheid zoals jij nu naar de oude keek. Welke aanname in je ontwerp zal het eerst verouderen — en hoe maak je de eenheid daarop voorbereid?"
    ],
    "checklist": [
      "Eén eenheid van vier tot tien weken gekozen en de eerlijke huidige bedoeling beschreven",
      "Drie transformatiesignalen getoetst met concrete observaties",
      "Conclusie onderbouwd: optimaliseren of transformeren",
      "Doelen herijkt in drie kolommen — schrappen, behouden, toevoegen — met argumenten",
      "Toevoeg-doelen getoetst op duurzaamheid (geen toolvaardigheden als einddoel)",
      "Herontwerp-skelet klaar: per fase doel, bewijsmoment, AI-rol",
      "Advocaat-van-het-bestaande-gesprek gevoerd en minstens één ontwerpcorrectie doorgevoerd",
      "Draagvlaktoets gedaan: betrokkenen, belangen, gespreksstuk-aanpak",
      "Kleinste eerste stap (pilot) gedefinieerd met datum, klas en wat hij moet bewijzen"
    ],
    "verderLezen": [
      {
        "titel": "AI Competency Framework for Teachers — Create-niveau",
        "bron": "UNESCO",
        "jaar": 2024,
        "link": "https://www.unesco.org",
        "waarom": "Het internationale ijkpunt voor wat je in deze les doet: pedagogische praktijk transformeren in plaats van AI inpassen."
      },
      {
        "titel": "Understanding by Design (backward design)",
        "bron": "Wiggins & McTighe · ASCD",
        "jaar": 2005,
        "link": "https://www.ascd.org",
        "waarom": "Het ontwerpkader onder stap 4: doelen, dan bewijs, dan activiteiten — hier toegepast mét herijkingsstap vooraf."
      },
      {
        "titel": "Curriculum en digitale geletterdheid",
        "bron": "Kennisnet",
        "jaar": 2025,
        "link": "https://www.kennisnet.nl",
        "waarom": "De Nederlandse curriculumcontext waarin jouw herontwerp moet landen — inclusief waar de formele ruimte zit."
      },
      {
        "titel": "AI in het hoger onderwijs en mbo — visie en praktijk",
        "bron": "Npuls",
        "jaar": 2025,
        "link": "https://www.npuls.nl",
        "waarom": "Voor mbo en hbo: hoe instellingen sectorbreed nadenken over wat AI structureel verandert aan opleiden."
      }
    ]
  },
  "check-mod5": {
    "format": "kennischeck",
    "summary": "Tussencheck Module 05. Vijf vragen over AI als leerpartner, teamleren, collega's trainen en onderwijs herontwerpen. Klaar voor effectmeting en de praktijkopdracht: de echte teamsessie.",
    "duration": {
      "total": "12 min",
      "blocks": [
        {
          "label": "5 vragen",
          "min": 8
        },
        {
          "label": "Advies",
          "min": 4
        }
      ]
    },
    "learningGoals": [
      "Je test of de kernconcepten uit 5.1 t/m 5.4 zijn geland: kritische vriend, PLG-anker, statusveilige differentiatie, optimalisatie versus transformatie.",
      "Je herkent de ontwerpfouten die teamleren en teamsessies het vaakst laten stranden.",
      "Je weet of je klaar bent voor de effectmeting (5.5) en de praktijkopdracht (5.6)."
    ],
    "scenario": {
      "title": "Halverwege Module 05",
      "context": "Vijf vragen na de vier dieptelessen 5.1 t/m 5.4. Per vraag directe uitleg. Advies aan het einde: door naar 5.5 of even terug.",
      "role": "Voor jezelf",
      "tools": "Geen"
    },
    "checkTitle": "Even kijken wat is geland tot 5.4.",
    "checkItems": [
      {
        "type": "Meerkeuze · AI als leerpartner",
        "q": "Je wilt AI gebruiken voor reflectie op je eigen les. Wat maakt volgens 5.1 het verschil tussen een 'applausmachine' en een 'kritische vriend'?",
        "options": [
          {
            "label": "De kwaliteit van de AI-tool die je kiest — betere modellen geven kritischere feedback.",
            "explain": "Nee — het verschil zit in jouw instructie, niet in de tool. Elke tool wordt een applausmachine zonder rolinstructie."
          },
          {
            "label": "Jouw inrichting: expliciete rol, een concreet artefact en een normenkader — plus een verbod op advies en complimenten.",
            "explain": "Klopt. De kwaliteit van het professionele gesprek is een ontwerpkeuze van jou, geen toolfeature. Les 5.1 hierover."
          },
          {
            "label": "Hoe vaak je reflecteert — dagelijkse reflectie maakt AI vanzelf kritischer.",
            "explain": "Frequentie helpt je routine, maar verandert niets aan de kwaliteit van één gesprek."
          },
          {
            "label": "Of je de betaalde versie gebruikt.",
            "explain": "Nee. Ook de duurste versie complimenteert je de les uit als je er niet anders om vraagt."
          }
        ],
        "correct": 1
      },
      {
        "type": "Meerkeuze · teamleren",
        "q": "Wat onderscheidt volgens 5.2 een goede PLG-onderzoeksvraag van een zwakke?",
        "options": [
          {
            "label": "Een goede vraag gaat over de nieuwste tools, zodat het team bij blijft.",
            "explain": "Precies andersom — een tool-vraag maakt de PLG tot toolshow. De tool is middel, nooit onderwerp."
          },
          {
            "label": "Een goede vraag is breed genoeg om jaren mee vooruit te kunnen.",
            "explain": "Nee, hij moet juist binnen één cyclus onderzoekbaar zijn in eigen lessen."
          },
          {
            "label": "Een goede vraag gaat over leerlingen of studenten, is onderzoekbaar in eigen lessen binnen één cyclus, en raakt een echte teamzorg.",
            "explain": "Klopt. De vraag is het anker dat de PLG behoedt voor toolshows en vrijblijvende gesprekken."
          },
          {
            "label": "Een goede vraag wordt door de schoolleiding aangereikt, zodat er mandaat is.",
            "explain": "Mandaat is een startvoorwaarde, maar de vraag moet van het team zijn — gekozen, niet opgelegd."
          }
        ],
        "correct": 2
      },
      {
        "type": "Waar of niet waar · collega's trainen",
        "q": "Weerstand tijdens een teamsessie kun je het best wegnemen met sterke argumenten en goede voorbeelden. Waar of niet waar?",
        "options": [
          {
            "label": "Waar — wie de feiten heeft, wint het gesprek.",
            "explain": "Te kort door de bocht: ook als je het debat wint, verandert er niemand van gedrag. De zaal zag een wedstrijd, geen sessie."
          },
          {
            "label": "Niet waar — weerstand is informatie: erken de onderliggende zorg, verscherp hem en buig hem om tot werkmateriaal voor de sessie.",
            "explain": "Klopt. Onder 'het is een hype' zit bijna altijd een legitieme zorg (status, werkdruk, toetsing). Les 5.3 hierover."
          }
        ],
        "correct": 1
      },
      {
        "type": "Meerkeuze · herontwerpen",
        "q": "Een sectie wil een werkstuk-eenheid aanpakken: 'We vervangen het verslag door een AI-chatopdracht, de doelen blijven gelijk.' Wat is dit volgens 5.4?",
        "options": [
          {
            "label": "Transformatie — er wordt immers een AI-werkvorm ingevoerd.",
            "explain": "Nee. Een nieuwe activiteit met oude doelen is geen transformatie — dat onderscheid zit in de doelen, niet in de tools."
          },
          {
            "label": "Backward design — ze beginnen tenslotte bij de opdracht.",
            "explain": "Precies niet: backward design begint bij doelen en bewijs, niet bij de activiteit."
          },
          {
            "label": "Optimalisatie op zijn best, decoratie op zijn slechtst — de doelen zijn niet herijkt, dus de volgorde (doelen → bewijs → activiteiten) is geschonden.",
            "explain": "Klopt. Wie bij de activiteiten begint, bouwt decoratie. Eerst toetsen of doelen instapvaardigheid werden, dan herijken, dan pas ontwerpen."
          },
          {
            "label": "Een prima eerste stap — doelen herijken kan altijd later nog.",
            "explain": "Riskant: een hippe werkvorm op oude doelen wreekt zich bij de beoordeling. De volgorde is heilig."
          }
        ],
        "correct": 2
      },
      {
        "type": "Meerkeuze · transformatiesignalen",
        "q": "Welke drie signalen wijzen er volgens 5.4 op dat een onderwijseenheid transformatie nodig heeft (en geen optimalisatie)?",
        "options": [
          {
            "label": "Leerlingen klagen, cijfers dalen, de methode is verouderd.",
            "explain": "Dat zijn algemene kwaliteitssignalen — ze zeggen niets over wat AI structureel raakt."
          },
          {
            "label": "Het doel werd instapvaardigheid, het denkwerk rond het artefact blijft impliciet, en het werkveld of vervolgonderwijs werkt zelf al structureel anders.",
            "explain": "Klopt. Eén signaal is een gespreksaanleiding; twee of drie samen zijn een ontwerpopdracht."
          },
          {
            "label": "De schoolleiding vraagt erom, er is budget, en een andere school doet het al.",
            "explain": "Externe druk en navolging zijn geen inhoudelijke signalen — zo ontstaat transformatiedrift."
          },
          {
            "label": "AI kan de opdracht maken, leerlingen gebruiken AI stiekem, en surveilleren wordt lastig.",
            "explain": "Dit zijn handhavingssignalen. Die vragen om toets-herontwerp (Module 1/3), niet per se om transformatie van de eenheid."
          }
        ],
        "correct": 1
      }
    ],
    "reflection": [
      "Welke van de vier rollen uit deze module — leerpartner-gebruiker, PLG-ontwerper, trainer, herontwerper — past je nu al, en welke voelt nog als een maatje te groot?",
      "Welk concept uit 5.1–5.4 ga je deze week al toepassen, nog vóór de praktijkopdracht?"
    ],
    "checklist": [
      "Vijf vragen beantwoord — uitleg per antwoord gelezen",
      "Eén concept geselecteerd om deze week toe te passen",
      "Volgende les (5.5 Werkt het? Effect meten) ingepland"
    ]
  },
  "effect-meten": {
    "format": "diepteles",
    "summary": "Je hebt straks een teamsessie gegeven, een PLG gedraaid of een eenheid herontworpen — en dan komt de vraag die bijna niemand stelt: werkte het? Niet als tevredenheidscijfer, maar als verandering in echte lessen. In deze les ontwerp je een lichte effectmeting: je kiest wat je wilt zien veranderen, bepaalt een nulpunt vóór je interventie, en meet op het niveau dat ertoe doet — gedrag in de les, niet applaus na afloop. Licht genoeg om naast je gewone werk te passen, scherp genoeg om je schoolleiding en jezelf eerlijk te informeren.",
    "duration": {
      "total": "50 minuten",
      "blocks": [
        {
          "label": "Aanleiding",
          "min": 5
        },
        {
          "label": "Conceptueel kader",
          "min": 11
        },
        {
          "label": "Effectvraag en succesindicator kiezen",
          "min": 10
        },
        {
          "label": "Meetplan ontwerpen: nulpunt + nameting",
          "min": 14
        },
        {
          "label": "Eerlijkheidscheck + rapportagevorm",
          "min": 10
        }
      ]
    },
    "opening": {
      "eyebrow": "Aanleiding",
      "aanleiding": "De teamsessie was een succes. Dat zei iedereen: goede energie, leuke werkvormen, een 8,1 op het evaluatieformulier. Drie maanden later loop je door de gangen en vraag je je af wat er eigenlijk veranderd is. De startkaarten liggen nog op de stapel bij het kopieerapparaat. Twee collega's doen aantoonbaar iets anders; van de rest weet je het niet. Was de sessie nu een succes of een aangename onderbreking?\n\nDit is het zwarte gat van vrijwel alle professionalisering: we meten tevredenheid op de dag zelf en noemen dat effect. Maar een glimlachend team op vrijdagmiddag zegt niets over de les van dinsdag. Het echte criterium is gedragsverandering in de klas — en die meet bijna niemand, om begrijpelijke redenen: het voelt als onderzoek, onderzoek voelt als veel werk, en wie heeft daar tijd voor?\n\nDeze les breekt die redenering. Effectmeting hoeft geen wetenschappelijk onderzoek te zijn — het moet eerlijk gestructureerd kijken zijn. Drie keuzes maken het licht: je meet één indicator (niet tien), je legt een nulpunt vast vóórdat je interventie plaatsvindt (vijf minuten werk, onbetaalbaar later), en je meet op gedragsniveau met instrumenten die je toch al hebt — een rondvraag, drie lesopzetten, een gesprekje. De opbrengst is dubbel: je weet zelf wat werkt (en kunt bijsturen), en je hebt een verhaal voor je schoolleiding dat sterker is dan een tevredenheidscijfer — zeker als je straks om structurele uren voor borging vraagt.",
      "waaromNu": "Het bekendste kader hier is dat van Kirkpatrick en de doorontwikkeling voor onderwijs door Guskey: professionalisering kun je evalueren op reactie, leren, gedrag en resultaat — en vrijwel al het AI-professionaliseringsaanbod blijft op niveau één steken. Wie als kartrekker kan laten zien dat zijn interventies niveau drie halen (ander gedrag in de les), heeft het sterkste argument dat er bestaat voor structurele tijd en borging — precies wat je in les 5.6 nodig hebt."
    },
    "conceptueel": {
      "eyebrow": "Conceptueel kader",
      "intro": "Het denkraam van deze les komt van Kirkpatrick (vier evaluatieniveaus voor training) en Guskey's onderwijsvertaling. Niveau 1 — reactie: vonden ze het wat? Niveau 2 — leren: kunnen ze na afloop iets dat ze eerst niet konden? Niveau 3 — gedrag: doen ze drie tot zes weken later iets anders in hun les? Niveau 4 — resultaat: merken leerlingen of studenten er iets van? Elk niveau hoger is zwaarder om te meten en zegt meer. De vuistregel voor jou als kartrekker: niveau 1 mag je gratis meenemen, niveau 3 is je doelniveau, en niveau 4 benader je hooguit met één voorzichtige indicator — alles daarboven is onderzoekswerk, geen kartrekkerswerk.\n\nDe tweede pijler is het nulpunt. Zonder voormeting is elke nameting een anekdote: 'zes collega's gebruiken nu AI-feedback' betekent niets als je niet weet of dat er vóór de sessie ook al vijf waren. Een nulpunt hoeft niet meer te zijn dan: vóór je interventie vastleggen wat de huidige stand is op jouw indicator — een rondvraag van drie vragen, een telling, drie lesopzetten opgevraagd. Vijf minuten nu, en het verschil tussen 'ik denk dat het hielp' en 'het aantal collega's dat X doet ging van twee naar zes' bij je teamleider.\n\nDerde pijler: de indicator. Eén goede gedragsindicator is concreet waarneembaar ('gebruikt AI-feedback als voorronde bij minstens één schrijfopdracht'), telbaar of in elk geval vaststelbaar, en redelijkerwijs toe te schrijven aan jouw interventie. Pas op voor twee klassieke vervuilers. Zelfrapportage-optimisme: 'gebruik je AI weleens?' levert sociaal wenselijke ja's — vraag liever naar het laatste concrete voorbeeld ('wat was de laatste keer, wat deed je precies?'). En de nieuwigheids-piek: meet niet één week na je sessie maar drie tot zes weken later, als het nieuwe eraf is en alleen het geborgde overblijft.\n\nTot slot de eerlijkheid die echte meting vraagt: je moet bereid zijn een teleurstellend antwoord te vinden. Een meting die alleen succes kan opleveren, is reclame. Bouw daarom vooraf in wat je bij welke uitkomst doet: bij welk resultaat ga je door op de ingeslagen weg, bij welk resultaat stuur je bij, en welk resultaat zou betekenen dat je aanpak niet werkt? Wie dat vooraf opschrijft, kan achteraf niet sjoemelen met de lat — en juist die eerlijkheid maakt je verhaal naar het team en de schoolleiding geloofwaardig.",
      "mentalModel": {
        "naam": "De thermometer, niet het laboratorium",
        "beschrijving": "Een lichte effectmeting is een thermometer: één indicator, een nulpunt en een meetmoment — genoeg om te weten of de temperatuur stijgt en of ingrijpen nodig is. Het is geen laboratorium: geen controlegroepen, geen significantie, geen pretentie van bewijs. De valkuil is twee kanten op: wie een laboratorium wil bouwen, meet nooit; wie alleen op gevoel vaart, weet nooit. De thermometer is het werkbare midden."
      },
      "kernbegrippen": [
        {
          "term": "Vier evaluatieniveaus",
          "uitleg": "Reactie, leren, gedrag, resultaat (Kirkpatrick/Guskey). Tevredenheid is niveau 1; jouw doelniveau als kartrekker is 3: ander gedrag in de les, drie tot zes weken later."
        },
        {
          "term": "Nulpunt",
          "uitleg": "De stand op jouw indicator vóór de interventie. Vijf minuten werk; zonder nulpunt is elke nameting een anekdote."
        },
        {
          "term": "Gedragsindicator",
          "uitleg": "Eén concreet waarneembare verandering in lesgedrag, telbaar of vaststelbaar. Vraag naar het laatste concrete voorbeeld, niet naar 'gebruik je het weleens' — dat vangt zelfrapportage-optimisme af."
        },
        {
          "term": "Vooraf vastgelegde lat",
          "uitleg": "Vóór de meting opschrijven welk resultaat 'doorgaan', 'bijsturen' of 'werkt niet' betekent. Dat voorkomt sjoemelen met de lat achteraf en maakt je rapportage geloofwaardig."
        }
      ]
    },
    "learningGoals": [
      "Je formuleert één effectvraag op gedragsniveau bij je eigen interventie (teamsessie, PLG of herontwerp).",
      "Je kiest één concrete gedragsindicator en ontwerpt een nulpunt-meting die vóór je interventie uitvoerbaar is in maximaal vijftien minuten.",
      "Je ontwerpt een nameting op drie tot zes weken met een instrument dat naast je gewone werk past.",
      "Je legt vooraf de lat vast: welk resultaat betekent doorgaan, bijsturen of stoppen — en kiest een rapportagevorm voor team en schoolleiding."
    ],
    "scenario": {
      "title": "Werksituatie",
      "context": "Je staat op het punt je teamsessie te geven (les 5.6), of je bent al gestart met een PLG of herontwerp-pilot. De studiedag-evaluatie van school meet zoals altijd alleen tevredenheid. Jij wilt meer: over zes weken kunnen zeggen wat er in de lessen van je collega's daadwerkelijk anders is — voor jezelf, voor het team en voor het gesprek met je schoolleiding over structurele uren. Vandaag ontwerp je die meting, vóórdat je interventie plaatsvindt — want het nulpunt kan straks niet meer.",
      "role": "Kartrekker · ontwerper van de eigen effectmeting",
      "tools": "Je sessieontwerp of PLG-plan · AI-tool als ontwerppartner · agenda voor de meetmomenten"
    },
    "steps": [
      {
        "title": "Formuleer je effectvraag — op gedragsniveau",
        "body": "Vertrek vanuit je interventie en vraag: als dit werkt, wat doet een collega dan over zes weken anders in zijn les? Formuleer dat als effectvraag. Toets jezelf met de niveau-check: gaat je vraag over tevredenheid (niveau 1), kunnen (niveau 2) of doen (niveau 3)? Herschrijf tot hij op niveau 3 zit.",
        "time": "6 min",
        "voorbeeld": "Eerste poging: 'Vonden collega's de sessie bruikbaar?' — niveau 1, weg ermee. Tweede: 'Kunnen collega's na de sessie een opdracht met AI differentiëren?' — niveau 2, beter, maar kunnen is nog geen doen. Definitief: 'Hoeveel collega's zetten zes weken na de sessie minstens één met AI gedifferentieerde of verbeterde opdracht daadwerkelijk in hun les in — en hoe ziet dat eruit?'",
        "workspace": {
          "field": "effect-effectvraag",
          "label": "Mijn effectvraag (niveau 3)",
          "shortLabel": "Effectvraag",
          "hint": "Als mijn interventie werkt, wat dóet een collega dan over zes weken anders in de les?",
          "placeholder": "Mijn interventie: ...\nEffectvraag: ...\nNiveau-check: dit gaat over doen, want ...",
          "rows": 4
        }
      },
      {
        "title": "Kies één gedragsindicator — concreet en vaststelbaar",
        "body": "Maak van je effectvraag één indicator: wat tel of stel je precies vast, bij wie, en hoe omzeil je zelfrapportage-optimisme? De gouden vraag is steeds: 'wat was de laatste keer dat je ..., en wat deed je precies?' — een concreet voorbeeld is moeilijker te flatteren dan een 'ja, regelmatig'. Beperk je tot één indicator; een tweede mag alleen als hij uit hetzelfde instrument rolt.",
        "time": "6 min",
        "voorbeeld": "Indicator: het aantal collega's (van de 14) dat in de afgelopen twee weken minstens één AI-ondersteunde opdracht of feedbackronde in een echte les inzette — vastgesteld via de laatste-keer-vraag, met als bewijs het genoemde concrete voorbeeld. Bijvangst uit hetzelfde gesprek: bij welk lesonderdeel het gebeurde (zegt iets over waar het landt en waar niet).",
        "workspace": {
          "field": "effect-indicator",
          "label": "Mijn gedragsindicator",
          "shortLabel": "Indicator",
          "hint": "Wat tel/stel je vast · bij wie · hoe omzeil je zelfrapportage-optimisme",
          "placeholder": "Indicator: ...\nVaststellen via: ...\nLaatste-keer-vraag: 'Wat was de laatste keer dat je ...?'\nEventuele bijvangst uit hetzelfde instrument: ...",
          "rows": 5
        }
      },
      {
        "title": "Leg het nulpunt vast — vóór je interventie, deze week",
        "body": "Ontwerp je nulpunt-meting: zelfde indicator, zelfde laatste-keer-vraag, uitgevoerd vóór je sessie of PLG-start. Houd hem onder de vijftien minuten totaal — drie vragen in een teamoverleg-rondje, een kort formulier, of vijf gangetjes-gesprekken. Plan hem nu concreet in: datum, vorm, bij wie. Dit is de stap die niet kan wachten; na de interventie bestaat het nulpunt niet meer.",
        "time": "8 min",
        "workspace": {
          "field": "effect-nulpunt",
          "label": "Mijn nulpunt-meting",
          "shortLabel": "Nulpunt",
          "hint": "Zelfde indicator als straks · vorm · datum vóór je interventie · max 15 minuten",
          "placeholder": "Vorm: ...\nDatum (vóór interventie): ...\nBij wie: ...\nDe drie vragen die ik stel: 1. ... 2. ... 3. ...",
          "rows": 5
        }
      },
      {
        "title": "Ontwerp de nameting — drie tot zes weken later",
        "body": "Zelfde instrument, zelfde vragen, drie tot zes weken na je interventie — voorbij de nieuwigheids-piek. Voeg één verdiepingsvraag toe voor wie 'ja' antwoordt ('wat zou je helpen om dit vaker te doen?') en één voor wie 'nee' antwoordt ('wat zat er in de weg?') — die twee antwoorden zijn je bijstuur-materiaal. Plan ook deze datum nu in je agenda, anders verdampt hij in de waan van de periode.",
        "time": "6 min",
        "workspace": {
          "field": "effect-nameting",
          "label": "Mijn nameting",
          "shortLabel": "Nameting",
          "hint": "Zelfde instrument · 3-6 weken na interventie · verdiepingsvraag bij ja én bij nee",
          "placeholder": "Datum (3-6 weken na interventie): ...\nVerdiepingsvraag bij ja: ...\nVerdiepingsvraag bij nee: ...\nIn agenda gezet: ja/nee",
          "rows": 4
        }
      },
      {
        "title": "Leg de lat vooraf vast + kies je rapportagevorm",
        "body": "Schrijf nu — vóór er ook maar iets gemeten is — op welk resultaat wat betekent: bij welke uitkomst ga je door, bij welke stuur je bij (en hoe), en welke uitkomst zou betekenen dat je aanpak niet werkt? Kies daarna je rapportagevorm: hoe deel je de uitkomst met het team (zij leverden de data) en met je schoolleiding (zij beslissen over uren)? Eén A4 of vijf minuten in het teamoverleg volstaat — als het verhaal maar nulpunt, nameting en conclusie bevat, ook als die tegenvalt.",
        "time": "8 min",
        "voorbeeld": "Lat vooraf: nulpunt is naar verwachting 2-3 van de 14. Bij 7+ na zes weken: doorgaan en uitbouwen (tweede sessie). Bij 4-6: bijsturen — kennelijk landt het bij gebruikers maar niet bij starters; gerichte inloopmomenten. Bij ≤3: mijn sessie-aanpak werkt niet voor dit team; terug naar de tekentafel en dat ook eerlijk melden. Rapportage: één A4 naar teamleider met de cijfers plus de twee leerzaamste 'wat zat er in de weg'-antwoorden; vijf minuten terugkoppeling in het teamoverleg.",
        "workspace": {
          "field": "effect-lat",
          "label": "Mijn lat vooraf + rapportagevorm",
          "shortLabel": "Lat + rapportage",
          "hint": "Bij welke uitkomst: doorgaan · bijsturen (hoe) · werkt niet — plus rapportage naar team en leiding",
          "placeholder": "Verwacht nulpunt: ...\nDoorgaan bij: ...\nBijsturen bij: ... — hoe: ...\nWerkt niet bij: ... — en dan: ...\nRapportage team: ...\nRapportage schoolleiding: ...",
          "rows": 7
        }
      }
    ],
    "workedExamples": [
      {
        "title": "Een meetplan laten stresstesten op eerlijkheid",
        "prompt": "Hier is mijn effectmeetplan voor een AI-teamsessie: [effectvraag, indicator, nulpunt, nameting, lat]. Stresstest het op eerlijkheid: (1) kan dit plan überhaupt een teleurstellend resultaat opleveren, of heb ik onbewust naar succes toe ontworpen? (2) Welke alternatieve verklaring zou mijn resultaat straks ook kunnen verklaren (iets anders dan mijn sessie)? (3) Waar is mijn indicator gevoelig voor sociaal wenselijke antwoorden? Per punt: het probleem plus een concrete reparatie.",
        "voorbeeldOutput": "(1) Half eerlijk: je telt collega's die 'minstens één keer' iets inzetten — een lage lat die bijna vanzelf wordt gehaald door de twee die het al deden plus een paar welwillenden. Reparatie: rapporteer naast het aantal ook de verschuiving ten opzichte van het nulpunt per groep (starters/gebruikers), anders maskeren je gevorderden het uitblijven van effect bij de rest. (2) Alternatieve verklaring: in dezelfde periode rolt school een nieuw AI-beleid uit — elke gedragsverandering kan daaraan liggen. Reparatie: vraag in de nameting 'wat bracht je ertoe?' en wees zuinig met claims. (3) De laatste-keer-vraag is goed, maar jij stelt hem zelf — collega's willen jou niet teleurstellen. Reparatie: laat een neutrale collega de rondvraag doen, of maak hem schriftelijk en anoniem met het concrete voorbeeld als verplicht veld.",
        "commentaar": "De drie stresstest-vragen — kan het tegenvallen, wat verklaart het nog meer, waar zit de wenselijkheid — zijn de hele methodologie die een kartrekker nodig heeft, in drie zinnen. Reparatie 1 (per groep rapporteren) is hier de waardevolste: gemiddelden verbergen precies de informatie waarop je wilt bijsturen. Neem niet alles over; elke reparatie kost meetlast, en de thermometer moet licht blijven. Kies de één of twee die jouw zwakste plek dekken.",
        "tryItYourself": {
          "field": "effect-we-stresstest",
          "label": "Stresstest jouw meetplan",
          "shortLabel": "Eigen stresstest",
          "hint": "Drie vragen: kan het tegenvallen · alternatieve verklaring · sociale wenselijkheid — per punt een reparatie",
          "example": "Stresstest mijn effectmeetplan op eerlijkheid: (1) kan dit een teleurstellend resultaat opleveren? (2) welke alternatieve verklaring verklaart mijn resultaat ook? (3) waar is mijn indicator gevoelig voor sociaal wenselijke antwoorden?"
        }
      },
      {
        "title": "Van ruwe meetdata naar een eerlijk A4",
        "prompt": "Mijn nulpunt: 3 van de 14 collega's zetten AI in de les in. Nameting na vijf weken: 7 van de 14, maar: van de 4 nieuwe zijn er 3 'gebruikers' die al dichtbij stonden, en van de 3 starters doet er 0 iets. De 'wat zat in de weg'-antwoorden: 'geen tijd gehad' (4x), 'wist niet meer precies hoe' (2x), 'wacht op duidelijkheid over wat mag' (3x). Schrijf hiervan een eerlijke rapportage van één A4 voor mijn teamleider: cijfers, duiding, en wat ik nu ga doen — zonder het mooier of slechter te maken dan het is.",
        "voorbeeldOutput": "**Wat ik mat** — Vóór de sessie zetten 3 van 14 collega's AI in hun les in; vijf weken erna zijn dat er 7. **Eerlijke duiding** — De groei zit vrijwel volledig bij collega's die er al dichtbij stonden; van de drie echte starters doet nog niemand iets. De sessie verlaagde de drempel voor wie al wilde, maar nam de drempel van de starters niet weg. **Wat de niet-gebruikers zeggen** — 'Wist niet meer hoe' (2x) en 'wacht op duidelijkheid over wat mag' (3x) zijn oplosbaar; dat tweede ligt deels buiten mij. **Wat ik doe** — (1) Twee korte inloopmomenten gericht op de starters, met de startkaarten erbij. (2) De 'wat mag'-vraag leg ik bij jou: een teamlijn van vijf regels zou drie collega's over de streep helpen. **Volgende meting** — Zelfde rondvraag in week 12; ik rapporteer dan ook per groep.",
        "commentaar": "Let op wat dit A4 niet doet: het claimt geen '133% groei' en verzwijgt evenmin dat de starters stilstaan. De duiding per groep is de eerlijkheid die het verhaal sterk maakt — en de 'wat mag'-bevinding wordt een concrete vraag áán de teamleider, waarmee de rapportage meteen een gesprek over randvoorwaarden opent. Precies zo werkt een lichte meting als hefboom voor borging: niet door succes te bewijzen, maar door precies te laten zien waar het stokt en wat dat kost om op te lossen.",
        "tryItYourself": {
          "field": "effect-we-rapportage",
          "label": "Schrijf jouw (proef)rapportage",
          "shortLabel": "Eigen rapportage",
          "hint": "Cijfers · eerlijke duiding per groep · wat jij doet · wat je van de leiding vraagt",
          "example": "Schrijf van mijn meetresultaten [nulpunt, nameting, in-de-weg-antwoorden] een eerlijke rapportage van één A4: cijfers, duiding, wat ik nu ga doen — zonder het mooier of slechter te maken."
        }
      }
    ],
    "vakvariaties": [
      {
        "vak": "Na een teamsessie · vo/mbo",
        "body": "De standaardcasus uit deze les: indicator op lesgedrag van collega's, nulpunt vóór de sessie, nameting na vier à vijf weken. Combineer met het tevredenheidsformulier dat school toch al afneemt — niveau 1 gratis meenemen, niveau 3 zelf organiseren."
      },
      {
        "vak": "Na een PLG-cyclus",
        "body": "De PLG meet zichzelf bijna: de experimenten-terugkoppelingen zijn je data. De effectvraag verschuift naar ná de cyclus: doen deelnemers drie maanden na bijeenkomst 4 nog iets met wat de PLG opleverde? Dat is de borgingsmeting die bijna niemand doet — en die het verschil tussen een leuk halfjaar en een veranderde praktijk zichtbaar maakt."
      },
      {
        "vak": "Na een herontwerp-pilot (les 5.4)",
        "body": "Hier mag je voorzichtig richting niveau 4: wat merken leerlingen? Eén indicator uit bestaand materiaal — de kwaliteit van onderzoeksvragen vóór en na, het soort revisies in schrijfwerk — naast je gedragsindicator bij collega's. Pretendeer geen causaliteit; rapporteer als 'eerste signalen'."
      },
      {
        "vak": "Bovenschools of bestuurlijk niveau",
        "body": "Meet je over meerdere teams of scholen, standaardiseer dan je laatste-keer-vraag en rapporteer per team, nooit per persoon. De vergelijking tussen teams ('waarom landt het bij team A wel?') is op dit niveau de interessantste uitkomst — en politiek het gevoeligst. Deel teamcijfers eerst met het team zelf."
      },
      {
        "vak": "Solo — je eigen verandering meten",
        "body": "De lichtste variant: meet je eigen gedragsverandering na les 5.1. Nulpunt: hoe vaak reflecteerde je gestructureerd in de afgelopen maand? Nameting na zes weken via je bewaardocument. Wie het meten eerst op zichzelf oefent, ontwerpt straks betere metingen voor het team."
      }
    ],
    "valkuilen": [
      {
        "titel": "Tevredenheid meten en het effect noemen",
        "watGebeurtEr": "De 8,1 van het evaluatieformulier gaat als 'succes' naar de schoolleiding. Drie maanden later is er niets veranderd, de uren worden niet verlengd, en het eerlijke verhaal kan niet meer verteld worden zonder de 8,1 te ontkrachten.",
        "fix": "Noem niveau 1 wat het is: een sfeerbeeld. Rapporteer altijd met de niveau-taal erbij ('tevredenheid was hoog; of het lesgedrag verandert, meet ik in week zes') — dan heb je later geen geloofwaardigheidsprobleem."
      },
      {
        "titel": "Het nulpunt vergeten",
        "watGebeurtEr": "Pas na de sessie bedenk je dat je wilt meten. 'Zes collega's doen nu iets met AI' — maar niemand weet hoeveel het er vóór waren, en je verhaal blijft voorgoed een anekdote.",
        "fix": "Nulpunt vóór interventie is de ijzeren regel — daarom zit deze les vóór de praktijkopdracht. Vijftien minuten, drie vragen, deze week. Geen nulpunt kunnen vastleggen? Reconstrueer het dan expliciet ('bij navraag deden er vooraf twee iets') en benoem de zwakte."
      },
      {
        "titel": "Te veel willen meten",
        "watGebeurtEr": "Vijf indicatoren, twee vragenlijsten, een observatieschema — het meetplan is een onderzoeksproject geworden. Na week twee geef je het op, en er is helemaal geen meting meer.",
        "fix": "Eén indicator, twee meetmomenten, instrumenten van maximaal vijftien minuten. De thermometer, niet het laboratorium. Alles wat je extra wilt weten, vang je in de twee verdiepingsvragen van de nameting."
      },
      {
        "titel": "Meten zonder lat",
        "watGebeurtEr": "De uitkomst is 5 van de 14 — en nu? Zonder vooraf vastgelegde lat wordt elke uitkomst achteraf 'best aardig' gepraat, of juist somber geduid op een slechte dag. De meting stuurt niets bij.",
        "fix": "Vóór de meting opschrijven: doorgaan bij ..., bijsturen bij ..., werkt-niet bij ... Inclusief wat je dan dóet. De lat mag je achteraf beargumenteerd verleggen — maar dan zichtbaar, niet stiekem."
      },
      {
        "titel": "Resultaten verzamelen en niemand vertellen",
        "watGebeurtEr": "De meting is gedaan, het inzicht is er — en het blijft in jouw map. Het team dat de data leverde hoort niets terug, en bij de volgende rondvraag is de respons ernaar.",
        "fix": "Rapportage is onderdeel van het meetplan, niet een nazorgklusje: vijf minuten in het teamoverleg (wat jullie zeiden, wat ik ermee doe) en één A4 naar de schoolleiding. Wie terugkoppelt, mag nog eens meten."
      }
    ],
    "geoefendSpoor": {
      "eyebrow": "Voor de geoefende kartrekker",
      "titel": "Bouw een doorlopende teamthermometer",
      "beschrijving": "Eén meting rond één interventie is goed; een terugkerend ritme is beter. Bouw je laatste-keer-rondvraag uit tot een teamthermometer die drie keer per jaar draait — zelfde drie vragen, zelfde vorm, tien minuten per keer. Na een jaar heb je iets dat bijna geen school heeft: een longitudinaal beeld van hoe AI-praktijk in jouw team landt, dat elke nieuwe interventie van een nulpunt voorziet en elke borgingsdiscussie van data. Koppel hem aan vaste teammomenten (start, midden, einde schooljaar) zodat hij geen apart project wordt.",
      "opdracht": "Ontwerp de teamthermometer (drie vaste vragen, drie vaste momenten, één vaste rapportagevorm) en leg hem voor aan je teamleider met het voorstel hem een jaar te draaien. Lever na de eerste ronde de eerste meting plus het format op."
    },
    "eindcriteria": [
      {
        "criterium": "Effectvraag",
        "onder": "Vraag op tevredenheids- of kennisniveau ('vonden ze het nuttig', 'snappen ze het').",
        "op": "Vraag op gedragsniveau: wat doet een collega over drie tot zes weken anders in de les.",
        "boven": "+ Aangevuld met één voorzichtige niveau-4-indicator uit bestaand leerlingmateriaal."
      },
      {
        "criterium": "Indicator en nulpunt",
        "onder": "Vage indicator ('meer AI-gebruik') of geen voormeting.",
        "op": "Eén concrete, vaststelbare indicator met laatste-keer-vraag; nulpunt ingepland vóór de interventie, max vijftien minuten.",
        "boven": "+ Indicator afgeschermd tegen sociale wenselijkheid (anoniem, neutrale vrager of verplicht concreet voorbeeld)."
      },
      {
        "criterium": "Nameting",
        "onder": "Geen gepland tweede meetmoment, of meting in de week na de interventie.",
        "op": "Zelfde instrument, drie tot zes weken later, met verdiepingsvraag bij ja én nee; datum staat in de agenda.",
        "boven": "+ Resultaten worden per subgroep (starters/gebruikers/gevorderden) geduid, niet alleen als totaal."
      },
      {
        "criterium": "Lat en rapportage",
        "onder": "Meten zonder vooraf te bepalen wat de uitkomst betekent.",
        "op": "Lat vooraf vastgelegd (doorgaan/bijsturen/werkt-niet, met acties) en rapportagevorm gekozen voor team én schoolleiding.",
        "boven": "+ Meetplan gestresstest op eerlijkheid en op minstens één punt gerepareerd."
      }
    ],
    "reflection": [
      "Welke uitkomst van je meting zou je het liefst níet vinden — en wat zegt je antwoord over hoe eerlijk je lat staat?",
      "Je vraagt collega's straks naar hun lesgedrag. Wat doet dat met de verhoudingen — wanneer wordt gestructureerd kijken gestructureerd controleren, en hoe bewaak jij die grens?",
      "Stel: de meting laat zien dat jouw geliefde aanpak niet werkt voor de helft van het team. Wat is dan waardevoller geworden — je aanpak of je meting? En wat vertel je in het teamoverleg?"
    ],
    "checklist": [
      "Effectvraag geformuleerd op gedragsniveau (niveau 3)",
      "Eén concrete gedragsindicator gekozen met laatste-keer-vraag",
      "Nulpunt-meting ontworpen (max 15 minuten) en ingepland vóór de interventie",
      "Nameting ingepland op drie tot zes weken, met verdiepingsvraag bij ja én nee",
      "Lat vooraf vastgelegd: doorgaan / bijsturen / werkt-niet, inclusief acties",
      "Meetplan gestresstest op eerlijkheid (tegenvallen mogelijk, alternatieve verklaringen, wenselijkheid)",
      "Rapportagevorm gekozen voor team en schoolleiding",
      "Beide meetdata in de agenda gezet"
    ],
    "verderLezen": [
      {
        "titel": "Evaluating Professional Development",
        "bron": "Guskey · Corwin Press",
        "jaar": 2000,
        "link": "https://tguskey.com",
        "waarom": "De onderwijsvertaling van de evaluatieniveaus — het denkraam achter je effectvraag, geschreven voor scholen in plaats van bedrijfsopleidingen."
      },
      {
        "titel": "Effective Teacher Professional Development",
        "bron": "Darling-Hammond e.a. · Learning Policy Institute",
        "jaar": 2017,
        "link": "https://learningpolicyinstitute.org",
        "waarom": "Onderbouwt waarom eenmalige sessies zonder follow-up zelden niveau 3 halen — munitie voor je borgingsgesprek."
      },
      {
        "titel": "Monitoring en evaluatie van digitalisering in het onderwijs",
        "bron": "Kennisnet",
        "jaar": 2025,
        "link": "https://www.kennisnet.nl",
        "waarom": "Nederlandse handvatten en instrumenten voor het volgen van digitale verandering op school- en teamniveau."
      },
      {
        "titel": "AI Competency Framework for Teachers",
        "bron": "UNESCO",
        "jaar": 2024,
        "link": "https://www.unesco.org",
        "waarom": "Het Create-niveau vraagt expliciet om evalueren en verbeteren van de eigen AI-praktijk — deze meting is daar jouw bewijsstuk voor."
      }
    ]
  },
  "praktijkopdracht-5": {
    "format": "praktijkopdracht",
    "summary": "Module 05 sluit af zoals een Create-module hoort af te sluiten: niet met een plan maar met een uitvoering. Je verzorgt een echte sessie voor echte collega's — als introductiesessie, verdiepingsworkshop of PLG-start — en levert er een borgingsplan bij dat regelt wat er ná jou en ná de sessie gebeurt. Zeven deliverables, effectmeting met nulpunt en nameting, peer review door een mede-kartrekker, en een borgingshaak op vier weken. Het bewijs van deze module zit niet in jouw sessie — het zit in wat jouw team daarna blijft doen.",
    "duration": {
      "total": "3 uur (excl. de sessie zelf)",
      "blocks": [
        {
          "label": "Pad kiezen + sessieontwerp afronden",
          "min": 45
        },
        {
          "label": "Nulpunt meten + generale repetitie",
          "min": 30
        },
        {
          "label": "Borgingsplan schrijven",
          "min": 35
        },
        {
          "label": "Peer review aanvragen + verwerken",
          "min": 30
        },
        {
          "label": "Uitvoering teamsessie (eigen agenda)",
          "min": 0
        },
        {
          "label": "Nameting + reflectie",
          "min": 25
        },
        {
          "label": "Borgingshaak — vier weken later",
          "min": 15
        }
      ]
    },
    "opening": {
      "eyebrow": "Aanleiding",
      "aanleiding": "Alles uit deze module komt nu samen in één productie met publiek. In 5.1 leerde je AI inzetten voor je eigen groei, in 5.2 ontwierp je een PLG-cyclus, in 5.3 een collega-sessie, in 5.4 herontwierp je een onderwijseenheid en in 5.5 een effectmeting. De praktijkopdracht vraagt het echte werk: verzorg een sessie voor je echte team, meet wat hij teweegbrengt, en — het onderdeel dat deze opdracht zwaarder en waardevoller maakt dan een geslaagde middag — lever een borgingsplan op dat regelt wat er doorgaat als de sessie voorbij is en als jij er niet meer aan trekt.\n\nDrie paden, passend bij waar jouw team staat. Pad A — introductiesessie: je team staat aan het begin en jij verzorgt de sessie die iedereen met één eigen product op weg helpt. Pad B — verdiepingsworkshop: je team gebruikt AI al en jij tilt een deelthema naar Create-niveau (toetsing herontwerpen, differentiëren, een vakwerkplan AI-bestendig maken). Pad C — PLG-start: je lanceert de eerste bijeenkomst van een doorlopende onderzoekscyclus volgens je ontwerp uit 5.2. De sessie verschilt per pad; de eisen eromheen zijn gelijk: nulpunt vooraf, nameting na drie tot zes weken, peer review door een mede-kartrekker, en een borgingsplan dat de drie klassieke sterfgevallen afdekt — de kartrekker valt weg, de uren verdampen, het materiaal raakt zoek.\n\nBewijs van leren zit dus op drie plekken. In je team: wat doen collega's drie tot zes weken later aantoonbaar anders? In je organisatie: liggen er afspraken (uren, momenten, eigenaarschap) die het vervolg dragen? En in jou: een reflectie van 250 woorden over wat het kartrekkerschap met je deed — inclusief het eerlijke antwoord op de vraag of jouw team na deze sessie minder van jou afhankelijk is geworden, of juist meer.",
      "waaromNu": "Darling-Hammond e.a. (2017) zijn helder: eenmalige professionalisering zonder follow-up verandert vrijwel niets. Het verschil tussen een geslaagde studiedag en een veranderde teampraktijk zit in precies de elementen die deze opdracht verplicht stelt — effectmeting op gedragsniveau, een gepland vervolg en geborgd eigenaarschap. Met de AI-geletterdheidseis uit de AI Act wordt dit bovendien organisatiebelang: scholen moeten kunnen laten zien dat hun team duurzaam bekwaam wordt, niet eenmalig geïnformeerd."
    },
    "scenario": {
      "title": "Werksituatie",
      "context": "Je hebt Module 05 doorlopen en de bouwstenen liggen klaar: een sessieontwerp (5.3 of 5.2), een effectmeetplan (5.5) en zicht op wat je team nodig heeft. Nu voer je uit: een echte sessie met je echte team, op een echt moment in de jaaragenda. Geen oefenmodus — een mede-kartrekker reviewt je ontwerp vooraf, je teamleider ontvangt het borgingsplan, en over vier weken kijk je met de borgingshaak of er iets is blijven staan.",
      "role": "Kartrekker · trainer en borger van AI-bekwaamheid in het eigen team",
      "tools": "Je uitwerkingen uit 5.1 t/m 5.5 · AI-tool naar keuze (school-account) · één mede-kartrekker of ervaren collega als reviewer · je team en teamleider"
    },
    "praktijkTitle": "Kies één pad. Lever zeven deliverables. Verzorg de sessie. Vier weken later: borgingshaak.",
    "praktijkIntro": "Drie paden, één doel: een teamsessie die niet eindigt bij applaus maar begint bij borging. Per pad een ander sessietype, passend bij waar jouw team staat. Voor alle paden gelijke effectmeting, gelijke peer review en gelijke borgingshaak.",
    "paths": [
      {
        "id": "a",
        "label": "Pad A — introductiesessie: je team zet de eerste stap",
        "beschrijving": "Voor teams die aan het begin staan. Je verzorgt een sessie van 90 minuten volgens je ontwerp uit 5.3: praktijk binnen 30 minuten, startkaarten op drie niveaus, weerstandsscenario's paraat. Iedere deelnemer vertrekt met één eigen lesproduct en kent het vervolg. Jouw borgingsplan regelt de landingsbaan: inloopmomenten, vindplaats van materiaal, en wie er naast jou aanspreekpunt wordt. Sluit aan op 5.3 (sessieontwerp) en 5.5 (effectmeting).",
        "deliverables": [
          "Pad A gekozen + teamfoto van max 80 woorden: samenstelling, startniveaus, verwachte weerstand — en waarom een introductiesessie nu past",
          "Compleet draaiboek 90 minuten (uit 5.3, bijgesteld): blokken, werkvormen, startkaarten op drie niveaus, drie weerstandsscenario's",
          "Nulpunt-meting uitgevoerd vóór de sessie (indicator + laatste-keer-vraag uit 5.5) — resultaat in drie regels",
          "Borgingsplan van max 2 A4: vervolgmomenten met data, vindplaats materiaal, tweede aanspreekpunt, afspraak met teamleider over uren — afgedekt tegen de drie sterfgevallen",
          "Peer-feedback van één mede-kartrekker op de drie review-vragen, plus jouw revisies vóór de sessie",
          "Sessie uitgevoerd + nameting na drie tot zes weken — resultaat naast nulpunt en vooraf vastgelegde lat, gerapporteerd op één A4 aan teamleider",
          "Reflectie van 250 woorden: wat deed het team tijdens en ná de sessie, wat zegt de meting over jouw aanpak, en is het team nu minder of meer van jou afhankelijk"
        ]
      },
      {
        "id": "b",
        "label": "Pad B — verdiepingsworkshop: je team gaat van gebruiken naar maken",
        "beschrijving": "Voor teams die AI al gebruiken maar blijven hangen in losse trucs. Je ontwerpt een workshop van 90-120 minuten rond één verdiepingsthema dat jouw team nu nodig heeft — toetsing herontwerpen, differentiëren met AI, een vakwerkplan AI-bestendig maken, of de doelherijking uit 5.4 als sectie-werkvorm. Het team maakt tijdens de workshop samen iets dat blijft: een afsprakenset, een herontworpen opdrachtenserie, een gezamenlijke promptbibliotheek. Sluit aan op 5.3 (sessieontwerp), 5.4 (herontwerp-denken) en 5.5 (effectmeting).",
        "deliverables": [
          "Pad B gekozen + themakeuze van max 80 woorden: welk verdiepingsthema, en welk signaal uit je team maakt dit thema nú urgent",
          "Workshopontwerp 90-120 minuten met als hart een maakblok: het team produceert samen één blijvend product (afsprakenset, opdrachtenserie, promptbibliotheek) — inclusief differentiatie voor de niveauverschillen die ook in een gevorderd team bestaan",
          "Nulpunt-meting uitgevoerd vóór de workshop (indicator past bij het thema, bijv. 'hoeveel collega's passen X nu toe') — resultaat in drie regels",
          "Borgingsplan van max 2 A4 met extra aandacht voor het teamproduct: wie beheert het, hoe wordt het bijgehouden, wanneer wordt het herzien — plus de drie sterfgevallen afgedekt",
          "Peer-feedback van één mede-kartrekker op de drie review-vragen, plus jouw revisies vóór de workshop",
          "Workshop uitgevoerd + nameting na drie tot zes weken — gebruikt het team het gezamenlijke product daadwerkelijk? Gerapporteerd op één A4 aan teamleider",
          "Reflectie van 250 woorden: hield het teamproduct stand in de praktijk, wat zegt dat over de maakkwaliteit van de workshop, en wat herontwerp je voor een volgende keer"
        ]
      },
      {
        "id": "c",
        "label": "Pad C — PLG-start: je lanceert een doorlopende onderzoekscyclus",
        "beschrijving": "Voor wie het grootste durft: geen eenmalige sessie maar de aftrap van de PLG-cyclus die je in 5.2 ontwierp. Je verzorgt bijeenkomst 1 — het team kiest de onderzoeksvraag en ieder vertrekt met een mini-experiment — en je borgt de hele cyclus: vier data in de agenda, levend document opgezet, rolverdeling geregeld. Dit pad heeft de langste adem en de hoogste opbrengst: als het werkt, heb je geen sessie gegeven maar een leerstructuur gestart. Sluit aan op 5.2 (PLG-ontwerp), 5.3 (werkvormen en weerstand) en 5.5 (effectmeting).",
        "deliverables": [
          "Pad C gekozen + startverantwoording van max 80 woorden: waarom is dit team toe aan een PLG, en wat is je bewijs dat de startvoorwaarden (tijd, mandaat, veiligheid) geregeld zijn",
          "Compleet cyclusontwerp uit 5.2, bijgesteld: vier bijeenkomsten met doel, werkvorm en experiment-opdracht, plus kandidaat-onderzoeksvragen voor de teamkeuze",
          "Draaiboek bijeenkomst 1 (60 min): vraagkeuze-werkvorm, mini-experiment-ontwerp, en hoe de kritische collega's als onderzoekers binnenkomen",
          "Nulpunt-meting uitgevoerd vóór bijeenkomst 1 — resultaat in drie regels — plus het levende document opgezet met format van vijf regels per experiment",
          "Borgingsplan van max 2 A4 met de cyclus als kern: vier data bevestigd in de teamagenda, rolverdeling vanaf bijeenkomst 2, opvolg-trekker benoemd, afspraak over waar de oogst van bijeenkomst 4 landt",
          "Peer-feedback van één mede-kartrekker op de drie review-vragen, plus jouw revisies vóór bijeenkomst 1",
          "Bijeenkomst 1 uitgevoerd + tussenmeting na bijeenkomst 2: hoeveel teamleden voerden hun mini-experiment daadwerkelijk uit? Gerapporteerd op één A4, plus reflectie van 250 woorden: koos het team echt zelf, of koos jij via het team — en waaraan zie je dat"
        ]
      }
    ],
    "peerReview": {
      "title": "Mede-kartrekker-feedback in drie vragen",
      "intro": "Vraag één mede-kartrekker, opleider of ervaren collega (liefst van buiten je eigen team) om binnen drie werkdagen je sessieontwerp én borgingsplan te reviewen. Geen rubric, geen oordeel — concrete observaties langs drie vragen, vóór je uitvoering.",
      "questions": [
        {
          "vraag": "Stel je voor dat jij deelnemer bent in dit team, op het startniveau dat het minst aan bod komt: waar in dit sessieontwerp haak jij af — en wat zou jou erbij houden?",
          "workspace": {
            "field": "po5-review-vraag-1",
            "label": "Antwoord reviewer op vraag 1 + wat jij ermee doet",
            "shortLabel": "Review vraag 1",
            "hint": "Welk afhaakmoment ziet de reviewer · welke aanpassing doe jij vóór de sessie",
            "placeholder": "Reviewer ziet afhaakrisico bij: ...\nWat ik aanpas vóór de sessie: ...",
            "rows": 5
          }
        },
        {
          "vraag": "Lees het borgingsplan met de blik van een teamleider die over een jaar bezuinigt: welke afspraak is zo zacht geformuleerd dat hij als eerste sneuvelt — en hoe maak je hem hard?",
          "workspace": {
            "field": "po5-review-vraag-2",
            "label": "Antwoord reviewer op vraag 2 + wat jij ermee doet",
            "shortLabel": "Review vraag 2",
            "hint": "Welke zachte afspraak benoemt de reviewer · hoe maak je hem hard (data, namen, besluit)",
            "placeholder": "Zachtste afspraak volgens reviewer: ...\nHoe ik hem hard maak: ...",
            "rows": 5
          }
        },
        {
          "vraag": "Wat in dit plan leunt op jou als persoon in plaats van op een structuur — en wat gebeurt er met de sessie-opbrengst als jij in oktober uitvalt?",
          "workspace": {
            "field": "po5-review-vraag-3",
            "label": "Antwoord reviewer op vraag 3 + wat jij ermee doet",
            "shortLabel": "Review vraag 3",
            "hint": "Welke persoonsafhankelijkheid ziet de reviewer · welke structuur of tweede persoon zet jij ervoor in de plaats",
            "placeholder": "Leunt op mij als persoon: ...\nStructuur of tweede persoon die ik regel: ...",
            "rows": 5
          }
        }
      ]
    },
    "transferhaak": {
      "title": "Borgingshaak — vier weken later",
      "intro": "Een borgingsplan is papier tot het getoetst wordt. Plan nu een controlemoment vier weken na je sessie: vijftien minuten waarin je drie dingen checkt — staat het eerstvolgende vervolgmoment nog en is het bezocht, is het materiaal of teamproduct vindbaar en gebruikt, en heeft het tweede aanspreekpunt (of de opvolg-trekker) iets te doen gehad? Wat niet door deze check komt, repareer je binnen een week of je schrapt het eerlijk uit het plan — een borgingsplan met dode afspraken is erger dan een kort plan dat klopt.",
      "workspace": {
        "field": "po5-borgingshaak",
        "label": "Mijn borgingshaak voor vier weken later",
        "shortLabel": "Borgingshaak",
        "hint": "Datum · de drie checks · wat je doet bij elke gesneuvelde afspraak: repareren of eerlijk schrappen",
        "placeholder": "Datum (4 weken na sessie): ...\nCheck 1 — vervolgmoment staat en is bezocht: ...\nCheck 2 — materiaal/teamproduct vindbaar en gebruikt: ...\nCheck 3 — tweede aanspreekpunt heeft een rol gehad: ...\nBij sneuvelen: repareer ik door ... / schrap ik en meld dat aan ...",
        "rows": 8
      }
    },
    "reflection": [
      "Op welk moment tijdens de sessie week je af van je draaiboek — en was dat vakmanschap (je las de zaal) of vluchtgedrag (je ontweek het lastige moment)? Hoe weet je het verschil?",
      "Vergelijk je nameting met je vooraf vastgelegde lat uit 5.5: wat zegt de uitkomst over je sessie, en wat zegt je eerste reactie op de uitkomst over jou als kartrekker?",
      "De kern van borging is jezelf misbaar maken. Wat heb je deze opdracht concreet overgedragen — aan een structuur, een document of een collega — en wat hield je (eerlijk) nog bij jezelf? Wat is je volgende overdracht, en wanneer?"
    ],
    "checklist": [
      "Pad (A, B of C) gekozen en gemotiveerd binnen het woordmaximum",
      "Sessieontwerp compleet en gestresstest (tijd, status, gevorderden, scepsis)",
      "Nulpunt-meting uitgevoerd vóór de sessie — resultaat genoteerd",
      "Borgingsplan van max 2 A4 klaar: de drie sterfgevallen (kartrekker, uren, materiaal) afgedekt",
      "Peer review door mede-kartrekker ontvangen en verwerkt vóór uitvoering",
      "Sessie uitgevoerd op een echt teammoment",
      "Nameting na drie tot zes weken uitgevoerd en naast nulpunt en lat gelegd",
      "Eén-A4-rapportage gedeeld met teamleider én teruggekoppeld aan het team",
      "Reflectie van 250 woorden afgerond, gericht op wat het team blijvend doet",
      "Borgingshaak op vier weken in de agenda — repareren of eerlijk schrappen",
      "AVG-check: meetdata geanonimiseerd, geen herleidbare collega-gegevens in inleverstukken of AI-gesprekken"
    ],
    "verderLezen": [
      {
        "titel": "Effective Teacher Professional Development",
        "bron": "Darling-Hammond e.a. · Learning Policy Institute",
        "jaar": 2017,
        "link": "https://learningpolicyinstitute.org",
        "waarom": "Het bewijs achter de hele opdracht: follow-up, collega-feedback en duur maken het verschil tussen een geslaagde middag en een veranderde praktijk."
      },
      {
        "titel": "AI Competency Framework for Teachers — Create-niveau",
        "bron": "UNESCO",
        "jaar": 2024,
        "link": "https://www.unesco.org",
        "waarom": "Deze praktijkopdracht is je portfolio-bewijs voor de dimensie 'AI for professional learning' op het hoogste niveau: je ontwikkelt niet alleen jezelf, je bouwt leerstructuren voor anderen."
      },
      {
        "titel": "Professionalisering en duurzame inzetbaarheid in het vo",
        "bron": "Voion",
        "jaar": 2025,
        "link": "https://www.voion.nl",
        "waarom": "Ondersteunt het gesprek met je schoolleiding over structurele uren — de hardste afspraak in elk borgingsplan."
      },
      {
        "titel": "AI-GO! Raamwerk voor AI-geletterdheid",
        "bron": "Npuls",
        "jaar": 2025,
        "link": "https://www.npuls.nl",
        "waarom": "Gebruik de vier dimensies als eindcheck op je sessie: train je alleen vaardigheden, of ook kennis, attitudes en ethisch bewustzijn?"
      }
    ]
  },
};

// Merge batch-content over base. Batch-entries vervangen base-entries met
// dezelfde slug (batch heeft de uitgebreide/audit-versie).

/* ── Module 06 · AI & werkdruk (Fase 25) ───────────────────────────────── */
const module6Details = {
  "werkdruk-inventarisatie": {
    "format": "diepteles",
    "summary": "Je brengt één echte werkweek in kaart en leert je taken te scheiden langs twee assen: hoeveel tijd ze kosten en of ze écht delegeerbaar zijn aan AI. Met het delegeer-kwadrant als mentaal model kies je één tijdrovende, delegeerbare bron, bepaal je de kwaliteitsondergrens die je niet wilt verliezen, en schets je een eerste herontworpen workflow. Je eindigt met een eerlijk ijkpunt: tijdwinst telt pas als de kwaliteit minstens gelijk blijft.",
    "duration": {
      "total": "60 minuten",
      "blocks": [
        {
          "label": "Aanleiding & kader",
          "min": 8
        },
        {
          "label": "Werkweek inventariseren",
          "min": 15
        },
        {
          "label": "In het kwadrant plaatsen",
          "min": 12
        },
        {
          "label": "Bron & ondergrens kiezen",
          "min": 12
        },
        {
          "label": "Workflow herontwerpen",
          "min": 10
        },
        {
          "label": "Reflectie & check",
          "min": 3
        }
      ]
    },
    "opening": {
      "eyebrow": "Aanleiding",
      "aanleiding": "Het is donderdagavond, half tien. Je hebt vandaag lesgegeven, twee mentorgesprekken gevoerd, een toets nagekeken en tussendoor een ouder teruggebeld. Nu zit je nog aan de planning voor volgende week, een herkansing die je moet samenstellen, en een mailtje aan de sectie dat al twee dagen klaarligt in je hoofd maar niet op papier staat. Je bent niet lui en je werkt niet langzaam. Toch loopt de week vol op een manier die je niet meer overziet.\n\nDe reflex is: harder werken, of een avond extra. Maar dat lost het patroon niet op. Het probleem is zelden dat je te weinig doet. Het probleem is dat je niet scherp hebt wélke taken je tijd opslokken, en welke van die taken eigenlijk niemand specifiek jou hoeft te laten doen. Een eerste toetsversie opstellen, drie varianten van een instructie maken, een lange beleidsmail samenvatten voor je sectie: dat kost uren, maar het is werk dat je kunt voorbereiden met hulp.\n\nDaartegenover staat werk dat alleen jij kunt doen. Inschatten of een leerling vastloopt op de stof of op iets anders. Een conflict in de klas ontvlechten. Beoordelen of een antwoord klopt op vakniveau. Dat kost ook tijd, maar het is geen tijd die weglekt — het is de kern van je vak. AI verschuift die twee soorten werk niet door elkaar; het kan alleen de eerste soort verlichten. Deze les helpt je het verschil zien in je éigen week, niet in een algemeen verhaal.",
      "waaromNu": "AI-tools zijn inmiddels overal in het onderwijs binnengeslopen, vaak zonder dat iemand bewust koos waar ze wél en niet passen. DigCompEdu plaatst dit onder Professional Engagement: je organiseert je eigen werk en je communicatie professioneel, en je maakt bewuste keuzes over welke digitale middelen je inzet. Bewust kiezen begint met overzicht. Zonder een eerlijk beeld van waar je tijd heen gaat, automatiseer je het verkeerde of je automatiseert niets en blijft de werkdruk staan."
    },
    "conceptueel": {
      "eyebrow": "Conceptueel kader",
      "intro": "Werkdruk voelt als één grote, ondeelbare berg. Maar als je hem uit elkaar trekt, blijken er twee heel verschillende dingen in te zitten die we vaak op één hoop gooien. Het eerste is volume: er is simpelweg veel te doen. Het tweede is aard: sommige taken vragen jouw oordeel, je relatie met leerlingen en je vakdiepte, en andere vragen vooral dat er iets gemaakt wordt — een concept, een variant, een samenvatting. Die twee verwar je makkelijk, omdat ze allebei tijd kosten en allebei zwaar voelen.\n\nHet onderscheid dat door deze hele module loopt: niet alle werkdruk is AI-oplosbaar. Een taak is pas een goede kandidaat voor delegatie als hij twee dingen tegelijk is — tijdrovend én delegeerbaar. Tijdrovend maar niet-delegeerbaar werk (het beoordelen, het gesprek, de eindverantwoordelijkheid) blijft van jou; daar gaat AI je niet uit redden, en als je het tóch probeert te automatiseren verlies je juist kwaliteit. Tijdrovend én delegeerbaar werk is waar de winst zit: AI levert het ruwe materiaal, jij beoordeelt en bent de afzender.\n\nDelegeerbaar betekent hier niet 'AI doet het en jij kijkt weg'. Het betekent dat AI een eerste concept of een aantal varianten kan aanleveren die jíj vervolgens controleert, bijstuurt en goedkeurt. De delegatie zit in het maken, niet in het verantwoorden. Daarom hoort bij elke delegeerbare taak een kwaliteitsondergrens: de standaard die je hoe dan ook wilt halen, los van wie of wat het eerste concept maakte. Als die ondergrens niet gehaald wordt, is de tijdwinst schijnwinst.\n\nDe kunst is dus niet 'zoveel mogelijk automatiseren', maar scherp sorteren. Welke taken vreten tijd zonder jouw unieke inbreng nodig te hebben? Welke vreten tijd júist omdat ze jouw inbreng nodig hebben? Pas als je dat per taak kunt benoemen, kun je een werkweek herontwerpen zonder iets weg te gooien dat je leerlingen nodig hebben.",
      "mentalModel": {
        "naam": "Het delegeer-kwadrant",
        "beschrijving": "Zet je taken in een vlak met twee assen: hoeveel tijd kost de taak (laag/hoog) en is hij delegeerbaar aan AI (nee/ja). Rechtsboven — veel tijd, wél delegeerbaar — daar zit je winst; dat zijn de eerste kandidaten. Rechtsonder is delegeerbaar maar levert weinig op. Linksboven — veel tijd, niet delegeerbaar — beschermen, niet automatiseren. Linksonder negeer je voorlopig."
      },
      "kernbegrippen": [
        {
          "term": "Delegeerbaar werk",
          "uitleg": "Taken waarbij AI een bruikbaar eerste concept of varianten kan leveren die jij controleert: opstellen, herschrijven, samenvatten, varianten maken. Het maken is delegeerbaar, de eindverantwoordelijkheid niet."
        },
        {
          "term": "Niet-delegeerbaar werk",
          "uitleg": "Taken die jouw oordeel, relatie of vakdiepte vragen: een leerling inschatten, een conflict oplossen, beoordelen of iets vakinhoudelijk klopt. Tijdrovend, maar het ís het werk."
        },
        {
          "term": "Kwaliteitsondergrens",
          "uitleg": "De minimale standaard die een taak moet halen, ongeacht wie het eerste concept maakte. Tijdwinst onder deze grens is geen winst maar afbraak."
        },
        {
          "term": "Herontworpen workflow",
          "uitleg": "Een taak opnieuw ingericht zodat AI het ruwe materiaal levert en jij de stappen van controle, bijsturen en goedkeuren bewust houdt."
        }
      ]
    },
    "learningGoals": [
      "Je inventariseert één concrete werkweek en benoemt per taak hoeveel tijd die kost en welke inbreng hij van jou vraagt.",
      "Je plaatst minstens acht eigen taken correct in het delegeer-kwadrant en kunt per plaatsing uitleggen waarom een taak wel of niet delegeerbaar is.",
      "Je formuleert voor één delegeerbare taak een expliciete kwaliteitsondergrens die je niet wilt verliezen.",
      "Je schetst een herontworpen workflow voor die taak waarin AI het ruwe materiaal levert en jij de controle- en goedkeurstap behoudt."
    ],
    "scenario": {
      "title": "Werksituatie",
      "context": "Je hebt een drukke, herkenbare werkweek achter de rug: lessen, nakijkwerk, mentortaken, e-mail, vergaderingen en voorbereiding. Je wilt niet 'iets met AI gaan doen', maar gericht uitzoeken welk deel van je werkdruk je verstandig kunt verlichten zonder kwaliteit in te leveren.",
      "role": "Docent of mentor in vo, mbo of hbo die de eigen werkweek wil herontwerpen.",
      "tools": "Een leeg overzicht of spreadsheet voor je weekinventarisatie, deze werkbladen, en een AI-chatbot via je school- of instellingsaccount voor de latere stappen."
    },
    "steps": [
      {
        "title": "Inventariseer één echte werkweek",
        "body": "Pak één concrete, afgelopen week — geen ideale week, een echte. Schrijf de taken op die je tijd kostten, niet alleen de lessen maar ook het werk eromheen: nakijken, mailen, plannen, gesprekken, vergaderen, voorbereiden. Schat per taak grof hoeveel tijd hij kostte. Het gaat niet om precisie tot op de minuut, maar om eerlijk overzicht. Dit is het fundament; zonder dit beeld sorteer je straks op gevoel in plaats van op feiten.",
        "time": "15 min",
        "voorbeeld": "Een docent Nederlands noteert: 12 essays nakijken (3,5 uur), drie lessen voorbereiden (2 uur), beleidsmail van de teamleider samenvatten voor de sectie (45 min), mentorgesprek met een leerling die thuis zit (1 uur), herkansing samenstellen (1,5 uur), 40 mails (2 uur verspreid).",
        "workspace": {
          "field": "werkweek-inventarisatie",
          "label": "Inventariseer één afgelopen werkweek: lijst minstens acht taken met een grove tijdsinschatting per taak.",
          "shortLabel": "Weekinventaris",
          "hint": "Neem ook het 'onzichtbare' werk mee: mail, plannen, korte gesprekken, administratie. Schat tijd grof, niet exact.",
          "placeholder": "Taak 1 — ... uur\nTaak 2 — ... uur\n...",
          "rows": 10,
          "rubric": [
            {
              "name": "Minstens acht taken benoemd",
              "good": "De lijst bevat acht of meer concrete taken, niet alleen 'lesgeven'."
            },
            {
              "name": "Tijd per taak geschat",
              "good": "Elke taak heeft een grove tijdsinschatting in uren of minuten."
            },
            {
              "name": "Onzichtbaar werk meegenomen",
              "good": "Mail, plannen, korte gesprekken of administratie staan er ook bij."
            },
            {
              "name": "Concreet en eigen",
              "good": "De taken komen herkenbaar uit de eigen praktijk, geen algemeenheden."
            }
          ],
          "referenceAnswer": "1. Twaalf essays nakijken met feedback — 3,5 uur. 2. Drie lessen voorbereiden — 2 uur. 3. Beleidsmail teamleider samenvatten voor de sectie — 45 min. 4. Mentorgesprek met een leerling die langdurig thuis zit — 1 uur. 5. Herkansing toets samenstellen — 1,5 uur. 6. Mail beantwoorden (circa 40 berichten) — 2 uur verspreid. 7. Sectievergadering — 1 uur. 8. Cijfers invoeren en administratie — 45 min. 9. Differentiatieopdracht maken voor een snelle groep — 1 uur. 10. Ouder terugbellen over verzuim — 20 min."
        }
      },
      {
        "title": "Beoordeel per taak: kost dit veel tijd?",
        "body": "Loop je lijst langs en markeer welke taken écht veel tijd kosten en welke meevallen. Dit is de eerste as van het kwadrant. Wees eerlijk: een taak die je vervelend vindt is niet automatisch tijdrovend, en een taak die je leuk vindt soms juist wel. Het gaat om de uren, niet om het ongemak. Zo voorkom je dat je straks energie steekt in het automatiseren van iets dat nauwelijks tijd kost.",
        "time": "6 min",
        "voorbeeld": "Nakijken (3,5 uur) en lessen voorbereiden (2 uur) zijn duidelijk tijdrovend. De mail terugbellen aan een ouder (20 min) valt mee, hoe vervelend ook. De beleidsmail samenvatten (45 min) zit ertussenin maar telt mee omdat het elke week terugkomt.",
        "workspace": {
          "field": "tijd-as-markering",
          "label": "Markeer per taak uit stap 1 of die hoog of laag scoort op tijd, en geef bij twijfelgevallen kort je redenering.",
          "shortLabel": "Tijd-as",
          "hint": "Tel ook mee of een taak wekelijks terugkomt: een korte taak die elke week terugkeert kan optellen tot veel tijd.",
          "placeholder": "Taak 1 — hoog/laag, omdat ...\n...",
          "rows": 8,
          "rubric": [
            {
              "name": "Elke taak gescoord op tijd",
              "good": "Bij elke taak uit stap 1 staat hoog of laag."
            },
            {
              "name": "Onderbouwing bij twijfel",
              "good": "Twijfelgevallen krijgen een korte, eerlijke redenering."
            },
            {
              "name": "Frequentie meegewogen",
              "good": "Wekelijks terugkerende korte taken worden als optelsom gezien."
            },
            {
              "name": "Tijd losgekoppeld van ongemak",
              "good": "De score gaat over uren, niet over hoe vervelend de taak is."
            }
          ],
          "referenceAnswer": "Essays nakijken — hoog (3,5 uur, kern van de week). Lessen voorbereiden — hoog (2 uur). Beleidsmail samenvatten — hoog, want klein op zichzelf maar wekelijks terugkerend. Herkansing samenstellen — hoog (1,5 uur). Mail beantwoorden — hoog, omdat 40 losse berichten optellen tot 2 uur. Mentorgesprek — hoog (1 uur). Cijfers invoeren — laag (45 min, maar eenmalig en routineus). Ouder terugbellen — laag in tijd, al weegt het mentaal zwaar; dat ongemak laat ik buiten de tijdscore."
        }
      },
      {
        "title": "Beoordeel per taak: is dit delegeerbaar aan AI?",
        "body": "Nu de tweede as. Vraag je bij elke taak af: kan AI hier een bruikbaar eerste concept of varianten leveren die ik daarna controleer, of vraagt deze taak mijn oordeel, mijn relatie of mijn vakdiepte op een manier die niet uit te besteden is? Opstellen, herschrijven, samenvatten en varianten maken zijn meestal delegeerbaar. Een leerling inschatten, een conflict oplossen of beoordelen of een antwoord vakinhoudelijk klopt, is dat niet. Het maken kan delegeerbaar zijn; de eindverantwoordelijkheid blijft bij jou.",
        "time": "6 min",
        "voorbeeld": "Een herkansing samenstellen: AI kan een eerste set vragen en varianten leveren, dus delegeerbaar — mits jij ze controleert op niveau en dekking. Het mentorgesprek met de thuiszittende leerling: niet delegeerbaar, dat ís de relatie. De beleidsmail samenvatten: delegeerbaar. Beoordelen of een essay een vier of een zeven is: niet delegeerbaar, dat is jouw oordeel.",
        "workspace": {
          "field": "delegeer-as-markering",
          "label": "Markeer per taak of die delegeerbaar is aan AI (ja/nee) en geef bij elke 'ja' kort aan wélk deel je delegeert en wélk deel je zelf houdt.",
          "shortLabel": "Delegeer-as",
          "hint": "Splits binnen een taak: vaak is het máken delegeerbaar en het beoordelen/goedkeuren niet. Benoem die scheidslijn.",
          "placeholder": "Taak 1 — ja/nee. Delegeerbaar deel: ... Eigen deel: ...\n...",
          "rows": 8,
          "rubric": [
            {
              "name": "Elke taak gescoord op delegeerbaarheid",
              "good": "Bij elke taak staat ja of nee."
            },
            {
              "name": "Scheidslijn benoemd bij 'ja'",
              "good": "Bij delegeerbare taken staat welk deel AI doet en welk deel jij houdt."
            },
            {
              "name": "Niet-delegeerbaar correct herkend",
              "good": "Oordeel-, relatie- en vakdiepte-taken staan op nee."
            },
            {
              "name": "Eindverantwoordelijkheid bij docent",
              "good": "Bij elke 'ja' blijft controle en goedkeuren expliciet bij jou."
            }
          ],
          "referenceAnswer": "Herkansing samenstellen — ja. Delegeerbaar: AI levert een eerste set vragen en varianten. Eigen deel: controle op niveau, dekking van de leerstof en eerlijke moeilijkheid. Beleidsmail samenvatten — ja. Delegeerbaar: het inkorten tot kernpunten. Eigen deel: checken of de strekking klopt voordat ik het deel. Lessen voorbereiden — deels ja: AI levert werkvormen en voorbeelden, ik bepaal opbouw en didactiek. Essays beoordelen — nee, het cijfer is mijn oordeel. Mentorgesprek — nee, dat is de relatie. Ouder terugbellen — nee, dat is een persoonlijk gesprek."
        }
      },
      {
        "title": "Kies één delegeerbare bron uit het kwadrant",
        "body": "Leg de twee assen over elkaar en kijk wat rechtsboven landt: taken die veel tijd kosten én delegeerbaar zijn. Dat is je winstvak. Kies daaruit één taak om mee te beginnen — niet de moeilijkste, maar een waar de winst tastbaar is en het risico te overzien. Eén bron, niet vijf: je wilt de herontworpen workflow echt kunnen uitproberen, niet alleen op papier bedenken.",
        "time": "6 min",
        "voorbeeld": "Rechtsboven staan bij de docent Nederlands: herkansing samenstellen, beleidsmail samenvatten, en deels lessen voorbereiden. Hij kiest de herkansing: het kost 1,5 uur, komt elke periode terug, en een eerste vragenset is goed te controleren. Het mentorgesprek staat linksboven en blijft bewust buiten de keuze.",
        "workspace": {
          "field": "gekozen-bron",
          "label": "Kies één taak rechtsboven in je kwadrant en onderbouw waarom juist deze: tijdwinst, frequentie en beheersbaar risico.",
          "shortLabel": "Gekozen bron",
          "hint": "Kies een taak waarvan je het eindresultaat goed kunt beoordelen. Begin niet met de taak met het hoogste afbreukrisico.",
          "placeholder": "Gekozen taak: ...\nWaarom: tijd ... / frequentie ... / risico ...",
          "rows": 6,
          "rubric": [
            {
              "name": "Taak komt uit winstvak",
              "good": "De gekozen taak is zowel tijdrovend als delegeerbaar."
            },
            {
              "name": "Tijdwinst onderbouwd",
              "good": "Je benoemt hoeveel tijd de taak kost en hoe vaak die terugkomt."
            },
            {
              "name": "Risico ingeschat",
              "good": "Je legt uit waarom het afbreukrisico te overzien is."
            },
            {
              "name": "Eén bron, niet meer",
              "good": "Er is één concrete taak gekozen om mee te beginnen."
            }
          ],
          "referenceAnswer": "Gekozen taak: een herkansing voor de toets samenstellen. Waarom: het kost ongeveer 1,5 uur en keert elke periode terug, dus de tijdwinst telt op over het jaar. Een eerste set vragen en varianten is goed te controleren — ik zie meteen of een vraag het juiste niveau heeft en de stof dekt. Het afbreukrisico is beheersbaar omdat ik elke vraag zelf nakijk vóór hij de toets in gaat; een zwakke AI-vraag haalt de eindversie niet. Het mentorgesprek laat ik bewust buiten beschouwing: dat hoort linksboven en blijft van mij."
        }
      },
      {
        "title": "Bepaal de kwaliteitsondergrens die je niet wilt verliezen",
        "body": "Voordat je iets herontwerpt, leg je vast wat de taak hoe dan ook moet halen — los van wie of wat het eerste concept maakt. Dit is je ijkpunt. Formuleer drie tot vijf concrete eisen waaraan het eindresultaat moet voldoen om net zo goed of beter te zijn dan wat je nu zelf maakt. Zonder deze ondergrens weet je straks niet of je tijd hebt gewonnen of kwaliteit hebt ingeleverd. Dit is het scharnierpunt van de hele module: tijdwinst telt pas als de kwaliteit minstens gelijk blijft.",
        "time": "6 min",
        "voorbeeld": "Voor de herkansing: elke vraag toetst een leerdoel uit de oorspronkelijke toets; de moeilijkheidsgraad is vergelijkbaar; er staat geen dubbelzinnige of foutieve vraagstelling in; de spreiding over de stof is gelijk aan het origineel; en de herkansing is niet simpeler dan de eerste toets, want anders is hij oneerlijk tegenover wie wél in één keer slaagde.",
        "workspace": {
          "field": "kwaliteitsondergrens",
          "label": "Formuleer drie tot vijf concrete kwaliteitseisen die het eindresultaat van je gekozen taak hoe dan ook moet halen.",
          "shortLabel": "Ondergrens",
          "hint": "Maak elke eis toetsbaar: 'goed genoeg' is geen eis, 'dekt alle leerdoelen van de oorspronkelijke toets' wel.",
          "placeholder": "Eis 1 — ...\nEis 2 — ...\nEis 3 — ...",
          "rows": 7,
          "rubric": [
            {
              "name": "Drie tot vijf eisen benoemd",
              "good": "Er staan minstens drie en hooguit vijf concrete eisen."
            },
            {
              "name": "Eisen zijn toetsbaar",
              "good": "Elke eis is na te lopen, geen vage 'kwaliteit' of 'goed genoeg'."
            },
            {
              "name": "Gericht op gelijk of beter",
              "good": "De eisen borgen minstens het niveau van wat je nu zelf maakt."
            },
            {
              "name": "Vakinhoudelijk verankerd",
              "good": "De eisen raken niveau, dekking of correctheid van het vak."
            }
          ],
          "referenceAnswer": "1. Elke vraag toetst een leerdoel dat ook in de oorspronkelijke toets zat. 2. De spreiding over de hoofdstukken is gelijk aan het origineel — geen onderwerp oververtegenwoordigd. 3. Het niveau is vergelijkbaar; de herkansing is niet makkelijker dan de eerste toets, anders is hij oneerlijk tegenover wie in één keer slaagde. 4. Geen enkele vraag is dubbelzinnig, vakinhoudelijk onjuist of suggestief geformuleerd. 5. Bij elke open vraag hoort een correctiemodel dat ik kan verdedigen tegenover een leerling. Een herkansing die hier niet aan voldoet, gaat niet de deur uit, hoeveel tijd het concept ook scheelde."
        }
      },
      {
        "title": "Schets je herontworpen workflow",
        "body": "Beschrijf nu stap voor stap hoe je de gekozen taak voortaan aanpakt, met AI in de rol van leverancier van ruw materiaal en jij in de rol van controleur en afzender. Benoem expliciet: wat geef je AI als opdracht, wat lever je aan zonder herleidbare gegevens, wat krijg je terug, en op welke punten controleer je tegen je kwaliteitsondergrens voordat het naar leerlingen gaat. Een goede schets maakt zichtbaar waar jouw oordeel in de keten blijft zitten.",
        "time": "10 min",
        "voorbeeld": "De docent schetst: ik plak de leerdoelen en het type vragen in de chatbot via mijn schoolaccount, zonder leerlingnamen of cijfers, en vraag om twaalf concept-vragen met spreiding over de hoofdstukken. Ik loop ze langs mijn vijf eisen, schrap of herschrijf wat niet klopt, vul gaten zelf aan, en schrijf de correctiemodellen voor de open vragen zelf. Pas als alle vijf eisen groen zijn, gaat de herkansing de toetsmap in.",
        "workspace": {
          "field": "herontworpen-workflow",
          "label": "Schets stap voor stap je herontworpen workflow: AI levert ruw materiaal, jij controleert tegen je ondergrens en bent afzender. Verwerk een AVG-stap.",
          "shortLabel": "Workflow",
          "hint": "Benoem expliciet de controlestap per eis uit stap 5, en de AVG-stap: geen herleidbare leerlinggegevens, schoolaccount, abstraheren.",
          "placeholder": "1. Ik geef AI: ...\n2. AVG: ...\n3. Ik krijg terug: ...\n4. Ik controleer op: ...\n5. Ik keur goed / verstuur: ...",
          "rows": 9,
          "rubric": [
            {
              "name": "AI levert ruw materiaal",
              "good": "De rol van AI is beperkt tot een eerste concept of varianten."
            },
            {
              "name": "Controlestap tegen ondergrens",
              "good": "Je loopt het resultaat expliciet langs je eisen uit stap 5."
            },
            {
              "name": "Docent is afzender",
              "good": "De laatste stap is jouw goedkeuring vóór het naar leerlingen gaat."
            },
            {
              "name": "AVG-stap aanwezig",
              "good": "Geen herleidbare leerlinggegevens; schoolaccount en abstraheren staan erin."
            },
            {
              "name": "Stappen concreet en navolgbaar",
              "good": "Iemand anders zou de workflow kunnen uitvoeren."
            }
          ],
          "referenceAnswer": "1. Ik geef AI via mijn schoolaccount: de leerdoelen, het aantal vragen, de gewenste spreiding over de hoofdstukken en het type vragen, met de vraag om twaalf concept-vragen plus een variant per vraag. 2. AVG: ik plak geen leerlingnamen, cijfers of herleidbare antwoorden in; ik werk met de abstracte leerdoelen en houd het bij het school-/instellingsaccount. 3. Ik krijg een eerste set vragen met varianten terug. 4. Ik controleer langs mijn vijf eisen: dekt elke vraag een leerdoel, klopt de spreiding, is het niveau gelijk aan het origineel, is geen vraag dubbelzinnig of onjuist, en kan ik een correctiemodel verdedigen. Vakinhoudelijke fouten herschrijf ik zelf; de correctiemodellen voor open vragen schrijf ik zelf. 5. Pas als alle vijf eisen groen zijn, keur ik de herkansing goed en zet ik hem in de toetsmap. Ik ben de afzender; AI heeft alleen het ruwe materiaal geleverd."
        }
      }
    ],
    "vakvariaties": [
      {
        "vak": "Talen (vo)",
        "body": "Tijdrovend én delegeerbaar: een eerste set leesteksten op niveau, woordenlijsten of varianten van een grammatica-oefening laten opstellen. Niet-delegeerbaar: beoordelen of een leerling de taal écht beheerst en waar de hapering zit. Het oefenmateriaal kun je voorbereiden; de inschatting van vaardigheid blijft van jou."
      },
      {
        "vak": "Exacte vakken (vo/havo-vwo)",
        "body": "Delegeerbaar: extra oefenopgaven en uitgewerkte voorbeelden in verschillende moeilijkheidsgraden genereren. Niet-delegeerbaar: controleren of de uitwerking vakinhoudelijk klopt — AI rekent geregeld fout of slaat stappen over. De ondergrens hier is hard: elke som die de deur uit gaat, reken je zelf na."
      },
      {
        "vak": "Beroepsgerichte vakken (mbo)",
        "body": "Delegeerbaar: een eerste opzet van een praktijkopdracht of casus rond een beroepssituatie, plus varianten voor verschillende niveaus. Niet-delegeerbaar: beoordelen of de opdracht klopt met de actuele beroepspraktijk en het kwalificatiedossier. De vakdiepte van het beroep zit in jouw hoofd, niet in het model."
      },
      {
        "vak": "Mentoraat / studieloopbaan",
        "body": "Delegeerbaar: een algemene structuur voor een ouderavond-presentatie of een sjabloon voor een terugkerende informatiemail. Niet-delegeerbaar: het mentorgesprek zelf, het inschatten van een leerling, de zorgsignalen. Dat hoort linksboven in het kwadrant en blijft daar — het is geen werkdruk om weg te automatiseren, het is je kerntaak."
      },
      {
        "vak": "Hbo / hoger onderwijs",
        "body": "Delegeerbaar: een eerste concept van een opdrachtbeschrijving, varianten van casussen of een samenvatting van vakliteratuur als startpunt. Niet-delegeerbaar: de inhoudelijke beoordeling van studentwerk en het bepalen of een bron klopt en actueel is. Bij literatuur is bronkritiek jouw werk: AI verzint geregeld referenties."
      }
    ],
    "valkuilen": [
      {
        "titel": "Alles op één hoop: 'het is gewoon druk'",
        "watGebeurtEr": "Je ervaart werkdruk als één ondeelbare berg en concludeert dat AI 'er wel iets aan kan doen' of juist 'er niets aan kan doen', zonder te sorteren. Beide conclusies zijn te grof en je verandert niets.",
        "fix": "Trek de berg uit elkaar in losse taken en scoor elke taak apart op de twee assen. Pas op taakniveau wordt zichtbaar waar winst zit en waar niet."
      },
      {
        "titel": "Het niet-delegeerbare toch automatiseren",
        "watGebeurtEr": "Omdat een mentorgesprek of beoordeling veel tijd kost, kom je in de verleiding het uit te besteden. De tijdwinst is direct, maar je levert precies de kwaliteit in die je leerlingen van jou nodig hebben.",
        "fix": "Bescherm linksboven in het kwadrant expliciet. Tijdrovend én niet-delegeerbaar werk hoort niet in je automatiseringsplannen, hoe zwaar het ook weegt."
      },
      {
        "titel": "Geen ondergrens vooraf",
        "watGebeurtEr": "Je herontwerpt een workflow en vindt het resultaat 'wel goed genoeg', omdat je geen ijkpunt vooraf had. Je merkt pas later, of nooit, dat de kwaliteit gezakt is.",
        "fix": "Formuleer de kwaliteitseisen vóórdat je AI inzet, niet erna. Een ondergrens achteraf buigt mee met wat het model toevallig leverde."
      },
      {
        "titel": "Te veel tegelijk herontwerpen",
        "watGebeurtEr": "Je ziet vijf delegeerbare taken en wilt ze allemaal in één keer aanpakken. Geen enkele workflow wordt af, je raakt het overzicht kwijt en concludeert dat 'het toch niet werkt'.",
        "fix": "Kies één bron, maak die workflow echt af en toets hem tegen je ondergrens. Pas daarna de tweede."
      },
      {
        "titel": "Ruwe AI-output direct doorsturen",
        "watGebeurtEr": "Het eerste concept ziet er verzorgd uit, dus je stuurt het ongecontroleerd door naar leerlingen of de sectie. Vakinhoudelijke fouten, een verkeerde toon of een onjuiste bron glippen erdoor — en jij bent de afzender.",
        "fix": "Bouw de controlestap hard in de workflow: niets gaat de deur uit voordat het langs je ondergrens is gegaan en jij het hebt goedgekeurd."
      }
    ],
    "eindcriteria": [
      {
        "criterium": "Inventarisatie",
        "onder": "Een vage lijst met enkele lessen, geen tijdsinschatting, geen onzichtbaar werk.",
        "op": "Minstens acht concrete taken met grove tijdsinschatting, inclusief mail, plannen en gesprekken.",
        "boven": "+ De inventarisatie maakt patronen zichtbaar, zoals taken die wekelijks terugkeren en optellen tot veel tijd."
      },
      {
        "criterium": "Sortering in het kwadrant",
        "onder": "Taken zijn niet of willekeurig geplaatst; delegeerbaar en niet-delegeerbaar lopen door elkaar.",
        "op": "Elke taak staat op beide assen gescoord en niet-delegeerbaar werk is correct herkend en beschermd.",
        "boven": "+ Je benoemt per taak de scheidslijn tussen het delegeerbare máken en het niet-delegeerbare beoordelen."
      },
      {
        "criterium": "Kwaliteitsondergrens",
        "onder": "Geen eisen vooraf, of alleen vage termen als 'goed genoeg'.",
        "op": "Drie tot vijf toetsbare, vakinhoudelijke eisen die minstens het huidige niveau borgen.",
        "boven": "+ De eisen benoemen ook eerlijkheid en correctheid richting leerlingen, niet alleen efficiëntie."
      },
      {
        "criterium": "Herontworpen workflow",
        "onder": "AI doet alles en de docent kijkt weg; geen controlestap, geen AVG-regel.",
        "op": "AI levert ruw materiaal, de docent controleert tegen de ondergrens, is afzender en houdt zich aan de AVG.",
        "boven": "+ De workflow is zo concreet dat een collega hem kan overnemen en de controlepunten herkenbaar terugkomen."
      }
    ],
    "reflection": [
      "Welke taak in jouw week voelde zwaar maar bleek bij nader inzien helemaal niet tijdrovend — en wat zegt dat over waar je werkdruk echt zit?",
      "Bij welke taak was je geneigd te zeggen 'die kan AI overnemen', terwijl je bij het benoemen van de kwaliteitsondergrens merkte dat jouw oordeel er toch in moet blijven?",
      "Als je over een maand terugkijkt op je herontworpen workflow, waaraan zou je dan zien dat je écht tijd hebt gewonnen zónder dat je leerlingen er iets van merkten — behalve dan dat het beter werd?"
    ],
    "checklist": [
      "Ik heb één echte werkweek geïnventariseerd met minstens acht taken en een grove tijdsinschatting per taak.",
      "Ik heb ook het onzichtbare werk (mail, plannen, korte gesprekken, administratie) meegenomen.",
      "Ik heb elke taak gescoord op beide assen: tijd (hoog/laag) en delegeerbaar (ja/nee).",
      "Ik heb niet-delegeerbaar werk (oordeel, relatie, vakdiepte) herkend en bewust beschermd.",
      "Ik heb één delegeerbare, tijdrovende bron uit het winstvak gekozen om mee te beginnen.",
      "Ik heb voor die taak drie tot vijf toetsbare kwaliteitseisen vastgelegd vóórdat ik AI inzette.",
      "Ik heb een herontworpen workflow geschetst waarin AI ruw materiaal levert en ik controleer en afzender ben.",
      "Mijn workflow bevat een AVG-stap: geen herleidbare leerlinggegevens, schoolaccount, abstraheren."
    ],
    "nextLesson": "nakijken-en-feedback"
  },
  "nakijken-en-feedback": {
    "format": "diepteles",
    "summary": "Nakijken is voor veel docenten de zwaarste, eenzaamste werkdrukpost — en precies de taak waar AI je het verkeerde kan laten doen: het oordeel uitbesteden. In deze les draai je het om. Je legt eerst een rubric vast, laat AI dáártegen conceptfeedback per criterium opstellen, en houdt zelf het keuren, herschrijven en cijferen in handen. Je leert wat je nooit delegeert (het cijfer, de gevoelige boodschap), bouwt een AVG-veilige werkwijze met geanonimiseerd werk, en meet aan het eind je echte tijdwinst per stapel.",
    "duration": {
      "total": "65 minuten",
      "blocks": [
        {
          "label": "Aanleiding",
          "min": 6
        },
        {
          "label": "Conceptueel kader",
          "min": 14
        },
        {
          "label": "Opdracht + rubric expliciteren",
          "min": 12
        },
        {
          "label": "AI conceptfeedback per criterium",
          "min": 12
        },
        {
          "label": "Keuren, herschrijven, grens trekken",
          "min": 13
        },
        {
          "label": "Tijdwinst meten + verankeren",
          "min": 8
        }
      ]
    },
    "opening": {
      "eyebrow": "Aanleiding",
      "aanleiding": "Een docent Nederlands op het mbo heeft 28 sollicitatiebrieven op de stapel. Het is donderdagavond, de feedback moet vrijdag terug, en ze weet precies hoe het gaat: bij brief 4 schrijft ze nog drie zinnen onder de tekst, bij brief 19 staat er 'goed gedaan, let op de aanhef'. Niet omdat brief 19 minder aandacht verdient, maar omdat haar accu leeg is. De kwaliteit van feedback zakt met de stapel mee — en dat weet ze, en dat knaagt.\n\nDan probeert ze AI. Ze plakt de eerste brief in een gratis chatbot, vraagt 'geef feedback en een cijfer', en krijgt binnen tien seconden een nette beoordeling met een 7. Het voelt als magie en als verraad tegelijk. De feedback is generiek ('zorg voor een sterke openingszin'), het cijfer komt uit het niets, en — dat realiseert ze zich pas later — er staat nu een herleidbare leerlingbrief op een server buiten de school. Drie problemen in één handeling: het oordeel weggegeven, de feedback te vlak voor déze student, en de privacy geschonden.\n\nDe oplossing is niet 'AI doet het nakijken' en ook niet 'AI blijft eraf'. Het is een werkverdeling. AI is goed in het ráámwerk: per rubriccriterium opschrijven wat het werk laat zien en wat een volgende stap kan zijn — snel, uitputtend, onvermoeibaar bij brief 28 net zo goed als bij brief 1. Jij doet wat AI niet kan: bepalen of dit klopt voor déze student, de toon kiezen, de gevoelige boodschap formuleren, en het cijfer geven. AI levert het ruwe materiaal; jij blijft de afzender en de beoordelaar. In deze les bouw je die werkverdeling stap voor stap, op je eigen opdracht.",
      "waaromNu": "Feedback en beoordeling vormen de kern van DigCompEdu-gebied 4 (Assessment): docenten zetten digitale technologie in om feedback te verrijken, mits het pedagogisch oordeel en de eindverantwoordelijkheid bij de docent blijven. De AVG voegt een harde randvoorwaarde toe: leerlingwerk is een persoonsgegeven, en het in een publieke AI-tool plakken is een verwerking waarvoor je grondslag en grip nodig hebt. En de modulelijn loopt er dwars doorheen: nakijken is tijdrovend én deels delegeerbaar (het opstellen van concepten), maar het oordeel is tijdrovend én níet delegeerbaar. Wie dat onderscheid niet maakt, verlaagt geen werkdruk maar verschuift verantwoordelijkheid naar een machine die hem niet kan dragen."
    },
    "conceptueel": {
      "eyebrow": "Conceptueel kader",
      "intro": "Begin bij de scheidslijn die deze hele module draagt: welk deel van nakijken is delegeerbaar en welk deel niet? Nakijken bestaat uit minstens vier handelingen. Eén: het werk lezen en tegen criteria leggen — wat laat dit zien per onderdeel? Twee: dat omzetten in bruikbare feedbacktaal — begrijpelijk, opbouwend, met een volgende stap. Drie: de feedback ijken op déze leerling — klopt deze boodschap voor wie dit schreef, in deze fase, met deze voorgeschiedenis? Vier: een oordeel vellen — voldoende of niet, welk cijfer, met welke consequentie. Handeling één en twee zijn opstelwerk: tijdrovend, herhaalbaar, en daarom delegeerbaar als ruw concept. Handeling drie en vier zijn oordeelswerk: ze vragen kennis van de leerling en het dragen van verantwoordelijkheid, en zijn níet delegeerbaar. AI zet je aan de start van handeling drie in plaats van bij nul. Dat is de tijdwinst — en meteen de grens.\n\nDe spil van de hele werkwijze is de rubric, en die moet vóór de AI komen, niet erna. Een rubric is je expliciete maatstaf: welke criteria beoordeel ik, en wat onderscheidt zwak van sterk per criterium? Geef je AI géén rubric, dan verzint het model zijn eigen maatstaf — meestal een generieke, vlotgeschreven middenmoot die nergens op jouw lesdoel is geijkt. Geef je wél een rubric, dan wordt AI een instrument dat het werk tegen jóuw criteria langsloopt en per criterium een concept levert. Dit is precies de aanpak die het platform deterministisch toepast: de AI-coach in deze les scoort jouw eigen antwoorden op elke stap 0 tot 5 tegen een vooraf vastgelegde rubric, op temperatuur nul zodat hetzelfde antwoord hetzelfde oordeel krijgt. De rubric is wat AI van een gokmachine in een gereedschap verandert — bij het beoordelen van docentantwoorden hier, en bij het beoordelen van leerlingwerk straks.\n\nDan het keuren. AI-conceptfeedback is een eerste versie, geen eindproduct, en de waarde van deze les zit in wat je ermee doet. Je leest de conceptfeedback met drie vragen: klopt dit feitelijk (heeft AI iets gezien dat er niet staat, of iets gemist)? Klopt dit voor déze leerling (is 'wees concreter' behulpzaam voor wie juist verdrinkt in details)? En klopt de toon (geen tien tips voor wie aan twee toe is)? Je schrapt, herschrijft, voegt het ene zinnetje toe dat alleen jij kunt schrijven omdat je deze leerling kent. Wat overblijft is feedback met jouw oordeel erin en jouw naam eronder — sneller tot stand gekomen, maar niet minder van jou.\n\nTot slot de twee dingen die je nooit uitbesteedt, hoe verleidelijk ook. Het cijfer: een beoordeling met rechtsgevolg (bevordering, diplomering, een herkansing) hoort bij de docent en mag niet feitelijk door een model worden bepaald — dat raakt aan het AVG-beginsel dat ingrijpende besluiten niet uitsluitend geautomatiseerd worden genomen. En de gevoelige boodschap: een onvoldoende na maandenlange inzet, een vermoeden van fraude, een student die duidelijk in de knel zit — die woorden kies je zelf, omdat de relatie eronder ligt en omdat een verkeerd gekozen zin hier echte schade doet. AI mag het cijferwerk versnellen; afzender van het oordeel ben en blijf jij.",
      "mentalModel": {
        "naam": "De corrector en de eindredacteur",
        "beschrijving": "AI is de corrector: het loopt het werk langs jouw rubric en levert per criterium een concept — snel en uitputtend, maar zonder kennis van wie dit schreef. Jij bent de eindredacteur: je keurt, schrapt, herschrijft naar déze leerling, en zet het oordeel en de handtekening eronder. Een corrector zonder eindredacteur publiceert ongecontroleerde tekst; een eindredacteur zonder corrector doet bij stapel 28 al het opstelwerk zelf en is uitgeput voor het oordeel dat ertoe doet. De tijdwinst zit in de taakverdeling, niet in het overslaan van de eindredactie."
      },
      "kernbegrippen": [
        {
          "term": "Rubric-eerst",
          "uitleg": "Je legt criteria en niveaus vast vóór je AI inschakelt. Zonder rubric verzint het model een eigen, generieke maatstaf; mét rubric loopt het jóuw criteria langs."
        },
        {
          "term": "Conceptfeedback",
          "uitleg": "AI levert per criterium een eerste versie: wat laat het werk zien, wat is een volgende stap. Het is grondstof om te keuren en herschrijven, geen feedback om door te sturen."
        },
        {
          "term": "Niet-delegeerbaar oordeel",
          "uitleg": "Het cijfer en de gevoelige boodschap blijven bij jou. Beoordelingen met rechtsgevolg mogen niet feitelijk door een model worden bepaald — dat is jouw verantwoordelijkheid en de AVG-lijn."
        },
        {
          "term": "AVG-veilig nakijken",
          "uitleg": "Geen herleidbaar leerlingwerk in publieke AI. Anonimiseer of werk in een school-/AVG-conforme omgeving met verwerkersafspraken, en weet of toestemming nodig is."
        }
      ]
    },
    "learningGoals": [
      "Je benoemt welke handelingen in het nakijkproces delegeerbaar zijn (concept opstellen) en welke niet (oordeel, cijfer, gevoelige boodschap), en kunt dat onderscheid op een eigen opdracht toepassen.",
      "Je expliciteert voor één opdracht een rubric met 3 tot 5 criteria en herkenbare niveauomschrijvingen, en gebruikt die als instructie voor AI-conceptfeedback.",
      "Je keurt AI-conceptfeedback kritisch: je controleert op feitfouten, op passendheid voor déze leerling en op toon, en herschrijft tot feedback die je zelf zou ondertekenen.",
      "Je richt een AVG-veilige werkwijze in (anonimiseren of conforme omgeving, grondslag/toestemming helder) en meet je tijdwinst per stapel om te bepalen of de aanpak werkt."
    ],
    "scenario": {
      "title": "Werksituatie",
      "context": "Je hebt een stapel van een opdracht die je regelmatig nakijkt en die tijd kost: brieven, betogen, verslagen, een werkstuk, een uitwerkingsverzameling. Je wilt de feedback per leerling rijker maken zonder dat het nakijken je hele avond opvreet — en zonder het oordeel of de privacy in de waagschaal te stellen. In deze les bouw je de complete werkwijze op één opdracht: rubric vastleggen, AI-conceptfeedback per criterium laten opstellen tegen díe rubric, keuren en herschrijven, de grens markeren van wat je nooit uitbesteedt, en de tijdwinst meten.",
      "role": "Docent · vo, mbo of hbo — elk vak met open werk dat feedback en een beoordeling vraagt",
      "tools": "AI-tool met schoolaccount of AVG-conforme omgeving · je bestaande rubric of beoordelingsmodel · één geanonimiseerd voorbeeldwerk om mee te testen"
    },
    "steps": [
      {
        "title": "Knip het nakijken open — wat is delegeerbaar?",
        "body": "Pak één opdracht die je regelmatig nakijkt en splits het nakijkwerk in de vier handelingen: lezen-tegen-criteria, omzetten-naar-feedbacktaal, ijken-op-déze-leerling, en oordelen/cijferen. Markeer per handeling of die delegeerbaar is als ruw concept (opstelwerk) of niet-delegeerbaar (oordeelswerk). Schat per handeling hoeveel van je nakijktijd erin gaat zitten. Zo zie je zwart-op-wit waar AI tijd kan winnen (de eerste twee) en waar jij onmisbaar blijft (de laatste twee) — en voorkom je dat je per ongeluk het oordeel meegeeft.",
        "time": "8 min",
        "voorbeeld": "Docent Nederlands, mbo niveau 4, opdracht 'sollicitatiebrief'. Lezen-tegen-criteria (structuur, register, foutloosheid, overtuigingskracht): ±40% van de tijd, delegeerbaar als concept. Omzetten naar feedbacktaal: ±25%, delegeerbaar. IJken op déze student (Yassine schrijft sterk maar durft niet stellig te zijn): ±20%, niet-delegeerbaar. Cijfer + eventuele gevoelige boodschap: ±15%, niet-delegeerbaar. Conclusie: ruim 60% is concept-werk dat AI kan voorbereiden; de overige 40% blijft mensenwerk en is juist waar de feedback waarde krijgt.",
        "workspace": {
          "field": "nakijken-delegeerbaarheid",
          "label": "Mijn nakijk-splitsing",
          "shortLabel": "Splitsing",
          "hint": "Opdracht · vier handelingen · per handeling delegeerbaar of niet · grove tijdsverdeling",
          "placeholder": "Opdracht: ...\n1. Lezen-tegen-criteria: ...% — delegeerbaar / niet\n2. Omzetten naar feedbacktaal: ...% — delegeerbaar / niet\n3. IJken op déze leerling: ...% — delegeerbaar / niet\n4. Oordelen + cijferen: ...% — delegeerbaar / niet\nWaar zit mijn grootste tijdwinst, waar blijf ik onmisbaar?",
          "rows": 8,
          "rubric": [
            {
              "name": "Opdracht concreet benoemd",
              "good": "Eén specifieke, terugkerende opdracht met vak en niveau, niet 'nakijken in het algemeen'."
            },
            {
              "name": "Vier handelingen onderscheiden",
              "good": "Lezen, omzetten, ijken en oordelen zijn elk apart benoemd en herkenbaar voor déze opdracht."
            },
            {
              "name": "Delegeerbaarheid juist toegekend",
              "good": "Opstelwerk (1 en 2) als delegeerbaar, oordeelswerk (3 en 4) als niet-delegeerbaar gemarkeerd, met reden."
            },
            {
              "name": "Tijdsverdeling onderbouwd",
              "good": "Per handeling een realistische grove schatting die optelt tot 100% en past bij echte ervaring."
            },
            {
              "name": "Conclusie over winst en grens",
              "good": "Benoemt waar AI tijd wint én waar de docent onmisbaar blijft — niet 'AI doet het nakijken'."
            }
          ],
          "referenceAnswer": "Opdracht: betoog schrijven, havo 4, Nederlands — 26 stuks per ronde. 1. Lezen-tegen-criteria (stelling, argumentatie, structuur, taalverzorging): ±35%, delegeerbaar als concept — AI kan per criterium opschrijven wat het betoog laat zien. 2. Omzetten naar feedbacktaal: ±25%, delegeerbaar — AI levert begrijpelijke formuleringen met een volgende stap. 3. IJken op déze leerling: ±20%, niet-delegeerbaar — voor wie altijd te voorzichtig formuleert is 'scherper stelling nemen' iets anders dan voor wie doordramt; dat weet alleen ik. 4. Oordelen + cijfer + soms een gevoelige boodschap (onvoldoende na veel inzet): ±20%, niet-delegeerbaar — rechtsgevolg en relatie. Grootste tijdwinst: handeling 1 en 2, samen ±60%, daar zet AI mij aan de start in plaats van bij nul. Onmisbaar blijf ik bij 3 en 4: juist daar krijgt feedback waarde en draag ik de verantwoordelijkheid."
        }
      },
      {
        "title": "Maak je rubric expliciet — vóór de AI",
        "body": "Schrijf de rubric voor je opdracht volledig uit: 3 tot 5 criteria, en per criterium wat zwak, voldoende en sterk onderscheidt. Heb je al een beoordelingsmodel, maak het dan expliciet genoeg dat een buitenstaander ermee zou kunnen scoren — vage termen als 'goede structuur' vervang je door waarneembaar gedrag ('inleiding, kern en slot zijn herkenbaar afgebakend'). Deze rubric is straks je instructie aan AI: het model loopt hier precies dít langs. Hoe scherper je niveaus, hoe bruikbaarder de conceptfeedback en hoe minder generieke middenmoot je terugkrijgt.",
        "time": "12 min",
        "voorbeeld": "Rubric sollicitatiebrief (mbo-4), criterium 'register en toon'. Zwak: te informeel of juist krampachtig formeel; aanhef en afsluiting passen niet bij een formele brief. Voldoende: overwegend passend zakelijk register, een enkele uitschieter. Sterk: consequent zakelijk-beleefd, afgestemd op de functie, zonder stijfheid. Door dit zo op te schrijven kan AI straks niet 'mooie toon' als oordeel geven, maar moet het de brief tegen déze drie niveaus leggen.",
        "workspace": {
          "field": "nakijken-rubric",
          "label": "Mijn expliciete rubric",
          "shortLabel": "Rubric",
          "hint": "3-5 criteria · per criterium waarneembaar onderscheid zwak / voldoende / sterk",
          "placeholder": "Criterium 1: ...\n  zwak: ... | voldoende: ... | sterk: ...\nCriterium 2: ...\n  zwak: ... | voldoende: ... | sterk: ...\nCriterium 3: ...\n  zwak: ... | voldoende: ... | sterk: ...\n(eventueel 4-5)",
          "rows": 9,
          "rubric": [
            {
              "name": "Drie tot vijf criteria",
              "good": "Niet één vergaarbak en niet vijftien deelpunten; 3-5 criteria die samen het lesdoel dekken."
            },
            {
              "name": "Waarneembaar geformuleerd",
              "good": "Criteria beschrijven zichtbaar gedrag in het werk, geen vage kwalificaties als 'goede structuur'."
            },
            {
              "name": "Niveaus onderscheiden zwak/voldoende/sterk",
              "good": "Per criterium drie herkenbaar verschillende niveaus die je uit elkaar kunt houden bij echt werk."
            },
            {
              "name": "Geijkt op het lesdoel",
              "good": "De criteria meten wat deze opdracht moet aantonen, niet een generieke schrijfrubric van internet."
            },
            {
              "name": "Bruikbaar als AI-instructie",
              "good": "Scherp genoeg dat AI het werk hiertegen kan leggen zonder zelf een maatstaf te verzinnen."
            }
          ],
          "referenceAnswer": "Rubric betoog (havo 4), 4 criteria. 1. Stelling — zwak: geen of meervoudige stelling; voldoende: één herkenbare stelling; sterk: één scherpe, betwistbare stelling die de rest stuurt. 2. Argumentatie — zwak: beweringen zonder onderbouwing; voldoende: minstens twee argumenten met enige onderbouwing; sterk: argumenten met bewijs én een weerlegde tegenwerping. 3. Structuur — zwak: gedachtesprongen, geen opbouw; voldoende: herkenbare inleiding-kern-slot; sterk: alinea's met kernzinnen en logische signaalwoorden die de lezer leiden. 4. Taalverzorging — zwak: storende spel-/zinsfouten; voldoende: enkele fouten zonder begripsverlies; sterk: vrijwel foutloos, gevarieerde zinsbouw. Elk niveau beschrijft waarneembaar gedrag, zodat AI de brief hiertegen kan leggen in plaats van een eigen 'mooi betoog'-norm te verzinnen."
        }
      },
      {
        "title": "Laat AI conceptfeedback opstellen — per criterium, AVG-veilig",
        "body": "Anonimiseer eerst één voorbeeldwerk (haal naam, klas, herleidbare details eruit) of werk in een AVG-conforme omgeving met verwerkersafspraken — nooit herleidbaar leerlingwerk in een publieke gratis tool. Geef AI dan je rubric én de opdracht: stel per criterium conceptfeedback op (wat laat het werk zien, wat is een volgende stap), maar geef expliciet géén cijfer en geen eindoordeel. Schrijf de prompt op die je gebruikt. Zo krijg je gestructureerde grondstof, per criterium, die je in de volgende stap gaat keuren — en blijft het oordeel buiten de AI.",
        "time": "12 min",
        "voorbeeld": "Anonimiseren: 'Yassine' wordt '[leerling]', de stagebedrijf-naam wordt '[bedrijf]'. Prompt: 'Hieronder een sollicitatiebrief van een mbo-4-student en mijn rubric met vier criteria en niveaus. Geef per criterium (1) wat de brief op dit punt laat zien en (2) één concrete volgende stap, in toegankelijke taal. Geef GEEN cijfer en GEEN eindoordeel — die geef ik zelf. [rubric] [geanonimiseerde brief]'. Resultaat: vier blokjes conceptfeedback, één per criterium, klaar om te keuren.",
        "workspace": {
          "field": "nakijken-conceptprompt",
          "label": "Mijn AVG-check + conceptfeedback-prompt",
          "shortLabel": "Conceptprompt",
          "hint": "Hoe anonimiseer je / welke omgeving · de prompt met rubric · expliciet géén cijfer",
          "placeholder": "AVG-aanpak: anonimiseren (...) of conforme omgeving (...)\nWat haal ik weg: ...\nPrompt: 'Hieronder ... mijn rubric ... Geef per criterium wat het werk laat zien + één volgende stap. Geef GEEN cijfer/oordeel.'\nWaarom geen cijfer aan AI: ...",
          "rows": 8,
          "rubric": [
            {
              "name": "AVG-veilig ingericht",
              "good": "Werk is geanonimiseerd of in conforme omgeving; expliciet geen herleidbaar leerlingwerk in publieke AI."
            },
            {
              "name": "Wat geanonimiseerd wordt is concreet",
              "good": "Benoemt welke herleidbare elementen weggaan (naam, klas, bedrijf, specifieke details), niet alleen 'naam'."
            },
            {
              "name": "Rubric in de prompt",
              "good": "De prompt geeft de eigen rubric mee zodat AI per criterium scoort, niet een eigen maatstaf verzint."
            },
            {
              "name": "Per-criterium-output gevraagd",
              "good": "Prompt vraagt per criterium wat het werk laat zien én een volgende stap — gestructureerd, niet één brij."
            },
            {
              "name": "Cijfer expliciet uitgesloten",
              "good": "Prompt verbiedt een cijfer/eindoordeel, met de reden dat de docent dat zelf geeft."
            }
          ],
          "referenceAnswer": "AVG-aanpak: ik werk in de schoolomgeving met verwerkersovereenkomst; voor dit testwerk anonimiseer ik bovendien. Weg: voornaam + achternaam (→ [leerling]), klascode, naam van het stagebedrijf (→ [bedrijf]), en een zin met een herleidbaar privédetail. Prompt: 'Hieronder staan mijn rubric (vier criteria met niveaus zwak/voldoende/sterk) en een geanonimiseerde sollicitatiebrief van een mbo-4-student. Geef per criterium: (1) in twee zinnen wat de brief op dit punt laat zien, gekoppeld aan het rubricniveau, en (2) één concrete, haalbare volgende stap in toegankelijke taal. Geef nadrukkelijk GEEN cijfer en GEEN eindoordeel — die bepaal ik zelf. [rubric] [brief]'. Geen cijfer aan AI, omdat een beoordeling met rechtsgevolg bij mij hoort en niet feitelijk door een model bepaald mag worden."
        }
      },
      {
        "title": "Keur en herschrijf — klopt dit voor déze leerling?",
        "body": "Lees de conceptfeedback met drie filters. Feitelijk: heeft AI iets gezien dat er niet staat, of een sterk punt gemist? Schrap of corrigeer. Passend: helpt 'wees concreter' déze leerling, of verdrinkt die juist al in details en is 'durf te schrappen' de echte boodschap? Toon: tien tips voor wie aan twee toe is, demotiveert — kies de twee die er nu toe doen. Herschrijf tot feedback die jij zou ondertekenen, en voeg het ene zinnetje toe dat alleen jij kunt schrijven omdat je deze leerling kent. Noteer per criterium wat je overnam, wat je schrapte en wat je toevoegde.",
        "time": "8 min",
        "voorbeeld": "AI-concept bij 'argumentatie': 'Voeg meer argumenten toe en onderbouw ze met bronnen.' Keuren: feitelijk klopt het deels, maar déze leerling heeft al vier argumenten — het probleem is dat ze oppervlakkig blijven. Herschreven: 'Je hebt argumenten genoeg; kies de twee sterkste en werk die diep uit met een voorbeeld. Liever twee overtuigende dan vier halve.' Toegevoegd zinnetje dat alleen de docent kan schrijven: 'Net als bij je vorige betoog — je durft, maar je gaat te snel door.' Generieke tip werd een gerichte, persoonlijke boodschap.",
        "workspace": {
          "field": "nakijken-keuren",
          "label": "Mijn keur- en herschrijfronde",
          "shortLabel": "Keuren",
          "hint": "Per criterium: wat overgenomen / geschrapt / herschreven · het persoonlijke zinnetje dat alleen jij kunt schrijven",
          "placeholder": "Criterium ...:\n  AI-concept: ...\n  Feitelijk klopt: ja/nee — ...\n  Passend voor déze leerling: ...\n  Herschreven naar: ...\nPersoonlijk zinnetje (alleen ik kan dit schrijven): ...",
          "rows": 8,
          "rubric": [
            {
              "name": "Op feitjuistheid gecontroleerd",
              "good": "Benoemt of AI iets zag dat er niet staat of iets miste, en corrigeert dat — geen blind overnemen."
            },
            {
              "name": "Geijkt op déze leerling",
              "good": "Past de boodschap aan op wat déze leerling nodig heeft, niet de generieke standaardtip."
            },
            {
              "name": "Toon en hoeveelheid gedoseerd",
              "good": "Beperkt tot de paar punten die er nu toe doen; geen tipregen, opbouwend geformuleerd."
            },
            {
              "name": "Herschreven, niet doorgeplakt",
              "good": "De eindfeedback is in eigen woorden en zou door de docent ondertekend kunnen worden."
            },
            {
              "name": "Persoonlijk, kennend zinnetje toegevoegd",
              "good": "Bevat minstens één zin die alleen deze docent kan schrijven omdat hij de leerling kent."
            }
          ],
          "referenceAnswer": "Criterium structuur: AI-concept: 'Gebruik duidelijke alineaovergangen en signaalwoorden.' Feitelijk klopt: half — de alinea's zijn er wel, maar de kernzinnen ontbreken, dat zag AI niet. Passend: déze leerling kent signaalwoorden allang, het echte probleem is dat elke alinea pas op het eind verklapt waar hij over gaat. Herschreven naar: 'Zet je kernzin vooraan elke alinea — nu moet ik tot de laatste regel lezen voor ik weet waar je heen wilt. Eén verschuiving per alinea en je betoog wordt meteen overzichtelijker.' Geschrapt: de signaalwoorden-tip (overbodig). Persoonlijk zinnetje: 'Je deed dit bij je vorige tekst precies zo — het is echt jouw enige terugkerende structuurpunt, verder zit het goed in elkaar.' Generieke tip werd een gerichte, herkenbare boodschap met perspectief."
        }
      },
      {
        "title": "Trek de grens — wat besteed je nooit uit?",
        "body": "Leg expliciet vast wat in jouw werkwijze nooit naar AI gaat: het cijfer, en de gevoelige boodschap. Bepaal hoe je het cijfer geeft (zelf, op basis van je gekeurde feedback en rubric, niet door AI laten 'voorstellen') en welke situaties om een menselijk gesprek of een zelf-geschreven boodschap vragen in plaats van geschreven AI-feedback: een onvoldoende na zichtbare inzet, een vermoeden van AI-misbruik, een leerling die in de knel zit. Schrijf voor jezelf één regel die je hier altijd aan houdt. Dit is de borg dat tijdwinst geen verantwoordelijkheidsverlies wordt.",
        "time": "5 min",
        "voorbeeld": "Grensregel docent hbo: 'AI helpt me sneller bij de feedback per criterium; het cijfer bepaal ik zelf op basis van de rubric en mijn gekeurde feedback, en bij een onvoldoende of een fraudevermoeden schrijf ik de boodschap zelf en plan ik een gesprek — die woorden komen nooit uit een model.' Concreet: bij een student die zichtbaar worstelde maar onvoldoende scoorde, geen AI-feedbacktekst, maar een korte persoonlijke notitie plus een uitnodiging om langs te komen.",
        "workspace": {
          "field": "nakijken-grens",
          "label": "Mijn grens: wat ik nooit uitbesteed",
          "shortLabel": "Grens",
          "hint": "Hoe geef je het cijfer · welke situaties vragen een menselijke boodschap · één vaste grensregel",
          "placeholder": "Cijfer: ik bepaal het door ... (niet: AI stelt voor)\nGevoelige boodschappen die ik zelf schrijf: ...\nSituaties die om een gesprek vragen i.p.v. geschreven feedback: ...\nMijn vaste grensregel: '...'",
          "rows": 6,
          "rubric": [
            {
              "name": "Cijfer blijft bij de docent",
              "good": "Beschrijft expliciet dat de docent het cijfer zelf bepaalt op basis van rubric/feedback, niet via een AI-voorstel."
            },
            {
              "name": "Gevoelige boodschappen benoemd",
              "good": "Noemt concrete situaties (onvoldoende na inzet, fraudevermoeden, leerling in de knel) die de docent zelf afhandelt."
            },
            {
              "name": "Gesprek waar geschreven feedback tekortschiet",
              "good": "Onderscheidt gevallen die om een menselijk gesprek vragen van gevallen die met gekeurde feedback kunnen."
            },
            {
              "name": "AVG-/rechtsgevolg-grond benoemd",
              "good": "Koppelt de grens aan verantwoordelijkheid en rechtsgevolg, niet alleen aan gevoel."
            },
            {
              "name": "Eén werkbare vaste regel",
              "good": "Formuleert één concrete regel die de docent in de praktijk kan toepassen en navertellen."
            }
          ],
          "referenceAnswer": "Cijfer: ik bepaal het zelf door mijn gekeurde feedback naast de rubric te leggen en de niveaus op te tellen; AI stelt nooit een cijfer voor, want een beoordeling met rechtsgevolg mag niet feitelijk door een model worden bepaald (AVG: geen ingrijpend besluit puur geautomatiseerd). Zelf geschreven boodschappen: een onvoldoende na zichtbare inzet, een vermoeden van AI-misbruik, en signalen dat een leerling het zwaar heeft. Die vragen om een gesprek of een persoonlijke notitie, niet om gepolijste AI-feedback die afstandelijk of zelfs kwetsend kan landen. Mijn vaste grensregel: 'AI versnelt mijn concept; het oordeel, het cijfer en elke boodschap die pijn kan doen schrijf ik zelf — ik ben de afzender, niet de doorgeefluik.'"
        }
      },
      {
        "title": "Meet de tijdwinst en veranker",
        "body": "Kijk één stapel (of een steekproef ervan) twee keer na: een paar werken op je gebruikelijke manier, een paar met de rubric-eerst-werkwijze, en klok de tijd per werk eerlijk — inclusief het keuren en herschrijven. Vergelijk niet alleen de minuten maar ook de kwaliteit: is de feedback bij stuk 20 nu net zo rijk als bij stuk 1? Bepaal dan of en hoe je het verankert: welke opdrachten lenen zich ervoor, en welke afspraak maak je met jezelf over de AVG-stap (anonimiseren/omgeving) zodat die niet wegvalt onder tijdsdruk. Werkdrukverlaging die je niet meet, is een aanname.",
        "time": "8 min",
        "voorbeeld": "Meting docent maatschappijleer, 24 verslagen. Oude manier: gemiddeld 9 min/verslag, feedback merkbaar dunner vanaf stuk 15. Nieuwe manier: 11 min voor de eerste twee (rubric scherpstellen kostte tijd), daarna 6 min/verslag inclusief keuren — en de feedback bij stuk 24 net zo concreet als bij stuk 1. Netto: ±30% sneller over de stapel én gelijkmatiger kwaliteit. Verankering: alleen inzetten bij de drie grote schrijfopdrachten per jaar; de AVG-stap (anonimiseren) als vast eerste blokje in het sjabloon, zodat hij niet vergeten wordt.",
        "workspace": {
          "field": "nakijken-tijdwinst",
          "label": "Mijn tijdwinst-meting + verankering",
          "shortLabel": "Tijdwinst",
          "hint": "Tijd oud vs. nieuw (incl. keuren) · kwaliteit over de stapel · waar inzetten · AVG-borging",
          "placeholder": "Meting: oud ... min/werk, nieuw ... min/werk (incl. keuren)\nKwaliteit bij begin vs. eind van de stapel: ...\nNetto winst: ...\nWaar wél/niet inzetten: ...\nAVG-stap borgen door: ...",
          "rows": 7,
          "rubric": [
            {
              "name": "Eerlijke meting oud vs. nieuw",
              "good": "Vergelijkt tijd per werk op beide manieren, inclusief het keuren/herschrijven — niet alleen de AI-stap."
            },
            {
              "name": "Kwaliteit over de stapel meegewogen",
              "good": "Kijkt of de feedback aan het eind van de stapel net zo rijk is als aan het begin, niet alleen naar minuten."
            },
            {
              "name": "Realistische netto-conclusie",
              "good": "Trekt een nuchtere conclusie over winst, inclusief de opstartkosten van rubric scherpstellen."
            },
            {
              "name": "Gerichte verankering",
              "good": "Benoemt voor welke opdrachten het wél en niet loont, in plaats van 'overal voortaan'."
            },
            {
              "name": "AVG-stap geborgd",
              "good": "Maakt een concrete afspraak waardoor anonimiseren/conforme omgeving niet wegvalt onder tijdsdruk."
            }
          ],
          "referenceAnswer": "Meting: Engels, 22 leesverslagen. Oud: ±8 min/verslag, vanaf stuk 14 merkbaar korter en vlakker. Nieuw: eerste drie ±10 min (rubric en prompt aanscherpen), daarna ±5 min/verslag inclusief keuren en herschrijven; feedback bij stuk 22 even concreet als bij stuk 1. Netto: ruwweg een derde sneller over de hele stapel, en — belangrijker — gelijkmatige kwaliteit zonder de avond-inzakking. Waar wél: de grote schrijf- en verslagopdrachten waar veel terugkerend criteriumwerk in zit. Waar niet: korte, eigenzinnige creatieve opdrachten waar elke reactie maatwerk is — daar wint de rubric weinig. AVG borgen: de anonimiseer-/omgevingstap staat als verplicht eerste blokje in mijn nakijksjabloon en in de prompt, zodat hij ook bij een volle stapel op donderdagavond niet overgeslagen wordt."
        }
      }
    ],
    "vakvariaties": [
      {
        "vak": "Nederlands en talen (vo)",
        "body": "Schrijfopdrachten zijn de natuurlijke thuisbasis: brieven, betogen, verhalen, samenvattingen. Laat AI per rubriccriterium (inhoud, structuur, register, taalverzorging) een concept opstellen tegen jouw niveaus, en herschrijf naar de leerling. De winst is groot omdat de criteria terugkeren over de hele stapel; de valkuil is dat AI taalfouten 'wegpoetst' in zijn samenvatting — controleer de foutsignalering altijd zelf."
      },
      {
        "vak": "Exacte vakken (vo/havo-vwo)",
        "body": "Bij practicumverslagen, onderzoeksopdrachten en open vraagstukken kan AI per criterium (vraagstelling, methode, verwerking, conclusie) conceptfeedback geven. Let op: AI is zwak in het beoordelen van de juistheid van een berekening of redenering — gebruik het voor feedback op verslaglegging en structuur, en houd de inhoudelijke nakijk-juistheid strikt bij jezelf."
      },
      {
        "vak": "Mbo · beroepsgerichte opdrachten",
        "body": "Plannen, adviezen, offertes, reflectieverslagen: laat AI tegen het beoordelingsmodel uit het kwalificatiedossier conceptfeedback opstellen, en keur op beroepsechtheid. Anonimiseer extra zorgvuldig: stage- en klantgegevens zijn ook persoonsgegevens van derden. De gevoelige boodschap (een student die zijn stage dreigt te missen) schrijf en bespreek je altijd zelf."
      },
      {
        "vak": "Hbo · verslagen en essays",
        "body": "Bij langere academische producten kan AI per beoordelingscriterium (probleemstelling, theoretisch kader, analyse, onderbouwing) een concept geven dat je nakijktijd op de eerste leesronde verkort. Houd het cijfer en de borging van het eindniveau strikt bij jezelf, en wees alert op bronvermeldingen: AI kan in zijn feedback verzonnen verbeterbronnen aandragen die je niet ongezien doorgeeft."
      },
      {
        "vak": "Kunst- en praktijkvakken",
        "body": "Voor schriftelijke onderdelen (procesverslag, ontwerpverantwoording, reflectie) werkt de rubric-eerst-aanpak; voor het beoordelen van het werkstuk zelf veel minder, omdat AI het maakproduct niet betrouwbaar ziet. Zet AI dus in op de tekst rond het werk, en houd het oordeel over het werk zelf — en zeker het cijfer — volledig bij jezelf."
      }
    ],
    "valkuilen": [
      {
        "titel": "Het cijfer toch aan AI vragen",
        "watGebeurtEr": "Onder tijdsdruk vraag je 'en welk cijfer past hierbij?'. AI noemt een getal, je neemt het over, en feitelijk heeft een model je beoordeling bepaald — met rechtsgevolg voor de leerling en zonder dat jij het oordeel droeg.",
        "fix": "Verbied het cijfer expliciet in je prompt en in je grensregel. Bepaal het cijfer zelf door je gekeurde feedback naast de rubric te leggen. AI levert het materiaal, niet het oordeel."
      },
      {
        "titel": "Herleidbaar leerlingwerk in publieke AI",
        "watGebeurtEr": "Je plakt een brief mét naam, klas en bedrijf in een gratis chatbot. Daarmee verwerk je persoonsgegevens van een leerling (en soms van derden) buiten de schoolomgeving, zonder grondslag of grip op wat ermee gebeurt.",
        "fix": "Anonimiseer vóór invoer (naam, klas, bedrijf, herleidbare details weg) of werk uitsluitend in een AVG-conforme omgeving met verwerkersafspraken. Maak die stap een vast, niet-overslaanbaar eerste blokje."
      },
      {
        "titel": "Conceptfeedback ongekeurd doorsturen",
        "watGebeurtEr": "De AI-tekst leest netjes, dus je plakt hem onder het werk. De feedback is generiek, mist wat déze leerling nodig heeft, en bevat soms een fout die AI 'zag' maar er niet staat — de leerling merkt dat het niet over hem gaat.",
        "fix": "Behandel conceptfeedback als eerste versie. Lees met drie filters (feitelijk, passend, toon), schrap, herschrijf, en voeg het persoonlijke zinnetje toe dat alleen jij kunt schrijven. Ondertekenbaar of het gaat niet weg."
      },
      {
        "titel": "Geen rubric — generieke middenmoot",
        "watGebeurtEr": "Je vraagt 'geef feedback op deze tekst' zonder rubric. AI verzint een eigen, vlakke maatstaf en levert tips die op elk werk passen ('zorg voor een sterke openingszin'), niet geijkt op jouw lesdoel.",
        "fix": "Leg altijd eerst de rubric vast en geef die mee in de prompt. Zonder rubric is AI een gokmachine; mét rubric loopt het jóuw criteria langs — precies de deterministische aanpak die het platform ook bij het scoren gebruikt."
      },
      {
        "titel": "Tijdwinst aannemen zonder te meten",
        "watGebeurtEr": "Het voelt sneller, dus je gelooft dat het sneller is. Maar het keuren en herschrijven kost ook tijd, en bij sommige opdrachten verlies je meer aan rubric-scherpstellen dan je wint — je verlaagt geen werkdruk, je verplaatst hem.",
        "fix": "Klok één stapel eerlijk op beide manieren, inclusief het keuren. Beslis op basis van de meting waar je het inzet en waar niet. Niet alle nakijkwerk is AI-rendabel, en dat eerlijk zien hoort bij de module."
      }
    ],
    "eindcriteria": [
      {
        "criterium": "Delegeerbaarheid scherp",
        "onder": "Nakijken als één blok gezien; oordeel en concept lopen door elkaar.",
        "op": "De vier handelingen onderscheiden, met opstelwerk delegeerbaar en oordeelswerk niet — toegepast op een eigen opdracht.",
        "boven": "+ Tijdsverdeling onderbouwd en gebruikt om bewust te kiezen wáár AI loont en waar de docent onmisbaar blijft."
      },
      {
        "criterium": "Rubric-eerst",
        "onder": "Geen expliciete rubric, of vage termen die AI zelf moet invullen.",
        "op": "3-5 waarneembaar geformuleerde criteria met onderscheiden niveaus, geijkt op het lesdoel en bruikbaar als AI-instructie.",
        "boven": "+ Rubric zo scherp dat de conceptfeedback meteen raak is en navolgbaar door een collega toe te passen."
      },
      {
        "criterium": "Keuren en herschrijven",
        "onder": "AI-feedback ongekeurd of woordelijk doorgegeven.",
        "op": "Conceptfeedback gefilterd op feitjuistheid, passendheid en toon; herschreven tot ondertekenbare, persoonlijke feedback.",
        "boven": "+ Per criterium gedocumenteerd wat overgenomen, geschrapt en toegevoegd is, met een zinnetje dat alleen déze docent kon schrijven."
      },
      {
        "criterium": "AVG en grens",
        "onder": "Herleidbaar werk in publieke AI, of het cijfer/de gevoelige boodschap aan AI overgelaten.",
        "op": "Werk geanonimiseerd of in conforme omgeving; cijfer en gevoelige boodschap expliciet voorbehouden aan de docent.",
        "boven": "+ Eén vaste grensregel geformuleerd en de AVG-stap geborgd zodat hij niet wegvalt onder tijdsdruk."
      }
    ],
    "reflection": [
      "Waar lag tot nu toe jouw eigen verleiding om het oordeel uit te besteden — het cijfer, of misschien de moeilijke boodschap — en wat zegt dat over waar de werkdruk je het hardst raakt?",
      "Bij welke opdracht in jouw vak levert de rubric-eerst-aanpak het meeste op, en bij welke opdracht verlies je juist meer aan scherpstellen dan je wint — hoe weet je dat zeker?",
      "Een leerling vraagt: 'Heeft een computer mijn werk nagekeken?' Wat is jouw eerlijke antwoord, en welke werkverdeling tussen jou en AI wil je dat dat antwoord beschrijft?"
    ],
    "checklist": [
      "Eén terugkerende opdracht gekozen en het nakijkwerk in vier handelingen gesplitst (delegeerbaar vs. niet)",
      "Expliciete rubric geschreven: 3-5 waarneembare criteria met onderscheiden niveaus, geijkt op het lesdoel",
      "Voorbeeldwerk geanonimiseerd of conforme omgeving gebruikt — geen herleidbaar leerlingwerk in publieke AI",
      "Conceptfeedback per criterium laten opstellen met de rubric in de prompt, expliciet zónder cijfer",
      "Conceptfeedback gekeurd op feitjuistheid, passendheid en toon, en herschreven tot ondertekenbare feedback",
      "Per leerling minstens één persoonlijk zinnetje toegevoegd dat alleen jij kon schrijven",
      "Grens vastgelegd: cijfer en gevoelige boodschap blijven bij jou, met één vaste grensregel",
      "Tijdwinst eerlijk gemeten (incl. keuren) en besloten waar je de aanpak wel en niet inzet, met de AVG-stap geborgd"
    ],
    "nextLesson": "administratie-en-communicatie"
  },
  "administratie-en-communicatie": {
    "format": "diepteles",
    "summary": "Je maakt van je terugkerende schrijftaken — mail, oudercommunicatie, verslagen, aankondigingen en planning — een werkbare sjabloonkit met AI als opsteller en jou als verantwoordelijke afzender. Je leert toon en register afstemmen op de ontvanger en doet een echte AVG-check op een ouderbericht. Aan het eind heb je 2-3 herbruikbare sjablonen die je morgen kunt gebruiken, plus een vaste werkwijze om herleidbare leerlinggegevens uit publieke AI te houden. Het uitgangspunt: AI levert het concept, jouw oordeel en handtekening maken het af.",
    "duration": {
      "total": "60 minuten",
      "blocks": [
        {
          "label": "Aanleiding & kader",
          "min": 8
        },
        {
          "label": "Schrijftaken in kaart",
          "min": 8
        },
        {
          "label": "Sjablonen bouwen",
          "min": 14
        },
        {
          "label": "Toon & register afstemmen",
          "min": 12
        },
        {
          "label": "AVG-check op ouderbericht",
          "min": 10
        },
        {
          "label": "Kit opleveren & reflectie",
          "min": 8
        }
      ]
    },
    "opening": {
      "eyebrow": "Aanleiding",
      "aanleiding": "Het is donderdag, kwart over vier. Je hebt nog drie mails openstaan: een ouder die voor de tweede keer vraagt waarom haar zoon een onvoldoende heeft, een aankondiging voor de ouderavond die de mentor van je wil hebben, en een korte reactie op een collega over de roosterwijziging. Geen van die drie is moeilijk. Ze kosten je samen toch veertig minuten, omdat je bij elke mail opnieuw begint met de juiste openingszin zoeken, de toon afwegen en checken of je niet te kort of te streng klinkt.\n\nDat is het patroon dat de meeste werkdruk in administratie en communicatie veroorzaakt: niet de moeilijkheid, maar de herhaling en het opnieuw beginnen. Je schrijft dit schooljaar tientallen vergelijkbare berichten — een uitnodiging, een herinnering, een verslagje van een gesprek, een bevestiging. Elk bericht voelt als maatwerk, terwijl de structuur bijna altijd hetzelfde is. Daar zit precies de ruimte die AI kan invullen: het ruwe concept opstellen, varianten aanbieden, de toon aanzetten op zakelijk of warm. Wat AI níet kan, is bepalen wat waar is over déze leerling, of de relatie met déze ouder aanvoelen. Dat blijf jij.\n\nDeze les gaat niet over sneller typen. Hij gaat over het bouwen van een kleine voorraad sjablonen, zodat je niet meer bij nul begint. AI is je opsteller; jij bent de afzender die leest, corrigeert en ondertekent.",
      "waaromNu": "Communicatie met ouders, collega's en de organisatie is een kerntaak die in DigCompEdu apart benoemd wordt onder Organisational communication: professioneel en doelgericht communiceren met de schoolgemeenschap. AI maakt het opstellen sneller, maar verschuift de verantwoordelijkheid niet. Wie als afzender onder een bericht staat, is verantwoordelijk voor de inhoud, de toon én voor het feit dat er geen herleidbare gegevens via een publiek AI-systeem naar buiten zijn gelekt. Nu de meeste docenten dagelijks toegang hebben tot een AI-assistent, is het de moeite waard om dat gebruik één keer goed in te richten in plaats van het per mail te improviseren."
    },
    "conceptueel": {
      "eyebrow": "Conceptueel kader",
      "intro": "De rode draad van deze module is dat niet alle werkdruk AI-oplosbaar is. Het loont om je schrijftaken in tweeën te splitsen. Aan de ene kant staan taken die tijdrovend én delegeerbaar zijn: het eerste concept van een mail, drie varianten van een aankondiging, een samenvatting van een gespreksverslag, de standaardtekst van een herinnering. Dat is precies het werk waar AI goed in is — vorm, structuur, register. Aan de andere kant staan taken die tijdrovend zijn maar níet delegeerbaar: oordelen of een onvoldoende terecht is, aanvoelen hoe je een bezorgde ouder geruststelt zonder iets te beloven wat je niet waar kunt maken, en de eindverantwoordelijkheid voor wat er onder jouw naam de deur uitgaat.\n\nAI is in dit werk een opsteller, geen afzender. Een opsteller levert je een concept aan op basis van wat jij invoert. De afzender — jij — leest het, corrigeert feiten, stelt de toon bij en plaatst zijn naam eronder. Dat onderscheid is niet cosmetisch. Het bepaalt waar je je aandacht op richt: niet op het bedenken van de openingszin, maar op het controleren of de inhoud klopt en de relatie dient.\n\nHet tweede principe is register. Een bericht aan een ouder van een twaalfjarige in het vmbo vraagt een andere toon dan een mail aan een collega of een formele brief aan de examencommissie. Register is de mate van formaliteit en de warmte van een tekst. AI kan dat register sturen als je het expliciet vraagt — 'zakelijk maar warm', 'formeel', 'kort en vriendelijk' — maar de standaardtoon van een AI-model is vaak nét te glad, te uitgebreid of te afstandelijk. Die gladheid is de grootste valkuil: een bericht dat correct is maar onpersoonlijk, en daarmee de relatie schaadt.\n\nHet derde principe is AVG-discipline. Zodra je werkt met communicatie over leerlingen en ouders, raak je persoonsgegevens. In een publieke AI-omgeving horen geen namen, geboortedata, klassen-plus-naam-combinaties, diagnoses of andere herleidbare gegevens. Je werkt met een sjabloon vol placeholders en abstraheert: 'een leerling die de afgelopen weken minder aanwezig was'. De concrete naam vul je pas in nadat de tekst uit het AI-systeem terug is, in je eigen mailprogramma.",
      "mentalModel": {
        "naam": "Opsteller en afzender",
        "beschrijving": "AI stelt op; jij verstuurt. De opsteller levert structuur, register en een eerste concept op basis van geanonimiseerde input. De afzender leest, controleert de feiten, stelt de toon bij en ondertekent. De handtekening — letterlijk en figuurlijk — markeert waar de verantwoordelijkheid ligt: altijd bij jou, nooit bij het model."
      },
      "kernbegrippen": [
        {
          "term": "Sjabloon met placeholders",
          "uitleg": "Een herbruikbare basistekst waarin variabele delen tussen haakjes staan, zoals [vak], [periode] of [reden]. Je vult de echte gegevens pas in ná het AI-systeem, in je eigen mail."
        },
        {
          "term": "Register",
          "uitleg": "De mate van formaliteit en warmte van een tekst, afgestemd op de ontvanger. Een mail aan een ouder, een collega en de examencommissie vragen elk een ander register."
        },
        {
          "term": "Abstraheren",
          "uitleg": "Een concrete situatie zo herformuleren dat hij niet meer naar een individu herleidbaar is, bijvoorbeeld 'een leerling die de afgelopen weken vaker afwezig was' in plaats van een naam."
        },
        {
          "term": "Afzenderverantwoordelijkheid",
          "uitleg": "Wie het bericht verstuurt, is verantwoordelijk voor inhoud, toon en privacy — ook als AI de tekst opstelde. Het model is opsteller, jij bent juridisch en relationeel de afzender."
        }
      ]
    },
    "learningGoals": [
      "Je benoemt minstens vijf van je eigen terugkerende schrijftaken en bepaalt per taak of die delegeerbaar is aan AI of bij jou hoort.",
      "Je bouwt met AI minstens twee herbruikbare sjablonen met placeholders die je zonder herleidbare gegevens kunt vullen.",
      "Je stuurt het register van een AI-concept gericht bij naar zakelijk, warm of formeel en herkent de te gladde standaardtoon.",
      "Je voert een AVG-check uit op een ouderbericht en haalt alle herleidbare gegevens eruit voordat het richting een publiek AI-systeem gaat."
    ],
    "scenario": {
      "title": "Werksituatie",
      "context": "Je bent mentor en vakdocent. In een gemiddelde week verstuur je een uitnodiging voor een gesprek, een herinnering over een deadline, een reactie op een bezorgde ouder, een aankondiging voor de mentorgroep en een kort verslag van een driehoeksgesprek. Je begint elke keer opnieuw en raakt op donderdagmiddag door je energie heen op precies dit soort taken.",
      "role": "Mentor en vakdocent die zelf afzender blijft van alle communicatie",
      "tools": "Een AI-assistent via je school-account (oai-praktijklab of vergelijkbaar), je eigen mailprogramma, en een tekstdocument waarin je je sjablonenkit bewaart."
    },
    "steps": [
      {
        "title": "Breng je terugkerende schrijftaken in kaart",
        "body": "Begin niet bij AI, maar bij jezelf. Maak een lijst van de schrijftaken die je dit schooljaar steeds opnieuw doet: mail aan ouders, herinneringen, aankondigingen, korte verslagen, planningsberichten. Zet bij elke taak hoe vaak je hem ongeveer doet en — belangrijker — of het werk delegeerbaar is aan een opsteller of dat het jouw oordeel vraagt. Een uitnodiging voor een ouderavond is delegeerbaar. De inschatting of een leerling dreigt vast te lopen is dat niet; die formuleer je zelf, AI helpt hooguit met de verwoording. Deze splitsing bepaalt waar je sjablonen voor bouwt.",
        "time": "8 min",
        "voorbeeld": "Een mentor in het vmbo lijstte op: gespreksuitnodiging (10x/jaar, delegeerbaar), deadline-herinnering (20x, delegeerbaar), reactie op bezorgde ouder (8x, half delegeerbaar — vorm wel, inhoud niet), verslag driehoeksgesprek (15x, vorm delegeerbaar), absentiemelding doorgeven (wekelijks, delegeerbaar). Conclusie: vier van de vijf lenen zich voor een sjabloon.",
        "workspace": {
          "field": "schrijftaken-inventarisatie",
          "label": "Lijst minstens vijf terugkerende schrijftaken op. Zet per taak: hoe vaak per jaar, en of het delegeerbaar is aan AI of jouw oordeel vraagt (of allebei).",
          "shortLabel": "Schrijftaken",
          "hint": "Denk aan mail, herinneringen, aankondigingen, verslagen en planning. De vraag is steeds: zit het tijdrovende in de vorm (delegeerbaar) of in het oordeel (niet delegeerbaar)?",
          "placeholder": "1. Gespreksuitnodiging — 10x/jaar — delegeerbaar (vorm staat vast)\n2. Reactie bezorgde ouder — 8x/jaar — half: toon delegeerbaar, inhoud is mijn oordeel\n3. ...",
          "rows": 8,
          "rubric": [
            {
              "name": "Minstens vijf concrete taken",
              "good": "Vijf of meer herkenbare schrijftaken uit de eigen praktijk, geen vage categorieën."
            },
            {
              "name": "Frequentie per taak benoemd",
              "good": "Bij elke taak staat een ruwe inschatting van hoe vaak die voorkomt, zodat winst zichtbaar wordt."
            },
            {
              "name": "Delegeerbaarheid afgewogen",
              "good": "Per taak is bepaald of de vorm delegeerbaar is of dat het oordeel bij de docent hoort."
            },
            {
              "name": "Onderscheid vorm versus oordeel",
              "good": "Minstens één taak is als half-delegeerbaar herkend: vorm wel, inhoud niet."
            }
          ],
          "referenceAnswer": "1. Gespreksuitnodiging ouders — ~10x/jaar — delegeerbaar: structuur en toon liggen vast, alleen datum en reden variëren.\n2. Deadline-herinnering aan mentorgroep — ~20x/jaar — delegeerbaar: standaardvorm, alleen vak en datum wisselen.\n3. Reactie op bezorgde ouder over een cijfer — ~8x/jaar — half delegeerbaar: de toon en opbouw kan AI opstellen, maar of het cijfer terecht is en wat ik beloof, is mijn oordeel.\n4. Kort verslag van een driehoeksgesprek — ~15x/jaar — vorm delegeerbaar: ik dicteer de feiten geanonimiseerd, AI maakt er nette zinnen van; de inschatting blijft van mij.\n5. Aankondiging activiteit/ouderavond — ~6x/jaar — delegeerbaar: volledig vormwerk.\nConclusie: vier taken lenen zich voor een kant-en-klaar sjabloon, één (reactie op ouder) krijgt een sjabloon voor de vorm maar vraagt elke keer mijn eigen oordeel over de inhoud."
        }
      },
      {
        "title": "Bouw twee tot drie herbruikbare sjablonen met AI",
        "body": "Kies twee of drie van je delegeerbare taken en laat AI er een sjabloon van maken — geen eenmalige mail, maar een herbruikbaar raamwerk met placeholders. Vraag expliciet om variabele delen tussen haakjes: [naam ontvanger], [vak], [datum], [reden]. Zo houd je herleidbare gegevens automatisch buiten het AI-systeem: je vult de echte naam pas in je mailprogramma in. Geef in je prompt mee voor wie het bericht is, welk doel het heeft en hoe lang het ongeveer mag zijn. Beoordeel het concept daarna kritisch: klopt de structuur, mist er een stap, staat er niets in wat niet waar is?",
        "time": "14 min",
        "voorbeeld": "Prompt: 'Maak een herbruikbaar e-mailsjabloon voor een uitnodiging aan een ouder voor een tienminutengesprek. Houd variabele delen tussen vierkante haken: [aanhef], [reden], [twee datumvoorstellen], [contactgegevens]. Toon: zakelijk maar warm, maximaal 120 woorden, je-vorm naar de ouder. Begin niet met een compliment.' Het resultaat sla je op als sjabloon, niet als losse mail.",
        "workspace": {
          "field": "sjabloon-bouwen",
          "label": "Plak hier één sjabloon dat je met AI hebt gebouwd, inclusief de placeholders tussen haakjes. Schrijf er kort onder welke prompt je gebruikte en wat je nog hebt aangepast.",
          "shortLabel": "Sjabloon",
          "hint": "Een goed sjabloon heeft variabele delen tussen [haakjes], een vaste structuur en een duidelijk register. Geen echte namen of gegevens in het sjabloon — die horen in je eigen mail.",
          "placeholder": "SJABLOON: Gespreksuitnodiging\nBeste [aanhef ouder/verzorger],\n[reden voor het gesprek, één zin]\nIk stel voor: [datum 1] of [datum 2]...\n\nPROMPT die ik gebruikte: ...\nWat ik aanpaste: ...",
          "rows": 12,
          "rubric": [
            {
              "name": "Placeholders tussen haakjes",
              "good": "Variabele delen staan herkenbaar tussen haakjes; er staan geen echte namen of gegevens in."
            },
            {
              "name": "Vaste, logische structuur",
              "good": "Het sjabloon heeft een herbruikbare opbouw: aanhef, kern, voorstel/actie, afsluiting."
            },
            {
              "name": "Register expliciet gekozen",
              "good": "De toon past bij de ontvanger en is bewust gestuurd via de prompt, niet de AI-standaard."
            },
            {
              "name": "Eigen aanpassing benoemd",
              "good": "De docent beschrijft wat hij na het AI-concept zelf bijstelde — bewijs van afzenderschap."
            },
            {
              "name": "Prompt is herbruikbaar",
              "good": "De gedeelde prompt benoemt ontvanger, doel, lengte en toon, zodat hij opnieuw bruikbaar is."
            }
          ],
          "referenceAnswer": "SJABLOON: Gespreksuitnodiging ouder\n\nBeste [aanhef: ouder/verzorger van],\n\nIk wil graag even met u in gesprek over [reden, één feitelijke zin, bijv. de voortgang in mijn vak]. Het lukt mij om dat kort en concreet te houden.\n\nZou een van deze momenten u schikken: [datum/tijd 1] of [datum/tijd 2]? Als beide niet passen, hoor ik graag wanneer het u wel uitkomt.\n\nU kunt mij bereiken via [mailadres] of [telefoon/telefonisch spreekuur].\n\nMet vriendelijke groet,\n[eigen naam], [functie]\n\nPROMPT die ik gebruikte: 'Maak een herbruikbaar e-mailsjabloon voor een gespreksuitnodiging aan een ouder. Variabele delen tussen vierkante haken. Toon: zakelijk maar warm, je-vorm naar de ouder, maximaal 110 woorden, begin niet met een compliment of een dankbetuiging.'\n\nWat ik aanpaste: de AI-versie opende met 'Hopelijk gaat alles goed met u' — dat klonk leeg, dus geschrapt. Ook 'graag wil ik u uitnodigen voor een gesprek over de zorgwekkende ontwikkeling' afgezwakt naar een neutrale formulering, omdat de reden per geval verschilt en ik niet bij voorbaat alarmerend wil klinken."
        }
      },
      {
        "title": "Stem toon en register af op de ontvanger",
        "body": "Neem één van je concepten en laat AI er drie registervarianten van maken: zakelijk, warm en formeel. Vergelijk ze hardop. Welke past bij déze ontvanger? De truc zit niet in het vragen om 'een vriendelijke mail' — dat levert juist de gladde, onpersoonlijke AI-toon op die de relatie schaadt. Stuur scherper: 'warm maar kort, geen overdreven complimenten', of 'formeel, maar niet afstandelijk'. Let op zinnen die te perfect klinken om van jou te komen; die herschrijf je in je eigen woorden. De toon moet klinken alsof jij het hebt geschreven, want jij bent de afzender.",
        "time": "12 min",
        "voorbeeld": "Eén ouderbericht, drie versies. Zakelijk: 'Ik laat u weten dat...'. Warm: 'Ik wilde u even persoonlijk bijpraten over...'. Formeel: 'Hierbij bericht ik u dat...'. Voor een bezorgde ouder van een twaalfjarige kiest de mentor de warme versie, maar schrapt de zin 'Wat fijn dat u zo betrokken bent' — die voelde ingestudeerd en daarmee onecht.",
        "workspace": {
          "field": "register-afstemmen",
          "label": "Plak hier dezelfde boodschap in twee of drie registers (zakelijk/warm/formeel). Kies er één voor een concrete ontvanger en leg in één à twee zinnen uit waarom, en wat je nog bijschaafde.",
          "shortLabel": "Register",
          "hint": "Vraag AI niet om 'aardig', maar stuur het register precies. Markeer de te gladde of ingestudeerde zinnen en herschrijf ze in je eigen woorden.",
          "placeholder": "ZAKELIJK: ...\nWARM: ...\nFORMEEL: ...\n\nGekozen voor: ... omdat de ontvanger ...\nBijgeschaafd: ik schrapte de zin '...' omdat die te glad/onecht klonk.",
          "rows": 12,
          "rubric": [
            {
              "name": "Minstens twee duidelijke registers",
              "good": "De varianten verschillen merkbaar in formaliteit en warmte, niet alleen in losse woorden."
            },
            {
              "name": "Keuze gekoppeld aan ontvanger",
              "good": "De gekozen variant past aantoonbaar bij een concrete ontvanger en situatie."
            },
            {
              "name": "Gladde AI-toon herkend",
              "good": "Minstens één ingestudeerde of te perfecte zin is benoemd en herschreven."
            },
            {
              "name": "Eigen stem hoorbaar",
              "good": "De definitieve tekst klinkt alsof de docent zelf de afzender is, niet het model."
            }
          ],
          "referenceAnswer": "Boodschap: een leerling heeft een toets niet gehaald en de ouder wil weten hoe het verder gaat.\n\nZAKELIJK: 'Ik laat u weten dat de toets van vorige week onvoldoende is afgesloten. We pakken dit op met een herkansing in week [x]; tot die tijd oefent uw kind gericht met [onderdeel].'\n\nWARM: 'Ik wilde u even persoonlijk bijpraten. De toets van vorige week is helaas niet goed gegaan, maar dat is goed op te vangen: er komt een herkansing in week [x] en we weten precies aan welk onderdeel we gaan werken.'\n\nFORMEEL: 'Hierbij bericht ik u dat de recente toets onvoldoende is beoordeeld. Conform de afspraken volgt een herkansing in week [x].'\n\nGekozen voor: de warme versie, omdat de ouder bezorgd is over een twaalfjarige en ik de relatie wil houden zonder de onvoldoende te verbloemen.\n\nBijgeschaafd: AI had er 'Maakt u zich vooral geen zorgen!' aan toegevoegd — geschrapt, want dat is een belofte die ik niet kan waarmaken en het klinkt ingestudeerd. 'Helaas niet goed gegaan' liet ik staan: eerlijk en gewoon."
        }
      },
      {
        "title": "Doe een AVG-check op een ouderbericht",
        "body": "Pak een echt ouderbericht dat je laatst hebt gestuurd of zou willen sturen, en behandel het alsof het richting een publiek AI-systeem gaat. Markeer alles wat herleidbaar is: voor- en achternaam, klas-plus-naam, geboortedatum, adres, een diagnose of zorgmelding, een combinatie van details die samen naar één leerling wijzen. Vervang elk daarvan door een placeholder of een geabstraheerde formulering. Pas als het bericht echt anoniem is, mag het de prompt in. De concrete gegevens vul je later in je eigen mail in. Dit is geen formaliteit: één naam in een publieke chat is een datalek waarvoor jij als afzender verantwoordelijk bent.",
        "time": "10 min",
        "voorbeeld": "Origineel: 'Sasha de Vries uit 2B was de afgelopen drie weken vaak afwezig en lijkt thuis veel spanning te ervaren.' Geanonimiseerd voor AI: 'Een leerling uit de onderbouw was de afgelopen weken vaker afwezig; er lijkt sprake van spanning thuis.' De naam, klas en het herleidbare detail zijn eruit. De echte naam komt pas terug in de definitieve mail in Outlook.",
        "workspace": {
          "field": "avg-check-ouderbericht",
          "label": "Plak een (verzonnen of geanonimiseerd) ouderbericht. Markeer welke gegevens herleidbaar zijn en schrijf de AVG-veilige versie eronder die je wél aan AI zou geven.",
          "shortLabel": "AVG-check",
          "hint": "Herleidbaar = naam, klas+naam, geboortedatum, adres, diagnose/zorg, of een combinatie van details die samen naar één leerling wijzen. Abstraheer naar 'een leerling die...'.",
          "placeholder": "ORIGINEEL (niet in AI plakken):\n...\n\nHERLEIDBAAR: naam, klas, [detail]\n\nAVG-VEILIGE VERSIE (mag wel in AI):\nEen leerling die ...",
          "rows": 10,
          "rubric": [
            {
              "name": "Herleidbare gegevens benoemd",
              "good": "Naam, klas-plus-naam en bijzondere details zijn als herleidbaar gemarkeerd."
            },
            {
              "name": "Bijzondere gegevens herkend",
              "good": "Een zorgmelding, diagnose of thuissituatie is herkend als extra gevoelig."
            },
            {
              "name": "Correct geabstraheerd",
              "good": "De veilige versie is niet meer naar één individu te herleiden, maar behoudt de kern."
            },
            {
              "name": "Invulvolgorde klopt",
              "good": "Echte gegevens worden pas ná het AI-systeem ingevuld, in de eigen mailomgeving."
            }
          ],
          "referenceAnswer": "ORIGINEEL (niet in AI plakken):\n'Beste mevrouw Janssen, ik maak me zorgen over Liam uit 1C. Hij was de afgelopen drie weken vier keer afwezig en vertelde mij dat het thuis onrustig is sinds de scheiding. Kunnen we een afspraak maken?'\n\nHERLEIDBAAR: achternaam ouder (Janssen), voornaam leerling (Liam), klas (1C) — die combinatie wijst naar één leerling. Bijzonder/gevoelig: de scheiding thuis en de zorgmelding.\n\nAVG-VEILIGE VERSIE (mag wel in AI):\n'Maak een korte, warme mail aan een ouder. Aanleiding: een leerling uit de onderbouw was de afgelopen weken meerdere keren afwezig en lijkt thuis een lastige periode te hebben. Ik wil een gesprek voorstellen, zonder de privé-situatie in de mail uit te spellen. Variabele delen tussen [haken].'\n\nDe echte naam, klas en de specifieke thuissituatie vul ik pas in de definitieve mail in Outlook in — die gaan nooit door het AI-systeem. De thuissituatie benoem ik in de mail zelf bovendien terughoudend, omdat ouders dat liever in een gesprek bespreken."
        }
      },
      {
        "title": "Maak een vaste reactie-flow voor een lastige mail",
        "body": "Niet elke mail past in een sjabloon. Voor de half-delegeerbare taak — bijvoorbeeld een reactie op een bezorgde of boze ouder — bouw je geen kant-en-klare tekst, maar een vaste werkwijze. Jij bepaalt eerst de kern: wat klopt er, wat beloof ik wel en niet, welke toon hoort hierbij. Die kern, geanonimiseerd, geef je aan AI om netjes te verwoorden. Zo blijft het oordeel bij jou en doet AI alleen het taalwerk. Schrijf je flow op als een paar stappen die je elke keer kunt volgen, zodat je ook bij een geladen mail niet hoeft te improviseren.",
        "time": "8 min",
        "voorbeeld": "Flow voor een boze ouder: (1) ik schrijf in steekwoorden wat feitelijk klopt en wat ik wel/niet kan beloven; (2) ik abstraheer naar 'een ouder die ontevreden is over een beoordeling'; (3) AI verwoordt het rustig en zonder defensieve toon; (4) ik lees na op feiten en op één menselijke zin die laat zien dat ik de zorg serieus neem; (5) naam en details vul ik in mijn mail in.",
        "workspace": {
          "field": "reactie-flow",
          "label": "Schrijf een vaste flow (4-6 stappen) voor een lastige of half-delegeerbare mail. Maak duidelijk welke stap jouw oordeel is en welke stap AI doet.",
          "shortLabel": "Reactie-flow",
          "hint": "Bij een lastige mail levert AI de verwoording, niet het oordeel. Zorg dat jouw beslissingen (wat klopt, wat beloof ik) vóór de AI-stap komen.",
          "placeholder": "Flow voor: reactie op een ontevreden ouder\n1. Ik bepaal zelf: ...\n2. Ik abstraheer: ...\n3. AI: ...\n4. Ik controleer: ...\n5. Ik vul in en verstuur: ...",
          "rows": 9,
          "rubric": [
            {
              "name": "Oordeelsstap staat vooraan",
              "good": "De docent bepaalt feiten en grenzen voordat AI iets verwoordt."
            },
            {
              "name": "AI-rol beperkt tot taal",
              "good": "AI doet uitsluitend het verwoorden, niet het beoordelen of beloven."
            },
            {
              "name": "Anonimiseringsstap aanwezig",
              "good": "Er is een expliciete stap die herleidbare gegevens eruit haalt vóór de AI-stap."
            },
            {
              "name": "Controle- en verstuurstap",
              "good": "Een laatste menselijke check op feiten en toon, en invullen van gegevens in de eigen mail."
            }
          ],
          "referenceAnswer": "Flow voor: reactie op een ontevreden ouder over een beoordeling.\n1. Ik bepaal zelf (oordeel): klopt de beoordeling? Wat kan ik wel toezeggen (uitleg, herkansing) en wat niet (cijfer aanpassen zonder grond)? Dit schrijf ik in steekwoorden.\n2. Ik abstraheer: alle namen, klas en specifieke details eruit; het wordt 'een ouder die het oneens is met een toetsbeoordeling'.\n3. AI (taal): 'Verwoord dit rustig, niet defensief, erken de zorg maar beloof niets buiten deze punten. Zakelijk-warm, max 150 woorden.'\n4. Ik controleer: kloppen de feiten? Staat er geen belofte in die ik niet kan waarmaken? Ik voeg één eigen zin toe die laat zien dat ik de zorg serieus neem.\n5. Ik vul de echte naam en details in Outlook in en verstuur onder mijn eigen naam.\nDe stappen 1 en 4 zijn mijn oordeel; stap 3 is het enige dat AI doet."
        }
      },
      {
        "title": "Lever je sjabloonkit op",
        "body": "Bundel wat je hebt gemaakt tot één bruikbare kit: je twee à drie sjablonen, je registerafspraken en je reactie-flow, plus je vaste AVG-regel bovenaan. Schrijf de AVG-regel als een zin die je elke keer voor jezelf herhaalt, bijvoorbeeld: 'Geen namen, klassen of zorgdetails in publieke AI — die vul ik pas in mijn eigen mail in.' Een kit is pas af als je hem morgen kunt pakken zonder na te denken. Noteer ook waar je hem bewaart, zodat je hem terugvindt als het donderdagmiddag kwart over vier is.",
        "time": "8 min",
        "voorbeeld": "Een mentor bewaart de kit als één document in de teamomgeving: bovenaan de AVG-regel, daaronder drie sjablonen (uitnodiging, herinnering, aankondiging), de registerafspraak ('ouders: warm-kort; collega's: zakelijk; commissies: formeel') en de flow voor lastige mails. Ze deelt hem met twee collega's die hetzelfde mentoraat doen.",
        "workspace": {
          "field": "sjabloonkit-oplevering",
          "label": "Lever je sjabloonkit op: de AVG-regel bovenaan, een korte inhoudsopgave van je sjablonen, je registerafspraak en waar je de kit bewaart. Wat ga je morgen als eerste gebruiken?",
          "shortLabel": "Kit",
          "hint": "Een kit is af als je hem zonder nadenken kunt pakken. AVG-regel bovenaan, sjablonen, registerafspraak, bewaarplek, en een eerste concrete inzet.",
          "placeholder": "AVG-REGEL: Geen namen/klassen/zorgdetails in publieke AI — invullen doe ik in mijn eigen mail.\n\nKIT BEVAT:\n1. Sjabloon ...\n2. Sjabloon ...\nREGISTERAFSPRAAK: ouders = ...; collega's = ...\nBEWAARD IN: ...\nMORGEN GEBRUIK IK: ...",
          "rows": 11,
          "rubric": [
            {
              "name": "AVG-regel bovenaan",
              "good": "Een heldere, herhaalbare regel die herleidbare gegevens uit publieke AI houdt."
            },
            {
              "name": "Minstens twee sjablonen gebundeld",
              "good": "De eerder gebouwde sjablonen zijn samengebracht en benoemd."
            },
            {
              "name": "Registerafspraak per ontvanger",
              "good": "Er is een korte afspraak welk register bij welke ontvanger hoort."
            },
            {
              "name": "Vindbaar en deelbaar",
              "good": "Er staat waar de kit bewaard wordt, zodat hij op een drukke dag terugvindbaar is."
            },
            {
              "name": "Concrete eerste inzet",
              "good": "De docent benoemt welke taak hij morgen als eerste met de kit oppakt."
            }
          ],
          "referenceAnswer": "AVG-REGEL: Geen namen, klassen, geboortedata of zorgdetails in publieke AI. Ik werk met placeholders en abstraheer naar 'een leerling die...'. Echte gegevens vul ik pas in mijn eigen mailprogramma in.\n\nKIT BEVAT:\n1. Sjabloon gespreksuitnodiging ouder (warm-kort, placeholders voor reden en datums).\n2. Sjabloon deadline-herinnering mentorgroep (zakelijk, placeholders voor vak en datum).\n3. Sjabloon aankondiging activiteit/ouderavond (zakelijk-warm).\n4. Reactie-flow voor lastige ouder-mails (oordeel bij mij, AI doet de taal).\n\nREGISTERAFSPRAAK: ouders = warm en kort, geen overdreven complimenten; collega's = zakelijk en direct; examencommissie/directie = formeel maar niet afstandelijk.\n\nBEWAARD IN: gedeeld document in de mentoren-teamomgeving, gedeeld met de twee parallelmentoren.\n\nMORGEN GEBRUIK IK: de gespreksuitnodiging, voor de twee oudergesprekken die ik deze week nog moet inplannen — dat scheelt me het opnieuw bedenken van de openingszin."
        }
      }
    ],
    "vakvariaties": [
      {
        "vak": "Talen (vo)",
        "body": "De moderne-vreemde-talendocent gebruikt AI om aankondigingen en oudermails te schrijven, maar laat het model óók een Engelse of Duitse versie maken voor ouders die het Nederlands minder machtig zijn. De afzender controleert de vertaling op toon: een formele groet die in het Nederlands gewoon klinkt, kan in het Engels stijf overkomen."
      },
      {
        "vak": "Exacte vakken (vo/havo-vwo)",
        "body": "De docent natuurkunde maakt een sjabloon voor het terugkoppelen van praktische-opdrachtresultaten aan ouders. AI verwoordt de structuur; de docent vult zelf de vakinhoudelijke beoordeling in, want of een onderzoeksverslag voldoende is, is geen taal- maar een vakoordeel."
      },
      {
        "vak": "Beroepsgericht (mbo)",
        "body": "Een mbo-docent communiceert veel met stagebedrijven én met studenten die zelf de ontvanger zijn. Een sjabloon voor een stagebevestiging of een herinnering aan een BPV-deadline scheelt veel herhaalwerk; het register is hier zakelijk-direct, passend bij een beroepscontext."
      },
      {
        "vak": "Mentoraat / zorg (vo en mbo)",
        "body": "De mentor schrijft de meeste gevoelige berichten: zorgmeldingen, gespreksverslagen, signalen. Juist hier is de AVG-check geen formaliteit. Geen namen, klassen of diagnoses in publieke AI; de mentor abstraheert en gebruikt het sjabloon alleen voor de vorm, nooit voor de inhoudelijke inschatting."
      },
      {
        "vak": "Lerarenopleiding (hbo)",
        "body": "De hbo-docent communiceert met studenten die bijna-collega zijn, en met praktijkscholen. Een sjabloon voor feedback op een stageverslag of een uitnodiging voor een intervisiebijeenkomst werkt goed; het register schuift naar collegiaal-zakelijk in plaats van het mentortoontje uit het vo."
      }
    ],
    "valkuilen": [
      {
        "titel": "De gladde, onpersoonlijke AI-toon",
        "watGebeurtEr": "Je vraagt om 'een vriendelijke mail' en krijgt een tekst die correct is maar voelt als een formuliertje: te veel complimenten, te uitgebreid, geen eigen stem. De ouder voelt dat het niet persoonlijk is en de relatie koelt af.",
        "fix": "Stuur het register precies ('warm maar kort, geen overdreven complimenten') en herschrijf minstens één zin in je eigen woorden, zodat de mail klinkt alsof jij hem schreef."
      },
      {
        "titel": "Herleidbare gegevens in publieke AI",
        "watGebeurtEr": "Je plakt een echte mail met naam en klas in de chat om hem te laten herschrijven. Dat is een datalek: persoonsgegevens van een minderjarige belanden in een systeem buiten de school, en jij bent als afzender verantwoordelijk.",
        "fix": "Abstraheer altijd vóór de prompt — 'een leerling die...' — en vul echte namen en details pas in je eigen mailprogramma in, ná het AI-systeem."
      },
      {
        "titel": "Te formeel waar warmte nodig is",
        "watGebeurtEr": "Voor een bezorgde ouder kies je per ongeluk de zakelijke of formele variant. Het bericht is correct, maar koel, en de ouder voelt zich niet serieus genomen in zijn zorg.",
        "fix": "Bepaal het register bewust op basis van de ontvanger en de situatie. Bij zorg of emotie kies je warm; bij een commissie formeel. Lees terug of de toon bij déze ontvanger past."
      },
      {
        "titel": "AI laten oordelen in plaats van verwoorden",
        "watGebeurtEr": "Je laat AI niet alleen de mail schrijven maar ook bepalen wat je belooft of hoe je een onvoldoende uitlegt. Het model verzint geruststellingen of toezeggingen die jij niet kunt waarmaken.",
        "fix": "Bepaal zelf de kern — wat klopt, wat beloof je wel en niet — vóór de AI-stap. AI doet alleen het taalwerk; het oordeel en de belofte blijven van jou."
      },
      {
        "titel": "Eenmalige tekst in plaats van sjabloon",
        "watGebeurtEr": "Je laat AI elke keer een losse mail maken en begint dus telkens opnieuw. De winst van AI lekt weg in het steeds opnieuw formuleren van dezelfde prompt.",
        "fix": "Bouw één keer een sjabloon met placeholders en bewaar het in een vindbare kit. Daarna vul je alleen de variabele delen in — geen nieuwe prompt meer nodig."
      }
    ],
    "eindcriteria": [
      {
        "criterium": "Sjablonen bruikbaar",
        "onder": "Eén losse mail gemaakt, geen herbruikbaar sjabloon met placeholders.",
        "op": "Twee tot drie sjablonen met placeholders, klaar voor direct gebruik.",
        "boven": "+ Sjablonen gedeeld met collega's en voorzien van een korte gebruiksinstructie."
      },
      {
        "criterium": "Register afgestemd",
        "onder": "AI-standaardtoon overgenomen zonder bijstellen; klinkt onpersoonlijk.",
        "op": "Register bewust gekozen per ontvanger; minstens één gladde zin herschreven.",
        "boven": "+ Een vaste registerafspraak per ontvangertype vastgelegd voor toekomstige berichten."
      },
      {
        "criterium": "AVG-discipline",
        "onder": "Herleidbare gegevens zouden in een publieke AI-prompt belanden.",
        "op": "Gegevens consequent geabstraheerd; echte namen pas ingevuld na het AI-systeem.",
        "boven": "+ Een vaste AVG-regel bovenaan de kit die elke keer als eerste gecheckt wordt."
      },
      {
        "criterium": "Afzenderschap",
        "onder": "Tekst klakkeloos verstuurd zoals AI hem opstelde.",
        "op": "Concept gecontroleerd op feiten en toon, en in eigen woorden bijgesteld.",
        "boven": "+ Een reactie-flow waarin het eigen oordeel structureel vóór de AI-stap komt."
      }
    ],
    "reflection": [
      "Welke van je terugkerende schrijftaken bleek bij nader inzien helemaal niet delegeerbaar, en wat zegt dat over waar jouw tijd écht naartoe moet?",
      "Waar merkte je het verschil tussen de standaard-AI-toon en hoe jij zelf zou schrijven, en hoe zou een ouder dat verschil opvatten?",
      "Welke gegevens stond je vroeger misschien onbewust toe in een AI-prompt, en hoe ga je voorkomen dat dat op een drukke dag weer gebeurt?"
    ],
    "checklist": [
      "Ik heb minstens vijf terugkerende schrijftaken in kaart en weet per taak of die delegeerbaar is.",
      "Ik heb twee tot drie herbruikbare sjablonen met placeholders gebouwd.",
      "Mijn sjablonen bevatten geen echte namen of herleidbare gegevens.",
      "Ik heb het register bewust afgestemd op de ontvanger en de gladde AI-toon herschreven.",
      "Ik heb een AVG-check gedaan op een ouderbericht en alles herleidbaars geabstraheerd.",
      "Ik heb een vaste flow voor lastige mails waarin mijn oordeel vóór de AI-stap komt.",
      "Ik blijf zelf de afzender: ik lees elk concept na op feiten en toon voordat ik verstuur.",
      "Mijn sjabloonkit is gebundeld, vindbaar opgeslagen en klaar voor gebruik."
    ],
    "nextLesson": "check-mod6"
  },
  "check-mod6": {
    "format": "kennischeck",
    "summary": "Vijf vragen over de kern van Module 6: welke taken je wél en niet aan AI delegeert, waar je oordeel onmisbaar blijft, en hoe je de AVG en de kwaliteitsondergrens bewaakt. Na elke vraag krijg je meteen uitleg, zodat de check ook een herhaling is.",
    "duration": {
      "total": "12 min",
      "blocks": [
        {
          "label": "5 vragen",
          "min": 8
        },
        {
          "label": "Advies",
          "min": 4
        }
      ]
    },
    "learningGoals": [
      "Je herkent welke werkdruktaken tijdrovend én delegeerbaar zijn en welke tijdrovend maar niet delegeerbaar.",
      "Je weet waar bij feedback en beoordeling het oordeel en het cijfer bij de docent moeten blijven.",
      "Je kunt de AVG-regel toepassen op leerlingwerk en oudercommunicatie en de kwaliteitsondergrens benoemen."
    ],
    "scenario": {
      "title": "Werkdruk getoetst",
      "context": "Vijf vragen na de drie dieptelessen (6.1 delegeer-kwadrant, 6.2 feedback en nakijken, 6.3 oudercommunicatie). Een mix van meerkeuze en waar/niet-waar. Bij elke vraag krijg je direct uitleg waarom een antwoord goed of fout is — zo zakt de stof verder in en zie je waar je nog onzeker bent.",
      "role": "Voor jezelf",
      "tools": "Geen"
    },
    "checkTitle": "Toets je beeld van AI en werkdruk in vijf vragen.",
    "checkItems": [
      {
        "type": "Meerkeuze · delegeer-kwadrant",
        "q": "Je hebt vier taken op je bordje. Welke hoort thuis in het kwadrant 'tijdrovend én delegeerbaar' — het kwadrant waar AI je echt werk uit handen neemt?",
        "options": [
          {
            "label": "Beslissen welk cijfer een leerling krijgt voor een mondeling.",
            "explain": "Fout. Een cijfer is een oordeel met gevolgen voor de leerling; dat is tijdrovend maar niet delegeerbaar. Het blijft jouw eindverantwoordelijkheid."
          },
          {
            "label": "Een eerste concept maken van 20 oefenvragen bij een nieuw hoofdstuk.",
            "explain": "Goed. Oefenvragen opstellen is tijdrovend routinewerk waar AI een bruikbaar ruw concept levert dat jij daarna controleert en bijslijpt — precies het delegeerbare kwadrant."
          },
          {
            "label": "Een moeilijk gesprek voeren met een leerling die dreigt uit te vallen.",
            "explain": "Fout. Dat draait om relatie en vertrouwen; niet delegeerbaar. AI kan je hooguit helpen je gedachten te ordenen vooraf."
          },
          {
            "label": "Bepalen of een werkstuk voldoende vakdiepte heeft voor een eindbeoordeling.",
            "explain": "Fout. Dat vraagt vakinhoudelijk oordeel en weegt mee in een beoordeling; tijdrovend maar niet delegeerbaar."
          }
        ],
        "correct": 1
      },
      {
        "type": "Waar of niet waar · feedback",
        "q": "Stelling: als je AI feedback laat formuleren op leerlingwerk, mag AI ook het cijfer of het eindoordeel bepalen, zolang jij de tekst nog even leest.",
        "options": [
          {
            "label": "Waar",
            "explain": "Niet waar. Feedback formuleren mag je AI als opsteller laten doen, maar het oordeel en het cijfer blijven bij jou. 'Even lezen' is geen beoordeling — jij weegt, jij beslist, jij bent verantwoordelijk."
          },
          {
            "label": "Niet waar",
            "explain": "Klopt. AI mag een concept-feedbacktekst leveren, maar het oordeel en het cijfer bepaal jij. Je kent de leerling, het leerdoel en de context; dat oordeel is niet delegeerbaar."
          }
        ],
        "correct": 1
      },
      {
        "type": "Meerkeuze · AVG bij leerlingwerk",
        "q": "Je wilt AI een werkstuk laten samenvatten zodat je sneller kunt nakijken. Wat is de juiste AVG-handelwijze?",
        "options": [
          {
            "label": "Gewoon het hele werkstuk plakken; het gaat tenslotte over schoolwerk, niet over privégegevens.",
            "explain": "Fout. Naam, klas, schrijfstijl en inhoud maken een werkstuk herleidbaar tot een persoon. Dat zijn persoonsgegevens en die horen niet in een AI-tool zonder waarborgen."
          },
          {
            "label": "Werk via een school-account/afgeschermde omgeving en haal herleidbare gegevens als naam en klas eruit voordat je iets invoert.",
            "explain": "Goed. Gebruik de afgeschermde, door de school geregelde omgeving en abstraheer: geen naam, klas of andere herleidbare gegevens. Dan beperk je de verwerking tot wat nodig is."
          },
          {
            "label": "Het werkstuk invoeren in een gratis publieke chatbot, want dat is sneller.",
            "explain": "Fout. Een willekeurige publieke tool zonder verwerkersovereenkomst en met onduidelijke dataverwerking is juist het risico dat je wilt vermijden."
          },
          {
            "label": "De leerling vooraf even mondeling vragen of het mag; dan is alles geregeld.",
            "explain": "Fout. Losse mondelinge toestemming regelt de verwerkingsgrondslag, beveiliging en bewaartermijnen niet. De school bepaalt de kaders; jij abstraheert en gebruikt de afgeschermde omgeving."
          }
        ],
        "correct": 1
      },
      {
        "type": "Waar of niet waar · opsteller versus afzender",
        "q": "Stelling: bij oudercommunicatie mag AI je helpen een mail op te stellen, maar jij blijft de afzender — je leest, past aan en stuurt zelf, onder je eigen naam.",
        "options": [
          {
            "label": "Waar",
            "explain": "Klopt. AI is opsteller van een ruw concept, jij bent afzender. Je controleert toon, feiten en gevoeligheden, abstraheert herleidbare gegevens en verstuurt onder je eigen verantwoordelijkheid."
          },
          {
            "label": "Niet waar",
            "explain": "Niet waar. AI als opsteller en jij als afzender is juist de bedoeling. Het onjuiste zou zijn AI ongelezen namens jou te laten communiceren met ouders."
          }
        ],
        "correct": 0
      },
      {
        "type": "Meerkeuze · kwaliteitsondergrens",
        "q": "Wat is de kwaliteitsondergrens als je AI inzet om werkdruk te verlagen?",
        "options": [
          {
            "label": "Het resultaat moet sneller af zijn dan wanneer je het zelf had gedaan; tijdwinst is wat telt.",
            "explain": "Fout. Tijdwinst die ten koste gaat van kwaliteit is geen winst. Sneller maar slechter dan jouw eigen ondergrens betekent extra herstelwerk of schade voor de leerling."
          },
          {
            "label": "Het resultaat hoeft maar half te kloppen, want leerlingen merken het verschil toch niet.",
            "explain": "Fout. Dat is geen ondergrens maar het loslaten ervan. Onjuiste uitleg of feedback schaadt het leren, ook als het niet meteen opvalt."
          },
          {
            "label": "Het eindresultaat is minstens zo goed als wat je zonder AI zou hebben afgeleverd — jij controleert en corrigeert tot dat niveau is gehaald.",
            "explain": "Goed. AI levert het ruwe materiaal; jij tilt het naar je eigen ondergrens of hoger. Haal je dat niet, dan publiceer of verstuur je het niet. Kwaliteit gaat voor snelheid."
          },
          {
            "label": "Zolang AI het gemaakt heeft, ligt de verantwoordelijkheid voor fouten bij de tool.",
            "explain": "Fout. De eindverantwoordelijkheid blijft bij jou. Je kunt fouten niet afschuiven op de tool; jij bent degene die controleert en de afzender is."
          }
        ],
        "correct": 2
      }
    ],
    "nextLesson": "casus-tijdwinst-kwaliteit"
  },
  "casus-tijdwinst-kwaliteit": {
    "format": "casusbespreking",
    "summary": "Drie casussen waarin tijdwinst botst met kwaliteit, relatie of vakmanschap. Je verkent ze vanuit meerdere perspectieven en bepaalt waar voor jou de grens ligt: welke taken AI mag voorbereiden en welke je bewust zelf houdt. De rode draad: AI levert ruw materiaal, jij beoordeelt en bent afzender.",
    "duration": {
      "total": "45 minuten",
      "blocks": [
        {
          "label": "Casussen lezen",
          "min": 8
        },
        {
          "label": "Perspectieven wegen",
          "min": 12
        },
        {
          "label": "Stellingnames bespreken",
          "min": 10
        },
        {
          "label": "Eigen grens bepalen (actieplan)",
          "min": 12
        },
        {
          "label": "Reflectie",
          "min": 3
        }
      ]
    },
    "learningGoals": [
      "Je herkent het verschil tussen taken die tijdrovend én delegeerbaar zijn en taken die tijdrovend maar niet delegeerbaar zijn (oordeel, relatie, vakdiepte, eindverantwoordelijkheid).",
      "Je kunt in een concrete casus benoemen waar AI-tijdwinst de kwaliteit, de relatie met leerling of ouder, of je eigen vakmanschap ondermijnt — en waar niet.",
      "Je formuleert voor je eigen praktijk een kwaliteitsondergrens en een lijst taken die je bewust zelf blijft doen, inclusief een AVG-grens."
    ],
    "scenario": {
      "title": "Werksituatie",
      "context": "Het is een drukke periode: nakijken, oudercontact en toetsen lopen door elkaar. Op je sectie wordt openlijk AI gebruikt om tijd te winnen. Niemand twijfelt dat het sneller kan — de vraag die boven tafel komt is of het ook beter, of soms juist slechter, wordt. In deze les buig je je over drie situaties die echt voorkomen.",
      "role": "Je bent docent (vo, mbo of hbo) die AI inzet om werkdruk te verlagen en daarbij verantwoordelijk blijft voor de kwaliteit van feedback, communicatie en je eigen vakkunde.",
      "tools": "Een AI-chatbot via je school-account (zakelijke omgeving, geen training op je invoer), je eigen rubrics en lesmateriaal, je leerlingvolg- en mailsysteem."
    },
    "casusbesprekingTitle": "Tijdwinst versus kwaliteit: drie dilemma's",
    "casusbesprekingIntro": "Elke casus laat zien hoe een terechte wens om tijd te winnen kan omslaan in verlies — van kwaliteit, relatie of vakmanschap. Lees ze, weeg de perspectieven en bepaal daarna waar voor jou de grens ligt.",
    "cases": [
      {
        "title": "Casus A — Feedback volledig uitbesteed",
        "context": "Een docent Nederlands met grote klassen laat alle schrijfopdrachten door AI van feedback voorzien. De docent plakt elke tekst in de chatbot (via het school-account, zonder namen) en kopieert de uitkomst grotendeels ongelezen terug naar de leerlingen. Het scheelt avonden werk. Na een paar weken vallen drie dingen op: leerlingen herkennen het patroon en ervaren de feedback als onpersoonlijk, sommige opmerkingen kloppen niet (de AI verzint een 'spelfout' die er niet staat of mist een echte denkfout in de redenering), en de docent weet bij een ouderavond niet meer goed wat een specifieke leerling nu eigenlijk lastig vindt. De tijdwinst is echt; de vraag is wat eronder verdwijnt.",
        "perspectives": [
          {
            "role": "De docent",
            "view": "Zonder AI red ik het nakijken simpelweg niet binnen redelijke uren. Negentig procent van mijn opmerkingen ging toch over dezelfde dingen — interpunctie, alineaopbouw, een te dunne conclusie. Als de AI dat oppakt, houd ik tijd over voor de leerlingen die het echt nodig hebben."
          },
          {
            "role": "De leerling",
            "view": "De feedback voelt als een sjabloon dat bij iedereen past en bij niemand. Er staat 'mooie inleiding' bij een stuk waar ik zelf weet dat het rammelt, en de echte fout in mijn argument wordt niet genoemd. Ik weet niet meer of mijn docent mijn werk gelezen heeft, en daardoor doe ik er zelf ook minder mee."
          },
          {
            "role": "De examensecretaris / kwaliteitszorg",
            "view": "Feedback is onderdeel van het leerproces en valt onder onze verantwoordelijkheid. Als opmerkingen feitelijk onjuist zijn of niet bij het werk passen, is dat niet alleen onhandig maar ondermijnt het de betrouwbaarheid van onze beoordeling. De docent blijft de afzender, ook van een fout die de AI heeft gemaakt."
          }
        ],
        "statements": [
          {
            "author": "Voorstander van uitbesteden",
            "quote": "AI doet de eerste laag — taal, structuur, terugkerende fouten — zodat ik mijn schaarse tijd kan steken in de inhoudelijke opmerking die er echt toe doet. Niet uitbesteden, maar voorsorteren."
          },
          {
            "author": "Criticus",
            "quote": "Feedback die je niet hebt gelezen is geen feedback, het is een gok met jouw naam eronder. Op het moment dat een leerling een onjuiste opmerking als waar aanneemt, heeft de tijdwinst een prijs die de leerling betaalt, niet jij."
          }
        ]
      },
      {
        "title": "Casus B — De oudermail die de relatie schaadt",
        "context": "Een mentor moet een gevoelige ouder mailen over een leerling die de laatste weken vaak afwezig is en waarvan het cijfer keldert. Het is laat, de mentor is moe en laat de AI de mail volledig opstellen. Om een 'goede' mail te krijgen, plakt de mentor de echte naam van de leerling, de absentiedata en een paar zinnen over de thuissituatie in de chatbot. De mail die eruit rolt is correct Nederlands maar formeel en afstandelijk — 'Wij constateren dat uw zoon herhaaldelijk ongeoorloofd afwezig is geweest' — en de mentor stuurt hem ongewijzigd door. De ouder, die toch al gespannen was, reageert gekwetst en defensief; het gesprek dat daarna nodig is kost meer tijd dan de mail ooit bespaarde. En er is een tweede probleem: er zijn herleidbare persoonsgegevens in een AI-omgeving terechtgekomen.",
        "perspectives": [
          {
            "role": "De mentor",
            "view": "Ik wilde een nette, foutloze mail en niet om half elf 's avonds nog op woorden zitten zoeken. De AI schrijft grammaticaal beter dan ik op dat tijdstip. Dat de toon te koel was, zag ik pas toen de reactie binnenkwam — toen was het al verstuurd."
          },
          {
            "role": "De ouder",
            "view": "Die mail las als een brief van een instantie, niet als een bericht van de mentor die mijn kind elke dag ziet. Geen vraag hoe het gaat, geen opening voor een gesprek, alleen een constatering. Ik voelde me beschuldigd in plaats van betrokken, en mijn eerste reactie was om in de verdediging te schieten."
          },
          {
            "role": "De functionaris gegevensbescherming (FG)",
            "view": "Naam, absentiedata en informatie over de thuissituatie zijn samen direct herleidbaar tot één leerling. Die in een AI-chatbot plakken is een verwerking van bijzondere, gevoelige persoonsgegevens buiten onze afspraken om. Ook met een school-account hoort dit niet: je had de situatie kunnen abstraheren of de mail zelf kunnen schrijven."
          }
        ],
        "statements": [
          {
            "author": "Voorstander van AI-hulp bij oudercontact",
            "quote": "Een AI kan prima helpen met de structuur en de toon van een lastige mail — juist als je moe of geïrriteerd bent, voorkomt het dat je iets verstuurt waar je spijt van krijgt. Mits je abstraheert en de mail daarna in je eigen woorden afmaakt."
          },
          {
            "author": "Criticus",
            "quote": "Een oudermail is relatiewerk, geen tekstproductie. De afzender ben jij, de band is van jou, en de enige die kan inschatten welke toon deze ouder nodig heeft, ben jij. Hier win je geen tijd, je verschuift hem naar het herstelgesprek — plus een AVG-overtreding die je niet meer ongedaan maakt."
          }
        ]
      },
      {
        "title": "Casus C — Een jaar leunen, en dan?",
        "context": "Een docent op het mbo is een jaar geleden enthousiast begonnen met AI voor het maken van rubrics, toetsvragen en lesopdrachten. Het ging hard: in plaats van een middag puzzelen aan een rubric, stond er binnen tien minuten een bruikbare versie. Nu, een jaar later, vraagt een nieuwe collega om samen vanaf nul een rubric voor een beroepsvaardigheid op te stellen — zonder AI, omdat de collega eerst wil snappen hoe je tot de criteria komt. De docent merkt dat het stroef gaat: welke niveaus onderscheid je, welk gedrag hoort bij 'voldoende' versus 'goed', hoe voorkom je dat criteria overlappen? Vaardigheden die er vroeger gewoon waren, voelen nu roestig. De rubrics van het afgelopen jaar waren prima — maar de docent kan niet meer goed beoordelen óf ze prima waren, omdat de eigen maatstaf is weggesleten.",
        "perspectives": [
          {
            "role": "De docent",
            "view": "Ik heb een jaar lang sneller en met minder stress materiaal gemaakt, en dat was geen luxe. Maar ik schrik ervan dat ik de onderliggende vaardigheid kwijt lijkt te zijn. Het is alsof ik altijd de navigatie aan heb gehad en nu de weg niet meer zelf ken."
          },
          {
            "role": "De nieuwe collega",
            "view": "Ik wil leren denken in beoordelingscriteria, niet alleen knoppen leren bedienen. Als de ervaren docent het zelf niet meer kan voordoen, mis ik de vakkennis die ik nodig heb om straks een AI-voorstel kritisch te kunnen beoordelen in plaats van het klakkeloos over te nemen."
          },
          {
            "role": "De opleidingsmanager / curriculumcommissie",
            "view": "Op teamniveau is dit een risico: als de vakinhoudelijke kennis om een rubric te beoordelen wegslijt, kan niemand het AI-materiaal nog tegen het licht houden. Dan delegeren we niet de uitvoering maar het oordeel — en dat is precies wat we niet mogen weggeven. Vakmanschap onderhouden is onderdeel van professionaliteit, geen hobby."
          }
        ],
        "statements": [
          {
            "author": "Voorstander van maximaal AI inzetten",
            "quote": "Je hoeft niet meer alles zelf te kunnen wat een machine sneller doet — een chirurg slijpt zijn eigen scalpels ook niet. Zolang ik een goede rubric herken als ik er een zie, is het zonde om uren te besteden aan het zelf opbouwen ervan."
          },
          {
            "author": "Criticus",
            "quote": "Je kunt alleen herkennen of een rubric goed is zolang je hem zelf nog zou kunnen maken. Het oordeel en de vaardigheid zijn niet los verkrijgbaar: zodra de vaardigheid roest, roest je oordeel mee, en dan is de AI niet meer je gereedschap maar je blinde vlek."
          }
        ]
      }
    ],
    "actionPlan": {
      "source": "Voor je eigen praktijk",
      "title": "Waar leg jij de grens?",
      "steps": [
        {
          "title": "Sorteer je taken: delegeerbaar of niet",
          "body": "Maak twee kolommen voor een typische werkweek. Links: taken die tijdrovend én delegeerbaar zijn — opstellen, varianten maken, samenvatten, een eerste concept, terugkerende taalcorrecties. Rechts: taken die tijdrovend zijn maar niet delegeerbaar — het inhoudelijke oordeel, de relatie met leerling en ouder, de vakdiepte, de eindverantwoordelijkheid. Wees eerlijk over de grijze gevallen: feedback hoort meestal half-en-half, AI sorteert voor maar jij beoordeelt.",
          "workspace": {
            "field": "taaksortering-delegeerbaar",
            "label": "Noteer minstens vier taken in de kolom 'delegeerbaar' en vier in 'niet-delegeerbaar', en benoem bij één grijs geval hoe je het splitst (wat doet AI, wat doe jij).",
            "placeholder": "Delegeerbaar: ... | Niet-delegeerbaar: ... | Grijs geval (bv. schrijffeedback): AI doet ..., ik beoordeel ...",
            "rows": 6,
            "rubric": [
              {
                "name": "Beide kolommen gevuld",
                "good": "Minstens vier concrete taken per kolom, geen vage categorieën maar herkenbare werkzaamheden uit de eigen week."
              },
              {
                "name": "Juiste sortering",
                "good": "Oordeel, relatie, vakdiepte en eindverantwoordelijkheid staan bij 'niet-delegeerbaar'; opstellen/varianten/samenvatten/eerste concept bij 'delegeerbaar'."
              },
              {
                "name": "Grijs geval gesplitst",
                "good": "Bij minstens één taak is expliciet benoemd welk deel AI voorbereidt en welk deel de docent zelf beoordeelt."
              },
              {
                "name": "Eerlijkheid",
                "good": "Er staat ook een taak bij die de docent liever zou uitbesteden maar niet kan, met een reden."
              }
            ],
            "referenceAnswer": "Delegeerbaar: eerste concept van een lesopdracht, varianten op een oefentoets maken, lange leestekst samenvatten tot kernpunten, terugkerende taalcorrecties (interpunctie, spelling) in eerste ronde. Niet-delegeerbaar: het cijfer en het inhoudelijke oordeel over leerlingwerk, gevoelig oudercontact, uitleg van nieuwe lesstof in de klas, eindverantwoordelijkheid voor wat ik als afzender de deur uit doe. Grijs geval — schrijffeedback: AI markeert taal- en structuurfouten en levert een ruwe eerste laag; ik lees elke tekst zelf, controleer of de AI-opmerkingen kloppen, voeg de inhoudelijke kernopmerking toe en schrap onjuistheden. Wat ik liever zou uitbesteden maar niet kan: het beoordelen van een gevoelig betoog, omdat de afweging context en kennis van de leerling vraagt die de AI niet heeft."
          }
        },
        {
          "title": "Bepaal je kwaliteitsondergrens",
          "body": "Formuleer één harde ondergrens die geldt voordat AI-materiaal de deur uit mag. Denk aan: niets wat een leerling of ouder ontvangt, gaat ongelezen weg; elke feitelijke opmerking is door mij gecontroleerd; ik ben en blijf de afzender en kan elke zin verantwoorden. Maak het toetsbaar — een regel waarvan je achteraf kunt vaststellen of je hem hebt gevolgd.",
          "workspace": {
            "field": "kwaliteitsondergrens",
            "label": "Schrijf je kwaliteitsondergrens als één of twee toetsbare regels op. Geen intenties ('ik probeer'), maar voorwaarden ('niets gaat weg voordat...').",
            "placeholder": "Voordat AI-materiaal naar een leerling of ouder gaat, geldt: ...",
            "rows": 4,
            "rubric": [
              {
                "name": "Toetsbaar geformuleerd",
                "good": "De regel is achteraf controleerbaar (wel/niet gevolgd), geen vage intentie."
              },
              {
                "name": "Dekt het oordeel",
                "good": "Maakt expliciet dat de docent het inhoudelijke oordeel en de feitelijke juistheid zelf controleert, niet de AI."
              },
              {
                "name": "Afzenderschap",
                "good": "Benoemt dat de docent afzender blijft en elke zin kan verantwoorden."
              },
              {
                "name": "Praktisch haalbaar",
                "good": "De ondergrens is streng maar uitvoerbaar in een drukke week, niet zo hoog dat hij in de praktijk genegeerd wordt."
              }
            ],
            "referenceAnswer": "Mijn kwaliteitsondergrens: (1) Niets wat een leerling of ouder van mij ontvangt, gaat weg voordat ik het volledig heb gelezen en elke feitelijke opmerking heb gecontroleerd — een onjuiste AI-opmerking is mijn fout, niet die van de leerling. (2) Ik ben altijd de afzender: ik kan elke zin verantwoorden en in mijn eigen woorden uitleggen waarom hij er staat. Als ik dat van een passage niet kan, herschrijf of schrap ik hem. Deze regels zijn toetsbaar: achteraf kan ik per bericht vaststellen of ik het heb gelezen, gecontroleerd en kan verantwoorden."
          }
        },
        {
          "title": "Kies de taken die je bewust zelf houdt",
          "body": "Kies twee tot drie taken die je principieel zelf blijft doen, óók als AI ze sneller zou kunnen — om je vakmanschap te onderhouden (denk aan casus C). Bijvoorbeeld: minstens één rubric per periode helemaal zelf opbouwen, of de eerste versie van een belangrijke toets zelf schrijven voordat je AI laat meekijken. Leg uit waarom juist déze taken: wat houden ze scherp dat je niet wilt verliezen?",
          "workspace": {
            "field": "taken-zelf-houden",
            "label": "Benoem twee of drie taken die je bewust zelf blijft doen om je vakmanschap te onderhouden, met per taak de reden (welke vaardigheid houd je daarmee scherp).",
            "placeholder": "Taak 1: ... — houdt scherp: ... | Taak 2: ... — houdt scherp: ...",
            "rows": 5,
            "rubric": [
              {
                "name": "Concrete taken",
                "good": "Twee tot drie benoembare taken, geen algemeenheden zoals 'kritisch blijven'."
              },
              {
                "name": "Gericht op vakmanschap",
                "good": "De taken raken het onderliggende oordeel of de vakdiepte (rubric opbouwen, toets ontwerpen, criteria formuleren), niet alleen uitvoering."
              },
              {
                "name": "Reden expliciet",
                "good": "Per taak staat welke vaardigheid je ermee onderhoudt en wat je zou verliezen door hem uit te besteden."
              },
              {
                "name": "Ritme benoemd",
                "good": "Er staat een frequentie of moment bij (per periode, per toets) zodat het een gewoonte wordt en geen voornemen."
              }
            ],
            "referenceAnswer": "Taak 1: Per periode bouw ik minstens één rubric volledig zelf op, vanaf de leerdoelen — houdt scherp: het denken in onderscheidende niveaus en het voorkomen van overlappende criteria, precies de vaardigheid die in casus C wegsleet. Taak 2: De eerste versie van een belangrijke toets schrijf ik zelf voordat ik AI laat meekijken voor varianten of dekking — houdt scherp: mijn gevoel voor wat een vraag valide en op het juiste niveau maakt. Taak 3: Bij gevoelig oudercontact schrijf ik de mail zelf en gebruik AI hooguit als spiegel achteraf ('lees mee op toon') — houdt scherp: mijn vermogen om relatiewerk te doen. Zonder deze gewoontes verlies ik niet alleen de uitvoering maar het oordeel om AI-werk te kunnen beoordelen."
          }
        },
        {
          "title": "Leg je AVG-grens vast",
          "body": "Schrijf in één regel wat er nooit ongeabstraheerd in een AI-omgeving terechtkomt, en hoe je het dan wél doet. De vuistregel: geen herleidbare leerling- of oudergegevens in AI. Werk altijd via je school-account, en abstraheer — 'een leerling die de laatste weken vaak afwezig is' in plaats van naam, datums en thuissituatie (casus B). Beschrijf je vervangende werkwijze, zodat de grens praktisch is en je hem ook onder tijdsdruk volhoudt.",
          "workspace": {
            "field": "avg-grens-praktijk",
            "label": "Formuleer je AVG-grens (wat komt nooit in AI) plus je vervangende werkwijze (hoe abstraheer je, of wanneer doe je het zonder AI).",
            "placeholder": "Nooit in AI: namen, herleidbare combinaties van ... | In plaats daarvan: ik abstraheer naar ... / ik schrijf het zelf wanneer ...",
            "rows": 5,
            "rubric": [
              {
                "name": "Concrete grens",
                "good": "Benoemt expliciet dat herleidbare leerling-/oudergegevens (naam, datums, thuissituatie en combinaties daarvan) nooit ongeabstraheerd in AI gaan."
              },
              {
                "name": "School-account",
                "good": "Noemt het gebruik van het zakelijke school-account in plaats van een privé- of gratis tool."
              },
              {
                "name": "Abstraheren concreet",
                "good": "Geeft een concreet voorbeeld van abstraheren ('een leerling die...') in plaats van alleen het principe te noemen."
              },
              {
                "name": "Vervangende werkwijze",
                "good": "Beschrijft wanneer de docent het bewust zonder AI doet, zodat de grens onder tijdsdruk houdbaar is."
              }
            ],
            "referenceAnswer": "Mijn AVG-grens: namen, geboortedata, absentiedata, cijfers gekoppeld aan een persoon en informatie over de thuissituatie gaan nooit ongeabstraheerd in een AI-omgeving — ook niet de combinatie ervan, want juist die maakt herleidbaar. Ik gebruik uitsluitend het zakelijke school-account, nooit een privé- of gratis tool. In plaats daarvan abstraheer ik: 'een leerling in de bovenbouw die de laatste weken vaak afwezig is en wiens resultaten teruglopen' in plaats van naam en datums. Bij echt gevoelige of sterk herleidbare situaties — zoals een mail over de thuissituatie — schrijf ik zelf en gebruik AI hooguit als spiegel op de toon, zonder de gegevens in te voeren. Zo blijft de grens ook om half elf 's avonds houdbaar."
          }
        }
      ]
    },
    "reflection": [
      "In welke van de drie casussen herken je je eigen praktijk het meest, en wat zou daar het eerste signaal zijn dat tijdwinst omslaat in verlies?",
      "Welke taak besteed je nu uit waarvan je na deze les denkt: dit hoort eigenlijk bij het niet-delegeerbare deel — het oordeel, de relatie of de vakdiepte?",
      "Hoe zorg je dat je je kwaliteitsondergrens en je AVG-grens óók volhoudt in de drukste week, en niet alleen op een rustige dag?"
    ],
    "nextLesson": "praktijkopdracht-6"
  },
  "praktijkopdracht-6": {
    "format": "praktijkopdracht",
    "summary": "Je kiest één concrete werkdrukbron uit je eigen praktijk, herontwerpt de workflow met AI en meet over twee weken wat het oplevert — in tijd én in kwaliteit. Je legt vooraf vast welke kwaliteitsondergrens je niet wilt verliezen, zodat tijdwinst nooit ten koste gaat van het werk waar je voor staat. Aan het eind weet je niet alleen óf het sneller ging, maar of het ook goed bleef.",
    "duration": {
      "total": "3 uur (verspreid over twee weken)",
      "blocks": [
        {
          "label": "Bron kiezen en nulmeting",
          "min": 30
        },
        {
          "label": "Workflow herontwerpen + AVG-check",
          "min": 60
        },
        {
          "label": "Twee weken draaien en meten",
          "min": 30
        },
        {
          "label": "Nameting en kwaliteitsreflectie",
          "min": 30
        },
        {
          "label": "PeerReview met een collega",
          "min": 30
        }
      ]
    },
    "praktijkTitle": "Herontwerp één werkdrukbron en bewijs de winst",
    "praktijkIntro": "Deze module ging steeds over hetzelfde onderscheid: taken die tijdrovend én delegeerbaar zijn (een eerste concept, varianten, een samenvatting, een ruwe opzet) versus taken die tijdrovend zijn maar niet delegeerbaar (je oordeel, de relatie met de leerling, je vakdiepte, de eindverantwoordelijkheid). Nu maak je dat concreet op één bron. Niet 'AI inzetten voor nakijken' in het algemeen, maar: deze toets, deze klas, deze workflow — en daarna de cijfers op tafel.\n\nDe opdracht is af als je vier dingen hebt: een eerlijke nulmeting (hoeveel tijd kost de taak nu écht, gemeten en niet geschat), een herontworpen workflow waarin glashelder staat wat AI doet en waar jij beslist, een vastgelegde kwaliteitsondergrens (de rubric of norm die níét mag zakken), en een nameting na twee weken met een eerlijke conclusie — ook als die luidt dat het niet werkte. Besluitrijp betekent hier: een collega kan jouw cijfers en workflow lezen en zelf besluiten of die voor hen ook de moeite waard is.",
    "paths": [
      {
        "id": "a",
        "label": "Nakijken & feedback",
        "beschrijving": "Voor wie veel tijd kwijt is aan open antwoorden, verslagen, essays of formatieve feedback. Je herontwerpt de feedbackstroom — niet het cijfer. AI helpt met structureren en eerste formuleringen; jij beoordeelt, weegt en bent afzender.",
        "deliverables": [
          "Nulmeting: kies één concrete set (bv. 28 betogen van 4-havo of een mbo-praktijkverslag). Klok met een timer hoeveel minuten je nu besteedt aan feedback geven op een representatieve steekproef van 5 werkstukken, en reken om naar de hele set.",
          "Herontworpen workflow in stappen: noteer per stap wie wat doet. Bijvoorbeeld: AI clustert veelgemaakte fouten uit geanonimiseerde antwoorden → jij kiest de drie waar je op stuurt → AI levert per cluster een feedbackbouwsteen → jij personaliseert en bent afzender. Markeer expliciet de stap waar jouw oordeel onvervangbaar is.",
          "Kwaliteitsondergrens als rubric (3-5 criteria): leg vast wat goede feedback bij jou minimaal moet hebben — bv. één concreet verbeterpunt met voorbeeld, een toon die de leerling niet ontmoedigt, koppeling aan het rubriccriterium, geen feitfouten. Dit is de norm die níét mag zakken door de tijdwinst.",
          "AVG-check: beschrijf hoe je leerlingwerk anonimiseert vóór het in AI gaat (namen, klas, herleidbare details eruit), welk school-account/welke tool je gebruikt, en waarom je het cijfer nooit door AI laat bepalen. Eindverantwoordelijkheid en afzenderschap blijven bij jou.",
          "Nameting: klok bij de tweede set (of tweede ronde) opnieuw de tijd op een vergelijkbare steekproef van 5, met dezelfde meetmethode. Noteer de tijd per werkstuk, niet alleen het totaal.",
          "Kwaliteitscontrole: leg 3-5 willekeurige feedbacks naast je rubric en scoor ze. Hield de feedback de ondergrens? Noteer minstens één geval waar je AI-tekst hebt moeten bijsturen en waarom.",
          "Reflectie op winst én verlies: hoeveel tijd bespaarde je netto (winst min de tijd voor anonimiseren en bijsturen)? En: bleef de feedback even goed, beter of slechter — onderbouwd met je rubricscores, niet met een gevoel."
        ]
      },
      {
        "id": "b",
        "label": "Administratie & communicatie",
        "beschrijving": "Voor wie verzuipt in mails, oudercommunicatie, verslagen, formulieren of terugkerende berichten. Je herontwerpt het opstellen — niet het besluiten. AI levert het concept; jij controleert feiten, toon en bent afzender van wat de deur uitgaat.",
        "deliverables": [
          "Nulmeting: kies één terugkerend type (bv. oudermail bij zorgsignaal, verslag van een leerlingbespreking, een standaard absentiebericht-met-vervolg). Klok over een week hoeveel minuten je gemiddeld aan één exemplaar besteedt, gemeten over 3-5 echte gevallen.",
          "Herontworpen workflow in stappen: bv. jij geeft AI de kernpunten in steekwoorden (geabstraheerd) → AI levert een conceptmail in de juiste toon → jij controleert feiten, toon en context → jij verstuurt vanaf je eigen account. Markeer de stap waar jouw besluit en afzenderschap onvervangbaar zijn.",
          "Kwaliteitsondergrens als rubric (3-5 criteria): wat moet zo'n bericht bij jou minimaal hebben — feitelijk klopt het, de toon past bij déze ouder/situatie, geen toezegging die je niet kunt waarmaken, een duidelijke vervolgstap. Dit is de norm die níét mag zakken.",
          "AVG-check: beschrijf hoe je communicatie abstraheert (geen naam, geen herleidbaar incident, 'een leerling die meermaals te laat kwam'), welk school-account je gebruikt, en waarom de afweging om iets gevoeligs wél of niet te sturen altijd bij jou ligt — nooit bij AI.",
          "Nameting: klok over de tweede week opnieuw de gemiddelde tijd per exemplaar over 3-5 gevallen, met dezelfde meetmethode.",
          "Kwaliteitscontrole: leg 3-5 verstuurde berichten naast je rubric en scoor ze. Hield de communicatie de ondergrens? Noteer minstens één geval waar je het AI-concept stevig hebt moeten herschrijven en waarom.",
          "Reflectie op winst én verlies: netto tijdwinst (na aftrek van controleren en herschrijven), en of je communicatie even zorgvuldig en passend bleef — onderbouwd met je rubricscores. Was er een type bericht waarbij AI juist géén tijd bespaarde?"
        ]
      },
      {
        "id": "c",
        "label": "Planning & lesmateriaal",
        "beschrijving": "Voor wie veel tijd kwijt is aan lesopzetten, opdrachten, varianten, oefenmateriaal of toetsvragen maken. Je herontwerpt het ontwerpwerk — niet de didactische keuzes. AI levert ruwe varianten en concepten; jij kiest, snoeit en borgt vakinhoud en niveau.",
        "deliverables": [
          "Nulmeting: kies één terugkerend product (bv. een lesopzet van 50 minuten, een set van 12 oefenopgaven, drie niveauvarianten van een opdracht). Klok hoeveel tijd je nu besteedt aan één compleet exemplaar, gemeten over een echt geval.",
          "Herontworpen workflow in stappen: bv. jij geeft leerdoel, niveau en context → AI levert drie ruwe varianten → jij kiest en snoeit op vakinhoud, niveau en didactiek → jij maakt het lesklaar. Markeer de stap waar jouw didactische oordeel en vakdiepte onvervangbaar zijn (AI haalt het niveau of de misconceptie vaak net niet).",
          "Kwaliteitsondergrens als rubric (3-5 criteria): wat moet jouw lesmateriaal minimaal hebben — vakinhoudelijk correct (geen feitfouten of misconcepties), passend bij het niveau, gekoppeld aan een helder leerdoel, didactisch bruikbaar in jouw klas. Dit is de norm die níét mag zakken.",
          "AVG-check: lesmateriaal raakt meestal geen leerlinggegevens, maar leg vast dat je geen herleidbare leerlingvoorbeelden of klasinformatie in AI stopt, welk school-account je gebruikt, en dat de vakinhoudelijke eindverantwoordelijkheid (klopt het? past het?) bij jou blijft.",
          "Nameting: klok bij het tweede vergelijkbare product opnieuw de tijd, met dezelfde meetmethode. Noteer ook hoeveel je hebt moeten snoeien of corrigeren.",
          "Kwaliteitscontrole: leg het herontworpen materiaal naast je rubric en scoor het. Klopte de vakinhoud? Noteer minstens één misconceptie, feitfout of niveaumissertje dat AI introduceerde en dat jij eruit haalde.",
          "Reflectie op winst én verlies: netto tijdwinst (na aftrek van snoeien en corrigeren), en of de vakinhoudelijke kwaliteit en het niveau overeind bleven — onderbouwd met je rubricscores. Bij welk type materiaal kostte het corrigeren juist méér dan zelf maken?"
        ]
      }
    ],
    "peerReview": {
      "title": "Laat een collega je herontwerp tegen het licht houden",
      "intro": "Vraag een collega — liefst uit je eigen vakgroep of team — om je nulmeting, workflow en kwaliteitsondergrens te lezen en kritisch op drie punten te reageren. Het gaat niet om een schouderklopje, maar om of jouw cijfers en norm hout snijden voor iemand anders.",
      "questions": [
        {
          "vraag": "Is de tijdwinst geloofwaardig en eerlijk gemeten? Vergeleek ik appels met appels (vergelijkbare set, dezelfde meetmethode) en heb ik de verborgen tijd — anonimiseren, controleren, bijsturen — eerlijk meegerekend?",
          "workspace": {
            "field": "peer-tijdwinst",
            "label": "Reactie collega op de tijdmeting",
            "placeholder": "Bv. 'Je telt de tijd voor anonimiseren niet mee' of 'De tweede set was makkelijker, dus de winst is overschat'...",
            "rows": 2
          }
        },
        {
          "vraag": "Houdt mijn kwaliteitsondergrens stand? Mist er een criterium in mijn rubric dat jij wél belangrijk vindt, of staat de lat te laag — zodat 'kwaliteit behouden' op papier klopt maar in de praktijk niet?",
          "workspace": {
            "field": "peer-kwaliteitsgrens",
            "label": "Reactie collega op de kwaliteitsondergrens",
            "placeholder": "Bv. 'Ik mis een criterium over toon' of 'Punt 3 is zo ruim dat bijna alles slaagt'...",
            "rows": 2
          }
        },
        {
          "vraag": "Zou jij deze workflow overnemen, en zo nee, wat houdt je tegen? Is voor jou helder waar AI stopt en mijn oordeel begint, en zie je een risico dat ik over het hoofd zie?",
          "workspace": {
            "field": "peer-overnemen",
            "label": "Reactie collega op overdraagbaarheid",
            "placeholder": "Bv. 'Ja, maar ik zou stap 2 zelf doen' of 'Het risico is dat je op AVG-vlak afhankelijk wordt van anonimiseren met de hand'...",
            "rows": 2
          }
        }
      ]
    },
    "reflection": [
      "Kijk naar je netto tijdwinst én je rubricscores naast elkaar: was de winst de moeite waard, of betaalde je hem (deels) in kwaliteit? Wees concreet — noem het getal en de score, niet een gevoel.",
      "Welke stap in je workflow bleek het minst delegeerbaar — waar moest jouw oordeel, relatie of vakdiepte er telkens aan te pas komen? Wat zegt dat over waar AI je wél en niet ontlast?",
      "Stel dat een collega zegt: 'Mooi, dan automatiseer ik dit helemaal.' Wat zou je tegenhouden, en welke ondergrens zou je hen meegeven zodat de tijdwinst niet stilletjes de kwaliteit opeet?"
    ],
    "nextLesson": ""
  }
};

export const lessonDetails = {
  ...baseLessonDetails,
  ...batchModule1,
  ...batchModule2,
  ...batchModule2Rest,
  ...batchKennischecks,
  ...module3Details,
  ...module4Details,
  ...module5Details,
  ...module6Details,
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
