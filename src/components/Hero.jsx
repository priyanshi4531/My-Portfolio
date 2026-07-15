import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaArrowDown, FaEnvelope, FaPhone } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { personalInfo } from '../data/portfolioData'

const roles = ['Web Developer', 'Frontend Developer', 'Full Stack Developer', 'PHP Developer']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((roleIndex + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="max-w-7xl mx-auto px-6 pt-20 flex flex-col lg:flex-row items-center justify-between gap-16 w-full relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-700/50 bg-purple-900/20 text-purple-300 text-sm mb-6"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Available for opportunities
          </motion.div>

          <p className="text-gray-400 text-lg mb-2">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          {/* Typing Animation */}
          <div className="text-xl md:text-2xl font-semibold text-gray-300 mb-6 h-9">
            <span className="text-purple-400">{displayed}</span>
            <span className="animate-pulse text-cyan-400">|</span>
          </div>

          <p className="text-gray-400 max-w-lg mb-8 leading-relaxed">
            {personalInfo.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25"
            >
              View Resume
            </a>
            <Link
              to="contact"
              smooth duration={500}
              className="px-6 py-3 border border-purple-500/50 text-purple-300 font-semibold rounded-xl hover:bg-purple-500/10 transition-colors cursor-pointer"
            >
              Contact Me
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-5 justify-center lg:justify-start">
            <a href={personalInfo.github} target="_blank" rel="noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-xl border border-gray-700 text-gray-400 hover:border-purple-500 hover:text-purple-400 transition-all duration-200">
              <FaGithub size={20} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-xl border border-gray-700 text-gray-400 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-200">
              <FaLinkedin size={20} />
            </a>
            <a href={`mailto:${personalInfo.email}`}
              className="w-11 h-11 flex items-center justify-center rounded-xl border border-gray-700 text-gray-400 hover:border-purple-500 hover:text-purple-400 transition-all duration-200">
              <FaEnvelope size={18} />
            </a>
            <a href={`tel:${personalInfo.phone}`}
              className="w-11 h-11 flex items-center justify-center rounded-xl border border-gray-700 text-gray-400 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-200">
              <FaPhone size={16} />
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-12 justify-center lg:justify-start">
            {Object.entries(personalInfo.stats).map(([key, val]) => (
              <div key={key} className="text-center">
                <div className="text-3xl font-black gradient-text">{val}</div>
                <div className="text-xs text-gray-500 capitalize mt-1">{key}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-shrink-0"
        >
          <div className="relative float-animation">
            {/* Outer glow ring */}
            <div className="absolute -inset-4 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-full opacity-20 blur-xl"></div>
            {/* Border ring */}
            <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full p-0.5">
              <div className="w-full h-full bg-[#0a0a0f] rounded-full"></div>
            </div>
            {/* Image */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-purple-600/30">
              {personalInfo.profileImage !== '/profile.jpg' ? (
                <img src={personalInfo.profileImage} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-purple-900/50 to-cyan-900/50 flex items-center justify-center">
                  <span className="text-8xl">👨‍💻</span>
                </div>
              )}
            </div>
            {/* Decorative dots */}
            <div className="absolute -top-6 -right-6 w-12 h-12 border-2 border-purple-500/30 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-cyan-500/20 rounded-full"></div>
          </div>
        </motion.div>
      </div>

    
    </section>
  )
}
