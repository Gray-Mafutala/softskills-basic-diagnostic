/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#19274f",
        pink: "#ff589e",
      },

      backgroundImage: {
        "squared-sheet": 'url("./src/assets/images/squared-sheet.png")',
      },

      fontFamily: {
        cardo: ["Cardo", "serif"],
        "titillium-web": ["Titillium Web", "sans-serif"],
      },
    },
  },
  plugins: [],
};
