const EducationCard = ({ period, degree, institution }) => {
  return (
    <div className="p-4 bg-slate-900/50 rounded-xl border border-purple-500/10">
      <div className="text-xs sm:text-sm text-purple-400 font-semibold mb-1">
        {period}
      </div>
      <div className="text-white font-medium text-sm sm:text-base">
        {degree}
      </div>
      <div className="text-slate-400 text-xs sm:text-sm mt-1">
        {institution}
      </div>
    </div>
  );
};

export default EducationCard;