const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['League Spartan', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        dark: '#212223',
        grey: '#777777',
        light: '#f1f2f6',
        white: '#FFFFFF',
      },
      borderRadius: {
        none: '0',
        sm: '0',
        md: '0',
        lg: '0',
        full: '0',
        large: '0',
      },
    },
  },
  plugins: [],
});
