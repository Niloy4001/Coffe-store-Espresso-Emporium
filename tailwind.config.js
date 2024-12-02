/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rancho : [' Rancho'],
        railway : ['Raleway']

      }
    },
  },
  plugins: [require('daisyui'),],
}