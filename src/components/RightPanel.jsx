import React from "react";

const RightPanel = ({ date, timeSlots, selectedTime, setSelectedTime }) => {
  return (
    <div className="w-full md:w-1/4 p-4 space-y-4">
      <h3 className="font-semibold mb-2">{date.toDateString()}</h3>
      {timeSlots.map((time) => (
        <button
          key={time}
          onClick={() => setSelectedTime(time)}
          className={`block w-full px-4 py-2 rounded-md border text-left ${
            selectedTime === time ? "bg-white text-black" : "border-gray-600"
          }`}
        >
          {time}
        </button>
      ))}
    </div>
  );
};

export default RightPanel;
