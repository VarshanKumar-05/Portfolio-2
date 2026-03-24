import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";
import { Star, Zap, Target, Brain } from "lucide-react";

const achievements = [
  {
    title: "Real-Time Smart Traffic System (YOLO)",
    description:
      "Built a real-time traffic detection system using YOLO and OpenCV for intelligent traffic signal control.",
    icon: Brain,
    color: "text-[#00ffff]",
  },
  {
    title: "Oracle Certified AI Foundations Associate",
    description:
      "Earned Oracle certification demonstrating strong fundamentals in AI, Machine Learning, and Cloud technologies.",
    icon: Star,
    color: "text-yellow-400",
  },
  {
    title: "Solved 100+ DSA Problems",
    description:
      "Improved problem-solving and algorithmic thinking through consistent practice on LeetCode.",
    icon: Target,
    color: "text-green-400",
  },
  {
    title: "Built 3+ AI & Computer Vision Projects",
    description:
      "Developed multiple AI-based applications using Python, OpenCV, and Machine Learning models.",
    icon: Zap,
    color: "text-[#7c3aed]",
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
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-4">
            Key Achievements
          </h2>
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
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ x: 10 }}
              className="transform-gpu"
            >
              <GlassCard className="flex items-center gap-6 p-6 md:p-8 border-l-4 border-l-white/20 hover:border-l-[#00ffff] transition-colors group">

                {/* Icon */}
                <div className={`w-14 h-14 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform ${achievement.color}`}>
                  <achievement.icon className="w-7 h-7 drop-shadow-[0_0_10px_currentColor]" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400 font-light">
                    {achievement.description}
                  </p>
                </div>

              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}