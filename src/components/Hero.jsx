import React, { useState } from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const techStack = [
  { name: "React", logo: "/react.svg" },
  { name: "Redux", logo: "https://cdn.worldvectorlogo.com/logos/redux.svg" },
  { name: "Mongodb", logo: "/mongodb.svg" },
  { name: "Vector Database",logo:"https://www.svgrepo.com/show/499816/database.svg" },
  { name: "Github",logo:"/github.svg " },
  { name: "Linux" ,logo:"https://upload.wikimedia.org/wikipedia/commons/9/9e/UbuntuCoF.svg" },
  { name: "TypeScript",logo:"/typescript.svg" },
  { name: "Generative AI" ,logo:"/ai1.png" },
];

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
      <div className="relative w-full flex justify-center items-center min-h-[20px] md:min-h-[40px]">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#121314] z-10">
            <div className="w-10 h-10 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
          </div>
        )}
        <Spline
          onError={() => {
            setLoading(false);
            console.log("Spline failed to load (maybe no internet)");
          }}
          onLoad={() => setLoading(false)}
          scene="https://prod.spline.design/SGNca2ikt67k048p/scene.splinecode"
          style={{ width: "100%", height: "400px" }}
        />
      </div>

      {/* Subtitle */}
      <div className="px-6 md:pl-130 py-4 text-center w-full text-4xl md:text-5xl font-semibold text-gray-300">
        Full Stack Developer • Love to Solve Problems
      </div>

      {/* Bottom Tags */}
      <section className="absolute bottom-[10%] md:bottom-[8%] px-6 py-4 rounded-lg shadow-lg w-full hidden md:block">
        <div className="w-full relative h-12 marquee-container">
          <div className="marquee text-white flex gap-10 font-semibold text-sm md:text-lg">
            {/* Map loop */}
            <div className="texts flex items-center justify-center gap-6">
              {techStack.concat(techStack).map((tech, idx) => (
                <span key={idx} className="flex items-center gap-2">
                  {tech.name}
                  {tech.logo && (
                    <img src={tech.logo} alt={tech.name} className="h-5" />
                  )}
                </span>
              ))}
            </div>
              <div className="texts flex px-20 items-center justify-center gap-6">
              {techStack.concat(techStack).map((tech, idx) => (
                <span key={idx} className="flex items-center gap-2">
                  {tech.name}
                  {tech.logo && (
                    <img src={tech.logo} alt={tech.name} className="h-5" />
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;


  // {/* Robot Effect use spline */}
  //  {/* <iframe  className='w-[150%] overflow-x-hidden min-h-96 ' src="https://app.spline.design/file/0a5b1f17-42b1-44f6-9d1f-833dfac38597?view=preview" frameborder="0"></iframe> we can use ths also */}
  //  <di className='w-[70% ] overflow-x-hidden min-h-96 ' > px-3 py-1 rounded-xl

  //     <Spline  
  //             scene="https://prod.spline.design/SGNca2ikt67k048p/scene.splinecode" 
  //       />
  //  </di>

