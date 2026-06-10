/* ──────────────────────────────────────────────────────────────────────────
 * Merk — open boek + vonk (leren × AI). Zelfde tekening als public/favicon.svg;
 * pas je het merk aan, wijzig dan beide bestanden.
 * ─────────────────────────────────────────────────────────────────────── */
export function Logo({ size = 32, monochrome = false }) {
  const ink = monochrome ? "currentColor" : "#231F20";
  const accent = monochrome ? "currentColor" : "#FF832C";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <rect width="64" height="64" rx="14" fill={ink} />
      <path
        d="M32 7l2.6 5.4L40 15l-5.4 2.6L32 23l-2.6-5.4L24 15l5.4-2.6z"
        fill={accent}
      />
      <path
        d="M30 28c-4.2-2.6-9.8-3.3-15-2v26c5.2-1.3 10.8-.6 15 2z"
        fill="#FFFFFF"
      />
      <path
        d="M34 28c4.2-2.6 9.8-3.3 15-2v26c-5.2-1.3-10.8-.6-15 2z"
        fill="#FFFFFF"
        opacity="0.82"
      />
    </svg>
  );
}

export function Wordmark({ className = "" }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Logo size={28} />
      <div className="flex flex-col leading-none">
        <span className="font-display text-[17px] font-medium tracking-tightish text-ink">
          PraktijkLab
        </span>
        <span className="mt-0.5 font-mono text-[9px] uppercase tracking-widest text-ink-mute">
          Powered&nbsp;by&nbsp;Datagrid
        </span>
      </div>
    </div>
  );
}
