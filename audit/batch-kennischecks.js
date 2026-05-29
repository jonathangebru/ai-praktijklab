// Vier kennischecks tussen sleutellessen.
// Te mergen in src/data/lessonDetails.js.
//
// Plaatsing:
//   check-mod1-deel1   na les 1.4 (basis-getoetst)
//   check-mod1-eind    na les 1.8 (Module 01 afgerond)
//   check-mod2-deel1   na les 2.5 (Module 02 halverwege)
//   check-mod2-eind    na les 2.9 (Module 02 afgerond)
//
// Schema:
//   format: "kennischeck"
//   checkTitle, checkItems[{type, q, options[{label, explain}], correct}]
//
// Per check 5-6 vragen. Geen toets — directe feedback per vraag, advies op het
// einde. Toon: laagdrempelig, niet betuttelend.

export const batchKennischecks = {
  "check-mod1-deel1": {
    format: "kennischeck",
    summary:
      "Korte zelfcheck na de basis. Vijf vragen over wat AI wel/niet doet, hoe je prompt, en hoe je context meegeeft. Direct feedback per antwoord. Klaar voor differentiatie en feedback (les 1.5).",

    duration: {
      total: "12 min",
      blocks: [
        { label: "5 vragen", min: 8 },
        { label: "Advies", min: 4 },
      ],
    },

    learningGoals: [
      "Je test of de kernbegrippen uit 1.1–1.4 zijn geland: definitie, prompt, briefing, vakdiepte.",
      "Je krijgt per vraag uitleg waarom een antwoord juist is — geen score.",
      "Je weet welk onderdeel je eventueel wilt herhalen voor je verdergaat.",
    ],

    scenario: {
      title: "Geen toets — feedback",
      context:
        "Vijf vragen die voortkomen uit lesinhoud 1.1 t/m 1.4. Per vraag uitleg bij elk antwoord. Aan het einde een advies: door naar 1.5, of even terug.",
      role: "Voor jezelf",
      tools: "Geen — alleen lezen en kiezen",
    },

    checkTitle: "Wat is geland uit Module 01 deel 1?",
    checkItems: [
      {
        type: "Meerkeuze · definitie",
        q: "Welke beschrijving past het best bij generatieve AI in onderwijs?",
        options: [
          {
            label:
              "Een systeem dat alle leerlingenvragen feilloos beantwoordt.",
            explain:
              "Niet juist — AI 'weet' niets, het voorspelt patronen op basis van trainingsdata.",
          },
          {
            label:
              "Een tekstgenerator die nieuwe tekst produceert op basis van patronen in enorme hoeveelheden trainingsdata.",
            explain:
              "Klopt. Dit is de werkdefinitie uit les 1.1 — patronen, geen kennis.",
          },
          {
            label: "Een zoekmachine met actuele informatie.",
            explain:
              "Niet juist — de meeste chatbots hebben een knowledge cutoff en zoeken niet 'live'.",
          },
          {
            label: "Een tool die alleen werkt voor ICT-vakken.",
            explain:
              "Niet juist — AI is breed inzetbaar in NL, wiskunde, zorg, talen, burgerschap.",
          },
        ],
        correct: 1,
      },
      {
        type: "Meerkeuze · prompt-ingrediënten",
        q: "Welke vier ingrediënten maken een prompt herkenbaar goed (volgens les 1.3)?",
        options: [
          {
            label: "Lengte, taalniveau, doel, vakgebied.",
            explain:
              "Bevat zinvolle elementen, maar mist de structuur uit les 1.3.",
          },
          {
            label: "Rol, context, taak, vorm.",
            explain:
              "Klopt — Rol-Context-Taak-Vorm is het basisrecept uit les 1.3.",
          },
          {
            label: "Vraag, voorbeeld, antwoord, controle.",
            explain:
              "Bevat het idee van iteratie, maar dit is geen prompt-recept.",
          },
          {
            label: "Onderwerp, leerjaar, niveau, tijd.",
            explain:
              "Dit hoort in een briefing (les 1.4), niet in een minimale prompt-structuur.",
          },
        ],
        correct: 1,
      },
      {
        type: "Waar of niet waar · hallucinatie",
        q: "AI kan een bron noemen met titel, auteur en jaar die volledig verzonnen is. Waar of niet waar?",
        options: [
          {
            label: "Waar — hallucinatie van bronnen is structureel.",
            explain:
              "Klopt. Zoals besproken in 1.2, hallucineert AI vaak bronvermeldingen met juiste-klinkende titels en fictieve auteurs. Altijd zelf checken.",
          },
          {
            label: "Niet waar — moderne modellen citeren accuraat.",
            explain:
              "Niet juist — ook 2026-modellen produceren regelmatig fictieve bronnen. Hallucinatie is geen 'oude' tekortkoming.",
          },
        ],
        correct: 0,
      },
      {
        type: "Meerkeuze · briefing",
        q: "Wat hoort in elke briefing voor lesvoorbereiding, volgens les 1.4?",
        options: [
          {
            label: "Alleen het onderwerp en de gewenste output.",
            explain:
              "Te dun. AI moet weten voor welke groep en welke aanpak — anders krijg je generieke output.",
          },
          {
            label:
              "Vak, niveau, lesduur, leerlingenkenmerken en jouw didactische voorkeur.",
            explain:
              "Klopt. Vier (eigenlijk vijf) ingrediënten die AI nodig heeft om bruikbare materialen te leveren.",
          },
          {
            label: "De volledige tekst van het leerboek.",
            explain:
              "Niet juist — context geef je beknopt, geen lange leerboektekst.",
          },
          {
            label: "Een gewenste cijferverdeling.",
            explain:
              "Niet relevant voor de briefing — AI maakt geen cijferverdeling.",
          },
        ],
        correct: 1,
      },
      {
        type: "Meerkeuze · iteratie",
        q: "Je krijgt een matig antwoord van AI op je prompt. Wat is de slimste vervolgactie?",
        options: [
          {
            label:
              "Een nieuwe, langere prompt schrijven en opnieuw beginnen.",
            explain:
              "Niet ideaal — je verliest het werk dat al goed was.",
          },
          {
            label:
              "Binnen hetzelfde gesprek verfijnen ('maak vraag 2 lastiger', 'vervang voorbeeld door X').",
            explain:
              "Klopt. Iteratie boven herstart — les 1.3 en 1.4 benadrukken dit als kerngewoonte.",
          },
          {
            label: "AI zelf laten beoordelen of het antwoord goed is.",
            explain:
              "Geen oordeel — AI 'evalueert' op patronen, niet op vakdiepte.",
          },
          {
            label: "Stoppen en het zelf doen.",
            explain:
              "Soms juist (zie les 1.4, 'wanneer níet AI gebruiken'), maar geen routinematige fix.",
          },
        ],
        correct: 1,
      },
    ],

    reflection: [
      "Welke vraag was lastiger dan verwacht — en waar zit nog onduidelijkheid in jouw werkroutine?",
      "Wat ga je eerst proberen in je eigen voorbereiding deze week?",
    ],

    checklist: [
      "Vijf vragen beantwoord — uitleg per antwoord gelezen",
      "Eén onderdeel benoemd dat ik wil herhalen of opzoeken",
      "Volgende les (1.5 Differentiatie en feedback) ingepland",
    ],

    nextLesson: "differentiatie-feedback",
  },

  "check-mod1-eind": {
    format: "kennischeck",
    summary:
      "Afsluitende check Module 01. Zes vragen over differentiatie, toetsing, integriteit, AI Act, en wanneer je AI niét inzet. Direct feedback. Bewuze brug naar Module 02.",

    duration: {
      total: "15 min",
      blocks: [
        { label: "6 vragen", min: 10 },
        { label: "Advies", min: 5 },
      ],
    },

    learningGoals: [
      "Je test of differentiatie, toetsing, integriteit en privacy zijn geland.",
      "Je herkent welke onderdelen van Module 01 je tijdens je voorbereiding actief gebruikt.",
      "Je weet of je klaar bent voor Module 02 (AI-geletterdheid en programmeerdidactiek).",
    ],

    scenario: {
      title: "Brug tussen modules",
      context:
        "Zes vragen die de toepassing in jouw lessen toetsen — niet alleen de definities. Aan het einde een advies: door naar 2.1, of een specifieke les herhalen.",
      role: "Voor jezelf",
      tools: "Geen",
    },

    checkTitle: "Heb je Module 01 in je vingers?",
    checkItems: [
      {
        type: "Meerkeuze · differentiatie",
        q: "Je krijgt drie opdracht-niveaus van AI terug die alleen verschillen in lengte. Wat doe je?",
        options: [
          {
            label: "Akkoord — drie niveaus is drie niveaus.",
            explain:
              "Niet ideaal. Lengte alleen is geen differentiatie — steigers ontbreken.",
          },
          {
            label:
              "Iteratie: vraag expliciet om steigers per niveau (woordhulp, structuur, voorbeeld, contextverbreding).",
            explain:
              "Klopt. Differentiatie zonder benoemde steigers is de kernvalkuil uit les 1.5.",
          },
          {
            label: "Zelf herschrijven, AI kan dit niet.",
            explain:
              "AI kan dit prima — mits je expliciet om steigers vraagt.",
          },
          {
            label: "Een ander model proberen.",
            explain: "Onnodig — het probleem zit in de briefing, niet in het model.",
          },
        ],
        correct: 1,
      },
      {
        type: "Meerkeuze · AI Act",
        q: "Wat regelt artikel 4 van de EU AI Act (van kracht sinds februari 2025)?",
        options: [
          {
            label:
              "Een verbod op AI in onderwijs zonder ouderlijke toestemming.",
            explain:
              "Niet juist — artikel 4 gaat niet over een verbod of toestemming.",
          },
          {
            label:
              "Een verplichting voor scholen om voldoende AI-geletterdheid van medewerkers en gebruikers te borgen.",
            explain:
              "Klopt. Artikel 4 verplicht 'deployers' (scholen) om proportioneel passende AI-geletterdheid te verzorgen. Geen voorgeschreven trainingsformat.",
          },
          {
            label:
              "Een verplichting om alle AI-gebruik bij studenten te registreren.",
            explain: "Niet juist — artikel 4 gaat niet over registratie.",
          },
          {
            label:
              "Een verbod op het gebruik van generatieve AI in toetsen.",
            explain:
              "Niet juist — de AI Act regelt geen specifiek toetsverbod.",
          },
        ],
        correct: 1,
      },
      {
        type: "Meerkeuze · toetsregimes",
        q: "Welk drietal noemt les 1.6 als praktische toetsregimes in een AI-tijdperk?",
        options: [
          {
            label: "Open-boek, gesloten-boek, mondeling.",
            explain:
              "Klassiek drieluik, maar mist het AI-onderscheid uit les 1.6.",
          },
          {
            label: "AI-verboden, AI-toegestaan met verantwoording, AI-vereist.",
            explain:
              "Klopt. Drie regimes per toetstype — kiezen per leerdoel en valideren bij collega's.",
          },
          {
            label: "Formatief, summatief, peer.",
            explain:
              "Soorten feedback (les 1.5), geen AI-toetsregimes.",
          },
          {
            label: "Geheim, semi-open, open.",
            explain: "Niet gebruikt in les 1.6.",
          },
        ],
        correct: 1,
      },
      {
        type: "Waar of niet waar · privacy",
        q: "Je mag een leerlingstuk inclusief naam in een persoonlijke ChatGPT-account plakken voor feedback. Waar of niet waar?",
        options: [
          {
            label:
              "Niet waar — leerlingdata moet anoniem zijn en via school-account.",
            explain:
              "Klopt. AVG-risico + persoonlijke accounts vallen buiten het schoolverwerkersregister. Les 1.7 expliciet hierover.",
          },
          {
            label: "Waar — als je het maar privé houdt.",
            explain:
              "Niet juist — data verlaat de school-tenant en kan worden gebruikt voor training.",
          },
        ],
        correct: 0,
      },
      {
        type: "Meerkeuze · vakdiepte",
        q: "AI levert een bronvermelding met een echte-klinkende titel en jaar. Wat hoort je standaardreflex te zijn?",
        options: [
          {
            label: "Direct overnemen — AI citeert tegenwoordig accuraat.",
            explain:
              "Niet juist. AI hallucineert structureel bronnen, ook in 2026.",
          },
          {
            label:
              "De bron handmatig opzoeken in een echte database voor je 'm gebruikt.",
            explain:
              "Klopt. Vakdiepte-check uit les 1.4 én vakvariaties uit verschillende vakken.",
          },
          {
            label:
              "AI vragen of de bron echt is.",
            explain:
              "Werkt zelden — AI bevestigt vaak fictieve bronnen.",
          },
          {
            label: "Geen tijd, accepteer je het.",
            explain: "Risico voor jezelf en je leerlingen.",
          },
        ],
        correct: 1,
      },
      {
        type: "Meerkeuze · transfer",
        q: "Volgens Darling-Hammond (2017): wanneer landt PD-leerstof écht in je lespraktijk?",
        options: [
          {
            label: "Bij eenmalige workshops met hoge dichtheid.",
            explain:
              "Niet juist — eenmalige sessies zonder follow-up halen zelden gedragsverandering.",
          },
          {
            label:
              "Met directe toepassing binnen één week, collegiale feedback en reflectie.",
            explain:
              "Klopt. Drie ingrediënten voor transfer — basis voor het 'spoor voor de geoefende docent' in elke les.",
          },
          {
            label: "Wanneer iemand het van bovenaf voorschrijft.",
            explain:
              "Niet juist — extrinsieke druk werkt slechter dan eigenaarschap.",
          },
          {
            label: "Pas na 50 uur volledig zelfstudie.",
            explain:
              "Te eng — eigenaarschap is belangrijker dan uren-norm.",
          },
        ],
        correct: 1,
      },
    ],

    reflection: [
      "Welke twee dingen uit Module 01 ga je in de eerstvolgende lesweek écht doen?",
      "Welk onderwerp uit Module 01 wil je eerst met een collega bespreken voor je naar Module 02 doorgaat?",
    ],

    checklist: [
      "Zes vragen beantwoord — uitleg per antwoord gelezen",
      "Twee acties voor eigen lessen benoemd",
      "Beslissing genomen: door naar Module 02 of eerst Module 01 herhalen",
    ],

    nextLesson: "ai-geletterdheid",
  },

  "check-mod2-deel1": {
    format: "kennischeck",
    summary:
      "Tussencheck Module 02. Vijf vragen over AI-geletterdheid, programmeerdidactiek en de eerste hands-on lessen. Klaar voor debuggen, prototypen en beoordelen.",

    duration: {
      total: "12 min",
      blocks: [
        { label: "5 vragen", min: 8 },
        { label: "Advies", min: 4 },
      ],
    },

    learningGoals: [
      "Je test of AI-geletterdheid (vier dimensies) en programmeerdidactiek zijn geland.",
      "Je herkent welke werkvorm bij welk leerdoel past in een AI-context.",
      "Je weet of je klaar bent voor de hands-on debug- en prototype-lessen.",
    ],

    scenario: {
      title: "Halverwege Module 02",
      context:
        "Vijf vragen na de inleidende lessen 2.1 t/m 2.5. Per vraag directe uitleg. Advies aan het einde: door naar 2.6 of even terug.",
      role: "Voor jezelf",
      tools: "Geen",
    },

    checkTitle: "Even kijken wat is geland tot 2.5.",
    checkItems: [
      {
        type: "Meerkeuze · AI-geletterdheid",
        q: "Welke vier dimensies onderscheidt het AI-GO! raamwerk (Npuls, 2025) voor docenten en studenten?",
        options: [
          {
            label: "Kennis, vaardigheden, houdingen, gedrag.",
            explain:
              "Lijkt erop, maar dit is niet de AI-GO! indeling.",
          },
          {
            label:
              "Kennis, vaardigheden, attitudes, ethisch bewustzijn.",
            explain:
              "Klopt. AI-GO! definieert deze vier dimensies — kennis, kunde, houding, ethisch bewustzijn.",
          },
          {
            label: "Theorie, praktijk, reflectie, transfer.",
            explain:
              "Goed didactisch maar geen AI-GO! categorieën.",
          },
          {
            label: "Lezen, schrijven, rekenen, programmeren.",
            explain: "Veel te smal en niet AI-specifiek.",
          },
        ],
        correct: 1,
      },
      {
        type: "Meerkeuze · werkvormen-onderscheid",
        q: "Welke vier AI-assisted development werkvormen onderscheidt les 2.3?",
        options: [
          {
            label:
              "Autocomplete, chat-assist, agentic, inline-edit.",
            explain:
              "Klopt. Vier werkvormen die elk een andere didactische begeleiding vragen.",
          },
          {
            label: "Code, design, debug, deploy.",
            explain:
              "Software-lifecycle, geen werkvormen-onderscheid.",
          },
          {
            label: "Junior, medior, senior, architect.",
            explain: "Functie-rollen, geen werkvormen.",
          },
          {
            label: "Lezen, schrijven, herzien, presenteren.",
            explain:
              "Algemeen, niet specifiek voor AI-assisted dev.",
          },
        ],
        correct: 0,
      },
      {
        type: "Waar of niet waar · vibe coding",
        q: "Vibe coding is altijd schadelijk voor het leerproces. Waar of niet waar?",
        options: [
          {
            label:
              "Niet waar — wegwerp-prototypes zijn een legitiem leerdoel waar vibe past.",
            explain:
              "Klopt. Vibe is goed voor prototypes; problematisch als 'algoritmisch denken' het leerdoel is. Les 2.4 hierover.",
          },
          {
            label: "Waar — vibe coding tast altijd conceptueel begrip aan.",
            explain:
              "Te absoluut. Het hangt af van het leerdoel — niet vibe = bad, wel vibe = always bad.",
          },
        ],
        correct: 0,
      },
      {
        type: "Meerkeuze · prompten voor code",
        q: "Welke promptronde komt volgens 2.5 vóór 'schrijf code'?",
        options: [
          {
            label: "Architectuur — opties voor ontwerp afwegen.",
            explain:
              "Klopt. Eerst architectuur (welk ontwerp past) vóór code-implementatie.",
          },
          {
            label: "Documentatie — beschrijf wat je gaat doen.",
            explain:
              "Niet de eerste stap. Documentatie komt na refactor, niet vooraf.",
          },
          {
            label: "Verkoop — overtuig de stakeholder.",
            explain: "Geen onderdeel van les 2.5.",
          },
          {
            label: "Debug — werk fouten weg.",
            explain:
              "Komt later, na eerste implementatie.",
          },
        ],
        correct: 0,
      },
      {
        type: "Meerkeuze · drie verantwoordingsvragen",
        q: "Welke drie verantwoordingsvragen herken jij als kern uit les 2.3?",
        options: [
          {
            label:
              "Wat doet dit? Wat breekt bij weghalen? Welke alternatieven heeft AI niet voorgesteld?",
            explain:
              "Klopt. Drie vragen die conceptueel begrip toetsen — bruikbaar in standups, code-reviews en beoordeling.",
          },
          {
            label:
              "Hoeveel regels heb je? Wat is je commit-message? Welke branch?",
            explain:
              "Procesvragen, geen begripsvragen.",
          },
          {
            label:
              "Welke taal? Welk framework? Welke deadline?",
            explain:
              "Project-vragen, niet de verantwoordingsdriedeling.",
          },
          {
            label:
              "Wat zegt je leerkracht? Wat zegt je AI? Wat zeg je zelf?",
            explain:
              "Klinkt aardig maar niet de drie verantwoordingsvragen uit 2.3.",
          },
        ],
        correct: 0,
      },
    ],

    reflection: [
      "Welke werkvorm uit 2.3 ga je het eerst in een begeleidingsmoment proberen?",
      "Welk concept uit 2.1–2.5 voelt nog ongrijpbaar — en wat is je actie?",
    ],

    checklist: [
      "Vijf vragen beantwoord — uitleg per antwoord gelezen",
      "Eén werkvorm geselecteerd voor de komende lesweek",
      "Volgende les (2.6 Debuggen met AI) ingepland",
    ],

    nextLesson: "debuggen-met-ai",
  },

  "check-mod2-eind": {
    format: "kennischeck",
    summary:
      "Eindcheck Module 02. Zes vragen over debuggen, prototypen, beoordelen en eindopdracht. Sluit beide modules af met een blik op transfer naar je vakgroep.",

    duration: {
      total: "15 min",
      blocks: [
        { label: "6 vragen", min: 10 },
        { label: "Advies + transfer", min: 5 },
      ],
    },

    learningGoals: [
      "Je test of de Module 02 lessen rond debuggen, prototypen en beoordelen zijn geland.",
      "Je herkent het verschil tussen ondersteuning en vervanging.",
      "Je weet welk type vervolgwerk je in je vakgroep wilt inbrengen.",
    ],

    scenario: {
      title: "Afsluiting hele cursus",
      context:
        "Zes vragen over de eindfase van Module 02. Per vraag uitleg. Aan het einde: advies voor vervolg in je vakgroep — niet alleen voor jezelf.",
      role: "Voor jezelf én je vakgroep",
      tools: "Geen",
    },

    checkTitle: "Wat neem je mee uit Module 02?",
    checkItems: [
      {
        type: "Meerkeuze · debuggen",
        q: "Wat is de slimste vraag aan AI bij een bug die je niet begrijpt?",
        options: [
          {
            label: "'Fix deze code'.",
            explain:
              "Te onspecifiek — krijgt vaak een wijziging zonder uitleg.",
          },
          {
            label:
              "'Leg regel-voor-regel uit wat deze code doet en markeer waar het volgens jou misgaat.'",
            explain:
              "Klopt. Vraag om uitleg én diagnose — leert jezelf én levert verifieerbare diagnose.",
          },
          {
            label: "'Schrijf de hele applicatie opnieuw.'",
            explain:
              "Verlies van werk en context — niet zinvol bij een afgebakende bug.",
          },
          {
            label:
              "'Bedenk drie vergelijkbare problemen.'",
            explain:
              "Leuke aanvulling maar niet de eerste actie.",
          },
        ],
        correct: 1,
      },
      {
        type: "Meerkeuze · prototype-iteratie",
        q: "Wat is volgens les 2.7 het belangrijkste verschil tussen iteratie 1 en iteratie 2?",
        options: [
          {
            label: "Iteratie 2 is langer en mooier.",
            explain:
              "Niet zinvol. Lengte/looks zijn geen iteratie-criterium.",
          },
          {
            label:
              "Iteratie 2 wordt gestuurd door een vooraf vastgesteld criterium dat in iteratie 1 niet bestond.",
            explain:
              "Klopt. Zonder iteratie-criterium krijg je 'meer van hetzelfde', geen verbetering.",
          },
          {
            label:
              "Iteratie 2 vervangt iteratie 1 volledig.",
            explain:
              "Niet juist — iteratie bouwt voort.",
          },
          {
            label: "Iteratie 2 is altijd door een ander gemaakt.",
            explain:
              "Niet noodzakelijk — soms wel, soms niet, maar het verschil zit niet daar.",
          },
        ],
        correct: 1,
      },
      {
        type: "Meerkeuze · beoordelen",
        q: "Een student levert een sterk werk in waarin AI duidelijk is gebruikt zonder vermelding. Welk regime past het beste (Npuls Handreiking 1)?",
        options: [
          {
            label:
              "Cijfer omlaag, geen verdere actie.",
            explain:
              "Werkt niet — onderkent het probleem maar adresseert het niet.",
          },
          {
            label:
              "Mondelinge verantwoording inplannen waarin student het proces en de keuzes uitlegt.",
            explain:
              "Klopt. Mondelinge toetsdialoog — beoordeel het proces, niet alleen het product. Npuls H1 hierover.",
          },
          {
            label:
              "Student verbieden om volgende keer AI te gebruiken.",
            explain:
              "Werkt zelden duurzaam, ook praktisch niet handhaafbaar.",
          },
          {
            label: "Werk diskwalificeren.",
            explain:
              "Disproportioneel zonder gesprek — eerst proces uitvragen.",
          },
        ],
        correct: 1,
      },
      {
        type: "Waar of niet waar · vibe vs algoritmisch",
        q: "Voor het leerdoel 'algoritmisch denken' is vibe coding een geschikte werkvorm. Waar of niet waar?",
        options: [
          {
            label:
              "Niet waar — vibe coding omzeilt juist het algoritmisch ontleden van problemen.",
            explain:
              "Klopt. Voor algoritmisch denken is vibe een didactische valkuil — voor wegwerp-prototypes prima.",
          },
          {
            label:
              "Waar — als je achteraf reflecteert is het oké.",
            explain:
              "Reflectie achteraf compenseert niet wat tijdens het maken niet is gebeurd.",
          },
        ],
        correct: 0,
      },
      {
        type: "Meerkeuze · transfer",
        q: "Wat is de sterkste actie om Module 02 in je vakgroep door te trekken?",
        options: [
          {
            label:
              "Een gedeeld document met je promptkit aanleveren in de volgende vaksectie.",
            explain:
              "Goed, maar één-richtingsverkeer. Voegt minder toe dan een gesprek.",
          },
          {
            label:
              "Een korte werksessie organiseren waarin collega's één eigen prompt iteratief verbeteren.",
            explain:
              "Klopt. Hands-on werksessie + reflectie maakt overdracht stevig — sluit aan op Darling-Hammond's collegiale focus.",
          },
          {
            label:
              "Een document doorsturen en wachten op reacties.",
            explain:
              "Vrijwel altijd lage opvolging.",
          },
          {
            label:
              "Niets — laat collega's het zelf ontdekken.",
            explain:
              "Mist het transfer-moment helemaal.",
          },
        ],
        correct: 1,
      },
      {
        type: "Meerkeuze · cursus-afronding",
        q: "Wat is volgens UNESCO (2024) een goede afsluiting van een AI-PD-traject voor docenten?",
        options: [
          {
            label: "Een schriftelijk eindtentamen.",
            explain:
              "Niet de UNESCO-aanpak — focus is competentie, geen examen.",
          },
          {
            label:
              "Een eigen artefact in eigen lespraktijk + collegiale toetsing.",
            explain:
              "Klopt. UNESCO-framework hanteert 'Acquire → Deepen → Create' met eindartefact in eigen context.",
          },
          {
            label: "Een certificaat zonder reflectie.",
            explain:
              "Mist het Create-niveau en de transfer.",
          },
          {
            label: "Een terugkomdag een jaar later.",
            explain:
              "Goede aanvulling, maar geen kern van de afsluiting zelf.",
          },
        ],
        correct: 1,
      },
    ],

    reflection: [
      "Welke twee concrete acties ga je in de eerstvolgende zes weken in je vakgroep brengen?",
      "Welk deel van deze cursus heb je nodig in je voorbereidingsroutine, en welk deel mag los?",
      "Wat zou je een collega als eerste les aanraden — en waarom juist die?",
    ],

    checklist: [
      "Zes vragen beantwoord — uitleg per antwoord gelezen",
      "Drie reflectievragen ingevuld",
      "Twee acties voor mijn vakgroep benoemd",
      "Promptkit gedeeld met opleidingsmanager of vaksectie",
    ],

    nextLesson: null,
  },
};
