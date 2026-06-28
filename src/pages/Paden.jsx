import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Award,
  Download,
  ArrowRight,
  Lock,
  CheckCircle2,
  Circle,
  Sparkles,
  Layers,
  ShieldCheck,
  Loader2,
} from "lucide-react";
import { PageHeader, Section, Tag, ProgressBar, Footnote } from "../components/ui";
import { paths, pathModules } from "../data/paths";
import { pathAchievement } from "../data/badges";
import { useVoortgang } from "../lib/voortgang";
import { useAuth } from "../components/AuthProvider";
import { downloadMarkdown } from "../hooks/useLessonWork";
import { requestBadge, downloadBadge as downloadOpenBadgeJson } from "../lib/badgeClient";
import { trackEvent } from "../lib/appInsights";

/* ──────────────────────────────────────────────────────────────────────────
 * Leerpaden — rolgebaseerde routes door de modules, met niveauladder, zachte
 * prerequisites en een badge per pad. Voortgang komt uit de echte
 * module-voortgang (useVoortgang); een pad is "behaald" als élke module erin
 * volledig is afgerond.
 * ─────────────────────────────────────────────────────────────────────── */

function niveauTone(niveau) {
  if (niveau.startsWith("Acquire")) return "sage";
  if (niveau.startsWith("Create")) return "terra";
  if (niveau.startsWith("Deepen")) return "academy";
  if (niveau.startsWith("Beleid")) return "koraal";
  return "neutral";
}

function pathCertificaatMarkdown({ name, path, mods }) {
  const datum = new Date().toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return [
    `# Badge — leerpad afgerond`,
    ``,
    `**AI PraktijkLab · door Datagrid**`,
    ``,
    `Hierbij wordt verklaard dat`,
    ``,
    `## ${name || "deelnemer"}`,
    ``,
    `het leerpad **${path.label}** (${path.badge}) volledig heeft afgerond op ${datum}.`,
    ``,
    `Niveau: ${path.niveau}`,
    ``,
    `Afgeronde modules:`,
    ...mods.map((m) => `- ${m.number} · ${m.title} (${m.lessons.length} onderdelen)`),
    ``,
    `---`,
    ``,
    `Deze badge documenteert een afgerond, rolgericht scholingstraject en kan`,
    `door de onderwijsinstelling worden gebruikt als onderbouwing van de`,
    `AI-geletterdheidsplicht uit de EU AI Act (artikel 4, van kracht sinds`,
    `2 februari 2025).`,
    ``,
    `AI PraktijkLab · praktijklab.datagrid.nl`,
  ].join("\n");
}

export function Paden() {
  const v = useVoortgang();
  const { displayName } = useAuth();
  const statById = Object.fromEntries(v.modules.map((s) => [s.id, s]));

  const computed = paths.map((p) => {
    const mods = pathModules(p);
    const stats = p.moduleIds.map((id) => statById[id]).filter(Boolean);
    const done = stats.reduce((n, s) => n + s.done, 0);
    const total = stats.reduce((n, s) => n + s.total, 0);
    const pct = total ? Math.round((done / total) * 100) : 0;
    const complete = total > 0 && done === total;
    return { ...p, mods, stats, done, total, pct, complete };
  });

  const completeIds = new Set(computed.filter((c) => c.complete).map((c) => c.id));
  const prereqMet = (p) => !p.prerequisite || completeIds.has(p.prerequisite);

  // Aanbevolen pad: liefst het verst gevorderde, prereq-vervulde, nog niet
  // afgeronde pad; anders het eerste beschikbare; anders het eerste.
  const recommended = (() => {
    const open = computed.filter((c) => !c.complete && prereqMet(c));
    const started = open.filter((c) => c.done > 0).sort((a, b) => b.pct - a.pct);
    return (started[0] || open[0] || computed[0])?.id;
  })();

  const behaald = computed.filter((c) => c.complete).length;

  function downloadBadge(c) {
    const md = pathCertificaatMarkdown({
      name: displayName,
      path: c,
      mods: c.mods,
    });
    downloadMarkdown(`leerpad-${c.id}.md`, md);
    trackEvent("path-badge-downloaded", { path: c.id });
  }

  const [obState, setObState] = useState({}); // path-id -> {loading,error,verifyUrl,signed}
  async function issueOpenBadge(c) {
    setObState((s) => ({ ...s, [c.id]: { loading: true } }));
    try {
      const ach = pathAchievement(c);
      const data = await requestBadge({
        kind: "path",
        id: c.id,
        name: ach.name,
        description: ach.description,
        criteria: ach.criteria,
      });
      downloadOpenBadgeJson(data, `leerpad-${c.id}`);
      setObState((s) => ({
        ...s,
        [c.id]: { loading: false, verifyUrl: data.verifyUrl, signed: data.signed },
      }));
    } catch (e) {
      setObState((s) => ({ ...s, [c.id]: { loading: false, error: e.message || "Mislukt" } }));
    }
  }

  return (
    <>
      <PageHeader
        eyebrow="Leerpaden"
        number="↳"
        title={
          <>
            Kies een route die <span className="display-italic text-terra">bij jouw rol past</span>.
          </>
        }
        subtitle="Niet elke docent hoeft alles in dezelfde volgorde te doen. Een leerpad bundelt de modules die bij jouw rol en niveau horen tot één route — met een badge als je 'm afrondt. Je voortgang telt automatisch mee uit de modules die je al doet."
        meta={[
          { label: "Paden", value: `${paths.length}` },
          { label: "Badges behaald", value: `${behaald}` },
          { label: "Niveauladder", value: "Acquire → Deepen → Create" },
        ]}
      />

      <Section className="!pt-8">
        <div className="space-y-6">
          {computed.map((c) => {
            const tone = niveauTone(c.niveau);
            const isRec = c.id === recommended && !c.complete;
            const locked = !prereqMet(c) && !c.complete;
            const prereqLabel = c.prerequisite
              ? paths.find((p) => p.id === c.prerequisite)?.label
              : null;
            return (
              <article
                key={c.id}
                className={`card-elev overflow-hidden ${
                  isRec ? "ring-2 ring-terra/30" : ""
                }`}
              >
                {/* Kop */}
                <div className="hairline-b flex flex-wrap items-start justify-between gap-4 bg-paper-deep/30 px-6 py-5">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <Footnote>Leerpad</Footnote>
                      <Tag tone={tone}>{c.niveau}</Tag>
                      {isRec && <Tag tone="terra">Aanbevolen</Tag>}
                      {c.complete && <Tag tone="sage">Badge behaald</Tag>}
                    </div>
                    <h2 className="mt-2 font-display text-[24px] font-bold leading-tight text-ink">
                      {c.label}
                    </h2>
                    <p className="mt-0.5 text-[13px] font-medium text-ink-mute">
                      {c.role}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-ink-mute">
                      {c.done}/{c.total} onderdelen
                    </span>
                    <div className="mt-2 w-40">
                      <ProgressBar value={c.pct} tone={tone} />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="max-w-2xl text-[14.5px] leading-relaxed text-ink-soft">
                    {c.intro}
                  </p>

                  {locked && prereqLabel && (
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-rule bg-paper-deep/40 px-3 py-1.5">
                      <Lock size={12} strokeWidth={1.8} className="text-ink-mute" />
                      <span className="text-[12px] text-ink-soft">
                        Tip: rond eerst <span className="font-medium text-ink">{prereqLabel}</span> af — dit pad bouwt daarop voort.
                      </span>
                    </div>
                  )}

                  {/* Modules in dit pad */}
                  <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {c.mods.map((m) => {
                      const st = statById[m.id];
                      const klaar = st && st.done === st.total;
                      return (
                        <Link
                          key={m.id}
                          to={`/modules/${m.id}`}
                          className="hover-dim flex items-center gap-3 rounded-2xl border border-rule bg-paper-card px-4 py-3"
                        >
                          {klaar ? (
                            <CheckCircle2 size={16} strokeWidth={2} className="shrink-0 text-sage" />
                          ) : st && st.done > 0 ? (
                            <Layers size={16} strokeWidth={1.8} className="shrink-0 text-geel-deep" />
                          ) : (
                            <Circle size={16} strokeWidth={1.7} className="shrink-0 text-ink-faint" />
                          )}
                          <span className="num-mark shrink-0 text-[13px]">{m.number}</span>
                          <span className="min-w-0 flex-1 truncate text-[13.5px] text-ink">
                            {m.title}
                          </span>
                          <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                            {st ? `${st.done}/${st.total}` : ""}
                          </span>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Badge-zone */}
                  <div
                    className={`mt-6 flex flex-col gap-4 rounded-3xl p-5 sm:flex-row sm:items-center sm:justify-between ${
                      c.complete
                        ? "bg-sage-soft"
                        : "border border-dashed border-rule-strong bg-paper-deep/40"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`grid h-10 w-10 shrink-0 place-items-center rounded-full bg-paper-card ${
                          c.complete ? "text-sage-deep" : "text-ink-faint"
                        }`}
                      >
                        <Award size={18} strokeWidth={1.8} />
                      </span>
                      <div>
                        <p className="text-[14px] font-semibold text-ink">
                          Badge · {c.badge}
                        </p>
                        <p className="mt-0.5 max-w-md text-[12.5px] leading-relaxed text-ink-soft">
                          {c.complete
                            ? "Pad afgerond — je badge staat klaar. Bruikbaar als bewijs voor de AI-geletterdheidsplicht (EU AI Act, art. 4)."
                            : `Rond alle ${c.total} onderdelen van dit pad af om je badge te ontvangen.`}
                        </p>
                      </div>
                    </div>
                    {c.complete ? (
                      <div className="flex shrink-0 flex-col items-stretch gap-1.5 sm:items-end">
                        <button
                          type="button"
                          onClick={() => issueOpenBadge(c)}
                          disabled={obState[c.id]?.loading}
                          className="btn btn-primary focus-ring disabled:opacity-60"
                        >
                          {obState[c.id]?.loading ? (
                            <>
                              <Loader2 size={15} strokeWidth={1.9} className="animate-spin" />
                              Uitgeven…
                            </>
                          ) : (
                            <>
                              <ShieldCheck size={15} strokeWidth={1.9} />
                              Open Badge (verifieerbaar)
                            </>
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={() => downloadBadge(c)}
                          className="inline-flex items-center justify-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-ink-mute hover:text-ink focus-ring rounded"
                        >
                          <Download size={11} strokeWidth={1.8} />
                          Tekstcertificaat
                        </button>
                        {obState[c.id]?.verifyUrl && (
                          <a
                            href={obState[c.id].verifyUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="font-mono text-[10px] uppercase tracking-widest text-academy-deep hover:underline"
                          >
                            Verifieer / deel ↗
                          </a>
                        )}
                        {obState[c.id]?.signed === false && (
                          <span className="font-mono text-[9.5px] text-ink-faint">
                            onondertekend · server-sleutel nog niet gezet
                          </span>
                        )}
                        {obState[c.id]?.error && (
                          <span className="text-[10.5px] text-terra-deep">
                            {obState[c.id].error}
                          </span>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={`/modules/${c.moduleIds[0]}`}
                        className="btn btn-ghost focus-ring shrink-0"
                      >
                        {c.done > 0 ? "Verder met dit pad" : "Start dit pad"}
                        <ArrowRight size={15} strokeWidth={1.9} />
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-8 flex items-center gap-2 text-[12.5px] text-ink-mute">
          <Sparkles size={13} strokeWidth={1.7} className="text-terra" />
          Paden zijn een suggestie, geen verplichting — je kunt modules ook los volgen. De volgorde is gekozen op rol en niveau (UNESCO Acquire → Deepen → Create).
        </p>
      </Section>
    </>
  );
}
