'use client'

import Link from 'next/link'

type TButtonProps = {
    path: string,
    current: boolean,
    label: string,
    bgColor: string,
    textColor: string,
    hoverColor: string
}

export default function Button({ path, current, label, bgColor, textColor, hoverColor }: TButtonProps) {
    function classNames(...classes: any[]) {
        return classes.filter(Boolean).join(' ')
    }

    const modeLabel = (
        label === 'Become a Seller'
        || label === 'Seller Mode'
        || label === 'Buyer Mode'
    )

    const toggleModeButton = modeLabel ? `text-actions bg-headerColor hover:text-white hover:bg-actions` : `text-mainText hover:bg-${hoverColor}`

    return (
        <Link
            href={path}
            className={classNames(
                current ? `bg-${bgColor} text-${textColor}` : toggleModeButton,
                'rounded-full px-6 py-3 text-sm font-medium transition-colors'
            )}
            aria-current={'page'}
        >
            {label}
        </Link>
    )
}