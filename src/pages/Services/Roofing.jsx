import ServiceTemplate from '../../components/common/ServiceTemplate';

const Roofing = () => {
  const serviceData = {
    title: 'Roofing',
    subtitle: 'Protect Your Investment',
    heroImage: 'https://www.figma.com/api/mcp/asset/2afdc900-3cd4-4171-b559-010d5294e409',
    description: 'Quality roofing installation, repair, and replacement to protect your home for decades to come.',
    features: [
      {
        title: 'Roof Installation',
        description: 'Complete new roof installation with quality materials.'
      },
      {
        title: 'Roof Replacement',
        description: 'Replace worn-out roofs with modern, durable systems.'
      },
      {
        title: 'Roof Repair',
        description: 'Fix leaks, replace shingles, and repair storm damage.'
      },
      {
        title: 'Asphalt Shingles',
        description: 'Affordable, durable roofing in various styles and colors.'
      },
      {
        title: 'Metal Roofing',
        description: 'Long-lasting metal roofs that withstand extreme weather.'
      },
      {
        title: 'Flat Roofing',
        description: 'Commercial and residential flat roof systems.'
      }
    ],
    benefits: [
      {
        title: 'Weather Protection',
        description: 'Keep your home dry and safe from rain, wind, and hail.'
      },
      {
        title: 'Energy Efficiency',
        description: 'Modern roofing materials improve insulation and reduce energy costs.'
      },
      {
        title: 'Long Lifespan',
        description: 'Quality installation means decades of reliable protection.'
      },
      {
        title: 'Increased Curb Appeal',
        description: 'A new roof dramatically improves your home\'s appearance.'
      }
    ],
    processSteps: [
      {
        title: 'Inspection',
        description: 'Assess your current roof and recommend solutions.'
      },
      {
        title: 'Material Selection',
        description: 'Choose roofing materials that fit your budget and style.'
      },
      {
        title: 'Installation',
        description: 'Expert installation following manufacturer specifications.'
      },
      {
        title: 'Cleanup & Warranty',
        description: 'Thorough cleanup and warranty documentation.'
      }
    ],
    galleryImages: [
      'https://www.figma.com/api/mcp/asset/2afdc900-3cd4-4171-b559-010d5294e409'
    ]
  };

  return <ServiceTemplate {...serviceData} />;
};

export default Roofing;

