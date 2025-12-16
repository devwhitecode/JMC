import ServiceTemplate from '../../components/common/ServiceTemplate';

const ElectricalPlumbing = () => {
  const serviceData = {
    title: 'Electrical & Plumbing',
    subtitle: 'Licensed Professionals',
    heroImage: 'https://www.figma.com/api/mcp/asset/dd51495c-bac5-4046-bb9b-889b4ecf6539',
    description: 'Safe, reliable electrical and plumbing services from licensed professionals you can trust.',
    features: [
      {
        title: 'Electrical Wiring',
        description: 'Complete wiring for new construction and remodels.'
      },
      {
        title: 'Panel Upgrades',
        description: 'Upgrade outdated electrical panels for modern power needs.'
      },
      {
        title: 'Lighting Installation',
        description: 'Interior and exterior lighting solutions.'
      },
      {
        title: 'Plumbing Installation',
        description: 'Complete plumbing systems for kitchens, bathrooms, and more.'
      },
      {
        title: 'Pipe Repair & Replacement',
        description: 'Fix leaks and replace old pipes with modern materials.'
      },
      {
        title: 'Fixture Installation',
        description: 'Install sinks, toilets, faucets, and other fixtures.'
      }
    ],
    benefits: [
      {
        title: 'Licensed & Insured',
        description: 'All work performed by fully licensed electricians and plumbers.'
      },
      {
        title: 'Code Compliant',
        description: 'Every installation meets or exceeds local building codes.'
      },
      {
        title: 'Safety First',
        description: 'We prioritize your family\'s safety in every project.'
      },
      {
        title: 'Reliable Service',
        description: 'Quality workmanship you can depend on for years to come.'
      }
    ],
    processSteps: [
      {
        title: 'Inspection',
        description: 'Assess existing systems and identify issues or needs.'
      },
      {
        title: 'Planning',
        description: 'Design solutions that meet code and your requirements.'
      },
      {
        title: 'Installation',
        description: 'Professional installation by licensed tradespeople.'
      },
      {
        title: 'Testing',
        description: 'Thorough testing to ensure everything works perfectly.'
      }
    ],
    galleryImages: [
      'https://www.figma.com/api/mcp/asset/dd51495c-bac5-4046-bb9b-889b4ecf6539'
    ]
  };

  return <ServiceTemplate {...serviceData} />;
};

export default ElectricalPlumbing;

