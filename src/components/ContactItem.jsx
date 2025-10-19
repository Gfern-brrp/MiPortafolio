import { Copy } from "lucide-react";

const ContactItem = ({ icon, text, href, copyable, onCopy, alignRight = false }) => {
  return (
    <div className={`flex items-center gap-2 ${alignRight ? 'justify-between sm:justify-end' : 'justify-between sm:justify-start'}`}>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-slate-300 hover:text-purple-400 transition-all duration-300 p-2 rounded-xl hover:bg-purple-500/10 group flex-shrink-0"
        >
          <span className="text-text-main group-hover:scale-110 transition-transform flex-shrink-0">
            {icon}
          </span>
          <span className="text-base sm:text-lg truncate">{text}</span>
        </a>
      ) : (
        <div className="flex items-center gap-3 text-slate-300 p-2 rounded-xl group flex-shrink-0">
          <span className="text-text-main flex-shrink-0">{icon}</span>
          <span className="text-sm sm:text-base truncate">{text}</span>
        </div>
      )}
      {copyable && (
        <button
          onClick={onCopy}
          className="p-2 text-text-main hover:text-purple-300 hover:bg-purple-500/10 rounded-xl transition-all duration-300 group flex-shrink-0"
          title="Copiar email"
        >
          <Copy
            size={18}
            className="group-hover:scale-110 transition-transform"
          />
        </button>
      )}
    </div>
  );
};

export default ContactItem;