/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        my_grey: "#F0F0F0",
        my_orange: "#EFAE43",
        my_black: "#222222",
        placeholder: "#CFCFCF",
        textarea_placeholder:"#BFBFBF"
      },
    },
  },
  plugins: [],
};
