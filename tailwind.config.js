const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ['"Playfair Display"', 'serif'],
      body: ['"Playfair Display"', 'serif'],
      roboto: ["Roboto", "Helvetica Neue", "sans-serif"],
    },
    colors: {
      CustomPurple: "#8a5dc8",
      ...colors,
    },
    extend: {
      backgroundColor: {
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}