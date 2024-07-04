const { tailwindConfig } = require("@storefront-ui/react/tailwind-config");
const sfTypography = require("@storefront-ui/typography");

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [tailwindConfig],
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "../../node_modules/@storefront-ui/react/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5f9ff",
          100: "#e9f3ff",
          200: "#c8e0ff",
          300: "#a6ccff",
          400: "#6ea1ff",
          500: "#3375ff",
          600: "#2e6ae6",
          700: "#264ebf",
          800: "#1d3f99",
          900: "#132f72",
          1000: "#46A3DB",
          1200: "#0274DB",
          1: "#0274DB",
          2: " #1089F7",
          3: "#1B1B1B",
        },
      },
      gridTemplateAreas: {
        "product-page": ["left-top right", "left-bottom right"],
      },
      gridTemplateColumns: {
        "product-page": "minmax(56%, 500px) auto",
      },
      gridTemplateRows: {
        "category-sidebar": "min-content auto min-content",
      },
      screens: {
        "4xl": "1920px",
        "3xl": "1536px",
        "2xl": "1366px",
        xl: "1280px",
        lg: "1024px",
        md: "768px",
        sm: "640px",
        xs: "376px",
        "2xs": "360px",
      },
      fontFamily: {
        body: "var(--font-body)",
        headings: "var(--font-headings)",
      },
    },
  },
  plugins: [sfTypography, require("@savvywombat/tailwindcss-grid-areas")],
};
