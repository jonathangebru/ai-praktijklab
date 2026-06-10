import { useEffect, useId, useRef, useState } from "react";
import { MessageSquare, X, Check, Send, Star } from "lucide-react";
import { trackEvent } from "../lib/appInsights";

/* ──────────────────────────────────────────────────────────────────────────
 * <FeedbackWidget />
 *
 * Drijvende knop rechtsonder. Opent een paneel met:
 *   · rating (1-5 sterren)
 *   · rol (optioneel)
 *   · naam (optioneel)
 *   · bericht (verplicht)
 *
 * POST naar /api/feedback. Server logt naar App Insights.
 * ──────────────────────────────────────────────────────────────────────── */

const ROLES = [
  { value: "docent-vo", label: "Docent vo" },
  { value: "docent-mbo", label: "Docent mbo" },
  { value: "docent-hbo", label: "Docent hbo" },
  { value: "opleidingsmanager", label: "Opleidingsmanager" },
  { value: "projectleider", label: "Projectleider" },
  { value: "overig", label: "Overig" },
];

export function FeedbackWidget() {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState(null);

  const [rating, setRating] = useState(0);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const ratingId = useId();
  const roleId = useId();
  const nameId = useId();
  const messageId = useId();

  const dialogRef = useRef(null);
  const firstFieldRef = useRef(null);

  // Esc om te sluiten + focus naar eerste veld bij openen
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    setTimeout(() => firstFieldRef.current?.focus(), 50);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  async function submit(e) {
    e.preventDefault();
    if (!message.trim() || submitting) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: message.trim(),
          name: name.trim() || undefined,
          role: role || undefined,
          rating: rating || undefined,
          page: typeof window !== "undefined" ? window.location.pathname : undefined,
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      trackEvent("feedback-sent", { rating, role, hasName: Boolean(name) });
      setDone(true);
      setTimeout(() => {
        setOpen(false);
        setDone(false);
        setMessage("");
        setName("");
        setRole("");
        setRating(0);
      }, 2200);
    } catch (err) {
      setError("Versturen mislukt — probeer 't zo nog eens.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Geef feedback"
        className={`fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-[13px] font-medium text-paper-card shadow-lg transition hover:bg-ink-soft focus-ring sm:bottom-6 sm:right-6 ${
          open ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <MessageSquare size={14} strokeWidth={1.8} />
        Feedback
      </button>

      {open && (
        <>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Sluit feedback"
            className="fixed inset-0 z-40 bg-ink/30 backdrop-blur-sm"
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={ratingId + "-title"}
            ref={dialogRef}
            className="fixed bottom-5 right-5 z-50 w-[min(380px,calc(100vw-2.5rem))] overflow-hidden rounded-2xl bg-paper shadow-xl hairline animate-fade-up sm:bottom-6 sm:right-6"
          >
            <div className="hairline-b flex items-center justify-between px-5 py-3.5">
              <div className="flex items-center gap-2">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-terra/15 text-terra">
                  <MessageSquare size={13} strokeWidth={1.7} />
                </span>
                <div>
                  <h2
                    id={ratingId + "-title"}
                    className="font-display text-[16px] leading-tight text-ink"
                  >
                    Geef feedback
                  </h2>
                  <p className="font-mono text-[9.5px] uppercase tracking-widest text-ink-faint">
                    Anoniem · demo-feedback
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Sluit"
                className="grid h-7 w-7 place-items-center rounded-md text-ink-mute hover:bg-paper-deep hover:text-ink focus-ring"
              >
                <X size={14} strokeWidth={1.8} />
              </button>
            </div>

            {done ? (
              <div className="flex flex-col items-center gap-3 px-5 py-10 text-center">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-sage text-paper-card">
                  <Check size={20} strokeWidth={2} />
                </span>
                <h3 className="font-display text-[18px] leading-tight text-ink">
                  Bedankt.
                </h3>
                <p className="max-w-[260px] text-[13px] text-ink-soft">
                  Je input komt direct binnen bij het PraktijkLab-team. Veel waarde.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4 p-5">
                <fieldset>
                  <legend
                    id={ratingId}
                    className="mb-1.5 font-mono text-[10px] uppercase tracking-widest text-ink-mute"
                  >
                    Wat vond je?
                  </legend>
                  <div
                    className="flex items-center gap-1"
                    role="radiogroup"
                    aria-labelledby={ratingId}
                  >
                    {[1, 2, 3, 4, 5].map((n) => {
                      const active = n <= rating;
                      return (
                        <button
                          key={n}
                          type="button"
                          ref={n === 1 ? firstFieldRef : null}
                          role="radio"
                          aria-checked={rating === n}
                          aria-label={`${n} van 5 sterren`}
                          onClick={() => setRating(rating === n ? 0 : n)}
                          className={`grid h-8 w-8 place-items-center rounded-md transition focus-ring ${
                            active
                              ? "text-terra"
                              : "text-ink-faint hover:text-ink-mute"
                          }`}
                        >
                          <Star
                            size={18}
                            strokeWidth={1.5}
                            fill={active ? "currentColor" : "none"}
                          />
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <div>
                  <label
                    htmlFor={roleId}
                    className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-ink-mute"
                  >
                    Rol (optioneel)
                  </label>
                  <select
                    id={roleId}
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="hairline w-full rounded-lg bg-paper-card px-3 py-2 text-[13px] text-ink focus:outline-none focus:ring-2 focus:ring-ink/10 focus-ring"
                  >
                    <option value="">— Kies eventueel —</option>
                    {ROLES.map((r) => (
                      <option key={r.value} value={r.value}>
                        {r.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor={nameId}
                    className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-ink-mute"
                  >
                    Naam (optioneel)
                  </label>
                  <input
                    id={nameId}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Mag leeg blijven"
                    autoComplete="name"
                    className="hairline w-full rounded-lg bg-paper-card px-3 py-2 text-[13px] text-ink placeholder:italic placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-ink/10 focus-ring"
                  />
                </div>

                <div>
                  <label
                    htmlFor={messageId}
                    className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-ink-mute"
                  >
                    Bericht <span className="text-terra">*</span>
                  </label>
                  <textarea
                    id={messageId}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    maxLength={4000}
                    rows={4}
                    placeholder="Wat viel je op? Wat zou je willen zien?"
                    className="hairline w-full resize-y rounded-lg bg-paper-card px-3 py-2 text-[13px] text-ink placeholder:italic placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-ink/10 focus-ring"
                  />
                  <div className="mt-1 flex items-center justify-between text-[10.5px] text-ink-faint">
                    <span>Geen persoonsgegevens van leerlingen, alsjeblieft.</span>
                    <span className="font-mono">{message.length}/4000</span>
                  </div>
                </div>

                {error && (
                  <div className="rounded-md bg-terra-tint/60 px-3 py-2 text-[12px] text-terra-deep">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={!message.trim() || submitting}
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-[13.5px] font-medium transition focus-ring ${
                    !message.trim() || submitting
                      ? "bg-paper-deep/60 text-ink-faint cursor-not-allowed"
                      : "bg-ink text-paper-card hover:bg-ink-soft"
                  }`}
                >
                  {submitting ? (
                    "Versturen…"
                  ) : (
                    <>
                      <Send size={13} strokeWidth={1.8} />
                      Verstuur feedback
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </>
      )}
    </>
  );
}
