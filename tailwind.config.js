/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        'black-100': '#191919'
      },
      fontSize: {
        13: 'calc(0.0625rem + 0.84vw)',
      },
    },
  },
  plugins: [],
}

