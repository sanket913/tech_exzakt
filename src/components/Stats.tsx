import React from 'react';
import { Trophy, Users, Clock, ThumbsUp } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    {
      icon: Trophy,
      number: '50+',
      label: 'Projects Completed',
      description: 'Successfully delivered projects across various industries'
    },
    {
      icon: Users,
      number: '10+',
      label: 'Expert Team',
      description: 'Skilled professionals dedicated to your success'
    },
    {
      icon: ThumbsUp,
      number: '100%',
      label: 'Client Satisfaction',
      description: 'Committed to delivering excellence in every project'
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Support',
      description: 'Round-the-clock assistance for all your needs'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-gray-800 mb-3">{stat.label}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;