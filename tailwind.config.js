/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      animation: {
        text: "text 5s ease infinite",
        'bounce-in': 'bounce-in 1s ease-out',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'swing': 'swing 2s ease-in-out infinite'
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        'bounce-in': {
          '0%': { 
            transform: 'scale(0)',
            opacity: '0'
          },
          '50%': { 
            transform: 'scale(1.25)',
            opacity: '0.5'
          },
          '70%': { 
            transform: 'scale(0.9)',
            opacity: '0.75'
          },
          '100%': { 
            transform: 'scale(1)',
            opacity: '1'
          }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        },
        swing: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '20%': { transform: 'rotate(15deg)' },
          '40%': { transform: 'rotate(-10deg)' },
          '60%': { transform: 'rotate(5deg)' },
          '80%': { transform: 'rotate(-5deg)' }
        }
      },
    },
  },
  plugins: [],
};
