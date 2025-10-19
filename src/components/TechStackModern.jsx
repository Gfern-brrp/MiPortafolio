import { motion } from "framer-motion";

const TechItem = ({ logo, name, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      className="flex flex-col items-center gap-3 group cursor-pointer"
    >
      <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl bg-slate-800/80 border border-slate-700/50 group-hover:border-purple-500/50 transition-all duration-300 group-hover:bg-slate-700/50 group-hover:scale-105 p-3">
        <img 
          src={logo} 
          alt={name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <span className="text-xs sm:text-sm text-slate-400 group-hover:text-purple-300 transition-colors duration-300 font-medium text-center">
        {name}
      </span>
    </motion.div>
  );
};

const TechStackModern = () => {
  const allTechs = [
    { 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", 
      name: "React" 
    },
    { 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", 
      name: "Next.js" 
    },
    { 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", 
      name: "Tailwind" 
    },
    { 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", 
      name: "Node.js" 
    },
    { 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", 
      name: "Python" 
    },
    { 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/187px-Microsoft_Azure_Logo.svg.png", 
      name: "Power Platform" 
    },
    { 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", 
      name: "PostgreSQL" 
    },
    { 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", 
      name: "MongoDB" 
    },
    { 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", 
      name: "MySQL" 
    },
  ];

  const additionalSkills = [
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Vercel", logo: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png" },
  ];

  const textOnlySkills = ["Scrum", "Power BI", "Excel", "Supabase"];

  return (
    <div className="w-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-purple-500/20 shadow-xl">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
        Stack Tecnológico
      </h2>

      <div className="flex flex-wrap gap-6 sm:gap-8 lg:gap-10 justify-center sm:justify-start mb-8">
        {allTechs.map((tech, index) => (
          <TechItem
            key={tech.name}
            logo={tech.logo}
            name={tech.name}
            delay={index * 0.05}
          />
        ))}
      </div>

      <div className="pt-6 sm:pt-8 border-t border-slate-700">
        <h3 className="text-base sm:text-lg font-semibold text-purple-400 mb-4 sm:mb-6 uppercase tracking-wider">
          Herramientas Adicionales
        </h3>
        <div className="flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-start">
          {additionalSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="flex items-center gap-2 px-4 py-2 bg-slate-800/80 border border-slate-700/50 rounded-full hover:border-purple-500/50 hover:bg-slate-700/50 transition-all duration-300 cursor-default group"
            >
              <img 
                src={skill.logo} 
                alt={skill.name}
                className="w-5 h-5 object-contain group-hover:scale-110 transition-transform"
              />
              <span className="text-xs sm:text-sm text-slate-300 group-hover:text-purple-300 transition-colors font-medium">
                {skill.name}
              </span>
            </motion.div>
          ))}
          {textOnlySkills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: (additionalSkills.length + index) * 0.05, duration: 0.3 }}
              className="px-4 sm:px-5 py-2 sm:py-2.5 bg-slate-800/80 border border-slate-700/50 rounded-full text-xs sm:text-sm text-slate-300 hover:border-purple-500/50 hover:text-purple-300 hover:bg-slate-700/50 transition-all duration-300 cursor-default font-medium"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackModern;