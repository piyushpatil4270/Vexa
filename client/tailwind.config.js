/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xs': "450px",
      "sm":"648px",
      "md":"770px",
      "lg":"1050px"
      
    },
    extend: {},
  },
  plugins: [],
}

