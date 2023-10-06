'use client'

import { useSwiper } from "swiper/react";

export default function PrevSlideButton() {
    const swiper = useSwiper();
    return (
        <button
            onClick={() => swiper.slidePrev()}
            className="absolute top-[50%] left-0 z-10 "
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                fill="none">
                <path
                    d="M16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28Z"
                    stroke="url(#paint0_radial_102_2147)" strokeOpacity="0.8" strokeWidth="3"
                    strokeMiterlimit="10" />
                <path d="M17.5 11.5L12.5 16L17.5 20.5" stroke="url(#paint1_radial_102_2147)"
                    strokeOpacity="0.8" strokeWidth="3" strokeLinecap="round"
                    strokeLinejoin="round" />
                <defs>
                    <radialGradient id="paint0_radial_102_2147" cx="0" cy="0" r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(22.725 22.5945) rotate(-118.836) scale(21.2264 36.982)">
                        <stop offset="0.102701" stopColor="#0041EA" />
                        <stop offset="0.848608" stopColor="#2900CD" />
                    </radialGradient>
                    <radialGradient id="paint1_radial_102_2147" cx="0" cy="0" r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(16.401 18.4729) rotate(-107.007) scale(7.29182 8.41049)">
                        <stop offset="0.102701" stopColor="#0041EA" />
                        <stop offset="0.848608" stopColor="#2900CD" />
                    </radialGradient>
                </defs>
            </svg>
        </button>
    )
}