/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "custom-white" : "#F9F7F7",
        "custom-dark-blue" : "#112D4E",
        "custom-light-blue":"#3F72AF",
        "custom-lighter-blue": "#DBE2EF",
      }
    },
  },
  plugins: [],
}

