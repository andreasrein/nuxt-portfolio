const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    fontFamily: {
      roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      backgroundImage: {
        'brush-stroke': "url('/img/brush1.svg')"
      },
      fontFamily: {
        marker: ["Permanent Marker", "cursive"],
      }
    }
  },
}