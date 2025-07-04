import React from 'react';
import ParticlesBg from 'particles-bg';
import { IoLogoGithub } from "react-icons/io5";

import { FaLinkedin } from "react-icons/fa";
const Home = () => {
  return (<>
    <div className="w-full  text-white bg-black relative z-0 overflow-x-hidden">


      
      <div className="min-h-[90vh] flex flex-col justify-center items-center text-white px-4 sm:px-8 md:px-16 text-center">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-4 font-mono">
          Hey There, I am Nilesh
        </h1>
        <p className="text-base sm:text-lg lg:text-xl font-serif leading-relaxed max-w-3xl">
          I am a passionate Web Development Engineer, skilled in building modern web applications <br className="hidden sm:inline" />
          using <span className="text-pink-600 font-bold">MERN STACK</span>. This is my portfolio website showcasing my
          development process <br className="hidden sm:inline" /> and featured projects.
        </p>
<div className='flex gap-12 pt-10'>

        <a  href="https://github.com/Cyber-Rebel" 
    target="_blank" className='bg-slate-700 pt-5 pb-5 rounded pl-12 pr-12 flex items-center justify-center gap-2'><IoLogoGithub />Github</a>
        <a  href="https://www.linkedin.com/in/nilesh-patil-451637322/" 
    target="_blank"  className='bg-[#0063C2] pt-5 pb-5 rounded pl-12 pr-12 flex items-center justify-center gap-2'  ><FaLinkedin />Linkdin</a>

</div>
      </div>

      <ParticlesBg type="circle" bg={true} />

  
    </div>
    </>
  );
};

export default Home;
