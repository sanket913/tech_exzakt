import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const services = [
    'Web Development',
    'UI/UX Design',
    'Brand Identity',
    'E-commerce Solutions',
    'IT Consulting',
    'Mobile Development'
  ];

  const company = [
    'About Us',
    'Our Team',
    'Portfolio',
    'Process',
    'Careers',
    'Blog'
  ];

  const resources = [
    'Documentation',
    'Help Center',
    'Privacy Policy',
    'Terms of Service',
    'Cookie Policy',
    'Sitemap'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-400' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
    { icon: Github, href: '#', color: 'hover:text-gray-400' }
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-black to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900 to-black"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="/header.png" // or .png if that's the actual format
                  alt="Tech Exzakt"
                  className="w-24 sm:w-28 md:w-32 lg:w-36 object-contain transition-all duration-300"
                />
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Transforming ideas into powerful digital experiences. We deliver innovative solutions 
                that drive business growth and success.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg flex items-center justify-center text-slate-400 ${social.color} transition-all duration-300 hover:scale-110`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href="#" className="text-slate-300 hover:text-yellow-400 transition-colors duration-300 flex items-center group">
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="group-hover:translate-x-2 transition-transform duration-300">{service}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
              <ul className="space-y-3">
                {company.map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-slate-300 hover:text-yellow-400 transition-colors duration-300 flex items-center group">
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="group-hover:translate-x-2 transition-transform duration-300">{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Resources</h4>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <a href="#" className="text-slate-300 hover:text-yellow-400 transition-colors duration-300 flex items-center group">
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="group-hover:translate-x-2 transition-transform duration-300">{resource}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="premium-card backdrop-blur-sm rounded-2xl p-8 mb-8 border border-slate-700/30">
            <h4 className="text-2xl font-bold text-white text-center mb-8">Get In Touch</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center group">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-semibold mb-1">+91 76009 78440</p>
                <p className="text-slate-400 text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-semibold mb-1">info@nxelite.in</p>
                <p className="text-slate-400 text-sm">We reply within 24 hours</p>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-semibold mb-1">Remote Team</p>
                <p className="text-slate-400 text-sm">Available worldwide</p>
              </div>
            </div>
          </div>

      
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-center md:text-left">
              <p>© 2025 Tech Exzakt IT Solutions. All rights reserved.</p>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>Designed with ❤️ by Tech Exzakt Team</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
