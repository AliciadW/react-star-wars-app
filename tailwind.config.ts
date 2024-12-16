import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cardBackground: '#9d9974',
        cardBackgroundHover: '#a6a381',
        cardBackgroundSelected: '#c4c1ab'
      },
    },
  },
  plugins: [],
} satisfies Config;
