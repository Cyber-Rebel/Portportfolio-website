import React from 'react'

import ParticlesBg from 'particles-bg'
import Navbar from './Navbar'


const Home = () => {
  return (
    <div className='w-full h-[100%] text-white bg-black -z-40 absolute  '>
<Navbar/>
<div class=" h-[80%] flex flex-col justify-center items-center  text-white p-6 text-center">
  <h1 class="  text-white text-6xl font-black  mb-4 font-mono">Nilesh Patil Engineer </h1>
 <p class="text-white text-lg  font-serif">
  I am a passionate Web Development Engineer, skilled in building 
  modern web applications <br /> using React.js. This is my portfolio website
  showcasing my development process <br /> and featured projects.
</p>

  
  
</div>


        <ParticlesBg type="circle" bg={true} />
    </div>
  )
}

export default Home