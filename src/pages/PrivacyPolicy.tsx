import React from 'react';
import { ArrowLeft, Shield, Eye, Lock, Database, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  const sections = [
    {
      title: 'Information We Collect',
      icon: Database,
      content: [
        'Personal information you provide when contacting us (name, email, phone)',
        'Technical information about your device and browser',
        'Usage data about how you interact with our website',
        'Cookies and similar tracking technologies'
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: Users,
      content: [
        'To respond to your inquiries and provide our services',
        'To improve our website and user experience',
        'To send you relevant updates about our services (with your consent)',
        'To comply with legal obligations and protect our rights'
      ]
    },
    {
      title: 'Information Sharing',
      icon: Globe,
      content: [
        'We do not sell, trade, or rent your personal information to third parties',
        'We may share information with trusted service providers who assist us',
        'We may disclose information when required by law or to protect our rights',
        'Business transfers may involve sharing information with new owners'
      ]
    },
    {
      title: 'Data Security',
      icon: Lock,
      content: [
        'We implement industry-standard security measures',
        'All data transmission is encrypted using SSL technology',
        'Access to personal information is restricted to authorized personnel',
        'Regular security audits and updates are performed'
      ]
    }
  ];

  return (
    <div className="min-h-screen  bg-gradient-to-b from-black to-gray-900 ">
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-900 to-black border-b border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex items-center space-x-4 mb-6">
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
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white font-heading">
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                    Privacy Policy
                  </span>
                </h1>
                <p className="text-slate-400 mt-1 sm:mt-2 text-sm sm:text-base">Last updated: August 2025</p>
              </div>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="premium-card backdrop-blur-xl border border-slate-700/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 font-heading">Introduction</h2>
                <p className="text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                  NxElite IT Solutions ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                  when you visit our website or use our services.
                </p>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  By using our website or services, you agree to the collection and use of information 
                  in accordance with this policy. If you do not agree with our policies and practices, 
                  please do not use our services.
                </p>
              </div>
            </div>
          </div>

          {/* Main Sections */}
          <div className="space-y-6 sm:space-y-8">
            {sections.map((section, index) => (
              <div key={index} className="premium-card backdrop-blur-xl border border-slate-700/50 rounded-xl sm:rounded-2xl p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white font-heading">{section.title}</h2>
                </div>
                
                <ul className="space-y-2 sm:space-y-3 ml-0 sm:ml-16">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2 sm:space-x-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Last Updated */}
          <div className="text-center mt-6 sm:mt-8 p-4 sm:p-6 premium-card rounded-lg sm:rounded-xl border border-gray-700/30">
            <p className="text-gray-400 text-sm sm:text-base">
              This Privacy Policy was last updated on <span className="text-white font-semibold">August 01, 2025</span>
            </p>
            <p className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2">
              We may update this policy from time to time. We will notify you of any changes by posting the new policy on this page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
