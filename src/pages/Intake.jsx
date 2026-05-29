import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Compass,
  GraduationCap,
  FlaskConical,
  Sparkles,
  RotateCcw,
} from "lucide-react";
import { PageHeader, Section, Button, Tag, ProgressBar, Footnote } from "../components/ui";

const questions = [
  {
    id: "usage",
    eyebrow: "01 · Praktijk",
    title: "Hoe vaak gebruik je AI-tools zoals ChatGPT, Copilot of Gemini?",
    description: "We bouwen op wat je al gewend bent — er is geen 'fout' antwoord.",
    options: [
      { id: "never", label: "Nooit nog echt", weight: { m1: 3, m2: 0 } },
      { id: "occasional", label: "Af en toe, vooral nieuwsgierig", weight: { m1: 2, m2: 1 } },
      { id: "weekly", label: "Wekelijks, voor specifieke taken", weight: { m1: 1, m2: 2 } },
      { id: "daily", label: "Dagelijks, het zit in mijn werkstijl", weight: { m1: 0, m2: 3 } },
    ],
  },
  {
    id: "useFor",
    eyebrow: "02 · Toepassing",
    title: "Waarvoor gebruik je AI nu al?",
    description: "Selecteer alles wat van toepassing is — minimaal één.",
    multi: true,
    options: [
      { id: "prep", label: "Lesvoorbereiding & materialen", weight: { m1: 1, m2: 1 } },
      { id: "feedback", label: "Feedback en differentiatie", weight: { m1: 1, m2: 1 } },
      { id: "code", label: "Programmeren of debuggen", weight: { m1: 0, m2: 3 } },
      { id: "design", label: "Ontwerpen, prototypen, brainstormen", weight: { m1: 1, m2: 2 } },
      { id: "writing", label: "Schrijven, samenvatten, vertalen", weight: { m1: 2, m2: 1 } },
      { id: "none", label: "Nog niet echt", weight: { m1: 3, m2: 0 } },
    ],
  },
  {
    id: "digital",
    eyebrow: "03 · Vaardigheid",
    title: "Hoe comfortabel ben je met digitale tools in het algemeen?",
    description: "Bedoeld als zelfbeoordeling — niet als test.",
    options: [
      { id: "beginner", label: "Beginnend — leer graag met begeleiding", weight: { m1: 3, m2: 0 } },
      { id: "comfortable", label: "Comfortabel — ik vind meestal mijn weg", weight: { m1: 2, m2: 1 } },
      { id: "advanced", label: "Gevorderd — ik help collega's vaak", weight: { m1: 1, m2: 2 } },
      { id: "expert", label: "Expert — ICT zit in mijn vakgebied", weight: { m1: 0, m2: 3 } },
    ],
  },
  {
    id: "subject",
    eyebrow: "04 · Vakgebied",
    title: "Geef je programmeer-, ontwerp- of ICT-gerelateerde vakken?",
    description: "Dit bepaalt of Module 02 echt voor jou is.",
    options: [
      { id: "yes", label: "Ja, dit is mijn vakgebied", weight: { m1: 0, m2: 3 } },
      { id: "partly", label: "Deels, of incidenteel", weight: { m1: 1, m2: 2 } },
      { id: "no", label: "Nee, andere vakgebieden", weight: { m1: 2, m2: 0 } },
    ],
  },
  {
    id: "goal",
    eyebrow: "05 · Doel",
    title: "Wil je vooral AI praktisch gebruiken in je lessen, of ook begrijpen hoe AI ontwikkelprocessen verandert?",
    description: "Beide kan — kies wat je nu het meest wil.",
    options: [
      { id: "practical", label: "Vooral praktisch — direct toepassen", weight: { m1: 3, m2: 0 } },
      { id: "both", label: "Beide — praktisch én strategisch", weight: { m1: 2, m2: 2 } },
      { id: "process", label: "Vooral hoe AI ontwikkelprocessen verandert", weight: { m1: 0, m2: 3 } },
    ],
  },
  {
    id: "depth",
    eyebrow: "06 · Behoefte",
    title: "Heb je behoefte aan basisuitleg, praktische lesvoorbeelden of verdieping rond AI-assisted development?",
    description: "Combineren mag.",
    multi: true,
    options: [
      { id: "basic", label: "Basisuitleg over AI", weight: { m1: 2, m2: 0 } },
      { id: "examples", label: "Praktische lesvoorbeelden", weight: { m1: 2, m2: 1 } },
      { id: "advanced", label: "Verdieping AI-assisted development", weight: { m1: 0, m2: 3 } },
      { id: "vibe", label: "Vibe coding & nieuwe tools", weight: { m1: 0, m2: 3 } },
    ],
  },
];

export function Intake() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [done, setDone] = useState(false);

  const total = questions.length;
  const current = questions[step];
  const progress = Math.round(((step + (done ? 1 : 0)) / total) * 100);

  const totals = useMemo(() => {
    let m1 = 0,
      m2 = 0;
    for (const q of questions) {
      const a = answers[q.id];
      if (!a) continue;
      const arr = Array.isArray(a) ? a : [a];
      for (const id of arr) {
        const opt = q.options.find((o) => o.id === id);
        if (opt) {
          m1 += opt.weight.m1;
          m2 += opt.weight.m2;
        }
      }
    }
    return { m1, m2 };
  }, [answers]);

  const advice = useMemo(() => {
    const { m1, m2 } = totals;
    if (m1 - m2 >= 4)
      return {
        title: "Start met Module 01 — Basiscursus AI",
        sub: "Een rustige, praktijkgerichte opbouw. Daarna kun je gericht doorpakken in Module 02 of de promptbibliotheek.",
        order: ["m1", "m2"],
        primary: "basiscursus-ai",
      };
    if (m2 - m1 >= 4)
      return {
        title: "Direct door naar Module 02 — AI-geletterdheid & vibe coding",
        sub: "Je hebt voldoende basis en mikt op programmeerdidactiek en AI-assisted development. We bewaren Module 01 als naslagwerk.",
        order: ["m2", "m1"],
        primary: "ai-geletterdheid",
      };
    return {
      title: "Combineer Module 01 en Module 02 in parallel",
      sub: "Je kunt direct in beide modules instappen. Begin met de eerste twee lessen van Module 01 en de tweede les van Module 02 voor een goed startpunt.",
      order: ["m1", "m2"],
      primary: "basiscursus-ai",
    };
  }, [totals]);

  const isAnswered = answers[current?.id] !== undefined &&
    (!Array.isArray(answers[current?.id]) || answers[current?.id].length > 0);

  function choose(opt) {
    if (current.multi) {
      const arr = Array.isArray(answers[current.id]) ? [...answers[current.id]] : [];
      const idx = arr.indexOf(opt.id);
      if (idx === -1) arr.push(opt.id);
      else arr.splice(idx, 1);
      setAnswers({ ...answers, [current.id]: arr });
    } else {
      setAnswers({ ...answers, [current.id]: opt.id });
    }
  }

  function next() {
    if (step + 1 < total) setStep(step + 1);
    else setDone(true);
  }

  function reset() {
    setAnswers({});
    setStep(0);
    setDone(false);
  }

  if (done) return <Result advice={advice} totals={totals} onReset={reset} />;

  return (
    <>
      <PageHeader
        eyebrow="Intake & niveau-inschatting"
        number="↩︎"
        title={
          <>
            Een korte intake.{" "}
            <span className="display-italic text-terra">Acht minuten</span>,
            zodat we jouw leerpad goed laten beginnen.
          </>
        }
        subtitle="Zes vragen, geen voorkennis nodig. Op het einde krijg je een aanbevolen route door de twee modules — die je altijd kunt aanpassen."
        meta={[
          { label: "Vragen", value: `${total}` },
          { label: "Tijd", value: "~ 8 min" },
          { label: "Adaptief", value: "Ja" },
        ]}
      />

      <Section className="!py-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="mb-6 flex items-center justify-between">
              <Footnote>
                Vraag {String(step + 1).padStart(2, "0")} van{" "}
                {String(total).padStart(2, "0")}
              </Footnote>
              <Footnote>Voortgang</Footnote>
            </div>
            <ProgressBar value={progress} tone="terra" />

            <div className="mt-10">
              <Footnote>{current.eyebrow}</Footnote>
              <h2 className="mt-3 font-display text-balance text-[36px] font-normal leading-tight tracking-tightish text-ink">
                {current.title}
              </h2>
              <p className="mt-3 max-w-2xl text-[14.5px] text-ink-soft">
                {current.description}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {current.options.map((opt, i) => {
                  const selected = Array.isArray(answers[current.id])
                    ? answers[current.id].includes(opt.id)
                    : answers[current.id] === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => choose(opt)}
                      className={`group hairline relative flex items-start gap-3 rounded-xl px-4 py-4 text-left transition focus-ring ${
                        selected
                          ? "border-terra bg-terra-tint/60 ring-2 ring-terra/30"
                          : "bg-paper-card hover:bg-paper-deep/50"
                      }`}
                    >
                      <span
                        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border ${
                          selected
                            ? "border-terra bg-terra text-paper-card"
                            : "border-rule-strong bg-paper"
                        }`}
                      >
                        {selected && <Check size={12} strokeWidth={2.5} />}
                      </span>
                      <div>
                        <span className="block text-[14.5px] leading-snug text-ink">
                          {opt.label}
                        </span>
                        <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-widest text-ink-mute">
                          Optie {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-10 flex items-center justify-between">
                <Button
                  variant="ghost"
                  onClick={() => setStep(Math.max(0, step - 1))}
                  className={step === 0 ? "opacity-40 pointer-events-none" : ""}
                >
                  <ArrowLeft size={14} strokeWidth={1.8} />
                  Vorige
                </Button>

                <Button
                  variant="accent"
                  onClick={next}
                  className={!isAnswered ? "opacity-50 pointer-events-none" : ""}
                >
                  {step + 1 === total ? "Toon mijn route" : "Volgende"}
                  <ArrowRight size={14} strokeWidth={1.8} />
                </Button>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="card p-6 sticky top-24">
              <Footnote>Onderweg</Footnote>
              <h3 className="mt-2 font-display text-[20px] leading-tight">
                Wat we meten
              </h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-ink-soft">
                We kijken naar drie dingen: je <em>huidige praktijk</em>, je
                <em> vakcontext</em> en je <em>leervraag</em>. Het advies is een
                voorstel, geen verplichting.
              </p>
              <ul className="mt-5 space-y-3 text-[13px] text-ink-soft">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-terra" />
                  Praktijk · waar je nu bent
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-academy" />
                  Context · vo / mbo / hbo / vakgebied
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                  Leervraag · wat je wil halen
                </li>
              </ul>

              <div className="mt-6 rounded-lg bg-paper-deep/60 p-4">
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-terra" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
                    Privacy
                  </span>
                </div>
                <p className="mt-2 text-[12.5px] leading-relaxed text-ink-soft">
                  Je antwoorden blijven lokaal in deze sessie. Niets wordt
                  zonder akkoord gedeeld met andere VABOK-partners.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}

function Result({ advice, totals, onReset }) {
  const m1 = Math.min(100, Math.round((totals.m1 / 14) * 100));
  const m2 = Math.min(100, Math.round((totals.m2 / 14) * 100));

  return (
    <>
      <PageHeader
        eyebrow="Jouw aanbevolen route"
        number="↪︎"
        title={
          <>
            Een leerpad{" "}
            <span className="display-italic text-terra">op maat</span> voor jou.
          </>
        }
        subtitle="Op basis van je antwoorden stellen we deze route voor. Je kunt op elk moment van pad wisselen of beide modules combineren."
      />

      <Section className="!py-10">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="card-elev p-7">
              <Footnote>Advies</Footnote>
              <h2 className="mt-2 font-display text-[34px] leading-tight text-ink">
                {advice.title}
              </h2>
              <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-ink-soft">
                {advice.sub}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <RouteCard
                  number="01"
                  title="Basiscursus AI"
                  icon={GraduationCap}
                  tone="terra"
                  to="/modules/basiscursus-ai"
                  primary={advice.primary === "basiscursus-ai"}
                  fit={m1}
                />
                <RouteCard
                  number="02"
                  title="AI-geletterdheid"
                  icon={FlaskConical}
                  tone="academy"
                  to="/modules/ai-geletterdheid"
                  primary={advice.primary === "ai-geletterdheid"}
                  fit={m2}
                />
              </div>

              <div className="mt-8 flex items-center justify-between">
                <Button variant="ghost" onClick={onReset}>
                  <RotateCcw size={14} strokeWidth={1.8} />
                  Opnieuw beginnen
                </Button>
                <Button variant="accent" to={`/modules/${advice.primary}`}>
                  Open aanbevolen module
                  <ArrowRight size={14} strokeWidth={1.8} />
                </Button>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="card p-7">
              <Footnote>Context-advies</Footnote>
              <h3 className="mt-2 font-display text-[22px] leading-tight">
                Per onderwijssoort
              </h3>
              <ul className="mt-5 space-y-4">
                <ContextItem
                  level="vo"
                  body="Begin met Module 01. Werk parallel met de Praktijkcasussen voor vo en de Promptbibliotheek voor lesvoorbereiding en differentiatie."
                />
                <ContextItem
                  level="mbo"
                  body="Combineer Module 01 met beroepsgerichte casussen. Voor ICT- of programmeeropleidingen: direct doorpakken in Module 02."
                />
                <ContextItem
                  level="hbo"
                  body="Module 02 sluit aan op projectonderwijs, onderzoek en programmeerdidactiek. Module 01 als naslag voor toetsing en integriteit."
                />
              </ul>

              <div className="hairline-t mt-6 pt-4 text-[12px] text-ink-mute">
                Stem je route ook af met je opleidingsmanager of vakgroep —
                pilots binnen VABOK lopen vaak per team.
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}

function RouteCard({ number, title, icon: Icon, tone, to, primary, fit }) {
  return (
    <Link
      to={to}
      className={`group relative flex flex-col gap-4 rounded-xl border p-5 transition focus-ring ${
        primary
          ? "border-terra/60 bg-terra-tint/40"
          : "border-rule bg-paper-card hover:border-rule-strong"
      }`}
    >
      {primary && (
        <Tag tone="terra" className="absolute right-4 top-4">
          Aanbevolen
        </Tag>
      )}
      <div className="flex items-center gap-3">
        <div
          className={`grid h-10 w-10 place-items-center rounded-lg ${
            tone === "terra" ? "bg-terra-tint text-terra-deep" : "bg-academy-tint text-academy-deep"
          }`}
        >
          <Icon size={18} strokeWidth={1.6} />
        </div>
        <div>
          <Footnote>Module {number}</Footnote>
          <div className="font-display text-[20px] leading-tight">{title}</div>
        </div>
      </div>
      <div>
        <div className="mb-1.5 flex items-baseline justify-between">
          <span className="text-[12px] text-ink-mute">Aansluiting bij jou</span>
          <span className="font-mono text-[11px] text-ink-soft">{fit}%</span>
        </div>
        <div className="h-[3px] w-full overflow-hidden rounded-full bg-paper-deep">
          <div
            className={`h-full rounded-full transition-all ${
              tone === "terra" ? "bg-terra" : "bg-academy"
            }`}
            style={{ width: `${fit}%` }}
          />
        </div>
      </div>
      <span className="mt-1 inline-flex items-center gap-1 text-[13px] font-medium text-ink transition group-hover:translate-x-0.5">
        Open module
        <ArrowRight size={13} strokeWidth={1.8} />
      </span>
    </Link>
  );
}

function ContextItem({ level, body }) {
  const tones = {
    vo: "bg-terra-tint text-terra-deep",
    mbo: "bg-sage-tint text-sage-deep",
    hbo: "bg-academy-tint text-academy-deep",
  };
  return (
    <li className="flex gap-3">
      <span
        className={`h-7 shrink-0 rounded-md px-2 font-mono text-[10px] uppercase leading-7 tracking-widest ${tones[level]}`}
      >
        {level}
      </span>
      <p className="text-[13.5px] leading-relaxed text-ink-soft">{body}</p>
    </li>
  );
}
