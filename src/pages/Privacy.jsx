import { useState } from "react";
import {
  Shield,
  Database,
  Sparkles,
  Server,
  Clock,
  Eye,
  Download,
  Lock,
  BarChart3,
  Trash2,
  AlertTriangle,
  Check,
} from "lucide-react";
import { PageHeader, Section, Footnote, Divider, Tag } from "../components/ui";
import { useAuth } from "../components/AuthProvider";
import { wipeAll } from "../lib/workClient";

/* ──────────────────────────────────────────────────────────────────────────
 * Privacy & AVG — transparantie + controle voor de docent.
 *
 * Legt uit wat we opslaan, waar, hoe lang en welke rechten je hebt. Bevat een
 * werkende "verwijder mijn werk"-actie: wist serverdata (DELETE /api/work,
 * best-effort) én alle lokale praktijklab-data, en herlaadt daarna schoon.
 * ─────────────────────────────────────────────────────────────────────── */

const LOCAL_PREFIX = "praktijklab.";

function clearLocal() {
  try {
    const keys = [];
    for (let i = 0; i < window.localStorage.length; i++) {
      const k = window.localStorage.key(i);
      if (k && k.startsWith(LOCAL_PREFIX)) keys.push(k);
    }
    keys.forEach((k) => window.localStorage.removeItem(k));
    return keys.length;
  } catch {
    return 0;
  }
}

export function Privacy() {
  const { displayName } = useAuth();
  // "idle" | "confirm" | "working" | "done"
  const [phase, setPhase] = useState("idle");

  async function handleDelete() {
    setPhase("working");
    // Server eerst (best-effort; faalt stil als niet ingelogd of storage uit),
    // daarna altijd lokaal wissen — dat is de AVG-relevante actie op dit toestel.
    await wipeAll();
    clearLocal();
    setPhase("done");
    // Even feedback tonen, dan schoon herstarten zodat alle schermen leeg zijn.
    setTimeout(() => window.location.assign("/"), 1800);
  }

  return (
    <>
      <PageHeader
        eyebrow="Privacy & gegevensbescherming"
        number="§"
        title={
          <>
            Jouw werk, <span className="display-italic text-terra">jouw gegevens</span>.
          </>
        }
        subtitle="Transparantie en controle horen bij verantwoord AI-gebruik — daarom leggen we precies uit wat het PraktijkLab van jou bewaart, waar dat staat en hoe je het op elk moment zelf weghaalt."
        meta={[
          { label: "Verwerker", value: "ROC Aventus · VABOK" },
          { label: "Regio", value: "EU · West-Europa" },
          { label: "Grondslag", value: "Uitvoering scholing" },
        ]}
      />

      {/* Wat we opslaan */}
      <Section eyebrow="Transparantie" title="Wat we van jou opslaan">
        <div className="grid gap-4 md:grid-cols-2">
          <InfoCard
            icon={Database}
            tone="terra"
            title="Je werk per les"
            body="De tekst die je in lesopzetten, opdrachten en reflecties typt. Hiermee zie je je eigen werk terug op elk apparaat waarop je inlogt."
          />
          <InfoCard
            icon={Sparkles}
            tone="academy"
            title="Je promptkit"
            body="De prompts die je bewaart vanuit lessen en de promptbibliotheek, zodat je ze later opnieuw kunt gebruiken."
          />
        </div>
        <p className="mt-5 text-[13.5px] leading-relaxed text-ink-soft">
          Dit werk wordt gekoppeld aan je inlog-identiteit van Microsoft (Entra).
          We bewaren geen wachtwoord — dat beheert Microsoft. Lukt opslaan op de
          server niet, dan blijft je werk lokaal in je browser staan.
        </p>
      </Section>

      {/* Wat we niet opslaan */}
      <Section eyebrow="Grenzen" title="Wat we bewust níét doen" className="hairline-t">
        <ul className="grid gap-3 md:grid-cols-3">
          <Guard
            icon={Eye}
            title="Geen studentgegevens"
            body="Vul geen herleidbare gegevens van studenten in. Het PraktijkLab is bedoeld voor jóuw lesmateriaal, niet voor persoonsgegevens van studenten."
          />
          <Guard
            icon={BarChart3}
            title="Beheerders zien alleen totalen"
            body="Het voortgangsdashboard toont uitsluitend geanonimiseerde aggregaten — nooit wie wat heeft geschreven."
          />
          <Guard
            icon={Lock}
            title="Geen verkoop of tracking"
            body="Je gegevens worden niet verkocht of voor advertenties gebruikt. Ze dienen enkel de scholing binnen VABOK."
          />
        </ul>
      </Section>

      {/* Waar en hoe lang */}
      <Section eyebrow="Opslag & bewaartermijn" title="Waar het staat, hoe lang" className="hairline-t">
        <div className="grid gap-4 md:grid-cols-2">
          <InfoCard
            icon={Server}
            tone="sage"
            title="In de EU, versleuteld"
            body="Opslag in Azure Table Storage in de regio West-Europa. Versleuteld in rust en onderweg, binnen de Microsoft-omgeving van de instelling."
          />
          <InfoCard
            icon={Clock}
            tone="terra"
            title="Zolang het nuttig is"
            body="Je werk blijft staan zolang je deelneemt aan de scholing. Na afloop van de pilot of je deelname wordt het opgeruimd — en je kunt het hieronder altijd zelf direct verwijderen."
          />
        </div>
      </Section>

      {/* Rechten */}
      <Section eyebrow="Jouw rechten" title="Wat je altijd kunt" className="hairline-t">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Right icon={Eye} title="Inzage" body="Je ziet je eigen werk terug in elke les en in je promptkit." />
          <Right icon={Sparkles} title="Correctie" body="Pas je werk op elk moment aan; wijzigingen overschrijven het oude." />
          <Right
            icon={Download}
            title="Meenemen"
            body="Exporteer een lesopzet als Markdown-bestand via de knop onderaan elke les."
          />
          <Right icon={Trash2} title="Verwijderen" body="Wis al je werk in één klik — hieronder." />
        </div>
      </Section>

      {/* Verwijder mijn werk */}
      <Section eyebrow="Recht op verwijdering" title="Verwijder mijn werk" className="hairline-t">
        <div className="card-elev overflow-hidden">
          <div className="border-b border-rule bg-terra-tint/30 px-6 py-4">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-terra-tint text-terra-deep">
                <AlertTriangle size={15} strokeWidth={1.8} />
              </span>
              <Footnote>Definitieve actie · kan niet ongedaan</Footnote>
            </div>
          </div>

          <div className="px-6 py-6">
            <p className="max-w-2xl text-[14px] leading-relaxed text-ink-soft">
              Hiermee verwijder je <strong className="text-ink">al je werk</strong>{" "}
              — alle lesopzetten en je hele promptkit — zowel van de server als uit
              deze browser. Je blijft ingelogd; je begint daarna met een schone lei.
            </p>

            {phase === "done" ? (
              <div className="mt-5 inline-flex items-center gap-2 rounded-lg bg-sage-tint px-4 py-2.5 text-[13.5px] text-sage-deep">
                <Check size={15} strokeWidth={2} />
                Je werk is verwijderd. We brengen je terug naar het overzicht…
              </div>
            ) : phase === "confirm" ? (
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                <span className="text-[13.5px] font-medium text-ink">
                  Weet je het zeker?
                </span>
                <div className="flex flex-wrap gap-2.5">
                  <button
                    type="button"
                    onClick={handleDelete}
                    className="inline-flex items-center gap-2 rounded-md bg-terra px-4 py-2 text-[13px] font-medium text-paper-card transition hover:bg-terra-deep focus-ring"
                  >
                    <Trash2 size={14} strokeWidth={1.9} />
                    Ja, verwijder definitief
                  </button>
                  <button
                    type="button"
                    onClick={() => setPhase("idle")}
                    className="inline-flex items-center gap-2 rounded-md border border-rule bg-paper-card px-4 py-2 text-[13px] font-medium text-ink-soft transition hover:border-rule-strong hover:text-ink focus-ring"
                  >
                    Annuleer
                  </button>
                </div>
              </div>
            ) : (
              <div className="mt-5">
                <button
                  type="button"
                  onClick={() => setPhase("confirm")}
                  disabled={phase === "working"}
                  className="inline-flex items-center gap-2 rounded-md border border-terra-soft/70 bg-paper-card px-4 py-2 text-[13px] font-medium text-terra-deep transition hover:bg-terra-tint/50 focus-ring disabled:opacity-60"
                >
                  <Trash2 size={14} strokeWidth={1.9} />
                  {phase === "working" ? "Bezig met verwijderen…" : "Verwijder mijn werk"}
                </button>
              </div>
            )}
          </div>
        </div>

        <div id="contact" className="scroll-mt-24">
          <Divider label="Contact" className="my-8" />
          <p className="max-w-2xl text-[13.5px] leading-relaxed text-ink-soft">
            Vragen over je gegevens of wil je een verzoek indienen? Neem contact
            op met je VABOK-projectleider of de Functionaris Gegevensbescherming
            van je instelling. Voor inhoudelijke feedback over het PraktijkLab
            kun je de feedbackknop rechtsonder gebruiken.
          </p>
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <Tag tone="sage">
            <Shield size={11} strokeWidth={2} /> AVG-bewust ontworpen
          </Tag>
          {displayName ? (
            <span className="font-mono text-[11px] text-ink-faint">
              Ingelogd als {displayName}
            </span>
          ) : null}
        </div>
      </Section>
    </>
  );
}

function InfoCard({ icon: Icon, title, body, tone = "terra" }) {
  const tones = {
    terra: "bg-terra-tint text-terra-deep",
    sage: "bg-sage-tint text-sage-deep",
    academy: "bg-academy-tint text-academy-deep",
  };
  return (
    <article className="card p-6">
      <div className={`grid h-9 w-9 place-items-center rounded-lg ${tones[tone]}`}>
        <Icon size={16} strokeWidth={1.7} />
      </div>
      <h3 className="mt-4 font-display text-[19px] leading-tight text-ink">
        {title}
      </h3>
      <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">{body}</p>
    </article>
  );
}

function Guard({ icon: Icon, title, body }) {
  return (
    <li className="hairline rounded-xl bg-paper px-5 py-5">
      <div className="flex items-center gap-2.5">
        <Icon size={15} strokeWidth={1.8} className="shrink-0 text-ink-mute" />
        <h3 className="font-display text-[16px] leading-tight text-ink">{title}</h3>
      </div>
      <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">{body}</p>
    </li>
  );
}

function Right({ icon: Icon, title, body }) {
  return (
    <div className="card flex flex-col gap-2 p-5">
      <div className="flex items-center gap-2">
        <Icon size={14} strokeWidth={1.8} className="text-terra" />
        <span className="eyebrow">{title}</span>
      </div>
      <p className="text-[13px] leading-relaxed text-ink-soft">{body}</p>
    </div>
  );
}
