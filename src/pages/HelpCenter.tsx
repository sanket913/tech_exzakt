import React, { useState } from 'react';
import { ArrowLeft, Search, MessageCircle, Phone, Mail, Clock, ChevronDown, ChevronRight, HelpCircle, Book, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const HelpCenter: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const categories = [
    {
      title: 'Getting Started',
      icon: Zap,
      color: 'from-cyan-500 to-blue-600',
      articles: 12
    },
    {
      title: 'Account & Billing',
      icon: Users,
      color: 'from-green-500 to-emerald-600',
      articles: 8
    },
    {
      title: 'Technical Support',
      icon: HelpCircle,
      color: 'from-purple-500 to-pink-600',
      articles: 15
    },
    {
      title: 'Project Management',
      icon: Book,
      color: 'from-orange-500 to-red-600',
      articles: 10
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with my project?',
      answer: 'Getting started is easy! Simply contact us through our contact form or give us a call. We\'ll schedule a consultation to discuss your requirements, timeline, and budget. Our team will then create a detailed project proposal for your review.'
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary depending on complexity and scope. Simple websites typically take 2-4 weeks, while complex web applications can take 6-12 weeks. We provide detailed timelines during the proposal phase and keep you updated throughout the development process.'
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes! We offer comprehensive support and maintenance packages. This includes regular updates, security patches, performance monitoring, and technical support. We believe in long-term partnerships with our clients.'
    },
    {
      question: 'Can you work with my existing brand guidelines?',
      answer: 'Absolutely! We can work with your existing brand guidelines and assets. If you don\'t have established guidelines, our design team can help create a comprehensive brand identity that aligns with your vision and goals.'
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'We specialize in modern web technologies including React, Next.js, Node.js, MongoDB, and various cloud platforms. Our team stays updated with the latest technologies to ensure we deliver cutting-edge solutions.'
    },
    {
      question: 'How do you handle project communication?',
      answer: 'We maintain transparent communication throughout the project. You\'ll have a dedicated project manager, regular progress updates, and access to our project management tools. We\'re available via email, phone, and video calls as needed.'
    }
  ];

  const contactOptions = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      color: 'from-cyan-500 to-blue-600',
      availability: 'Available 24/7'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      icon: Phone,
      color: 'from-green-500 to-emerald-600',
      availability: 'Mon-Fri 9AM-6PM'
    },
    {
      title: 'Email Support',
      description: 'Send us your questions anytime',
      icon: Mail,
      color: 'from-purple-500 to-pink-600',
      availability: 'Response within 2 hours'
    }
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

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
          
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-heading">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Help Center
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Find answers to your questions and get the support you need
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for help articles..."
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center font-heading">Browse by Category</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300 group cursor-pointer">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 font-heading">{category.title}</h3>
                <p className="text-slate-400 text-sm mb-3">{category.articles} articles</p>
                <div className="flex items-center text-cyan-400 text-sm font-medium">
                  <span>View articles</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-8 font-heading">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-800/30 transition-colors"
                  >
                    <h3 className="text-white font-medium font-heading pr-4">{faq.question}</h3>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-4">
                      <div className="border-t border-slate-700/50 pt-4">
                        <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Options */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-8 font-heading">Need More Help?</h2>
            <div className="space-y-6">
              {contactOptions.map((option, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 group cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${option.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0`}>
                      <option.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2 font-heading">{option.title}</h3>
                      <p className="text-slate-400 text-sm mb-2">{option.description}</p>
                      <div className="flex items-center text-xs text-slate-500">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{option.availability}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="mt-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4 font-heading">Support Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Average Response Time</span>
                  <span className="text-cyan-400 font-semibold"> 2 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Resolution Rate</span>
                  <span className="text-green-400 font-semibold">98%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Customer Satisfaction</span>
                  <span className="text-yellow-400 font-semibold">4.9/5</span>
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