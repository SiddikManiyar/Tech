import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        "surface-2": "var(--color-surface-2)",
        border: "var(--color-border)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: [
          "clamp(2.5rem, 5vw, 4.5rem)",
          { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "700" },
        ],
        heading: [
          "clamp(1.5rem, 3vw, 2.5rem)",
          { lineHeight: "1.2", fontWeight: "600" },
        ],
        eyebrow: [
          "0.75rem",
          { lineHeight: "1", letterSpacing: "0.15em", fontWeight: "600" },
        ],
        body: ["1rem", { lineHeight: "1.7" }],
      },
      borderRadius: {
        card: "16px",
      },
      backdropBlur: {
        glass: "12px",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out 2s infinite",
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
        aurora: "aurora 15s ease infinite alternate",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        typewriter: "typewriter 4s steps(40) infinite",
        "stroke-draw": "stroke-draw 2s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        aurora: {
          "0%": {
            backgroundPosition: "0% 50%",
            opacity: "0.5",
          },
          "50%": {
            backgroundPosition: "100% 50%",
            opacity: "0.8",
          },
          "100%": {
            backgroundPosition: "0% 50%",
            opacity: "0.5",
          },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        typewriter: {
          "0%, 100%": { width: "0%" },
          "50%, 90%": { width: "100%" },
        },
        "stroke-draw": {
          to: { strokeDashoffset: "0" },
        },
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(10, 186, 181, 0.3)",
        "glow-accent": "0 0 40px rgba(173, 238, 217, 0.2)",
        card: "0 8px 32px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
