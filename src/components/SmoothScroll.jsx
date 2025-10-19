import { useEffect } from 'react';

const SmoothScroll = () => {
  useEffect(() => {
    // Smooth scroll para todos los enlaces ancla
    const handleClick = (e) => {
      // Buscar el enlace más cercano
      let target = e.target;
      
      // Si hicimos clic en un elemento dentro del enlace, buscar el enlace padre
      while (target && target.tagName !== 'A') {
        target = target.parentElement;
        if (!target) return;
      }
      
      // Verificar que sea un enlace ancla
      const href = target.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      if (href === '#') return;
      
      const element = document.querySelector(href);
      if (!element) return;
      
      e.preventDefault();
      e.stopPropagation();
      
      const offsetTop = element.offsetTop - 80; // 80px para el navbar
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    };

    // Usar capture phase para capturar el evento antes
    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, []);

  useEffect(() => {
    // Añadir CSS personalizado para el scrollbar
    const style = document.createElement('style');
    style.textContent = `
      /* Para navegadores Webkit (Chrome, Safari, Edge) */
      ::-webkit-scrollbar {
        width: 12px;
      }

      ::-webkit-scrollbar-track {
        background: #0f172a;
        border-left: 1px solid rgba(147, 51, 234, 0.1);
      }

      ::-webkit-scrollbar-thumb {
        background: linear-gradient(180deg, #a855f7 0%, #06b6d4 100%);
        border-radius: 10px;
        border: 2px solid #0f172a;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(180deg, #9333ea 0%, #0891b2 100%);
        box-shadow: 0 0 10px rgba(168, 85, 247, 0.5);
      }

      /* Smooth scroll nativo */
      html {
        scroll-behavior: smooth;
        scroll-padding-top: 80px;
      }

      /* Opcional: Para Firefox */
      * {
        scrollbar-width: thin;
        scrollbar-color: #a855f7 #0f172a;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null; // Este componente no renderiza nada
};

export default SmoothScroll;