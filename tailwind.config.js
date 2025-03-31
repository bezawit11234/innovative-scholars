/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
     bodyColor: "#EBF5F3",
     textColor: "#181F38",
     buttonColor: "#08CF65",
     bodyColor2: "#0C3245"
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hide': {
          /* For WebKit (Chrome, Safari) */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          /* For IE, Edge */
          '-ms-overflow-style': 'none',
          /* For Firefox */
          'scrollbar-width': 'none',
        },
        '.scrollbar-default': {
          '&::-webkit-scrollbar': {
            display: 'block',
          },
          '-ms-overflow-style': 'auto',
          'scrollbar-width': 'auto',
        },
      };
      addUtilities(newUtilities, ['responsive']);
    },

  ],
};
