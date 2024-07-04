import { Log } from '@/data/fakeLogs'
import React from 'react'
import LogCard from './LogCard'
import { fakeLogs } from '@/data/fakeLogs'


const LogSection = () => {
  return (
    <section className='px-3 '>

        <h2 className='font-bold text-[18px] mb-3'>Here are your <span className='text-primary '>Logs</span></h2>
        <ul className='flex flex-col gap-3'>
            {
                fakeLogs.map((it,index) => (
                    <LogCard key={index} logDate={it.logDate} logText={it.logText} id={it.id} />
                ))
            }
        </ul>
    </section>
  ) 
}

export default LogSection
