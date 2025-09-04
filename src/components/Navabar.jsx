

import { audio } from 'framer-motion/client'
import {useRef} from 'react'

const Navabar = () => {
     const audioRef = useRef(null);// ref system matlab div kaa pura aceess milgta hae 
  
  
  return (
    <nav className="flex items-center justify-between px-8 py-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-[#A9927D] rounded-full"></div>
<span className="font-semibold font-['font8'] ">Nilesh Patil</span>
      <audio  ref={audioRef}   src="normalbutton.mp3"/>
</div>
<div className="flex items-center gap-12">
<a href="#" onClick={()=>audioRef.current.play()}  className="hover:text-emerald-400  ">Home</a>
<a href="#"  onMouseEnter={()=>audioRef.current.play()}  className="hover:text-emerald-400">Projects</a>
<a href="/user" onMouseEnter={()=>audioRef.current.play()}  className="hover:text-emerald-400">Blogs</a>
<a href="#"  onMouseEnter={()=>audioRef.current.play()} className="hover:text-emerald-400">About</a>
    <a href="#" 
       className="
        font-bold px-8 py-2 leading-none 
        text-gray-200 hover:text-white
        border border-gray-800 hover:border-indigo-400
        rounded-lg 
        focus:outline-none focus:shadow-outline
        bg-gradient-to-b from-gray-900 to-bNlack
        hover: [ #A9927D ]
        transition-colors duration-1000 ease-in-out
      "
    >
        Get in touch
    </a>

</div>
</nav>
  )
}

export default Navabar