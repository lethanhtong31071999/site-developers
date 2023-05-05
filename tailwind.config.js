/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}", "./public/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#f97316",
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
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "daisy-",
    darkTheme: "dark",
  },
};
