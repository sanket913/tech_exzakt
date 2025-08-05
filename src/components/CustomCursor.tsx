import React, { useEffect, useState, useRef } from 'react';
import { Sparkles, Zap, Star, Rocket, Crown } from 'lucide-react';
import { JSX } from 'react/jsx-runtime';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [particles, setParticles] = useState<Array<{ x: number; y: number; id: number; icon: React.ReactNode }>>([]);
  const trailIdRef = useRef(0);
  const particleIdRef = useRef(0);

  const icons = [
    <Sparkles key="sparkles" className="w-3 h-3" />,
    <Crown key="crown" className="w-3 h-3" />,
    <Star key="star" className="w-3 h-3" />,
    <Zap key="zap" className="w-3 h-3" />,
    <Rocket key="rocket" className="w-3 h-3" />
  ];

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add trail point
      setTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: trailIdRef.current++ }];
        return newTrail.slice(-15); // Keep last 15 points
      });

      // Randomly add particles while moving
      if (Math.random() < 0.1) {
        const randomIcon = icons[Math.floor(Math.random() * icons.length)];
        setParticles(prev => [
          ...prev,
          {
            x: e.clientX + (Math.random() - 0.5) * 40,
            y: e.clientY + (Math.random() - 0.5) * 40,
            id: particleIdRef.current++,
            icon: randomIcon
          }
        ]);
      }
    };

    const updateFollower = () => {
      setFollowerPosition(prev => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15
      }));
    };

    const handleMouseDown = () => {
      setIsClicking(true);
      // Create burst of particles on click
      const burstParticles: { x: number; y: number; id: number; icon: JSX.Element; }[] = [];
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const distance = 30 + Math.random() * 20;
        const randomIcon = icons[Math.floor(Math.random() * icons.length)];
        burstParticles.push({
          x: position.x + Math.cos(angle) * distance,
          y: position.y + Math.sin(angle) * distance,
          id: particleIdRef.current++,
          icon: randomIcon
        });
      }
      setParticles(prev => [...prev, ...burstParticles]);
    };

    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    const interval = setInterval(updateFollower, 16);

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"], input, textarea');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      clearInterval(interval);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [position]);

  // Clean up old particles
  useEffect(() => {
    const cleanup = setInterval(() => {
      setParticles(prev => prev.slice(-20)); // Keep only last 20 particles
      setTrail(prev => prev.slice(-10)); // Keep only last 10 trail points
    }, 100);

    return () => clearInterval(cleanup);
  }, []);

  return (
    <>
      {/* Trail Effect */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-[9997] rounded-full"
          style={{
            left: `${point.x - 2}px`,
            top: `${point.y - 2}px`,
            width: `${4 + index * 0.5}px`,
            height: `${4 + index * 0.5}px`,
            background: `linear-gradient(135deg, rgba(255, 215, 0, ${0.8 - index * 0.05}), rgba(255, 165, 0, ${0.6 - index * 0.04}))`,
            transform: `scale(${1 - index * 0.06})`,
            transition: 'all 0.1s ease-out'
          }}
        />
      ))}

      {/* Main Cursor */}
      <div
        className={`fixed pointer-events-none z-[99999] rounded-full transition-all duration-200 ease-out ${
          isClicking ? 'scale-75' : isHovering ? 'scale-150' : 'scale-100'
        }`}
        style={{
          left: `${position.x - 12}px`,
          top: `${position.y - 12}px`,
          width: '24px',
          height: '24px',
          background: isClicking 
            ? 'linear-gradient(135deg, #FFD700, #FFA500)' 
            : isHovering 
            ? 'linear-gradient(135deg, #FFA500, #FFD700)'
            : 'linear-gradient(135deg, #FFD700, #FFA500)',
          boxShadow: isClicking 
            ? '0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 165, 0, 0.6)'
            : isHovering 
            ? '0 0 20px rgba(255, 165, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.6)'
            : '0 0 15px rgba(255, 215, 0, 0.6), 0 0 30px rgba(255, 165, 0, 0.4)',
        }}
      >
        {/* Inner glow */}
        <div className="absolute inset-1 rounded-full bg-white/30 animate-pulse"></div>
      </div>

      {/* Follower Ring */}
      <div
        className={`fixed pointer-events-none z-[99998] rounded-full border-2 transition-all duration-300 ease-out ${
          isClicking ? 'scale-50 border-4' : isHovering ? 'scale-200 border-4' : 'scale-100'
        }`}
        style={{
          left: `${followerPosition.x - 25}px`,
          top: `${followerPosition.y - 25}px`,
          width: '50px',
          height: '50px',
          borderColor: isClicking 
            ? 'rgba(255, 215, 0, 0.8)' 
            : isHovering 
            ? 'rgba(255, 165, 0, 0.8)'
            : 'rgba(255, 215, 0, 0.6)',
          boxShadow: `0 0 20px ${isClicking 
            ? 'rgba(255, 215, 0, 0.4)' 
            : isHovering 
            ? 'rgba(255, 165, 0, 0.4)'
            : 'rgba(255, 215, 0, 0.3)'}`,
        }}
      >
        {/* Rotating dots around the ring */}
        <div className="absolute inset-0 animate-spin">
          <div className="absolute top-0 left-1/2 w-1 h-1 bg-yellow-400 rounded-full transform -translate-x-1/2"></div>
          <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-yellow-500 rounded-full transform -translate-x-1/2"></div>
          <div className="absolute left-0 top-1/2 w-1 h-1 bg-yellow-600 rounded-full transform -translate-y-1/2"></div>
          <div className="absolute right-0 top-1/2 w-1 h-1 bg-yellow-400 rounded-full transform -translate-y-1/2"></div>
        </div>
      </div>

      {/* Floating Particles */}
      {particles.map((particle, index) => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-[99996] text-yellow-400 animate-ping"
          style={{
            left: `${particle.x - 6}px`,
            top: `${particle.y - 6}px`,
            animationDuration: `${1 + Math.random()}s`,
            animationDelay: `${index * 0.1}s`,
            opacity: 0.8 - index * 0.05
          }}
        >
          {particle.icon}
        </div>
      ))}

      {/* Magnetic Field Effect (only visible on hover) */}
      {isHovering && (
        <div
          className="fixed pointer-events-none z-[99995] rounded-full animate-pulse"
          style={{
            left: `${position.x - 60}px`,
            top: `${position.y - 60}px`,
            width: '120px',
            height: '120px',
            background: 'radial-gradient(circle, rgba(255, 215, 0, 0.1) 0%, transparent 70%)',
            border: '1px solid rgba(255, 215, 0, 0.3)',
          }}
        />
      )}

      {/* Click Ripple Effect */}
      {isClicking && (
        <div
          className="fixed pointer-events-none z-[99994] rounded-full animate-ping"
          style={{
            left: `${position.x - 40}px`,
            top: `${position.y - 40}px`,
            width: '80px',
            height: '80px',
            border: '2px solid rgba(255, 215, 0, 0.8)',
            animationDuration: '0.6s'
          }}
        />
      )}
    </>
  );
};

export default CustomCursor;
