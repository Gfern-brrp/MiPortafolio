import SoftSkills from "./SoftSkills";
const SkillCard = ({ name, icon, color }) => {
  return (
    <div
      className={`w-full bg-gradient-to-br ${color} p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer`}
    >
      <div className="flex flex-col items-center gap-2">
        <div className="text-white group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <span className="text-white font-semibold text-sm">{name}</span>
      </div>
      
    </div>
  );
};

export default SkillCard;