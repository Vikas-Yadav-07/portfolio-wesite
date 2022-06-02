import React from 'react'

function Project(props) {
  const { title , discription ,tech ,link , github , img } = props
  return (
    <div className='h-screen flex items-center justify-center flex-col sm:flex-row   bg-[#0B0B15]'>
      
        <img src={img} className='w-3/4 sm:w-1/2 sm:p-4' alt="" />
        <div className='text-white flex justify-center flex-col items-center mt-10 sm:ml-4 sm:mt-0 xl:ml-20'>
          <h1 className='text-5xl text-[#EC0B0B] sm:text-2xl text-center'>{title} </h1>
          <p className='text-center w-96 p-2 mt-4 sm:p-1' >{discription}
          </p>
          <ul className='flex flex-row flex-wrap item-center'>
            {
              tech.map(item =>  <li className='m-2 sm:m-1 text-sm bg-gray-900 p-1 md:p-2  flex-wrap'>{item}</li>)
            }
           
           
          </ul>
          <p></p>
          <div className='mt-10'>
          <a href={github} target={'_black'} >  <button className='bg-[#EC0B0B] m-2 w-32 h-10 rounded-md hover:bg-orange-600 '>Github</button> </a>
          <a href={link} target={'_black'}>  <button className='bg-[#EC0B0B] m-2 w-32 h-10 rounded-md hover:bg-orange-600 '>Visit Site</button> </a>
          </div>
        </div>
    </div>
  )
}

export default Project