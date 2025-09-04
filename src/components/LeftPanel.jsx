import React from "react";

const LeftPanel = ({ duration, setDuration }) => {
  return (
    <div className="w-full md:w-1/4 space-y-6 p-4">
      <div className="flex items-center space-x-3">
        <img
          src="https://via.placeholder.com/40"
          alt="profile"
          className="rounded-full"
        />
        <div>
          <h2 className="font-semibold">Nilesh Patil</h2>
          <p className="text-gray-400 text-sm">
            Quick Chat -  Work Discussion
          </p>
        </div>
      </div>

      <p className="text-gray-400 text-sm">Let’s Collaborate!</p>

     

      <div className="flex items-center gap-2 text-sm text-gray-300">
        <img
          src="https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_color_2x_web_96dp.png"
          alt="Google Meet"
          className="w-24"
        />
      </div>

    </div>
  );
};

export default LeftPanel;
