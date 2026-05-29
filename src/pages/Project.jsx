import { useState } from "react";
import {
  Send,
  Compass,
  Sprout,
  Users,
  Repeat,
  Rocket,
  CheckCircle2,
  Circle,
  Asterisk,
  GraduationCap,
  Building2,
  BookMarked,
  ArrowRight,
} from "lucide-react";
import { PageHeader, Section, Button, Tag, Footnote, Divider } from "../components/ui";

const partners = [
  {
    name: "Veluwse Onderwijsgroep",
    level: "vo",
    location: "Apeldoorn e.o.",
    role: "Pilot · onderbouw + bovenbouw",
    teachers: 14,
    color: "terra",
  },
  {
    name: "Etty Hillesum Lyceum",
    level: "vo",
    location: "Deventer",
    role: "Pilot · taalvakken + maatschappij",
    teachers: 11,
    color: "terra",
  },
  {
    name: "Aventus",
    level: "mbo",
    location: "Apeldoorn / Deventer / Zutphen",
    role: "Penvoerder · meerdere opleidingen",
    teachers: 22,
    color: "sage",
  },
  {
    name: "Saxion",
    level: "hbo",
    location: "Enschede / Deventer",
    role: "Verdieping Module 02 · ICT en lerarenopleiding",
    teachers: 18,
    color: "academy",
  },
];

const fases = [
  {
    nr: "01",
    title: "Intake & behoefteanalyse",
    period: "wk 1 — 3",
    icon: Compass,
    body: "Verkennende gesprekken met opleidingsmanagers en docenten. Niveauscan met huidige tools. Output: scherp beeld van leervragen per instelling.",
    status: "done",
    deliverables: ["Stakeholdergesprekken", "Niveauscan docentpopulatie", "Vastgesteld programmakader"],
  },
  {
    nr: "02",
    title: "Ontwerp modules",
    period: "wk 3 — 8",
    icon: Sprout,
    body: "Co-ontwerp met onderwijsexperts uit elke instelling. Iteratief, met tussentoetsen op didactische kwaliteit en toepasbaarheid in vo/mbo/hbo.",
    status: "active",
    deliverables: ["Modulekader Module 01", "Modulekader Module 02", "Promptbibliotheek v1"],
  },
  {
    nr: "03",
    title: "Pilot met docentgroep",
    period: "wk 8 — 14",
    icon: Users,
    body: "Drie pilotgroepen (één per onderwijssoort). Begeleide doorloop met train-the-teacher elementen. Wekelijkse korte feedbacksessies.",
    status: "queued",
    deliverables: ["Pilotgroepen samengesteld", "Wekelijkse feedbacksessies", "Korte tussenrapportage"],
  },
  {
    nr: "04",
    title: "Feedback & doorontwikkeling",
    period: "wk 14 — 18",
    icon: Repeat,
    body: "Kort-cyclisch verbeteren op basis van pilotfeedback. Casussen worden aangescherpt, prompts gefinaliseerd, intake gekalibreerd.",
    status: "queued",
    deliverables: ["Update modules v2", "Geanonimiseerde casussen", "Intake-kalibratie"],
  },
  {
    nr: "05",
    title: "Brede uitrol binnen VABOK",
    period: "vanaf wk 18",
    icon: Rocket,
    body: "Schaalslag naar bredere docentpopulatie. Train-the-teacher kernteam per instelling. Lange-termijn beheer en doorontwikkelplan.",
    status: "queued",
    deliverables: ["Kernteam per instelling", "Beheerafspraken", "Roadmap 2026-2027"],
  },
];

export function Project() {
  return (
    <>
      <ProjectHero />
      <Roadmap />
      <Partners />
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
      <div className="relative px-10 pb-14 pt-14">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <Tag tone="ink">
            <Asterisk size={10} strokeWidth={2.5} />
            VABOK · 2026 — 2027
          </Tag>
          <Tag tone="terra">vo</Tag>
          <Tag tone="sage">mbo</Tag>
          <Tag tone="academy">hbo</Tag>
        </div>

        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Footnote>Project & roadmap</Footnote>
            <h1 className="mt-3 font-display text-balance text-[34px] font-normal leading-[1.05] tracking-tightish text-ink sm:text-[44px] lg:text-[56px] lg:leading-[1.02]">
              Eén leerlijn,{" "}
              <span className="display-italic text-terra">vier instellingen</span>,
              een gedeelde verantwoordelijkheid.
            </h1>
            <p className="mt-5 max-w-3xl text-pretty text-[16.5px] leading-relaxed text-ink-soft">
              VABOK is de samenwerking tussen Veluwse Onderwijsgroep, Etty
              Hillesum Lyceum, Aventus en Saxion. Dit platform is ontworpen om
              docenten in vo, mbo en hbo gerichte AI-professionalisering te
              bieden — schaalbaar per instelling, met behoud van vakdidactische
              eigenheid.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <Button variant="accent">
                <Send size={14} strokeWidth={1.8} />
                Plan een verkenningsgesprek
              </Button>
              <Button variant="ghost">
                Download programmakader (PDF)
              </Button>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="card-elev p-6">
              <Footnote>Status</Footnote>
              <h3 className="mt-1 font-display text-[22px] leading-tight">
                Fase 02 · ontwerp
              </h3>

              <ul className="mt-5 space-y-2 text-[13px]">
                {[
                  { l: "Modulekader 01", v: "afgerond" },
                  { l: "Modulekader 02", v: "in afronding" },
                  { l: "Promptbibliotheek", v: "v0.4 — live" },
                  { l: "Pilotwerving", v: "klaar voor start" },
                ].map((it) => (
                  <li key={it.l} className="flex items-center justify-between gap-3">
                    <span className="text-ink-soft">{it.l}</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-ink">
                      {it.v}
                    </span>
                  </li>
                ))}
              </ul>

              <Divider label="Eerstvolgend" className="my-5" />

              <div className="text-[13px] text-ink-soft">
                <div className="font-display text-[17px] text-ink">
                  Pilotstart maandag 16 juni
                </div>
                <div className="mt-1">
                  Drie groepen, één per onderwijssoort. Eerste feedbacksessie
                  vrijdag 20 juni.
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  return (
    <Section eyebrow="Roadmap" title="Vijf fases · kort-cyclisch verbeteren">
      <div className="relative grid gap-5 lg:grid-cols-5">
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 top-9 hidden h-px bg-rule lg:block"
        />
        {fases.map((f) => (
          <RoadmapStep key={f.nr} fase={f} />
        ))}
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {fases.map((f) => (
          <FaseDetail key={`d-${f.nr}`} fase={f} />
        ))}
      </div>
    </Section>
  );
}

function RoadmapStep({ fase: f }) {
  const Icon = f.icon;
  const colors = {
    done: "bg-sage text-paper-card",
    active: "bg-terra text-paper-card",
    queued: "bg-paper-card text-ink-mute border-rule border",
  };
  return (
    <div className="relative">
      <div
        className={`grid h-[72px] w-[72px] place-items-center rounded-full ${colors[f.status]}`}
      >
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
          {f.status === "done" && (
            <>
              <CheckCircle2 size={12} className="text-sage" /> Afgerond
            </>
          )}
          {f.status === "active" && (
            <>
              <span className="h-2 w-2 animate-soft-pulse rounded-full bg-terra" />{" "}
              In uitvoering
            </>
          )}
          {f.status === "queued" && (
            <>
              <Circle size={12} className="text-ink-faint" /> Gepland
            </>
          )}
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
        <h4 className="font-display text-[20px] leading-tight">{f.title}</h4>
      </div>
      <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">{f.body}</p>

      <Divider label="Opbrengsten" className="my-4" />
      <ul className="space-y-1.5">
        {f.deliverables.map((d) => (
          <li key={d} className="flex items-center gap-2 text-[13px] text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-terra" />
            {d}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Partners() {
  return (
    <Section eyebrow="VABOK · partners" title="Vier instellingen, één programma" className="hairline-t">
      <div className="grid gap-5 md:grid-cols-2">
        {partners.map((p) => (
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
    <article className="card flex items-start justify-between gap-5 p-6">
      <div className="flex items-start gap-4">
        <div
          className={`grid h-12 w-12 place-items-center rounded-xl ${tones[data.color]}`}
        >
          <Building2 size={20} strokeWidth={1.5} />
        </div>
        <div>
          <div className="mb-1.5 flex items-center gap-2">
            <Tag tone={data.color}>{data.level}</Tag>
            <Tag tone="neutral">{data.location}</Tag>
          </div>
          <h4 className="font-display text-[22px] leading-tight">
            {data.name}
          </h4>
          <p className="mt-1 max-w-md text-[13px] text-ink-soft">{data.role}</p>
        </div>
      </div>
      <div className="text-right">
        <div className="num-mark text-[34px] leading-none">{data.teachers}</div>
        <Footnote>docenten · pilot</Footnote>
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
          <p className="text-[16px] leading-relaxed text-ink-soft">
            Eén leerlijn, drie aansluitingen. Vo-docenten leren met casussen uit
            de onderbouw en taalvakken. Mbo-docenten met beroepsgerichte
            praktijksituaties. Hbo-docenten met projectonderwijs en onderzoek.
            De kern is gedeeld, de toepassing is van de instelling.
          </p>
          <div className="mt-6 rounded-xl bg-paper-card p-5 ring-1 ring-rule">
            <Footnote>Garantie</Footnote>
            <p className="mt-2 font-display text-[18px] italic leading-snug">
              Iedere VABOK-instelling kan eigen casussen, prompts en
              accentleggingen toevoegen — zonder de leerlijn te splitsen.
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
                <h4 className="mt-3 font-display text-[19px] leading-tight">
                  {c.title}
                </h4>
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
      eyebrow="Train-the-teacher"
      title="Docenten bekwaam, dan ambassadeur"
      className="hairline-t"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {[
          {
            icon: GraduationCap,
            num: "01",
            title: "Bekwaam",
            body: "Docent doorloopt het programma zelf met begeleiding, levert eigen materiaal op.",
          },
          {
            icon: BookMarked,
            num: "02",
            title: "Begeleid",
            body: "Docent begeleidt twee collega's met dezelfde lessen en casussen, met co-reflectie.",
          },
          {
            icon: Rocket,
            num: "03",
            title: "Ambassadeur",
            body: "Docent host eigen sessies binnen de instelling en deelt nieuwe casussen met VABOK.",
          },
        ].map((s) => (
          <article key={s.num} className="card flex flex-col gap-4 p-6">
            <div className="flex items-start justify-between">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-paper-deep/70 text-ink">
                <s.icon size={18} strokeWidth={1.6} />
              </div>
              <span className="num-mark text-[28px] leading-none">{s.num}</span>
            </div>
            <h4 className="font-display text-[22px] leading-tight">{s.title}</h4>
            <p className="text-[14px] leading-relaxed text-ink-soft">{s.body}</p>
            <div className="hairline-t flex items-center justify-between pt-3 text-[12px] text-ink-mute">
              <span className="font-mono uppercase tracking-widest">Schaal</span>
              <span>{s.num === "01" ? "1 op 1" : s.num === "02" ? "1 op 2" : "1 op 8+"}</span>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function FeedbackPanel() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);

  function submit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setName("");
      setRole("");
      setMsg("");
      setSent(false);
    }, 2400);
  }

  return (
    <Section
      eyebrow="Stakeholder-feedback"
      title="Welk inzicht ontbreekt nog in dit programma?"
      className="hairline-t"
    >
      <div className="grid gap-10 lg:grid-cols-12">
        <form onSubmit={submit} className="card-elev p-7 lg:col-span-7">
          <Footnote>Korte feedback · ~2 min</Footnote>
          <h3 className="mt-1 font-display text-[24px] leading-tight">
            Vertel ons waar dit programma de plank mist
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Field label="Naam">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Voornaam Achternaam"
                className="w-full bg-transparent text-[14px] focus:outline-none"
              />
            </Field>
            <Field label="Rol & instelling">
              <input
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="bv. Docent NL, Etty Hillesum Lyceum"
                className="w-full bg-transparent text-[14px] focus:outline-none"
              />
            </Field>
          </div>
          <div className="mt-4">
            <Field label="Wat zou je willen toevoegen, aanpassen of weghalen?">
              <textarea
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                rows={5}
                placeholder="Bijvoorbeeld: een casus voor bovenbouw vwo Engels, of een diepteles over toetsing in mbo niveau 2…"
                className="w-full resize-none bg-transparent text-[14px] focus:outline-none"
              />
            </Field>
          </div>
          <div className="mt-5 flex items-center justify-between">
            <span className="text-[12px] text-ink-mute">
              Wordt anoniem gedeeld met het VABOK-team.
            </span>
            <Button
              variant="accent"
              type="submit"
              className={sent ? "!bg-sage hover:!bg-sage" : ""}
            >
              {sent ? (
                <>
                  <CheckCircle2 size={14} strokeWidth={1.8} />
                  Verstuurd · dank je wel
                </>
              ) : (
                <>
                  <Send size={14} strokeWidth={1.8} />
                  Verstuur feedback
                </>
              )}
            </Button>
          </div>
        </form>

        <aside className="lg:col-span-5">
          <Footnote>Wat doen we ermee?</Footnote>
          <ul className="mt-3 space-y-4">
            {[
              {
                num: "01",
                t: "Wekelijks lezen",
                b: "Het ontwerpteam leest álle feedback binnen één week.",
              },
              {
                num: "02",
                t: "Cluster & beslis",
                b: "We clusteren naar thema en bepalen wat in welke versie meegaat.",
              },
              {
                num: "03",
                t: "Terugkoppeling",
                b: "Je krijgt — als je dat wilt — een korte mail wanneer jouw punt in een nieuwe versie staat.",
              },
            ].map((s) => (
              <li key={s.num} className="hairline-b flex gap-4 pb-4 last:border-0">
                <span className="num-mark text-[22px] leading-none">{s.num}</span>
                <div>
                  <h4 className="font-display text-[18px] leading-snug">{s.t}</h4>
                  <p className="mt-1 text-[13.5px] text-ink-soft">{s.b}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <Button variant="ghost" to="/analytics">
              Bekijk huidige feedbacknota's
              <ArrowRight size={13} strokeWidth={1.8} />
            </Button>
          </div>
        </aside>
      </div>
    </Section>
  );
}

function Field({ label, children }) {
  return (
    <label className="hairline block rounded-lg bg-paper-card px-3 py-2.5 focus-within:border-rule-strong">
      <div className="mb-0.5 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
        {label}
      </div>
      {children}
    </label>
  );
}
