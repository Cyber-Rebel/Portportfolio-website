import React, { useEffect, useState ,useRef } from 'react'
import Navabar from '../components/Navabar.jsx'
import Projectsection from '../components/Projectsection.jsx'
import Hero from '../components/Hero.jsx'
import AboutIntro from '../components/AboutIntro.jsx'
import Introsection from '../components/Introsection.jsx'
import Footer from '../components/Footer.jsx'
import MouseFollower from '../components/MouserFollwer.jsx'

const Home = () => {
 

  return (
   <div className="h-auto w-full bg-[#121314] text-white flex flex-col">
<div className='h-[100%] w-full '>

<Hero />
</div>


</div>
  )
}

export default Home;

// use kase ref ek jisme bare kuch nahi pata use div ko levkar ref me pass kare cosole.log karo aapko smjt aayega ki wo div ka pura access milgya
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
//   <title>Tech Stack</title>
//   <style>
//     :root{
//       --spot: rgba(255,255,255,0.12); /* subtle white glow */
//       --line: rgba(10, 75, 255, 0.12); /* faint horizontal line */
//       --side: rgba(255,255,255,0.2);  /* small side lines */
//       --text: rgba(255,255,255,0.8);  /* text more visible */
//     }

//     html, body {
//       height: 100%;
//     }
//     body{
//       margin:0;
//       display:flex;
//       align-items:center;
//       justify-content:center;
//       font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
//       color: var(--text);

//       /* background effect with circular spotlight */
//       background:
//         /* faint 1px horizontal line */
//         linear-gradient(to bottom,
//           transparent 49.5%,
//           var(--line) 50%,
//           transparent 50.5%
//         ),
//         /* circular spotlight */
//         radial-gradient(circle at center,
//           var(--spot) 0%,
//           rgba(0,0,0,0) 70%
//         ),
//         #000;
//       background-repeat: no-repeat;
//       background-attachment: fixed;
//       overflow:hidden;
//     }

//     .center-wrap{
//       display:flex;
//       align-items:center;
//       gap:16px;
//       padding:24px 28px;
//       border-radius:12px;
//     }

//     .side-line{
//       height:1px;
//       width:90px;
//       background: var(--side);
//     }

//     .label{
//       font-style: italic;
//       letter-spacing:.2px;
//       color: var(--text);
//       white-space: nowrap;
//     }

//     @media (max-width:420px){
//       .side-line{ width:56px; }
//     }
//   </style>
// </head>
// <body>
//   <div class="center-wrap">
//     <div class="side-line"></div>
//     <div class="label">Tech Stack</div>
//     <div class="side-line"></div>
//   </div>
// </body>
// </html>

