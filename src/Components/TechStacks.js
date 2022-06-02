import React from 'react'

function TechStacks() {
  return (
    <div id='Skills' className=' h-screen flex flex-col xl:flex-row items-center justify-center text-center bg-[#0B0B15]'>
      <div className='mt-40 flex items-center justify-center flex-col md:ml-0 xl:ml-20 text-center'>
        <h1 className=' text-[40px] md:mb-0 xl:text-[60px] logo text-center  items-center text-[#EC0B0B]'>Tech Stacks</h1>
        <img src="/images/Online world-amico.png" className='w-96  hidden xl:block' alt="" />
      </div>
      <div className='flex  w-full mb-40 md:mb-0 h-full flex-col items-center justify-center '>

      <div className='core w-1/2  p-3 m-2 '>
        <h1 className='logo text-[#EC0B0B] text-2xl'>Core</h1>
        <div className='flex flex-row p-3 items-center justify-center'>
          <img className='w-20 bg-white m-2 p-1 rounded shadow-inner ' src="/techicons/html5.png" alt="" />
          <img className='w-20 bg-white m-2 p-1 rounded shadow-inner ' src="/techicons/css3.png" alt="" />
          <img className='w-20 bg-white m-2 p-1 rounded shadow-inner ' src="/techicons/javascript.png" alt="" />
        </div>
      </div>
      <div className='Libraries w-1/2 h-1/3 flex items-center flex-col justify-center  p-3 m-2  '>
         <h1 className='logo text-[#EC0B0B] text-center  text-2xl'>Libraries / Technologies</h1>
         <div className='flex flex-row flex-wrap w-80  h-1/2 p-3 items-center justify-center'>
          <img className='w-20 bg-white m-2 p-1 rounded shadow-inner ' src="/techicons/react-js.png" alt="" />
          <img className='w-20 bg-white m-2 p-1 rounded shadow-inner ' src="/techicons/redux.png" alt="" />
          <img className='w-20 bg-white m-2 p-1 rounded shadow-inner ' src="/techicons/tailwind-css.png" alt="" />
          <img className='w-20 bg-white m-2 p-1 rounded shadow-inner ' src="/techicons/git.png" alt="" />
          <img className='w-20 bg-white m-2 p-1 rounded shadow-inner ' src="/techicons/github.png" alt="" />
          <img className='w-20 bg-white m-2 p-1 rounded shadow-inner ' src="/techicons/npm.png" alt="" />

        </div>
      </div>
      </div>
    </div>
  )
}

export default TechStacks