import Button from '../components/common/Button';

const AboutUs = () => {
  const ArrowIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 0L10 20M10 20L0 10M10 20L20 10" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[500px] bg-black text-white">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#ECB373" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pattern)"/>
          </svg>
        </div>

        <div className="container-custom relative z-10 py-20">
          <h1 className="font-radhiumz text-5xl md:text-6xl lg:text-7xl uppercase mb-6">
            About <span className="text-primary">Us</span>
          </h1>
          <p className="font-poppins text-xl md:text-2xl max-w-3xl">
            Building trust, one project at a time, since 2003
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-radhiumz text-4xl md:text-5xl uppercase mb-6">
                <span className="text-primary">Family-Owned</span> Since 2003
              </h2>
              <div className="space-y-4 font-poppins text-base md:text-lg leading-relaxed">
                <p>
                  For over two decades, <strong>JMC Construction & Remodeling</strong> has been the trusted name for residential and commercial construction across Texas and beyond. What started as a family vision has grown into a team of skilled professionals dedicated to transforming spaces with quality, integrity, and care.
                </p>
                <p>
                  We're not just contractors—we're partners in bringing your vision to life. From initial consultation to final walkthrough, we treat every project like it's our own home, ensuring exceptional craftsmanship and lasting results.
                </p>
                <p>
                  Whether it's a complete home remodel, commercial build-out, or specialized repair, we combine decades of experience with modern techniques to deliver work that stands the test of time.
                </p>
              </div>
            </div>

            <div className="relative h-[500px] rounded-[30px] overflow-hidden">
              <img 
                src="https://www.figma.com/api/mcp/asset/fca367ad-8905-4cc6-b1ac-324577992389" 
                alt="JMC Construction Team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <h2 className="font-radhiumz text-4xl md:text-5xl uppercase text-center mb-16">
            Our <span className="text-primary">Values</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-[30px] p-8 shadow-lg">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 2L18.5 12H28L20 18L23 28L16 23L9 28L12 18L4 12H13.5L16 2Z" fill="#000"/>
                </svg>
              </div>
              <h3 className="font-radhiumz text-2xl uppercase mb-4">Integrity</h3>
              <p className="font-poppins text-base leading-relaxed">
                We believe in honest communication, transparent pricing, and doing what's right—even when no one is watching.
              </p>
            </div>

            <div className="bg-white rounded-[30px] p-8 shadow-lg">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28 4H4C2.9 4 2 4.9 2 6V26C2 27.1 2.9 28 4 28H28C29.1 28 30 27.1 30 26V6C30 4.9 29.1 4 28 4ZM12 22L6 16L8.4 13.6L12 17.2L23.6 5.6L26 8L12 22Z" fill="#000"/>
                </svg>
              </div>
              <h3 className="font-radhiumz text-2xl uppercase mb-4">Quality</h3>
              <p className="font-poppins text-base leading-relaxed">
                From materials to workmanship, we never cut corners. Every project reflects our commitment to excellence.
              </p>
            </div>

            <div className="bg-white rounded-[30px] p-8 shadow-lg">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 2C8.3 2 2 8.3 2 16C2 23.7 8.3 30 16 30C23.7 30 30 23.7 30 16C30 8.3 23.7 2 16 2ZM16 8C18.2 8 20 9.8 20 12C20 14.2 18.2 16 16 16C13.8 16 12 14.2 12 12C12 9.8 13.8 8 16 8ZM16 26C12 26 8.6 23.8 7 20.6C7 17.3 13.3 15.5 16 15.5C18.7 15.5 25 17.3 25 20.6C23.4 23.8 20 26 16 26Z" fill="#000"/>
                </svg>
              </div>
              <h3 className="font-radhiumz text-2xl uppercase mb-4">Relationships</h3>
              <p className="font-poppins text-base leading-relaxed">
                We build more than structures—we build long-term relationships based on trust, respect, and reliable service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Coverage */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-radhiumz text-4xl md:text-5xl uppercase mb-6">
                Serving <span className="text-primary">Texas & Beyond</span>
              </h2>
              <p className="font-poppins text-base md:text-lg leading-relaxed mb-6">
                While we're proud to call San Antonio home, our services extend across major Texas cities and into neighboring states.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <p className="font-poppins text-lg font-medium">San Antonio, TX (Headquarters)</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <p className="font-poppins text-lg font-medium">Austin, TX</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <p className="font-poppins text-lg font-medium">Houston, TX</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <p className="font-poppins text-lg font-medium">Dallas, TX</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <p className="font-poppins text-lg font-medium">Fort Worth, TX</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <p className="font-poppins text-lg font-medium">Odessa, TX</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <p className="font-poppins text-lg font-medium">Louisiana</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <p className="font-poppins text-lg font-medium">Alabama</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-light rounded-[30px] p-8">
              <div className="aspect-video bg-gray-300 rounded-[20px] flex items-center justify-center">
                <p className="font-poppins text-xl text-gray-600">Service Area Map</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="font-radhiumz text-4xl md:text-5xl uppercase mb-6">
            <span className="text-primary">Licensed</span> & Insured
          </h2>
          <p className="font-poppins text-lg md:text-xl max-w-3xl mx-auto mb-12">
            Your peace of mind is our priority. We carry full licensing and insurance to protect you and your property throughout every project.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white/10 backdrop-blur-sm rounded-[20px] p-6 border border-white/20">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 2L24 14H36L26 22L30 34L20 27L10 34L14 22L4 14H16L20 2Z" fill="#000"/>
                  </svg>
                </div>
                <p className="font-poppins text-sm">Certification Badge {item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-radhiumz text-4xl md:text-5xl uppercase text-black mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="font-poppins text-lg md:text-xl text-black mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create something extraordinary together.
          </p>
          <Button variant="dark" icon={<ArrowIcon />}>
            Get Your Free Estimate
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

