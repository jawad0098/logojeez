import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-[#f1f5f9] shadow-sm fixed w-full z-50 top-0 left-0">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="text-[#14b8a6] font-extrabold text-2xl tracking-tight">
          VIP Branding
        </Link>
        <div className="flex gap-6">
          <NavLink to="/" className={({isActive}) => 
            `font-semibold text-[#0f172a] hover:text-[#14b8a6] transition-colors ${isActive ? 'text-[#14b8a6]' : ''}`
          }>
            Home
          </NavLink>
          <NavLink to="/about" className={({isActive}) => 
            `font-semibold text-[#0f172a] hover:text-[#14b8a6] transition-colors ${isActive ? 'text-[#14b8a6]' : ''}`
          }>
            About
          </NavLink>
          <NavLink to="/services" className={({isActive}) => 
            `font-semibold text-[#0f172a] hover:text-[#14b8a6] transition-colors ${isActive ? 'text-[#14b8a6]' : ''}`
          }>
            Services
          </NavLink>
          <NavLink to="/portfolio" className={({isActive}) => 
            `font-semibold text-[#0f172a] hover:text-[#14b8a6] transition-colors ${isActive ? 'text-[#14b8a6]' : ''}`
          }>
            Portfolio
          </NavLink>
          <NavLink to="/get-quote" className={({isActive}) => 
            `font-semibold text-[#0f172a] hover:text-[#14b8a6] transition-colors ${isActive ? 'text-[#14b8a6]' : ''}`
          }>
            Get Quote
          </NavLink>
          <NavLink to="/contact" className={({isActive}) => 
            `font-semibold text-[#0f172a] hover:text-[#14b8a6] transition-colors ${isActive ? 'text-[#14b8a6]' : ''}`
          }>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
