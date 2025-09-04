// import React from 'react'

// const Projectsection = () => {
//   return (
//         <div className='border w-[30%] h-[50%] rounded     '>
//             <img src="image.png" className='h-[80%] w-full ' alt="" />
//             <h1>Project one :- Ai asseisents building </h1>

//          <b>Motive The project Build A ai mobel that are simple and easy to use </b>
//         </div>
//   )
// }

// export default Projectsection

// Public folder important sathi one name 
import React from "react";

export default function CaseStudyCard() {
  return (
    <div className="relative w-full max-w-xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
      {/* Gradient Background */}
    <img src="image.png" alt="" />
      {/* Black Gradient Overlay (Bottom Fade Effect) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

      {/* Content */}
      <div className="absolute bottom-6 left-6 text-left text-white">
        <span className="px-3 py-1 text-xs font-bold bg-blue-600 rounded-md">
           Explore Project
        </span>
        <h2 className="mt-3 text-xl font-bold">Ai asseisents </h2>
        <p className="text-sm text-gray-300">For Daily User Case</p>
      </div>
    </div>
  );
}
