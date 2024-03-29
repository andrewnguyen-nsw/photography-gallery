"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import React from "react";

const CustomCursorWrapper = ({ children }) => {
  let mouseX = useMotionValue(300);
  let mouseY = useMotionValue(300);

  const handleMouseMove = ({ clientX, clientY }) => {
    mouseX.set(clientX + window.scrollX);
    mouseY.set(clientY + window.scrollY);
  };

  return (
    <div className="relative" onMouseMove={handleMouseMove}>
      <motion.div
        id="follow-cursor"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: useMotionTemplate`
						radial-gradient(
							384px circle at ${mouseX}px ${mouseY}px, 
							rgba(16, 185, 129, 0.25), 
							transparent 70%
						)
					`,
        }}
      />
      {children}
    </div>
  );
};

export default CustomCursorWrapper;
