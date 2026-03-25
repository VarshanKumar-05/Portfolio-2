import { motion } from "framer-motion";
import React, { useState, useRef } from "react";
import { BrainCircuit, Cpu, Lightbulb, Rocket, Zap, Shield, Target } from "lucide-react";

// Inline TypeWriter wrapper for highlighting key philosophical buzzwords
const TypeWriter = ({ text, delay = 0.5 }: { text: string, delay?: number }) => (
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffff] to-[#7c3aed] font-bold tracking-wide">
    {text.split("").map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.05, delay: delay + index * 0.04 }}
      >
        {char}
      </motion.span>
    ))}
  </span>
);

const floatingOrbs = [
  { text: "AI", top: "15%", left: "5%", delay: 0 },
  { text: "ML", top: "25%", right: "8%", delay: 1.5 },
  { text: "Python", bottom: "35%", left: "8%", delay: 0.8 },
  { text: "OpenCV", bottom: "25%", right: "12%", delay: 2.2 },
  { text: "YOLO", top: "50%", left: "90%", delay: 1.2 },
];

const personalityTraits = [
  { text: "Think → Build → Improve", icon: Target, glow: "rgba(0,255,255,0.6)" },
  { text: "Logic Driven", icon: Cpu, glow: "rgba(124,58,237,0.6)" },
  { text: "Growth Mindset", icon: Rocket, glow: "rgba(250,204,21,0.6)" },
  { text: "Creative Problem Solver", icon: Lightbulb, glow: "rgba(74,222,128,0.6)" },
];

export default function About() {
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

  const marqueeText = "AI • MACHINE LEARNING • COMPUTER VISION • PYTHON • OPENCV • YOLO • DSA • ";
  const fullMarquee = marqueeText.repeat(8);

  return (
    <section id="about" className="relative min-h-screen w-full flex items-center justify-center py-24 overflow-hidden">
      
      {/* Floating Skill Orbs Background */}
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -20, 0], scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 5 + i, delay: orb.delay, ease: "easeInOut" }}
          className="absolute hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-[#0a0f1a]/60 border border-[#00ffff]/20 backdrop-blur-md shadow-[0_0_20px_rgba(0,255,255,0.15)] z-0"
          style={{ top: orb.top, left: orb.left, right: orb.right, bottom: orb.bottom }}
        >
          <span className="text-xs font-bold text-[#00ffff] tracking-widest">{orb.text}</span>
        </motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-10 w-full mb-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-6xl mx-auto transform-gpu"
        >
          <div className="flex items-center justify-center gap-4 mb-16">
            <BrainCircuit className="w-10 h-10 text-[#7c3aed]" />
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              About Me
            </h2>
          </div>

          {/* Grid Layout separating Main Content and Personality Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Left: Main Glow Card (Col-Span 2) */}
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="lg:col-span-2 relative rounded-2xl overflow-hidden p-[1px] group cursor-default shadow-2xl h-full"
            >
              {/* Dynamic Border Glow Layer */}
              <div 
                className="absolute inset-0 z-0 transition-opacity duration-300 pointer-events-none mix-blend-screen"
                style={{
                  opacity: isHovered ? 1 : 0,
                  background: `radial-gradient(650px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,255,255,0.35), transparent 40%)`
                }}
              />
              
              {/* Soft Surface Glow Layer */}
              <div 
                className="absolute inset-0 z-10 transition-opacity duration-300 pointer-events-none mix-blend-screen"
                style={{
                  opacity: isHovered ? 0.35 : 0,
                  background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(124,58,237,0.2), transparent 60%)`
                }}
              />

              {/* Inner Content Body */}
              <div className="relative z-20 h-full bg-[#0a0f1a]/85 backdrop-blur-xl rounded-2xl p-8 md:p-10 border border-white/10 border-l-[4px] border-l-[#7c3aed]">
                
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="flex items-start gap-4 md:gap-6 mb-8">
                  <motion.div animate={{ scale: [1, 1.15, 1], filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="mt-1 shrink-0">
                    <BrainCircuit className="w-6 h-6 md:w-8 md:h-8 text-[#00ffff] drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]" />
                  </motion.div>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light">
                    I’m a Computer Science student with a deep passion for <TypeWriter text="Artificial Intelligence" delay={0.6} />. My foundational approach is rooted in understanding complex abstract systems from the ground up to engineer <TypeWriter text="intelligent solutions" delay={1.2} />.
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }} className="flex items-start gap-4 md:gap-6 mb-8">
                  <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} className="mt-1 shrink-0">
                    <Zap className="w-6 h-6 md:w-8 md:h-8 text-[#7c3aed] drop-shadow-[0_0_15px_rgba(124,58,237,0.8)]" />
                  </motion.div>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light">
                    I thrive on turning raw data and pure logic into robust, flawlessly executed code. Whether I'm training <TypeWriter text="neural networks" delay={2.3} /> or scaling architecture, I prioritize writing clean, efficient, and forward-thinking logic.
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.6 }} className="flex items-start gap-4 md:gap-6">
                  <motion.div animate={{ scale: [1, 1.2, 1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1, ease: "easeInOut" }} className="mt-1 shrink-0">
                    <Shield className="w-6 h-6 md:w-8 md:h-8 text-[#00ffff] drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]" />
                  </motion.div>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light">
                    Driven by a continuous <TypeWriter text="growth mindset" delay={3.2} />, I actively seek out challenges that push my boundaries, sharpening my problem-solving skills to guarantee absolute <TypeWriter text="analytical rigor" delay={3.6} /> in every project I touch.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Personality Traits Panel (Col-Span 1) */}
            <div className="flex flex-col gap-4 h-full justify-between">
              {personalityTraits.map((trait, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5, ease: "easeOut" }}
                  whileHover={{ scale: 1.03, x: -5 }}
                  className="flex-1 flex items-center gap-4 bg-[#0a0f1a]/80 backdrop-blur-md border border-white/10 rounded-xl p-5 md:p-6 shadow-lg group relative overflow-hidden h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <trait.icon 
                    className="w-8 h-8 md:w-10 md:h-10 transition-colors duration-300"
                    style={{ color: "white", filter: `drop-shadow(0 0 10px ${trait.glow})` }} 
                  />
                  <span className="text-white font-medium text-lg tracking-wide group-hover:text-[#00ffff] transition-colors duration-300 drop-shadow-sm">
                    {trait.text}
                  </span>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>

      {/* Moving Skill Bar (Bottom Absolute) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-black/50 py-3 border-t border-[rgba(0,255,255,0.1)] backdrop-blur-xl z-20 group">
        <div className="flex w-max animate-[marquee_25s_linear_infinite] group-hover:[animation-play-state:paused]">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0 pr-12">
              <span className="text-[#00ffff]/70 font-mono text-sm tracking-[0.3em] font-semibold">
                AI • MACHINE LEARNING • COMPUTER VISION • PYTHON • OPENCV • YOLO • DSA •
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
