import React from 'react'

import ParticlesBg from 'particles-bg'
import Navbar from './Navbar'
import About from './About'
import Resume from './Resume'
import Work from './Works.jsx'


const Home = () => {
  return (
    <div className='w-full h-[100%]  text-white bg-black -z-40 absolute  '>

<Navbar/>
<div class=" h-[90%] flex flex-col justify-center items-center  text-white p-6 text-center">
  <h1 class="  text-white text-6xl font-black  mb-4 font-mono">Hey There I am Nilesh </h1>
 <p class="text-white text-lg  font-serif">
  I am a passionate Web Development Engineer, skilled in building 
  modern web applications <br /> using <span className='text-pink-700 font-bold te'>MERN STACK</span>.  This is my portfolio website
  showcasing my development process <br /> and featured projects.
</p>

  
  
</div>
        <ParticlesBg type="circle" bg={true} />
        <About/>
        <Resume/>
        <Work/>
    </div>
  )
}

export default Home