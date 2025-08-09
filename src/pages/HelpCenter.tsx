import React, { useState } from 'react';
import { ArrowLeft, HelpCircle, MessageCircle, Phone, Mail, ChevronDown, ChevronRight, Book, Zap, Shield, Globe, Users, Settings, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HelpCenter: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { name: 'All', icon: Book, count: 24 },
    { name: 'Getting Started', icon: Zap, count: 6 },
    { name: 'Services', icon: Settings, count: 8 },
    { name: 'Billing', icon: Shield, count: 4 },
    { name: 'Technical', icon: Globe, count: 6 }
  ];

  const faqs = [
    {
      category: 'Getting Started',
      question: 'How do I get started with NxElite?',
      answer: 'Getting started is easy! Simply contact us through our website, phone, or email. We\'ll schedule a consultation to discuss your project requirements, timeline, and budget. Our team will then provide you with a detailed proposal and project roadmap.'
    },
    {
      category: 'Getting Started',
      question: 'What information do I need to provide for my project?',
      answer: 'We\'ll need details about your business goals, target audience, preferred timeline, budget range, and any specific features or requirements. Don\'t worry if you\'re not sure about everything - our team will guide you through the process.'
    },
    {
      category: 'Services',
      question: 'What web development services do you offer?',
      answer: 'We offer comprehensive web development services including custom website development, web applications, e-commerce solutions, CMS development, API integration, and ongoing maintenance and support.'
    },
    {
      category: 'Services',
      question: 'Do you provide UI/UX design services?',
      answer: 'Yes! Our design team specializes in creating beautiful, user-friendly interfaces. We provide wireframing, prototyping, visual design, user experience optimization, and design system creation.'
    },
    {
      category: 'Services',
      question: 'Can you help with branding and logo design?',
      answer: 'Absolutely! We offer complete branding services including logo design, brand identity development, color palette creation, typography selection, and brand guideline documentation.'
    },
    {
      category: 'Technical',
      question: 'What technologies do you use?',
      answer: 'We use modern, industry-standard technologies including React, Next.js, Node.js, TypeScript, MongoDB, PostgreSQL, AWS, and many others. We choose the best technology stack based on your project requirements.'
    },
    {
      category: 'Technical',
      question: 'Do you provide website maintenance?',
      answer: 'Yes, we offer ongoing maintenance and support services including security updates, performance optimization, content updates, bug fixes, and feature enhancements.'
    },
    {
      category: 'Technical',
      question: 'Will my website be mobile-friendly?',
      answer: 'Absolutely! All our websites are built with a mobile-first approach and are fully responsive, ensuring they look and work perfectly on all devices and screen sizes.'
    },
    {
      category: 'Billing',
      question: 'How do you structure your pricing?',
      answer: 'Our pricing is project-based and depends on the scope, complexity, and timeline. We provide detailed quotes after understanding your requirements. We offer flexible payment terms and milestone-based payments.'
    },
    {
      category: 'Billing',
      question: 'Do you require payment upfront?',
      answer: 'We typically require a 50% deposit to begin work, with the remaining balance due upon project completion. For larger projects, we can arrange milestone-based payments.'
    },
    {
      category: 'Getting Started',
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex web applications can take 2-6 months. We\'ll provide a detailed timeline during the planning phase.'
    },
    {
      category: 'Services',
      question: 'Do you offer internship programs?',
      answer: 'Yes! We offer comprehensive internship programs in various domains including web development, UI/UX design, digital marketing, and more. Interns work on real projects with mentorship from our experienced team.'
    }
  ];

  const quickActions = [
    {
      title: 'Start a Project',
      description: 'Ready to begin? Contact us to discuss your project',
      icon: Zap,
      color: 'from-cyan-500 to-blue-600',
      action: 'contact'
    },
    {
      title: 'View Portfolio',
      description: 'See our previous work and case studies',
      icon: Globe,
      color: 'from-purple-500 to-pink-600',
      action: 'portfolio'
    },
    {
      title: 'Get Support',
      description: 'Need help with an existing project?',
      icon: Users,
      color: 'from-green-500 to-emerald-600',
      action: 'support'
    }
  ];

  const contactMethods = [
    {
      title: 'Live Chat',
      description: 'Chat with our team in real-time',
      icon: MessageCircle,
      color: 'from-blue-500 to-cyan-600',
      availability: 'Mon-Fri 9AM-6PM',
      response: 'Instant'
    },
    {
      title: 'Phone Support',
      description: '+91 76009 78440',
      icon: Phone,
      color: 'from-green-500 to-emerald-600',
      availability: 'Mon-Fri 9AM-6PM',
      response: 'Immediate'
    },
    {
      title: 'Email Support',
      description: 'info@techexzakt.com',
      icon: Mail,
      color: 'from-purple-500 to-pink-600',
      availability: '24/7',
      response: 'Within 2 hours'
    }
  ];

  const filteredFaqs = activeCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const searchFilteredFaqs = searchQuery 
    ? filteredFaqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredFaqs;

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 ">
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-900 to-black border-b border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex items-center space-x-4 mb-4 sm:mb-6">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">Back to Home</span>
            </Link>
          </div>
          
          <div className="max-w-4xl">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white font-heading">
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                    Help Center
                  </span>
                </h1>
  
              </div>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              Get the help you need with our comprehensive support resources and FAQ section.
            </p>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        

        <div className="max-w-6xl mx-auto">

          <div className="grid lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-b from-black to-gray-900 backdrop-blur-xl border border-gray-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 sticky top-20 sm:top-24">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 font-heading">Categories</h3>
                <nav className="space-y-1 sm:space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveCategory(category.name)}
                      className={`w-full flex items-center justify-between p-2 sm:p-3 rounded-lg transition-all duration-300 text-left ${
                        activeCategory === category.name
                          ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                          : 'text-gray-400 hover:text-white hover:bg-slate-800/50'
                      }`}
                    >
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <category.icon className="w-4 h-4 flex-shrink-0" />
                        <span className="text-xs sm:text-sm font-medium">{category.name}</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        activeCategory === category.name
                          ? 'bg-yellow-500/30 text-yellow-300'
                          : 'bg-gray-700 text-gray-400'
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              {/* FAQ Section */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 font-heading">
                  Frequently Asked Questions
                </h2>
                
                {searchFilteredFaqs.length === 0 ? (
                  <div className="premium-card backdrop-blur-xl border border-slate-700/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center">
                    <HelpCircle className="w-12 h-12 sm:w-16 sm:h-16 text-slate-400 mx-auto mb-3 sm:mb-4" />
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 font-heading">No results found</h3>
                    <p className="text-slate-400 text-sm sm:text-base">Try adjusting your search or browse different categories.</p>
                  </div>
                ) : (
                  <div className="space-y-3 sm:space-y-4">
                    {searchFilteredFaqs.map((faq, index) => (
                      <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl sm:rounded-2xl overflow-hidden hover:border-yellow-500/30 transition-all duration-300">
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors"
                        >
                          <div className="flex-1 pr-4">
                            <div className="flex items-center space-x-2 sm:space-x-3 mb-1 sm:mb-2">
                              <span className="text-xs font-medium text-yellow-400 bg-cyan-400/10 px-2 py-1 rounded-full">
                                {faq.category}
                              </span>
                            </div>
                            <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white font-heading leading-tight">
                              {faq.question}
                            </h3>
                          </div>
                          <div className="flex-shrink-0">
                            {expandedFaq === index ? (
                              <ChevronDown className="w-5 h-5 text-gray-400" />
                            ) : (
                              <ChevronRight className="w-5 h-5 text-gray-400" />
                            )}
                          </div>
                        </button>
                        
                        {expandedFaq === index && (
                          <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                            <div className="border-t border-gray-700/50 pt-3 sm:pt-4">
                              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact Methods */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 font-heading">
                  Still Need Help?
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="premium-card backdrop-blur-xl border border-slate-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-cyan-500/30 transition-all duration-300 group">
                      <div className="text-center">
                        <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${method.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                          <method.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2 font-heading">{method.title}</h3>
                        <p className="text-slate-300 text-sm sm:text-base mb-2 sm:mb-3">{method.description}</p>
                        <div className="space-y-1">
                          <div className="flex items-center justify-center space-x-2">
                            <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400" />
                            <span className="text-slate-400 text-xs sm:text-sm">{method.availability}</span>
                          </div>
                          <div className="flex items-center justify-center space-x-2">
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                            <span className="text-green-400 text-xs sm:text-sm font-medium">{method.response}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
