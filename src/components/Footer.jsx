import { personalInfo } from '../data/portfolioData'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="py-8 bg-[#0a0a0f] border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-gray-500 text-sm">
          © {year} <span className="gradient-text font-semibold">{personalInfo.name.toUpperCase()}</span>. All Rights Reserved.
        </p>
        <p className="text-gray-600 text-xs mt-1">
          Built with React.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
