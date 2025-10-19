import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypewriterText = ({ words, className = "", prefix = "" }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    if (!isDeleting && displayText === currentWord) {
      setTimeout(() => setIsDeleting(true), pauseTime);
      return;
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex, words]);

  return (
    <motion.div
      className={`text-2xl sm:text-3xl lg:text-4xl font-bold h-12 sm:h-14 lg:h-16 flex items-center justify-center lg:justify-start gap-3 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2 }}
    >
      {prefix && (
        <span className="text-white">
          {prefix}
        </span>
      )}
      <span className="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent flex items-center">
        {displayText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block w-0.5 h-8 sm:h-10 lg:h-12 bg-gradient-to-b from-purple-400 to-cyan-400 ml-1"
        />
      </span>
    </motion.div>
  );
};

export default TypewriterText;