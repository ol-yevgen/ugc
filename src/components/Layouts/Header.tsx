'use client'

import MobileNavigation from '../Navigation/MobileNavigation'

import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import UserMenu from '../Navigation/UserMenu'
import Navigation from '../Navigation/NavigationHomePage';
import Link from 'next/link'

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

function classNames(...classes: any[] ) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    return (
        <>
            <header className="min-h-full">
                <Disclosure as="div" className="bg-headerColor shadow-m">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-7xl px-5 xl:px-0 ">
                                <div className="flex h-[70px] items-center justify-between">
                                    <nav className="flex items-center">
                                        <Link href='/'>
                                            <span className='customTextGradient text-2xl font-semibold'>UGChub</span>
                                        </Link>
                                        <Navigation
                                            navigation={navigation}
                                        />
                                    </nav>

                                    <div>
                                        <Navigation
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
                                        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-full  p-2 text-mainText hover:bg-actionsHove focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-actionsHover">
                                            <span className="absolute -inset-0.5" />
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>

                            <MobileNavigation
                                navigation={navigation}
                            />
                        </>
                    )}
                </Disclosure>
            </header>
        </>
    )
}
