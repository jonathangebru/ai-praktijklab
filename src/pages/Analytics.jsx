import {
  TrendingUp,
  Users,
  CheckCircle2,
  MessageSquare,
  Star,
  Sparkles,
  Asterisk,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import { PageHeader, Section, Tag, Footnote, ProgressBar, Divider, Button } from "../components/ui";

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

const feedback = [
  {
    quote:
      "De praktijkcasus bij les 1.5 (differentiatie) heb ik direct gebruikt in mijn 3 mavo-klas. Werkte beter dan verwacht.",
    role: "Docent NL · Etty Hillesum",
    rating: 5,
  },
  {
    quote:
      "Module 02 is precies wat ik zocht — de les over vibe coding maakt mijn beoordelingsmodel echt anders.",
    role: "Docent SE · Saxion",
    rating: 5,
  },
  {
    quote:
      "Sterke prompts, maar voor mbo zorg zou ik graag meer voorbeelden zien rond mondelinge verantwoording.",
    role: "Docent Verpleegkunde · Aventus",
    rating: 4,
  },
];

const suggestions = [
  {
    title: "Casus voor mbo niveau 2 economie",
    by: "Docent Aventus · 14 mei",
    status: "in onderzoek",
  },
  {
    title: "Diepteles toetsing bij groepsopdrachten",
    by: "Onderwijskundige Saxion · 12 mei",
    status: "ingepland · v0.5",
  },
  {
    title: "Specifieke prompts voor 2F-tekst",
    by: "Docent VOG · 10 mei",
    status: "wordt toegevoegd",
  },
  {
    title: "Train-the-teacher draaiboek voor teamleiders",
    by: "Opl. manager EHL · 8 mei",
    status: "v0.5 — review",
  },
];

export function Analytics() {
  return (
    <>
      <PageHeader
        eyebrow="Voortgang & analytics · admin"
        number="∑"
        title={
          <>
            Hoe de pilot{" "}
            <span className="display-italic text-terra">echt</span> loopt.
          </>
        }
        subtitle="Een overzicht voor projectleiders en opleidingsmanagers. Aggregaten alleen, geen herleidbare data over individuele docenten."
        meta={[
          { label: "Periode", value: "wk 1 — wk 6" },
          { label: "Pilotpartners", value: "4 instellingen" },
          { label: "Update", value: "Vandaag · 09:14" },
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
            sub="kopieën · pilotperiode"
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

      <Section eyebrow="Modulevoortgang" title="Per module · pilot" className="hairline-t">
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
              wk 1 — wk 6 · pilotvenster
            </span>
          </div>
        </div>
      </Section>

      <Section eyebrow="Intakeniveau" title="Verdeling startniveau pilotgroep" className="hairline-t">
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
              79% van de pilotdeelnemers start op het niveau{" "}
              <em>beginnend</em> of <em>comfortabel</em>. Module 01 sluit goed
              aan; tijd voor versnelling van het advies naar Module 02 in week
              4–6 voor de groep die snel doorgroeit.
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

      <Section eyebrow="Stem van de docent" title="Recente feedback" className="hairline-t">
        <div className="grid gap-5 md:grid-cols-3">
          {feedback.map((f, i) => (
            <FeedbackCard key={i} data={f} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Doorontwikkeling" title="Open verbetervoorstellen" className="hairline-t">
        <div className="card overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="hairline-b bg-paper text-left">
                <th className="px-5 py-3 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                  Voorstel
                </th>
                <th className="px-5 py-3 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                  Ingediend door
                </th>
                <th className="px-5 py-3 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                  Status
                </th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody>
              {suggestions.map((s, i) => (
                <tr
                  key={i}
                  className="hairline-b last:border-0 hover:bg-paper-deep/30"
                >
                  <td className="px-5 py-4 text-[14px] text-ink">{s.title}</td>
                  <td className="px-5 py-4 text-[13px] text-ink-mute">{s.by}</td>
                  <td className="px-5 py-4">
                    <Tag
                      tone={
                        s.status.includes("ingepland")
                          ? "sage"
                          : s.status.includes("review")
                          ? "academy"
                          : "neutral"
                      }
                    >
                      {s.status}
                    </Tag>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <ChevronRight size={14} strokeWidth={1.8} className="inline text-ink-mute" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-[12.5px] text-ink-mute">
            18 voorstellen totaal · 12 verwerkt · 6 open
          </span>
          <Button variant="ghost" to="/project">
            Naar projectpagina
            <ArrowUpRight size={13} strokeWidth={1.8} />
          </Button>
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

function FeedbackCard({ data }) {
  return (
    <article className="card flex flex-col gap-4 p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={12}
              strokeWidth={1.5}
              className={i < data.rating ? "fill-terra text-terra" : "text-ink-faint"}
            />
          ))}
        </div>
        <MessageSquare size={13} strokeWidth={1.6} className="text-ink-mute" />
      </div>
      <p className="font-display text-[17px] italic leading-snug text-ink">
        “{data.quote}”
      </p>
      <div className="hairline-t pt-3 font-mono text-[10.5px] uppercase tracking-widest text-ink-mute">
        {data.role}
      </div>
    </article>
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
