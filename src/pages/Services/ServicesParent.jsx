import { Link } from 'react-router-dom';
import ServiceCard from '../../components/common/ServiceCard';
import Button from '../../components/common/Button';

const ServicesParent = () => {
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
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="font-poppins text-xl md:text-2xl max-w-3xl">
            Comprehensive construction and remodeling solutions for residential and commercial projects
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-radhiumz text-4xl md:text-5xl uppercase mb-6">
              Complete <span className="text-primary">Construction Solutions</span>
            </h2>
            <p className="font-poppins text-lg md:text-xl max-w-3xl mx-auto">
              From foundation to finishing touches, we provide expert craftsmanship across all aspects of construction and remodeling. Each service is delivered with the same commitment to quality, precision, and customer satisfaction.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <h2 className="font-radhiumz text-4xl md:text-5xl uppercase text-center mb-12">
            Why Choose <span className="text-primary">Our Services</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4L24 16H36L26 24L30 36L20 29L10 36L14 24L4 16H16L20 4Z" fill="#000"/>
                </svg>
              </div>
              <h3 className="font-radhiumz text-xl uppercase mb-3">Expert Team</h3>
              <p className="font-poppins text-sm">Skilled professionals with decades of combined experience</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M35 8H25V5C25 3.34 23.66 2 22 2H18C16.34 2 15 3.34 15 5V8H5C3.34 8 2 9.34 2 11V33C2 34.66 3.34 36 5 36H35C36.66 36 38 34.66 38 33V11C38 9.34 36.66 8 35 8ZM18 5H22V8H18V5ZM35 33H5V11H35V33Z" fill="#000"/>
                </svg>
              </div>
              <h3 className="font-radhiumz text-xl uppercase mb-3">Quality Materials</h3>
              <p className="font-poppins text-sm">Premium products for lasting results</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 2C10.06 2 2 10.06 2 20C2 29.94 10.06 38 20 38C29.94 38 38 29.94 38 20C38 10.06 29.94 2 20 2ZM20 6C23.32 6 26 8.68 26 12C26 15.32 23.32 18 20 18C16.68 18 14 15.32 14 12C14 8.68 16.68 6 20 6ZM20 34C15 34 10.58 31.38 8 27.5C8.04 23.5 16 21.3 20 21.3C23.98 21.3 31.96 23.5 32 27.5C29.42 31.38 25 34 20 34Z" fill="#000"/>
                </svg>
              </div>
              <h3 className="font-radhiumz text-xl uppercase mb-3">Customer Focus</h3>
              <p className="font-poppins text-sm">Your vision and satisfaction drive everything we do</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M36 10H28V6C28 3.8 26.2 2 24 2H16C13.8 2 12 3.8 12 6V10H4C1.8 10 0 11.8 0 14V34C0 36.2 1.8 38 4 38H36C38.2 38 40 36.2 40 34V14C40 11.8 38.2 10 36 10ZM16 6H24V10H16V6ZM12 28L4 20L6.8 17.2L12 22.4L33.2 1.2L36 4L12 28Z" fill="#000"/>
                </svg>
              </div>
              <h3 className="font-radhiumz text-xl uppercase mb-3">Guaranteed Work</h3>
              <p className="font-poppins text-sm">We stand behind every project with confidence</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="font-radhiumz text-4xl md:text-5xl uppercase mb-6">
            Ready to Get <span className="text-primary">Started?</span>
          </h2>
          <p className="font-poppins text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a customized solution that meets your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" icon={<ArrowIcon />}>
              Get Free Estimate
            </Button>
            <Link to="/contact" className="btn-outline text-white border-white hover:border-primary hover:text-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesParent;

