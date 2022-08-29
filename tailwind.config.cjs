/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
      'dark-lilac' : '#0d002d',
      'light-lilac' : '#6730b5',
      'lilac' : '#1a093d',
      'light' : '#fff',
      'dark-red' : '#CC1F1A',
      'dark-green' : '#1F9D55',
      'dark-yellow' : '#F2D024',
      'dark-blue' : '#2779BD'
      }
    },
  },
  plugins: [],
}
