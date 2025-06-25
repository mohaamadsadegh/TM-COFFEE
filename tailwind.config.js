/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  darkMode : "class",
  theme: {

    extend: {
      colors: {
       "brown":{
         100: "#ECE0D1",
         300: "#DBC1AC",
         600: "#967259",
         900: "#634832",

       }
      },
      boxShadow: {
        "normal" : "0 1px 10px rgba(0 , 0 , 0 , 0.5)",
      },
      borderRadius: {
        "4xl" : "2rem"
      },

    fontFamily: {
      "Dana" : "Dana",
      "DanaMedium" : "Dana Medium",
      "Danabold" : "Dana bold",
      "Emkan" : "Emkan",
      "EmkanMedium" : "Emkan Medium",
      "Emkanbold" : "Emkan bold",
    },
    letterSpacing:{
      "tightest" :"-0.065em"
    },
    spacing: {
      "30" : "7.5rem"
    }
    },
    container:{
      center:true,
      padding:{
        DEFAULT: "1rem",
        lg: "0.625rem",
        xl: "5rem"
      }
    }
  },
  screens:{
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1280px'
  },
  plugins: [
      function ({ addVariant }){
    addVariant('child', '& > *');
    addVariant('child-hover' , '& > *:hover');
      }
  ],
}

