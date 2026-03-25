import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TiltCard from "../components/TiltCard";

const technicalSkills = [
  {
    title: "Languages",
    skills: ["Python", "Java", "C", "C++", "SQL"],
  },
  {
    title: "AI / ML",
    skills: [
      "Machine Learning",
      "Computer Vision",
      "NLP",
      "OpenCV",
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: ["Docker", "Linux", "Google Colab", "Jenkins"],
  },
  {
    title: "Core CS",
    skills: ["DBMS", "DSA"],
  },
];

const softSkills = [
  {
    title: "🧩 Problem Solving",
    skills: ["Logical thinking and debugging skills"],
  },
  {
    title: "🤝 Teamwork",
    skills: ["Ability to collaborate and contribute"],
  },
  {
    title: "⚡ Adaptability",
    skills: ["Quick learner of new technologies"],
  },
  {
    title: "⏱️ Time Management",
    skills: ["Efficient task handling"],
  },
  {
    title: "🎨 Creativity",
    skills: ["Innovative approach in projects"],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<"technical" | "soft">("technical");
  const activeData = activeTab === "technical" ? technicalSkills : softSkills;

  return (
    <section id="skills" className="relative min-h-screen w-full py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My technical stack and interpersonal capabilities.
          </p>
        </motion.div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/5 p-1.5 rounded-full border border-white/10 flex gap-2 backdrop-blur-md">
            <button
              onClick={() => setActiveTab("technical")}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeTab === "technical"
                  ? "bg-[#00ffff] text-black shadow-[0_0_15px_rgba(0,255,255,0.4)]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Technical Skills
            </button>
            <button
              onClick={() => setActiveTab("soft")}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeTab === "soft"
                  ? "bg-[#7c3aed] text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Soft Skills
            </button>
          </div>
        </div>

        {/* Grid Container */}
        <div className="max-w-6xl mx-auto min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${activeTab === "soft" ? "lg:grid-cols-3" : ""}`}
            >
              {activeData.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  style={{ perspective: 1000 }}
                  className="transform-gpu h-full"
                >
                  <TiltCard
                    className={`h-full flex flex-col border-t-2 ${
                      activeTab === "technical" ? "border-t-[#00ffff]/30" : "border-t-[#7c3aed]/50"
                    }`}
                  >
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {category.title}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <span
                          key={i}
                          className={`text-sm px-3 py-1.5 rounded-full bg-white/5 border border-white/10 ${
                            activeTab === "technical" ? "text-[#00ffff]" : "text-purple-300"
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}