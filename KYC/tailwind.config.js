/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#a9ff1c',
        'primary-hover': '#95e619',
        'primary-light': '#ebffcc',
      },
    },
  },
  plugins: [],
};