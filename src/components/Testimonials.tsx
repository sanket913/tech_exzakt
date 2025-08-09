import React, { useEffect, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      company: 'TechStart Inc.',
      content: 'NxElite transformed our digital presence completely. Their attention to detail and innovative approach exceeded our expectations. The team delivered on time and within budget.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      project: 'E-commerce Platform',
      result: '300% increase in sales'
    },
    {
      name: 'Michael Chen',
      role: 'Founder, Digital Solutions',
      company: 'Digital Solutions',
      content: 'Working with NxElite was a game-changer for our business. Their expertise in web development and design helped us achieve a 300% increase in online engagement.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      project: 'Web Application',
      result: '300% more engagement'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director, GrowthCo',
      company: 'GrowthCo',
      content: 'The team at NxElite is incredibly professional and talented. They understood our vision perfectly and delivered a solution that perfectly aligned with our brand.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      project: 'Brand Identity',
      result: 'Complete rebrand success'
    },
    {
      name: 'David Thompson',
      role: 'CTO, InnovateLab',
      company: 'InnovateLab',
      content: 'Exceptional service and outstanding results. NxElite not only delivered a beautiful website but also provided valuable insights that improved our overall digital strategy.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      project: 'Digital Strategy',
      result: 'Improved ROI by 250%'
    },
    {
      name: 'Lisa Wang',
      role: 'Product Manager, StartupXYZ',
      company: 'StartupXYZ',
      content: 'Amazing experience working with NxElite. They brought our vision to life with incredible precision and creativity. The final product exceeded all our expectations.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      project: 'Mobile App',
      result: '4.9★ App Store rating'
    },
    {
      name: 'James Miller',
      role: 'Founder, EcoTech',
      company: 'EcoTech',
      content: 'Professional, reliable, and incredibly skilled. NxElite helped us launch our platform successfully and provided ongoing support that has been invaluable.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      project: 'Platform Development',
      result: '10k+ active users'
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isPlaying || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // 4 seconds delay

    return () => clearInterval(interval);
  }, [isPlaying, isPaused, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 premium-card border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-yellow-400 font-medium text-sm font-heading">Client Reviews</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 font-heading">
            What Our <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-body">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Carousel Container */}
          <div 
            className="relative overflow-hidden rounded-3xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Testimonials Track */}
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="premium-card backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 sm:p-8 lg:p-12 hover:border-yellow-500/30 transition-all duration-500">
                    <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-center">
                      
                      {/* Left: Client Info */}
                      <div className="lg:col-span-1 text-center lg:text-left">
                        <div className="relative inline-block mb-6">
                          <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-gray-700 hover:border-yellow-500/50 transition-colors duration-300 mx-auto lg:mx-0">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          {/* Quote Icon */}
                          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                            <Quote className="w-5 h-5 text-black" />
                          </div>
                        </div>
                        
                        <div className="space-y-2 mb-4">
                          <h4 className="text-xl sm:text-2xl font-bold text-white font-heading">{testimonial.name}</h4>
                          <p className="text-yellow-400 font-semibold font-body">{testimonial.role}</p>
                          <p className="text-gray-400 text-sm font-body">{testimonial.company}</p>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center justify-center lg:justify-start space-x-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>

                        {/* Project Info */}
                        <div className="space-y-2">
                          <div className="premium-card rounded-lg p-3 border border-gray-700/50">
                            <div className="text-gray-400 text-xs font-body mb-1">Project:</div>
                            <div className="text-white font-semibold text-sm font-heading">{testimonial.project}</div>
                          </div>
                          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-3">
                            <div className="text-green-400 text-xs font-body mb-1">Result:</div>
                            <div className="text-green-300 font-semibold text-sm font-heading">{testimonial.result}</div>
                          </div>
                        </div>
                      </div>

                      {/* Right: Testimonial Content */}
                      <div className="lg:col-span-2">
                        <div className="relative">
                          {/* Large Quote */}
                          <div className="absolute -top-4 -left-4 text-6xl sm:text-7xl lg:text-8xl text-cyan-500/20 font-serif leading-none">"</div>
                          
                          <blockquote className="relative z-10 text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed font-body italic mb-6 pl-8">
                            {testimonial.content}
                          </blockquote>
                          
                          {/* Closing Quote */}
                          <div className="absolute -bottom-8 -right-4 text-6xl sm:text-7xl lg:text-8xl text-cyan-500/20 font-serif leading-none rotate-180">"</div>
                        </div>

                        {/* Additional Info */}
                        <div className="flex flex-wrap gap-4 mt-8">
                          <div className="flex items-center space-x-2 bg-slate-800/30 rounded-full px-4 py-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-slate-300 text-sm font-body">Verified Client</span>
                          </div>
                          <div className="flex items-center space-x-2 bg-slate-800/30 rounded-full px-4 py-2">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                            <span className="text-slate-300 text-sm font-body">Project Completed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 space-x-6">
            {/* Previous Button */}
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-yellow-500/50 rounded-full flex items-center justify-center transition-all duration-300 group"
            >
              <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-yellow-400 transition-colors" />
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 rounded-full flex items-center justify-center transition-all duration-300 group shadow-lg hover:shadow-cyan-500/25"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-black" />
              ) : (
                <Play className="w-5 h-5 text-black ml-0.5" />
              )}
            </button>

            {/* Next Button */}
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-yellow-500/50 rounded-full flex items-center justify-center transition-all duration-300 group"
            >
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-yellow-400 transition-colors" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-8 h-2 bg-gradient-to-r from-yellow-500 to-yellow-600'
                    : 'w-2 h-2 bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-4 max-w-md mx-auto">
            <div className="w-full bg-gray-800 rounded-full h-1">
              <div 
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 h-1 rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 sm:mt-20">
          <div className="text-center">
            <div className="premium-card backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-yellow-500/30 transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2 font-heading">100%</div>
              <div className="text-slate-300 font-body">Client Satisfaction</div>
            </div>
          </div>
          <div className="text-center">
            <div className="premium-card backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-yellow-500/30 transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2 font-heading">50+</div>
              <div className="text-slate-300 font-body">Happy Clients</div>
            </div>
          </div>
          <div className="text-center">
            <div className="premium-card backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-yellow-500/30 transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2 font-heading">5.0</div>
              <div className="text-slate-300 font-body">Average Rating</div>
            </div>
          </div>
          <div className="text-center">
            <div className="premium-card backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-yellow-500/30 transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2 font-heading">24/7</div>
              <div className="text-slate-300 font-body">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
