import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  Scale,
  Users,
  Compass,
  Library,
  Sparkles,
  GraduationCap,
  FlaskConical,
  LineChart,
  TrendingUp,
  LogOut,
  X,
} from "lucide-react";
import { Wordmark } from "./Logo";
import { useAuth } from "./AuthProvider";
import { useEffect } from "react";

const nav = [
  {
    section: "Leren",
    items: [
      { to: "/", label: "Overzicht", icon: LayoutDashboard, end: true },
      { to: "/intake", label: "Intake & niveau", icon: Compass },
      { to: "/voortgang", label: "Mijn voortgang", icon: TrendingUp },
      { to: "/modules/basiscursus-ai", label: "Basiscursus AI", icon: GraduationCap, eyebrow: "Module 01" },
      { to: "/modules/ai-geletterdheid", label: "AI-geletterdheid", icon: FlaskConical, eyebrow: "Module 02" },
      { to: "/modules/ai-geletterdheid-onderwijzen", label: "AI-geletterdheid onderwijzen", icon: BookOpen, eyebrow: "Module 03" },
      { to: "/modules/ai-beleid", label: "AI-beleid & de AI Act", icon: Scale, eyebrow: "Module 04" },
      { to: "/modules/groei-en-team", label: "Groei & team", icon: Users, eyebrow: "Module 05" },
    ],
  },
  {
    section: "Bibliotheken",
    items: [
      { to: "/promptbibliotheek", label: "Promptbibliotheek", icon: Sparkles },
      { to: "/praktijkcasussen", label: "Praktijkcasussen", icon: Library },
    ],
  },
  {
    section: "Platform",
    items: [
      { to: "/analytics", label: "Voortgang & analytics", icon: LineChart, requiresRole: ["beheerder", "manager"] },
    ],
  },
];

/* Initialen uit een naam: "Marieke v. Dijk" → "MD", "Dev (lokaal)" → "DL". */
function initialsFrom(name) {
  if (!name) return "?";
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 1).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/* Gebruikerskaart onderaan de sidebar — echte naam, rol en uitlog-knop. */
function UserCard() {
  const { displayName, hasRole, logout, isGuest } = useAuth();
  const roleLabel = isGuest
    ? "Proeftoegang"
    : hasRole("beheerder")
    ? "Beheerder"
    : hasRole("manager")
    ? "Management"
    : "Docent";

  return (
    <div className="hairline-t mx-3 mb-3 mt-2 rounded-xl bg-paper-card p-4">
      <div className="flex items-center gap-3">
        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-academy text-paper-card">
          <span className="font-display text-[13px]">
            {initialsFrom(displayName)}
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="truncate text-[13px] font-medium leading-tight text-ink">
            {displayName || "Onbekend"}
          </div>
          <div className="text-[11px] leading-tight text-ink-mute">
            {roleLabel}
          </div>
        </div>
        <button
          type="button"
          onClick={logout}
          className="focus-ring grid h-7 w-7 shrink-0 place-items-center rounded-md text-ink-mute hover:bg-paper-deep hover:text-ink"
          aria-label="Uitloggen"
          title="Uitloggen"
        >
          <LogOut size={14} strokeWidth={1.7} />
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * SidebarBody — gedeelde inhoud voor desktop-sidebar en mobiele drawer.
 * Accepteert `onNavigate` zodat de drawer zichzelf kan sluiten bij een klik;
 * desktop negeert het. Nav-items met `requiresRole` worden gefilterd op rol.
 * ──────────────────────────────────────────────────────────────────────── */
function SidebarBody({ onNavigate }) {
  const { hasRole } = useAuth();
  const visibleNav = nav
    .map((group) => ({
      ...group,
      items: group.items.filter(
        (item) =>
          !item.requiresRole ||
          (Array.isArray(item.requiresRole)
            ? item.requiresRole.some(hasRole)
            : hasRole(item.requiresRole))
      ),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <>
      <div className="hairline-b flex items-center gap-2 px-6 py-5">
        <Wordmark />
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-5" aria-label="Hoofdnavigatie">
        {visibleNav.map((group) => (
          <div key={group.section} className="mb-6">
            <div className="px-3 pb-2">
              <span className="eyebrow">{group.section}</span>
            </div>
            <ul className="space-y-0.5">
              {group.items.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    onClick={onNavigate}
                    className={({ isActive }) =>
                      `group relative flex items-center gap-3 rounded-lg px-3 py-2 text-[14px] transition focus-ring ${
                        isActive
                          ? "bg-paper-deep text-ink"
                          : "text-ink-soft hover:bg-paper-card hover:text-ink"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <span className="absolute left-0 top-1/2 h-5 w-[2px] -translate-y-1/2 rounded-r-full bg-terra" />
                        )}
                        <item.icon
                          size={16}
                          strokeWidth={1.7}
                          className={isActive ? "text-terra" : "text-ink-mute"}
                        />
                        <span className="flex-1">{item.label}</span>
                        {item.eyebrow && (
                          <span className="font-mono text-[9px] uppercase tracking-wider text-ink-mute/80">
                            {item.eyebrow.split(" ")[1]}
                          </span>
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <UserCard />

      <div className="hairline-t px-6 py-3">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[9.5px] uppercase tracking-widest text-ink-faint">
            AI PraktijkLab
          </span>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 animate-soft-pulse rounded-full bg-sage" />
            <span className="font-mono text-[9.5px] uppercase tracking-widest text-ink-faint">
              Live
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

/* Desktop sidebar — sticky column, hidden on mobile */
export function Sidebar() {
  return (
    <aside className="hairline-r sticky top-0 z-40 hidden h-screen w-[268px] shrink-0 flex-col bg-paper lg:flex">
      <SidebarBody />
    </aside>
  );
}

/* Mobile drawer — slide-in overlay with backdrop, Esc + click-out close,
 * body scroll lock while open, NavLink clicks auto-close. */
export function MobileNav({ open, onClose }) {
  // Lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Esc to close
  useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      className={`lg:hidden ${open ? "" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Sluit navigatie"
        tabIndex={open ? 0 : -1}
        className={`fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm transition-opacity duration-200 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Hoofdnavigatie"
        className={`fixed inset-y-0 left-0 z-50 flex h-screen w-[280px] max-w-[85vw] flex-col bg-paper hairline-r transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Sluit navigatie"
          tabIndex={open ? 0 : -1}
          className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-lg border border-rule bg-paper-card text-ink-soft hover:border-rule-strong hover:text-ink focus-ring"
        >
          <X size={15} strokeWidth={1.8} />
        </button>
        <SidebarBody onNavigate={onClose} />
      </aside>
    </div>
  );
}
