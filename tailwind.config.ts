import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'Share Tech Mono'", "monospace"],
        display: ["'Orbitron'", "sans-serif"],
        body: ["'Exo 2'", "sans-serif"],
      },
      colors: {
        cyber: {
          black: "#030712",
          dark: "#060d1f",
          navy: "#0a1628",
          blue: "#00d4ff",
          cyan: "#00fff5",
          purple: "#7c3aed",
          violet: "#a855f7",
          pink: "#ec4899",
          green: "#00ff9f",
        },
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 8s linear infinite",
        "ping-slow": "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        glitch: "glitch 0.3s ease-in-out infinite alternate",
        scanline: "scanline 2s linear infinite",
        flicker: "flicker 4s linear infinite",
      },
      keyframes: {
        glitch: {
          "0%": { clipPath: "inset(40% 0 61% 0)", transform: "translate(-2px, 0)" },
          "20%": { clipPath: "inset(92% 0 1% 0)", transform: "translate(1px, 0)" },
          "40%": { clipPath: "inset(43% 0 1% 0)", transform: "translate(-1px, 0)" },
          "60%": { clipPath: "inset(25% 0 58% 0)", transform: "translate(2px, 0)" },
          "80%": { clipPath: "inset(54% 0 7% 0)", transform: "translate(-2px, 0)" },
          "100%": { clipPath: "inset(58% 0 43% 0)", transform: "translate(1px, 0)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        flicker: {
          "0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%": { opacity: "1" },
          "20%, 21.999%, 63%, 63.999%, 65%, 69.999%": { opacity: "0.4" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
