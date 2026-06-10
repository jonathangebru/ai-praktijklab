import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "./components/AuthProvider";
import { Layout } from "./components/Layout";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { Intake } from "./pages/Intake";
import { Module1 } from "./pages/Module1";
import { Module2 } from "./pages/Module2";
import { Lesson } from "./pages/Lesson";
import { Cases } from "./pages/Cases";
import { Prompts } from "./pages/Prompts";
import { Project } from "./pages/Project";
import { Analytics } from "./pages/Analytics";
import { Privacy } from "./pages/Privacy";
import { Toegankelijkheid } from "./pages/Toegankelijkheid";

/* Tussenstaat terwijl /.auth/me wordt opgehaald. */
function Splash() {
  return (
    <div className="grid min-h-screen place-items-center bg-paper">
      <div className="flex flex-col items-center gap-3">
        <span className="h-2 w-2 animate-soft-pulse rounded-full bg-terra" />
        <span className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
          Laden…
        </span>
      </div>
    </div>
  );
}

/* Getoond als een ingelogde gebruiker een pagina opent waar hij geen rol
 * voor heeft (bijv. een docent die naar /analytics gaat). */
function NoAccess() {
  return (
    <div className="grid min-h-[60vh] place-items-center px-6">
      <div className="max-w-md text-center">
        <span className="eyebrow">403 · Geen toegang</span>
        <h1 className="codex-display mt-3 text-[24px] text-ink">
          Alleen voor beheerders
        </h1>
        <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
          Deze pagina is afgeschermd. Vraag een beheerder om toegang als je
          denkt dat dit niet klopt.
        </p>
      </div>
    </div>
  );
}

function RequireRole({ role, children }) {
  const { hasRole } = useAuth();
  return hasRole(role) ? children : <NoAccess />;
}

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/intake" element={<Intake />} />
        <Route path="/modules/basiscursus-ai" element={<Module1 />} />
        <Route path="/modules/ai-geletterdheid" element={<Module2 />} />
        <Route path="/lessen/:slug" element={<Lesson />} />
        <Route path="/praktijkcasussen" element={<Cases />} />
        <Route path="/promptbibliotheek" element={<Prompts />} />
        <Route path="/project" element={<Project />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/toegankelijkheid" element={<Toegankelijkheid />} />
        <Route
          path="/analytics"
          element={
            <RequireRole role="beheerder">
              <Analytics />
            </RequireRole>
          }
        />
      </Route>
    </Routes>
  );
}

/* Bewaakt de hele app: laden → splash, niet ingelogd → login, anders → app. */
function Gate() {
  const { status, isAuthenticated } = useAuth();
  // Dev-only: ?login toont de loginpagina ondanks de auto-login op :5173.
  if (
    import.meta.env.DEV &&
    new URLSearchParams(window.location.search).has("login")
  ) {
    return <Login />;
  }
  if (status === "loading") return <Splash />;
  if (!isAuthenticated) return <Login />;
  return <AppRoutes />;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Gate />
      </BrowserRouter>
    </AuthProvider>
  );
}
