import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center bg-gradient-to-br from-primary-900 to-primary-700 rounded-2xl overflow-hidden shadow-xl">
          <div className="w-full lg:w-1/2 p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Land Your Next Interview?</h2>
            <p className="text-gray-200 text-lg mb-8">
              Join thousands of successful job seekers who have accelerated their careers with our digital marketing tools.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Connect directly with hiring managers",
                "Bypass traditional application processes",
                "Stand out from other candidates",
                "Track your progress with detailed analytics"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-3 mt-1 bg-accent-500 rounded-full p-1">
                    <Check size={16} className="text-white" />
                  </div>
                  <p className="text-gray-200">{item}</p>
                </div>
              ))}
            </div>
            
            <button className="py-3 px-8 bg-accent-500 hover:bg-accent-600 text-white rounded-md font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              Get Started Today
              <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
          
          <div className="w-full lg:w-1/2 bg-gray-100 p-8 md:p-12">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="John Smith" 
                  className="w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="john@example.com" 
                  className="w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              
              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
                <select 
                  id="industry" 
                  className="w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Select your industry</option>
                  <option value="tech">Technology</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="marketing">Marketing</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Goal</label>
                <textarea 
                  id="message" 
                  placeholder="I'm looking to interview at..." 
                  rows={3} 
                  className="w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors duration-300"
              >
                Request Information
              </button>
              
              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to our <a href="#" className="underline hover:text-primary-600">Privacy Policy</a> and <a href="#" className="underline hover:text-primary-600">Terms of Service</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;