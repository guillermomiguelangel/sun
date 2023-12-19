/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'impact': ['Impact', 'sans-serif'],
      'hat': ['Impact', 'sans-serif'],
    },
    colors: {
      ...colors,
      'orange': '#F88430',
      'creme': '#FFF2E7',
      'lightblue': '#1DAAE2',
      'gray': '#7A7A7A',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}