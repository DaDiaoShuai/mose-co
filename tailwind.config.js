const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        comic: ["Comic Sans MS"],
      },
      colors: {
        primary: "#9c784e",
        font: {
          DEFAULT: "#4d1a1e",
          light: "#fcf8e7",
        },
      },
    },
    // colors: {}
  },
  plugins: [],
  darkMode: "class",
};
