import React from 'react'
import { Fade, Reveal, Slide } from "react-awesome-reveal";

function About() {
  return (
    <div id='About' className='h-screen snap-start relative overflow-hidden'>
      <img src="/images/Alone-pana.png" className='w-full absolute  left-0 right-0 -bottom-1/2 object-cover h-full' alt="" />
      <div className='flex justify-center text-center items-center flex-col w-full h-full'>
        <h1 className='text-4xl  logo border-b shadow-inherit  text-[#EC0B0B]  '>About Me</h1>
        <Slide direction='up'>
          <p className='text-center p-4  shadow-2xl font-bold text-xl'> Expirienced in Developing Complex and Eye catching web/mobile applications using Javascript 
          </p>
        </Slide>

        <Slide delay={200} direction='up'>
          <p className='text-center shadow-2xl p-4 font-bold text-xl'>
            Developed varius applications using React, Redux , Electron js , React native ,
            Mui , tailwind css , bootstrap , REST API , node/express js.
            Have ability to grasp new technologies in very short span of time with top notch problem solving attitude to perform in complex situations.
          </p>
        </Slide>


      </div>
      <div className="fixed text-white right-0 top-1/2 ">
        <a href='https://github.com/Vikas-Yadav-07' target={'_blank'}><div className="Github bg-gray-900 translate-x-20 hover:translate-x-0 transition cursor-pointer p-3 my-4"><i className="fa-brands w-10 text-center  fa-github"></i> Github</div></a>
        <a href='https://www.linkedin.com/in/vikas-yadav-786519216/' target={'_blank'}> <div className="linkedin bg-blue-900 translate-x-20 hover:translate-x-0 transition cursor-pointer p-3 my-4"><i className="fa-brands w-10 text-center   fa-linkedin"></i> LinkedIn</div></a>
      </div>



    </div>
  )
}

export default About
