import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";

interface ScrambleTextProps {
  text: string;
  className?: string;
  scrambleSpeed?: number;
  maxScrambleTime?: number;
  triggerOnHover?: boolean;
}

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]|;:,.<>?";

export default function ScrambleText({
  text,
  className = "",
  scrambleSpeed = 30,
  maxScrambleTime = 1000,
  triggerOnHover = true,
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const startScramble = useCallback(() => {
    if (isScrambling) return;
    setIsScrambling(true);

    let iteration = 0;
    const maxIterations = text.length;

    intervalRef.current = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      iteration += 1 / 3;

      if (iteration >= maxIterations) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setIsScrambling(false);
        setDisplayText(text);
      }
    }, scrambleSpeed);

    // Safety timeout to ensure it doesn't scramble forever
    timeoutRef.current = setTimeout(() => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setIsScrambling(false);
      setDisplayText(text);
    }, maxScrambleTime);
  }, [text, isScrambling, scrambleSpeed, maxScrambleTime]);

  useEffect(() => {
    // Initial scramble on mount
    startScramble();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <motion.span
      className={`inline-block ${className}`}
      onMouseEnter={triggerOnHover ? startScramble : undefined}
    >
      {displayText}
    </motion.span>
  );
}
