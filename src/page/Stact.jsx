import React from 'react'
import Chrome from '../utils/Chrome.jsx'
import './Stact.css'
import html from "./html.png"
import git from "../assets/git.png"
import javascript from "../assets/javascript.png"
import mongodb from "../assets/mongodb.png"
import postman from "../assets/postman.png"
import Chatgpt from "../assets/ChatGPT.png"
import github from "../assets/github.png"
import ubuntu from "../assets/ubuntu.png"
import node from "../assets/nodejs.png"

const Stact = () => {
  return (
    <div className='w-full mt-10 h-screen bg-black '>
    <h1  className='text-inherit text-center  text-teal-300 text-[600%] font-serif'>Stack Build..!!</h1>
    {/* <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-github-3d-logo-download-in-png-blend-fbx-gltf-file-formats--social-media-pack-logos-2447911.png?f=webp" alt="" /> */}
    <div  className='bg-black text-white w-full h-[50%] flex    '>

    <Chrome />
    </div>

    <p> Web Development</p>
   

<div class="marquee">
  <div class="text">
    <img src={html} alt="MERN Stack" />
    <img src={git} alt="Linux" />
    <img src={javascript} alt="JavaScript" />
    <img src={mongodb} alt="Web 3.0" />
    <img src={postman} alt="Redis" />
    <img src={Chatgpt} alt="Redis" />
    <img src={github} alt="Redis" />
    <img src={ubuntu} alt="" />
    <img src={node} alt="" />



  </div>
  <div class="text">
    <img src={html} alt="MERN Stack" />
    <img src={git} alt="Linux" />
    <img src={javascript} alt="JavaScript" />
    <img src={mongodb} alt="Web 3.0" />
    <img src={postman} alt="Redis" />
    <img src={Chatgpt} alt="Redis" />
    <img src={github} alt="Redis" />
    <img src={ubuntu} alt="" />
    <img src={node} alt="" />



  </div>
  <div class="text">
    <img src={html} alt="MERN Stack" />
    <img src={git} alt="Linux" />
    <img src={javascript} alt="JavaScript" />
    <img src={mongodb} alt="Web 3.0" />
    <img src={postman} alt="Redis" />
    <img src={Chatgpt} alt="Redis" />
    <img src={github} alt="Redis" />
    <img src={ubuntu} alt="" />
    <img src={node} alt="" />



  </div>
</div>


    
    </div>
  )
}

export default Stact
