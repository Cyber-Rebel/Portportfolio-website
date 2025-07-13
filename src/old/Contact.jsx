import React from 'react';
import './Contact.css';
import Right from '../asset/right-arrow.png';

const Contact = () => {
  return (
    <div className="w-full h-screen bg-gray-600 flex items-center justify-center px-6 font-[Moranga]">
      <div className="flex flex-col md:flex-row items-center justify-center gap-20 w-full max-w-7xl">

   
        <div className="text-center md:text-left leading-tight">
          <h1 className="chal text-[3.5rem] text-white font-normal leading-tight">
            Want to <br />
            <span className="text-white">start</span> <br />
            <span className="text-[2.8rem] text-white">a new</span> <br />
            <span className="text-[4rem] font-extrabold text-white inline-block">
              project<span className="inline-block rotate-12">?</span>
            </span>
          </h1>
          <p className="text-sm mt-4 italic text-white">Or just say hello.</p>
        </div>

 
        <img
          src={Right}
          alt="Arrow pointing to form"
          className="w-16 h-16 md:w-24 md:h-24 hidden md:block"
        />

        <div className="bg-[#1e1e2f] p-8 rounded-xl shadow-2xl w-full max-w-md text-white">
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
              className="w-full bg-blue-600 hover:bg-blue-700 transition duration-200 text-white py-2 rounded-lg font-semibold shadow-md"
            >
              Send Me Mail
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;


    
// using google font size Link :- https://fonts.google.com/selection  -->Get Embed Code @import copy the url and paste in css file 
// leading-tight work as line-hight