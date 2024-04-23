import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "main-blue": {
          DEFAULT: "#150050",
          900: "#1E0A57",
        },
        "main-grey": {
          DEFAULT: "#404040",
          800: "#3B3A40",
          700: "#787878",
          600: "#777777",
          500: "#898989",
          200: "#D8D8D8",
          100: "#F4F4F4",
        },
      },
    },
  },
  plugins: [],
};
export default config;
