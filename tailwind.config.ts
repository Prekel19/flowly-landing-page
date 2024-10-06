import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        header: "1600px",
      },
      fontSize: {
        "10xl": "12rem",
      },
      colors: {
        primary1: "#147487",
        primary2: "#0A3A44",
        secondary1: "#A9D5DD",
        secondary2: "#F7F7F7",
        accent1: "#C9E8FF",
        accent2: "#B2D1E6",
      },
      fontFamily: {
        inter: "var(--font-inter)",
        stix: "var(--font-stix)",
        noto: "var(--font-noto)",
      },
    },
  },
  plugins: [],
};
export default config;
