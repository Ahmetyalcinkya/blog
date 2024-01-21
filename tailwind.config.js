/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    colors: {
      // Dark mode
      pinkish: "#ffd1e3",
      lila: "#a367b1",
      // Light mode
      darkLila: "#5d3587",
      purple: "#392467",
      // Standarts
      white: "#fff",
      black: "#000",
    },
    boxShadow: {
      lightCustomBoxShadow: "#392467 0 0.2rem 1.5rem",
      darkCustomBoxShadow: "#ffd1e3 0 0.2rem 1.5rem",
    },
    extend: {},
  },
  plugins: [],
};
