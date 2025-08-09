import React from 'react';
import { ArrowLeft, Book, Code, Download, ExternalLink, Search, FileText, Zap, Shield, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Documentation: React.FC = () => {
  const sections = [
    {
      title: 'Getting Started',
      icon: Zap,
      items: [
        'Quick Start Guide',
        'Installation Process',
        'Basic Configuration',
        'First Project Setup'
      ]
    },
    {
      title: 'Web Development',
      icon: Code,
      items: [
        'React Development',
        'Next.js Framework',
        'API Integration',
        'Database Setup'
      ]
    },
    {
      title: 'Design Guidelines',
      icon: FileText,
      items: [
        'UI/UX Principles',
        'Brand Guidelines',
        'Color Schemes',
        'Typography Rules'
      ]
    },
    {
      title: 'Security',
      icon: Shield,
      items: [
        'Authentication',
        'Data Protection',
        'SSL Certificates',
        'Security Best Practices'
      ]
    }
  ];

  const quickLinks = [
    { title: 'API Reference', icon: Globe, description: 'Complete API documentation' },
    { title: 'Code Examples', icon: Code, description: 'Ready-to-use code snippets' },
    { title: 'Video Tutorials', icon: FileText, description: 'Step-by-step video guides' },
    { title: 'FAQ', icon: Book, description: 'Frequently asked questions' }
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 border-b border-slate-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center space-x-4 mb-6">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-heading">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Documentation
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl">
                Everything you need to know about working with NxElite. 
                From getting started to advanced implementations.
              </p>
            </div>
            
            <div className="mt-6 lg:mt-0">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full lg:w-80 pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-white mb-4 font-heading">Quick Navigation</h3>
              <nav className="space-y-2">
                {sections.map((section, index) => (
                  <div key={index}>
                    <div className="flex items-center space-x-2 text-cyan-400 font-medium py-2">
                      <section.icon className="w-4 h-4" />
                      <span className="text-sm">{section.title}</span>
                    </div>
                    <ul className="ml-6 space-y-1">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <a 
                            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-slate-400 hover:text-white text-sm transition-colors block py-1"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Quick Links */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 font-heading">Quick Links</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {quickLinks.map((link, index) => (
                  <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 group cursor-pointer">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <link.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2 font-heading">{link.title}</h3>
                        <p className="text-slate-400 text-sm">{link.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Documentation Sections */}
            {sections.map((section, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white font-heading">{section.title}</h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/30 hover:border-cyan-500/30 transition-all duration-300 group cursor-pointer">
                      <div className="flex items-center justify-between">
                        <h3 className="text-white font-medium font-heading">{item}</h3>
                        <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                      </div>
                      <p className="text-slate-400 text-sm mt-2">
                        Comprehensive guide for {item.toLowerCase()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Download Section */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Download className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white font-heading">Downloads</h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/30 text-center">
                  <FileText className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <h3 className="text-white font-medium mb-2">PDF Guide</h3>
                  <p className="text-slate-400 text-sm mb-4">Complete documentation in PDF format</p>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all">
                    Download
                  </button>
                </div>

                <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/30 text-center">
                  <Code className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <h3 className="text-white font-medium mb-2">Code Templates</h3>
                  <p className="text-slate-400 text-sm mb-4">Ready-to-use project templates</p>
                  <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all">
                    Download
                  </button>
                </div>

                <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/30 text-center">
                  <Book className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <h3 className="text-white font-medium mb-2">Style Guide</h3>
                  <p className="text-slate-400 text-sm mb-4">Brand and design guidelines</p>
                  <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all">
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;