/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xs': "300px",
      "sm":"548px",
      "md":"770px",
      "lg":"1050px"
      
    },
    extend: {},
  },
  plugins: [],
}

