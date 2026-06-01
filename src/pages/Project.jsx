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
    title: "Intake en behoefte",
    period: "wk 1 — 3",
    icon: Compass,
    body: "Gesprekken met opleidingsmanagers en docenten per instelling. Een korte niveauscan brengt in beeld waar mensen nu staan met AI. Eind van fase: één pagina per instelling die hun leervragen, vakken en bestaande PD-routine vasthoudt.",
    deliverables: ["Gesprekken op locatie", "Niveauscan", "Eén pagina per instelling"],
  },
  {
    nr: "02",
    title: "Ontwerp van de modules",
    period: "wk 3 — 8",
    icon: Sprout,
    body: "Ontwerp samen met onderwijsexperts uit elke instelling. Elk stuk wordt getoetst op didactische kwaliteit en op of het in vo, mbo en hbo werkt. Jullie kiezen of we doorgaan op de huidige demo of opnieuw beginnen.",
    deliverables: ["Modulekader 01", "Modulekader 02", "Promptbibliotheek v1"],
  },
  {
    nr: "03",
    title: "Pilot met docenten",
    period: "wk 8 — 14",
    icon: Users,
    body: "Drie groepen van acht tot twaalf docenten, één per onderwijssoort. Begeleid door de modules heen, met elke week een korte sessie waarin ze terugkoppelen wat werkt en wat niet.",
    deliverables: ["Drie pilotgroepen", "Wekelijkse sessies", "Tussenrapportage"],
  },
  {
    nr: "04",
    title: "Bijschaven en productie",
    period: "wk 14 — 18",
    icon: Repeat,
    body: "Schaven op basis van wat de pilot opleverde. Casussen aanscherpen, prompts vastleggen, intake kalibreren. Tegelijk zetten we de productie-omgeving op: database, content-systeem, schoollogin via SURFconext.",
    deliverables: ["Modules v2", "Geanonimiseerde casussen", "Productie-omgeving"],
  },
  {
    nr: "05",
    title: "Uitrol binnen VABOK",
    period: "vanaf wk 18",
    icon: Rocket,
    body: "Opschalen naar meer docenten. Per instelling een kernteam dat de modules verspreidt en bewaakt. Plan voor beheer, doorontwikkeling en uitbreiding richting 2026 en 2027.",
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
              Geen toezegging.{" "}
              <span className="display-italic text-terra">Een werkend voorbeeld.</span>
            </h1>
            <p className="mt-5 max-w-3xl text-pretty text-[16px] leading-relaxed text-ink-soft">
              Wij hebben in een paar dagen iets gebouwd op basis van de
              opdrachtomschrijving. Niet om indruk te maken, om te laten
              zien dat we weten wat we doen. De inhoud klopt, de techniek
              werkt, de aanpak staat. Wat hieronder volgt — de fases, de
              partners, het tempo — is wat we zouden doen als jullie ja
              zeggen.
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

              <Divider label="Open ter evaluatie" className="my-5" />

              <div className="text-[13px] text-ink-soft">
                <div className="font-display text-[17px] text-ink">
                  Klik door waar je wilt.
                </div>
                <div className="mt-1">
                  Alles wat je hieronder ziet werkt. Reageer rechtsonder op
                  wat je sterk vindt en wat niet.
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
      eyebrow="Status nu"
      title="Werkt, draait, is geen programma"
      className="hairline-t"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            num: "01",
            title: "Demo, geen pilot",
            body: "Niemand is ingeschreven. Geen lopende samenwerking met de vier instellingen. Bij gunning zetten we het programma in fase 01 op.",
          },
          {
            num: "02",
            title: "Inhoud staat",
            body: "Zeventien lessen zijn af. Niet samenvattend. Met voorbeelden, valkuilen, vakvariaties en rubrics. Vier kennischecks tussen de moduledelen.",
          },
          {
            num: "03",
            title: "Echt interactief",
            body: "Wat je typt blijft staan, ook na herladen. Je promptkit groeit terwijl je werkt. Je lesopzet exporteer je als één document.",
          },
          {
            num: "04",
            title: "Feedback komt binnen",
            body: "De knop rechtsonder werkt. Iedereen kan reageren. Wij lezen alles wat binnenkomt, deze week elke dag.",
          },
          {
            num: "05",
            title: "Productie is uitgedacht",
            body: "Voor de echte uitrol ligt een Azure-architectuur klaar. Database, content-systeem, schoollogin via SURFconext, AI-laag — binnen Europa.",
          },
          {
            num: "06",
            title: "Onderbouwd, niet bedacht",
            body: "Het materiaal leunt op UNESCO, DigCompEdu, Kennisnet, Npuls en Darling-Hammond. Zestien bronnen in het werkdocument.",
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
      title="Vijf fases — geen ervan loopt nu"
      className="hairline-t"
    >
      <p className="mb-8 max-w-3xl text-[15px] leading-relaxed text-ink-soft">
        Geen van deze fases is gestart. Hieronder hoe we het zouden doen. In
        kleine stappen, met de instellingen aan tafel, en met de eigen klas
        van de docent als plek waar de les uiteindelijk landt.
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

      <Divider label="Wat dat oplevert" className="my-4" />
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
        De vier partners liggen vast; die noemt de opdracht zelf. Hoe hun rol
        eruit ziet hangt af van wat zij willen. Hieronder ons voorstel.
        Afspraken maken we in fase 01.
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
      eyebrow="Train-the-teacher · voorgesteld model"
      title="Docent bekwaam, dan begeleider, dan ambassadeur"
      className="hairline-t"
    >
      <p className="mb-8 max-w-3xl text-[15px] leading-relaxed text-ink-soft">
        Drie plekken waar een docent kan staan. Van zelf leren, naar
        collega's helpen, naar de school-trekker. Geen verplichting. Een pad
        dat docenten kiezen wanneer ze eraan toe zijn.
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
                  Eén knop, rechtsonder.
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">
                  Op iedere pagina staat rechtsonder een{" "}
                  <span className="font-medium text-ink">Feedback</span>-knop.
                  Klik 'm, geef sterren, schrijf wat je wilt kwijt. Het komt
                  anoniem binnen.
                </p>

                <ul className="mt-5 space-y-2 text-[13.5px] text-ink-soft">
                  <li className="flex items-start gap-2">
                    <Sparkles size={12} strokeWidth={1.8} className="mt-1 text-terra" />
                    Geen account, geen mail
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles size={12} strokeWidth={1.8} className="mt-1 text-terra" />
                    Server-side opgeslagen, niet in jouw browser
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles size={12} strokeWidth={1.8} className="mt-1 text-terra" />
                    Direct doorzoekbaar voor ons
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles size={12} strokeWidth={1.8} className="mt-1 text-terra" />
                    Rol en naam zijn optioneel
                  </li>
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button variant="accent" to="/">
                    Open de demo en klik rechtsonder
                    <ArrowRight size={13} strokeWidth={1.8} />
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
                t: "Elke dag lezen",
                b: "We kijken iedere dag wat er binnenkomt, deze hele week.",
              },
              {
                num: "02",
                t: "Vrijdag clusteren",
                b: "Aan het eind van de week bundelen we per thema en kiezen we wat meegaat in een eventueel vervolg.",
              },
              {
                num: "03",
                t: "Terugkoppelen",
                b: "Als we de opdracht krijgen, sturen we je een mail wanneer jouw punt is verwerkt. Mits je je mail achterliet.",
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
