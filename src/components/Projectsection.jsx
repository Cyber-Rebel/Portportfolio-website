
import React from "react";

export default function CaseStudyCard() {
  return (
    <>
    <div className="relative w-full max-w-xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
      {/* Gradient Background */}
    <img src="image.png" alt="" />
      {/* Black Gradient Overlay (Bottom Fade Effect) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

      {/* Content */}
      <div className="absolute  flex  justify-center gap-17 items-end  bottom-6 left-6 text-left text-white">
        <div>
        <span className="px-3 py-1 text-xs font-bold bg-blue-600 rounded-md">
           Explore Project
        </span>

        <h2 className="mt-3 text-xl font-bold">Ai asseisents </h2>
        <p className="text-sm text-gray-300">For Daily User Case</p>
        </div>
        <div className=" w-auto flex gap-10">
                    <a 
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300m px-1  hover:text-red-900 transition-colors"
          >
            Live ↗
          </a>
                     <a 
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-teal-500 transition-colors"
          >
            Github ↗
          </a>           <a 
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-black transition-colors"
          >
            Project workflow ↗
          </a>
        </div>
        
      </div>
    </div>
    </>
  );
}
