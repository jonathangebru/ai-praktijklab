# Toegangsmodel & entitlement — ontwerp

_Concept ter goedkeuring. Bepaalt hoe betaling, gratis proeverij en toegang
samenhangen. Zodra akkoord bouw ik dit (en daarna Mollie eromheen)._

## Uitgangssituatie (nu)
- Login = Azure AD via SWA EasyAuth. **Iedere ingelogde gebruiker krijgt
  automatisch `docent`-toegang tot álles.** Er is dus geen paywall.
- Voortgang/werk staat in Table Storage; rollen (`beheerder`, `manager`) via
  SWA-rolinvites.

## 1. Gratis vs. betaald (de grens)
**Gratis na inloggen (de "kennismaking"):**
- Intake & niveau-inschatting
- **Module 01 · Basiscursus AI** volledig — inclusief de AI-coach op die module
- Promptbibliotheek bekijken (niet de volledige export)

**Betaald (entitlement vereist):**
- Module 02 t/m 08 + alle toekomstige modules
- Leerpaden-voltooiing + badges/certificaten (Open Badge 3.0)
- Coach op betaalde modules
- Managementdashboard (team/school)

_Rationale: één hele module gratis laat de docent de kwaliteit écht ervaren →
hoogste conversie, sluit aan op de bestaande "gratis kennismaking"-belofte.
Eenvoudiger en minder frustrerend dan een tijdslimiet-trial die "verloopt"._

## 2. Datamodel (Table Storage)
Tabel **`entitlements`** — één rij per persoon:
| veld | voorbeeld |
|---|---|
| partitionKey | `ent` |
| rowKey | `<userId>` (uit SWA-principal) |
| email | `docent@school.nl` |
| tier | `docent` \| `team` \| `school` \| `bestuur` |
| status | `active` \| `trial` \| `expired` |
| validUntil | `2027-06-28` |
| source | `mollie` \| `invoice` \| `manual` \| `domain` |
| ref | Mollie-id / factuurnr |

Tabel **`domain_entitlements`** — voor school/bestuur in één keer:
| domain | tier | validUntil | source |
|---|---|---|---|
| `school.nl` | `school` | `2027-06-28` | `invoice` |

→ Elke docent met een `@school.nl`-adres krijgt automatisch toegang zolang het
domein-entitlement geldig is. Geen losse invites nodig.

## 3. Toegangscheck (waar de poort zit)
- **Server is de bron van waarheid.** `/api/entitlement` (GET) leest de
  SWA-principal en bepaalt: persoonlijk entitlement → anders domein-entitlement
  (op e-maildomein) → anders `none`. Retourneert `{ tier, status, validUntil }`.
- **Frontend:** `useEntitlement()`-hook + `<RequireEntitlement>`-wrapper rond
  modules 02–08, leerpaden en certificaat-acties. Niet-entitled → nette
  "Schakel volledige toegang in"-kaart (naar checkout of offerte).
- **Belangrijk:** de coach- en badge-functies checken óók entitlement
  server-side voor betaalde modules — anders omzeilt iemand de UI via de API.

## 4. Identiteit
- **Nu:** AAD/EasyAuth blijft (laagste wrijving, werkt al). Een docent zonder
  schoolaccount kan met een persoonlijk Microsoft-account inloggen; entitlement
  hangt aan `userId` + e-mail.
- **Later:** SURFconext voor scholen (toegangsdrempel #1 uit het onderzoek) past
  naadloos op deze laag via domein-entitlement.

## 5. Aankoop- & herroepingsflow (individuele docent)
1. "Koop volledige toegang (€249/jaar)" → checkout (Mollie, apart te bouwen).
2. Verplicht vinkje: **"Lever mij direct toegang; ik zie af van mijn
   14-dagen herroepingsrecht."** (Wettelijk nodig om bij een digitale dienst
   meteen te mogen leveren — zie AV-concept.)
3. Mollie-betaling → webhook → entitlement `active`, `validUntil = +1 jaar`.
4. Geen vinkje = geen directe levering (onpraktisch) → daarom standaard vereist.

## 6. School / bestuur
- Loopt via de **offerteflow (Fase 31, al live)**. Na factuur zet de beheerder
  een **domein-entitlement** (alle docenten van het schooldomein) of een
  invite-lijst. `source: invoice`.

## 7. Bouwlijst (zodra akkoord)
1. `entitlements` + `domain_entitlements` tabellen + `/api/entitlement`.
2. `useEntitlement()` + `<RequireEntitlement>` rond betaalde modules/paden.
3. Server-side entitlement-check in `coach` + `badge` voor betaalde modules.
4. "Volledige toegang"-kaart op gegate modules + op de landing.
5. Beheerder-UI: domein-entitlement zetten voor factuurklanten.
6. _(Apart, na Mollie-account/key:)_ `/api/checkout` + `/api/mollie-webhook`.

## Open beslissingen voor jou
- **Gratis grens:** Module 01 volledig gratis — akkoord? (alternatief: alleen
  les 1.1–1.2).
- **Trial:** willen we naast de gratis module óók een 14-dagen-vol-trial? Mijn
  advies: nee, houd het bij de gratis module.
- **Btw in de prijs:** hangt af van de CRKBO-uitkomst (zie research) — bepaalt of
  €249 incl./excl. btw is bij de checkout.
