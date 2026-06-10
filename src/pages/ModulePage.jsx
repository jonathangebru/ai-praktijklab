import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock,
  Target,
  Sparkles,
  CheckCircle2,
  Circle,
  Asterisk,
  BookOpen,
} from "lucide-react";
import { PageHeader, Section, Button, Tag, ProgressBar, Footnote, Divider } from "../components/ui";

export function ModulePage({ module: m, states = {} }) {
  const tone = m.color === "terra" ? "terra" : "academy";
  const completedCount = m.lessons.filter(
    (l) => states[l.slug] === "done"
  ).length;
  const pct = Math.round((completedCount / m.lessons.length) * 100);

  // "Verder waar je was": liefst een les met werk-in-uitvoering, anders de
  // eerste les die nog niet is afgerond.
  const current =
    m.lessons.find((l) => states[l.slug] === "working")?.slug ||
    m.lessons.find((l) => states[l.slug] !== "done")?.slug ||
    null;

  return (
    <>
      <ModuleHero module={m} tone={tone} pct={pct} completedCount={completedCount} />
      <ModuleLessons module={m} states={states} current={current} tone={tone} />
      <ModuleOutcomes module={m} />
      <ModulePraktijk module={m} />
    </>
  );
}

function ModuleHero({ module: m, tone, pct, completedCount }) {
  const accent = tone === "terra" ? "text-terra" : "text-academy";
  return (
    <section className="relative overflow-hidden hairline-b">
      <div aria-hidden="true" className="dot-paper absolute inset-0 opacity-30" />
      <div className="relative grid gap-10 px-10 pb-14 pt-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="mb-4 flex items-center gap-3">
            <Tag tone={tone}>
              <Asterisk size={10} strokeWidth={2.5} />
              Module {m.number}
            </Tag>
            <Tag tone="neutral">{m.audience}</Tag>
            <Tag tone="neutral">{m.level}</Tag>
          </div>
          <div className="num-mark mb-3 text-[56px] leading-none sm:text-[72px] lg:text-[88px]">{m.number}</div>
          <h1 className="font-display max-w-3xl text-balance text-[34px] font-normal leading-[1.05] tracking-tightish text-ink sm:text-[42px] lg:text-[52px] lg:leading-[1.02]">
            {m.title}
          </h1>
          <p className={`mt-3 max-w-2xl font-display text-[20px] italic ${accent}`}>
            {m.tagline}
          </p>
          <p className="mt-6 max-w-2xl text-pretty text-[16px] leading-relaxed text-ink-soft">
            {m.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button variant="accent" to={`/lessen/${m.lessons[0].slug}`}>
              Start eerste les
              <ArrowRight size={14} strokeWidth={1.8} />
            </Button>
            <Button variant="ghost" to="/intake">
              Niet zeker? Doe de intake
            </Button>
          </div>
        </div>

        <aside className="lg:col-span-5">
          <div className="card-elev p-7">
            <div className="flex items-start justify-between">
              <div>
                <Footnote>Mijn voortgang</Footnote>
                <h3 className="mt-1 font-display text-[22px] leading-tight">
                  {completedCount} van {m.lessons.length} lessen
                </h3>
              </div>
              <span className="font-display text-[40px] leading-none text-ink">
                {pct}
                <span className="text-[18px] text-ink-mute">%</span>
              </span>
            </div>
            <div className="mt-5">
              <ProgressBar value={pct} tone={tone} />
            </div>

            <Divider label="Overzicht" className="my-6" />

            <dl className="grid grid-cols-3 gap-3 text-center">
              <Stat label="Duur" value={m.totalHours} />
              <Stat label="Weken" value={m.durationWeeks} />
              <Stat label="Lessen" value={m.lessons.length} />
            </dl>

            <div className="mt-6 rounded-lg bg-paper-deep/70 p-4 text-[12.5px] leading-relaxed text-ink-soft">
              Lessen sluiten elk af met een{" "}
              <span className="display-italic text-ink">praktijkoutput</span>{" "}
              die je morgen al kunt gebruiken. Geen theorie zonder toepassing.
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="hairline rounded-lg bg-paper-card/70 px-3 py-2.5">
      <div className="font-display text-[20px] leading-none text-ink">{value}</div>
      <div className="mt-1 font-mono text-[9.5px] uppercase tracking-widest text-ink-faint">
        {label}
      </div>
    </div>
  );
}

function ModuleLessons({ module: m, states, current, tone }) {
  return (
    <Section eyebrow="Leerlijn" title="Stap voor stap, één leerpad" className="hairline-b">
      <ol className="space-y-3">
        {m.lessons.map((l) => (
          <LessonRow
            key={l.slug}
            lesson={l}
            tone={tone}
            done={states[l.slug] === "done"}
            working={states[l.slug] === "working"}
            current={l.slug === current}
          />
        ))}
      </ol>
    </Section>
  );
}

function LessonRow({ lesson: l, tone, done, working, current }) {
  return (
    <li>
      <Link
        to={`/lessen/${l.slug}`}
        className={`hairline group grid grid-cols-12 items-center gap-5 rounded-xl bg-paper-card px-5 py-5 transition hover:border-rule-strong hover:shadow-soft focus-ring ${
          current ? "ring-2 ring-terra/20" : ""
        }`}
      >
        <div className="col-span-1 flex items-center gap-2">
          <span className="num-mark text-[28px] leading-none">{l.number}</span>
        </div>

        <div className="col-span-7">
          <div className="flex items-center gap-2">
            <Tag tone={done ? "sage" : working ? "terra" : "neutral"}>
              {done ? (
                <CheckCircle2 size={10} strokeWidth={2} />
              ) : (
                <Circle size={10} strokeWidth={2} />
              )}
              {done ? "Afgerond" : working ? "In uitvoering" : l.difficulty}
            </Tag>
            {current && <Tag tone="terra">Verder waar je was</Tag>}
          </div>
          <h3 className="mt-2 font-display text-[20px] leading-snug text-ink">
            {l.title}
          </h3>
          <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-soft">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
              Leerdoel
            </span>{" "}
            {l.goal}
          </p>
        </div>

        <div className="col-span-3 flex flex-col gap-1 text-[12px] text-ink-soft">
          <div className="flex items-center gap-1.5">
            <Clock size={12} strokeWidth={1.7} className="text-ink-mute" />
            {l.duration}
          </div>
          <div className="flex items-center gap-1.5">
            <Sparkles size={12} strokeWidth={1.7} className="text-ink-mute" />
            <span className="line-clamp-1">{l.output}</span>
          </div>
        </div>

        <div className="col-span-1 flex justify-end">
          <span
            className={`grid h-8 w-8 place-items-center rounded-full transition group-hover:translate-x-0.5 ${
              tone === "terra" ? "bg-terra text-paper-card" : "bg-academy text-paper-card"
            }`}
          >
            <ArrowRight size={14} strokeWidth={1.8} />
          </span>
        </div>
      </Link>
    </li>
  );
}

function ModuleOutcomes({ module: m }) {
  return (
    <Section
      eyebrow="Leeruitkomsten"
      title="Aan het eind van deze module"
      className="hairline-b"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {m.learningOutcomes.map((o, i) => (
          <div key={i} className="card flex gap-5 p-6">
            <span className="num-mark shrink-0 text-[32px] leading-none">
              0{i + 1}
            </span>
            <p className="text-[15px] leading-relaxed text-ink">{o}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function ModulePraktijk({ module: m }) {
  return (
    <Section eyebrow="Pas direct toe" title="Vier sporen naar de praktijk">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "Promptbibliotheek",
            body: "Direct kopieerbare prompts per docenttaak.",
            to: "/promptbibliotheek",
            icon: Sparkles,
            tone: "terra",
          },
          {
            title: "Praktijkcasussen",
            body: "Uitgewerkte voorbeelden uit vo, mbo en hbo.",
            to: "/praktijkcasussen",
            icon: BookOpen,
            tone: "academy",
          },
          {
            title: "Mijn promptkit",
            body: "Bewaar wat voor jouw lessen werkt.",
            to: "/promptbibliotheek",
            icon: Target,
            tone: "sage",
          },
          {
            title: "Pilot in je team",
            body: "Hoe je collega's meeneemt in een train-the-teacher.",
            to: "/project",
            icon: Asterisk,
            tone: "terra",
          },
        ].map((c) => (
          <Link
            key={c.title}
            to={c.to}
            className="card group flex flex-col gap-3 p-5 transition hover:border-rule-strong hover:shadow-soft focus-ring"
          >
            <div
              className={`grid h-9 w-9 place-items-center rounded-lg ${
                c.tone === "terra"
                  ? "bg-terra-tint text-terra-deep"
                  : c.tone === "academy"
                  ? "bg-academy-tint text-academy-deep"
                  : "bg-sage-tint text-sage-deep"
              }`}
            >
              <c.icon size={15} strokeWidth={1.7} />
            </div>
            <div className="font-display text-[18px] leading-tight">{c.title}</div>
            <p className="text-[13px] leading-relaxed text-ink-soft">{c.body}</p>
            <span className="mt-1 inline-flex items-center gap-1 text-[12.5px] font-medium text-ink transition group-hover:translate-x-0.5">
              Open
              <ArrowRight size={12} strokeWidth={1.8} />
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
