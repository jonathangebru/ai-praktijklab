import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Compass,
  ChevronRight,
  Sparkles,
  Target,
  CheckCircle2,
} from "lucide-react";
import { moduleList } from "../data/modules";
import { useAuth } from "../components/AuthProvider";
import { useVoortgang, formatRelative } from "../lib/voortgang";

/* ──────────────────────────────────────────────────────────────────────────
 * CODEX · het Dashboard
 *
 * Een opzettelijk editoriaal ontwerp — een opening die meer lijkt op het
 * eerste hoofdstuk van een gerespecteerd handboek dan op een SaaS-dashboard.
 *
 *   · One accent only — vermilion (#C53C1F). Geen sage. Geen academy.
 *   · Display in Instrument Serif. Roman numerals als chapter marks.
 *   · Dropcap-opening, hairline-rijk, marginalia rechts.
 *   · Eén signature-moment van motion: staggered reveal bij eerste load.
 *   · Een chiaroscuro band — kort, donker, cream-on-ink — als kantelpunt.
 *
 * Alles wat voortgang toont is écht: berekend uit het werk van de docent
 * (lib/voortgang) — geen mockdata.
 * ──────────────────────────────────────────────────────────────────────── */

export function Dashboard() {
  const voortgang = useVoortgang();
  return (
    <div className="bg-codex-paper text-codex-ink min-h-full">
      <Opening voortgang={voortgang} />
      <Chiaroscuro />
      <Chapters voortgang={voortgang} />
      <Voortgang voortgang={voortgang} />
      <Onderscheidend />
      <Resources />
      <Partners />
    </div>
  );
}

/* Voornaam uit de inlognaam — werkt voor "Marieke de Vries" én "j.gebru@…". */
function firstNameFrom(displayName) {
  const raw = (displayName || "").trim();
  if (!raw) return "";
  const local = raw.includes("@") ? raw.split("@")[0] : raw;
  const first = local.split(/[\s._-]+/).filter(Boolean)[0] || "";
  if (first.length < 2) return "";
  return first.charAt(0).toUpperCase() + first.slice(1);
}

/* ─── I. Opening — Hero ─────────────────────────────────────────────────── */
function Opening({ voortgang }) {
  const { displayName } = useAuth();
  const name = firstNameFrom(displayName);
  const { next, nextIsResume, doneTotal } = voortgang;
  const started = doneTotal > 0 || voortgang.workingTotal > 0;

  return (
    <section className="codex-grain relative codex-hairline-b overflow-hidden">
      <div className="relative grid gap-12 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-14 lg:pb-24 lg:pt-20">
        <div className="codex-stagger lg:col-span-7">
          <div className="flex items-center gap-3">
            <span className="codex-eyebrow">AI PraktijkLab</span>
            <span className="block h-px w-12 bg-codex-rule-strong" />
            <span className="codex-eyebrow text-codex-vermilion">
              Volume I · 2026
            </span>
          </div>

          <h1 className="codex-display mt-7 max-w-3xl text-balance text-[44px] leading-[0.96] text-codex-ink sm:text-[58px] lg:text-[76px]">
            {name ? (
              <>
                Welkom terug,{" "}
                <span className="codex-display-italic text-codex-vermilion">
                  {name}
                </span>
                .
              </>
            ) : (
              <>
                Welkom{" "}
                <span className="codex-display-italic text-codex-vermilion">
                  terug
                </span>
                .
              </>
            )}
            <br />
            Een nieuwe les wacht.
          </h1>

          <p className="codex-dropcap mt-10 max-w-[58ch] text-pretty text-[17px] leading-[1.75] text-codex-ink-soft">
            Dit is een werkboek voor docenten in vo, mbo en hbo die AI met
            zelfvertrouwen, vakdiepte en verantwoording willen inzetten. Twee
            modules, zeventien lessen, vier kennischecks. Geen theorie zonder
            toepassing. Geen technologie zonder didactiek. Wat je hier leert,
            kun je komende lesweek gebruiken.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-4">
            <Link
              to="/intake"
              className="codex-focus inline-flex items-center gap-2 rounded-full bg-codex-ink px-5 py-3 text-[14px] font-medium text-codex-paper transition hover:bg-codex-vermilion"
            >
              <Compass size={14} strokeWidth={1.8} />
              Begin de intake
            </Link>
            <Link
              to="/modules/basiscursus-ai"
              className="codex-focus inline-flex items-center gap-1.5 border-b border-codex-ink/50 pb-1 text-[14px] font-medium text-codex-ink transition hover:border-codex-vermilion hover:text-codex-vermilion-deep"
            >
              Open Volume I
              <ArrowUpRight size={13} strokeWidth={1.8} />
            </Link>
            <span className="hidden h-5 w-px bg-codex-rule-strong sm:block" />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-codex-ink-mute">
              ~8&nbsp;min · adaptief · geen voorkennis
            </span>
          </div>

          <div className="mt-14 max-w-[62ch] codex-hairline-t pt-6">
            {next ? (
              <>
                <p className="codex-eyebrow mb-2">
                  {nextIsResume
                    ? "Lees verder waar je bleef"
                    : started
                    ? "Jouw volgende stap"
                    : "Begin hier"}
                </p>
                <Link
                  to={`/lessen/${next.lesson.slug}`}
                  className="group flex items-baseline justify-between gap-6"
                >
                  <span className="text-[15px] text-codex-ink-soft">
                    <span className="codex-roman text-[20px] mr-1.5">
                      {next.lesson.number}
                    </span>
                    <span className="codex-display-italic text-codex-ink text-[19px]">
                      {next.lesson.title}
                    </span>
                    <span className="ml-2 font-mono text-[11px] uppercase tracking-[0.18em] text-codex-ink-mute">
                      {next.lesson.duration}
                    </span>
                  </span>
                  <span className="codex-focus inline-flex items-center gap-1 whitespace-nowrap text-[13.5px] font-medium text-codex-vermilion transition group-hover:gap-2">
                    Open les
                    <ChevronRight size={13} strokeWidth={2.2} />
                  </span>
                </Link>
              </>
            ) : (
              <>
                <p className="codex-eyebrow mb-2">Alles afgerond</p>
                <Link
                  to="/promptbibliotheek"
                  className="group flex items-baseline justify-between gap-6"
                >
                  <span className="codex-display-italic text-codex-ink text-[19px]">
                    De hele leerlijn zit erop — bekijk je promptkit.
                  </span>
                  <span className="codex-focus inline-flex items-center gap-1 whitespace-nowrap text-[13.5px] font-medium text-codex-vermilion transition group-hover:gap-2">
                    Open kit
                    <ChevronRight size={13} strokeWidth={2.2} />
                  </span>
                </Link>
              </>
            )}
          </div>
        </div>

        <aside className="lg:col-span-5">
          <Marginalia voortgang={voortgang} />
        </aside>
      </div>
    </section>
  );
}

/* ─── Marginalia (right rail) ───────────────────────────────────────────── */
function Marginalia({ voortgang }) {
  const { modules, promptkitCount, activity } = voortgang;
  const vol1 = modules[0];
  const vol2 = modules[1];
  const recent = activity.slice(0, 3);

  return (
    <div className="codex-margin-rule sticky top-24 codex-hairline rounded-none border-l-2 border-codex-vermilion bg-codex-card/60 pl-7 pr-6 py-7">
      <div className="flex items-baseline justify-between gap-4">
        <span className="codex-eyebrow">In de marge</span>
        <span className="codex-display-italic text-[22px] leading-none text-codex-vermilion">
          M.
        </span>
      </div>
      <h3 className="codex-display mt-1 text-[22px] leading-tight text-codex-ink">
        Mijn voortgang
      </h3>

      <ul className="mt-6 space-y-5">
        <ProgressRow
          label="Volume I · Basiscursus AI"
          pct={vol1.pct}
          bar="bg-koraal"
          right={`${String(vol1.done).padStart(2, "0")} van ${String(
            vol1.total
          ).padStart(2, "0")}`}
        />
        <ProgressRow
          label="Volume II · Verdieping"
          pct={vol2.pct}
          bar="bg-academy"
          right={`${String(vol2.done).padStart(2, "0")} van ${String(
            vol2.total
          ).padStart(2, "0")}`}
        />
        <ProgressRow
          label="Mijn promptkit"
          pct={Math.min(100, promptkitCount * 10)}
          bar="bg-codex-vermilion"
          right={
            promptkitCount === 1 ? "1 prompt" : `${promptkitCount} prompts`
          }
        />
      </ul>

      <div className="my-7 codex-rule" />

      {recent.length ? (
        <ul className="space-y-4">
          {recent.map((a, i) => (
            <ActivityEntry key={`${a.type}-${a.slug || a.title}-${i}`} entry={a} />
          ))}
        </ul>
      ) : (
        <p className="text-[13px] leading-relaxed text-codex-ink-soft">
          Nog geen activiteit. Begin met de{" "}
          <Link
            to="/intake"
            className="codex-focus border-b border-codex-vermilion/50 text-codex-ink hover:text-codex-vermilion"
          >
            intake
          </Link>{" "}
          of open de eerste les — alles wat je schrijft verschijnt hier.
        </p>
      )}

      <div className="mt-7 codex-hairline-t pt-5">
        <Weekdoel activity={activity} />
      </div>
    </div>
  );
}

/* Recente activiteit uit de leerreis — les bewerkt / afgerond / prompt. */
function ActivityEntry({ entry }) {
  const isPrompt = entry.type === "prompt";
  const isDone = entry.type === "afgerond";
  const lesson = !isPrompt
    ? moduleList.flatMap((m) => m.lessons).find((l) => l.slug === entry.slug)
    : null;
  const title = isPrompt ? entry.title : lesson?.title || entry.slug;
  const meta = isDone
    ? `afgerond · ${formatRelative(entry.ts)}`
    : isPrompt
    ? `toegevoegd aan mijn kit · ${formatRelative(entry.ts)}`
    : `bewerkt · ${formatRelative(entry.ts)}`;

  return (
    <li className="flex items-start gap-3">
      <span
        className={`codex-roman shrink-0 text-[16px] leading-snug ${
          isDone
            ? "text-codex-ink-mute"
            : isPrompt
            ? "text-codex-ink"
            : "text-codex-vermilion"
        }`}
      >
        {isPrompt ? (
          <Sparkles size={12} strokeWidth={1.8} />
        ) : (
          lesson?.number || "·"
        )}
      </span>
      <div className="flex-1">
        <div
          className={`text-[13px] leading-snug ${
            isDone
              ? "text-codex-ink-mute line-through decoration-codex-ink-faint"
              : "text-codex-ink"
          }`}
        >
          {title}
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-codex-ink-mute mt-0.5">
          {meta}
        </div>
      </div>
    </li>
  );
}

/* Weekdoel — één les per week afronden. Klein, eerlijk, motiverend. */
function Weekdoel({ activity }) {
  const WEEK_MS = 7 * 24 * 60 * 60 * 1000;
  const now = Date.now();
  const thisWeek = activity.filter((a) => a.ts && now - a.ts < WEEK_MS);
  const doneThisWeek = thisWeek.filter((a) => a.type === "afgerond").length;
  const touched = new Set(
    thisWeek.filter((a) => a.type === "les" && a.slug).map((a) => a.slug)
  ).size;

  const achieved = doneThisWeek > 0;
  const text = achieved
    ? doneThisWeek === 1
      ? "Weekdoel gehaald — één les afgerond."
      : `Weekdoel gehaald — ${doneThisWeek} lessen afgerond.`
    : touched > 0
    ? touched === 1
      ? "Je werkte deze week aan één les."
      : `Je werkte deze week aan ${touched} lessen.`
    : "Nog geen activiteit deze week.";

  return (
    <div
      className={`flex items-center gap-2.5 rounded-2xl px-4 py-3 ${
        achieved ? "bg-geel" : "bg-geel-tint"
      }`}
    >
      {achieved ? (
        <CheckCircle2 size={14} strokeWidth={2} className="text-geel-deep" />
      ) : (
        <Target size={14} strokeWidth={1.8} className="text-geel-deep/70" />
      )}
      <div className="flex-1">
        <p className="text-[13px] font-medium text-codex-ink">{text}</p>
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-geel-deep/80 mt-0.5">
          Weekdoel · rond één les af
        </p>
      </div>
    </div>
  );
}

function ProgressRow({ label, pct, right, bar = "bg-codex-vermilion" }) {
  return (
    <li>
      <div className="mb-1.5 flex items-baseline justify-between gap-3">
        <span className="text-[13px] text-codex-ink">{label}</span>
        <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-codex-ink-mute">
          {right}
        </span>
      </div>
      <div className="relative h-[4px] w-full overflow-hidden rounded-full bg-codex-deep">
        <div
          className={`absolute inset-y-0 left-0 rounded-full transition-all duration-700 ${bar}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="mt-1 flex items-baseline justify-end">
        <span className="codex-display-italic text-[13px] text-codex-ink-soft">
          {pct}%
        </span>
      </div>
    </li>
  );
}

/* ─── II. Cijferband — warm beige rustmoment ────────────────────────────── */
function Chiaroscuro() {
  return (
    <section className="bg-paper-warm codex-hairline-b">
      <div className="grid gap-10 px-5 py-12 sm:px-8 lg:grid-cols-12 lg:px-14 lg:py-16">
        <div className="lg:col-span-5">
          <span className="codex-eyebrow">Het programma in cijfers</span>
          <h2 className="codex-display mt-3 text-[34px] leading-[1.05] text-codex-ink sm:text-[44px]">
            Zeventien lessen.{" "}
            <span className="codex-display-italic text-codex-vermilion">
              Vier kennischecks.
            </span>{" "}
            Eén leerlijn.
          </h2>
        </div>

        <dl className="grid grid-cols-2 gap-6 lg:col-span-7 lg:grid-cols-4">
          {[
            { v: "17", l: "Lessen, volledig uitgewerkt" },
            { v: "60+", l: "Prompts in de bibliotheek" },
            { v: "12+", l: "Casussen uit vo / mbo / hbo" },
            { v: "100", l: "WCAG-toegankelijkheidsscore" },
          ].map((s) => (
            <div key={s.l} className="codex-hairline-t border-codex-ink/15 pt-4">
              <dt className="codex-display text-[40px] leading-none text-codex-ink sm:text-[52px]">
                {s.v}
              </dt>
              <dd className="mt-2 break-words hyphens-auto font-mono text-[10.5px] uppercase tracking-[0.18em] text-codex-ink-mute">
                {s.l}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ─── III. Chapters — de twee modules ───────────────────────────────────── */
function Chapters({ voortgang }) {
  return (
    <section className="px-5 py-16 sm:px-8 lg:px-14 lg:py-24">
      <div className="codex-flourish mb-12">
        <span>·</span>
      </div>

      <div className="mb-12 flex items-end justify-between gap-6">
        <div>
          <span className="codex-eyebrow">Twee delen · één leerlijn</span>
          <h2 className="codex-display mt-3 text-[34px] leading-[1.05] sm:text-[44px]">
            Kies een route, of laat de intake het wijzen.
          </h2>
        </div>
        <Link
          to="/intake"
          className="codex-focus hidden items-center gap-1.5 border-b border-codex-vermilion/50 pb-0.5 text-[13.5px] font-medium text-codex-vermilion hover:border-codex-vermilion sm:inline-flex"
        >
          Doe de intake
          <ArrowUpRight size={13} strokeWidth={1.8} />
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {moduleList.map((m, idx) => (
          <ChapterCard
            key={m.id}
            module={m}
            chapterRoman={idx === 0 ? "I" : "II"}
            stats={voortgang.modules[idx]}
            lessonStates={voortgang.lessonStates}
          />
        ))}
      </div>
    </section>
  );
}

function ChapterCard({ module: m, chapterRoman, stats, lessonStates }) {
  const checks = m.lessons.filter((l) => l.isCheck).length;
  return (
    <Link
      to={`/modules/${m.id}`}
      className="codex-focus group relative flex flex-col overflow-hidden codex-hairline bg-codex-card p-8 transition hover:bg-codex-deep/40"
    >
      <div className="absolute right-7 top-7 codex-display-italic text-[88px] leading-none text-codex-vermilion/15 group-hover:text-codex-vermilion/30 transition">
        {chapterRoman}
      </div>

      <span className="codex-eyebrow">
        Volume {m.number === "01" ? "I" : "II"} · {m.lessons.length} lessen
      </span>

      <h3 className="codex-display mt-5 max-w-md text-[28px] leading-tight text-codex-ink">
        {m.title}
      </h3>

      <p className="mt-5 max-w-prose text-[14.5px] leading-[1.7] text-codex-ink-soft">
        {m.intro}
      </p>

      <div className="mt-7 codex-hairline-t pt-5 grid grid-cols-3 gap-x-6 gap-y-1">
        <ChapterMeta label="Niveau" value={m.level} />
        <ChapterMeta label="Doelgroep" value={m.audience} />
        <ChapterMeta label="Duur" value={m.totalHours} />
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="flex flex-wrap items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-codex-ink-mute">
          <span>{m.durationWeeks} weken</span>
          <span className="text-codex-ink-faint">·</span>
          <span>
            {checks} kennischeck{checks === 1 ? "" : "s"}
          </span>
          {stats?.done > 0 && (
            <>
              <span className="text-codex-ink-faint">·</span>
              <span className="text-codex-vermilion-deep">
                {stats.done} afgerond
              </span>
            </>
          )}
        </div>
        <span className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-codex-ink transition group-hover:gap-2.5 group-hover:text-codex-vermilion">
          Open
          <ArrowUpRight size={14} strokeWidth={1.8} />
        </span>
      </div>

      {/* lesson strip — jouw echte staat per les */}
      <div className="mt-6 flex gap-1.5">
        {m.lessons.map((l) => {
          const state = lessonStates[l.slug];
          return (
            <span
              key={l.slug}
              className={`h-[2px] flex-1 ${
                state === "done"
                  ? "bg-codex-vermilion"
                  : state === "working"
                  ? "bg-codex-vermilion/40"
                  : "bg-codex-deep"
              }`}
              title={`${l.number} · ${l.title}${
                state === "done"
                  ? " — afgerond"
                  : state === "working"
                  ? " — in uitvoering"
                  : ""
              }`}
            />
          );
        })}
      </div>
    </Link>
  );
}

function ChapterMeta({ label, value }) {
  return (
    <div>
      <div className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-codex-ink-faint">
        {label}
      </div>
      <div className="mt-1 codex-display text-[15px] text-codex-ink">
        {value}
      </div>
    </div>
  );
}

/* ─── Voortgang ─────────────────────────────────────────────────────────── */
function Voortgang({ voortgang }) {
  const { modules, promptkitCount, doneTotal, lessonsTotal } = voortgang;
  const tiles = [
    {
      l: "Volume I · basis",
      v: modules[0].pct,
      suffix: "%",
      pct: modules[0].pct,
    },
    {
      l: "Volume II · verdieping",
      v: modules[1].pct,
      suffix: "%",
      pct: modules[1].pct,
    },
    {
      l: "Mijn promptkit",
      v: promptkitCount,
      suffix: promptkitCount === 1 ? "prompt" : "prompts",
      pct: Math.min(100, promptkitCount * 10),
    },
    {
      l: "Lessen afgerond",
      v: doneTotal,
      suffix: `van ${lessonsTotal}`,
      pct: lessonsTotal ? Math.round((doneTotal / lessonsTotal) * 100) : 0,
    },
  ];

  return (
    <section className="codex-hairline-t bg-codex-card/40 px-5 py-16 sm:px-8 lg:px-14">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <span className="codex-eyebrow">Mijn voortgang</span>
          <h2 className="codex-display mt-3 text-[30px] leading-[1.05] sm:text-[38px]">
            Jouw leerlijn,{" "}
            <span className="codex-display-italic text-codex-vermilion">
              in cijfers
            </span>
            .
          </h2>
        </div>
      </div>

      <div className="grid gap-0 codex-hairline overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
        {tiles.map((s, i) => (
          <div
            key={s.l}
            className={`bg-codex-card p-7 ${i > 0 ? "codex-hairline-l" : ""}`}
          >
            <div className="codex-eyebrow mb-3">{s.l}</div>
            <div className="flex items-baseline gap-2">
              <span className="codex-display text-[52px] leading-none text-codex-ink">
                {s.v}
              </span>
              <span className="codex-display-italic text-[18px] text-codex-vermilion">
                {s.suffix}
              </span>
            </div>
            <div className="mt-4 h-[3px] w-full bg-codex-deep">
              <div
                className="h-full bg-codex-vermilion"
                style={{ width: `${s.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Onderscheidend (Principles) ───────────────────────────────────────── */
function Onderscheidend() {
  return (
    <section className="codex-hairline-t px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
      <div className="codex-flourish mb-14">
        <span>· · ·</span>
      </div>

      <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <span className="codex-eyebrow">Wat dit programma drijft</span>
          <h2 className="codex-display mt-3 text-[34px] leading-[1.02] sm:text-[44px]">
            Niet AI-expert worden.{" "}
            <span className="codex-display-italic text-codex-vermilion">
              AI-bekwaam zijn.
            </span>
          </h2>
          <p className="mt-7 text-[15.5px] leading-[1.75] text-codex-ink-soft">
            Docenten hoeven geen AI-experts te worden. Wel houvast om te zien
            hoe AI het werk van leerlingen, het ontwerpen van lessen en het
            beoordelen verandert. Wat hier staat vertaalt die verandering naar
            wat je morgen al doet voor de klas.
          </p>

          <figure className="mt-10 codex-hairline-l border-codex-vermilion/60 pl-6">
            <blockquote className="codex-display-italic text-[22px] leading-snug text-codex-ink">
              We zoeken iemand die complexe technologie begrijpelijk en
              toepasbaar maakt voor docenten.
            </blockquote>
            <figcaption className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-codex-ink-mute">
              Uit de opdrachtomschrijving · Aventus / VABOK
            </figcaption>
          </figure>
        </div>

        <ol className="lg:col-span-7">
          {[
            {
              num: "I",
              title: "AI verandert het leerproces — niet alleen het gereedschap",
              body: "Hoe studenten lezen, schrijven, coderen en denken is sinds 2023 onomkeerbaar veranderd. Het programma vertrekt vanuit die werkelijkheid.",
            },
            {
              num: "II",
              title: "Toepasbaarheid voor morgen — niet voor over twee jaar",
              body: "Elke les eindigt met iets dat je in je volgende lesweek kunt gebruiken. Geen theorie zonder toepassing.",
            },
            {
              num: "III",
              title: "Verantwoord gebruik is geen bijlage",
              body: "Privacy, bias, transparantie en academische integriteit zitten in de leerlijn, niet als bijlage achterin.",
            },
            {
              num: "IV",
              title: "Vakdidactiek centraal — geen one-size-fits-all",
              body: "Casussen, prompts en voorbeelden zijn afgestemd op vo, mbo en hbo en op specifieke vakgebieden.",
            },
          ].map((p) => (
            <li
              key={p.num}
              className="codex-hairline-b grid grid-cols-[60px_1fr] gap-6 py-6 first:pt-0 last:border-0"
            >
              <span className="codex-roman text-[34px] leading-none">
                {p.num}.
              </span>
              <div>
                <h3 className="codex-display text-[22px] leading-snug text-codex-ink">
                  {p.title}
                </h3>
                <p className="mt-3 max-w-[62ch] text-[14.5px] leading-[1.7] text-codex-ink-soft">
                  {p.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ─── Resources (Bibliotheken) ──────────────────────────────────────────── */
function Resources() {
  return (
    <section className="codex-hairline-t bg-codex-card/40 px-5 py-16 sm:px-8 lg:px-14 lg:py-20">
      <div className="mb-10">
        <span className="codex-eyebrow">Verder ontdekken</span>
        <h2 className="codex-display mt-3 text-[30px] leading-tight sm:text-[38px]">
          Bronnen en bibliotheken.
        </h2>
      </div>

      <div className="grid gap-0 codex-hairline overflow-hidden md:grid-cols-3">
        <ResourceColumn
          eyebrow="60+ prompts"
          number="A"
          title="Promptbibliotheek"
          body="Lesvoorbereiding, differentiatie, feedback, programmeeronderwijs. Direct kopieerbaar en filterbaar."
          to="/promptbibliotheek"
        />
        <ResourceColumn
          eyebrow="vo · mbo · hbo"
          number="B"
          title="Praktijkcasussen"
          body="Beschreven uitwerkingen uit echte lessituaties — met risico's, reflectie en wat het opleverde."
          to="/praktijkcasussen"
          divider
        />
        <ResourceColumn
          eyebrow="VABOK"
          number="C"
          title="Project & roadmap"
          body="Hoe het programma zich ontwikkelt, hoe pilots werken, en hoe instellingen meedoen."
          to="/project"
          divider
        />
      </div>
    </section>
  );
}

function ResourceColumn({ eyebrow, number, title, body, to, divider }) {
  return (
    <Link
      to={to}
      className={`codex-focus group flex flex-col bg-codex-card p-7 transition hover:bg-codex-deep/40 ${
        divider ? "md:codex-hairline-l" : ""
      }`}
    >
      <div className="flex items-baseline justify-between">
        <span className="codex-eyebrow">{eyebrow}</span>
        <span className="codex-display-italic text-[28px] leading-none text-codex-vermilion">
          {number}.
        </span>
      </div>

      <h3 className="codex-display mt-5 text-[22px] leading-snug text-codex-ink">
        {title}
      </h3>

      <p className="mt-3 flex-1 text-[14px] leading-[1.7] text-codex-ink-soft">
        {body}
      </p>

      <div className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-codex-ink transition group-hover:gap-2.5 group-hover:text-codex-vermilion">
        Open
        <ArrowUpRight size={13} strokeWidth={1.8} />
      </div>
    </Link>
  );
}

/* ─── Partners — zachte marquee ─────────────────────────────────────────── */
function Partners() {
  const list = [
    { name: "Aventus", type: "mbo", anchor: true },
    { name: "Veluwse Onderwijsgroep", type: "vo" },
    { name: "Etty Hillesum Lyceum", type: "vo" },
    { name: "Saxion", type: "hbo" },
  ];
  // Twee identieke helften → de -50%-loop sluit naadloos aan.
  const strip = [...list, ...list, ...list];

  return (
    <section className="codex-hairline-t py-16 lg:py-20">
      <div className="px-5 sm:px-8 lg:px-14">
        <span className="codex-eyebrow">VABOK · samenwerking</span>
        <h2 className="codex-display mt-3 text-[30px] leading-[1.05] sm:text-[36px]">
          Vier instellingen,{" "}
          <span className="codex-display-italic text-codex-vermilion">één</span>{" "}
          leerlijn.
        </h2>
      </div>

      <div className="marquee-mask mt-10 overflow-hidden" aria-hidden="true">
        <div className="flex w-max animate-ticker items-center gap-4 pr-4 motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:w-full motion-reduce:px-5">
          {strip.map((p, i) => (
            <span
              key={`${p.name}-${i}`}
              className="flex shrink-0 items-center gap-3 rounded-full border border-codex-rule bg-codex-card px-6 py-3"
            >
              <span className="codex-display text-[18px] text-codex-ink">
                {p.name}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-codex-ink-mute">
                {p.type}
              </span>
              {p.anchor && (
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-codex-vermilion" />
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Toegankelijke, statische opsomming voor schermlezers. */}
      <p className="sr-only">
        Partners: Aventus (penvoerder, mbo), Veluwse Onderwijsgroep (vo), Etty
        Hillesum Lyceum (vo) en Saxion (hbo).
      </p>
    </section>
  );
}
