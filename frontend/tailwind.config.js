/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        robort: ["Roboto", "san-serif"],
        alegreya: ["Alegreya", "san-serif"]
      }
    },
  },
  plugins: [],
}