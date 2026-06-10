import { useState } from "react";
import { Link } from "react-router-dom";
import {
  LogIn,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  BookOpen,
  Send,
  Compass,
  GraduationCap,
  Award,
} from "lucide-react";
import { Wordmark } from "../components/Logo";
import { useAuth } from "../components/AuthProvider";
import { submitAccess } from "../lib/accessClient";
import { trackEvent } from "../lib/appInsights";
import { moduleList } from "../data/modules";
import { prompts } from "../data/prompts";
import { cases } from "../data/cases";

/* ──────────────────────────────────────────────────────────────────────────
 * Landing — de publieke voorkant van het platform.
 *
 * Hier hoort de marketing thuis (cijfers, principes, doelgroepen) — niet in
 * de ingelogde app. Alle tellingen zijn dynamisch berekend uit de echte
 * content, dus ze kunnen niet meer uit de pas lopen.
 * ─────────────────────────────────────────────────────────────────────── */

const LESSEN = moduleList.reduce(
  (n, m) => n + m.lessons.filter((l) => !l.isCheck).length,
  0
);
const CHECKS = moduleList.reduce(
  (n, m) => n + m.lessons.filter((l) => l.isCheck).length,
  0
);

const USPS = [
  {
    icon: BookOpen,
    text: `Twee modules, ${LESSEN} praktijklessen — morgen toepasbaar in je les`,
  },
  {
    icon: Sparkles,
    text: `Ingebouwde AI-coach en een promptbibliotheek met ${prompts.length} docentprompts`,
  },
  {
    icon: ShieldCheck,
    text: "AVG-bewust ontworpen · opslag in de EU · jouw werk blijft van jou",
  },
];

export function Login() {
  const { login } = useAuth();
  const [mode, setMode] = useState("login"); // "login" | "request" | "sent"

  function naarActie(nextMode) {
    setMode(nextMode);
    document
      .getElementById("actie")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <div className="relative isolate min-h-screen bg-paper">
      <header className="sticky top-0 z-40 hairline-b bg-paper/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Wordmark />
          <div className="flex items-center gap-3">
            <span className="pill hidden sm:inline-flex">vo · mbo · hbo</span>
            <button
              type="button"
              onClick={() => naarActie("login")}
              className="btn btn-primary focus-ring !px-5 !py-2.5 text-[13.5px]"
            >
              Inloggen
            </button>
          </div>
        </div>
      </header>

      {/* ─── Hero + actiekaart ─────────────────────────────────────────── */}
      <main>
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-12 lg:grid-cols-2 lg:gap-20 lg:pt-20">
          <div>
            <span className="eyebrow text-terra">
              AI-professionalisering voor docenten
            </span>
            <h1 className="mt-4 text-balance text-[38px] font-bold leading-[1.05] tracking-tightish text-ink sm:text-[48px]">
              AI in je les, met
              <span className="text-terra"> zelfvertrouwen</span> en
              vakdiepte.
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-[16.5px] leading-relaxed text-ink-soft">
              Het AI PraktijkLab is hét leerplatform voor docenten in vo, mbo
              en hbo. Geen theorie zonder toepassing — wat je hier leert,
              gebruik je komende lesweek.
            </p>

            <ul className="mt-8 space-y-3.5">
              {USPS.map((u, i) => {
                const chips = [
                  "bg-geel text-geel-deep",
                  "bg-sage-soft text-sage-deep",
                  "bg-academy-soft text-academy-deep",
                ];
                return (
                  <li key={u.text} className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full ${chips[i % 3]}`}
                    >
                      <u.icon size={14} strokeWidth={1.9} />
                    </span>
                    <span className="text-[14.5px] leading-relaxed text-ink-soft">
                      {u.text}
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-10 hairline-t pt-6">
              <p className="eyebrow mb-3">Gebouwd op erkende kaders</p>
              <p className="text-[13px] font-medium leading-relaxed text-ink-mute">
                UNESCO AI Competency Framework &nbsp;·&nbsp; Kennisnet
                &nbsp;·&nbsp; Npuls AI-GO &nbsp;·&nbsp; EU AI Act art. 4
              </p>
            </div>
          </div>

          <div
            id="actie"
            className="w-full max-w-md justify-self-center scroll-mt-28 lg:justify-self-end"
          >
            {mode === "sent" ? (
              <Confirmation onBack={() => setMode("login")} />
            ) : mode === "request" ? (
              <RequestForm
                onSent={() => setMode("sent")}
                onBack={() => setMode("login")}
              />
            ) : (
              <LoginCard login={login} onRequest={() => setMode("request")} />
            )}
          </div>
        </section>

        {/* ─── Cijfers — dynamisch, dus altijd waar ──────────────────────── */}
        <section className="bg-paper-warm">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-4">
            {[
              { v: String(LESSEN), l: "lessen, volledig uitgewerkt" },
              { v: String(prompts.length), l: "prompts in de bibliotheek" },
              { v: String(cases.length), l: "casussen uit vo / mbo / hbo" },
              { v: String(CHECKS), l: "kennischecks in de leerlijn" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-[44px] font-bold leading-none tracking-tightish text-ink">
                  {s.v}
                </div>
                <div className="mt-2 text-[12px] font-semibold uppercase tracking-widest text-ink-mute">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Hoe het werkt ─────────────────────────────────────────────── */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <span className="eyebrow">Hoe het werkt</span>
          <h2 className="mt-3 max-w-2xl text-[30px] font-bold leading-tight tracking-tightish text-ink sm:text-[36px]">
            Van intake tot certificaat, in je eigen tempo.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Compass,
                nr: "1",
                title: "De intake wijst je route",
                body: "Acht minuten, geen voorkennis nodig. Op basis van je ervaring en vak krijg je een advies: starten bij de basis of direct de verdieping in.",
              },
              {
                icon: GraduationCap,
                nr: "2",
                title: "Lessen met ingebouwde AI-coach",
                body: "Elke les eindigt in iets bruikbaars voor je eigen klas. Je werkruimte bewaart alles, de AI-coach denkt mee, je promptkit groeit onderweg.",
              },
              {
                icon: Award,
                nr: "3",
                title: "Certificaat per module",
                body: "Rond je een module af, dan staat je certificaat klaar — met studielast en leeruitkomsten, bruikbaar als AI Act art. 4-documentatie voor je school.",
              },
            ].map((st) => (
              <div key={st.nr} className="card p-7">
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-terra-tint text-terra">
                    <st.icon size={17} strokeWidth={1.8} />
                  </span>
                  <span className="text-[34px] font-bold leading-none text-ink-faint">
                    {st.nr}
                  </span>
                </div>
                <h3 className="mt-5 text-[19px] font-bold leading-tight text-ink">
                  {st.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                  {st.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Modules ───────────────────────────────────────────────────── */}
        <section className="hairline-t bg-paper-deep/60">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <span className="eyebrow">Het programma</span>
            <h2 className="mt-3 max-w-2xl text-[30px] font-bold leading-tight tracking-tightish text-ink sm:text-[36px]">
              Twee volwaardige modules — en de leerlijn groeit.
            </h2>
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {moduleList.map((m) => (
                <div key={m.id} className="card-elev p-7">
                  <div className="flex items-center gap-2">
                    <span className="pill">Module {m.number}</span>
                    <span className="pill">{m.level}</span>
                    <span className="pill">{m.totalHours}</span>
                  </div>
                  <h3 className="mt-4 text-[22px] font-bold leading-tight text-ink">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                    {m.intro}
                  </p>
                  <p className="mt-4 text-[12.5px] font-semibold uppercase tracking-widest text-ink-mute">
                    {m.lessons.filter((l) => !l.isCheck).length} lessen ·{" "}
                    {m.lessons.filter((l) => l.isCheck).length} kennischecks ·{" "}
                    {m.durationWeeks} weken
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[13.5px] text-ink-mute">
              In ontwikkeling: <strong className="text-ink-soft">Module 3</strong>{" "}
              (AI-geletterdheid onderwijzen · kerndoelen 2027),{" "}
              <strong className="text-ink-soft">Module 4</strong> (AI-beleid en
              de AI Act) en <strong className="text-ink-soft">Module 5</strong>{" "}
              (AI voor je eigen groei en je team).
            </p>
          </div>
        </section>

        {/* ─── Principes + AI Act ────────────────────────────────────────── */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <span className="eyebrow">Wat dit programma drijft</span>
              <h2 className="mt-3 text-[30px] font-bold leading-[1.05] tracking-tightish text-ink sm:text-[38px]">
                Niet AI-expert worden.{" "}
                <span className="text-terra">AI-bekwaam zijn.</span>
              </h2>
              <figure className="mt-8 hairline-l border-l-2 !border-terra/60 pl-6">
                <blockquote className="text-[19px] font-medium leading-snug text-ink">
                  Aanbieders en exploitanten van AI-systemen zorgen voor een
                  toereikend niveau van AI-geletterdheid bij hun personeel.
                </blockquote>
                <figcaption className="mt-3 text-[11px] font-semibold uppercase tracking-widest text-ink-mute">
                  EU AI Act · artikel 4 · van kracht sinds februari 2025
                </figcaption>
              </figure>
            </div>
            <ol className="lg:col-span-7">
              {[
                {
                  title: "AI verandert het leerproces — niet alleen het gereedschap",
                  body: "Hoe studenten lezen, schrijven, coderen en denken is onomkeerbaar veranderd. Het programma vertrekt vanuit die werkelijkheid.",
                },
                {
                  title: "Toepasbaarheid voor morgen — niet voor over twee jaar",
                  body: "Elke les eindigt met iets dat je in je volgende lesweek kunt gebruiken. Geen theorie zonder toepassing.",
                },
                {
                  title: "Verantwoord gebruik is geen bijlage",
                  body: "Privacy, bias, transparantie en academische integriteit zitten in de leerlijn, niet als bijlage achterin.",
                },
                {
                  title: "Vakdidactiek centraal — geen one-size-fits-all",
                  body: "Casussen, prompts en voorbeelden zijn afgestemd op vo, mbo en hbo en op specifieke vakgebieden.",
                },
              ].map((p, i) => (
                <li
                  key={p.title}
                  className="hairline-b grid grid-cols-[44px_1fr] gap-5 py-5 first:pt-0 last:border-0"
                >
                  <span className="text-[26px] font-bold leading-none text-terra">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-[17px] font-bold leading-snug text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-ink-soft">
                      {p.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ─── Voor wie — marquee ────────────────────────────────────────── */}
        <VoorWie />

        {/* ─── Slot-CTA ──────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="mx-auto max-w-xl text-[30px] font-bold leading-tight tracking-tightish text-ink sm:text-[36px]">
            Klaar om je team AI-bekwaam te maken?
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => naarActie("request")}
              className="btn btn-accent focus-ring"
            >
              Vraag toegang aan
              <ArrowRight size={15} strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={() => naarActie("login")}
              className="btn btn-ghost focus-ring"
            >
              <LogIn size={15} strokeWidth={1.9} />
              Ik heb al toegang
            </button>
          </div>
        </section>
      </main>

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
    </div>
  );
}

/* Voor wie — zachte marquee met doelgroepen. */
function VoorWie() {
  const list = [
    { name: "Vo-scholen", type: "vo" },
    { name: "Mbo-colleges", type: "mbo" },
    { name: "Hogescholen", type: "hbo" },
    { name: "Lerarenopleidingen", type: "hbo" },
  ];
  const strip = [...list, ...list, ...list];
  return (
    <section className="hairline-t py-16" aria-label="Voor wie">
      <div className="mx-auto max-w-6xl px-6">
        <span className="eyebrow">Voor wie</span>
        <h2 className="mt-3 text-[28px] font-bold leading-tight tracking-tightish text-ink sm:text-[34px]">
          Eén leerlijn, <span className="text-terra">elke</span>{" "}
          onderwijssoort.
        </h2>
      </div>
      <div className="marquee-mask mt-8 overflow-hidden" aria-hidden="true">
        <div className="flex w-max animate-ticker items-center gap-4 pr-4 motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:animate-none motion-reduce:px-6">
          {strip.map((p, i) => (
            <span
              key={`${p.name}-${i}`}
              className="flex shrink-0 items-center gap-3 rounded-full border border-rule bg-paper-card px-6 py-3"
            >
              <span className="text-[16px] font-bold text-ink">{p.name}</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
                {p.type}
              </span>
            </span>
          ))}
        </div>
      </div>
      <p className="sr-only">
        Gemaakt voor vo-scholen, mbo-colleges, hogescholen en
        lerarenopleidingen.
      </p>
    </section>
  );
}

function LoginCard({ login, onRequest }) {
  return (
    <div className="card-elev p-8">
      <span className="eyebrow">Docentenplatform</span>
      <h2 className="mt-2 text-[24px] font-bold leading-tight tracking-tightish text-ink">
        Welkom terug
      </h2>
      <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
        Log in met je school- of Microsoft-account om je lessen, prompts en
        voortgang te openen.
      </p>

      <button
        type="button"
        onClick={() => login("/")}
        className="btn btn-accent focus-ring mt-7 w-full"
      >
        <LogIn size={16} strokeWidth={1.9} />
        Inloggen met Microsoft
      </button>

      <p className="mt-4 text-center text-[11.5px] leading-relaxed text-ink-mute">
        Beveiligd via Microsoft Entra · AVG-proof, EU-regio
      </p>

      <div className="mt-7 hairline-t pt-6 text-center">
        <p className="text-[13.5px] text-ink-soft">Nog geen toegang?</p>
        <button
          type="button"
          onClick={onRequest}
          className="btn btn-ghost focus-ring mt-3 w-full"
        >
          Vraag toegang aan
          <ArrowRight size={14} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}

function RequestForm({ onSent, onBack }) {
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
      <h2 className="mt-2 text-[24px] font-bold leading-tight tracking-tightish text-ink">
        Plan je kennismaking
      </h2>
      <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">
        Laat je gegevens achter — Datagrid neemt contact op en zet je toegang
        klaar voor de demo.
      </p>

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
      </form>

      <button
        type="button"
        onClick={onBack}
        className="focus-ring mt-4 w-full rounded text-center text-[13px] text-ink-mute hover:text-ink"
      >
        ← Terug naar inloggen
      </button>
    </div>
  );
}

function Confirmation({ onBack }) {
  return (
    <div className="card-elev p-8 text-center">
      <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-sage-tint text-sage-deep">
        <CheckCircle2 size={26} strokeWidth={1.8} />
      </span>
      <h2 className="mt-5 text-[24px] font-bold leading-tight tracking-tightish text-ink">
        Aanvraag ontvangen
      </h2>
      <p className="mx-auto mt-3 max-w-sm text-[14px] leading-relaxed text-ink-soft">
        Bedankt voor je interesse in het AI PraktijkLab. Datagrid neemt
        binnen twee werkdagen contact met je op om je toegang en de demo in
        te plannen — je ontvangt een bevestiging per e-mail.
      </p>
      <button type="button" onClick={onBack} className="btn btn-soft focus-ring mt-7">
        Terug naar inloggen
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
