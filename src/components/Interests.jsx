import { motion } from 'framer-motion'
import { interests } from '../data/portfolioData'

export default function Interests() {
  return (
    <section id="interests" className="py-16 bg-[#0a0a0f]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm text-purple-400 uppercase tracking-widest mb-3">✦ PASSIONS</p>
          <h2 className="text-4xl font-bold">My <span className="gradient-text">Interests</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {interests.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="gradient-border rounded-2xl p-6 bg-[#0f0f1a] flex items-start gap-5 hover:glow transition-all duration-300"
            >
              <div className="text-4xl">{item.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
