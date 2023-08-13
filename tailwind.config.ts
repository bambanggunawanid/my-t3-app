/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#0c1616",
          "200": "#011627",
          "300": "#01080e",
          "400": "rgba(1, 22, 39, 0.84)",
          "500": "rgba(1, 20, 35, 0.19)",
        },
        "border-1": "#1e2d3d",
        slategray: "#607b96",
        aquamarine: "#9cffd2",
        white: "#fff",
        dodgerblue: "#0089f9",
        mediumseagreen: "#26a269",
        sandybrown: "#fea55f",
        darksalmon: "#e99287",
        mediumaquamarine: "#43d9ad",
        royalblue: "#4d5bce",
        aliceblue: "#e5e9f0",
      },
      fontFamily: {
        "fira-code": "'Fira Code'",
      },
    },
    fontSize: {
      base: "16px",
      xs: "12px",
      sm: "14px",
      xl: "20px",
    },
    screens: {
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
      Desktop_Small: {
        raw: "screen and (max-width: 1100px)",
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    keyframes: {
      "accordion-down": {
        from: { height: 0 },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: 0 },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  },
  plugins: [require("tailwindcss-animate")],
  corePlugins: {
    animation: true,
    preflight: false,
  },
};
