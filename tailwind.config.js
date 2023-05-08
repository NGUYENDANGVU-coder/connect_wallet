/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        boxShadow:{
          'formShadow':'rgba(0, 0, 0, 0.35) 0px 5px 15px',
          'button_shadow':'0 4px 15px 0 rgba(236 116 149 0.75)'
        },
        backgroundPosition:{
          'button_hover':'100% 0'
        },
        backgroundSize:{
          'button_size':'300% 100%'
        },
        backgroundImage:{
          'button_bg' : 'linear-gradient(to right, #25aae1, #4481eb, #04befe, #3f86ed)'
        }
      },
    },
    plugins: [],
  }