import React from 'react'

function TechStacks() {
  return (
    <div  className=' h-screen flex flex-col xl:flex-row items-center justify-center text-center bg-[#0B0B15]'>
        <div className='mr-48 flex items-center justify-center flex-col mx-48'>
            <h1 className=' text-[40px] mb-20 md:mb-0 xl:text-[80px] heroHeader text-center  items-center text-[#EC0B0B]'>Tech Stacks</h1>
            <img src="/images/Online world-amico.png" className='w-96 hidden md:block' alt="" />
        </div>
        <div className='flex flex-wrap w-80 md:w-96 items-center justify-center' >
            <img className='w-11 xl:w-24 shadow-2xl animate-bounce translate-x-1 p-1 xl:p-4 bg-slate-100 cursor-pointer relative  hover:bg-slate-900  transition m-2 md:m-4 rounded-md 'src="/techicons/html5.png" alt="" />
            <img className='w-11 xl:w-24 shadow-2xl animate-bounce translate-x-1 p-1 xl:p-4 bg-slate-100 cursor-pointer relative  hover:bg-slate-900  transition m-2 md:m-4 rounded-md 'src="/techicons/css3.png" alt="" />
            <img className='w-11 xl:w-24 shadow-2xl animate-bounce translate-x-1 p-1 xl:p-4 bg-slate-100 cursor-pointer relative  hover:bg-slate-900  transition m-2 md:m-4 rounded-md 'src="/techicons/javascript.png" alt="" />
            <img className='w-11 xl:w-24 shadow-2xl animate-bounce translate-x-1 p-1 xl:p-4 bg-slate-100 cursor-pointer relative  hover:bg-slate-900  transition m-2 md:m-4 rounded-md 'src="/techicons/npm.png" alt="" />
            <img className='w-11 xl:w-24 shadow-2xl animate-bounce translate-x-1 p-1 xl:p-4 bg-slate-100 cursor-pointer relative  hover:bg-slate-900  transition m-2 md:m-4 rounded-md 'src="/techicons/react-js.png" alt="" />
            <img className='w-11 xl:w-24 shadow-2xl animate-bounce translate-x-1 p-1 xl:p-4 bg-slate-100 cursor-pointer relative  hover:bg-slate-900  transition m-2 md:m-4 rounded-md 'src="/techicons/redux.png" alt="" />
            <img className='w-11 xl:w-24 shadow-2xl animate-bounce translate-x-1 p-1 xl:p-4 bg-slate-100 cursor-pointer relative  hover:bg-slate-900  transition m-2 md:m-4 rounded-md 'src="/techicons/git.png" alt="" />
            <img className='w-11 xl:w-24 shadow-2xl animate-bounce translate-x-1 p-1 xl:p-4 bg-slate-100 cursor-pointer relative  hover:bg-slate-900  transition m-2 md:m-4 rounded-md 'src="/techicons/github.png" alt="" />
            <img className='w-11 xl:w-24 shadow-2xl animate-bounce translate-x-1 p-1 xl:p-4 bg-slate-100 cursor-pointer relative  hover:bg-slate-900  transition m-2 md:m-4 rounded-md 'src="/techicons/tailwind-css.png" alt="" />
            <img className='w-11 xl:w-24 shadow-2xl animate-bounce translate-x-1 p-1 xl:p-4 bg-slate-100 cursor-pointer relative  hover:bg-slate-900  transition m-2 md:m-4 rounded-md 'src="/techicons/python.png" alt="" />
   
        </div>
         
    </div>
  )
}

export default TechStacks