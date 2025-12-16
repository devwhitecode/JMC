import Button from './Button';

const ServiceTemplate = ({ 
  title, 
  subtitle, 
  heroImage, 
  description, 
  features, 
  benefits,
  processSteps,
  galleryImages 
}) => {
  const ArrowIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 0L10 20M10 20L0 10M10 20L20 10" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[600px]">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        </div>

        <div className="container-custom relative z-10 py-32 text-white">
          <p className="font-poppins text-xl md:text-2xl font-bold text-primary mb-4">{subtitle}</p>
          <h1 className="font-radhiumz text-5xl md:text-6xl lg:text-7xl uppercase mb-6">
            {title}
          </h1>
          <p className="font-poppins text-lg md:text-xl max-w-3xl mb-8">
            {description}
          </p>
          <Button variant="primary" icon={<ArrowIcon />}>
            Get Free Quote
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      {features && features.length > 0 && (
        <section className="section-padding bg-neutral-light">
          <div className="container-custom">
            <h2 className="font-radhiumz text-4xl md:text-5xl uppercase text-center mb-12">
              What We <span className="text-primary">Offer</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-[30px] p-6 shadow-lg">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 16.2L4.8 12L3.4 13.4L9 19L21 7L19.6 5.6L9 16.2Z" fill="#000"/>
                    </svg>
                  </div>
                  <h3 className="font-radhiumz text-xl uppercase mb-3">{feature.title}</h3>
                  <p className="font-poppins text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {benefits && benefits.length > 0 && (
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-radhiumz text-4xl md:text-5xl uppercase mb-6">
                  Why Choose Our <span className="text-primary">{title}</span> Services
                </h2>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 11.2L2.8 8L1.6 9.2L6 13.6L14 5.6L12.8 4.4L6 11.2Z" fill="#000"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-poppins font-bold text-lg mb-1">{benefit.title}</h4>
                        <p className="font-poppins text-sm text-gray-700">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative h-[500px] rounded-[30px] overflow-hidden shadow-xl">
                <img 
                  src={galleryImages && galleryImages[0] ? galleryImages[0] : heroImage} 
                  alt={`${title} work example`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Process Steps */}
      {processSteps && processSteps.length > 0 && (
        <section className="section-padding bg-black text-white">
          <div className="container-custom">
            <h2 className="font-radhiumz text-4xl md:text-5xl uppercase text-center mb-12">
              Our <span className="text-primary">Process</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-radhiumz text-2xl text-black">{index + 1}</span>
                  </div>
                  <h3 className="font-radhiumz text-xl uppercase mb-3">{step.title}</h3>
                  <p className="font-poppins text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      {galleryImages && galleryImages.length > 1 && (
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="font-radhiumz text-4xl md:text-5xl uppercase text-center mb-12">
              Recent <span className="text-primary">Projects</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.slice(1).map((image, index) => (
                <div key={index} className="relative h-[400px] rounded-[30px] overflow-hidden shadow-lg group">
                  <img 
                    src={image} 
                    alt={`Project ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-radhiumz text-4xl md:text-5xl uppercase text-black mb-6">
            Ready to Start Your {title} Project?
          </h2>
          <p className="font-poppins text-lg md:text-xl text-black mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation estimate tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="dark" icon={<ArrowIcon />}>
              Request Free Estimate
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

export default ServiceTemplate;

