import { useEffect, useRef, useState } from "react";
import {
  AlertTriangle,
  Check,
  Copy,
  RefreshCw,
  Sparkles,
  X,
} from "lucide-react";

/* ──────────────────────────────────────────────────────────────────────────
 *  <AIResponse />
 *  Sage-getint paneel voor AI-output. Streamt tekst binnen, biedt copy +
 *  regenereer, toont loading-skeleton en error-state.
 *
 *  Props:
 *    response   — string die je toont (mag tijdens streaming groeien)
 *    loading    — true → eerste-token-skeleton + 'AI · live' pulse
 *    streaming  — true → tekst loopt nog binnen (cursor blink)
 *    error      — string of null
 *    onRegenerate — () => void
 *    onClose    — () => void  (toont sluit-knop als gegeven)
 *    footnote   — string, kleine regel bovenaan paneel (default 'AI · live')
 * ─────────────────────────────────────────────────────────────────────── */
export function AIResponse({
  response = "",
  loading = false,
  streaming = false,
  error = null,
  onRegenerate,
  onClose,
  footnote = "AI · live",
}) {
  const [copied, setCopied] = useState(false);
  const liveRef = useRef(null);

  useEffect(() => {
    if (!onClose) return;
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  /* Auto-scroll de tekst in beeld terwijl 'ie binnenstroomt */
  useEffect(() => {
    if (!streaming || !liveRef.current) return;
    liveRef.current.scrollTop = liveRef.current.scrollHeight;
  }, [response, streaming]);

  function copy() {
    if (!response) return;
    navigator.clipboard?.writeText(response);
    setCopied(true);
    setTimeout(() => setCopied(false), 1700);
  }

  const isIdle = !loading && !streaming && !error && !response;
  if (isIdle) return null;

  return (
    <section
      aria-label="AI-antwoord"
      className="mt-4 overflow-hidden rounded-xl border border-sage/30 bg-sage-tint/30"
    >
      {/* Header */}
      <header className="flex items-center justify-between border-b border-sage/20 bg-sage-tint/50 px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="grid h-5 w-5 place-items-center rounded-full bg-sage/15 text-sage-deep">
            <Sparkles size={10} strokeWidth={1.8} />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-sage-deep">
            {footnote}
          </span>
          {(loading || streaming) && (
            <span
              aria-hidden="true"
              className="ml-1 inline-block h-1.5 w-1.5 rounded-full bg-sage animate-soft-pulse"
            />
          )}
        </div>
        <div className="flex items-center gap-1.5">
          {response && !loading && !streaming && (
            <button
              type="button"
              onClick={copy}
              aria-label="Kopieer AI-antwoord"
              className="inline-flex items-center gap-1 rounded-md border border-sage/30 bg-paper-card px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-sage-deep hover:bg-sage-tint/60 focus-ring"
            >
              {copied ? (
                <>
                  <Check size={10} strokeWidth={2.4} />
                  gekopieerd
                </>
              ) : (
                <>
                  <Copy size={10} strokeWidth={2} />
                  kopieer
                </>
              )}
            </button>
          )}
          {onRegenerate && !loading && !streaming && (
            <button
              type="button"
              onClick={onRegenerate}
              aria-label="Genereer opnieuw"
              className="inline-flex items-center gap-1 rounded-md border border-sage/30 bg-paper-card px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-sage-deep hover:bg-sage-tint/60 focus-ring"
            >
              <RefreshCw size={10} strokeWidth={1.8} />
              opnieuw
            </button>
          )}
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              aria-label="Sluit AI-paneel (esc)"
              className="grid h-6 w-6 place-items-center rounded-md text-ink-faint hover:bg-sage-tint/60 hover:text-sage-deep focus-ring"
            >
              <X size={11} strokeWidth={2} />
            </button>
          )}
        </div>
      </header>

      {/* Body */}
      <div className="px-4 py-3">
        {error && (
          <div className="flex items-start gap-2.5 rounded-md border border-terra-soft/60 bg-terra-tint/40 px-3 py-2.5">
            <AlertTriangle
              size={13}
              strokeWidth={1.8}
              className="mt-0.5 shrink-0 text-terra-deep"
            />
            <div className="flex-1">
              <p className="text-[13px] leading-relaxed text-ink">{error}</p>
              {onRegenerate && (
                <button
                  type="button"
                  onClick={onRegenerate}
                  className="mt-2 inline-flex items-center gap-1.5 rounded-md bg-ink px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-paper-card hover:bg-ink-soft focus-ring"
                >
                  <RefreshCw size={10} strokeWidth={1.8} />
                  Probeer opnieuw
                </button>
              )}
            </div>
          </div>
        )}

        {loading && !response && !error && <Skeleton />}

        {response && !error && (
          <div
            ref={liveRef}
            className="max-h-[420px] overflow-y-auto whitespace-pre-wrap text-[14px] leading-relaxed text-ink"
            aria-live={streaming ? "polite" : "off"}
          >
            {response}
            {streaming && (
              <span
                aria-hidden="true"
                className="ml-0.5 inline-block h-[1em] w-[2px] align-text-bottom bg-sage-deep animate-soft-pulse"
              />
            )}
          </div>
        )}
      </div>

      {/* Footer met kosten + AVG */}
      <footer className="border-t border-sage/20 bg-sage-tint/40 px-4 py-2">
        <p className="font-mono text-[9.5px] uppercase tracking-widest text-sage-deep/80">
          AI-respons · gpt-4o-mini · Azure West-Europa · ~$0.001 per call
        </p>
        <p className="mt-1 font-mono text-[9.5px] leading-relaxed text-ink-faint">
          AI antwoorden zijn niet altijd correct. Deel geen leerlinggegevens.
        </p>
      </footer>
    </section>
  );
}

function Skeleton() {
  return (
    <div className="space-y-2.5" aria-hidden="true">
      <div className="h-3 w-[88%] animate-soft-pulse rounded bg-sage/15" />
      <div className="h-3 w-[72%] animate-soft-pulse rounded bg-sage/15" />
      <div className="h-3 w-[64%] animate-soft-pulse rounded bg-sage/15" />
      <div className="h-3 w-[80%] animate-soft-pulse rounded bg-sage/15" />
    </div>
  );
}
