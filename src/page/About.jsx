import React from "react";
import { Clock, Video,PhoneCall  } from "lucide-react";
import ContactForm from "../components/Contact.jsx";
const BookingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-start justify-center p-10">
      <div className="w-full max-w-4xl space-y-10">
        {/* Profile Section */}
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
              <a href="mailto:np103177@gmail.com" className="hover:underline">np103177@gmail.com</a>
              <a href="https://portportfolio-website.vercel.app/" target="blank" className="hover:underline">Portfolio</a>
              <a href="https://www.instagram.com/nilesh_patil_954/" target="blank" className="hover:underline">Instagram</a>
              <a href="https://github.com/Cyber-Rebel" target="blank" className="hover:underline">GitHub</a>
              <a href="https://www.linkedin.com/in/nilesh-patil-451637322/" target="blank" className="hover:underline">LinkedIn</a>
            </div>
          </div>
          <div className=" flex gap-2 ">
            <span><PhoneCall/></span>
            +91 7972590399
            </div>
        </div>

        {/* Meeting Section */}
        <div>
          <h1 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Video className="text-blue-500" size={20} /> Google Meet Sessions
          </h1>

          <div className="space-y-6">
          

            {/* Card 1 */}
            <MeetingCard
              title="Career & Job Opportunity Chat"
              description="Looking to hire me for your team or project? Let’s explore how I can add value to your organization."
            />

        
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

const MeetingCard = ({ title, description }) => (
  <div className="bg-zinc-900 rounded-2xl p-6 shadow hover:bg-zinc-800 transition border border-zinc-800 hover:border-blue-500">
    <h2 className="text-lg font-semibold">{title}</h2>
    <p className="text-gray-400 text-sm mt-1">{description}</p>
    <div className="flex gap-3 mt-4">
      <DurationButton label="15m" />
      <DurationButton label="30m" />
      <DurationButton label="60m" />
    </div>
  </div>
);

const DurationButton = ({ label }) => (
  <button className="flex items-center gap-1 bg-zinc-800 px-4 py-2 rounded-lg text-sm hover:bg-blue-600 hover:text-white transition shadow">
    <Clock size={14} /> {label}
  </button>
);

export default BookingPage;

/// Ressume button 
