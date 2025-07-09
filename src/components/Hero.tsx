import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Sparkles, Zap, Globe, Code2, Star, Rocket } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 lg:pt-24">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-900/20 to-blue-900/30"></div>
        
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 gradient-animation"></div>
        </div>
        
        {/* Interactive light effect */}
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-emerald-400/30 to-transparent rounded-full blur-3xl transition-all duration-500 animate-pulse-slow"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
        
        {/* Secondary interactive light */}
        <div 
          className="absolute w-64 h-64 bg-gradient-radial from-blue-400/20 to-transparent rounded-full blur-2xl transition-all duration-700"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
            transform: `rotate(${mousePosition.x * 0.1}deg)`,
          }}
        ></div>
        
        {/* Geometric patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 border border-emerald-500/20 rounded-full animate-spin-slow"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-blue-500/20 rotate-45 animate-bounce-slow"></div>
          <div className="absolute bottom-32 left-16 w-20 h-20 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-lg animate-float"></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-emerald-400/30 rounded-full animate-pulse-slow"></div>
        </div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-6 sm:space-y-8">

              {/* Main Heading */}
              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <h1 className="hero-title font-black text-white mb-4 sm:mb-6 leading-tight font-heading text-shadow-lg">
                  Craft Digital
                  <span className="block tech-gradient-text animate-pulse-slow">
                    Experiences
                  </span>
                  That <span className="relative">
                    Matter
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg blur opacity-20 animate-pulse"></div>
                  </span>
                </h1>
              </div>

              {/* Subheading */}
              <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl font-light mx-auto lg:mx-0">
                  We transform ambitious ideas into powerful digital solutions. Our expert team delivers 
                  cutting-edge web development, stunning designs, and strategic IT consulting.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-12 animate-fade-in-up justify-center lg:justify-start" style={{ animationDelay: '0.6s' }}>
                <button className="group bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 flex items-center justify-center space-x-3 font-heading text-base sm:text-lg transform hover:scale-105">
                  <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
                </button>
                 <button 
                  onClick={handleViewPortfolio}
                  className="group glass-effect text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold border border-emerald-500/30 hover:border-emerald-500/50 transition-all duration-300 flex items-center justify-center space-x-3 font-heading text-base sm:text-lg transform hover:scale-105"
                >
                  <Eye className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>View Portfolio</span>
                </button>
              </div>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                <div className="text-center lg:text-left group">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-black tech-gradient-text font-heading">50+</div>
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 ml-2 animate-pulse" />
                  </div>
                  <div className="text-slate-400 font-medium font-body text-sm sm:text-base">Projects</div>
                </div>
                <div className="text-center lg:text-left group">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-black tech-gradient-text font-heading">10+</div>
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 ml-2 animate-pulse" />
                  </div>
                  <div className="text-slate-400 font-medium font-body text-sm sm:text-base">Experts</div>
                </div>
                <div className="text-center lg:text-left group">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-black tech-gradient-text font-heading">24/7</div>
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 ml-2 animate-pulse" />
                  </div>
                  <div className="text-slate-400 font-medium font-body text-sm sm:text-base">Support</div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative animate-fade-in-up mt-8 lg:mt-0" style={{ animationDelay: '1s' }}>
              <div className="relative w-full max-w-lg mx-auto">
                {/* Main Interactive Card */}
                <div className="glass-effect rounded-3xl p-6 sm:p-8 shadow-2xl border border-emerald-500/20 transform hover:scale-105 transition-all duration-500">
                  <div className="space-y-4 sm:space-y-6">
                    {/* Header with animated dots */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full animate-pulse"></div>
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                      </div>
                      <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 animate-spin-slow" />
                    </div>
                    
                    {/* Animated content bars */}
                    <div className="space-y-3 sm:space-y-4">
                      <div className="h-5 sm:h-6 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full animate-pulse"></div>
                      <div className="h-3 sm:h-4 bg-slate-700/50 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="h-3 sm:h-4 bg-slate-700/50 rounded-full w-3/4 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      
                      <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
                        <div className="glass-effect rounded-xl p-3 sm:p-4 border border-emerald-500/20 group hover:border-emerald-500/40 transition-all duration-300">
                          <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400 mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                          <div className="h-2 sm:h-3 bg-slate-700/50 rounded w-full animate-pulse"></div>
                        </div>
                        <div className="glass-effect rounded-xl p-3 sm:p-4 border border-blue-500/20 group hover:border-blue-500/40 transition-all duration-300">
                          <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                          <div className="h-2 sm:h-3 bg-slate-700/50 rounded w-3/4 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-2xl animate-float">
                  <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white animate-pulse" />
                </div>
                
                <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl animate-bounce-slow">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                </div>

                {/* Orbiting elements */}
                <div className="absolute top-1/2 left-1/2 w-60 h-60 sm:w-80 sm:h-80 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="absolute top-0 left-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-full animate-spin-slow origin-[0_120px] sm:origin-[0_160px]"></div>
                  <div className="absolute top-0 left-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-spin-slow origin-[0_90px] sm:origin-[0_120px]" style={{ animationDirection: 'reverse' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-emerald-500/50 rounded-full flex justify-center p-1.5 sm:p-2">
          <div className="w-1.5 h-3 sm:w-2 sm:h-4 bg-gradient-to-b from-emerald-400 to-blue-500 rounded-full animate-pulse"></div>
        </div>
        <p className="text-slate-400 text-xs sm:text-sm mt-2 font-space">Scroll to explore</p>
        
      </div>
    </section>
  );
};

export default Hero;
