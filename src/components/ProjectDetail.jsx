import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, ChevronLeft, ChevronRight, X, Sparkles } from 'lucide-react';
import { projectsData } from '../projectsData';
import BackgroundEffects from './BackgroundEffects';
import CustomCursor from './CustomCursor';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData[parseInt(id)-1];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [imageDirection, setImageDirection] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(false);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Proyecto no encontrado</h2>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full font-semibold hover:shadow-lg transition-all"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  const nextImage = useCallback(() => {
    setImageDirection(1);
    setIsImageLoading(true);
    setCurrentImageIndex((prev) => (prev + 1) % project.imgs.length);
  }, [project.imgs.length]);

  const prevImage = useCallback(() => {
    setImageDirection(-1);
    setIsImageLoading(true);
    setCurrentImageIndex((prev) => (prev - 1 + project.imgs.length) % project.imgs.length);
  }, [project.imgs.length]);

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
  }, []);

  // Keyboard navigation and ESC key handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return;

      switch(e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          prevImage();
          break;
        case 'ArrowRight':
          e.preventDefault();
          nextImage();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, nextImage, prevImage, closeLightbox]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLightboxOpen]);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <CustomCursor/>
      <BackgroundEffects/>

      <div className="relative z-10">
        {/* Hero Section with Image */}
        <div className="relative h-[70vh] overflow-hidden">
          {/* Background Image with Overlay */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={project.imgs[currentImageIndex]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950" />
          </motion.div>

          {/* Back Button - Floating */}
          <motion.button
            onClick={() => navigate('/')}
            className="absolute top-8 left-8 z-20 group flex items-center gap-2 px-5 py-2.5 bg-black/40 hover:bg-black/60 backdrop-blur-xl border border-white/20 hover:border-purple-400/60 rounded-full transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={18} />
            <span className="text-sm font-medium">Volver</span>
          </motion.button>

          {/* Image Navigation */}
          {project.imgs.length > 1 && (
            <div className="absolute bottom-8 right-8 z-20 flex items-center gap-3">
              <button
                onClick={prevImage}
                className="p-2.5 bg-black/40 hover:bg-black/60 backdrop-blur-xl border border-white/20 rounded-full transition-all hover:scale-110"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="px-4 py-2 bg-black/40 backdrop-blur-xl border border-white/20 rounded-full text-sm">
                {currentImageIndex + 1} / {project.imgs.length}
              </div>
              <button
                onClick={nextImage}
                className="p-2.5 bg-black/40 hover:bg-black/60 backdrop-blur-xl border border-white/20 rounded-full transition-all hover:scale-110"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 px-8 pb-12">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-white drop-shadow-2xl">
                  {project.title}
                </h1>
                <p className="text-xl text-slate-200 max-w-2xl drop-shadow-lg">
                  {project.description}
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto px-8 py-12">
          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            {project.demoLink && (
              <motion.a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles size={18} />
                Ver Demo en Vivo
              </motion.a>
            )}
            
            {project.githubLink && (
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3.5 bg-slate-800/60 backdrop-blur-xl border border-slate-700 hover:border-purple-400 rounded-full font-semibold hover:bg-slate-800 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={18} />
                Código en GitHub
              </motion.a>
            )}
            
            <motion.button
              onClick={() => setIsLightboxOpen(true)}
              className="flex items-center gap-2 px-8 py-3.5 bg-slate-800/60 backdrop-blur-xl border border-slate-700 hover:border-cyan-400 rounded-full font-semibold hover:bg-slate-800 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={18} />
              Ver Imágenes
            </motion.button>
          </motion.div>

          {/* Thumbnail Gallery */}
          {project.imgs.length > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-12"
            >
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {project.imgs.map((img, index) => (
                  <motion.button
                    key={index}
                    onClick={() => { setCurrentImageIndex(index); setIsLightboxOpen(true); }}
                    className="relative aspect-video rounded-xl overflow-hidden group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src={img} alt={`Vista ${index + 1}`} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                      <ExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Tech Stack - Compact Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-sm uppercase tracking-wider text-slate-500 mb-4 font-semibold">Stack Tecnológico</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-1.5 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-full text-sm font-medium hover:border-purple-400 hover:from-purple-500/20 hover:to-cyan-500/20 transition-all cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.03 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Info Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* About */}
            {project.longDescription && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50"
              >
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Sobre el Proyecto
                </h3>
                <div className="text-slate-300 leading-relaxed space-y-3">
                  {project.longDescription.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Features */}
            {project.features && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50"
              >
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Características
                </h3>
                <div className="space-y-3">
                  {project.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + index * 0.05 }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 mt-2 group-hover:scale-150 transition-transform" />
                      <span className="text-slate-300 leading-relaxed">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full border border-white/20 transition-all z-10 group"
              onClick={closeLightbox}
              aria-label="Cerrar lightbox (ESC)"
            >
              <X size={24} />
              <span className="absolute -bottom-8 right-0 text-xs text-white/60 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Presiona ESC
              </span>
            </button>

            <AnimatePresence mode="wait" custom={imageDirection}>
              <motion.img
                key={currentImageIndex}
                src={project.imgs[currentImageIndex]}
                alt={`${project.title} - Imagen ${currentImageIndex + 1}`}
                className="max-w-full max-h-[90vh] object-contain rounded-2xl"
                custom={imageDirection}
                initial={{ 
                  x: imageDirection > 0 ? 300 : -300, 
                  opacity: 0,
                  scale: 0.9
                }}
                animate={{ 
                  x: 0, 
                  opacity: 1,
                  scale: 1
                }}
                exit={{ 
                  x: imageDirection > 0 ? -300 : 300, 
                  opacity: 0,
                  scale: 0.9
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
                onClick={(e) => e.stopPropagation()}
                onLoad={() => setIsImageLoading(false)}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x;
                  if (swipe > 10000) {
                    offset.x > 0 ? prevImage() : nextImage();
                  }
                }}
              />
            </AnimatePresence>

            {/* Loading indicator */}
            {isImageLoading && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin" />
              </motion.div>
            )}

            {project.imgs.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-6 p-4 bg-white/10 hover:bg-white/20 rounded-full border border-white/20 transition-all group"
                  aria-label="Imagen anterior (←)"
                >
                  <ChevronLeft size={28} />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-white/60 opacity-0 group-hover:opacity-100 transition-opacity">
                    ←
                  </span>
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-6 p-4 bg-white/10 hover:bg-white/20 rounded-full border border-white/20 transition-all group"
                  aria-label="Imagen siguiente (→)"
                >
                  <ChevronRight size={28} />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-white/60 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </button>

                {/* Image counter */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/40 backdrop-blur-xl border border-white/20 rounded-full text-sm">
                  {currentImageIndex + 1} / {project.imgs.length}
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetail;