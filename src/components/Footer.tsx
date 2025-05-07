import React from 'react';
import { Briefcase, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Briefcase size={24} className="text-accent-500 mr-2" />
              <span className="text-xl font-bold text-white">HireCraft</span>
            </div>
            <p className="mb-6 text-gray-400">
              Specialized digital marketing tools helping job seekers connect directly with hiring managers and decision-makers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent-500 transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-500 transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-500 transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-500 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'How It Works', 'Testimonials', 'Blog', 'FAQ'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-400 hover:text-accent-400 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Targeted Outreach', 
                'Accelerated Networking', 
                'Performance Analytics', 
                'Connection Building', 
                'Personalized Messaging',
                'Personal Branding'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#services"
                    className="text-gray-400 hover:text-accent-400 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={18} className="mr-3 mt-1 text-accent-500" />
                <span>info@hirecraft.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-3 mt-1 text-accent-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-accent-500" />
                <span>1234 Market Street, San Francisco, CA 94103</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} HireCraft. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-500 hover:text-accent-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-accent-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-accent-400 transition-colors duration-200">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;