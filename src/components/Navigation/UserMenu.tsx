'use client'

import { Menu, Transition } from "@headlessui/react"
import { Fragment } from "react"
import Avatar from '../UI/Avatar/Avatar'

type TUserMenuProp = {
    classNames: (...classes: any[]) => string,
}

const userNavigation = [
    { label: 'Your Profile', href: '#' },
    { label: 'Settings', href: '#' },
    { label: 'Sign out', href: '#' },
]

export default function UserMenu({ classNames }: TUserMenuProp) {
    return (
        <Menu as="div" className="relative ml-3">
            <Avatar/>
            < Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {userNavigation.map((item) => (
                        <Menu.Item key={item.label}>
                            {({ active }) => (
                                <a
                                    href={item.href}
                                    className={classNames(
                                        active ? 'bg-actionsHover' : '',
                                        'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                >
                                    {item.label}
                                </a>
                            )}
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </ Transition >

        </Menu>

    )
}