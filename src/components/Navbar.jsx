import React from 'react'
import GradientText from '../utils/GradientText .jsx'
import logo from "../utils/logo.png"
const  Navbar = () => {
  return (

<div className='w-full text-white bg-slate-800 flex  items-center p-4 justify-between  '>
    <div className='flex items-center justify-center '>
    <img src={logo}  className='w-12 h-12' alt="" />
    <h1>Cyber_Cse</h1>
    </div>
    <div className='flex gap-10'>
        <h1>About Me</h1>
        <h1>Stack Work</h1>
        <h1>Contants</h1>
        <h1>Hire me !</h1>


    </div>

</div>
  )
}

export default Navbar
