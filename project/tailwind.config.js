export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: {
          100: '#ffffff',
          200: '#f7f7f7',
          300: '#e5e5e5',
          400: '#d4d4d4',
        },
        primary: {
          DEFAULT: '#a9ff1c',
          dark: '#86cc16',
          light: '#c1ff4d',
        },
        dark: {
          900: '#000000',
          800: '#1a1a1a',
          700: '#2d2d2d',
          600: '#404040',
        },
      },
      animation: {
        'coin-pulse': 'coin-pulse 2s infinite',
      },
      keyframes: {
        'coin-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};
