import { useState } from 'react';
import Button from '../components/common/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    freeEstimate: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
  };

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
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="font-poppins text-xl md:text-2xl max-w-3xl">
            Get in touch with our team to discuss your project and receive a free estimate
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-radhiumz text-3xl md:text-4xl uppercase mb-6">
                Send Us a <span className="text-primary">Message</span>
              </h2>
              <p className="font-poppins text-lg text-gray-700 mb-8">
                Fill out the form below and we'll get back to you within 24 hours. For immediate assistance, please call us directly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-poppins font-medium text-sm mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-full border border-gray-300 font-poppins focus:outline-none focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-poppins font-medium text-sm mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-full border border-gray-300 font-poppins focus:outline-none focus:border-primary transition-colors"
                    placeholder="(210) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-poppins font-medium text-sm mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-full border border-gray-300 font-poppins focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-poppins font-medium text-sm mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-6 py-4 rounded-[20px] border border-gray-300 font-poppins focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="freeEstimate"
                    name="freeEstimate"
                    checked={formData.freeEstimate}
                    onChange={handleChange}
                    className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="freeEstimate" className="font-poppins text-sm cursor-pointer">
                    I would like to request a free estimate
                  </label>
                </div>

                <button type="submit" className="btn-primary w-full md:w-auto">
                  Send Message
                  <ArrowIcon />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-radhiumz text-3xl md:text-4xl uppercase mb-6">
                Get In <span className="text-primary">Touch</span>
              </h2>

              <div className="space-y-8">
                {/* Phone Numbers */}
                <div className="bg-neutral-light rounded-[30px] p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 15V18C20 18.55 19.55 19 19 19C9.61 19 2 11.39 2 2C2 1.45 2.45 1 3 1H6C6.55 1 7 1.45 7 2C7 3.25 7.2 4.45 7.57 5.57C7.68 5.92 7.6 6.31 7.32 6.59L5.21 8.7C6.38 11.19 8.81 13.62 11.3 14.79L13.41 12.68C13.69 12.4 14.08 12.32 14.43 12.43C15.55 12.8 16.75 13 18 13C18.55 13 19 13.45 19 14Z" fill="#000"/>
                      </svg>
                    </div>
                    <h3 className="font-radhiumz text-2xl uppercase">Call Us</h3>
                  </div>
                  <div className="space-y-3 font-poppins">
                    <p className="text-base">
                      <span className="font-bold">(210) 216-8022</span> — Español (Mattew Cano)
                    </p>
                    <p className="text-base">
                      <span className="font-bold">(210) 840-3360</span> — English (Joe Mora)
                    </p>
                    <p className="text-base">
                      <span className="font-bold">(210) 502-4254</span> — Office (Julio Vasaldua)
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-neutral-light rounded-[30px] p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="#000"/>
                      </svg>
                    </div>
                    <h3 className="font-radhiumz text-2xl uppercase">Hours</h3>
                  </div>
                  <p className="font-poppins text-base font-semibold">
                    Monday – Saturday<br />
                    8:00 AM – 6:00 PM
                  </p>
                </div>

                {/* Service Area */}
                <div className="bg-neutral-light rounded-[30px] p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#000"/>
                      </svg>
                    </div>
                    <h3 className="font-radhiumz text-2xl uppercase">Service Area</h3>
                  </div>
                  <p className="font-poppins text-base leading-relaxed">
                    San Antonio, Texas – Serving Austin, Houston, Dallas, Fort Worth, Odessa, Louisiana & Alabama
                  </p>
                </div>

                {/* Bilingual Support */}
                <div className="bg-primary rounded-[30px] p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.87 15.07L10.33 12.56L10.36 12.53C12.1 10.59 13.34 8.36 14.07 6H17V4H10V2H8V4H1V5.99H12.17C11.5 7.92 10.44 9.75 9 11.35C8.07 10.32 7.3 9.19 6.69 8H4.69C5.42 9.63 6.42 11.17 7.67 12.56L2.58 17.58L4 19L9 14L12.11 17.11L12.87 15.07ZM18.5 10H16.5L12 22H14L15.12 19H19.87L21 22H23L18.5 10ZM15.88 17L17.5 12.67L19.12 17H15.88Z" fill="#ECB373"/>
                      </svg>
                    </div>
                    <h3 className="font-radhiumz text-2xl uppercase text-black">Bilingual Team</h3>
                  </div>
                  <p className="font-poppins text-base text-black">
                    We speak English and Spanish. Communicate comfortably in your preferred language.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <h2 className="font-radhiumz text-4xl md:text-5xl uppercase text-center mb-12">
            Our Service <span className="text-primary">Area</span>
          </h2>
          <div className="bg-gray-300 rounded-[30px] h-[500px] flex items-center justify-center">
            <p className="font-poppins text-xl text-gray-600">Interactive Service Area Map</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom">
          <h2 className="font-radhiumz text-4xl md:text-5xl uppercase text-center mb-12">
            Why Work With <span className="text-primary">Us?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M35 8H25V5C25 3.34 23.66 2 22 2H18C16.34 2 15 3.34 15 5V8H5C3.34 8 2 9.34 2 11V33C2 34.66 3.34 36 5 36H35C36.66 36 38 34.66 38 33V11C38 9.34 36.66 8 35 8ZM18 5H22V8H18V5ZM35 33H5V11H35V33Z" fill="#000"/>
                </svg>
              </div>
              <h3 className="font-radhiumz text-xl uppercase mb-3">Free Estimates</h3>
              <p className="font-poppins text-sm">No-obligation quotes for your project</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4L24 16H36L26 24L30 36L20 29L10 36L14 24L4 16H16L20 4Z" fill="#000"/>
                </svg>
              </div>
              <h3 className="font-radhiumz text-xl uppercase mb-3">20+ Years Experience</h3>
              <p className="font-poppins text-sm">Trusted expertise since 2003</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M35 8H28V6C28 3.8 26.2 2 24 2H16C13.8 2 12 3.8 12 6V8H5C2.8 8 1 9.8 1 12V32C1 34.2 2.8 36 5 36H35C37.2 36 39 34.2 39 32V12C39 9.8 37.2 8 35 8ZM16 6H24V8H16V6ZM12 26L5 19L7.4 16.6L12 21.2L32.6 0.6L35 3L12 26Z" fill="#000"/>
                </svg>
              </div>
              <h3 className="font-radhiumz text-xl uppercase mb-3">Licensed & Insured</h3>
              <p className="font-poppins text-sm">Fully protected for your peace of mind</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 2C10.06 2 2 10.06 2 20C2 29.94 10.06 38 20 38C29.94 38 38 29.94 38 20C38 10.06 29.94 2 20 2ZM20 6C23.32 6 26 8.68 26 12C26 15.32 23.32 18 20 18C16.68 18 14 15.32 14 12C14 8.68 16.68 6 20 6ZM20 34C15 34 10.58 31.38 8 27.5C8.04 23.5 16 21.3 20 21.3C23.98 21.3 31.96 23.5 32 27.5C29.42 31.38 25 34 20 34Z" fill="#000"/>
                </svg>
              </div>
              <h3 className="font-radhiumz text-xl uppercase mb-3">Family-Owned</h3>
              <p className="font-poppins text-sm">Personal service you can trust</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-radhiumz text-4xl md:text-5xl uppercase text-black mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="font-poppins text-lg md:text-xl text-black mb-8 max-w-2xl mx-auto">
            Contact us today to schedule your free consultation and estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-dark">
              Call (210) 216-8022
            </button>
            <button className="btn-dark">
              Call (210) 840-3360
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

