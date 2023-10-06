'use client'

import { BASE_API } from '@/helpers/constants'
import { IHeroPageRes } from '@/types/heroPageRes'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import axios from 'axios'

import { GradientBox, Button, Spinner, SwiperCarousel } from '@/components/index'
import boxDecor from '../../public/images/homePage/decor-2.png'
import styles from './homePage.module.scss'
import Link from 'next/link'

export default function Home() {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['homePage'],
        queryFn: async () => {
            const { data } = await axios.get(`${BASE_API}/homePage`)
            return data as IHeroPageRes
        }
    })

    const indexOfFirstPeriod = data?.hero.heroSectionTitle.indexOf(".") as number
    const newTitle = data?.hero.heroSectionTitle.substring(0, indexOfFirstPeriod + 1) + '\n' + data?.hero.heroSectionTitle.substring(indexOfFirstPeriod + 1);

    if (isLoading) return <Spinner />

    if (isError) return <h1>Some ERROR</h1>

    return (
        <>
            {/* FIRST SECTION */}

            <div className="relative z-0 max-w-screen-xl mx-auto px-5 mt-10 md:mt-20">
                <GradientBox decor={true}>
                    <div className="relative z-3 flex items-center justify-center gap-5">
                        <div className="flex flex-col w-full items-center lg:items-start lg:w-4/6">
                            <h1
                                className="mb-10 text-[20px]/normal text-center md:mb-20 md:text-[30px]/normal lg:text-[40px]/normal lg:text-left">
                                {newTitle}
                            </h1>
                            <Button
                                path='/services'
                                current={true}
                                label={data?.hero.heroButtonTitle}
                            />
                            <ul className="flex flex-col justify-center items-center space-y-3 mt-5  md:flex-row md:space-y-0 md:space-x-8 lg:justify-start">
                                {data?.hero.heroCountsInfo.map(info => {
                                    return (
                                        <li
                                            key={info.id}
                                            className="flex items-center space-x-3"
                                        >
                                            <Image src={info.icon} alt={info.count} />
                                            <span className={styles.heroIcon}>{info.count}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="hidden h-full w-2/6 lg:block">
                            <Image className="w-full h-full min-h-[500px]" src={data?.hero.heroImage} alt="photo" />
                        </div>
                    </div>

                </GradientBox>
            </div>

            {/* SECOND SECTION */}

            <div className="max-w-screen-xl mx-auto px-5 mt-10 md:mt-20">
                <section className='md:px-14'>
                    <h2 className='text-center text-[28px]/normal md:text-[56px]/normal font-semibold'>
                        {data?.description.descriptionSectionTitle}
                    </h2>
                    <div className='px-6 pt-10 md:pt-20  md:text-[20px]/[36px]'>
                        <p className='mb-10 text-center md:text-start'>
                            {data?.description.descriptionTextOne}</p>
                        <p className='text-center md:text-start'>
                            {data?.description.descriptionTextTwo}
                        </p>
                    </div>
                </section>
            </div>

            {/* THIRD SECTION */}

            <div className="max-w-screen-xl mx-auto px-5 mt-10 md:mt-20">
                <section

                    className="w-full rounded-lg bg-phone-forest bg-cover bg-no-repeat bg-center overflow-hidden">
                    <div className="w-full p-10 text-white bg-gradient-to-r from-gradientSecondFirst to-gradientSecondSecond md:w-4/5 md:p-20">
                        <div className="max-w-[380px] md:max-w-[480px]">
                            <h2 className="text-[30px] md:text-[40px] font-medium">
                                {data?.withUs.withUsTextOne}

                            </h2>
                        </div>
                        <p className="block max-w-[524px] mt-5 text-[16px] font-semibold md:text-[24px]">
                            {data?.withUs.withUsTextTwo}
                        </p>
                        <button
                            className="px-4 py-3 mt-10 bg-white rounded-md text-mainActions hover:bg-mainActions hover:text-white transition-colors">
                            <a href="#" className="text-[15px]/[20px] font-medium md:text-[20px]/[30px]">{data?.withUs.withUsButton}</a>
                        </button>
                    </div>
                </section>
            </div>

            {/* FOURTH SECTION */}

            <div className="max-w-screen-xl mx-auto px-5 mt-10 md:mt-20">
                <section
                    className="flex flex-col-reverse gap-y-8 justify-center items-center gap-x-12  xl:flex-row">
                    <SwiperCarousel
                        slidesList={data?.provide.provideSlides}
                    />
                    <div
                        className="flex flex-col items-center xl:items-end gap-y-6 w-full xl:w-2/3 text-center lg:text-right">
                        <h2 className="text-[40px] md:text-[54px] font-semibold">{data?.provide.provideSectionTitle}</h2>
                        <p className="max-w-[600px] text-[16px]/[23px] md:text-[20px]/[27px]">
                            {data?.provide.provideText}
                        </p>
                        <div
                            className="grid xs:grid-cols-2  ml:grid-cols-4 gap-4 justify-center xl:text-[15px] font-medium transition-colors">

                            {data?.provide.provideButtons.map(button => {
                                return (
                                    <div key={button.id} className="p-[1px] rounded-full transition-color bg-gradient-to-bl from-gradientMainFirst to-gradientMainSecond">
                                        <button
                                            className="w-full rounded-full bg-bodyColor hover:bg-transparent  transition-color ">
                                            <Link href="#"
                                                className=" block rounded-full px-6 xl:px-8 py-3 customTextGradient">
                                                {button.title}
                                            </Link>
                                        </button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </div>

            {/* FIFTH SECTION */}

            <section className="relative -skew-y-3 bg-gradient-to-bl from-gradientMainFirst to-gradientMainSecond mt-10 md:mt-20 ">
                <div className="absolute bottom-0 ">
                    <Image src={boxDecor} alt="decor" className="max-h-[720px]" />
                </div>
                <div className="max-w-screen-xl mx-auto px-5 py-32 h-full flex flex-col items-center justify-center gap-y-24 text-bodyColor skew-y-3">
                    <h2 className="text-[56px] font-semibold text-center">How it works ?</h2>
                    <div className="w-full md:grid grid-cols-2 xl:grid-cols-4 gap-20 space-y-10 md:space-y-0">
                        <ul className="relative">
                            <li className="flex flex-col justify-center items-center gap-y-4">
                                <div className="flex justify-center items-center w-[105px] h-[105px] rounded-full bg-shadowColor">
                                    <div className=" flex justify-center items-center w-[89px] h-[89px] rounded-full
                                    bg-mainActions">
                                        <span className="text-[41px]/[26px] font-extrabold">1</span>
                                    </div>
                                    <div className="absolute top-[37%] left-[80%] hidden md:block lg:left-[90%] xl:left-[80%]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="204" height="28" viewBox="0 0 204 28" fill="none">
                                            <path d="M0.00390625 15.0005L203.004 13.0005" stroke="#F8FAFC" strokeDasharray="2 2" />
                                            <circle cx="101.004" cy="14.0005" r="14" fill="#0030AB" />
                                            <path d="M99.2539 9.62549L103.629 14.0005L99.2539 18.3755" stroke="#F8FAFC" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="max-w-[200px] text-center">
                                    <h3 className="text-[22px]/[26px] font-extrabold mb-2">Place Order</h3>
                                    <p className="leading-6">
                                        Choose the type of content that your brand requires.
                                    </p>
                                </div>

                            </li>
                        </ul>

                        <ul className="relative">
                            <li className="flex flex-col justify-center items-center gap-y-4">
                                <div className="flex justify-center items-center w-[105px] h-[105px] rounded-full bg-shadowColor">
                                    <div className=" flex justify-center items-center w-[89px] h-[89px] rounded-full
                                    bg-mainActions">
                                        <span className="text-[41px]/[26px] font-extrabold">2</span>
                                    </div>
                                    <div className="absolute top-[37%] left-[80%] hidden xl:block">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="204" height="28" viewBox="0 0 204 28" fill="none">
                                            <path d="M0.00390625 15.0005L203.004 13.0005" stroke="#F8FAFC" strokeDasharray="2 2" />
                                            <circle cx="101.004" cy="14.0005" r="14" fill="#0030AB" />
                                            <path d="M99.2539 9.62549L103.629 14.0005L99.2539 18.3755" stroke="#F8FAFC" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="max-w-[200px] text-center">
                                    <h3 className="text-[22px]/[26px] font-extrabold mb-2">Complete Brief</h3>
                                    <p className="leading-6">
                                        To learn more about your project, please fill out our creative brief.
                                    </p>
                                </div>

                            </li>
                        </ul>
                        <ul className="relative">
                            <li className="flex flex-col justify-center items-center gap-y-4">
                                <div className="flex justify-center items-center w-[105px] h-[105px] rounded-full bg-shadowColor">
                                    <div className="flex justify-center items-center w-[89px] h-[89px] rounded-full
                                    bg-mainActions">
                                        <span className="text-[41px]/[26px] font-extrabold">3</span>
                                    </div>
                                    <div className="absolute top-[37%] left-[80%] hidden md:block lg:left-[90%] xl:left-[80%]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="204" height="28" viewBox="0 0 204 28" fill="none">
                                            <path d="M0.00390625 15.0005L203.004 13.0005" stroke="#F8FAFC" strokeDasharray="2 2" />
                                            <circle cx="101.004" cy="14.0005" r="14" fill="#0030AB" />
                                            <path d="M99.2539 9.62549L103.629 14.0005L99.2539 18.3755" stroke="#F8FAFC" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="max-w-[200px] text-center">
                                    <h3 className="text-[22px]/[26px] font-extrabold mb-2">Ship product</h3>
                                    <p className="leading-6">
                                        A dedicated account manager will contact you to confirm shipping information.
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <ul>
                            <li className="relative flex flex-col justify-center items-center gap-y-4">
                                <div className="flex justify-center items-center w-[105px] h-[105px] rounded-full bg-shadowColor">
                                    <div className=" flex justify-center items-center w-[89px] h-[89px] rounded-full
                                    bg-mainActions">
                                        <span className="text-[41px]/[26px] font-extrabold">4</span>
                                    </div>
                                </div>
                                <div className="max-w-[200px] text-center">
                                    <h3 className="text-[22px]/[26px] font-extrabold mb-2">Get Content</h3>
                                    <p className="leading-6">
                                        In 7–10 business days, all the information you want will be emailed to your mailbox.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div >

                </div >
            </section >

            {/* SIXTH SECTION */}

            <div className="max-w-screen-xl mx-auto px-5 mt-20 md:mt-32 ">
                <section>
                    <h2 className="text-[56px] font-medium text-center">{data?.successStories.storySectionTitle}</h2>
                    <div className="flex justify-center items-center flex-col w-full mt-16 rounded-xl text-storiesColor bg-headerColor md:flex-row lg:items-start">
                        <Image src={data?.successStories.storyPhoto} alt="ricarda" className="object-cover rounded-xl md:w-2/5 md:h-[500px] md:rounded-r-[0px]" />
                        <div className="w-full text-center py-7 md:p-7 md:w-3/5 md:text-left">
                            <h3 className="mb-2 text-[32px] font-medium text-mainTextColor">{data?.successStories.storyName}</h3>
                            <h4>{data?.successStories.storyRole}</h4>
                            {data?.successStories.storyText.map(story => {
                                return (
                                    <p key={story.id} className="my-6">
                                        {story.text}
                                    </p>
                                )
                            })}
                            <div className="flex justify-center items-center gap-x-2 md:justify-start">
                                <Image src={data?.successStories.storyYellowStar} alt="star" />
                                <span>
                                    <span>{data?.successStories.storyStars}</span> stars from <span>{data?.successStories.storyReviews}</span> reviews
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}