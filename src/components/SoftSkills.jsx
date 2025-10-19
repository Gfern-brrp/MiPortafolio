import { softSkills } from "./aboutData";

const SoftSkills = () => {
  return (
    <div>
      <h4 className="text-lg sm:text-xl font-bold text-white mb-4 text-center sm:text-left">
        Habilidades Blandas
      </h4>
      <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
        {softSkills.map((skill, index) => (
          <span
            key={index}
            className="px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-xs sm:text-sm text-purple-200 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 cursor-pointer"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SoftSkills;