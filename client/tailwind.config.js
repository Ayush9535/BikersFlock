/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors:{
        'bforange':'#db4c1d',
      },
      boxShadow:{
        'right' : '3px 0px 0px 0px #f3f4f6'
      }
    },
  },
  plugins: [],
}

