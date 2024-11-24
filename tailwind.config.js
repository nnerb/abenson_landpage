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
        'primary-b-blue': '#185BAA',
        'secondary-blue': '#E5F6FF',
        'error': '#FF4F44',
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
        'primary': '20px',
        'secondary': '10px'
      },
      screens: {
        'slider-md': '715px',
        'slider-semi-lg': '850px',
        'slider-lg': '1200px',
        'custom-xs': '320px',
        'custom-sm': '481px',
        'custom-md': '641px',
        'custom-semi-md': '850px',
      },
      boxShadow: {
        'combined': `
          0px 0px 0px 0px #0000001A,
          0px 4.07px 8.71px 0px #0000001A,
          0px 15.68px 15.68px 0px #00000017,
          0px 34.85px 20.91px 0px #0000000D,
          0px 61.58px 24.4px 0px #00000003,
          0px 96.43px 26.72px 0px #00000000
        `,
        'cart': '0px 0px 15px 0px #0000001A'
      },
      backgroundImage: {
        'footer-image': 'url("./assets/images/footer.jpg")',
        'app-image': 'url("./assets/images/app.png")',
        'primary-app': 'linear-gradient(182.36deg, #2EC5FE 1.98%, #38D2FD 73.35%)'
      },
      backgroundPosition: {
        'sm-position': '1% 35%',
        'md-position': '0.8% 34.6%',
      },
      backgroundSize: {
        'sm-bg-size':  '890%',
        'md-bg-size' : '203%'
      }
    },
  },
  plugins: [],
}


