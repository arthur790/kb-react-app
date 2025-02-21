/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",,
    "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        "green-color": "#27AE60",
        "gray-color": '#828282',
        "card-color": '#212121',
        "color-background": '#171717',
        "menu-color": "#172554",
        'blue-app': {
              '50': '#ecffff',
              '100': '#ceffff',
              '200': '#a3fbfe',
              '300': '#64f5fc',
              '400': '#1ee5f2',
              '500': '#02c9d8',
              '600': '#04a0b6',
              '700': '#0b8093',
              '800': '#136677',
              '900': '#134f5e',
              '950': '#073945',
          },
      },
      backgroundImage: {
        "open-menu": "url('./assets/menu.svg')",
        "close-menu": "url('./assets/close.svg')"
      }
    },
  },
  plugins: [],
}

