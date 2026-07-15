import { motion } from 'framer-motion'
import { skills, techStack } from '../data/portfolioData'

const categoryIcons = {
  "Frontend Development": "🎨",
  "Backend Development": "⚙️",
  "Database": "🗄️",
  "Tools & Technologies": "🔧"
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 section-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm text-purple-400 uppercase tracking-widest mb-3">✦ MY EXPERTISE</p>
          <h2 className="text-4xl md:text-5xl font-bold">Technical <span className="gradient-text">Skills</span></h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">Technologies, frameworks and tools that I use to build modern and scalable applications</p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mt-4"></div>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {Object.entries(skills).map(([category, items], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="gradient-border rounded-2xl p-6 bg-[#0f0f1a] hover:glow transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{categoryIcons[category]}</span>
                <h3 className="text-lg font-bold text-white">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.05 + i * 0.03 }}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg border border-purple-700/40 bg-purple-900/10 text-purple-300 hover:border-purple-500 hover:bg-purple-900/30 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <p className="text-sm text-cyan-400 uppercase tracking-widest mb-3">✦ TECHNOLOGIES</p>
            <h3 className="text-3xl font-bold">Tech <span className="gradient-text">Stack</span></h3>
          </div>

          {/* Scrolling Icons */}
          <div className="overflow-hidden relative py-4">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a0a0f] to-transparent z-10"></div>
            <div className="flex gap-8 marquee-track" style={{ width: 'max-content' }}>
              {[...techStack, ...techStack].map((tech, i) => (
                <div key={i} className="flex flex-col items-center gap-2 flex-shrink-0 group">
                  <div className="w-16 h-16 bg-[#0f0f1a] border border-gray-800 rounded-2xl flex items-center justify-center group-hover:border-purple-500 group-hover:glow transition-all duration-300 p-3">
                    <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" onError={e => { e.target.style.display='none' }} />
                  </div>
                  <span className="text-xs text-gray-500 group-hover:text-purple-400 transition-colors">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-6 italic">
            Always learning, always improving 🚀 — Exploring new technologies to build better solutions
          </p>
        </motion.div>
      </div>
    </section>
  )
}
