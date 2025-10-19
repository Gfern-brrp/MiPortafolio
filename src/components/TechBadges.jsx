import { motion } from "framer-motion";

const TechBadges = ({ technologies, className = "" }) => {
  return (
    <motion.div
      className={`flex flex-wrap gap-3 justify-center lg:justify-start ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.6 }}
    >
      {technologies.map((tech) => (
        <span
          key={tech}
          className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm text-purple-300"
        >
          {tech}
        </span>
      ))}
    </motion.div>
  );
};

export default TechBadges;