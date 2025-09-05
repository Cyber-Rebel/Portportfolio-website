import React from "react";
import ContactForm from "../components/Contact.jsx";
import ProfileSection from "../components/ProfileSection.jsx";
import MeetingSection from "../components/MeetingSection.jsx";

const BookingPage = () => {
  return (
    <div className="min-h-screen bg-black w-full text-white flex items-start justify-center p-10">
    
      
      <div className="w-full max-w-4xl space-y-10">
        {/* Profile Section */}
        <ProfileSection />

        {/* Meeting Section */}
        <MeetingSection />
        
        {/* Contact Form */}
        <ContactForm />
      </div>
    </div>
  );
};

export default BookingPage;
