/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "./public/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        darkBlue: {
          100: "#202737",
          500: "#12181b",
        },
        "ct-orange": "#f97316",
      },
      fontFamily: {
        Popin: ["Poppins', sans-serif;"],
      },
    },
  },
  plugins: [],
};
