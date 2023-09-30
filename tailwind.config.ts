import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "gold-100": "#2B2C35",
        "gold-200": "#2B2C35",
        "gold-300": "#2B2C35",
      },
    },
  },
  plugins: [],
};
export default config;
