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
        "gradient-violet": 'url("./src/assets/images/bg-gradient-violet.png")',
        "squared-sheet": 'url("./src/assets/images/bg-squared-sheet.png")',
      },

      fontFamily: {
        "m-plus-code-latin": ["M PLUS Code Latin", "monospace"],
      },
    },
  },
  plugins: [],
};
