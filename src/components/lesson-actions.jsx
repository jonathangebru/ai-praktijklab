import { useEffect, useId, useRef, useState } from "react";
import {
  Check,
  Download,
  Eraser,
  PlusCircle,
  Save,
  Sparkles,
  Pencil,
} from "lucide-react";
import { Footnote, ProgressBar } from "./ui";
import { buildLessonMarkdown, downloadMarkdown } from "../hooks/useLessonWork";

/* ──────────────────────────────────────────────────────────────────────────
 * <WriteBlock />
 * A labeled, auto-saving textarea. The "opgeslagen" badge fades in briefly
 * after each successful save so the docent has feedback without the UI
 * shouting.
 * ─────────────────────────────────────────────────────────────────────── */
export function WriteBlock({
  work,
  field,
  label,
  hint,
  placeholder,
  rows = 4,
  tone = "default", // default | accent
  example,
}) {
  const value = work.get(field);
  const saved = work.savedAt[field];
  const [showSaved, setShowSaved] = useState(false);
  const wordCount = value.trim().split(/\s+/).filter(Boolean).length;
  const focusTimer = useRef(null);
  const inputId = useId();
  const hintId = useId();

  useEffect(() => {
    if (!saved) return;
    setShowSaved(true);
    if (focusTimer.current) clearTimeout(focusTimer.current);
    focusTimer.current = setTimeout(() => setShowSaved(false), 1700);
    return () => clearTimeout(focusTimer.current);
  }, [saved]);

  const ringTone =
    tone === "accent"
      ? "focus-within:border-terra/40 focus-within:ring-terra/20"
      : "focus-within:border-rule-strong focus-within:ring-ink/10";

  return (
    <div className="mt-4 max-w-prose">
      <div className="mb-1.5 flex items-baseline justify-between gap-3">
        <div className="flex items-baseline gap-2.5">
          <Pencil
            size={11}
            strokeWidth={1.8}
            className={tone === "accent" ? "text-terra" : "text-ink-mute"}
          />
          <label
            htmlFor={inputId}
            className="font-mono text-[10.5px] uppercase tracking-widest text-ink-mute"
          >
            {label}
          </label>
        </div>
        <div className="flex items-center gap-3">
          {wordCount > 0 && (
            <span className="font-mono text-[10px] text-ink-faint">
              {wordCount} w
            </span>
          )}
          <span
            className={`flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest transition-opacity duration-500 ${
              showSaved ? "opacity-100 text-sage-deep" : "opacity-0"
            }`}
          >
            <Check size={10} strokeWidth={2.4} />
            opgeslagen
          </span>
        </div>
      </div>
      <div
        className={`hairline rounded-lg bg-paper-card transition focus-within:ring-2 focus-within:ring-offset-0 ${ringTone}`}
      >
        <textarea
          id={inputId}
          rows={rows}
          value={value}
          onChange={(e) => work.set(field, e.target.value)}
          placeholder={placeholder || "Schrijf hier…"}
          aria-describedby={hint || example ? hintId : undefined}
          className="block w-full resize-y bg-transparent px-3.5 py-2.5 text-[14px] leading-relaxed text-ink placeholder:italic placeholder:text-ink-faint focus:outline-none"
        />
        {(hint || example || value) && (
          <div className="hairline-t flex flex-wrap items-center justify-between gap-3 bg-paper-deep/30 px-3.5 py-2">
            <p
              id={hintId}
              className="font-mono text-[10px] uppercase tracking-widest text-ink-faint"
            >
              {hint || (example ? `voorbeeld · ${example}` : "")}
            </p>
            {value && (
              <button
                type="button"
                onClick={() => work.reset(field)}
                className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-ink-faint hover:text-terra focus-ring rounded"
              >
                <Eraser size={10} strokeWidth={1.8} />
                wis
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
 * <TryItYourself />
 * Specialised write block for "try this prompt yourself" cases — includes a
 * one-click button to push the user's prompt into the global promptkit.
 * ─────────────────────────────────────────────────────────────────────── */
export function TryItYourself({ work, field, label, hint, example, source }) {
  const [added, setAdded] = useState(false);
  const value = work.get(field).trim();

  function save() {
    if (!value) return;
    const ok = work.addToPromptkit({
      title: source?.title || "Eigen prompt",
      prompt: value,
      source: source?.source || "Mijn lesopzet",
      lesson: source?.lesson,
    });
    if (ok) {
      setAdded(true);
      setTimeout(() => setAdded(false), 2200);
    }
  }

  return (
    <div className="bg-paper-deep/20 hairline-t px-5 py-5">
      <WriteBlock
        work={work}
        field={field}
        label={label || "Probeer zelf — schrijf je eigen versie"}
        hint={hint}
        example={example}
        rows={3}
        tone="accent"
      />
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={save}
          disabled={!value}
          className={`inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-[12px] font-medium transition focus-ring ${
            value
              ? "bg-ink text-paper-card hover:bg-ink-soft"
              : "bg-paper-deep/60 text-ink-faint cursor-not-allowed"
          }`}
        >
          {added ? (
            <>
              <Check size={12} strokeWidth={2} />
              In je promptkit
            </>
          ) : (
            <>
              <PlusCircle size={12} strokeWidth={1.8} />
              Bewaar in mijn promptkit
            </>
          )}
        </button>
        <p className="font-mono text-[10.5px] uppercase tracking-widest text-ink-faint">
          Promptkit blijft staan, ook na herladen
        </p>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
 * <RubricSelfRater />
 * Replaces the read-only criteria table with an interactive version: the
 * docent klikt per criterium op Onder/Op/Boven om hun eigen lesopzet in te
 * schalen. Choices land in work-state.
 * ─────────────────────────────────────────────────────────────────────── */
export function RubricSelfRater({ detail, work }) {
  const levels = [
    { key: "onder", label: "Onder niveau", tone: "ink-mute" },
    { key: "op", label: "Op niveau", tone: "ink" },
    { key: "boven", label: "Boven niveau", tone: "sage-deep" },
  ];
  const scored = (detail.eindcriteria || []).map((_, i) =>
    work.get(`rubric-${i}`)
  );
  const onOrAbove = scored.filter((v) => v === "op" || v === "boven").length;
  const above = scored.filter((v) => v === "boven").length;

  return (
    <article id="eindcriteria" className="hairline-t pt-10">
      <Footnote>Eindcriteria · zelf scoren</Footnote>
      <h2 className="mt-2 font-display text-[28px] leading-tight">
        Hoe ver is jouw opzet?
      </h2>
      <p className="mt-3 max-w-2xl text-[14.5px] text-ink-soft">
        Klik per criterium het niveau waar jouw opzet nu zit. Niet om jezelf
        af te rekenen — om te zien waar je nog wilt scherpen voor je 'm
        deelt.
      </p>

      <div className="mt-6 grid gap-4">
        {detail.eindcriteria.map((c, i) => {
          const field = `rubric-${i}`;
          const choice = work.get(field);
          return (
            <div key={i} className="hairline rounded-2xl bg-paper-card p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="font-display text-[17px] leading-snug text-ink">
                  {c.criterium}
                </h3>
                <button
                  type="button"
                  onClick={() => work.reset(field)}
                  className={`font-mono text-[10px] uppercase tracking-widest transition ${
                    choice
                      ? "text-ink-faint hover:text-terra"
                      : "text-transparent pointer-events-none"
                  }`}
                >
                  wis keuze
                </button>
              </div>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {levels.map((lvl) => {
                  const isChosen = choice === lvl.key;
                  return (
                    <button
                      key={lvl.key}
                      type="button"
                      onClick={() =>
                        work.set(field, isChosen ? "" : lvl.key)
                      }
                      className={`hairline relative rounded-xl px-4 py-3 text-left transition focus-ring ${
                        isChosen
                          ? lvl.key === "boven"
                            ? "border-sage bg-sage-tint/60 ring-2 ring-sage/30"
                            : lvl.key === "op"
                            ? "border-rule-strong bg-paper ring-2 ring-ink/10"
                            : "border-rule bg-paper-deep/40 ring-2 ring-ink-faint/20"
                          : "bg-paper hover:bg-paper-deep/30"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`font-mono text-[10px] uppercase tracking-widest ${
                            isChosen ? `text-${lvl.tone}` : "text-ink-faint"
                          }`}
                        >
                          {lvl.label}
                        </span>
                        {isChosen && (
                          <Check
                            size={11}
                            strokeWidth={2.4}
                            className={
                              lvl.key === "boven"
                                ? "text-sage-deep"
                                : "text-ink"
                            }
                          />
                        )}
                      </div>
                      <p
                        className={`mt-1.5 text-[13px] leading-relaxed ${
                          isChosen ? "text-ink" : "text-ink-soft"
                        }`}
                      >
                        {c[lvl.key]}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 rounded-xl bg-paper-deep/40 px-5 py-4">
        <Footnote>Mijn inschatting</Footnote>
        <span className="text-[13px] text-ink">
          <span className="num-mark text-[18px] text-ink">{onOrAbove}</span>
          <span className="text-ink-mute"> van {detail.eindcriteria.length} op- of boven-niveau</span>
        </span>
        {above > 0 && (
          <span className="text-[13px] text-sage-deep">
            · waarvan {above} boven niveau
          </span>
        )}
      </div>
    </article>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
 * <ReflectionWriter />
 * The existing Reflection block becomes interactive — each vraag krijgt een
 * textarea ernaast.
 * ─────────────────────────────────────────────────────────────────────── */
export function ReflectionWriter({ detail, work }) {
  return (
    <article id="reflectie" className="hairline-t pt-10">
      <Footnote>Reflectie · schrijven</Footnote>
      <h2 className="mt-2 font-display text-[28px] leading-tight">
        Vragen om mee te nemen — én te beantwoorden.
      </h2>

      <ol className="mt-6 space-y-5">
        {detail.reflection.map((r, i) => (
          <li
            key={i}
            className="rounded-2xl bg-academy-tint/40 p-5 hairline"
          >
            <div className="flex items-start gap-3">
              <span className="num-mark text-[18px] leading-none text-academy-deep">
                R.{String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-display text-[17px] italic leading-snug text-academy-deep">
                {r}
              </p>
            </div>
            <div className="mt-3 pl-9">
              <WriteBlock
                work={work}
                field={`reflectie-${i}`}
                label={`Antwoord ${i + 1}`}
                placeholder="Neem een paar minuten — geen goed of fout."
                rows={3}
              />
            </div>
          </li>
        ))}
      </ol>
    </article>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
 * <MijnWerkPanel />
 * Sidebar block: voortgang van wat je hebt ingevuld, plus de export-knop.
 * ─────────────────────────────────────────────────────────────────────── */
export function MijnWerkPanel({ work, detail, lesson, module: m }) {
  const fields = collectWorkFields(detail);
  const { filled, total, pct } = work.completion(fields.map((f) => f.field));
  const [justExported, setJustExported] = useState(false);

  function handleExport() {
    const md = buildLessonMarkdown({ lesson, module: m, detail, work });
    const date = new Date().toISOString().slice(0, 10);
    downloadMarkdown(`lesopzet-${lesson.slug}-${date}.md`, md);
    setJustExported(true);
    setTimeout(() => setJustExported(false), 2500);
  }

  return (
    <div className="card-elev p-6">
      <div className="flex items-center justify-between">
        <Footnote>Mijn werkruimte</Footnote>
        <Save size={12} strokeWidth={1.6} className="text-ink-faint" />
      </div>
      <h3 className="mt-1 font-display text-[19px] leading-tight">
        Wat je tot nu toe hebt geschreven
      </h3>

      <div className="mt-4">
        <ProgressBar
          value={pct}
          label={`${filled} van ${total} blokken gevuld`}
          tone="terra"
        />
      </div>

      <ul className="mt-5 space-y-1.5">
        {fields.map((f) => {
          const isFilled = (work.get(f.field) || "").trim().length > 0;
          return (
            <li
              key={f.field}
              className="flex items-center gap-2.5 text-[12.5px]"
            >
              <span
                className={`grid h-3.5 w-3.5 shrink-0 place-items-center rounded-[3px] border ${
                  isFilled
                    ? "border-terra bg-terra text-paper-card"
                    : "border-rule"
                }`}
              >
                {isFilled && <Check size={9} strokeWidth={2.5} />}
              </span>
              <span
                className={`flex-1 truncate ${
                  isFilled ? "text-ink" : "text-ink-mute"
                }`}
              >
                {f.label}
              </span>
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        onClick={handleExport}
        disabled={filled === 0}
        className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-[14px] font-medium transition focus-ring ${
          filled === 0
            ? "bg-paper-deep/60 text-ink-faint cursor-not-allowed"
            : "bg-terra text-paper-card hover:bg-terra-deep"
        }`}
      >
        {justExported ? (
          <>
            <Check size={14} strokeWidth={2} />
            Gedownload
          </>
        ) : (
          <>
            <Download size={13} strokeWidth={1.8} />
            Exporteer mijn lesopzet
          </>
        )}
      </button>

      {work.promptkit.length > 0 && (
        <div className="mt-5 rounded-lg bg-academy-tint/40 px-4 py-3">
          <div className="flex items-center gap-2">
            <Sparkles size={11} strokeWidth={1.8} className="text-academy-deep" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-academy-deep">
              Mijn promptkit
            </span>
          </div>
          <p className="mt-1 text-[12.5px] text-ink-soft">
            {work.promptkit.length}{" "}
            {work.promptkit.length === 1 ? "prompt" : "prompts"} bewaard —
            ook beschikbaar in de Promptbibliotheek.
          </p>
        </div>
      )}
    </div>
  );
}

/* Final closing summary at the bottom of the lesson, herhaalt de voortgang
 * en levert dezelfde export-knop dichterbij de plek waar de docent klaar is. */
export function MijnWerkAfsluiting({ work, detail, lesson, module: m }) {
  const fields = collectWorkFields(detail);
  const { filled, total, pct } = work.completion(fields.map((f) => f.field));
  const [justExported, setJustExported] = useState(false);

  function handleExport() {
    const md = buildLessonMarkdown({ lesson, module: m, detail, work });
    const date = new Date().toISOString().slice(0, 10);
    downloadMarkdown(`lesopzet-${lesson.slug}-${date}.md`, md);
    setJustExported(true);
    setTimeout(() => setJustExported(false), 2500);
  }

  return (
    <article id="afsluiting" className="hairline-t pt-10">
      <Footnote>Afsluiting</Footnote>
      <h2 className="mt-2 font-display text-[28px] leading-tight">
        Klaar? Pak je werk mee.
      </h2>
      <p className="mt-3 max-w-2xl text-[14.5px] text-ink-soft">
        Alles wat je in deze les hebt geschreven blijft op dit apparaat
        bewaard. Met één klik bundel je het tot een lesopzet die je in je
        eigen voorbereiding of een vaksectievergadering kunt gebruiken.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <ProgressBar
            value={pct}
            label={`Voortgang · ${filled} van ${total} blokken`}
            tone="terra"
          />
        </div>
        <button
          type="button"
          onClick={handleExport}
          disabled={filled === 0}
          className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-[14px] font-medium transition focus-ring ${
            filled === 0
              ? "bg-paper-deep/60 text-ink-faint cursor-not-allowed"
              : "bg-ink text-paper-card hover:bg-ink-soft"
          }`}
        >
          {justExported ? (
            <>
              <Check size={14} strokeWidth={2} />
              Gedownload
            </>
          ) : (
            <>
              <Download size={14} strokeWidth={1.8} />
              Download mijn lesopzet (.md)
            </>
          )}
        </button>
      </div>
    </article>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
 * Field collection — walks the lesson detail to find every interactive
 * field. Used by progress panel and export.
 * ─────────────────────────────────────────────────────────────────────── */
export function collectWorkFields(detail) {
  const out = [];

  // Diepteles — steps with workspaces
  (detail.steps || []).forEach((s) => {
    if (s.workspace?.field) {
      out.push({
        field: s.workspace.field,
        label: s.workspace.shortLabel || s.workspace.label || s.title,
      });
    }
  });

  // Worked examples — tryItYourself
  (detail.workedExamples || []).forEach((ex) => {
    if (ex.tryItYourself?.field) {
      out.push({
        field: ex.tryItYourself.field,
        label:
          ex.tryItYourself.shortLabel || `Eigen prompt: ${ex.title}`,
      });
    }
  });

  // Casuslab — per casus prediction + eigen matrix
  if (detail.format === "casuslab") {
    (detail.cases || []).forEach((c, i) => {
      out.push({
        field: `casuslab-${i}-prediction`,
        label: `Voorspelling: ${c.domain}`,
      });
    });
    if (detail.failureMatrix) {
      out.push({
        field: "casuslab-mijn-matrix",
        label: "Mijn wat-kan-AI matrix",
      });
    }
  }

  // Casusbespreking — per casus stellingname + eigen reactie
  if (detail.format === "casusbespreking") {
    (detail.cases || []).forEach((c, i) => {
      (c.statements || []).forEach((_, j) => {
        out.push({
          field: `casus-${i}-stelling-${j}`,
          label: `Stellingname casus ${i + 1}.${j + 1}`,
        });
      });
      out.push({
        field: `casus-${i}-eigen-reactie`,
        label: `Eigen reactie casus ${i + 1}`,
      });
    });
    (detail.actionPlan?.steps || []).forEach((s, i) => {
      if (s.workspace?.field) {
        out.push({
          field: s.workspace.field,
          label:
            s.workspace.shortLabel ||
            s.workspace.label ||
            `Actiestap ${i + 1}`,
        });
      }
    });
  }

  // Promptlab — per ronde eigen prompt + slotpromptkit
  if (detail.format === "promptlab") {
    (detail.rounds || []).forEach((_, i) => {
      out.push({
        field: `promptlab-${i}-user`,
        label: `Eigen prompt ronde ${i + 1}`,
      });
    });
    out.push({
      field: "promptlab-mijn-promptkit",
      label: "Eigen promptkit",
    });
  }

  // Praktijkopdracht — pad + peerReview answers
  if (detail.format === "praktijkopdracht") {
    if (detail.paths) {
      out.push({ field: "praktijk-pad", label: "Gekozen pad" });
    }
    (detail.peerReview?.questions || []).forEach((_, i) => {
      out.push({
        field: `peer-${i}`,
        label: `Collega-feedback ${i + 1}`,
      });
    });
  }

  // Kennischeck — per item
  if (detail.format === "kennischeck") {
    (detail.checkItems || []).forEach((q, i) => {
      out.push({
        field: `check-${i}`,
        label: q.shortLabel || `Vraag ${i + 1}`,
      });
    });
  }

  // Eindcriteria — common to all formats
  (detail.eindcriteria || []).forEach((c, i) => {
    out.push({
      field: `rubric-${i}`,
      label: `Rubric: ${c.criterium}`,
    });
  });

  // Reflection — common
  (detail.reflection || []).forEach((_, i) => {
    out.push({
      field: `reflectie-${i}`,
      label: `Reflectie ${i + 1}`,
    });
  });

  return out;
}
