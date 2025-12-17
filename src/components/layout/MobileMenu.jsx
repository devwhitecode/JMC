import { Link } from 'react-router-dom';

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Full Black Background */}
      <div className="absolute inset-0 bg-black" />

      {/* Menu Content */}
      <div className="relative h-full overflow-y-auto">
        <div className="px-6 py-6">
          {/* Header with Logo and Close Button */}
          <div className="flex items-center justify-between mb-20">
            {/* Logo */}
            <Link to="/" onClick={onClose}>
              <img 
                src="https://www.figma.com/api/mcp/asset/14f88c83-0b1d-414c-86f4-dab5872052c4" 
                alt="JMC Construction & Remodeling" 
                className="h-12 w-auto"
              />
            </Link>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="flex items-center gap-2 px-5 py-2 rounded-full border-2 border-[#ECB373] text-[#ECB373]"
              aria-label="Close menu"
            >
              <div className="grid grid-cols-3 gap-1 w-6 h-6">
                <div className="w-1.5 h-1.5 bg-[#ECB373]"></div>
                <div className="w-1.5 h-1.5 bg-[#ECB373]"></div>
                <div className="w-1.5 h-1.5 bg-[#ECB373]"></div>
                <div className="w-1.5 h-1.5 bg-[#ECB373]"></div>
                <div className="w-1.5 h-1.5 bg-[#ECB373]"></div>
                <div className="w-1.5 h-1.5 bg-[#ECB373]"></div>
                <div className="w-1.5 h-1.5 bg-[#ECB373]"></div>
                <div className="w-1.5 h-1.5 bg-[#ECB373]"></div>
                <div className="w-1.5 h-1.5 bg-[#ECB373]"></div>
              </div>
              <span className="text-2xl font-bold">Close</span>
            </button>
          </div>

          {/* Navigation Links - CENTER ALIGNED */}
          <nav className="flex flex-col items-center gap-6 mt-12">
            <Link 
              to="/" 
              onClick={onClose}
              className="flex items-center gap-3 px-8 py-3 rounded-full border-2 border-[#ECB373] text-[#ECB373] text-3xl font-medium"
            >
              <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 11L10 0.5L20 11L17 14L10 7L3 14L0 11Z" fill="currentColor"/>
              </svg>
              <span>Home</span>
            </Link>

            <Link 
              to="/about" 
              onClick={onClose}
              className="px-8 py-3 rounded-full border-2 border-white text-white text-3xl font-medium hover:border-[#ECB373] hover:text-[#ECB373] transition-all"
            >
              About Us
            </Link>

            <Link 
              to="/services" 
              onClick={onClose}
              className="px-8 py-3 rounded-full border-2 border-white text-white text-3xl font-medium hover:border-[#ECB373] hover:text-[#ECB373] transition-all flex items-center gap-2"
            >
              Our Services <span className="text-2xl">›</span>
            </Link>

            <Link 
              to="/gallery" 
              onClick={onClose}
              className="px-8 py-3 rounded-full border-2 border-white text-white text-3xl font-medium hover:border-[#ECB373] hover:text-[#ECB373] transition-all"
            >
              Gallery
            </Link>

            <Link 
              to="/blog" 
              onClick={onClose}
              className="px-8 py-3 rounded-full border-2 border-white text-white text-3xl font-medium hover:border-[#ECB373] hover:text-[#ECB373] transition-all"
            >
              Blog
            </Link>

            <Link 
              to="/faq" 
              onClick={onClose}
              className="px-8 py-3 rounded-full border-2 border-white text-white text-3xl font-medium hover:border-[#ECB373] hover:text-[#ECB373] transition-all"
            >
              FAQ
            </Link>

            <Link 
              to="/contact" 
              onClick={onClose}
              className="px-8 py-3 rounded-full border-2 border-white text-white text-3xl font-medium hover:border-[#ECB373] hover:text-[#ECB373] transition-all"
            >
              Contact us
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

