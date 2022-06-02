import React from 'react'
import { Link} from 'react-scroll'

function Hero() {
  return (
    <div id='home' className='h-screen snap-start flex flex-col xl:flex-row items-center justify-start overflow-hidden bg-[#0B0B15]'>
        <img src="/images/Programming-amico.png" className='w-56 mt-20 xl:w-96 xl:ml-40' alt="" />
        <div className='text-white flex items-center flex-col xl:block  xl:ml-20 '>
            <p className='text-[25px] heroText ' >my name is <span className='text-[#EC0B0B]'>Vikas</span> i am a </p>
            <h1 className='text-[40px] my-10 md:text-[80px] heroHeader text-[#EC0B0B]'>Web Developer</h1>
            <h2 className=' heroText text-[20px] xl:text-[25px]'>Living In <span className='text-[#EC0B0B]'>Chandigarh</span>,  India </h2>
            <Link smooth={true} to={'Portfolio'}> <button className='bg-[#EC0B0B] mt-40 md:mt-10 animate-bounce md:animate-none w-40 my-6 h-10  outline-white rounded transition hover:outline'>Projects</button></Link>
        </div>

    </div>
  )
}

export default Hero