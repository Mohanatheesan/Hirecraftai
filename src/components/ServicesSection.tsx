import React from 'react';
import { Target, MessageSquare, FileText, BarChart4, TestTube, Bot } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 group">
      <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Target size={24} />,
      title: "Smart Targeting",
      description: "Identify the right hiring managers using LinkedIn + email data"
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Personalized Outreach Campaigns",
      description: "Automated sequences that feel human and get responses"
    },
    {
      icon: <FileText size={24} />,
      title: "Profile Enhancer",
      description: "Tools to improve your CV, LinkedIn, and pitch"
    },
    {
      icon: <BarChart4 size={24} />,
      title: "Live Analytics",
      description: "See who's opening, clicking, and responding to your outreach"
    },
    {
      icon: <TestTube size={24} />,
      title: "A/B Testing",
      description: "Test outreach strategies and optimize your approach"
    },
    {
      icon: <Bot size={24} />,
      title: "AI Copy Assistant",
      description: "Write emails and messages tailored to your goals"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">Features</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">Tools That Get Results</h2>
          <p className="text-gray-600 text-lg">
            Everything you need to move beyond the resume black hole and connect directly with hiring managers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;