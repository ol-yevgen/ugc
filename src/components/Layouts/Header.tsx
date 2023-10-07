'use client'

import MobileNavigation from '../Navigation/MobileMenu'
import { MobileMenu, NavigationHomePage } from '@/components/index'

import { Disclosure } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import UserMenu from '../Navigation/UserMenu'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

export type TUserNavigation = {
    label: string,
    href: string
}

const navigation = [
    { label: 'Post Content', href: '/', current: true },
    { label: 'Browse Services', href: '/services', current: false },
    { label: 'How it Works', href: '/how', current: false },
]

const authLinks = [
    { label: 'Sign Up', href: '/signup', current: false },
    { label: 'Sign In', href: '/signin', current: false },
    { label: 'Become a Seller', href: '/start_selling', current: false },
]

const userNavigation = [
    { label: 'Your Profile', href: '#' },
    { label: 'Settings', href: '#' },
    { label: 'Sign out', href: '#' },
]

export default function Header() {
    const [burgerMenu, setBurgerMenu] = useState(false)

    const openCloseMenu = useCallback(() => {
        setBurgerMenu(!burgerMenu)
    }, [burgerMenu])

    useEffect(() => {
        const bodyScrollToggle = document.querySelector('html') as HTMLHtmlElement
        if (burgerMenu) {
            bodyScrollToggle.classList.add('scrollOff')
        }

        return () => bodyScrollToggle.classList.remove('scrollOff')
    }, [burgerMenu])

    return (
        <>
            <header className="min-h-full relative z-100">
                <Disclosure as="div" className="bg-headerColor shadow-m">
                    <div className="mx-auto max-w-7xl  xl:px-0 ">
                        <div className="flex items-center justify-between h-[70px] px-5">
                            <nav className="flex items-center">
                                <Link href='/'>
                                    <span className='customTextGradient text-2xl font-semibold'>UGChub</span>
                                </Link>
                                <NavigationHomePage
                                    navigation={navigation}
                                />
                            </nav>

                            <div>
                                <NavigationHomePage
                                    navigation={authLinks}
                                />
                            </div>

                            {/* <div className="hidden md:block">
                                        <div className="ml-4 flex items-center md:ml-6">
                                            <button
                                                type="button"
                                                className="relative rounded-full  p-1 text-mainText hover:bg-actionsHover  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-white"
                                            >
                                                <span className="absolute -inset-1.5" />
                                                <span className="sr-only">View notifications</span>
                                                <BellIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>

                                            <UserMenu
                                                classNames={classNames}
                                            />
                                        </div>
                                    </div> */}
                            <div className="-mr-2 flex xl:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-full  p-2 text-mainText hover:bg-actionsHove focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-actionsHover"
                                    onClick={() => openCloseMenu()}
                                >
                                    <span className="absolute -inset-0.5" />
                                    {burgerMenu ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    {burgerMenu
                        ? <MobileMenu
                            authLinks={authLinks}
                            navigation={navigation}
                            toggleMenu={openCloseMenu}
                        />
                        : null
                    }
                </Disclosure>
            </header>
        </>
    )
}
