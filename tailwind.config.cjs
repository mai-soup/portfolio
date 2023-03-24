/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-red": "#EF4444",
        "off-white": "#E8EDDF",
        "light-grey": "#CFDBD5",
        "dark-grey": "#333533",
        "darkest-grey": "#242423",
        "dark-red": "#e21313",
      },
      fontFamily: {
        sans: ["Lexend Deca", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
