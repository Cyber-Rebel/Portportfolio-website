import React from 'react'
import image from './image.png'
import { Link } from 'react-router-dom'

const Works = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 py-10 px-4">
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 text-center mb-8">
        Check Out Some of My Works
      </h2>

      <div className="flex justify-center">
        <div className="bg-white shadow-2xl hover:shadow-xl transition-shadow duration-300 rounded-xl  ">
          <Link to="https://github-profile-search-ruby.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src={image} alt="GitHub Profile Search" className="w-full h-48 object-cover" />
            <div className="p-4 text-center text-lg font-medium text-gray-800">
              GitHub Profile Search
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Works
