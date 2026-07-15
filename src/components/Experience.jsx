import { motion } from 'framer-motion'
import { experience } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm text-purple-400 uppercase tracking-widest mb-3">✦ MY JOURNEY</p>
          <h2 className="text-4xl md:text-5xl font-bold">Work <span className="gradient-text">Experience</span></h2>
          <p className="text-gray-500 mt-4">Practical experience and projects where I applied my development skills.</p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mt-4"></div>
        </motion.div>

        <div className="space-y-8">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="gradient-border rounded-2xl p-6 bg-[#0f0f1a] hover:glow transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600/30 to-cyan-600/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-purple-600/50 group-hover:to-cyan-600/50 transition-all">
                    <span className="text-xl">{exp.type === 'Internship' ? '💼' : '🚀'}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                    <p className="text-purple-400 text-sm mt-0.5">{exp.company}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${exp.type === 'Internship' ? 'bg-green-900/30 text-green-400 border border-green-700/30' : 'bg-blue-900/30 text-blue-400 border border-blue-700/30'}`}>
                    {exp.type}
                  </span>
                  <span className="text-gray-500 text-xs">{exp.period}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-5">
                {exp.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs rounded-lg bg-purple-900/20 border border-purple-800/30 text-purple-300">
                    ✓ {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
