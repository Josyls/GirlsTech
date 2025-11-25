// src/hooks/useTypewriter.js
import { useState, useEffect } from 'react';

const useTypewriter = (text, speed = 40) => {
  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[charIndex]);
        setCharIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, text, speed]);

  return displayText;
};

export default useTypewriter;