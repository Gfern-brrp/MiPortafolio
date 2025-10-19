// Componente CustomCursor.jsx 
import { useState, useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth > 1024);
    
    const handleResize = () => setIsDesktop(window.innerWidth > 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const moveCursor = (e) => {
      if (cursorRef.current && followerRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
        
        setTimeout(() => {
          if (followerRef.current) {
            followerRef.current.style.left = `${e.clientX}px`;
            followerRef.current.style.top = `${e.clientY}px`;
          }
        }, 100);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      <div ref={cursorRef} className="fixed w-5 h-5 border-2 border-purple-400 rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2" />
      <div ref={followerRef} className="fixed w-10 h-10 border border-purple-400/30 rounded-full pointer-events-none z-[9998] mix-blend-difference -translate-x-1/2 -translate-y-1/2" />
    </>
  );
};

export default CustomCursor;