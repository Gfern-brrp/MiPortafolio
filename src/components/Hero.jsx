import { motion } from "framer-motion";
import AvailabilityBadge from "./AvailabilityBadge";
import AnimatedName from "./AnimatedName";
import TypewriterText from "./TypewriterText";
import TechBadges from "./TechBadges";
import ProjectButton from "./ProjectButton";
import ProfileImage from "./ProfileImage";

const Hero = () => {
  const name = "Guillermo Fernandez";
  const roles = ["Frontend", "Backend", "Full Stack"];
  const technologies = ["React", "Node.js", "TypeScript", "MongoDB"];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-24 pb-20"
    >
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
          {/* <AvailabilityBadge /> */}

          <div className="space-y-2">
            <motion.h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                ¡Hola!, soy{" "}
              </motion.span>
              <AnimatedName name={name} />
            </motion.h1>

            <TypewriterText words={roles} prefix="Desarrollador" />

            <motion.p
              className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              Ingeniero en Informática con experiencia en desarrollo de software,
              análisis de datos, diseño web responsivo y automatización de
              procesos mediante herramientas. Me apasiona aplicar la
              tecnología para optimizar flujos de trabajo y convertir desafíos en
              soluciones eficientes.
            </motion.p>
          </div>

          <TechBadges technologies={technologies} />

          <ProjectButton />
        </div>

        {/* Image */}
        <ProfileImage src="/profile.jpeg" alt="Guillermo Fernandez" />
      </div>
    </section>
  );
};

export default Hero;