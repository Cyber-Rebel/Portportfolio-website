import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MouseFollower = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full bg-blue-400 pointer-events-none z-50"
      animate={{
        x: mousePos.x - 12, // subtract radius for center alignment
        y: mousePos.y - 12,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
    />
  );
};

export default MouseFollower;

// backdrop-brightness- 
// backdrop blur 
