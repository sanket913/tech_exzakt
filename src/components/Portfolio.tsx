import React, { useState } from 'react';
import { ExternalLink, Eye, } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const categories = ['All', 'Web Development', 'UI/UX Design', 'Branding', 'E-commerce'];

  const projects = [
    {
      title: 'Indian Coffee Bazaar',
      category: 'E-commerce',
      description: 'An online coffee marketplace offering a wide range of premium Indian coffee products with a user-friendly interface and seamless Instamojo payment integration.',
      image: 'https://res.cloudinary.com/duozzi2vq/image/upload/icb1_wiikes.jpg?auto=compress&cs=tinysrgb&w=600', // Replace with an actual project screenshot if possible
      tags: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'Instamojo'],
      color: 'from-amber-500 to-orange-500',
      liveUrl: 'http://indiancoffeebazaar.42web.io/',
      features: ['Product Listings', 'Shopping Cart', 'Order Management', 'Responsive Design', 'Instamojo Payment Gateway']
    },

    {
      title: 'Kalakar Art Academy - Brand Identity',
      category: 'Branding',
      description: 'Designed a complete brand identity for Kalakar Art Academy, including a unique logo, color palette, typography, and brand guidelines to establish a strong visual presence.',
      image: 'https://res.cloudinary.com/duozzi2vq/image/upload/logo_yi8lq0_b_rgb_FFFFFF_c_pad_ar_16_9_e_improve_e_sharpen_uwwrfp.png',
      tags: ['Logo Design', 'Brand Guidelines', 'Typography', 'Visual Identity'],
      color: 'from-purple-500 to-pink-500',
      liveUrl: 'https://res.cloudinary.com/duozzi2vq/image/upload/logo_yi8lq0_b_rgb_FFFFFF_c_pad_ar_16_9_e_improve_e_sharpen_uwwrfp.png',
      features: [
        'Custom Logo Design',
        'Color Palette Creation',
        'Typography Selection',
        'Brand Guidelines Documentation'
      ]
    },

    {
      title: 'Decor AR Studio - Mobile App UI',
      category: 'UI/UX Design',
      description: 'A modern AR-based interior design mobile application interface that allows users to visualize furniture and decor in their space using augmented reality.',
      image: 'https://res.cloudinary.com/duozzi2vq/image/upload/ds_oq3qlz_b_rgb_333B4C_c_pad_ar_4_3_e_improve_e_sharpen_tzuc6m_b_rgb_333B4C_c_pad_ar_16_9_e_improve_e_sharpen_xzb4k2.png?auto=compress&cs=tinysrgb&w=600',
      tags: ['Mobile UI', 'Augmented Reality', 'Figma', 'Prototyping'],
      color: 'from-green-500 to-emerald-500',
      liveUrl: 'https://www.figma.com/proto/TRjjubt37bPc9U4gv8yzCJ/Untitled?node-id=1-49&p=f&t=uYjt21FCGpYKRMXn-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=14%3A226&show-proto-sidebar=1',
      features: [
        'AR-based Furniture Visualization',
        'Interactive Prototypes',
        'User-friendly Interface',
        'Modern Design System'
      ]
    },

    {
      title: 'Techversity - Educational Platform',
      category: 'Web Development',
      description: 'An advanced educational platform offering online courses, user authentication, and an intuitive learning experience.',
      image: 'https://res.cloudinary.com/duozzi2vq/image/upload/v1753591881/tv_ghyuhn.jpg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Next.js', 'MongoDB', 'Clerk', 'React'],
      color: 'from-blue-500 to-indigo-500',
      liveUrl: 'https://www.tech-versity.com/',
      features: [
        'User Authentication (Clerk)',
        'Course Listings & Enrollments',
        'Responsive & SEO Optimized',
        'Interactive Learning Dashboard'
      ]
    },

    {
      title: 'Event Management System',
      category: 'E-commerce',
      description: 'An online event booking platform with event listings, ticket booking, user authentication, and an admin dashboard for managing events.',
      image: 'https://res.cloudinary.com/duozzi2vq/image/upload/v1753591881/ems_sibd66.jpg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Next.js', 'MongoDB', 'React', 'Tailwind CSS'],
      color: 'from-cyan-500 to-blue-500',
      liveUrl: 'https://eventful-gamma.vercel.app/',
      features: [
        'Event Listings with Details',
        'Ticket Booking System',
        'User Authentication',
        'Admin Event Management Dashboard',
        'Responsive and Fast UI'
      ]
    },

    {
      title: 'Kalakar Art Academy',
      category: 'Web Development',
      description: 'A creative and modern website for Kalakar Art Academy showcasing art programs, workshops, and student portfolios.',
      image: 'https://res.cloudinary.com/duozzi2vq/image/upload/v1753591882/kaa_crreq2.jpg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Next.js', 'Tailwind CSS', 'React', 'Responsive Design'],
      color: 'from-pink-500 to-orange-500',
      liveUrl: 'https://kaa-gamma.vercel.app/',
      features: [
        'Responsive Design',
        'Program Listings',
        'Gallery Showcase',
        'Contact and Registration Forms'
      ]
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const openProjectModal = (project: any) => setSelectedProject(project);
  const closeProjectModal = () => setSelectedProject(null);

  return (
    <section id="portfolio" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* ... HEADER CODE SAME ... */}
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
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project, index) => (
          <div key={index} className="group relative">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500 transform hover:scale-105">
              
              {/* IMAGE + HOVER BUTTONS */}
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-fit transition-all duration-500 group-hover:scale-110 group-hover:opacity-85"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-3 sm:space-x-4 ">
                    <button 
                      onClick={() => openProjectModal(project)}
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-b from-slate-800 to-slate-900 rounded-full flex items-center justify-center text-white hover:bg-white/30"
                    >
                      <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-b from-slate-800 to-slate-900 rounded-full flex items-center justify-center text-white hover:bg-white/30">
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.color}`}></div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-300 text-sm mb-4 line-clamp-2">{project.description}</p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="text-xs text-slate-400 bg-slate-800/50 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs text-slate-400 bg-slate-800/50 px-2 py-1 rounded">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* VIEW BUTTON */}
                <button 
                  onClick={() => openProjectModal(project)}
                  className="w-full bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-white py-3 px-4 rounded-xl flex items-center justify-center space-x-2">
                  <span>View Details</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-24 pt-52">
          <div className="absolute inset-0 bg-black/70" onClick={closeProjectModal}></div>

          <div className="relative w-full max-w-3xl bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b border-slate-700">
              <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
              <button onClick={closeProjectModal} className="text-white text-2xl">×</button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[80vh]">
              <div className="relative h-64 mb-6">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover rounded-xl" />
              </div>

              <h4 className="text-xl font-bold text-white mb-4">Project Overview</h4>
              <p className="text-slate-300 mb-6">{selectedProject.description}</p>

              <h4 className="text-xl font-bold text-white mb-4">Key Features</h4>
              <ul className="space-y-2 mb-6">
                {selectedProject.features.map((feature: string, i: number) => (
                  <li key={i} className="text-slate-300">• {feature}</li>
                ))}
              </ul>

              <h4 className="text-xl font-bold text-white mb-4">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag: string, i: number) => (
                  <span key={i} className="text-sm text-slate-300 bg-slate-800 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {selectedProject.liveUrl && (
                <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer"
                  className="block w-full mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-3 rounded-xl">
                  View Live
                </a>
              )}
            </div>
          </div>
        </div>
      )}
      </div>
    </section>
  );
};

export default Portfolio;
