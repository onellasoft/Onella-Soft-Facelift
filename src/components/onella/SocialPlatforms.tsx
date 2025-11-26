
// src/components/onella/SocialPlatforms.tsx
"use client";
import { FaGoogle, FaInstagram, FaFacebookF, FaWhatsapp, FaTwitter, FaDribbble } from 'react-icons/fa';
import { motion } from 'framer-motion';

const platforms = [
  { icon: <FaGoogle className="h-8 w-8 text-white" /> },
  { icon: <FaInstagram className="h-8 w-8 text-white" /> },
  { icon: <FaFacebookF className="h-8 w-8 text-white" /> },
  { icon: <FaWhatsapp className="h-8 w-8 text-white" /> },
  { icon: <FaTwitter className="h-8 w-8 text-white" /> },
  { icon: <FaDribbble className="h-8 w-8 text-white" /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    }
  },
};

export function SocialPlatforms() {
  return (
    <section>
      <motion.div 
        className="flex justify-center items-center gap-4 md:gap-8 flex-wrap"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {platforms.map((platform, index) => (
          <motion.div 
            key={index} 
            className="p-4 bg-glass rounded-full border border-primary/20"
            variants={itemVariants}
          >
            {platform.icon}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
