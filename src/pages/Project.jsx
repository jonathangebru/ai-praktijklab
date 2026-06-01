import {
  Send,
  Compass,
  Sprout,
  Users,
  Repeat,
  Rocket,
  Circle,
  Asterisk,
  GraduationCap,
  Building2,
  BookMarked,
  ArrowRight,
  MessageSquare,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { Section, Button, Tag, Footnote, Divider } from "../components/ui";

/* ──────────────────────────────────────────────────────────────────────────
 * Project & roadmap — waarheidsgetrouwe versie
 *
 * Wat dit platform op dit moment is:
 *  · Een werkende demo, online gezet als onderdeel van een aanbod richting
 *    Aventus voor de VABOK-opdracht.
 *  · Solo gebouwd in een paar dagen om te laten zien dat we begrijpen wát
 *    er gevraagd wordt en hoe we het didactisch én technisch zouden bouwen.
 *  · Geen active VABOK-partnerschap. Geen lopende pilotgroepen. Geen
 *    feitelijke docent-aantallen achter inschrijvingen.
 *
 * Wat het zou kunnen worden — bij gunning — staat hieronder als
 * voorgestelde aanpak.
 * ──────────────────────────────────────────────────────────────────────── */

const beoogdePartners = [
  {
    name: "Veluwse Onderwijsgroep",
    level: "vo",
    location: "Apeldoorn e.o.",
    role: "Beoogd: onderbouw + bovenbouw",
    color: "terra",
  },
  {
    name: "Etty Hillesum Lyceum",
    level: "vo",
    location: "Deventer",
    role: "Beoogd: taalvakken + maatschappij",
    color: "terra",
  },
  {
    name: "Aventus",
    level: "mbo",
    location: "Apeldoorn / Deventer / Zutphen",
    role: "Opdrachtgever · pen­voerder VABOK",
    color: "sage",
  },
  {
    name: "Saxion",
    level: "hbo",
    location: "Enschede / Deventer",
    role: "Beoogd: ICT-vakken + lerarenopleiding",
    color: "academy",
  },
];

const voorgesteldeFases = [
  {
    nr: "01",
    title: "Intake & behoefteanalyse",
    period: "wk 1 — 3",
    icon: Compass,
    body: "Verkennende gesprekken met opleidingsmanagers en docenten per instelling. Niveauscan met huidige tools. Scherp beeld van leervragen, vakdomeinen en bestaande PD-routines per instelling.",
    deliverables: ["Stakeholdergesprekken", "Niveauscan docentpopulatie", "Programmakader v1"],
  },
  {
    nr: "02",
    title: "Co-ontwerp modules",
    period: "wk 3 — 8",
    icon: Sprout,
    body: "Co-ontwerp met onderwijsexperts uit elke instelling. Iteratief, met tussentoetsen op didactische kwaliteit en toepasbaarheid in vo/mbo/hbo. Voortbouwen op huidige demo of opnieuw beginnen — keuze ligt bij VABOK.",
    deliverables: ["Modulekader 01", "Modulekader 02", "Promptbibliotheek v1"],
  },
  {
    nr: "03",
    title: "Pilot met docentgroep",
    period: "wk 8 — 14",
    icon: Users,
    body: "Drie pilotgroepen (één per onderwijssoort) van naar verwachting 8–12 docenten per groep. Begeleide doorloop met train-the-teacher elementen. Wekelijkse korte feedbacksessies.",
    deliverables: ["Pilotgroepen samengesteld", "Wekelijkse feedbacksessies", "Korte tussenrapportage"],
  },
  {
    nr: "04",
    title: "Feedback & doorontwikkeling",
    period: "wk 14 — 18",
    icon: Repeat,
    body: "Kort-cyclisch verbeteren op basis van pilotfeedback. Casussen aangescherpt, prompts gefinaliseerd, intake gekalibreerd. Productie-architectuur uitgerold (Postgres, Strapi-CMS, SURFconext-koppeling).",
    deliverables: ["Modules v2", "Geanonimiseerde casussen", "Productie-architectuur"],
  },
  {
    nr: "05",
    title: "Brede uitrol binnen VABOK",
    period: "vanaf wk 18",
    icon: Rocket,
    body: "Schaalslag naar bredere docentpopulatie. Train-the-teacher kernteam per instelling. Lange-termijn beheer- en doorontwikkelplan met VABOK-partners.",
    deliverables: ["Kernteam per instelling", "Beheerafspraken", "Roadmap 2026—2027"],
  },
];

export function Project() {
  return (
    <>
      <ProjectHero />
      <HuidigeStatus />
      <Roadmap />
      <BeoogdePartners />
      <Adaptability />
      <TrainTheTeacher />
      <FeedbackPanel />
    </>
  );
}

function ProjectHero() {
  return (
    <section className="hairline-b relative overflow-hidden">
      <div aria-hidden="true" className="grid-paper absolute inset-0 opacity-40" />
      <div className="relative px-5 pb-12 pt-12 sm:px-8 lg:px-10 lg:pb-14 lg:pt-14">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <Tag tone="ink">
            <Asterisk size={10} strokeWidth={2.5} />
            Aanbod · Aventus-opdracht
          </Tag>
          <Tag tone="terra">vo</Tag>
          <Tag tone="sage">mbo</Tag>
          <Tag tone="academy">hbo</Tag>
        </div>

        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Footnote>Project & roadmap</Footnote>
            <h1 className="mt-3 font-display text-balance text-[34px] font-normal leading-[1.05] tracking-tightish text-ink sm:text-[44px] lg:text-[56px] lg:leading-[1.02]">
              Dit is wat we bouwden,{" "}
              <span className="display-italic text-terra">en hoe</span> we het
              verder zouden brengen.
            </h1>
            <p className="mt-5 max-w-3xl text-pretty text-[16px] leading-relaxed text-ink-soft">
              AI PraktijkLab is op dit moment een werkende demo — gebouwd in
              een paar dagen als reactie op de Aventus-aanbieding voor de
              VABOK-opdracht. Het laat zien hoe we de twee professionaliserings­modules
              inhoudelijk, didactisch én technisch zouden invullen. De fases
              hieronder zijn een voorstel; ze gaan pas lopen zodra het traject
              start.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button variant="accent" href="mailto:jonathangebru@gmail.com?subject=AI%20PraktijkLab%20%E2%80%94%20verkenningsgesprek">
                <Send size={14} strokeWidth={1.8} />
                Plan een verkenningsgesprek
              </Button>
              <Button variant="ghost" to="/">
                Bekijk de demo
                <ArrowRight size={13} strokeWidth={1.8} />
              </Button>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="card-elev p-6">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-soft-pulse rounded-full bg-sage" />
                <Footnote>Live demo · status nu</Footnote>
              </div>
              <h3 className="mt-1 font-display text-[22px] leading-tight">
                Werkende prototype
              </h3>

              <ul className="mt-5 space-y-2 text-[13px]">
                {[
                  { l: "Module 01 (Basiscursus AI)", v: "8 lessen · af" },
                  { l: "Module 02 (Verdieping)", v: "9 lessen · af" },
                  { l: "Kennischecks", v: "4 · af" },
                  { l: "Promptbibliotheek", v: "live, filterbaar" },
                  { l: "Feedback-widget", v: "live, anoniem" },
                  { l: "Toegankelijkheid", v: "WCAG AA · 100/100" },
                ].map((it) => (
                  <li
                    key={it.l}
                    className="flex items-center justify-between gap-3"
                  >
                    <span className="text-ink-soft">{it.l}</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-ink">
                      {it.v}
                    </span>
                  </li>
                ))}
              </ul>

              <Divider label="Demo loopt" className="my-5" />

              <div className="text-[13px] text-ink-soft">
                <div className="font-display text-[17px] text-ink">
                  Online t/m 7 juni 2026
                </div>
                <div className="mt-1">
                  Gehost op Azure Static Web Apps (Free tier) in West-Europa.
                  Geen auth — voor evaluatie open te benaderen.
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function HuidigeStatus() {
  return (
    <Section
      eyebrow="Wat er nú staat"
      title="Een klikbare demo, geen lopend programma"
      className="hairline-t"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            num: "01",
            title: "Demo, geen pilot",
            body: "Geen actieve VABOK-samenwerking, geen ingeschreven docenten, geen lopende pilotgroepen. De fases hieronder gaan pas in bij gunning.",
          },
          {
            num: "02",
            title: "Inhoud is volledig",
            body: "Alle 17 lessen zijn uitgeschreven op ~3.000 woorden, met worked examples, vakvariaties, valkuilen en rubrics. 4 kennischecks tussen modulesdelen.",
          },
          {
            num: "03",
            title: "Interactief, niet illusief",
            body: "Docent-werk wordt lokaal opgeslagen, exporteerbaar als markdown. Promptkit-functie werkt. Mobile + a11y getest.",
          },
          {
            num: "04",
            title: "Anonieme feedback open",
            body: "De drijvende feedbackknop rechtsonder verstuurt input naar Azure Application Insights. Bekijken via portal of CLI.",
          },
          {
            num: "05",
            title: "Architectuur is uitgewerkt",
            body: "Voor productie ligt een concrete Azure-architectuur klaar (Postgres, Strapi, SURFconext-via-Entra, Azure OpenAI in West-Europa).",
          },
          {
            num: "06",
            title: "Audit + bronnen onder de inhoud",
            body: "Inhoud verankerd in UNESCO AI Framework, DigCompEdu, Kennisnet, Npuls AI-GO! en Darling-Hammond. 16 bronnen in het werkdocument.",
          },
        ].map((s) => (
          <article key={s.num} className="card flex flex-col gap-3 p-6">
            <div className="flex items-baseline gap-3">
              <span className="num-mark text-[24px] leading-none text-terra">
                {s.num}
              </span>
              <h4 className="font-display text-[18px] leading-tight">
                {s.title}
              </h4>
            </div>
            <p className="text-[13.5px] leading-relaxed text-ink-soft">
              {s.body}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Roadmap() {
  return (
    <Section
      eyebrow="Voorgesteld traject"
      title="Vijf fases — pas actief bij gunning"
      className="hairline-t"
    >
      <p className="mb-8 max-w-3xl text-[15px] leading-relaxed text-ink-soft">
        Geen enkele fase is op dit moment in uitvoering. Wat hieronder staat is
        het traject zoals we het zouden aflopen — kort-cyclisch verbeteren,
        co-ontwerp met instellingen, en transfer naar de eigen klas als
        ankerpunt per les.
      </p>

      <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 top-9 hidden h-px bg-rule lg:block"
        />
        {voorgesteldeFases.map((f) => (
          <RoadmapStep key={f.nr} fase={f} />
        ))}
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {voorgesteldeFases.map((f) => (
          <FaseDetail key={`d-${f.nr}`} fase={f} />
        ))}
      </div>
    </Section>
  );
}

function RoadmapStep({ fase: f }) {
  const Icon = f.icon;
  return (
    <div className="relative">
      <div className="grid h-[72px] w-[72px] place-items-center rounded-full border border-rule bg-paper-card text-ink-mute">
        <Icon size={22} strokeWidth={1.6} />
      </div>
      <div className="mt-4">
        <Footnote>
          Fase {f.nr} · {f.period}
        </Footnote>
        <div className="mt-1 font-display text-[18px] leading-tight">
          {f.title}
        </div>
        <div className="mt-2 flex items-center gap-1.5 text-[12px] text-ink-mute">
          <Circle size={12} className="text-ink-faint" /> Voorgesteld
        </div>
      </div>
    </div>
  );
}

function FaseDetail({ fase: f }) {
  return (
    <div className="card p-6">
      <div className="flex items-baseline gap-3">
        <span className="num-mark text-[28px] leading-none">{f.nr}</span>
        <h3 className="font-display text-[20px] leading-tight">{f.title}</h3>
      </div>
      <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
        {f.body}
      </p>

      <Divider label="Beoogde opbrengsten" className="my-4" />
      <ul className="space-y-1.5">
        {f.deliverables.map((d) => (
          <li
            key={d}
            className="flex items-center gap-2 text-[13px] text-ink-soft"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-terra" />
            {d}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BeoogdePartners() {
  return (
    <Section
      eyebrow="VABOK · beoogde partners"
      title="Vier instellingen, één programma"
      className="hairline-t"
    >
      <p className="mb-8 max-w-3xl text-[15px] leading-relaxed text-ink-soft">
        Dit zijn de partners die de Aventus-opdrachtomschrijving noemt. De
        rol-omschrijvingen hieronder zijn óns voorstel — feitelijke afspraken
        worden in fase 01 met elke instelling gemaakt.
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        {beoogdePartners.map((p) => (
          <PartnerCard key={p.name} data={p} />
        ))}
      </div>
    </Section>
  );
}

function PartnerCard({ data }) {
  const tones = {
    terra: "bg-terra-tint text-terra-deep",
    sage: "bg-sage-tint text-sage-deep",
    academy: "bg-academy-tint text-academy-deep",
  };
  return (
    <article className="card flex items-start gap-4 p-6">
      <div
        className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${tones[data.color]}`}
      >
        <Building2 size={20} strokeWidth={1.5} />
      </div>
      <div className="flex-1">
        <div className="mb-1.5 flex items-center gap-2">
          <Tag tone={data.color}>{data.level}</Tag>
          <Tag tone="neutral">{data.location}</Tag>
        </div>
        <h3 className="font-display text-[22px] leading-tight">{data.name}</h3>
        <p className="mt-1 max-w-md text-[13px] text-ink-soft">{data.role}</p>
      </div>
    </article>
  );
}

function Adaptability() {
  return (
    <Section
      eyebrow="Schaalbaar én eigen"
      title="Aanpasbaar voor vo, mbo en hbo"
      className="hairline-t"
    >
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-[15.5px] leading-relaxed text-ink-soft">
            Eén leerlijn, drie aansluitingen. Vo-docenten leren met casussen
            uit onderbouw en taalvakken. Mbo-docenten met beroepsgerichte
            praktijksituaties. Hbo-docenten met projectonderwijs en onderzoek.
            De kern is gedeeld, de toepassing is van de instelling.
          </p>
          <div className="mt-6 rounded-xl bg-paper-card p-5 ring-1 ring-rule">
            <Footnote>Belofte</Footnote>
            <p className="mt-2 font-display text-[18px] italic leading-snug">
              Iedere VABOK-instelling kan eigen casussen, prompts en
              accentleggingen toevoegen — zonder de leerlijn te splitsen.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                level: "vo",
                title: "Voortgezet onderwijs",
                body: "Focus op differentiatie, lezen, schrijven, mediawijsheid en formatieve toetsing. Casussen uit 2/3 vmbo, havo en vwo.",
                tone: "terra",
              },
              {
                level: "mbo",
                title: "Middelbaar beroepsonderwijs",
                body: "Focus op beroepsopdrachten, dilemma's, reflectie en mondelinge verantwoording. Casussen uit verpleegkunde, techniek, economie.",
                tone: "sage",
              },
              {
                level: "hbo",
                title: "Hoger beroepsonderwijs",
                body: "Focus op projectonderwijs, onderzoek, ontwerp en programmeerdidactiek. Casussen uit ICT, bedrijfskunde, lerarenopleidingen.",
                tone: "academy",
              },
              {
                level: "ICT",
                title: "ICT-vakken (cross-niveau)",
                body: "Programmeerdidactiek, AI-assisted development en vibe coding. Casussen uit mbo, hbo en bovenbouw vo-informatica.",
                tone: "academy",
              },
            ].map((c) => (
              <div key={c.level} className="card p-5">
                <Tag tone={c.tone}>{c.level}</Tag>
                <h3 className="mt-3 font-display text-[19px] leading-tight">
                  {c.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function TrainTheTeacher() {
  return (
    <Section
      eyebrow="Train-the-teacher · voorgesteld model"
      title="Docent bekwaam, dan begeleider, dan ambassadeur"
      className="hairline-t"
    >
      <p className="mb-8 max-w-3xl text-[15px] leading-relaxed text-ink-soft">
        Drie progressie-niveaus, geïnspireerd op het UNESCO AI Competency
        Framework for Teachers (2024) en Darling-Hammond's zeven kenmerken
        van effectieve docent-PD (2017). Geen verplicht traject — een
        groei­pad dat docenten zelf kunnen kiezen.
      </p>
      <div className="grid gap-6 lg:grid-cols-3">
        {[
          {
            icon: GraduationCap,
            num: "01",
            title: "Bekwaam",
            body: "Docent doorloopt het programma zelf met begeleiding, levert eigen materiaal op.",
            scale: "1 op 1",
          },
          {
            icon: BookMarked,
            num: "02",
            title: "Begeleid",
            body: "Docent begeleidt twee collega's met dezelfde lessen en casussen, met co-reflectie.",
            scale: "1 op 2",
          },
          {
            icon: Rocket,
            num: "03",
            title: "Ambassadeur",
            body: "Docent host eigen sessies binnen de instelling en deelt nieuwe casussen met VABOK.",
            scale: "1 op 8+",
          },
        ].map((s) => (
          <article key={s.num} className="card flex flex-col gap-4 p-6">
            <div className="flex items-start justify-between">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-paper-deep/70 text-ink">
                <s.icon size={18} strokeWidth={1.6} />
              </div>
              <span className="num-mark text-[28px] leading-none">
                {s.num}
              </span>
            </div>
            <h3 className="font-display text-[22px] leading-tight">
              {s.title}
            </h3>
            <p className="text-[14px] leading-relaxed text-ink-soft">
              {s.body}
            </p>
            <div className="hairline-t flex items-center justify-between pt-3 text-[12px] text-ink-mute">
              <span className="font-mono uppercase tracking-widest">
                Schaal
              </span>
              <span>{s.scale}</span>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function FeedbackPanel() {
  return (
    <Section
      eyebrow="Stakeholder-feedback"
      title="Hoe we feedback verzamelen tijdens de demo"
      className="hairline-t"
    >
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="card-elev p-7">
            <div className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-terra/15 text-terra">
                <MessageSquare size={18} strokeWidth={1.7} />
              </span>
              <div>
                <h3 className="font-display text-[22px] leading-tight">
                  Drijvende feedback-knop, rechtsonder.
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">
                  Op elke pagina van deze demo zit rechtsonder een{" "}
                  <span className="font-medium text-ink">Feedback</span>-knop.
                  Klik 'm, geef sterren, kies eventueel een rol, schrijf wat
                  je wilt — en het komt anoniem binnen bij het ontwerpteam.
                </p>

                <ul className="mt-5 space-y-2 text-[13.5px] text-ink-soft">
                  <li className="flex items-start gap-2">
                    <Sparkles size={12} strokeWidth={1.8} className="mt-1 text-terra" />
                    Geen account nodig, geen email vereist
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles size={12} strokeWidth={1.8} className="mt-1 text-terra" />
                    Server-side opgeslagen in Azure Application Insights
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles size={12} strokeWidth={1.8} className="mt-1 text-terra" />
                    Direct querybaar via Kusto (KQL) — geen tussenstap
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles size={12} strokeWidth={1.8} className="mt-1 text-terra" />
                    Geen persoonsgegevens vereist; rol en naam zijn optioneel
                  </li>
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button variant="accent" to="/">
                    Open de demo & klik rechtsonder
                    <ArrowRight size={13} strokeWidth={1.8} />
                  </Button>
                  <Button
                    variant="ghost"
                    href="https://learn.microsoft.com/azure/azure-monitor/logs/get-started-queries"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Over Kusto-query's
                    <ExternalLink size={12} strokeWidth={1.8} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="lg:col-span-5">
          <Footnote>Wat doen we met die feedback?</Footnote>
          <ul className="mt-3 space-y-4">
            {[
              {
                num: "01",
                t: "Dagelijks lezen",
                b: "Tijdens deze demo-week leest het ontwerpteam dagelijks de binnenkomende feedback.",
              },
              {
                num: "02",
                t: "Cluster & beslis",
                b: "Aan het einde van de week clusteren we naar thema en bepalen welke input meegaat in een eventueel vervolg.",
              },
              {
                num: "03",
                t: "Eerlijke terugkoppeling",
                b: "Bij gunning krijgen geïnteresseerde feedbackgevers een korte mail wanneer hun input in een nieuwe versie staat — als ze dat willen.",
              },
            ].map((s) => (
              <li
                key={s.num}
                className="hairline-b flex gap-4 pb-4 last:border-0"
              >
                <span className="num-mark text-[22px] leading-none">
                  {s.num}
                </span>
                <div>
                  <h3 className="font-display text-[18px] leading-snug">
                    {s.t}
                  </h3>
                  <p className="mt-1 text-[13.5px] text-ink-soft">{s.b}</p>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  );
}
