import {
  TrendingUp,
  Users,
  CheckCircle2,
  Star,
  Sparkles,
  Asterisk,
} from "lucide-react";
import { PageHeader, Section, Footnote, ProgressBar, Divider } from "../components/ui";

const moduleStats = [
  { label: "Module 01 · Basiscursus AI", enrolled: 65, completed: 28, color: "terra" },
  { label: "Module 02 · AI-geletterdheid", enrolled: 41, completed: 9, color: "academy" },
];

const intakeDist = [
  { label: "Beginnend", value: 38, color: "terra" },
  { label: "Comfortabel", value: 41, color: "sage" },
  { label: "Gevorderd", value: 15, color: "academy" },
  { label: "Expert", value: 6, color: "ink" },
];

const promptUsage = [
  { cat: "Lesvoorbereiding", count: 412, pct: 28 },
  { cat: "Differentiatie", count: 318, pct: 22 },
  { cat: "Feedback", count: 246, pct: 17 },
  { cat: "Toetsvragen", count: 198, pct: 14 },
  { cat: "Programmeeronderwijs", count: 142, pct: 10 },
  { cat: "Reflectie", count: 88, pct: 6 },
  { cat: "Overig", count: 38, pct: 3 },
];

const completionTrend = [
  { w: "wk 1", a: 6, b: 0 },
  { w: "wk 2", a: 14, b: 2 },
  { w: "wk 3", a: 19, b: 4 },
  { w: "wk 4", a: 23, b: 6 },
  { w: "wk 5", a: 26, b: 8 },
  { w: "wk 6", a: 28, b: 9 },
];

export function Analytics() {
  return (
    <>
      <PageHeader
        eyebrow="Voortgang & analytics · admin"
        number="∑"
        title={
          <>
            Voortgang{" "}
            <span className="display-italic text-terra">in beeld</span>.
          </>
        }
        subtitle="Het dashboard zoals projectleiders en opleidingsmanagers het zien. Aggregaten alleen, geen herleidbare data over individuele docenten. Onderstaand een voorbeeld van wat een pilotweek oplevert aan inzicht."
        meta={[
          { label: "Voorbeeld-periode", value: "wk 1 — wk 6" },
          { label: "Partners", value: "4 instellingen" },
          { label: "Vernieuwt", value: "dagelijks" },
        ]}
      />

      <Section className="!py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <KpiTile
            label="Docenten ingeschreven"
            value="65"
            sub="van 80 geplant"
            delta="+12"
            icon={Users}
            tone="terra"
          />
          <KpiTile
            label="Lessen afgerond"
            value="342"
            sub="cumulatief"
            delta="+58"
            icon={CheckCircle2}
            tone="sage"
          />
          <KpiTile
            label="Promptgebruik"
            value="1.442"
            sub="kopieën · in periode"
            delta="+184"
            icon={Sparkles}
            tone="academy"
          />
          <KpiTile
            label="Gem. tevredenheid"
            value="4,6"
            sub="op 5 · n=53"
            delta="+0,2"
            icon={Star}
            tone="terra"
          />
        </div>
      </Section>

      <Section eyebrow="Modulevoortgang" title="Per module" className="hairline-t">
        <div className="grid gap-6 lg:grid-cols-2">
          {moduleStats.map((m) => (
            <ModuleStatCard key={m.label} data={m} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Trend" title="Cumulatieve voltooiingen per week" className="hairline-t">
        <div className="card p-7">
          <Chart data={completionTrend} />
          <div className="hairline-t mt-4 flex flex-wrap items-center justify-between gap-3 pt-4 text-[12px] text-ink-mute">
            <div className="flex items-center gap-4">
              <Legend swatch="bg-terra" label="Module 01" />
              <Legend swatch="bg-academy" label="Module 02" />
            </div>
            <span className="font-mono uppercase tracking-widest">
              wk 1 — wk 6 · voorbeeld-periode
            </span>
          </div>
        </div>
      </Section>

      <Section eyebrow="Intakeniveau" title="Verdeling startniveau" className="hairline-t">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card p-6">
            <div className="space-y-5">
              {intakeDist.map((d) => (
                <div key={d.label}>
                  <div className="mb-1.5 flex items-baseline justify-between">
                    <span className="text-[13.5px] text-ink">{d.label}</span>
                    <span className="font-mono text-[11px] text-ink-mute">
                      {d.value}%
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-paper-deep">
                    <div
                      className={`h-full rounded-full ${
                        d.color === "terra"
                          ? "bg-terra"
                          : d.color === "sage"
                          ? "bg-sage"
                          : d.color === "academy"
                          ? "bg-academy"
                          : "bg-ink"
                      }`}
                      style={{ width: `${d.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <Divider label="Observatie" className="my-6" />
            <p className="text-[13.5px] leading-relaxed text-ink-soft">
              79% van de deelnemers start op niveau{" "}
              <em>beginnend</em> of <em>comfortabel</em>. Module 01 sluit goed
              aan; in week 4–6 versnellen we het advies naar Module 02 voor de
              groep die snel doorgroeit.
            </p>
          </div>

          <div className="card p-6">
            <h3 className="font-display text-[20px] leading-tight">
              Promptgebruik per categorie
            </h3>
            <p className="mt-1.5 text-[13px] text-ink-mute">
              Hoe vaak docenten een promptcategorie gebruiken
            </p>
            <ul className="mt-5 space-y-3">
              {promptUsage.map((p) => (
                <li key={p.cat}>
                  <div className="mb-1 flex items-baseline justify-between">
                    <span className="text-[13.5px] text-ink">{p.cat}</span>
                    <span className="font-mono text-[11px] text-ink-mute">
                      {p.count} · {p.pct}%
                    </span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-paper-deep">
                    <div
                      className="h-full rounded-full bg-terra"
                      style={{ width: `${p.pct}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}

function KpiTile({ label, value, sub, delta, icon: Icon, tone }) {
  const tones = {
    terra: "bg-terra-tint text-terra-deep",
    sage: "bg-sage-tint text-sage-deep",
    academy: "bg-academy-tint text-academy-deep",
  };
  return (
    <div className="card-elev relative flex flex-col gap-3 p-5">
      <div className="flex items-start justify-between">
        <div className={`grid h-9 w-9 place-items-center rounded-lg ${tones[tone]}`}>
          <Icon size={15} strokeWidth={1.7} />
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-sage-tint px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-sage-deep">
          <TrendingUp size={10} strokeWidth={2} />
          {delta}
        </span>
      </div>
      <div className="eyebrow">{label}</div>
      <div className="flex items-baseline gap-2">
        <span className="font-display text-[40px] leading-none text-ink">{value}</span>
        <span className="text-[12.5px] text-ink-mute">{sub}</span>
      </div>
    </div>
  );
}

function ModuleStatCard({ data }) {
  const pct = Math.round((data.completed / data.enrolled) * 100);
  return (
    <article className="card-elev p-7">
      <div className="flex items-start justify-between">
        <div>
          <Footnote>Module</Footnote>
          <h3 className="mt-1 font-display text-[22px] leading-tight">
            {data.label}
          </h3>
        </div>
        <span className="font-display text-[36px] leading-none text-ink">
          {pct}
          <span className="text-[16px] text-ink-mute">%</span>
        </span>
      </div>

      <div className="mt-5">
        <ProgressBar value={pct} tone={data.color} />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <Mini label="Ingeschreven" value={data.enrolled} />
        <Mini label="Afgerond" value={data.completed} />
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

function Chart({ data }) {
  const W = 760;
  const H = 220;
  const padL = 36;
  const padR = 16;
  const padT = 16;
  const padB = 26;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;
  const maxY = Math.max(...data.flatMap((d) => [d.a, d.b])) * 1.15;
  const xStep = innerW / (data.length - 1);
  const yFor = (v) => padT + innerH - (v / maxY) * innerH;
  const xFor = (i) => padL + i * xStep;

  const pathA = data
    .map((d, i) => `${i === 0 ? "M" : "L"} ${xFor(i)} ${yFor(d.a)}`)
    .join(" ");
  const pathB = data
    .map((d, i) => `${i === 0 ? "M" : "L"} ${xFor(i)} ${yFor(d.b)}`)
    .join(" ");

  const areaA =
    pathA +
    ` L ${xFor(data.length - 1)} ${padT + innerH} L ${xFor(0)} ${padT + innerH} Z`;
  const areaB =
    pathB +
    ` L ${xFor(data.length - 1)} ${padT + innerH} L ${xFor(0)} ${padT + innerH} Z`;

  const yTicks = [0, Math.round(maxY * 0.5), Math.round(maxY)];

  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox={`0 0 ${W} ${H}`} className="h-[220px] w-full" role="img" aria-label="Cumulatieve voltooiingen">
        <defs>
          <linearGradient id="gA" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#B8431F" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#B8431F" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gB" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#1F3A52" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#1F3A52" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Grid */}
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

        <path d={areaA} fill="url(#gA)" />
        <path d={areaB} fill="url(#gB)" />

        <path d={pathA} fill="none" stroke="#B8431F" strokeWidth="2" />
        <path d={pathB} fill="none" stroke="#1F3A52" strokeWidth="2" />

        {data.map((d, i) => (
          <g key={d.w}>
            <circle cx={xFor(i)} cy={yFor(d.a)} r="3" fill="#B8431F" />
            <circle cx={xFor(i)} cy={yFor(d.b)} r="3" fill="#1F3A52" />
            <text
              x={xFor(i)}
              y={H - 8}
              textAnchor="middle"
              fontFamily="JetBrains Mono"
              fontSize="10"
              fill="rgba(26,24,22,0.5)"
            >
              {d.w}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
