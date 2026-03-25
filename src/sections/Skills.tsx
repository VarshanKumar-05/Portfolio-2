import { motion } from "framer-motion";
import TiltCard from "../components/TiltCard";

const skillData = [
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

export default function Skills() {
  return (
    <section id="skills" className="relative min-h-screen w-full py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">

        {/* Heading (MATCHED) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I'm proficient in.
          </p>
        </motion.div>

        {/* Grid (MATCHED) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {skillData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6, scale: 1.02 }}
              style={{ perspective: 1000 }}
              className="transform-gpu"
            >
              {/* SAME GlassCard */}
              <TiltCard
                className="h-full flex flex-col border-t-2 border-t-[#00ffff]/30"
              >
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {category.title}
                </h3>

                {/* Skills tags (MATCHED EXACT STYLE) */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#00ffff]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}