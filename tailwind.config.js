/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: [
          '"Hanken Grotesk"',
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        codex: [
          '"Hanken Grotesk"',
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        sans: [
          '"Hanken Grotesk"',
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        /* Sinqlo-visie: bone-wit canvas, zacht zwart, platte pastel-chips,
         * oranje als enige actiekleur. Pastels zijn vlakken — nooit tekst. */
        ink: {
          DEFAULT: "#231F20",
          soft: "#484344",
          mute: "#8F8F8F",
          faint: "#B7B4AF",
        },
        paper: {
          DEFAULT: "#F6F6F3",
          card: "#FFFFFF",
          high: "#FFFFFF",
          deep: "#F3F2F0",
          warm: "#E6E4DD",
        },
        /* Actiekleur — oranje, exclusief voor CTA's en actieve states. */
        terra: {
          DEFAULT: "#FF832C",
          deep: "#D9620B",
          soft: "#FFD9BD",
          tint: "#FFEFE2",
        },
        /* Pastel-identiteiten: groen (afgerond), blauw (module 02). */
        sage: {
          DEFAULT: "#3E9B63",
          deep: "#27714A",
          soft: "#C4F3C4",
          tint: "#E7F9E7",
        },
        academy: {
          DEFAULT: "#4D7FB2",
          deep: "#335F8F",
          soft: "#BDE2F8",
          tint: "#E9F4FC",
        },
        /* Geel — weekdoel en "in uitvoering". */
        geel: {
          DEFAULT: "#FFFF97",
          deep: "#6F660F",
          soft: "#F1EC74",
          tint: "#FFFCD9",
        },
        /* Koraal — vrij accent (o.a. voortgangsbalken). */
        koraal: {
          DEFAULT: "#FF847E",
          deep: "#C94840",
          soft: "#FFC2BE",
          tint: "#FFE9E8",
        },
        /* ─── Codex-tokens (Dashboard) — zelfde namen, Sinqlo-waarden ───── */
        codex: {
          paper:      "#F6F6F3",
          card:       "#FFFFFF",
          deep:       "#ECEAE3",
          ink:        "#231F20",
          "ink-soft": "#484344",
          "ink-mute": "#8F8F8F",
          "ink-faint":"#B7B4AF",
          vermilion:  "#FF832C",
          "verm-deep":"#D9620B",
          "verm-soft":"#FFD9BD",
          "verm-tint":"#FFEFE2",
          rule:       "rgba(35,31,32,0.10)",
          "rule-strong":"rgba(35,31,32,0.22)",
        },
      },
      letterSpacing: {
        tightish: "-0.02em",
        wider: "0.08em",
        widest: "0.18em",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(35,31,32,0.04), 0 10px 28px -16px rgba(35,31,32,0.10)",
        page: "0 30px 60px -30px rgba(35,31,32,0.22)",
        ring: "0 0 0 1px rgba(35,31,32,0.08)",
      },
      borderColor: {
        DEFAULT: "rgba(35,31,32,0.10)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
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
        "palette-in": {
          "0%": { opacity: "0", transform: "scale(0.98) translateY(-6px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
      },
      animation: {
        /* Hét trage signatuurmoment: de paginawissel. Al het andere is 0.2s. */
        "fade-up": "fade-up 0.65s ease both",
        "soft-pulse": "soft-pulse 2.4s ease-in-out infinite",
        ticker: "ticker 40s linear infinite",
        "palette-in": "palette-in 0.2s ease both",
      },
    },
  },
  plugins: [],
};
