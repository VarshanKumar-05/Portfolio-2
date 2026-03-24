import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";
import { BrainCircuit, GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "B.Tech in CSE (AI & ML)",
    institution: "Lovely Professional University, Punjab, India",
    year: "Since 2023",
    grade: "CGPA: 6.67"
  },
  {
    degree: "Intermediate",
    institution: "Dr Hima Sekhara Junior College, Anakapalli, AP",
    year: "2021 - 2023",
    grade: "Percentage: 95.2"
  },
  {
    degree: "Matriculation (10th Grade)",
    institution: "Z P High School, Thummapala, AP",
    year: "2020 - 2021",
    grade: "Percentage: 96.2"
  }
];

export default function About() {
  return (
    <section id="about" className="relative min-h-screen w-full flex items-center justify-center py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto transform-gpu"
        >
          <div className="flex items-center justify-center gap-4 mb-12">
            <BrainCircuit className="w-10 h-10 text-[#7c3aed]" />
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              About Me
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <GlassCard glowColor="secondary" className="p-8 md:p-10 border-l-4 border-l-[#7c3aed] h-full">
              <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
                <BrainCircuit className="w-6 h-6 text-[#00ffff]" />
                Background
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6 font-light">
                I am a Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning, with a strong interest in developing intelligent and secure systems. I am passionate about applying AI techniques to solve real-world problems and improve system efficiency.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6 font-light">
                I have worked on projects in areas such as Machine Learning, Computer Vision, and Natural Language Processing. One of my key projects is a Smart OTP-based Authentication System, where I integrated Machine Learning with traditional security methods to detect suspicious login behavior and enhance user authentication.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed font-light">
                I continuously strive to expand my knowledge in emerging technologies, improve my problem-solving skills, and build scalable, innovative solutions. My goal is to become a proficient AI/ML engineer and contribute to impactful technological advancements.
              </p>
            </GlassCard>

            <GlassCard glowColor="primary" className="p-8 md:p-10 border-l-4 border-l-[#00ffff] h-full">
              <h3 className="text-2xl font-semibold mb-8 text-white flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-[#7c3aed]" />
                Education
              </h3>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-[#00ffff] before:rounded-full before:shadow-[0_0_10px_#00ffff] after:content-[''] after:absolute after:left-[5px] after:top-5 after:w-[2px] after:h-full after:bg-white/10 last:after:hidden">
                    <h4 className="text-xl font-medium text-white">{edu.degree}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mt-2 text-sm text-gray-400">
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {edu.institution}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {edu.year}</span>
                    </div>
                    <p className="mt-2 text-[#7c3aed] font-medium">{edu.grade}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
