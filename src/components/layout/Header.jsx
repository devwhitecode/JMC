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
          {/* Mobile Header - Logo Left, Menu Right */}
          <div className="flex lg:hidden items-center justify-between py-6">
            <Link to="/" className="flex items-center">
              <img 
                src="https://www.figma.com/api/mcp/asset/14f88c83-0b1d-414c-86f4-dab5872052c4" 
                alt="JMC Construction & Remodeling" 
                className="h-12 w-auto"
              />
            </Link>

            {/* Mobile Menu Button */}
            <button 
              onClick={handleToggleMenu}
              className="flex items-center gap-2 px-5 py-2 rounded-full border-2 border-black"
              aria-label="Toggle menu"
            >
              {!isMobileMenuOpen && (
                <>
                  <div className="grid grid-cols-3 gap-0.5 w-6 h-6">
                    <div className="w-1.5 h-1.5 bg-black rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-black rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-black rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-black rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-black rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-black rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-black rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-black rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-black rounded-sm"></div>
                  </div>
                  <span className="text-2xl font-bold">Menu</span>
                </>
              )}
            </button>
          </div>

          {/* Desktop Header - Logo Centered */}
          <div className="hidden lg:flex items-center justify-center py-6 relative">
            {/* Logo - Centered */}
            <Link to="/" className="absolute left-1/2 transform -translate-x-1/2 flex items-center z-10">
              <img 
                src="https://www.figma.com/api/mcp/asset/14f88c83-0b1d-414c-86f4-dab5872052c4" 
                alt="JMC Construction & Remodeling" 
                className="h-20 w-auto"
              />
            </Link>

            {/* Desktop Navigation - Wraps around logo */}
            <nav className="flex items-center gap-3 w-full justify-between px-4">
              {/* Left Side Navigation */}
              <div className="flex items-center gap-3">
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
                  <span className="text-lg">Home</span>
                </Link>

                <Link 
                  to="/about" 
                  className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                    isActive('/about') 
                      ? 'border-black font-bold' 
                      : 'border-gray-400 hover:border-primary'
                  }`}
                >
                  <span className="text-lg">About Us</span>
                </Link>

                <Link 
                  to="/services" 
                  className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                    location.pathname.startsWith('/services') 
                      ? 'border-black font-bold' 
                      : 'border-gray-400 hover:border-primary'
                  }`}
                >
                  <span className="text-lg">Our Services &gt;</span>
                </Link>
              </div>

              {/* Spacer for centered logo */}
              <div className="w-64"></div>

              {/* Right Side Navigation */}
              <div className="flex items-center gap-3">
                <Link 
                  to="/gallery" 
                  className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                    isActive('/gallery') 
                      ? 'border-black font-bold' 
                      : 'border-gray-400 hover:border-primary'
                  }`}
                >
                  <span className="text-lg">Gallery</span>
                </Link>

                <Link 
                  to="/blog" 
                  className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                    isActive('/blog') 
                      ? 'border-black font-bold' 
                      : 'border-gray-400 hover:border-primary'
                  }`}
                >
                  <span className="text-lg">Blog</span>
                </Link>

                <Link 
                  to="/faq" 
                  className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                    isActive('/faq') 
                      ? 'border-black font-bold' 
                      : 'border-gray-400 hover:border-primary'
                  }`}
                >
                  <span className="text-lg">FAQ</span>
                </Link>

                <Link 
                  to="/contact" 
                  className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                    isActive('/contact') 
                      ? 'border-black font-bold' 
                      : 'border-gray-400 hover:border-primary'
                  }`}
                >
                  <span className="text-lg">Contact us</span>
                </Link>
              </div>
            </nav>
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

