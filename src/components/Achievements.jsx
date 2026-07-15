import { motion } from 'framer-motion'
import { achievements, certifications } from '../data/portfolioData'

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm text-purple-400 uppercase tracking-widest mb-3">✦ MILESTONES</p>
          <h2 className="text-4xl md:text-5xl font-bold">My <span className="gradient-text">Achievements</span></h2>
          <p className="text-gray-500 mt-4">Some important milestones and accomplishments throughout my development journey.</p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-24">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="gradient-border rounded-2xl p-5 bg-[#0f0f1a] text-center group hover:glow transition-all duration-300"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
              <p className="text-xs text-gray-500">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm text-cyan-400 uppercase tracking-widest mb-3">✦ CERTIFICATIONS</p>
          <h2 className="text-4xl md:text-5xl font-bold">Professional <span className="gradient-text">Certificates</span></h2>
          <p className="text-gray-500 mt-4">Certifications earned through continuous learning and professional development.</p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="gradient-border rounded-xl p-4 bg-[#0f0f1a] flex items-center gap-4 hover:glow transition-all duration-300 group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600/30 to-cyan-600/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-purple-600/50 group-hover:to-cyan-600/50 transition-all">
                🏅
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-white truncate">{cert.title}</h3>
                <p className="text-xs text-purple-400 mt-0.5">{cert.issuer}</p>
              </div>
              <span className="text-xs px-2 py-1 rounded-full bg-green-900/30 text-green-400 border border-green-700/30 flex-shrink-0">
                ✓ Completed
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
