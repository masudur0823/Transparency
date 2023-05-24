/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        my_light_yellow:'#FFF5D9',
        my_grey: "#F0F0F0",
        my_orange: "#EFAE43",
        my_black: "#222222",
        my_black2: "#3F3F3F",
        my_black3: "#393737",
        placeholder: "#CFCFCF",
        textarea_placeholder:"#BFBFBF"
      },
    },
  },
  plugins: [],
};
