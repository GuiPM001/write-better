/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Quicksand': ['Quicksand', 'sans-serif'],
      },
      keyframes: {
        movimentRight: {
          '0%, 100%': { transform: 'translateX(50px)' },
          '50%': { transform: 'translateX(0px)' },
        },
        movimentLeft: {
          '0%, 100%': { transform: 'translateX(-50px)' },
          '50%': { transform: 'translateX(0px)' },
        },
      },
      animation: {
        movimentRight: 'movimentRight 7.5s linear infinite',
        movimentLeft: 'movimentLeft 10s linear infinite'
      }
    },
  },
  plugins: [],
}