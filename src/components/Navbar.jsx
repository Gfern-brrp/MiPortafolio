// Componente Navbar.jsx 
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Inicio' },
    { href: '#about', label: 'Sobre Mí' },
    { href: '#projects', label: 'Proyectos' },
    { href: '#contact', label: 'Contacto' }
  ];

  // 🟢 FUNCIÓN MEJORADA: Maneja el cierre y la navegación en móvil
  const handleMobileNavLinkClick = (e, href) => {
    // 1. Evita que el navegador salte inmediatamente al hash
    e.preventDefault(); 
    
    // 2. Cierra el menú, lo que dispara la animación 'exit' de framer-motion
    setIsOpen(false);

    // 3. Espera 300ms (la duración de tu transición) y luego fuerza la navegación
    setTimeout(() => {
      window.location.hash = href;
    }, 300); 
  };
  
  // Nota: Eliminé la función 'handleNavClick' original ya que no prevenía el default.

  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-xl border-b border-purple-500/20 z-[1000]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex justify-between items-center">
        <motion.div
          className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          Portafolio
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-12">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-slate-400 hover:text-white font-medium transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-slate-900/98 backdrop-blur-xl border-t border-purple-500/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col gap-6 p-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    // 🚨 Se elimina 'href' del a, ya que lo estamos manejando programáticamente en el onClick
                    // Se usa la clase original
                    className="text-slate-400 hover:text-white font-medium transition-colors text-lg"
                    // 🟢 Se llama a la nueva función
                    onClick={(e) => handleMobileNavLinkClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;