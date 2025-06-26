import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#101828] text-white pt-16 pb-8 border-t border-[#14b8a6]/20 relative overflow-hidden">
      {/* Decorative Gradient Blur */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#14b8a6]/20 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight flex items-center">
                LogoJeez<span className="text-[#14b8a6] ml-1">.</span>
              </h2>
            </Link>
            <p className="text-gray-400 mb-6 max-w-xs text-base leading-relaxed">
              Creating professional, memorable brand identities for businesses worldwide. Elevate your presence with our expert design solutions.
            </p>
            <div className="flex space-x-3 mt-4">
              <a href="#" aria-label="Facebook" className="bg-[#233043] hover:bg-[#14b8a6] transition-colors duration-200 text-gray-300 hover:text-white p-2 rounded-full shadow-md">
                <FaFacebook size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="bg-[#233043] hover:bg-[#14b8a6] transition-colors duration-200 text-gray-300 hover:text-white p-2 rounded-full shadow-md">
                <FaTwitter size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="bg-[#233043] hover:bg-[#14b8a6] transition-colors duration-200 text-gray-300 hover:text-white p-2 rounded-full shadow-md">
                <FaInstagram size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="bg-[#233043] hover:bg-[#14b8a6] transition-colors duration-200 text-gray-300 hover:text-white p-2 rounded-full shadow-md">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-5 text-[#14b8a6] uppercase tracking-wide">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-300 hover:text-[#14b8a6] transition-colors text-base">Logo Design</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-[#14b8a6] transition-colors text-base">Brand Identity</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-[#14b8a6] transition-colors text-base">Business Cards</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-[#14b8a6] transition-colors text-base">Stationery Design</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-[#14b8a6] transition-colors text-base">Social Media Kits</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-5 text-[#14b8a6] uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-[#14b8a6] transition-colors text-base">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-[#14b8a6] transition-colors text-base">About Us</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-[#14b8a6] transition-colors text-base">Portfolio</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-[#14b8a6] transition-colors text-base">Pricing</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#14b8a6] transition-colors text-base">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-5 text-[#14b8a6] uppercase tracking-wide">Contact Us</h3>
            <ul className="space-y-4 text-gray-400 text-base">
              <li className="flex items-start">
                <span className="inline-block w-7 text-[#14b8a6] font-bold text-xl">🏢</span>
                <span>123 Design Street, Creative City</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-7 text-[#14b8a6] font-bold text-xl">📞</span>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-7 text-[#14b8a6] font-bold text-xl">✉️</span>
                <span>info@logojeez.com</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-7 text-[#14b8a6] font-bold text-xl">⏰</span>
                <span>Mon-Fri, 9am-5pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#233043] text-center text-gray-500 text-sm">
          <p>
            © {year} <span className="font-bold text-[#14b8a6]">LogoJeez</span>. All rights reserved.
          </p>
        </div>
      </div>
      {/* Decorative bottom right gradient */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#0ea5e9]/20 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
    </footer>
  )
}

export default Footer