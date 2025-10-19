// Componente FloatingParticles.jsx 
import { motion } from 'framer-motion';

const FloatingParticles = () => {
  const particles = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    startY: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
    size: Math.random() * 4 + 2,
    xOffset: (Math.random() - 0.5) * 300
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"
          style={{
            left: `${particle.left}%`,
            top: `${particle.startY}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            boxShadow: `0 0 ${particle.size * 3}px rgba(167, 139, 250, 0.8)`
          }}
          animate={{
            y: [0, -2000],
            x: [0, particle.xOffset],
            opacity: [0, 0.9, 0.6, 0]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
            delay: particle.delay
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;