"use client"

import { Log } from '@/data/fakeLogs'
import React from 'react'
import { BiEdit } from 'react-icons/bi'
import { createDateInfo } from '@/utils/LogUtils'
import { useRouter } from 'next/navigation'


const LogCard = (log: Log) => {
    const { dateString } = createDateInfo(log.logDate)
    const router = useRouter()


    const handleNav = () => {
        router.push(`/logs/log-detail/${log.id}`)
    }

  return (
    <div className='w-full h-[150px] shadow-md rounded-xl bg-white py-3 px-3.5 
                    flex flex-col justify-between'>
        <p className='font-semibold'>{log.logText}</p>

        <div className='flex justify-between items-center'>
            <div className='flex items-center'>
                <p className='font-semibold text-zinc-600'>{dateString.toString()}</p>
            </div>

            <div onClick={handleNav} 
                className='p-2 rounded-full bg-primary cursor-pointer'>
                <BiEdit className='text-white' />
            </div>
        </div>
    </div>
  )
}

export default LogCard