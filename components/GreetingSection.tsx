import React from 'react'

interface Props{
    name: String
}



const GreetingSection = (props: Props) => {
  return (
    <section className='w-screen py-2'>
        <h2 className='text-lg'>Welcome back, {props.name}</h2>

        <h4 className='font-bold text-xl my-2'>Take log of your daily activities</h4>
       
        <form action="" className='flex items-center justify-center mt-3'>
            <input type="text" name='query' 
                    id='query' 
                    placeholder='Search for logs'
                    className='w-3/4 px-3 py-2.5 shadow-md rounded-xl'
                    
                    />
        </form>
    
    </section>
  )
}


export default GreetingSection