/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '16x',
    },
    extend: {
      colors: {
        primary: '#eab308',
        secondary: '#fafafa',
        dark: '#991b1b',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}
