export const projectsData = [
  {
    id: 1,
    imgs: [
      "/img/news/img-01.png",
      "/img/news/img-02.png",
      "/img/news/img-03.png",
      "/img/news/img-04.png",
      "/img/news/img-05.png",
    ],
    title: "Landing Page News Homepage",
    slug: "landing-page-news-homepage",

    description:
      "Landing page responsiva inspirada en un challenge de Frontend Mentor, enfocada en noticias, con navegación móvil y efectos visuales.",

    longDescription: `Esta landing page de noticias, diseñada como parte de un reto de Frontend Mentor, ha sido construida bajo un stack tecnológico moderno y robusto:\n
React para componentes dinámicos, Astro como el framework principal para rendimiento, y Tailwind CSS para un styling rápido y consistente.\n
\n
El desarrollo priorizó un enfoque mobile-first, resultando en un diseño completamente responsive que emplea CSS Grid y Flexbox para una disposición de contenido flexible y bien estructurada.\n
\n
Se asegura una experiencia de usuario pulida mediante un menú hamburguesa interactivo y el uso efectivo de estados (hover, focus) y transiciones suaves definidas con Tailwind.`,

    tech: ["Astro", "Tailwind", "JavaScript", "Responsive Design"],
    gradient: "from-purple-500 to-blue-500",
    demoLink: "https://landingpage-news.netlify.app/",
    githubLink:
      "https://github.com/Gfern-brrp/landingPage-news-homepage---front-end-mentor",
    features: [
      "Diseño móvil-primero",
      "Menú hamburguesa funcional",
      "Estilos responsivos usando Flexbox y Grid",
      "Hover y focus states bien definidos",
      "Adaptación a pantalla completa",
      "Reutilización de clases Tailwind",
      "Desplegado en Netlify",
    ],
  },
  {
    id: 2,
    imgs: [
      "/img/extensions/img_01.png",
      "/img/extensions/img_02.png",
      "/img/extensions/img_03.png",
      "/img/extensions/img_04.png",
      "/img/extensions/img_05.png",
      "/img/extensions/img_06.png",
    ],
    title: "Browser Extension Manager UI",
    slug: "browser-extension-manager-ui",
    description:
      "Interfaz de usuario para gestión de extensiones de navegador, con posibilidad de activar/desactivar, filtrado e interacción dinámica.",
    longDescription: `Aplicación UI para gestionar extensiones de navegador .  

La aplicación permite gestionar extensiones del navegador mediante funcionalidades de activación y desactivación dinámica, filtrado por estado y eliminación controlada de elementos.

Incluye un modal de confirmación previo a la eliminación para prevenir acciones no deseadas, y un sistema de notificaciones tipo toast que comunica al usuario el resultado de cada operación en tiempo real.

Además, implementa un modo claro/oscuro con transiciones suaves, optimizando la experiencia de usuario (UX) y manteniendo la coherencia visual a través de animaciones fluidas.`,
    tech: ["Vite", "Tailwind", "JavaScript", "Responsive Design", "UI Theming"],
    gradient: "from-blue-500 to-purple-500",
    demoLink: "https://manager-exten-browser.netlify.app/",
    githubLink: "https://github.com/Gfern-brrp/Browser-extension-manager-UI",
    features: [
      "Toggle de activación/inactivación de extensiones",
      "Filtrado por estado activo/inactivo",
      "Eliminación de extensiones de la lista",
      "Cambio de tema de color (modo claro/oscuro)",
      "Diseño responsivo para móvil y escritorio",
      "Animaciones hover y focus adaptadas",
      "Desplegado en Netlify",
      "Código limpio y bien estructurado",
    ],
  },
];
