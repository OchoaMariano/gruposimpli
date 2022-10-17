/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryBlue': '#19197B',
        'lightBlue': '#19C4FF',
        'lightWhite': '#EEEEF0',
        'gray': '#666666',
        'backGray': '#F5F5F5'
      },
    },
  },
  plugins: [],
}
