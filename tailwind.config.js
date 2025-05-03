/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', './*.html'],
    darkMode: 'class',
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
                slbPoint: '42px',
                slbTitle: '36px',
                slbSubTitle: '30px',
                slbContent: '24px',
                slbPointMo: '24px',
                slbTitleMo: '22px',
                slbSubTitleMo: '16px',
                slbContentMo: '16px',
                'slbPoint-3x': '126px',
                'slbTitleMo-3x': '66px',
                mainContent: '52px',
                subContent: '40px',
                mainPoint: '64px',
                title: '32px',
                m_title: '32px',
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
                sans: [
                    'system-ui',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'Segoe UI',
                    'Malgun Gothic',
                    '맑은 고딕',
                    'sans-serif',
                ],
            },
            keyframes: {
                'slide-left': {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
                'slide-right': {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
                slideup: {
                    '0%': { opacity: '0', transform: 'translateY(50px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                'slide-left': 'slide-left 0.5s ease-in-out',
                'slide-right': 'slide-right 0.5s ease-in-out',
                slideup: 'slideup 0.8s ease-out forwards',
            },
        },
    },
    plugins: [
        ({ addUtilities }) => {
            addUtilities({
                '.Slb-Point': { '@apply font-extrabold text-slbPoint': '' },
                '.Slb-Title': { '@apply font-bold text-slbTitle': '' },
                '.Slb-SubTitle': {
                    '@apply font-semibold text-slbSubTitle': '',
                },
                '.Slb-Content': { '@apply font-normal text-slbContent': '' },
                '.Slb-Point-mo': {
                    '@apply font-extrabold text-slbPointMo': '',
                },
                '.Slb-Title-mo': { '@apply font-bold text-slbTitleMo': '' },
                '.Slb-SubTitle-mo': {
                    '@apply font-semibold text-slbSubTitleMo': '',
                },
                '.Slb-Content-mo': {
                    '@apply font-normal text-slbContentMo': '',
                },
                '.Slb-Point-3x': {
                    '@apply font-extrabold text-slbPoint-3x': '',
                },
                '.Slb-Title-mo-3x': {
                    '@apply font-bold text-slbTitleMo-3x': '',
                },
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
    safelist: [
        'Slb-Point',
        'Slb-Title',
        'Slb-SubTitle',
        'Slb-Content',
        'Slb-Point-mo',
        'Slb-Title-mo',
        'Slb-SubTitle-mo',
        'Slb-Content-mo',
        'Slb-Point-3x',
        'Slb-Title-mo-3x',
    ],
};
