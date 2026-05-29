import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  BookOpen,
  Compass,
  GraduationCap,
  FlaskConical,
  Sparkles,
  Library,
  CalendarDays,
  Quote as QuoteIcon,
  ChevronRight,
  Asterisk,
} from "lucide-react";
import { Section, Button, Tag, ProgressBar, Footnote, Divider } from "../components/ui";
import { moduleList } from "../data/modules";

export function Dashboard() {
  return (
    <>
      <Hero />
      <Modules />
      <ProgressStrip />
      <Principles />
      <UpNext />
      <PartnerStrip />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden hairline-b">
      <div
        aria-hidden="true"
        className="grid-paper absolute inset-0 opacity-50"
      />
      <div className="relative grid gap-10 px-10 pb-16 pt-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="mb-6 flex items-center gap-3">
            <Tag tone="terra">
              <Asterisk size={10} strokeWidth={2.5} />
              VABOK · Pilotfase
            </Tag>
            <Tag tone="neutral">vo · mbo · hbo</Tag>
          </div>
          <h1 className="font-display text-balance text-[36px] font-normal leading-[1.05] tracking-tightish text-ink sm:text-[48px] lg:text-[64px] lg:leading-[0.98]">
            Welkom terug,{" "}
            <span className="display-italic text-terra">Marieke</span>.
            <br />
            Klaar voor de volgende stap.
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-[16.5px] leading-relaxed text-ink-soft">
            Een werkplek voor docenten die AI verantwoord, praktisch en met
            zelfvertrouwen willen inzetten — in vo, mbo en hbo. Begin met de
            intake, of duik direct in de modules en bibliotheken.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button variant="accent" to="/intake">
              <Compass size={15} strokeWidth={1.8} />
              Start de intake
            </Button>
            <Button variant="ghost" to="/modules/basiscursus-ai">
              Bekijk de modules
              <ArrowUpRight size={14} strokeWidth={1.8} />
            </Button>
            <span className="hidden h-8 w-px bg-rule sm:block" />
            <span className="text-[12px] text-ink-mute">
              <span className="text-ink-soft">~ 8 min</span> intake · adaptief ·
              geen voorkennis nodig
            </span>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <Footnote>Vandaag</Footnote>
            <span className="text-[12.5px] text-ink-soft">
              <span className="display-italic text-ink">Module 01</span> · Les
              1.4 — <em className="display-italic">AI voor lesvoorbereiding</em>{" "}
              — verder waar je gisteren bleef.
            </span>
            <Link
              to="/lessen/lesvoorbereiding"
              className="ml-auto inline-flex items-center gap-1 text-[12.5px] font-medium text-terra hover:underline"
            >
              Open les
              <ChevronRight size={13} strokeWidth={2} />
            </Link>
          </div>
        </div>

        <aside className="relative lg:col-span-5">
          <DocentKaart />
        </aside>
      </div>

      {/* Ticker strip showing programme details */}
      <div className="hairline-t hairline-b relative overflow-hidden bg-paper-card/60">
        <div className="flex w-max animate-ticker items-center gap-12 whitespace-nowrap px-10 py-3">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-12">
              {[
                "Module 01 · Basiscursus AI · 6 weken",
                "Module 02 · AI-geletterdheid & vibe coding · 8 weken",
                "Promptbibliotheek · 60+ docent-prompts",
                "Praktijkcasussen · vo · mbo · hbo",
                "Train-the-teacher pilot · 2026",
                "Verantwoord · Privacy-bewust · Vakdidactisch",
              ].map((s, i) => (
                <span
                  key={`${k}-${i}`}
                  className="font-mono text-[10.5px] uppercase tracking-widest text-ink-mute"
                >
                  · {s}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DocentKaart() {
  return (
    <div className="relative">
      <div className="card-elev relative overflow-hidden p-7">
        <div className="flex items-start justify-between">
          <div>
            <Footnote>Mijn leerpad</Footnote>
            <h3 className="mt-1 font-display text-[22px] leading-tight text-ink">
              Basiscursus AI → AI-geletterdheid
            </h3>
          </div>
          <div className="num-mark text-[34px] leading-none">M.</div>
        </div>

        <div className="mt-6 space-y-4">
          <ProgressBar value={42} label="Module 01 · Basiscursus AI" tone="terra" />
          <ProgressBar value={12} label="Module 02 · AI-geletterdheid" tone="academy" />
          <ProgressBar value={67} label="Mijn promptkit (eigen verzameling)" tone="sage" />
        </div>

        <Divider label="Recent" className="my-6" />

        <ul className="space-y-3">
          <RecentItem
            number="1.3"
            title="Prompting voor docenten"
            meta="Afgerond · 60 min"
            done
          />
          <RecentItem
            number="1.4"
            title="AI voor lesvoorbereiding"
            meta="In uitvoering · 22 van 75 min"
          />
          <RecentItem
            number="Prompt"
            title="Drie niveaus van dezelfde opdracht"
            meta="Toegevoegd aan mijn kit"
            kind="prompt"
          />
        </ul>

        <div className="mt-6 flex items-center justify-between rounded-lg bg-paper-deep/60 px-4 py-3">
          <div className="flex items-center gap-2.5">
            <CalendarDays size={14} strokeWidth={1.8} className="text-ink-mute" />
            <span className="text-[12.5px] text-ink-soft">
              Eerstvolgende sessie · woensdag 10 juni · 14:30
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
            Aventus
          </span>
        </div>
      </div>

      <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-terra-tint" />
    </div>
  );
}

function RecentItem({ number, title, meta, done, kind }) {
  return (
    <li className="flex items-center gap-3">
      <span
        className={`grid h-8 w-8 shrink-0 place-items-center rounded-md text-[11px] font-medium ${
          done
            ? "bg-sage-tint text-sage-deep"
            : kind === "prompt"
            ? "bg-academy-tint text-academy-deep"
            : "bg-terra-tint text-terra-deep"
        }`}
      >
        {kind === "prompt" ? <Sparkles size={12} strokeWidth={1.8} /> : number}
      </span>
      <div className="flex-1">
        <div className="text-[13.5px] leading-tight text-ink">{title}</div>
        <div className="text-[11px] leading-tight text-ink-mute">{meta}</div>
      </div>
      <ChevronRight size={14} strokeWidth={1.7} className="text-ink-faint" />
    </li>
  );
}

function Modules() {
  return (
    <Section
      eyebrow="Twee modules · één programma"
      title="Kies de route die past bij jouw vak"
      action={
        <Link
          to="/intake"
          className="hidden text-[13px] font-medium text-terra hover:underline sm:inline-flex sm:items-center sm:gap-1"
        >
          Niet zeker? Doe de intake
          <ArrowUpRight size={13} strokeWidth={1.8} />
        </Link>
      }
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {moduleList.map((m, idx) => (
          <ModuleCard key={m.id} module={m} delay={idx * 0.05} />
        ))}
      </div>
    </Section>
  );
}

function ModuleCard({ module: m }) {
  const isOne = m.number === "01";
  const Icon = isOne ? GraduationCap : FlaskConical;
  const tone = isOne ? "terra" : "academy";
  return (
    <Link
      to={`/modules/${m.id}`}
      className="card group relative flex flex-col overflow-hidden p-7 transition hover:border-rule-strong hover:shadow-soft focus-ring"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div
            className={`grid h-11 w-11 place-items-center rounded-xl ${
              isOne ? "bg-terra-tint text-terra-deep" : "bg-academy-tint text-academy-deep"
            }`}
          >
            <Icon size={20} strokeWidth={1.6} />
          </div>
          <div>
            <Footnote>Module · {m.number}</Footnote>
            <h3 className="font-display text-[24px] leading-tight text-ink">
              {m.title}
            </h3>
          </div>
        </div>
        <span className="num-mark text-[44px] leading-none">{m.number}</span>
      </div>

      <p className="mt-5 max-w-prose text-[14.5px] leading-relaxed text-ink-soft">
        {m.intro}
      </p>

      <div className="mt-6 grid grid-cols-3 gap-2 text-[12px]">
        <Meta label="Niveau" value={m.level} />
        <Meta label="Doelgroep" value={m.audience} />
        <Meta label="Duur" value={`${m.totalHours}`} />
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          <Tag tone={tone}>
            {m.lessons.length} lessen
          </Tag>
          <Tag tone="neutral">{m.durationWeeks} weken</Tag>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink transition group-hover:translate-x-0.5">
          Open module
          <ArrowUpRight size={14} strokeWidth={1.8} />
        </span>
      </div>

      {/* Decorative module strip */}
      <div className="mt-6 grid grid-cols-9 gap-1.5">
        {m.lessons.map((l, i) => (
          <span
            key={l.slug}
            className={`h-1 rounded-full ${
              i < 3
                ? isOne
                  ? "bg-terra"
                  : "bg-academy"
                : "bg-paper-deep"
            }`}
            title={l.title}
          />
        ))}
      </div>
    </Link>
  );
}

function Meta({ label, value }) {
  return (
    <div className="hairline rounded-lg bg-paper-card/70 px-3 py-2">
      <div className="font-mono text-[9.5px] uppercase tracking-widest text-ink-faint">
        {label}
      </div>
      <div className="mt-0.5 text-ink">{value}</div>
    </div>
  );
}

function ProgressStrip() {
  return (
    <Section
      eyebrow="Mijn voortgang"
      title="Vier vakken, één leerlijn"
      className="hairline-t"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Module 01 — basis", val: 42, tone: "terra" },
          { label: "Module 02 — verdieping", val: 12, tone: "academy" },
          { label: "Promptkit", val: 67, tone: "sage" },
          { label: "Reflectiejournaal", val: 30, tone: "terra" },
        ].map((s) => (
          <div key={s.label} className="card p-5">
            <div className="mb-4 flex items-baseline justify-between">
              <span className="text-[12.5px] text-ink-soft">{s.label}</span>
              <span className="font-display text-[28px] leading-none text-ink">
                {s.val}
                <span className="text-[14px] text-ink-mute">%</span>
              </span>
            </div>
            <ProgressBar value={s.val} tone={s.tone} />
          </div>
        ))}
      </div>
    </Section>
  );
}

function Principles() {
  return (
    <Section eyebrow="Waarom dit platform?" title="Niet AI-expert worden — AI-bekwaam zijn" className="hairline-t">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-pretty text-[16px] leading-relaxed text-ink-soft">
            Docenten hoeven geen AI-experts te worden. Wel hebben ze houvast
            nodig om te zien hoe AI het werk van leerlingen, het ontwerpen van
            lessen en het beoordelen verandert. Dit programma vertaalt die
            verandering naar wat je morgen al doet voor de klas.
          </p>
          <div className="mt-8 max-w-md rounded-xl bg-paper-card p-6 ring-1 ring-rule">
            <QuoteIcon
              size={18}
              strokeWidth={1.6}
              className="mb-3 text-terra"
            />
            <p className="font-display text-[19px] italic leading-snug text-ink">
              We zoeken iemand die complexe technologie begrijpelijk en
              toepasbaar maakt voor docenten.
            </p>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-ink-mute">
              — Uit de opdrachtomschrijving Aventus / VABOK
            </p>
          </div>
        </div>

        <ul className="space-y-4 lg:col-span-7">
          {[
            {
              num: "01",
              title: "AI verandert het leerproces, niet alleen het gereedschap",
              body: "Hoe studenten lezen, schrijven, coderen en denken is sinds 2023 onomkeerbaar veranderd. Het programma vertrekt vanuit die werkelijkheid.",
            },
            {
              num: "02",
              title: "Toepasbaarheid voor morgen, niet voor over twee jaar",
              body: "Elke les eindigt met iets dat je in je volgende lesweek kunt gebruiken. Geen theorie zonder toepassing.",
            },
            {
              num: "03",
              title: "Verantwoord gebruik is geen bijlage",
              body: "Privacy, bias, transparantie en academische integriteit zitten in de leerlijn, niet als bijlage achterin.",
            },
            {
              num: "04",
              title: "Vakdidactiek centraal — geen one-size-fits-all",
              body: "De casussen, prompts en voorbeelden zijn afgestemd op vo, mbo en hbo en op specifieke vakgebieden.",
            },
          ].map((p) => (
            <li
              key={p.num}
              className="hairline-b flex gap-6 py-5 last:border-0"
            >
              <span className="num-mark w-12 shrink-0 text-[28px] leading-none">
                {p.num}
              </span>
              <div>
                <h4 className="font-display text-[20px] leading-snug text-ink">
                  {p.title}
                </h4>
                <p className="mt-2 max-w-xl text-[14.5px] leading-relaxed text-ink-soft">
                  {p.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

function UpNext() {
  return (
    <Section eyebrow="Verder ontdekken" title="Bronnen en bibliotheken" className="hairline-t">
      <div className="grid gap-6 md:grid-cols-3">
        <ResourceCard
          icon={Sparkles}
          tone="terra"
          eyebrow="60+ prompts"
          title="Promptbibliotheek"
          body="Lesvoorbereiding, differentiatie, feedback, programmeeronderwijs en meer — direct kopieerbaar."
          to="/promptbibliotheek"
        />
        <ResourceCard
          icon={Library}
          tone="academy"
          eyebrow="vo · mbo · hbo"
          title="Praktijkcasussen"
          body="Beschreven uitwerkingen uit echte lessen — met risico's, reflectie en wat het opleverde."
          to="/praktijkcasussen"
        />
        <ResourceCard
          icon={BookOpen}
          tone="sage"
          eyebrow="VABOK"
          title="Project & roadmap"
          body="Hoe de modules zich ontwikkelen, hoe pilots werken, en hoe scholen meedoen."
          to="/project"
        />
      </div>
    </Section>
  );
}

function ResourceCard({ icon: Icon, tone, eyebrow, title, body, to }) {
  const tones = {
    terra: "bg-terra-tint text-terra-deep",
    academy: "bg-academy-tint text-academy-deep",
    sage: "bg-sage-tint text-sage-deep",
  };
  return (
    <Link
      to={to}
      className="card group flex flex-col p-6 transition hover:border-rule-strong hover:shadow-soft focus-ring"
    >
      <div className="flex items-center justify-between">
        <div className={`grid h-9 w-9 place-items-center rounded-lg ${tones[tone]}`}>
          <Icon size={16} strokeWidth={1.7} />
        </div>
        <Footnote>{eyebrow}</Footnote>
      </div>
      <h4 className="mt-5 font-display text-[20px] leading-tight text-ink">
        {title}
      </h4>
      <p className="mt-2 flex-1 text-[14px] leading-relaxed text-ink-soft">
        {body}
      </p>
      <div className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink transition group-hover:translate-x-0.5">
        Open
        <ArrowUpRight size={14} strokeWidth={1.8} />
      </div>
    </Link>
  );
}

function PartnerStrip() {
  return (
    <Section eyebrow="Een samenwerking van" title="VABOK — vier instellingen, één leerlijn" className="hairline-t">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            name: "Veluwse Onderwijsgroep",
            type: "vo",
            note: "Acht scholen, één visie",
          },
          {
            name: "Etty Hillesum Lyceum",
            type: "vo",
            note: "Negen locaties, Deventer",
          },
          { name: "Aventus", type: "mbo", note: "Apeldoorn / Deventer / Zutphen" },
          { name: "Saxion", type: "hbo", note: "Hogeschool · Enschede · Deventer" },
        ].map((p) => (
          <div key={p.name} className="card p-5">
            <div className="flex items-center justify-between">
              <Tag tone={p.type === "vo" ? "terra" : p.type === "mbo" ? "sage" : "academy"}>
                {p.type}
              </Tag>
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                VABOK
              </span>
            </div>
            <div className="mt-4 font-display text-[18px] leading-tight text-ink">
              {p.name}
            </div>
            <div className="mt-1 text-[12.5px] text-ink-mute">{p.note}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
