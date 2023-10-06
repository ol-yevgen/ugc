'use client'

import Link from 'next/link'

type TButtonProps = {
    path: string,
    current: boolean,
    label: string,
    // bgColor: string,
    // textColor: string,
    // hoverColor: string
}

export default function Button({ path, current, label }: TButtonProps) {
    function classNames(...classes: any[]) {
        return classes.filter(Boolean).join(' ')
    }

    const modeLabel = (
        label === 'Become a Seller'
        || label === 'Seller Mode'
        || label === 'Buyer Mode'
    )

    const toggleModeButton = modeLabel ? `text-mainActions bg-hoverColor hover:bg-actions` : `text-mainText hover:bg-hoverColor`

    return (
        <Link
        href={path}
        className={classNames(
            current ? `bg-mainActions text-headerColor` : toggleModeButton,
            'rounded-full px-6 py-3 text-sm font-medium transition-colors text-center cursor-pointer'
        )}
        aria-current={'page'}
        >
            {label}
        </Link>
    )
}