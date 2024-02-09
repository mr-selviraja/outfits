const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['League Spartan', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: '#E8F5F7',
        secondary: '#EBC97F',
        white: '#FFFFFF',
        dark: '#212223',
        grey: '#B8B8B8',
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
