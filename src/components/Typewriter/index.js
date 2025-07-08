import React, { useState, useEffect, useRef } from 'react';
import './index.scss';

const useTypewriter = (text, speed = 50, delay = 0) => {
  const [displayText, setDisplayText] = useState('');
  const [start, setStart] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStart(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!start) return;

    const typingInterval = setInterval(() => {
      const i = indexRef.current;
      if (i < text.length) {
        setDisplayText(prev => prev + text.charAt(i));
        indexRef.current += 1;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [start, text, speed]);

  return displayText;
};

const Typewriter = ({ text, speed = 50, delay = 0 }) => {
  const displayText = useTypewriter(text, speed, delay);

  return (
    <p className="typewriter-text">
      {displayText}
      <span className="cursor">|</span>
    </p>
  );
};

export default Typewriter;
