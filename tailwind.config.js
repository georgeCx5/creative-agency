/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neo-red': 'rgb(249, 79, 79)',
        'neo-hover-red': 'rgb(255, 147, 147)',
        'neo-BG': 'rgb(25, 25, 33)',
        'neo-white': 'rgb(255, 255, 255)',
        'neo-Text': 'rgb(0, 0, 0)',
        'neo-one': 'rgb(67, 67, 86)',
      },
      fontFamily: {
        'commissioner': 'Commissioner',
      },
      screens: {
        'TB': '768px',
        'DT': '1440px',
      }
    },
  },
  plugins: [],
}