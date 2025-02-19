/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        'graphite': 'rgb(49, 49, 49)',
        'lavander_gray': '#9EA3BA'
      },
    },
  },
  plugins: [],
}

