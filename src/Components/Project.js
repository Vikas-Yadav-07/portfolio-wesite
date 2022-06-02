import React from 'react'

function Project() {
  return (
    <div className='h-screen flex items-center justify-center flex-col sm:flex-row   bg-[#0B0B15]'>
      
        <img src="/Projects image/PixelMovies.gif" className='w-3/4 sm:w-1/2 sm:p-4' alt="" />
        <div className='text-white flex justify-center flex-col items-center mt-10 sm:ml-4 sm:mt-0 xl:ml-20'>
          <h1 className='text-5xl text-[#EC0B0B] sm:text-2xl text-center'>Pixel Movies </h1>
          <p className='text-center w-96 p-2 mt-4 sm:p-1' >Pixel Movie fetches the TMDB Movie Database Api And Shows information About trending 
            Movies and Tv Shows !
          </p>
          <ul className='flex flex-row w-'>
            <li className='m-2 sm:m-1 text-sm bg-gray-900 p-1 md:p-2  flex-wrap'>React</li>
            <li className='m-2 sm:m-1 text-sm bg-gray-900 p-1 md:p-2  flex-wrap'>TMDB API</li>
            <li className='m-2 sm:m-1 text-sm bg-gray-900 p-1 md:p-2  flex-wrap'>React Router Dom </li>
            <li className='m-2 sm:m-1 text-sm bg-gray-900 p-1 md:p-2  flex-wrap'>Axios</li>
          </ul>
          <p></p>
          <div className='mt-10'>
            <button className='bg-[#EC0B0B] m-2 w-32 h-10 rounded-md hover:bg-orange-600 '>Github</button>
            <button className='bg-[#EC0B0B] m-2 w-32 h-10 rounded-md hover:bg-orange-600 '>Visit Site</button>
          </div>
        </div>
    </div>
  )
}

export default Project