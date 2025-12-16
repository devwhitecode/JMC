/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ECB373',
          light: '#EBBB78',
          dark: '#9F7B49',
        },
        dark: {
          DEFAULT: '#000000',
          light: '#1E0C05',
          lighter: '#452B17',
        },
        neutral: {
          light: '#FAF5EF',
          medium: '#A3A3A3',
          dark: '#D9D9D9',
        }
      },
      fontFamily: {
        'radhiumz': ['"NCS Radhiumz"', 'sans-serif'],
        'aboreto': ['Aboreto', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #EBBB78, #9F7B49)',
        'gradient-dark': 'linear-gradient(to right, #452B17, #1E0C05)',
      },
      borderRadius: {
        'xl': '30px',
      },
    },
  },
  plugins: [],
}

