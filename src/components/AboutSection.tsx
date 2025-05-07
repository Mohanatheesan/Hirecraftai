import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">We're not another job board.</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            We're a candidate marketing platform built by recruiters, marketers, and technologists who understand how hard it is to stand out. Our mission is to help professionals move beyond the resume black hole and directly connect with hiring managers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "For Job Seekers",
              description: "Whether you're actively looking or just open to opportunities, we help you spark meaningful conversations."
            },
            {
              title: "For Career Coaches & Resume Writers",
              description: "Use our platform to add digital marketing to your coaching toolkit."
            },
            {
              title: "For Universities & Bootcamps",
              description: "Give your grads a real-world edge with outreach campaigns that connect."
            }
          ].map((useCase, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">{useCase.title}</h3>
              <p className="text-gray-600">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;