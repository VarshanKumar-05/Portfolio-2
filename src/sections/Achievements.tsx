import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import TiltCard from "../components/TiltCard";
import { Star, Heart, Trophy, Brain, Target, Zap } from "lucide-react";

const achievements = [
  {
    title: "HackerRank – Problem Solving",
    description: "Earned ⭐⭐⭐⭐ in C and ⭐⭐⭐ in Python. Mastered complex logic.",
    icon: Trophy,
    color: "text-green-400",
    glow: "rgba(74, 222, 128, 0.5)",
    animationMode: "sweep"
  },
  {
    title: "Real-Time Smart Traffic System",
    description: "Built real-time traffic detection using <highlight>YOLO</highlight> and <highlight>OpenCV</highlight>.",
    icon: Brain,
    color: "text-[#00ffff]",
    glow: "rgba(0, 255, 255, 0.5)",
    animationMode: "pulse"
  },
  {
    title: "Oracle Certified AI Foundations",
    description: "Demonstrated strong fundamentals in <highlight>AI</highlight>, ML, and Cloud tech.",
    icon: Star,
    color: "text-yellow-400",
    glow: "rgba(250, 204, 21, 0.5)",
    animationMode: "rotate"
  },
  {
    title: "Solved 100+ DSA Problems",
    description: "Improved algorithmic thinking and perfected core <highlight>DSA</highlight> on LeetCode.",
    icon: Target,
    color: "text-orange-400",
    glow: "rgba(251, 146, 60, 0.5)",
    animationMode: "ping"
  },
  {
    title: "NGO Blood Donation Awareness",
    description: "Participated in blood donation initiatives, highlighting social impact.",
    icon: Heart,
    color: "text-red-500",
    glow: "rgba(239, 68, 68, 0.5)",
    animationMode: "heartbeat"
  },
];

const renderHighlightedText = (text: string) => {
  const parts = text.split(/(<highlight>.*?<\/highlight>)/);
  return parts.map((part, i) => {
    if (part.startsWith("<highlight>")) {
      const word = part.replace(/<\/?highlight>/g, "");
      return <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffff] to-[#7c3aed] font-bold tracking-wide">{word}</span>;
    }
    return part;
  });
};

const AchievementCard = ({ achievement, index, hoveredIndex, setHoveredIndex }: any) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const isFocused = hoveredIndex === null || hoveredIndex === index;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="transform-gpu perspective-1000"
      onMouseEnter={() => {
        setIsHovered(true);
        setHoveredIndex(index);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setHoveredIndex(null);
      }}
      style={{ opacity: isFocused ? 1 : 0.4, transition: "opacity 0.4s ease-in-out" }}
    >
      <TiltCard className="relative overflow-hidden group">
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 md:p-8 rounded-2xl border border-white/10 bg-[#0a0f1a]/80 backdrop-blur-xl shadow-[0_0_20px_rgba(0,0,0,0.5)] cursor-default transition-shadow"
          style={{
            boxShadow: isHovered 
              ? `0 10px 40px -10px ${achievement.glow}, inset 0 0 20px rgba(255,255,255,0.05)` 
              : "0 10px 30px -10px rgba(0,0,0,0.8)",
            borderColor: isHovered ? achievement.color.split("-")[1] : "rgba(255,255,255,0.1)"
          }}
        >
          {/* Cursor Interactive Radial Glow Layer */}
          <div 
            className="absolute inset-0 z-0 transition-opacity duration-300 pointer-events-none mix-blend-screen"
            style={{
              opacity: isHovered ? 0.4 : 0,
              background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, ${achievement.glow}, transparent 60%)`
            }}
          />

          {/* Light Sweep Effect on Hover */}
          <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:animate-[sweep_2s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-150%] pointer-events-none z-10`} />

          {/* Glowing Badge with Custom Animations */}
          <div 
            className={`relative w-20 h-20 rounded-full flex items-center justify-center shrink-0 z-20 ${achievement.color} bg-black border border-white/20 shadow-2xl overflow-hidden`}
            style={{ 
              boxShadow: isHovered ? `0 0 30px ${achievement.glow}` : `0 0 15px ${achievement.glow}`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
            
            <motion.div
              animate={
                achievement.animationMode === "pulse" ? { scale: [1, 1.15, 1], filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"] } :
                achievement.animationMode === "rotate" ? { rotate: 360 } :
                achievement.animationMode === "heartbeat" ? { scale: [1, 1.2, 1, 1.2, 1] } :
                {}
              }
              transition={
                achievement.animationMode === "pulse" ? { repeat: Infinity, duration: 2, ease: "easeInOut" } :
                achievement.animationMode === "rotate" ? { repeat: Infinity, duration: 10, ease: "linear" } :
                achievement.animationMode === "heartbeat" ? { repeat: Infinity, duration: 1.5, repeatDelay: 1, ease: "easeInOut" } :
                {}
              }
              className="relative relative"
            >
              <achievement.icon className={`w-10 h-10 drop-shadow-[0_0_15px_currentColor]`} />
              
              {/* DSA Ripple/Ping Effect Overlay */}
              {achievement.animationMode === "ping" && (
                <motion.div 
                  animate={{ boxShadow: [`0 0 0 0 ${achievement.glow}`, `0 0 0 30px rgba(0,0,0,0)`] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="absolute inset-0 rounded-full"
                />
              )}
            </motion.div>
          </div>

          {/* Content */}
          <div className="flex-1 z-20 relative">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-[#00ffff] transition-colors drop-shadow-md">
              {achievement.title}
            </h3>
            <p className="text-gray-300 font-light text-base md:text-lg leading-relaxed">
              {renderHighlightedText(achievement.description)}
            </p>
          </div>
        </motion.div>
      </TiltCard>
    </motion.div>
  );
};

export default function Achievements() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="achievements" className="relative min-h-screen w-full py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              Achievements & Milestones
            </h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
             Visual milestones, interactive learning, and real-world projects.
          </p>
        </motion.div>

        {/* Achievements List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {achievements.map((achievement, index) => (
            <AchievementCard 
               key={index} 
               achievement={achievement} 
               index={index} 
               hoveredIndex={hoveredIndex} 
               setHoveredIndex={setHoveredIndex} 
            />
          ))}
        </div>

      </div>
      
      {/* CSS for custom sweep animation */}
      <style>{`
        @keyframes sweep {
          0% { transform: translateX(-150%) skewX(-12deg); }
          100% { transform: translateX(250%) skewX(-12deg); }
        }
      `}</style>
    </section>
  );
}