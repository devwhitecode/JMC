import ServiceTemplate from '../../components/common/ServiceTemplate';

const FlooringDrywall = () => {
  const serviceData = {
    title: 'Flooring & Drywall',
    subtitle: 'Finishing Perfection',
    heroImage: 'https://www.figma.com/api/mcp/asset/5e8f0c2f-b2c8-46cb-8096-58a7ddfc1fde',
    description: 'Transform your interiors with flawless drywall and beautiful flooring installed by skilled craftsmen.',
    features: [
      {
        title: 'Drywall Installation',
        description: 'Professional hanging and finishing for smooth, perfect walls.'
      },
      {
        title: 'Drywall Repair',
        description: 'Seamless repair of holes, cracks, and water damage.'
      },
      {
        title: 'Texture & Finishing',
        description: 'Various texture options to match existing walls or create new looks.'
      },
      {
        title: 'Hardwood Flooring',
        description: 'Classic hardwood installation, refinishing, and repair.'
      },
      {
        title: 'Tile Installation',
        description: 'Ceramic, porcelain, and natural stone tile for floors and walls.'
      },
      {
        title: 'Laminate & Vinyl',
        description: 'Durable, affordable flooring options in countless styles.'
      }
    ],
    benefits: [
      {
        title: 'Flawless Finish',
        description: 'Smooth walls and perfect flooring that showcase quality craftsmanship.'
      },
      {
        title: 'Increased Home Value',
        description: 'New flooring and perfect walls significantly boost property value.'
      },
      {
        title: 'Durability',
        description: 'Quality materials and expert installation ensure long-lasting results.'
      },
      {
        title: 'Endless Options',
        description: 'Choose from countless colors, patterns, and materials.'
      }
    ],
    processSteps: [
      {
        title: 'Consultation',
        description: 'Discuss your style preferences and see material samples.'
      },
      {
        title: 'Preparation',
        description: 'Properly prep surfaces for optimal adhesion and finish.'
      },
      {
        title: 'Installation',
        description: 'Precise installation with attention to every detail.'
      },
      {
        title: 'Final Touches',
        description: 'Clean-up and finishing touches for a pristine result.'
      }
    ],
    galleryImages: [
      'https://www.figma.com/api/mcp/asset/5e8f0c2f-b2c8-46cb-8096-58a7ddfc1fde'
    ]
  };

  return <ServiceTemplate {...serviceData} />;
};

export default FlooringDrywall;

