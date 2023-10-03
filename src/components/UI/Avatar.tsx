'use client'

import { Menu } from "@headlessui/react"

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

export default function Avatar() {
    return (
        <div>
            <Menu.Button className="relative flex max-w-xs items-center rounded-full text-sm hover:bg-actions focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-buttons">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
            </Menu.Button>
        </div>
    )
}