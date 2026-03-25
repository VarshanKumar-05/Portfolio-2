import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";
import { BookOpen, Calendar } from "lucide-react";

 const trainings = [
  {
    title: "AI & Computer Vision Development",
    institution: "Self-Driven Experience",
    date: "2025 – Present",
    description:
      "Developing real-time applications using YOLO and OpenCV, including a smart traffic management system for vehicle detection and analysis.",
  },
  {
    title: "Machine Learning & NLP",
    institution: "Practical Implementation",
    date: "2025",
    description:
      "Built and trained machine learning models for tasks like fake news detection using Natural Language Processing techniques and Python.",
  },
  {
    title: "Data Structures & Problem Solving",
    institution: "LeetCode Practice",
    date: "2024 – Present",
    description:
      "Solving algorithmic problems to strengthen data structures, logic building, and coding efficiency.",
  },
];
export default function Trainings() {
  return (
    <section
      id="experience"
      className="relative min-h-screen w-full py-20 overflow-hidden flex items-center justify-center"
    >
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
            <BookOpen className="w-10 h-10 text-[#7c3aed]" />
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              Experience
            </h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My learning journey, projects, and hands-on experience in AI & development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative border-l-2 border-[#7c3aed]/30 pl-8 ml-4 md:ml-auto">

          {trainings.map((training, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="mb-12 relative transform-gpu"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] top-6 w-5 h-5 rounded-full bg-[#050505] border-2 border-[#7c3aed] shadow-[0_0_10px_#7c3aed]" />

              {/* Card */}
              <GlassCard glowColor="secondary" className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {training.title}
                </h3>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-[#00ffff] mb-4">
                  <span className="font-medium">
                    {training.institution}
                  </span>

                  <span className="flex items-center gap-1 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    {training.date}
                  </span>
                </div>

                <p className="text-gray-400 font-light leading-relaxed">
                  {training.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}