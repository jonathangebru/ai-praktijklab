/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        codex: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        /* Enterprise-licht: diep navy op wit, één helder blauw accent. */
        ink: {
          DEFAULT: "#0E1A2B",
          soft: "#3D4C61",
          mute: "#64748B",
          faint: "#9AA6B7",
        },
        paper: {
          DEFAULT: "#F6F8FA",
          card: "#FFFFFF",
          high: "#FFFFFF",
          deep: "#EBEFF4",
          warm: "#E2E8F0",
        },
        terra: {
          DEFAULT: "#2563EB",
          deep: "#1D4ED8",
          soft: "#BFD7FE",
          tint: "#EFF4FF",
        },
        sage: {
          DEFAULT: "#15803D",
          deep: "#14532D",
          soft: "#BBE7C9",
          tint: "#ECFDF3",
        },
        academy: {
          DEFAULT: "#0F2D4E",
          deep: "#0A1F37",
          soft: "#C7D7E8",
          tint: "#E8F0F8",
        },
        /* ─── Codex-tokens (Dashboard) — zelfde namen, enterprise-waarden ── */
        codex: {
          paper:      "#F6F8FA",
          card:       "#FFFFFF",
          deep:       "#E8EDF3",
          ink:        "#0E1A2B",
          "ink-soft": "#3D4C61",
          "ink-mute": "#64748B",
          "ink-faint":"#9AA6B7",
          vermilion:  "#2563EB",
          "verm-deep":"#1D4ED8",
          "verm-soft":"#BFD7FE",
          "verm-tint":"#EFF4FF",
          rule:       "rgba(14,26,43,0.10)",
          "rule-strong":"rgba(14,26,43,0.24)",
        },
      },
      letterSpacing: {
        tightish: "-0.015em",
        wider: "0.08em",
        widest: "0.18em",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(14,26,43,0.05), 0 8px 24px -12px rgba(14,26,43,0.10)",
        page: "0 30px 60px -30px rgba(14,26,43,0.25)",
        ring: "0 0 0 1px rgba(14,26,43,0.08)",
      },
      borderColor: {
        DEFAULT: "rgba(14,26,43,0.10)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "soft-pulse": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        "soft-pulse": "soft-pulse 2.4s ease-in-out infinite",
        ticker: "ticker 60s linear infinite",
      },
    },
  },
  plugins: [],
};
