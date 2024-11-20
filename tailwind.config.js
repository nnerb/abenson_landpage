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
        'primary-gray': '#F1F2F6',
        'primary-blue-hover': '#151877',
        'primary-gray-hover': '#DADCE0',
        'secondary-gray': '#767676'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'poppins-regular': ['Poppins-Regular'],
        'poppins-medium': ['Poppins-Medium'],
        'poppins-semibold': ['Poppins-SemiBold'],
        'poppins-bold': ['Poppins-Bold'],
        'roboto-bold': ['Roboto-Bold']
      }
    },
  },
  plugins: [],
}

