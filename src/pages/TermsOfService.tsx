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
      content: 'NxElite provides web development, UI/UX design, branding, and IT consulting services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.'
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
      content: 'NxElite shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services or website.'
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
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
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
                <Scale className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white font-heading">
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                    Terms of Service
                  </span>
                </h1>
                <p className="text-gray-400 mt-1 sm:mt-2 text-sm sm:text-base">Last updated: August 2025</p>
              </div>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              Please read these terms carefully before using our services. These terms govern your use of our website and services.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="premium-card backdrop-blur-xl border border-gray-700/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 font-heading">Agreement Overview</h2>
            <p className="text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
              These Terms of Service ("Terms") govern your use of the NxElite IT Solutions website 
              and services. By using our services, you agree to these terms in full.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              These terms constitute a legally binding agreement between you and NxElite IT Solutions.
              If you disagree with any part of these terms, you may not access our services.
            </p>
          </div>

          {/* Main Sections */}
          <div className="space-y-6 sm:space-y-8">
            {sections.map((section, index) => (
              <div key={index} className="premium-card backdrop-blur-xl border border-gray-700/50 rounded-xl sm:rounded-2xl p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white font-heading">{section.title}</h2>
                </div>
                
                <p className="text-slate-300 leading-relaxed ml-0 sm:ml-16 text-sm sm:text-base">{section.content}</p>
              </div>
            ))}
          </div>

          {/* Project-Specific Terms */}
          <div className="premium-card backdrop-blur-xl border border-gray-700/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 mt-6 sm:mt-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 font-heading">Project-Specific Terms</h2>
            <p className="text-slate-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              For project-based services, additional terms may apply as specified in individual project agreements:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {projectTerms.map((term, index) => (
                <div key={index} className="flex items-start space-x-2 sm:space-x-3 bg-slate-800/30 rounded-lg p-3 sm:p-4 border border-slate-700/30 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{term}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8">
            {/* Governing Law */}
            <div className="premium-card backdrop-blur-xl border border-gray-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 font-heading">Governing Law</h3>
              <p className="text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                These Terms shall be governed by and construed in accordance with the laws of India.
              </p>
              <ul className="space-y-1 sm:space-y-2 text-gray-300 text-xs sm:text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>Disputes will be resolved through arbitration</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>Indian courts have exclusive jurisdiction</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>English language version prevails</span>
                </li>
              </ul>
            </div>

            {/* Changes to Terms */}
            <div className="premium-card backdrop-blur-xl border border-gray-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 font-heading">Changes to Terms</h3>
              <p className="text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                We reserve the right to modify these terms at any time.
              </p>
              <ul className="space-y-1 sm:space-y-2 text-gray-300 text-xs sm:text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>Changes will be posted on this page</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>Email notification for major changes</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>Continued use implies acceptance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Prohibited Uses */}
          <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 backdrop-blur-xl border border-red-700/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 mt-6 sm:mt-8">
            <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-heading">Prohibited Uses</h2>
            </div>
            
            <p className="text-slate-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              You may not use our services for any unlawful purpose or to solicit others to perform unlawful acts. 
              Prohibited activities include but are not limited to:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <ul className="space-y-1 sm:space-y-2 text-slate-300 text-sm sm:text-base">
                <li className="flex items-start space-x-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Violating any applicable laws or regulations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Infringing on intellectual property rights</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Transmitting malicious code or viruses</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Attempting to gain unauthorized access</span>
                </li>
              </ul>
              <ul className="space-y-1 sm:space-y-2 text-slate-300 text-sm sm:text-base">
                <li className="flex items-start space-x-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Harassing or threatening other users</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Posting false or misleading information</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Engaging in fraudulent activities</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Violating privacy of others</span>
                </li>
              </ul>
            </div>
          </div>

          

          {/* Effective Date */}
          <div className="text-center mt-6 sm:mt-8 p-4 sm:p-6 premium-card rounded-lg sm:rounded-xl border border-gray-700/30">
            <p className="text-gray-400 text-sm sm:text-base">
              These Terms of Service are effective as of <span className="text-white font-semibold">August 01, 2025</span>
            </p>
            <p className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2">
              By using our services after this date, you agree to be bound by these terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
