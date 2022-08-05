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
      'light' : '#fff'
      }
    },
  },
  plugins: [],
}
