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
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-6xl mx-auto transform-gpu will-change-transform"
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
                I’m a Computer Science student specializing in Artificial Intelligence and Machine Learning, with a strong passion for building intelligent and real-time systems. I enjoy turning complex problems into practical solutions using technologies like Python, computer vision, and modern web development.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6 font-light">
                I have hands-on experience developing projects such as a Real-Time Smart Traffic Management system using YOLO and OpenCV, where I worked on object detection, traffic analysis, and real-time data processing. I also explored game development by building a Flappy Bird clone, focusing on physics simulation and collision detection.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6 font-light">
                My interests lie in AI, computer vision, and creating interactive web applications. I continuously work on improving my problem-solving skills through platforms like LeetCode and HackerRank, and I enjoy learning new technologies that push my limits.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed font-light">
                I aim to build innovative, efficient, and visually engaging solutions that solve real-world problems.
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
