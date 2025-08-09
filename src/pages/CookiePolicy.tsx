import React, { useState } from 'react';
import { ArrowLeft, Cookie, Settings, Eye, BarChart, Shield, Globe, CheckCircle, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookiePolicy: React.FC = () => {
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: true,
    marketing: false,
    functional: true
  });

  const cookieTypes = [
    {
      title: 'Essential Cookies',
      icon: Shield,
      color: 'from-green-500 to-emerald-600',
      required: true,
      description: 'These cookies are necessary for the website to function and cannot be switched off.',
      examples: ['Session management', 'Security features', 'Load balancing', 'Form submissions'],
      duration: 'Session or up to 1 year'
    },
    {
      title: 'Analytics Cookies',
      icon: BarChart,
      color: 'from-blue-500 to-cyan-600',
      required: false,
      description: 'These cookies help us understand how visitors interact with our website.',
      examples: ['Google Analytics', 'Page views', 'User behavior', 'Performance metrics'],
      duration: 'Up to 2 years'
    },
    {
      title: 'Marketing Cookies',
      icon: Eye,
      color: 'from-purple-500 to-pink-600',
      required: false,
      description: 'These cookies are used to deliver relevant advertisements and track campaign effectiveness.',
      examples: ['Ad targeting', 'Social media pixels', 'Retargeting', 'Campaign tracking'],
      duration: 'Up to 1 year'
    },
    {
      title: 'Functional Cookies',
      icon: Settings,
      color: 'from-orange-500 to-red-600',
      required: false,
      description: 'These cookies enable enhanced functionality and personalization.',
      examples: ['Language preferences', 'Theme settings', 'Chat widgets', 'Video players'],
      duration: 'Up to 1 year'
    }
  ];

  const handlePreferenceChange = (type: string) => {
    if (type === 'essential') return; // Essential cookies cannot be disabled
    
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type as keyof typeof prev]
    }));
  };

  const savePreferences = () => {
    // In a real application, you would save these preferences
    alert('Cookie preferences saved successfully!');
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
          
          <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                <Cookie className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading">
                  <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                    Cookie Policy
                  </span>
                </h1>
                <p className="text-slate-400 mt-2">Last updated: January 2025</p>
              </div>
            </div>
            <p className="text-lg sm:text-xl text-slate-300">
              Learn about how we use cookies and similar technologies to improve your browsing experience.
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
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 font-heading">What Are Cookies?</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better browsing experience by remembering your preferences 
                  and analyzing how you use our site.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  We use both first-party cookies (set by our website) and third-party cookies (set by external services) 
                  to enhance functionality and provide analytics.
                </p>
              </div>
            </div>
          </div>

          {/* Cookie Types */}
          <div className="space-y-8 mb-8">
            <h2 className="text-2xl font-bold text-white text-center font-heading">Types of Cookies We Use</h2>
            
            {cookieTypes.map((type, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <type.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-bold text-white font-heading">{type.title}</h3>
                        {type.required && (
                          <span className="bg-green-500/20 text-green-400 text-xs font-medium px-2 py-1 rounded-full border border-green-500/30">
                            Required
                          </span>
                        )}
                      </div>
                      <p className="text-slate-300 leading-relaxed mb-4">{type.description}</p>
                      <p className="text-slate-400 text-sm mb-4">
                        <strong>Duration:</strong> {type.duration}
                      </p>
                    </div>
                  </div>
                  
                  {/* Toggle Switch */}
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => handlePreferenceChange(type.title.toLowerCase().split(' ')[0])}
                      disabled={type.required}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        cookiePreferences[type.title.toLowerCase().split(' ')[0] as keyof typeof cookiePreferences]
                          ? 'bg-cyan-600' 
                          : 'bg-slate-600'
                      } ${type.required ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          cookiePreferences[type.title.toLowerCase().split(' ')[0] as keyof typeof cookiePreferences]
                            ? 'translate-x-6' 
                            : 'translate-x-1'
                        }`}
                      />
                    </button>
                    {cookiePreferences[type.title.toLowerCase().split(' ')[0] as keyof typeof cookiePreferences] ? (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-400" />
                    )}
                  </div>
                </div>
                
                {/* Examples */}
                <div className="ml-16">
                  <h4 className="text-white font-semibold mb-3">Examples:</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {type.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center space-x-2 bg-slate-800/30 rounded-lg p-3 border border-slate-700/30">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                        <span className="text-slate-300 text-sm">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cookie Preferences */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 font-heading">Manage Your Cookie Preferences</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              You can control which cookies you accept by adjusting the settings above. 
              Please note that disabling certain cookies may affect the functionality of our website.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={savePreferences}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Settings className="w-5 h-5" />
                <span>Save Preferences</span>
              </button>
              
              <button
                onClick={() => setCookiePreferences({ essential: true, analytics: false, marketing: false, functional: false })}
                className="bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 border border-slate-700 hover:border-slate-600"
              >
                Accept Essential Only
              </button>
              
              <button
                onClick={() => setCookiePreferences({ essential: true, analytics: true, marketing: true, functional: true })}
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Accept All Cookies
              </button>
            </div>
          </div>

          {/* Third-Party Cookies */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 font-heading">Third-Party Cookies</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              We may use third-party services that set their own cookies. These services include:
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/30">
                <h4 className="text-white font-semibold mb-2">Google Analytics</h4>
                <p className="text-slate-400 text-sm mb-2">Website analytics and performance tracking</p>
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-cyan-400 text-sm hover:underline">
                  Privacy Policy
                </a>
              </div>
              
              <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/30">
                <h4 className="text-white font-semibold mb-2">Social Media</h4>
                <p className="text-slate-400 text-sm mb-2">Social sharing and embedded content</p>
                <span className="text-slate-500 text-sm">Various providers</span>
              </div>
              
              <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/30">
                <h4 className="text-white font-semibold mb-2">CDN Services</h4>
                <p className="text-slate-400 text-sm mb-2">Content delivery and performance</p>
                <span className="text-slate-500 text-sm">Various providers</span>
              </div>
            </div>
          </div>

          {/* Browser Settings */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 font-heading">Browser Cookie Settings</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              You can also manage cookies through your browser settings. Here's how to do it in popular browsers:
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/30">
                  <h4 className="text-white font-semibold mb-2">Chrome</h4>
                  <p className="text-slate-400 text-sm">Settings → Privacy and security → Cookies and other site data</p>
                </div>
                
                <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/30">
                  <h4 className="text-white font-semibold mb-2">Firefox</h4>
                  <p className="text-slate-400 text-sm">Options → Privacy & Security → Cookies and Site Data</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/30">
                  <h4 className="text-white font-semibold mb-2">Safari</h4>
                  <p className="text-slate-400 text-sm">Preferences → Privacy → Manage Website Data</p>
                </div>
                
                <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/30">
                  <h4 className="text-white font-semibold mb-2">Edge</h4>
                  <p className="text-slate-400 text-sm">Settings → Cookies and site permissions → Cookies and site data</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 font-heading">Questions About Cookies?</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              If you have any questions about our use of cookies, please contact us:
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
                <p className="text-green-400">Within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Last Updated */}
          <div className="text-center mt-8 p-6 bg-slate-800/30 rounded-xl border border-slate-700/30">
            <p className="text-slate-400">
              This Cookie Policy was last updated on <span className="text-white font-semibold">January 15, 2025</span>
            </p>
            <p className="text-slate-500 text-sm mt-2">
              We may update this policy from time to time to reflect changes in our practices or applicable laws.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;