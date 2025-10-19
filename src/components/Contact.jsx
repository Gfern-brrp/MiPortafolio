// Componente Contact.jsx
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Github } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 lg:px-12 bg-slate-900"
      ref={ref}
    >
      <motion.div
        className="text-center max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Título mejorado con mejor espaciado */}
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Tu tiempo e interés significan mucho.
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl lg:text-2xl text-slate-300 mb-4 leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Si deseas hablar sobre algún proyecto o simplemente conectar,
        </motion.p>

        <motion.p
          className="text-lg sm:text-xl lg:text-2xl text-purple-400 mb-16 leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          puedes contactarme aquí:
        </motion.p>

        {/* Botones con iconos */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.a
            href="mailto:gf.fernandezquiroz@gmail.com"
            className="group relative px-10 py-5 bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-indigo-700 hover:to-blue-600
 text-white rounded-full font-semibold text-lg overflow-hidden flex items-center justify-center gap-3"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Enviar un email</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.a
            href="https://github.com/Gfern-brrp"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-5 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border-1 border-white text-white rounded-full font-semibold text-lg overflow-hidden flex items-center justify-center gap-3"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5 relative z-10 group-hover:text-white transition-colors duration-300" />
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              GitHub
            </span>
            <motion.div
              className="absolute inset-0 "
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>

        {/* Mensaje de agradecimiento con animación suave */}
        <motion.p
          className="text-base sm:text-lg text-slate-500 italic"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Gracias por llegar hasta el final.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Contact;
