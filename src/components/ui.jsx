import { Link } from "react-router-dom";

export function PageHeader({
  eyebrow,
  number,
  title,
  subtitle,
  meta,
  children,
}) {
  return (
    <header className="hairline-b relative px-5 pb-10 pt-10 sm:px-8 lg:px-10 lg:pb-12 lg:pt-12">
      {number && (
        <div className="num-mark mb-3 text-[44px] leading-none">{number}</div>
      )}
      {eyebrow && (
        <div className="eyebrow mb-3">{eyebrow}</div>
      )}
      <h1 className="font-display max-w-4xl text-balance text-[32px] font-normal leading-[1.05] tracking-tightish text-ink sm:text-[44px] lg:text-[56px]">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-5 max-w-2xl text-pretty text-[16px] leading-relaxed text-ink-soft">
          {subtitle}
        </p>
      )}
      {meta && (
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-ink-mute">
          {meta.map((m, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="font-mono uppercase tracking-widest text-ink-faint">
                {m.label}
              </span>
              <span className="text-ink-soft">{m.value}</span>
            </span>
          ))}
        </div>
      )}
      {children}
    </header>
  );
}

export function Section({ title, eyebrow, action, children, className = "" }) {
  return (
    <section className={`px-5 py-10 sm:px-8 lg:px-10 lg:py-12 ${className}`}>
      {(eyebrow || title || action) && (
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            {eyebrow && <div className="eyebrow mb-2">{eyebrow}</div>}
            {title && (
              <h2 className="font-display text-[28px] font-normal leading-tight tracking-tightish text-ink">
                {title}
              </h2>
            )}
          </div>
          {action}
        </div>
      )}
      {children}
    </section>
  );
}

export function Button({
  children,
  variant = "primary",
  to,
  href,
  onClick,
  className = "",
  type = "button",
  ...rest
}) {
  const classes = `btn btn-${variant} focus-ring ${className}`;
  if (to)
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  if (href)
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  );
}

export function Tag({ children, tone = "neutral" }) {
  const tones = {
    neutral: "bg-paper-card text-ink-soft border-rule",
    terra: "bg-terra-tint text-terra-deep border-terra-soft/60",
    sage: "bg-sage-tint text-sage-deep border-sage-soft/60",
    academy: "bg-academy-tint text-academy-deep border-academy-soft/60",
    ink: "bg-ink text-paper-card border-ink",
    paper: "bg-paper text-ink-soft border-rule",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function NumberMark({ children, accent = false }) {
  return (
    <span
      className={`num-mark inline-block ${
        accent ? "text-terra" : "text-ink-soft"
      }`}
    >
      {children}
    </span>
  );
}

export function ProgressBar({ value, label, tone = "terra" }) {
  const colors = { terra: "bg-terra", sage: "bg-sage", academy: "bg-academy" };
  return (
    <div className="space-y-1.5">
      {label && (
        <div className="flex items-baseline justify-between">
          <span className="text-[12px] text-ink-soft">{label}</span>
          <span className="font-mono text-[11px] text-ink-mute">
            {value}%
          </span>
        </div>
      )}
      <div className="h-[3px] w-full overflow-hidden rounded-full bg-paper-deep">
        <div
          className={`h-full rounded-full transition-all duration-700 ${colors[tone]}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export function StatTile({ label, value, sub, accent }) {
  return (
    <div className="card flex flex-col gap-1.5 p-5">
      <div className="eyebrow">{label}</div>
      <div className="flex items-baseline gap-2">
        <span
          className={`font-display text-[34px] leading-none ${
            accent ? "text-terra" : "text-ink"
          }`}
        >
          {value}
        </span>
        {sub && <span className="text-[12px] text-ink-mute">{sub}</span>}
      </div>
    </div>
  );
}

export function Footnote({ children }) {
  return (
    <p className="font-mono text-[10.5px] uppercase tracking-widest text-ink-faint">
      {children}
    </p>
  );
}

export function Divider({ label, className = "" }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="h-px flex-1 bg-rule" />
      {label && (
        <span className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
          {label}
        </span>
      )}
      <span className="h-px flex-1 bg-rule" />
    </div>
  );
}

export function Quote({ children, attribution }) {
  return (
    <blockquote className="relative max-w-2xl">
      <span
        className="num-mark absolute -left-6 -top-4 text-[64px] leading-none text-terra/30"
        aria-hidden="true"
      >
        “
      </span>
      <p className="font-display text-[22px] font-light italic leading-snug text-ink">
        {children}
      </p>
      {attribution && (
        <footer className="mt-4 text-[12px] text-ink-mute">
          — {attribution}
        </footer>
      )}
    </blockquote>
  );
}
