import React from 'react'
import { Fade ,Reveal, Slide } from "react-awesome-reveal";

function About() {
  return (
    <div id='About' className='h-screen relative overflow-hidden'>
      <img src="/images/Alone-pana.png"  className='w-full absolute  left-0 right-0 -bottom-1/2 object-cover h-full' alt="" />
        <div className='flex justify-center text-center items-center flex-col w-full h-full'>
            <h1 className='text-4xl  logo border-b shadow-inherit  text-[#EC0B0B]  '>About Me</h1>
            <Slide direction='up'>
            <p className='text-center p-4  shadow-2xl font-bold text-xl'>I Am A Pationate Entry Level Front-End / React Js Developer
                With A keen Interest In Programming 
            </p>
            </Slide>

            <Slide delay={200} direction='up'>
            <p className='text-center shadow-2xl p-4 font-bold text-xl'>I Enjoy Coding Like I am playing A Video Game. I am a Fast Learner and I always be ready to face 
                New Challenges
            </p>
            </Slide>
        
            
        </div>
        <div className="fixed text-white right-0 top-1/2 ">
          <div className="Github bg-gray-900 translate-x-20 hover:translate-x-0 transition cursor-pointer p-3 my-4"><i className="fa-brands w-10 text-center  fa-github"></i> Github</div>
          <div className="linkedin bg-blue-900 translate-x-20 hover:translate-x-0 transition cursor-pointer p-3 my-4"><i className="fa-brands w-10 text-center   fa-linkedin"></i> LinkedIn</div>
        </div>
      
        
        
    </div>
  )
}

export default About