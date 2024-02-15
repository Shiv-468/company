/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow:{
        'card-shadow':'0px 20px 50px 0px #3B3E430D'
      },
      fontFamily:{
        'Dm-sans':'DM Sans',
      }
    },
  },
  plugins: [],
}

