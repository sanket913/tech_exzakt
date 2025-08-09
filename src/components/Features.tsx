import React from 'react';
import { Shield, Zap, Users, Clock, Award, Smartphone, Crown, Star } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance for exceptional user experience',
      color: 'from-yellow-500 to-yellow-700'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: '10+ skilled professionals with proven expertise',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Committed to meeting deadlines without compromise',
      color: 'from-yellow-500 to-yellow-700'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Rigorous testing and quality control processes',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Responsive design optimized for all devices',
      color: 'from-yellow-500 to-yellow-700'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 premium-card rounded-full px-6 py-3 mb-6">
            <Crown className="w-5 h-5 text-yellow-400" />
          <span className="text-white font-medium font-body text-sm uppercase tracking-wider">Why Choose Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Choose
            <span className="premium-gradient-text premium-text-glow"> NxElite</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine technical excellence with creative innovation to deliver solutions that drive real business results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="premium-card rounded-2xl p-8 hover:border-yellow-500/40 transition-all duration-500 h-full group-hover:transform group-hover:scale-105">
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-black" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  {/* Premium accent */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Star className="w-5 h-5 text-yellow-400 animate-pulse" />
                  </div>
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-yellow-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-8"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
