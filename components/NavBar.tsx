"use client"

import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { topNavItems } from '@/utils/Nav'
import { usePathname, useRouter } from 'next/navigation'




const NavBar = () => {

    const [menuOpened, setMenuOpened] = useState(false)
    const pathName = usePathname()
    const router = useRouter()


  return (
    <header className='relative'>
      <nav className='flex items-center justify-between px-4 py-2'>
          <h1 className='text-2xl font-bold'>Logger</h1>
          <BiMenu className='text-2xl cursor-pointer'
                  onClick={
                    () => {
                      setMenuOpened(true)
                    }
                  }
          
          />
      </nav>

      <div className={`
        absolute right-0 top-0 w-screen h-screen flex items-center justify-center bg-primary transition-all duration-300 ease-out z-100
        ${!menuOpened ? "translate-x-[100%]" : "translate-x-0"}
        `}>

          <div className='flex flex-col justify-between'>
            <div className='flex flex-col gap-y-2'>
              {
                topNavItems.map((it) => (
                  <div key={String(it.label)}
                    onClick={
                      () => {
                        router.push(String(it.path))
                        setMenuOpened(false)
                      }
                    }
                    className={`text-lg cursor-pointer text-white text-center ${pathName === it.path && "font-bold"}`}>
                    {it.label}
                  </div>
                ))
              }
            </div>
            
            <button className='text-primary font-bold mt-8
                             bg-white py-1 px-3 rounded-full'
                             
                    onClick={
                      () => {
                        setMenuOpened(false)
                      }
                    } >
              Close Menu
            </button>
          </div>
      </div>

    </header>
  )
}

export default NavBar