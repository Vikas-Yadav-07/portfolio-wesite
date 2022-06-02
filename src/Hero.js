import React from 'react'

function Hero() {
  return (
    <div className='h-screen flex flex-col xl:flex-row items-center justify-start overflow-hidden bg-[#0B0B15]'>
        <img src="/images/Programming-amico.png" className='w-56 mt-20 xl:w-96 xl:ml-40' alt="" />
        <div className='text-white flex items-center flex-col xl:block  xl:ml-20 '>
            <p className='text-[25px] heroText ' >my name is <span className='text-[#EC0B0B]'>Vikas</span> i am a </p>
            <h1 className='text-[40px] my-10 md:text-[80px] heroHeader text-[#EC0B0B]'>React Js Developer</h1>
            <h2 className=' heroText text-[20px] xl:text-[25px]'>Based In <span className='text-[#EC0B0B]'>Chandigarh</span>,  India </h2>
            <button className='bg-[#EC0B0B] mt-40 md:mt-10 animate-bounce md:animate-none w-40 my-6 h-10  outline-white rounded transition hover:outline'>Projects</button>
        </div>

    </div>
  )
}

export default Hero