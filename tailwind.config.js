/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      width: {
        desktop: '1180px',
      },
      colors: {
        danger: {
          main: '#DD453C',
          hover: '#940800',
          pressed: '#590500',
          surface: '#FFE4E4',
          border: '#E5ADAA',
        },
        warning: {
          main: '#D47F2F',
          hover: '#AB6626',
          pressed: '#663D17',
          surface: '#F5E5D5',
          border: '#EED3B9',
        },
        success: {
          main: '#04B300',
          hover: '#316C50',
          pressed: '#1D4130',
          surface: '#E6F8E5',
          border: '#BED5CA',
        },
        info: {
          main: '#3267E3',
          hover: '#254CA7',
          pressed: '#193371',
          surface: '#D6E1F9',
          border: '#BBCCF6',
        },
        grayscale: {
          10: '#FFFFFF',
          20: '#FAFAFA',
          30: '#F1F1F1',
          40: '#E7E7E7',
          50: '#CECECE',
          60: '#A1A1A1',
          70: '#858585',
          80: '#777777',
          90: '#5F5F5F',
          100: '#3A3A3A',
        },
        base: {
          artboard: '#1A202C',
          'container-1': '#27303F',
          'container-2': '#323D4D',
          60: '#7186A7',
          70: '#9DABC3',
          80: '#C9D1DE',
        },
        link: '#0ACCFF',
        line: {
          primary: '#FAFAFA',
          secondary: '#5B6068',
        },
        overlay: '#000000',
      },
      fontWeight: {
        normal: 300,
        medium: 400,
        semibold: 550,
      },
      fontSize: {
        xs: [
          '10px',
          {
            lineHeight: '150%',
            letterSpacing: '0.003em',
          },
        ],
        sm: [
          '12px',
          {
            lineHeight: '150%',
            letterSpacing: '0.003em',
          },
        ],
        md: [
          '14px',
          {
            lineHeight: '150%',
            letterSpacing: '0.003em',
          },
        ],
        lg: [
          '16px',
          {
            lineHeight: '150%',
            letterSpacing: '0.003em',
          },
        ],
        xl: [
          '18px',
          {
            lineHeight: '150%',
            letterSpacing: '0.003em',
          },
        ],
        '2xl': [
          '20px',
          {
            lineHeight: '150%',
            letterSpacing: '0.003em',
          },
        ],
        '3xl': [
          '24px',
          {
            lineHeight: '150%',
            letterSpacing: '0.003em',
          },
        ],
        'heading-md': [
          '28px',
          {
            lineHeight: '150%',
            letterSpacing: '0.003em',
          },
        ],
        'heading-lg': [
          '36px',
          {
            lineHeight: '150%',
            letterSpacing: '0.003em',
          },
        ],
      },
    },
  },
  plugins: [require("daisyui")],
}

