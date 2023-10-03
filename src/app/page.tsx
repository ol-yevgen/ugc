'use client'

import { BASE_API } from '@/helpers/constants'
import { IHeroPageReq } from '@/types/heroPageReq'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import GradientBox from '@/components/UI/GradientBox'
import Button from '@/components/UI/Button'
import Image from 'next/image'
import styles from './homePage.module.scss'

export default function Home() {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['homePage'],
        queryFn: async () => {
            const { data } = await axios.get(`${BASE_API}/homePage`)
            return data as IHeroPageReq
        }
    })

    const originalTitle = data?.hero.heroSectionTitle as string
    // const indexOfFirstPeriod = data?.hero.heroSectionTitle.indexOf(".") as number
    // const newTitle = data?.hero.heroSectionTitle.substring(0, indexOfFirstPeriod + 1) + '&nbsp' + data?.hero.heroSectionTitle.substring(indexOfFirstPeriod + 1);

    if (isLoading) return <h1>Loading...</h1>

    if (isError) return <h1>Some ERROR</h1>

    return (
        <>
            <GradientBox decor={true}>
                <div className={styles.hero}>
                    <div>
                        <h1 className={styles.heroTitle}>{originalTitle}</h1>
                        <div>
                            <Button
                                path='/services'
                                current={true}
                                label={data?.hero.heroButtonTitle}
                                bgColor='actions'
                                textColor='headerColor'
                                hoverColor='actionsHover'
                            />
                            <div className={styles.heroCountInfo}>
                                {data?.hero.heroCountsInfo.map(info => {
                                    return (
                                        <div
                                            key={info.id}
                                            className={styles.heroCount}
                                        >
                                            <Image src={info.icon} alt={info.count} />
                                            <span className={styles.heroIcon}>{info.count}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className={styles.heroPhoto}>
                        <Image
                            width={440}
                            height={540}
                            src={data.hero.heroImage}
                            alt='photo'
                            className='w-full h-full'
                        />
                    </div>
                </div>
            </GradientBox>

        </>
    )
}
