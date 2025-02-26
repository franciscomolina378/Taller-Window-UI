import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages//*.{js,ts,jsx,tsx}",
    "./components//*.{js,ts,jsx,tsx}",
    "./app//*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366F1",
        lightBg: "#F8F9FC",
        darkBg: "#1E1E2E",
      },
    },
  },
  plugins: [],
}

export default config
tailwind
