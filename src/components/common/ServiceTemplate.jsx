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
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[80vh]">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container-custom relative z-10 h-full flex items-end pb-16">
          <div className="text-white max-w-4xl">
            <p className="font-poppins text-xl md:text-2xl font-bold text-[#ECB373] mb-4">
              {subtitle}
            </p>
            <h1 className="font-radhiumz text-5xl md:text-7xl lg:text-8xl uppercase leading-tight">
              {title}
            </h1>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-[#FAF5EF]">
        <div className="container-custom">
          <div className="max-w-5xl">
            <h2 className="font-radhiumz text-4xl md:text-5xl lg:text-6xl uppercase mb-8 leading-tight">
              {subtitle && `${subtitle}:`} <span className="text-black">STRUCTURAL STRENGTH & EXTERIOR PROTECTION</span>
            </h2>
            <p className="font-poppins text-xl md:text-2xl leading-relaxed text-gray-800">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Structure That Lasts Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="font-radhiumz text-5xl md:text-6xl lg:text-7xl uppercase text-center mb-16">
            STRUCTURE THAT LASTS
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[500px] rounded-[20px] overflow-hidden">
              <img 
                src={galleryImages && galleryImages[0] ? galleryImages[0] : heroImage} 
                alt="Structure"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-8">
              <div className="bg-white border-2 border-gray-200 rounded-[20px] p-8">
                <h3 className="font-radhiumz text-2xl md:text-3xl uppercase mb-4">
                  DURABLE STRUCTURE
                </h3>
                <p className="font-poppins text-lg leading-relaxed">
                  Wood and steel framing built with precision to support your home\'s integrity and long-term performance.
                </p>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-[20px] p-8">
                <h3 className="font-radhiumz text-2xl md:text-3xl uppercase mb-4">
                  WEATHER-RESISTANT PROTECTION
                </h3>
                <p className="font-poppins text-lg leading-relaxed">
                  High-quality siding materials that shield your home from rain, wind, and extreme temperatures.
                </p>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-[20px] p-8">
                <h3 className="font-radhiumz text-2xl md:text-3xl uppercase mb-4">
                  ENHANCED CURB APPEAL
                </h3>
                <p className="font-poppins text-lg leading-relaxed">
                  Beautiful exterior finishes that transform your home\'s look and increase its value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built With Purpose Section */}
      <section className="py-20 bg-[#FAF5EF]">
        <div className="container-custom">
          <h2 className="font-radhiumz text-5xl md:text-6xl uppercase mb-4">
            BUILT WITH <span className="text-[#ECB373]">PURPOSE</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="relative h-[400px] rounded-[20px] overflow-hidden">
              <img 
                src={galleryImages && galleryImages[1] ? galleryImages[1] : heroImage} 
                alt="Framing Services"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-[#ECB373] rounded-lg flex items-center justify-center">
                    <span className="font-radhiumz text-2xl text-black">01</span>
                  </div>
                </div>
                <h3 className="font-radhiumz text-2xl uppercase text-white mb-3">
                  OUR FRAMING SERVICES:
                </h3>
                <ul className="font-poppins text-white space-y-1">
                  <li>• Wood and steel structures</li>
                  <li>• Load-bearing walls</li>
                  <li>• Roof trusses & ceiling joists</li>
                  <li>• Structural repairs & reinforcements</li>
                </ul>
              </div>
            </div>

            <div className="relative h-[400px] rounded-[20px] overflow-hidden">
              <img 
                src={galleryImages && galleryImages[2] ? galleryImages[2] : heroImage} 
                alt="Siding Services"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-[#ECB373] rounded-lg flex items-center justify-center">
                    <span className="font-radhiumz text-2xl text-black">02</span>
                  </div>
                </div>
                <h3 className="font-radhiumz text-2xl uppercase text-white mb-3">
                  OUR SIDING SERVICES:
                </h3>
                <ul className="font-poppins text-white space-y-1">
                  <li>• Vinyl siding</li>
                  <li>• Fiber cement</li>
                  <li>• Wood & composite materials</li>
                  <li>• Siding repair & replacement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built Step by Step Section */}
      <section className="py-20 bg-black text-white">
        <div className="container-custom">
          <h2 className="font-radhiumz text-5xl md:text-6xl uppercase mb-16">
            BUILT STEP BY STEP
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#ECB373] rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="font-radhiumz text-3xl text-black">01</span>
                </div>
                <h3 className="font-radhiumz text-2xl uppercase">ON-SITE ASSESSMENT</h3>
              </div>
              <div className="relative h-[300px] rounded-[15px] overflow-hidden">
                <img 
                  src="https://www.figma.com/api/mcp/asset/fca367ad-8905-4cc6-b1ac-324577992389" 
                  alt="Assessment"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-poppins text-base leading-relaxed">
                We visit your property, take measurements, and discuss your vision to determine the best approach for framing and siding.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#ECB373] rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="font-radhiumz text-3xl text-black">02</span>
                </div>
                <h3 className="font-radhiumz text-2xl uppercase">PLANNING & MATERIAL SELECTION</h3>
              </div>
              <div className="relative h-[300px] rounded-[15px] overflow-hidden">
                <img 
                  src="https://www.figma.com/api/mcp/asset/c8a023e5-e4ca-4eee-b508-aec203961722" 
                  alt="Planning"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-poppins text-base leading-relaxed">
                Choose materials that match your style, budget, and climate requirements while we finalize structural blueprints.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#ECB373] rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="font-radhiumz text-3xl text-black">03</span>
                </div>
                <h3 className="font-radhiumz text-2xl uppercase">EXPERT INSTALLATION</h3>
              </div>
              <div className="relative h-[300px] rounded-[15px] overflow-hidden">
                <img 
                  src="https://www.figma.com/api/mcp/asset/dd51495c-bac5-4046-bb9b-889b4ecf6539" 
                  alt="Installation"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-poppins text-base leading-relaxed">
                Our skilled team installs framing and siding with precision, ensuring every corner meets building codes and quality standards.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#ECB373] rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="font-radhiumz text-3xl text-black">04</span>
                </div>
                <h3 className="font-radhiumz text-2xl uppercase">FINAL INSPECTION</h3>
              </div>
              <div className="relative h-[300px] rounded-[15px] overflow-hidden">
                <img 
                  src="https://www.figma.com/api/mcp/asset/adccff5f-bbff-4e46-9a03-e247db3e93a2" 
                  alt="Inspection"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-poppins text-base leading-relaxed">
                We walk through the completed project with you, address any concerns, and ensure your complete satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="font-radhiumz text-5xl md:text-6xl uppercase text-center mb-4">
            <span className="text-[#ECB373]">TRUSTED</span> BY HOMEOWNERS
          </h2>
          <p className="font-radhiumz text-4xl md:text-5xl uppercase text-center mb-16">
            ACROSS THE AREA
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FAF5EF] rounded-[20px] p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                <div>
                  <p className="font-poppins font-bold text-lg">Carlos M.</p>
                  <p className="font-poppins text-sm text-gray-600">San Antonio, TX</p>
                </div>
              </div>
              <p className="font-poppins text-base leading-relaxed italic">
                "JMC replaced all the framing on our older home, and it feels like a brand new house now. Their team was respectful, efficient, and left everything spotless."
              </p>
            </div>

            <div className="bg-[#FAF5EF] rounded-[20px] p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                <div>
                  <p className="font-poppins font-bold text-lg">Diana P.</p>
                  <p className="font-poppins text-sm text-gray-600">Austin, TX</p>
                </div>
              </div>
              <p className="font-poppins text-base leading-relaxed italic">
                "We upgraded to fiber cement siding and couldn\'t be happier. The quality of work and attention to detail was outstanding. Highly recommend JMC."
              </p>
            </div>

            <div className="bg-[#FAF5EF] rounded-[20px] p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                <div>
                  <p className="font-poppins font-bold text-lg">Michael S.</p>
                  <p className="font-poppins text-sm text-gray-600">Houston, TX</p>
                </div>
              </div>
              <p className="font-poppins text-base leading-relaxed italic">
                "From the first consultation to final walkthrough, JMC was professional and transparent. The new siding transformed our home completely!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#ECB373] relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <img 
            src={heroImage}
            alt="CTA Background"
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-2xl py-8">
            <h2 className="font-radhiumz text-5xl md:text-6xl lg:text-7xl uppercase text-black leading-tight mb-8">
              READY TO<br />
              STRENGTHEN AND<br />
              UPGRADE YOUR<br />
              HOME?
            </h2>
            <p className="font-poppins text-xl md:text-2xl text-black mb-10 leading-relaxed">
              Get a FREE no-obligation estimate on your {title.toLowerCase()} project today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="dark" icon={true}>
                GET A FREE QUOTE
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceTemplate;

