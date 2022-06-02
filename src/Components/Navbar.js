import React, { useState } from 'react'
import { Link } from 'react-scroll';
import { AttentionSeeker } from 'react-awesome-reveal'
function Navbar() {
  const [Nav, setNav] = useState(false)
  return (
    <div className=' flex justify-between overflow-hidden h-18 z-10 items-center fixed w-full flex-row '>
      <h1 className='logo text-[36px] text-[#EC0B0B] ml-12 mt-2'>Vi</h1>
      <div className='mr-12 mt-2 flex jb items-center  list-none text-[#EC0B0B] '>
        <Link smooth={true} to='About'  >
          <li className='m-6  text-[19px] cursor-pointer hidden md:block font-bold '>About</li>
        </Link>
        <Link smooth={true} to='Skills'>
          <li className='m-6  text-[19px] cursor-pointer hidden md:block font-bold '>Skills</li>
        </Link>
        <Link smooth={true} to='Portfolio'>
          <li className='m-6  text-[19px] cursor-pointer hidden md:block font-bold '>Portfolio</li>
        </Link>
        <Link smooth={true} to='Contact'>
          <li className='m-6  text-[19px] cursor-pointer hidden md:block font-bold '>Contact</li>
        </Link>
        <li className='mr-6 text-[19px] cursor-pointer hidden md:block  text-[white] active:bg-orange-800 w-40 p-1 rounded text-center bg-[#EC0B0B]  '><button>Resume</button></li>
      </div>
      <div onClick={() => setNav(true)} className='mr-6 md:hidden cursor-pointer relative'>
        <div className='w-6 h-0.5 bg-[#EC0B0B] m-1 '></div>
        <div className='w-6 h-0.5 bg-[#EC0B0B] m-1'></div>
        <div className='w-6 h-0.5 bg-[#EC0B0B] m-1 '></div>
      </div>
      <div className={Nav ? 'list-none  transition-all text-5xl fixed bg-black z-50 top-0 right-0 left-0 bottom-0 flex items-center justify-center flex-col' : ' hidden'}>
        <Link smooth={true} to='About'  >
          <li onClick={()=>setNav(false)} className='m-3 p-4 cursor-pointer text-white transition-all NavMenus font-itelic hover:text-[#EC0B0B]'>About</li>
        </Link>
        <Link smooth={true} to='Skills'>
          <li onClick={()=>setNav(false)} className='m-3 p-4 cursor-pointer text-white transition-all NavMenus font-itelic hover:text-[#EC0B0B]'>Skills</li>

        </Link>
        <Link smooth={true} to='Portfolio'>
          <li onClick={()=>setNav(false)} className='m-3 p-4 cursor-pointer text-white transition-all NavMenus font-itelic hover:text-[#EC0B0B]'>Portfolio</li>
        </Link>
        <Link smooth={true} to='Contact'>
          <li onClick={()=>setNav(false)} className='m-3 p-4 cursor-pointer text-white transition-all NavMenus font-itelic hover:text-[#EC0B0B]'>Contact</li>
        </Link>

        
        <AttentionSeeker><p onClick={() => setNav(false)} className='absolute right-3 cursor-pointer hover:shadow-white w-20 top-3'>❌</p></AttentionSeeker>
      </div>
    </div>
  )
}

export default Navbar