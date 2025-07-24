import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Terminal from '../components/Terminal.jsx'
gsap.registerPlugin(ScrollTrigger);

const About = () => {


  const textcss = {
    fontFamily: "sans-serif",
    fontStyle: "italic",
  };
const textup = useRef(null);
const revTextRef = useRef(null);
  //Pura Element ka asscess milta hae querySleclect ek div ko sari infoamtiino



  return (
    <div className="bg-[#1E2125]  h-100vh pt-[6%] pb-24 text-white min-h-screen px-4 sm:px-8">
      <div>
        <div
          ref={textup}
          style={textcss}
          id="uppertext"
          className="uppertext text-[#E9DFCE] ml-6  text-center sm:text-left text-[clamp(2.5rem,12vw,8rem)] font-bold leading-tight"
        >
          I Can Debug Code
        </div>

        <p
          style={textcss}
          className="text-[#E9DFCE] text-center text-[clamp(1.5rem,5vw,3rem)] my-6"
        >
` And `
        </p>

        <div
          ref={revTextRef}
          style={textcss}
          className="text-[#E9DFCE]  text-center font-[Grandslang,sans-serif] text-[clamp(2.5rem,12vw,8rem)] font-bold md:text-end"
        >
          Build Cool Things.
        </div>
      </div>
      <div className="mt-36"></div>
    
    <div>
      <Terminal/>
    </div>

      
    </div>
  );
};

export default About;
