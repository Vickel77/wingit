import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      textColor: "#333333",
    },
    extend: {
      colors: {
        primary: "#FE9306",
        "primary-accent": "#FEF8E7",
        black: "#333333",
        white: "#fff",
        textColor: "#333333",
      },
    },
  },
  plugins: [],
};
export default config;
