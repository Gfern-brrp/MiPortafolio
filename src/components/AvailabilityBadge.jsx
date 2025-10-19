import { motion } from "framer-motion";

const AvailabilityBadge = ({ text = "Disponible para proyectos", className = "" }) => {
  return (
    <motion.div
      className={`inline-block px-6 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300 ${className}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      {text}
    </motion.div>
  );
};

export default AvailabilityBadge;