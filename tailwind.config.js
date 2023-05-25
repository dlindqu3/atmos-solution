/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: colors.yellow,
        secondary: colors.emerald,
        tertiary: colors.blue,
        quaternary: colors.indigo,
      },
    },
  },
  safelist: [{
    pattern: /(bg)-(primary|secondary|tertiary|quaternary)-(600)/
}],
  plugins: [],
}
