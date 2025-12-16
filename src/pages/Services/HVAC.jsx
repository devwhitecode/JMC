import ServiceTemplate from '../../components/common/ServiceTemplate';

const HVAC = () => {
  const serviceData = {
    title: 'HVAC & AC Services',
    subtitle: 'Climate Control Experts',
    heroImage: 'https://www.figma.com/api/mcp/asset/adccff5f-bbff-4e46-9a03-e247db3e93a2',
    description: 'Stay comfortable year-round with expert HVAC installation, repair, and maintenance services.',
    features: [
      {
        title: 'AC Installation',
        description: 'New air conditioning system installation for maximum efficiency.'
      },
      {
        title: 'Heating Installation',
        description: 'Furnace and heating system installation and replacement.'
      },
      {
        title: 'HVAC Repair',
        description: 'Fast, reliable repair services to get your system running again.'
      },
      {
        title: 'Maintenance Plans',
        description: 'Regular maintenance to keep your system running efficiently.'
      },
      {
        title: 'Ductwork',
        description: 'Duct installation, repair, and sealing for optimal airflow.'
      },
      {
        title: 'Thermostat Installation',
        description: 'Smart thermostat installation for better climate control.'
      }
    ],
    benefits: [
      {
        title: 'Energy Efficiency',
        description: 'Modern HVAC systems reduce energy costs while improving comfort.'
      },
      {
        title: 'Improved Air Quality',
        description: 'Better filtration and ventilation for healthier indoor air.'
      },
      {
        title: 'Year-Round Comfort',
        description: 'Stay comfortable no matter what the Texas weather brings.'
      },
      {
        title: 'Extended Equipment Life',
        description: 'Proper installation and maintenance maximize your system\'s lifespan.'
      }
    ],
    processSteps: [
      {
        title: 'Assessment',
        description: 'Evaluate your home\'s heating and cooling needs.'
      },
      {
        title: 'Recommendation',
        description: 'Suggest the best system for your space and budget.'
      },
      {
        title: 'Installation',
        description: 'Professional installation with precise sizing and placement.'
      },
      {
        title: 'Testing & Training',
        description: 'Test the system and show you how to use it effectively.'
      }
    ],
    galleryImages: [
      'https://www.figma.com/api/mcp/asset/adccff5f-bbff-4e46-9a03-e247db3e93a2'
    ]
  };

  return <ServiceTemplate {...serviceData} />;
};

export default HVAC;

