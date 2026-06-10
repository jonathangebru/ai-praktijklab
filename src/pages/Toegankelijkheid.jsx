import { Link } from "react-router-dom";
import {
  Keyboard,
  Eye,
  Contrast,
  Smartphone,
  MessageSquare,
  Accessibility,
  AlertCircle,
} from "lucide-react";
import { PageHeader, Section, Divider, Tag } from "../components/ui";

/* ──────────────────────────────────────────────────────────────────────────
 * Toegankelijkheid — verklaring + werkwijze.
 *
 * Eerlijk en concreet: wat we doen, waar we naartoe werken (WCAG 2.2 AA)
 * en wat nog beter moet. Onderwijsplatforms horen voor iedereen te werken.
 * ─────────────────────────────────────────────────────────────────────── */

export function Toegankelijkheid() {
  return (
    <>
      <PageHeader
        eyebrow="Toegankelijkheid"
        number="◐"
        title={
          <>
            Voor <span className="display-italic text-terra">iedere</span>{" "}
            docent.
          </>
        }
        subtitle="Een leerplatform over verantwoord AI-gebruik hoort zelf ook verantwoord gebouwd te zijn — dus toegankelijk voor docenten die met toetsenbord, schermlezer of vergroting werken."
        meta={[
          { label: "Norm", value: "WCAG 2.2 · niveau AA" },
          { label: "Status", value: "In opbouw · pilotfase" },
          { label: "Geldt voor", value: "praktijklab.datagrid.nl" },
        ]}
      />

      <Section eyebrow="Werkwijze" title="Wat we doen">
        <div className="grid gap-4 md:grid-cols-2">
          <Item
            icon={Keyboard}
            title="Volledig met het toetsenbord"
            body="Alle interactie — lessen, werkruimtes, zoeken (⌘K), de AI-coach — werkt zonder muis. Een 'spring naar inhoud'-link staat bovenaan elke pagina, en focus is overal zichtbaar."
          />
          <Item
            icon={Eye}
            title="Betekenisvolle structuur"
            body="Semantische koppen, landmark-regio's, lijsten en labels, zodat schermlezers de opbouw van een les kunnen volgen. Iconen zijn decoratief of voorzien van een tekstalternatief."
          />
          <Item
            icon={Contrast}
            title="Contrast en typografie"
            body="Het Codex-kleurpalet (inkt op papier) is gekozen op leesbaarheid: ruime regelafstand, geen tekst onder 12px en contrastverhoudingen gericht op AA."
          />
          <Item
            icon={Smartphone}
            title="Klein scherm, zelfde les"
            body="De volledige leerlijn werkt op telefoon en tablet — met een aangepaste navigatie en werkvormen die meeschalen, niet wegvallen."
          />
        </div>
      </Section>

      <Section
        eyebrow="Eerlijk over de status"
        title="Waar we nog aan werken"
        className="hairline-t"
      >
        <ul className="space-y-3">
          <Known body="AI-gegenereerde antwoorden verschijnen al typend ('streaming'). Schermlezers krijgen het volledige antwoord pas na afloop netjes voorgelezen; tussentijdse aankondigingen verbeteren we nog." />
          <Known body="De grafieken op het beheerdersdashboard hebben nog geen volwaardig tekstueel alternatief; de onderliggende cijfers staan wel als tekst op de pagina." />
          <Known body="Een formele WCAG-audit door een externe partij is gepland voor het einde van de pilotfase. Tot die tijd is deze verklaring gebaseerd op eigen toetsing." />
        </ul>
      </Section>

      <Section
        eyebrow="Meld het ons"
        title="Loop je ergens tegenaan?"
        className="hairline-t"
      >
        <div className="card flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-terra-tint text-terra-deep">
              <MessageSquare size={15} strokeWidth={1.8} />
            </span>
            <p className="max-w-xl text-[14px] leading-relaxed text-ink-soft">
              Kom je iets tegen dat niet werkt met jouw hulpmiddel of
              instelling? Gebruik de feedbackknop rechtsonder, of neem{" "}
              <Link
                to="/privacy#contact"
                className="text-ink underline underline-offset-2 hover:text-terra focus-ring rounded"
              >
                contact
              </Link>{" "}
              op via je VABOK-projectleider. We pakken
              toegankelijkheidsproblemen met voorrang op.
            </p>
          </div>
        </div>

        <Divider label="Verklaring" className="my-8" />
        <div className="flex flex-wrap items-center gap-2">
          <Tag tone="sage">
            <Accessibility size={11} strokeWidth={2} /> Gebouwd op WCAG 2.2 AA
          </Tag>
          <Tag tone="neutral">
            <AlertCircle size={11} strokeWidth={2} /> Laatst herzien · juni 2026
          </Tag>
        </div>
      </Section>
    </>
  );
}

function Item({ icon: Icon, title, body }) {
  return (
    <article className="card p-6">
      <div className="grid h-9 w-9 place-items-center rounded-lg bg-terra-tint text-terra-deep">
        <Icon size={16} strokeWidth={1.7} />
      </div>
      <h3 className="mt-4 font-display text-[19px] leading-tight text-ink">
        {title}
      </h3>
      <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">{body}</p>
    </article>
  );
}

function Known({ body }) {
  return (
    <li className="hairline flex items-start gap-3 rounded-xl bg-paper px-5 py-4">
      <AlertCircle
        size={14}
        strokeWidth={1.8}
        className="mt-0.5 shrink-0 text-ink-mute"
      />
      <p className="text-[13.5px] leading-relaxed text-ink-soft">{body}</p>
    </li>
  );
}
