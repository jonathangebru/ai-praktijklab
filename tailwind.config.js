/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Fraunces"', "ui-serif", "Georgia", "serif"],
        codex: ['"Instrument Serif"', "ui-serif", "Georgia", "serif"],
        sans: [
          '"General Sans"',
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        ink: {
          DEFAULT: "#1A1816",
          soft: "#4A453F",
          mute: "#6B655E",
          faint: "#A8A09A",
        },
        paper: {
          DEFAULT: "#F5F1E8",
          card: "#FBF8F1",
          high: "#FFFFFF",
          deep: "#ECE4D4",
          warm: "#E8DFCB",
        },
        terra: {
          DEFAULT: "#B8431F",
          deep: "#8C2F12",
          soft: "#F4D9C2",
          tint: "#F9E9D9",
        },
        sage: {
          DEFAULT: "#4B6D4F",
          deep: "#324D36",
          soft: "#D4DFD0",
          tint: "#E7EEE3",
        },
        academy: {
          DEFAULT: "#1F3A52",
          deep: "#142536",
          soft: "#CCD5E0",
          tint: "#E2E8EF",
        },
        /* ─── Codex revamp palette — one accent, two surfaces, deep ink ─── */
        codex: {
          paper:      "#F0EADD",
          card:       "#F8F3E7",
          deep:       "#E6DDC9",
          ink:        "#1E1A14",
          "ink-soft": "#5B5346",
          "ink-mute": "#857A66",
          "ink-faint":"#B5AC97",
          vermilion:  "#C53C1F",
          "verm-deep":"#8C2208",
          "verm-soft":"#F3D6CB",
          "verm-tint":"#FAEAE0",
          rule:       "rgba(30,26,20,0.12)",
          "rule-strong":"rgba(30,26,20,0.30)",
        },
      },
      letterSpacing: {
        tightish: "-0.01em",
        wider: "0.08em",
        widest: "0.18em",
      },
      boxShadow: {
        soft: "0 1px 0 rgba(26,24,22,0.04), 0 8px 24px -12px rgba(26,24,22,0.10)",
        page: "0 30px 60px -30px rgba(26,24,22,0.25)",
        ring: "0 0 0 1px rgba(26,24,22,0.08)",
      },
      borderColor: {
        DEFAULT: "rgba(26,24,22,0.10)",
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
