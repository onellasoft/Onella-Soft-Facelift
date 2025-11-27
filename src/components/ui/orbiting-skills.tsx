
"use client"
import React, { useEffect, useState, memo } from 'react';

// --- Type Definitions ---
type IconType = 'photoshop' | 'after-effects' | 'google-analytics' | 'davinci-resolve' | 'figma' | 'chatgpt' | 'firebase' | 'php' | 'nodejs' | 'java' | 'angular' | 'python' | 'javascript';

type GlowColor = 'cyan' | 'purple' | 'orange';

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
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#31A8FF">
        <title>Adobe Photoshop</title>
        <path d="M21.525 2.475H2.475C1.113 2.475 0 3.588 0 4.95v14.1C0 20.412 1.113 21.525 2.475 21.525h19.05C22.887 21.525 24 20.412 24 19.05V4.95c0-1.362-1.113-2.475-2.475-2.475zM8.34 16.63h-2.3L4.5 12.3h3.04l.8 4.33zm6.65.25c-1.64 0-3.32-.43-3.32-2.5 0-1.54.9-2.05 2-2.3.69-.15 1.5-.27 2.4-.41.87-.14 1.22-.38 1.22-.82 0-.5-.52-.77-1.3-.77-.82 0-1.6.2-2.35.48l-.37-1.78c.86-.3 2.02-.51 3.2-.51 2.25 0 3.5 1.05 3.5 2.57 0 1.9-1.33 2.4-2.5 2.65-.8.16-1.88.33-2.5.48-.8.2-.95.5-.95.8 0 .42.4.6.9.6.95 0 1.8-.26 2.5-.55l.41 1.77c-.8.36-2.06.6-3.26.6z"/>
      </svg>
    ),
    color: '#31A8FF'
  },
  'after-effects': {
    component: () => (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#d887ff">
        <title>Adobe After Effects</title>
        <path d="M21.525 2.475H2.475A2.475 2.475 0 0 0 0 4.95v14.1A2.475 2.475 0 0 0 2.475 21.525h19.05A2.475 2.475 0 0 0 24 19.05V4.95A2.475 2.475 0 0 0 21.525 2.475zM8.32 12.5h2.8l.6 2.53h2.33l-3.3-8.8h-2.5l-3.3 8.8h2.32l.75-2.53zm.98-1.75l1.03-3.4 1.02 3.4zm10.1.18c0-2-1.4-3.3-3.8-3.3s-3.8 1.3-3.8 3.3 1.4 3.3 3.8 3.3 3.8-1.3 3.8-3.3zm-2.2 0c0 .9-.6 1.4-1.6 1.4s-1.6-.5-1.6-1.4.6-1.4 1.6-1.4 1.6.5 1.6 1.4z"/>
      </svg>
    ),
    color: '#d887ff'
  },
  'google-analytics': {
    component: () => (
       <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#f9ab00">
         <title>Google Analytics</title>
        <path d="M10.74 12.21c-.08-.6-.13-1.22-.13-1.85C10.61 7.25 12.63 5 15.25 5c2.61 0 4.63 2.25 4.63 5.36s-2.02 5.36-4.63 5.36a4.84 4.84 0 01-2.14-.46l-1.37 1.37a6.9 6.9 0 003.51.97c3.84 0 6.9-3.28 6.9-7.23S19.09 3 15.25 3C11.41 3 8.35 6.28 8.35 10.23c0 .65.08 1.28.2 1.89L10.74 12.21M4.68 13.45V11h6.24v2.45H4.68m12.64-5.36c0-1.45-1.03-2.63-2.4-2.63s-2.4 1.18-2.4 2.63 1.03 2.64 2.4 2.64 2.4-1.19 2.4-2.64z"/>
      </svg>
    ),
    color: '#f9ab00'
  },
  'davinci-resolve': {
    component: () => (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF">
        <title>DaVinci Resolve</title>
        <path d="M14.613.001c-.134 0-.256.024-.37.065a.69.69 0 00-.301.302l-1.848 3.2a.687.687 0 00.3.953.69.69 0 00.65.07l1.848-1.066a.687.687 0 00.301-.598l.065-3.393a.688.688 0 00-.694-.633zm-5.23 2.998a.69.69 0 00-.651-.065L3.387 4.75a.687.687 0 00-.3.952l1.848 3.2a.688.688 0 00.952.3.69.69 0 00.065-.65L4.098 5.158l5.285-3.05a.687.687 0 00.3-.952zM21.149 5.38a.688.688 0 00-.952-.3l-5.35 3.088 1.849 3.2a.688.688h.003a.69.69 0 00.65.065l5.35-3.09a.687.687 0 00.3-.952l-1.85-3.2zm-18.3 8.835a.687.687 0 00-.3.952l8.803 15.248a.688.688 0 00.952.3l.01-.004 8.802-15.247a.688.688 0 00-.58-1.02h-17.7z"/>
      </svg>
    ),
    color: '#FFFFFF'
  },
  figma: {
    component: () => (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Figma</title>
        <path d="M12 12a6 6 0 0 1-6-6h6v6z" fill="#0ACF83"/>
        <path d="M12 12a6 6 0 0 1 6-6v6h-6z" fill="#A259FF"/>
        <path d="M6 12a6 6 0 0 1 6-6v6H6z" fill="#F24E1E"/>
        <path d="M18 12a6 6 0 0 1-6 6v-6h6z" fill="#FF7262"/>
        <path d="M12 18a6 6 0 0 1-6-6h6v6z" fill="#1ABCFE"/>
      </svg>
    ),
    color: '#1ABCFE'
  },
  chatgpt: {
    component: () => (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#74AA9C">
        <title>ChatGPT</title>
        <path d="M22.2819 10.373C22.2819 9.5738 21.6269 8.9187 20.8279 8.9187H15.2229C14.4239 8.9187 13.7689 9.5738 13.7689 10.373V15.222C13.7689 16.021 14.4239 16.676 15.2229 16.676H16.4219V18.423C16.4219 19.336 17.3829 19.92 18.2399 19.559L20.8279 18.472V16.676H20.8279C21.6269 16.676 22.2819 16.021 22.2819 15.222V10.373ZM18.0289 13.297C17.2299 13.297 16.5749 12.642 16.5749 11.843C16.5749 11.044 17.2299 10.389 18.0289 10.389C18.8279 10.389 19.4829 11.044 19.4829 11.843C19.4829 12.642 18.8279 13.297 18.0289 13.297Z" />
        <path d="M10.2299 1.71875C9.4309 1.71875 8.7759 2.37375 8.7759 3.17275V8.02175C8.7759 8.82075 9.4309 9.47575 10.2299 9.47575H11.4289V13.0498C11.4289 13.9628 12.3899 14.5468 13.2469 14.1858L15.2219 13.3488V9.47575H15.2219C16.0209 9.47575 16.6759 8.82075 16.6759 8.02175V3.17275C16.6759 2.37375 16.0209 1.71875 15.2219 1.71875H10.2299ZM12.7239 6.29775C11.9249 6.29775 11.2699 5.64275 11.2699 4.84375C11.2699 4.04475 11.9249 3.38975 12.7239 3.38975C13.5229 3.38975 14.1779 4.04475 14.1779 4.84375C14.1779 5.64275 13.5229 6.29775 12.7239 6.29775Z" />
        <path d="M8.0221 10.373C6.0471 10.373 4.4491 11.971 4.4491 13.946C4.4491 15.921 6.0471 17.519 8.0221 17.519C8.4491 17.519 8.8571 17.439 9.2311 17.29L10.2291 18.472C10.2291 18.472 10.2291 19.559 9.3721 19.92C8.5151 20.281 7.5541 19.697 7.5541 18.784V17.519H7.1541C5.1791 17.519 3.5811 15.921 3.5811 13.946C3.5811 11.971 5.1791 10.373 7.1541 10.373H8.0221ZM1.7191 13.946C1.7191 15.921 3.3171 17.519 5.2921 17.519H5.8501V18.784C5.8501 19.697 4.8891 20.281 4.0321 19.92C3.1751 19.559 3.1751 18.472 3.1751 18.472L4.1731 17.29C3.7991 17.439 3.3911 17.519 2.9641 17.519C1.3661 17.519 -0.000899999 15.921 -0.000899999 13.946C-0.000899999 11.971 1.3661 10.373 2.9641 10.373H3.8321V13.946H1.7191Z" />
      </svg>
    ),
    color: '#74AA9C'
  },
  firebase: {
    component: () => (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#FFCA28">
        <title>Firebase</title>
        <path d="M3.903 17.252l7.422-13.431.022-.04.183-.331L3.45 6.742l.453 10.51zM18.04 7.643l-5.694 9.609-2.036-3.834L18.04 7.643zM4.404 18.01l7.065-12.045-6.52 1.933-2.188 8.924.018.037.625 1.15zM20.27 4.98l-3.237 5.09-5.41-9.155L20.27 4.98zm-1.89 12.333L11.53 5.37l-1.92 3.24L18.38 2.313v15.01z"/>
      </svg>
    ),
    color: '#FFCA28'
  },
  php: {
    component: () => (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#777BB4">
        <title>PHP</title>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.4 14.5c-.34 0-.6-.23-.7-.52l-.9-3.4h-.02c-.1.25-.2.5-.3.74l-.9 3.18h-1.4l2.1-7h1.6l-1 3.8.3-1.1c.3-.9.6-1.8.8-2.7h1.5l-1.5 7zm6-1c-.55 0-1.3-.2-1.7-.5l.4-1.4c.3.2.8.4 1.2.4.5 0 .8-.2.8-.6s-.3-.5-.8-.7c-.8-.2-1.9-.5-1.9-1.6 0-.9.7-1.6 1.8-1.6.5 0 1.2.2 1.6.4l-.4 1.4c-.3-.2-.7-.3-1.1-.3-.4 0-.7.1-.7.5s.2.4.7.6c.9.2 2 .5 2 1.6 0 1-.8 1.7-2 1.7zm-9-1c-.55 0-1.3-.2-1.7-.5l.4-1.4c.3.2.8.4 1.2.4.5 0 .8-.2.8-.6s-.3-.5-.8-.7c-.8-.2-1.9-.5-1.9-1.6 0-.9.7-1.6 1.8-1.6.5 0 1.2.2 1.6.4l-.4 1.4c-.3-.2-.7-.3-1.1-.3-.4 0-.7.1-.7.5s.2.4.7.6c.9.2 2 .5 2 1.6 0 1-.8 1.7-2 1.7z"/>
      </svg>
    ),
    color: '#777BB4'
  },
  nodejs: {
    component: () => (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#339933">
        <title>Node.js</title>
        <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.602.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.135-.141.135-.241V6.921c0-.103-.055-.198-.137-.246l-8.791-5.072c-.081-.047-.189-.047-.273 0L2.075 6.675c-.084.048-.139.144-.139.246v10.146c0 .1.055.194.139.241l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L1.352 18.675C.533 18.215 0 17.352 0 16.43V6.284c0-.922.533-1.786 1.352-2.245L10.147-.963c.8-.452 1.866-.452 2.657 0l8.796 5.002c.819.459 1.352 1.323 1.352 2.245v10.146c0 .922-.533 1.783-1.352 2.245l-8.796 5.078c-.28.163-.601.247-.926.247zm2.717-6.993c-3.849 0-4.654-1.766-4.654-3.246 0-.14.114-.253.256-.253h1.136c.127 0 .232.091.252.215.173 1.164.686 1.752 3.01 1.752 1.852 0 2.639-.419 2.639-1.401 0-.566-.224-1.03-3.099-1.249-2.404-.184-3.89-.768-3.89-2.689 0-1.771 1.491-2.825 3.991-2.825 2.808 0 4.199.975 4.377 3.068.007.072-.019.141-.065.193-.047.049-.111.077-.178.077h-1.14c-.119 0-.225-.083-.248-.196-.276-1.224-.944-1.616-2.746-1.616-2.023 0-2.259.705-2.259 1.234 0 .641.278.827 3.006 1.19 2.7.359 3.982.866 3.982 2.771 0 1.922-1.603 3.024-4.399 3.024z"/>
      </svg>
    ),
    color: '#339933'
  },
  java: {
    component: () => (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#007396">
        <title>Java</title>
        <path d="M17.16 19.34c-2.36 2.08-5.74.8-5.74.8s-3.78 2.2-6.52.44-1.3-4.52-1.3-4.52S-.3 11.24 1.34 7.62s5.1-4.26 5.1-4.26.1-3.66 3.8-3.32 5.56 2.42 5.56 2.42.14 3.76-3.3 5.48-5.26 2.2-5.26 2.2-.6 4.16 2.66 5.14 5.76.12 5.76.12zM15.4 1.84s-1.14-1-2.4-.7-2.3.94-2.3.94-.36 1.22 1.04 2.14 2.72.16 2.72.16.8-1.58.94-2.54z"/>
        <path d="M22.68 18.06c-3.14 2.78-7.66 1.06-7.66 1.06s-5.04 2.92-8.7.58c-3.66-2.34-1.74-6-1.74-6S-.18 10.08 1.8 5.4c1.98-4.68 6.8-5.68 6.8-5.68s.14-4.88 5.06-4.3s7.42 3.22 7.42 3.22.2 5-4.4 7.3-7 2.92-7 2.92-.8 5.54 3.54 6.84 7.68.16 7.68.16zM20.88.9s-1.52-1.32-3.2-.92c-1.68.4-3.06 1.26-3.06 1.26s-.48 1.62 1.38 2.84c1.88 1.22 3.64.22 3.64.22s1.06-2.1.24-3.4z"/>
      </svg>
    ),
    color: '#007396'
  },
  angular: {
    component: () => (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#DD0031">
        <title>Angular</title>
        <path d="M12 0l-12 3 2 16 10 5 10-5 2-16zm-1.125 18.5l-4.125-2.125-.5-4.5 4.625 2.5v4.125zm.125 0v-4.125l4.625-2.5-.5 4.5zm-5-6.125l-1-7.25 7-3.625v7.875zM13 5.125v7.875l7 3.625-1 7.25z"/>
      </svg>
    ),
    color: '#DD0031'
  },
  python: {
    component: () => (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Python</title>
        <path d="M11.153 6.44H7.965V3.253H16.29v3.187h-3.188a.956.956 0 0 1-.956.955.956.956 0 0 1-.956-.955z" fill="#306998"/>
        <path d="M11.153 6.44v3.187H7.965v4.143h6.372v3.187h3.188V6.44h-6.372z" fill="#FFD43B"/>
        <path d="M12.847 17.56H16.03v3.187H7.71v-3.187h3.188a.956.956 0 0 1 .956.955.956.956 0 0 1 .956-.955z" fill="#306998"/>
        <path d="M12.847 17.56v-3.187h3.188V9.62H7.71v3.187h3.188a.956.956 0 0 1 .956.955.956.956 0 0 1 .956-.955z" fill="#FFD43B"/>
      </svg>
    ),
    color: '#3776AB'
  },
  javascript: {
    component: () => (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>JavaScript</title>
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="#F7DF1E"/>
      </svg>
    ),
    color: '#F7DF1E'
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
    phaseShift: (Math.PI) / 3,
    glowColor: 'orange',
    label: 'Firebase'
  },
  {
    id: 'php',
    orbitRadius: 220,
    size: 50,
    speed: 0.4,
    iconType: 'php',
    phaseShift: (2 * Math.PI) / 3,
    glowColor: 'orange',
    label: 'PHP'
  },
  {
    id: 'nodejs',
    orbitRadius: 220,
    size: 50,
    speed: 0.4,
    iconType: 'nodejs',
    phaseShift: Math.PI,
    glowColor: 'orange',
    label: 'Node.js'
  },
  {
    id: 'angular',
    orbitRadius: 220,
    size: 50,
    speed: 0.4,
    iconType: 'angular',
    phaseShift: (4 * Math.PI) / 3,
    glowColor: 'orange',
    label: 'Angular'
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

