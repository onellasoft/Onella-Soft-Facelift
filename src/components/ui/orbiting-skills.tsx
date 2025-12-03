"use client"
import React, { useEffect, useState, memo } from 'react';
import {
  FaGoogle,
  FaFigma,
  FaPhp,
  FaNodeJs,
  FaJava,
  FaAngular,
  FaPython,
  FaJs,
  FaReact
} from 'react-icons/fa';
import {
  SiAdobeaftereffects,
  SiDavinciresolve,
  SiFirebase,
  SiAdobephotoshop,
  SiDotnet,
} from 'react-icons/si';
import { BsChat } from "react-icons/bs";

// --- Type Definitions ---
type IconType = 'photoshop' | 'after-effects' | 'google-analytics' | 'davinci-resolve' | 'figma' | 'chatgpt' | 'firebase' | 'php' | 'nodejs' | 'java' | 'angular' | 'python' | 'javascript' | 'react' | 'dotnet';

type GlowColor = 'cyan' | 'purple' | 'orange';

interface SkillIconProps {
  type: IconType;
  size: number;
  color: string;
}

interface SkillConfig {
  id: string;
  orbitRadius: number;
  size: number;
  speed: number;
  iconType: IconType;
  phaseShift: number;
  glowColor: GlowColor;
  label: string;
}

interface OrbitingSkillProps {
  config: SkillConfig;
  angle: number;
}

interface GlowingOrbitPathProps {
  radius: number;
  glowColor?: GlowColor;
  animationDelay?: number;
}

// --- Improved Icon Components ---
const iconComponents: Record<IconType, { component: React.ElementType; color: string }> = {
  photoshop: { component: SiAdobephotoshop, color: '#31A8FF' },
  'after-effects': { component: SiAdobeaftereffects, color: '#d887ff' },
  'google-analytics': { component: FaGoogle, color: '#f9ab00' },
  'davinci-resolve': { component: SiDavinciresolve, color: '#FFFFFF' },
  figma: { component: FaFigma, color: '#F24E1E' },
  chatgpt: { component: BsChat, color: '#74AA9C' },
  firebase: { component: SiFirebase, color: '#FFCA28' },
  php: { component: FaPhp, color: '#777BB4' },
  nodejs: { component: FaNodeJs, color: '#339933' },
  java: { component: FaJava, color: '#007396' },
  angular: { component: FaAngular, color: '#DD0031' },
  python: { component: FaPython, color: '#3776AB' },
  javascript: { component: FaJs, color: '#F7DF1E' },
  react: { component: FaReact, color: '#61DAFB' },
  dotnet: { component: SiDotnet, color: '#512BD4' },
};


// --- Memoized Icon Component ---
const SkillIcon = memo(({ type, size, color }: SkillIconProps) => {
  const IconComponent = iconComponents[type]?.component;
  return IconComponent ? <IconComponent style={{ fontSize: `${size * 0.5}px`, color: color }} /> : null;
});
SkillIcon.displayName = 'SkillIcon';

// --- Configuration for the Orbiting Skills ---
const skillsConfig: SkillConfig[] = [
  // Innermost Orbit
  {
    id: 'javascript',
    orbitRadius: 80,
    size: 40,
    speed: 1,
    iconType: 'javascript',
    phaseShift: 0,
    glowColor: 'cyan',
    label: 'JavaScript'
  },
  {
    id: 'python',
    orbitRadius: 80,
    size: 40,
    speed: 1,
    iconType: 'python',
    phaseShift: (2 * Math.PI) / 3,
    glowColor: 'cyan',
    label: 'Python'
  },
  {
    id: 'java',
    orbitRadius: 80,
    size: 40,
    speed: 1,
    iconType: 'java',
    phaseShift: (4 * Math.PI) / 3,
    glowColor: 'cyan',
    label: 'Java'
  },

  // Middle Orbit
  {
    id: 'photoshop',
    orbitRadius: 150,
    size: 45,
    speed: -0.6,
    iconType: 'photoshop',
    phaseShift: 0,
    glowColor: 'purple',
    label: 'Photoshop'
  },
  {
    id: 'after-effects',
    orbitRadius: 150,
    size: 45,
    speed: -0.6,
    iconType: 'after-effects',
    phaseShift: (2 * Math.PI) / 5,
    glowColor: 'purple',
    label: 'After Effects'
  },
  {
    id: 'google-analytics',
    orbitRadius: 150,
    size: 45,
    speed: -0.6,
    iconType: 'google-analytics',
    phaseShift: (4 * Math.PI) / 5,
    glowColor: 'purple',
    label: 'Google Analytics'
  },
  {
    id: 'davinci-resolve',
    orbitRadius: 150,
    size: 45,
    speed: -0.6,
    iconType: 'davinci-resolve',
    phaseShift: (6 * Math.PI) / 5,
    glowColor: 'purple',
    label: 'DaVinci Resolve'
  },
  {
    id: 'figma',
    orbitRadius: 150,
    size: 40,
    speed: -0.6,
    iconType: 'figma',
    phaseShift: (8 * Math.PI) / 5,
    glowColor: 'purple',
    label: 'Figma'
  },

  // Outer Orbit
  {
    id: 'chatgpt',
    orbitRadius: 220,
    size: 50,
    speed: 0.4,
    iconType: 'chatgpt',
    phaseShift: 0,
    glowColor: 'orange',
    label: 'ChatGPT'
  },
  {
    id: 'firebase',
    orbitRadius: 220,
    size: 50,
    speed: 0.4,
    iconType: 'firebase',
    phaseShift: (Math.PI) / 4,
    glowColor: 'orange',
    label: 'Firebase'
  },
  {
    id: 'php',
    orbitRadius: 220,
    size: 50,
    speed: 0.4,
    iconType: 'php',
    phaseShift: (2 * Math.PI) / 4,
    glowColor: 'orange',
    label: 'PHP'
  },
  {
    id: 'nodejs',
    orbitRadius: 220,
    size: 50,
    speed: 0.4,
    iconType: 'nodejs',
    phaseShift: (3 * Math.PI) / 4,
    glowColor: 'orange',
    label: 'Node.js'
  },
  {
    id: 'angular',
    orbitRadius: 220,
    size: 50,
    speed: 0.4,
    iconType: 'angular',
    phaseShift: (4 * Math.PI) / 4,
    glowColor: 'orange',
    label: 'Angular'
  },
  {
    id: 'react',
    orbitRadius: 220,
    size: 50,
    speed: 0.4,
    iconType: 'react',
    phaseShift: (5 * Math.PI) / 4,
    glowColor: 'orange',
    label: 'React'
  },
  {
    id: 'dotnet',
    orbitRadius: 220,
    size: 50,
    speed: 0.4,
    iconType: 'dotnet',
    phaseShift: (6 * Math.PI) / 4,
    glowColor: 'orange',
    label: '.NET'
  },
];

// --- Memoized Orbiting Skill Component ---
const OrbitingSkill = memo(({ config, angle }: OrbitingSkillProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { orbitRadius, size, iconType, label } = config;
  const { color } = iconComponents[iconType];

  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius;

  return (
    <div
      className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: isHovered ? 20 : 10,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative w-full h-full p-2 bg-gray-800/90 backdrop-blur-sm
          rounded-full flex items-center justify-center
          transition-all duration-300 cursor-pointer
          ${isHovered ? 'scale-125 shadow-2xl' : 'shadow-lg hover:shadow-xl'}
        `}
        style={{
          boxShadow: isHovered
            ? `0 0 30px ${color}40, 0 0 60px ${color}20`
            : undefined
        }}
      >
        <SkillIcon type={iconType} size={size} color={color} />
        {isHovered && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900/95 backdrop-blur-sm rounded text-xs text-white whitespace-nowrap pointer-events-none">
            {label}
          </div>
        )}
      </div>
    </div>
  );
});
OrbitingSkill.displayName = 'OrbitingSkill';

// --- Optimized Orbit Path Component ---
const GlowingOrbitPath = memo(({ radius, glowColor = 'cyan', animationDelay = 0 }: GlowingOrbitPathProps) => {
  const glowColors = {
    cyan: {
      primary: 'rgba(6, 182, 212, 0.4)',
      secondary: 'rgba(6, 182, 212, 0.2)',
      border: 'rgba(6, 182, 212, 0.3)'
    },
    purple: {
      primary: 'rgba(147, 51, 234, 0.4)',
      secondary: 'rgba(147, 51, 234, 0.2)',
      border: 'rgba(147, 51, 234, 0.3)'
    },
    orange: {
        primary: 'rgba(249, 115, 22, 0.4)',
        secondary: 'rgba(249, 115, 22, 0.2)',
        border: 'rgba(249, 115, 22, 0.3)'
    }
  };

  const colors = glowColors[glowColor] || glowColors.cyan;

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        animationDelay: `${animationDelay}s`,
      }}
    >
      {/* Glowing background */}
      <div
        className="absolute inset-0 rounded-full animate-pulse"
        style={{
          background: `radial-gradient(circle, transparent 30%, ${colors.secondary} 70%, ${colors.primary} 100%)`,
          boxShadow: `0 0 60px ${colors.primary}, inset 0 0 60px ${colors.secondary}`,
          animation: 'pulse 4s ease-in-out infinite',
          animationDelay: `${animationDelay}s`,
        }}
      />

      {/* Static ring for depth */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: `1px solid ${colors.border}`,
          boxShadow: `inset 0 0 20px ${colors.secondary}`,
        }}
      />
    </div>
  );
});
GlowingOrbitPath.displayName = 'GlowingOrbitPath';

// --- Main App Component ---
export default function OrbitingSkills() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      setTime(prevTime => prevTime + deltaTime);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const orbitConfigs: Array<{ radius: number; glowColor: GlowColor; delay: number }> = [
    { radius: 80, glowColor: 'cyan', delay: 0 },
    { radius: 150, glowColor: 'purple', delay: 1 },
    { radius: 220, glowColor: 'orange', delay: 2 }
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center overflow-hidden text-center py-16 md:py-24">
       <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl">
        Website Technologies We Use
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-white">
        As one of India's leading web developers, our advanced technology
        solutions—including web applications, and mobile apps—encompass a range
        of services that help us respond to customer demands quickly and
        efficiently.
      </p>

      <div 
        className="relative w-[calc(100vw-40px)] h-[calc(100vw-40px)] sm:w-[500px] sm:h-[500px] flex items-center justify-center mt-12"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        {/* Central "Code" Icon with enhanced glow */}
        <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center z-10 relative shadow-2xl">
          <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-xl animate-pulse"></div>
          <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06B6D4" />
                  <stop offset="100%" stopColor="#9333EA" />
                </linearGradient>
              </defs>
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
        </div>

        {/* Render glowing orbit paths */}
        {orbitConfigs.map((config) => (
          <GlowingOrbitPath
            key={`path-${config.radius}`}
            radius={config.radius}
            glowColor={config.glowColor}
            animationDelay={config.delay}
          />
        ))}

        {/* Render orbiting skill icons */}
        {skillsConfig.map((config) => {
          const angle = time * config.speed + (config.phaseShift || 0);
          return (
            <OrbitingSkill
              key={config.id}
              config={config}
              angle={angle}
            />
          );
        })}
      </div>
    </section>
  );
}
