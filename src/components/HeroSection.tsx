import React from 'react';
import { ArrowRight, Target, Briefcase } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary-600 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary-500 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Get Noticed. Get Interviewed. <span className="text-accent-400">Get Hired.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            Our AI-powered digital marketing tool helps job seekers land interviews by turning applications into conversations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="py-3 px-8 bg-accent-500 hover:bg-accent-600 text-white rounded-md font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <Target size={18} className="mr-2" />
              Try it Now
            </button>
            <button className="py-3 px-8 bg-transparent border border-white hover:bg-white/10 text-white rounded-md font-medium transition-all duration-300 flex items-center justify-center">
              <Briefcase size={18} className="mr-2" />
              See How It Works
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
          {[
            {
              title: "Create a Standout Profile",
              description: "We help you craft a compelling digital presence tailored to your target roles."
            },
            {
              title: "Target the Right Hiring Managers",
              description: "Use our database and smart filters to find decision-makers."
            },
            {
              title: "Launch a Personalized Campaign",
              description: "Email + LinkedIn + personal branding automation that gets you responses."
            }
          ].map((step, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-accent-400 font-bold text-xl mb-2">Step {index + 1}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-16 md:h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#ffffff" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#ffffff" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;