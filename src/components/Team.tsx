import React from 'react';
import { User, Linkedin, Github, Mail, Globe } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
    name: 'Dhruv Kachhiya',
    role: 'Chief Executive Officer (CEO)',
    description: 'Dynamic executive with 7+ years of driving innovation, leading cross-functional teams, and scaling business operations in tech.',
    image: '/dhruv.jpeg', // Replace with actual image path
    skills: ['Leadership', 'Innovation', 'Business Strategy', 'Operations'],
    social: {
      linkedin: 'https://www.linkedin.com/in/dhruv-kachhiya-2537681b9/',
      website: 'https://dhruvkachhiya.com', // Personal website
      email: 'mann@gmail.com'
    }
  },
    {
      name: 'Mann Kachhiya',
      role: 'Founder',
      description: 'Visionary leader with 3+ years of experience in technology and business development.',
      image: '/mann.jpeg', // Replace with actual image URL
      skills: ['Leadership', 'Strategy', 'Business Development'],
      social: {
        linkedin: 'https://www.linkedin.com/in/mann-kachhiya/',
        website: '#',
        email: 'mann@gmail.com'
      }
    },
    {
      name: 'Sanket Prajapati',
      role: 'Co-Founder & CTO',
      description: 'Technical expert in modern web technologies and software architecture.',
      image: '/sanket.png',
      skills: ['Full-Stack Development', 'Architecture', 'DevOps'],
      social: {
        linkedin: 'https://www.linkedin.com/in/sanket-prajapati27/',
        github: 'https://github.com/sanket913',
        email: 'sanket2742003@gmail.com'
      }
    }
  ];

  const stats = [
    { number: '10+', label: 'Team Members' },
    { number: '25+', label: 'Projects Completed' },
    { number: '5+', label: 'Years Experience' },
    { number: '96%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="team" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Meet Our <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Passionate professionals dedicated to delivering exceptional results and driving innovation
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="premium-card rounded-2xl p-6">
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-slate-300 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Team */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="group h-full">
              <div className="premium-card flex flex-col justify-between h-full backdrop-blur-xl border border-gray-700/50 rounded-3xl p-4 sm:p-6 lg:p-8 hover:border-yellow-500/30 transition-all duration-500">
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                  {/* Profile Image */}
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-slate-700 group-hover:border-yellow-500/50 transition-colors duration-300">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 premium-gradient rounded-lg flex items-center justify-center">
                      <User className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-yellow-400 font-semibold mb-3 text-sm sm:text-base">{member.role}</p>
                    {/* Hide description on mobile, show on larger screens */}
                    <p className="hidden lg:block text-gray-300 leading-relaxed mb-4 text-sm lg:text-base">{member.description}</p>

                    {/* Skills */}
                    <div className="flex flex-wrap justify-center sm:justify-start gap-1 sm:gap-2 mb-4">
                      {member.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="text-xs text-slate-300 bg-gray-800/50 px-2 sm:px-3 py-1 rounded-full border border-slate-700">
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center sm:justify-start space-x-2 sm:space-x-3">
                      <a href={member.social.linkedin} className="w-7 h-7 sm:w-8 sm:h-8 bg-slate-800/50 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                        <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400 hover:text-white" />
                      </a>
                      <a href={member.social.website || member.social.github} className="w-7 h-7 sm:w-8 sm:h-8 bg-slate-800/50 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-300">
                        {member.social.website ? (
                          <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400 hover:text-white" />
                        ) : (
                          <Github className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400 hover:text-white" />
                        )}
                      </a>
                      <a href={`mailto:${member.social.email}`} className="w-7 h-7 sm:w-8 sm:h-8 bg-slate-800/50 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                        <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400 hover:text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Culture */}
        <div className="text-center">
          <div className="premium-card backdrop-blur-xl border border-gray-700/50 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Our Team Culture</h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              We believe in collaboration, continuous learning, and pushing the boundaries of what's possible. 
              Our diverse team of 10+ professionals brings together expertise in development, design, strategy, 
              and project management to deliver exceptional results for every client.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <span className="text-white font-bold text-sm sm:text-base">🚀</span>
                </div>
                <h4 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Innovation First</h4>
                <p className="text-slate-400 text-xs sm:text-sm">Always exploring new technologies and approaches</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <span className="text-white font-bold text-sm sm:text-base">🤝</span>
                </div>
                <h4 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Collaboration</h4>
                <p className="text-slate-400 text-xs sm:text-sm">Working together to achieve extraordinary results</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <span className="text-white font-bold text-sm sm:text-base">💡</span>
                </div>
                <h4 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Continuous Learning</h4>
                <p className="text-slate-400 text-xs sm:text-sm">Growing our skills to stay ahead of the curve</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
