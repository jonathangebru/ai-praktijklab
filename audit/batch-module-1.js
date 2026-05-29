// Batch Module 01 — 5 nieuwe/uitgebreide lessen op nieuwe standaard.
// Te mergen in src/data/lessonDetails.js.
//
// Volgorde van schrijven: 1.1 → 1.3 → 1.5 → 1.6 → 1.8
// Referentie: entry "lesvoorbereiding" (les 1.4) in src/data/lessonDetails.js
// Casusbesprekingsreferentie: entry "privacy-ethiek" (les 1.7)
// Bronnen: zie /audit/audit-v1.md.

export const batchModule1 = {
  /* ──────────────────────────────────────────────────────────────────────── */
  /*  LES 1.1 — Wat is AI en generatieve AI? · Diepteles                      */
  /*                                                                          */
  /*  Opbouw:                                                                 */
  /*  - Aanleiding: docent in de pauze krijgt vraag van student              */
  /*  - Concept: AI als autocomplete op steroïden (mental model)             */
  /*  - 6 stappen: definitie → drie modeltypes → misverstand → voorbeelden   */
  /*    in eigen vak → werkdefinitie schrijven → toets voor jezelf           */
  /*  - 4 worked examples: definitie, modeltypes herkennen, misverstand      */
  /*    expliciet maken, voorbeeld kiezen                                    */
  /*  - Vakvariaties Nederlands/wiskunde/zorg/ICT/talen/burgerschap          */
  /*  - Valkuilen: AI weet, hallucinatie als feature, anthropomorfisme,      */
  /*    'gewoon Google'                                                       */
  /* ──────────────────────────────────────────────────────────────────────── */

  "wat-is-ai": {
    format: "diepteles",

    summary:
      "Voor je AI verantwoord inzet, helpt het om scherp te krijgen wat het is en wat 'generatief' betekent. Geen techniekverhaal, geen statistiek-college — een werkdefinitie van 35 woorden waarmee je morgen voor de klas staat, drie modeltypes die je in je vak echt tegenkomt, en één misverstand dat je hardop maakt voordat het je beoordeling ondermijnt.",

    duration: {
      total: "75-90 minuten",
      blocks: [
        { label: "Aanleiding", min: 8 },
        { label: "Conceptueel kader", min: 14 },
        { label: "Werkdefinitie", min: 10 },
        { label: "Drie modeltypes", min: 12 },
        { label: "Misverstand expliciet", min: 10 },
        { label: "Voorbeelden in jouw vak", min: 12 },
        { label: "Werkdefinitie testen", min: 8 },
        { label: "Reflectie", min: 6 },
      ],
    },

    opening: {
      eyebrow: "Aanleiding",
      aanleiding: `Je staat bij het koffieapparaat. Een tweedejaars student van mbo niveau 4 ICT komt naast je staan en vraagt: 'Wat is ChatGPT eigenlijk?' Geen retorische vraag, geen instinker — ze wil het echt weten. Achter haar staan twee collega's mee te luisteren. Je hebt negentig seconden voor je volgende les begint.

Twee verleidingen springen omhoog. De eerste: technisch worden. Je begint over neurale netwerken, transformers, attention layers en parameter counts. Halverwege haakt iedereen af. De tweede: bagatelliseren. 'Het is gewoon een chatbot, hè.' Klinkt sympathiek, klopt niet — en zegt impliciet tegen je collega's dat je het zelf ook niet zeker weet.

Er is een derde optie. Je geeft een werkdefinitie van vijfendertig woorden, je noemt twee voorbeelden uit haar opleiding, en je maakt één misverstand expliciet voor het in haar essay opduikt. Negentig seconden, drie zinnen, geen techniek. Dat is wat deze les bouwt.`,
      waaromNu: `OECD's *Digital Education Outlook 2026* meldt dat 37% van docenten generatieve AI al regelmatig inzet voor planning en toetsing, maar de meeste landen — Nederland inbegrepen — *"miss systemic teacher professional development"* (OECD, 2026). Zonder gedeelde werkdefinitie praat je sectie langs elkaar. Hier bouw je die definitie.`,
    },

    conceptueel: {
      eyebrow: "Conceptueel kader",
      intro: `Generatieve AI is geen kennisbron en geen zoekmachine. Het is een statistisch model dat is getraind op zo veel tekst, code of beelden dat het patronen herkent en kan voortzetten. Vraag je het iets, dan voorspelt het wat de meest waarschijnlijke volgende woorden zijn gegeven jouw vraag en alles wat het tijdens training heeft gezien. Geen begrip, wel patronen. Geen geheugen, wel statistiek.

Dit klinkt mager — totdat je beseft hoe veel taal mensen produceren waarvan de structuur voorspelbaar is. Een uitleg over fotosynthese is grammaticaal en lexicaal sterk vergelijkbaar in alle biologieboeken op vo-niveau. Een feedback-zin op een vmbo-essay heeft een herkenbare opbouw. AI is bedwelmend goed in dat type tekst. Het is structureel zwak in unieke context, recente actualiteit, klassikaal-specifieke nuance en alles wat moreel oordeel vraagt.

Voor jouw vak betekent dat: AI is goed in variëren, herformuleren, herschrijven op een ander taalniveau en eerste-versies leveren. Het is zwak in feiten verifiëren, nieuwe inzichten produceren en context-specifieke oordelen vellen. De docent die dit onderscheid scherp heeft, gebruikt AI productiever én met minder schade. De docent die dat onderscheid niet maakt, krijgt of generieke output of fout-overtuigde output.

De praktische consequentie voor jouw lesopbouw: leg dit verschil hardop uit voordat je studenten met AI gaan werken. Niet als waarschuwing, als gereedschapsbeschrijving. Een schroevendraaier is goed voor schroeven, slecht voor spijkers. AI is goed in tekstvariatie, slecht in feitenverificatie. Dat is alles.`,
      mentalModel: {
        naam: "AI als autocomplete op steroïden",
        beschrijving: `Denk aan de autocomplete in je toetsenbord die het volgende woord voorspelt. Vergroot dat duizendvoudig: niet één woord vooruit, maar hele alinea's. Niet alleen jouw zinnen, maar alle tekst van het internet. Niet alleen Nederlands, maar code, formules en spreektaal. Dat is wat een taalmodel is — geavanceerde patroonvoorspelling, geen kennis.`,
      },
      kernbegrippen: [
        {
          term: "Generatief model",
          uitleg: "Een AI-systeem dat nieuwe tekst, code of beelden produceert op basis van patronen uit trainingsdata. Niet hetzelfde als een zoekmachine — er wordt niets opgezocht, er wordt iets verzonnen dat plausibel klinkt.",
        },
        {
          term: "Trainingsdata",
          uitleg: "De miljarden documenten waarop een model is getraind. Bepaalt wat het model 'kent', tot welk jaar (knowledge cutoff) en welke vertekeningen erin sluipen (taal, cultuur, vakgebied).",
        },
        {
          term: "Hallucinatie",
          uitleg: "Een plausibel klinkend antwoord dat feitelijk onjuist is. Geen bug — een directe consequentie van hoe het model werkt. Verzonnen titels, datums die niet kloppen, citaten die niemand heeft gezegd.",
        },
        {
          term: "Prompt",
          uitleg: "De vraag of instructie die jij aan AI geeft. Bepaalt grotendeels wat je terugkrijgt. Geen briefing = generieke output. Goede briefing = bruikbare eerste versie.",
        },
      ],
    },

    learningGoals: [
      "Je formuleert in maximaal 35 woorden wat generatieve AI is voor een student in jouw vak.",
      "Je benoemt drie soorten modellen (chatbots, code-assistenten, beeldgeneratoren) en geeft per soort één voorbeeld uit jouw lespraktijk.",
      "Je maakt expliciet wat AI structureel níet doet (weten, redeneren onder onzekerheid, oordelen) en gebruikt dat als gereedschapsbeschrijving.",
      "Je herkent één veelvoorkomend misverstand bij studenten en hebt een vooraf voorbereide reactie van drie zinnen.",
    ],

    scenario: {
      title: "Klaslokaalscenario",
      context:
        "Maandagochtend, eerste uur. Je geeft 50 minuten les aan een eerstejaarsklas hbo informatica. Een student vraagt voor de introductie: 'wat is dit nou eigenlijk, ChatGPT?' Vijftien gezichten kijken op. Je hebt twee minuten om een definitie te geven die niet onzin is, niet betuttelend klinkt, en geen vakcollege techniek wordt.",
      role: "Docent · eerstejaars hbo informatica",
      tools: "Whiteboard · ChatGPT als demo · geen slides",
    },

    steps: [
      {
        title: "Bouw je werkdefinitie vanuit hun praktijk",
        body: "Begin niet bij techniek. Vraag wat studenten gisteren met AI hebben gedaan. Vier antwoorden zijn voorspelbaar: samenvatten, herschrijven, brainstormen, code uitleggen. Bouw je definitie op vanuit die vier — niet vanuit transformers of trainingsparameters.",
        time: "8 min",
        voorbeeld:
          "'Wat heb je gisteren met ChatGPT gedaan?' → samenvatten van een tekst, een Engels mailtje vertalen, een loop debuggen. Definitie: 'AI is een systeem dat tekst voorspelt — het maakt nieuwe tekst die past bij wat jij vraagt, gebaseerd op miljarden voorbeelden.'",
        workspace: {
          field: "werkdefinitie",
          label: "Jouw werkdefinitie in 35 woorden",
          shortLabel: "Werkdefinitie",
          hint: "Max 35 woorden · vanuit hun praktijk · geen techjargon · geen metaforen die niet kloppen",
          placeholder:
            "Generatieve AI is een systeem dat ... [verbinding met wat studenten al doen] ... [wat het wel doet] ... [wat het niet doet] ...",
          rows: 4,
        },
      },
      {
        title: "Drie modeltypes — herken wat in je vak speelt",
        body: "Drie families van generatieve modellen verschijnen in onderwijs: chatbots (ChatGPT, Claude, Gemini), code-assistenten (Copilot, Cursor, Codium) en beeldgeneratoren (DALL-E, Midjourney, Stable Diffusion). Elk type vraagt andere didactiek. Bepaal welke twee in jouw vak het meest spelen.",
        time: "12 min",
        voorbeeld:
          "Docent Nederlands vo: chatbots (essays, samenvattingen) speelt veel; code-assistenten nauwelijks; beeldgeneratoren een beetje (covers, illustraties). Docent ICT mbo niveau 4: chatbots + code-assistenten massaal; beeldgeneratoren incidenteel.",
        workspace: {
          field: "modeltypes",
          label: "De twee modeltypes die in mijn vak het meest spelen",
          shortLabel: "Modeltypes in mijn vak",
          hint: "Welke twee speelt het meest? Welke één is randverschijnsel? Geef per type één concreet voorbeeld uit jouw lespraktijk.",
          placeholder:
            "Type 1 (meest aanwezig): ... voorbeeld: ...\nType 2 (regelmatig): ... voorbeeld: ...\nType 3 (rand): ... voorbeeld: ...",
          rows: 5,
        },
      },
      {
        title: "Maak één misverstand hardop",
        body: "Het hardnekkigste misverstand: 'AI weet'. Studenten lezen het antwoord en behandelen het als kennis. Maak dit één keer hardop, vroeg in het schooljaar. Drie zinnen, geen scheldpartij op AI, geen apocalyptisch toontje — gewoon: zo werkt het niet, en dit is de consequentie.",
        time: "10 min",
        voorbeeld:
          "'AI weet niets. Het voorspelt het meest waarschijnlijke volgende woord op basis van een gigantische tekstdataset. Daarom klinkt het overtuigend, ook als het volledig onjuist is. Verifieer elk feit dat je in je werk gebruikt.'",
        workspace: {
          field: "misverstand-respons",
          label: "Jouw drie zinnen over 'AI weet'",
          shortLabel: "Misverstand-respons",
          hint: "Geen scheldpartij, geen technische uitleg — een werkbeschrijving in drie zinnen die je bij introductie van een opdracht uitspreekt.",
          placeholder:
            "Zin 1 (wat AI doet): ...\nZin 2 (waarom het overtuigend klinkt): ...\nZin 3 (wat dat voor jullie werk betekent): ...",
          rows: 5,
        },
      },
      {
        title: "Drie voorbeelden uit jouw vakgebied",
        body: "Voor elk modeltype dat in jouw vak speelt: één concreet voorbeeld waar het waarde toevoegt en één waar het schade kan doen. Niet algemeen — uit jouw klas. Bewaar deze drie voorbeelden: je gebruikt ze bij elke introductieles van het schooljaar.",
        time: "12 min",
        workspace: {
          field: "voorbeelden",
          label: "Drie voorbeelden uit mijn vakgebied",
          shortLabel: "Vakvoorbeelden",
          hint: "Per voorbeeld: situatie, waar AI helpt, waar AI schade doet als je niets controleert.",
          placeholder:
            "Voorbeeld 1: ... — Helpt bij: ... — Risico: ...\nVoorbeeld 2: ... — Helpt bij: ... — Risico: ...\nVoorbeeld 3: ... — Helpt bij: ... — Risico: ...",
          rows: 7,
        },
      },
      {
        title: "Test je werkdefinitie op een collega",
        body: "Laat je definitie van 35 woorden lezen aan een vakgenoot uit een andere sectie. Vraag: 'Klopt dit voor jouw vak ook?' Pas aan tot het over secties heen werkt. Een definitie die alleen in jouw vak klopt is geen werkdefinitie — dat is een vakdidactische uitspraak vermomd als algemene definitie.",
        time: "8 min",
        workspace: {
          field: "definitie-v2",
          label: "Jouw definitie na collega-feedback",
          shortLabel: "Definitie v2",
          hint: "Wat heeft de collega gevraagd / opgemerkt? Wat heb je veranderd?",
          placeholder:
            "Wat collega zei: ...\nWat ik veranderde: ...\nDefinitieve versie (max 35 woorden): ...",
          rows: 5,
        },
      },
      {
        title: "Plak de werkdefinitie ergens zichtbaar",
        body: "Lijstje bij je laptop, post-it op je notitieboek, eerste dia van je introductiepresentatie. Een definitie die je éénmaal schrijft en vervolgens nooit meer ziet, is geen werkdefinitie. Hij moet binnen handbereik komen voor de tien keer per jaar dat een student of collega het vraagt.",
        time: "5 min",
        workspace: {
          field: "definitie-plek",
          label: "Waar plak je 'm?",
          shortLabel: "Plek",
          hint: "Eén concrete plek waar je 'm de komende drie maanden tegenkomt.",
          placeholder:
            "Plek: ...\nWanneer ik 'm volgende week gebruik: ...",
          rows: 3,
        },
      },
    ],

    workedExamples: [
      {
        title: "Werkdefinitie schrijven",
        prompt:
          "Schrijf in maximaal 35 woorden een definitie van generatieve AI voor een eerstejaars hbo-informaticastudent. Vermijd technische termen (transformer, neural network, parameter). Vermijd ook metaforen die niet kloppen (AI 'denkt', AI 'weet'). Eindig met één zin die zegt wat AI structureel niet kan.",
        voorbeeldOutput: `Generatieve AI is een systeem dat tekst, code of beelden produceert door te voorspellen wat statistisch het meest waarschijnlijke volgende woord, regel of pixel is. Het werkt op patronen uit miljarden voorbeelden — niet op begrip. Het kan geen feiten verifiëren of weten of iets klopt.`,
        commentaar:
          "Sterk omdat 'voorspellen' en 'patronen' het mechanisme correct dekken zonder vakjargon. Sterk omdat de slotzin het belangrijkste misverstand vooruit afdekt. Verbeterpunt: de zin is iets lang voor 'autocomplete' op steroïden — je kunt 'in miljarden voorbeelden' nog vervangen door 'op enorm veel tekst' als je studenten hebt die nog moeite hebben met abstractie. Test: lees voor aan jezelf in normale spreektijd. Onder de tien seconden? Goed.",
        tryItYourself: {
          field: "we-werkdefinitie",
          label: "Schrijf de werkdefinitie voor jouw vakgroep",
          shortLabel: "Eigen werkdefinitie",
          hint: "35 woorden max · vanuit jouw vakcontext · zonder jargon · met één zin over wat AI niet doet",
          example:
            "Generatieve AI is een systeem dat ... door te ... op basis van ... Het kan geen ...",
        },
      },
      {
        title: "Drie soorten modellen in jouw vak",
        prompt:
          "Geef drie concrete voorbeelden van hoe generatieve AI op dit moment wordt gebruikt in [vakgebied]. Per voorbeeld één regel over wat goed werkt en één regel over wat oppassen vraagt. Houd de toon zakelijk — geen marketing.",
        voorbeeldOutput: `Voorbeeld 1 — chatbot voor schrijfondersteuning. Goed: leerlingen krijgen onmiddellijk feedback op zinsbouw en woordkeuze. Oppassen: AI 'corrigeert' soms passages die expressief bedoeld zijn, en kan dialect platslaan tot standaardtaal.

Voorbeeld 2 — beeldgenerator voor lesmateriaal. Goed: visualisaties bij abstracte concepten zijn binnen minuten klaar. Oppassen: stereotypering in personen (gender, etniciteit) is structureel — controleer voor je iets de klas in stuurt.

Voorbeeld 3 — code-assistent voor klein scriptwerk. Goed: docenten zonder programmeerachtergrond bouwen invul-rubrics. Oppassen: gegenereerde code kan kleine fouten bevatten die alleen opvallen bij echte data.`,
        commentaar:
          "Sterk omdat elk voorbeeld concreet is (chatbot, beeldgenerator, code-assistent — drie families). Sterk omdat 'goed' en 'oppassen' even kort zijn. Verbeterpunt: 'studenten' versus 'leerlingen' moet consistent zijn met jouw niveau. Voor hbo zou je voor voorbeeld 2 'studenten' kunnen aanpassen. Test: zou je dit hardop kunnen voorlezen in 90 seconden? Zo niet, snijden.",
        tryItYourself: {
          field: "we-modeltypes",
          label: "Drie voorbeelden voor jouw vak",
          shortLabel: "Eigen voorbeelden",
          hint: "Eén voorbeeld per modelfamilie · eigen vak · max 50 woorden per voorbeeld",
          example:
            "Voorbeeld 1 — [modeltype] voor [taak]. Goed: ... Oppassen: ...",
        },
      },
      {
        title: "Misverstand 'AI weet' weerleggen",
        prompt:
          "Een student zegt: 'AI heeft dit gezegd, dus het zal wel kloppen.' Schrijf drie zinnen die zonder belerend te klinken uitleggen waarom dat een denkfout is. Sluit af met één concrete vervolgactie die de student kan doen om alsnog te verifiëren.",
        voorbeeldOutput: `AI weet niets — het voorspelt het meest waarschijnlijke volgende woord. Daardoor klinkt het overtuigend, óók wanneer de inhoud verzonnen of verouderd is. Bij elke feitelijke uitspraak die je in je werk gebruikt, hoort verificatie via een primaire bron.

Concrete actie: pak één feitelijke uitspraak uit je AI-antwoord, zoek deze op in een database of vakbron, en noteer waar je het hebt geverifieerd.`,
        commentaar:
          "Sterk omdat de toon niet betuttelend is. Sterk omdat de slotzin niet zegt 'gebruik geen AI' maar 'doe dit erbij'. Verbeterpunt: 'primaire bron' kan voor sommige niveaus ondersteuning vragen — voor vmbo zou je 'echte bron zoals een schoolboek of betrouwbare website' schrijven. Belangrijk: oefen deze drie zinnen één keer voor de spiegel zodat je 'm zonder voorlezen kunt geven.",
        tryItYourself: {
          field: "we-misverstand",
          label: "Jouw drie zinnen voor jouw niveau",
          shortLabel: "Eigen weerlegging",
          hint: "Drie zinnen + één concrete vervolgactie · op het niveau van jouw klas · geen 'altijd' of 'nooit'",
          example:
            "AI ... Daardoor ... Bij elke feitelijke uitspraak ... Concrete actie: ...",
        },
      },
      {
        title: "Eén voorbeeld uitkiezen voor introductieles",
        prompt:
          "Ik moet maandag mijn klas in twee minuten uitleggen wat generatieve AI is. Geef mij één voorbeeld uit [vakgebied] dat ik kan demonstreren — iets dat in 30 seconden zichtbaar maakt wat AI wel en niet kan. Beschrijf wat ik moet typen, wat AI waarschijnlijk geeft, en welke vraag ik daarna aan de klas stel.",
        voorbeeldOutput: `Vakgebied: Nederlands vo.

Demo: vraag aan ChatGPT 'Schrijf een gedicht van vier regels over de Veluwe, geschikt voor 2 vmbo-tl, op B1-niveau.' AI levert binnen seconden iets dat rijmt, dat klinkt als poëzie en dat het rijke beeld van heuvels en heide oproept.

Vraag aan de klas (na het lezen): 'Wat is hier eigenlijk gebeurd? Heeft AI de Veluwe gezien? Heeft AI een gedicht geschreven, of heeft het de structuur van een gedicht voorspeld?' Twee minuten gesprek over het verschil tussen vorm en betekenis. Geen sluitend antwoord nodig — de vraag landt.`,
        commentaar:
          "Sterk omdat het de definitie demonstreert in plaats van uitlegt. Sterk omdat de slotvraag geen ja/nee toelaat. Verbeterpunt: kies de demo zodanig dat AI iets oplevert dat aantoonbaar net niet klopt — dat maakt het scherper. Bijvoorbeeld 'noem drie Nederlandse Nobelprijswinnaars Literatuur' is rijker omdat AI dan misschien iemand verzint. Bewaar de demo na de les voor herhaling: dezelfde demo doet bij dezelfde definitie elk jaar weer.",
        tryItYourself: {
          field: "we-demo",
          label: "Schrijf de demo voor jouw introductieles",
          shortLabel: "Eigen demo",
          hint: "Wat type je, wat verwacht je terug, welke vraag stel je daarna aan de klas",
          example:
            "Demo: prompt = ... · verwachte output: ... · vraag aan klas: ...",
        },
      },
    ],

    vakvariaties: [
      {
        vak: "Nederlands · vo",
        body: "Demo werkt sterk met poëzie of een schrijfopdracht: AI levert iets dat klinkt-als-Nederlands maar mist culturele resonantie. Laat klas opmerken wat ontbreekt — dat is de definitie van wat AI niet doet.",
      },
      {
        vak: "Wiskunde · vo/mbo",
        body: "Demo: vraag AI om een 'lastige' breukvergelijking en de uitwerking. AI maakt regelmatig kleine rekenfouten in tussenstappen. Laat klas de fout vinden. Daarmee maak je 'AI voorspelt' tastbaar — voorspelde stappen, geen berekende stappen.",
      },
      {
        vak: "Zorg · mbo niveau 3-4",
        body: "Demo: 'noem vijf symptomen van diabetes type 2 bij een 65-jarige vrouw met overgewicht'. AI levert een lijst gericht op gemiddelde patiënt. Bespreek wat ontbreekt: genderverschillen in presentatie. Daarmee landt 'AI mist nuance' direct in klinisch denken.",
      },
      {
        vak: "ICT · mbo/hbo",
        body: "Demo: vraag een functie in JavaScript die op het eerste gezicht werkt. Loop een edge case door. Vaak werkt 't toch niet. Daarmee toon je 'AI voorspelt code, controleert niet' — kerngewoonte voor je hele vak.",
      },
      {
        vak: "Moderne vreemde talen · vo/hbo",
        body: "Demo: vraag om vertaling van een Nederlandse spreekwoord. AI vertaalt letterlijk en mist culturele equivalent. Bespreek wat 'goed vertalen' eigenlijk vraagt. Definitie 'AI voorspelt patronen, geen betekenis' wordt zo zichtbaar.",
      },
      {
        vak: "Burgerschap · vo/mbo",
        body: "Demo: vraag naar 'de drie belangrijkste politieke partijen in Nederland'. AI noemt iets uit zijn trainingsdata van een onbekende datum. Bespreek 'knowledge cutoff' als concept zonder dat woord te gebruiken. Sluit aan op les 1.2 over hallucinatie.",
      },
    ],

    valkuilen: [
      {
        titel: "Technisch beginnen",
        watGebeurtEr:
          "Je begint over neurale netwerken, transformer-architectuur of attention mechanism. Drie zinnen verder ben je 80% van je klas kwijt en de overige 20% denkt dat AI alleen voor techies is.",
        fix: "Begin altijd bij wat studenten al doen met AI. Daarna noem je het mechanisme in één zin ('voorspelt patronen'). Techniek alleen op aanvraag.",
      },
      {
        titel: "Bagatelliseren",
        watGebeurtEr:
          "'Het is gewoon een chatbot.' Klinkt nuchter, klopt niet. Studenten en collega's lezen dat als 'docent neemt AI niet serieus' en gaan zelf experimenteren zonder kader.",
        fix: "Een serieuze, korte definitie — 'AI voorspelt tekst op basis van patronen, geen kennis' — toont dat je het kent zonder het de hemel in te prijzen.",
      },
      {
        titel: "Anthropomorfisme — 'AI denkt'",
        watGebeurtEr:
          "Je gebruikt onbewust werkwoorden als 'AI weet', 'AI begrijpt', 'AI vindt'. Studenten nemen die over. Drie weken later vertrouwen ze AI-antwoorden alsof het een autoriteit is.",
        fix: "Disciplineer je woordgebruik: 'AI levert', 'AI produceert', 'AI voorspelt'. In de eerste twee weken merk je dit niet — daarna voelt het natuurlijk.",
      },
      {
        titel: "Hallucinatie als 'soms fout'",
        watGebeurtEr:
          "Je legt hallucinatie uit als een occasioneel mankement: 'kan een keer voorkomen, let op'. Dat onderschat het. Hallucinatie is een directe consequentie van het mechanisme — niet een uitzondering.",
        fix: "Leg uit als feature van het mechanisme: 'omdat het voorspelt en niet weet, kán het iets plausibels verzinnen — bij elke feitelijke claim hoort verificatie.'",
      },
      {
        titel: "Eén werkdefinitie voor alle modeltypes",
        watGebeurtEr:
          "Je schrijft één definitie voor 'generatieve AI' en past 'm aan op chatbots, code-assistenten en beeldgeneratoren tegelijk. Het wordt vaag of klopt voor één type niet.",
        fix: "Werkdefinitie blijft generaliserend (patronen voorspellen), maar in voorbeelden onderscheid je modelfamilies. Zo blijft de definitie kort, blijven voorbeelden specifiek.",
      },
    ],

    geoefendSpoor: {
      eyebrow: "Voor de geoefende docent",
      titel: "Doe één keer per kwartaal een definitie-update",
      beschrijving:
        "Modellen veranderen sneller dan curricula. Een definitie die in 2024 klopte, mist in 2026 reasoning-modellen, agentic AI en multimodale modellen. Plan elke drie maanden vijftien minuten waarin je je werkdefinitie tegen het licht houdt. Eén vraag aan jezelf: zou ik dit nu nog steeds zo schrijven voor een eerstejaars? Voeg toe wat ontbreekt, schrap wat verouderd is, hou onder de 35 woorden. Deel de update met je vaksectie zodat de hele groep gelijk loopt.",
      opdracht:
        "Plan in je agenda voor het volgende kwartaal: 'AI-werkdefinitie update — 15 minuten + 5 minuten delen vaksectie'. Schrijf nu al de eerste agendapunt op.",
    },

    eindcriteria: [
      {
        criterium: "Werkdefinitie",
        onder: "Definitie > 50 woorden of bevat technisch jargon (transformer, neuron) of gebruikt 'AI weet'.",
        op: "Definitie ≤ 35 woorden, zonder jargon, met één zin over wat AI niet doet.",
        boven: "+ Definitie getest op een collega uit andere sectie en bijgesteld.",
      },
      {
        criterium: "Drie modeltypes",
        onder: "Eén modeltype genoemd of typen door elkaar gehaspeld.",
        op: "Drie families benoemd; per familie één voorbeeld uit eigen vak.",
        boven: "+ Per type één 'goed werkt' en één 'oppassen' uit eigen lespraktijk.",
      },
      {
        criterium: "Misverstand-respons",
        onder: "Reactie is belerend of gebruikt 'altijd' en 'nooit'.",
        op: "Drie zinnen + één concrete actie, in eigen toon, op niveau van klas.",
        boven: "+ Eén keer hardop geoefend; klaar voor live gebruik.",
      },
      {
        criterium: "Vakcontextualisatie",
        onder: "Algemene voorbeelden uit AI-marketing of populaire pers.",
        op: "Voorbeelden uit eigen vak, eigen lespraktijk, eigen niveau.",
        boven: "+ Demo voorbereid die in <30 seconden zichtbaar maakt wat AI niet kan.",
      },
      {
        criterium: "Doorvertaal-actie",
        onder: "Geen plek voor de definitie buiten dit document.",
        op: "Werkdefinitie staat zichtbaar bij werkplek of in introductiepresentatie.",
        boven: "+ Vaksectie heeft de definitie ook en gebruikt 'm gemeenschappelijk.",
      },
    ],

    reflection: [
      "Welk deel van je werkdefinitie zou een eerstejaars studente uit een niet-technische opleiding waarschijnlijk verkeerd lezen — en hoe weet je dat zonder het te toetsen?",
      "Toen je het misverstand 'AI weet' uitschreef, welke verleiding voelde je om óf te dramatiseren óf juist te bagatelliseren? Wat zegt dat over hoe jij zelf met AI omgaat?",
      "Welke verandering in je woordgebruik (van 'AI weet' naar 'AI voorspelt') ga je deze week bij collega's actief voorleven, en hoe weet je over twee weken of het bij hen ook is geland?",
    ],

    checklist: [
      "Werkdefinitie van max 35 woorden geschreven en bewaard",
      "Drie modelfamilies kunnen benoemen met eigen voorbeelden",
      "Misverstand 'AI weet' in drie zinnen + één actie uitgeschreven",
      "Demo van <30 sec voorbereid voor introductieles",
      "Definitie getest op een collega uit andere sectie",
      "Werkdefinitie staat zichtbaar bij werkplek of in eerste dia",
      "Eigen woordgebruik gedisciplineerd (geen 'AI weet/denkt/vindt')",
      "Update in agenda gepland voor volgend kwartaal",
    ],

    verderLezen: [
      {
        titel: "What is AI Literacy? Competencies and Design Considerations",
        bron: "Long & Magerko · CHI Conference",
        jaar: 2020,
        link: "https://dl.acm.org/doi/fullHtml/10.1145/3313831.3376727",
        waarom: "Vijf vragen die AI-geletterdheid ontleden — bruikbaar als check op je eigen definitie.",
      },
      {
        titel: "AI Competency Framework for Teachers",
        bron: "UNESCO",
        jaar: 2024,
        link: "https://www.unesco.org/en/articles/ai-competency-framework-teachers",
        waarom: "Internationaal kader met drie progressieniveaus — vertel je waar je werkdefinitie op het Acquire-niveau staat.",
      },
      {
        titel: "AI-GO! Raamwerk voor AI-geletterdheid",
        bron: "Npuls",
        jaar: 2025,
        link: "https://npuls.nl/kennisbank/ai-go-een-raamwerk-voor-ai-geletterdheid-in-het-onderwijs",
        waarom: "Wetenschappelijk onderbouwd Nederlands kader voor mbo/hbo/wo — koppelt jouw definitie aan vier dimensies.",
      },
      {
        titel: "Digital Education Outlook 2026",
        bron: "OECD",
        jaar: 2026,
        link: "https://www.oecd.org/content/dam/oecd/en/publications/reports/2026/01/oecd-digital-education-outlook-2026_940e0dd8/062a7394-en.pdf",
        waarom: "Internationale stand-van-zaken met cijfers over docent-AI-gebruik — handig om collega's te overtuigen.",
      },
    ],

    nextLesson: "wat-kan-ai",
  },

  /* ──────────────────────────────────────────────────────────────────────── */
  /*  LES 1.3 — Prompting voor docenten · Diepteles                           */
  /*                                                                          */
  /*  Opbouw:                                                                 */
  /*  - Aanleiding: docent worstelt met 'maak een toets' → vage output       */
  /*  - Concept: vier ingrediënten (rol, context, taak, vorm) +              */
  /*    iteratie boven herstart                                              */
  /*  - 6 stappen: vier ingrediënten herkennen → eigen vage prompt           */
  /*    herschrijven → iteratie oefenen → wanneer níet → prompttemplate     */
  /*    opbouwen → vakvariaties                                              */
  /*  - 4 worked examples: vage prompt herschrijven, iteratieprompt,         */
  /*    template uit eigen vak, wanneer níet                                 */
  /*  - Geoefend spoor: prompttemplate-systeem voor vaksectie                */
  /* ──────────────────────────────────────────────────────────────────────── */

  "prompting-voor-docenten": {
    format: "diepteles",

    summary:
      "Een goede prompt is het verschil tussen onbruikbare AI-tekst en een eerste versie waarop je verder bouwt. Vier ingrediënten — rol, context, taak, vorm — bepalen 80% van de kwaliteit. Een iteratie boven herstarten bepaalt de andere 20%. In deze les bouw je niet één goede prompt, maar een werkmethode die je vakgenoten ook kunnen overnemen.",

    duration: {
      total: "75-90 minuten",
      blocks: [
        { label: "Aanleiding", min: 8 },
        { label: "Conceptueel kader", min: 12 },
        { label: "Vier ingrediënten", min: 12 },
        { label: "Vage prompt herschrijven", min: 12 },
        { label: "Iteratie oefenen", min: 12 },
        { label: "Wanneer níet", min: 8 },
        { label: "Promptkit voor jezelf", min: 10 },
        { label: "Reflectie", min: 6 },
      ],
    },

    opening: {
      eyebrow: "Aanleiding",
      aanleiding: `Vrijdagmiddag. Je geeft maandagochtend een formatieve toets over de stelling van Pythagoras aan een 2 vmbo-tl-klas. Je opent ChatGPT, typt 'maak een toets over de stelling van Pythagoras', en krijgt vijf vragen terug. Drie zijn te makkelijk, één lijkt op iets uit havo-3 en één bevat de term 'hypotenusa' zonder uitleg. Je sluit het tabblad. Een uur later doe je het zelf.

Dit is niet de schuld van AI. Dit is de uitkomst van een prompt die niemand iets vertelt: welk vak? welk niveau? welke leerlingen? welke vorm? welke didactische voorkeur? Zonder die context heeft AI geen keuze dan iets uit het midden — niet jouw klas, niet jouw curriculum, niet jouw didactiek.

Een goede prompt geeft AI vier ingrediënten: een rol om in te kruipen, context om in te passen, een taak om te doen, en een vorm om af te leveren. Daarna verfijn je in plaats van opnieuw te beginnen. Niet sexy, wel betrouwbaar. Vijftien minuten oefenen levert maanden tijdwinst.`,
      waaromNu: `Long & Magerko (2020) stelden vast dat AI-geletterdheid niet alleen instrumentele vaardigheid vraagt maar ook *"conceptual understanding of AI's affordances and limitations"*. Prompting maakt dat begrip operationeel: je dwingt jezelf om expliciet te maken wat AI nodig heeft. Wie nooit met vier ingrediënten werkt, blijft op vage prompts hopen.`,
    },

    conceptueel: {
      eyebrow: "Conceptueel kader",
      intro: `Een prompt is geen vraag aan een zoekmachine. Het is een briefing aan een collega die alles heeft gelezen, geen jouw klas heeft gezien, en jouw didactische gewoontes niet kent. Hoe minder context je geeft, hoe meer AI moet gokken. Goeie input, bruikbare output. Vage input, generieke output.

De vier ingrediënten — rol, context, taak, vorm — werken niet omdat ze magisch zijn. Ze werken omdat ze AI vier dingen geven die het anders zou moeten verzinnen: vanuit welk perspectief schrijven, welke situatie aannemen, welke handeling uitvoeren, en in welke verpakking aanleveren. Mis één, dan dwaalt het af. Mis er twee, dan krijg je iets dat klinkt alsof het over jouw vak gaat maar geen aansluiting heeft op jouw leerlingen.

De tweede regel — iteratie boven herstart — is contra-intuïtief. Je krijgt iets matigs terug en je reflex zegt: opnieuw beginnen, betere prompt typen. Bijna altijd verlies je daarmee het werk dat al goed was. Een tweede prompt die zegt 'maak vraag 3 lastiger zonder het leerdoel te veranderen' levert beter resultaat dan een hele nieuwe vraag-uit-het-niets. Iteratie respecteert wat AI al goed deed; herstart gooit dat weg.

De derde regel — wanneer níet — wordt vaak overgeslagen. Niet alles is een AI-taak. Een gevoelige gesprekvoorbereiding waarbij je dezelfde dag de klas zelf moet zien; een toetsbeoordeling waar de leerling in kwestie morgen mondeling wordt gehoord; een correspondentie met een ouder. AI inzetten waar context onmisbaar is en je context niet kunt of mag delen, is geen tijdwinst — dat is risico.`,
      mentalModel: {
        naam: "AI als pas-aangenomen mede-ontwerper",
        beschrijving: `Stel je voor: een onderwijsontwerper die net is begonnen. Slim, leest snel, kent algemene didactiek. Heeft nog geen idee in welke school je werkt, welk niveau je geeft, hoe je leerlingen leren. Geef je een briefing, dan kan ze leveren. Geef je een vraag uit de losse pols, dan gokt ze. Itereer je, dan groeit ze in je context binnen één gesprek. Begin je elke keer opnieuw, dan blijft ze beginner.`,
      },
      kernbegrippen: [
        {
          term: "Rol",
          uitleg: "De positie van waaruit AI moet schrijven. 'Je bent een ervaren docent Nederlands vo' is anders dan 'je bent een examinator' of 'je bent een leerling die uitlegt aan een klasgenoot'.",
        },
        {
          term: "Context",
          uitleg: "De situatie waarin de output landt. Niveau, leerlingenkenmerken, lesduur, vooraf-gekende stof. Zonder context kies AI generieke voorbeelden uit een onbekend land.",
        },
        {
          term: "Taak",
          uitleg: "De concrete handeling die AI uitvoert. 'Schrijf vijf MC-vragen' is een taak. 'Help me met de toets' is geen taak — dat is een wens.",
        },
        {
          term: "Vorm",
          uitleg: "De verpakking van de output. Aantal items, taalniveau, structuur (lijst/lopende tekst), maximale lengte. Zonder vorm levert AI iets dat soms te lang, soms te kort, soms in verkeerde taal is.",
        },
        {
          term: "Iteratie",
          uitleg: "Verfijnen binnen hetzelfde gesprek. 'Maak vraag 2 toegankelijker', 'vervang voorbeeld door iets uit techniek', 'voeg één hint toe' — kleiner stappen, betere uitkomst.",
        },
      ],
    },

    learningGoals: [
      "Je herkent in elke prompt de vier ingrediënten (rol, context, taak, vorm) en kunt zeggen welke ontbreekt.",
      "Je herschrijft eigen vage prompts naar vier-ingrediënten-prompts en verantwoordt elke toevoeging.",
      "Je itereert binnen hetzelfde gesprek met minstens drie verschillende type vervolgvragen.",
      "Je benoemt drie soorten taken waar je AI bewust níet voor gebruikt, met argumentatie.",
    ],

    scenario: {
      title: "Klaslokaalscenario",
      context:
        "Je geeft maandag een formatieve toets over de stelling van Pythagoras aan 2 vmbo-tl. Vrijdag heb je twee uur om iets bruikbaars te maken. Vorige week kostte een vergelijkbare voorbereiding drie uur omdat je met AI bleef herstarten op vage prompts. Deze keer doe je het anders.",
      role: "Docent wiskunde · 2 vmbo-tl",
      tools: "ChatGPT (school-account) · Google Docs voor klad",
    },

    steps: [
      {
        title: "Vier ingrediënten herkennen in andermans prompts",
        body: "Begin met diagnose. Kijk naar drie prompts die collega's hebben gebruikt (eigen, internet, voorbeeldbibliotheek). Streep per prompt aan waar rol, context, taak en vorm staan. Welke ontbreekt? Dat gat verklaart de matige output.",
        time: "12 min",
        voorbeeld:
          "Prompt: 'maak een toets over de stelling van Pythagoras'. Rol: ontbreekt. Context: ontbreekt. Taak: half (welk type vragen?). Vorm: ontbreekt. Met drie van vier missing levert AI iets gemiddelds — niet 'fout', wel onbruikbaar.",
        workspace: {
          field: "ingredient-diagnose",
          label: "Diagnose: welke ingrediënten ontbreken in jouw oude prompts?",
          shortLabel: "Diagnose",
          hint: "Kies één recente eigen prompt. Streep aan: rol? context? taak? vorm? Welke ontbreken?",
          placeholder:
            "Oude prompt: ...\nRol aanwezig? ...\nContext aanwezig? ...\nTaak aanwezig? ...\nVorm aanwezig? ...\nWat ontbreekt: ...",
          rows: 7,
        },
      },
      {
        title: "Schrijf je eigen prompt — vier ingrediënten compleet",
        body: "Pak een opdracht uit je werkweek. Schrijf de prompt met alle vier ingrediënten zichtbaar. Niet schmink — gewoon vier zinnen die elk één ingrediënt dekken. Test 'm. Vergelijk met je oude versie.",
        time: "12 min",
        voorbeeld:
          "'Je bent een ervaren docent wiskunde 2 vmbo-tl [rol]. Klas van 24 leerlingen, drie hebben moeite met algebra, vijf werken op havo-niveau [context]. Maak vijf formatieve MC-vragen over de stelling van Pythagoras die de typische denkfout 'kwadraten optellen' blootleggen [taak]. Geef per vraag één juiste antwoord en drie afleiders, plus per afleider één zin uitleg [vorm].'",
        workspace: {
          field: "eigen-prompt-v1",
          label: "Mijn eigen prompt met vier ingrediënten",
          shortLabel: "Eigen prompt v1",
          hint: "Rol · context · taak · vorm — elk ingrediënt expliciet aanwezig",
          placeholder:
            "Rol: Je bent ...\nContext: Klas van ... met ...\nTaak: Schrijf ...\nVorm: ...",
          rows: 7,
        },
      },
      {
        title: "Itereer binnen hetzelfde gesprek",
        body: "Lees de output. Wat is bruikbaar? Wat moet beter? Schrijf één vervolgprompt die wat goed was respecteert en alleen het zwakke deel aanpakt. Doe minstens twee iteraties voor je tevreden bent. Belangrijk: niet opnieuw beginnen.",
        time: "12 min",
        voorbeeld:
          "Iteratie 1: 'Vraag 3 is te makkelijk voor 2 vmbo-tl. Maak 'm uitdagender door een 3D-toepassing toe te voegen, zonder leerdoel te veranderen.' Iteratie 2: 'Vervang de afleider B in vraag 1 door een denkfout die ik in mijn klas vaker zie: leerlingen tellen kwadraten op in plaats van een breuk te trekken.' Iteratie 3: 'Voeg per vraag één hint toe die ik tijdens de les mondeling kan geven.'",
        workspace: {
          field: "iteraties",
          label: "Mijn drie iteraties — wat verfijnde ik per ronde?",
          shortLabel: "Iteraties",
          hint: "Drie vervolgprompts binnen hetzelfde gesprek. Per iteratie: wat respecteerde je, wat veranderde je?",
          placeholder:
            "Iteratie 1: ...\nIteratie 2: ...\nIteratie 3: ...",
          rows: 6,
        },
      },
      {
        title: "Wanneer níet — drie taken die je bewust niet aan AI geeft",
        body: "Niet alles is een AI-taak. Formuleer drie soorten werkzaamheden waarvoor je AI deze maand niet inzet, met argumentatie. Veelvoorkomende keuzes: gevoelige oudermail, beoordeling van mondelinge presentatie van leerling met SEN, eerste-versie van een collegiale beoordeling. Schrijf jouw drie op.",
        time: "8 min",
        workspace: {
          field: "wanneer-niet",
          label: "Drie taken waarvoor ik AI deze maand niet gebruik",
          shortLabel: "Wanneer níet",
          hint: "Per taak: kort wat het is, waarom je het zelf doet, wat je zou verliezen als AI het deed",
          placeholder:
            "Taak 1: ... — Waarom niet: ... — Wat ik zou verliezen: ...\nTaak 2: ... — Waarom niet: ... — Wat ik zou verliezen: ...\nTaak 3: ... — Waarom niet: ... — Wat ik zou verliezen: ...",
          rows: 7,
        },
      },
      {
        title: "Bouw je eerste promptkit — vijf prompts voor herhalend werk",
        body: "De winst van prompting komt pas als je niet elke keer opnieuw schrijft. Maak vijf prompts voor je meest voorkomende voorbereidingstaken: leerdoelen, differentiatie, quizvragen, casus, rubric. Per prompt vier ingrediënten. Bewaar in je notitie-app, document of wiki van je sectie.",
        time: "10 min",
        voorbeeld:
          "Promptkit voor docent Nederlands vo: (1) leerdoelen-prompt; (2) gedifferentieerd-opdrachtblad-prompt; (3) quizvragen-prompt; (4) discussiecasus-prompt; (5) rubric-prompt. Elk slechts één template met placeholders — je verandert alleen onderwerp, niveau, lesduur.",
        workspace: {
          field: "promptkit",
          label: "Mijn eigen promptkit — vijf prompts",
          shortLabel: "Promptkit",
          hint: "Vijf templates met placeholders voor onderwerp/niveau/duur. Per prompt: rol, context, taak, vorm.",
          placeholder:
            "Prompt 1 (leerdoelen):\nPrompt 2 (differentiatie):\nPrompt 3 (quizvragen):\nPrompt 4 (casus):\nPrompt 5 (rubric):",
          rows: 10,
        },
      },
      {
        title: "Plan een vervolg in les 1.4",
        body: "Deze les bouwt het mentale model en de basisstructuur. Les 1.4 (AI voor lesvoorbereiding) past dat toe op een hele lesopzet. Plan nu al wanneer je 1.4 doet en welk eigen lesthema je daarvoor inbrengt.",
        time: "4 min",
        workspace: {
          field: "vervolg-1-4",
          label: "Wanneer ik les 1.4 doe en met welk lesthema",
          shortLabel: "Vervolg",
          hint: "Datum + lesthema waarvoor je de hele voorbereiding doet",
          placeholder:
            "Datum: ...\nLesthema (vak, niveau, onderwerp): ...",
          rows: 3,
        },
      },
    ],

    workedExamples: [
      {
        title: "Vage prompt → vier-ingrediënten-prompt",
        prompt:
          "Origineel: 'maak een formatieve toets over de stelling van Pythagoras'.\n\nHerschrijf met vier ingrediënten zichtbaar voor 2 vmbo-tl, klas van 24 met drie leerlingen die moeite hebben met algebra. Voorkeur voor MC-vragen met afleiders die echte denkfouten blootleggen.",
        voorbeeldOutput: `Je bent een ervaren docent wiskunde voor 2 vmbo-tl [rol]. Klas van 24 leerlingen, drie hebben moeite met algebraïsche bewerkingen [context]. Schrijf vijf formatieve MC-vragen over de stelling van Pythagoras die de typische denkfout 'kwadraten optellen in plaats van het verschil van kwadraten nemen' blootleggen [taak]. Geef per vraag één juist antwoord en drie afleiders. Per afleider één zin uitleg: waarom is deze fout verleidelijk? Houd taalniveau B1, maximaal 80 woorden per vraag inclusief afleiders [vorm].`,
        commentaar:
          "Sterk omdat elk ingrediënt expliciet is gemarkeerd. In de praktijk hoef je die labels niet in je prompt te zetten — ze helpen tijdens het schrijven om te checken of je iets vergeet. Verbeterpunt: 'typische denkfout' is een aanname over jóúw klas. Beter: noem de denkfout die je in jouw eigen nakijken vaker hebt gezien. Daarmee maak je AI's output niet alleen scherper, je sluit ook beter aan op je eigen lespraktijk.",
        tryItYourself: {
          field: "we-vage-prompt",
          label: "Herschrijf een eigen vage prompt",
          shortLabel: "Eigen herschrijving",
          hint: "Pak een prompt uit je werkweek die generiek output gaf. Voeg de ontbrekende ingrediënten toe.",
          example:
            "Origineel: ...\nHerschreven: Je bent ... [rol] ... [context] ... [taak] ... [vorm]",
        },
      },
      {
        title: "Iteratieprompt — drie type vervolgvragen",
        prompt:
          "Geef drie verschillende soorten iteratievragen die je in hetzelfde gesprek kunt stellen om AI's output te verfijnen, zonder opnieuw te beginnen. Per type: wat doe je en wanneer.",
        voorbeeldOutput: `Type 1 — Verzwaren/verlichten: 'Maak vraag 3 lastiger voor leerlingen die op havo-niveau werken, zonder leerdoel te veranderen.' Wanneer: als één of twee items niveau-mismatch hebben.

Type 2 — Vervangen: 'Vervang de afleider B in vraag 1 door een denkfout die ik in nakijken vaker zie: kwadraten optellen.' Wanneer: als afleiders generiek zijn en geen bestaande misconceptie raken.

Type 3 — Toevoegen: 'Voeg per vraag één hint toe die ik tijdens de les mondeling kan geven aan leerlingen die vastlopen.' Wanneer: als output goed is maar je wilt didactische steiger erbij.`,
        commentaar:
          "Sterk omdat de drie typen elkaar niet overlappen. Type 1 raakt zwaarte, type 2 raakt inhoud, type 3 raakt didactische ondersteuning. Dit dekt ongeveer 80% van iteratievragen in lesvoorbereiding. Verbeterpunt: voeg eventueel een vierde type toe — 'verantwoorden': 'leg per vraag in één zin uit welk subdoel hij toetst'. Daarmee dwing je AI om expliciet te maken wat impliciet was.",
        tryItYourself: {
          field: "we-iteratie",
          label: "Schrijf jouw drie iteratie-vragen voor jouw recente AI-gesprek",
          shortLabel: "Eigen iteraties",
          hint: "Verzwaren/verlichten · vervangen · toevoegen — drie type vragen die je kunt hergebruiken",
          example:
            "Iteratie 1 (verzwaren): ...\nIteratie 2 (vervangen): ...\nIteratie 3 (toevoegen): ...",
        },
      },
      {
        title: "Template voor herhalend werk",
        prompt:
          "Maak één promptlatemplate voor het schrijven van een gedifferentieerd opdrachtblad. De template moet werken voor verschillende vakken en niveaus — alleen de placeholders veranderen.",
        voorbeeldOutput: `Je bent een ervaren docent [VAK] op [NIVEAU] [rol]. Klas van [AANTAL] leerlingen, met variatie van [LAAGSTE NIVEAU] tot [HOOGSTE NIVEAU] [context]. Herschrijf de opdracht '[ORIGINELE OPDRACHT]' op drie niveaus (basis, gemiddeld, uitdagend). Leerdoel blijft gelijk: [LEERDOEL] [taak]. Steigers per niveau: basis = woordhulp + voorgestructureerde vragen; gemiddeld = open vragen + één voorbeeldzin; uitdagend = bronnenvergelijking + eigen standpunt. Houd taalniveau [B1/B2/C1]. Max [AANTAL] woorden per niveau-opdracht [vorm].`,
        commentaar:
          "Sterk omdat de template generiek genoeg is voor vakken Nederlands, geschiedenis, biologie en maatschappijleer. Sterk omdat de steigers per niveau expliciet zijn — voorkomt dat AI alleen in lengte differentieert. Verbeterpunt: voor sommige vakken (wiskunde, talen, ICT) zijn andere steigers logischer. Maak per vakgebied een variant. Voor wiskunde: 'basis = voorbeeldsom mét uitwerking; gemiddeld = voorbeeldsom zonder uitwerking; uitdagend = open probleem met meerdere oplossingsroutes'.",
        tryItYourself: {
          field: "we-template",
          label: "Schrijf één template voor jouw meest voorkomende voorbereidingstaak",
          shortLabel: "Eigen template",
          hint: "Generiek genoeg om te hergebruiken · placeholders voor variabelen · vier ingrediënten dekkend",
          example:
            "Je bent ... [rol] ... [context] ... Schrijf ... [taak] ... [vorm]",
        },
      },
      {
        title: "Wanneer níet — drie taken om AI niet bij te halen",
        prompt:
          "Geef drie soorten werk uit een docentweek waarvoor het verstandig is AI niet in te zetten. Per type: waarom niet, en wat een docent wel kan doen.",
        voorbeeldOutput: `Type 1 — Communicatie met ouders over een gevoelige situatie. Waarom niet: toon en context vragen kennis van het kind, de relatie met ouders, en eerdere gesprekken die AI niet kent. Wat wel: schrijf het zelf, laat een collega ééns meelezen.

Type 2 — Beoordeling van een leerling met SEN waar veel context speelt. Waarom niet: redelijke aanpassingen zijn vaak persoonsgebonden; AI's "objectieve" rubric mist die individuele lijn. Wat wel: gebruik AI voor een algemeen rubric-skelet, vul context handmatig in.

Type 3 — Eerste reactie op een conflict in de klas of in de sectie. Waarom niet: snelheid en koelte tegelijk vragen empathie en gevoel voor groepsdynamiek die in tekst niet zichtbaar zijn. Wat wel: praat eerst met een collega, schrijf daarna.`,
        commentaar:
          "Sterk omdat de drie typen niet alleen 'AVG-gevoelig' zijn maar ook 'context-gevoelig' en 'relatie-gevoelig'. Dat dekt meer dan alleen privacyrisico's. Verbeterpunt: voor sommige docenten is een vierde type relevant — toetsing met hoog gewicht (eindexamen) waar AI als beoordelaar wettelijk problematisch is. Voeg toe als dat in je vak speelt.",
        tryItYourself: {
          field: "we-wanneer-niet",
          label: "Schrijf jouw drie taken waarvoor je AI niet inzet",
          shortLabel: "Eigen 'wanneer níet'",
          hint: "Drie taken · per taak waarom niet · en wat je wel doet",
          example:
            "Type 1: ... — Waarom niet: ... — Wat wel: ...",
        },
      },
    ],

    vakvariaties: [
      {
        vak: "Nederlands · vo",
        body: "Sterke iteratievragen: 'Houd de toon van [auteur] aan' of 'pas aan voor een leerling die op B1 leest'. Wanneer níet: literaire interpretatie waar de docentlezing onderdeel van de toets is.",
      },
      {
        vak: "Wiskunde · vo/mbo",
        body: "Sterke iteratievragen: 'Vervang getallen door iets uit techniek' of 'voeg één tussenstap toe'. Wanneer níet: tentamenproblemen waar leerling het redeneerspoor moet leren — laat ze worstelen.",
      },
      {
        vak: "Zorg · mbo niveau 3-4",
        body: "Promptkit specifiek: casuïstiek-template, reflectieprompts voor stage, rubric-template. Wanneer níet: oordelen over leerlingen in de praktijk — AI mist de klinische blik en de relatie.",
      },
      {
        vak: "ICT · mbo/hbo",
        body: "Sterke iteratievragen: 'leg uit alsof je het aan een eerstejaars vertelt' of 'voeg drie edge cases toe'. Wanneer níet: kerncompetenties die de student in beheersing moet tonen — code-assistent verbergt onbegrip.",
      },
      {
        vak: "Moderne vreemde talen · vo/hbo",
        body: "Promptkit-template: 'leg cultureel verschil uit als dat speelt' altijd erin. Wanneer níet: literaire vertaling waar betekenis boven correctheid gaat.",
      },
      {
        vak: "Burgerschap · vo/mbo",
        body: "Sterke iteratievragen: 'geef twee verdedigbare posities zonder strawman' of 'pas aan voor leerlingen die zelf bij de doelgroep horen'. Wanneer níet: actuele politiek waar knowledge cutoff schade doet.",
      },
    ],

    valkuilen: [
      {
        titel: "Opnieuw beginnen in plaats van itereren",
        watGebeurtEr:
          "Je krijgt iets matigs terug en typt een hele nieuwe prompt. Je verliest het werk dat al goed was en AI vergeet de context die je net had opgebouwd.",
        fix: "Verfijn altijd binnen hetzelfde gesprek. 'Maak vraag 3 lastiger', 'vervang voorbeeld door iets uit techniek', 'voeg één hint toe' — drie soorten vervolgvragen die je hergebruikt.",
      },
      {
        titel: "Context erin, vorm vergeten",
        watGebeurtEr:
          "Je geeft rol, context en taak goed, maar zegt niets over aantal items, taalniveau, lengte of structuur. Output is bruikbaar van inhoud maar verkeerd verpakt.",
        fix: "Voeg altijd vorm toe: aantal items, taalniveau (B1/B2), max woorden, structuur (lijst/lopende tekst).",
      },
      {
        titel: "Te lange prompt — alles erin gestopt",
        watGebeurtEr:
          "Je schrijft een prompt van twee alinea's met curriculumdoel, vakvisie, jaarplanning en vakbond-gevoeligheden. AI verdwaalt en levert iets diffuus.",
        fix: "Beperk tot vier ingrediënten in heldere zinnen. Wat extra context vraagt, doe je in iteraties — niet vooraf.",
      },
      {
        titel: "AVG-lekken in de context",
        watGebeurtEr:
          "Je geeft als context 'klas van 24 met Mohamed die moeite heeft met algebra'. Persoonsgegevens lekken naar de AI-tenant.",
        fix: "Anonimiseer altijd. 'Klas van 24 met drie leerlingen die moeite hebben met algebra' is even informatief en niet herleidbaar.",
      },
      {
        titel: "Promptkit nooit hergebruiken",
        watGebeurtEr:
          "Je schrijft elke keer opnieuw. Geen template, geen herhaling. De tijdwinst die prompting belooft komt nooit aan.",
        fix: "Bouw na deze les een kit van vijf templates voor je meest voorkomende werk. Bewaar in je notitie-app of sectiewiki.",
      },
    ],

    geoefendSpoor: {
      eyebrow: "Voor de geoefende docent",
      titel: "Bouw een prompttemplate-systeem voor je vaksectie",
      beschrijving:
        "Heb je al een eigen promptkit en gebruik je iteratie automatisch? De volgende stap is collectief. Verzamel acht tot tien sterke prompts uit je vaksectie, anonimiseer ze, en orden ze per type werk (leerdoelen, differentiatie, toetsing, casus, rubric, beoordeling). Voeg per prompt een notitie toe: voor welk vak/niveau werkt deze het beste, en welke valkuil hoort erbij. Investering: 90 minuten plus 30 minuten in vergadering. Resultaat: je vaksectie loopt gelijk in prompttaal, je hoeft niet meer per docent uit te leggen wat 'goeie prompt' is, en nieuwe docenten kunnen instappen zonder lange leercurve.",
      opdracht:
        "Lever vóór de eerstvolgende vaksectievergadering een gedeeld document met minimaal acht prompts, geordend per type werk. Vraag twee collega's om feedback voor het in algemeen gebruik gaat.",
    },

    eindcriteria: [
      {
        criterium: "Vier ingrediënten",
        onder: "Drie of meer ingrediënten ontbreken in eigen prompts.",
        op: "Alle vier ingrediënten zichtbaar in elke prompt voor lesvoorbereiding.",
        boven: "+ Per ingrediënt een persoonlijke standaardformulering die je hergebruikt.",
      },
      {
        criterium: "Iteratie",
        onder: "Bij matige output meteen nieuwe prompt geschreven.",
        op: "Drie iteraties binnen één gesprek; geen herstart.",
        boven: "+ Drie type iteratievragen (verzwaren, vervangen, toevoegen) routinematig inzetbaar.",
      },
      {
        criterium: "Promptkit",
        onder: "Geen template; elke keer opnieuw geschreven.",
        op: "Vijf templates klaar voor herhalend werk.",
        boven: "+ Templates getest door één collega en bijgesteld op basis van diens feedback.",
      },
      {
        criterium: "Wanneer níet",
        onder: "Geen lijstje of impliciete grens.",
        op: "Drie taken expliciet uitgesloten, met argumentatie.",
        boven: "+ Eén uitgesloten taak bewust opnieuw geprobeerd en de redenen om uit te sluiten zijn versterkt of bijgesteld.",
      },
      {
        criterium: "AVG-discipline",
        onder: "Persoonsgegevens of herleidbare omschrijvingen in prompts.",
        op: "Alle prompts geanonimiseerd; school-account gebruikt.",
        boven: "+ Standaardformulering voor klas-context die nooit herleidbaar is.",
      },
    ],

    reflection: [
      "Welk van de vier ingrediënten was in jouw oude prompts het meest afwezig, en wat zegt dat over wat jij impliciet aan AI overlaat?",
      "Bij welke matige output was je geneigd opnieuw te beginnen, en wat had je verloren als je dat ook had gedaan?",
      "Welke taak die je vandaag op je 'wanneer níet'-lijstje hebt gezet, ga je de komende maand actief beschermen tegen AI-handenwerk — en waarom is dat moeilijker dan het lijkt?",
    ],

    checklist: [
      "Vier ingrediënten herkenbaar in elke prompt (rol, context, taak, vorm)",
      "Eigen vage prompt herschreven en verschil zichtbaar",
      "Drie iteraties binnen één gesprek uitgevoerd",
      "Drie type iteratievragen op een rij (verzwaren, vervangen, toevoegen)",
      "Wanneer-níet-lijstje met drie taken + argumentatie",
      "Promptkit van vijf templates klaar voor herhalend werk",
      "AVG-check: geen herleidbare leerlinggegevens in prompts",
      "Datum voor les 1.4 (lesvoorbereiding) gepland",
    ],

    verderLezen: [
      {
        titel: "What is AI Literacy? Competencies and Design Considerations",
        bron: "Long & Magerko · CHI Conference",
        jaar: 2020,
        link: "https://dl.acm.org/doi/fullHtml/10.1145/3313831.3376727",
        waarom: "Vijf vragen waarop AI-geletterdheid rust — bruikbaar als check op de diepte van je promptkit.",
      },
      {
        titel: "AI Competency Framework for Teachers",
        bron: "UNESCO",
        jaar: 2024,
        link: "https://www.unesco.org/en/articles/ai-competency-framework-teachers",
        waarom: "Competentiegebied 'AI pedagogy' raakt direct aan goede prompting voor onderwijswerk.",
      },
      {
        titel: "Werken aan AI-geletterdheid op school",
        bron: "Kennisnet",
        jaar: 2025,
        link: "https://www.kennisnet.nl/artificial-intelligence/werken-aan-ai-geletterdheid-op-school/",
        waarom: "Vier dimensies — koppelt jouw promptkit aan organisatorische en didactische dimensies.",
      },
      {
        titel: "Effective Teacher Professional Development",
        bron: "Darling-Hammond e.a. · Learning Policy Institute",
        jaar: 2017,
        link: "https://learningpolicyinstitute.org/sites/default/files/product-files/Effective_Teacher_Professional_Development_REPORT.pdf",
        waarom: "Zeven kenmerken — bruikbaar om de promptkit-aanpak in je sectie te legitimeren als evidence-based PD.",
      },
    ],

    nextLesson: "lesvoorbereiding",
  },

  /* ──────────────────────────────────────────────────────────────────────── */
  /*  LES 1.5 — AI voor differentiatie en feedback · Diepteles                */
  /*                                                                          */
  /*  Opbouw:                                                                 */
  /*  - Aanleiding: docent met klas van 28 + spreiding 2F-3F + tijdgebrek    */
  /*  - Concept: differentiatie via steigers, niet via lengte; drie soorten  */
  /*    feedback (formatief, summatief, peer); rubric als startpunt          */
  /*  - 6 stappen: niveau-analyse → drie niveaus opdracht → steigers per     */
  /*    niveau → drie soorten feedback → eigen rubric bouwen → testen        */
  /*  - 4 worked examples: drie-niveau opdrachtblad mét steigers,            */
  /*    formatieve feedback, peer feedback, rubric maken                     */
  /*  - Vakvariaties + valkuilen (AI maakt verschil in lengte, één rubric    */
  /*    voor alle leerlingen, feedback zonder voorbeeld)                     */
  /* ──────────────────────────────────────────────────────────────────────── */

  "differentiatie-feedback": {
    format: "diepteles",

    summary:
      "Differentiëren is niet 'kort en lang' — het is gedoseerde ondersteuning per niveau. Feedback is niet 'fout en goed' — het is drie verschillende werkvormen met elk eigen functie. Deze les bouwt een werkmethode voor drie-niveau-opdrachten met expliciete steigers, en voor drie soorten feedback waarbij AI de eerste 60% doet en jij de laatste 40%.",

    duration: {
      total: "75-90 minuten",
      blocks: [
        { label: "Aanleiding", min: 8 },
        { label: "Conceptueel kader", min: 12 },
        { label: "Niveau-analyse", min: 10 },
        { label: "Drie niveaus + steigers", min: 15 },
        { label: "Drie soorten feedback", min: 12 },
        { label: "Eigen rubric bouwen", min: 12 },
        { label: "Test en bijstellen", min: 8 },
        { label: "Reflectie", min: 6 },
      ],
    },

    opening: {
      eyebrow: "Aanleiding",
      aanleiding: `Donderdagavond. Je hebt morgenochtend les aan een 3 vmbo-tl-klas van 28 leerlingen. Vier lezen op 2F, twintig op 3F, vier werken op havo-niveau. Het onderwerp is verzuring — natuur- en scheikunde, ongeveer halverwege de module. Je hebt 45 minuten voor één opdracht die voor alle niveaus iets oplevert.

Twee veelgemaakte routes. Route één: één opdracht voor iedereen, hopen dat het werkt voor het midden, en met de 2F-leerlingen extra praten tijdens de les. Resultaat: vier leerlingen lopen vast, vier vervelen zich, twintig zijn ongeveer betrokken. Route twee: drie opdrachten genereren met AI, copy-paste in je document, lekker — totdat je ziet dat het verschil tussen niveau 1 en 3 alleen in lengte zit. Drie kortere of langere versies van hetzelfde, geen echte didactische lijn.

Er is een derde route. Drie opdrachten met hetzelfde leerdoel, maar met expliciete steigers per niveau: woordhulp en voorgestructureerde vragen voor 2F, voorbeeldzin plus open einde voor 3F, bronvergelijking voor havo. Daarna drie soorten feedback, niet één: formatief tijdens de les, summatief erna, peer als slot. AI doet de eerste opzet; jij maakt het kloppend voor jouw klas. Vijfentwintig minuten voorbereiding, drie niveaus die op één werkblad passen.`,
      waaromNu: `OECD (2024) wijst differentiatie en formatieve feedback aan als twee van de meest impactvolle docentvaardigheden voor leerresultaat. *"Differentiated instruction and timely formative feedback consistently emerge as predictors of student learning gains."* (OECD, *Education Policy Outlook*, 2024) AI verlaagt de drempel om deze twee structureel toe te passen — mits je weet wat je vraagt.`,
    },

    conceptueel: {
      eyebrow: "Conceptueel kader",
      intro: `Differentiatie betekent: hetzelfde leerdoel, verschillende routes. Niet drie verschillende doelen, want dan creëer je drie verschillende klassen in één lokaal. Wel verschillende ingangen, verschillende ondersteuning en verschillende eindvormen — met aan het eind een gedeelde lijn dat alle leerlingen iets vergelijkbaars hebben opgedaan. Wat de routes onderscheidt zijn steigers: gedoseerde ondersteuning die je geeft of weghaalt, afhankelijk van waar de leerling staat.

Vier veelgebruikte steigers in vo en mbo: woordhulp (woordenlijst met uitleg), structuur (vragen of stappen voorgegeven), voorbeeld (één modelantwoord erbij) en contextverbreding (extra bron of vergelijking). Een basisniveau krijgt vaak woordhulp + structuur. Een gemiddeld niveau krijgt voorbeeld + open einde. Een uitdagend niveau krijgt contextverbreding + open vraag. AI is uitstekend in deze structuur uitvoeren — als je expliciet om steigers vraagt. Vraag je het niet, dan krijgt elk niveau ongeveer hetzelfde, alleen korter of langer.

Feedback is niet één werkvorm — het zijn drie, met elk een eigen functie. Formatieve feedback gebeurt tíjdens het leren: korte, gerichte aanwijzingen die de leerling helpen verder. 'Je conclusie noemt geen bron — voeg er één toe' is formatief. Summatieve feedback komt erna: de score en de toelichting die het cijfer onderbouwt. 'Je essay haalt een 7 omdat de argumentatie sterk is maar de bronkritiek ontbreekt' is summatief. Peer feedback is leerlingen-onder-elkaar: anders georganiseerd, ander effect (leerling leert door beoordelen). Alle drie hebben hun moment, geen vervangt de andere.

AI komt het sterkst tot zijn recht bij twee taken: (1) een eerste rubric maken die jij dan finaal bijstelt, en (2) een eerste formatieve feedback per leerling formuleren die jij in 30 seconden persoonlijk maakt. Niet bij summatieve eindbeoordeling — daar moet jouw oordeel doorslaggevend zijn. Niet bij peer feedback — daar moeten leerlingen zelf het werk doen. Goeie taakverdeling: AI levert de structuur, jij doet het oordeel en de persoonlijke laag.`,
      mentalModel: {
        naam: "AI als rubric-skelet, niet als rubric-beslisser",
        beschrijving: `Stel je een rubric voor in twee lagen: een skelet (criteria, beschrijvingen, niveaus) en een vlees (welke beschrijving past bij dit specifieke leerlingwerk). AI is sterk in het skelet — herhalend werk, vaste structuur, te kalibreren op vakdoelen. AI is zwak in het vlees — daar zit jouw oordeel, jouw kennis van wat de klas wel/niet heeft gehad, jouw vakdiepte. Eenvoudige werkverdeling: AI bouwt het skelet, jij plaatst leerlingen erin.`,
      },
      kernbegrippen: [
        {
          term: "Steiger",
          uitleg: "Gedoseerde ondersteuning die de leerling tijdelijk krijgt om het leerdoel te bereiken. Wordt minder naarmate niveau hoger. Vier veelgebruikte: woordhulp, structuur, voorbeeld, contextverbreding.",
        },
        {
          term: "Gelijk leerdoel · variabele route",
          uitleg: "Differentiatie deelt het leerdoel niet, maar de weg ernaartoe. Drie verschillende doelen = drie verschillende klassen.",
        },
        {
          term: "Formatieve feedback",
          uitleg: "Korte, gerichte feedback tijdens het leerproces, gericht op verbetering binnen dezelfde opdracht. Niet beoordelend, wel sturend.",
        },
        {
          term: "Summatieve feedback",
          uitleg: "Beoordeling na voltooiing, met cijfer of niveau-uitspraak. Onderbouwt het oordeel zodat de leerling zijn cijfer begrijpt.",
        },
        {
          term: "Peer feedback",
          uitleg: "Leerlingen geven elkaar feedback aan de hand van een door jou opgesteld kader. Het leereffect zit bij de gever, niet alleen bij de ontvanger.",
        },
        {
          term: "Rubric",
          uitleg: "Beoordelingsmatrix met criteria (wat) en niveaus (hoe goed). Maakt verschil tussen onvoldoende, voldoende en goed expliciet. Bruikbaar voor zowel formatief als summatief.",
        },
      ],
    },

    learningGoals: [
      "Je ontwerpt één opdracht op drie niveaus met expliciete steigers per niveau — gelijk leerdoel, verschillende routes.",
      "Je onderscheidt formatieve, summatieve en peer feedback in functie en moment, en kiest per opdracht welke wanneer.",
      "Je bouwt een eigen rubric met AI als skelet en eigen oordeel als vlees, getest op één bestaand leerlingwerk.",
      "Je herkent het hoofdrisico (differentiatie via lengte in plaats van steigers) en hebt drie prompts die dat actief voorkomen.",
    ],

    scenario: {
      title: "Klaslokaalscenario",
      context:
        "Je hebt morgen 45 minuten les aan 3 vmbo-tl. Klas van 28 leerlingen: vier op 2F-leesniveau, twintig op 3F, vier werken op havo-niveau. Onderwerp van de les: verzuring (natuur- en scheikunde). Je wilt één opdracht waarbij alle leerlingen iets vergelijkbaars opdoen, ondanks de spreiding. Voorbereidingstijd: 25 minuten.",
      role: "Docent NaSk · 3 vmbo-tl",
      tools: "ChatGPT (school-account) · Google Docs · eigen rubric-archief",
    },

    steps: [
      {
        title: "Niveau-analyse — wie zit waar?",
        body: "Voor je iets ontwerpt, breng de spreiding in kaart. Niet leerling-voor-leerling — groepjes. Hoeveel zitten er ongeveer op basisniveau? Gemiddeld? Uitdagend? Welk type ondersteuning hebben de basis-leerlingen vaak nodig? Wat gaat de uitdagende groep snel vervelen? Tien minuten op papier. AI hoeft hier nog niet aan te pas.",
        time: "10 min",
        voorbeeld:
          "Klas 3 vmbo-tl: basis = 4 leerlingen, vaak met woordenschat-uitdaging en zwakke leesvaardigheid; gemiddeld = 20 leerlingen, redelijk zelfstandig maar moeite met abstractie; uitdagend = 4 leerlingen die zich vervelen bij herhaling, willen verdieping.",
        workspace: {
          field: "niveau-analyse",
          label: "Mijn klas in drie groepen",
          shortLabel: "Niveau-analyse",
          hint: "Drie groepen — aantal, kenmerken, type ondersteuning per groep",
          placeholder:
            "Basis: ... leerlingen — kenmerken: ... — ondersteuning vaak: ...\nGemiddeld: ... leerlingen — kenmerken: ... — werkt op: ...\nUitdagend: ... leerlingen — kenmerken: ... — willen vaak: ...",
          rows: 6,
        },
      },
      {
        title: "Drie niveaus, gelijk leerdoel, verschillende routes",
        body: "Formuleer eerst het gedeelde leerdoel — dat zelfde voor alle drie niveaus. Daarna drie versies van de opdracht: basis (woordhulp + voorgestructureerd), gemiddeld (open vragen + één voorbeeldzin), uitdagend (bronvergelijking + open einde). Vraag AI om de drie versies expliciet te onderscheiden in welke steiger zit waar.",
        time: "15 min",
        voorbeeld:
          "Leerdoel: 'De leerling kan in eigen woorden uitleggen hoe verzuring ontstaat en noemt minstens twee gevolgen.' Basis: leerling krijgt korte tekst + woordenlijst (zuur, base, pH) + drie voorgestructureerde vragen. Gemiddeld: leerling krijgt zelfde tekst + één voorbeeldzin + twee open vragen. Uitdagend: leerling krijgt tekst + tweede bron met andere invalshoek + opdracht om de bronnen te vergelijken.",
        workspace: {
          field: "drie-niveaus",
          label: "Mijn drie niveaus mét expliciete steigers",
          shortLabel: "Drie niveaus",
          hint: "Eén leerdoel · per niveau benoem de specifieke steigers (woordhulp/structuur/voorbeeld/contextverbreding)",
          placeholder:
            "Gedeeld leerdoel: ...\n\nBasis (steigers: woordhulp + voorgestructureerd): ...\n\nGemiddeld (steigers: voorbeeldzin + open einde): ...\n\nUitdagend (steigers: bronvergelijking + open vraag): ...",
          rows: 9,
        },
      },
      {
        title: "Drie soorten feedback — wat doe je wanneer?",
        body: "Plan vooraf welke feedback je wanneer geeft. Formatief tíjdens de les (rondloopperiode, korte aanwijzingen). Summatief erna (kort, in week erop). Peer als slot (volgende les of week). Per soort bepaal je: wat is mijn rol, wat is AI's rol, wat is de leerling's rol?",
        time: "12 min",
        voorbeeld:
          "Formatief (in les): docent loopt rond met steekwoordenlijst (zuur, base, pH) en geeft korte gerichte hint waar leerling vastloopt. AI niet betrokken — context is te direct. Summatief (na les): docent gebruikt rubric, AI levert eerste versie van persoonlijke toelichting, docent maakt persoonlijk. Peer (volgende les): leerlingen geven elkaar feedback met een door docent opgestelde vraagstellenlijst — AI niet betrokken.",
        workspace: {
          field: "drie-feedback",
          label: "Mijn drie soorten feedback voor deze opdracht",
          shortLabel: "Drie feedback",
          hint: "Per soort: wanneer · jouw rol · AI's rol · leerling's rol",
          placeholder:
            "Formatief — wanneer: ... — mijn rol: ... — AI's rol: ... — leerling's rol: ...\n\nSummatief — wanneer: ... — mijn rol: ... — AI's rol: ... — leerling's rol: ...\n\nPeer — wanneer: ... — mijn rol: ... — AI's rol: ... — leerling's rol: ...",
          rows: 9,
        },
      },
      {
        title: "Bouw een eigen rubric — skelet met AI, vlees door jou",
        body: "Vraag AI om een rubric-skelet met drie criteria (inhoud, structuur, taalgebruik) op drie niveaus (onvoldoende, voldoende, goed). Eis voorbeeldzinnen per niveau uit een fictieve leerlingtekst. Vervang die zinnen door echte zinnen uit eigen oude leerlingwerk. Test je rubric: kun je drie eigen oude leerlingteksten consistent scoren?",
        time: "12 min",
        workspace: {
          field: "rubric",
          label: "Mijn rubric (na bewerking)",
          shortLabel: "Rubric",
          hint: "Drie criteria · drie niveaus · voorbeeldzin per cel · getest op eigen leerlingwerk",
          placeholder:
            "Criterium 1: ...\n  Onvoldoende: ... (voorbeeldzin: ...)\n  Voldoende: ... (voorbeeldzin: ...)\n  Goed: ... (voorbeeldzin: ...)\n\nCriterium 2: ...\n...",
          rows: 10,
        },
      },
      {
        title: "Test op bestaand leerlingwerk — kalibreren",
        body: "Pak twee tot drie eigen oude leerlingteksten uit eerdere jaren. Score met je rubric. Komen jouw scores binnen één niveau-verschil overeen met je oorspronkelijke beoordeling? Zo niet, herschrijf de cel waar je twijfelde. Een rubric die je zelf niet consistent kunt invullen, is niet bruikbaar voor jouw klas.",
        time: "8 min",
        workspace: {
          field: "rubric-test",
          label: "Wat heb ik aangepast na testen?",
          shortLabel: "Kalibratie",
          hint: "Welke cel was niet bruikbaar? Wat heb je veranderd?",
          placeholder:
            "Cel die niet werkte: ...\nReden: ...\nWat ik veranderde: ...",
          rows: 5,
        },
      },
      {
        title: "Schrijf één formatieve feedback-prompt voor herhalend werk",
        body: "Maak een templateprompt waarmee je voor 28 leerlingteksten in 45 minuten formatieve feedback kunt genereren (en in 15 minuten persoonlijk maken). De prompt eist één positief punt, één concrete verbetering, en één doorvertaalvraag. Geen cijfer — formatief is geen oordeel.",
        time: "8 min",
        workspace: {
          field: "feedback-prompt",
          label: "Mijn formatieve feedback-template",
          shortLabel: "Feedback-template",
          hint: "Vier ingrediënten · output per leerlingtekst: één positief, één verbetering, één doorvertaalvraag · geen cijfer",
          placeholder:
            "Je bent ... [rol] ... [context] ... Schrijf voor de volgende leerlingtekst ... [taak] ... [vorm]",
          rows: 6,
        },
      },
    ],

    workedExamples: [
      {
        title: "Drie-niveau opdracht mét expliciete steigers",
        prompt:
          "Je bent docent NaSk voor 3 vmbo-tl. Klas van 28, met spreiding 2F-3F en vier leerlingen op havo-niveau. Schrijf één opdracht over verzuring op drie niveaus (basis, gemiddeld, uitdagend) met gelijk leerdoel: 'De leerling kan in eigen woorden uitleggen hoe verzuring ontstaat en noemt twee gevolgen.' Steigers per niveau: basis = woordhulp (zuur, base, pH) + drie voorgestructureerde vragen; gemiddeld = één voorbeeldzin + twee open vragen; uitdagend = tweede tegenbron + bronvergelijking. Houd taalniveau B1, max 100 woorden per niveau-opdracht.",
        voorbeeldOutput: `Gedeeld leerdoel: De leerling kan in eigen woorden uitleggen hoe verzuring ontstaat en noemt minstens twee gevolgen.

Basis — Lees de tekst. Woordhulp: zuur (lage pH), base (hoge pH), pH (maat voor zuurgraad).
1) Wat is verzuring in eigen woorden?
2) Noem twee oorzaken uit de tekst.
3) Noem twee gevolgen voor de natuur.

Gemiddeld — Lees de tekst. Voorbeeldzin: "Verzuring ontstaat wanneer..."
a) Beschrijf in drie zinnen hoe verzuring ontstaat.
b) Noem twee gevolgen en leg per gevolg uit waarom dit schadelijk is.

Uitdagend — Lees beide bronnen. Bron 1 (verstrekt). Bron 2 (extra): een artikel over kalkaanvulling als tegenmaatregel.
- Vergelijk wat beide bronnen zeggen over de oplossingsrichting.
- Welk argument vind jij sterker? Onderbouw met één voorbeeld uit elke bron.`,
        commentaar:
          "Sterk omdat de drie versies écht andere routes zijn — niet alleen kortere of langere tekst. Sterk omdat het leerdoel gelijk blijft (geen drie verschillende doelen) en de steigers per niveau expliciet zijn. Verbeterpunt: voor de uitdagende versie is de tegenbron cruciaal — als die niet beschikbaar is, valt het niveau terug op 'meer woorden over hetzelfde'. Plan dus de tweede bron vóór je AI vraagt om de uitdagende versie. Test: laat een 2F-leerling de basis lezen — komen er onbekende woorden in voor die niet in de woordhulp staan? Voeg toe.",
        tryItYourself: {
          field: "we-drie-niveaus",
          label: "Schrijf de drie-niveau-prompt voor jouw eigen opdracht",
          shortLabel: "Eigen drie niveaus",
          hint: "Eén leerdoel · drie versies · expliciete steigers per niveau (geen lengteverschil)",
          example:
            "Je bent ... [rol] ... [context] ... Schrijf één opdracht op drie niveaus met gelijk leerdoel ... Steigers per niveau: basis = ..., gemiddeld = ..., uitdagend = ... [vorm]",
        },
      },
      {
        title: "Formatieve feedback voor klassikaal werk",
        prompt:
          "Je bent docent NaSk voor 3 vmbo-tl. Hieronder een leerlingtekst over verzuring (anoniem). Schrijf één positief punt (concreet), één verbetering (concreet, op vakniveau), en één doorvertaalvraag die de leerling zelf kan beantwoorden. Geen cijfer. Max 60 woorden totaal. Toon vriendelijk-direct, geen pluimpjes.",
        voorbeeldOutput: `Positief: je legt het verschil tussen zuur en base helder uit met het pH-voorbeeld. Verbetering: de gevolgen zijn nu nog algemeen ('het is slecht voor de natuur') — koppel ze aan één concreet effect, bijvoorbeeld op vissen of op planten. Doorvertaalvraag: wat zou er gebeuren in een meer dat één pH-punt zakt — welke organismen worden het eerst geraakt?`,
        commentaar:
          "Sterk omdat het positieve punt concreet is (niet 'goed gedaan!'). Sterk omdat de verbetering een didactische lijn opent in plaats van een correctie. Sterk omdat de doorvertaalvraag de leerling zelf laat denken. Verbeterpunt: AI levert een eerste versie, maar de leerling-naam ontbreekt — voor warmte aan begin ('Hoi [naam]') maak je het persoonlijk in 5 seconden. Belangrijk: gebruik geen cijfer in formatief — anders sluip je in summatief en verliest de leerling de prikkel om bij te stellen.",
        tryItYourself: {
          field: "we-formatief",
          label: "Schrijf jouw formatieve feedback-prompt",
          shortLabel: "Eigen formatief",
          hint: "Vier ingrediënten · output: één positief, één verbetering, één doorvertaalvraag · geen cijfer · max 60 woorden",
          example:
            "Je bent ... Schrijf voor onderstaand leerlingwerk: één positief punt, één verbetering, één doorvertaalvraag. Geen cijfer. Toon: ...",
        },
      },
      {
        title: "Peer feedback — leerlingen onder elkaar",
        prompt:
          "Je bent docent NaSk 3 vmbo-tl. Schrijf een feedbackformulier dat leerlingen onderling gebruiken na de verzuringsopdracht. Drie vragen die de gever moet beantwoorden, en één concrete suggestie die niet betuttelend klinkt. Max 80 woorden. Toon: gelijkwaardig.",
        voorbeeldOutput: `Lees het werk van je klasgenoot en beantwoord:

1) Wat is in twee zinnen sterk uitgelegd? (geef voorbeeld)
2) Waar twijfel je of het klopt of duidelijk is? (geef voorbeeld)
3) Welke vraag zou je stellen om de tekst beter te maken?

Eén suggestie van jou: noem één concrete verandering die je zou doen — niet 'beter', maar wat precies.`,
        commentaar:
          "Sterk omdat de vragen de gever dwingen tot lezen-met-aandacht (leereffect zit bij de gever). Sterk omdat 'gelijkwaardig' toon expliciet is — voorkomt nakijktoon van een tienjarige. Verbeterpunt: vraag 3 ('welke vraag zou je stellen') is voor sommige leerlingen abstract. Voeg eventueel een voorbeeld toe: 'bijvoorbeeld: hoe weet je dat? of waarom is dit erger dan...?'. Belangrijk: peer feedback werkt alleen als jij de uitkomst niet beoordeelt — anders wordt het stiekem summatief.",
        tryItYourself: {
          field: "we-peer",
          label: "Schrijf jouw peer-feedbackformulier",
          shortLabel: "Eigen peer-formulier",
          hint: "Drie vragen voor gever · één concrete suggestie · gelijkwaardige toon · max 80 woorden",
          example:
            "Schrijf een feedbackformulier voor leerlingen na opdracht over [onderwerp]. Drie vragen + één suggestie. Toon: gelijkwaardig.",
        },
      },
      {
        title: "Rubric-skelet bouwen",
        prompt:
          "Je bent docent NaSk 3 vmbo-tl. Maak een rubric met drie criteria (inhoud, structuur, taalgebruik) op drie niveaus (onvoldoende, voldoende, goed) voor de verzuringsopdracht. Per cel: één concrete beschrijving (max 15 woorden) plus één voorbeeldzin uit een fictieve leerlingtekst die op dat niveau zit. Max 250 woorden totaal.",
        voorbeeldOutput: `Inhoud
  Onvoldoende — Geen oorzaak of gevolg genoemd. Voorbeeldzin: "Verzuring is slecht."
  Voldoende — Eén oorzaak en één gevolg, in eigen woorden. Voorbeeldzin: "Verzuring komt door uitstoot en is slecht voor vissen."
  Goed — Twee oorzaken en twee gevolgen, met logische koppeling. Voorbeeldzin: "Door zwaveldioxide-uitstoot daalt de pH, waardoor vissen sterven en bomen verzwakken."

Structuur
  Onvoldoende — Losse zinnen zonder verband. Voorbeeldzin: "pH is laag. Vissen dood. Slecht."
  Voldoende — Inleiding-uitleg-conclusie herkenbaar. Voorbeeldzin: "Eerst leg ik uit... Daarna... Tot slot..."
  Goed — Lopende redenering met expliciete verbinding tussen oorzaak en gevolg. Voorbeeldzin: "Omdat zuur regen in meren komt, daalt de pH; dit verklaart waarom..."

Taalgebruik
  Onvoldoende — Geen vaktaal. Voorbeeldzin: "Het zuur ding maakt het stuk."
  Voldoende — Vaktaal correct (pH, zuur). Voorbeeldzin: "De pH daalt en het water wordt zuur."
  Goed — Vaktaal vloeiend, juist gebruikt in context. Voorbeeldzin: "De daling van de pH-waarde versnelt de calciumuitscheiding bij..."`,
        commentaar:
          "Sterk omdat elke cel een voorbeeldzin heeft — dat maakt de rubric kalibreerbaar. Sterk omdat 'goed' niet 'lang' is maar 'koppelt oorzaak aan gevolg'. Verbeterpunt: de fictieve voorbeeldzinnen klinken realistisch maar zijn niet echt uit jouw klas. Vervang ze door echte zinnen uit eigen oude leerlingwerk (anoniem). Test: kun je je vorige jaargang met deze rubric consistent scoren? Zo niet, herschrijf de cellen waar je twijfelt.",
        tryItYourself: {
          field: "we-rubric",
          label: "Schrijf de rubric-prompt voor jouw opdracht",
          shortLabel: "Eigen rubric",
          hint: "Drie criteria · drie niveaus · voorbeeldzinnen per cel · max 250 woorden",
          example:
            "Maak een rubric voor [opdracht] op [niveau]. Drie criteria · drie niveaus · per cel: beschrijving + voorbeeldzin.",
        },
      },
    ],

    vakvariaties: [
      {
        vak: "Nederlands · vo",
        body: "Drie niveaus werken sterk voor schrijfopdrachten. Basis: woordhulp + zinsbouwhulp; gemiddeld: voorbeeldalinea; uitdagend: stijlmodel verplicht. Peer feedback bijzonder waardevol — leerlingen leren door beoordelen van klasgenoten.",
      },
      {
        vak: "Wiskunde · vo/mbo",
        body: "Steigers: basis = voorbeeldsom mét uitwerking; gemiddeld = voorbeeldsom zonder uitwerking; uitdagend = open probleem met meerdere oplossingsroutes. Formatieve feedback werkt snel — 'check stap 3 nog eens'.",
      },
      {
        vak: "Zorg · mbo niveau 3-4",
        body: "Casuïstiek-opdrachten op drie niveaus: basis = vaste structuur ABCDE; gemiddeld = open casus met aandachtspunten; uitdagend = casus zonder veiligheidsnet. Rubric verplicht voor objectieve beoordeling (BPV-context).",
      },
      {
        vak: "ICT · mbo/hbo",
        body: "Drie niveaus: basis = code mét boilerplate; gemiddeld = pseudocode + eigen implementatie; uitdagend = van eis tot oplossing zonder voorbeeld. Peer review werkt sterk — code-reviews zijn beroepsstandaard.",
      },
      {
        vak: "Moderne vreemde talen · vo/hbo",
        body: "Differentieer op taalniveau (A2/B1/B2) plus op cultureel-pragmatische diepte. Voor uitdagend: voeg een culturele variatie toe. Formatieve feedback in doeltaal versterkt input.",
      },
      {
        vak: "Burgerschap · vo/mbo",
        body: "Drie niveaus differentieert vooral in bronkritiek: basis = één bron; gemiddeld = twee bronnen met vergelijking; uitdagend = drie bronnen + eigen standpunt met tegenargument. Rubric moet 'oordeel met onderbouwing' kunnen meten.",
      },
    ],

    valkuilen: [
      {
        titel: "Differentiatie via lengte in plaats van steigers",
        watGebeurtEr:
          "AI levert drie versies die alleen verschillen in hoeveel woorden of vragen. De basis-leerling krijgt een korte versie zonder woordhulp. De uitdagende krijgt een lange versie zonder verdieping. Differentiatie is cosmetisch.",
        fix: "Eis altijd expliciet welke steiger per niveau zit: woordhulp, structuur, voorbeeld, contextverbreding. Vraag AI om ze te benoemen in het antwoord.",
      },
      {
        titel: "Drie verschillende leerdoelen in plaats van één",
        watGebeurtEr:
          "Bij verleiding tot 'iets passends voor iedereen' krijgt elke groep een ander doel. Resultaat: drie klassen in één lokaal, geen gedeelde lijn, geen reflectiemoment dat voor iedereen werkt.",
        fix: "Houd het leerdoel gelijk. Differentieer alleen route en steigers. Aan het einde komt iedereen samen op één gedeelde reflectievraag.",
      },
      {
        titel: "Formatief en summatief vermengen",
        watGebeurtEr:
          "Je geeft formatieve feedback mét een cijfer erbij. Leerling leest het cijfer, slaat de feedback over, en is gemotiveerd door de score in plaats van de verbetering. Het formatieve effect verdampt.",
        fix: "Formatief: geen cijfer. Summatief: cijfer met onderbouwing. Plan ze in verschillende momenten — niet op één blaadje.",
      },
      {
        titel: "Rubric zonder voorbeeldzinnen",
        watGebeurtEr:
          "Je rubric heeft abstracte beschrijvingen ('goede argumentatie', 'consistente structuur') zonder voorbeelden. Twee collega's vullen dezelfde tekst verschillend in. Leerlingen weten niet wat 'goed' eruitziet.",
        fix: "Per cel één voorbeeldzin uit echt of fictief leerlingwerk. Maakt de rubric kalibreerbaar en bruikbaar voor de leerling als leermateriaal.",
      },
      {
        titel: "Peer feedback zonder structuur",
        watGebeurtEr:
          "Leerlingen krijgen 'geef elkaar feedback' zonder kader. Resultaat: alleen complimenten, of juist sloop, of stilte. Het beoogde leereffect blijft uit.",
        fix: "Geef een formulier met drie concrete vragen. Train de eerste keer kort hoe het werkt — daarna kan het zelfstandig.",
      },
    ],

    geoefendSpoor: {
      eyebrow: "Voor de geoefende docent",
      titel: "Ontwerp een sectie-rubric voor één gedeeld leerdoel",
      beschrijving:
        "Heb je drie eigen rubrics die werken? De volgende stap is collegiaal. Spreek met je vaksectie één gedeeld leerdoel af (bijvoorbeeld 'argumentatie in een betoog') en ontwerp samen één rubric. Twee docenten beoordelen onafhankelijk dezelfde drie leerlingteksten met de rubric. Vergelijk de scores. Waar de scores meer dan één niveau afwijken, herschrijf de cel. Resultaat: een rubric die je sectie inter-rater betrouwbaar kan invullen — wat een belangrijke audit-eis is voor toetsdossiers (in mbo en hbo) en voor onderwijs-inspectie checks (in vo). Investering: 90 minuten + 60 minuten kalibreren. Opbrengst: één rubric die je hele sectie kan gebruiken en die voor leerlingen consistent voelt.",
      opdracht:
        "Lever vóór volgende periode één gedeelde sectie-rubric op, met scores van twee docenten op drie testleerlingteksten en bewijs van inter-rater overeenstemming.",
    },

    eindcriteria: [
      {
        criterium: "Drie niveaus met steigers",
        onder: "Drie versies die alleen in lengte verschillen.",
        op: "Drie versies met expliciete steigers per niveau (woordhulp, structuur, voorbeeld, contextverbreding).",
        boven: "+ Variatie in werkvorm én evaluatiemoment per niveau — niet alleen in opdracht.",
      },
      {
        criterium: "Gelijk leerdoel",
        onder: "Drie verschillende leerdoelen voor drie niveaus.",
        op: "Eén gedeeld leerdoel, drie verschillende routes.",
        boven: "+ Gedeelde reflectievraag aan het einde waar alle drie niveaus iets aan hebben.",
      },
      {
        criterium: "Drie soorten feedback",
        onder: "Eén feedback-moment voor alles.",
        op: "Formatief tijdens, summatief erna, peer als slot — elk met eigen rol.",
        boven: "+ Per soort jouw rol, AI's rol en leerling-rol gedefinieerd.",
      },
      {
        criterium: "Rubric",
        onder: "Geen rubric of abstracte rubric zonder voorbeelden.",
        op: "Rubric met drie criteria, drie niveaus, voorbeeldzinnen per cel.",
        boven: "+ Getest op twee tot drie eigen oude leerlingteksten, gekalibreerd.",
      },
      {
        criterium: "Feedback-template",
        onder: "Elke leerlingtekst krijgt ad-hoc feedback.",
        op: "Templateprompt klaar voor herhalend werk — 28 teksten in <60 min.",
        boven: "+ Template getest op één klas, bijgesteld op echte uitkomsten.",
      },
    ],

    reflection: [
      "Toen je de drie niveaus uitwerkte: welke leerlinggroep dreigde in jouw eerste versie alleen 'minder' te krijgen in plaats van 'andere' ondersteuning? Wat zegt dat over impliciete aannames die je hebt over differentiëren?",
      "Op welk moment in deze les voelde je weerstand tegen de scheiding formatief-summatief? Wat doe je nu in je beoordelingsroutine dat de twee vermengt — en wat zou er veranderen als je ze losweekt?",
      "Welk deel van het feedback-werk wil je beslist níet aan AI overlaten, ook al kan AI het sneller? Wat is daar nu eigenlijk de afweging? Hoe weet je over een maand of die grens nog klopt?",
    ],

    checklist: [
      "Niveau-analyse: klas in drie groepen met kenmerken benoemd",
      "Drie-niveau-opdracht met gelijk leerdoel en expliciete steigers",
      "Drie soorten feedback gepland met eigen rol per soort",
      "Rubric met voorbeeldzinnen per cel ontworpen",
      "Rubric getest op twee tot drie eigen leerlingteksten",
      "Formatieve feedback-template klaar voor 28 leerlingen in <60 min",
      "AVG-check: anonieme voorbeelden, school-account gebruikt",
      "Drie soorten feedback ingepland in lesweek-agenda",
    ],

    verderLezen: [
      {
        titel: "Education Policy Outlook 2024 — Reshaping Teaching",
        bron: "OECD",
        jaar: 2024,
        link: "https://www.oecd.org/en/publications/reimagining-teaching-in-an-accelerating-world_d0edfe8c-en/full-report/component-6.html",
        waarom: "Internationaal overzicht over differentiatie en formatieve feedback als kerncompetenties.",
      },
      {
        titel: "AI-GO! Raamwerk voor AI-geletterdheid",
        bron: "Npuls",
        jaar: 2025,
        link: "https://npuls.nl/kennisbank/ai-go-een-raamwerk-voor-ai-geletterdheid-in-het-onderwijs",
        waarom: "Vier dimensies (kennis, vaardigheden, attitudes, ethisch bewustzijn) — bruikbaar als check voor je rubric.",
      },
      {
        titel: "Definitieve conceptkerndoelen digitale geletterdheid",
        bron: "SLO",
        jaar: 2025,
        link: "https://open.overheid.nl/documenten/d353545a-402e-4ec0-b2af-4b565d36a948/file",
        waarom: "Vo-kerndoelen voor digitale geletterdheid — koppel je opdrachten aan kerndoelen waar mogelijk.",
      },
      {
        titel: "Effective Teacher Professional Development",
        bron: "Darling-Hammond e.a. · Learning Policy Institute",
        jaar: 2017,
        link: "https://learningpolicyinstitute.org/sites/default/files/product-files/Effective_Teacher_Professional_Development_REPORT.pdf",
        waarom: "Zeven kenmerken — onderbouwt waarom collegiale rubric-ontwikkeling (geoefend spoor) effectieve PD is.",
      },
    ],

    nextLesson: "toetsing-integriteit",
  },

  /* ──────────────────────────────────────────────────────────────────────── */
  /*  LES 1.6 — AI, toetsing en academische integriteit · Casusbespreking     */
  /*                                                                          */
  /*  Opbouw:                                                                 */
  /*  - Drie casussen:                                                        */
  /*    A: student levert AI-essay in                                         */
  /*    B: docent gebruikt AI voor quizvragen en doet alsof 'eigen werk'      */
  /*    C: hbo-toetscommissie discussieert over AI-toetspraktijk              */
  /*  - Legal callout: Npuls Visie op Toetsing + Handreiking                  */
  /*  - Action plan: drie aanpassingen aan eigen toetsplan                    */
  /* ──────────────────────────────────────────────────────────────────────── */

  "toetsing-integriteit": {
    format: "casusbespreking",

    summary:
      "AI-tools zijn niet weg te denken uit de toetsing-realiteit. Het verbod is geen werkbare lijn meer; de open-AI-vlakte ook niet. In deze les werk je drie herkenbare casussen door — een student die een essay liet schrijven, een docent die quizvragen liet maken en als eigen aanbiedt, en een hbo-toetscommissie die structureel beleid zoekt — en pas je de Npuls-handreiking toe op drie concrete aanpassingen in je eigen toetsplan.",

    learningGoals: [
      "Je benoemt drie typische integriteitsrisico's in jouw toetsing en kunt per risico zeggen of het de student, de docent of de organisatie betreft.",
      "Je herkent het verschil tussen 'AI-verboden', 'AI-toegestaan met verantwoording' en 'AI-vereist' als toetsregimes en kunt per regime een werkende controlemaatregel benoemen.",
      "Je past de Npuls Handreiking 'AI-bewuste toetspraktijk' toe op één eigen toets en formuleert drie concrete aanpassingen.",
      "Je formuleert één afspraak die je in de eerstvolgende vergadering van vaksectie of toetscommissie kunt inbrengen.",
    ],

    scenario: {
      title: "Werksituatie",
      context:
        "Op een gemiddelde docentvergadering komt toetsing-met-AI bij elke agendapunt terug. Een collega weet zeker dat een essay AI-geschreven is maar kan het niet bewijzen. Een opleidingsmanager wil 'helder beleid' maar wijst alle voorgestelde regels af. Een toetscommissie wacht op landelijke regie die niet komt. Niemand neemt de eerste stap omdat niemand zeker weet wat 'goed' is. Deze les pakt drie van die situaties beet.",
      role: "Docent · vo, mbo of hbo · willekeurig vak",
      tools: "Casusbeschrijvingen · Npuls Handreiking · eigen toetsplan",
    },

    casusbesprekingTitle: "Drie casussen, drie posities, één eigen aanpassing.",
    casusbesprekingIntro:
      "Per casus zie je drie perspectieven en twee collega-uitspraken. Eerst formuleer je je positie. Daarna kies je welke aanpassing in je eigen toetsplan je deze week doorvoert.",

    cases: [
      {
        title: "Casus A — De student met het te goede essay",
        context:
          "Een mbo niveau 4-student van een communicatie-opleiding levert een betoog in over de toekomst van mediagebruik. Het is duidelijk beter dan haar voorgaande werk: heldere structuur, vaktaal die ze in de les nooit heeft gebruikt, geen typische fouten die je bij haar gewend bent. Geen plagiaat-melding van Turnitin. Ze ontkent AI te hebben gebruikt als je het vraagt. Je hebt geen bewijs en ook geen detectietool die je vertrouwt.",
        perspectives: [
          {
            role: "De student",
            view:
              "Ik heb hard gewerkt. Ik heb wel ChatGPT gebruikt om mijn ideeën te ordenen, maar de inhoud is van mij. Anderen doen dat ook. Waarom word ik nu apart genomen?",
          },
          {
            role: "De docent",
            view:
              "Ik kan het niet bewijzen maar ik wéét het. Als ik dit door laat gaan, beoordeel ik niet haar werk maar AI's werk. Tegelijk: zonder bewijs is een aantijging riskant en oneerlijk.",
          },
          {
            role: "De examencommissie",
            view:
              "Verdenkingsbeleid moet uniform zijn. Zonder hard bewijs (proces-bewijs, mondelinge verantwoording, eerdere onregelmatigheden) kunnen we geen sanctie opleggen. De toetsvorm moet voorkomen dat dit ontstaat.",
          },
        ],
        statements: [
          {
            author: "Collega 1",
            quote:
              "Ik geef sowieso geen schrijfopdrachten meer thuis. Alles op school, pen en papier. Probleem opgelost.",
          },
          {
            author: "Collega 2",
            quote:
              "We moeten leren leven met AI in het werk. Als de eindkwaliteit goed is, doet het er niet toe wie of wat het schreef.",
          },
        ],
      },
      {
        title: "Casus B — De docent met de AI-quizvragen",
        context:
          "Een vo-docent maakt voor een 3 vmbo-tl-eindtoets vijftig MC-vragen met behulp van ChatGPT, kijkt ze één keer door, en biedt ze aan in de digitale toetsbank van de school als 'door collega ontwikkeld'. Een paar weken later blijken twee vragen feitelijk onjuist; drie afleiders bevatten een denkfout die niet in de stof is behandeld. De vragen zijn al door zes klassen heen.",
        perspectives: [
          {
            role: "De docent zelf",
            view:
              "Ik kijk al jaren rommelig toetsen na. AI heeft me een uur gescheeld; eindelijk klaar voor het weekend. Ik heb het wel doorgelezen — er staat geen voorgeleidende fout in.",
          },
          {
            role: "De vakgenoot",
            view:
              "Dit is mijn vak. Twee fouten in vijftig vragen klinkt klein — als ze het beoordelingsmoment betreffen, kan een leerling onterecht een onvoldoende scoren. Wat is de plek van AI-gegenereerde vragen in onze toetsdatabase eigenlijk?",
          },
          {
            role: "De toetscommissie",
            view:
              "Toetsvragen vragen vakdidactische check vóór gebruik. Tweede paar ogen is geen overhead — het is kwaliteitsborging. Wij hebben geen procedure voor AI-gegenereerde vragen. Dat is een gat.",
          },
        ],
        statements: [
          {
            author: "Collega 1",
            quote:
              "Iedereen doet het. Het is geen integriteitsschending zolang je het zelf hebt nagekeken.",
          },
          {
            author: "Collega 2",
            quote:
              "Als jij vragen aanbiedt als 'eigen werk', moet ze ook van jou zijn. AI-generatie zonder vermelding is een schending — voor leerlingen en voor docenten dezelfde norm.",
          },
        ],
      },
      {
        title: "Casus C — De hbo-toetscommissie op zoek naar regie",
        context:
          "Een hbo-opleiding informatica heeft 80 docenten en 1200 studenten. De toetscommissie zoekt al een jaar naar 'AI-bewust beleid' maar elke voorgelegde regel sneuvelt: te streng (docenten klagen over werkdruk), te open (examencommissie vreest klachten), of te detaillistisch (niemand leest het). De studieleider stelt voor: stop met regels, ga over op principes plus richtlijnen per opleidingsfase. Drie opleidingsmanagers zijn voor, twee tegen.",
        perspectives: [
          {
            role: "De opleidingsmanager voor",
            view:
              "Principes leven mee met technologie; regels niet. Vier principes (transparant, verantwoordbaar, vakinhoudelijk verdedigbaar, eerlijk over werkdruk) volstaan. Per opleidingsfase concrete richtlijnen.",
          },
          {
            role: "De opleidingsmanager tegen",
            view:
              "Principes worden interpreteerbaar — twee docenten lezen anders. Studenten vragen om houvast, examencommissie wil rechtsgelijkheid. Regels werken minder esthetisch maar verdedigbaarder.",
          },
          {
            role: "De toetscoördinator",
            view:
              "Het Npuls-rapport 'Visie op Toetsing en Examinering' kiest expliciet voor principes plus toetsdialoog per programma. Als je hbo-breed mee wilt met de praktijk, is dat het meest werkbare model. Maar het vraagt investering in collegiaal kalibreren.",
          },
        ],
        statements: [
          {
            author: "Docent 1",
            quote:
              "Geef me regels, dan kan ik me beroepen. Principes voelen als 'jouw probleem' en ik heb al geen tijd.",
          },
          {
            author: "Docent 2",
            quote:
              "Ik ga liever in gesprek met collega's over wat verdedigbaar is dan dat ik regelboeken doorploeg die over vijf maanden achterhaald zijn.",
          },
        ],
      },
    ],

    legalCallout: {
      source: "Npuls · Visie op Toetsing en Examinering. Naar AI-bewuste toetspraktijken",
      title: "Wat de handreiking zegt",
      body: `De Npuls-visie kiest expliciet voor *"toetspraktijken die AI niet ontkennen maar adresseren"* — geen blanket-verbod, geen onbeperkte toegang. Vier ankerpunten:

(1) *Transparantie*: studenten weten vooraf welk AI-gebruik is toegestaan, welke verantwoording vereist is, en welke gevolgen niet-naleving heeft.

(2) *Vakinhoudelijk verdedigbaar*: de toets meet wat hij beoogt te meten, óók in een AI-omgeving. Een schrijfopdracht waar AI 90% kan doen, meet geen schrijfvaardigheid meer.

(3) *Verantwoording bij gebruik*: zowel student als docent verantwoorden hun AI-inzet. 'AI heeft het geschreven' is geen verantwoording; 'AI heeft de structuur voorgesteld, ik heb argumentatie en bronnen toegevoegd' is verantwoording.

(4) *Toetsdialoog per programma*: collegiale kalibratie op opleidingsniveau, niet één centraal regelboek. Per opleidingsfase concretere richtlijnen.

De toetsing-handreiking (Npuls, *Toetsing en examinering in het tijdperk van AI — Handreiking 1*) werkt deze ankerpunten uit in vier scenario's: AI-verboden, AI-toegestaan met verantwoording, AI-vereist met reflectie, en mengvormen.`,
      link: "https://www.npuls.nl/_assets/cdcb37e6-11f7-468f-962b-06fe599a8a23/Visie-op-toetsing-en-examinering-onderbouwing-Npuls.pdf",
    },

    actionPlan: {
      source: "Npuls · Toetsing en examinering in het tijdperk van AI — toegepast",
      title: "Drie aanpassingen aan jouw toetsplan — voer ze deze week door",
      steps: [
        {
          title: "Kies je toetsregime expliciet per opdracht",
          body: "Loop je toetsplan langs en label per toets: AI-verboden, AI-toegestaan-met-verantwoording, of AI-vereist. Vermijd 'niet besproken' — dat is impliciet AI-toegestaan zonder kader.",
          workspace: {
            field: "tp-regime",
            label: "Mijn toetsen geclassificeerd",
            placeholder:
              "Toets 1 (...): regime = ...\nToets 2 (...): regime = ...\nToets 3 (...): regime = ...",
            rows: 6,
          },
        },
        {
          title: "Voeg een verantwoordingsvraag toe waar regime 'toegestaan-met-verantwoording' is",
          body: "Standaardvraag aan student bij inlevering: 'Welk AI-gebruik heb je toegepast, en welk deel van het werk is van jou? Max 80 woorden.' Niet beoordeeld op zichzelf — wel voorwaarde voor toelating tot beoordeling.",
          workspace: {
            field: "tp-verantwoording",
            label: "Mijn standaardvraag aan student",
            placeholder:
              "Verantwoordingsvraag (max 80 woorden):\n...\n\nWanneer ingeleverd: ...\n\nKoppeling met beoordeling: ...",
            rows: 6,
          },
        },
        {
          title: "Voeg een mondelinge verantwoording toe waar het risico het hoogst is",
          body: "Bij minimaal één hooggewicht-toets per periode (tentamen, eindopdracht, examen): mondelinge verantwoording van 5-10 minuten waarbij de student haar werk uitlegt. Risico van AI-overname wordt door deze vorm zwaar verminderd.",
          workspace: {
            field: "tp-mondeling",
            label: "Welke toets krijgt mondelinge verantwoording",
            placeholder:
              "Toets: ...\nDuur mondeling: ... min\nDrie vragen die je standaard stelt:\n1) ...\n2) ...\n3) ...",
            rows: 7,
          },
        },
        {
          title: "Plan een toetsdialoog met je vaksectie of toetscommissie",
          body: "Het Npuls-rapport benadrukt collegiale kalibratie: de afspraken landen pas als je vaksectie er gemeenschappelijk achter staat. Plan binnen 4 weken één bijeenkomst van 90 minuten met casuïstiek uit jullie eigen toetsen.",
          workspace: {
            field: "tp-dialoog",
            label: "Mijn toetsdialoog-plan",
            placeholder:
              "Datum: ...\nWie zit erbij: ...\nDrie casussen uit eigen toetsen die we bespreken:\n1) ...\n2) ...\n3) ...",
            rows: 7,
          },
        },
      ],
    },

    reflection: [
      "Bij welke van de drie casussen herkende jij jezelf het meest — in de rol van uitvoerder, beoordelaar, of getuige? Wat zegt jouw positie iets over je rol in je team?",
      "Welke uitspraak van een collega ga jij niet meer onweersproken laten? Formuleer hoe je gaat reageren zonder de collega af te kraken — een zin die je morgen in de pauze kunt zeggen.",
      "Welke aanpassing in je toetsplan voelt onveilig om door te voeren, en wat zegt dat over wat je collega's nodig hebben om je te steunen?",
    ],

    checklist: [
      "Drie casussen besproken (mondeling met collega of in tweetal)",
      "Stellingname geformuleerd bij minimaal twee collega-uitspraken",
      "Eigen toetsplan langs Npuls-vier-ankerpunten gelegd",
      "Drie concrete aanpassingen in eigen toetsplan ingevoerd of gepland",
      "Toetsdialoog met vaksectie of toetscommissie gepland (datum + casussen)",
      "Verantwoordingsvraag voor studenten op papier gezet",
      "Mondelinge verantwoording voor ten minste één hooggewicht-toets ingepland",
      "Eén afspraak voorbereid voor eerstvolgende sectievergadering",
    ],

    verderLezen: [
      {
        titel: "Visie op Toetsing en Examinering. Naar AI-bewuste toetspraktijken",
        bron: "Npuls",
        jaar: 2024,
        link: "https://www.npuls.nl/_assets/cdcb37e6-11f7-468f-962b-06fe599a8a23/Visie-op-toetsing-en-examinering-onderbouwing-Npuls.pdf",
        waarom: "De Nederlandse referentievisie voor toetsing met AI in mbo, hbo en wo.",
      },
      {
        titel: "AI-GO! Raamwerk voor AI-geletterdheid",
        bron: "Npuls",
        jaar: 2025,
        link: "https://npuls.nl/kennisbank/ai-go-een-raamwerk-voor-ai-geletterdheid-in-het-onderwijs",
        waarom: "Vier dimensies (kennis, vaardigheden, attitudes, ethisch bewustzijn) — koppel je toetsregime aan ethisch bewustzijn.",
      },
      {
        titel: "Werken aan AI-geletterdheid op school",
        bron: "Kennisnet",
        jaar: 2025,
        link: "https://www.kennisnet.nl/artificial-intelligence/werken-aan-ai-geletterdheid-op-school/",
        waarom: "Voor po/vo de praktische handreiking met vier stappen — ook bruikbaar voor toetsing-vraagstukken.",
      },
      {
        titel: "EU AI Act, artikel 4 — AI Literacy",
        bron: "Europese Commissie",
        jaar: 2024,
        link: "https://artificialintelligenceact.eu/article/4/",
        waarom: "Wettelijke verplichting: jouw school moet aantoonbaar zorgen voor AI-geletterdheid. Toetsing-met-AI is daar onderdeel van.",
      },
    ],

    nextLesson: "praktijkopdracht-1",
  },

  /* ──────────────────────────────────────────────────────────────────────── */
  /*  LES 1.8 — Praktijkopdracht: ontwerp een AI-ondersteunde lesactiviteit   */
  /*           Praktijkopdracht                                                */
  /*                                                                          */
  /*  Drie keuzepaden:                                                        */
  /*  A: gedifferentieerde lesopdracht voor één klas                          */
  /*  B: set quizvragen met afleiders                                         */
  /*  C: feedback-rubric met AI-ondersteuning                                 */
  /*                                                                          */
  /*  Per pad: deliverables · peer review · transferhaak (5 dagen)            */
  /* ──────────────────────────────────────────────────────────────────────── */

  "praktijkopdracht-1": {
    format: "praktijkopdracht",

    summary:
      "De Module 01 sluit niet af met een eindtoets maar met een productie. Je kiest één van drie paden — een gedifferentieerde lesopdracht, een quiz met onderbouwde afleiders, of een feedback-rubric — en lever je werk binnen vijf werkdagen in. Een collega geeft je feedback aan de hand van drie vragen. Daarna voer je het echt uit in je klas. Geen knip-en-plak-AI; een product waarop je vakgenoten kunnen bouwen.",

    learningGoals: [
      "Je past de werkmethoden uit les 1.3, 1.4 en 1.5 toe op één concrete lesvoorbereiding in jouw eigen praktijk.",
      "Je levert binnen vijf werkdagen een product op (lesopdracht, quiz, of rubric) dat je vakgenoten kunnen reviewen en gebruiken.",
      "Je ontvangt collega-feedback en verwerkt deze in een gereviseerde versie — niet de eerste versie wordt afgeleverd.",
      "Je voert het product daadwerkelijk uit in je klas en reflecteert in 200 woorden op wat werkte en wat niet.",
    ],

    scenario: {
      title: "Werksituatie",
      context:
        "Je hebt Module 01 doorlopen en de werkmethoden in oefenmodus toegepast. Nu is het tijd voor echt werk: één lesvoorbereiding van begin tot eind met AI als gereedschap, ingebed in jouw eigen weekplanning. Geen oefenversie — een product dat je collega leest, in je klas terechtkomt en in de week erop reflectie oplevert.",
      role: "Docent · vo, mbo of hbo · eigen vak, eigen klas, eigen week",
      tools: "AI-tool naar keuze (school-account) · eigen lesmateriaal · één collega als reviewer",
    },

    praktijkTitle: "Kies één pad. Lever in vijf werkdagen. Voer uit in jouw klas.",
    praktijkIntro:
      "Drie paden, één doel: een AI-ondersteund product dat in jouw klas werkt. Per pad andere deliverables; voor alle paden gelijke peer review en transferhaak.",

    paths: [
      {
        key: "a",
        title: "Pad A — Gedifferentieerde lesopdracht",
        body: "Ontwerp één opdracht op drie niveaus (basis, gemiddeld, uitdagend) met gelijk leerdoel en expliciete steigers per niveau. Voor één van je eigen klassen, één concrete les van komende week. Niet een algemeen voorbeeld — een opdracht die jij maandag op de tafel legt. Sluit aan op les 1.5 (differentiatie). Gebruik AI voor de eerste versie en je eigen oordeel voor de bijwerking.",
      },
      {
        key: "b",
        title: "Pad B — Quiz met onderbouwde afleiders",
        body: "Maak een formatieve toets van 8 MC-vragen voor één van je eigen klassen, één concreet onderwerp uit komende week. Per vraag drie afleiders waarvan elke afleider één concrete misconceptie raakt die jij in jouw klas hebt gezien. Per afleider één zin uitleg waarom die fout verleidelijk is. Sluit aan op les 1.4 (lesvoorbereiding, deel quizvragen). Gebruik AI voor het skelet, jouw lespraktijk voor de afleiders.",
      },
      {
        key: "c",
        title: "Pad C — Feedback-rubric met voorbeeldzinnen",
        body: "Bouw een rubric met drie criteria op drie niveaus voor een opdracht uit jouw weekplanning. Per cel één voorbeeldzin uit (geanonimiseerd) eigen leerlingwerk. Test de rubric op twee oude leerlingteksten — kalibreer waar je twijfelt. Sluit aan op les 1.5 (rubrics) en les 1.4 (rubric als onderdeel van lesvoorbereiding). AI levert het skelet, jij de voorbeeldzinnen.",
      },
    ],

    deliverables: [
      "Gekozen pad (A, B, of C) met motivatie van max 50 woorden",
      "Eerste versie van het product (lesopdracht, quiz, of rubric), gegenereerd met AI",
      "Tweede versie na eigen bewerking — met track-changes-document of zichtbare wijzigingen",
      "Schermafdruk of korte beschrijving van de prompt(s) die je hebt gebruikt",
      "Korte verantwoording (max 150 woorden): wat heeft AI gedaan, wat heb jij gedaan, waar zit jouw vakdiepte",
      "Collega-feedback verwerkt in derde versie",
      "Reflectie van 200 woorden over de uitvoering in jouw klas",
    ],

    peerReview: {
      title: "Collega-feedback in drie vragen",
      intro:
        "Vraag één vakgenoot om binnen drie werkdagen je tweede versie te reviewen aan de hand van drie vragen. Geen rubric, geen oordeel — concrete observaties.",
      questions: [
        "Welk deel van dit product zou je in jouw eigen klas zonder grote aanpassing kunnen gebruiken — en waaraan zie je dat?",
        "Welke aanname over leerlingen / studenten / klas zit er impliciet in dit product? Is die aanname realistisch?",
        "Waar zou een vakgenoot uit een andere school dit product nog willen aanpassen vóór gebruik? Eén of twee concrete suggesties.",
      ],
    },

    reflection: [
      "Bij welke deliverable koos je een AI-suggestie boven je eigen eerste idee, en wat won of verloor je daarmee?",
      "Welk deel van je product is door collega-feedback aantoonbaar beter geworden, en hoe weet je dat het écht beter is (niet alleen anders)?",
      "Wat heeft je uitvoering in de klas verteld over de werkmethoden uit Module 01 die nu nog niet in oefenmodus zaten? Welke twee dingen ga je in Module 02 anders aanpakken op basis hiervan?",
    ],

    checklist: [
      "Pad gekozen en gemotiveerd",
      "Eerste versie met AI gegenereerd en bewaard",
      "Tweede versie na eigen bewerking, met zichtbare wijzigingen",
      "Verantwoording (max 150 woorden) geschreven",
      "Collega-feedback ontvangen op de drie review-vragen",
      "Derde versie na verwerking van peer feedback",
      "Product uitgevoerd in eigen klas binnen 5 werkdagen",
      "Reflectie van 200 woorden afgesloten en geüpload",
    ],

    verderLezen: [
      {
        titel: "Effective Teacher Professional Development",
        bron: "Darling-Hammond e.a. · Learning Policy Institute",
        jaar: 2017,
        link: "https://learningpolicyinstitute.org/sites/default/files/product-files/Effective_Teacher_Professional_Development_REPORT.pdf",
        waarom: "Onderbouwt waarom transfer-haak binnen vijf dagen + collega-feedback essentieel is voor blijvende verandering.",
      },
      {
        titel: "Werken aan AI-geletterdheid op school",
        bron: "Kennisnet",
        jaar: 2025,
        link: "https://www.kennisnet.nl/artificial-intelligence/werken-aan-ai-geletterdheid-op-school/",
        waarom: "Vier dimensies om je product langs te leggen: technisch, didactisch, ethisch, juridisch.",
      },
      {
        titel: "AI-GO! Raamwerk voor AI-geletterdheid",
        bron: "Npuls",
        jaar: 2025,
        link: "https://npuls.nl/kennisbank/ai-go-een-raamwerk-voor-ai-geletterdheid-in-het-onderwijs",
        waarom: "Voor mbo/hbo de wetenschappelijk onderbouwde checklist om je product te toetsen.",
      },
      {
        titel: "AI Competency Framework for Teachers",
        bron: "UNESCO",
        jaar: 2024,
        link: "https://www.unesco.org/en/articles/ai-competency-framework-teachers",
        waarom: "Dit praktijkproduct hoort bij 'Create'-niveau (UNESCO progressie). Goede start voor je portfolio.",
      },
    ],

    nextLesson: "ai-geletterdheid",
  },
};
