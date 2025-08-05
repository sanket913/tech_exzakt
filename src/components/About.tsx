import React from 'react';
import { Target, Zap, Award, Clock, Code, Smartphone, Globe, Headphones } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    { icon: Code, title: 'Expert Development', description: 'Cutting-edge technology solutions' },
    { icon: Award, title: 'Skilled Team', description: '10+ experienced professionals' },
    { icon: Target, title: 'Proven Results', description: '50+ successful projects' },
    { icon: Clock, title: 'Timely Delivery', description: 'Always on time, every time' },
    { icon: Globe, title: 'Web Development', description: 'Custom websites and web applications' },
    { icon: Zap, title: 'Design Services', description: 'Creative design solutions' },
    { icon: Smartphone, title: 'Mobile Ready', description: 'Responsive and mobile-first approach' },
    { icon: Headphones, title: '24/7 Support', description: 'Always here when you need us' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">NxElite</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are a leading web development company with over 10 skilled professionals and 50+ completed projects, 
              delivering innovative digital solutions with precision and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Mission Content */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 inline-block px-4 py-2 rounded-full">
                <span className="text-white font-semibold text-sm">Our Mission</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                Transforming Ideas into Powerful Digital Experiences
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                At NxElite IT Solutions, we specialize in transforming ideas into powerful digital experiences. 
                Our team of 10+ expert developers and designers work collaboratively to deliver solutions that 
                exceed expectations and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  Learn More
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300">
                  Our Portfolio
                </button>
              </div>
            </div>

            {/* Mission Image/Placeholder */}
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="bg-white rounded-full p-6 mb-4 inline-block shadow-lg">
                  <Target className="w-12 h-12 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h4>
                <p className="text-gray-600">Excellence in every project</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
