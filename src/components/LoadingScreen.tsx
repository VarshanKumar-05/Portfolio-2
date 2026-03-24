import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function LoadingScreen({ onComplete }: { onComplete: () => void, key?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showText, setShowText] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Stage triggers
    const textTimer = setTimeout(() => setShowText(true), 800);
    const completeTimer = setTimeout(onComplete, 10000); // 10 sec max

    const duration = 10000;
    const intervalTime = 50;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const progressInterval = setInterval(() => {
      currentStep++;
      setProgress(Math.min((currentStep / steps) * 100, 100));
      if (currentStep >= steps) {
        clearInterval(progressInterval);
      }
    }, intervalTime);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        // Bounce off walls seamlessly
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 255, 255, 0.8)';
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#00ffff';
        ctx.fill();
      }
    }

    // Initialize network particles (optimize density based on screen width for mobile)
    const particleCount = window.innerWidth < 768 ? 40 : 80;
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const render = () => {
      // Background base
      const gradient = ctx.createRadialGradient(
        canvas.width/2, canvas.height/2, 0, 
        canvas.width/2, canvas.height/2, Math.max(canvas.width, canvas.height)/1.5
      );
      gradient.addColorStop(0, '#101626'); // Soft neon dark blue
      gradient.addColorStop(1, '#050505'); // Extreme dark edges
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Move & draw nodes
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      // Draw neural connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 160) {
            ctx.beginPath();
            // Opacity scales relative to line distance
            ctx.strokeStyle = `rgba(0, 255, 255, ${0.25 - distance/640})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    // Lock scrolling while loading
    document.body.style.overflow = "hidden";
    
    return () => {
      clearTimeout(textTimer);
      clearTimeout(completeTimer);
      clearInterval(progressInterval);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center pointer-events-none"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      {/* Glass overlay layer for premium depth blur */}
      <div className="absolute inset-0 z-10 bg-[#0a0f1c]/30 backdrop-blur-[2px]" />

      <AnimatePresence>
        {showText && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-20 flex flex-col items-center justify-center text-center px-4"
          >
            <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00ffff] to-white tracking-widest uppercase mb-6 drop-shadow-[0_0_20px_rgba(0,255,255,0.7)]">
              Varshan Kumar
            </h1>
            <motion.p 
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-[#00ffff] tracking-[0.3em] uppercase text-xs md:text-sm font-mono bg-black/40 px-6 py-2.5 rounded-full border border-[#00ffff]/30 backdrop-blur-md shadow-[0_0_15px_rgba(0,255,255,0.2)] font-light mb-8"
            >
              Initializing AI Interface...
            </motion.p>
            
            {/* Progress Bar & Text */}
            <div className="w-64 max-w-[80vw] flex flex-col items-center gap-3">
              <span className="text-[#00ffff] font-mono tracking-widest text-xl drop-shadow-[0_0_10px_rgba(0,255,255,0.8)] glow-primary">
                {Math.round(progress)}%
              </span>
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden border border-white/10">
                <motion.div 
                  className="h-full bg-gradient-to-r from-[#7c3aed] via-[#00ffff] to-white shadow-[0_0_15px_#00ffff]"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
