/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        my_light_yellow: "#FFF5D9",
        yellow:'#F2C94C',
        yellow2:'#EAC43D',
        yellow3:' rgba(239, 174, 67, 0.08)',
        my_grey: "#F0F0F0",
        my_grey2:"#F2F2F2",
        my_grey3:"#B8B8B8",
        my_grey4:"#C2C2C2",
        my_grey5:"#EFEFEF",
        my_grey6:"#D9D7D7",
        my_grey7:"#CDCDCD",
        my_grey8:"#E2E2E2",
        midgrey:"#84868B",
        my_orange: "#EFAE43",
        my_black: "#222222",
        my_black2: "#3F3F3F",
        my_black3: "#393737",
        my_black4: "#333333",
        placeholder: "#CFCFCF",
        textarea_placeholder: "#BFBFBF",
        input_border_color: "#D9D9D9",
        my_light_text:"#777777",
      },
      height:{
        "18":"4.5rem",
        "120":"30rem",
        "122":"32rem"
      },
      width:{
        "120":"30rem",
        "19/20": "95%"
      },
      fontSize: {
        my_xs:'0.5rem'
      }
    },
  },
  plugins: [],
};
