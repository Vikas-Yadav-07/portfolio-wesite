import React from 'react'

function Hero() {
  return (
    <div className='h-screen flex flex-row items-center justify-start overflow-hidden bg-[#0B0B15]'>
        <img src="/images/Programming-amico.png" className='w-96 ml-40' alt="" />
        <div className='text-white ml-20 '>
            <p className='text-[25px] heroText ' >my name is <span className='text-[#EC0B0B]'>Vikas</span> i am a </p>
            <h1 className='text-[80px] heroHeader text-[#EC0B0B]'>React Js Developer</h1>
            <h2 className=' heroText text-[25px]'>Based In <span className='text-[#EC0B0B]'>Chandigarh</span>,  India </h2>
            <button className='bg-[#EC0B0B] w-40 my-6 h-10  outline-white rounded transition hover:outline'>Projects</button>
        </div>

    </div>
  )
}

export default Hero