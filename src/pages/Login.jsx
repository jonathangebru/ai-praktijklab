import { LogIn } from "lucide-react";
import { Wordmark } from "../components/Logo";
import { useAuth } from "../components/AuthProvider";

/* Volledig-scherm inlogpagina. Wordt getoond zolang er geen ingelogde
 * gebruiker is. De knop stuurt naar de Microsoft Entra-login van Azure SWA. */
export function Login() {
  const { login } = useAuth();

  return (
    <div className="relative isolate grid min-h-screen place-items-center bg-paper px-6">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex justify-center">
          <Wordmark />
        </div>

        <div className="rounded-2xl border border-rule bg-paper-card p-8 text-center shadow-soft">
          <span className="eyebrow">VABOK · Docentenplatform</span>
          <h1 className="codex-display mt-3 text-[26px] leading-tight text-ink">
            Welkom terug
          </h1>
          <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
            Log in met je school-account om je cursussen, prompts en voortgang
            te openen.
          </p>

          <button
            type="button"
            onClick={() => login("/")}
            className="focus-ring mt-7 flex w-full items-center justify-center gap-2.5 rounded-xl bg-academy px-5 py-3 text-[14px] font-medium text-paper-card transition hover:opacity-90"
          >
            <LogIn size={16} strokeWidth={1.9} />
            Inloggen met Microsoft
          </button>

          <p className="mt-5 text-[11px] leading-relaxed text-ink-mute">
            Beveiligd via Microsoft Entra · AVG-proof, EU-regio
          </p>
        </div>

        <p className="mt-6 text-center font-mono text-[9.5px] uppercase tracking-widest text-ink-faint">
          Aventus · Veluwse Onderwijsgroep · Etty Hillesum · Saxion
        </p>
      </div>
    </div>
  );
}
