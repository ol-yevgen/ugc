import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                actions: 'rgba(0, 48, 171, 1)',
                actionsHover: 'rgba(0, 48, 171, 0.06)',
                mainText: '#111827',
                mainGradient: '174.62% 88.44% at 21.98% 77.48%, rgba(0, 65, 234, 0.80) 10.27%, rgba(41, 0, 205, 0.80) 84.86%)',
                headerColor: '#F8FAFC',
            },
            boxShadow: {
                'm': '0px 2px 6px 0px rgba(0, 0, 0, 0.06)',
            },
            transitionTimingFunction: {
                DEFAULT: 'easy-in-out'
            },
            transitionDuration: {
                DEFAULT: '400ms'
            },
            keyframes: {
                fadeIn: {
                    from: {
                        opacity: '0'
                    },
                    to: {
                        opacity: '1'
                    }
                }
            },
            animation: {
                fadeIn: 'fadeIn .5s east-in-out'
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
                9: '9'
            }
        },
    },
    plugins: [],
}
export default config
