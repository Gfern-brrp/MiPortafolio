import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const ProfileImage = ({ src, alt = "Profile", className = "" }) => {
  const imageRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(true);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

  useEffect(() => {
    setIsDesktop(window.innerWidth > 1024);

    const handleResize = () => setIsDesktop(window.innerWidth > 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (e) => {
    if (!imageRef.current || !isDesktop) return;

    const rect = imageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      className={`flex justify-center lg:order-last order-first ${className}`}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <motion.div
        ref={imageRef}
        className="relative w-full max-w-md aspect-[4/5]"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: isDesktop ? rotateX : 0,
          rotateY: isDesktop ? rotateY : 0,
          transformStyle: "preserve-3d",
          perspective: 1000,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      >
        <div className="absolute -inset-2 bg-gradient-to-br from-purple-500 to-cyan-400 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-30 animate-morph" />
        <motion.div
          className="relative w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] border-2 border-purple-500/50 overflow-hidden animate-morph flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProfileImage;