import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const logos = [
  "https://nodejs.org/static/logos/nodejsLight.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  "https://www.vectorlogo.zone/logos/npmjs/npmjs-icon.svg",
  "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg", // add here name and crate a objects 
  "https://cdn.imgbin.com/18/6/24/html-logo-html-file-document-icon-for-web-development-K5HzDHMD.jpg",
  "https://cdn.imgbin.com/13/17/8/javascript-js-gear-icon-for-javascript-settings-BvkXzGAy.jpg"
];

const AnimatedBorderCard = () => {
  const containerRef = useRef(null);
  const [positions, setPositions] = useState(
    logos.map(() => ({ x: Math.random() * 300, y: Math.random() * 300 }))
  );

  // collision + repel logic
  useEffect(() => {
    const interval = setInterval(() => {
      setPositions((prev) => {
        const newPositions = [...prev];
        for (let i = 0; i < newPositions.length; i++) {
          for (let j = i + 1; j < newPositions.length; j++) {
            const dx = newPositions[i].x - newPositions[j].x;
            const dy = newPositions[i].y - newPositions[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 80) {
              const angle = Math.atan2(dy, dx);
              const move = 10;
              newPositions[i].x += Math.cos(angle) * move;
              newPositions[i].y += Math.sin(angle) * move;
              newPositions[j].x -= Math.cos(angle) * move;
              newPositions[j].y -= Math.sin(angle) * move;
            }
          }
        }
        return newPositions;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Top Divider with "Tech Stack" */}
      <div className="flex items-center justify-center w-full px-4 py-12">
        <span className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
        <span className="mx-4 text-gray-300 italic text-lg">Tech Stack</span>
        <span className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
      </div>

      {/* Floating Logos Card */}
      <div className="flex items-center justify-center pb-20">
        <div className="relative w-[80%] h-[400px] rounded-xl overflow-hidden bg-black">
          {/* Animated glowing border */}
          <div className="absolute inset-0 rounded-xl p-[2px] bg-gradient-to-r from-purple-500 via-violet-400 to-purple-700 animate-glow">
            <div
              ref={containerRef}
              className="relative w-full h-full bg-black rounded-xl"
            >
              {logos.map((src, idx) => (
                <motion.img
                  key={idx}
                  src={src}
                  alt="logo"
                  className="w-16 h-16 absolute cursor-grab"
                  drag
                  dragConstraints={containerRef}
                  style={{ x: positions[idx].x, y: positions[idx].y }}
                />  
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBorderCard;
