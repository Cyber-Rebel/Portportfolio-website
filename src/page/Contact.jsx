import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-900 min-h-screen w-full flex items-center justify-center p-4">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg max-w-md w-full text-white">
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
  );
};

export default Contact;
