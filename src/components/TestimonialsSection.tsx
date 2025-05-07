import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  position: string;
  company: string;
  image: string;
  stars: number;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "After months of sending applications with no response, CareerBoost helped me secure interviews with 3 hiring managers in just two weeks. I start my new role next month!",
      name: "James Wilson",
      position: "Software Engineer",
      company: "Formerly at TechStart",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
      stars: 5
    },
    {
      quote: "The targeted approach made all the difference. Instead of being one resume in a stack of hundreds, I was able to connect directly with the decision makers.",
      name: "Alexandra Chen",
      position: "Marketing Director",
      company: "Now at BrandForge",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
      stars: 5
    },
    {
      quote: "CareerBoost completely transformed my job search. Their team helped me refine my approach and connect with the right people. Worth every penny!",
      name: "Michael Johnson",
      position: "Product Manager",
      company: "Hired at InnovateCorp",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300",
      stars: 4
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent-400 font-semibold text-sm uppercase tracking-wider">Success Stories</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">What Our Clients Say</h2>
          <p className="text-gray-200 text-lg">
            Don't just take our word for it. Hear from job seekers who have transformed their careers with our help.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-xl shadow-xl p-6 md:p-8 text-gray-800">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/3 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={i < testimonials[activeIndex].stars ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                    />
                  ))}
                </div>
                <h4 className="font-semibold text-gray-900 text-center">{testimonials[activeIndex].name}</h4>
                <p className="text-sm text-gray-600 text-center">{testimonials[activeIndex].position}</p>
                <p className="text-xs text-gray-500 text-center">{testimonials[activeIndex].company}</p>
              </div>
              <div className="w-full md:w-2/3">
                <svg className="text-primary-200 w-12 h-12 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21V14.5C14.017 12.5 15.517 11 17.517 11H21.017V4.5C21.017 3.4 20.117 2.5 19.017 2.5H4.01703C2.91703 2.5 2.01703 3.4 2.01703 4.5V19.5C2.01703 20.6 2.91703 21.5 4.01703 21.5H14.017V21Z" fill="currentColor" fillOpacity="0.2"/>
                  <path d="M6 12H8C9.1 12 10 11.1 10 10V6C10 4.9 9.1 4 8 4H4C2.9 4 2 4.9 2 6V10C2 11.1 2.9 12 4 12H6ZM6 6H8V10H6V6Z" fill="currentColor"/>
                  <path d="M18 12H20C21.1 12 22 11.1 22 10V6C22 4.9 21.1 4 20 4H16C14.9 4 14 4.9 14 6V10C14 11.1 14.9 12 16 12H18ZM18 6H20V10H18V6Z" fill="currentColor"/>
                  <path d="M6 22H8C9.1 22 10 21.1 10 20V16C10 14.9 9.1 14 8 14H4C2.9 14 2 14.9 2 16V20C2 21.1 2.9 22 4 22H6ZM6 16H8V20H6V16Z" fill="currentColor"/>
                  <path d="M17 14C15.9 14 15 14.9 15 16V20C15 21.1 15.9 22 17 22H21C22.1 22 23 21.1 23 20V16C23 14.9 22.1 14 21 14H17Z" fill="currentColor"/>
                </svg>
                <blockquote className="text-lg md:text-xl italic mb-4 leading-relaxed">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
              </div>
            </div>
            
            <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-colors duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-colors duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-12 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-white w-6' : 'bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;