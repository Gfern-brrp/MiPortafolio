// Componente Projects.jsx
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { projectsData } from "./../projectsData";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const total = projectsData.length;
  const remainder = total % 3;
  const fullRows = Math.floor(total / 3);

  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-6 lg:px-12 "
      ref={ref}
    >
      <div className="max-w-7xl mx-auto ">
        <motion.h2
          // className="text-4xl lg:text-6xl font-bold mb-16 text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]"
          // className="text-4xl lg:text-6xl font-bold mb-16 bg-gradient-to-r from-sky-300 via-indigo-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(99,102,241,0.4)]"
className="text-4xl lg:text-6xl font-bold mb-16 bg-gradient-to-r from-white via-sky-300 to-sky-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(167,139,250,0.5)] "

          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Mis Proyectos
        </motion.h2>

        {/* Vista MD: Grid simple de 2 columnas con todos los proyectos */}
        <div className="md:grid md:grid-cols-2 md:gap-8 lg:hidden">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:-translate-y-4 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 flex flex-col mb-8 md:mb-0"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden flex-shrink-0`}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-full h-full"
                >
                  <img
                    src={project.imgs[0]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-3 hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-purple-500/15 border border-purple-500/30 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mt-auto min-w-0">
                  <Link
                    to={`/project/${project.id}`}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-1 whitespace-nowrap flex-shrink-0"
                  >
                    Ver Detalles <ExternalLink size={14} />
                  </Link>
                  <Link
                    target="_blank"
                    to={project.demoLink}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-700 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 hover:-translate-y-1 whitespace-nowrap flex-shrink-0"
                  >
                    Ver Demo <ExternalLink size={14} />
                  </Link>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-semibold hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 flex-shrink-0"
                  >
                    <Github size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vista LG: Layout original con 3 arriba y 2 centrados abajo */}
        <div className="hidden lg:block">
          {/* Filas completas de 3 */}
          <div className="grid grid-cols-3 gap-8 mb-8">
            {projectsData.slice(0, fullRows * 3).map((project, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:-translate-y-4 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 flex flex-col"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div
                  className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden flex-shrink-0`}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-full h-full"
                  >
                    <img
                      src={project.imgs[0]}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-3 hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-purple-500/15 border border-purple-500/30 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto min-w-0">
                    <Link
                      to={`/project/${project.id}`}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-1 whitespace-nowrap flex-shrink-0"
                    >
                      Ver Detalles <ExternalLink size={14} />
                    </Link>
                    <Link
                      target="_blank"
                      to={project.demoLink}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-700 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 hover:-translate-y-1 whitespace-nowrap flex-shrink-0"
                    >
                      Ver Demo <ExternalLink size={14} />
                    </Link>

                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-semibold hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 flex-shrink-0"
                    >
                      <Github size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Última fila con elementos restantes centrados */}
          {remainder > 0 && (
            <div
              className={`grid gap-8 ${
                remainder === 1 ? "grid-cols-3" : "grid-cols-2"
              } ${remainder === 1 ? "" : "max-w-[66.666%] mx-auto"}`}
            >
              {projectsData.slice(fullRows * 3).map((project, index) => {
                const actualIndex = fullRows * 3 + index;
                return (
                  <motion.div
                    key={actualIndex}
                    className={`bg-slate-800/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:-translate-y-4 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 flex flex-col ${
                      remainder === 1 ? "col-start-2" : ""
                    }`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: actualIndex * 0.15 }}
                  >
                    <div
                      className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden flex-shrink-0`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="w-full h-full"
                      >
                        <img
                          src={project.imgs[0]}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-bold mb-3 hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-purple-500/15 border border-purple-500/30 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2 mt-auto min-w-0">
                        <Link
                          to={`/project/${project.id}`}
                          target="_blank"
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-1 whitespace-nowrap flex-shrink-0"
                        >
                          Ver Detalles <ExternalLink size={14} />
                        </Link>
                        <Link
                          target="_blank"
                          to={project.demoLink}
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-700 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 hover:-translate-y-1 whitespace-nowrap flex-shrink-0"
                        >
                          Ver Demo <ExternalLink size={14} />
                        </Link>

                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-semibold hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 flex-shrink-0"
                        >
                          <Github size={14} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;