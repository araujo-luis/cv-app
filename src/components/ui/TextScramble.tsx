import React, { FC, useEffect, useState, useRef, useCallback } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

interface TextScrambleProps {
  texts: string[];
  className?: string;
  intervalMs?: number;
}

const TextScramble: FC<TextScrambleProps> = ({ texts, className, intervalMs = 3000 }) => {
  const [display, setDisplay] = useState(texts[0] || '');
  const indexRef = useRef(0);
  const frameRef = useRef(0);

  const scrambleTo = useCallback((target: string) => {
    let iteration = 0;
    const maxIterations = target.length;

    const animate = () => {
      const result = target
        .split('')
        .map((char, i) => {
          if (i < iteration) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join('');

      setDisplay(result);
      iteration += 1;

      if (iteration <= maxIterations) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    cancelAnimationFrame(frameRef.current);
    animate();
  }, []);

  useEffect(() => {
    if (texts.length <= 1) return;

    const interval = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % texts.length;
      scrambleTo(texts[indexRef.current]);
    }, intervalMs);

    return () => {
      clearInterval(interval);
      cancelAnimationFrame(frameRef.current);
    };
  }, [texts, intervalMs, scrambleTo]);

  return <span className={className}>{display}</span>;
};

export default TextScramble;
