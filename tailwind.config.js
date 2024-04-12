/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '*.{html,js}'
  ],
  theme: {
    fontFamily: {
      sans: ['Unbounded', 'sans-serif']
    },
    extend: {
      colors: {
        mainbg: '#050505',
        primaryBg: '#232323',
        secondaryBg: '#F5F5F5',
        primary: '#FFB800',
        'primary-alt': '#eaa900',
        secondary: '#707070',
        btn: '#52FF00',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          xs: '369px',
          md: '640px',
          lg: '1100px',
          xl: '1393px',
        },
      },
      boxShadow: {
        'alt': '0px 0px 17px 0px #52FF00',
        'yellow': '0px 0px 17px 0px #FFB800',
      },
    },
  },
  plugins: [],
}

