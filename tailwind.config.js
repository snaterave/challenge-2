/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    fontFamily: {
      'primary': ['Outfit', 'sans-serif'],
    },
    extend: {
      fontSize: {
        'paragraph': '15px',
      },
      colors: {
        'light-gray': '#d6e2ef',
        'grayish-blue': '#7b869d',
        'dark-blue': '#1f3150'
      },
      boxShadow:{
        "custom": '0.5rem 0.5rem black'
      }
    }
  },
  plugins: [],
}


