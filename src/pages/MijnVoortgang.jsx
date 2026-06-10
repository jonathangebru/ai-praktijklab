import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Circle,
  PenLine,
  Sparkles,
  Award,
  Download,
  ArrowRight,
  ScrollText,
} from "lucide-react";
import { PageHeader, Section, Tag, ProgressBar, Footnote } from "../components/ui";
import { moduleList } from "../data/modules";
import { useVoortgang, formatRelative } from "../lib/voortgang";
import { useAuth } from "../components/AuthProvider";
import { downloadMarkdown } from "../hooks/useLessonWork";
import { trackEvent } from "../lib/appInsights";

/* ──────────────────────────────────────────────────────────────────────────
 * Mijn voortgang — persoonlijke leerreis-analytics voor de docent.
 *
 * Toont per module de status van elke les, de recente activiteit en de
 * totalen. Bij een volledig afgeronde module is een certificaat te
 * downloaden: bruikbaar als documentatie voor de AI-geletterdheidsplicht
 * uit de EU AI Act (art. 4, sinds 2 februari 2025).
 * ─────────────────────────────────────────────────────────────────────── */

function certificaatMarkdown({ name, module: m }) {
  const datum = new Date().toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return [
    `# Certificaat van afronding`,
    ``,
    `**AI PraktijkLab · VABOK-samenwerking**`,
    ``,
    `Hierbij wordt verklaard dat`,
    ``,
    `## ${name || "deelnemer"}`,
    ``,
    `module **${m.number} · ${m.title}** volledig heeft afgerond op ${datum}.`,
    ``,
    `- Studielast: ${m.totalHours}`,
    `- Onderdelen: ${m.lessons.length} (lessen en kennischecks)`,
    `- Leeruitkomsten:`,
    ...m.learningOutcomes.map((o) => `  - ${o}`),
    ``,
    `---`,
    ``,
    `Dit certificaat documenteert gevolgde AI-geletterdheidstraining en kan`,
    `door de onderwijsinstelling worden gebruikt als onderbouwing van de`,
    `AI-geletterdheidsplicht uit de EU AI Act (artikel 4, van kracht sinds`,
    `2 februari 2025).`,
    ``,
    `AI PraktijkLab · praktijklab.datagrid.nl`,
  ].join("\n");
}

export function MijnVoortgang() {
  const voortgang = useVoortgang();
  const { displayName } = useAuth();
  const { modules: stats, lessonStates, activity, promptkitCount, doneTotal, workingTotal, lessonsTotal, next } = voortgang;

  function downloadCertificaat(m) {
    const md = certificaatMarkdown({ name: displayName, module: m });
    downloadMarkdown(`certificaat-${m.id}.md`, md);
    trackEvent("certificate-downloaded", { module: m.id });
  }

  return (
    <>
      <PageHeader
        eyebrow="Mijn leerreis"
        number="◷"
        title={
          <>
            Jouw voortgang, <span className="display-italic text-terra">les voor les</span>.
          </>
        }
        subtitle="Alles wat je hier ziet is van jou alleen: welke lessen je hebt afgerond, waar je nog mee bezig bent en wat een logische volgende stap is. Rond je een module volledig af, dan staat hier je certificaat klaar."
        meta={[
          { label: "Afgerond", value: `${doneTotal} van ${lessonsTotal} lessen` },
          { label: "In uitvoering", value: `${workingTotal}` },
          { label: "Promptkit", value: `${promptkitCount} prompts` },
        ]}
      />

      {/* Volgende stap */}
      {next && (
        <Section className="!py-8">
          <Link
            to={`/lessen/${next.lesson.slug}`}
            className="card-elev hover-grow flex items-center justify-between gap-6 p-6"
          >
            <div className="min-w-0">
              <Footnote>Aanbevolen volgende stap · {next.lesson.number}</Footnote>
              <h3 className="mt-1.5 truncate font-display text-[22px] font-bold leading-tight text-ink">
                {next.lesson.title}
              </h3>
              <p className="mt-1 text-[13.5px] text-ink-soft">
                {next.lesson.duration} · {next.module.title}
              </p>
            </div>
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-terra text-white">
              <ArrowRight size={17} strokeWidth={1.9} />
            </span>
          </Link>
        </Section>
      )}

      {/* Per module: lessengrid + certificaat */}
      {moduleList.map((m, idx) => {
        const stat = stats[idx];
        const klaar = stat.done === stat.total;
        return (
          <Section
            key={m.id}
            eyebrow={`Module ${m.number}`}
            title={m.title}
            className="hairline-t"
            action={
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-widest text-ink-mute">
                  {stat.done}/{stat.total}
                </span>
                <Tag tone={klaar ? "sage" : stat.done > 0 ? "geel" : "neutral"}>
                  {klaar ? "Afgerond" : stat.done > 0 ? "Bezig" : "Nog niet gestart"}
                </Tag>
              </div>
            }
          >
            <div className="mb-6 max-w-md">
              <ProgressBar
                value={stat.pct}
                tone={m.color === "terra" ? "koraal" : "academy"}
              />
            </div>

            <ol className="grid gap-2.5 sm:grid-cols-2">
              {m.lessons.map((l) => {
                const state = lessonStates[l.slug];
                return (
                  <li key={l.slug}>
                    <Link
                      to={`/lessen/${l.slug}`}
                      className="hover-dim flex items-center gap-3 rounded-2xl border border-rule bg-paper-card px-4 py-3"
                    >
                      {state === "done" ? (
                        <CheckCircle2
                          size={16}
                          strokeWidth={2}
                          className="shrink-0 text-sage"
                        />
                      ) : state === "working" ? (
                        <PenLine
                          size={16}
                          strokeWidth={1.9}
                          className="shrink-0 text-geel-deep"
                        />
                      ) : (
                        <Circle
                          size={16}
                          strokeWidth={1.7}
                          className="shrink-0 text-ink-faint"
                        />
                      )}
                      <span className="num-mark shrink-0 text-[14px]">
                        {l.number}
                      </span>
                      <span
                        className={`min-w-0 flex-1 truncate text-[13.5px] ${
                          state === "done"
                            ? "text-ink-mute line-through decoration-ink-faint"
                            : "text-ink"
                        }`}
                      >
                        {l.title}
                      </span>
                      <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                        {l.duration}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ol>

            {/* Certificaat — verschijnt pas als álles in de module af is. */}
            <div
              className={`mt-6 flex flex-col gap-4 rounded-3xl p-6 sm:flex-row sm:items-center sm:justify-between ${
                klaar ? "bg-sage-soft" : "border border-dashed border-rule-strong bg-paper-deep/50"
              }`}
            >
              <div className="flex items-start gap-3">
                <span
                  className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${
                    klaar ? "bg-paper-card text-sage-deep" : "bg-paper-card text-ink-faint"
                  }`}
                >
                  <Award size={18} strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-[14.5px] font-semibold text-ink">
                    {klaar
                      ? "Module afgerond — je certificaat staat klaar."
                      : "Certificaat van afronding"}
                  </p>
                  <p className="mt-0.5 max-w-md text-[12.5px] leading-relaxed text-ink-soft">
                    {klaar
                      ? "Download je certificaat — het vermeldt studielast en leeruitkomsten en dient als documentatie voor de AI-geletterdheidsplicht (EU AI Act, art. 4)."
                      : `Rond alle ${stat.total} onderdelen af om je certificaat te ontvangen — bruikbaar als bewijs voor de AI-geletterdheidsplicht (EU AI Act, art. 4).`}
                  </p>
                </div>
              </div>
              {klaar && (
                <button
                  type="button"
                  onClick={() => downloadCertificaat(m)}
                  className="btn btn-primary focus-ring shrink-0"
                >
                  <Download size={15} strokeWidth={1.9} />
                  Download certificaat
                </button>
              )}
            </div>
          </Section>
        );
      })}

      {/* Recente activiteit */}
      <Section eyebrow="Logboek" title="Recente activiteit" className="hairline-t">
        {activity.length ? (
          <ol className="max-w-2xl space-y-2.5">
            {activity.map((a, i) => {
              const lesson = moduleList
                .flatMap((m) => m.lessons)
                .find((l) => l.slug === a.slug);
              const isPrompt = a.type === "prompt";
              const isDone = a.type === "afgerond";
              return (
                <li
                  key={`${a.type}-${a.slug || a.title}-${i}`}
                  className="flex items-center gap-3 rounded-2xl border border-rule bg-paper-card px-4 py-3"
                >
                  {isPrompt ? (
                    <Sparkles size={14} strokeWidth={1.8} className="shrink-0 text-terra" />
                  ) : isDone ? (
                    <CheckCircle2 size={14} strokeWidth={2} className="shrink-0 text-sage" />
                  ) : (
                    <PenLine size={14} strokeWidth={1.8} className="shrink-0 text-geel-deep" />
                  )}
                  <span className="min-w-0 flex-1 truncate text-[13.5px] text-ink">
                    {isPrompt ? a.title : lesson?.title || a.slug}
                  </span>
                  <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                    {isDone ? "afgerond" : isPrompt ? "prompt bewaard" : "bewerkt"} ·{" "}
                    {formatRelative(a.ts)}
                  </span>
                </li>
              );
            })}
          </ol>
        ) : (
          <div className="card flex items-center gap-3 p-6 text-ink-soft">
            <ScrollText size={18} strokeWidth={1.7} className="text-ink-mute" />
            <p className="text-[14px]">
              Nog geen activiteit — alles wat je in lessen schrijft, afrondt of
              aan je promptkit toevoegt verschijnt hier.
            </p>
          </div>
        )}
      </Section>
    </>
  );
}
