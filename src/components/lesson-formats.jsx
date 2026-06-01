import { useEffect, useRef, useState } from "react";
import {
  AlertTriangle,
  Check,
  ChevronDown,
  ChevronRight,
  Copy,
  Eye,
  EyeOff,
  FileText,
  Gavel,
  Layers,
  Lightbulb,
  ListChecks,
  MessageCircle,
  Pencil,
  Scale,
  ShieldAlert,
  Sparkles,
  Users,
} from "lucide-react";
import { Footnote } from "./ui";
import { WriteBlock } from "./lesson-actions";
import { coach, AIError } from "../lib/aiClient";
import { trackEvent } from "../lib/appInsights";

/* ──────────────────────────────────────────────────────────────────────────
 *  CASUSLAB  —  used by 1.2 "Wat kan AI wel en niet?"
 *  Per casus: voorspel-onthul-categoriseer-cyclus.
 * ─────────────────────────────────────────────────────────────────────── */

export function FailureCase({ caseData, index, work }) {
  const c = caseData;
  const [showObservation, setShowObservation] = useState(false);

  const predictionField = work ? `casuslab-${index}-prediction` : null;

  return (
    <article className="card-elev overflow-hidden">
      <div className="hairline-b flex items-center justify-between bg-paper-deep/40 px-5 py-3">
        <div className="flex items-center gap-3">
          <span className="num-mark text-[18px] leading-none">
            C.{String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-[14px] font-medium text-ink">{c.domain}</span>
        </div>
        {c.category && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-terra-soft/60 bg-paper-card px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-terra-deep">
            <AlertTriangle size={10} strokeWidth={1.8} />
            {c.category}
          </span>
        )}
      </div>

      <div className="grid divide-rule lg:grid-cols-[1fr_1fr] lg:divide-x">
        <div className="bg-paper-deep/20 p-5">
          <Footnote>Testprompt</Footnote>
          <pre className="mt-2 overflow-x-auto font-mono text-[12.5px] leading-relaxed text-ink whitespace-pre-wrap">
            {c.prompt}
          </pre>
          {c.predictHint && (
            <div className="mt-4 border-l-2 border-academy-soft bg-academy-tint/30 px-3 py-2">
              <div className="font-mono text-[10px] uppercase tracking-widest text-academy-deep mb-1">
                Voorspel eerst
              </div>
              <p className="text-[13px] italic leading-relaxed text-ink-soft">
                {c.predictHint}
              </p>
            </div>
          )}
          {work && predictionField && (
            <WriteBlock
              work={work}
              field={predictionField}
              label="Jouw voorspelling"
              hint="Wat denk je dat AI hier verkeerd doet — en waar in het antwoord?"
              rows={2}
              tone="accent"
            />
          )}
        </div>

        <div className="p-5">
          <button
            type="button"
            onClick={() => setShowObservation((v) => !v)}
            className="flex items-center gap-2 mb-2 focus-ring rounded"
          >
            {showObservation ? (
              <Eye size={12} strokeWidth={1.8} className="text-ink-mute" />
            ) : (
              <EyeOff size={12} strokeWidth={1.8} className="text-ink-mute" />
            )}
            <Footnote>
              {showObservation ? "Wat AI typisch teruggeeft" : "Onthul — wat AI teruggeeft"}
            </Footnote>
          </button>
          {showObservation && (
            <>
              <p className="mt-1 text-[13.5px] leading-relaxed text-ink-soft">
                {c.observation}
              </p>
              {c.whatToCheck && (
                <div className="mt-4 hairline-t pt-3">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-sage-deep mb-1">
                    Wat te checken
                  </div>
                  <p className="text-[13px] leading-relaxed text-ink">
                    {c.whatToCheck}
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </article>
  );
}

export function CasusLab({ detail, work }) {
  return (
    <article id="casuslab" className="hairline-t pt-10">
      <div className="flex items-center gap-3">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-terra/15 text-terra">
          <Layers size={13} strokeWidth={1.7} />
        </span>
        <Footnote>Casuslab · vier vakken</Footnote>
      </div>
      <h2 className="mt-3 font-display text-[28px] leading-tight">
        Laat AI falen — en categoriseer waarom.
      </h2>
      <p className="mt-3 max-w-2xl text-[14.5px] text-ink-soft">
        Vier korte casussen waar AI structureel struikelt. Voorspel per casus
        eerst waar het misgaat. Daarna onthul je het antwoord en geef je de
        fout een naam. Aan het einde maak je je eigen "wat-kan-AI"-matrix.
      </p>

      <div className="mt-6 space-y-5">
        {detail.cases.map((c, i) => (
          <FailureCase key={i} caseData={c} index={i} work={work} />
        ))}
      </div>

      {detail.failureMatrix && (
        <div className="mt-8 hairline rounded-2xl bg-paper-card p-6">
          <div className="flex items-center gap-3">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-academy/15 text-academy-deep">
              <ListChecks size={13} strokeWidth={1.7} />
            </span>
            <Footnote>Wat-kan-AI matrix</Footnote>
          </div>
          <h3 className="mt-3 font-display text-[20px] leading-tight">
            Vier categorieën om te onthouden
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {detail.failureMatrix.map((row, i) => (
              <li key={i} className="hairline rounded-xl bg-paper p-4">
                <div className="font-mono text-[10px] uppercase tracking-widest text-terra-deep">
                  {row.category}
                </div>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink">
                  {row.howToSpot}
                </p>
                {row.fix && (
                  <p className="mt-2 hairline-t pt-2 text-[12.5px] leading-relaxed text-sage-deep">
                    Fix: {row.fix}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {work && (
        <div className="mt-6 hairline-t pt-6">
          <WriteBlock
            work={work}
            field="casuslab-mijn-matrix"
            label="Mijn eigen wat-kan-AI matrix voor mijn vak"
            hint="Welke vier risico's wil jij elke voorbereiding doorlopen?"
            placeholder="1. ...\n2. ...\n3. ...\n4. ..."
            rows={5}
            tone="accent"
          />
        </div>
      )}
    </article>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
 *  CASUSBESPREKING  —  used by 1.6 toetsing + 1.7 privacy/ethiek
 *  Per casus: drie perspectieven + stellingnames + actieplan.
 * ─────────────────────────────────────────────────────────────────────── */

export function CasusCard({ caseData, index, work }) {
  const c = caseData;
  return (
    <article className="card-elev overflow-hidden">
      <div className="bg-paper-deep/40 hairline-b px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="num-mark text-[20px] leading-none text-terra-deep">
            {String(index + 1).padStart(2, "0")}
          </span>
          <Footnote>Casus</Footnote>
        </div>
        <h3 className="mt-2 font-display text-[20px] leading-tight text-ink">
          {c.title}
        </h3>
        <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
          {c.context}
        </p>
      </div>

      {c.perspectives && (
        <div className="grid divide-rule sm:grid-cols-3 sm:divide-x">
          {c.perspectives.map((p, i) => (
            <div key={i} className="p-5">
              <div className="flex items-center gap-2">
                <Users size={11} strokeWidth={1.8} className="text-ink-mute" />
                <Footnote>{p.role}</Footnote>
              </div>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink">
                {p.view}
              </p>
            </div>
          ))}
        </div>
      )}

      {c.statements && c.statements.length > 0 && (
        <div className="hairline-t bg-academy-tint/30 p-5">
          <Footnote>Stellingname</Footnote>
          <p className="mt-1 text-[13px] text-ink-soft">
            Twee collega's reageren verschillend op deze casus. Welke
            uitspraak ligt het dichtst bij jouw positie — en waarom?
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {c.statements.map((s, i) => {
              const field = work ? `casus-${index}-stelling-${i}` : null;
              const selected = work && work.get(field) === "agree";
              return (
                <div
                  key={i}
                  className={`hairline rounded-xl bg-paper-card p-4 ${
                    selected ? "ring-2 ring-terra/30 border-terra/40" : ""
                  }`}
                >
                  <div className="font-mono text-[10px] uppercase tracking-widest text-ink-mute mb-1">
                    {s.author}
                  </div>
                  <blockquote className="font-display text-[15px] italic leading-snug text-ink">
                    "{s.quote}"
                  </blockquote>
                  {work && (
                    <button
                      type="button"
                      onClick={() =>
                        work.set(field, selected ? "" : "agree")
                      }
                      className={`mt-3 inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest transition focus-ring ${
                        selected
                          ? "bg-terra text-paper-card"
                          : "border border-rule bg-paper hover:border-rule-strong text-ink-soft"
                      }`}
                    >
                      {selected ? (
                        <>
                          <Check size={10} strokeWidth={2.4} />
                          mijn positie
                        </>
                      ) : (
                        <>kies deze positie</>
                      )}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
          {work && (
            <WriteBlock
              work={work}
              field={`casus-${index}-eigen-reactie`}
              label="Eigen reactie — waarom kies je zo?"
              placeholder="Schrijf in eigen woorden waarom je hier zo over denkt — geen ja/nee."
              rows={3}
            />
          )}
        </div>
      )}
    </article>
  );
}

export function CasusBespreking({ detail, work }) {
  return (
    <article id="casusbespreking" className="hairline-t pt-10">
      <div className="flex items-center gap-3">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-academy/15 text-academy-deep">
          <MessageCircle size={13} strokeWidth={1.7} />
        </span>
        <Footnote>Casusbespreking</Footnote>
      </div>
      <h2 className="mt-3 font-display text-[28px] leading-tight">
        {detail.casusbesprekingTitle || "Drie casussen, drie perspectieven, jouw positie."}
      </h2>
      {detail.casusbesprekingIntro && (
        <p className="mt-3 max-w-2xl text-[14.5px] text-ink-soft">
          {detail.casusbesprekingIntro}
        </p>
      )}

      <div className="mt-6 space-y-6">
        {detail.cases.map((c, i) => (
          <CasusCard key={i} caseData={c} index={i} work={work} />
        ))}
      </div>

      {detail.legalCallout && (
        <div className="mt-8 hairline-t pt-8">
          <LegalCallout {...detail.legalCallout} />
        </div>
      )}

      {detail.actionPlan && (
        <div className="mt-8 hairline-t pt-8">
          <ActionPlan {...detail.actionPlan} work={work} />
        </div>
      )}
    </article>
  );
}

export function LegalCallout({ source, body, link, title }) {
  return (
    <div className="card-elev overflow-hidden">
      <div className="grid sm:grid-cols-[180px_1fr] divide-rule sm:divide-x">
        <div className="flex items-center justify-center bg-terra-tint/40 p-6">
          <div className="text-center">
            <Gavel
              size={20}
              strokeWidth={1.5}
              className="mx-auto text-terra-deep"
            />
            <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-terra-deep">
              {source}
            </div>
          </div>
        </div>
        <div className="p-6">
          <h4 className="font-display text-[18px] leading-tight text-ink">
            {title || "Wat de wet zegt"}
          </h4>
          <p className="mt-3 text-[13.5px] leading-relaxed text-ink-soft whitespace-pre-line">
            {body}
          </p>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-terra-deep hover:underline"
            >
              Lees in het origineel →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function ActionPlan({ source, title, steps, work }) {
  return (
    <div className="card-elev p-6">
      <div className="flex items-center gap-3">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-sage/15 text-sage-deep">
          <ListChecks size={13} strokeWidth={1.7} />
        </span>
        <Footnote>{source || "Actieplan"}</Footnote>
      </div>
      <h3 className="mt-3 font-display text-[22px] leading-tight">
        {title || "Vier stappen voor je eigen context"}
      </h3>
      <ol className="mt-5 space-y-4">
        {steps.map((s, i) => (
          <li
            key={i}
            className="grid grid-cols-[36px_1fr] gap-4 hairline-b pb-4 last:border-0 last:pb-0"
          >
            <span className="num-mark text-[22px] leading-none">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <div className="font-display text-[16px] leading-snug text-ink">
                {s.title}
              </div>
              <p className="mt-1 text-[13px] leading-relaxed text-ink-soft">
                {s.body}
              </p>
              {work && s.workspace && (
                <WriteBlock
                  work={work}
                  field={s.workspace.field}
                  label={s.workspace.label}
                  hint={s.workspace.hint}
                  placeholder={s.workspace.placeholder}
                  rows={s.workspace.rows || 2}
                />
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
 *  PROMPTLAB  —  used by 2.5 "Prompten voor softwareontwikkeling"
 *  Vier iteratierondes (intent → start-prompt → eigen poging → model → leerpunt)
 * ─────────────────────────────────────────────────────────────────────── */

/* Compacte AI-coach callout binnen een Promptlab-ronde. Academy-getint. */
export function InlineCoachCallout({
  feedback,
  suggestions = [],
  loading,
  error,
  onRetry,
  onClose,
}) {
  if (!loading && !feedback && !error) return null;
  return (
    <div
      role="region"
      aria-label="AI-coach feedback"
      className="mt-3 rounded-lg border border-academy/20 bg-academy-tint/40 px-4 py-3"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles size={11} strokeWidth={1.8} className="text-academy-deep" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-academy-deep">
            AI-coach · prompt
          </span>
          {loading && (
            <span
              aria-hidden="true"
              className="inline-block h-1.5 w-1.5 rounded-full bg-academy animate-soft-pulse"
            />
          )}
        </div>
        {onClose && !loading && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Sluit coach"
            className="font-mono text-[10px] uppercase tracking-widest text-ink-faint hover:text-ink-soft focus-ring rounded"
          >
            sluit
          </button>
        )}
      </div>

      {loading && (
        <div className="mt-2.5 space-y-2" aria-hidden="true">
          <div className="h-2.5 w-[78%] animate-soft-pulse rounded bg-ink/10" />
          <div className="h-2.5 w-[64%] animate-soft-pulse rounded bg-ink/10" />
        </div>
      )}

      {error && (
        <div className="mt-2 text-[13px] leading-relaxed text-ink">
          {error}
          {onRetry && (
            <button
              type="button"
              onClick={onRetry}
              className="ml-2 inline-flex items-center gap-1 rounded-md bg-ink px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-paper-card hover:bg-ink-soft focus-ring"
            >
              opnieuw
            </button>
          )}
        </div>
      )}

      {feedback && !error && (
        <p className="mt-2 text-[13.5px] leading-relaxed text-ink whitespace-pre-wrap">
          {feedback}
        </p>
      )}

      {suggestions.length > 0 && !error && (
        <ul className="mt-3 space-y-1.5 border-t border-ink/10 pt-3">
          {suggestions.map((s, i) => (
            <li
              key={i}
              className="flex gap-2 text-[13px] leading-relaxed text-ink-soft"
            >
              <span className="num-mark text-[14px] leading-snug text-academy-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{s}</span>
            </li>
          ))}
        </ul>
      )}

      {(feedback || error) && !loading && (
        <p className="mt-3 font-mono text-[9.5px] leading-relaxed text-ink-faint">
          AI antwoorden zijn niet altijd correct. Deel geen leerlinggegevens.
        </p>
      )}
    </div>
  );
}

export function PromptIterationRound({ round, index, work }) {
  const [showModel, setShowModel] = useState(false);
  const [copied, setCopied] = useState(false);
  const userField = work ? `promptlab-${index}-user` : null;
  const userPrompt = work && userField ? (work.get(userField) || "").trim() : "";

  const [aiState, setAiState] = useState({
    feedback: "",
    suggestions: [],
    loading: false,
    error: null,
  });
  const abortRef = useRef(null);

  function copyModel() {
    if (!round.improvedPrompt) return;
    navigator.clipboard?.writeText(round.improvedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 1700);
  }

  async function askCoach() {
    if (!userPrompt || userPrompt.length < 10) return;
    if (abortRef.current) {
      try {
        abortRef.current.abort();
      } catch { /* ignore */ }
    }
    const ac = new AbortController();
    abortRef.current = ac;

    setAiState({ feedback: "", suggestions: [], loading: true, error: null });
    trackEvent("ai-coach-prompt-ask", { round: index });

    try {
      const { feedback, suggestions } = await coach({
        mode: "prompt",
        input: userPrompt,
        context: { modelPrompt: round.improvedPrompt || "" },
        signal: ac.signal,
      });
      setAiState({ feedback, suggestions, loading: false, error: null });
    } catch (err) {
      if (err?.name === "AbortError") return;
      const msg =
        err instanceof AIError
          ? err.message
          : "AI-coach niet bereikbaar.";
      setAiState({ feedback: "", suggestions: [], loading: false, error: msg });
    } finally {
      abortRef.current = null;
    }
  }

  function closeCoach() {
    if (abortRef.current) {
      try {
        abortRef.current.abort();
      } catch { /* ignore */ }
    }
    setAiState({ feedback: "", suggestions: [], loading: false, error: null });
  }

  useEffect(() => {
    return () => {
      if (abortRef.current) {
        try {
          abortRef.current.abort();
        } catch { /* ignore */ }
      }
    };
  }, []);

  const canAsk = userPrompt.length >= 10;
  const showCoach = aiState.loading || aiState.feedback || aiState.error;

  return (
    <div className="card-elev overflow-hidden">
      <div className="hairline-b flex items-center justify-between bg-paper-deep/40 px-5 py-3">
        <div className="flex items-center gap-3">
          <span className="num-mark text-[20px] leading-none text-academy-deep">
            R.{String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <Footnote>Ronde {index + 1}</Footnote>
            <div className="mt-0.5 font-display text-[16px] leading-snug text-ink">
              {round.intent}
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 space-y-4">
        {round.startPrompt && (
          <div>
            <Footnote>Start-prompt (slecht / vaag)</Footnote>
            <pre className="mt-1.5 hairline rounded-md bg-paper-deep/30 p-3 font-mono text-[12.5px] leading-relaxed text-ink whitespace-pre-wrap">
              {round.startPrompt}
            </pre>
          </div>
        )}

        {round.hint && (
          <div className="border-l-2 border-terra-soft bg-terra-tint/25 px-3 py-2">
            <div className="font-mono text-[10px] uppercase tracking-widest text-terra-deep mb-1">
              Wat moet je verbeteren?
            </div>
            <p className="text-[13px] leading-relaxed text-ink-soft">
              {round.hint}
            </p>
          </div>
        )}

        {work && userField && (
          <>
            <WriteBlock
              work={work}
              field={userField}
              label="Jouw eigen verbeterde prompt"
              hint="Schrijf de prompt zoals jij hem zou versturen — voor je het 'model' antwoord ziet"
              rows={4}
              tone="accent"
            />
            <div className="mt-2.5 flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={askCoach}
                disabled={!canAsk || aiState.loading}
                aria-label="Vraag AI-coach om je prompt te beoordelen"
                className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest transition focus-ring ${
                  canAsk && !aiState.loading
                    ? "border border-academy/30 bg-paper-card text-academy-deep hover:bg-academy-tint/60"
                    : "border border-rule bg-paper-card/50 text-ink-faint cursor-not-allowed"
                }`}
              >
                <Lightbulb size={10} strokeWidth={1.8} />
                Vraag AI-coach
              </button>
              {!canAsk && (
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                  Schrijf 10+ tekens eerst
                </span>
              )}
            </div>
            {showCoach && (
              <InlineCoachCallout
                feedback={aiState.feedback}
                suggestions={aiState.suggestions}
                loading={aiState.loading}
                error={aiState.error}
                onRetry={askCoach}
                onClose={closeCoach}
              />
            )}
          </>
        )}

        {round.improvedPrompt && (
          <div>
            <button
              type="button"
              onClick={() => setShowModel((v) => !v)}
              className="flex items-center gap-2 mb-2 focus-ring rounded"
            >
              {showModel ? (
                <ChevronDown size={12} strokeWidth={1.8} className="text-ink-mute" />
              ) : (
                <ChevronRight size={12} strokeWidth={1.8} className="text-ink-mute" />
              )}
              <Footnote>
                {showModel ? "Eén model-prompt (niet hét antwoord)" : "Onthul model-prompt"}
              </Footnote>
            </button>
            {showModel && (
              <div className="card-elev overflow-hidden">
                <div className="hairline-b flex items-center justify-end bg-paper-deep/20 px-3 py-2">
                  <button
                    type="button"
                    onClick={copyModel}
                    className="inline-flex items-center gap-1.5 rounded-md border border-rule bg-paper-card px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-ink-soft hover:border-rule-strong hover:text-ink focus-ring"
                  >
                    {copied ? (
                      <>
                        <Check size={10} strokeWidth={2.4} className="text-sage" />
                        gekopieerd
                      </>
                    ) : (
                      <>
                        <Copy size={10} strokeWidth={2} />
                        kopieer
                      </>
                    )}
                  </button>
                </div>
                <pre className="overflow-x-auto bg-paper p-3 font-mono text-[12.5px] leading-relaxed text-ink whitespace-pre-wrap">
                  {round.improvedPrompt}
                </pre>
              </div>
            )}
          </div>
        )}

        {round.learnPoint && (
          <div className="hairline-t pt-3">
            <div className="font-mono text-[10px] uppercase tracking-widest text-sage-deep mb-1">
              Leerpunt
            </div>
            <p className="text-[13.5px] leading-relaxed text-ink">
              {round.learnPoint}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export function PromptLab({ detail, work }) {
  return (
    <article id="promptlab" className="hairline-t pt-10">
      <div className="flex items-center gap-3">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-academy/15 text-academy-deep">
          <Sparkles size={13} strokeWidth={1.7} />
        </span>
        <Footnote>Promptlab · vier rondes</Footnote>
      </div>
      <h2 className="mt-3 font-display text-[28px] leading-tight">
        {detail.promptlabTitle || "Oefenen op iteratie, niet op het eerste antwoord."}
      </h2>
      <p className="mt-3 max-w-2xl text-[14.5px] text-ink-soft">
        Vier rondes waarin je een vage prompt stap voor stap scherper maakt.
        Schrijf eerst je eigen versie voor je de model-prompt onthult — het
        verschil daartussen is je leermoment.
      </p>

      <div className="mt-6 space-y-5">
        {detail.rounds.map((r, i) => (
          <PromptIterationRound key={i} round={r} index={i} work={work} />
        ))}
      </div>

      {work && (
        <div className="mt-8 hairline-t pt-6">
          <WriteBlock
            work={work}
            field="promptlab-mijn-promptkit"
            label="Mijn vier-rondes-promptkit voor eigen vak"
            hint="Wat neem je hieruit mee als vaste structuur voor je eigen prompts?"
            placeholder="1. ...\n2. ...\n3. ...\n4. ..."
            rows={5}
            tone="accent"
          />
        </div>
      )}
    </article>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
 *  PRAKTIJKOPDRACHT  —  used by 1.8 + 2.9
 *  Pad-keuze + transfer-haak + collega-feedback
 * ─────────────────────────────────────────────────────────────────────── */

export function PraktijkOpdracht({ detail, work }) {
  const [path, setPath] = useState(work?.get("praktijk-pad") || "");

  function selectPath(p) {
    setPath(p);
    work?.set("praktijk-pad", p);
  }

  return (
    <article id="praktijkopdracht" className="hairline-t pt-10">
      <div className="flex items-center gap-3">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-terra/15 text-terra">
          <FileText size={13} strokeWidth={1.7} />
        </span>
        <Footnote>Praktijkopdracht · max 4 uur</Footnote>
      </div>
      <h2 className="mt-3 font-display text-[28px] leading-tight">
        {detail.praktijkTitle || "Doe het in je eigen klas, deze week."}
      </h2>
      <p className="mt-3 max-w-2xl text-[14.5px] text-ink-soft">
        {detail.praktijkIntro ||
          "Kies een pad, voer 'm uit binnen vijf werkdagen, en haal feedback van één collega op."}
      </p>

      {detail.paths && (
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {detail.paths.map((p) => {
            const isSelected = path === p.key;
            return (
              <button
                key={p.key}
                type="button"
                onClick={() => selectPath(isSelected ? "" : p.key)}
                className={`hairline relative rounded-2xl p-5 text-left transition focus-ring ${
                  isSelected
                    ? "border-terra bg-terra-tint/40 ring-2 ring-terra/30"
                    : "bg-paper-card hover:bg-paper-deep/40"
                }`}
              >
                <Footnote>Pad {p.key.toUpperCase()}</Footnote>
                <h4 className="mt-2 font-display text-[18px] leading-snug text-ink">
                  {p.title}
                </h4>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">
                  {p.body}
                </p>
                {isSelected && (
                  <span className="absolute right-4 top-4 grid h-5 w-5 place-items-center rounded-full bg-terra text-paper-card">
                    <Check size={10} strokeWidth={2.4} />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}

      {detail.deliverables && (
        <div className="mt-8 hairline rounded-2xl bg-paper-card p-6">
          <Footnote>Wat lever je op</Footnote>
          <ul className="mt-3 space-y-2">
            {detail.deliverables.map((d, i) => (
              <li key={i} className="flex items-start gap-3 text-[13.5px]">
                <span className="mt-1 grid h-3.5 w-3.5 shrink-0 place-items-center rounded-[3px] border border-rule-strong">
                  <Check size={9} strokeWidth={2.5} className="text-ink-faint" />
                </span>
                <span className="text-ink-soft">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {detail.peerReview && (
        <div className="mt-8 hairline rounded-2xl bg-academy-tint/30 p-6">
          <div className="flex items-center gap-3">
            <Users size={14} strokeWidth={1.7} className="text-academy-deep" />
            <Footnote>Collega-feedback</Footnote>
          </div>
          <h3 className="mt-2 font-display text-[20px] leading-tight">
            {detail.peerReview.title || "Drie vragen voor je collega"}
          </h3>
          <p className="mt-2 text-[13.5px] text-ink-soft">
            {detail.peerReview.intro}
          </p>
          <ol className="mt-4 space-y-3">
            {detail.peerReview.questions.map((q, i) => (
              <li key={i} className="grid grid-cols-[28px_1fr] gap-3">
                <span className="num-mark text-[16px] leading-none text-academy-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-[13.5px] leading-relaxed text-ink">{q}</p>
                  {work && (
                    <WriteBlock
                      work={work}
                      field={`peer-${i}`}
                      label={`Antwoord van collega (vraag ${i + 1})`}
                      placeholder="Wat zegt je collega hierover?"
                      rows={2}
                    />
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
    </article>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
 *  KENNISCHECK  —  between sleutellessen
 *  5-7 vragen mix (MC, waar/niet-waar, prompt-herken) met directe feedback
 * ─────────────────────────────────────────────────────────────────────── */

export function KnowledgeCheck({ detail, work }) {
  const items = detail.checkItems || [];
  return (
    <article id="kennischeck" className="hairline-t pt-10">
      <div className="flex items-center gap-3">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-sage/15 text-sage-deep">
          <ShieldAlert size={13} strokeWidth={1.7} />
        </span>
        <Footnote>Kennischeck · {items.length} vragen</Footnote>
      </div>
      <h2 className="mt-3 font-display text-[28px] leading-tight">
        {detail.checkTitle || "Even checken wat is geland."}
      </h2>
      <p className="mt-3 max-w-2xl text-[14.5px] text-ink-soft">
        Geen toets — feedback. Per vraag direct uitleg. Aan het einde een
        advies: door, herhalen, of even pauze.
      </p>

      <div className="mt-6 space-y-4">
        {items.map((q, i) => (
          <KnowledgeCheckItem key={i} item={q} index={i} work={work} />
        ))}
      </div>
    </article>
  );
}

function KnowledgeCheckItem({ item, index, work }) {
  const field = work ? `check-${index}` : null;
  const choice = work && field ? work.get(field) : "";
  const revealed = choice && choice !== "";
  return (
    <div className="card-elev overflow-hidden">
      <div className="bg-paper-deep/40 hairline-b px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="num-mark text-[16px] leading-none">
            {String(index + 1).padStart(2, "0")}
          </span>
          <Footnote>{item.type || "Meerkeuze"}</Footnote>
        </div>
      </div>
      <div className="p-5">
        <p className="font-display text-[17px] leading-snug text-ink">
          {item.q}
        </p>
        {item.options && (
          <ul className="mt-4 space-y-2">
            {item.options.map((o, i) => {
              const isChosen = choice === String(i);
              const isCorrect = item.correct === i;
              const showState = revealed && (isChosen || isCorrect);
              return (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() =>
                      work?.set(field, isChosen ? "" : String(i))
                    }
                    disabled={revealed && !isChosen}
                    className={`hairline w-full rounded-lg px-4 py-3 text-left text-[14px] transition focus-ring ${
                      showState && isCorrect
                        ? "border-sage bg-sage-tint/50 text-sage-deep"
                        : isChosen
                        ? "border-terra bg-terra-tint/40 text-terra-deep"
                        : "bg-paper-card hover:bg-paper-deep/40 text-ink"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span>{o.label}</span>
                      {showState && isCorrect && (
                        <Check size={12} strokeWidth={2.4} className="text-sage-deep" />
                      )}
                    </div>
                    {revealed && o.explain && (
                      <p className="mt-2 hairline-t pt-2 text-[12.5px] italic text-ink-soft">
                        {o.explain}
                      </p>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
