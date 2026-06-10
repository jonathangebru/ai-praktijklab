import { Outlet, useLocation, Link } from "react-router-dom";
import { Sidebar, MobileNav } from "./Sidebar";
import { Search, Command, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { FeedbackWidget } from "./FeedbackWidget";
import { CommandPalette } from "./CommandPalette";

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
  "/toegankelijkheid": ["VABOK", "Toegankelijkheid"],
};

export function Layout() {
  const { pathname, hash } = useLocation();
  const [navOpen, setNavOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Scroll naar boven bij routewissel (of naar het anker bij een #hash)
  // + sluit mobiele nav.
  useEffect(() => {
    setNavOpen(false);
    if (hash) {
      // Wacht tot de pagina-animatie (fade-up remount) klaar is, anders
      // wordt de scroll door de browser weer teruggedraaid.
      const t = setTimeout(() => {
        document
          .querySelector(hash)
          ?.scrollIntoView({ behavior: "instant", block: "start" });
      }, 350);
      return () => clearTimeout(t);
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);

  const crumbs =
    breadcrumbs[pathname] ||
    (pathname.startsWith("/lessen")
      ? ["Programma", "Module", "Les"]
      : ["Overzicht"]);

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
        <TopBar
          crumbs={crumbs}
          onOpenNav={() => setNavOpen(true)}
          onOpenSearch={() => setSearchOpen(true)}
        />
        <div key={pathname} className="animate-fade-up">
          <Outlet />
        </div>
        <Footer />
      </main>
      <FeedbackWidget />
      <CommandPalette
        open={searchOpen}
        onOpen={() => setSearchOpen(true)}
        onClose={() => setSearchOpen(false)}
      />
    </div>
  );
}

function TopBar({ crumbs, onOpenNav, onOpenSearch }) {
  // Sinqlo-gebaar: de balk duikt weg bij omlaag scrollen en glijdt terug
  // zodra je omhoog beweegt.
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    let lastY = window.scrollY;
    function onScroll() {
      const y = window.scrollY;
      setHidden(y > 120 && y > lastY);
      lastY = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`hairline-b sticky top-0 z-30 flex items-center justify-between gap-3 bg-paper/85 px-4 py-3 backdrop-blur-md transition-transform duration-300 ease-out sm:px-6 lg:gap-4 lg:px-10 lg:py-3.5 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
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
        <PilotBadge />
        <button
          type="button"
          onClick={onOpenSearch}
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
          type="button"
          onClick={onOpenSearch}
          className="grid h-9 w-9 place-items-center rounded-lg border border-rule bg-paper-card text-ink-soft hover:border-rule-strong hover:text-ink focus-ring md:hidden"
          aria-label="Zoeken"
        >
          <Search size={14} strokeWidth={1.7} />
        </button>
      </div>
    </header>
  );
}

function PilotBadge() {
  return (
    <span
      title="Pilotfase · VABOK-samenwerking"
      className="hidden items-center gap-1.5 rounded-full border border-terra-soft/60 bg-terra-tint/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-terra-deep sm:flex"
    >
      <span className="inline-block h-1.5 w-1.5 animate-soft-pulse rounded-full bg-terra" />
      Pilot · VABOK
    </span>
  );
}

function Footer() {
  return (
    <footer className="hairline-t mt-24 bg-paper-deep">
      <div className="grid gap-10 px-5 py-12 sm:px-8 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <p className="text-[17px] font-bold tracking-tightish text-ink">
            AI PraktijkLab
          </p>
          <p className="mt-2 max-w-sm text-[13px] leading-relaxed text-ink-mute">
            Praktische AI-professionalisering voor docenten in vo, mbo en
            hbo. Een initiatief van de VABOK-samenwerking, gebouwd door
            Datagrid.
          </p>
        </div>

        <div className="lg:col-span-4">
          <p className="text-[11px] font-bold uppercase tracking-widest text-ink-faint">
            Platform
          </p>
          <ul className="mt-3 space-y-2 text-[13px]">
            <li>
              <Link
                to="/toegankelijkheid"
                className="focus-ring hover-dim rounded text-ink-soft"
              >
                Toegankelijkheid
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="focus-ring hover-dim rounded text-ink-soft"
              >
                Privacy & AVG
              </Link>
            </li>
            <li>
              <Link
                to="/privacy#contact"
                className="focus-ring hover-dim rounded text-ink-soft"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="text-[11px] font-bold uppercase tracking-widest text-ink-faint">
            Partners
          </p>
          <ul className="mt-3 space-y-2 text-[13px] text-ink-soft">
            <li>Aventus</li>
            <li>Veluwse Onderwijsgroep</li>
            <li>Etty Hillesum Lyceum</li>
            <li>Saxion</li>
          </ul>
        </div>
      </div>

      <div className="hairline-t px-5 py-4 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-2 text-[11.5px] text-ink-mute sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Datagrid · VABOK-samenwerking</span>
          <span>v0.7 pilot</span>
        </div>
      </div>
    </footer>
  );
}
