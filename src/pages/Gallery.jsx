import { useState } from 'react';
import Button from '../components/common/Button';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'remodeling', name: 'Remodeling' },
    { id: 'exterior', name: 'Exterior' },
    { id: 'interior', name: 'Interior' }
  ];

  const projects = [
    {
      id: 1,
      image: 'https://www.figma.com/api/mcp/asset/ddaab13a-a94a-4479-b12b-96ef2b544d68',
      title: 'Modern Kitchen Remodel',
      category: 'interior',
      description: 'Complete kitchen renovation with custom cabinets'
    },
    {
      id: 2,
      image: 'https://www.figma.com/api/mcp/asset/547bf1fa-d652-4601-9a0e-c7d5234f887e',
      title: 'Exterior Home Renovation',
      category: 'exterior',
      description: 'New siding and roof installation'
    },
    {
      id: 3,
      image: 'https://www.figma.com/api/mcp/asset/e3d051b0-b073-4b52-b142-2779adf52817',
      title: 'Commercial Build-Out',
      category: 'commercial',
      description: 'Office space construction and finishing'
    },
    {
      id: 4,
      image: 'https://www.figma.com/api/mcp/asset/de0c0e40-e84f-4807-809f-5fa166f878ef',
      title: 'Bathroom Remodel',
      category: 'remodeling',
      description: 'Luxury bathroom with custom tile work'
    },
    {
      id: 5,
      image: 'https://www.figma.com/api/mcp/asset/21e874ed-2c27-4068-be6e-1a6159b42aff',
      title: 'New Home Construction',
      category: 'residential',
      description: 'Custom home built from the ground up'
    },
    {
      id: 6,
      image: 'https://www.figma.com/api/mcp/asset/fca367ad-8905-4cc6-b1ac-324577992389',
      title: 'Living Room Renovation',
      category: 'interior',
      description: 'Modern living space transformation'
    },
    {
      id: 7,
      image: 'https://www.figma.com/api/mcp/asset/2b30f9f5-252a-49a7-97ab-2923b80f3e9c',
      title: 'Outdoor Deck Construction',
      category: 'exterior',
      description: 'Custom deck with built-in seating'
    },
    {
      id: 8,
      image: 'https://www.figma.com/api/mcp/asset/a09497e3-3c3e-4bc4-9b65-9d70ead48f8c',
      title: 'Home Addition',
      category: 'residential',
      description: 'Second story addition with new bedrooms'
    },
    {
      id: 9,
      image: 'https://www.figma.com/api/mcp/asset/0d1ccc82-4f16-4e68-a890-ad26ed05b0c8',
      title: 'Commercial Storefront',
      category: 'commercial',
      description: 'Retail space renovation'
    },
    {
      id: 10,
      image: 'https://www.figma.com/api/mcp/asset/c8a023e5-e4ca-4eee-b508-aec203961722',
      title: 'Master Bedroom Remodel',
      category: 'remodeling',
      description: 'Complete bedroom transformation'
    },
    {
      id: 11,
      image: 'https://www.figma.com/api/mcp/asset/dd51495c-bac5-4046-bb9b-889b4ecf6539',
      title: 'Basement Finishing',
      category: 'interior',
      description: 'Converted basement into living space'
    },
    {
      id: 12,
      image: 'https://www.figma.com/api/mcp/asset/adccff5f-bbff-4e46-9a03-e247db3e93a2',
      title: 'Exterior Painting Project',
      category: 'exterior',
      description: 'Complete exterior refresh'
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
            Project <span className="text-primary">Gallery</span>
          </h1>
          <p className="font-poppins text-xl md:text-2xl max-w-3xl">
            Explore our portfolio of completed projects and see the quality craftsmanship that sets us apart
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-poppins font-medium text-lg transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-black shadow-lg'
                    : 'bg-white text-black border border-gray-300 hover:border-primary'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="group relative overflow-hidden rounded-[30px] border-[15px] border-white shadow-xl bg-white card-hover"
              >
                <div className="relative h-[400px] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Project Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-radhiumz text-xl uppercase mb-2">{project.title}</h3>
                    <p className="font-poppins text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="btn-primary">
              Load More Projects
              <span className="ml-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 0L10 20M10 20L0 10M10 20L20 10" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-radhiumz text-5xl md:text-6xl text-primary mb-2">1,500+</p>
              <p className="font-poppins text-lg">Projects Completed</p>
            </div>
            <div>
              <p className="font-radhiumz text-5xl md:text-6xl text-primary mb-2">20+</p>
              <p className="font-poppins text-lg">Years Experience</p>
            </div>
            <div>
              <p className="font-radhiumz text-5xl md:text-6xl text-primary mb-2">98%</p>
              <p className="font-poppins text-lg">Satisfaction Rate</p>
            </div>
            <div>
              <p className="font-radhiumz text-5xl md:text-6xl text-primary mb-2">9+</p>
              <p className="font-poppins text-lg">Cities Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-radhiumz text-4xl md:text-5xl uppercase text-black mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="font-poppins text-lg md:text-xl text-black mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life with the same quality and care you see in our gallery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="dark" icon={<ArrowIcon />}>
              Get Free Estimate
            </Button>
            <button className="btn-dark">
              Call (210) 216-8022
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;

