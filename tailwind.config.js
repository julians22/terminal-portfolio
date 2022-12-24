/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
  ],
  // darkMode: false,
  theme: {
    extend: {
      keyframes:{
        'blink': {
          'from, to' : { color: 'transparent' },
          '50%': { color: 'inherit'}
        }
      },
      animation: {
        blink: 'blink 1s ease-in-out infinite'
      },
      fontFamily: {
        'console': ['FiraCode Nerd Font', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
