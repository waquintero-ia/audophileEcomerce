/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        'black-100': '#191919',
        'orange-100': '#D87D4A',
      },
      fontSize: {
        '13-sm': 'calc(0.0625rem + 3.2vw)',
        '13-xl': 'calc(0.0625rem + 0.84vw)',
        '14-sm': 'calc(0.0625rem + 3.47vw)',
        '15-sm': 'calc(0.0625rem + 3.74vw)',
        '36-sm': 'calc(0.0625rem + 9.34vw)',
      },
    },
  },
  plugins: [],
}

