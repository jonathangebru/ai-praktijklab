import { useState } from "react";
import {
  LogIn,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  BookOpen,
  Send,
} from "lucide-react";
import { Wordmark } from "../components/Logo";
import { useAuth } from "../components/AuthProvider";
import { submitAccess } from "../lib/accessClient";
import { trackEvent } from "../lib/appInsights";

/* ──────────────────────────────────────────────────────────────────────────
 * Login — entree van het platform.
 *
 * Links het verhaal (enterprise-licht: wit, navy, één blauw accent),
 * rechts de actie: inloggen met Microsoft, of — voor wie nog geen toegang
 * heeft — een toegangsaanvraag die bij Datagrid binnenkomt. De aanvrager
 * ziet direct een bevestiging; de beheerder handelt de aanvraag af vanuit
 * het dashboard.
 * ─────────────────────────────────────────────────────────────────────── */

const USPS = [
  {
    icon: BookOpen,
    text: "Twee modules, zeventien praktijklessen — morgen toepasbaar in je les",
  },
  {
    icon: Sparkles,
    text: "Ingebouwde AI-coach en een promptbibliotheek met 60+ docentprompts",
  },
  {
    icon: ShieldCheck,
    text: "AVG-bewust ontworpen · opslag in de EU · jouw werk blijft van jou",
  },
];

export function Login() {
  const { login } = useAuth();
  const [mode, setMode] = useState("login"); // "login" | "request" | "sent"

  return (
    <div className="relative isolate min-h-screen bg-paper">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Wordmark />
        <span className="pill">Pilot · VABOK</span>
      </header>

      <main className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-8 lg:grid-cols-2 lg:gap-20 lg:pt-16">
        {/* ─── Links: het verhaal ─────────────────────────────────────── */}
        <section>
          <span className="eyebrow text-terra">AI-professionalisering voor docenten</span>
          <h1 className="mt-4 text-balance text-[38px] font-bold leading-[1.05] tracking-tightish text-ink sm:text-[48px]">
            AI in je les, met
            <span className="text-terra"> zelfvertrouwen</span> en
            vakdiepte.
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-[16.5px] leading-relaxed text-ink-soft">
            Het AI PraktijkLab is het leerplatform van de VABOK-samenwerking
            voor docenten in vo, mbo en hbo. Geen theorie zonder toepassing —
            wat je hier leert, gebruik je komende lesweek.
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
            <p className="eyebrow mb-3">De VABOK-samenwerking</p>
            <p className="text-[13px] font-medium leading-relaxed text-ink-mute">
              Aventus &nbsp;·&nbsp; Veluwse Onderwijsgroep &nbsp;·&nbsp; Etty
              Hillesum Lyceum &nbsp;·&nbsp; Saxion
            </p>
          </div>
        </section>

        {/* ─── Rechts: de actie ───────────────────────────────────────── */}
        <section className="w-full max-w-md justify-self-center lg:justify-self-end">
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
        </section>
      </main>
    </div>
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
      setError(
        "Versturen lukte niet. Probeer het zo nog eens, of mail je VABOK-contactpersoon."
      );
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
              placeholder="Bijv. Aventus"
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
