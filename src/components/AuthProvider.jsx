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
 * ──────────────────────────────────────────────────────────────────────── */

const AuthContext = createContext(null);

const DEV_USER = {
  userId: "dev-local",
  userDetails: "Dev (lokaal)",
  identityProvider: "dev",
  userRoles: ["anonymous", "authenticated", "beheerder"],
};

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
    try {
      const res = await fetch("/.auth/me", {
        headers: { accept: "application/json" },
        credentials: "include",
      });
      const ct = res.headers.get("content-type") || "";
      if (!res.ok || !ct.includes("application/json")) {
        // Geen echt /.auth-endpoint (plain Vite serveert hier index.html).
        throw new Error("no-auth-endpoint");
      }
      const data = await res.json();
      setUser(normalize(data?.clientPrincipal));
    } catch {
      // Plain `npm run dev`: val terug op de DEV-gebruiker; in prod → uitgelogd.
      setUser(import.meta.env.DEV ? DEV_USER : null);
    } finally {
      setStatus("ready");
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const roles = user?.userRoles ?? [];

  const value = {
    status,
    user,
    isAuthenticated: !!user,
    roles,
    hasRole: (r) => roles.includes(r),
    displayName: user?.userDetails ?? "",
    reload: load,
    login: (returnTo = "/") => {
      const dest = encodeURIComponent(returnTo);
      window.location.href = `/.auth/login/aad?post_login_redirect_uri=${dest}`;
    },
    logout: () => {
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
