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
      backgroundImage: {
        'bg-image': "url(/src/bg.jpg')",
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