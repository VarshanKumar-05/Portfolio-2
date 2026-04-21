import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";
import { Send, Mail, MapPin, Phone, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import BorderGlow from "../components/BorderGlow";
import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const SocialLink = ({ icon: Icon, href, label, color, colorHex }: { icon: any, href: string, label: string, color: string, colorHex: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    data-magnetic
    whileHover={{ y: -5, scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.85, rotate: -5 }}
    className="relative group"
    aria-label={label}
  >
    <motion.div 
      className="absolute inset-0 rounded-xl blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300"
      style={{ backgroundColor: colorHex }}
    />
    <div className={`relative w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:border-${color}/50 transition-all duration-300 z-10`}>
      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
    </div>
  </motion.a>
);

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        'service_f15qeyh',
        'template_ufdtxma',
        e.currentTarget,
        'zyZBglFT_bAaXNIVF'
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Reset after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };
  
  return (
    <section id="contact" className="relative min-h-screen w-full py-20 overflow-hidden flex items-center justify-center">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
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
            transition={{ duration: 0.5, ease: "easeOut" }}
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

            <GlassCard className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 hover:border-l-4 hover:border-l-[#00ffff] transition-all group/phone">
              <div className="flex items-center gap-6 self-start sm:self-auto">
                <div className="w-12 h-12 rounded-full bg-[#00ffff]/10 flex items-center justify-center text-[#00ffff] group-hover/phone:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Phone</h4>
                  <p className="text-gray-400 font-light">+91 9030508558</p>
                </div>
              </div>

              {/* Social Links inside Phone Card */}
              <div className="flex items-center gap-3 bg-black/20 p-2 rounded-2xl border border-white/5 backdrop-blur-sm self-end sm:self-auto">
                <SocialLink 
                  icon={FaLinkedinIn} 
                  href="https://www.linkedin.com/in/varshan-kumar-chadaram/" 
                  label="LinkedIn" 
                  color="blue-500"
                  colorHex="#3b82f6"
                />
                <SocialLink 
                  icon={FaGithub} 
                  href="https://github.com/VarshanKumar-05" 
                  label="GitHub" 
                  color="gray-400"
                  colorHex="#9ca3af"
                />
                <SocialLink 
                  icon={SiLeetcode} 
                  href="https://leetcode.com/u/varshan2005/" 
                  label="LeetCode" 
                  color="yellow-500"
                  colorHex="#eab308"
                />
                <SocialLink 
                  icon={FaEnvelope} 
                  href="mailto:varshankumarchadaram@gmail.com" 
                  label="Email" 
                  color="red-500"
                  colorHex="#ef4444"
                />
              </div>
            </GlassCard>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
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
                      name="from_name"
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
                      name="from_email"
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
