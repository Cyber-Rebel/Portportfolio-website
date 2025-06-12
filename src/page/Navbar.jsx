import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MdClose, MdOutlineMenu } from "react-icons/md";



const Navbar = () => {

let [open ,setopen] = useState(false)
  return (
    <div className=' w-full '>

    
    <div className='hidden  md:flex w-full h-fit  mt-9 justify-center items-center gap-10 '>

    <NavLink to="/" className={({isActive})=>`${isActive?"text-orange-600":"text-white"} font-opensans font-bold text-xl`}>Home</NavLink>
    <NavLink to="/about"  className={({isActive})=>`${isActive?"text-orange-600":"text-white"} font-opensans font-bold text-xl`} >ABOUT</NavLink>
    <NavLink to="/resume"  className={({isActive})=>`${isActive?"text-orange-600":"text-white"} font-opensans font-bold text-xl`}>RESUME</NavLink>
    <NavLink to="/works"  className={({isActive})=>`${isActive?"text-orange-600":"text-white"} font-opensans font-bold text-xl`} >WORKS</NavLink>
    <NavLink to="/contact"  className={({isActive})=>`${isActive?"text-orange-600":"text-white"} font-opensans font-bold text-xl`} >CONTACT</NavLink>
    



    </div>
    <div className='md:hidden  flex justify-end '>{
  open? <span  onClick={()=>setopen(!open)}><MdClose className='w-10 bg-orange-700 rounded  h-10 mr-6' />
  <div className=' absolute top-12 text-start  right-6  w-[56%] bg-gray-800  text-white flex flex-col items-center gap-6 py-10 z-50  '><hr className='bg-black' />
 <NavLink to="/" className={({isActive})=>`${isActive?"text-orange-600":"text-white"} font-opensans font-bold text-xl`}>Home</NavLink>
    <NavLink to="/about"  className={({isActive})=>`${isActive?"text-orange-600":"text-white"} font-opensans font-bold text-xl`} >ABOUT</NavLink>
    <NavLink to="/resume"  className={({isActive})=>`${isActive?"text-orange-600":"text-white"} font-opensans font-bold text-xl`}>RESUME</NavLink>
    <NavLink to="/works"  className={({isActive})=>`${isActive?"text-orange-600":"text-white"} font-opensans font-bold text-xl`} >WORKS</NavLink>
    <NavLink to="/contact"  className={({isActive})=>`${isActive?"text-orange-600":"text-white"} font-opensans font-bold text-xl`} >CONTACT</NavLink>
    



  </div>
  </span> :<span onClick={()=>setopen(!open)}><MdOutlineMenu className='w-10  rounded bg-orange-700 h-10 mr-6' /></span>
      }
      
    </div>
    </div>
  )
}

export default Navbar

// block css pro wo puri width cover karta hae 

// block element in html jo be default puri width lete hae -> Block-level HTML elements are fundamental structural components that typically start on a new line and take up the full width available, pushing subsequent block elements down the page. They are used to organize sections, headings, paragraphs, and containers on a webpage. Examples include <div>, <p>, <h1>-<h6>, <ul>, <ol>, <li>, and <table></table>









// ----------------import React from "react";

// export default function ResponsiveComponent() {
//   return (
//     <div className="flex items-center justify-center h-screen">
//       {/* Laptop view: show image */}
//       <div
       
//         className="hidden md:block w-64 h-64 bg-green-800"
//       ></div>

//       {/* Mobile view: show button */}
//       <div className="md:hidden px-4 py-2 bg-blue-600 ">
//         Click Here
//       </div>
//     </div>
//   );
// }
// md ka matlab hae ki jab bhi scrreen size 768 px zyada ho matlb laptop ke liye
 //---------  That code help to ressponvice








  // <div className='hidden  md:flex w-full h-fit  justify-center items-center gap-10 '>
  //  <div className='hidden  md:block w-full h-fit  justify-center items-center gap-10 '> dono shai hae 