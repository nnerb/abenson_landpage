/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1E22AA',
        'primary-yellow': '#FAE100',
        'primary-gray': '#4C525C',
        'primary-bg-gray': '#F1F2F6',
        'primary-blue-hover': '#151877',
        'primary-bg-gray-hover': '#DADCE0',
        'secondary-gray': '#767676',
        'primary-button': '#185BAA',
        'primary-text': '#FCFCFD',
        'primary-b-blue': '#185BAA'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'poppins-regular': ['Poppins-Regular'],
        'poppins-medium': ['Poppins-Medium'],
        'poppins-semibold': ['Poppins-SemiBold'],
        'poppins-bold': ['Poppins-Bold'],
        'roboto-bold': ['Roboto-Bold']
      },
      borderRadius: {
        'primary': '20px'
      },
      screens: {
        'slider-md': '715px',
        'slider-semi-lg': '832px',
        'slider-lg': '1200px'
      }
    },
  },
  plugins: [],
}


