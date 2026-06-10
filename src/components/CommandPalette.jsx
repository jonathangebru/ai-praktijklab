import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  BookOpen,
  Sparkles,
  Briefcase,
  CornerDownLeft,
  FileText,
} from "lucide-react";
import { moduleList } from "../data/modules";
import { prompts, promptCategories } from "../data/prompts";
import { cases } from "../data/cases";
import { trackEvent } from "../lib/appInsights";
import { useAuth } from "./AuthProvider";

/* ──────────────────────────────────────────────────────────────────────────
 * CommandPalette — ⌘K-zoeken over de hele leeromgeving.
 *
 * Doorzoekt lessen, prompts, praktijkcasussen en pagina's, lokaal en direct
 * (geen server nodig). Toetsenbord: ⌘K/Ctrl+K openen, ↑↓ navigeren,
 * ↵ openen, Esc sluiten.
 * ──────────────────────────────────────────────────────────────────────── */

const PAGES = [
  { title: "Overzicht", to: "/" },
  { title: "Intake & niveau", to: "/intake" },
  { title: "Mijn voortgang", to: "/voortgang" },
  { title: "Module 01 · Basiscursus AI", to: "/modules/basiscursus-ai" },
  { title: "Module 02 · AI-geletterdheid", to: "/modules/ai-geletterdheid" },
  { title: "Promptbibliotheek", to: "/promptbibliotheek" },
  { title: "Praktijkcasussen", to: "/praktijkcasussen" },
  { title: "Voortgang & analytics", to: "/analytics" },
  { title: "Privacy & AVG", to: "/privacy" },
  { title: "Toegankelijkheid", to: "/toegankelijkheid" },
];

function normalize(s) {
  return String(s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

/* De doorzoekbare index — één keer opgebouwd per sessie. */
let _index = null;
function buildIndex() {
  if (_index) return _index;
  const items = [];

  for (const m of moduleList) {
    for (const l of m.lessons) {
      items.push({
        type: "les",
        title: `${l.number} · ${l.title}`,
        sub: m.title,
        to: `/lessen/${l.slug}`,
        haystack: normalize(`${l.number} ${l.title} ${l.goal} ${l.output}`),
        titleNorm: normalize(l.title),
      });
    }
  }

  const catLabel = Object.fromEntries(
    promptCategories.map((c) => [c.id, c.label])
  );
  for (const p of prompts) {
    const cat = catLabel[p.category] || p.category;
    items.push({
      type: "prompt",
      title: p.title,
      sub: `${cat} · ${p.useCase}`,
      to: "/promptbibliotheek",
      haystack: normalize(`${p.title} ${cat} ${p.category} ${p.useCase} ${p.body}`),
      titleNorm: normalize(p.title),
    });
  }

  for (const c of cases) {
    items.push({
      type: "casus",
      title: c.title,
      sub: `${c.school} · ${c.domain}`,
      to: "/praktijkcasussen",
      haystack: normalize(`${c.title} ${c.domain} ${c.context} ${c.challenge}`),
      titleNorm: normalize(c.title),
    });
  }

  for (const p of PAGES) {
    items.push({
      type: "pagina",
      title: p.title,
      sub: p.to,
      to: p.to,
      haystack: normalize(p.title),
      titleNorm: normalize(p.title),
    });
  }

  _index = items;
  return items;
}

const GROUPS = [
  { type: "les", label: "Lessen", icon: BookOpen, max: 5 },
  { type: "prompt", label: "Prompts", icon: Sparkles, max: 4 },
  { type: "casus", label: "Casussen", icon: Briefcase, max: 3 },
  { type: "pagina", label: "Pagina's", icon: FileText, max: 4 },
];

function search(query) {
  const items = buildIndex();
  const q = normalize(query.trim());

  if (!q) {
    // Leeg: snelle navigatie + de eerste lessen als startpunt.
    return GROUPS.map((g) => ({
      ...g,
      items:
        g.type === "pagina"
          ? items.filter((i) => i.type === "pagina").slice(0, 7)
          : g.type === "les"
          ? items.filter((i) => i.type === "les").slice(0, 3)
          : [],
    })).filter((g) => g.items.length);
  }

  const tokens = q.split(/\s+/).filter(Boolean);
  const scored = [];
  for (const item of items) {
    let score = 0;
    let ok = true;
    for (const t of tokens) {
      if (item.titleNorm.includes(t)) score += 2;
      else if (item.haystack.includes(t)) score += 1;
      else {
        ok = false;
        break;
      }
    }
    if (ok) scored.push({ item, score });
  }
  scored.sort((a, b) => b.score - a.score);

  return GROUPS.map((g) => ({
    ...g,
    items: scored
      .filter((s) => s.item.type === g.type)
      .slice(0, g.max)
      .map((s) => s.item),
  })).filter((g) => g.items.length);
}

export function CommandPalette({ open, onOpen, onClose }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const navigate = useNavigate();
  const { hasRole } = useAuth();

  // Beheer-/managementpagina's alleen tonen aan die rollen.
  const groups = useMemo(() => {
    const mayView = hasRole("beheerder") || hasRole("manager");
    return search(query)
      .map((g) => ({
        ...g,
        items: g.items.filter((i) => mayView || i.to !== "/analytics"),
      }))
      .filter((g) => g.items.length);
  }, [query, hasRole]);
  const flat = useMemo(() => groups.flatMap((g) => g.items), [groups]);

  // Globale sneltoets — ook als de palette dicht is.
  useEffect(() => {
    function onKey(e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (open) onClose();
        else {
          onOpen();
          trackEvent("search-open", { via: "hotkey" });
        }
      } else if (e.key === "Escape" && open) {
        onClose();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpen, onClose]);

  // Bij openen: reset + focus + scroll-lock.
  useEffect(() => {
    if (!open) return;
    setQuery("");
    setActive(0);
    const t = setTimeout(() => inputRef.current?.focus(), 20);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(t);
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => setActive(0), [query]);

  // Houd het actieve item in beeld.
  useEffect(() => {
    const el = listRef.current?.querySelector('[data-active="true"]');
    el?.scrollIntoView({ block: "nearest" });
  }, [active]);

  function go(item) {
    onClose();
    trackEvent("search-go", { type: item.type });
    navigate(item.to);
  }

  function onInputKey(e) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, flat.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter" && flat[active]) {
      e.preventDefault();
      go(flat[active]);
    }
  }

  if (!open) return null;

  let cursor = -1;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-start justify-center px-4 pt-[12vh]"
      role="dialog"
      aria-modal="true"
      aria-label="Zoeken"
    >
      <button
        type="button"
        aria-label="Sluit zoeken"
        className="absolute inset-0 bg-ink/30 backdrop-blur-[2px]"
        onClick={onClose}
      />
      <div className="animate-palette-in relative w-full max-w-xl overflow-hidden rounded-3xl border border-rule bg-paper-card shadow-xl">
        <div className="flex items-center gap-3 border-b border-rule px-5 py-4">
          <Search size={16} strokeWidth={1.8} className="shrink-0 text-ink-mute" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onInputKey}
            placeholder="Zoek lessen, prompts, casussen…"
            aria-label="Zoekopdracht"
            className="w-full bg-transparent text-[15px] text-ink outline-none placeholder:text-ink-faint"
          />
          <kbd className="hidden rounded border border-rule bg-paper px-1.5 py-0.5 font-mono text-[10px] text-ink-faint sm:block">
            esc
          </kbd>
        </div>

        <div ref={listRef} className="max-h-[52vh] overflow-y-auto p-2">
          {flat.length === 0 ? (
            <p className="px-4 py-8 text-center text-[13.5px] text-ink-soft">
              Niets gevonden voor &ldquo;{query}&rdquo; — probeer een ander
              woord, bijvoorbeeld een onderwerp of lesnummer.
            </p>
          ) : (
            groups.map((g) => (
              <div key={g.type} className="mb-1">
                <div className="px-3 pb-1 pt-2 font-mono text-[9.5px] uppercase tracking-widest text-ink-faint">
                  {g.label}
                </div>
                {g.items.map((item) => {
                  cursor++;
                  const idx = cursor;
                  const isActive = idx === active;
                  return (
                    <button
                      key={`${item.type}-${item.to}-${item.title}`}
                      type="button"
                      data-active={isActive}
                      onMouseEnter={() => setActive(idx)}
                      onClick={() => go(item)}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition ${
                        isActive ? "bg-terra-tint/60" : "hover:bg-paper-deep/60"
                      }`}
                    >
                      <g.icon
                        size={14}
                        strokeWidth={1.7}
                        className={`shrink-0 ${
                          isActive ? "text-terra-deep" : "text-ink-mute"
                        }`}
                      />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-[13.5px] text-ink">
                          {item.title}
                        </span>
                        <span className="block truncate text-[11.5px] text-ink-mute">
                          {item.sub}
                        </span>
                      </span>
                      {isActive && (
                        <CornerDownLeft
                          size={12}
                          strokeWidth={1.8}
                          className="shrink-0 text-ink-faint"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>

        <div className="flex items-center gap-4 border-t border-rule bg-paper px-5 py-2.5 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
          <span>↑↓ navigeren</span>
          <span>↵ openen</span>
          <span>esc sluiten</span>
        </div>
      </div>
    </div>
  );
}
