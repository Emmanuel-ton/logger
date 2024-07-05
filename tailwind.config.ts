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
        play: ["playWrite","sans-serif"]
      },

      backgroundColor: {
        "primary": "#5865f2",
        "accent": "#de2761",
        "secondary": "#fee75c",
        "backg": "#f6f6f6"
      },
      colors: {
        "primary": "#5865f2",
        "accent": "#de2761",
        "secondary": "#fee75c",
      }
    },
  },
  plugins: [],
};
export default config;
