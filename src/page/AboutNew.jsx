import React from "react";
import PixelBlast from "../utils/PixelBlast.jsx";
import ContactForm from "../components/Contact.jsx";
import ProfileSection from "../components/ProfileSection.jsx";
import MeetingSection from "../components/MeetingSection.jsx";

const BookingPage = () => {
  return (
    <div className="min-h-screen bg-black w-full text-white flex items-start justify-center p-10">
      <PixelBlast
        variant="circle"
        pixelSize={6}
        color="#B19EEF"
        patternScale={3}
        patternDensity={1.2}
        pixelSizeJitter={0.5}
        enableRipples
        rippleSpeed={0.4}
        rippleThickness={0.12}
        rippleIntensityScale={1.5}
        liquid
        liquidStrength={0.12}
        liquidRadius={1.2}
        liquidWobbleSpeed={5}
        speed={0.6}
        edgeFade={0.25}
        transparent
      />
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
