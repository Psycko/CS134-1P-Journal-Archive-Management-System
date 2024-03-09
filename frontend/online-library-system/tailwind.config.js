/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': {
        'min': '350px',
        'max': '905px'
      },
      'md': '906px',
    },
    extend: {
      fontFamily: {
        'roboto': ['Roboto'],
        'bebas-neue': ['Bebas Neue'],
        'inter': ['Inter'],
        'archivo-black': ['Archivo Black'],
        'rubik': ['Rubik'],
      },

      colors: {
        'dark-blue': '#002366',
        'steel-blue': '#88acd4',
        'green': '#648c98',
        'dark-green': '#53737D',
        'dark-steel': '#6e90a9',
      }
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [
  ],
  prefix: 'tw-',
}