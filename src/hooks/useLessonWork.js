import { useCallback, useEffect, useRef, useState } from "react";
import * as workClient from "../lib/workClient";

/* ─────────────────────────────────────────────────────────────────────────
 * useLessonWork(slug)
 *
 * Lightweight per-lesson workspace. API-first met localStorage-fallback:
 * typen schrijft direct naar localStorage (instant, offline-proof) en pusht
 * debounced naar /api/work. Bij mount haalt de hook het serverwerk op; staat
 * de server iets voor deze les, dan wint de server (cross-device). Is de
 * server niet bereikbaar (niet ingelogd / storage uit), dan blijft alles
 * lokaal werken — geen regressie.
 *
 * Storage layout:
 *   praktijklab.work.<slug>   → { [field]: value, … }   (per lesson)
 *   praktijklab.promptkit     → [{ title, prompt, source, savedAt }, …]
 *
 * Returned API:
 *   values                      current field values (mirror of storage)
 *   savedAt                     { [field]: ts } — last save timestamp per field
 *   get(field)                  string | "" — convenience reader
 *   set(field, value)           updates state + schedules a save
 *   reset(field)                clears a single field
 *   resetAll()                  clears the whole lesson workspace
 *   completion(fields)          { total, filled, pct }
 *   addToPromptkit(entry)       pushes a prompt to the global promptkit
 *   promptkit                   live array snapshot for display
 *   exportMarkdown(spec)        returns markdown string from a field spec
 * ──────────────────────────────────────────────────────────────────────── */

const workKey = (slug) => `praktijklab.work.${slug}`;
const PROMPTKIT_KEY = "praktijklab.promptkit";
const SAVE_DEBOUNCE_MS = 350;

/* De promptkit is globaal — we synchroniseren 'm één keer per page-load met
 * de server (niet bij elke les-wissel). Een volledige reload (bv. na in-/
 * uitloggen) reset deze module-flag vanzelf. */
let _promptkitSynced = false;

function isNonEmptyObject(o) {
  return o && typeof o === "object" && Object.keys(o).length > 0;
}

function mirrorLocal(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* localStorage vol/uit — negeer */
  }
}

function safeParse(raw, fallback) {
  if (!raw) return fallback;
  try {
    const v = JSON.parse(raw);
    return v ?? fallback;
  } catch {
    return fallback;
  }
}

function readWork(slug) {
  if (typeof window === "undefined") return {};
  return safeParse(window.localStorage.getItem(workKey(slug)), {});
}

function readPromptkit() {
  if (typeof window === "undefined") return [];
  const v = safeParse(window.localStorage.getItem(PROMPTKIT_KEY), []);
  return Array.isArray(v) ? v : [];
}

export function useLessonWork(slug) {
  const [values, setValues] = useState(() => readWork(slug));
  const [savedAt, setSavedAt] = useState({});
  const [promptkit, setPromptkit] = useState(() => readPromptkit());

  // Track latest values for the debounced writer without re-creating timers.
  const latestRef = useRef(values);
  latestRef.current = values;

  const timerRef = useRef(null);
  const pendingFieldsRef = useRef(new Set());

  // True zodra de docent zelf iets wijzigt — voorkomt dat een trage
  // serverrespons actief getypte tekst overschrijft.
  const dirtyRef = useRef(false);

  // Reset hook state when slug changes (different lesson).
  useEffect(() => {
    setValues(readWork(slug));
    setSavedAt({});
    dirtyRef.current = false;
    pendingFieldsRef.current = new Set();
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, [slug]);

  // Server-load: haal het werk + de promptkit van de ingelogde gebruiker op.
  // Server wint voor déze les (cross-device); heeft de server nog niets maar
  // staat er lokaal wel werk, dan seeden we de server. Niet ingelogd / geen
  // storage -> loadAll() geeft null en we blijven lokaal.
  useEffect(() => {
    let cancelled = false;
    workClient.loadAll().then((all) => {
      if (cancelled || !all) return;

      const serverWork = all.work?.[slug];
      if (isNonEmptyObject(serverWork)) {
        // Niet overschrijven als de docent ondertussen zelf typt.
        if (!dirtyRef.current) {
          setValues(serverWork);
          mirrorLocal(workKey(slug), serverWork);
        }
      } else if (isNonEmptyObject(latestRef.current)) {
        // Server kent deze les nog niet -> lokaal werk omhoog seeden.
        workClient.saveLesson(slug, latestRef.current);
      }

      // Promptkit éénmalig synchroniseren.
      if (!_promptkitSynced) {
        _promptkitSynced = true;
        if (all.promptkit.length) {
          setPromptkit(all.promptkit);
          mirrorLocal(PROMPTKIT_KEY, all.promptkit);
        } else {
          const localKit = readPromptkit();
          if (localKit.length) workClient.savePromptkit(localKit);
        }
      }
    });
    return () => {
      cancelled = true;
    };
  }, [slug]);

  // Cross-tab sync — listen to storage events for this lesson and promptkit.
  useEffect(() => {
    function onStorage(e) {
      if (e.key === workKey(slug)) {
        setValues(safeParse(e.newValue, {}));
      } else if (e.key === PROMPTKIT_KEY) {
        const v = safeParse(e.newValue, []);
        setPromptkit(Array.isArray(v) ? v : []);
      }
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [slug]);

  const flush = useCallback(() => {
    const snapshot = latestRef.current;
    try {
      window.localStorage.setItem(workKey(slug), JSON.stringify(snapshot));
      const fields = Array.from(pendingFieldsRef.current);
      pendingFieldsRef.current = new Set();
      if (fields.length) {
        const now = Date.now();
        setSavedAt((prev) => {
          const next = { ...prev };
          fields.forEach((f) => (next[f] = now));
          return next;
        });
      }
    } catch {
      /* localStorage full or disabled — fail silently */
    }
    // Push naar de server (best-effort; faalt stil als niet ingelogd).
    workClient.saveLesson(slug, snapshot);
  }, [slug]);

  const scheduleSave = useCallback(
    (field) => {
      pendingFieldsRef.current.add(field);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        timerRef.current = null;
        flush();
      }, SAVE_DEBOUNCE_MS);
    },
    [flush]
  );

  const set = useCallback(
    (field, value) => {
      dirtyRef.current = true;
      setValues((prev) => {
        if (prev[field] === value) return prev;
        return { ...prev, [field]: value };
      });
      scheduleSave(field);
    },
    [scheduleSave]
  );

  const get = useCallback(
    (field) => {
      const v = values[field];
      return v == null ? "" : v;
    },
    [values]
  );

  const reset = useCallback(
    (field) => {
      dirtyRef.current = true;
      setValues((prev) => {
        if (!(field in prev)) return prev;
        const next = { ...prev };
        delete next[field];
        return next;
      });
      scheduleSave(field);
    },
    [scheduleSave]
  );

  const resetAll = useCallback(() => {
    dirtyRef.current = true;
    setValues({});
    setSavedAt({});
    try {
      window.localStorage.removeItem(workKey(slug));
    } catch {
      /* ignore */
    }
    // Leeg ook op de server.
    workClient.saveLesson(slug, {});
  }, [slug]);

  const completion = useCallback(
    (fields) => {
      const total = fields.length;
      const filled = fields.filter((f) => {
        const v = values[f];
        return typeof v === "string" ? v.trim().length > 0 : Boolean(v);
      }).length;
      return {
        total,
        filled,
        pct: total ? Math.round((filled / total) * 100) : 0,
      };
    },
    [values]
  );

  const addToPromptkit = useCallback((entry) => {
    try {
      const list = readPromptkit();
      const next = [{ savedAt: Date.now(), ...entry }, ...list];
      window.localStorage.setItem(PROMPTKIT_KEY, JSON.stringify(next));
      setPromptkit(next);
      // Push naar de server (best-effort).
      workClient.savePromptkit(next);
      return true;
    } catch {
      return false;
    }
  }, []);

  return {
    values,
    savedAt,
    get,
    set,
    reset,
    resetAll,
    completion,
    addToPromptkit,
    promptkit,
  };
}

/* ──────────────────────────────────────────────────────────────────────────
 * exportLessonMarkdown(work, lesson, detail)
 *
 * Walks the lesson's detail object and collects user-written content into a
 * coherent markdown document — suitable for downloading or sharing with a
 * collega. Sections are skipped when empty so the export reflects exactly
 * what the docent has done.
 * ─────────────────────────────────────────────────────────────────────── */

export function buildLessonMarkdown({ lesson, module: m, detail, work }) {
  const lines = [];
  const today = new Date();
  const dateStr = today.toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  lines.push(`# Mijn lesopzet — ${lesson.title}`);
  lines.push("");
  lines.push(
    `> ${m?.title || ""} · ${lesson.number} · samengesteld op ${dateStr}`
  );
  lines.push("");

  // Steps with workspaces
  const filledSteps = (detail.steps || []).filter(
    (s) => s.workspace && (work.get(s.workspace.field) || "").trim()
  );
  if (filledSteps.length) {
    lines.push("## Mijn uitwerking per stap");
    lines.push("");
    filledSteps.forEach((s, i) => {
      lines.push(`### ${i + 1}. ${s.workspace.label || s.title}`);
      lines.push("");
      lines.push(work.get(s.workspace.field).trim());
      lines.push("");
    });
  }

  // Worked examples — eigen prompts
  const filledExamples = (detail.workedExamples || []).filter(
    (ex) => ex.tryItYourself && (work.get(ex.tryItYourself.field) || "").trim()
  );
  if (filledExamples.length) {
    lines.push("## Mijn eigen prompts");
    lines.push("");
    filledExamples.forEach((ex) => {
      lines.push(`### ${ex.title}`);
      lines.push("");
      lines.push("```");
      lines.push(work.get(ex.tryItYourself.field).trim());
      lines.push("```");
      lines.push("");
    });
  }

  // Casuslab — voorspellingen + eigen matrix
  if (detail.format === "casuslab") {
    const preds = (detail.cases || [])
      .map((c, i) => ({ c, a: work.get(`casuslab-${i}-prediction`) }))
      .filter((p) => (p.a || "").trim());
    if (preds.length) {
      lines.push("## Mijn voorspellingen per casus");
      lines.push("");
      preds.forEach(({ c, a }) => {
        lines.push(`### ${c.domain}`);
        lines.push("");
        lines.push(a.trim());
        lines.push("");
      });
    }
    const matrix = work.get("casuslab-mijn-matrix");
    if ((matrix || "").trim()) {
      lines.push("## Mijn wat-kan-AI matrix");
      lines.push("");
      lines.push(matrix.trim());
      lines.push("");
    }
  }

  // Casusbespreking — gekozen stellingnames + eigen reacties + actieplan
  if (detail.format === "casusbespreking") {
    const reacties = (detail.cases || [])
      .map((c, i) => ({ c, a: work.get(`casus-${i}-eigen-reactie`) }))
      .filter((r) => (r.a || "").trim());
    if (reacties.length) {
      lines.push("## Mijn positie per casus");
      lines.push("");
      reacties.forEach(({ c, a }, idx) => {
        lines.push(`### ${c.title || `Casus ${idx + 1}`}`);
        lines.push("");
        // Show selected stellingnames
        (c.statements || []).forEach((s, j) => {
          if (work.get(`casus-${idx}-stelling-${j}`) === "agree") {
            lines.push(`- Sluit aan bij **${s.author}**: "${s.quote}"`);
          }
        });
        lines.push("");
        lines.push(a.trim());
        lines.push("");
      });
    }
    const actionSteps = (detail.actionPlan?.steps || [])
      .map((s) => ({
        s,
        v: s.workspace?.field ? work.get(s.workspace.field) : "",
      }))
      .filter((x) => (x.v || "").trim());
    if (actionSteps.length) {
      lines.push(`## ${detail.actionPlan.title || "Actieplan"}`);
      lines.push("");
      actionSteps.forEach(({ s, v }) => {
        lines.push(`### ${s.title}`);
        lines.push("");
        lines.push(v.trim());
        lines.push("");
      });
    }
  }

  // Promptlab — eigen pogingen per ronde + eigen promptkit
  if (detail.format === "promptlab") {
    const ronden = (detail.rounds || [])
      .map((r, i) => ({ r, a: work.get(`promptlab-${i}-user`) }))
      .filter((x) => (x.a || "").trim());
    if (ronden.length) {
      lines.push("## Mijn prompts per ronde");
      lines.push("");
      ronden.forEach(({ r, a }) => {
        lines.push(`### ${r.intent}`);
        lines.push("");
        lines.push("```");
        lines.push(a.trim());
        lines.push("```");
        lines.push("");
      });
    }
    const kit = work.get("promptlab-mijn-promptkit");
    if ((kit || "").trim()) {
      lines.push("## Mijn vier-rondes-promptkit");
      lines.push("");
      lines.push(kit.trim());
      lines.push("");
    }
  }

  // Praktijkopdracht — pad + collega-feedback
  if (detail.format === "praktijkopdracht") {
    const pad = work.get("praktijk-pad");
    if (pad) {
      const pathObj = (detail.paths || []).find((p) => p.key === pad);
      if (pathObj) {
        lines.push(`## Gekozen pad — ${pathObj.title}`);
        lines.push("");
        lines.push(pathObj.body);
        lines.push("");
      }
    }
    const feedback = (detail.peerReview?.questions || [])
      .map((q, i) => ({ q, a: work.get(`peer-${i}`) }))
      .filter((p) => (p.a || "").trim());
    if (feedback.length) {
      lines.push("## Collega-feedback");
      lines.push("");
      feedback.forEach(({ q, a }) => {
        lines.push(`**${q}**`);
        lines.push("");
        lines.push(a.trim());
        lines.push("");
      });
    }
  }

  // Rubric self-assessment
  const rubricLines = [];
  (detail.eindcriteria || []).forEach((c, i) => {
    const lvl = work.get(`rubric-${i}`);
    if (lvl) {
      const label =
        lvl === "boven"
          ? "Boven niveau"
          : lvl === "op"
          ? "Op niveau"
          : "Onder niveau";
      rubricLines.push(`- **${c.criterium}** — ${label}`);
    }
  });
  if (rubricLines.length) {
    lines.push("## Zelf-inschatting (rubric)");
    lines.push("");
    lines.push(...rubricLines);
    lines.push("");
  }

  // Reflection
  const filledReflection = (detail.reflection || [])
    .map((q, i) => ({ q, a: work.get(`reflectie-${i}`) }))
    .filter((r) => (r.a || "").trim());
  if (filledReflection.length) {
    lines.push("## Reflectie");
    lines.push("");
    filledReflection.forEach((r) => {
      lines.push(`**${r.q}**`);
      lines.push("");
      lines.push(r.a.trim());
      lines.push("");
    });
  }

  if (lines.length <= 4) {
    lines.push("> Je hebt nog niets ingevuld in deze les.");
    lines.push("");
  }

  return lines.join("\n");
}

export function downloadMarkdown(filename, markdown) {
  try {
    const blob = new Blob([markdown], {
      type: "text/markdown;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 0);
    return true;
  } catch {
    return false;
  }
}
