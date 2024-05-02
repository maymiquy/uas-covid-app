/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      screens: {
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'primary': '#06D6A0',
        'secondary': '#118AB2',
        'tertiary': '#d3dce6',
        'danger': '#EF476F',
        'accent': '#073B4C',
      },
      fontFamily: {
        display: ['Poppins'],
        sub: ['Merriweather', 'Oswald'],
      },
    },
  },
  plugins: [],
}