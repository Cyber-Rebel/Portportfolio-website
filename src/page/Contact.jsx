import React from 'react';
import './Contact.css'
import Right from '../asset/right-arrow.png'

// using google font size Link :- https://fonts.google.com/selection  -->Get Embed Code @import copy the url and paste in css file 
// leading-tight work as line-hight
const Contact = () => {
  return (
      <div className="w-full h-screen bg-[#f2eee9] text-black flex items-center justify-center font-[Moranga]">
      <div className="text-center leading-tight"> 
        <h1 className="chal text-[4rem] font-normal">
          Want to <br />
          <span className="">start</span> <br />
          <span className="text-[3.5rem]">a new</span> <br />
          <span className="text-[5rem] font-bold inline-block">
            project<span className="align-bottom inline-block rotate-12">?</span>
          </span>
        </h1>
        <p className="text-sm mt-6 italic text-[#333333]">Or just say hello.</p>
      </div>
      <img className='h-[20%] w-[13%]]'  src={Right} alt="" />
      <div><div className="bg-gray-900 p-8  shadow-slate-800 shadow-2xl  max-w-md w-full -z-2 text-white">
        <div className="flex justify-center mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/128/13001/13001956.png"
            alt="Contact Icon"
            className="h-16 w-16"
          />
        </div>
        <form className="space-y-4">
          <div>
            <label htmlFor="fname" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="fname"
              name="name"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="mobile"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="(123) 456-7890"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition duration-200 text-white py-2 rounded-lg font-semibold"
          >
            Send Me Mail
          </button>
        </form>
      </div></div>
    </div>

  );
};

export default Contact;

    <div className="bg-gray-800 min-h-screen  z-10 w-full flex items-center justify-center p-4">
      <div className="bg-gray-900 p-8  shadow-slate-800 shadow-2xl  max-w-md w-full -z-2 text-white">
        <div className="flex justify-center mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/128/13001/13001956.png"
            alt="Contact Icon"
            className="h-16 w-16"
          />
        </div>
        <form className="space-y-4">
          <div>
            <label htmlFor="fname" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="fname"
              name="name"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="mobile"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="(123) 456-7890"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition duration-200 text-white py-2 rounded-lg font-semibold"
          >
            Send Me Mail
          </button>
        </form>
      </div>
    </div>