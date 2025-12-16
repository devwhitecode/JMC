import ServiceTemplate from '../../components/common/ServiceTemplate';

const FramingSiding = () => {
  const serviceData = {
    title: 'Framing & Siding',
    subtitle: 'Structural Excellence',
    heroImage: 'https://www.figma.com/api/mcp/asset/0d1ccc82-4f16-4e68-a890-ad26ed05b0c8',
    description: 'Build a strong foundation with expert framing and enhance your home\'s exterior with durable, beautiful siding.',
    features: [
      {
        title: 'Wood Framing',
        description: 'Traditional and modern wood framing techniques for residential and commercial structures.'
      },
      {
        title: 'Steel Framing',
        description: 'Durable steel framing solutions for superior strength and longevity.'
      },
      {
        title: 'Vinyl Siding',
        description: 'Low-maintenance, weather-resistant vinyl siding in various colors and styles.'
      },
      {
        title: 'Fiber Cement Siding',
        description: 'Premium fiber cement siding that mimics wood with enhanced durability.'
      },
      {
        title: 'Wood Siding',
        description: 'Classic wood siding options for timeless appeal and natural beauty.'
      },
      {
        title: 'Siding Repair',
        description: 'Expert repair and replacement of damaged siding sections.'
      }
    ],
    benefits: [
      {
        title: 'Structural Integrity',
        description: 'Precision framing ensures your structure is built to last and meets all building codes.'
      },
      {
        title: 'Weather Protection',
        description: 'Quality siding protects your home from the elements while improving energy efficiency.'
      },
      {
        title: 'Enhanced Curb Appeal',
        description: 'Beautiful siding transforms your home\'s exterior and increases property value.'
      },
      {
        title: 'Long-Term Value',
        description: 'Durable materials and expert installation mean years of low-maintenance protection.'
      }
    ],
    processSteps: [
      {
        title: 'Consultation',
        description: 'Discuss your vision, assess the structure, and provide detailed recommendations.'
      },
      {
        title: 'Planning',
        description: 'Create detailed plans, select materials, and schedule the project timeline.'
      },
      {
        title: 'Execution',
        description: 'Expert installation with attention to detail and quality craftsmanship.'
      },
      {
        title: 'Inspection',
        description: 'Final walkthrough to ensure everything meets our high standards and your expectations.'
      }
    ],
    galleryImages: [
      'https://www.figma.com/api/mcp/asset/0d1ccc82-4f16-4e68-a890-ad26ed05b0c8',
      'https://www.figma.com/api/mcp/asset/fca367ad-8905-4cc6-b1ac-324577992389',
      'https://www.figma.com/api/mcp/asset/2b30f9f5-252a-49a7-97ab-2923b80f3e9c'
    ]
  };

  return <ServiceTemplate {...serviceData} />;
};

export default FramingSiding;

