/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'blue': '#024fa0',
        "green": "#4fb845",
        "orange": "#f27023",
        "red": "#dc3434",
        "white700": "#d1d1d1",
        "learning": "#45b62e",
        "tutorial": "#3D7172",
        "event": "#EF8A5E",
        "asking": "#E03C81",
        "discussion": "#39393A",
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
