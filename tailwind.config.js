/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      rotate: {
        '3': '3deg'
      },
    },
    fontFamily: {
      sans: ['Josefin Sans', 'sans-serif'],
      slab: ['Josefin Slab', 'serif']
    },

  },
  plugins: [],
}



