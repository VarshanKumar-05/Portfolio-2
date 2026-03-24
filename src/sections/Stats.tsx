import { motion } from "framer-motion";
import BorderGlow from "../components/BorderGlow";
import {
  Github,
  Code,
  BarChart3,
  MapPin,
  Link,
  Users,
  GitBranch,
} from "lucide-react";

export default function Stats() {
  return (
    <section
      id="stats"
      className="min-h-screen py-20 px-6 text-white scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 transform-gpu"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Stats
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* ================= LEETCODE ================= */}
          <BorderGlow className="h-full" backgroundColor="rgba(10, 15, 25, 0.45)" glowColor="180 100 50">

            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <Code className="text-cyan-400" />
                <h3 className="text-xl font-bold">LeetCode Stats</h3>
              </div>
              <span className="text-cyan-400 text-sm">@varshan2005</span>
            </div>

            <div className="space-y-4 text-sm">

              <div>
                <p className="text-green-400">Easy: 62 / 932</p>
                <div className="h-2 bg-white/10 rounded-full mt-1">
                  <div className="h-2 bg-green-400 w-[20%] rounded-full"></div>
                </div>
              </div>

              <div>
                <p className="text-yellow-400">Medium: 74 / 2026</p>
                <div className="h-2 bg-white/10 rounded-full mt-1">
                  <div className="h-2 bg-yellow-400 w-[30%] rounded-full"></div>
                </div>
              </div>

              <div>
                <p className="text-red-400">Hard: 17 / 915</p>
                <div className="h-2 bg-white/10 rounded-full mt-1">
                  <div className="h-2 bg-red-400 w-[15%] rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6 text-sm text-gray-400">
              <p>Points: 12</p>
              <p>Submissions: 190</p>
              <p>Top Lang: Java</p>
              <p>Avg: 1.07/day</p>
            </div>

          </BorderGlow>

          {/* ================= GITHUB ================= */}
          <BorderGlow className="h-full" backgroundColor="rgba(10, 15, 25, 0.45)" glowColor="50 100 50">

            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <Github className="text-yellow-400" />
                <h3 className="text-xl font-bold">GitHub Stats</h3>
              </div>
              <img
                src="https://github.com/VarshanKumar-05.png"
                className="w-10 h-10 rounded-full"
              />
            </div>

            <p className="text-yellow-400 text-sm mb-3">@VarshanKumar-05</p>

            <div className="space-y-2 text-gray-300 text-sm">
              <p className="flex items-center gap-2">
                <MapPin size={14} /> India
              </p>
              <p className="flex items-center gap-2">
                <Link size={14} /> github.com
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
              <p><Users size={14} /> Followers: 1</p>
              <p>Following: 2</p>
              <p><GitBranch size={14} /> Repos: 10</p>
              <p>Commits: 61</p>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-2">Language Usage</p>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "Java", "Python", "C++"].map((lang, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full border border-yellow-400/30 text-yellow-300"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

          </BorderGlow>

          {/* ================= MY STATS ================= */}
          <BorderGlow className="h-full" backgroundColor="rgba(10, 15, 25, 0.45)" glowColor="120 100 50">

            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <BarChart3 className="text-green-400" />
                <h3 className="text-xl font-bold">My Stats</h3>
              </div>
              <span className="text-green-400 text-sm">2.6 yrs exp</span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">

              <p>Projects: 5</p>
              <p className="text-green-400">Completed: 4</p>

              <p>In Progress</p>
              <p className="text-yellow-400">80% Done</p>

              <p>Certifications: 15</p>
              <p>Skills: 19</p>

              <p>Experience</p>
              <p className="text-green-400">Since 2023</p>

            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-2">Skill Usage</p>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React", "Node.js", "MongoDB", "Python"].map((s, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full border border-green-400/30 text-green-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

          </BorderGlow>

        </div>
      </div>
    </section>
  );
}