import ServiceTemplate from '../../components/common/ServiceTemplate';

const Painting = () => {
  const serviceData = {
    title: 'Painting',
    subtitle: 'Color Your World',
    heroImage: 'https://www.figma.com/api/mcp/asset/f1aca311-d6cc-4394-84d1-69ebf0ddd478',
    description: 'Professional interior and exterior painting services that bring new life to your home or business.',
    features: [
      {
        title: 'Interior Painting',
        description: 'Transform rooms with fresh color and expert application.'
      },
      {
        title: 'Exterior Painting',
        description: 'Protect and beautify your home\'s exterior with quality paint.'
      },
      {
        title: 'Cabinet Painting',
        description: 'Update kitchens and bathrooms with professionally painted cabinets.'
      },
      {
        title: 'Deck & Fence Staining',
        description: 'Protect and enhance outdoor wood with quality stains.'
      },
      {
        title: 'Color Consultation',
        description: 'Expert advice to help you choose the perfect colors.'
      },
      {
        title: 'Surface Preparation',
        description: 'Thorough prep work ensures a flawless, long-lasting finish.'
      }
    ],
    benefits: [
      {
        title: 'Instant Transformation',
        description: 'Paint is the fastest way to completely change a space\'s look and feel.'
      },
      {
        title: 'Protection',
        description: 'Quality paint protects surfaces from moisture, sun, and wear.'
      },
      {
        title: 'Increased Value',
        description: 'Fresh paint significantly improves curb appeal and home value.'
      },
      {
        title: 'Expert Application',
        description: 'Smooth, even coverage with no drips, runs, or imperfections.'
      }
    ],
    processSteps: [
      {
        title: 'Consultation',
        description: 'Discuss colors, finishes, and project scope.'
      },
      {
        title: 'Preparation',
        description: 'Protect furniture, patch holes, and prime surfaces.'
      },
      {
        title: 'Painting',
        description: 'Apply multiple coats for even, lasting coverage.'
      },
      {
        title: 'Inspection',
        description: 'Final walkthrough to ensure perfect results.'
      }
    ],
    galleryImages: [
      'https://www.figma.com/api/mcp/asset/f1aca311-d6cc-4394-84d1-69ebf0ddd478'
    ]
  };

  return <ServiceTemplate {...serviceData} />;
};

export default Painting;

