import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Download, X, ChevronLeft, ChevronRight } from "lucide-react";


const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle University",
    date: "March 08, 2026",
    image: "/certificates/oracle-ai.png",
    link: "https://catalog-education.oracle.com/apex/f?p=1010:2:102773301542302::::P2_AUTHCODE,P2_AUTH_KEY,P2_ARG_INVALID_CNT:EO276168PI36S,Qrskz276096Takh1163SPTp,0#",
    download: "/certificates/oracle-ai.pdf",
  },
  {
    title: "Oracle Data Platform 2025 Certified Foundations Associate",
    issuer: "Oracle University",
    date: "March 08, 2026",
    image: "/certificates/oracle-data.png",
    link: "https://catalog-education.oracle.com/apex/f?p=1010:2:102773301542302::::P2_AUTHCODE,P2_AUTH_KEY,P2_ARG_INVALID_CNT:EO276168PI36S,Qrskz276096Takh1163SPTp,0#",
    download: "/certificates/oracle-data.pdf",
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google (Coursera)",
    date: "June 21, 2024",
    image: "/certificates/networking.png",
    link: "https://coursera.org/verify/5QTVMDQ3N9V9",
    download: "/certificates/networking.pdf",
  },
 {
  title: "AI & ML for Real-world Problem Solving",
  issuer: "Lovely Professional University",
  date: "August 13, 2025",
  image: "/certificates/p.png",
  link: "https://files.lpu.in/umsweb/skilldevcourse/SkillDevelopmentCertificates/12326681_851_14_08_2025.pdf",
  download: "/certificates/p.pdf",
},
];

export default function Certifications() {
  const [selectedCertIndex, setSelectedCertIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedCertIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedCertIndex(null);
    document.body.style.overflow = "auto";
  };

  const nextCert = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedCertIndex !== null) {
      setSelectedCertIndex((selectedCertIndex + 1) % certifications.length);
    }
  };

  const prevCert = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedCertIndex !== null) {
      setSelectedCertIndex((selectedCertIndex - 1 + certifications.length) % certifications.length);
    }
  };

  return (
    <section id="certifications" className="relative min-h-screen w-full py-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications & Courses
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Verified expertise and continuous learning.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="glass-panel p-6 flex flex-col hover:border-[#00ffff]/60 transition-all rounded-2xl transform-gpu"
            >
              {/* Certificate Image Thumbnail */}
              <div 
                className="w-full h-48 md:h-56 bg-gray-800 rounded-xl mb-6 overflow-hidden cursor-pointer group relative"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-md">View Certificate</span>
                </div>
              </div>

              {/* Certificate Details */}
              <h3 className="text-xl font-bold text-white mb-2 leading-tight">{cert.title}</h3>
              <p className="text-gray-400 mb-1">{cert.issuer}</p>
              <p className="text-gray-500 text-sm mb-6 font-medium">Issued: {cert.date}</p>

              {/* Links */}
              <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/10">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={cert.link} 
                  className="text-[#00ffff] hover:text-white transition-colors flex items-center gap-2 text-sm font-semibold"
                >
                  <ExternalLink className="w-4 h-4" /> View Credential
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={cert.download} 
                  className="text-[#00ffff] hover:text-white transition-colors flex items-center gap-2 text-sm font-semibold"
                >
                  <Download className="w-4 h-4" /> Download
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCertIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Previous Button */}
            <button 
              className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-50 p-2"
              onClick={prevCert}
            >
              <ChevronLeft className="w-10 h-10 md:w-12 md:h-12" />
            </button>

            {/* Next Button */}
            <button 
              className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-50 p-2"
              onClick={nextCert}
            >
              <ChevronRight className="w-10 h-10 md:w-12 md:h-12" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={certifications[selectedCertIndex].image} 
                alt={certifications[selectedCertIndex].title} 
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
