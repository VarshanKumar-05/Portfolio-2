import { motion } from "framer-motion";
import TiltCard from "../components/TiltCard";
import { Star, Heart, Code2, Trophy, Brain, Target, Zap } from "lucide-react";

const achievements = [
  {
    title: "HackerRank – Problem Solving & Programming",
    description:
      "Earned ⭐⭐⭐⭐ in C Programming and ⭐⭐⭐ in Python. Solved multiple complex coding challenges to build strong logic.",
    icon: Trophy,
    color: "text-green-400",
    glow: "rgba(74, 222, 128, 0.5)",
  },
  {
    title: "Real-Time Smart Traffic System (YOLO)",
    description:
      "Built a real-time traffic detection system using YOLO and OpenCV for intelligent traffic signal control.",
    icon: Brain,
    color: "text-[#00ffff]",
    glow: "rgba(0, 255, 255, 0.5)",
  },
  {
    title: "Oracle Certified AI Foundations Associate",
    description:
      "Earned Oracle certification demonstrating strong fundamentals in AI, Machine Learning, and Cloud technologies.",
    icon: Star,
    color: "text-yellow-400",
    glow: "rgba(250, 204, 21, 0.5)",
  },
  {
    title: "NGO Contribution – Blood Donation Awareness",
    description:
      "Actively participated in a blood donation initiative, spreading awareness about saving lives. Highlighting social responsibility and teamwork.",
    icon: Heart,
    color: "text-red-500",
    glow: "rgba(239, 68, 68, 0.5)",
  },
  {
    title: "Solved 100+ DSA Problems",
    description:
      "Improved problem-solving and algorithmic thinking through consistent practice on LeetCode and HackerRank.",
    icon: Target,
    color: "text-orange-400",
    glow: "rgba(251, 146, 60, 0.5)",
  },
  {
    title: "Built 3+ AI & Computer Vision Projects",
    description:
      "Developed multiple AI-based applications using Python, OpenCV, and Machine Learning models.",
    icon: Zap,
    color: "text-[#7c3aed]",
    glow: "rgba(124, 58, 237, 0.5)",
  },
];

export default function Achievements() {
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
            Real-world projects, certifications, and continuous learning milestones.
          </p>
        </motion.div>

        {/* Achievements List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="transform-gpu perspective-1000"
            >
              <TiltCard className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 md:p-8 border-l-4 border-l-white/10 hover:border-l-[#00ffff] transition-colors group bg-[#0a0f1a]/80 backdrop-blur-md">

                {/* 3D Badge Icon */}
                <div 
                  className={`relative w-20 h-20 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 transform-gpu z-20 ${achievement.color} bg-black border border-white/20`}
                  style={{ 
                    boxShadow: `0 10px 25px -5px rgba(0,0,0,0.9), inset 0 4px 6px rgba(255,255,255,0.2), inset 0 -4px 6px rgba(0,0,0,0.8), 0 0 20px ${achievement.glow}`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-full pointer-events-none" />
                  <achievement.icon className={`w-10 h-10 drop-shadow-[0_0_15px_currentColor]`} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-[#00ffff] transition-colors drop-shadow-md">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-300 font-light text-base md:text-lg leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}