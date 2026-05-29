export const caseFilters = [
  { id: "all", label: "Alle casussen" },
  { id: "vo", label: "vo" },
  { id: "mbo", label: "mbo" },
  { id: "hbo", label: "hbo" },
  { id: "ict", label: "ICT & programmeren" },
  { id: "zorg", label: "Zorg & welzijn" },
  { id: "economie", label: "Economie & marketing" },
];

export const cases = [
  {
    id: "vo-leesopdracht",
    level: "vo",
    domain: "Talen · lezen",
    title: "Leesopdrachten differentiëren met AI",
    school: "vo · 3 vmbo-t",
    duration: "Twee lesweken",
    context:
      "Een 3 vmbo-t klas leest een non-fictie tekst over voedselverspilling. De spreiding in leesniveau is groot: drie leerlingen lezen op 2F, de meeste op 3F. De docent wil dat alle leerlingen aansluiten bij hetzelfde leerdoel, maar wel met passende ondersteuning.",
    challenge:
      "Hoe maak je in beperkte tijd materiaal dat dezelfde tekst op verschillende niveaus toegankelijk maakt, zonder dat het 'jongere versie / oudere versie' wordt?",
    aiActivity:
      "De docent gebruikt AI om de brontekst te herschrijven naar A2, B1 en B2, met behoud van feiten en kernboodschap. AI maakt per niveau drie vragen die op de juiste denkstap aansluiten en een woordenlijst voor het A2-niveau.",
    studentActivity:
      "Leerlingen kiezen zelf hun startniveau, lezen, beantwoorden de vragen en wisselen in tweetallen (gemengd niveau) uit. Eén leerling bespreekt klassikaal wat het verschil was tussen de versies.",
    reflection:
      "Niveau bleek voor leerlingen minder zwaar dan verwacht. De docent zag dat AI bij A2 té sterk vereenvoudigt; nabewerking op stijl bleef nodig. De klassikale nabespreking maakte zichtbaar dat 'eenvoudig' ≠ 'minder slim'.",
    risks:
      "AVG: nooit leerlinggegevens delen. Vermijd betuttelend taalgebruik op A2 — geef dat expliciet als instructie. Controleer of de gemaakte versies dezelfde feiten bevatten.",
    icon: "BookOpen",
  },
  {
    id: "mbo-beroepsopdracht",
    level: "mbo",
    domain: "Techniek & beroepsleren",
    title: "AI bij beroepsgerichte praktijkopdrachten",
    school: "mbo · Werktuigbouw, niveau 4",
    duration: "Eén projectweek",
    context:
      "Studenten werktuigbouw maken een werkplan voor de productie van een onderdeel. De praktijk eist zelfstandigheid; de begeleider wil dat AI als coach functioneert, niet als invuller.",
    challenge:
      "Hoe zorg je dat AI helpt bij denken (planning, materiaalkeuze, risicoanalyse) zonder dat de student gewoon een werkplan laat genereren en inlevert?",
    aiActivity:
      "Studenten gebruiken AI in drie expliciete momenten: (1) brainstormen over materiaalopties met voor- en nadelen, (2) controleren van risicoanalyse op missende factoren, (3) feedback op de helderheid van hun procesbeschrijving.",
    studentActivity:
      "Student houdt een log bij van AI-gebruik: vraag, antwoord, eigen beslissing. De definitieve keuzes worden onderbouwd met eigen overweging. Mondelinge verantwoording bij de begeleider.",
    reflection:
      "Het AI-logboek werd het beoordelingshart: niet wat eruit kwam, maar welke beslissingen de student nam telde. Begeleiders zagen het denken beter dan voorheen.",
    risks:
      "Studenten kunnen blindelings AI-suggesties overnemen voor materialen die in de praktijk niet beschikbaar zijn. Zorg dat de praktijkbegeleider akkoord geeft op materiaal en methode.",
    icon: "Wrench",
  },
  {
    id: "hbo-projectonderzoek",
    level: "hbo",
    domain: "Projectonderwijs & onderzoek",
    title: "AI bij projectonderwijs en onderzoek",
    school: "hbo · Bedrijfskunde, jaar 2",
    duration: "Tien projectweken",
    context:
      "Een interdisciplinair projectteam onderzoekt klantloyaliteit voor een mkb-bedrijf. AI is vrij beschikbaar; de docent wil dat studenten leren wanneer AI versnelt en wanneer het juist het denken plat maakt.",
    challenge:
      "Hoe ontwerp je een projectopdracht waarin AI welkom is, maar waarin het denken van het team alsnog beoordeelbaar blijft?",
    aiActivity:
      "Team gebruikt AI voor literatuurverkenning, vragenlijst-ontwerp, eerste data-analyse en tussentijdse reviews van eigen schrijven. Bronnen worden door studenten zelf gecontroleerd en aangevuld.",
    studentActivity:
      "Aan het eind van iedere sprint levert het team een korte 'AI-bijsluiter' bij hun deliverable: waar is AI gebruikt, welke keuzes maakten zij anders, welke risico's zijn gewogen.",
    reflection:
      "De AI-bijsluiter veranderde gesprekken in begeleiding. Studenten werden eerlijker over hun proces en zagen scherper welke conclusies onderbouwd waren en welke 'gevoelsoordelen' onder een AI-jasje zaten.",
    risks:
      "Risico van schijnonderbouwing: AI levert bronnen die niet bestaan of niet zeggen wat ze lijken te zeggen. Verplicht origineel-controle van elk citaat.",
    icon: "Telescope",
  },
  {
    id: "ict-debugging",
    level: "hbo",
    domain: "ICT & programmeren",
    title: "AI inzetten bij debugging en code-review",
    school: "hbo · Software Engineering, jaar 1",
    duration: "Doorlopend in twee modules",
    context:
      "Eerstejaars studenten leren Java. Velen gebruiken AI al vóór ze het concept begrijpen. De docent wil dat AI een hulpmiddel wordt na het denken, niet ervoor.",
    challenge:
      "Hoe stop je dat studenten code copy-pasten zonder begrip, terwijl je AI niet uit hun werkplek kunt of wilt weren?",
    aiActivity:
      "AI wordt expliciet ingezet als 'debug-coach': studenten vragen géén oplossing, maar drie zelfreflectievragen waarmee ze de oorzaak van een fout zelf kunnen vinden.",
    studentActivity:
      "Bij elke ingeleverde code-oefening hoort een korte schermopname (max. 3 min) waarin de student regel-voor-regel uitlegt wat de code doet. Bij twijfel volgt mondelinge controle.",
    reflection:
      "Het ritueel 'eerst zelf, dan AI als coach' werd snel onderdeel van de werkstijl. De korte uitlegvideo bleek het meest waardevol — niet omdat docenten het altijd terugkijken, maar omdat studenten weten dat het bestaat.",
    risks:
      "Schermopnames moeten AVG-bewust worden opgeslagen. Houd het maximaal kort en verplicht geen camera-beeld. Niet elke student vindt opnemen prettig — bied alternatieven.",
    icon: "Bug",
  },
  {
    id: "zorg-casusbespreking",
    level: "mbo",
    domain: "Zorg & welzijn",
    title: "AI gebruiken voor casusbespreking en reflectie",
    school: "mbo · Verpleegkunde, niveau 4",
    duration: "Eén lesweek",
    context:
      "Studenten verpleegkunde bespreken een ethisch beladen casus over informed consent bij een patiënt met dementie. Reflectie kost veel lestijd; gesprek blijft soms aan de oppervlakte.",
    challenge:
      "Hoe gebruik je AI om reflectie te verdiepen zonder dat het de menselijkheid van de bespreking vervangt?",
    aiActivity:
      "Voorafgaand aan de les genereert de docent met AI vier perspectieven op de casus (patiënt, familie, arts, verpleegkundige). Tijdens de les krijgt elke subgroep één perspectief en bereidt vragen voor.",
    studentActivity:
      "Studenten bespreken in subgroepen, wisselen perspectief en formuleren zelf één scherpe ethische vraag. Reflectie eindigt zonder afgesloten antwoord — bewust.",
    reflection:
      "Studenten bleven langer in 'ongemakkelijk denken'. De perspectieven van AI hielpen niet omdat ze het antwoord gaven, maar omdat ze houvast boden in de structuur.",
    risks:
      "Zorg dat de casus geen herleidbare elementen bevat van echte patiëntinformatie. Bespreek vooraf met studenten dat AI-perspectieven geen autoriteit hebben — slechts denkgereedschap.",
    icon: "Stethoscope",
  },
  {
    id: "economie-marketing",
    level: "hbo",
    domain: "Economie & marketing",
    title: "AI bij campagne-analyse en contentcreatie",
    school: "hbo · Commerciële Economie, jaar 3",
    duration: "Drie weken",
    context:
      "Studenten analyseren een bestaande marketingcampagne en bouwen een alternatief voorstel. De praktijk werkt allang met AI — studenten leren hier kritisch denken over inhoud én proces.",
    challenge:
      "Hoe ontwerp je beoordeling die het strategisch denken meet, niet de snelheid waarmee AI content maakt?",
    aiActivity:
      "AI ondersteunt brand-voice analyse, persona-ontwerp, kopij-iteratie en eerste data-visualisatie. Strategisch denken (welke campagnehoek, welke doelgroep, welke KPI's) blijft mensenwerk.",
    studentActivity:
      "Studenten leveren zowel het eindvoorstel als een 'beslissingsdagboek' op: per strategische keuze welke alternatieven zijn gewogen en waarom deze keuze is gemaakt.",
    reflection:
      "AI-ondersteunde content was van hoog niveau, maar pas in het beslissingsdagboek werd zichtbaar of een student écht strategisch dacht. Niet de campagne, maar het dagboek werd het cijfer.",
    risks:
      "AI maakt het verleidelijk om 'mooi' op te leveren zonder dat de strategische denkkeuzes goed onderbouwd zijn. Verplicht het dagboek expliciet, niet als bijlage.",
    icon: "BarChart3",
  },
];
