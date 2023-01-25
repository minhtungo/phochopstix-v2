/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'transparent-white': 'rgba(255, 255, 255, 0.08)',
        'transparent-black-background':'rgba(38, 38, 38,0.7)',
        'background-dark': 'rgba(38, 38, 38,0.35)'
      }
    },
  },
  plugins: [],
}