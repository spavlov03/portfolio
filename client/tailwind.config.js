/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        'green': '#60C2B3',
        'dark' : '#242E4A'
      }
    },
  },
  plugins: [],
}