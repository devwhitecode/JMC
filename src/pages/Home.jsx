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
      <section className="relative min-h-[90vh] bg-white">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[90vh] py-20">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              {/* Tagline */}
              <p className="font-poppins font-bold text-3xl md:text-4xl text-[#ECB373]">
                Building with Integrity.
              </p>

              {/* Main Heading */}
              <h1 className="font-radhiumz text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase leading-[1.05] text-black">
                TURNING YOUR<br />
                VISION INTO<br />
                LASTING <span className="text-[#ECB373]">QUALITY</span>
              </h1>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-[#ECB373] hover:bg-[#d9a562] text-black font-bold py-4 px-8 rounded-full inline-flex items-center justify-center gap-3 transition-all duration-300 text-base uppercase">
                  GET A FREE QUOTE
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-90">
                    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M10 6L10 14M10 14L6 10M10 14L14 10" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </button>
                <button className="bg-[#1A1208] hover:bg-black text-white font-bold py-4 px-8 rounded-full inline-flex items-center justify-center gap-3 transition-all duration-300 text-base uppercase">
                  VIEW OUR WORK
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-90">
                    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M10 6L10 14M10 14L6 10M10 14L14 10" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Column - Image & Description */}
            <div className="space-y-8">
              {/* House Image */}
              <div className="relative rounded-[20px] overflow-hidden shadow-2xl">
                <img 
                  src="https://www.figma.com/api/mcp/asset/e8fce4fb-702c-4558-8db8-e3575f1c8bef" 
                  alt="Modern House" 
                  className="w-full h-auto"
                />
              </div>

              {/* Description Text */}
              <div className="bg-white p-8 rounded-[20px]">
                <p className="font-poppins text-lg md:text-xl leading-relaxed text-black">
                  At <span className="font-bold">JMC Construction & Remodeling</span>, we combine craftsmanship, experience, and attention to detail to deliver results that exceed expectations. From home renovations to complete remodels, we bring your ideas to life with precision and care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black relative py-24">
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-radhiumz text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase leading-tight">
              <span className="text-[#ECB373]">TRUSTED</span> <span className="text-white">BY HOMEOWNERS</span>
            </h2>
            <p className="font-radhiumz text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase text-white mt-2">
              ACROSS TEXAS & BEYOND
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
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
      <section className="py-24 bg-white">
        <div className="container-custom">
          <h2 className="font-radhiumz text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase text-black text-center mb-6 leading-tight px-4">
            COMPREHENSIVE CONSTRUCTION &<br />REMODELING <span className="text-[#ECB373]">SOLUTIONS</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-24 bg-black">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white space-y-8">
              <h2 className="font-radhiumz text-5xl md:text-6xl lg:text-7xl uppercase leading-tight">
                <span className="text-[#ECB373]">EXPERIENCE.</span><br />
                RELIABILITY.<br />
                CRAFTSMANSHIP.
              </h2>
              <p className="font-poppins text-lg md:text-xl leading-relaxed">
                At JMC Construction & Remodeling, we believe quality goes beyond materials — it\'s about trust, transparency, and results that last.
              </p>
              <Button variant="primary" icon={true}>
                READ MORE
              </Button>
            </div>

            <div className="relative">
              <img 
                src="https://www.figma.com/api/mcp/asset/b8d7cfce-9a48-426b-b286-6af636e87468" 
                alt="Construction Quality" 
                className="w-full h-auto rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
            <div className="lg:max-w-2xl">
              <h2 className="font-radhiumz text-5xl md:text-6xl lg:text-7xl uppercase text-black leading-tight mb-6">
                SEE THE DIFFERENCE IN <span className="text-[#ECB373]">EVERY DETAIL</span>
              </h2>
            </div>
            <div className="lg:text-right">
              <p className="font-poppins text-lg md:text-xl text-black mb-6 max-w-xl leading-relaxed">
                Explore our latest projects to see how craftsmanship and creativity come together in every space we build.
              </p>
              <Button variant="primary" icon={true}>
                VIEW ALL PROJECTS
              </Button>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <Link 
                key={index} 
                to="/gallery"
                className="relative h-[500px] md:h-[600px] rounded-[20px] overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img 
                  src={image} 
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden bg-[#ECB373]">
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <img 
            src="https://www.figma.com/api/mcp/asset/b415ae27-b08c-45db-b9bb-2a97c16ce3f5" 
            alt="Construction" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl py-12">
            <h2 className="font-radhiumz text-5xl md:text-6xl lg:text-7xl uppercase text-black leading-tight mb-8">
              READY TO<br />
              STRENGTHEN AND<br />
              UPGRADE YOUR<br />
              HOME?
            </h2>
            <p className="font-poppins text-xl md:text-2xl text-black mb-10 leading-relaxed">
              Explore modern solutions for every corner of your property.
            </p>
            <Button variant="dark" icon={true}>
              GET A FREE QUOTE
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

