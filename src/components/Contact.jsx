import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaPhone } from 'react-icons/fa'
import { personalInfo } from '../data/portfolioData'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    // Opens default mail client with pre-filled message
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.location.href = mailtoLink
    setStatus('Opening your email client...')
    setTimeout(() => setStatus(''), 3000)
  }

  return (
    <section id="contact" className="py-24 section-bg">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm text-purple-400 uppercase tracking-widest mb-3">✦ GET IN TOUCH</p>
          <h2 className="text-4xl md:text-5xl font-bold">Contact <span className="gradient-text">Me</span></h2>
          <p className="text-gray-500 mt-4">Have a project idea, internship opportunity or collaboration? Send me a message.</p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mt-4"></div>
        </motion.div>

        {/* Connect Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14"
        >
          <a href={`mailto:${personalInfo.email}`}
            className="gradient-border rounded-2xl p-6 bg-[#0f0f1a] flex flex-col items-center text-center gap-3 hover:glow group transition-all duration-300">
            <div className="w-12 h-12 bg-purple-900/30 rounded-xl flex items-center justify-center group-hover:bg-purple-900/50 transition-colors">
              <FaEnvelope className="text-purple-400" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-white">Email</h3>
              <p className="text-xs text-gray-500 mt-1 break-all">{personalInfo.email}</p>
            </div>
            <span className="text-xs text-purple-400">Send Email →</span>
          </a>

          <a href={`tel:${personalInfo.phone}`}
            className="gradient-border rounded-2xl p-6 bg-[#0f0f1a] flex flex-col items-center text-center gap-3 hover:glow group transition-all duration-300">
            <div className="w-12 h-12 bg-cyan-900/30 rounded-xl flex items-center justify-center group-hover:bg-cyan-900/50 transition-colors">
              <FaPhone className="text-cyan-400" size={18} />
            </div>
            <div>
              <h3 className="font-semibold text-white">Phone</h3>
              <p className="text-xs text-gray-500 mt-1">{personalInfo.phone}</p>
            </div>
            <span className="text-xs text-cyan-400">Call Me →</span>
          </a>

          <a href={personalInfo.github} target="_blank" rel="noreferrer"
            className="gradient-border rounded-2xl p-6 bg-[#0f0f1a] flex flex-col items-center text-center gap-3 hover:glow group transition-all duration-300">
            <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center group-hover:bg-purple-900/40 transition-colors">
              <FaGithub className="text-white" size={22} />
            </div>
            <div>
              <h3 className="font-semibold text-white">GitHub</h3>
              <p className="text-xs text-gray-500 mt-1">Explore my projects and source code.</p>
            </div>
            <span className="text-xs text-purple-400">Open GitHub →</span>
          </a>

          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer"
            className="gradient-border rounded-2xl p-6 bg-[#0f0f1a] flex flex-col items-center text-center gap-3 hover:glow-cyan group transition-all duration-300">
            <div className="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center group-hover:bg-blue-900/50 transition-colors">
              <FaLinkedin className="text-blue-400" size={22} />
            </div>
            <div>
              <h3 className="font-semibold text-white">LinkedIn</h3>
              <p className="text-xs text-gray-500 mt-1">Connect with me professionally.</p>
            </div>
            <span className="text-xs text-cyan-400">Open LinkedIn →</span>
          </a>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="gradient-border rounded-2xl p-8 bg-[#0f0f1a] max-w-2xl mx-auto"
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wider">Name</label>
                <input
                  type="text" name="name" value={form.name} onChange={handleChange} required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-[#0a0a0f] border border-gray-800 rounded-xl text-white text-sm focus:outline-none focus:border-purple-500 transition-colors placeholder-gray-600"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wider">Email</label>
                <input
                  type="email" name="email" value={form.email} onChange={handleChange} required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-[#0a0a0f] border border-gray-800 rounded-xl text-white text-sm focus:outline-none focus:border-purple-500 transition-colors placeholder-gray-600"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wider">Subject</label>
              <input
                type="text" name="subject" value={form.subject} onChange={handleChange} required
                placeholder="Project Inquiry / Collaboration"
                className="w-full px-4 py-3 bg-[#0a0a0f] border border-gray-800 rounded-xl text-white text-sm focus:outline-none focus:border-purple-500 transition-colors placeholder-gray-600"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wider">Message</label>
              <textarea
                name="message" value={form.message} onChange={handleChange} required rows={5}
                placeholder="Tell me about your project or opportunity..."
                className="w-full px-4 py-3 bg-[#0a0a0f] border border-gray-800 rounded-xl text-white text-sm focus:outline-none focus:border-purple-500 transition-colors placeholder-gray-600 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25"
            >
              Send Message
            </button>
            {status && <p className="text-center text-green-400 text-sm">{status}</p>}
          </form>
        </motion.div>
      </div>
    </section>
  )
}
