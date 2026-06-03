import { useEffect, useState } from "react";
import { Users, CheckCircle2, Sparkles, FileText } from "lucide-react";
import {
  PageHeader,
  Section,
  Footnote,
  ProgressBar,
  Tag,
} from "../components/ui";
import { moduleList, findLesson } from "../data/modules";
import { loadProgress } from "../lib/progressClient";

/* ──────────────────────────────────────────────────────────────────────────
 * Analytics — beheerder-dashboard op ECHTE, geanonimiseerde data (/api/progress).
 *
 * Werkt API-first met voorbeeld-fallback: lukt de call (ingelogde beheerder +
 * storage live), dan tonen we echte aggregaten. Anders — niet ingelogd, geen
 * beheerder, storage uit, of lokaal `npm run dev` — vallen we stilletjes terug
 * op DEMO_PAYLOAD, zodat de pagina altijd een coherent voorbeeld laat zien.
 *
 * Beide paden lopen door dezelfde buildView(), dus live en voorbeeld renderen
 * identiek. De backend levert uitsluitend totalen — nooit herleidbare data.
 * ─────────────────────────────────────────────────────────────────────── */

/* Aantal "schrijfbare" lessen (kennischecks tellen niet mee als werk). */
const TOTAL_WRITABLE = moduleList.reduce(
  (n, m) => n + m.lessons.filter((l) => !l.isCheck).length,
  0
);

/* Voorbeelddata — exact dezelfde vorm als de /api/progress-respons. */
const DEMO_PAYLOAD = {
  ok: true,
  generatedAt: null,
  teachers: 24,
  entries: 71,
  lessonsWithWork: 12,
  fieldsFilled: 612,
  promptkitTotal: 86,
  promptkitUsers: 19,
  lessons: [
    { slug: "lesvoorbereiding", teachers: 18, fields: 142, lastUpdated: null },
    { slug: "differentiatie-feedback", teachers: 14, fields: 96, lastUpdated: null },
    { slug: "prompting-voor-docenten", teachers: 12, fields: 78, lastUpdated: null },
    { slug: "toetsing-integriteit", teachers: 9, fields: 54, lastUpdated: null },
    { slug: "wat-kan-ai", teachers: 8, fields: 41, lastUpdated: null },
    { slug: "ai-assisted-development", teachers: 7, fields: 38, lastUpdated: null },
    { slug: "prompten-voor-software", teachers: 6, fields: 29, lastUpdated: null },
    { slug: "privacy-ethiek", teachers: 5, fields: 22, lastUpdated: null },
    { slug: "wat-is-ai", teachers: 5, fields: 18, lastUpdated: null },
    { slug: "vibe-coding", teachers: 4, fields: 15, lastUpdated: null },
    { slug: "ai-geletterdheid", teachers: 3, fields: 12, lastUpdated: null },
    { slug: "programmeerdidactiek", teachers: 2, fields: 8, lastUpdated: null },
  ],
  weekly: [
    { week: "2026-W18", rows: 6 },
    { week: "2026-W19", rows: 11 },
    { week: "2026-W20", rows: 9 },
    { week: "2026-W21", rows: 16 },
    { week: "2026-W22", rows: 14 },
    { week: "2026-W23", rows: 21 },
  ],
};

const nf = (n) => Number(n || 0).toLocaleString("nl-NL");

function shortWeek(key) {
  const m = /W(\d{2})$/.exec(key || "");
  return m ? `wk ${Number(m[1])}` : key || "";
}

function formatStamp(iso) {
  if (!iso) return "—";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "—";
  return d.toLocaleString("nl-NL", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

const barColor = (color) =>
  color === "terra"
    ? "bg-terra"
    : color === "sage"
    ? "bg-sage"
    : color === "academy"
    ? "bg-academy"
    : "bg-ink";

/* Rolt de per-les-aggregaten op naar per-module cijfers, m.b.v. modules.js. */
function buildModules(lessonsBySlug) {
  return moduleList.map((m) => {
    const writable = m.lessons.filter((l) => !l.isCheck);
    let worked = 0;
    let fields = 0;
    let bewerkingen = 0;
    for (const l of writable) {
      const rec = lessonsBySlug.get(l.slug);
      if (rec && rec.teachers > 0) {
        worked++;
        fields += rec.fields;
        bewerkingen += rec.teachers;
      }
    }
    const lessonsTotal = writable.length;
    const pct = lessonsTotal ? Math.round((worked / lessonsTotal) * 100) : 0;
    return {
      id: m.id,
      number: m.number,
      title: m.title,
      color: m.color,
      lessonsTotal,
      lessonsWorked: worked,
      fields,
      bewerkingen,
      pct,
    };
  });
}

function buildView(p) {
  const lessonsBySlug = new Map((p.lessons || []).map((l) => [l.slug, l]));
  const modules = buildModules(lessonsBySlug);
  const weekly = (p.weekly || []).map((w) => ({
    label: shortWeek(w.week),
    value: w.rows || 0,
  }));
  const maxTeachers = Math.max(1, ...(p.lessons || []).map((l) => l.teachers || 0));
  const topLessons = (p.lessons || []).slice(0, 7).map((l) => {
    const found = findLesson(l.slug);
    return {
      slug: l.slug,
      number: found?.lesson.number || "·",
      title: found?.lesson.title || l.slug,
      color: found?.module.color || "ink",
      teachers: l.teachers || 0,
      fields: l.fields || 0,
      pct: Math.round(((l.teachers || 0) / maxTeachers) * 100),
    };
  });
  return { modules, weekly, topLessons };
}

export function Analytics() {
  const [payload, setPayload] = useState(null);
  const [state, setState] = useState("loading"); // "loading" | "live" | "demo"

  useEffect(() => {
    let cancelled = false;
    loadProgress().then((d) => {
      if (cancelled) return;
      if (d) {
        setPayload(d);
        setState("live");
      } else {
        setPayload(DEMO_PAYLOAD);
        setState("demo");
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (state === "loading") {
    return (
      <>
        <PageHeader
          eyebrow="Voortgang & analytics · admin"
          number="∑"
          title={
            <>
              Voortgang <span className="display-italic text-terra">in beeld</span>.
            </>
          }
          subtitle="Aggregaten worden opgehaald…"
        />
        <Section className="!py-16">
          <div className="flex items-center justify-center gap-3 text-ink-faint">
            <span className="h-2 w-2 animate-soft-pulse rounded-full bg-terra" />
            <span className="font-mono text-[11px] uppercase tracking-widest">
              Laden…
            </span>
          </div>
        </Section>
      </>
    );
  }

  const live = state === "live";
  const p = payload;
  const view = buildView(p);

  const kpis = [
    {
      label: "Docenten actief",
      value: nf(p.teachers),
      sub: "met opgeslagen werk",
      icon: Users,
      tone: "terra",
    },
    {
      label: "Lessen met werk",
      value: nf(p.lessonsWithWork),
      sub: `van ${TOTAL_WRITABLE} lessen`,
      icon: CheckCircle2,
      tone: "sage",
    },
    {
      label: "Prompts bewaard",
      value: nf(p.promptkitTotal),
      sub: `${nf(p.promptkitUsers)} ${p.promptkitUsers === 1 ? "docent" : "docenten"}`,
      icon: Sparkles,
      tone: "academy",
    },
    {
      label: "Velden ingevuld",
      value: nf(p.fieldsFilled),
      sub: "cumulatief",
      icon: FileText,
      tone: "terra",
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow={`Voortgang & analytics · ${live ? "live" : "voorbeeld"}`}
        number="∑"
        title={
          <>
            Voortgang <span className="display-italic text-terra">in beeld</span>.
          </>
        }
        subtitle={
          live
            ? "Geaggregeerd uit de werkruimtes van ingelogde docenten. Alleen totalen en gemiddelden — nooit herleidbaar naar een individu (AVG)."
            : "Het dashboard zoals projectleiders en opleidingsmanagers het zien. Aggregaten alleen, geen herleidbare data over individuele docenten. Onderstaand een voorbeeld; echte cijfers verschijnen zodra docenten ingelogd aan de slag gaan."
        }
        meta={
          live
            ? [
                { label: "Bijgewerkt", value: formatStamp(p.generatedAt) },
                { label: "Docenten", value: nf(p.teachers) },
                { label: "Partners", value: "4 instellingen" },
              ]
            : [
                { label: "Status", value: "Voorbeelddata" },
                { label: "Partners", value: "4 instellingen" },
                { label: "Vernieuwt", value: "bij laden" },
              ]
        }
      />

      <div className="hairline-b flex flex-wrap items-center justify-between gap-3 px-5 py-3 sm:px-8 lg:px-10">
        <Tag tone={live ? "sage" : "paper"}>
          {live ? "● Live data" : "Voorbeelddata"}
        </Tag>
        <span className="font-mono text-[11px] text-ink-faint">
          {live
            ? "Geaggregeerd · geen herleidbare gegevens"
            : "Echte cijfers verschijnen na inloggen + opslag"}
        </span>
      </div>

      <Section className="!py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((k) => (
            <KpiTile key={k.label} {...k} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Modulevoortgang" title="Per module" className="hairline-t">
        <div className="grid gap-6 lg:grid-cols-2">
          {view.modules.map((m) => (
            <ModuleStatCard key={m.id} data={m} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Trend"
        title="Activiteit per week"
        className="hairline-t"
      >
        <div className="card p-7">
          <Chart points={view.weekly} />
          <div className="hairline-t mt-4 flex flex-wrap items-center justify-between gap-3 pt-4 text-[12px] text-ink-mute">
            <Legend swatch="bg-terra" label="Opslagacties per week" />
            <span className="font-mono uppercase tracking-widest">
              laatste 6 weken
            </span>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Populariteit"
        title="Meest bewerkte lessen"
        className="hairline-t"
      >
        <div className="card p-6">
          <p className="text-[13px] text-ink-mute">
            Lessen gerangschikt naar het aantal docenten dat er werk op heeft
            opgeslagen.
          </p>
          {view.topLessons.length === 0 ? (
            <p className="mt-6 text-[13.5px] leading-relaxed text-ink-soft">
              Nog geen lesactiviteit. Zodra docenten ingelogd aan een les werken,
              verschijnt hier vanzelf de ranglijst.
            </p>
          ) : (
            <ul className="mt-5 space-y-3">
              {view.topLessons.map((l) => (
                <li key={l.slug}>
                  <div className="mb-1 flex items-baseline justify-between gap-3">
                    <span className="min-w-0 truncate text-[13.5px] text-ink">
                      <span className="font-mono text-[11px] text-ink-mute">
                        {l.number}
                      </span>{" "}
                      {l.title}
                    </span>
                    <span className="shrink-0 font-mono text-[11px] text-ink-mute">
                      {nf(l.teachers)}{" "}
                      {l.teachers === 1 ? "docent" : "docenten"}
                    </span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-paper-deep">
                    <div
                      className={`h-full rounded-full ${barColor(l.color)}`}
                      style={{ width: `${l.pct}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Section>
    </>
  );
}

function KpiTile({ label, value, sub, icon: Icon, tone }) {
  const tones = {
    terra: "bg-terra-tint text-terra-deep",
    sage: "bg-sage-tint text-sage-deep",
    academy: "bg-academy-tint text-academy-deep",
  };
  return (
    <div className="card-elev relative flex flex-col gap-3 p-5">
      <div className={`grid h-9 w-9 place-items-center rounded-lg ${tones[tone]}`}>
        <Icon size={15} strokeWidth={1.7} />
      </div>
      <div className="eyebrow">{label}</div>
      <div className="flex items-baseline gap-2">
        <span className="font-display text-[40px] leading-none text-ink">
          {value}
        </span>
        <span className="text-[12.5px] text-ink-mute">{sub}</span>
      </div>
    </div>
  );
}

function ModuleStatCard({ data }) {
  return (
    <article className="card-elev p-7">
      <div className="flex items-start justify-between">
        <div>
          <Footnote>Module {data.number}</Footnote>
          <h3 className="mt-1 font-display text-[22px] leading-tight">
            {data.title}
          </h3>
        </div>
        <span className="font-display text-[36px] leading-none text-ink">
          {data.pct}
          <span className="text-[16px] text-ink-mute">%</span>
        </span>
      </div>

      <div className="mt-2">
        <Footnote>Modulebereik · lessen met werk</Footnote>
      </div>

      <div className="mt-4">
        <ProgressBar value={data.pct} tone={data.color} />
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">
        <Mini label="Lessen" value={`${data.lessonsWorked}/${data.lessonsTotal}`} />
        <Mini label="Bewerkingen" value={nf(data.bewerkingen)} />
        <Mini label="Velden" value={nf(data.fields)} />
      </div>
    </article>
  );
}

function Mini({ label, value }) {
  return (
    <div className="hairline rounded-lg bg-paper px-4 py-3">
      <div className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
        {label}
      </div>
      <div className="mt-0.5 font-display text-[22px] leading-tight text-ink">
        {value}
      </div>
    </div>
  );
}

function Legend({ swatch, label }) {
  return (
    <span className="flex items-center gap-2">
      <span className={`inline-block h-2.5 w-2.5 rounded-sm ${swatch}`} />
      <span className="text-[12.5px] text-ink">{label}</span>
    </span>
  );
}

function Chart({ points }) {
  const W = 760;
  const H = 220;
  const padL = 36;
  const padR = 16;
  const padT = 16;
  const padB = 26;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;
  const data = points && points.length ? points : [{ label: "", value: 0 }];
  const maxRaw = Math.max(...data.map((d) => d.value), 0);
  const maxY = Math.max(1, maxRaw * 1.15);
  const xStep = data.length > 1 ? innerW / (data.length - 1) : 0;
  const yFor = (v) => padT + innerH - (v / maxY) * innerH;
  const xFor = (i) => padL + i * xStep;

  const line = data
    .map((d, i) => `${i === 0 ? "M" : "L"} ${xFor(i)} ${yFor(d.value)}`)
    .join(" ");
  const area =
    line +
    ` L ${xFor(data.length - 1)} ${padT + innerH} L ${xFor(0)} ${padT + innerH} Z`;

  const yTicks = [0, Math.round(maxY * 0.5), Math.round(maxY)];

  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-[220px] w-full"
        role="img"
        aria-label="Activiteit per week"
      >
        <defs>
          <linearGradient id="gActivity" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#B8431F" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#B8431F" stopOpacity="0" />
          </linearGradient>
        </defs>

        {yTicks.map((t, i) => (
          <g key={i}>
            <line
              x1={padL}
              x2={W - padR}
              y1={yFor(t)}
              y2={yFor(t)}
              stroke="rgba(26,24,22,0.08)"
              strokeDasharray={i === 0 ? "0" : "2 4"}
            />
            <text
              x={padL - 8}
              y={yFor(t)}
              dy={4}
              textAnchor="end"
              fontFamily="JetBrains Mono"
              fontSize="10"
              fill="rgba(26,24,22,0.5)"
            >
              {t}
            </text>
          </g>
        ))}

        <path d={area} fill="url(#gActivity)" />
        <path d={line} fill="none" stroke="#B8431F" strokeWidth="2" />

        {data.map((d, i) => (
          <g key={i}>
            <circle cx={xFor(i)} cy={yFor(d.value)} r="3" fill="#B8431F" />
            <text
              x={xFor(i)}
              y={H - 8}
              textAnchor="middle"
              fontFamily="JetBrains Mono"
              fontSize="10"
              fill="rgba(26,24,22,0.5)"
            >
              {d.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
