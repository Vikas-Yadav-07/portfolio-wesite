import React from 'react'

function Navbar() {
  return (
    <div className=' flex justify-between overflow-hidden h-18  items-center fixed w-full flex-row '>
      <h1 className='logo text-[36px] text-[#EC0B0B] ml-12 mt-2'>Vi</h1>
      <div className='mr-12 mt-2 flex jb items-center  list-none text-[#EC0B0B] '>
        <li className='m-6  text-[19px] cursor-pointer hidden md:block font-bold '>About</li>
        <li className='m-6  text-[19px] cursor-pointer hidden md:block font-bold '>Skills</li>
        <li className='m-6  text-[19px] cursor-pointer hidden md:block font-bold '>Portfolio</li>
        <li className='m-6  text-[19px] cursor-pointer hidden md:block font-bold '>Contact</li>
        <li className='mr-6 text-[19px] cursor-pointer hidden md:block  text-[white] active:bg-orange-800 w-40 p-1 rounded text-center bg-[#EC0B0B]  '><button>Resume</button></li>
      </div>
      <div className='mr-6 md:hidden cursor-pointer relative'>
        <div className='w-6 h-0.5 bg-black m-1 '></div>
        <div className='w-6 h-0.5 bg-black m-1'></div>
        <div className='w-6 h-0.5 bg-black m-1 '></div>
      </div>
      <div className='list-none hidden text-5xl absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center flex-col'>
        <li className='m-3 p-4 cursor-pointer text-white transition-all NavMenus font-itelic hover:text-[#EC0B0B]'>About</li>
        <li className='m-3 p-4 cursor-pointer text-white transition-all NavMenus font-itelic hover:text-[#EC0B0B]'>Skills</li>
        <li className='m-3 p-4 cursor-pointer text-white transition-all NavMenus font-itelic hover:text-[#EC0B0B]'>Portfolio</li>
        <li className='m-3 p-4 cursor-pointer text-white transition-all NavMenus font-itelic hover:text-[#EC0B0B]'>Contact</li>
      </div>
    </div>
  )
}

export default Navbar