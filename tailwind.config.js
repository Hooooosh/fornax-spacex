/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/**/*.{html,js}",
    "index.html"
  ],
  theme: {
    extend: {
      colors: {
        "light": "#f0f0f0",
        "medium": "#333333",
        "dark": "#111111",
      },
    },
  },
  plugins: [],
}

