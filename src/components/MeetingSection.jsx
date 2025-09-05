import React from 'react';
import { Video } from "lucide-react";
import MeetingCard from './MeetingCard';

const MeetingSection = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <Video className="text-blue-500" size={20} /> Google Meet Sessions
      </h1>

      <div className="space-y-6">
        <MeetingCard
          title="Career & Job Opportunity Chat"
          description="Looking to hire me for your team or project? Let's explore how I can add value to your organization."
        />
        
        <MeetingCard
          title="Project Discussion"
          description="Have a project idea? Let's discuss requirements, timelines, and how we can bring your vision to life."
        />
        
        <MeetingCard
          title="Technical Consultation"
          description="Need advice on technology stack, architecture, or development best practices? Let's talk about solutions."
        />
      </div>
    </div>
  );
};

export default MeetingSection;
