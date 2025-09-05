import React from 'react';
import { PhoneCall } from "lucide-react";

const ProfileSection = () => {
  return (
    <div className="bg-zinc-900 rounded-2xl p-6 shadow-lg flex items-center space-x-6">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz1mHFSD9UAf9NKkI7_buBIIOdn6AY5rxqAA&s"
        alt="Profile"
        className="w-20 h-20 rounded-full object-cover ring-2 ring-blue-500"
      />
      <div>
        <h1 className="text-2xl font-bold">Nilesh Patil</h1>
        <p className="text-gray-400">Full Stack Developer</p>
        <div className="mt-3 flex flex-wrap gap-3 text-blue-400 text-sm">
          <a href="mailto:np103177@gmail.com" className="hover:underline">
            np103177@gmail.com
          </a>
          <a 
            href="https://portportfolio-website.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Portfolio
          </a>
          <a 
            href="https://www.instagram.com/nilesh_patil_954/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Instagram
          </a>
          <a 
            href="https://github.com/Cyber-Rebel" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/nilesh-patil-451637322/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="flex gap-2">
        <span><PhoneCall /></span>
        +91 7972590399
      </div>
    </div>
  );
};

export default ProfileSection;
