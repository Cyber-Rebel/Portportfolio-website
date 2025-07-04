import React from 'react'
import image from './image.png'
import Linux from '../asset/Linux.png'
import { Link } from 'react-router-dom'

const Works = () => {
  return (
 <div className="w-full bg-gray-700 py-10 px-4">
  <h2 className="text-2xl sm:text-3xl font-semibold text-white text-center mb-8">
    Check Out Some of My Works
  </h2>

  <div className="w-full flex flex-wrap justify-center gap-6">
    
    <div className="bg-white shadow-2xl hover:shadow-xl transition-shadow duration-300  w-80">
      <a href="https://github-profile-search-ruby.vercel.app/" target="_blank" rel="noopener noreferrer">
        <img src={image} alt="GitHub Profile Search" className=" h-48 w-full" />
        <div className="p-4 text-center text-lg font-medium text-gray-800">
          GitHub Profile Search
        </div>
      </a>
    </div>

    <div className="bg-white shadow-2xl hover:shadow-xl transition-shadow duration-300  w-80">
      <a href="https://linux-os.vercel.app/" target="_blank" rel="noopener noreferrer">
        <img src={Linux} alt="Linux OS Interface" className="w-full h-48 object-cover" />
        <div className="p-4 text-center text-lg font-medium text-gray-800">
          Linux OS Interface
        </div>
      </a>
    </div>
  </div>
</div>

  )
}

export default Works
