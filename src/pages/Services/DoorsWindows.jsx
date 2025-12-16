import ServiceTemplate from '../../components/common/ServiceTemplate';

const DoorsWindows = () => {
  const serviceData = {
    title: 'Doors & Windows',
    subtitle: 'Installation Excellence',
    heroImage: 'https://www.figma.com/api/mcp/asset/c8a023e5-e4ca-4eee-b508-aec203961722',
    description: 'Enhance your home\'s comfort, security, and energy efficiency with professionally installed doors and windows.',
    features: [
      {
        title: 'Entry Doors',
        description: 'Secure, stylish entry doors that make a lasting first impression.'
      },
      {
        title: 'Interior Doors',
        description: 'Quality interior doors to complement your home\'s design.'
      },
      {
        title: 'Sliding Glass Doors',
        description: 'Beautiful patio doors that bring the outdoors in.'
      },
      {
        title: 'Energy-Efficient Windows',
        description: 'Double and triple-pane windows that reduce energy costs.'
      },
      {
        title: 'Custom Windows',
        description: 'Custom-sized windows for unique openings and design needs.'
      },
      {
        title: 'Window Replacement',
        description: 'Replace old, drafty windows with modern, efficient units.'
      }
    ],
    benefits: [
      {
        title: 'Energy Savings',
        description: 'Modern windows and doors dramatically reduce heating and cooling costs.'
      },
      {
        title: 'Enhanced Security',
        description: 'Advanced locking systems and durable materials keep your family safe.'
      },
      {
        title: 'Noise Reduction',
        description: 'Quality installation minimizes outside noise for a quieter home.'
      },
      {
        title: 'Increased Home Value',
        description: 'New doors and windows are one of the best home improvement investments.'
      }
    ],
    processSteps: [
      {
        title: 'Assessment',
        description: 'Measure openings and discuss style preferences and budget.'
      },
      {
        title: 'Selection',
        description: 'Choose from quality door and window options that fit your needs.'
      },
      {
        title: 'Installation',
        description: 'Professional installation ensuring proper fit and sealing.'
      },
      {
        title: 'Finishing',
        description: 'Trim work and final touches for a polished, complete look.'
      }
    ],
    galleryImages: [
      'https://www.figma.com/api/mcp/asset/c8a023e5-e4ca-4eee-b508-aec203961722',
      'https://www.figma.com/api/mcp/asset/a09497e3-3c3e-4bc4-9b65-9d70ead48f8c'
    ]
  };

  return <ServiceTemplate {...serviceData} />;
};

export default DoorsWindows;

