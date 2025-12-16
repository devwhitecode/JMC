import { useState } from 'react';
import Button from '../components/common/Button';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      category: 'General Questions',
      questions: [
        {
          question: 'How long have you been in business?',
          answer: 'JMC Construction & Remodeling has been proudly serving Texas and beyond since 2003. With over 20 years of experience, we\'ve completed more than 1,500 projects and built a reputation for quality craftsmanship and reliable service.'
        },
        {
          question: 'What areas do you serve?',
          answer: 'We\'re based in San Antonio, TX, but we serve a wide area including Austin, Houston, Dallas, Fort Worth, Odessa, and even Louisiana and Alabama. If you\'re outside these areas, please contact us to discuss your project—we may still be able to help.'
        },
        {
          question: 'Are you licensed and insured?',
          answer: 'Yes, absolutely. We carry all necessary licenses and comprehensive insurance to protect you and your property. We can provide proof of licensing and insurance upon request.'
        },
        {
          question: 'Do you handle both residential and commercial projects?',
          answer: 'Yes! While we primarily focus on residential projects, we also have extensive experience with commercial construction and remodeling. We can handle projects of all sizes.'
        }
      ]
    },
    {
      category: 'Services & Projects',
      questions: [
        {
          question: 'What services do you offer?',
          answer: 'We offer comprehensive construction and remodeling services including: Framing & Siding, Doors & Windows Installation, Electrical & Plumbing, HVAC & AC Services, Flooring & Drywall, Painting, Roofing, Decks & Carports, and Concrete & Masonry. Essentially, we can handle every aspect of your construction or remodeling project.'
        },
        {
          question: 'Can you help with design and planning?',
          answer: 'Yes! We work with you from the initial concept through completion. We\'ll discuss your vision, provide recommendations based on our experience, and help you make informed decisions about materials, layouts, and design elements.'
        },
        {
          question: 'Do you handle permits?',
          answer: 'Yes, we handle all necessary permits for your project. We\'re familiar with local building codes and regulations and will ensure all work is done to code and properly inspected.'
        },
        {
          question: 'What size projects do you take on?',
          answer: 'We handle projects of all sizes, from small repairs to complete home remodels and new construction. No project is too big or too small for our team.'
        }
      ]
    },
    {
      category: 'Cost & Estimates',
      questions: [
        {
          question: 'Do you provide free estimates?',
          answer: 'Yes! We provide free, no-obligation estimates for all our services. We\'ll visit your property, discuss your needs, and provide a detailed quote outlining the scope of work and costs.'
        },
        {
          question: 'How do you determine pricing?',
          answer: 'Our pricing is based on several factors including the scope of work, materials needed, labor required, and project timeline. We provide transparent, detailed estimates so you know exactly what you\'re paying for. There are no hidden fees.'
        },
        {
          question: 'Do you offer financing options?',
          answer: 'Yes, we work with several financing partners to help make your project affordable. Contact us to discuss financing options that fit your budget.'
        },
        {
          question: 'When is payment due?',
          answer: 'Payment terms are outlined in your contract and typically include a deposit to begin work, progress payments for larger projects, and final payment upon completion. We\'ll discuss the payment schedule during your estimate.'
        }
      ]
    },
    {
      category: 'Timeline & Process',
      questions: [
        {
          question: 'How long will my project take?',
          answer: 'Project timelines vary based on scope and complexity. Small projects might take a few days, while major remodels can take several weeks or months. We\'ll provide a realistic timeline during your estimate and keep you updated throughout the project.'
        },
        {
          question: 'Will I need to move out during construction?',
          answer: 'For most projects, you won\'t need to move out. We take precautions to minimize disruption to your daily life. However, for extensive whole-house remodels, temporary relocation might be more comfortable. We\'ll discuss this during planning.'
        },
        {
          question: 'What happens if there are delays?',
          answer: 'We do our best to stay on schedule, but sometimes unexpected issues arise (weather, material delays, hidden problems discovered during work). We\'ll communicate immediately if delays occur and work quickly to get back on track.'
        },
        {
          question: 'How do you handle changes to the project scope?',
          answer: 'If you want to make changes during the project, just let us know. We\'ll discuss the impact on timeline and cost, provide a change order for your approval, and adjust accordingly. Clear communication is key.'
        }
      ]
    },
    {
      category: 'Communication & Service',
      questions: [
        {
          question: 'Who will be my main point of contact?',
          answer: 'You\'ll have a dedicated project manager who will be your main contact throughout the project. They\'ll answer questions, provide updates, and ensure everything runs smoothly.'
        },
        {
          question: 'How do I schedule a consultation?',
          answer: 'Simply call us at (210) 216-8022 for Spanish or (210) 840-3360 for English, or fill out our online contact form. We\'ll schedule a time that works for you to discuss your project and provide an estimate.'
        },
        {
          question: 'Do you speak Spanish?',
          answer: 'Yes! We have bilingual team members and can communicate in both English and Spanish. Contact Mattew Cano at (210) 216-8022 for Spanish service.'
        },
        {
          question: 'What are your business hours?',
          answer: 'We\'re open Monday through Saturday, 8:00 AM to 6:00 PM. We\'re happy to schedule consultations outside these hours if needed to accommodate your schedule.'
        }
      ]
    },
    {
      category: 'Quality & Warranty',
      questions: [
        {
          question: 'Do you guarantee your work?',
          answer: 'Yes! We stand behind our workmanship with warranties on our labor. Additionally, materials and products come with manufacturer warranties. We\'ll provide all warranty information at project completion.'
        },
        {
          question: 'What if I\'m not satisfied with the work?',
          answer: 'Your satisfaction is our priority. If you have concerns at any point, please let us know immediately. We\'ll work with you to address any issues and ensure you\'re completely happy with the result.'
        },
        {
          question: 'Do you use quality materials?',
          answer: 'Absolutely. We use only quality materials from reputable suppliers. We can work within various budgets and will recommend the best materials for your needs and price range.'
        },
        {
          question: 'Can I see examples of your previous work?',
          answer: 'Yes! Check out our Gallery page to see completed projects, or ask during your consultation. We\'re proud of our work and happy to share examples and references.'
        }
      ]
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
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <p className="font-poppins text-xl md:text-2xl max-w-3xl">
            Find answers to common questions about our services, process, and what to expect when working with us
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding">
        <div className="container-custom max-w-5xl mx-auto">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="font-radhiumz text-3xl md:text-4xl uppercase text-primary mb-8">
                {category.category}
              </h2>

              <div className="space-y-4">
                {category.questions.map((item, questionIndex) => {
                  const globalIndex = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <div 
                      key={questionIndex}
                      className="bg-neutral-light rounded-[20px] overflow-hidden transition-all duration-300 hover:shadow-lg"
                    >
                      <button
                        onClick={() => handleToggle(globalIndex)}
                        className="w-full flex items-center justify-between p-6 text-left"
                        aria-expanded={isOpen}
                      >
                        <h3 className="font-poppins font-bold text-lg md:text-xl pr-4">
                          {item.question}
                        </h3>
                        <div className={`flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6L8 10L12 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </button>

                      <div 
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="px-6 pb-6">
                          <p className="font-poppins text-base text-gray-700 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-radhiumz text-4xl md:text-5xl uppercase mb-6">
              Still Have <span className="text-primary">Questions?</span>
            </h2>
            <p className="font-poppins text-lg md:text-xl mb-8">
              We're here to help! Contact us directly and we'll be happy to answer any questions you have about your project.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-[20px] p-6 shadow-lg">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28 20V24C28 24.55 27.55 25 27 25C15.4 25 6 15.6 6 4C6 3.45 6.45 3 7 3H11C11.55 3 12 3.45 12 4C12 6.25 12.4 8.4 13.11 10.38C13.22 10.73 13.14 11.11 12.86 11.39L9.93 14.32C11.57 17.76 14.24 20.43 17.68 22.07L20.61 19.14C20.89 18.86 21.27 18.78 21.62 18.89C23.6 19.6 25.75 20 28 20C28.55 20 29 20.45 29 21Z" fill="#000"/>
                  </svg>
                </div>
                <h3 className="font-radhiumz text-xl uppercase mb-2">Call Us</h3>
                <p className="font-poppins text-sm mb-2">Español: (210) 216-8022</p>
                <p className="font-poppins text-sm">English: (210) 840-3360</p>
              </div>

              <div className="bg-white rounded-[20px] p-6 shadow-lg">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28 6H4C2.9 6 2 6.9 2 8V24C2 25.1 2.9 26 4 26H28C29.1 26 30 25.1 30 24V8C30 6.9 29.1 6 28 6ZM28 10L16 17L4 10V8L16 15L28 8V10Z" fill="#000"/>
                  </svg>
                </div>
                <h3 className="font-radhiumz text-xl uppercase mb-2">Email Us</h3>
                <p className="font-poppins text-sm">info@jmcconstruction.com</p>
              </div>

              <div className="bg-white rounded-[20px] p-6 shadow-lg">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 4C10.48 4 6 8.48 6 14C6 21 16 30 16 30C16 30 26 21 26 14C26 8.48 21.52 4 16 4ZM16 18C13.79 18 12 16.21 12 14C12 11.79 13.79 10 16 10C18.21 10 20 11.79 20 14C20 16.21 18.21 18 16 18Z" fill="#000"/>
                  </svg>
                </div>
                <h3 className="font-radhiumz text-xl uppercase mb-2">Visit Us</h3>
                <p className="font-poppins text-sm">San Antonio, Texas</p>
              </div>
            </div>

            <Button variant="primary" icon={<ArrowIcon />}>
              Get Free Estimate
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="font-radhiumz text-4xl md:text-5xl uppercase mb-6">
            Ready to Start <span className="text-primary">Your Project?</span>
          </h2>
          <p className="font-poppins text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Let's turn your vision into reality with expert craftsmanship and reliable service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" icon={<ArrowIcon />}>
              Request Free Estimate
            </Button>
            <button className="btn-outline text-white border-white hover:border-primary hover:text-primary">
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;

