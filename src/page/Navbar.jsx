import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex gap-9 items-center justify-center p-4' >
    

    <NavLink to="/" className={({isActive})=>`${isActive?"text-orange-600":"text-white"} font-opensans font-bold text-xl`}>Home</NavLink>
    <NavLink to="/about"  className={({isActive})=>`${isActive?"text-orange-600":"text-white"} font-opensans font-bold text-xl`} >ABOUT</NavLink>
    <NavLink to="/resume"  className={({isActive})=>`${isActive?"text-orange-600":"text-white"} font-opensans font-bold text-xl`}>RESUME</NavLink>
    <NavLink to="/works"  className={({isActive})=>`${isActive?"text-orange-600":"text-white"} font-opensans font-bold text-xl`} >WORKS</NavLink>
    <NavLink to="/contact"  className={({isActive})=>`${isActive?"text-orange-600":"text-white"} font-opensans font-bold text-xl`} >CONTACT</NavLink>
    



    </div>
  )
}

export default Navbar