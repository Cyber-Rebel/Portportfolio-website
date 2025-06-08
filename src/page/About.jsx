// import React from 'react'
// import { IoCloudDownloadSharp } from "react-icons/io5";
// import {  useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom'
// const About = () => {
//   const navigate = useNavigate()

//   const getresume=()=>{
//     navigate('https://drive.google.com/file/d/1TppvuoogheptDQMECjO9tRX3LjgtUZgs/view?usp=sharing')
//   }
//   return (
//     <div className="bg-[#000524] text-white min-h-screen py-10 px-6 md:px-20">
//       <div className="max-w-4xl mx-auto space-y-10">
     
//         <section>
//           <h1 className=" text-3xl  font-[1000] border-blue-500 pb-2 mb-4 ">About Me</h1>
//           <p className="text-lg leading-relaxed text-gray-300">
//             I am a third-year B.Tech student with strong technical skills in the MERN Stack <br/> and a solid grasp of the Linux OS.
//             I have a keen interest in designing and developing <br />applications that solve real-world problems.
//           </p>
//         </section>

      
//         <div className='flex gap-[20%]'>
//           <div>
//           <h1 className="text-4xl font-bold border-blue-500 pb-2 mb-4">Contact Details</h1>
//           <ul className="space-y-2 text-gray-300  text-lg">
//             <li><span className="font-semibold text-white">Name:</span> Nilesh Ramlal Patil</li>
//             <li><span className="font-semibold text-white">Location:</span> Jalgaon, Maharashtra 424206</li>
//             <li><span className="font-semibold text-white">Phone:</span> +91 7972590399</li>
//             <li><span className="font-semibold text-white">Email:</span> np103177@gmail.com</li>

//           </ul> 
//           </div> 
//         <div>
//           <Link to='https://drive.google.com/file/d/1TppvuoogheptDQMECjO9tRX3LjgtUZgs/view?usp=sharing' className='p-4  mt-[15%] font-sans gap-5 font-[1000] flex bg-[#444444]'>
//             <IoCloudDownloadSharp className=' text-xl' /> Download Resume</Link>
//         </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default About
import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const About = () => {
  const textcss={
    // fontFamily: "GrandSlang",
     fontFamily: 'sansSerif',
      fontStyle: "italic"
  }
  
  return (
    <div className="bg-[#1E2125] text-white min-h-screen py-10 px-6 md:px-20" >
      <div>
        <div style={textcss} className=" text-[#E9DFCE]  text-center  text-[180.6px] ">
  I Can Debug 
 Code 
</div>
<p  style={textcss} className=" text-[#E9DFCE]  text-center  text-[60px]">

 And
</p>
    <div style={textcss} className=" text-[#E9DFCE] text-center  font-[Grandslang,sans-serif] text-[180.6px] ">
 Build Cool Things.
</div>
      </div>







    </div>
  )
}

export default About