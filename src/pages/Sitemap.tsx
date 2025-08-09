import React from 'react';
import { ArrowLeft, Globe, ExternalLink, Folder, FileText, Users, Mail, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sitemap: React.FC = () => {
  const siteStructure = [
    {
      title: 'Main Pages',
      icon: Globe,
      color: 'from-cyan-500 to-blue-600',
      pages: [
        { name: 'Home', path: '/', description: 'Main landing page with hero section and overview' },
        { name: 'Services', path: '/#services', description: 'Our web development and design services' },
        { name: 'Portfolio', path: '/#portfolio', description: 'Showcase of our completed projects' },
        { name: 'Process', path: '/#process', description: 'Our development methodology and workflow' },
        { name: 'Team', path: '/#team', description: 'Meet our expert team members' },
        { name: 'Testimonials', path: '/#testimonials', description: 'Client reviews and feedback' },
        { name: 'Contact', path: '/#contact', description: 'Get in touch with us' }
      ]
    },
    {
      title: 'Resource Pages',
      icon: FileText,
      color: 'from-green-500 to-emerald-600',
      pages: [
        { name: 'Documentation', path: '/documentation', description: 'Complete guides and technical documentation' },
        { name: 'Help Center', path: '/help-center', description: 'FAQs and support resources' },
        { name: 'Privacy Policy', path: '/privacy-policy', description: 'How we handle your personal information' },
        { name: 'Terms of Service', path: '/terms-of-service', description: 'Terms and conditions for using our services' },
        { name: 'Cookie Policy', path: '/cookie-policy', description: 'Information about cookies and tracking' },
        { name: 'Sitemap', path: '/sitemap', description: 'Complete site structure and navigation' }
      ]
    },
    {
      title: 'Service Categories',
      icon: Settings,
      color: 'from-purple-500 to-pink-600',
      pages: [
        { name: 'Web Development', path: '/#services', description: 'Custom web applications and websites' },
        { name: 'UI/UX Design', path: '/#services', description: 'User interface and experience design' },
        { name: 'Brand Identity', path: '/#services', description: 'Logo design and brand development' },
        { name: 'E-commerce Solutions', path: '/#services', description: 'Online stores and payment integration' },
        { name: 'IT Consulting', path: '/#services', description: 'Technology strategy and consulting' },
        { name: 'Internship Program', path: '/#services', description: 'Professional development opportunities' }
      ]
    },
    {
      title: 'Company Information',
      icon: Users,
      color: 'from-orange-500 to-red-600',
      pages: [
        { name: 'About Us', path: '/#team', description: 'Our company story and mission' },
        { name: 'Our Team', path: '/#team', description: 'Leadership and team members' },
        { name: 'Careers', path: '/#contact', description: 'Job opportunities and internships' },
        { name: 'Contact Information', path: '/#contact', description: 'Phone, email, and location details' }
      ]
    }
  ];

  const quickStats = [
    { label: 'Total Pages', value: '15+', icon: FileText },
    { label: 'Service Areas', value: '6', icon: Settings },
    { label: 'Resource Docs', value: '6', icon: Folder },
    { label: 'Contact Methods', value: '3', icon: Mail }
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
          
          <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading">
                  <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                    Sitemap
                  </span>
                </h1>
                <p className="text-slate-400 mt-2">Complete site navigation and structure</p>
              </div>
            </div>
            <p className="text-lg sm:text-xl text-slate-300">
              Explore our complete website structure and find exactly what you're looking for.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {quickStats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 text-center hover:border-cyan-500/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Site Structure */}
          <div className="space-y-12">
            {siteStructure.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center`}>
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white font-heading">{section.title}</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.pages.map((page, pageIndex) => (
                    <div key={pageIndex} className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/30 hover:border-cyan-500/30 transition-all duration-300 group">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-white font-semibold font-heading group-hover:text-cyan-400 transition-colors">
                          {page.name}
                        </h3>
                        {page.path.startsWith('http') ? (
                          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                        ) : (
                          <div className="w-4 h-4 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"></div>
                        )}
                      </div>
                      
                      <p className="text-slate-400 text-sm mb-3 leading-relaxed">{page.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <code className="text-xs text-slate-500 bg-slate-900/50 px-2 py-1 rounded font-mono">
                          {page.path}
                        </code>
                        
                        {page.path.startsWith('/') && !page.path.includes('#') ? (
                          <Link 
                            to={page.path}
                            className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                          >
                            Visit →
                          </Link>
                        ) : (
                          <a 
                            href={page.path}
                            className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                          >
                            Go →
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* XML Sitemap */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mt-12">
            <h2 className="text-2xl font-bold text-white mb-6 font-heading">XML Sitemap</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              For search engines and automated tools, we also provide an XML sitemap that contains 
              all our pages with metadata including last modification dates and update frequencies.
            </p>
            
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/30">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold">XML Sitemap Location</h3>
                <span className="bg-green-500/20 text-green-400 text-xs font-medium px-2 py-1 rounded-full border border-green-500/30">
                  Available
                </span>
              </div>
              
              <div className="flex items-center space-x-4">
                <code className="flex-1 text-cyan-400 bg-slate-800/50 px-4 py-2 rounded-lg font-mono text-sm">
                  https://techexzakt.com/sitemap.xml
                </code>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center space-x-2">
                  <ExternalLink className="w-4 h-4" />
                  <span>View</span>
                </button>
              </div>
            </div>
          </div>

          {/* Search Tips */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mt-8">
            <h2 className="text-2xl font-bold text-white mb-6 font-heading">Navigation Tips</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Quick Navigation</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• Use the main navigation menu for primary sections</li>
                  <li>• Footer links provide access to all resource pages</li>
                  <li>• Contact forms are available on multiple pages</li>
                  <li>• All pages are mobile-responsive and accessible</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Search & Discovery</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• Use browser search (Ctrl+F) to find specific content</li>
                  <li>• Check the Help Center for detailed guides</li>
                  <li>• Documentation includes searchable content</li>
                  <li>• Contact us if you can't find what you need</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact for Missing Content */}
          <div className="text-center mt-12 p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-4 font-heading">Can't Find What You're Looking For?</h2>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              If you can't find the information you need, please don't hesitate to contact us. 
              We're here to help and can guide you to the right resources.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/#contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Contact Us</span>
              </Link>
              
              <Link 
                to="/help-center"
                className="bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 border border-slate-700 hover:border-slate-600 flex items-center justify-center space-x-2"
              >
                <FileText className="w-5 h-5" />
                <span>Help Center</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;