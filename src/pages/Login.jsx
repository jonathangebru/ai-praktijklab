import { useState } from "react";
import { Link } from "react-router-dom";
import {
  LogIn,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Send,
  Compass,
  GraduationCap,
  Award,
  PenLine,
  MessageSquareText,
  ChevronDown,
} from "lucide-react";
import { Wordmark } from "../components/Logo";
import { useAuth } from "../components/AuthProvider";
import { submitAccess } from "../lib/accessClient";
import { trackEvent } from "../lib/appInsights";
import { moduleList } from "../data/modules";
import { prompts } from "../data/prompts";
import { cases } from "../data/cases";

/* ──────────────────────────────────────────────────────────────────────────
 * Landing — de publieke voorkant.
 *
 * Ontwerpprincipe: content ís de decoratie. De chips die rond het
 * productvenster zweven zijn échte casustitels uit de bibliotheek, de
 * chat in het coachblok is een échte prompt, en elk cijfer wordt live
 * uit de content berekend. Niets verzonnen — ook niet in de sierlaag.
 * ─────────────────────────────────────────────────────────────────────── */

const LESSEN = moduleList.reduce(
  (n, m) => n + m.lessons.filter((l) => !l.isCheck).length,
  0
);
const CHECKS = moduleList.reduce(
  (n, m) => n + m.lessons.filter((l) => l.isCheck).length,
  0
);

/* Echte content voor de sierlaag. */
const HERO_CHIPS = [
  { tekst: cases.find((c) => c.id === "mbo-verpleegkunde-anamnese")?.title, toon: "bg-sage-soft text-sage-deep", draai: "-rotate-2" },
  { tekst: cases.find((c) => c.id === "vo-wiskunde-foutenjacht")?.title, toon: "bg-geel text-geel-deep", draai: "rotate-1" },
  { tekst: cases.find((c) => c.id === "hbo-recht-jurisprudentie")?.title, toon: "bg-academy-soft text-academy-deep", draai: "rotate-2" },
].filter((c) => c.tekst);

const PREVIEW_CASES = [
  cases.find((c) => c.id === "vo-geschiedenis-deepfake"),
  cases.find((c) => c.id === "mbo-autotechniek-hypotheseboom"),
  cases.find((c) => c.id === "hbo-hrm-bias-experiment"),
].filter(Boolean);

const COACH_PROMPT = prompts.find((p) => p.id === 1) || prompts[0];

export function Login() {
  const { login } = useAuth();

  function naarToegang() {
    document
      .getElementById("toegang")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <div className="relative isolate min-h-screen overflow-x-clip bg-paper">
      <Nav login={login} naarToegang={naarToegang} />
      <main>
        <Hero login={login} naarToegang={naarToegang} />
        <KaderBand />
        <Cijfers />
        <HoeHetWerkt />
        <Programma />
        <CasusPreview naarToegang={naarToegang} />
        <CoachSplit />
        <AiActBand naarToegang={naarToegang} />
        <Prijzen naarToegang={naarToegang} />
        <VoorWie />
        <Faq />
        <Toegang login={login} />
      </main>
      <LandingFooter />
    </div>
  );
}

/* ─── Navigatie ─────────────────────────────────────────────────────────── */
function Nav({ login, naarToegang }) {
  return (
    <header className="sticky top-0 z-40 hairline-b bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Wordmark />
        <nav className="hidden items-center gap-7 text-[13.5px] font-semibold text-ink-soft lg:flex" aria-label="Secties">
          {[
            ["#programma", "Programma"],
            ["#casussen", "Casussen"],
            ["#coach", "AI-coach"],
            ["#prijzen", "Prijzen"],
            ["#faq", "Vragen"],
          ].map(([href, label]) => (
            <a key={href} href={href} className="hover-dim focus-ring rounded">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => login("/")}
            className="hover-dim focus-ring hidden rounded px-3 py-2 text-[13.5px] font-semibold text-ink sm:block"
          >
            Inloggen
          </button>
          <button
            type="button"
            onClick={naarToegang}
            className="btn btn-accent focus-ring !px-5 !py-2.5 text-[13.5px]"
          >
            Vraag toegang aan
          </button>
        </div>
      </div>
    </header>
  );
}

/* ─── Hero — productvenster met echte casus-chips ───────────────────────── */
function Hero({ login, naarToegang }) {
  return (
    <section className="relative">
      {/* Platte pastel-compositie op de achtergrond */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 top-10 h-[420px] w-[420px] rounded-full bg-geel/50" />
        <div className="absolute -left-40 top-72 h-[340px] w-[340px] rounded-full bg-academy-soft/40" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-14 lg:grid-cols-12 lg:pt-20">
        <div className="lg:col-span-6">
          <span className="pill !border-terra-soft !bg-terra-tint !text-terra-deep">
            AI-professionalisering · vo · mbo · hbo
          </span>
          <h1 className="mt-6 text-balance text-[42px] font-extrabold leading-[1.02] tracking-tightish text-ink sm:text-[56px]">
            AI in je les, met{" "}
            <span className="text-terra">zelfvertrouwen</span> en vakdiepte.
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-[17px] leading-relaxed text-ink-soft">
            Het leerplatform waarmee docenten AI praktisch, kritisch en
            AVG-bewust leren inzetten. Geen theorie zonder toepassing — wat
            je vandaag leert, gebruik je morgen voor de klas.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <button type="button" onClick={naarToegang} className="btn btn-accent focus-ring">
              Vraag toegang aan
              <ArrowRight size={15} strokeWidth={2} />
            </button>
            <button type="button" onClick={() => login("/")} className="btn btn-ghost focus-ring">
              <LogIn size={15} strokeWidth={1.9} />
              Ik heb al toegang
            </button>
          </div>
          <p className="mt-8 text-[12.5px] font-semibold uppercase tracking-widest text-ink-mute">
            Gebouwd op UNESCO · Kennisnet · Npuls AI-GO · EU AI Act
          </p>
        </div>

        {/* Productvenster + zwevende echte casussen */}
        <div className="relative lg:col-span-6" aria-hidden="true">
          <div className="card-elev hover-grow mx-auto max-w-md p-6">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-koraal" />
              <span className="h-2.5 w-2.5 rounded-full bg-geel-soft" />
              <span className="h-2.5 w-2.5 rounded-full bg-sage-soft" />
              <span className="ml-3 text-[11px] font-semibold uppercase tracking-widest text-ink-mute">
                Mijn voortgang
              </span>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <div className="flex items-baseline justify-between text-[12.5px]">
                  <span className="font-semibold text-ink">Module 01 · Basiscursus AI</span>
                  <span className="font-bold text-terra">62%</span>
                </div>
                <div className="mt-1.5 h-2 rounded-full bg-paper-deep">
                  <div className="h-2 w-[62%] rounded-full bg-terra" />
                </div>
              </div>
              <div>
                <div className="flex items-baseline justify-between text-[12.5px]">
                  <span className="font-semibold text-ink">Module 02 · AI-geletterdheid</span>
                  <span className="font-bold text-academy">38%</span>
                </div>
                <div className="mt-1.5 h-2 rounded-full bg-paper-deep">
                  <div className="h-2 w-[38%] rounded-full bg-academy-soft" />
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-rule bg-paper px-4 py-3">
              <PenLine size={15} strokeWidth={1.9} className="shrink-0 text-geel-deep" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] font-semibold text-ink">
                  1.4 · AI voor lesvoorbereiding
                </p>
                <p className="text-[11px] text-ink-mute">75 min · in uitvoering</p>
              </div>
              <span className="rounded-full bg-geel px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-geel-deep">
                Bezig
              </span>
            </div>

            <div className="mt-3 flex items-center gap-3 rounded-2xl bg-sage-tint px-4 py-3">
              <Award size={15} strokeWidth={1.9} className="shrink-0 text-sage-deep" />
              <p className="text-[12.5px] font-semibold text-sage-deep">
                Certificaat Module 01 — klaar om te downloaden
              </p>
            </div>
          </div>

          {/* Echte casustitels als zwevende chips */}
          <div className="mt-5 flex flex-wrap justify-center gap-2.5 lg:mt-0">
            {HERO_CHIPS.map((c, i) => (
              <span
                key={c.tekst}
                className={`hover-grow max-w-[260px] rounded-2xl px-4 py-2.5 text-[12px] font-semibold leading-snug shadow-soft ${c.toon} ${c.draai} lg:absolute ${
                  i === 0 ? "lg:-left-14 lg:-top-8" : i === 1 ? "lg:-right-8 lg:top-[38%]" : "lg:left-4 lg:-bottom-9"
                }`}
              >
                {c.tekst}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Kaders ────────────────────────────────────────────────────────────── */
function KaderBand() {
  const kaders = [
    "UNESCO AI Competency Framework for Teachers",
    "Kennisnet · handreiking AI",
    "Npuls · AI-GO raamwerk",
    "EU AI Act · artikel 4",
    "SLO · kerndoelen digitale geletterdheid",
  ];
  return (
    <section className="hairline-t hairline-b bg-paper-card py-7" aria-label="Kaders">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6">
        <span className="text-[11px] font-bold uppercase tracking-widest text-ink-mute">
          Gebouwd op
        </span>
        {kaders.map((k) => (
          <span key={k} className="text-[13px] font-semibold text-ink-soft">
            {k}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ─── Cijfers — live uit de content ─────────────────────────────────────── */
function Cijfers() {
  const stats = [
    { v: LESSEN, l: "lessen, volledig uitgewerkt", toon: "text-terra" },
    { v: prompts.length, l: "prompts in de bibliotheek", toon: "text-ink" },
    { v: cases.length, l: "casussen uit vo, mbo en hbo", toon: "text-ink" },
    { v: CHECKS, l: "kennischecks in de leerlijn", toon: "text-ink" },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.l}>
            <div className={`text-[56px] font-extrabold leading-none tracking-tightish ${s.toon}`}>
              {s.v}
            </div>
            <div className="mt-2.5 max-w-[180px] text-[12px] font-semibold uppercase tracking-wider text-ink-mute">
              {s.l}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-8 text-[12px] text-ink-faint">
        Cijfers worden live berekend uit de inhoud van het platform.
      </p>
    </section>
  );
}

/* ─── Hoe het werkt ─────────────────────────────────────────────────────── */
function HoeHetWerkt() {
  const stappen = [
    {
      icon: Compass,
      titel: "De intake wijst je route",
      tekst: "Acht minuten, geen voorkennis nodig. Op basis van je ervaring en vak adviseren we waar je instapt: de basis of direct de verdieping.",
      toon: "bg-geel text-geel-deep",
    },
    {
      icon: GraduationCap,
      titel: "Lessen met ingebouwde AI-coach",
      tekst: "Elke les eindigt in iets voor je eigen klas. Je werkruimte bewaart alles, de AI-coach denkt mee en je promptkit groeit onderweg.",
      toon: "bg-sage-soft text-sage-deep",
    },
    {
      icon: Award,
      titel: "Certificaat per module",
      tekst: "Rond je een module af, dan staat je certificaat klaar — met studielast en leeruitkomsten, bruikbaar als AI Act-documentatie.",
      toon: "bg-academy-soft text-academy-deep",
    },
  ];
  return (
    <section className="hairline-t bg-paper-deep/50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <span className="eyebrow">Hoe het werkt</span>
        <h2 className="mt-3 max-w-2xl text-[32px] font-extrabold leading-[1.05] tracking-tightish text-ink sm:text-[40px]">
          Van intake tot certificaat,{" "}
          <span className="text-terra">in je eigen tempo</span>.
        </h2>
        <div className="relative mt-12 grid gap-5 md:grid-cols-3">
          <div aria-hidden="true" className="absolute left-[16%] right-[16%] top-10 hidden h-px bg-rule md:block" />
          {stappen.map((st, i) => (
            <div key={st.titel} className="card relative p-7">
              <div className="flex items-start justify-between">
                <span className={`grid h-12 w-12 place-items-center rounded-2xl ${st.toon}`}>
                  <st.icon size={20} strokeWidth={1.8} />
                </span>
                <span className="text-[44px] font-extrabold leading-none text-paper-warm">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-[19px] font-bold leading-tight text-ink">
                {st.titel}
              </h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-ink-soft">
                {st.tekst}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Programma ─────────────────────────────────────────────────────────── */
function Programma() {
  return (
    <section id="programma" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <span className="eyebrow">Het programma</span>
      <h2 className="mt-3 max-w-2xl text-[32px] font-extrabold leading-[1.05] tracking-tightish text-ink sm:text-[40px]">
        Vijf volwaardige modules —{" "}
        <span className="text-terra">één doorlopende leerlijn</span>.
      </h2>

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {moduleList.map((m, i) => (
          <article key={m.id} className={`card-elev hover-grow p-8 ${i % 2 === 0 ? "lg:-rotate-[0.4deg]" : "lg:rotate-[0.4deg]"}`}>
            <div className="flex flex-wrap items-center gap-2">
              <span className={`rounded-full px-3 py-1 text-[10.5px] font-bold uppercase tracking-wider ${["bg-terra-tint text-terra-deep","bg-academy-soft text-academy-deep","bg-sage-soft text-sage-deep","bg-koraal-tint text-koraal-deep","bg-geel text-geel-deep"][i % 5]}`}>
                Module {m.number}
              </span>
              <span className="pill">{m.level}</span>
              <span className="pill">{m.totalHours}</span>
            </div>
            <h3 className="mt-5 text-[23px] font-bold leading-tight text-ink">
              {m.title}
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
              {m.intro}
            </p>
            <ul className="mt-5 space-y-1.5">
              {m.lessons.filter((l) => !l.isCheck).slice(0, 3).map((l) => (
                <li key={l.slug} className="flex items-center gap-2.5 text-[13.5px] text-ink-soft">
                  <CheckCircle2 size={14} strokeWidth={2} className={["text-terra","text-academy","text-sage","text-koraal-deep","text-geel-deep"][i % 5]} />
                  {l.number} · {l.title}
                </li>
              ))}
              <li className="pl-6 text-[12.5px] font-semibold text-ink-mute">
                + {m.lessons.filter((l) => !l.isCheck).length - 3} lessen en{" "}
                {m.lessons.filter((l) => l.isCheck).length} kennischecks
              </li>
            </ul>
          </article>
        ))}
      </div>

    </section>
  );
}

/* ─── Casussen — drie échte uit de bibliotheek ──────────────────────────── */
function CasusPreview({ naarToegang }) {
  const tonen = ["bg-geel text-geel-deep", "bg-sage-soft text-sage-deep", "bg-academy-soft text-academy-deep"];
  return (
    <section id="casussen" className="hairline-t scroll-mt-24 bg-paper-deep/50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow">Uit de casusbibliotheek</span>
            <h2 className="mt-3 max-w-xl text-[32px] font-extrabold leading-[1.05] tracking-tightish text-ink sm:text-[40px]">
              {cases.length} casussen uit échte lespraktijk.
            </h2>
          </div>
          <p className="max-w-sm text-[14px] leading-relaxed text-ink-soft">
            Per vak en per niveau, met wat wél werkte, wat tegenviel en welke
            afspraken je vooraf maakt. Geen succesverhalen-PR.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {PREVIEW_CASES.map((c, i) => (
            <article key={c.id} className="card hover-grow flex flex-col p-7">
              <div className="flex items-center justify-between">
                <span className={`rounded-full px-3 py-1 text-[10.5px] font-bold uppercase tracking-wider ${tonen[i]}`}>
                  {c.level}
                </span>
                <span className="text-[11px] font-semibold text-ink-mute">
                  {c.duration}
                </span>
              </div>
              <h3 className="mt-4 text-[18px] font-bold leading-snug text-ink">
                {c.title}
              </h3>
              <p className="mt-1.5 text-[12px] font-semibold uppercase tracking-wider text-ink-mute">
                {c.domain}
              </p>
              <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-ink-soft">
                {c.challenge}
              </p>
            </article>
          ))}
        </div>

        <button type="button" onClick={naarToegang} className="btn btn-ghost focus-ring mt-9">
          Bekijk alle {cases.length} casussen na aanmelding
          <ArrowRight size={14} strokeWidth={2} />
        </button>
      </div>
    </section>
  );
}

/* ─── AI-coach + promptbibliotheek ──────────────────────────────────────── */
function CoachSplit() {
  return (
    <section id="coach" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <span className="eyebrow">AI-coach & promptbibliotheek</span>
          <h2 className="mt-3 text-[32px] font-extrabold leading-[1.05] tracking-tightish text-ink sm:text-[40px]">
            Oefen met AI, <span className="text-terra">ín</span> de les die je
            volgt.
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-soft">
            Elke les heeft werkruimtes waarin je direct met AI oefent — met
            een coach die meedenkt over jouw lesontwerp, feedback en
            toetsing. De {prompts.length} prompts uit de bibliotheek zijn
            vakgericht, direct kopieerbaar en groeien mee in je eigen
            promptkit.
          </p>
          <ul className="mt-7 space-y-3">
            {[
              "AI-coach die vragen stelt in plaats van antwoorden voorzegt",
              "Werk wordt automatisch bewaard — ook tussen apparaten",
              "Eigen promptkit, opgebouwd terwijl je leert",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-[14.5px] text-ink-soft">
                <CheckCircle2 size={16} strokeWidth={2} className="mt-0.5 shrink-0 text-sage" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Chat-mockup met een échte prompt uit de bibliotheek */}
        <div className="card-elev p-6" aria-hidden="true">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-ink-mute">
            <MessageSquareText size={13} strokeWidth={2} />
            Promptbibliotheek · {COACH_PROMPT.title}
          </div>
          <div className="mt-5 rounded-2xl rounded-tl-md bg-paper-deep px-5 py-4">
            <p className="text-[13px] leading-relaxed text-ink-soft">
              {COACH_PROMPT.body.slice(0, 220)}…
            </p>
          </div>
          <div className="mt-3 ml-8 rounded-2xl rounded-tr-md bg-terra-tint px-5 py-4">
            <p className="text-[13px] font-semibold leading-relaxed text-terra-deep">
              Tip van de redactie: {COACH_PROMPT.tip}
            </p>
          </div>
          <div className="mt-5 flex items-center justify-between rounded-full border border-rule bg-paper px-5 py-3">
            <span className="text-[13px] text-ink-mute">Bewaar in mijn promptkit…</span>
            <Sparkles size={15} strokeWidth={1.9} className="text-terra" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── AI Act-band ───────────────────────────────────────────────────────── */
function AiActBand({ naarToegang }) {
  return (
    <section className="bg-paper-warm">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <span className="eyebrow !text-ink-soft">Waarom nu</span>
          <blockquote className="mt-4 max-w-3xl text-balance text-[26px] font-bold leading-snug tracking-tightish text-ink sm:text-[32px]">
            "Aanbieders en exploitanten van AI-systemen zorgen voor een
            toereikend niveau van{" "}
            <span className="text-terra">AI-geletterdheid</span> bij hun
            personeel."
          </blockquote>
          <p className="mt-4 text-[12px] font-bold uppercase tracking-widest text-ink-mute">
            EU AI Act · artikel 4 · van kracht sinds februari 2025 · handhaving vanaf augustus 2026
          </p>
        </div>
        <div className="lg:col-span-4">
          <div className="card p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-sage-soft text-sage-deep">
                <ShieldCheck size={18} strokeWidth={1.9} />
              </span>
              <p className="text-[14px] font-bold leading-snug text-ink">
                Certificaten als documentatie voor je bestuur
              </p>
            </div>
            <p className="mt-3 text-[13px] leading-relaxed text-ink-soft">
              Elke afgeronde module levert een certificaat met studielast en
              leeruitkomsten — direct bruikbaar als onderbouwing van de
              AI-geletterdheidsplicht.
            </p>
            <button type="button" onClick={naarToegang} className="btn btn-primary focus-ring mt-5 w-full !py-2.5 text-[13px]">
              Regel het voor je team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Prijzen — drie plannen, geankerd aan het CAO-budget ──────────────── */
function Prijzen({ naarToegang }) {
  const plannen = [
    {
      naam: "Docent",
      prijs: "€249",
      eenheid: "per jaar",
      pitch: "Voor de docent die zelf aan de slag wil — declareerbaar uit je persoonlijke scholingsbudget (€500–600, cao vo/mbo).",
      punten: [
        "Alle 5 modules · 36 lessen",
        "AI-coach, promptbibliotheek en casussen",
        "Certificaat per module (AI Act art. 4)",
      ],
      cta: "Vraag toegang aan",
      uitgelicht: false,
    },
    {
      naam: "Team",
      prijs: "€149",
      eenheid: "per docent · per jaar · vanaf 10",
      pitch: "Voor vakgroepen en teams die samen AI-bekwaam worden — inclusief inzicht voor de teamleider.",
      punten: [
        "Alles uit Docent, voor het hele team",
        "Managementdashboard (geanonimiseerd)",
        "AI Act-documentatie per teamlid",
      ],
      cta: "Plan een teamdemo",
      uitgelicht: true,
    },
    {
      naam: "School",
      prijs: "€4.950",
      eenheid: "per jaar · tot 50 docenten",
      pitch: "Schoolbrede licentie als AI-geletterdheidsinfrastructuur — effectief €99 per docent. Daarboven €79 per extra docent.",
      punten: [
        "Alles uit Team, schoolbreed",
        "Bewijslast AI Act voor het bestuur",
        "Prioriteitsupport en onboarding",
      ],
      cta: "Vraag een offerte aan",
      uitgelicht: false,
    },
  ];
  return (
    <section id="prijzen" className="hairline-t scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <span className="eyebrow">Prijzen</span>
        <h2 className="mt-3 max-w-2xl text-[32px] font-extrabold leading-[1.05] tracking-tightish text-ink sm:text-[40px]">
          Past binnen het scholingsbudget{" "}
          <span className="text-terra">dat er al is</span>.
        </h2>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft">
          Elke docent in vo en mbo heeft een persoonlijk
          professionaliseringsbudget van €500–600 per jaar (cao). Eén losse
          AI-cursusdag kost elders €395–899 — hier krijg je er een jaar lang
          vijf modules, een AI-coach en certificaten voor.
        </p>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {plannen.map((p) => (
            <article
              key={p.naam}
              className={
                p.uitgelicht
                  ? "card-elev relative flex flex-col border-2 !border-terra p-8"
                  : "card relative flex flex-col p-8"
              }
            >
              {p.uitgelicht && (
                <span className="absolute -top-3.5 left-8 rounded-full bg-terra px-3.5 py-1 text-[10.5px] font-bold uppercase tracking-wider text-white">
                  Meest gekozen
                </span>
              )}
              <h3 className="text-[15px] font-bold uppercase tracking-wider text-ink-mute">
                {p.naam}
              </h3>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-[44px] font-extrabold leading-none tracking-tightish text-ink">
                  {p.prijs}
                </span>
                <span className="text-[12.5px] font-semibold text-ink-mute">
                  {p.eenheid}
                </span>
              </div>
              <p className="mt-4 text-[13.5px] leading-relaxed text-ink-soft">
                {p.pitch}
              </p>
              <ul className="mt-5 flex-1 space-y-2.5">
                {p.punten.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-[13.5px] text-ink-soft">
                    <CheckCircle2
                      size={15}
                      strokeWidth={2}
                      className={
                        p.uitgelicht
                          ? "mt-0.5 shrink-0 text-terra"
                          : "mt-0.5 shrink-0 text-sage"
                      }
                    />
                    {t}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={naarToegang}
                className={
                  p.uitgelicht
                    ? "btn btn-accent focus-ring mt-7 w-full"
                    : "btn btn-ghost focus-ring mt-7 w-full"
                }
              >
                {p.cta}
              </button>
            </article>
          ))}
        </div>

        <p className="mt-6 text-[12.5px] text-ink-mute">
          Prijzen excl. btw · elke samenwerking begint met een gratis
          kennismaking en demo · hbo-instellingen kiezen team- of
          schoollicentie (professionalisering loopt daar via de werkgever).
        </p>
      </div>
    </section>
  );
}

/* ─── Voor wie — marquee ────────────────────────────────────────────────── */
function VoorWie() {
  const list = [
    { name: "Vo-scholen", type: "vo" },
    { name: "Mbo-colleges", type: "mbo" },
    { name: "Hogescholen", type: "hbo" },
    { name: "Lerarenopleidingen", type: "hbo" },
  ];
  const strip = [...list, ...list, ...list];
  return (
    <section className="py-16" aria-label="Voor wie">
      <div className="mx-auto max-w-6xl px-6">
        <span className="eyebrow">Voor wie</span>
        <h2 className="mt-3 text-[28px] font-extrabold leading-tight tracking-tightish text-ink sm:text-[34px]">
          Eén leerlijn, <span className="text-terra">elke</span> onderwijssoort.
        </h2>
      </div>
      <div className="marquee-mask mt-8 overflow-hidden" aria-hidden="true">
        <div className="flex w-max animate-ticker items-center gap-4 pr-4 motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:animate-none motion-reduce:px-6">
          {strip.map((p, i) => (
            <span key={`${p.name}-${i}`} className="flex shrink-0 items-center gap-3 rounded-full border border-rule bg-paper-card px-6 py-3">
              <span className="text-[16px] font-bold text-ink">{p.name}</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
                {p.type}
              </span>
            </span>
          ))}
        </div>
      </div>
      <p className="sr-only">
        Gemaakt voor vo-scholen, mbo-colleges, hogescholen en lerarenopleidingen.
      </p>
    </section>
  );
}

/* ─── FAQ — eerlijke antwoorden ─────────────────────────────────────────── */
function Faq() {
  const vragen = [
    {
      q: "Hoeveel tijd kost een module?",
      a: "Een module vraagt 8 tot 22 uur, verdeeld over vijf tot acht weken, volledig in eigen tempo. Elke les duurt 40 tot 90 minuten en eindigt in iets dat je direct in je les of school gebruikt.",
    },
    {
      q: "Hoe zit het met de AVG en onze gegevens?",
      a: "Opslag in de EU (regio West-Europa), versleuteld, geen verkoop of advertenties. Docenten kunnen hun werk altijd inzien, meenemen en in één klik definitief verwijderen. De volledige verklaring staat openbaar op de privacypagina.",
    },
    {
      q: "Voor wie is het platform bedoeld?",
      a: "Docenten in vo, mbo en hbo — van eerste kennismaking tot verdieping voor ICT-vakken. Teamleiders en schoolleiders krijgen een eigen rol met geanonimiseerde voortgangsinzichten voor hun team.",
    },
    {
      q: "Wat kost het en hoe starten we?",
      a: "Een individueel abonnement kost €249 per jaar — dat past binnen je persoonlijke scholingsbudget (€500–600 volgens de cao vo/mbo). Teams vanaf 10 docenten betalen €149 per docent per jaar, een schoolbrede licentie is €4.950 per jaar tot 50 docenten. Starten begint altijd met een gratis kennismaking via het formulier.",
    },
  ];
  return (
    <section id="faq" className="hairline-t scroll-mt-24 bg-paper-deep/50">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <span className="eyebrow">Veelgestelde vragen</span>
        <h2 className="mt-3 text-[32px] font-extrabold leading-[1.05] tracking-tightish text-ink">
          Goed om te weten.
        </h2>
        <div className="mt-9 space-y-3">
          {vragen.map((v) => (
            <details key={v.q} className="card group p-0">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-[15.5px] font-bold text-ink [&::-webkit-details-marker]:hidden">
                {v.q}
                <ChevronDown
                  size={17}
                  strokeWidth={2}
                  className="shrink-0 text-ink-mute transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <p className="px-6 pb-6 text-[14px] leading-relaxed text-ink-soft">
                {v.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Toegang — het formulier ───────────────────────────────────────────── */
function Toegang({ login }) {
  const [sent, setSent] = useState(false);
  return (
    <section id="toegang" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <span className="eyebrow">Aan de slag</span>
          <h2 className="mt-3 text-[32px] font-extrabold leading-[1.05] tracking-tightish text-ink sm:text-[40px]">
            Klaar om je team{" "}
            <span className="text-terra">AI-bekwaam</span> te maken?
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-soft">
            Laat je gegevens achter en Datagrid neemt binnen twee werkdagen
            contact op — voor een demo, je toegang en een aanpak die past bij
            je school.
          </p>
          <ul className="mt-7 space-y-3">
            {[
              "Demo voor jou of je hele team",
              "Toegang met je bestaande Microsoft-schoolaccount",
              "Start per docent, per team of schoolbreed",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-[14.5px] text-ink-soft">
                <CheckCircle2 size={16} strokeWidth={2} className="mt-0.5 shrink-0 text-terra" />
                {t}
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => login("/")}
            className="hover-dim focus-ring mt-8 inline-flex items-center gap-2 rounded text-[14px] font-bold text-ink"
          >
            <LogIn size={15} strokeWidth={2} />
            Al toegang? Log direct in
          </button>
        </div>

        <div className="w-full max-w-md justify-self-center lg:justify-self-end">
          {sent ? (
            <Confirmation onBack={() => setSent(false)} />
          ) : (
            <RequestForm onSent={() => setSent(true)} />
          )}
        </div>
      </div>
    </section>
  );
}

function RequestForm({ onSent }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organisation: "",
    role: "Docent mbo",
    message: "",
    website: "", // honeypot — blijft leeg bij echte mensen
  });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      setError("Vul in elk geval je naam en e-mailadres in.");
      return;
    }
    setBusy(true);
    setError("");
    const ok = await submitAccess(form);
    setBusy(false);
    if (ok) {
      trackEvent("access-requested", { org: form.organisation || "onbekend" });
      onSent();
    } else {
      setError("Versturen lukte niet. Probeer het over een paar minuten opnieuw.");
    }
  }

  return (
    <div className="card-elev p-8">
      <span className="eyebrow">Toegang aanvragen</span>
      <h3 className="mt-2 text-[22px] font-bold leading-tight tracking-tightish text-ink">
        Plan je kennismaking
      </h3>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
        <Field label="Naam" required>
          <input
            type="text"
            value={form.name}
            onChange={set("name")}
            autoComplete="name"
            className="input-base"
            placeholder="Voor- en achternaam"
            required
          />
        </Field>
        <Field label="E-mailadres" required>
          <input
            type="email"
            value={form.email}
            onChange={set("email")}
            autoComplete="email"
            className="input-base"
            placeholder="naam@school.nl"
            required
          />
        </Field>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="School / instelling">
            <input
              type="text"
              value={form.organisation}
              onChange={set("organisation")}
              autoComplete="organization"
              className="input-base"
              placeholder="Naam van je school"
            />
          </Field>
          <Field label="Functie">
            <select value={form.role} onChange={set("role")} className="input-base">
              <option>Docent vo</option>
              <option>Docent mbo</option>
              <option>Docent hbo</option>
              <option>Teamleider / management</option>
              <option>Anders</option>
            </select>
          </Field>
        </div>
        <Field label="Waar wil je AI voor inzetten? (optioneel)">
          <textarea
            value={form.message}
            onChange={set("message")}
            rows={3}
            className="input-base resize-none"
            placeholder="Bijv. lesvoorbereiding, feedback, toetsing…"
          />
        </Field>

        {/* Honeypot — onzichtbaar voor mensen, onweerstaanbaar voor bots */}
        <input
          type="text"
          value={form.website}
          onChange={set("website")}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
        />

        {error && (
          <p className="rounded-lg bg-terra-tint px-3.5 py-2.5 text-[12.5px] leading-relaxed text-terra-deep">
            {error}
          </p>
        )}

        <button type="submit" disabled={busy} className="btn btn-accent focus-ring w-full disabled:opacity-60">
          <Send size={15} strokeWidth={1.9} />
          {busy ? "Versturen…" : "Verstuur aanvraag"}
        </button>
        <p className="text-center text-[11.5px] leading-relaxed text-ink-mute">
          Binnen twee werkdagen reactie · geen nieuwsbrief, geen spam
        </p>
      </form>
    </div>
  );
}

function Confirmation({ onBack }) {
  return (
    <div className="card-elev p-8 text-center">
      <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-sage-tint text-sage-deep">
        <CheckCircle2 size={26} strokeWidth={1.8} />
      </span>
      <h3 className="mt-5 text-[22px] font-bold leading-tight tracking-tightish text-ink">
        Aanvraag ontvangen
      </h3>
      <p className="mx-auto mt-3 max-w-sm text-[14px] leading-relaxed text-ink-soft">
        Bedankt voor je interesse in het AI PraktijkLab. Datagrid neemt
        binnen twee werkdagen contact met je op — je ontvangt een bevestiging
        per e-mail.
      </p>
      <button type="button" onClick={onBack} className="btn btn-soft focus-ring mt-7">
        Nog een aanvraag doen
      </button>
    </div>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block text-left">
      <span className="mb-1.5 block text-[12.5px] font-semibold text-ink">
        {label}
        {required && <span className="text-terra"> *</span>}
      </span>
      {children}
    </label>
  );
}

/* ─── Footer ────────────────────────────────────────────────────────────── */
function LandingFooter() {
  return (
    <footer className="hairline-t bg-paper-deep">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-[12.5px] text-ink-mute sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 Datagrid · AI PraktijkLab</span>
        <div className="flex items-center gap-4">
          <Link to="/privacy" className="hover-dim focus-ring rounded">
            Privacy & AVG
          </Link>
          <Link to="/toegankelijkheid" className="hover-dim focus-ring rounded">
            Toegankelijkheid
          </Link>
        </div>
      </div>
    </footer>
  );
}
