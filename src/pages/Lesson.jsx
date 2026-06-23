import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock,
  Target,
  Sparkles,
  CheckCircle2,
  Copy,
  Download,
  Compass,
  MessageSquare,
  Pencil,
  Asterisk,
  Stamp,
  Coffee,
  Lightbulb,
  Layers,
  AlertTriangle,
  TrendingUp,
  BookOpen,
  ChevronDown,
  ChevronRight,
  Play,
} from "lucide-react";
import { AIResponse } from "../components/AIResponse";
import { streamChat, coach, AIError } from "../lib/aiClient";
import { trackEvent } from "../lib/appInsights";
import {
  PageHeader,
  Section,
  Button,
  Tag,
  Footnote,
  Divider,
} from "../components/ui";
import {
  WriteBlock,
  TryItYourself,
  RubricSelfRater,
  ReflectionWriter,
  MijnWerkPanel,
  MijnWerkAfsluiting,
} from "../components/lesson-actions";
import {
  CasusLab,
  CasusBespreking,
  PromptLab,
  PraktijkOpdracht,
  KnowledgeCheck,
  InlineCoachCallout,
} from "../components/lesson-formats";
import { findLesson } from "../data/modules";
import { lessonDetails, defaultLesson } from "../data/lessonDetails";
import { useLessonWork } from "../hooks/useLessonWork";
import { isDone, setDone } from "../lib/voortgang";

export function Lesson() {
  const { slug } = useParams();
  const found = findLesson(slug);
  const work = useLessonWork(slug);

  if (!found) return <NotFound />;
  const { lesson, module: m } = found;
  const detail = lessonDetails[slug] || defaultLesson(lesson, m);
  const tone = m.color === "terra" ? "terra" : "academy";
  const interactiveFormats = [
    "diepteles",
    "casuslab",
    "casusbespreking",
    "promptlab",
    "praktijkopdracht",
    "kennischeck",
  ];
  const isInteractive = interactiveFormats.includes(detail.format);

  return (
    <>
      <LessonHero lesson={lesson} module={m} tone={tone} detail={detail} />
      <div className="grid gap-10 px-5 py-8 sm:px-8 lg:grid-cols-12 lg:px-10 lg:py-10">
        <main className="space-y-14 lg:col-span-8">
          {detail.opening && <Opening detail={detail} />}
          {detail.conceptueel && <ConceptueleBasis detail={detail} />}
          {detail.learningGoals && <Summary detail={detail} />}
          {detail.scenario && <Scenario detail={detail} />}
          {detail.steps && (
            <Steps detail={detail} work={isInteractive ? work : null} />
          )}
          {detail.format === "casuslab" && detail.cases && (
            <CasusLab detail={detail} work={isInteractive ? work : null} />
          )}
          {detail.format === "casusbespreking" && detail.cases && (
            <CasusBespreking
              detail={detail}
              work={isInteractive ? work : null}
            />
          )}
          {detail.format === "promptlab" && detail.rounds && (
            <PromptLab detail={detail} work={isInteractive ? work : null} />
          )}
          {detail.format === "praktijkopdracht" && detail.paths && (
            <PraktijkOpdracht
              detail={detail}
              work={isInteractive ? work : null}
            />
          )}
          {detail.format === "kennischeck" && detail.checkItems && (
            <KnowledgeCheck
              detail={detail}
              work={isInteractive ? work : null}
            />
          )}
          {detail.workedExamples ? (
            <WorkedExamples
              detail={detail}
              work={isInteractive ? work : null}
              lesson={lesson}
            />
          ) : (
            detail.examples && <PromptExamples detail={detail} />
          )}
          {detail.vakvariaties && <Vakvariaties detail={detail} />}
          {detail.valkuilen && <Valkuilen detail={detail} />}
          {detail.geoefendSpoor && <GeoefendSpoor detail={detail} />}
          {detail.eindcriteria &&
            (isInteractive ? (
              <RubricSelfRater detail={detail} work={work} />
            ) : (
              <Eindcriteria detail={detail} />
            ))}
          {detail.reflection &&
            (isInteractive ? (
              <ReflectionWriter detail={detail} work={work} />
            ) : (
              <Reflection detail={detail} />
            ))}
          {detail.verderLezen && <VerderLezen detail={detail} />}
          {isInteractive && (
            <MijnWerkAfsluiting
              work={work}
              detail={detail}
              lesson={lesson}
              module={m}
            />
          )}
        </main>
        <Sidebar
          lesson={lesson}
          module={m}
          tone={tone}
          detail={detail}
          work={isInteractive ? work : null}
        />
      </div>
      <NextLessonStrip lesson={lesson} module={m} detail={detail} />
    </>
  );
}

function LessonHero({ lesson, module: m, tone, detail }) {
  return (
    <section className="relative hairline-b">
      <div aria-hidden="true" className="grid-paper absolute inset-0 opacity-40" />
      <div className="relative px-5 pb-8 pt-8 sm:px-8 lg:px-10 lg:pb-10 lg:pt-10">
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <Link
            to={`/modules/${m.id}`}
            className="inline-flex items-center gap-1.5 text-[12.5px] text-ink-mute hover:text-ink"
          >
            <ArrowLeft size={13} strokeWidth={1.8} />
            Terug naar {m.title}
          </Link>
          <span className="text-ink-faint">/</span>
          <Tag tone={tone}>Module {m.number}</Tag>
          <Tag tone="neutral">{lesson.difficulty}</Tag>
        </div>

        <div className="num-mark mb-3 text-[44px] leading-none">{lesson.number}</div>
        <h1 className="font-display max-w-4xl text-balance text-[34px] font-normal leading-[1.05] tracking-tightish text-ink sm:text-[44px] lg:text-[52px] lg:leading-[1.02]">
          {lesson.title}
        </h1>

        <p className="mt-6 max-w-3xl text-pretty text-[16.5px] leading-relaxed text-ink-soft">
          {detail.summary}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12.5px] text-ink-mute">
          <span className="flex items-center gap-2">
            <Clock size={13} strokeWidth={1.7} className="text-ink-faint" />
            {detail.duration?.total || lesson.duration}
          </span>
          <span className="flex items-center gap-2">
            <Target size={13} strokeWidth={1.7} className="text-ink-faint" />
            {lesson.goal}
          </span>
          <span className="flex items-center gap-2">
            <Sparkles size={13} strokeWidth={1.7} className="text-ink-faint" />
            Output: {lesson.output}
          </span>
        </div>

        {detail.duration?.blocks && <DurationStrip blocks={detail.duration.blocks} />}
      </div>
    </section>
  );
}

function DurationStrip({ blocks }) {
  const total = blocks.reduce((sum, b) => sum + b.min, 0);
  return (
    <div className="mt-10 max-w-4xl">
      <div className="mb-2 flex items-baseline justify-between">
        <Footnote>Tijdsbudget · {total} min</Footnote>
        <span className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
          {blocks.length} blokken
        </span>
      </div>
      <div className="hairline flex h-2 overflow-hidden rounded-full bg-paper-card">
        {blocks.map((b, i) => (
          <div
            key={i}
            className={`h-full ${
              i % 2 === 0 ? "bg-terra/70" : "bg-terra-soft/60"
            } transition-all`}
            style={{ width: `${(b.min / total) * 100}%` }}
            title={`${b.label} · ${b.min} min`}
          />
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-[11.5px] text-ink-mute">
        {blocks.map((b, i) => (
          <span key={i} className="flex items-center gap-1.5">
            <span
              className={`inline-block h-1.5 w-1.5 rounded-full ${
                i % 2 === 0 ? "bg-terra/70" : "bg-terra-soft/60"
              }`}
            />
            <span className="text-ink-soft">{b.label}</span>
            <span className="font-mono text-[10.5px] text-ink-faint">{b.min}m</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Summary({ detail }) {
  return (
    <article>
      <Footnote>Leerdoelen</Footnote>
      <h2 className="mt-2 font-display text-[28px] leading-tight">
        Wat je na deze les kunt
      </h2>
      <ul className="mt-6 space-y-3">
        {detail.learningGoals.map((g, i) => (
          <li
            key={i}
            className="hairline flex items-start gap-4 rounded-xl bg-paper-card p-5"
          >
            <span className="num-mark shrink-0 text-[22px] leading-none">
              0{i + 1}
            </span>
            <p className="text-[15px] leading-relaxed text-ink">{g}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}

function Scenario({ detail }) {
  return (
    <article className="hairline-t pt-10">
      <Footnote>{detail.scenario.title}</Footnote>
      <h2 className="mt-2 font-display text-[28px] leading-tight">
        Een lessituatie om mee te beginnen
      </h2>

      <div className="mt-6 rounded-2xl bg-paper-deep/40 p-7">
        <p className="font-display text-[20px] leading-relaxed text-ink-soft">
          <span className="num-mark mr-1 text-[28px] text-terra/40">“</span>
          {detail.scenario.context}
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <ScenarioMeta label="Rol" value={detail.scenario.role} />
          <ScenarioMeta label="Tools" value={detail.scenario.tools} />
        </div>
      </div>
    </article>
  );
}

function ScenarioMeta({ label, value }) {
  return (
    <div className="hairline rounded-lg bg-paper-card px-4 py-3">
      <div className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
        {label}
      </div>
      <div className="mt-0.5 text-[14px] text-ink">{value}</div>
    </div>
  );
}

function Steps({ detail, work }) {
  return (
    <article id="stappen" className="hairline-t pt-10">
      <Footnote>Werkvorm</Footnote>
      <h2 className="mt-2 font-display text-[28px] leading-tight">
        Stappenplan
      </h2>
      <ol className="mt-6 space-y-1">
        {detail.steps.map((s, i) => (
          <li key={i} className="grid grid-cols-[60px_1fr] gap-5 py-5 hairline-b last:border-0">
            <span className="num-mark text-[28px] leading-none">
              0{i + 1}
            </span>
            <div>
              <div className="flex flex-wrap items-baseline gap-3">
                <h3 className="font-display text-[19px] leading-snug text-ink">
                  {s.title}
                </h3>
                {s.time && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-paper-deep/60 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-ink-mute">
                    <Clock size={10} strokeWidth={1.8} />
                    {s.time}
                  </span>
                )}
              </div>
              <p className="mt-2 max-w-prose text-[14.5px] leading-relaxed text-ink-soft">
                {s.body}
              </p>
              {s.voorbeeld && (
                <div className="mt-3 border-l-2 border-terra-soft/60 bg-terra-tint/30 px-4 py-3 max-w-prose">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-terra-deep/80 mb-1">
                    Voorbeeld
                  </div>
                  <p className="text-[13.5px] leading-relaxed text-ink-soft italic">
                    {s.voorbeeld}
                  </p>
                </div>
              )}
              {work && s.workspace && (
                <WriteBlock
                  work={work}
                  field={s.workspace.field}
                  label={s.workspace.label}
                  hint={s.workspace.hint}
                  placeholder={s.workspace.placeholder}
                  rows={s.workspace.rows}
                  coachContext={{
                    stepTitle: s.title,
                    stepBody: s.body,
                    voorbeeld: s.voorbeeld,
                    label: s.workspace.label,
                    hint: s.workspace.hint,
                    rubric: s.workspace.rubric,
                    referenceAnswer: s.workspace.referenceAnswer,
                  }}
                />
              )}
            </div>
          </li>
        ))}
      </ol>
    </article>
  );
}

function PromptExamples({ detail }) {
  return (
    <article className="hairline-t pt-10">
      <Footnote>Promptvoorbeelden</Footnote>
      <h2 className="mt-2 font-display text-[28px] leading-tight">
        Promptkit voor deze les
      </h2>
      <p className="mt-3 max-w-2xl text-[14.5px] text-ink-soft">
        Direct kopieerbaar. Pas wat tussen [haakjes] staat aan op jouw situatie
        voor je verstuurt.
      </p>

      <div className="mt-6 space-y-4">
        {detail.examples.map((p, i) => (
          <PromptCard key={i} prompt={p} index={i} />
        ))}
      </div>
    </article>
  );
}

function PromptCard({ prompt, index }) {
  const [copied, setCopied] = useState(false);
  function copy() {
    navigator.clipboard?.writeText(prompt.body || prompt.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }
  return (
    <div className="card-elev overflow-hidden">
      <div className="hairline-b flex items-center justify-between px-5 py-3">
        <div className="flex items-center gap-3">
          <span className="num-mark text-[18px] leading-none">
            P.{String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-[14px] font-medium text-ink">{prompt.title}</span>
        </div>
        <button
          onClick={copy}
          className="inline-flex items-center gap-1.5 rounded-md border border-rule bg-paper-card px-2.5 py-1.5 font-mono text-[10.5px] uppercase tracking-widest text-ink-soft hover:border-rule-strong hover:text-ink focus-ring"
        >
          {copied ? (
            <>
              <Check size={11} strokeWidth={2} className="text-sage" />
              gekopieerd
            </>
          ) : (
            <>
              <Copy size={11} strokeWidth={2} />
              kopieer
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto bg-paper px-5 py-4 font-mono text-[13px] leading-relaxed text-ink whitespace-pre-wrap">
        {prompt.prompt}
      </pre>
    </div>
  );
}

function Reflection({ detail }) {
  return (
    <article id="reflectie" className="hairline-t pt-10">
      <Footnote>Reflectie</Footnote>
      <h2 className="mt-2 font-display text-[28px] leading-tight">
        Vragen om mee te nemen
      </h2>
      <ul className="mt-6 space-y-3">
        {detail.reflection.map((r, i) => (
          <li
            key={i}
            className="flex items-start gap-4 rounded-xl bg-academy-tint/40 p-5"
          >
            <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-academy text-paper-card">
              <MessageSquare size={11} strokeWidth={2} />
            </span>
            <p className="font-display text-[18px] italic leading-snug text-academy-deep">
              {r}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}

/* ─────────────────────────────────────────────────────────────────────── */
/*  Rich-format sections (only used when detail provides the data)         */
/* ─────────────────────────────────────────────────────────────────────── */

function Opening({ detail }) {
  const paragraphs = detail.opening.aanleiding.split("\n\n");
  return (
    <article id="aanleiding">
      <div className="flex items-center gap-3">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-terra/10 text-terra">
          <Coffee size={13} strokeWidth={1.7} />
        </span>
        <Footnote>{detail.opening.eyebrow || "Aanleiding"}</Footnote>
      </div>
      <h2 className="mt-3 font-display text-[32px] leading-[1.1] tracking-tightish text-ink">
        Waarom dit nu op je bord ligt.
      </h2>

      <div className="prose-block mt-6 space-y-4 max-w-prose">
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className={`text-[15.5px] leading-[1.7] ${
              i === 0 ? "text-ink" : "text-ink-soft"
            }`}
          >
            {p}
          </p>
        ))}
      </div>

      {detail.opening.waaromNu && (
        <div className="mt-6 max-w-prose rounded-xl bg-paper-deep/40 px-5 py-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-px w-6 bg-terra-soft" />
            <Footnote>Waarom nu</Footnote>
          </div>
          <p className="text-[14px] leading-relaxed text-ink-soft">
            {detail.opening.waaromNu}
          </p>
        </div>
      )}
    </article>
  );
}

function ConceptueleBasis({ detail }) {
  const paragraphs = detail.conceptueel.intro.split("\n\n");
  const mm = detail.conceptueel.mentalModel;
  const kb = detail.conceptueel.kernbegrippen || [];
  return (
    <article id="conceptueel" className="hairline-t pt-10">
      <div className="flex items-center gap-3">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-academy/15 text-academy-deep">
          <Lightbulb size={13} strokeWidth={1.7} />
        </span>
        <Footnote>{detail.conceptueel.eyebrow || "Conceptueel kader"}</Footnote>
      </div>
      <h2 className="mt-3 font-display text-[32px] leading-[1.1] tracking-tightish text-ink">
        Het denkkader achter goede AI-voorbereiding.
      </h2>

      <div className="mt-6 space-y-4 max-w-prose">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-[15px] leading-[1.7] text-ink-soft">
            {p}
          </p>
        ))}
      </div>

      {mm && (
        <div className="mt-8 card-elev overflow-hidden">
          <div className="hairline-b grid grid-cols-[140px_1fr] items-stretch">
            <div className="flex items-center justify-center bg-academy-tint/60 p-6">
              <div className="text-center">
                <Footnote>Mental model</Footnote>
                <div className="mt-2 font-display text-[40px] leading-none text-academy-deep">
                  M.
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-[22px] leading-tight text-ink">
                {mm.naam}
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">
                {mm.beschrijving}
              </p>
            </div>
          </div>
        </div>
      )}

      {kb.length > 0 && (
        <div className="mt-8">
          <Footnote>Kernbegrippen</Footnote>
          <dl className="mt-4 grid gap-3 sm:grid-cols-2">
            {kb.map((k, i) => (
              <div key={i} className="hairline rounded-xl bg-paper-card p-5">
                <dt className="font-display text-[17px] leading-snug text-ink">
                  {k.term}
                </dt>
                <dd className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">
                  {k.uitleg}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </article>
  );
}

function WorkedExamples({ detail, work, lesson }) {
  return (
    <article id="voorbeelden" className="hairline-t pt-10">
      <Footnote>Doorgewerkte voorbeelden</Footnote>
      <h2 className="mt-2 font-display text-[28px] leading-tight">
        Prompts met voorbeeld-output en commentaar
      </h2>
      <p className="mt-3 max-w-2xl text-[14.5px] text-ink-soft">
        Niet alleen de prompt — ook wat AI ongeveer teruggeeft en wat je
        ermee moet voor het bruikbaar wordt voor jouw klas.
      </p>

      <div className="mt-6 space-y-6">
        {detail.workedExamples.map((ex, i) => (
          <WorkedExampleCard
            key={i}
            example={ex}
            index={i}
            work={work}
            lesson={lesson}
          />
        ))}
      </div>
    </article>
  );
}

function WorkedExampleCard({ example, index, work, lesson }) {
  const [copied, setCopied] = useState(false);
  const [showOutput, setShowOutput] = useState(true);

  /* AI streaming state */
  const [aiResponse, setAiResponse] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [aiStreaming, setAiStreaming] = useState(false);
  const [aiError, setAiError] = useState(null);
  const [lastSource, setLastSource] = useState(null); // 'model' | 'own'
  const abortRef = useRef(null);

  /* AI coach state (vergelijkt eigen prompt met modelprompt) */
  const [coachState, setCoachState] = useState({
    feedback: "",
    suggestions: [],
    loading: false,
    error: null,
  });
  const coachAbortRef = useRef(null);

  const userPrompt = work && example.tryItYourself
    ? (work.get(example.tryItYourself.field) || "").trim()
    : "";

  function copy() {
    navigator.clipboard?.writeText(example.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  async function runAI(source) {
    const promptText = source === "own" ? userPrompt : example.prompt;
    if (!promptText) return;

    // Cancel een eventueel lopende stream
    if (abortRef.current) {
      try {
        abortRef.current.abort();
      } catch { /* ignore */ }
    }
    const ac = new AbortController();
    abortRef.current = ac;

    setAiResponse("");
    setAiError(null);
    setAiLoading(true);
    setAiStreaming(false);
    setLastSource(source);
    trackEvent("worked-example-ai-tried", {
      lesson: lesson?.slug,
      example: example.title,
      source,
    });

    try {
      const gen = streamChat({
        messages: [
          {
            role: "system",
            content:
              "Je bent een AI-assistent voor docenten. Antwoord beknopt, didactisch verantwoord, in het Nederlands. Voeg geen vleierij toe.",
          },
          { role: "user", content: promptText },
        ],
        signal: ac.signal,
      });
      let first = true;
      for await (const chunk of gen) {
        if (first) {
          setAiLoading(false);
          setAiStreaming(true);
          first = false;
        }
        setAiResponse((s) => s + chunk);
      }
    } catch (err) {
      if (err?.name === "AbortError") return;
      const msg =
        err instanceof AIError
          ? err.message
          : "Er ging iets mis met de AI-aanroep.";
      setAiError(msg);
    } finally {
      setAiLoading(false);
      setAiStreaming(false);
      abortRef.current = null;
    }
  }

  function closeAI() {
    if (abortRef.current) {
      try {
        abortRef.current.abort();
      } catch { /* ignore */ }
    }
    setAiResponse("");
    setAiError(null);
    setAiLoading(false);
    setAiStreaming(false);
    setLastSource(null);
  }

  async function runCoach() {
    if (!userPrompt || coachState.loading) return;
    if (coachAbortRef.current) {
      try {
        coachAbortRef.current.abort();
      } catch { /* ignore */ }
    }
    const ac = new AbortController();
    coachAbortRef.current = ac;
    setCoachState({
      feedback: "",
      suggestions: [],
      loading: true,
      error: null,
    });
    try {
      const res = await coach({
        mode: "prompt",
        input: userPrompt,
        context: { modelPrompt: example.prompt },
        signal: ac.signal,
      });
      setCoachState({
        feedback: res.feedback || "",
        suggestions: res.suggestions || [],
        loading: false,
        error: null,
      });
      trackEvent("worked-example-coach", {
        lesson: lesson?.slug,
        example: example.title,
      });
    } catch (err) {
      if (err?.name === "AbortError") return;
      const msg =
        err instanceof AIError
          ? err.message
          : "AI-coach werkte even niet. Probeer 't zo nog eens.";
      setCoachState({
        feedback: "",
        suggestions: [],
        loading: false,
        error: msg,
      });
    }
  }

  function closeCoach() {
    if (coachAbortRef.current) {
      try {
        coachAbortRef.current.abort();
      } catch { /* ignore */ }
    }
    setCoachState({
      feedback: "",
      suggestions: [],
      loading: false,
      error: null,
    });
  }

  useEffect(() => {
    return () => {
      if (abortRef.current) {
        try {
          abortRef.current.abort();
        } catch { /* ignore */ }
      }
      if (coachAbortRef.current) {
        try {
          coachAbortRef.current.abort();
        } catch { /* ignore */ }
      }
    };
  }, []);

  const isBusy = aiLoading || aiStreaming;
  const hasOwn = userPrompt.length > 0;

  return (
    <div className="card-elev overflow-hidden">
      <div className="hairline-b flex items-center justify-between px-5 py-3">
        <div className="flex items-center gap-3">
          <span className="num-mark text-[18px] leading-none">
            E.{String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-[14px] font-medium text-ink">
            {example.title}
          </span>
        </div>
        <button
          onClick={copy}
          className="inline-flex items-center gap-1.5 rounded-md border border-rule bg-paper-card px-2.5 py-1.5 font-mono text-[10.5px] uppercase tracking-widest text-ink-soft hover:border-rule-strong hover:text-ink focus-ring"
        >
          {copied ? (
            <>
              <Check size={11} strokeWidth={2} className="text-sage" />
              gekopieerd
            </>
          ) : (
            <>
              <Copy size={11} strokeWidth={2} />
              kopieer prompt
            </>
          )}
        </button>
      </div>

      <div className="grid lg:grid-cols-[1fr_1fr] divide-rule lg:divide-x">
        <div className="bg-paper-deep/30 p-5">
          <Footnote>Prompt</Footnote>
          <pre className="mt-2 overflow-x-auto font-mono text-[12.5px] leading-relaxed text-ink whitespace-pre-wrap">
            {example.prompt}
          </pre>
        </div>
        <div className="p-5">
          <button
            onClick={() => setShowOutput((v) => !v)}
            className="flex items-center gap-2 mb-2 group focus-ring rounded"
          >
            {showOutput ? (
              <ChevronDown size={12} strokeWidth={1.8} className="text-ink-mute" />
            ) : (
              <ChevronRight size={12} strokeWidth={1.8} className="text-ink-mute" />
            )}
            <Footnote>Voorbeeld-output</Footnote>
          </button>
          {showOutput && (
            <pre className="mt-1 overflow-x-auto whitespace-pre-wrap font-sans text-[13px] leading-relaxed text-ink-soft">
              {example.voorbeeldOutput}
            </pre>
          )}
        </div>
      </div>

      {example.commentaar && (
        <div className="hairline-t bg-terra-tint/30 px-5 py-4">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-terra/15 text-terra">
              <Pencil size={10} strokeWidth={2} />
            </span>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-terra-deep mb-1.5">
                Wat doe je ermee
              </div>
              <p className="text-[13.5px] leading-relaxed text-ink">
                {example.commentaar}
              </p>
            </div>
          </div>
        </div>
      )}
      {work && example.tryItYourself && (
        <TryItYourself
          work={work}
          field={example.tryItYourself.field}
          label={example.tryItYourself.label}
          hint={example.tryItYourself.hint}
          example={example.tryItYourself.example}
          source={{
            title: example.title,
            source: lesson?.title || "Lesopzet",
            lesson: lesson?.slug,
          }}
        />
      )}

      <div className="hairline-t bg-paper-deep/20 px-5 py-4">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => runAI("model")}
            disabled={isBusy}
            aria-label="Voorbeeld uitvoeren met AI"
            className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-widest transition focus-ring ${
              isBusy
                ? "bg-paper-deep/60 text-ink-faint cursor-not-allowed"
                : "bg-ink text-paper-card hover:bg-ink-soft"
            }`}
          >
            <Play size={10} strokeWidth={2} />
            Run voorbeeld
          </button>
          {work && example.tryItYourself && (
            <button
              type="button"
              onClick={() => runAI("own")}
              disabled={isBusy || !hasOwn}
              aria-label="Je eigen versie uitvoeren met AI"
              className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-widest transition focus-ring ${
                isBusy || !hasOwn
                  ? "border border-rule bg-paper-card/60 text-ink-faint cursor-not-allowed"
                  : "border border-terra/40 bg-terra-tint/30 text-terra-deep hover:bg-terra-tint/60"
              }`}
            >
              <Play size={10} strokeWidth={2} />
              Run mijn versie
            </button>
          )}
          {work && example.tryItYourself && (
            <button
              type="button"
              onClick={runCoach}
              disabled={coachState.loading || !hasOwn}
              aria-label="AI-coach: jouw prompt vergelijken met het voorbeeld"
              className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-widest transition focus-ring ${
                coachState.loading || !hasOwn
                  ? "border border-rule bg-paper-card/60 text-ink-faint cursor-not-allowed"
                  : "border border-academy/30 bg-academy-tint/40 text-academy-deep hover:bg-academy-tint/70"
              }`}
            >
              <Sparkles size={10} strokeWidth={1.8} />
              {coachState.loading ? "AI denkt mee…" : "Coach mijn versie"}
            </button>
          )}
          <p className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
            Antwoord verschijnt hieronder — live.
          </p>
        </div>

        <AIResponse
          response={aiResponse}
          loading={aiLoading}
          streaming={aiStreaming}
          error={aiError}
          onRegenerate={
            lastSource ? () => runAI(lastSource) : undefined
          }
          onClose={
            aiResponse || aiError || isBusy ? closeAI : undefined
          }
          footnote={
            lastSource === "own"
              ? "AI · jouw prompt"
              : "AI · modelprompt"
          }
        />

        {(coachState.loading ||
          coachState.feedback ||
          coachState.error) && (
          <InlineCoachCallout
            feedback={coachState.feedback}
            suggestions={coachState.suggestions}
            loading={coachState.loading}
            error={coachState.error}
            onRetry={runCoach}
            onClose={closeCoach}
          />
        )}
      </div>
    </div>
  );
}

function Vakvariaties({ detail }) {
  const [open, setOpen] = useState(0);
  return (
    <article id="vakvariaties" className="hairline-t pt-10">
      <div className="flex items-center gap-3">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-sage/15 text-sage-deep">
          <Layers size={13} strokeWidth={1.7} />
        </span>
        <Footnote>Vakvariaties</Footnote>
      </div>
      <h2 className="mt-3 font-display text-[28px] leading-tight">
        Hoe pakt dit uit in jouw vak?
      </h2>
      <p className="mt-3 max-w-2xl text-[14.5px] text-ink-soft">
        De werkstructuur is universeel; de accenten verschillen per vak. Klap
        je vak open voor specifieke aandachtspunten.
      </p>

      <div className="mt-6 space-y-2">
        {detail.vakvariaties.map((v, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              className={`hairline rounded-xl overflow-hidden transition ${
                isOpen ? "bg-paper-card" : "bg-paper"
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-3.5 text-left focus-ring"
              >
                <div className="flex items-center gap-3">
                  <span className="num-mark text-[14px] leading-none text-ink-mute">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[16px] text-ink">
                    {v.vak}
                  </span>
                </div>
                <span
                  className={`text-ink-mute transition-transform ${
                    isOpen ? "rotate-90" : ""
                  }`}
                >
                  <ChevronRight size={14} strokeWidth={1.8} />
                </span>
              </button>
              {isOpen && (
                <div className="px-5 pb-5 pt-1">
                  <p className="max-w-prose text-[14px] leading-relaxed text-ink-soft">
                    {v.body}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </article>
  );
}

function Valkuilen({ detail }) {
  return (
    <article id="valkuilen" className="hairline-t pt-10">
      <div className="flex items-center gap-3">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-terra/15 text-terra">
          <AlertTriangle size={13} strokeWidth={1.7} />
        </span>
        <Footnote>Valkuilen</Footnote>
      </div>
      <h2 className="mt-3 font-display text-[28px] leading-tight">
        Wat er vaak misgaat — en wat erop helpt.
      </h2>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {detail.valkuilen.map((v, i) => (
          <div
            key={i}
            className="hairline relative rounded-2xl bg-paper-card p-5"
          >
            <div className="absolute -top-2.5 left-5 inline-flex items-center gap-1.5 rounded-full border border-terra-soft/60 bg-paper px-2 py-0.5 font-mono text-[9.5px] uppercase tracking-widest text-terra-deep">
              Valkuil {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="mt-2 font-display text-[17px] leading-snug text-ink">
              {v.titel}
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">
              {v.watGebeurtEr}
            </p>
            <div className="mt-3 hairline-t pt-3">
              <div className="font-mono text-[10px] uppercase tracking-widest text-sage-deep mb-1">
                Fix
              </div>
              <p className="text-[13px] leading-relaxed text-ink">{v.fix}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function GeoefendSpoor({ detail }) {
  const g = detail.geoefendSpoor;
  return (
    <article id="geoefend" className="hairline-t pt-10">
      <div className="relative overflow-hidden rounded-2xl bg-ink p-8 text-paper-card">
        <div
          aria-hidden="true"
          className="grid-paper absolute inset-0 opacity-[0.07]"
        />
        <div className="relative">
          <div className="flex items-center gap-3">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-paper-card/15 text-paper-card">
              <TrendingUp size={13} strokeWidth={1.7} />
            </span>
            <span className="font-mono text-[10.5px] uppercase tracking-widest text-paper-card/70">
              {g.eyebrow || "Voor de geoefende docent"}
            </span>
          </div>
          <h3 className="mt-4 font-display text-[26px] leading-tight max-w-2xl">
            {g.titel}
          </h3>
          <p className="mt-4 max-w-2xl text-[14.5px] leading-relaxed text-paper-card/85">
            {g.beschrijving}
          </p>
          {g.opdracht && (
            <div className="mt-5 inline-flex max-w-2xl items-start gap-3 rounded-lg bg-paper-card/10 px-4 py-3">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-terra text-paper-card">
                <Asterisk size={10} strokeWidth={2.5} />
              </span>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-paper-card/60 mb-0.5">
                  Opdracht
                </div>
                <p className="text-[13.5px] leading-relaxed text-paper-card">
                  {g.opdracht}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

function Eindcriteria({ detail }) {
  return (
    <article id="eindcriteria" className="hairline-t pt-10">
      <Footnote>Eindcriteria</Footnote>
      <h2 className="mt-2 font-display text-[28px] leading-tight">
        Wanneer is je opzet écht klaar?
      </h2>
      <p className="mt-3 max-w-2xl text-[14.5px] text-ink-soft">
        Drie niveaus per criterium. Onder niveau = nog niet uit te delen. Op
        niveau = klaar voor de klas. Boven niveau = klaar om te delen met je
        vaksectie.
      </p>

      <div className="mt-6 overflow-hidden hairline rounded-xl">
        <table className="w-full text-left text-[13px]">
          <thead className="bg-paper-deep/50">
            <tr className="text-ink-mute">
              <th className="px-4 py-3 font-mono text-[10px] uppercase tracking-widest">
                Criterium
              </th>
              <th className="px-4 py-3 font-mono text-[10px] uppercase tracking-widest">
                Onder niveau
              </th>
              <th className="px-4 py-3 font-mono text-[10px] uppercase tracking-widest">
                Op niveau
              </th>
              <th className="px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-sage-deep">
                Boven niveau
              </th>
            </tr>
          </thead>
          <tbody>
            {detail.eindcriteria.map((c, i) => (
              <tr
                key={i}
                className={`hairline-t ${
                  i % 2 === 0 ? "bg-paper" : "bg-paper-card/50"
                }`}
              >
                <th className="px-4 py-3 align-top font-display text-[14px] font-normal text-ink">
                  {c.criterium}
                </th>
                <td className="px-4 py-3 align-top text-ink-mute">{c.onder}</td>
                <td className="px-4 py-3 align-top text-ink">{c.op}</td>
                <td className="px-4 py-3 align-top text-sage-deep">
                  {c.boven}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}

function VerderLezen({ detail }) {
  return (
    <article id="verder" className="hairline-t pt-10">
      <div className="flex items-center gap-3">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-academy/15 text-academy-deep">
          <BookOpen size={13} strokeWidth={1.7} />
        </span>
        <Footnote>Verder lezen</Footnote>
      </div>
      <h2 className="mt-3 font-display text-[28px] leading-tight">
        Vier bronnen voor wie dieper wil.
      </h2>

      <ul className="mt-6 divide-y divide-rule hairline-t hairline-b">
        {detail.verderLezen.map((r, i) => (
          <li key={i}>
            <a
              href={r.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-2 py-5 transition hover:bg-paper-card/40 sm:flex-row sm:items-start sm:gap-6"
            >
              <div className="font-mono text-[10.5px] uppercase tracking-widest text-ink-faint sm:w-28 sm:shrink-0 sm:pt-1">
                {r.bron} · {r.jaar}
              </div>
              <div className="flex-1">
                <h3 className="font-display text-[18px] leading-snug text-ink group-hover:text-terra-deep flex items-center gap-2">
                  {r.titel}
                  <ArrowUpRight
                    size={13}
                    strokeWidth={1.8}
                    className="text-ink-mute transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </h3>
                <p className="mt-1 max-w-prose text-[13px] text-ink-soft">
                  {r.waarom}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}

function Sidebar({ lesson, module: m, tone, detail, work }) {
  const [checked, setChecked] = useState({});
  const [done, setDoneState] = useState(() => isDone(lesson.slug));
  useEffect(() => {
    const sync = () => setDoneState(isDone(lesson.slug));
    sync();
    window.addEventListener("praktijklab:voortgang", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("praktijklab:voortgang", sync);
      window.removeEventListener("storage", sync);
    };
  }, [lesson.slug]);
  const checklist = detail.checklist || [];
  const total = checklist.length || 1;
  const completed = Object.values(checked).filter(Boolean).length;

  function toggle(i) {
    setChecked((c) => ({ ...c, [i]: !c[i] }));
  }

  return (
    <aside className="space-y-6 lg:col-span-4">
      {work && (
        <div className="sticky top-24">
          <MijnWerkPanel
            work={work}
            detail={detail}
            lesson={lesson}
            module={m}
          />
        </div>
      )}
      <div className={`card-elev p-6 ${work ? "" : "sticky top-24"}`}>
        <Footnote>Lesoutput · checklist</Footnote>
        <h3 className="mt-1 font-display text-[20px] leading-tight">
          {lesson.output}
        </h3>

        <div className="mt-4 flex items-center gap-2 text-[12px] text-ink-mute">
          <span>
            {completed} / {total} afgerond
          </span>
          <span className="flex-1 h-px bg-rule" />
          <span className="font-mono text-[10px] uppercase tracking-widest">
            {Math.round((completed / total) * 100)}%
          </span>
        </div>

        <ul className="mt-5 space-y-2">
          {checklist.map((c, i) => (
            <li key={i}>
              <button
                onClick={() => toggle(i)}
                className={`group hairline flex w-full items-start gap-3 rounded-lg px-3 py-2.5 text-left transition focus-ring ${
                  checked[i]
                    ? "bg-sage-tint/50 border-sage/30"
                    : "bg-paper-card hover:bg-paper-deep/50"
                }`}
              >
                <span
                  className={`mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-[4px] border ${
                    checked[i]
                      ? "border-sage bg-sage text-paper-card"
                      : "border-rule-strong"
                  }`}
                >
                  {checked[i] && <Check size={10} strokeWidth={2.5} />}
                </span>
                <span
                  className={`text-[13.5px] leading-snug ${
                    checked[i] ? "text-sage-deep line-through opacity-80" : "text-ink"
                  }`}
                >
                  {c}
                </span>
              </button>
            </li>
          ))}
        </ul>

        <Divider label="Acties" className="my-6" />

        <div className="space-y-2">
          <button
            onClick={() => {
              const next = !done;
              setDone(lesson.slug, next);
              setDoneState(next);
              trackEvent("lesson-marked-done", {
                slug: lesson.slug,
                done: next,
                source: "sidebar",
              });
            }}
            className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-[14px] font-medium transition focus-ring ${
              done
                ? "bg-sage text-paper-card"
                : "bg-ink text-paper-card hover:bg-ink-soft"
            }`}
          >
            {done ? (
              <>
                <CheckCircle2 size={14} strokeWidth={1.8} />
                Les afgerond
              </>
            ) : (
              <>
                <Stamp size={14} strokeWidth={1.8} />
                Markeer als afgerond
              </>
            )}
          </button>
          <Button variant="soft" className="w-full">
            <Pencil size={13} strokeWidth={1.8} />
            Gebruik in mijn les
          </Button>
          <Button variant="ghost" className="w-full">
            <Download size={13} strokeWidth={1.8} />
            Download checklist (PDF)
          </Button>
        </div>

        <div className="mt-6 rounded-lg bg-terra-tint/40 p-4">
          <div className="flex items-center gap-2">
            <Asterisk size={12} strokeWidth={2.5} className="text-terra" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-terra-deep">
              Verantwoord gebruik
            </span>
          </div>
          <p className="mt-2 text-[12.5px] leading-relaxed text-ink-soft">
            Deel geen leerlingnamen, beoordelingen of persoonsgegevens in AI-tools.
            Gebruik je school-account waar mogelijk.
          </p>
        </div>
      </div>

      <ContextNav module={m} lesson={lesson} tone={tone} />
    </aside>
  );
}

function ContextNav({ module: m, lesson, tone }) {
  const currentIdx = m.lessons.findIndex((l) => l.slug === lesson.slug);
  return (
    <div className="card p-6">
      <Footnote>In deze module</Footnote>
      <ol className="mt-4 space-y-2">
        {m.lessons.map((l, i) => {
          const current = i === currentIdx;
          return (
            <li key={l.slug}>
              <Link
                to={`/lessen/${l.slug}`}
                className={`flex items-center gap-3 rounded-md px-2 py-1.5 text-[13px] transition ${
                  current
                    ? tone === "terra"
                      ? "bg-terra-tint/50 text-terra-deep"
                      : "bg-academy-tint/50 text-academy-deep"
                    : "text-ink-soft hover:bg-paper-deep/40 hover:text-ink"
                }`}
              >
                <span
                  className={`num-mark text-[15px] leading-none ${
                    current ? "" : "text-ink-mute"
                  }`}
                >
                  {l.number}
                </span>
                <span className="line-clamp-1">{l.title}</span>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/* "Klaar met deze les?" — de docent vinkt zelf af. Voedt de voortgang op
 * het dashboard en de modulepagina's, en synct mee naar de server. */
function LesAfronden({ lesson }) {
  const [done, setDoneState] = useState(() => isDone(lesson.slug));

  useEffect(() => {
    const sync = () => setDoneState(isDone(lesson.slug));
    sync();
    window.addEventListener("praktijklab:voortgang", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("praktijklab:voortgang", sync);
      window.removeEventListener("storage", sync);
    };
  }, [lesson.slug]);

  function toggle() {
    const next = !done;
    setDone(lesson.slug, next);
    setDoneState(next);
    trackEvent("lesson-marked-done", { slug: lesson.slug, done: next });
  }

  if (done) {
    return (
      <div className="mb-5 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-sage-tint px-6 py-5">
        <div className="flex items-center gap-3">
          <CheckCircle2 size={18} strokeWidth={1.8} className="text-sage-deep" />
          <div>
            <p className="text-[14.5px] font-medium text-sage-deep">
              Les afgerond — goed bezig.
            </p>
            <p className="text-[12.5px] text-sage-deep/80">
              Je voortgang is bijgewerkt op je overzicht.
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={toggle}
          className="text-[12.5px] text-sage-deep/80 underline-offset-2 hover:underline focus-ring rounded"
        >
          Maak ongedaan
        </button>
      </div>
    );
  }

  return (
    <div className="mb-5 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-rule bg-paper-card px-6 py-5">
      <div>
        <p className="text-[14.5px] font-medium text-ink">
          Klaar met deze les?
        </p>
        <p className="text-[12.5px] text-ink-soft">
          Vink af en zie je voortgang groeien — je kunt altijd terugkomen.
        </p>
      </div>
      <button
        type="button"
        onClick={toggle}
        className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-[13px] font-medium text-paper-card transition hover:bg-terra focus-ring"
      >
        <CheckCircle2 size={14} strokeWidth={1.8} />
        Markeer als afgerond
      </button>
    </div>
  );
}

function NextLessonStrip({ lesson, module: m, detail }) {
  const next = useMemo(() => {
    if (detail.nextLesson) {
      const obj = m.lessons.find((l) => l.slug === detail.nextLesson);
      if (obj) return obj;
    }
    const idx = m.lessons.findIndex((l) => l.slug === lesson.slug);
    return m.lessons[idx + 1] || null;
  }, [lesson, m, detail]);

  if (!next) {
    return (
      <Section className="hairline-t">
        <LesAfronden lesson={lesson} />
        <div className="card-elev p-7">
          <Footnote>Module afronding</Footnote>
          <h3 className="mt-2 font-display text-[24px] leading-tight">
            Je hebt de laatste les bereikt.
          </h3>
          <p className="mt-3 max-w-prose text-[14.5px] text-ink-soft">
            Voltooi de praktijkopdracht en bespreek je werk met een collega of
            opleidingsmanager. Klaar voor de volgende module?
          </p>
          <div className="mt-5">
            <Button variant="accent" to="/modules/ai-geletterdheid">
              Bekijk de andere module
              <ArrowRight size={14} strokeWidth={1.8} />
            </Button>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section className="hairline-t">
      <LesAfronden lesson={lesson} />
      <Link
        to={`/lessen/${next.slug}`}
        className="card-elev group flex items-center justify-between gap-6 p-7 transition hover:border-rule-strong"
      >
        <div className="max-w-2xl">
          <Footnote>Volgende les · {next.number}</Footnote>
          <h3 className="mt-2 font-display text-[28px] leading-tight text-ink">
            {next.title}
          </h3>
          <p className="mt-2 text-[14px] text-ink-soft">{next.goal}</p>
        </div>
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ink text-paper-card transition group-hover:translate-x-1">
          <ArrowRight size={18} strokeWidth={1.7} />
        </span>
      </Link>
    </Section>
  );
}

function NotFound() {
  return (
    <Section>
      <PageHeader
        eyebrow="404"
        title="Deze les konden we niet vinden."
        subtitle="Misschien is de link verouderd. Ga terug naar het overzicht of een module."
      />
      <div className="px-10">
        <Button variant="accent" to="/">
          <Compass size={14} />
          Terug naar overzicht
        </Button>
      </div>
    </Section>
  );
}
