/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'purple': {
          400: '#c084fc',
          500: '#8b5cf6',
          600: '#7c3aed'
        }
      }
    },
  },
  plugins: [],
};