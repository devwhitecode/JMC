import ServiceTemplate from '../../components/common/ServiceTemplate';

const DecksCarports = () => {
  const serviceData = {
    title: 'Decks, Carports & Outdoor Projects',
    subtitle: 'Outdoor Living Spaces',
    heroImage: 'https://www.figma.com/api/mcp/asset/b5e48aa5-a2db-4fa3-96a6-ec5d95ad44ba',
    description: 'Extend your living space outdoors with custom decks, carports, patios, and more.',
    features: [
      {
        title: 'Custom Decks',
        description: 'Beautiful wood and composite decks designed for your lifestyle.'
      },
      {
        title: 'Covered Patios',
        description: 'Enjoy outdoor living protected from sun and rain.'
      },
      {
        title: 'Carports',
        description: 'Protect your vehicles with durable, attractive carports.'
      },
      {
        title: 'Pergolas & Gazebos',
        description: 'Add shade and style with custom outdoor structures.'
      },
      {
        title: 'Outdoor Kitchens',
        description: 'Complete outdoor cooking and entertaining spaces.'
      },
      {
        title: 'Fencing',
        description: 'Privacy, security, and decorative fencing options.'
      }
    ],
    benefits: [
      {
        title: 'Extended Living Space',
        description: 'Increase your usable square footage for entertaining and relaxation.'
      },
      {
        title: 'Increased Home Value',
        description: 'Outdoor improvements offer excellent return on investment.'
      },
      {
        title: 'Year-Round Enjoyment',
        description: 'Covered spaces let you enjoy the outdoors in any weather.'
      },
      {
        title: 'Custom Design',
        description: 'Every project is designed to match your home and lifestyle.'
      }
    ],
    processSteps: [
      {
        title: 'Design',
        description: 'Collaborate on a design that fits your vision and space.'
      },
      {
        title: 'Planning',
        description: 'Obtain permits and select materials.'
      },
      {
        title: 'Construction',
        description: 'Build your outdoor space with quality craftsmanship.'
      },
      {
        title: 'Finishing',
        description: 'Apply stains, seals, and final touches.'
      }
    ],
    galleryImages: [
      'https://www.figma.com/api/mcp/asset/b5e48aa5-a2db-4fa3-96a6-ec5d95ad44ba'
    ]
  };

  return <ServiceTemplate {...serviceData} />;
};

export default DecksCarports;

