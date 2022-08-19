/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
      'dark-lilac' : '#0d002d',
      'light-lilac' : '#42226c',
      'lilac' : '#1a093d',
      'light' : '#fff',
      'red-dark' : '#CC1F1A',
      'green-dark' : '#1F9D55',
      'yellow-dark' : '#F2D024',
      'blue-dark' : '#2779BD'
      }
    },
  },
  plugins: [],
}
