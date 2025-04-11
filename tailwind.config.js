/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        Primary: '#F9DA8B',
        Secondary: '#212121',
        Gray: '#E5E4E3',
        LightGray: '#F8F8F8',
        DeepGray: '#807F7E',
        Error: '#E73B2F',
        White: '#ffffff',
        Info: '#456CB5',
        Black: '#231F20',
        Point: '#ff331f',
        Storke: '#58595b',
      },
      fontSize: {
        mainContent: '52px',
        subContent: '40px',
        mainPoint: '64px',
        title: '32px',
        m_mainContent: '22px',
        m_mainPoint: '24px',
        main: '20px',
        sub: '18px',
        third: '16px',
        detail: '14px',
        diagram: '14px',
      },
      fontFamily: {
        suit: ['SUIT', 'sans-serif'],
        scdream: ['SCDream', 'sans-serif'],
        cursive: ['Blacksword', 'cursive'],
      },
      keyframes: {
        "slide-left": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "slide-right": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        "slide-left": "slide-left 0.5s ease-in-out",
        "slide-right": "slide-right 0.5s ease-in-out",
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        '.headline1': { '@apply font-semibold text-2xl leading-8': '' },
        '.headline2': { '@apply font-semibold text-xl leading-6': '' },
        '.headline3': { '@apply font-semibold text-lg leading-6': '' },
        '.headline4': { '@apply font-semibold text-base leading-5': '' },
        '.body1': { '@apply font-normal text-base leading-6': '' },
        '.body2': { '@apply font-normal text-sm leading-5': '' },
        '.body3': { '@apply font-normal text-xs leading-4': '' },
        '.normal': { '@apply font-medium text-lg leading-6': '' },
        '.medium': { '@apply font-medium text-base leading-5': '' },
        '.small': { '@apply font-medium text-sm leading-4': '' },
      });
    },
    ({ addComponents }) => {
      addComponents({
        '.a-reset': {
          all: 'unset',
          display: 'inline',
          cursor: 'pointer',
        },
      });
    },
  ],
};
