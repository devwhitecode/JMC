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
    { id: 1, image: '/assets/images/projects/PPP.jpeg', title: 'Construction Project', category: 'residential', description: 'Quality construction work' },
    { id: 2, image: '/assets/images/projects/WhatsApp Image 2025-12-.jpeg', title: 'Remodeling Project', category: 'remodeling', description: 'Professional remodeling services' },
    { id: 3, image: '/assets/images/projects/WhatsApp Image 2025-12-12 .jpeg', title: 'Home Renovation', category: 'residential', description: 'Complete home transformation' },
    { id: 4, image: '/assets/images/projects/WhatsApp Image 2025-12-12 a.jpeg', title: 'Interior Work', category: 'interior', description: 'Interior finishing and detailing' },
    { id: 5, image: '/assets/images/projects/WhatsApp Image 2025-12-12 at 8..jpeg', title: 'Exterior Project', category: 'exterior', description: 'Exterior improvements' },
    { id: 6, image: '/assets/images/projects/WhatsApp Image 2025-12-12 at 8.+.jpeg', title: 'Construction Work', category: 'residential', description: 'Professional construction services' },
    { id: 7, image: '/assets/images/projects/WhatsApp Image 2025-12-12 at 8.1.jpeg', title: 'Building Project', category: 'commercial', description: 'Commercial building work' },
    { id: 8, image: '/assets/images/projects/WhatsApp Image 2025-12-12 at 8.13.3.jpeg', title: 'Renovation Work', category: 'remodeling', description: 'Complete renovation services' },
    { id: 9, image: '/assets/images/projects/WhatsApp Image 2025-12-12 at 8.13.37 P.jpeg', title: 'Home Improvement', category: 'residential', description: 'Quality home improvements' },
    { id: 10, image: '/assets/images/projects/WhatsApp Image 2025-12-12 at 8.13.37 PM.jpeg', title: 'Construction Services', category: 'residential', description: 'Professional construction' },
    { id: 11, image: '/assets/images/projects/WhatsApp Image 2025-12-12 at 8.13.37.jpeg', title: 'Remodeling Services', category: 'remodeling', description: 'Expert remodeling work' },
    { id: 12, image: '/assets/images/projects/WhatsApp Image 2025-12-12 at 8.13.38 PMM.jpeg', title: 'Interior Design', category: 'interior', description: 'Beautiful interior work' },
    { id: 13, image: '/assets/images/projects/WhatsApp Image 2025-12-12 at 8.13.38 PMMP.jpeg', title: 'Exterior Finishing', category: 'exterior', description: 'Exterior finishing work' },
    { id: 14, image: '/assets/images/projects/WhatsApp Image 2025-12-12 at 8.13.38 PMP.jpeg', title: 'Home Construction', category: 'residential', description: 'New home construction' },
    { id: 15, image: '/assets/images/projects/WhatsApp Image 2025-12-12 at 8.13.3M.jpeg', title: 'Renovation Project', category: 'remodeling', description: 'Complete renovation' },
    { id: 16, image: '/assets/images/projects/WhatsApp Image 2025-12-12 at 8.13.jpeg', title: 'Building Services', category: 'commercial', description: 'Commercial building services' },
    { id: 17, image: '/assets/images/projects/WhatsApp Image 2025-12-12 at 8.18.49 ,,PP.jpeg', title: 'Construction Project', category: 'residential', description: 'Residential construction' },
    { id: 18, image: '/assets/images/projects/WhatsApp Image 2025-12-12 at 8.18.49 PM....jpeg', title: 'Home Remodel', category: 'remodeling', description: 'Home remodeling services' },
    { id: 19, image: '/assets/images/projects/WhatsApp Image 2025-12-12 at 8.18.49 PMMM.jpeg', title: 'Interior Renovation', category: 'interior', description: 'Interior renovation work' },
    { id: 20, image: '/assets/images/projects/WhatsApp Image 2025-12-12 at 8.18.50 PM,,.jpeg', title: 'Exterior Work', category: 'exterior', description: 'Professional exterior work' },
    { id: 21, image: '/assets/images/projects/WhatsApp Image 2025-12-12 at 8.18.50 PM,,MM.jpeg', title: 'Building Project', category: 'residential', description: 'Quality building services' },
    { id: 22, image: '/assets/images/projects/WhatsApp Image 2025-12-12 at 8.18.50 PMPP.jpeg', title: 'Remodeling Work', category: 'remodeling', description: 'Expert remodeling' },
    { id: 23, image: '/assets/images/projects/WhatsApp Image 2025-12-12 at 8.18.51 PMMMM.jpeg', title: 'Construction Services', category: 'residential', description: 'Construction expertise' },
    { id: 24, image: '/assets/images/projects/WhatsApp Image 2025-12-12 at 8.P.jpeg', title: 'Home Services', category: 'residential', description: 'Comprehensive home services' },
    { id: 25, image: '/assets/images/projects/WhatsApp Image 2025-12-12 at 8P.jpeg', title: 'Interior Project', category: 'interior', description: 'Interior design and build' },
    { id: 26, image: '/assets/images/projects/WhatsApp Image 2025-12-12 at 8PP.jpeg', title: 'Exterior Services', category: 'exterior', description: 'Exterior construction' },
    { id: 27, image: '/assets/images/projects/WhatsApp Image 2025-12-12 at 8.18.51 PMMMM.jpeg', title: 'Commercial Work', category: 'commercial', description: 'Commercial construction' },
    { id: 28, image: '/assets/images/projects/WhatsApp Image 2025-12.jpeg', title: 'Renovation Services', category: 'remodeling', description: 'Professional renovation' }
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

      {/* Video Showcase Section */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-radhiumz text-4xl md:text-5xl uppercase mb-4">
              Watch Our <span className="text-primary">Work in Action</span>
            </h2>
            <p className="font-poppins text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              See the quality and craftsmanship that goes into every JMC project
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-[30px] overflow-hidden shadow-2xl border-[15px] border-white">
              <video 
                controls 
                className="w-full h-auto"
                poster="/assets/images/projects/PPP.jpeg"
              >
                <source src="/assets/videos/WhatsApp Video 2025-12-12 at 8.18.51 PM.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
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

