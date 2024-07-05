"use client"

import React from 'react'
import { NavItem } from '@/utils/Nav'
import { usePathname, useRouter } from 'next/navigation'



const BottomNavItem = (navItem: NavItem) => {

    const router = useRouter()
    const pathName = usePathname()

    const isActive = pathName === navItem.path

    const navHandler = () => {
        router.push(String(navItem.path))
    }


    return(
        <li className='flex flex-col items-center justify-center cursor-pointer'
            onClick={navHandler}
        >
            <navItem.icon className={`text-2xl ${isActive && "text-primary"}`}/>
           <div className={`size-[6px] transform -translate-x-1 animate-bounce bg-primary rounded-full mt-[5px] ${!isActive && "hidden"}`}/>
        </li>
    )

}


export default BottomNavItem