import React from "react";
import { motion } from "framer-motion";

const Introsection = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#111] to-[#1a1a1a] text-white py-20 px-6 md:px-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('bg.png')] opacity-10"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>

      <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16 max-w-6xl mx-auto">
        {/* Left Content */}
          <motion.div 
          className="flex-1 "
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative bg">
            {/* Frame decoration */}
            {/* <div className="absolute -inset-4 border border-white/10 rounded-2xl -z-10"></div> */}
            {/* <div className="absolute -inset-2 bg-white/5 rounded-2xl blur-sm -z-10"></div> */}
            
            <div className=" overflow-hidden rounded-ful  l shadow-2xl">
              <img
                src="/about.png"
                alt="About myself"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            
            {/* Badge */}
            <div className="absolute -bottom-4 -right-4 bg-white/5 backdrop-blur-md border border-white/10 px-3 py-2 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-xs font-semibold">Available for work</span>
              </div>
            </div>
          </div>
        </motion.div> 
     {/* Right Side - Content in a dark card */}
          <div className="md:w-2/3 bg-[#222222] rounded-xl p-8 shadow-lg">
            {/* Bio paragraphs */}
            <p className="text-white mb-6">
              Hello! I'm Nilesh, and I'm based in Mumbai, India. I studied Computer Science
              and completed my degree in Software Engineering.
            </p>

            <p className="text-white mb-6">
              Fast-forward to today, and I can honestly say it's been a beautiful journey and I hope to grow
              even further as a Software Engineer. My current focus these days is on expanding my portfolio
              by building more projects that I can add on here, as well as being a great team player at my
              current role.
            </p>

            {/* Technologies section */}
            <div className="mb-8">
              <p className="text-white mb-4">Here are a few technologies I've been working with recently:</p>
              
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-[#A9927D]">▹</span>
                  <span>JavaScript (ES6+)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#A9927D]">▹</span>
                  <span>TypeScript</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#A9927D]">▹</span>
                  <span>React</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#A9927D]">▹</span>
                  <span>Node.js</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#A9927D]">▹</span>
                  <span>Postgres SQL</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#A9927D]">▹</span>
                  <span>NestJS</span>
                </div>
              </div>
            </div>

            {/* Download CV button */}
            <div className="mt-6">
              <a
                href="#"
                className="inline-block px-8 py-3 bg-[#ff4b5c] text-white rounded-md font-medium hover:bg-[#e04352] transition-colors"
              >
                Download CV
              </a>
            </div>
          </div>

        {/* Right Image */}
      
      </div>
    </section>
  );
};

export default Introsection;
