/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./index.html"],
  theme: {
    fontFamily:{
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Fraunces', 'serif'],
    },
    extend: {
      colors:{
        DarkCyan : 'hsl(158, 36%, 37%)',
        HoverDarkCyan : 'hsl(158, 36%, 20%)',
        Cream : 'hsl(30, 38%, 92%)',
        DarkBlue : 'hsl(212, 21%, 14%)',
        GrayishBlue : 'hsl(228, 12%, 48%)',
      }
    },
  },
  plugins: [],
}

