import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        pearl: {
          cream: "#f8f0e3",
          blush: "#e8cfc6",
          champagne: "#d9be94",
          silver: "#d8d8d4",
          ink: "#423b35",
          ocean: "#8fb6b3",
          mauve: "#a88992"
        }
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "Avenir Next", "system-ui", "sans-serif"]
      },
      boxShadow: {
        pearl: "0 24px 80px rgba(98, 83, 68, 0.16)",
        card: "0 18px 46px rgba(66, 59, 53, 0.14)"
      },
      backgroundImage: {
        pearlGlow:
          "radial-gradient(circle at 20% 10%, rgba(255,255,255,0.92), transparent 28%), radial-gradient(circle at 78% 18%, rgba(232,207,198,0.5), transparent 24%), radial-gradient(circle at 58% 74%, rgba(143,182,179,0.28), transparent 30%), linear-gradient(135deg, #fbf7ef 0%, #f1e4d4 42%, #f7efe8 100%)"
      }
    }
  },
  plugins: []
}

export default config
