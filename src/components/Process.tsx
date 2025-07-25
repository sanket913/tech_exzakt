import React from 'react';
import { MessageCircle, Lightbulb, Code, Rocket, ArrowRight } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: 'Discovery & Planning',
      description: 'We start by understanding your goals, target audience, and project requirements through detailed consultation.',
      color: 'from-cyan-500 to-blue-600',
      delay: '0'
    },
    {
      icon: Lightbulb,
      title: 'Strategy & Design',
      description: 'Our team creates comprehensive strategies and stunning designs that align with your brand and objectives.',
      color: 'from-purple-500 to-pink-600',
      delay: '200'
    },
    {
      icon: Code,
      title: 'Development & Testing',
      description: 'We build your solution using cutting-edge technologies with rigorous testing to ensure quality and performance.',
      color: 'from-green-500 to-emerald-600',
      delay: '400'
    },
    {
      icon: Rocket,
      title: 'Launch & Support',
      description: 'We deploy your project and provide ongoing support to ensure continued success and optimal performance.',
      color: 'from-orange-500 to-red-600',
      delay: '600'
    }
  ];

  return (
    <section id="process" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-900"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A proven methodology that ensures successful project delivery from concept to launch
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 via-green-500 to-orange-500 transform -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step Card */}
                <div className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-500 text-center animate-fade-in-up`}
                     style={{ animationDelay: `${step.delay}ms` }}>
                  
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-slate-800 to-slate-900 border-2 border-slate-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-slate-300 leading-relaxed mb-6">{step.description}</p>

                  {/* Arrow (except last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-slate-600" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
