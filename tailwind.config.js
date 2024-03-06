const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    fontFamily: {
      roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
    }
  },
}