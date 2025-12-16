import ServiceTemplate from '../../components/common/ServiceTemplate';

const ConcreteMasonry = () => {
  const serviceData = {
    title: 'Concrete & Masonry',
    subtitle: 'Built to Last',
    heroImage: 'https://www.figma.com/api/mcp/asset/254b0f64-94eb-40a0-ab01-a9bdf1eb77b1',
    description: 'Strong, durable concrete and masonry work for foundations, driveways, patios, and more.',
    features: [
      {
        title: 'Concrete Foundations',
        description: 'Solid foundations for homes, buildings, and additions.'
      },
      {
        title: 'Driveways',
        description: 'Durable concrete driveways that handle heavy use.'
      },
      {
        title: 'Patios & Walkways',
        description: 'Decorative concrete for outdoor living spaces.'
      },
      {
        title: 'Retaining Walls',
        description: 'Structural walls that manage slopes and add visual interest.'
      },
      {
        title: 'Brick & Stone Work',
        description: 'Beautiful masonry for walls, columns, and facades.'
      },
      {
        title: 'Concrete Repair',
        description: 'Fix cracks, settling, and other concrete issues.'
      }
    ],
    benefits: [
      {
        title: 'Unmatched Durability',
        description: 'Concrete and masonry structures last for generations with minimal maintenance.'
      },
      {
        title: 'Versatile Applications',
        description: 'From foundations to decorative features, concrete does it all.'
      },
      {
        title: 'Low Maintenance',
        description: 'Once installed, concrete requires very little upkeep.'
      },
      {
        title: 'Weather Resistant',
        description: 'Concrete stands up to Texas heat, rain, and freezing temperatures.'
      }
    ],
    processSteps: [
      {
        title: 'Site Preparation',
        description: 'Excavate, level, and prepare the area for concrete.'
      },
      {
        title: 'Forms & Reinforcement',
        description: 'Build forms and add rebar for structural strength.'
      },
      {
        title: 'Pouring & Finishing',
        description: 'Pour concrete and finish to your specifications.'
      },
      {
        title: 'Curing',
        description: 'Allow proper curing time for maximum strength.'
      }
    ],
    galleryImages: [
      'https://www.figma.com/api/mcp/asset/254b0f64-94eb-40a0-ab01-a9bdf1eb77b1'
    ]
  };

  return <ServiceTemplate {...serviceData} />;
};

export default ConcreteMasonry;

