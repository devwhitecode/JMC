import { Link } from 'react-router-dom';

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-90"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Content */}
      <div className="relative h-full overflow-y-auto bg-pattern-dark">
        <div className="container mx-auto px-6 py-8">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-8 right-6 flex items-center gap-3 px-6 py-2 rounded-full border border-primary text-primary"
            aria-label="Close menu"
          >
            <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2L23 24M2 24L23 2" stroke="currentColor" strokeWidth="3"/>
            </svg>
            <span className="text-3xl font-bold">Close</span>
          </button>

          {/* Navigation Links */}
          <nav className="flex flex-col items-center gap-8 mt-32">
            <Link 
              to="/" 
              onClick={onClose}
              className="flex items-center gap-3 px-6 py-3 rounded-full border border-primary text-primary text-4xl font-bold"
            >
              <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 15L13.5 0.5L27 15L22.5 19.5L13.5 10.5L4.5 19.5L0 15Z" fill="currentColor"/>
              </svg>
              <span>Home</span>
            </Link>

            <Link 
              to="/about" 
              onClick={onClose}
              className="px-6 py-3 rounded-full border border-white text-white text-4xl md:text-5xl font-medium hover:border-primary hover:text-primary transition-all"
            >
              About Us
            </Link>

            <Link 
              to="/services" 
              onClick={onClose}
              className="px-6 py-3 rounded-full border border-white text-white text-4xl md:text-5xl font-medium hover:border-primary hover:text-primary transition-all"
            >
              Our Services &gt;
            </Link>

            <Link 
              to="/gallery" 
              onClick={onClose}
              className="px-6 py-3 rounded-full border border-white text-white text-4xl md:text-5xl font-medium hover:border-primary hover:text-primary transition-all"
            >
              Gallery
            </Link>

            <Link 
              to="/blog" 
              onClick={onClose}
              className="px-6 py-3 rounded-full border border-white text-white text-4xl md:text-5xl font-medium hover:border-primary hover:text-primary transition-all"
            >
              Blog
            </Link>

            <Link 
              to="/faq" 
              onClick={onClose}
              className="px-6 py-3 rounded-full border border-white text-white text-4xl md:text-5xl font-medium hover:border-primary hover:text-primary transition-all"
            >
              FAQ
            </Link>

            <Link 
              to="/contact" 
              onClick={onClose}
              className="px-6 py-3 rounded-full border border-white text-white text-4xl md:text-5xl font-medium hover:border-primary hover:text-primary transition-all"
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

