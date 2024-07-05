"use client"

import React from 'react'
import { navItems } from '@/utils/Nav'
import BottomNavItem from './BottomNavItem'




const BottomAppBar = () => {
  return (
    <div className='fixed bottom-0 w-full border-t-[1px] border-primary z-10'>
        <ul className='flex items-center justify-around px-4 py-1'>
            {
                navItems.map((it,index) => (
                    <BottomNavItem 
                        icon={it.icon} 
                        label={it.label} 
                        path={it.path} 
                        key={index}/>
                ))
            }
        </ul>
    </div>
  )
}

export default BottomAppBar