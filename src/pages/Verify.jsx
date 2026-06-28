import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ShieldCheck, ShieldAlert, Award, Loader2 } from "lucide-react";
import { verifyBadgeJwt } from "../lib/badgeVerify";

/* ──────────────────────────────────────────────────────────────────────────
 * /verify — publieke verificatie van een Open Badge 3.0 (VC-JWT) van
 * AI PraktijkLab. Plak het token of open de verify-link uit het certificaat.
 * ─────────────────────────────────────────────────────────────────────── */

function fmtDate(iso) {
  try {
    return new Date(iso).toLocaleDateString("nl-NL", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return iso || "";
  }
}

export function Verify() {
  const [params] = useSearchParams();
  const [token, setToken] = useState(params.get("token") || "");
  const [state, setState] = useState({ status: "idle" }); // idle|checking|done

  async function run(tok) {
    const t = (tok ?? token).trim();
    if (!t) return;
    setState({ status: "checking" });
    const res = await verifyBadgeJwt(t);
    setState({ status: "done", ...res });
  }

  useEffect(() => {
    const t = params.get("token");
    if (t) run(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const vc = state.payload?.vc || state.payload || null;
  const ach = vc?.credentialSubject?.achievement;
  const recipient = vc?.credentialSubject?.identifier?.[0]?.identity;

  return (
    <div className="mx-auto max-w-2xl px-6 py-14">
      <div className="flex items-center gap-2">
        <Award size={16} strokeWidth={1.8} className="text-terra" />
        <span className="font-mono text-[10.5px] uppercase tracking-widest text-ink-faint">
          Badge-verificatie · AI PraktijkLab
        </span>
      </div>
      <h1 className="mt-3 font-display text-[30px] font-bold leading-tight text-ink">
        Is dit certificaat <span className="display-italic text-terra">echt</span>?
      </h1>
      <p className="mt-3 max-w-prose text-[14.5px] leading-relaxed text-ink-soft">
        Plak hieronder het badge-token (of open de verificatielink uit het
        certificaat). We controleren de digitale handtekening tegen de publieke
        sleutel van AI PraktijkLab — zo weet je zeker dat de badge door ons is
        uitgegeven en niet is gewijzigd.
      </p>

      <textarea
        value={token}
        onChange={(e) => setToken(e.target.value)}
        rows={4}
        placeholder="Plak hier het badge-token (begint met eyJ…)"
        className="mt-5 block w-full resize-y rounded-lg border border-rule bg-paper-card px-3.5 py-2.5 font-mono text-[12px] leading-relaxed text-ink focus:border-rule-strong focus:outline-none focus:ring-2 focus:ring-ink/10"
      />
      <button
        type="button"
        onClick={() => run()}
        disabled={state.status === "checking" || !token.trim()}
        className="btn btn-primary focus-ring mt-3 disabled:opacity-50"
      >
        {state.status === "checking" ? (
          <>
            <Loader2 size={15} strokeWidth={1.9} className="animate-spin" />
            Controleren…
          </>
        ) : (
          <>Verifieer badge</>
        )}
      </button>

      {state.status === "done" && (
        <div
          className={`mt-8 rounded-2xl border p-6 ${
            state.ok
              ? "border-sage/40 bg-sage-soft"
              : "border-terra-soft/60 bg-terra-tint/40"
          }`}
        >
          <div className="flex items-center gap-3">
            {state.ok ? (
              <ShieldCheck size={22} strokeWidth={1.9} className="text-sage-deep" />
            ) : (
              <ShieldAlert size={22} strokeWidth={1.9} className="text-terra-deep" />
            )}
            <p
              className={`font-display text-[19px] font-bold ${
                state.ok ? "text-sage-deep" : "text-terra-deep"
              }`}
            >
              {state.ok ? "Geldig — echt uitgegeven door AI PraktijkLab" : "Niet geldig"}
            </p>
          </div>

          {state.error && !state.ok && (
            <p className="mt-2 text-[13.5px] leading-relaxed text-ink">{state.error}</p>
          )}

          {ach && (
            <dl className="mt-5 space-y-3 border-t border-ink/10 pt-5 text-[13.5px]">
              {recipient && (
                <div className="flex gap-3">
                  <dt className="w-28 shrink-0 font-mono text-[10px] uppercase tracking-widest text-ink-mute">
                    Behaald door
                  </dt>
                  <dd className="font-medium text-ink">{recipient}</dd>
                </div>
              )}
              <div className="flex gap-3">
                <dt className="w-28 shrink-0 font-mono text-[10px] uppercase tracking-widest text-ink-mute">
                  Badge
                </dt>
                <dd className="font-medium text-ink">{ach.name}</dd>
              </div>
              {ach.description && (
                <div className="flex gap-3">
                  <dt className="w-28 shrink-0 font-mono text-[10px] uppercase tracking-widest text-ink-mute">
                    Omschrijving
                  </dt>
                  <dd className="text-ink-soft">{ach.description}</dd>
                </div>
              )}
              <div className="flex gap-3">
                <dt className="w-28 shrink-0 font-mono text-[10px] uppercase tracking-widest text-ink-mute">
                  Uitgegeven
                </dt>
                <dd className="text-ink-soft">
                  {vc?.issuer?.name || "AI PraktijkLab"} · {fmtDate(vc?.validFrom)}
                </dd>
              </div>
            </dl>
          )}

          {state.ok && (
            <p className="mt-5 font-mono text-[9.5px] leading-relaxed text-ink-faint">
              Geverifieerd via Ed25519-handtekening (Open Badges 3.0 · VC-JWT).
              Documenteert gevolgde AI-scholing — bruikbaar als bewijs voor de
              AI-geletterdheidsplicht (EU AI Act, art. 4).
            </p>
          )}
        </div>
      )}
    </div>
  );
}
