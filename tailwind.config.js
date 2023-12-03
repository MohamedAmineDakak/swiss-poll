/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /bg-(red|green|pink|purple|blue|teal|amber|orange|yellow|gray|black|slate)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /text-(red|green|pink|purple|blue|teal|amber|orange|yellow|gray|black|slate)-(50|100|200|300|400|500|600|700|800|900)/,
    },
  ],
  theme: {
    extend: {
      strokeWidth: {
        thin: "0.5px",
        thinner: "0.25px",
      },
      dropShadow: {
        cont: "7.5px 7.5px 13.7px 4.5px rgba(0, 0, 0, 0.2);",
      },
      fontFamily: {
        sans: "Poppins, Arial, sans-serif",
      },
      text: {
        KPI: "5rem",
      },
      borderRadius: {
        none: "0",
        sm: "0.25rem", // 4px
        DEFAULT: "0.5rem", //8px
        DEFAULT: "8px",
        md: "1rem", // 16px
        lg: "1.5rem", // 24px
        xl: "2rem", // 32px
        "2xl": "2.5rem", // 40px
        "3xl": "3rem",
        "4xl": "3.5rem",
        full: "9999px",
      },
      colors: {
        'ui-green': {
          DEFAULT: "#268484",
          50: "#268484",
          100: "#268484",
          200: "#268484",
          300: "#268484",
          400: "#268484",
          500: "#268484",
          600: "#268484",
          700: "#268484",
          800: "#268484",
          900: "#268484",
        },
        red: {
          DEFAULT: "#ef4444",
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
        },
        green: {
          DEFAULT: "#0be881",
          50: "#eefff6",
          100: "#d7ffed",
          200: "#b2ffda",
          300: "#77febe",
          400: "#35f39a",
          500: "#0be881",
          600: "#02b763",
          700: "#068f50",
          800: "#0b7042",
          900: "#0b5c38",
        },
        pink: {
          DEFAULT: "#ef5777",
          50: "#fef2f2",
          100: "#fee5e8",
          200: "#fccfd6",
          300: "#faa7b4",
          400: "#f6768e",
          500: "#ef5777",
          600: "#da2453",
          700: "#b81845",
          800: "#9a1740",
          900: "#84173d",
        },
        purple: {
          DEFAULT: "#575fcf",
          50: "#f2f3fc",
          100: "#e2e4f7",
          200: "#cbd0f2",
          300: "#a8b2e8",
          400: "#7e8bdc",
          500: "#575fcf",
          600: "#4d4cc4",
          700: "#4842b3",
          800: "#413a93",
          900: "#373375",
        },
        blue: {
          DEFAULT: "#4bcffa",
          50: "#f0faff",
          100: "#e0f4fe",
          200: "#baeafd",
          300: "#7cdbfd",
          400: "#4bcffa",
          500: "#0cb4eb",
          600: "#0190c8",
          700: "#0273a2",
          800: "#066186",
          900: "#0b506f",
        },
        teal: {
          DEFAULT: "#34e7e4",
          50: "#effefd",
          100: "#c7fffa",
          200: "#90fff6",
          300: "#50f8ef",
          400: "#34e7e4",
          500: "#04c8c7",
          600: "#009da1",
          700: "#057d80",
          800: "#0a6065",
          900: "#0d5154",
        },
        amber: {
          DEFAULT: "#ffc048",
          50: "#fff9eb",
          100: "#ffeec6",
          200: "#ffda88",
          300: "#ffc048",
          400: "#ffa820",
          500: "#f98407",
          600: "#dd5f02",
          700: "#b74006",
          800: "#94300c",
          900: "#7a290d",
        },
        orange: {
          DEFAULT: "#ffa801",
          50: "#fffdea",
          100: "#fff6c5",
          200: "#ffed85",
          300: "#ffdc46",
          400: "#ffca1b",
          500: "#ffa801",
          600: "#e27f00",
          700: "#bb5702",
          800: "#984308",
          900: "#7c370b",
        },
        yellow: {
          DEFAULT: "#ffdd59",
          50: "#fffceb",
          100: "#fff6c6",
          200: "#ffeb88",
          300: "#ffdd59",
          400: "#ffc820",
          500: "#f9a607",
          600: "#dd7d02",
          700: "#b75806",
          800: "#94430c",
          900: "#7a380d",
        },
        gray: {
          DEFAULT: "#d2dae2",
          50: "#f6f8f9",
          100: "#eceff2",
          200: "#d2dae2",
          300: "#aebdcb",
          400: "#8299ae",
          500: "#627d95",
          600: "#4e657b",
          700: "#405164",
          800: "#384654",
          900: "#323d48",
        },
        "ui-gray": {
          lighter: "#FAFAFB",
          light: "#E5EAEF",
          medium: "#B5BFC8",
          dark: "#6B7177",
        },
        black: {
          DEFAULT: "#1e272e",
          50: "#f2f7f9",
          100: "#dfebee",
          200: "#c2d7df",
          300: "#98bbc8",
          400: "#6696aa",
          500: "#4b7a8f",
          600: "#416579",
          700: "#395465",
          800: "#354855",
          900: "#1e272e",
        },
        white: {
          DEFAULT: "#ffffff",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
