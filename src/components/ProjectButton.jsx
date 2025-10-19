import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const ProjectButton = ({ href = "#projects", text = "Ver mis proyectos", className = "" }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.8 }}
      className={`pt-6 ${className}`}
    >
      <motion.a
        href={href}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 cursor-pointer"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)",
          transition: {
            scale: { duration: 0.3 },
            boxShadow: { duration: 0.3 },
          },
        }}
        whileTap={{
          scale: [1, 0.95, 1.05, 0.95, 1],
          transition: {
            duration: 0.9,
            ease: "easeInOut",
          },
        }}
      >
        <motion.span
          animate={
            isHovering
              ? {
                  x: [0, 5, -5, 5, 0],
                }
              : { x: 0 }
          }
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <Briefcase size={20} />
        </motion.span>
        <span>{text}</span>
      </motion.a>
    </motion.div>
  );
};

export default ProjectButton;