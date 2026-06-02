import { useEffect, useMemo, useState } from "react";
import {
  Search,
  Copy,
  Check,
  Sparkles,
  Bookmark,
  Filter,
  Asterisk,
  Layers,
  Trash2,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { PageHeader, Section, Tag, Footnote, Button } from "../components/ui";
import { prompts, promptCategories } from "../data/prompts";
import * as workClient from "../lib/workClient";

const PROMPTKIT_KEY = "praktijklab.promptkit";

function readPromptkit() {
  if (typeof window === "undefined") return [];
  try {
    const v = JSON.parse(window.localStorage.getItem(PROMPTKIT_KEY) || "[]");
    return Array.isArray(v) ? v : [];
  } catch {
    return [];
  }
}

function usePromptkit() {
  const [kit, setKit] = useState(() => readPromptkit());

  useEffect(() => {
    function onStorage(e) {
      if (e.key === PROMPTKIT_KEY) {
        try {
          const v = JSON.parse(e.newValue || "[]");
          setKit(Array.isArray(v) ? v : []);
        } catch {
          setKit([]);
        }
      }
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  // Server-load: staat er een promptkit op de server, dan wint die (cross-
  // device). Anders seeden we de server vanuit localStorage. Niet ingelogd /
  // geen storage -> loadAll() geeft null en we blijven lokaal.
  useEffect(() => {
    let cancelled = false;
    workClient.loadAll().then((all) => {
      if (cancelled || !all) return;
      if (all.promptkit.length) {
        setKit(all.promptkit);
        try {
          window.localStorage.setItem(
            PROMPTKIT_KEY,
            JSON.stringify(all.promptkit)
          );
        } catch {
          /* ignore */
        }
      } else {
        const local = readPromptkit();
        if (local.length) workClient.savePromptkit(local);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  function remove(savedAt) {
    const next = kit.filter((item) => item.savedAt !== savedAt);
    setKit(next);
    try {
      window.localStorage.setItem(PROMPTKIT_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
    workClient.savePromptkit(next);
  }

  function clearAll() {
    setKit([]);
    try {
      window.localStorage.removeItem(PROMPTKIT_KEY);
    } catch {
      /* ignore */
    }
    workClient.savePromptkit([]);
  }

  return { kit, remove, clearAll };
}

const levels = [
  { id: "all", label: "Alle niveaus" },
  { id: "vo", label: "vo" },
  { id: "mbo", label: "mbo" },
  { id: "hbo", label: "hbo" },
];

export function Prompts() {
  const [cat, setCat] = useState("all");
  const [lvl, setLvl] = useState("all");
  const [query, setQuery] = useState("");
  const [saved, setSaved] = useState(new Set([1, 5]));
  const { kit: ownPromptkit, remove: removeFromKit } = usePromptkit();

  const filtered = useMemo(() => {
    return prompts.filter((p) => {
      const matchCat = cat === "all" || p.category === cat;
      const matchLvl = lvl === "all" || p.levels.includes(lvl);
      const q = query.trim().toLowerCase();
      const matchQ =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.useCase.toLowerCase().includes(q) ||
        p.body.toLowerCase().includes(q);
      return matchCat && matchLvl && matchQ;
    });
  }, [cat, lvl, query]);

  function toggleSave(id) {
    setSaved((s) => {
      const next = new Set(s);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  return (
    <>
      <PageHeader
        eyebrow="Promptbibliotheek"
        number="∗"
        title={
          <>
            Prompts die werken{" "}
            <span className="display-italic text-terra">voor docenten</span> —
            geen marketingvoorbeelden.
          </>
        }
        subtitle="Een groeiende bibliotheek met prompts die we hebben getest in vo, mbo en hbo. Direct kopieerbaar, met een tip voor verantwoord gebruik."
        meta={[
          { label: "Prompts", value: `${prompts.length}` },
          { label: "Categorieën", value: `${promptCategories.length}` },
          { label: "Mijn promptkit", value: `${ownPromptkit.length}` },
        ]}
      />

      <OwnPromptkitSection kit={ownPromptkit} onRemove={removeFromKit} />

      <Section className="!py-8 hairline-b">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <Filter size={14} strokeWidth={1.7} className="text-ink-mute" />
            <button
              onClick={() => setCat("all")}
              className={`rounded-full px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-widest transition focus-ring ${
                cat === "all"
                  ? "bg-ink text-paper-card"
                  : "bg-paper-card text-ink-soft hover:bg-paper-deep/60"
              }`}
            >
              Alle ({prompts.length})
            </button>
            {promptCategories.map((c) => {
              const count = prompts.filter((p) => p.category === c.id).length;
              const active = cat === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setCat(c.id)}
                  className={`rounded-full px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-widest transition focus-ring ${
                    active
                      ? c.color === "terra"
                        ? "bg-terra text-paper-card"
                        : c.color === "academy"
                        ? "bg-academy text-paper-card"
                        : "bg-sage text-paper-card"
                      : "bg-paper-card text-ink-soft hover:bg-paper-deep/60"
                  }`}
                >
                  {c.label} ({count})
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <div className="hairline flex items-center gap-2 rounded-lg bg-paper-card px-3 py-2 text-[13px]">
              <Search size={14} strokeWidth={1.7} className="text-ink-mute" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Zoek in prompts…"
                className="w-56 bg-transparent placeholder:text-ink-mute focus:outline-none"
              />
            </div>
            <select
              value={lvl}
              onChange={(e) => setLvl(e.target.value)}
              className="hairline rounded-lg bg-paper-card px-3 py-2 font-mono text-[11px] uppercase tracking-widest text-ink-soft focus-ring"
            >
              {levels.map((l) => (
                <option key={l.id} value={l.id}>
                  {l.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </Section>

      <Section className="!pt-10">
        {filtered.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {filtered.map((p) => (
              <PromptCard
                key={p.id}
                prompt={p}
                saved={saved.has(p.id)}
                onSave={() => toggleSave(p.id)}
              />
            ))}
          </div>
        )}
      </Section>

      <Section className="hairline-t" eyebrow="Promptkit" title="Mijn opgeslagen prompts">
        <div className="card-elev grid grid-cols-1 gap-1 p-2 md:grid-cols-2">
          {Array.from(saved).length === 0 ? (
            <div className="col-span-full p-6 text-center text-[13.5px] text-ink-mute">
              Nog niets opgeslagen. Klik op het bladwijzericoon bij een prompt om deze toe te voegen.
            </div>
          ) : (
            Array.from(saved).map((id) => {
              const p = prompts.find((x) => x.id === id);
              if (!p) return null;
              const c = promptCategories.find((x) => x.id === p.category);
              return (
                <div
                  key={p.id}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-paper-deep/40"
                >
                  <Sparkles size={13} className="text-terra" />
                  <div className="flex-1">
                    <div className="text-[13.5px] text-ink">{p.title}</div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                      {c?.label}
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSave(p.id)}
                    className="text-ink-mute hover:text-terra"
                  >
                    <Bookmark size={13} strokeWidth={1.8} fill="currentColor" />
                  </button>
                </div>
              );
            })
          )}
        </div>
      </Section>
    </>
  );
}

function PromptCard({ prompt, saved, onSave }) {
  const [copied, setCopied] = useState(false);
  const cat = promptCategories.find((c) => c.id === prompt.category);

  function copy() {
    navigator.clipboard?.writeText(prompt.body);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <article className="card-elev group flex flex-col overflow-hidden transition hover:border-rule-strong">
      <div className="hairline-b flex items-center justify-between bg-paper-card/50 px-5 py-3">
        <div className="flex items-center gap-2">
          <Tag tone={cat?.color || "neutral"}>{cat?.label}</Tag>
          {prompt.levels.map((l) => (
            <Tag key={l} tone="neutral">
              {l}
            </Tag>
          ))}
        </div>
        <button
          onClick={onSave}
          className={`grid h-7 w-7 place-items-center rounded-md transition focus-ring ${
            saved
              ? "bg-terra-tint text-terra"
              : "text-ink-mute hover:bg-paper-deep/40 hover:text-ink"
          }`}
          aria-label={saved ? "Verwijder uit kit" : "Bewaar prompt"}
        >
          <Bookmark
            size={13}
            strokeWidth={1.8}
            fill={saved ? "currentColor" : "none"}
          />
        </button>
      </div>

      <div className="flex-1 p-5">
        <h3 className="font-display text-[20px] leading-tight text-ink">
          {prompt.title}
        </h3>
        <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">
          {prompt.useCase}
        </p>

        <pre className="hairline mt-4 max-h-44 overflow-y-auto rounded-lg bg-paper px-4 py-3 font-mono text-[12.5px] leading-relaxed text-ink whitespace-pre-wrap">
          {prompt.body}
        </pre>

        <div className="mt-4 flex items-start gap-2.5 rounded-lg bg-sage-tint/40 p-3.5">
          <Asterisk
            size={13}
            strokeWidth={2.5}
            className="mt-0.5 shrink-0 text-sage-deep"
          />
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-sage-deep">
              Tip · verantwoord gebruik
            </div>
            <p className="mt-0.5 text-[12.5px] leading-relaxed text-ink-soft">
              {prompt.tip}
            </p>
          </div>
        </div>
      </div>

      <div className="hairline-t flex items-center justify-between px-5 py-3.5">
        <span className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
          Prompt · {String(prompt.id).padStart(3, "0")}
        </span>
        <button
          onClick={copy}
          className={`inline-flex items-center gap-2 rounded-md px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-widest transition focus-ring ${
            copied
              ? "bg-sage text-paper-card"
              : "bg-ink text-paper-card hover:bg-ink-soft"
          }`}
        >
          {copied ? (
            <>
              <Check size={11} strokeWidth={2} />
              gekopieerd
            </>
          ) : (
            <>
              <Copy size={11} strokeWidth={2} />
              kopieer prompt
            </>
          )}
        </button>
      </div>
    </article>
  );
}

function EmptyState() {
  return (
    <div className="card-elev grid place-items-center px-6 py-16 text-center">
      <Layers size={28} strokeWidth={1.4} className="mb-3 text-ink-mute" />
      <h3 className="font-display text-[22px] leading-tight">
        Geen prompts gevonden met deze filters
      </h3>
      <p className="mt-2 max-w-md text-[13.5px] text-ink-soft">
        Probeer een andere categorie, een ander niveau, of pas je zoekwoord aan.
      </p>
    </div>
  );
}

function OwnPromptkitSection({ kit, onRemove }) {
  const [expanded, setExpanded] = useState(true);

  if (kit.length === 0) {
    return (
      <Section className="!py-8 hairline-b">
        <div className="hairline relative overflow-hidden rounded-2xl bg-academy-tint/30 p-6">
          <div className="flex items-start gap-4">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-academy/15 text-academy-deep">
              <Sparkles size={15} strokeWidth={1.7} />
            </span>
            <div>
              <Footnote>Mijn promptkit · nog leeg</Footnote>
              <h3 className="mt-1 font-display text-[19px] leading-snug text-ink">
                Bewaar prompts die je in lessen schrijft.
              </h3>
              <p className="mt-2 max-w-2xl text-[13.5px] leading-relaxed text-ink-soft">
                In elke les zijn er "Probeer zelf"-blokken bij worked examples.
                Schrijf daar je eigen versie en klik op <em>Bewaar in mijn
                promptkit</em>. Je vindt ze hier terug — ook na herladen.
              </p>
            </div>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section className="!py-8 hairline-b">
      <div className="flex items-end justify-between gap-4 mb-5">
        <div>
          <Footnote>Mijn promptkit · uit lessen</Footnote>
          <h2 className="mt-2 font-display text-[28px] leading-tight text-ink">
            {kit.length} {kit.length === 1 ? "prompt" : "prompts"} bewaard
            tijdens lessen.
          </h2>
          <p className="mt-2 max-w-2xl text-[13.5px] text-ink-soft">
            Door jou geschreven, gekoppeld aan de les waar ze vandaan komen.
            Blijft op dit apparaat staan.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="hairline inline-flex items-center gap-2 rounded-lg bg-paper-card px-3 py-2 font-mono text-[10.5px] uppercase tracking-widest text-ink-soft hover:border-rule-strong focus-ring"
        >
          {expanded ? (
            <>
              <ChevronDown size={11} strokeWidth={1.8} />
              inklappen
            </>
          ) : (
            <>
              <ChevronRight size={11} strokeWidth={1.8} />
              uitklappen
            </>
          )}
        </button>
      </div>
      {expanded && (
        <div className="grid gap-4 md:grid-cols-2">
          {kit.map((item) => (
            <OwnPromptCard
              key={item.savedAt}
              item={item}
              onRemove={() => onRemove(item.savedAt)}
            />
          ))}
        </div>
      )}
    </Section>
  );
}

function OwnPromptCard({ item, onRemove }) {
  const [copied, setCopied] = useState(false);
  const date = new Date(item.savedAt);
  const dateLabel = date.toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "short",
  });

  function copy() {
    navigator.clipboard?.writeText(item.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <article className="card-elev overflow-hidden">
      <div className="hairline-b flex items-center justify-between bg-academy-tint/40 px-5 py-3">
        <div className="flex items-center gap-2 min-w-0">
          <Sparkles
            size={12}
            strokeWidth={1.7}
            className="shrink-0 text-academy-deep"
          />
          <span className="font-mono text-[10.5px] uppercase tracking-widest text-academy-deep truncate">
            {item.source || "Eigen prompt"}
          </span>
        </div>
        <span className="font-mono text-[10px] text-ink-faint shrink-0">
          {dateLabel}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-[17px] leading-snug text-ink">
          {item.title}
        </h3>
        <pre className="hairline mt-3 max-h-44 overflow-y-auto rounded-lg bg-paper px-4 py-3 font-mono text-[12.5px] leading-relaxed text-ink whitespace-pre-wrap">
          {item.prompt}
        </pre>
      </div>
      <div className="hairline-t flex items-center justify-between px-5 py-3">
        <button
          type="button"
          onClick={onRemove}
          className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-ink-faint hover:text-terra focus-ring rounded"
        >
          <Trash2 size={11} strokeWidth={1.8} />
          verwijder
        </button>
        <button
          type="button"
          onClick={copy}
          className={`inline-flex items-center gap-2 rounded-md px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-widest transition focus-ring ${
            copied
              ? "bg-sage text-paper-card"
              : "bg-ink text-paper-card hover:bg-ink-soft"
          }`}
        >
          {copied ? (
            <>
              <Check size={11} strokeWidth={2} />
              gekopieerd
            </>
          ) : (
            <>
              <Copy size={11} strokeWidth={2} />
              kopieer
            </>
          )}
        </button>
      </div>
    </article>
  );
}
