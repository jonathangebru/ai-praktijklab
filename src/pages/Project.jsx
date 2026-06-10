import {
  Send,
  Compass,
  Sprout,
  Users,
  Repeat,
  Rocket,
  Asterisk,
  GraduationCap,
  Building2,
  BookMarked,
  ArrowRight,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { Section, Button, Tag, Footnote, Divider } from "../components/ui";

/* ──────────────────────────────────────────────────────────────────────────
 * Project & roadmap — het programma en waar het staat.
 *
 * Het platform draait in productie (login, opslag, dashboard, certificaten)
 * en zit in de pilotfase met de VABOK-instellingen. De roadmap hieronder
 * toont per fase de actuele status: afgerond, lopend of gepland.
 * ──────────────────────────────────────────────────────────────────────── */

const partners = [
  {
    name: "Veluwse Onderwijsgroep",
    level: "vo",
    location: "Apeldoorn e.o.",
    role: "Onderbouw en bovenbouw — taalvakken, mens & maatschappij, exacte vakken.",
    color: "terra",
  },
  {
    name: "Etty Hillesum Lyceum",
    level: "vo",
    location: "Deventer",
    role: "Taalvakken en maatschappijleer — focus op kritisch lezen en mediawijsheid.",
    color: "terra",
  },
  {
    name: "Aventus",
    level: "mbo",
    location: "Apeldoorn / Deventer / Zutphen",
    role: "Penvoerder. Meerdere opleidingen — zorg, techniek, ICT, economie.",
    color: "sage",
  },
  {
    name: "Saxion",
    level: "hbo",
    location: "Enschede / Deventer",
    role: "ICT-opleidingen en lerarenopleiding — programmeerdidactiek en AI-assisted development.",
    color: "academy",
  },
];

const fases = [
  {
    nr: "01",
    status: "afgerond",
    title: "Intake en behoefte",
    period: "wk 1 — 3",
    icon: Compass,
    body: "Gesprekken met opleidingsmanagers en docenten per instelling. Een korte niveauscan brengt in beeld waar mensen nu staan met AI. Per instelling één pagina met leervragen, vakken en bestaande PD-routine.",
    deliverables: ["Gesprekken op locatie", "Niveauscan", "Eén pagina per instelling"],
  },
  {
    nr: "02",
    status: "afgerond",
    title: "Ontwerp van de modules",
    period: "wk 3 — 8",
    icon: Sprout,
    body: "Ontwerp samen met onderwijsexperts uit elke instelling. Elk stuk getoetst op didactische kwaliteit en op werking in vo, mbo en hbo. Iteratief, met tussentoetsen.",
    deliverables: ["Modulekader 01", "Modulekader 02", "Promptbibliotheek v1"],
  },
  {
    nr: "03",
    status: "lopend",
    title: "Pilot met docenten",
    period: "wk 8 — 14",
    icon: Users,
    body: "Drie groepen van acht tot twaalf docenten, één per onderwijssoort. Begeleide doorloop, met elke week een korte sessie waarin ze terugkoppelen wat werkt en wat niet.",
    deliverables: ["Drie pilotgroepen", "Wekelijkse sessies", "Tussenrapportage"],
  },
  {
    nr: "04",
    status: "lopend",
    title: "Bijschaven en productie",
    period: "wk 14 — 18",
    icon: Repeat,
    body: "Schaven op basis van pilot-input. Casussen aanscherpen, prompts vastleggen, intake kalibreren. De productie-omgeving wordt uitgerold: database, content-systeem, schoollogin via SURFconext.",
    deliverables: ["Modules v2", "Geanonimiseerde casussen", "Productie-omgeving"],
  },
  {
    nr: "05",
    status: "gepland",
    title: "Uitrol binnen VABOK",
    period: "vanaf wk 18",
    icon: Rocket,
    body: "Opschalen naar de bredere docentpopulatie. Per instelling een kernteam dat de modules verspreidt en bewaakt. Plan voor beheer, doorontwikkeling en uitbreiding richting 2026 en 2027.",
    deliverables: ["Kernteam per instelling", "Beheerafspraken", "Roadmap 2026—2027"],
  },
];

export function Project() {
  return (
    <>
      <ProjectHero />
      <Roadmap />
      <PartnersSection />
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
            VABOK · 2026 — 2027
          </Tag>
          <Tag tone="terra">vo</Tag>
          <Tag tone="sage">mbo</Tag>
          <Tag tone="academy">hbo</Tag>
        </div>

        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Footnote>Project & roadmap</Footnote>
            <h1 className="mt-3 font-display text-balance text-[34px] font-normal leading-[1.05] tracking-tightish text-ink sm:text-[44px] lg:text-[56px] lg:leading-[1.02]">
              Eén leerlijn voor{" "}
              <span className="display-italic text-terra">vo, mbo en hbo</span>.
              Eigen invulling per instelling.
            </h1>
            <p className="mt-5 max-w-3xl text-pretty text-[16px] leading-relaxed text-ink-soft">
              AI PraktijkLab is een professionaliseringsprogramma voor docenten
              binnen de VABOK-samenwerking. Twee modules, zeventien lessen,
              vier kennischecks. Casussen die docenten morgen in hun klas
              kunnen toepassen. Een aanpak die didactische diepgang voorop
              zet, en technologie als gereedschap behandelt.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                variant="accent"
                href="mailto:j.gebru@datagrid.nl?subject=AI%20PraktijkLab%20%E2%80%94%20verkenningsgesprek&body=Hallo%20Jonathan%2C%0A%0AIk%20wil%20graag%20een%20verkenningsgesprek%20plannen%20over%20AI%20PraktijkLab.%0A%0A"
              >
                <Send size={14} strokeWidth={1.8} />
                Plan een verkenningsgesprek
              </Button>
              <Button variant="ghost" to="/modules/basiscursus-ai">
                Bekijk een module
                <ArrowRight size={13} strokeWidth={1.8} />
              </Button>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="card-elev p-6">
              <Footnote>Programma in beeld</Footnote>
              <h3 className="mt-1 font-display text-[22px] leading-tight">
                Twee modules, zeventien lessen
              </h3>

              <ul className="mt-5 space-y-2 text-[13px]">
                {[
                  { l: "Module 01 · Basiscursus AI", v: "8 lessen" },
                  { l: "Module 02 · Verdieping", v: "9 lessen" },
                  { l: "Kennischecks tussen moduledelen", v: "4" },
                  { l: "Promptbibliotheek · vakgericht", v: "60+" },
                  { l: "Praktijkcasussen vo/mbo/hbo", v: "13" },
                  { l: "Toegankelijkheid", v: "WCAG AA" },
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

              <Divider label="Onderbouwd op" className="my-5" />

              <div className="text-[13px] text-ink-soft">
                UNESCO AI Competency Framework for Teachers, DigCompEdu,
                Kennisnet, Npuls AI-GO! en Darling-Hammond's zeven kenmerken
                van effectieve docent-PD.
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  return (
    <Section
      eyebrow="Traject"
      title="Vijf fases, achttien tot twintig weken"
      className="hairline-t"
    >
      <p className="mb-8 max-w-3xl text-[15px] leading-relaxed text-ink-soft">
        Kort-cyclisch, met de instellingen aan tafel en de eigen klas van de
        docent als plek waar de les uiteindelijk landt. Per fase zie je
        hieronder de actuele status.
      </p>

      <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 top-9 hidden h-px bg-rule lg:block"
        />
        {fases.map((f) => (
          <RoadmapStep key={f.nr} fase={f} />
        ))}
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {fases.map((f) => (
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
      <div className="grid h-[72px] w-[72px] place-items-center rounded-full bg-terra/10 text-terra">
        <Icon size={22} strokeWidth={1.6} />
      </div>
      <div className="mt-4">
        <Footnote>
          Fase {f.nr} · {f.period}
        </Footnote>
        <div className="mt-1 font-display text-[18px] leading-tight">
          {f.title}
        </div>
      </div>
    </div>
  );
}

const faseStatusTag = {
  afgerond: { tone: "sage", label: "Afgerond" },
  lopend: { tone: "geel", label: "Lopend" },
  gepland: { tone: "neutral", label: "Gepland" },
};

function FaseDetail({ fase: f }) {
  const st = faseStatusTag[f.status] || faseStatusTag.gepland;
  return (
    <div className="card p-6">
      <div className="flex items-baseline justify-between gap-3">
        <div className="flex items-baseline gap-3">
          <span className="num-mark text-[28px] leading-none">{f.nr}</span>
          <h3 className="font-display text-[20px] leading-tight">{f.title}</h3>
        </div>
        <Tag tone={st.tone}>{st.label}</Tag>
      </div>
      <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
        {f.body}
      </p>

      <Divider label="Opbrengsten" className="my-4" />
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

function PartnersSection() {
  return (
    <Section
      eyebrow="VABOK · partners"
      title="Vier instellingen, één programma"
      className="hairline-t"
    >
      <p className="mb-8 max-w-3xl text-[15px] leading-relaxed text-ink-soft">
        Per instelling stemmen we de rol af op vakdomeinen, niveau en
        bestaande PD-routine. Het gedeelde programma blijft hetzelfde; de
        accenten zijn van de instelling.
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        {partners.map((p) => (
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
            De kern is voor iedereen gelijk. De voorbeelden komen uit de
            instelling zelf. Vo werkt met casussen uit de onderbouw en
            taalvakken. Mbo met beroepspraktijk en dilemma's. Hbo met
            projecten en onderzoek. Hetzelfde fundament, eigen toepassing.
          </p>
          <div className="mt-6 rounded-xl bg-paper-card p-5 ring-1 ring-rule">
            <Footnote>Belofte</Footnote>
            <p className="mt-2 font-display text-[18px] italic leading-snug">
              Iedere instelling voegt eigen casussen, prompts en accenten
              toe. Zonder dat de leerlijn breekt.
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
      eyebrow="Train-the-teacher"
      title="Bekwaam, begeleider, trekker"
      className="hairline-t"
    >
      <p className="mb-8 max-w-3xl text-[15px] leading-relaxed text-ink-soft">
        Drie plekken waar een docent kan staan. Van zelf leren, naar
        collega's helpen, naar de school-trekker. Een pad dat docenten zelf
        kiezen wanneer ze eraan toe zijn.
      </p>
      <div className="grid gap-6 lg:grid-cols-3">
        {[
          {
            icon: GraduationCap,
            num: "01",
            title: "Bekwaam",
            body: "Doorloopt het programma zelf met begeleiding. Levert eigen materiaal op dat in de klas werkt.",
            scale: "1 op 1",
          },
          {
            icon: BookMarked,
            num: "02",
            title: "Begeleider",
            body: "Helpt twee collega's door dezelfde lessen heen. Samen reflecteren, samen aanscherpen.",
            scale: "1 op 2",
          },
          {
            icon: Rocket,
            num: "03",
            title: "Trekker",
            body: "Geeft eigen sessies binnen de school. Deelt nieuwe casussen met VABOK voor andere instellingen.",
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
      title="Het programma blijft groeien met de docenten mee"
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
                  Eén knop, rechtsonder.
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">
                  Op iedere pagina staat rechtsonder een{" "}
                  <span className="font-medium text-ink">Feedback</span>-knop.
                  Docenten, opleidingsmanagers en projectleiders kunnen op elk
                  moment input geven — anoniem, zonder account.
                </p>

                <ul className="mt-5 space-y-2 text-[13.5px] text-ink-soft">
                  <li className="flex items-start gap-2">
                    <Sparkles size={12} strokeWidth={1.8} className="mt-1 text-terra" />
                    Sterren-score, optionele rol, vrije tekst
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles size={12} strokeWidth={1.8} className="mt-1 text-terra" />
                    Server-side opgeslagen, doorzoekbaar voor het ontwerpteam
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles size={12} strokeWidth={1.8} className="mt-1 text-terra" />
                    Wekelijks bundelen en omzetten in een verbeterronde
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles size={12} strokeWidth={1.8} className="mt-1 text-terra" />
                    Geen persoonsgegevens vereist
                  </li>
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button variant="accent" to="/">
                    Probeer het zelf
                    <ArrowRight size={13} strokeWidth={1.8} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="lg:col-span-5">
          <Footnote>Hoe we het verwerken</Footnote>
          <ul className="mt-3 space-y-4">
            {[
              {
                num: "01",
                t: "Wekelijks lezen",
                b: "Het ontwerpteam leest álle binnenkomende feedback binnen één week.",
              },
              {
                num: "02",
                t: "Clusteren per thema",
                b: "We bundelen naar thema en bepalen wat in de eerstvolgende iteratie meegaat.",
              },
              {
                num: "03",
                t: "Terugkoppelen",
                b: "Wie wil weten wat er met hun punt is gebeurd, krijgt een korte mail bij de volgende release.",
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
