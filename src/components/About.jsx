import { motion } from 'framer-motion'
import { personalInfo } from '../data/portfolioData'

const points = [
  "Proficient in HTML, CSS, JavaScript, MySQL, and PHP.",
  "Hands-on experience building live websites and full-stack web apps.",
  "Skilled in creating responsive, user-friendly websites and applications.",
  "Passionate about coding, problem-solving, and continuous learning.",
  "Strong soft skills: Leadership, Communication, and Team Collaboration.",
  "Keen interest in expanding full-stack development expertise.",
  "Also interested in Financial Markets – Equity Research & Intraday Trading.",
]

export default function About() {
  return (
    <section id="about" className="py-24 section-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-purple-400 uppercase tracking-widest mb-3">Get To Know Me</p>
          <h2 className="text-4xl md:text-5xl font-bold">About <span className="gradient-text">Me</span></h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">Here's a quick overview of who I am and what I enjoy building.</p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mt-4"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left - Image / Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-shrink-0"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-2xl rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-cyan-900/30 rounded-2xl -rotate-3"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-purple-500/20">
                {personalInfo.profileImage !== '/profile.jpg' ? (
                  <img src={personalInfo.profileImage} alt="About" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-purple-900/40 to-cyan-900/40 flex items-center justify-center">
                    <span className="text-9xl">🧑‍💻</span>
                  </div>
                )}
              </div>
              {/* Stats Badges */}
              <div className="absolute -right-6 top-8 bg-[#0f0f1a] border border-purple-500/30 rounded-xl px-4 py-3 text-center glow">
                <div className="text-2xl font-black gradient-text">{personalInfo.stats.projects}</div>
                <div className="text-xs text-gray-400">Projects</div>
              </div>
              <div className="absolute -left-6 bottom-8 bg-[#0f0f1a] border border-cyan-500/30 rounded-xl px-4 py-3 text-center glow-cyan">
                <div className="text-2xl font-black text-cyan-400">{personalInfo.stats.certificates}</div>
                <div className="text-xs text-gray-400">Certificates</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              I'm <span className="gradient-text">{personalInfo.name}</span>
            </h3>
            <ul className="space-y-3 mb-8">
              {points.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <span className="text-purple-400 mt-1 flex-shrink-0">▸</span>
                  {point}
                </motion.li>
              ))}
            </ul>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(personalInfo.stats).map(([key, val]) => (
                <div key={key} className="gradient-border rounded-xl p-4 text-center">
                  <div className="text-3xl font-black gradient-text">{val}</div>
                  <div className="text-xs text-gray-400 capitalize mt-1">{key}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
