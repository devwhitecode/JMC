import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-pattern-dark"></div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom relative z-10 py-16">
        {/* Logo and Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo and Contact */}
          <div className="lg:col-span-1">
            <img 
              src="https://www.figma.com/api/mcp/asset/14f88c83-0b1d-414c-86f4-dab5872052c4" 
              alt="JMC Construction & Remodeling" 
              className="h-48 w-auto mb-8"
            />
            
            {/* Phone Numbers */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-1 flex-shrink-0" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 13.5V16C16 16.55 15.55 17 15 17C6.72 17 0 10.28 0 2C0 1.45 0.45 1 1 1H3.5C4.05 1 4.5 1.45 4.5 2C4.5 3.25 4.7 4.45 5.07 5.57C5.18 5.92 5.1 6.31 4.82 6.59L3.21 8.2C4.38 10.69 6.31 12.62 8.8 13.79L10.41 12.18C10.69 11.9 11.08 11.82 11.43 11.93C12.55 12.3 13.75 12.5 15 12.5C15.55 12.5 16 12.95 16 13.5Z" fill="currentColor"/>
                </svg>
                <p className="text-sm md:text-base">
                  <span className="font-semibold">(210) 216-8022</span> — Español (Mattew Cano)
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-1 flex-shrink-0" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 13.5V16C16 16.55 15.55 17 15 17C6.72 17 0 10.28 0 2C0 1.45 0.45 1 1 1H3.5C4.05 1 4.5 1.45 4.5 2C4.5 3.25 4.7 4.45 5.07 5.57C5.18 5.92 5.1 6.31 4.82 6.59L3.21 8.2C4.38 10.69 6.31 12.62 8.8 13.79L10.41 12.18C10.69 11.9 11.08 11.82 11.43 11.93C12.55 12.3 13.75 12.5 15 12.5C15.55 12.5 16 12.95 16 13.5Z" fill="currentColor"/>
                </svg>
                <p className="text-sm md:text-base">
                  <span className="font-semibold">(210) 840-3360</span> — English (Joe Mora)
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-1 flex-shrink-0" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 13.5V16C16 16.55 15.55 17 15 17C6.72 17 0 10.28 0 2C0 1.45 0.45 1 1 1H3.5C4.05 1 4.5 1.45 4.5 2C4.5 3.25 4.7 4.45 5.07 5.57C5.18 5.92 5.1 6.31 4.82 6.59L3.21 8.2C4.38 10.69 6.31 12.62 8.8 13.79L10.41 12.18C10.69 11.9 11.08 11.82 11.43 11.93C12.55 12.3 13.75 12.5 15 12.5C15.55 12.5 16 12.95 16 13.5Z" fill="currentColor"/>
                </svg>
                <p className="text-sm md:text-base">
                  <span className="font-semibold">(210) 502-4254</span> — Office (Julio Vasaldua)
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-3 mb-6">
              <svg className="w-5 h-5 mt-1 flex-shrink-0" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 0C5.91 0 3 2.91 3 6.5C3 11.25 9.5 18 9.5 18C9.5 18 16 11.25 16 6.5C16 2.91 13.09 0 9.5 0ZM9.5 8.75C8.26 8.75 7.25 7.74 7.25 6.5C7.25 5.26 8.26 4.25 9.5 4.25C10.74 4.25 11.75 5.26 11.75 6.5C11.75 7.74 10.74 8.75 9.5 8.75Z" fill="currentColor"/>
              </svg>
              <p className="text-sm md:text-base leading-relaxed">
                San Antonio, Texas – Serving Austin, Houston, Dallas, Fort Worth, Odessa, Louisiana & Alabama
              </p>
            </div>

            {/* Business Hours */}
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 mt-1 flex-shrink-0" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 0C4.03 0 0 4.03 0 9C0 13.97 4.03 18 9 18C13.97 18 18 13.97 18 9C18 4.03 13.97 0 9 0ZM9 16C5.13 16 2 12.87 2 9C2 5.13 5.13 2 9 2C12.87 2 16 5.13 16 9C16 12.87 12.87 16 9 16ZM9.5 5H8V10L12.25 12.5L13 11.27L9.5 9.25V5Z" fill="currentColor"/>
              </svg>
              <p className="text-sm md:text-base font-semibold">
                Monday – Saturday | 8:00 AM – 6:00 PM
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl md:text-2xl font-black uppercase mb-6">Quick Links</h3>
            <ul className="space-y-4 text-base md:text-xl font-medium">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/why-choose-us" className="hover:text-primary transition-colors">Why Choose Us</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Our Services Column 1 */}
          <div>
            <h3 className="text-xl md:text-2xl font-black uppercase mb-6">Our Services</h3>
            <ul className="space-y-4 text-base md:text-xl capitalize">
              <li><Link to="/services/framing-siding" className="hover:text-primary transition-colors">Framing & Siding</Link></li>
              <li><Link to="/services/doors-windows" className="hover:text-primary transition-colors">Doors & Windows Installation</Link></li>
              <li><Link to="/services/electrical-plumbing" className="hover:text-primary transition-colors">Electrical & Plumbing</Link></li>
              <li><Link to="/services/hvac" className="hover:text-primary transition-colors">HVAC & AC Services</Link></li>
              <li><Link to="/services/flooring-drywall" className="hover:text-primary transition-colors">Flooring & Drywall</Link></li>
            </ul>
          </div>

          {/* Our Services Column 2 */}
          <div>
            <h3 className="text-xl md:text-2xl font-black uppercase mb-6 invisible">Services</h3>
            <ul className="space-y-4 text-base md:text-xl capitalize">
              <li><Link to="/services/painting" className="hover:text-primary transition-colors">Painting</Link></li>
              <li><Link to="/services/roofing" className="hover:text-primary transition-colors">Roofing</Link></li>
              <li><Link to="/services/decks-carports" className="hover:text-primary transition-colors">Decks, Carports & Outdoor Projects</Link></li>
              <li><Link to="/services/concrete-masonry" className="hover:text-primary transition-colors">Concrete & Masonry</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-center md:text-left">
            Privacy Policy | Your Privacy Choices
          </p>
          <p className="text-center">
            © 2025 JMC CONSTRUCTION AND REMODELING. All Rights Reserved.
          </p>
          <p className="text-center md:text-right">
            <span className="text-primary">Web Design</span> By Latin Branding
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

