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
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading">
                  <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                    Privacy Policy
                  </span>
                </h1>
                <p className="text-slate-400 mt-2">Last updated: January 2025</p>
              </div>
            </div>
            <p className="text-lg sm:text-xl text-slate-300">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mb-8">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 font-heading">Introduction</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Tech Exzakt IT Solutions ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                  when you visit our website or use our services.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  By using our website or services, you agree to the collection and use of information 
                  in accordance with this policy. If you do not agree with our policies and practices, 
                  please do not use our services.
                </p>
              </div>
            </div>
          </div>

          {/* Main Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white font-heading">{section.title}</h2>
                </div>
                
                <ul className="space-y-3 ml-14">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-300 leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional Sections */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* Your Rights */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 font-heading">Your Rights</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Access your personal information</li>
                <li>• Correct inaccurate data</li>
                <li>• Request deletion of your data</li>
                <li>• Opt-out of marketing communications</li>
                <li>• Data portability</li>
              </ul>
            </div>

            {/* Cookies */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 font-heading">Cookies & Tracking</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Essential cookies for website functionality</li>
                <li>• Analytics cookies to improve our services</li>
                <li>• You can control cookie preferences</li>
                <li>• Third-party cookies may be used</li>
                <li>• No tracking without consent</li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mt-8">
            <h2 className="text-2xl font-bold text-white mb-6 font-heading">Contact Us</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/30">
                <h4 className="text-white font-semibold mb-2">Email</h4>
                <p className="text-cyan-400">privacy@techexzakt.com</p>
              </div>
              <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/30">
                <h4 className="text-white font-semibold mb-2">Phone</h4>
                <p className="text-cyan-400">+91 76009 78440</p>
              </div>
              <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/30">
                <h4 className="text-white font-semibold mb-2">Response Time</h4>
                <p className="text-green-400">Within 48 hours</p>
              </div>
            </div>
          </div>

          {/* Last Updated */}
          <div className="text-center mt-8 p-6 bg-slate-800/30 rounded-xl border border-slate-700/30">
            <p className="text-slate-400">
              This Privacy Policy was last updated on <span className="text-white font-semibold">January 15, 2025</span>
            </p>
            <p className="text-slate-500 text-sm mt-2">
              We may update this policy from time to time. We will notify you of any changes by posting the new policy on this page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;