import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import ServiceCard from '../components/common/ServiceCard';
import StatsCard from '../components/common/StatsCard';

const Home = () => {
  const services = [
    {
      number: '01',
      title: 'Framing & Siding',
      description: 'Durable structures and beautiful finishes that give your home strength and style.',
      image: 'https://www.figma.com/api/mcp/asset/0d1ccc82-4f16-4e68-a890-ad26ed05b0c8',
      link: '/services/framing-siding'
    },
    {
      number: '02',
      title: 'Doors & Windows Installation',
      description: 'Enhance comfort, light, and efficiency with expertly installed doors and windows.',
      image: 'https://www.figma.com/api/mcp/asset/c8a023e5-e4ca-4eee-b508-aec203961722',
      link: '/services/doors-windows'
    },
    {
      number: '03',
      title: 'Electrical & Plumbing',
      description: 'Safe, efficient, and up-to-code installations and repairs for every part of your home.',
      image: 'https://www.figma.com/api/mcp/asset/dd51495c-bac5-4046-bb9b-889b4ecf6539',
      link: '/services/electrical-plumbing'
    },
    {
      number: '04',
      title: 'HVAC & AC Services',
      description: 'Keep your home comfortable year-round with reliable heating and cooling solutions.',
      image: 'https://www.figma.com/api/mcp/asset/adccff5f-bbff-4e46-9a03-e247db3e93a2',
      link: '/services/hvac'
    },
    {
      number: '05',
      title: 'Flooring & Drywall',
      description: 'From smooth walls to flawless floors — we handle every detail with precision.',
      image: 'https://www.figma.com/api/mcp/asset/5e8f0c2f-b2c8-46cb-8096-58a7ddfc1fde',
      link: '/services/flooring-drywall'
    },
    {
      number: '06',
      title: 'Painting',
      description: 'Add color, depth, and character with professional painting inside and out.',
      image: 'https://www.figma.com/api/mcp/asset/f1aca311-d6cc-4394-84d1-69ebf0ddd478',
      link: '/services/painting'
    },
    {
      number: '07',
      title: 'Roofing',
      description: 'Protect your investment with quality roofing built to last through every season.',
      image: 'https://www.figma.com/api/mcp/asset/2afdc900-3cd4-4171-b559-010d5294e409',
      link: '/services/roofing'
    },
    {
      number: '08',
      title: 'Decks, Carports & Outdoor Projects',
      description: 'Upgrade your outdoor living spaces with functional, stylish custom builds.',
      image: 'https://www.figma.com/api/mcp/asset/b5e48aa5-a2db-4fa3-96a6-ec5d95ad44ba',
      link: '/services/decks-carports'
    },
    {
      number: '09',
      title: 'Concrete & Masonry',
      description: 'Strong foundations and refined finishes for driveways, patios, and more.',
      image: 'https://www.figma.com/api/mcp/asset/254b0f64-94eb-40a0-ab01-a9bdf1eb77b1',
      link: '/services/concrete-masonry'
    }
  ];

  const galleryImages = [
    '/assets/images/projects/PPP.jpeg',
    '/assets/images/projects/WhatsApp Image 2025-12-12 at 8.13.37 PM.jpeg',
    '/assets/images/projects/WhatsApp Image 2025-12-12 at 8.18.49 PMMM.jpeg',
    '/assets/images/projects/WhatsApp Image 2025-12-12 at 8.18.50 PMPP.jpeg',
    '/assets/images/projects/WhatsApp Image 2025-12-12 at 8PP.jpeg'
  ];

  const ArrowIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 0L10 20M10 20L0 10M10 20L20 10" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[800px]">
        {/* Background Images */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <img 
              src="https://www.figma.com/api/mcp/asset/e8fce4fb-702c-4558-8db8-e3575f1c8bef" 
              alt="Background" 
              className="w-full h-full object-cover opacity-90"
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/40 to-transparent"></div>
        </div>

        <div className="container-custom relative z-10 pt-12 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left space-y-6">
              <p className="font-poppins font-bold text-2xl md:text-3xl text-primary">
                Building with Integrity.
              </p>
              <h1 className="font-radhiumz text-4xl md:text-6xl lg:text-7xl uppercase leading-tight text-black">
                Turning <span className="block">Your Vision into Lasting</span>
                <span className="text-primary">Quality</span>
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button variant="primary" icon={<ArrowIcon />}>
                  Get a Free Quote
                </Button>
                <Button variant="dark" icon={<ArrowIcon />}>
                  View Our Work
                </Button>
              </div>
            </div>

            {/* Right Content */}
            <div className="text-white space-y-6">
              <p className="font-poppins text-base md:text-lg leading-relaxed">
                At <span className="font-extrabold">JMC Construction & Remodeling</span>, we combine craftsmanship, experience, and attention to detail to deliver results that exceed expectations. From home renovations to complete remodels, we bring your ideas to life with precision and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black relative py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 mix-blend-soft-light">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#ECB373" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pattern)"/>
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-radhiumz text-4xl md:text-5xl lg:text-6xl uppercase text-white mb-4">
              <span className="text-primary">Trusted</span> by Homeowners
            </h2>
            <p className="font-radhiumz text-4xl md:text-5xl lg:text-6xl uppercase text-white">
              Across Texas & Beyond
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <StatsCard number="20" suffix="+" label="Years" />
            <StatsCard number="1,500" suffix="+" label="Projects" />
            <StatsCard number="9" suffix="+" label="Cities Served" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left - Image */}
            <div className="relative h-[500px] md:h-[700px] lg:h-[1063px] rounded-[30px] overflow-hidden">
              <img 
                src="https://www.figma.com/api/mcp/asset/fca367ad-8905-4cc6-b1ac-324577992389" 
                alt="Construction Work" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right - Feature Cards */}
            <div className="space-y-6">
              <div className="bg-[#FAF5EF] rounded-[30px] p-8">
                <h3 className="font-radhiumz text-2xl md:text-3xl uppercase mb-4">
                  Structural Work Done Right
                </h3>
                <p className="font-poppins text-base text-black leading-relaxed">
                  Framing, siding, roofing, and structural upgrades built for durability and long-term performance.
                </p>
              </div>

              <div className="bg-[#FAF5EF] rounded-[30px] p-8">
                <h3 className="font-radhiumz text-2xl md:text-3xl uppercase mb-4">
                  Finishes That Transform Spaces
                </h3>
                <p className="font-poppins text-base text-black leading-relaxed">
                  Painting, drywall, flooring, and all interior finishes delivered with precision and clean workmanship.
                </p>
              </div>

              <div className="bg-[#FAF5EF] rounded-[30px] p-8">
                <h3 className="font-radhiumz text-2xl md:text-3xl uppercase mb-4">
                  Seamless Installations
                </h3>
                <p className="font-poppins text-base text-black leading-relaxed">
                  Doors, windows, HVAC, plumbing, and electrical handled by licensed professionals.
                </p>
              </div>

              <div className="bg-[#FAF5EF] rounded-[30px] p-8">
                <h3 className="font-radhiumz text-2xl md:text-3xl uppercase mb-4">
                  Outdoor Building Specialists
                </h3>
                <p className="font-poppins text-base text-black leading-relaxed">
                  Decks, carports, concrete, patios, and exterior structures designed to last.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="font-radhiumz text-4xl md:text-5xl lg:text-6xl uppercase text-black text-center mb-4">
            Comprehensive Construction & Remodeling <span className="text-primary">Solutions</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-16">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-20 bg-black">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 mix-blend-soft-light">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pattern2" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M40 0L80 40L40 80L0 40Z" fill="none" stroke="#ECB373" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pattern2)"/>
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h2 className="font-radhiumz text-4xl md:text-5xl lg:text-6xl uppercase leading-tight">
                <span className="text-primary">Experience.</span> Reliability. Craftsmanship.
              </h2>
              <p className="font-poppins text-base md:text-lg leading-relaxed">
                At JMC Construction & Remodeling, we believe quality goes beyond materials — it's about trust, transparency, and results that last.
              </p>
              <Button variant="primary" icon={<ArrowIcon />}>
                Read More
              </Button>
            </div>

            <div className="relative">
              <img 
                src="https://www.figma.com/api/mcp/asset/b8d7cfce-9a48-426b-b286-6af636e87468" 
                alt="Construction Quality" 
                className="w-full h-auto rounded-[10px]"
              />

              {/* Feature Badges */}
              <div className="absolute bottom-10 left-10 space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-4 border border-white/20">
                  <p className="font-poppins text-white text-xl md:text-2xl font-medium">
                    Over 20 Years of Experience
                  </p>
                </div>
              </div>

              <div className="absolute top-10 right-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-4 border border-white/20">
                  <p className="font-poppins text-white text-xl md:text-2xl font-medium">
                    Quality Materials & Finishes
                  </p>
                </div>
              </div>

              <div className="absolute bottom-32 -left-20 hidden lg:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-4 border border-white/20">
                  <p className="font-poppins text-white text-xl md:text-2xl font-medium">
                    Family-Owned & Operated
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
            <div>
              <h2 className="font-radhiumz text-4xl md:text-5xl uppercase text-black mb-4">
                See the Difference in <span className="text-primary">Every Detail</span>
              </h2>
            </div>
            <div className="lg:text-right">
              <p className="font-poppins text-lg md:text-xl text-black mb-6 max-w-2xl">
                Explore our latest projects to see how craftsmanship and creativity come together in every space we build.
              </p>
              <Button variant="primary" icon={<ArrowIcon />}>
                View All Projects
              </Button>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <Link 
                key={index} 
                to="/gallery"
                className="relative h-[400px] md:h-[600px] lg:h-[700px] rounded-[30px] overflow-hidden group border-[15px] border-white shadow-xl"
              >
                <img 
                  src={image} 
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-8 mt-12">
            <button className="w-12 h-12 rounded-full bg-black flex items-center justify-center hover:bg-primary transition-colors" aria-label="Previous">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2"/>
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full bg-black flex items-center justify-center hover:bg-primary transition-colors" aria-label="Next">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <img 
            src="https://www.figma.com/api/mcp/asset/b415ae27-b08c-45db-b9bb-2a97c16ce3f5" 
            alt="Construction" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <h2 className="font-radhiumz text-4xl md:text-5xl uppercase text-black leading-tight mb-6">
              Upgrade, Renovate, and Refresh Your Home Seamlessly
            </h2>
            <p className="font-poppins text-base md:text-lg text-black mb-8">
              Explore modern solutions for every corner of your property.
            </p>
            <Button variant="dark" icon={<ArrowIcon />}>
              Get a Free Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

