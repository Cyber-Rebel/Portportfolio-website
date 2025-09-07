import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MouseFollower = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      // if hovered element has data-cursor
      if (e.target.dataset.cursor) {
        setCursorText(e.target.dataset.cursor);
      } else {
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center"
      animate={{
        x: mousePos.x - 40, 
        y: mousePos.y - 40,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
    >
      {cursorText ? (
        <div className="px-3 py-1 bg-white text-black rounded-lg text-sm font-medium shadow-lg">
          {cursorText}
        </div>
      ) : (
        <div className="w-6 h-6 rounded-full bg-white"></div>
      )}
    </motion.div>
  );
};

export default MouseFollower;
