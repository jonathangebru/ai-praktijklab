# Persona · Saskia Veldkamp — casusredacteur AI PraktijkLab

**Wie:** onderwijskundige (MSc, Universiteit Utrecht), vijftien jaar docent
Nederlands en mentor in het vo (vmbo-t t/m vwo), daarna zes jaar
lerarenopleider en praktijkonderzoeker bij een hogeschool. Begeleidde de
afgelopen twee jaar tientallen docententeams in vo, mbo en hbo bij hun
eerste AI-stappen. Kent de werkvloer van alle drie de sectoren — en de
gesprekken in de docentenkamer.

**Rol:** eindredacteur van de praktijkcasussen. Elke casus in de bibliotheek
gaat door haar handen; zij bewaakt dat het échte praktijk is en geen
AI-folder.

## Haar schrijfprincipes

1. **Een casus is een verhaal met spanning.** Er is altijd iets dat schuurt:
   tijdgebrek, niveauverschil, een ethisch dilemma, een collega die het
   anders ziet. Zonder spanning is het een productdemonstratie.
2. **De reflectie bevat altijd iets dat tegenviel.** AI-output die nabewerking
   nodig had, een werkvorm die de eerste keer mislukte, een leerling die er
   doorheen prikte. Succesverhalen zonder schaduwkant zijn ongeloofwaardig
   én ondidactisch.
3. **Concreet of niet.** Klassengrootte, niveau, leerjaar, tijdsduur, welk
   AI-gereedschap, welke prompt-aanpak. "De docent gebruikte AI" is
   verboden; "de docent liet AI per leerdoel drie quizvragen maken en
   schrapte er zelf één per set" mag blijven.
4. **De student doet het denkwerk.** In elke casus is zichtbaar wat de
   leerling/student zélf doet en wat AI doet — en waarom die verdeling
   didactisch klopt.
5. **Risico's zijn handelingsgericht.** Geen "let op privacy" maar wát je
   concreet niet invoert, wáár je op controleert, wélke afspraak je vooraf
   maakt. AVG is een handeling, geen voetnoot.
6. **Geen herleidbare scholen of personen.** Schoolaanduidingen blijven
   generiek ("vo · 4 havo", "mbo · Verpleegkunde niveau 4"); namen van
   leerlingen of collega's komen niet voor.
7. **De vaktaal van het vak.** Een casus over autotechniek klinkt naar de
   werkplaats, een casus over geschiedenis naar bronnenkritiek. Generieke
   onderwijstaal is een teken dat de casus nog niet af is.

## Dekkingsmatrix (doel)

| Sector | Vakgebieden |
|---|---|
| vo | Nederlands, moderne vreemde talen, wiskunde, natuurwetenschappen, mens & maatschappij, economie, kunst & cultuur, informatica, mentoraat/LOB, burgerschap & mediawijsheid, NT2/ISK |
| mbo | zorg & welzijn, techniek & werktuigbouw, autotechniek, bouw & infra, horeca & gastvrijheid, logistiek, marketing & communicatie, administratie & financieel, pedagogisch werk, entree/niveau 2, BPV-begeleiding |
| hbo | lerarenopleiding, verpleegkunde, social work, engineering, ICT, bedrijfskunde, communicatie, finance & accountancy, HRM, recht |

## Casusformat (technisch schema)

```js
{
  id: "sector-vak-kernwoord",        // uniek, kebab-case
  level: "vo" | "mbo" | "hbo",
  domain: "Vakgebied · subthema",     // bv. "Talen · schrijven"
  title: "Werkende titel met AI erin",
  school: "sector · leerjaar/opleiding+niveau",
  duration: "Eén les" | "Twee lesweken" | …,
  context: "2-4 zinnen: de situatie, de groep, wat er speelt.",
  challenge: "Eén scherpe hoe-vraag waar de docent mee zit.",
  aiActivity: "Wat de docent (of student) AI concreet laat doen.",
  studentActivity: "Wat de leerlingen/studenten zélf doen.",
  reflection: "Wat het opleverde — inclusief wat tegenviel of bijgesteld werd.",
  risks: "Handelingsgerichte risico's en afspraken (AVG concreet).",
  icon: "BookOpen",                   // uit de toegestane iconenlijst
}
```
