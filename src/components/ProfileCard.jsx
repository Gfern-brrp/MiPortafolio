import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Download } from "lucide-react";
import ContactItem from "./ContactItem";
import { profileData, aboutDescription, contactInfo } from "./aboutData";

const ProfileCard = ({ itemVariants, onCopyEmail, onDownloadCV }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <motion.div
      variants={itemVariants}
      className="lg:col-span-2 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-purple-500/20 shadow-xl hover:shadow-purple-500/20 transition-all duration-500 hover:border-purple-500/40"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-center sm:items-center gap-4 md:gap-6 mb-6">
        <motion.div 
          className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-blue-700 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl font-bold shadow-lg flex-shrink-0"
          whileHover={{ 
            scale: 1.1,
            rotate: [0, -5, 5, -5, 0],
            transition: { duration: 0.5 }
          }}
          whileTap={{ scale: 0.95 }}
        >
          {profileData.initials}
        </motion.div>
        <div className="text-center sm:text-left min-w-0 flex-1">
          <motion.h3 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {profileData.name}
          </motion.h3>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-purple-400 font-medium"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {profileData.title}
          </motion.p>
          <motion.p 
            className="text-slate-400 mt-1 md:mt-2 flex items-center justify-center sm:justify-start gap-2 text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.span
              animate={{ 
                y: [0, -3, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <MapPin size={14} className="text-purple-400 flex-shrink-0" />
            </motion.span>
            <span className="truncate">{profileData.location}</span>
          </motion.p>
        </div>
      </div>

      {/* About Description */}
      <motion.div 
        className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <motion.p 
          className="sm:text-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Ingeniero en Informática con sólida formación en{" "}
          <span className="text-purple-400 font-semibold">
            desarrollo de software
          </span>
          ,
          <span className="text-purple-400 font-semibold">
            {" "}
            análisis de datos
          </span>{" "}
          y{" "}
          <span className="text-purple-400 font-semibold">
            gestión de sistemas informáticos
          </span>
          .
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Durante mi práctica profesional en{" "}
          <strong className="text-white">Banchile Inversiones</strong>,
          participé en un proyecto de transformación digital,
          desarrollando una aplicación de mesa de ayuda utilizando{" "}
          <strong className="text-white">Microsoft Power Platform</strong>
          .
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Me caracterizo por mi{" "}
          <span className="text-purple-400">
            capacidad de aprendizaje rápido
          </span>
          , orientación a resultados y enfoque en la innovación
          tecnológica, aportando soluciones en automatización de procesos
          y mejora continua.
        </motion.p>
      </motion.div>

      {/* Contact Info */}
      <motion.div 
        className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <h4 className="text-base sm:text-lg font-semibold text-purple-400 mb-4 text-center sm:text-left">
          Información de Contacto
        </h4>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-3">
          {contactInfo.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
              >
                <ContactItem
                  icon={<IconComponent size={20} />}
                  text={item.text}
                  href={item.href}
                  copyable={item.copyable}
                  onCopy={onCopyEmail}
                />
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <motion.button
            onClick={onDownloadCV}
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
            className="mt-10 flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 ease-in-out hover:from-rose-500 hover:via-pink-400 hover:to-fuchsia-500 text-white rounded-xl font-semibold text-sm sm:text-base shadow-lg shadow-emerald-500/30 relative overflow-hidden group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)",
              transition: {
                scale: { duration: 0.3 },
                boxShadow: { duration: 0.3 }
              }
            }}
            whileTap={{ 
              scale: [1, 0.95, 1.05, 0.95, 1],
              transition: {
                duration: 0.9,
                ease: "easeInOut"
              }
            }}
          >
            <motion.span
              animate={isHovering ? { 
                rotate: [0, 10, -10, 10, 0],
              } : { rotate: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut"
              }}
            >
              <Download size={20} className="relative z-10" />
            </motion.span>
            <span className="relative z-10">Descargar CV</span>
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProfileCard;