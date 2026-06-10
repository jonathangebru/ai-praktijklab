import { useState, useMemo } from "react";
import * as L from "lucide-react";
import { PageHeader, Section, Tag, Footnote, Button, Divider } from "../components/ui";
import { cases, caseFilters } from "../data/cases";

const iconMap = {
  BookOpen: L.BookOpen,
  Wrench: L.Wrench,
  Telescope: L.Telescope,
  Bug: L.Bug,
  Stethoscope: L.Stethoscope,
  BarChart3: L.BarChart3,
  Languages: L.Languages,
  Calculator: L.Calculator,
  FlaskConical: L.FlaskConical,
  Landmark: L.Landmark,
  Palette: L.Palette,
  Laptop: L.Laptop,
  Compass: L.Compass,
  Users: L.Users,
  Truck: L.Truck,
  ChefHat: L.ChefHat,
  Car: L.Car,
  HardHat: L.HardHat,
  Scale: L.Scale,
  Megaphone: L.Megaphone,
  Baby: L.Baby,
  PenLine: L.PenLine,
  Shield: L.Shield,
  GraduationCap: L.GraduationCap,
  HeartHandshake: L.HeartHandshake,
  Briefcase: L.Briefcase,
};

export function Cases() {
  const [filter, setFilter] = useState("all");
  const [active, setActive] = useState(cases[0].id);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return cases.filter((c) => {
      const f = caseFilters.find((x) => x.id === filter);
      const matchFilter =
        filter === "all" ||
        filter === c.level ||
        (f?.match &&
          f.match.some((m) => c.domain.toLowerCase().includes(m)));
      const matchQuery =
        !query ||
        c.title.toLowerCase().includes(query.toLowerCase()) ||
        c.context.toLowerCase().includes(query.toLowerCase()) ||
        c.domain.toLowerCase().includes(query.toLowerCase());
      return matchFilter && matchQuery;
    });
  }, [filter, query]);

  const activeCase = cases.find((c) => c.id === active) || filtered[0];

  return (
    <>
      <PageHeader
        eyebrow="Praktijkcasussen"
        number="↳"
        title={
          <>
            Wat werkt{" "}
            <span className="display-italic text-terra">echt</span> in de klas
            — beschreven door wie het deed.
          </>
        }
        subtitle="Beschreven uitwerkingen uit vo, mbo en hbo. Geen ideeën, maar wat docenten daadwerkelijk deden, hoe leerlingen reageerden en wat we ervan leerden — inclusief risico's."
        meta={[
          { label: "Casussen", value: `${cases.length}` },
          { label: "Onderwijssoorten", value: "vo · mbo · hbo" },
          { label: "Status", value: "Aanvullend" },
        ]}
      />

      <Section className="!py-8 hairline-b">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {caseFilters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`rounded-full px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-widest transition focus-ring ${
                  filter === f.id
                    ? "bg-ink text-paper-card"
                    : "bg-paper-card text-ink-soft hover:bg-paper-deep/60"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-rule bg-paper-card px-3 py-2 text-[13px]">
            <L.Search size={14} strokeWidth={1.7} className="text-ink-mute" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Zoek op vakgebied, school of thema…"
              className="bg-transparent placeholder:text-ink-mute focus:outline-none w-72"
            />
          </div>
        </div>
      </Section>

      <Section className="!pt-10">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="space-y-3 lg:col-span-5">
            <Footnote>{filtered.length} casussen</Footnote>
            <ul className="mt-3 space-y-3">
              {filtered.map((c) => (
                <CaseRow
                  key={c.id}
                  data={c}
                  active={active === c.id}
                  onClick={() => setActive(c.id)}
                />
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7 lg:sticky lg:top-24 lg:self-start">
            {activeCase && <CaseDetail data={activeCase} />}
          </div>
        </div>
      </Section>
    </>
  );
}

function CaseRow({ data, active, onClick }) {
  const Icon = iconMap[data.icon] || L.BookMarked;
  const tones = {
    vo: "terra",
    mbo: "sage",
    hbo: "academy",
  };
  return (
    <li>
      <button
        onClick={onClick}
        className={`hairline group flex w-full items-start gap-4 rounded-xl p-4 text-left transition focus-ring ${
          active
            ? "border-rule-strong bg-paper-card shadow-soft"
            : "bg-paper-card/60 hover:bg-paper-card"
        }`}
      >
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-paper-deep/80 text-ink">
          <Icon size={16} strokeWidth={1.6} />
        </div>
        <div className="flex-1">
          <div className="mb-1 flex items-center gap-2">
            <Tag tone={tones[data.level]}>{data.level}</Tag>
            <Tag tone="neutral">{data.domain}</Tag>
          </div>
          <h4 className="font-display text-[18px] leading-snug text-ink">
            {data.title}
          </h4>
          <p className="mt-0.5 text-[12.5px] text-ink-mute">
            {data.school} · {data.duration}
          </p>
        </div>
        <L.ChevronRight
          size={14}
          strokeWidth={1.7}
          className={`mt-2 text-ink-faint transition ${
            active ? "translate-x-0.5 text-terra" : ""
          }`}
        />
      </button>
    </li>
  );
}

function CaseDetail({ data }) {
  const Icon = iconMap[data.icon] || L.BookMarked;
  const tones = {
    vo: "terra",
    mbo: "sage",
    hbo: "academy",
  };

  return (
    <article className="card-elev p-7">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-paper-deep/80 text-ink">
            <Icon size={18} strokeWidth={1.6} />
          </div>
          <div>
            <div className="mb-1.5 flex items-center gap-2">
              <Tag tone={tones[data.level]}>{data.level}</Tag>
              <Tag tone="neutral">{data.domain}</Tag>
            </div>
            <h3 className="font-display text-[24px] leading-tight text-ink">
              {data.title}
            </h3>
            <p className="mt-1 text-[12.5px] text-ink-mute">
              {data.school} · {data.duration}
            </p>
          </div>
        </div>
      </div>

      <Divider label="Casus" className="my-6" />

      <DetailBlock
        num="01"
        title="Context"
        body={data.context}
        icon={L.MapPin}
      />
      <DetailBlock
        num="02"
        title="Uitdaging voor de docent"
        body={data.challenge}
        icon={L.Compass}
      />
      <DetailBlock
        num="03"
        title="AI-ondersteunde activiteit"
        body={data.aiActivity}
        icon={L.Sparkles}
      />
      <DetailBlock
        num="04"
        title="Activiteit voor de student"
        body={data.studentActivity}
        icon={L.Users}
      />
      <DetailBlock
        num="05"
        title="Reflectie & beoordeling"
        body={data.reflection}
        icon={L.MessageCircle}
        tone="academy"
      />
      <DetailBlock
        num="06"
        title="Risico's & verantwoord gebruik"
        body={data.risks}
        icon={L.Asterisk}
        tone="terra"
      />

      <div className="hairline-t mt-6 flex items-center justify-between pt-5">
        <Footnote>Uit de onderwijspraktijk</Footnote>
        <div className="flex items-center gap-2">
          <Button variant="ghost">
            <L.Bookmark size={13} strokeWidth={1.8} />
            Bewaar casus
          </Button>
          <Button variant="primary">
            <L.ArrowUpRight size={13} strokeWidth={1.8} />
            Gebruik in mijn team
          </Button>
        </div>
      </div>
    </article>
  );
}

function DetailBlock({ num, title, body, icon: Icon, tone = "neutral" }) {
  const tones = {
    neutral: "bg-paper-card border-rule",
    terra: "bg-terra-tint/40 border-terra-soft/60",
    academy: "bg-academy-tint/40 border-academy-soft/60",
  };
  return (
    <div className={`hairline-b py-5 last:border-0`}>
      <div className="flex items-start gap-4">
        <span className="num-mark mt-1 w-10 shrink-0 text-[22px] leading-none">
          {num}
        </span>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <Icon size={14} strokeWidth={1.7} className="text-ink-mute" />
            <h4 className="font-display text-[18px] leading-tight text-ink">
              {title}
            </h4>
          </div>
          <p
            className={`mt-2 rounded-lg border p-4 text-[14.5px] leading-relaxed text-ink-soft ${tones[tone]}`}
          >
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}
