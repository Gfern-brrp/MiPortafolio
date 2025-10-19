import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";
// import SkillCard from "./SkillCard";
import TechStackModern from "./TechStackModern";
import ProfileCard from "./ProfileCard";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";
import SoftSkills from "./SoftSkills";
import LanguageSkills from "./LanguageSkills";
import { useToast } from "./useToast";
import {
  profileData,
  educationData,
  experienceData,
  technicalSkills,
  additionalSkills,
} from "./aboutData";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { showToast, toastMessage, showNotification, copyToClipboard } =
    useToast();

  const handleCopyEmail = async () => {
    await copyToClipboard(profileData.email, "¡Email copiado al portapapeles!");
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = profileData.cvPath;
    link.download = profileData.cvPath.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showNotification("¡CV descargado!");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen py-12 sm:py-20 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent mb-4">
            Sobre mí
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Profile Card */}
          <ProfileCard
            itemVariants={itemVariants}
            onCopyEmail={handleCopyEmail}
            onDownloadCV={handleDownloadCV}
          />

          {/* Education & Experience Card */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl p-6 rounded-2xl sm:rounded-3xl border border-purple-500/20 shadow-xl hover:shadow-purple-500/20 transition-all duration-500 hover:border-purple-500/40"
          >
            {/* Education Section */}
            <div className="flex items-center gap-3 mb-6 mt-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <GraduationCap size={24} />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                Educación
              </h4>
            </div>

            <div className="space-y-4">
              {educationData.map((edu, index) => (
                <EducationCard
                  key={index}
                  period={edu.period}
                  degree={edu.degree}
                  institution={edu.institution}
                />
              ))}
            </div>

            {/* Experience Section */}
            <div className="flex items-center gap-3 mb-6 mt-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Briefcase size={24} />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                Experiencia
              </h4>
            </div>

            <div className="space-y-4">
              {experienceData.map((exp, index) => (
                <ExperienceCard
                  key={index}
                  period={exp.period}
                  title={exp.title}
                  company={exp.company}
                  description={exp.description}
                />
              ))}
            </div>
          </motion.div>

          {/* Technical Skills
          <motion.div
            variants={itemVariants}
            className="lg:col-span-3 grid sm:grid-cols-1 gap-6 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-purple-500/20 shadow-xl hover:shadow-purple-500/20 transition-all duration-500 hover:border-purple-500/40"
          >
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center sm:text-left">
              Stack Tecnológico
            </h4>

            <div className="space-y-6"> */}
          {/* Frontend */}

          {/* Backend */}

            <div className="lg:col-span-3">
              <TechStackModern />
            </div>


          {/* Database */}

          {/* Additional Skills */}
          {/* <div className="pt-4 border-t border-slate-700">
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  {additionalSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 sm:px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs sm:text-sm text-purple-300 hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300 cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div> */}
          {/* </div>
          </motion.div> */}

          {/* Soft Skills & Languages */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-3 grid sm:grid-cols-2 gap-6 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-purple-500/20 shadow-xl hover:shadow-purple-500/20 transition-all duration-500 hover:border-purple-500/40"
          >
            <SoftSkills />
            <LanguageSkills />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
