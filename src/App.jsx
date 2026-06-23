import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { AuthProvider, useAuth } from "./components/AuthProvider";
import { Wordmark } from "./components/Logo";
import { Layout } from "./components/Layout";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { Intake } from "./pages/Intake";
import { Module1 } from "./pages/Module1";
import { Module2 } from "./pages/Module2";
import { Module3 } from "./pages/Module3";
import { Module4 } from "./pages/Module4";
import { Module5 } from "./pages/Module5";
import { Module6 } from "./pages/Module6";
import { Module7 } from "./pages/Module7";
import { Module8 } from "./pages/Module8";
import { Lesson } from "./pages/Lesson";
import { Cases } from "./pages/Cases";
import { Prompts } from "./pages/Prompts";
import { Analytics } from "./pages/Analytics";
import { Privacy } from "./pages/Privacy";
import { Toegankelijkheid } from "./pages/Toegankelijkheid";
import { MijnVoortgang } from "./pages/MijnVoortgang";
import { Paden } from "./pages/Paden";

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
          Alleen voor beheer en management
        </h1>
        <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
          Deze pagina is afgeschermd. Vraag je beheerder om de juiste rol als
          je denkt dat dit niet klopt.
        </p>
      </div>
    </div>
  );
}

function RequireRole({ roles, children }) {
  const { hasRole } = useAuth();
  return roles.some(hasRole) ? children : <NoAccess />;
}

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/intake" element={<Intake />} />
        <Route path="/voortgang" element={<MijnVoortgang />} />
        <Route path="/leerpaden" element={<Paden />} />
        <Route path="/modules/basiscursus-ai" element={<Module1 />} />
        <Route path="/modules/ai-geletterdheid" element={<Module2 />} />
        <Route path="/modules/ai-geletterdheid-onderwijzen" element={<Module3 />} />
        <Route path="/modules/ai-beleid" element={<Module4 />} />
        <Route path="/modules/groei-en-team" element={<Module5 />} />
        <Route path="/modules/werkdruk-en-organisatie" element={<Module6 />} />
        <Route path="/modules/toegankelijkheid-en-inclusie" element={<Module7 />} />
        <Route path="/modules/ai-tools-en-modellen" element={<Module8 />} />
        <Route path="/lessen/:slug" element={<Lesson />} />
        <Route path="/praktijkcasussen" element={<Cases />} />
        <Route path="/promptbibliotheek" element={<Prompts />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/toegankelijkheid" element={<Toegankelijkheid />} />
        <Route
          path="/analytics"
          element={
            <RequireRole roles={["beheerder", "manager"]}>
              <Analytics />
            </RequireRole>
          }
        />
      </Route>
    </Routes>
  );
}

/* Privacy- en toegankelijkheidsverklaring zijn ook zonder login leesbaar —
 * een AVG-statement hoort publiek te zijn. Minimale publieke omlijsting. */
function PublicPage({ children }) {
  return (
    <div className="min-h-screen bg-paper">
      <header className="hairline-b bg-paper/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link to="/" className="focus-ring rounded">
            <Wordmark />
          </Link>
          <Link to="/" className="btn btn-ghost focus-ring !px-5 !py-2 text-[13px]">
            Naar de startpagina
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-5xl">{children}</main>
    </div>
  );
}

/* Bewaakt de hele app: laden → splash, niet ingelogd → landing, anders → app. */
function Gate() {
  const { status, isAuthenticated } = useAuth();
  const { pathname } = useLocation();
  // Dev-only: ?login toont de landing ondanks de auto-login op :5173.
  if (
    import.meta.env.DEV &&
    new URLSearchParams(window.location.search).has("login")
  ) {
    return <Login />;
  }
  if (status === "loading") return <Splash />;
  if (!isAuthenticated) {
    if (pathname === "/privacy")
      return (
        <PublicPage>
          <Privacy />
        </PublicPage>
      );
    if (pathname === "/toegankelijkheid")
      return (
        <PublicPage>
          <Toegankelijkheid />
        </PublicPage>
      );
    return <Login />;
  }
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
