import { BaseLayoutProps } from '@/types/types'
import Image from 'next/image'
import boxDecor from '../../../public/images/homePage/decor.png'

interface IGradientBoxProps extends BaseLayoutProps {
    decor: boolean
}

export default function GradientBox({ decor, children }: IGradientBoxProps) {
    return (
        <section className='customGradient relative rounded-[10px]'>
            {children}
            <Image
                src={boxDecor}
                alt='decor'
                className='absolute bottom-0 right-0 h-full -z-4 '
            />
        </section >
    )
}