import { useEffect, useState } from "react";
import { moduleList } from "../data/modules";
import * as workClient from "./workClient";

/* ──────────────────────────────────────────────────────────────────────────
 * voortgang — de leerreis van de docent, berekend uit echt werk.
 *
 * Eén bron van waarheid voor dashboard, modulepagina's en lesafronding:
 *   · welke lessen zijn afgerond (expliciet afgevinkt door de docent)
 *   · welke lessen zijn "in uitvoering" (er staat werk, nog niet afgevinkt)
 *   · recente activiteit (les bewerkt, prompt bewaard, les afgerond)
 *   · de aanbevolen volgende stap
 *
 * Opslag (zelfde localStorage-familie als useLessonWork):
 *   praktijklab.done       → ["slug", …]            afgevinkte lessen
 *   praktijklab.activity   → [{type, slug, ts}, …]  recente activiteit
 *
 * Afgevinkte lessen syncen best-effort naar de server als meta-rij
 * "__done__" in /api/work — zo reist je voortgang mee tussen apparaten.
 * ─────────────────────────────────────────────────────────────────────── */

const WORK_PREFIX = "praktijklab.work.";
const PROMPTKIT_KEY = "praktijklab.promptkit";
const DONE_KEY = "praktijklab.done";
const ACTIVITY_KEY = "praktijklab.activity";
const DONE_ROW = "__done__";
const ACTIVITY_MAX = 12;
const CHANGE_EVENT = "praktijklab:voortgang";

function safeParse(raw, fallback) {
  if (!raw) return fallback;
  try {
    const v = JSON.parse(raw);
    return v ?? fallback;
  } catch {
    return fallback;
  }
}

function readJSON(key, fallback) {
  if (typeof window === "undefined") return fallback;
  return safeParse(window.localStorage.getItem(key), fallback);
}

function writeJSON(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new Event(CHANGE_EVENT));
  } catch {
    /* localStorage vol/uit — negeer */
  }
}

/* ─── Afgeronde lessen ──────────────────────────────────────────────────── */

export function readDone() {
  const v = readJSON(DONE_KEY, []);
  return Array.isArray(v) ? v : [];
}

export function isDone(slug) {
  return readDone().includes(slug);
}

export function setDone(slug, done) {
  const set = new Set(readDone());
  if (done) set.add(slug);
  else set.delete(slug);
  const list = [...set];
  writeJSON(DONE_KEY, list);
  // Best-effort naar de server (meta-rij), zodat voortgang cross-device is.
  const map = {};
  list.forEach((s) => (map[s] = 1));
  workClient.saveLesson(DONE_ROW, map);
  if (done) logActivity({ type: "afgerond", slug });
}

/* ─── Activiteitenlog ───────────────────────────────────────────────────── */

export function logActivity(entry) {
  const list = readJSON(ACTIVITY_KEY, []);
  const keyOf = (e) => `${e.type}:${e.slug || e.title || ""}`;
  const next = [
    { ...entry, ts: Date.now() },
    ...(Array.isArray(list) ? list : []).filter(
      (e) => keyOf(e) !== keyOf(entry)
    ),
  ].slice(0, ACTIVITY_MAX);
  writeJSON(ACTIVITY_KEY, next);
}

export function readActivity() {
  const v = readJSON(ACTIVITY_KEY, []);
  return Array.isArray(v) ? v : [];
}

/* ─── Werk lezen ────────────────────────────────────────────────────────── */

function hasContent(obj) {
  if (!obj || typeof obj !== "object") return false;
  return Object.values(obj).some((v) =>
    typeof v === "string" ? v.trim() !== "" : v != null && v !== ""
  );
}

function readAllWork() {
  const out = {};
  if (typeof window === "undefined") return out;
  try {
    for (let i = 0; i < window.localStorage.length; i++) {
      const key = window.localStorage.key(i);
      if (!key || !key.startsWith(WORK_PREFIX)) continue;
      const slug = key.slice(WORK_PREFIX.length);
      if (slug.startsWith("__")) continue;
      const data = safeParse(window.localStorage.getItem(key), null);
      if (hasContent(data)) out[slug] = data;
    }
  } catch {
    /* ignore */
  }
  return out;
}

/* ─── De berekende leerreis ─────────────────────────────────────────────── */

export function computeVoortgang() {
  const doneSet = new Set(readDone());
  const work = readAllWork();

  const lessonStates = {};
  const mods = moduleList.map((m) => {
    let done = 0;
    let working = 0;
    m.lessons.forEach((l) => {
      if (doneSet.has(l.slug)) {
        lessonStates[l.slug] = "done";
        done++;
      } else if (work[l.slug]) {
        lessonStates[l.slug] = "working";
        working++;
      }
    });
    const total = m.lessons.length;
    return {
      id: m.id,
      number: m.number,
      title: m.title,
      color: m.color,
      total,
      done,
      working,
      pct: total ? Math.round((done / total) * 100) : 0,
    };
  });

  // Volgende stap: liefst verdergaan met werk-in-uitvoering, anders de
  // eerste les (in leerlijn-volgorde) die nog niet is afgerond.
  let resume = null;
  let first = null;
  for (const m of moduleList) {
    for (const l of m.lessons) {
      if (doneSet.has(l.slug)) continue;
      if (!resume && lessonStates[l.slug] === "working")
        resume = { lesson: l, module: m };
      if (!first) first = { lesson: l, module: m };
    }
    if (resume) break;
  }

  const promptkit = readJSON(PROMPTKIT_KEY, []);

  return {
    modules: mods,
    lessonStates,
    doneTotal: mods.reduce((n, m) => n + m.done, 0),
    workingTotal: mods.reduce((n, m) => n + m.working, 0),
    lessonsTotal: mods.reduce((n, m) => n + m.total, 0),
    promptkitCount: Array.isArray(promptkit) ? promptkit.length : 0,
    next: resume || first,
    nextIsResume: Boolean(resume),
    activity: readActivity(),
  };
}

/* ─── React-hook — live voortgang, ook cross-device ─────────────────────── */

let _serverMerged = false;

export function useVoortgang() {
  const [v, setV] = useState(computeVoortgang);

  useEffect(() => {
    const update = () => setV(computeVoortgang());
    window.addEventListener("storage", update);
    window.addEventListener(CHANGE_EVENT, update);

    // Eén keer per page-load: serverwerk binnenhalen en lokaal spiegelen,
    // zodat de voortgang ook op een nieuw apparaat meteen klopt. Lokaal
    // werk wint bij conflict (de server-merge per les zit in useLessonWork).
    if (!_serverMerged) {
      _serverMerged = true;
      workClient.loadAll().then((all) => {
        if (!all) return;
        try {
          Object.entries(all.work || {}).forEach(([slug, data]) => {
            if (slug === DONE_ROW) {
              const merged = new Set(readDone());
              Object.keys(data || {}).forEach((s) => merged.add(s));
              window.localStorage.setItem(
                DONE_KEY,
                JSON.stringify([...merged])
              );
            } else if (!slug.startsWith("__") && hasContent(data)) {
              const key = WORK_PREFIX + slug;
              if (!window.localStorage.getItem(key)) {
                window.localStorage.setItem(key, JSON.stringify(data));
              }
            }
          });
          if (
            Array.isArray(all.promptkit) &&
            all.promptkit.length &&
            !readJSON(PROMPTKIT_KEY, []).length
          ) {
            window.localStorage.setItem(
              PROMPTKIT_KEY,
              JSON.stringify(all.promptkit)
            );
          }
        } catch {
          /* ignore */
        }
        update();
      });
    }

    return () => {
      window.removeEventListener("storage", update);
      window.removeEventListener(CHANGE_EVENT, update);
    };
  }, []);

  return v;
}

/* ─── Weergavehulp ──────────────────────────────────────────────────────── */

export function formatRelative(ts) {
  if (!ts) return "";
  const diff = Date.now() - ts;
  const min = Math.round(diff / 60000);
  if (min < 1) return "zojuist";
  if (min < 60) return `${min} min geleden`;
  const uur = Math.round(min / 60);
  if (uur < 24) return uur === 1 ? "1 uur geleden" : `${uur} uur geleden`;
  const dag = Math.round(uur / 24);
  if (dag === 1) return "gisteren";
  if (dag < 7) return `${dag} dagen geleden`;
  return new Date(ts).toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "short",
  });
}
