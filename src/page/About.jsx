
import React, { useEffect,useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {  useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { IoCloudDownloadSharp } from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
 const textcss = {
  fontFamily: 'sans-serif',
  fontStyle: 'italic',
};


const textup= useRef(null)
  const boxRef = useRef(null)
  const revTextRef = useRef(null)

  useEffect(()=>{
    gsap.fromTo(
      textup.current,{
      y: '-100%',
      opacity: 0,
    },
    {
      y: '0%',
      opacity: 1,
      duration: 2,
      ease: 'cubic-bezier(0.65, 0, 0.35, 1)',
      scrollTrigger: {
        trigger: revTextRef.current,
        start: 'top 98%',
        end: 'bottom 60%',
        // toggleActions: 'play none none reverse',
        scrub:true,
        // markers: true, 
      },
     
    }
    )
  },[])
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
      duration: 4,
      ease: 'cubic-bezier(0.65, 0, 0.35, 1)',
      scrollTrigger: {
        trigger: revTextRef.current,
        start: 'top 90%',
        end: 'bottom 80%',
        toggleActions: 'play none none reverse',
        scrub:true, 
      },
      onUpdate: function () {
     
        const progress = this.progress();
        if (progress < 0.5) {
          gsap.to(revTextRef.current, { opacity: 0.3 + progress * 1.4 }); // 0.3 → 1
        } else {
          gsap.to(revTextRef.current, { opacity: 2 - progress * 1 }); // 1 → 0.3
        }
      }
    }
  );
}, []);



  
  return (
    <div className="bg-[#1E2125] pt-[6%]    text-white min-h-screen " >
      <div >
        <div ref={textup} style={textcss} className=" about_anima_text  text-[#E9DFCE]    text-[180.6px] ">
  I Can Debug 
 Code 
</div>
<p  style={textcss} className="  text-[#E9DFCE]   text-center  text-[60px]">

 And
</p>
    <div  ref={revTextRef}style={textcss} className="  w-full text-[#E9DFCE] text-end   font-[Grandslang,sans-serif] text-[180.6px]">
 Build Cool Things.
</div>

      </div>

      {/* <div className='bg-red-600 w-full h-14'></div> */}
 <div className="bg-[#1E2125] pt-[9%] w-full text-white min-h-screen ">
      <div className="max-w-4xl  mx-auto  space-y-10">
     
        <section>
          <h1 className=" text-3xl  font-[1000] border-blue-500 pb-2 mb-4 ">About Me</h1>
          <p className="text-lg leading-relaxed text-gray-300">
            I am a third-year B.Tech student with strong technical skills in the MERN Stack <br/> and a solid grasp of the Linux OS.
            I have a keen interest in designing and developing <br />applications that solve real-world problems.
          </p>
        </section>

      
        <div className='flex gap-[20%]'>
          <div>
          <h1 className="text-4xl font-bold border-blue-500 pb-2 mb-4">Contact Details</h1>
          <ul className="space-y-2 text-gray-300  text-lg">
            <li><span className="font-semibold text-white">Name:</span> Nilesh Ramlal Patil</li>
            <li><span className="font-semibold text-white">Location:</span> Jalgaon, Maharashtra 424206</li>
            <li><span className="font-semibold text-white">Phone:</span> +91 7972590399</li>
            <li><span className="font-semibold text-white">Email:</span> np103177@gmail.com</li>

          </ul> 
          </div> 
        <div>
          <Link to='https://drive.google.com/file/d/1TppvuoogheptDQMECjO9tRX3LjgtUZgs/view?usp=sharing' className='p-4  mt-[25%] font-sans gap-5 font-[1000] flex bg-[#444444]'>
            <IoCloudDownloadSharp className=' text-xl' /> Download Resume</Link>
        </div>
        </div>
      </div>
      </div>

   </div>
  )
}

export default About