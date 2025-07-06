import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { IoCloudDownloadSharp } from 'react-icons/io5';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const textcss = {
    fontFamily: 'sans-serif',
    fontStyle: 'italic',
  };

  const textup = useRef(null);
  const revTextRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textup.current,
      {
        y: '-100%',
        opacity: 0,
      },
      {
        y: '0%',
        opacity: 1,
        duration: 8,
        ease: 'cubic-bezier(0.65, 0, 0.35, 1)',
        scrollTrigger: {
          trigger: revTextRef.current,
          start: 'top 98%',
          end: 'bottom 60%',
          scrub: 1,
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      revTextRef.current,
      {
        x: '-100%',
        opacity: 0.3,
      },
      {
        x: '0%',
        opacity: 1,
        duration: 8,
        ease: 'cubic-bezier(0.65, 0, 0.35, 1)',
        scrollTrigger: { // jab bhi show hoga tab run hoga bydafult run nahi hoga  agar aapne scrollTrigner : '.c' (suppose classname) lik diya to  aapne ek mast kam hoga ki aap scrolle jab div show hoga tab run hoga
          trigger: revTextRef.current, // konsa eleme kena hae .class # id esa kuch hamesha rahta hae 
          start: 'top 90%',// 
          end: 'bottom 80%', // 
          toggleActions: 'play none none reverse', // toggle Action me some  keywordsa hote hae Play pause resume reverse restart complet none
          // toggle action 4 position hote hae use ham wo keyword use karte hae 
          scrub: 1, 
          // lovelye hae bhaii ye to
        },
      
      }
    );
  }, []);

  return (
    <div className="bg-[#1E2125] h-100vh pt-[6%] pb-24 text-white min-h-screen px-4 sm:px-8">
    
      <div>
        <div
          ref={textup}
          style={textcss}
          id='uppertext'
          className="uppertext text-[#E9DFCE] ml-6  text-center sm:text-left text-[clamp(2.5rem,12vw,8rem)] font-bold leading-tight"
        >
          I Can Debug 
          Code
        </div>

        <p
          style={textcss}
          className="text-[#E9DFCE] text-center text-[clamp(1.5rem,5vw,3rem)] my-6"
        >
          And
        </p>

        <div
          ref={revTextRef}
          style={textcss}
          className="text-[#E9DFCE]  text-center font-[Grandslang,sans-serif] text-[clamp(2.5rem,12vw,8rem)] font-bold md:text-end"
        >
          Build Cool Things.
        </div>
      </div>

    
      <div className="pt-[9%] w-full text-white">
        <div className="  mx-12 max-w-5xl md:mx-auto space-y-10">
          <section>
            <h1 className="text-3xl font-extrabold border-blue-500   md:pb-2 mb-4">
              About Me
            </h1>
            <p className=" text-lg leading-relaxed text-gray-300">
              I am a third-year B.Tech student with strong technical skills in the MERN Stack <br />
              and a solid grasp of the Linux OS. I have a keen interest in designing and developing
              <br /> applications that solve real-world problems.
            </p>
          </section>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-8">
            <div>
              <h1 className="text-2xl sm:text-4xl font-bold pb-2 mb-4">Contact Details</h1>
              <ul className="space-y-2 text-gray-300 text-lg">
                <li>
                  <span className="font-semibold text-white">Name:</span> Nilesh Ramlal Patil
                </li>
                <li>
                  <span className="font-semibold text-white">Location:</span> Jalgaon, Maharashtra 424206
                </li>
                <li>
                  <span className="font-semibold text-white">Phone:</span> +91 7972590399
                </li>
                <li>
                  <span className="font-semibold text-white">Email:</span> np103177@gmail.com
                </li>
              </ul>
            </div>

            <div className="flex justify-center items-center  sm:justify-end  ">
              <Link
                to="https://drive.google.com/file/d/1TppvuoogheptDQMECjO9tRX3LjgtUZgs/view?usp=sharing"
                className="p-4 flex items-center gap-3 text-lg font-bold bg-[#444444] rounded-md hover:bg-[#555] transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoCloudDownloadSharp className="text-xl" /> Download Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
