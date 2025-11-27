"use client"
import React, { useEffect, useState, memo } from 'react';

// --- Type Definitions ---
type IconType = 'photoshop' | 'after-effects' | 'google-analytics' | 'davinci-resolve' | 'figma';

type GlowColor = 'cyan' | 'purple';

interface SkillIconProps {
  type: IconType;
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

// --- Improved SVG Icon Components ---
const iconComponents: Record<IconType, { component: () => React.JSX.Element; color: string }> = {
  photoshop: {
    component: () => (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        fill="currentColor"
      >
        <title>Adobe Photoshop</title>
        <path d="M21.525 2.475H2.475C1.113 2.475 0 3.588 0 4.95v14.1C0 20.412 1.113 21.525 2.475 21.525h19.05C22.887 21.525 24 20.412 24 19.05V4.95c0-1.362-1.113-2.475-2.475-2.475zM8.34 16.63h-2.3L4.5 12.3h3.04l.8 4.33zm6.65.25c-1.64 0-3.32-.43-3.32-2.5 0-1.54.9-2.05 2-2.3.69-.15 1.5-.27 2.4-.41.87-.14 1.22-.38 1.22-.82 0-.5-.52-.77-1.3-.77-.82 0-1.6.2-2.35.48l-.37-1.78c.86-.3 2.02-.51 3.2-.51 2.25 0 3.5 1.05 3.5 2.57 0 1.9-1.33 2.4-2.5 2.65-.8.16-1.88.33-2.5.48-.8.2-.95.5-.95.8 0 .42.4.6.9.6.95 0 1.8-.26 2.5-.55l.41 1.77c-.8.36-2.06.6-3.26.6z" fill="#31A8FF"/>
      </svg>
    ),
    color: '#31A8FF'
  },
  'after-effects': {
    component: () => (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        fill="currentColor"
      >
        <title>Adobe After Effects</title>
        <path d="M21.525 2.475H2.475A2.475 2.475 0 0 0 0 4.95v14.1A2.475 2.475 0 0 0 2.475 21.525h19.05A2.475 2.475 0 0 0 24 19.05V4.95A2.475 2.475 0 0 0 21.525 2.475zM8.32 12.5h2.8l.6 2.53h2.33l-3.3-8.8h-2.5l-3.3 8.8h2.32l.75-2.53zm.98-1.75l1.03-3.4 1.02 3.4zm10.1.18c0-2-1.4-3.3-3.8-3.3s-3.8 1.3-3.8 3.3 1.4 3.3 3.8 3.3 3.8-1.3 3.8-3.3zm-2.2 0c0 .9-.6 1.4-1.6 1.4s-1.6-.5-1.6-1.4.6-1.4 1.6-1.4 1.6.5 1.6 1.4z" fill="#d887ff"/>
      </svg>
    ),
    color: '#d887ff'
  },
  'google-analytics': {
    component: () => (
       <svg 
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        fill="currentColor">
         <title>Google Analytics</title>
        <path d="M10.74 12.21c-.08-.6-.13-1.22-.13-1.85C10.61 7.25 12.63 5 15.25 5c2.61 0 4.63 2.25 4.63 5.36s-2.02 5.36-4.63 5.36a4.84 4.84 0 01-2.14-.46l-1.37 1.37a6.9 6.9 0 003.51.97c3.84 0 6.9-3.28 6.9-7.23S19.09 3 15.25 3C11.41 3 8.35 6.28 8.35 10.23c0 .65.08 1.28.2 1.89L10.74 12.21M4.68 13.45V11h6.24v2.45H4.68M22 24H2V0h20v24z" fill="#f9ab00"/>
      </svg>
    ),
    color: '#f9ab00'
  },
  'davinci-resolve': {
    component: () => (
      <svg 
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        fill="currentColor">
        <title>DaVinci Resolve</title>
        <path d="M14.613.001c-.134 0-.256.024-.37.065a.69.69 0 00-.301.302l-1.848 3.2a.687.687 0 00.3.953.69.69 0 00.65.07l1.848-1.066a.687.687 0 00.301-.598l.065-3.393a.688.688 0 00-.694-.633zm-5.23 2.998a.69.69 0 00-.651-.065L3.387 4.75a.687.687 0 00-.3.952l1.848 3.2a.688.688 0 00.952.3.69.69 0 00.065-.65L4.098 5.158l5.285-3.05a.687.687 0 00.3-.952zM21.149 5.38a.688.688 0 00-.952-.3l-5.35 3.088 1.849 3.2a.688.688h.003a.69.69 0 00.65.065l5.35-3.09a.687.687 0 00.3-.952l-1.85-3.2zm-18.3 8.835a.687.687 0 00-.3.952l8.803 15.248a.688.688 0 00.952.3l.01-.004 8.802-15.247a.688.688 0 00-.58-1.02h-17.7z" fill="#FFFFFF"/>
      </svg>
    ),
    color: '#FFFFFF'
  },
  figma: {
    component: () => (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        fill="currentColor"
      >
        <title>Figma</title>
        <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z" fill="#2c2c2c"/>
        <path d="M12 18a6 6 0 0 1-6-6h6v6z" fill="#0acf83"/>
        <path d="M12 12a6 6 0 0 1 6-6v6h-6z" fill="#a259ff"/>
        <path d="M6 12a6 6 0 0 1 6-6v6H6z" fill="#f24e1e"/>
        <path d="M18 12a6 6 0 0 1-6 6v-6h6z" fill="#ff7262"/>
        <path d="M12 6a6 6 0 0 1-6 6H0A12 12 0 0 1 12 0v6z" fill="#1abcfe"/>
      </svg>
    ),
    color: '#1abcfe'
  }
};

// --- Memoized Icon Component ---
const SkillIcon = memo(({ type }: SkillIconProps) => {
  const IconComponent = iconComponents[type]?.component;
  return IconComponent ? <IconComponent /> : null;
});
SkillIcon.displayName = 'SkillIcon';

// --- Configuration for the Orbiting Skills ---
const skillsConfig: SkillConfig[] = [
  // Outer Orbit
  { 
    id: 'photoshop',
    orbitRadius: 180, 
    size: 50, 
    speed: -0.6, 
    iconType: 'photoshop', 
    phaseShift: 0, 
    glowColor: 'purple',
    label: 'Photoshop'
  },
  { 
    id: 'after-effects',
    orbitRadius: 180, 
    size: 50, 
    speed: -0.6, 
    iconType: 'after-effects', 
    phaseShift: (2 * Math.PI) / 5, 
    glowColor: 'purple',
    label: 'After Effects'
  },
  { 
    id: 'google-analytics',
    orbitRadius: 180, 
    size: 45, 
    speed: -0.6, 
    iconType: 'google-analytics', 
    phaseShift: (4 * Math.PI) / 5, 
    glowColor: 'purple',
    label: 'Google Analytics'
  },
    { 
    id: 'davinci-resolve',
    orbitRadius: 180, 
    size: 45, 
    speed: -0.6, 
    iconType: 'davinci-resolve', 
    phaseShift: (6 * Math.PI) / 5, 
    glowColor: 'purple',
    label: 'DaVinci Resolve'
  },
  { 
    id: 'figma',
    orbitRadius: 180, 
    size: 40, 
    speed: -0.6, 
    iconType: 'figma', 
    phaseShift: (8 * Math.PI) / 5, 
    glowColor: 'purple',
    label: 'Figma'
  },
];

// --- Memoized Orbiting Skill Component ---
const OrbitingSkill = memo(({ config, angle }: OrbitingSkillProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { orbitRadius, size, iconType, label } = config;

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
            ? `0 0 30px ${iconComponents[iconType]?.color}40, 0 0 60px ${iconComponents[iconType]?.color}20`
            : undefined
        }}
      >
        <SkillIcon type={iconType} />
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
    { radius: 180, glowColor: 'purple', delay: 1.5 }
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
        className="relative w-[calc(100vw-40px)] h-[calc(100vw-40px)] md:w-[450px] md:h-[450px] flex items-center justify-center mt-12"
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
