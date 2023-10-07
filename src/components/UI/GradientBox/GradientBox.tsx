import { BaseLayoutProps } from '@/types/types'
import Image from 'next/image'
import boxDecor from '../../../../public/images/homePage/decor.png'

interface IGradientBoxProps extends BaseLayoutProps {
    decor: boolean
}

export default function GradientBox({ decor, children }: IGradientBoxProps) {
    return (
        <section className="relative -z-2 w-full rounded-lg mt-10 px-10 py-10 md:py-14 text-headerColor bg-gradient-to-r from-gradientMainFirst to-gradientMainSecond md:px-20 ">
            {children}
            <Image
                src={boxDecor}
                alt='decor'
                className="absolute right-0 bottom-0 -z-1"
            />
        </section >
    )
}