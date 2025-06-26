import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaUser, FaPhoneAlt, FaComments } from 'react-icons/fa'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const { currentUser, logout } = useAuth()
  const location = useLocation()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/About' },
    { title: 'Services', path: '/services' },
    { title: 'Portfolio', path: '/portfolio' },
    { title: 'Pricing', path: '/pricing' },
    { title: 'Contact', path: '/contact' },
  ]

  const navbarClass = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled
      ? 'bg-[#0f172a] shadow-xl' // changed background color when scrolled
      : 'bg-[#0f172a]'           // changed background color default
  } border-b border-[#14b8a6]/20`

  const handleLogout = async () => {
    try {
      await logout()
      setIsProfileOpen(false)
    } catch (error) {
      console.error('Failed to logout:', error)
    }
  }

  return (
    <nav className={navbarClass}>
      {/* Top Bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full bg-gradient-to-r from-[#101828]/90 via-[#101828]/80 to-[#101828]/90 backdrop-blur-xl border-b border-[#14b8a6]/10 flex items-center justify-end text-[11px] sm:text-xs text-white font-medium shadow-md"
        style={{padding: 0}}
      >
        <div className="flex items-center gap-2 sm:gap-3 pr-4 py-1">
          <Link
            to="/get-quote"
            className="bg-gradient-to-r from-[#14b8a6] to-[#0ea5e9] hover:from-[#0f172a] hover:to-[#14b8a6] text-white px-3 py-1.5 rounded-lg font-bold transition-all text-xs shadow-lg border border-[#14b8a6]/40 focus:outline-none focus:ring-2 focus:ring-[#14b8a6]/40"
            style={{ fontSize: '12px', letterSpacing: '0.01em' }}
          >
            Request Custom Quote
          </Link>
          <a
            href="#"
            className="flex items-center gap-1 hover:text-[#14b8a6] focus:text-[#14b8a6] transition px-2 py-1 rounded-lg hover:bg-[#14b8a6]/10 focus:bg-[#14b8a6]/10 focus:outline-none focus:ring-2 focus:ring-[#14b8a6]/30"
            style={{ fontSize: '12px' }}
            onClick={e => {
              e.preventDefault();
              window.open('https://tawk.to/chat/your-tawkto-id', '_blank', 'noopener,noreferrer');
            }}
          >
            <FaComments className="inline-block text-[13px]" /> Live Chat
          </a>
          <a
            href="tel:13026090077"
            className="flex items-center gap-1 hover:text-[#14b8a6] focus:text-[#14b8a6] transition px-2 py-1 rounded-lg hover:bg-[#14b8a6]/10 focus:bg-[#14b8a6]/10 focus:outline-none focus:ring-2 focus:ring-[#14b8a6]/30"
            style={{ fontSize: '12px' }}
          >
            <FaPhoneAlt className="inline-block text-[13px]" /> Call <span className="hidden sm:inline">1.302.609.0077</span>
          </a>
          <button
            className="flex items-center gap-1 text-white hover:text-[#14b8a6] focus:text-[#14b8a6] font-semibold transition px-2 py-1 rounded-lg hover:bg-[#14b8a6]/10 focus:bg-[#14b8a6]/10 focus:outline-none focus:ring-2 focus:ring-[#14b8a6]/30"
            style={{ fontSize: '13.5px' }}
            onClick={toggleProfile}
          >
            <FaUser className="w-5 h-5" />
            <span className="font-bold">My Account</span>
          </button>
        </div>
      </motion.div>
      <div className="p-2 sm:p-3 container mx-auto flex items-center justify-between px-2 sm:px-4 md:px-0 bg-transparent min-w-0">
        {/* Logo */}
        <Link to="/" className="flex items-center group min-w-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-[#14b8a6]/30 shadow-lg bg-[#101828]/90 px-2 sm:px-4 py-1.5 sm:py-2 flex items-center min-w-0"
          >
            <h1
              className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white flex items-center group-hover:text-[#14b8a6] transition-colors duration-200 min-w-0 truncate"
              style={{ fontSize: '1.3rem' }}
            >
              LogoJeez
              <span className="text-[#14b8a6] ml-1">.</span>
            </h1>
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-1 xs:space-x-2 lg:space-x-6 bg-transparent m-0 p-0 min-w-0">
          {menuItems.map((item, index) => (
            <li key={item.title} className="list-none m-0 p-0 group min-w-0">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
              >
                <Link
                  to={item.path}
                  className={`relative font-semibold px-2 xs:px-3 sm:px-4 py-1.5 sm:py-2 text-white border-none outline-none focus:outline-none focus:ring-0 focus-visible:outline-none group text-xs xs:text-sm sm:text-base
                    ${location.pathname === item.path ? 'text-[#14b8a6]' : 'hover:text-[#38d6c4] transition-colors duration-200'}
                  `}
                  style={{ fontSize: '1rem', letterSpacing: '0.01em', background: 'none', border: 'none', outline: 'none', boxShadow: 'none' }}
                >
                  {item.title}
                  {location.pathname === item.path && (
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#14b8a6] transition-all duration-300"></span>
                  )}
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>

        {/* Auth/Profile - moved to My Account dropdown */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
          {/* Empty: My Account is now in top bar */}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#14b8a6] focus:outline-none p-1.5 xs:p-2 rounded-lg hover:bg-[#14b8a6]/10 transition border border-[#14b8a6]/30 shadow"
          style={{ minWidth: 36, minHeight: 36 }}
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <FaTimes className="w-5 h-5 xs:w-6 xs:h-6" />
          ) : (
            <FaBars className="w-5 h-5 xs:w-6 xs:h-6" />
          )}
        </button>
      </div>

      {/* My Account Dropdown */}
      <AnimatePresence>
        {isProfileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute right-4 top-14 sm:top-12 w-56 bg-[#101828]/95 backdrop-blur-xl rounded-2xl shadow-2xl py-3 z-50 border border-[#14b8a6]/40"
          >
            {currentUser ? (
              <>
                <Link
                  to="/dashboard"
                  className="block px-5 py-2 text-gray-200 hover:bg-[#14b8a6]/10 hover:text-[#14b8a6] rounded-xl transition font-semibold focus:outline-none focus:ring-2 focus:ring-[#14b8a6]/30"
                  onClick={() => setIsProfileOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={async () => { await handleLogout(); setIsProfileOpen(false); }}
                  className="w-full text-left px-5 py-2 text-gray-200 hover:bg-[#14b8a6]/10 hover:text-[#14b8a6] rounded-xl transition font-semibold focus:outline-none focus:ring-2 focus:ring-[#14b8a6]/30"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-5 py-2 text-gray-200 hover:bg-[#14b8a6]/10 hover:text-[#14b8a6] rounded-xl transition font-semibold focus:outline-none focus:ring-2 focus:ring-[#14b8a6]/30"
                  onClick={() => setIsProfileOpen(false)}
                >
                  Log In
                </Link>
                <Link
                  to="/register"
                  className="block px-5 py-2 text-[#14b8a6] font-bold hover:bg-[#14b8a6]/10 hover:text-[#0f172a] rounded-xl transition focus:outline-none focus:ring-2 focus:ring-[#14b8a6]/30"
                  onClick={() => setIsProfileOpen(false)}
                >
                  Get Started
                </Link>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.35, type: "spring" }}
            className="md:hidden fixed top-0 right-0 h-full w-[90vw] max-w-xs min-w-[180px] bg-[#101828]/95 backdrop-blur-2xl shadow-2xl border-l border-[#14b8a6]/30 z-50 rounded-l-2xl"
          >
            <ul className="px-2 xs:px-4 py-6 xs:py-8 space-y-2 bg-transparent m-0 p-0">
              {menuItems.map(item => (
                <li key={item.title} className="list-none m-0 p-0">
                  <Link
                    to={item.path}
                    className={`block py-2 px-2 xs:px-4 rounded-xl font-semibold focus:outline-none text-xs xs:text-sm sm:text-base ${
                      location.pathname === item.path ? 'border border-[#14b8a6]' : ''
                    }`}
                    style={{ color: '#fff', background: 'none' }}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t border-[#233043] space-y-2 list-none m-0 p-0">
                <button
                  className="flex items-center gap-2 w-full py-2 px-4 rounded-xl font-semibold text-white hover:text-[#14b8a6] hover:bg-[#14b8a6]/10 transition focus:outline-none focus:ring-2 focus:ring-[#14b8a6]/30"
                  onClick={toggleProfile}
                >
                  <FaUser className="w-4 h-4" />
                  My Account
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar