'use client'
import { Disclosure } from '@headlessui/react';
import { TNavigation, TNavigationProps } from './NavigationHomePage';
import { NavigationHomePage, Button } from '@/components/index'
import { usePathname } from 'next/navigation';

interface IMobileNavigation extends TNavigationProps {
    authLinks: TNavigation[],
    toggleMenu: () => void
}

export default function MobileMenu({ navigation, authLinks, toggleMenu }: IMobileNavigation) {
    const pathname = usePathname()

    return (

        <aside className="absolute z-100 overflow-hidden w-full min-h-screen bg-burgerBgColor animate-fadeIn xl:hidden"
            onClick={toggleMenu}
        >

            <div className=" w-3/5 md:w-2/5 py-10 md:p-10 min-h-screen bg-headerColor animate-fadeIn xl:hidden">
                <ul className="flex flex-col justify-center items-center space-x-1 ">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href
                        return (

                            <li key={item.label}
                                className='space-y-1 px-2 pb-3 pt-2 my-3 sm:px-3 '
                            >
                                <Button
                                    path={item.href}
                                    current={isActive}
                                    label={item.label}
                                />
                            </li>
                        )
                    }

                    )}
                </ul>

                <span className='block w-full h-px bg-actionsHover'></span>

                <ul className="flex flex-col items-center space-x-1 ">
                    {authLinks.map((item) => {
                        const isActive = pathname === item.href
                        return (

                            <li key={item.label}
                                className='space-y-1 px-2 pb-3 pt-2 my-3 sm:px-3 '
                            >
                                <Button
                                    path={item.href}
                                    current={isActive}
                                    label={item.label}
                                />
                            </li>
                        )
                    }

                    )}
                </ul>
            </div>
            {/* <div className="border-t border-gray-700 pb-3 pt-4">
                <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                        <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                        <div className="text-base font-medium leading-none text-white">{user.name}</div>
                        <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                    </div>
                    <button
                        type="button"
                        className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                        <Disclosure.Button
                            key={item.label}
                            as="a"
                            href={item.href}
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                        >
                            {item.label}
                        </Disclosure.Button>
                    ))}
                </div>
            </div> */}
        </aside>
    )
}