import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleToggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
        <div className="container-custom">
          <div className="flex items-center justify-between py-6">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="https://www.figma.com/api/mcp/asset/14f88c83-0b1d-414c-86f4-dab5872052c4" 
                alt="JMC Construction & Remodeling" 
                className="h-16 md:h-20 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
              <Link 
                to="/" 
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                  isActive('/') 
                    ? 'border-black font-bold' 
                    : 'border-gray-400 hover:border-primary'
                }`}
              >
                {isActive('/') && (
                  <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 7L6.5 0.5L13 7L11 9L6.5 4.5L2 9L0 7Z" fill="currentColor"/>
                  </svg>
                )}
                <span className="text-lg md:text-xl">Home</span>
              </Link>

              <Link 
                to="/about" 
                className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                  isActive('/about') 
                    ? 'border-black font-bold' 
                    : 'border-gray-400 hover:border-primary'
                }`}
              >
                <span className="text-lg md:text-xl">About Us</span>
              </Link>

              <div className="relative group">
                <Link 
                  to="/services" 
                  className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                    location.pathname.startsWith('/services') 
                      ? 'border-black font-bold' 
                      : 'border-gray-400 hover:border-primary'
                  }`}
                >
                  <span className="text-lg md:text-xl">Our Services &gt;</span>
                </Link>
              </div>

              <Link 
                to="/gallery" 
                className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                  isActive('/gallery') 
                    ? 'border-black font-bold' 
                    : 'border-gray-400 hover:border-primary'
                }`}
              >
                <span className="text-lg md:text-xl">Gallery</span>
              </Link>

              <Link 
                to="/blog" 
                className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                  isActive('/blog') 
                    ? 'border-black font-bold' 
                    : 'border-gray-400 hover:border-primary'
                }`}
              >
                <span className="text-lg md:text-xl">Blog</span>
              </Link>

              <Link 
                to="/faq" 
                className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                  isActive('/faq') 
                    ? 'border-black font-bold' 
                    : 'border-gray-400 hover:border-primary'
                }`}
              >
                <span className="text-lg md:text-xl">FAQ</span>
              </Link>

              <Link 
                to="/contact" 
                className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                  isActive('/contact') 
                    ? 'border-black font-bold' 
                    : 'border-gray-400 hover:border-primary'
                }`}
              >
                <span className="text-lg md:text-xl">Contact us</span>
              </Link>

              <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-900 transition-all duration-300">
                <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 0L15.5 8H24L17 13.5L20 21.5L12.5 16L5 21.5L8 13.5L1 8H9.5L12.5 0Z" fill="white"/>
                </svg>
                <span className="text-lg md:text-xl">Log in</span>
              </button>

              <button className="bg-gradient-primary text-black px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300">
                <span className="text-lg md:text-xl">Sign in</span>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={handleToggleMenu}
              className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-full border border-black"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                {isMobileMenuOpen ? (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2L18 18M2 18L18 2" stroke="currentColor" strokeWidth="3"/>
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 4H18M2 10H18M2 16H18" stroke="currentColor" strokeWidth="3"/>
                  </svg>
                )}
              </div>
              <span className="text-xl md:text-2xl font-bold">Menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-24 md:h-28"></div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};

export default Header;

