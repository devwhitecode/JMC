import Button from '../components/common/Button';

const WhyChooseUs = () => {
  const ArrowIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 0L10 20M10 20L0 10M10 20L20 10" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );

  const reasons = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 4L28 18H42L30 26L34 40L24 33L14 40L18 26L6 18H20L24 4Z" fill="currentColor"/>
        </svg>
      ),
      title: 'Over 20 Years of Experience',
      description: 'Two decades of perfecting our craft means you get tried-and-true methods, industry insight, and reliable results every time.'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 8H8C5.8 8 4 9.8 4 12V36C4 38.2 5.8 40 8 40H40C42.2 40 44 38.2 44 36V12C44 9.8 42.2 8 40 8ZM18 32L8 22L11.4 18.6L18 25.2L36.6 6.6L40 10L18 32Z" fill="currentColor"/>
        </svg>
      ),
      title: 'Licensed & Insured Professionals',
      description: 'Full licensing and comprehensive insurance coverage ensure your property and investment are protected throughout the entire project.'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM24 12C27.32 12 30 14.68 30 18C30 21.32 27.32 24 24 24C20.68 24 18 21.32 18 18C18 14.68 20.68 12 24 12ZM24 38C18 38 12.9 34.84 10.5 30.18C10.54 25.4 19.98 22.8 24 22.8C28 22.8 37.46 25.4 37.5 30.18C35.1 34.84 30 38 24 38Z" fill="currentColor"/>
        </svg>
      ),
      title: 'Family-Owned & Operated',
      description: 'As a family business, we treat every client like part of our extended family. Your satisfaction is personal to us.'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M42 10H30V6C30 3.8 28.2 2 26 2H22C19.8 2 18 3.8 18 6V10H6C3.8 10 2 11.8 2 14V38C2 40.2 3.8 42 6 42H42C44.2 42 46 40.2 46 38V14C46 11.8 44.2 10 42 10ZM22 6H26V10H22V6ZM42 38H6V14H42V38Z" fill="currentColor"/>
        </svg>
      ),
      title: 'Quality Craftsmanship Guaranteed',
      description: 'We stand behind our work with confidence. Every project is completed with precision, care, and a commitment to excellence.'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 2C13.5 2 5 10.5 5 21C5 33 24 48 24 48C24 48 43 33 43 21C43 10.5 34.5 2 24 2ZM24 27C20.1 27 17 23.9 17 20C17 16.1 20.1 13 24 13C27.9 13 31 16.1 31 20C31 23.9 27.9 27 24 27Z" fill="currentColor"/>
        </svg>
      ),
      title: 'Serving Texas and Beyond',
      description: 'From San Antonio to Houston, Dallas to Louisiana and Alabama, we bring the same quality and care to every location we serve.'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M44 24C44 13 35 4 24 4C13 4 4 13 4 24C4 35 13 44 24 44C35 44 44 35 44 24ZM24 8C32.8 8 40 15.2 40 24C40 32.8 32.8 40 24 40C15.2 40 8 32.8 8 24C8 15.2 15.2 8 24 8ZM22 34H26V22H22V34ZM22 18H26V14H22V18Z" fill="currentColor"/>
        </svg>
      ),
      title: 'Transparent Communication',
      description: 'No surprises, no hidden fees. We keep you informed at every stage with honest updates and clear timelines.'
    }
  ];

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
            Why Choose <span className="text-primary">Us</span>
          </h1>
          <p className="font-poppins text-xl md:text-2xl max-w-3xl">
            Experience the difference that dedication, expertise, and genuine care make in every project
          </p>
        </div>
      </section>

      {/* Main Reasons Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-radhiumz text-4xl md:text-5xl uppercase mb-6">
              What Sets <span className="text-primary">Us Apart</span>
            </h2>
            <p className="font-poppins text-lg md:text-xl max-w-3xl mx-auto">
              When you choose JMC Construction & Remodeling, you're not just hiring contractors—you're partnering with a team that genuinely cares about your vision and success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="bg-neutral-light rounded-[30px] p-8 hover:shadow-xl transition-all duration-300 card-hover"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 text-black">
                  {reason.icon}
                </div>
                <h3 className="font-radhiumz text-xl md:text-2xl uppercase mb-4 text-black">
                  {reason.title}
                </h3>
                <p className="font-poppins text-base leading-relaxed text-black">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-radhiumz text-4xl md:text-5xl uppercase mb-6">
                <span className="text-primary">Trusted</span> by Thousands
              </h2>
              <p className="font-poppins text-lg leading-relaxed mb-8">
                Over the past 20+ years, we've completed more than 1,500 projects across 9+ cities. Our reputation is built on every satisfied customer, every quality build, and every promise kept.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 16.2L4.8 12L3.4 13.4L9 19L21 7L19.6 5.6L9 16.2Z" fill="#000"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-xl mb-2">Free Estimates</h4>
                    <p className="font-poppins text-base">Get a detailed, no-obligation quote tailored to your project and budget.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 16.2L4.8 12L3.4 13.4L9 19L21 7L19.6 5.6L9 16.2Z" fill="#000"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-xl mb-2">Bilingual Team</h4>
                    <p className="font-poppins text-base">Communicate comfortably in English or Spanish—we're here to serve you in your language.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 16.2L4.8 12L3.4 13.4L9 19L21 7L19.6 5.6L9 16.2Z" fill="#000"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-xl mb-2">On-Time & On-Budget</h4>
                    <p className="font-poppins text-base">We respect your time and investment with clear schedules and accurate cost estimates.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 16.2L4.8 12L3.4 13.4L9 19L21 7L19.6 5.6L9 16.2Z" fill="#000"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-xl mb-2">Residential & Commercial</h4>
                    <p className="font-poppins text-base">From homes to businesses, we handle projects of all sizes with the same dedication.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[600px] rounded-[30px] overflow-hidden">
                <img 
                  src="https://www.figma.com/api/mcp/asset/fca367ad-8905-4cc6-b1ac-324577992389" 
                  alt="Quality Construction Work" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="font-radhiumz text-4xl md:text-5xl uppercase text-center mb-16">
            The <span className="text-primary">JMC Difference</span>
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-black text-white">
                  <th className="font-radhiumz text-left p-6 text-xl uppercase">Feature</th>
                  <th className="font-radhiumz text-center p-6 text-xl uppercase bg-primary text-black">JMC Construction</th>
                  <th className="font-radhiumz text-center p-6 text-xl uppercase">Others</th>
                </tr>
              </thead>
              <tbody className="font-poppins text-base">
                <tr className="border-b border-gray-200">
                  <td className="p-6 font-medium">Licensed & Insured</td>
                  <td className="p-6 text-center bg-primary/10">✓ Fully Licensed</td>
                  <td className="p-6 text-center">Varies</td>
                </tr>
                <tr className="border-b border-gray-200 bg-neutral-light">
                  <td className="p-6 font-medium">Experience</td>
                  <td className="p-6 text-center bg-primary/10">20+ Years</td>
                  <td className="p-6 text-center">Mixed</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-6 font-medium">Free Estimates</td>
                  <td className="p-6 text-center bg-primary/10">✓ Always</td>
                  <td className="p-6 text-center">Sometimes</td>
                </tr>
                <tr className="border-b border-gray-200 bg-neutral-light">
                  <td className="p-6 font-medium">Bilingual Support</td>
                  <td className="p-6 text-center bg-primary/10">✓ English & Spanish</td>
                  <td className="p-6 text-center">Rare</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-6 font-medium">Service Areas</td>
                  <td className="p-6 text-center bg-primary/10">9+ Cities & States</td>
                  <td className="p-6 text-center">Limited</td>
                </tr>
                <tr className="bg-neutral-light">
                  <td className="p-6 font-medium">Family-Owned Care</td>
                  <td className="p-6 text-center bg-primary/10">✓ Personalized Service</td>
                  <td className="p-6 text-center">Corporate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-radhiumz text-4xl md:text-5xl uppercase text-black mb-6">
            Experience the JMC Difference Today
          </h2>
          <p className="font-poppins text-lg md:text-xl text-black mb-8 max-w-2xl mx-auto">
            Join the thousands of satisfied homeowners and businesses who've trusted us with their most important projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="dark" icon={<ArrowIcon />}>
              Get Your Free Estimate
            </Button>
            <Button variant="dark-gradient" icon={<ArrowIcon />}>
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;

