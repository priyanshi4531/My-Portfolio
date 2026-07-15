import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="py-24 section-bg">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm text-purple-400 uppercase tracking-widest mb-3">✦ MY WORK</p>
          <h2 className="text-4xl md:text-5xl font-bold">Featured <span className="gradient-text">Projects</span></h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">A collection of projects that showcase my development skills and problem-solving approach.</p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="gradient-border rounded-2xl overflow-hidden bg-[#0f0f1a] group hover:glow transition-all duration-300 flex flex-col"
            >
              {/* Project Image / Placeholder */}
              <div className="h-48 bg-gradient-to-br from-purple-900/40 to-cyan-900/40 relative overflow-hidden">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl mb-2">
                        {i === 0 ? '📱' : i === 1 ? '🌐' : '💼'}
                      </div>
                      <div className="text-xs text-gray-500 uppercase tracking-widest">{project.subtitle}</div>
                    </div>
                  </div>
                )}
                {/* Badge */}
                {project.badge && (
                  <div className="absolute top-3 right-3 px-2 py-1 bg-purple-600/80 text-white text-xs rounded-full backdrop-blur-sm">
                    {project.badge}
                  </div>
                )}
                <div className="absolute top-3 left-3 px-2 py-1 bg-black/50 text-gray-300 text-xs rounded-full backdrop-blur-sm border border-gray-700/50">
                  {project.subtitle}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
                <p className="text-purple-400 text-xs font-medium mb-3">{project.tech}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 text-xs bg-purple-900/20 border border-purple-800/30 text-purple-300 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border border-gray-700 text-gray-400 hover:border-purple-500 hover:text-purple-400 text-sm transition-all duration-200"
                  >
                    <FaGithub size={14} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-600/30 text-purple-300 hover:from-purple-600/40 hover:to-cyan-600/40 text-sm transition-all duration-200"
                  >
                    <FaExternalLinkAlt size={12} />
                    Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
