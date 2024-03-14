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
        'green': '#59B793',
        'dark-green': '#5DA98E',
        'dark-steel': '#6e90a9',
        'btn-blue': '#8ea9c1',
        'text-blue': '#1C4264',
        'btn-landing': '#619644',
        'btn-dark': '#4F7739',
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