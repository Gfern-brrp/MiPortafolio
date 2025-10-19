const ExperienceCard = ({ period, title, company, description }) => {
  return (
    <div className="p-4 bg-slate-900/50 rounded-xl border border-purple-500/10 hover:border-purple-500/30 transition-all">
      <div className="text-xs sm:text-sm text-purple-400 font-semibold mb-1">
        {period}
      </div>
      <div className="text-white font-medium text-sm sm:text-base">
        {title}
      </div>
      <div className="text-purple-300 text-xs sm:text-sm mb-2">
        {company}
      </div>
      <div className="text-slate-400 text-xs">
        {description}
      </div>
    </div>
  );
};

export default ExperienceCard;