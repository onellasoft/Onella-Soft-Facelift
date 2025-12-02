
// src/components/onella/SocialPlatforms.tsx
"use client";
import { FaGoogle, FaInstagram, FaFacebookF, FaWhatsapp, FaTwitter, FaDribbble } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const platforms = [
  { icon: <FaGoogle className="h-8 w-8 text-white" /> },
  { icon: <FaInstagram className="h-8 w-8 text-white" /> },
  { icon: <FaFacebookF className="h-8 w-8 text-white" /> },
  { icon: <FaWhatsapp className="h-8 w-8 text-white" /> },
  { icon: <FaTwitter className="h-8 w-8 text-white" /> },
  { icon: <FaDribbble className="h-8 w-8 text-white" /> },
];

export function SocialPlatforms() {
  const duplicatedPlatforms = [...platforms, ...platforms];
  return (
    <section className="w-full">
      <div
        className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
      >
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
            {duplicatedPlatforms.map((platform, index) => (
              <li key={index} 
                className="p-4 bg-glass rounded-full border border-primary/20"
              >
                {platform.icon}
              </li>
            ))}
        </ul>
         <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
            {duplicatedPlatforms.map((platform, index) => (
              <li key={index} 
                className="p-4 bg-glass rounded-full border border-primary/20"
              >
                {platform.icon}
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
