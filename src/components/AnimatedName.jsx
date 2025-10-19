import { useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const AnimatedName = ({ name, className = "" }) => {
  const nameRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMouseEnter = () => {
    if (!isAnimating) {
      setIsHovering(true);
      setIsAnimating(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };

  return (
    <span
      ref={nameRef}
      className={`inline-block cursor-pointer ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {name.split("").map((char, index) => (
        <motion.span
          key={index}
          className={`inline-block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent ${
            char === " " ? "w-4" : ""
          }`}
          initial={{ y: -100, opacity: 0 }}
          animate={
            isAnimating
              ? {
                  y: [0, -20, 0],
                  opacity: 1,
                }
              : { y: 0, opacity: 1 }
          }
          transition={{
            duration: isAnimating ? 0.5 : 0.8,
            delay: isAnimating ? index * 0.05 : 0.5 + index * 0.05,
            ease: "easeInOut",
            type: isAnimating ? "tween" : "spring",
            bounce: 0.5,
          }}
          onAnimationComplete={index === name.length - 1 ? handleAnimationComplete : undefined}
          style={{
            display: "inline-block",
            minWidth: char === " " ? "0.5rem" : "auto",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

export default AnimatedName;