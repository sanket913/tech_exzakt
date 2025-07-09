import React from 'react';
import { User, Linkedin, Twitter, Github, Mail } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Mann Kachhiya',
      role: 'Founder & CEO',
      description: 'Visionary leader with 5+ years of experience in technology and business development.',
      image: '/mann.jpeg', // Replace with actual image URL
      skills: ['Leadership', 'Strategy', 'Business Development'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'mann@techexzakt.com'
      }
    },
    {
      name: 'Sanket Prajapati',
      role: 'Co-Founder & CTO',
      description: 'Technical expert with deep expertise in modern web technologies and software architecture.',
      image: '/sanket.png',
      skills: ['Full-Stack Development', 'Architecture', 'DevOps'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'sanket@techexzakt.com'
      }
    }
  ];

  const stats = [
    { number: '10+', label: 'Team Members' },
    { number: '50+', label: 'Projects Completed' },
    { number: '5+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="team" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Meet Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Passionate professionals dedicated to delivering exceptional results and driving innovation
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-slate-300 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Team */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:border-cyan-500/30 transition-all duration-500">
                <div className="flex items-start space-x-6">
                  {/* Profile Image */}
                  <div className="relative flex-shrink-0">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-slate-700 group-hover:border-cyan-500/50 transition-colors duration-300">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-cyan-400 font-semibold mb-3">{member.role}</p>
                    <p className="text-slate-300 leading-relaxed mb-4">{member.description}</p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="text-xs text-slate-300 bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700">
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-3">
                      <a href={member.social.linkedin} className="w-8 h-8 bg-slate-800/50 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                        <Linkedin className="w-4 h-4 text-slate-400 hover:text-white" />
                      </a>
                      <a href={member.social.twitter} className="w-8 h-8 bg-slate-800/50 hover:bg-sky-500 rounded-lg flex items-center justify-center transition-colors duration-300">
                        <Twitter className="w-4 h-4 text-slate-400 hover:text-white" />
                      </a>
                      <a href={member.social.github} className="w-8 h-8 bg-slate-800/50 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-300">
                        <Github className="w-4 h-4 text-slate-400 hover:text-white" />
                      </a>
                      <a href={`mailto:${member.social.email}`} className="w-8 h-8 bg-slate-800/50 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                        <Mail className="w-4 h-4 text-slate-400 hover:text-white" />
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
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">Our Team Culture</h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              We believe in collaboration, continuous learning, and pushing the boundaries of what's possible. 
              Our diverse team of 10+ professionals brings together expertise in development, design, strategy, 
              and project management to deliver exceptional results for every client.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">🚀</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Innovation First</h4>
                <p className="text-slate-400 text-sm">Always exploring new technologies and approaches</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">🤝</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Collaboration</h4>
                <p className="text-slate-400 text-sm">Working together to achieve extraordinary results</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">💡</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Continuous Learning</h4>
                <p className="text-slate-400 text-sm">Growing our skills to stay ahead of the curve</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;