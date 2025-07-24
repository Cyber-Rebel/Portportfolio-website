// src/components/MacTerminalUI.jsx
import { data } from 'jquery';
import React, { useState } from 'react';
import  { useForm } from 'react-hook-form'
import TextType from '../utils/Textypes.jsx'
const MacTerminalUI = () => {
     const { register ,handleSubmit,reset } = useForm()
     const [visiable,setvisiable] = useState("hidden")
     const TerminalData=(data)=>{
        console.log(data)
        if(data.cmd==='/about')
          setvisiable('visiable')

        // reset()
     }
    
  return (
    <div className="min-h-screen bg-[#1e1e1e] flex items-center justify-center p-4 font-mono text-sm">
      <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-2xl border border-gray-700 bg-[#0f0f0fcc]">
        {/* Top Bar */}
        <div className="bg-[#2d2d2d] flex items-center px-4 py-2 space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        {/* Terminal Body */}
        <div className="p-4 text-white leading-relaxed">
          <div>
            <span className="text-green-400">MacBook-Pro</span>
            <span className="text-white">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-white">$</span> --help
          </div>
          <div className='flex gap-4 '><div>

            <span className="text-green-400">MacBook-Pro</span>
            <span className="text-white">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-white">$ </span>
          </div>
            <div className='flex-1'>

            <form className='  w-full ' onSubmit={handleSubmit(TerminalData)} action="">
            <input {...register('cmd')}  type="text" className='bg-transparent  text-white outline-none border-none caret-white w-full ' />
             <button></button></form>
             
            </div>
          </div>
          <TextType className={`${visiable}`} text={["Let me introduces i Nilesh patil i can build this cool feturce"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|" />
        </div>
      </div>
    </div>
  );
};

export default MacTerminalUI;

