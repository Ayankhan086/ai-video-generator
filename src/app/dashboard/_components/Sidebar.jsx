'use client'
import { CircleUser, FileVideo, FileVideoIcon, PanelsTopLeft, ShieldPlusIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {

    const MenuOptions = [
        {
            id: 1,
            name: "Dashboard",
            path: '/dashboard',
            icon: PanelsTopLeft
        },
        {
            id: 2,
            name: "Create New",
            path: '/dashboard/create-new',
            icon: FileVideo
        },
        {
            id: 3,
            name: "Upgrade",
            path: '/upgrade',
            icon: ShieldPlusIcon
        },
        {
            id: 4,
            name: "Account",
            path: '/account',
            icon: CircleUser
        },

    ]

    const path = usePathname();

    return (
        <div className='w-64 h-screen shadow-md p-3'>
            <div className='grid gap-3'>
                {MenuOptions.map((option, index) => (
                    <Link href={option.path}
                        key={index}
                        className={path === option.path ? 'bg-primary text-white rounded-md ' : ''}
                    >
                        <div className='flex items-center gap-3  p-3 hover:bg-primary hover:text-white rounded-md cursor-pointer' >
                            <option.icon className='w-5 h-5' />
                            <span>{option.name}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Sidebar