import { useState, useEffect, lazy, Suspense } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { MagneticCursor } from "./components/ui/magnetic-cursor";
import LoadingScreen from "./components/LoadingScreen";
import { Menu, X, Home, Folder, Trophy, Mail, User, Code2, Award, FileText, GraduationCap } from "lucide-react";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load heavy components and sections
const Spline = lazy(() => import('@splinetool/react-spline'));
const Hero = lazy(() => import("./sections/Hero"));
const About = lazy(() => import("./sections/About"));
const Projects = lazy(() => import("./sections/Projects"));
const Education = lazy(() => import("./sections/Education"));
const Stats = lazy(() => import("./sections/Stats"));
const Skills = lazy(() => import("./sections/Skills"));
const Certifications = lazy(() => import("./sections/Certifications"));
const Achievements = lazy(() => import("./sections/Achievements"));
const Trainings = lazy(() => import("./sections/Trainings"));
const Contact = lazy(() => import("./sections/Contact"));

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  // Eliminate React scroll jank by using native hardware-accelerated scroll tracking
  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 0.8]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", num: "01", icon: Home },
    { name: "About", href: "#about", num: "02", icon: User },
    { name: "Skills", href: "#skills", num: "03", icon: Code2 },
    { name: "Projects", href: "#projects", num: "04", icon: Folder },
    { name: "Certifications & Courses", href: "#certifications", num: "05", icon: Award },
    { name: "Stats", href: "#stats", num: "06", icon: Trophy },
    { name: "Education", href: "#education", num: "07", icon: GraduationCap },
    { name: "Contact", href: "#contact", num: "08", icon: Mail },
  ];

  return (
    <MagneticCursor
      magneticFactor={0.2}
      blendMode="normal"
      cursorColor="#00ffff"
      cursorClassName="shadow-[0_0_20px_#00ffff]"
      cursorSize={20}
    >
      <AnimatePresence mode="wait">
        {initialLoading && <LoadingScreen key="loader" onComplete={() => setInitialLoading(false)} />}
      </AnimatePresence>

      <div className={`bg-[#0a0f1a] text-white min-h-screen font-sans selection:bg-[#00ffff]/30 selection:text-white relative transition-opacity duration-1000 ${initialLoading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        {/* Global Spline Background (Visible on scroll) */}
        {!initialLoading && (
          <Suspense fallback={null}>
            <motion.div 
              className="fixed inset-0 z-0 pointer-events-none"
              style={{ opacity: backgroundOpacity }}
            >
              <Spline scene="https://prod.spline.design/xH7xlDs4KJ2IM5FQ/scene.splinecode" />
            </motion.div>
          </Suspense>
        )}

        {/* Magnetic Cursor manages cursor state layout naturally */}

        {/* Navigation */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: initialLoading ? -100 : 0 }}
          transition={{ duration: 0.5, delay: initialLoading ? 0 : 0.5 }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl will-change-transform"
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_2px_rgba(255,255,255,0.3),inset_0_-1px_2px_rgba(0,0,0,0.2)] rounded-full px-6 py-3 flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#00ffff] to-teal-400 flex items-center gap-1 hover:opacity-80 transition-opacity">
              <span className="font-mono border border-[#00ffff] rounded-full w-8 h-8 flex items-center justify-center text-sm glow-primary">VK</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center text-sm font-medium text-gray-200 hover:text-[#00ffff] transition-colors tracking-wide relative pb-1"
                >
                  <span>{link.name}</span>
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#00ffff] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </motion.nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 z-40 bg-white/5 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_2px_rgba(255,255,255,0.3),inset_0_-1px_2px_rgba(0,0,0,0.2)] flex flex-col items-center justify-center gap-8 md:hidden will-change-transform"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center text-2xl font-medium text-gray-300 hover:text-[#00ffff] transition-colors tracking-wide"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        {!initialLoading && (
          <Suspense fallback={<div className="min-h-screen" />}>
            <main className="relative z-10 w-full flex flex-col items-center overflow-x-hidden">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Trainings />
              <Achievements />
              <Certifications />
              <Stats />
              <Education />
              <Contact />
            </main>
          </Suspense>
        )}

        {/* Footer */}
        <footer className="relative z-10 border-t border-white/10 py-8 text-center bg-[#0a0f1a]/80 backdrop-blur-md">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Varshan Kumar. All rights reserved.
          </p>
        </footer>

        <ScrollToTop />
      </div>
    </MagneticCursor>
  );
}
