/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        'hero-pattern':"linear-gradient(to right bottom, #F7AC32, #F7AC32)",
        'card-bg-pattern':"linear-gradient(to bottom, #F7AB32, #FE8443)",
        'assured_bg':"linear-gradient(to right, #5E40C2, #2D1388)",
      },
      colors: {
        'formBg': '#FAE351',
        'cardBorder': '#F5F5F5',
        'formBtn': '#FF4600 ',
        'blue': '#1444E1',
        'blue-500' : 'rgb(59 130 246)',
        'inputBorder' : "#E6E6E6",
        'cardBg' : "#F8F8F8",
        'sectionBg' : "#F6F6F6",
        'tabSectionBg' : "#F3F3F3",
        'cardBorder' : "#E8E8E8",
        'darkYellow' : "#f8ac32",
        'fineText' : "#b2b1b1",
      },

      boxShadow: {
        'lg': '5px 5px 0px #D8D8D8',
        'card': '2px 5px 10px #E9E9E9',
        'steps': '0px 1px 2px #E9E9E9',
      }

    },
    container: {
      center: true,
      screens: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
      },
      padding: {
        DEFAULT: '12px',
        // sm: '2rem',
        // lg: '4rem',
        // xl: '5rem',
        // '2xl': '6rem',
      },
    },
    
    fontFamily: {
      'trumpBold': ['TRUMP_GOTHIC_EAST_BOLD'],
      'graphikLight': ['GraphikLight', 'system-ui'],
      'graphikMedium': ['GraphikMedium', 'system-ui'],
      'graphikReqular': ['GraphikRegular', 'system-ui'],
      'graphikSemibold': ['GraphikSemibold', 'system-ui'],
    },
    
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1400px',
    }
  },
  plugins: [],
}