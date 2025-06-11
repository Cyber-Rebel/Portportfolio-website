import React from 'react';
import ParticlesBg from 'particles-bg';
import Navbar from './Navbar';
import About from './About';
import Resume from './Resume';
import Work from './Works.jsx';
import Contact from './Contact.jsx';

const Home = () => {
  return (
    <div className="w-full min-h-screen text-white bg-black relative z-0 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <div className="min-h-[90vh] flex flex-col justify-center items-center text-white px-4 sm:px-8 md:px-16 text-center">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-4 font-mono">
          Hey There, I am Nilesh
        </h1>
        <p className="text-base sm:text-lg lg:text-xl font-serif leading-relaxed max-w-3xl">
          I am a passionate Web Development Engineer, skilled in building modern web applications <br className="hidden sm:inline" />
          using <span className="text-pink-600 font-bold">MERN STACK</span>. This is my portfolio website showcasing my
          development process <br className="hidden sm:inline" /> and featured projects.
        </p>
      </div>

      <ParticlesBg type="circle" bg={true} />

      {/* Sections */}
      <About />
      <Resume />
      <Work />
      <Contact />
    </div>
  );
};

export default Home;
