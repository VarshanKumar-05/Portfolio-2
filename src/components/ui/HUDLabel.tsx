import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface HUDLabelProps {
  text: string;
  subText?: string;
  x: string | number;
  y: string | number;
  lineDirection?: "left" | "right" | "top" | "bottom";
  delay?: number;
}

export default function HUDLabel({ text, subText, x, y, lineDirection = "left", delay = 0 }: HUDLabelProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), (delay + 1) * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!isVisible) return null;

  const lineVariants = {
    initial: { scaleX: 0, scaleY: 0, opacity: 0 },
    animate: { 
      scaleX: 1, 
      scaleY: 1, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const boxVariants = {
    initial: { opacity: 0, scale: 0.8, x: lineDirection === "left" ? 20 : lineDirection === "right" ? -20 : 0 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      x: 0,
      transition: { duration: 0.3, delay: 0.4 }
    }
  };

  return (
    <div 
      className="absolute z-20 pointer-events-none hidden md:block" 
      style={{ left: x, top: y }}
    >
      <div className="relative flex items-center">
        {/* Connection Line */}
        <motion.div
          variants={lineVariants}
          initial="initial"
          animate="animate"
          className={`absolute h-[1px] bg-[#00ffff]/40 origin-left ${
            lineDirection === "left" ? "w-12 -left-12" : 
            lineDirection === "right" ? "w-12 left-full" :
            "w-0"
          }`}
        />
        
        {/* The Label Box */}
        <motion.div
          variants={boxVariants}
          initial="initial"
          animate="animate"
          className="bg-black/40 backdrop-blur-md border border-[#00ffff]/30 px-3 py-1.5 rounded-sm flex flex-col gap-0.5 shadow-[0_0_15px_rgba(0,255,255,0.1)]"
        >
          <div className="flex items-center gap-1.5 leading-none">
            <span className="w-1.5 h-1.5 bg-[#00ffff] rounded-full animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#00ffff]/90 font-bold">
              {text}
            </span>
          </div>
          {subText && (
            <span className="text-[8px] uppercase tracking-widest font-mono text-gray-500 pl-3">
              {subText}
            </span>
          )}
          
          {/* Decorative Corner Markers */}
          <div className="absolute -top-1 -left-1 w-1 h-1 border-t border-l border-[#00ffff]/50" />
          <div className="absolute -bottom-1 -right-1 w-1 h-1 border-b border-r border-[#00ffff]/50" />
        </motion.div>
      </div>
    </div>
  );
}
