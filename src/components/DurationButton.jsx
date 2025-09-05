import React from 'react';
import { Clock } from "lucide-react";

const DurationButton = ({ label }) => (
  <button className="flex items-center gap-1 bg-zinc-800 px-4 py-2 rounded-lg text-sm hover:bg-blue-600 hover:text-white transition shadow">
    <Clock size={14} /> {label}
  </button>
);

export default DurationButton;
