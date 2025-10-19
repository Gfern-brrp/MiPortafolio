// Componente BackgroundEffects.jsx 
import { motion } from 'framer-motion';
import FloatingParticles from './FloatingParticles';

const BackgroundEffects = () => {
  return (
    <>
      <div className="fixed inset-0 z-[1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 pointer-events-none" />
        
        {/* Brillo esquina superior derecha */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] pointer-events-none">
          <div className="w-full h-full bg-gradient-to-bl from-purple-300/30 via-purple-500/20 to-transparent rounded-full blur-3xl" />
        </div>
        
        {/* Brillo esquina inferior izquierda */}
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] pointer-events-none">
          <div className="w-full h-full bg-gradient-to-tr from-cyan-300/30 via-blue-500/20 to-transparent rounded-full blur-3xl" />
        </div>
      </div>
      
      <FloatingParticles />

      <motion.div
        className="fixed w-[500px] h-[500px] bg-gradient-to-br from-purple-500 to-cyan-400 rounded-full blur-[100px] opacity-30 z-[-1] pointer-events-none"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -30, 20, 0],
          rotate: [0, 120, 240, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ top: '-200px', right: '-200px' }}
      />
      
      <motion.div
        className="fixed w-[400px] h-[400px] bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-[100px] opacity-30 z-[-1] pointer-events-none"
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 30, -20, 0],
          rotate: [0, -120, -240, -360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          delay: 10
        }}
        style={{ bottom: '-150px', left: '-150px' }}
      />
      
      {/* Decorative Lines */}
      <div className="fixed top-[20%] right-[15%] w-0.5 h-52 bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-30 rotate-[25deg] z-[-1] pointer-events-none" />
      <div className="fixed bottom-[20%] left-[10%] w-0.5 h-52 bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-30 -rotate-[25deg] z-[-1] pointer-events-none" />
    </>
  );
};

export default BackgroundEffects;