/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    fontFamily: {
      'primary': ['Figtree'],
    },
    extend: {
      colors: {
        'primary': '#f4d04e',
        'neutral-gray': '#808080',
		    'neutral-black': '#121212',
      },
      boxShadow:{
        "custom": '0.5rem 0.5rem black'
      }
    }
  },
  plugins: [],
}


