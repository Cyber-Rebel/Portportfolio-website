import React from 'react'
import { motion } from "framer-motion";
import Orb from '../utils/Orb';

const Hero = () => {
  return (
    <main className="w-full  h-screen font-[font1] flex flex-col items-center px-6 text-center relative">

      {/* Top Full Width Box */}
      <motion.h1
        className="w-full text-5xl md:text-8xl font-bold py-6  rounded-xl mt-[4%] text-left pl-[10%]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hello, I’m Nilesh Patil!
      </motion.h1>

      {/* Left Small Box + Circle + Right Small Box */}
      {/* <div className="flex     h-[30%] flex-col md:flex-row items-center justify-center gap-12 w-full mb-12"> */}

       

        {/* Circle Orb */}
        {/* <div className="flex items-center justify-center"> */}
       {/* <Orb 
  style={{ width: '700px', height: '700px' }} // Significantly increased size
  hoverIntensity={0.9}
  rotateOnHover={true}
  hue={240} // Blue-purple gradient like in the screenshot
  forceHoverState={false}
/> */}
 <iframe  className='w-[150%] overflow-x-hidden min-h-96 ' src="https://app.spline.design/file/0a5b1f17-42b1-44f6-9d1f-833dfac38597?view=preview" frameborder="0"></iframe>

    {/* </div> */}
      {/* </div> */}

        <div className=" px-8 py-4 text-right w-full pr-49 rounded-xl text-5xl  font-semibold text-gray-300">
          Full Stack Developer Love to slove problem
        </div>  
  
      

      {/* Bottom Wide Box */}
      <section className="p-10  absolute  bottom-[9%]     py-6 rounded-lg shadow-lg">
        <div className="max-w-5xl   flex justify-center gap-8 text-white font-semibold text-lg flex-wrap">
          <span>Full Stack</span>
          <span>Debug Code</span>
          <span>Build Cool Things</span>
          <span>Work is Worship</span>
        </div>
      </section>

    </main>
  )
}

export default Hero
