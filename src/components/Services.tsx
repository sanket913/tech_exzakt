import React, { useState } from 'react';
import { Globe, Palette, FileText, Package, CreditCard, Settings, ArrowRight, Check, Star, Zap, Clock, Users } from 'lucide-react';
import InternshipModal from './InternshipModal';

const Services: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [isInternshipModalOpen, setIsInternshipModalOpen] = useState(false);

  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      shortDesc: 'Custom web applications with cutting-edge technologies',
      description: 'We build scalable, high-performance web applications using modern frameworks and best practices. From simple websites to complex enterprise solutions.',
      features: ['React & Next.js', 'Node.js Backend', 'Database Design', 'API Integration', 'Performance Optimization'],
      timeline: '2-6 weeks',
      expertise: 'Full-Stack',
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'from-cyan-500/10 to-blue-600/10',
      borderColor: 'border-cyan-500/30',
      popular: false
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      shortDesc: 'Beautiful, intuitive designs that drive engagement',
      description: 'Create stunning user experiences with our comprehensive design services. We focus on user-centered design principles to maximize engagement and conversions.',
      features: ['User Research', 'Wireframing & Prototyping', 'Design Systems', 'Responsive Design', 'Usability Testing'],
      timeline: '1-4 weeks',
      expertise: 'Design',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-500/10 to-pink-600/10',
      borderColor: 'border-purple-500/30',
      popular: true
    },
    {
      icon: FileText,
      title: 'Brand Identity',
      shortDesc: 'Comprehensive branding solutions for market presence',
      description: 'Build a strong brand identity that resonates with your target audience. From logo design to complete brand guidelines and marketing materials.',
      features: ['Logo Design', 'Brand Guidelines', 'Marketing Materials', 'Digital Assets', 'Brand Strategy'],
      timeline: '1-3 weeks',
      expertise: 'Branding',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-500/10 to-emerald-600/10',
      borderColor: 'border-green-500/30',
      popular: false
    },
    {
      icon: Package,
      title: 'Product Design',
      shortDesc: 'End-to-end product design from concept to launch',
      description: 'Complete product design services that ensure market success. We handle everything from initial concept to final launch and beyond.',
      features: ['Market Research', 'Product Strategy', 'Design Execution', 'Launch Support', 'Post-Launch Analytics'],
      timeline: '4-12 weeks',
      expertise: 'Strategy',
      color: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-500/10 to-red-600/10',
      borderColor: 'border-orange-500/30',
      popular: false
    },
    {
      icon: CreditCard,
      title: 'E-commerce Solutions',
      shortDesc: 'Complete online stores with secure payment processing',
      description: 'Build powerful e-commerce platforms that drive sales. Secure payment processing, inventory management, and analytics all included.',
      features: ['Online Store Setup', 'Payment Gateway Integration', 'Inventory Management', 'Analytics Dashboard', 'Mobile Optimization'],
      timeline: '3-8 weeks',
      expertise: 'E-commerce',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-500/10 to-indigo-600/10',
      borderColor: 'border-blue-500/30',
      popular: false
    },
    {
      icon: Settings,
      title: 'Internship Program',
      shortDesc: 'Professional internship opportunities for students',
      description: 'Join our comprehensive internship program and gain hands-on experience in your chosen domain. Work with industry experts and build your career.',
      features: ['Mentorship Program', 'Real Projects', 'Skill Development', 'Certificate', 'Career Guidance'],
      timeline: '3-6 months',
      expertise: 'Education',
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'from-indigo-500/10 to-purple-600/10',
      borderColor: 'border-indigo-500/30',
      popular: false
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 font-medium text-sm font-heading">Our Services</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 font-heading">
            Transform Your
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Digital Presence
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-body">
            Comprehensive digital solutions tailored to transform your business and drive sustainable growth in the digital age
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 left-6 z-20">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-xs font-bold font-heading flex items-center space-x-1">
                    <Star className="w-3 h-3 fill-current" />
                    <span>POPULAR</span>
                  </div>
                </div>
              )}

              {/* Service Card */}
              <div className={`relative h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:scale-105 ${
                hoveredService === index 
                  ? `${service.borderColor} shadow-2xl` 
                  : 'border-slate-700/50 hover:border-slate-600/50'
              }`}>
                
                {/* Background Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>

                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center transition-transform duration-300 ${
                    hoveredService === index ? 'scale-110 rotate-6' : 'group-hover:scale-105'
                  }`}>
                    <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  
                  {/* Service Info */}
                  <div className="text-right">
                    <div className="flex items-center justify-end space-x-1 mb-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span className="text-slate-400 text-xs font-medium font-body">{service.timeline}</span>
                    </div>
                    <div className="flex items-center justify-end space-x-1">
                      <Users className="w-3 h-3 text-cyan-400" />
                      <span className="text-cyan-400 text-xs font-medium font-body">{service.expertise}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4 mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-body">
                    {service.shortDesc}
                  </p>
                  
                  {/* Expanded Description (shown on hover) */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    hoveredService === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-slate-400 text-sm leading-relaxed font-body pt-2 border-t border-slate-700/50">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-white font-semibold text-sm font-heading mb-3">Key Features:</h4>
                  <div className="space-y-2">
                    {service.features.slice(0, hoveredService === index ? service.features.length : 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-slate-300 text-sm font-body">{feature}</span>
                      </div>
                    ))}
                    {hoveredService !== index && service.features.length > 3 && (
                      <div className="text-slate-400 text-xs font-body">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Service Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-slate-800/30 rounded-xl border border-slate-700/30">
                  <div className="text-center">
                    <div className="text-lg font-bold text-white font-heading">50+</div>
                    <div className="text-xs text-slate-400 font-body">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-white font-heading">100%</div>
                    <div className="text-xs text-slate-400 font-body">Success Rate</div>
                  </div>
                </div>

                {/* CTA Button */}
                <button 
                  onClick={() => {
                    if (service.title === 'Internship Program') {
                      setIsInternshipModalOpen(true);
                    }
                  }}
                  className={`w-full bg-gradient-to-r ${service.color} text-white py-3 sm:py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group/btn font-heading hover:shadow-lg transform hover:scale-105`}
                >
                  <span>{service.title === 'Internship Program' ? 'Apply Now' : 'Get Quote'}</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                {/* Hover Indicator */}
                <div className={`absolute top-4 right-4 transition-all duration-300 ${
                  hoveredService === index ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}>
                  <Zap className="w-5 h-5 text-cyan-400 animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto">
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 font-heading">
                Ready to Get Started?
              </h3>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-body">
                Every project is unique. Let's discuss your specific requirements and create a tailored solution that perfectly fits your vision and goals.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 flex items-center space-x-2 font-heading transform hover:scale-105">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <div className="flex items-center space-x-4 text-slate-400">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-body">Free consultation</span>
                </div>
                <div className="w-1 h-4 bg-slate-600"></div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-body">Custom quotes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Internship Modal */}
      <InternshipModal 
        isOpen={isInternshipModalOpen} 
        onClose={() => setIsInternshipModalOpen(false)} 
      />
    </section>
  );
};

export default Services;