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
      <g
        stroke="#F6F6F3"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <circle cx="32" cy="32" r="14" />
        <path d="M22 28 L32 18 L42 28" />
        <path d="M22 36 L32 46 L42 36" />
      </g>
      <circle cx="32" cy="32" r="3" fill={accent} />
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
