import React from 'react';
import { ArrowLeft, FileText, Scale, AlertTriangle, CheckCircle, XCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      icon: CheckCircle,
      content: 'By accessing and using our website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
    },
    {
      title: 'Services Description',
      icon: FileText,
      content: 'Tech Exzakt provides web development, UI/UX design, branding, and IT consulting services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.'
    },
    {
      title: 'User Responsibilities',
      icon: Scale,
      content: 'Users are responsible for providing accurate information, maintaining the confidentiality of their account details, and using our services in compliance with applicable laws and regulations.'
    },
    {
      title: 'Intellectual Property',
      icon: AlertTriangle,
      content: 'All content, trademarks, and intellectual property on our website belong to Tech Exzakt. Users may not reproduce, distribute, or create derivative works without explicit written permission.'
    },
    {
      title: 'Limitation of Liability',
      icon: XCircle,
      content: 'Tech Exzakt shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services or website.'
    },
    {
      title: 'Termination',
      icon: Clock,
      content: 'We reserve the right to terminate or suspend access to our services immediately, without prior notice, for any reason whatsoever, including breach of these Terms of Service.'
    }
  ];

  const projectTerms = [
    'Project scope and deliverables will be defined in a separate agreement',
    'Payment terms and schedules will be specified in project contracts',
    'Intellectual property rights will be transferred upon full payment',
    'Revisions and changes may incur additional costs',
    'Project timelines are estimates and may vary based on complexity',
    'Client approval is required at key project milestones'
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
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading">
                  <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                    Terms of Service
                  </span>
                </h1>
                <p className="text-slate-400 mt-2">Last updated: January 2025</p>
              </div>
            </div>
            <p className="text-lg sm:text-xl text-slate-300">
              Please read these terms carefully before using our services. These terms govern your use of our website and services.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 font-heading">Agreement Overview</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              These Terms of Service ("Terms") govern your use of the Tech Exzakt IT Solutions website 
              and services. By using our services, you agree to these terms in full.
            </p>
            <p className="text-slate-300 leading-relaxed">
              These terms constitute a legally binding agreement between you and Tech Exzakt IT Solutions. 
              If you disagree with any part of these terms, you may not access our services.
            </p>
          </div>

          {/* Main Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white font-heading">{section.title}</h2>
                </div>
                
                <p className="text-slate-300 leading-relaxed ml-14">{section.content}</p>
              </div>
            ))}
          </div>

          {/* Project-Specific Terms */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mt-8">
            <h2 className="text-2xl font-bold text-white mb-6 font-heading">Project-Specific Terms</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              For project-based services, additional terms may apply as specified in individual project agreements:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {projectTerms.map((term, index) => (
                <div key={index} className="flex items-start space-x-3 bg-slate-800/30 rounded-lg p-4 border border-slate-700/30">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-300 text-sm">{term}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* Governing Law */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 font-heading">Governing Law</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of India.
              </p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Disputes will be resolved through arbitration</li>
                <li>• Indian courts have exclusive jurisdiction</li>
                <li>• English language version prevails</li>
              </ul>
            </div>

            {/* Changes to Terms */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 font-heading">Changes to Terms</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                We reserve the right to modify these terms at any time.
              </p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Changes will be posted on this page</li>
                <li>• Email notification for major changes</li>
                <li>• Continued use implies acceptance</li>
              </ul>
            </div>
          </div>

          {/* Prohibited Uses */}
          <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 backdrop-blur-xl border border-red-700/30 rounded-2xl p-8 mt-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white font-heading">Prohibited Uses</h2>
            </div>
            
            <p className="text-slate-300 leading-relaxed mb-6">
              You may not use our services for any unlawful purpose or to solicit others to perform unlawful acts. 
              Prohibited activities include but are not limited to:
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <ul className="space-y-2 text-slate-300">
                <li>• Violating any applicable laws or regulations</li>
                <li>• Infringing on intellectual property rights</li>
                <li>• Transmitting malicious code or viruses</li>
                <li>• Attempting to gain unauthorized access</li>
              </ul>
              <ul className="space-y-2 text-slate-300">
                <li>• Harassing or threatening other users</li>
                <li>• Posting false or misleading information</li>
                <li>• Engaging in fraudulent activities</li>
                <li>• Violating privacy of others</li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mt-8">
            <h2 className="text-2xl font-bold text-white mb-6 font-heading">Questions About These Terms?</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/30">
                <h4 className="text-white font-semibold mb-2">Email</h4>
                <p className="text-cyan-400">legal@techexzakt.com</p>
              </div>
              <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/30">
                <h4 className="text-white font-semibold mb-2">Phone</h4>
                <p className="text-cyan-400">+91 76009 78440</p>
              </div>
              <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/30">
                <h4 className="text-white font-semibold mb-2">Business Hours</h4>
                <p className="text-green-400">Mon-Fri 9AM-6PM</p>
              </div>
            </div>
          </div>

          {/* Effective Date */}
          <div className="text-center mt-8 p-6 bg-slate-800/30 rounded-xl border border-slate-700/30">
            <p className="text-slate-400">
              These Terms of Service are effective as of <span className="text-white font-semibold">January 15, 2025</span>
            </p>
            <p className="text-slate-500 text-sm mt-2">
              By using our services after this date, you agree to be bound by these terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;