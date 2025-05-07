import React, { useState, useEffect } from 'react';
import { Menu, X, Briefcase } from 'lucide-react';
import { Link } from './ui/Link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Briefcase size={28} className="text-primary-600 mr-2" />
          <span className={`text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            HireCraft
          </span>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          {['Home', 'Services', 'How It Works', 'Testimonials', 'Contact'].map((item) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className={`font-medium transition-colors duration-200 ${
                isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-gray-200'
              }`}
            >
              {item}
            </Link>
          ))}
        </nav>

        <button 
          className="hidden md:block py-2 px-6 bg-accent-500 hover:bg-accent-600 text-white rounded-md font-medium transition-all duration-200 transform hover:scale-105"
        >
          Get Started
        </button>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
          ) : (
            <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            {['Home', 'Services', 'How It Works', 'Testimonials', 'Contact'].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <button 
              className="py-2 px-6 bg-accent-500 hover:bg-accent-600 text-white rounded-md font-medium transition-all duration-200 w-full"
            >
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;