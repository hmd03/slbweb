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
        Black: '#000000',
      },
      fontSize: {
        title: '32px',
        main: '20px',
        detail: '14px',
        diagram: '14px',
      },
      fontFamily: {
        primary: 'Blacksword SCDream1 SCDream2 SCDream3 SCDream4 SCDream5 SCDream6 SCDream7 SCDream8 SCDream9 sans-serif',
        bold: 'SUIT-Bold',
        extraBold: 'SUIT-ExtraBold',
        extraLight: 'SUIT-ExtraLight',
        heavy: 'SUIT-Heavy',
        light: 'SUIT-Light',
        medium: 'SUIT-Medium',
        regular: 'SUIT-Regular',
        semiBold: 'SUIT-SemiBold',
        thin: 'SUIT-Thin',
      }
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        '.headline1': {
          '@apply font-semibold text-2xl leading-8': '',
        },
        '.headline2': {
          '@apply font-semibold text-xl leading-6': '',
        },
        '.headline3': {
          '@apply font-semibold text-lg leading-6': '',
        },
        '.headline4': {
          '@apply font-semibold text-base leading-5': '',
        },
        '.body1': {
          '@apply font-normal text-base leading-6': '',
        },
        '.body2': {
          '@apply font-normal text-sm leading-5': '',
        },
        '.body3': {
          '@apply font-normal text-xs leading-4': '',
        },
        '.normal': {
          '@apply font-medium text-lg leading-6': '',
        },
        '.medium': {
          '@apply font-medium text-base leading-5': '',
        },
        '.small': {
          '@apply font-medium text-sm leading-4': '',
        },
      });
    },
  ],
};
