# Deploy naar Azure Static Web Apps

Snelste pad: GitHub → Azure SWA. ~10–15 min van push tot live URL.
Free tier dekt deze prototype-fase ruimschoots.

---

## Wat al klaar staat lokaal

- ✅ `npm run build` werkt — output in `dist/` (HTML 1.2 kB · CSS 34 kB · JS 821 kB)
- ✅ `staticwebapp.config.json` — SPA-fallback routing + veilige headers
- ✅ Git-repo geïnitialiseerd, eerste commit `eaaf9d5`
- ✅ Toegankelijkheid Lighthouse-score 100/100

---

## Stappen

### 1. GitHub repo aanmaken + pushen (~2 min)

```bash
# In de browser: ga naar https://github.com/new
# Maak repo aan: bv. "ai-praktijklab" (private of public, geen verschil voor SWA)
# Doe GEEN README/license toevoegen — leeg laten

# Lokaal: koppel + push
cd ~/Desktop/AI_teacher_demo
git remote add origin https://github.com/<jouw-username>/ai-praktijklab.git
git push -u origin main
```

### 2. Azure Static Web App aanmaken (~5 min)

1. Open [portal.azure.com](https://portal.azure.com) → log in
2. Zoekbalk: **"Static Web Apps"** → klik op **"+ Create"**
3. **Basics**:
   - Subscription: jouw sub
   - Resource group: maak nieuw, bv. `rg-praktijklab`
   - Name: `ai-praktijklab`
   - Plan type: **Free**
   - Region (source): **West Europe**
4. **Deployment**:
   - Source: **GitHub**
   - Klik **Sign in with GitHub** + autoriseer
   - Organization: jouw account
   - Repository: `ai-praktijklab`
   - Branch: `main`
5. **Build Details**:
   - Build Presets: **React**
   - App location: `/`
   - Api location: *(leeg laten)*
   - Output location: `dist`
6. Klik **Review + Create** → **Create**

Azure maakt nu een GitHub Actions workflow aan in je repo en draait de eerste build.

### 3. Wachten op eerste build (~3–5 min)

- In Azure portal: open je SWA → **Overview** → URL staat boven (ziet eruit als
  `https://thankful-meadow-abc123.4.azurestaticapps.net`)
- In GitHub: tab **Actions** → eerste workflow loopt. Bij groen vinkje is je site live.

### 4. URL testen

- Open de SWA-URL in je browser
- Klik door: dashboard → modules → lessen → promptbibliotheek
- Check mobile (DevTools device mode of telefoon): drawer-nav werkt
- Stuur de URL naar Aventus

---

## Optioneel — Custom domein (~10 min extra)

Wil je een eigen domein zoals `praktijklab.nl`:

1. In Azure portal → je SWA → **Custom domains** → **+ Add**
2. Volg de DNS-stappen (CNAME of TXT record bij je DNS-provider)
3. Azure regelt automatisch een gratis Let's Encrypt SSL-certificaat

---

## Wat het kost

**Free tier** — onbeperkt voor:
- 100 GB bandwidth/maand
- 0.5 GB storage
- Custom domain + SSL
- Staging environments (preview per PR)
- Geo-replicated via Microsoft's CDN

Pas bij ~10.000 actieve docenten zou je naar Standard tier (~€10/mnd) moeten.

---

## Toekomstige updates

Elke `git push` naar `main` triggert automatisch een nieuwe deploy. Geen
handmatige stappen meer. Pull requests krijgen een eigen staging-URL voor
review voor je merget.

---

## Troubleshooting

**Build faalt in GitHub Actions met "Cannot find module ../../audit/..."**
→ Map `audit/` is bij de eerste commit meegekomen. Niet verwijderen — de
   batch-content-bestanden worden geïmporteerd door `src/data/lessonDetails.js`.

**404 op `/lessen/wat-is-ai` na deploy**
→ `staticwebapp.config.json` ontbreekt. Check dat 'ie in de root staat en
   in de commit zit. Workflow herzendt automatisch op volgende push.

**Wil je sneller publishen zonder GitHub?**
→ Installeer SWA CLI: `npm i -g @azure/static-web-apps-cli`
   Haal een deployment-token op uit Azure portal (SWA → Manage deployment token)
   Run: `swa deploy ./dist --deployment-token <token> --env production`
   Werkt voor één-malige drop, maar verliest auto-deploy bij toekomstige changes.
