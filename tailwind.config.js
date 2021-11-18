module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: '#FDFFFB',
          light: '#F7F6F3',
          DEFAULT: '#48784A'
        },
        secondary: {
          DEFAULT: '#1F3652',
        },
        gray: {
          border: '#949494',
          text: '#A0A0A0',
          img: '#C4C4C4'
        }
      },
      fontSize: {
        ss: ['12px', '17px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },
      borderRadius: {
        DEFAULT: '5px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}