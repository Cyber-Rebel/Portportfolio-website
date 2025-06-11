import React from 'react'
import image from './image.png'
import { useNavigate ,Link } from 'react-router-dom'

const Works = () => {
  // const navigate = useNavigate()
 
  return (
    <div className='w-full  h-screen  bg-gray-200'>
     
 <div className='text-gray-500 text-center    p-6   ' > CHEAK OUT SOME OF MY WORKS.</div>
      <div  className=' bg-red-500 w-[18%] h-[17%] '>
        <Link to='https://github-profile-search-ruby.vercel.app/'>
        <img   src={image} alt="" />
        <div className='text-black  p-4 text-center'>GitHub Profile Search</div>
        </Link>
      </div>
      
    </div>
  )
}

export default Works