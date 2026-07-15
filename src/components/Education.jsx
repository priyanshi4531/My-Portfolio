import { motion } from 'framer-motion'
import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm text-purple-400 uppercase tracking-widest mb-3">Academic Journey</p>
          <h2 className="text-4xl md:text-5xl font-bold">My <span className="gradient-text">Education</span></h2>
          <p className="text-gray-500 mt-4">Building a strong academic foundation with continuous learning.</p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mt-4"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-cyan-600 hidden md:block"></div>

          <div className="space-y-12">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`flex flex-col md:flex-row gap-6 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Card */}
                <div className="flex-1">
                  <div className="gradient-border rounded-2xl p-6 hover:glow transition-all duration-300 bg-[#0f0f1a]">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600/30 to-cyan-600/30 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                        {edu.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
                        <p className="text-purple-400 text-sm font-medium mb-1">{edu.institution}</p>
                        <p className="text-cyan-400/70 text-xs mb-3 inline-flex items-center gap-1">
                          <span>📅</span> {edu.period}
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">{edu.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:flex w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex-shrink-0 relative z-10 shadow-lg shadow-purple-500/50">
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
