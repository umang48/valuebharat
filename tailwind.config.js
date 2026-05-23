/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0c', // Sleek dark mode background
        surface: '#15161a', // Surface color for cards
        surfaceBorder: '#262831',
        primary: '#3b82f6', // Neon blue accent
        neonGreen: '#10b981', // Positive trend
        neonRed: '#ef4444', // Negative trend
        textPrimary: '#f3f4f6',
        textSecondary: '#9ca3af',
      }
    },
  },
  plugins: [],
}
