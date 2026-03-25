import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassCard from "../components/GlassCard";
import { ExternalLink, Github, Code2, X, MonitorPlay } from "lucide-react";

const projects = [
  {
    title: "Visual Programming Node Interface",
    description: "A node-based visual programming environment built with C++ and Qt, utilizing advanced Data Structures and Algorithms.",
    extendedDescription: "Constructed entirely in C++ using the Qt framework, this advanced application serves as a robust node-based visual programming sandbox. It leverages complex Data Structures and Algorithms (DSA) under the hood to efficiently manage node connections, cyclic dependencies, and real-time execution graphs. Features a sleek, responsive UI crafted for intuitive computational logic building.",
    tags: ["C++", "Qt Framework", "DSA", "Node Graph"],
    link: "https://github.com/VarshanKumar-05/VisualProgramming", 
    github: "https://github.com/VarshanKumar-05/VisualProgramming",
    image: "/visual_programming.png",
  },
  {
    title: "YOLO Smart Traffic System",
    description: "A real-time smart traffic management AI system capable of vehicle tracking and congestion analysis using advanced YOLO models.",
    extendedDescription: "Developed using Python and cutting-edge YOLO object detection models, this system analyzes continuous traffic video feeds to detect, track, and manage vehicle density in real-time. By computing tracking lines and bounding boxes instantly, it efficiently evaluates intersection congestion levels, laying the groundwork for automated, adaptive traffic light synchronization in perfect smart city networks.",
    tags: ["Python", "YOLO", "OpenCV", "Deep Learning"],
    link: "https://github.com/VarshanKumar-05/smart-traffic-management-system",
    github: "https://github.com/VarshanKumar-05/smart-traffic-management-system",
    image: "/smart_traffic.png",
  },
  {
    title: "Fake News Detector",
    description: "An advanced machine learning model capable of accurately classifying news articles as reliable or deceptive.",
    extendedDescription: "Built with Python and Scikit-Learn, this NLP-driven application aggressively parses and tokenizes news articles to cross-reference syntactical patterns against known misinformation datasets. It provides a real-time confidence score indicating the authenticity of global news feeds, protecting users from modern digital deception.",
    tags: ["Python", "NLP", "Scikit-Learn", "Pandas"],
    link: "https://github.com/VarshanKumar-05/Fake-News-Detector",
    github: "https://github.com/VarshanKumar-05/Fake-News-Detector",
    image: "/fake_news.png",
  },
  {
    title: "Smart Authentication System",
    description: "A highly secure, multi-factor authentication framework incorporating robust biometrics and advanced cryptographic hashing.",
    extendedDescription: "Designed to explore the absolute limits of zero-trust architecture, this smart authentication system employs high-end JWT token rotation and deeply encrypted user registries. It leverages secure node processes connected directly to the front-end to bypass traditional vulnerability vectors. (Live execution links and source code are kept private).",
    tags: ["Node.js", "React", "JWT", "Cybersecurity"],
    link: "",
    github: "",
    image: "/smart_auth.png",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isDemoView, setIsDemoView] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  const closeDialog = () => {
    setSelectedProject(null);
    setIsDemoView(false);
  };

  return (
    <section id="projects" className="relative min-h-screen w-full py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <Code2 className="w-10 h-10 text-[#00ffff]" />
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              Projects
            </h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">Exploring the intersection of data, algorithms, and user experience.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              layoutId={`card-container-${project.title}`}
              key={index}
              initial={{ opacity: 0, y: 60, rotateX: -20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ perspective: 1000 }}
              className="transform-gpu cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <GlassCard glowColor="primary" className="h-[450px] flex flex-col p-0 border-t-0 border border-white/10 overflow-hidden bg-[#0a0f1a]/80 shadow-[0_0_30px_rgba(0,255,255,0.05)] hover:shadow-[0_0_40px_rgba(0,255,255,0.15)] transition-shadow duration-500 group">
                
                <motion.div layoutId={`image-${project.title}`} className="w-full h-48 sm:h-56 relative overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-[#00ffff]/20 mix-blend-overlay z-10 pointer-events-none" />
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transform-gpu group-hover:scale-110 transition-transform duration-700 ease-out" loading="lazy" />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0f1a] to-transparent z-20 pointer-events-none" />
                </motion.div>
                
                <div className="p-6 flex flex-col flex-grow relative z-30">
                  <motion.h3 layoutId={`title-${project.title}`} className="text-2xl font-bold text-white mb-3 group-hover:text-[#00ffff] transition-colors">{project.title}</motion.h3>
                  <motion.p layoutId={`desc-${project.title}`} className="text-gray-400 mb-6 flex-grow font-light text-sm md:text-base line-clamp-3">{project.description}</motion.p>
                  
                  <motion.div layoutId={`tags-${project.title}`} className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#00ffff]">
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="https://github.com/VarshanKumar-05"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-[#00ffff]/50 transition-all shadow-[0_0_15px_rgba(0,255,255,0.05)] hover:shadow-[0_0_20px_rgba(0,255,255,0.2)] group"
          >
            <Github className="w-5 h-5 group-hover:text-[#00ffff] transition-colors" />
            <span className="font-medium text-sm tracking-wide">View more projects on GitHub</span>
            <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:text-[#00ffff] transition-all" />
          </a>
        </motion.div>
      </div>

      {/* EXPANDED MODAL OVERLAY */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeDialog}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] cursor-pointer"
            />
            
            <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-10 pointer-events-none">
              <motion.div
                layoutId={`card-container-${selectedProject.title}`}
                className="bg-[#050810] border border-[#00ffff]/30 rounded-2xl w-full max-w-5xl max-h-[95vh] flex flex-col pointer-events-auto overflow-hidden shadow-[0_0_80px_rgba(0,255,255,0.15)] relative"
              >
                {/* Header Actions */}
                <div className="absolute top-4 right-4 z-50 flex gap-4">
                   {(!isDemoView && selectedProject.link) && (
                     <motion.button 
                       initial={{ opacity: 0, scale: 0.8 }}
                       animate={{ opacity: 1, scale: 1 }}
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.95 }}
                       onClick={() => setIsDemoView(true)}
                       className="bg-[#00ffff] text-black px-6 py-2 rounded-full font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.8)] transition-all cursor-pointer"
                     >
                       <MonitorPlay className="w-5 h-5" /> Launch Demo
                     </motion.button>
                   )}
                   <button onClick={closeDialog} className="bg-black/80 backdrop-blur-md text-white p-3 rounded-full border border-white/20 hover:bg-white/10 hover:text-[#ff0055] transition-colors cursor-pointer group shadow-xl">
                     <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                   </button>
                </div>

                <div className="flex flex-col h-full overflow-y-auto custom-scrollbar">
                  {isDemoView ? (
                     <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-full h-[70vh] md:h-[80vh] flex flex-col bg-black relative rounded-b-2xl"
                     >
                         <div className="absolute top-4 left-4 z-50">
                            <motion.button 
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => setIsDemoView(false)}
                              className="bg-zinc-900 border border-zinc-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-zinc-800 transition-colors cursor-pointer"
                            >
                              Exit Demo
                            </motion.button>
                         </div>
                         <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50">
                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="w-12 h-12 border-4 border-[#00ffff] border-t-transparent rounded-full" />
                         </div>
                         <iframe src={selectedProject.link} className="w-full h-full border-none relative z-10 bg-white mt-16 rounded-t-xl" title={`${selectedProject.title} Demo`} />
                     </motion.div>
                  ) : (
                    <>
                      {/* Image Header */}
                      <motion.div layoutId={`image-${selectedProject.title}`} className="w-full h-[40vh] relative flex-shrink-0">
                        <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-[#050810]/50 to-transparent opacity-100" />
                        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-left z-20 pr-10">
                           <motion.h3 layoutId={`title-${selectedProject.title}`} className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-2xl">{selectedProject.title}</motion.h3>
                           <motion.div layoutId={`tags-${selectedProject.title}`} className="flex flex-wrap gap-2">
                             {selectedProject.tags.map((tag, i) => (
                               <span key={i} className="text-sm px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[#00ffff] shadow-lg">
                                 {tag}
                               </span>
                             ))}
                           </motion.div>
                        </div>
                      </motion.div>
                      
                      {/* Content Body */}
                      <div className="p-6 md:p-10 text-left bg-gradient-to-b from-[#050810] to-[#0a0f1a] flex-grow">
                        <motion.h4 layoutId={`desc-${selectedProject.title}`} className="text-xl md:text-2xl font-light text-[#00ffff] mb-8 leading-relaxed max-w-4xl">
                          {selectedProject.description}
                        </motion.h4>

                        <motion.div 
                          initial={{ opacity: 0, y: 30 }} 
                          animate={{ opacity: 1, y: 0 }} 
                          transition={{ delay: 0.2, duration: 0.5 }}
                          className="text-gray-300 text-lg leading-relaxed max-w-4xl space-y-6 form-prose"
                        >
                          <p>{selectedProject.extendedDescription}</p>
                        </motion.div>

                        {selectedProject.github && (
                          <motion.div 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }} 
                            transition={{ delay: 0.4 }}
                            className="mt-12 flex items-center gap-6 pb-6"
                          >
                            <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white bg-[#1a1a1a] hover:bg-[#333] px-8 py-4 rounded-xl border border-white/10 transition-all font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1">
                              <Github className="w-6 h-6" /> View Source Code
                            </a>
                          </motion.div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
