

import { audio } from 'framer-motion/client'
import {useRef, useState} from 'react'
import { Link } from 'react-router-dom'

const Navabar = () => {
     const audioRef = useRef(null);// ref system matlab div kaa pura aceess milgta hae 
     const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className=" bg-[#121314] flex items-center z-50 justify-between px-4 md:px-8 py-6 relative">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-[#A9927D] rounded-full"></div>
        <Link to="/" className="font-semibold font-[font8] text-sm md:text-base">Nilesh Patil</Link>
        <audio ref={audioRef} src="normalbutton.mp3"/>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex  items-center font-[font1] gap-8 lg:gap-18">
        <Link to="/" onMouseEnter={()=>audioRef.current.play()} className="hover:text-emerald-400 transition-colors duration-200">Home</Link>
        <Link to="/projects" onMouseEnter={()=>audioRef.current.play()} className="hover:text-emerald-400 transition-colors duration-200">Projects</Link>
        <Link to="/blogs" onMouseEnter={()=>audioRef.current.play()} className="hover:text-emerald-400 transition-colors duration-200">Blogs</Link>
        <Link to="/about" onMouseEnter={()=>audioRef.current.play()} className="hover:text-emerald-400 transition-colors duration-200">About</Link>
        <Link to="/contact" 
           className="
            font-bold px-4 lg:px-8 py-2 leading-none text-sm lg:text-base
            text-gray-200 hover:text-white
            border border-gray-800 hover:border-indigo-400
            rounded-lg 
            focus:outline-none focus:shadow-outline
            bg-gradient-to-b from-gray-900 to-black
            hover:bg-[#A9927D]
            transition-all duration-300 ease-in-out
          "
        >
            Get in touch
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden bg-transparent flex flex-col gap-1 p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col items-center gap-6 py-6">
          <Link to="/" onClick={()=>{audioRef.current.play(); setIsMenuOpen(false);}} className="hover:text-emerald-400 transition-colors duration-200">Home</Link>
          <Link to="/projects" onClick={()=>{audioRef.current.play(); setIsMenuOpen(false);}} className="hover:text-emerald-400 transition-colors duration-200">Projects</Link>
          <Link to="/blogs" onClick={()=>{audioRef.current.play(); setIsMenuOpen(false);}} className="hover:text-emerald-400 transition-colors duration-200">Blogs</Link>
          <Link to="/about" onClick={()=>{audioRef.current.play(); setIsMenuOpen(false);}} className="hover:text-emerald-400 transition-colors duration-200">About</Link>
          <Link to="/contact" 
             onClick={()=>setIsMenuOpen(false)}
             className="
              font-bold px-6 py-2 leading-none text-sm
              text-gray-200 hover:text-white
              border border-gray-800 hover:border-indigo-400
              rounded-lg 
              focus:outline-none focus:shadow-outline
              bg-gradient-to-b from-gray-900 to-black
              hover:bg-[#A9927D]
              transition-all duration-300 ease-in-out
            "
          >
              Get in touch
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navabar

