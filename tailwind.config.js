/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      blur: {
        '1': '3px', // Set a lower value for the blur strength
        '4': '7px', // Default value (adjust as needed)
        '6': '10px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const blurUtilities = {
        '.blur': {
          backdropFilter: 'blur(1px)', // Set default blur strength here as well
        },
      };

      addUtilities(blurUtilities, ['responsive']);
    },
  ],
};

