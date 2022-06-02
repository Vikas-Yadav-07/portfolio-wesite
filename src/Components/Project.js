import React from 'react'

function Project() {
  return (
    <div className='h-screen flex items-center justify-center flex-col  bg-[#0B0B15]'>
        <img src="/Projects image/PixelMovies.gif" className='w-3/4' alt="" />
        <div className='text-white flex justify-center flex-col items-center mt-10'>
          <h1 className='text-5xl text-[#EC0B0B]  text-center'>Pixel Movies </h1>
          <p className='text-center w-96 mt-4' >Pixel Movie fetches the TMDB Movie Database Api And Shows information About trending 
            Movies and Tv Shows !
          </p>
          <div className='mt-10'>
            <button className='bg-[#EC0B0B] m-2 w-32 h-10 rounded-md hover:bg-orange-600 '>Github</button>
            <button className='bg-[#EC0B0B] m-2 w-32 h-10 rounded-md hover:bg-orange-600 '>Visit Site</button>
          </div>
        </div>
    </div>
  )
}

export default Project