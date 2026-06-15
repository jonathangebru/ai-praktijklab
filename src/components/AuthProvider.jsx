import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

/* ─────────────────────────────────────────────────────────────────────────
 * AuthProvider — leest de ingelogde gebruiker uit Azure Static Web Apps.
 *
 * In productie (en via `npm run dev:swa`, de SWA-emulator) komt de gebruiker
 * van /.auth/me als { clientPrincipal: { userId, userDetails, userRoles, ... } }.
 *
 * In gewone `npm run dev` (poort 5173, géén emulator) bestaat /.auth niet.
 * Dan vangen we dat op en gebruiken we een lokale nep-gebruiker met àlle
 * rollen, zodat je gewoon kunt doorbouwen zonder elke keer in te loggen.
 *
 * GASTTOEGANG (tijdelijk): wie geen Microsoft-login kan gebruiken kan met de
 * link `…/?gast=<GUEST_CODE>` als "Gast" binnenkomen — docent-niveau, geen
 * beheer, geen serversync (werk blijft lokaal in de browser). Zet GUEST_CODE
 * op "" om gasttoegang volledig uit te schakelen. Let op: dit is *zachte*
 * toegang (de code zit in de frontend) — bedoeld voor proef/demo, niet als
 * harde beveiliging.
 * ──────────────────────────────────────────────────────────────────────── */

const AuthContext = createContext(null);

const DEV_USER = {
  userId: "dev-local",
  userDetails: "Dev (lokaal)",
  identityProvider: "dev",
  userRoles: ["anonymous", "authenticated", "beheerder"],
};

/* ─── Tijdelijke gasttoegang ────────────────────────────────────────────── */
/* Lijst van geldige gastcodes. Voeg een regel toe voor een nieuwe proeflink;
 * verwijder een regel om die ene link in te trekken (de andere blijven werken).
 * Lege lijst = gasttoegang volledig uit. */
const GUEST_CODES = [
  "onderwijskracht-2026", // Zakaria · De Onderwijskracht
  "proef-vonk-7b3k", // vrije proeflink
];
const GUEST_FLAG = "praktijklab.guest";
const GUEST_USER = {
  userId: "guest",
  userDetails: "Gast",
  identityProvider: "guest",
  userRoles: ["anonymous", "authenticated"], // bewust géén beheerder/manager
};

/* Activeert via ?gast=<code> en onthoudt dat in deze browser. De query-param
 * wordt daarna uit de URL gehaald zodat de code niet blijft rondslingeren. */
function guestActive() {
  if (typeof window === "undefined" || GUEST_CODES.length === 0) return false;
  try {
    const params = new URLSearchParams(window.location.search);
    if (params.has("gast")) {
      const ok = GUEST_CODES.includes(params.get("gast"));
      if (ok) {
        try {
          window.localStorage.setItem(GUEST_FLAG, "1");
        } catch {
          /* storage uit — gast geldt dan alleen deze sessie */
        }
      }
      params.delete("gast");
      const qs = params.toString();
      window.history.replaceState(
        {},
        "",
        window.location.pathname + (qs ? `?${qs}` : "") + window.location.hash
      );
      if (ok) return true;
    }
    return window.localStorage.getItem(GUEST_FLAG) === "1";
  } catch {
    return false;
  }
}

function clearGuest() {
  try {
    window.localStorage.removeItem(GUEST_FLAG);
  } catch {
    /* ignore */
  }
}

function normalize(principal) {
  if (!principal) return null;
  return {
    userId: principal.userId || "",
    userDetails: principal.userDetails || "Onbekend",
    identityProvider: principal.identityProvider || "",
    userRoles: Array.isArray(principal.userRoles) ? principal.userRoles : [],
  };
}

export function AuthProvider({ children }) {
  const [status, setStatus] = useState("loading"); // "loading" | "ready"
  const [user, setUser] = useState(null);

  const load = useCallback(async () => {
    setStatus("loading");
    let principal = null;
    try {
      const res = await fetch("/.auth/me", {
        headers: { accept: "application/json" },
        credentials: "include",
      });
      const ct = res.headers.get("content-type") || "";
      if (res.ok && ct.includes("application/json")) {
        const data = await res.json();
        principal = normalize(data?.clientPrincipal);
      }
    } catch {
      /* geen /.auth-endpoint (plain Vite) — val hieronder terug */
    }

    if (!principal) {
      // Echte login ontbreekt: gast-link? anders lokale dev? anders uitgelogd.
      if (guestActive()) principal = { ...GUEST_USER };
      else if (import.meta.env.DEV) principal = DEV_USER;
    }

    setUser(principal);
    setStatus("ready");
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const roles = user?.userRoles ?? [];
  const isGuest = user?.identityProvider === "guest";

  const value = {
    status,
    user,
    isAuthenticated: !!user,
    isGuest,
    roles,
    hasRole: (r) => roles.includes(r),
    displayName: user?.userDetails ?? "",
    reload: load,
    login: (returnTo = "/") => {
      const dest = encodeURIComponent(returnTo);
      window.location.href = `/.auth/login/aad?post_login_redirect_uri=${dest}`;
    },
    logout: () => {
      if (isGuest) {
        clearGuest();
        window.location.assign("/");
        return;
      }
      window.location.href = "/.auth/logout?post_logout_redirect_uri=/";
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth moet binnen <AuthProvider> gebruikt worden");
  return ctx;
}
