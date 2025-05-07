import React from 'react';
import { ClipboardList, Send, Calendar, CheckCircle } from 'lucide-react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon, isLast = false }) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white text-lg font-bold">
          {number}
        </div>
        {!isLast && (
          <div className="w-1 bg-primary-200 h-full mt-2"></div>
        )}
      </div>
      <div className="pb-12">
        <div className="flex items-center mb-2">
          <div className="mr-3 text-primary-600">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Profile Analysis",
      description: "We analyze your skills, experience, and target roles to create a personalized outreach strategy.",
      icon: <ClipboardList size={22} />,
    },
    {
      number: 2,
      title: "Targeted Campaigns",
      description: "Our team launches targeted digital marketing campaigns to reach hiring managers at your desired companies.",
      icon: <Send size={22} />,
    },
    {
      number: 3,
      title: "Interview Scheduling",
      description: "As hiring managers express interest, we help coordinate and schedule interviews or meetings.",
      icon: <Calendar size={22} />,
    },
    {
      number: 4,
      title: "Ongoing Optimization",
      description: "We continuously refine your campaign based on results to maximize your interview opportunities.",
      icon: <CheckCircle size={22} />,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="max-w-xl">
              {steps.map((step, index) => (
                <Step
                  key={index}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                  isLast={index === steps.length - 1}
                />
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0 mb-8 lg:mb-0">
              <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">Our Process</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">How We Help You Land Interviews</h2>
              <p className="text-gray-600 text-lg mb-6">
                Our proven four-step process has helped thousands of job seekers secure interviews with hiring managers at their target companies.
              </p>
              <div className="bg-gray-100 rounded-lg p-6 text-left">
                <h4 className="font-semibold text-lg text-primary-700 mb-2">Did you know?</h4>
                <p className="text-gray-700">
                  Over 70% of jobs are never published publicly, and 85% of positions are filled through networking. Our tools help you tap into this hidden job market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;