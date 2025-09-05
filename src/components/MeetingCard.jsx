import React from 'react';
import DurationButton from './DurationButton';

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

export default MeetingCard;
