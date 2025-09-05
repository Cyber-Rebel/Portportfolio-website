

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  const [loading, setLoading] = useState(true);




  return (
    <main className="w-full h-screen font-[font9] flex flex-col items-center px-6 text-center relative overflow-hidden">
      {/* Heading */}
      <motion.h1
        className="w-full text-4xl md:text-8xl lg:text-8xl font-bold md:mt-18 text-left pl-[5%]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hello, I’m Nilesh Patil !
      </motion.h1>
      

      {/* 3D Model (Spline) */}
      <div className="relative w-full flex justify-center items-center  min-h-[20px] md:min-h-[40px]">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center  bg-[#121314] z-10">
            <div className="w-10 h-10 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
          </div>
        )}
{/* spine ke andar use karo style yes correct hae className use mat karo */}
        <Spline 
          onError={() => {
    setLoading(false); 
    console.log("Spline failed to load (maybe no internet)");
  }}
onLoad={() => setLoading(false)}

          scene="https://prod.spline.design/SGNca2ikt67k048p/scene.splinecode"
          style={{ width: '100%', height: '400px' }}
        />
      </div>

      {/* Subtitle */}
      <div className="px-6 md:pl-130  py-4 text-center md:text-center w-full text-4xl md:text-5xl font-semibold text-gray-300">
        Full Stack Developer • Love to Solve Problems
      </div>

      {/* Bottom Tags */}
      {/* Bottom Tags - Infinite Loop Marquee Animation */}
      <section className="absolute bottom-[10%] md:bottom-[8%] px-6 py-4 rounded-lg shadow-lg w-full hidden md:block">
        <div className="w-full relative h-12 marquee-container">
          <div className=" text-white font-semibold text-sm md:text-lg">
            {/* Render two identical groups so translateX(-50%) equals one full group width */}
                <span className=" px-3 py-1 rounded-xl">Full Stack</span>
                <span className=" px-3 py-1 rounded-xl">Debug Code</span>
                <span className=" px-3 py-1 rounded-xl">Build Cool Things</span>
                <span className=" px-3 py-1 rounded-xl">React</span>
                <span className=" px-3 py-1 rounded-xl">Backend</span>
                <span className=" px-3 py-1 rounded-xl">Database</span>
                <span className=" px-3 py-1 rounded-xl">Generative Ai </span>
              </div>
        </div>
      </section>
    </main>
  );
};



export default Hero;

// {/* Robot Effect use spline */}
//  {/* <iframe  className='w-[150%] overflow-x-hidden min-h-96 ' src="https://app.spline.design/file/0a5b1f17-42b1-44f6-9d1f-833dfac38597?view=preview" frameborder="0"></iframe> we can use ths also */}
//  <di className='w-[70% ] overflow-x-hidden min-h-96 ' >

//     <Spline  
//             scene="https://prod.spline.design/SGNca2ikt67k048p/scene.splinecode" 
//       />
//  </di>

