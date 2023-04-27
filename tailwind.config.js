/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.{html,js}"],
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
