/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        veryDarkBlue: '#23252C',
        black: '#1A1B21',
        darkBlue: '#21222A',
        lightBlue: '#33373E',
        veryLightBlue: '#00D8FF',
        skyBlue: '#5093E2',
        lightBlack: '#1C1C1C',
        darkGray: '#F3BF99',
        darkest: '#161619',
        red: '#F55A5A',
        redLight: '#FF5A5F'
      }
    },
  },
  plugins: [],
}