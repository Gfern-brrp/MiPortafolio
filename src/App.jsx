import { Routes, Route } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import BackgroundEffects from "./components/BackgroundEffects";
import SmoothScroll from "./components/SmoothScroll";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetail";
import { toastConfig } from './components/toastConfig ';


export default function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen overflow-x-hidden">
      <style>{`
        @keyframes morph {
          0%, 100% {
            border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
          }
          50% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
        }
        .animate-morph {
          animation: morph 8s ease-in-out infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        
        /* Ocultar cursor por defecto en desktop */
        @media (min-width: 1024px) {
          * {
            cursor: none !important;
          }
        }
      `}</style>

      <Routes>
        {/* Ruta principal - Home */}
        <Route
          path="/"
          element={
            
            <>
             <Toaster {...toastConfig} />
              <Navbar />

              <SmoothScroll />
              <CustomCursor />
              <ScrollProgress />
              <BackgroundEffects />
              <Hero />
              <About />
              <Projects />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Ruta de detalle de proyecto */}
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}
