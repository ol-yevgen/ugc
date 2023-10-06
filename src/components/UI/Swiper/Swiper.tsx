'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { IProvideSlide } from '@/types/heroPageRes';
import Image from 'next/image';
import PrevSlideButton from './PrevSlideButton';
import NextSlideButton from './NextSlideButton';

type TSwiperProps = {
    slidesList: IProvideSlide[]
}

export default function SwiperCarousel({ slidesList }: TSwiperProps) {
    return (
        <div className="w-3/4 md:w-1/4  max-w-[260px] ml:min-w-[300px] xl:min-w-[400px] md:max-w-full">
            <Swiper className="relative">
                <PrevSlideButton />
                {slidesList.map(slide => {
                    return (
                        <SwiperSlide key={slide.id} className='px-5 ml:px-14'>
                            <Image src={slide.slide} alt="phone" className='h-full min-h-[300px]' />
                        </SwiperSlide>
                    )
                })}
                <NextSlideButton />

                <div className=''>


                </div>
            </Swiper>

        </div>
    );
}
