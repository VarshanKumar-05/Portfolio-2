import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";
import { Send, Mail, MapPin, Phone, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import BorderGlow from "../components/BorderGlow";
import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate network latency for front-end visual effect
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Reset after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="relative min-h-screen w-full py-20 overflow-hidden flex items-center justify-center">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Open for opportunities and collaborations.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center gap-8 transform-gpu"
          >
            <GlassCard className="flex items-center gap-6 p-6 hover:border-l-4 hover:border-l-[#00ffff] transition-all">
              <div className="w-12 h-12 rounded-full bg-[#00ffff]/10 flex items-center justify-center text-[#00ffff]">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Email</h4>
                <p className="text-gray-400 font-light">varshankumarchadaram@gmail.com</p>
              </div>
            </GlassCard>

            <GlassCard className="flex items-center gap-6 p-6 hover:border-l-4 hover:border-l-[#7c3aed] transition-all">
              <div className="w-12 h-12 rounded-full bg-[#7c3aed]/10 flex items-center justify-center text-[#7c3aed]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Location</h4>
                <p className="text-gray-400 font-light">India</p>
              </div>
            </GlassCard>

            <GlassCard className="flex items-center gap-6 p-6 hover:border-l-4 hover:border-l-[#00ffff] transition-all">
              <div className="w-12 h-12 rounded-full bg-[#00ffff]/10 flex items-center justify-center text-[#00ffff]">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Phone</h4>
                <p className="text-gray-400 font-light">+91 9030508558</p>
              </div>
            </GlassCard>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="transform-gpu h-full"
          >
            <BorderGlow glowColor="rgba(124, 58, 237, 0.8)" className="h-full">
              <GlassCard glowColor="primary" className="p-8 h-full border-none relative overflow-hidden">
                <form 
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6 relative z-10"
                >
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm text-gray-400 uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ffff] focus:ring-1 focus:ring-[#00ffff] transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm text-gray-400 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ffff] focus:ring-1 focus:ring-[#00ffff] transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm text-gray-400 uppercase tracking-wider">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ffff] focus:ring-1 focus:ring-[#00ffff] transition-all resize-none"
                      placeholder="How can I help you?"
                    ></textarea>
                  </div>
                  <motion.button
                    whileHover={status === "idle" ? { scale: 1.02, boxShadow: "0 0 20px rgba(0,255,255,0.4)" } : {}}
                    whileTap={status === "idle" ? { scale: 0.98 } : {}}
                    type="submit"
                    disabled={status !== "idle"}
                    className={`w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 group relative z-20 mt-auto ${
                      status === "success" ? "bg-green-500/20 text-green-400 border border-green-500/50" :
                      status === "error" ? "bg-red-500/20 text-red-400 border border-red-500/50" :
                      "bg-gradient-to-r from-[#00ffff] to-[#7c3aed] text-white cursor-pointer"
                    }`}
                  >
                    {status === "idle" && (
                      <>
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                    {status === "sending" && (
                      <>
                        Sending...
                        <Loader2 className="w-5 h-5 animate-spin" />
                      </>
                    )}
                    {status === "success" && (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2">
                        Message Sent <CheckCircle2 className="w-5 h-5" />
                      </motion.div>
                    )}
                    {status === "error" && (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2 border-red-500 text-red-400">
                        Error Sending <AlertCircle className="w-5 h-5" />
                      </motion.div>
                    )}
                  </motion.button>
                  {status === "success" && (
                    <p className="text-green-400 text-sm text-center font-medium mt-2 animate-pulse">
                      Message successfully sent!
                    </p>
                  )}
                </form>
              </GlassCard>
            </BorderGlow>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
