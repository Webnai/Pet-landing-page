/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      optima: ["Optima", "sans-serif"],
    },
    extend: {
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
}