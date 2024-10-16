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
        'white-100': '#F1F1F1',
      },
      fontSize: {
        '13-sm': 'calc(0.0625rem + 3.2vw)',
        '13-md': 'calc(0.0625rem + 1.57vw)',
        '13-xl': 'calc(0.0625rem + 0.84vw)',
        '14-sm': 'calc(0.0625rem + 3.47vw)',
        '14-md': 'calc(0.0625rem + 1.70vw)',
        '14-xl': 'calc(0.0625rem + 0.98vw)',
        '15-sm': 'calc(0.0625rem + 3.74vw)',
        '15-md': 'calc(0.0625rem + 1.83vw)',
        '15-xl': 'calc(0.0625rem + 1.04vw)',
        '18-xl': 'calc(0.0625rem + 1.19vw)',
        '36-sm': 'calc(0.0625rem + 9.34vw)',
        '56-md': 'calc(0.0625rem + 7.17vw)',
        '56-xl': 'calc(0.0625rem + 3.82vw)',
      },
    },
  },
  plugins: [],
}

