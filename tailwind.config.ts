import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      text: "#000000",
      background: "#f3eed8",
      primary: "#c8ac51",
      secondary: "#e7dab1",
      accent: "#9b8231",
    },
  },
  plugins: [],
} satisfies Config;
