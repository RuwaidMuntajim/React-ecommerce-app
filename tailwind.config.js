const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    screens: {
      "xs": "425px",
      ...defaultTheme.screens,
    },
    extend: {
      screens: {
        "sm": "500px",
        "smd": "650px",
        "md": "768px",
        
      },
      height: {
        "128": "32rem",
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
