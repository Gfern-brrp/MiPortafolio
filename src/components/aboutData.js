import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
} from "lucide-react";
import { RiMicrosoftFill } from "react-icons/ri";

// Importar íconos reales de tecnologías
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,

  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiLinkedin,
  SiMicrostation,
  SiGithub,
} from "react-icons/si";



export const profileData = {
  name: "Guillermo Fernández",
  title: "Ingeniero en Informática",
  location: "Region Metropolitana",
  initials: "GF",
  email: "gf.fernandezquiroz@gmail.com",
  phone: "+56 9 6154 2374",
  cvPath: "/GuillermoFernandez_CV.pdf",
};

export const aboutDescription = [
  {
    text: "Ingeniero en Informática con sólida formación en ",
    highlights: ["desarrollo de software", "análisis de datos", "gestión de sistemas informáticos"],
  },
  {
    text: "Durante mi práctica profesional en Banchile Inversiones, participé en un proyecto de transformación digital, desarrollando una aplicación de mesa de ayuda utilizando Microsoft Power Platform.",
    highlights: ["Banchile Inversiones", "Microsoft Power Platform"],
  },
  {
    text: "Me caracterizo por mi capacidad de aprendizaje rápido, orientación a resultados y enfoque en la innovación tecnológica, aportando soluciones en automatización de procesos y mejora continua.",
    highlights: ["capacidad de aprendizaje rápido"],
  },
];

export const contactInfo = [
  {
    icon: Mail,
    text: "gf.fernandezquiroz@gmail.com",
    href: "mailto:gf.fernandezquiroz@gmail.com",
    copyable: true,
  },
  {
    icon: Phone,
    text: "+56 9 6154 2374",
    href: "tel:+56961542374",
  },
  {
    icon: MapPin,
    text: "Region Metropolitana",
  },
  {
    icon: SiGithub,
    text: "GitHub",
    href: "https://github.com/Gfern-brrp",
  },
];

export const educationData = [
  {
    period: "2021 - 2024",
    degree: "Ingeniería en Informática",
    institution: "Instituto Profesional Inacap",
  },
  {
    period: "2010 - 2013",
    degree: "Técnico Eléctrico Industrial",
    institution: "Liceo Industrial Ignacio Domeyko",
  },
];

export const experienceData = [
  {
    title: "Práctica Profesional",
    company: "Banchile Inversiones",
    period: "Abr - Jun 2024",
    description: "Desarrollo de aplicación de mesa de ayuda con Power Platform",
  },
  {
    title: "Eléctrico Industrial",
    company: "Heavy Duty Chile / Betrac SA",
    period: "2013 - 2020",
    description: "Instalación y mantenimiento de sistemas eléctricos",
  },
];

export const technicalSkills = {
  frontend: [
    {
      name: "React",
      icon: SiReact,
      color: "from-cyan-400 to-blue-500",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "from-slate-700 to-slate-900",
    },
    {
      name: "Tailwind",
      icon: SiTailwindcss,
      color: "from-sky-400 to-cyan-500",
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: SiNodedotjs,
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "Python",
      icon: SiPython,
      color: "from-blue-500 to-yellow-400",
    },
    {
      name: "Power Platform",
      icon: SiPython,
      color: "from-red-500 to-orange-500",
    },
  ],
  database: [
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      color: "from-blue-600 to-blue-400",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "from-green-600 to-green-400",
    },
    {
      name: "MySQL",
      icon: SiMysql,
      color: "from-orange-500 to-yellow-500",
    },
  ],
};

export const additionalSkills = [
  "Git/GitHub",
  "Docker",
  "Scrum",
  "Power BI",
  "Excel",
  "Vercel",
  "Supabase",
];

export const softSkills = [
  "Adaptabilidad",
  "Comunicación efectiva",
  "Liderazgo",
  "Resolución de problemas",
  "Trabajo en equipo",
];

export const languages = [
  {
    name: "Español",
    level: "Nativo",
  },
  {
    name: "Inglés",
    level: "Técnico",
  },
];