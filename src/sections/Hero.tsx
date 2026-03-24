import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { ArrowRight, Download, User, Code2, BrainCircuit, Terminal, Eye, X } from "lucide-react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import ParticlesBackground from "../components/ParticlesBackground";
import ScrollReveal from "../components/ScrollReveal";

const SocialIcon = ({ icon: Icon, colorClass, shadowClass, href }: { icon: any, colorClass: string, shadowClass: string, href: string }) => (
  <motion.a
    whileHover={{ y: 4, scale: 0.98 }}
    whileTap={{ y: 8, scale: 0.95 }}
    href={href}
    className={`relative w-12 h-13 rounded-2xl flex items-center justify-center text-white transition-all duration-200 ${colorClass} ${shadowClass} group overflow-visible`}
  >
    {/* Inner strong top reflection for 3D realism */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
    <Icon className="w-6 h-6 relative z-10 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] transform-gpu group-hover:drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] transition-all duration-200" />
  </motion.a>
);

const FloatingIcon = ({ icon: Icon, className, delay }: { icon: any, className: string, delay: number }) => (
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ repeat: Infinity, duration: 3, delay, ease: "easeInOut" }}
    className={`absolute w-12 h-12 rounded-full border border-[#00ffff]/50 bg-[#0a0f1a]/80 backdrop-blur-sm flex items-center justify-center text-[#00ffff] shadow-[0_0_15px_rgba(0,255,255,0.2)] ${className}`}
  >
    <Icon className="w-5 h-5" />
  </motion.div>
);

export default function Hero() {
  const [showCV, setShowCV] = useState(false);
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-12 pb-12">
      <ParticlesBackground id="hero-particles" type="neural" />

      {/* Home specific background */}
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
        <Spline scene="https://prod.spline.design/e8lxPKR20tErh2ni/scene.splinecode" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 h-full">
        {/* Left Column: Content */}
        <div className="flex-1 flex flex-col items-start text-left w-full lg:w-[45%] mt-10 lg:mt-0 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-wide">
              Hi, I'm <span className="text-gradient font-mono font-black drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]">Varshan Kumar</span>
            </h2>
            <h3 className="text-xl md:text-2xl text-gray-300 font-semibold mb-6">
              AI / ML Developer <span className="text-gradient">&</span> Problem Solver
            </h3>
            <p className="text-gray-400 mb-10 max-w-lg leading-relaxed text-lg">
              Building intelligent systems and turning complex data into real-world solutions. Passionate about machine learning, clean code, and pushing the boundaries of AI.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-6 py-2.5 rounded-full bg-[#00ffff] text-black font-bold hover:shadow-[0_0_20px_rgba(0,255,255,0.6)] transition-shadow duration-300"
              >
                Hire Me
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#about"
                className="px-6 py-2.5 rounded-full border border-[#00ffff] text-[#00ffff] font-medium hover:bg-[#00ffff]/10 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300 flex items-center gap-2"
              >
                About me <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-6 py-2.5 rounded-full border border-gray-600 text-gray-300 font-medium hover:bg-[#7c3aed]/10 hover:border-[#7c3aed] hover:text-white hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all duration-300 flex items-center gap-2"
              >
                Previous Work <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>

            {/* CV Card & Socials Container */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-8">
              {/* CV Card */}
              <div className="glass-panel border border-[#00ffff]/30 rounded-xl p-5 relative overflow-hidden group min-w-[240px]">
                <div className="relative z-10">
                  <h4 className="text-xl font-bold text-white mb-1">Varshan</h4>
                  <p className="text-sm text-gray-400 mb-4">AI Developer</p>
                  <div className="flex items-center gap-2 mt-4">
                    <button onClick={() => setShowCV(true)} className="flex-1 flex items-center justify-center gap-2 text-xs text-[#00ffff] border border-[#00ffff]/50 px-2 py-2 rounded hover:bg-[#00ffff]/10 transition-colors cursor-pointer">
                      <Eye className="w-4 h-4" /> Preview
                    </button>
                    <a href="/certificates/Varshan.pdf" download="Varshan_Kumar_CV.pdf" className="flex-1 flex items-center justify-center gap-2 text-xs text-[#00ffff] border border-[#00ffff]/50 px-2 py-2 rounded hover:bg-[#00ffff]/10 transition-colors cursor-pointer block">
                      <Download className="w-4 h-4" /> Download
                    </a>
                  </div>
                </div>
                {/* Decorative silhouette/shape on the right of the card */}
                <div className="absolute right-0 bottom-0 opacity-40">
                  <User className="w-28 h-28 text-[#00ffff] translate-x-6 translate-y-6" strokeWidth={1} />
                </div>
              </div>

              {/* Socials */}
              <div className="flex items-center gap-4 pb-2">
                <SocialIcon
                  href="https://www.linkedin.com/in/varshan-kumar-chadaram/"
                  icon={FaLinkedinIn}
                  colorClass="bg-[#0077b5]"
                  shadowClass="shadow-[0_8px_0_#004d75] hover:shadow-[0_4px_0_#004d75] active:shadow-[0_0px_0_#004d75]"
                />
                <SocialIcon
                  href="https://github.com/VarshanKumar-05"
                  icon={FaGithub}
                  colorClass="bg-[#24292e]"
                  shadowClass="shadow-[0_8px_0_#0d1117] hover:shadow-[0_4px_0_#0d1117] active:shadow-[0_0px_0_#0d1117]"
                />
                <SocialIcon
                  href="https://leetcode.com/u/varshan2005/"
                  icon={SiLeetcode}
                  colorClass="bg-[#ffa116]"
                  shadowClass="shadow-[0_8px_0_#cc8112] hover:shadow-[0_4px_0_#cc8112] active:shadow-[0_0px_0_#cc8112]"
                />
                <SocialIcon
                  href="mailto:varshankumarchadaram@gmail.com"
                  icon={FaEnvelope}
                  colorClass="bg-gradient-to-tr from-[#ea4335] via-[#db4437] to-[#c5221f]"
                  shadowClass="shadow-[0_8px_0_#8e110d] hover:shadow-[0_4px_0_#8e110d] active:shadow-[0_0px_0_#8e110d]"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Middle Column: Robot Spline */}
        <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-auto z-0">
          <Spline scene="https://prod.spline.design/XsM5ixmTunsJ4Xem/scene.splinecode" />
        </div>

        {/* Right Column: Circular Image & Floating Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex-1 w-full lg:w-[45%] flex justify-center lg:justify-end relative mt-16 lg:mt-0 z-10"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-[#00ffff] shadow-[0_0_50px_rgba(0,255,255,0.2)] p-2">
            {/* Using a high-quality placeholder image for the profile */}
            <img
              src="https://lh3.googleusercontent.com/rd-gg-dl/AOI_d_99gFSMvPvN05O2llqSpfI6ZyiqnW06Zkfm_TkW1Gk5eVlXCMTZD4CpiiCAWha4WYbQjXB3s-mrzqER6Uh0mAhhifOB0JzSMJhUo9V0vebRK1rurjeMFwC_YT8jcgmJcMX6dNoAz2_YGcCmTYtg1onuOFhsSgdC3Org4Zs19GKOBLiDpycduOkHFcGOLDM8iuqHH6me0eNBH-65eOBC7AJV30jVZcNtFLxUD6sdXPS7JZZaMKcQkRZ0nW9YKB38Zz-_jYN28dSshY2vkxX7ZvNr6b_Ads9wPbsJndEmFDSI648AMlHVsHx8xQXLlgFiNs2HAp8e0KuheOCZTbeHQMW3Cd69bwrJHZ2WG_g1k0d6zGwLCZUUgbbo6KDn4OXykZrB3zT8y659P-BNbDxBYQwvtupqjB8HxdSNRxJZJ6f_f5Y_pfM9PFSme44MNd2GBoTRA1KYzLg3NKa0X3ZzrVzfwoYxYwEmDp6Toe3su-OQuR4Mr6CeRbQgH74gHKi4HDpQc4PHsc0n9yAeaNuOm9cmYyTpSejajA8a42GeMM4rjcqEuLyRtPc9BZI4TsbFPL7SjA82MUvQ9YWGOnXKPixDmH3_L1gZP_0q83LPwM5kEoZPt0hzfQXKuo9T3XxtGdR4yPKIR4LPiCZMplRxJ05CinxxwkxFNfhvne4qWaTtqCPJBPGBj3Fsu0Kk0ZU5FWfzQlCdJ8iED7mJMZwpJeVo6BlGOKyPFy3YokjrZiu_LfbReAQGkGsKw9kB0hMMznsafQeAR5OST8pfztFOnn0iLoi1JY1lffYEVYsUPEd6j5a3C_6qNlT-NrHeztVw8bgnQFvaMh-EIqMKDm3koWmVHeE8YjOrHuBaU--O3pOLGYEm6yrdj2jx1sVFx0I0NBjtK_10qljkFf6Eq4dn0sSL0gK2LGgM-fLNNYcBJKkY2hmu9oxFafEKyZA4oYrIRhZp0mefBRpVe7YV9aqrURgX5NXDkbagtUXIY960yqxWk9mGVV-YbYtMpMscrfMQfFt-nAi9czlTHuchQJTKJRDYVRDpESO9EeDz-aUicVrWTWU735iumdKmxjptT_IJVgTSmTAQiiTPVrUKEPX0AmQwqqrHd_TEMVuXeoXxLX5_qgmQrgl513Ma3Xamv60xxkf5KcClkdyzNFBYaJRGrMH52so-SkGGJ9SyjMF8E2TdcvgQbYQlb_ZfJD0DSKqLu8jAayHydJ9mD9VvZbAa6w3q-ECW_N-HYFffyGdLuTTuxzxaEHPgS_Mj=s1024-rj"
              alt="Varshan Kumar"
              className="w-full h-full object-cover rounded-full"
              referrerPolicy="no-referrer"
            />

            {/* Floating Icons */}
            <FloatingIcon icon={Code2} className="top-10 -left-6" delay={0} />
            <FloatingIcon icon={BrainCircuit} className="bottom-20 -left-8" delay={1} />
            <FloatingIcon icon={Terminal} className="bottom-10 right-4" delay={2} />
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showCV && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/80 backdrop-blur-md"
            onClick={() => setShowCV(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#050810] border border-[#00ffff]/30 w-full max-w-5xl h-[85vh] rounded-2xl flex flex-col overflow-hidden shadow-[0_0_50px_rgba(0,255,255,0.1)] relative"
            >
              <div className="flex justify-between items-center p-4 border-b border-white/10 bg-black/40">
                <h3 className="text-white font-semibold flex items-center gap-2">
                  <User className="w-5 h-5 text-[#00ffff]" /> Varshan_CV.pdf
                </h3>
                <button
                  onClick={() => setShowCV(false)}
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 hover:text-[#ff0055] transition-colors text-white cursor-pointer group"
                >
                  <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>
              <iframe
                src="/certificates/Varshan.pdf"
                className="w-full flex-grow bg-white border-none"
                title="CV Preview"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
