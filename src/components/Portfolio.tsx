import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Web Development', 'UI/UX Design', 'Branding', 'E-commerce'];

  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      description: 'Modern e-commerce solution with advanced features',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'Node.js', 'MongoDB'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Brand Identity Design',
      category: 'Branding',
      description: 'Complete brand identity for tech startup',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Logo', 'Guidelines', 'Assets'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Mobile App UI',
      category: 'UI/UX Design',
      description: 'Intuitive mobile application interface',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Mobile', 'UI/UX', 'Figma'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Corporate Website',
      category: 'Web Development',
      description: 'Professional corporate website with CMS',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Next.js', 'CMS', 'SEO'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Online Store',
      category: 'E-commerce',
      description: 'Custom online store with payment integration',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Shopify', 'Payment', 'Analytics'],
      color: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'Dashboard Design',
      category: 'UI/UX Design',
      description: 'Analytics dashboard with data visualization',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Dashboard', 'Charts', 'Analytics'],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Explore our latest projects and see how we've helped businesses transform their digital presence
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="group relative">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.color}`}></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-300 text-sm mb-4">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs text-slate-400 bg-slate-800/50 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project */}
                  <button className="group/btn w-full bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-white py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>View Project</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 flex items-center space-x-2 mx-auto">
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;