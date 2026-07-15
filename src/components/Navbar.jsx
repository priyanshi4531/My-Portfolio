import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { personalInfo } from '../data/portfolioData'

const navLinks = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Education', to: 'education' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Achievements', to: 'achievements' },
  { label: 'Contact', to: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0f]/90 backdrop-blur-md border-b border-purple-900/30' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold gradient-text cursor-pointer">
          {personalInfo.name.split(' ').map(w => w[0]).join('')}
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                spy smooth offset={-80} duration={500}
                className="text-sm text-gray-400 hover:text-white cursor-pointer transition-colors duration-200 hover:text-purple-400"
                activeClass="text-purple-400"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <a
          href={personalInfo.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden md:block px-4 py-2 text-sm font-medium border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-200"
        >
          Resume
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f0f1a] border-t border-purple-900/30 px-6 py-4">
          <ul className="space-y-4">
            {navLinks.map(link => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  spy smooth offset={-80} duration={500}
                  onClick={() => setMenuOpen(false)}
                  className="block text-gray-400 hover:text-purple-400 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
