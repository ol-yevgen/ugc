'use client'

import { usePathname } from 'next/navigation'
import Button from '../UI/Button'

type TNavigation = {
    label: string,
    href: string,
    current: boolean
}

export type TNavigationProps = {
    navigation: TNavigation[],
}

export default function Navigation(props: TNavigationProps) {
    const { navigation } = props
    const pathname = usePathname()

    return (
        <div className="hidden xl:block">
            <div className="ml-10 flex items-baseline space-x-1">
                {navigation.map((item) => {
                    const isActive = pathname === item.href
                    return (
                        <Button
                            key={item.label}
                            path={item.href}
                            current={isActive}
                            label={item.label}
                            bgColor='actions'
                            textColor='white'
                            hoverColor='actionsHover'
                        />
                    )
                }
                    
                )}
            </div>
        </div>
    )
}