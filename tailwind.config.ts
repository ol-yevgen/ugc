import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            gridTemplateRows: {
                "layout": 'auto 1fr auto'
            },
            colors: {
                bodyColor: '#F6F6F6',
                headerColor: '#F8FAFC',
                hoverColor: 'rgba(0, 48, 171, 0.06)',
                mainActions: '#0030AB',
                mainTextColor: '#111827',
                storiesColor: '#374151',
                borderColor: '#9CA3AF',
                shadowColor: 'rgba(46, 0, 178, 0.30)',
                burgerBgColor: 'rgba(0, 0, 0, 0.45)',
                footerTextColor: 'rgba(255, 255, 255, 0.80)',
                gradientMainFirst: 'rgba(0, 65, 234, 0.8)',
                gradientMainSecond: 'rgba(41, 0, 205, 0.8)',
                gradientSecondFirst: 'rgba(0, 65, 234, 0.33)',
                gradientSecondSecond: 'rgba(255, 255, 255, 0)',
            },
            backgroundImage: {
                "phone-forest": "url('../../public/images/homePage/withUsBg.jpg')"
            },
            boxShadow: {
                'm': '0px 2px 6px 0px rgba(0, 0, 0, 0.06)',
            },
            transitionTimingFunction: {
                DEFAULT: 'ease-in-out'
            },
            transitionDuration: {
                DEFAULT: '400ms'
            },
            fontFamily: {
                main: ['Poppins']
            },
            keyframes: {
                fadeIn: {
                    from: {
                        opacity: '0',
                        left: '-100%'
                    },
                    to: {
                        opacity: '1',
                        left: '100%'
                    }
                }
            },
            animation: {
                fadeIn: 'fadeIn 5s east-in-out'
            },
            zIndex: {
                1: '1',
                2: '2',
                3: '3',
                4: '4',
                5: '5',
                6: '6',
                7: '7',
                8: '8',
                9: '9',
                100: '100'
            },
            screens: {
                xs: '528px',
                ml: '900px'
            }
        },
    },
    plugins: [],
}
export default config
