import { Outlet, useLocation, Link } from "react-router-dom";
import { Sidebar, MobileNav } from "./Sidebar";
import { Search, Bell, Command, Menu, Clock3 } from "lucide-react";
import { useEffect, useState } from "react";
import { FeedbackWidget } from "./FeedbackWidget";

/* Demo expires on this date — change in one place if you extend the demo. */
const DEMO_EXPIRES = new Date("2026-06-07T23:59:59");

const breadcrumbs = {
  "/": ["Overzicht"],
  "/intake": ["Programma", "Intake & niveau"],
  "/modules/basiscursus-ai": ["Programma", "Module 01 — Basiscursus AI"],
  "/modules/ai-geletterdheid": ["Programma", "Module 02 — AI-geletterdheid"],
  "/lessen/lesvoorbereiding": [
    "Programma",
    "Module 01",
    "Les — AI voor lesvoorbereiding",
  ],
  "/promptbibliotheek": ["Bibliotheken", "Promptbibliotheek"],
  "/praktijkcasussen": ["Bibliotheken", "Praktijkcasussen"],
  "/project": ["VABOK", "Project & roadmap"],
  "/analytics": ["VABOK", "Voortgang & analytics"],
  "/privacy": ["VABOK", "Privacy & AVG"],
};

export function Layout() {
  const { pathname } = useLocation();
  const [navOpen, setNavOpen] = useState(false);

  const crumbs =
    breadcrumbs[pathname] ||
    (pathname.startsWith("/lessen")
      ? ["Programma", "Module", "Les"]
      : ["Overzicht"]);

  // Scroll to top on route change + close mobile nav
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setNavOpen(false);
  }, [pathname]);

  return (
    <div className="relative isolate flex min-h-screen bg-paper">
      <a
        href="#hoofdinhoud"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-[60] focus:rounded-lg focus:border focus:border-ink focus:bg-paper-card focus:px-4 focus:py-2 focus:text-[13px] focus:text-ink focus:shadow"
      >
        Spring naar inhoud
      </a>
      <Sidebar />
      <MobileNav open={navOpen} onClose={() => setNavOpen(false)} />
      <main id="hoofdinhoud" className="relative flex-1 min-w-0">
        <TopBar crumbs={crumbs} onOpenNav={() => setNavOpen(true)} />
        <div key={pathname} className="animate-fade-up">
          <Outlet />
        </div>
        <Footer />
      </main>
      <FeedbackWidget />
    </div>
  );
}

function TopBar({ crumbs, onOpenNav }) {
  return (
    <header className="hairline-b sticky top-0 z-30 flex items-center justify-between gap-3 bg-paper/85 px-4 py-3 backdrop-blur-md sm:px-6 lg:gap-4 lg:px-10 lg:py-3.5">
      <div className="flex min-w-0 items-center gap-3">
        <button
          type="button"
          onClick={onOpenNav}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-rule bg-paper-card text-ink-soft hover:border-rule-strong hover:text-ink focus-ring lg:hidden"
          aria-label="Open navigatie"
        >
          <Menu size={16} strokeWidth={1.8} />
        </button>
        <nav
          aria-label="Broodkruimels"
          className="flex min-w-0 flex-wrap items-center gap-2"
        >
          {crumbs.map((c, i) => {
            const last = i === crumbs.length - 1;
            return (
              <span key={i} className="flex min-w-0 items-center gap-2">
                <span
                  className={`truncate text-[13px] ${
                    last ? "text-ink" : "text-ink-mute"
                  }`}
                >
                  {c}
                </span>
                {!last && <span className="text-ink-faint">/</span>}
              </span>
            );
          })}
        </nav>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <DemoBadge />
        <button
          className="hidden items-center gap-2.5 rounded-lg border border-rule bg-paper-card px-3 py-1.5 text-[12.5px] text-ink-mute hover:border-rule-strong hover:text-ink focus-ring md:flex"
          aria-label="Zoeken"
        >
          <Search size={13} strokeWidth={1.7} />
          <span>Zoek lessen, prompts, casussen…</span>
          <span className="ml-6 flex items-center gap-0.5 font-mono text-[10px] text-ink-faint">
            <Command size={10} strokeWidth={2} />K
          </span>
        </button>
        <button
          className="grid h-9 w-9 place-items-center rounded-lg border border-rule bg-paper-card text-ink-soft hover:border-rule-strong hover:text-ink focus-ring md:hidden"
          aria-label="Zoeken"
        >
          <Search size={14} strokeWidth={1.7} />
        </button>
        <button
          className="grid h-9 w-9 place-items-center rounded-lg border border-rule bg-paper-card text-ink-soft hover:border-rule-strong hover:text-ink focus-ring"
          aria-label="Meldingen"
        >
          <Bell size={14} strokeWidth={1.7} />
        </button>
      </div>
    </header>
  );
}

function DemoBadge() {
  const now = new Date();
  const msPerDay = 1000 * 60 * 60 * 24;
  const daysLeft = Math.ceil((DEMO_EXPIRES - now) / msPerDay);
  if (daysLeft <= 0) {
    return (
      <span
        title={`Demo vervallen op ${DEMO_EXPIRES.toLocaleDateString("nl-NL")}`}
        className="hidden items-center gap-1.5 rounded-full border border-rule bg-paper-deep/50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-ink-mute sm:flex"
      >
        <Clock3 size={10} strokeWidth={1.8} />
        Demo verlopen
      </span>
    );
  }
  const dateStr = DEMO_EXPIRES.toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "short",
  });
  return (
    <span
      title={`Tijdelijke demo voor VABOK · vervalt ${DEMO_EXPIRES.toLocaleDateString("nl-NL")}`}
      className="hidden items-center gap-1.5 rounded-full border border-terra-soft/60 bg-terra-tint/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-terra-deep sm:flex"
    >
      <span className="inline-block h-1.5 w-1.5 animate-soft-pulse rounded-full bg-terra" />
      Demo · t/m {dateStr}
      <span className="text-terra-deep/60">·</span>
      <span>{daysLeft}d</span>
    </span>
  );
}

function Footer() {
  return (
    <footer className="hairline-t mt-24 px-5 py-8 sm:px-8 lg:px-10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <span className="font-mono text-[10.5px] uppercase tracking-widest text-ink-mute">
            AI&nbsp;PraktijkLab · v0.4 prototype
          </span>
          <span className="hidden h-3 w-px bg-rule sm:block" />
          <span className="hidden text-[12px] text-ink-mute sm:block">
            Een ontwerp voor de VABOK-samenwerking
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-[12px] text-ink-mute">
          <a href="#" className="hover:text-ink focus-ring rounded">
            Toegankelijkheid
          </a>
          <span className="h-3 w-px bg-rule" />
          <Link to="/privacy" className="hover:text-ink focus-ring rounded">
            Privacy & AVG
          </Link>
          <span className="h-3 w-px bg-rule" />
          <a href="#" className="hover:text-ink focus-ring rounded">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
