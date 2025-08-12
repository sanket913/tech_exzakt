import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Mail, Linkedin, Star, Code, BookOpen} from 'lucide-react';

const TeamMember: React.FC = () => {
  const { memberId } = useParams<{ memberId: string }>();

  // Team member data - in a real app, this would come from an API or database
  const teamMembers: { [key: string]: any } = {
    'dhruv-kachhiya': {
      name: 'Dhruv Kachhiya',
      title: 'Chief Executive Officer (CEO)',
      subtitle: '7+ Years Experience | M.Tech IIT Bombay | EV Charger Development',
      location: 'Bengaluru, Karnataka, India',
      image: '/dhruv.jpeg',
      about: `I'm a hardware design engineer with 3+ years of experience in power electronics, embedded systems, and EV charger development. I currently work at Ola Electric, where I contribute to the design, layout, and validation of SMPS-based vehicle chargers and embedded control systems using TI C2000 microcontrollers.

I hold an M.Tech in Power Electronics from IIT Bombay, where I was honored with the Academic Excellence Award and the Best Thesis Award from the Electrical Engineering Department for my work on fault-tolerant converter design.

My career began at Siemens Energy, where I worked on the manufacturing and testing of gas-insulated switchgear (GIS), performing high-voltage tests, root cause analysis, and process automation. I bring strong technical skills in PCB design (KiCad, Allegro, OrCAD), embedded C programming, control systems, and simulation tools like PLECS, Simulink, and LTSpice.

I'm passionate about designing robust, efficient hardware that powers innovation in clean energy and electric mobility.`,
      skills: {
        'PCB Design Tools': ['KiCad', 'Allegro', 'OrCAD'],
        'Programming': ['Embedded C', 'TI C2000', 'Control Systems'],
        'Simulation Tools': ['PLECS', 'Simulink', 'LTSpice'],
        'Power Electronics': ['SMPS Design', 'EV Chargers', 'Fault Diagnosis'],
        'Testing & Validation': ['High-Voltage Testing', 'Root Cause Analysis', 'Process Automation'],
        'Systems': ['Embedded Systems', 'GIS Systems', 'Control Systems']
      },
      publications: [
        {
          title: 'Open Circuit Fault-Diagnosis and Fault-Tolerant Operation of ANPC',
          venue: '2024 IEEE International Communications Energy Conference (INTELEC)',
          date: 'Aug 5, 2024',
        }
      ],
      social: {
        email: 'dhruv@nxelite.in',
        linkedin: 'https://www.linkedin.com/in/dhruv-kachhiya-2537681b9/',
      },
      stats: {
        experience: '3+',
        projects: '15+',
        publications: '1',
        awards: '2'
      }
    },
    'sanket-prajapati': {
      name: 'Sanket Prajapati',
      title: 'Co-Founder and CTO',
      subtitle: '3+ Years Experience | B.Tech IT | MERN Stack | React.js & PHP Development',
      location: 'Vadodara, Gujarat, India',
      image: '/sanket.png',
      about: `I am a passionate and detail-oriented Full Stack Web Developer with internship experience in building dynamic and responsive web applications using modern technologies like React.js, Next.js, Node.js, and MongoDB. I have also worked with PHP and Stripe integrations, gaining hands-on exposure to both frontend and backend development.

I hold a B.Tech in Information Technology from Parul University, where I honed my skills in MERN Stack development, cloud-based authentication (Clerk), and payment gateway integration. I have experience developing scalable applications, implementing secure user authentication, and managing databases efficiently.

I am eager to contribute my skills to innovative projects and collaborate with teams that value clean, maintainable code and continuous learning.`,
      skills: {
        'Frontend': ['React.js', 'Next.js', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Tailwind CSS', 'Bootstrap'],
        'Backend': ['Node.js', 'Express.js', 'PHP'],
        'Databases': ['MongoDB', 'MySQL'],
        'Other Tools and Technologies': ['Clerk Authentication','Stripe Payment Integration','RESTful APIs', 'Git & GitHub'],
      },
      social: {
        email: 'sanket@nxelite.in',
        linkedin: 'https://www.linkedin.com/in/sanket-prajapati27/',
      },
      stats: {
        experience: '3+',
        projects: '10+',
        publications: null,
        awards: null
      }
    },
    'mann-kachhiya': {
  name: 'Mann Kachhiya',
  title: 'Web Developer & Full-Stack Developer',
  subtitle: 'B.Tech IT | PHP & MySQL | Full-Stack Development | API Integration',
  location: 'Vadodara, Gujarat, India',
  image: '/mann.jpeg',
  about: `I am a passionate Web Developer with hands-on experience in building functional and visually appealing web applications. My expertise spans full-stack development, API integration, and database management. 

I hold a Diploma in IT from Gujarat Technological University and am currently pursuing my B.Tech in Information Technology at Parul University. Beyond technology, I am also a certified Classical Musician (Sangeet Visharad), blending creativity with technical problem-solving.

During my internships, I worked on multiple client projects involving PHP, MySQL, Python, and API integrations, delivering seamless and efficient solutions. I enjoy creating platforms that are both user-friendly and scalable.`,
  skills: {
    'Programming Languages': ['JavaScript', 'PHP', 'C', 'Python'],
    'Web Technologies': ['HTML', 'CSS', 'MySQL', 'API Integration'],
    'Other Tools and Technologies': ['Microsoft Office', 'Web Design', 'Data Structures', 'IoT Development'],
  },
  
  
  social: {
    email: 'mannkapatel1@gmail.com',
    linkedin: 'https://www.linkedin.com/in/mann-kachhiya'
  },
  stats: {
    experience: '1+',
    projects: '5+',
    publications: null,
    awards: null
  }
}

  };

  const member = teamMembers[memberId || ''];

  if (!member) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">Team Member Not Found</h1>
          <Link to="/team" className="text-yellow-400 hover:text-yellow-300 transition-colors">
            ← Back to Team
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-900 to-black border-b border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex items-center space-x-4 mb-6">
            <Link 
              to="/#team" 
              className="flex items-center space-x-2 text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">Back to Team</span>
            </Link>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Profile Section */}
            <div className="lg:col-span-1">
              <div className="premium-card backdrop-blur-xl border border-gray-700/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-gray-700 hover:border-yellow-500/50 transition-colors duration-300 mx-auto">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                  </div>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 font-heading">{member.name}</h1>
                <p className="text-yellow-400 font-semibold text-base sm:text-lg mb-2">{member.title}</p>
                <p className="text-gray-300 text-sm sm:text-base mb-4">{member.subtitle}</p>
                
                <div className="flex items-center justify-center space-x-2 text-gray-400 mb-6">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm sm:text-base">{member.location}</span>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4 mb-6">
                  <a href={`mailto:${member.social.email}`} className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-800/50 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-300">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 hover:text-white" />
                  </a>
                  <a href={member.social.linkedin} className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-800/50 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300">
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 hover:text-white" />
                  </a>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="premium-card rounded-xl p-3 sm:p-4 border border-slate-700/30">
                    <div className="text-lg sm:text-xl font-bold text-white">{member.stats.experience}</div>
                    <div className="text-slate-400 text-xs sm:text-sm">Years Exp.</div>
                  </div>
                  <div className="premium-card rounded-xl p-3 sm:p-4 border border-slate-700/30">
                    <div className="text-lg sm:text-xl font-bold text-white">{member.stats.projects}</div>
                    <div className="text-slate-400 text-xs sm:text-sm">Projects</div>
                  </div>
                  <div className="premium-card rounded-xl p-3 sm:p-4 border border-slate-700/30">
                    <div className="text-lg sm:text-xl font-bold text-white">{member.stats.publications}</div>
                    <div className="text-slate-400 text-xs sm:text-sm">Publications</div>
                  </div>
                  <div className="premium-card rounded-xl p-3 sm:p-4 border border-slate-700/30">
                    <div className="text-lg sm:text-xl font-bold text-white">{member.stats.awards}</div>
                    <div className="text-slate-400 text-xs sm:text-sm">Awards</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              {/* About */}
              <div className="premium-card backdrop-blur-xl border border-gray-700/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
                <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white font-heading">About</h2>
                </div>
                <div className="text-slate-300 leading-relaxed text-sm sm:text-base space-y-4">
                  {member.about.split('\n\n').map((paragraph: string, index: number) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Technical Skills */}
              <div className="premium-card backdrop-blur-xl border border-gray-700/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
                <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 premium-gradient rounded-xl flex items-center justify-center">
                    <Code className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white font-heading">Technical Skills</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {Object.entries(member.skills).map(([category, skills]) => (
                    <div key={category} className="premium-card rounded-xl p-4 sm:p-5 border border-gray-700/30">
                      <h3 className="text-white font-semibold mb-3 text-sm sm:text-base">{category}:</h3>
                      <div className="space-y-2">
                        {(skills as string[]).map((skill, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full flex-shrink-0"></div>
                            <span className="text-slate-300 text-xs sm:text-sm">{skill}</span>
                          </div>
                        ))}
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

export default TeamMember;