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
      },

      colors: {
        'blue': '#002366',
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