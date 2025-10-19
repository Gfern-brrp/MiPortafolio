import { languages } from "./aboutData";

const LanguageSkills = () => {
  return (
    <div>
      <h4 className="text-lg sm:text-xl font-bold text-white mb-4 text-center sm:text-left">
        Idiomas
      </h4>
      <div className="space-y-3">
        {languages.map((lang, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-slate-900/50 rounded-xl"
          >
            <span className="text-white font-medium text-sm sm:text-base">
              {lang.name}
            </span>
            <span className="text-purple-400 text-xs sm:text-sm">
              {lang.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSkills;