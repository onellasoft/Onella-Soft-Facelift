'use client';

import { GlowingCard } from '@/components/ui/glowing-card';
import { Button } from '@/components/ui/button';
import { Facebook, Megaphone, Share2, Video, Code, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const solutions = [
  {
    icon: <Facebook className="h-8 w-8 text-white" />,
    title: 'Social Media Marketing',
    description: 'Strategic social media campaigns to engage patients and build trust across platforms.',
    points: ['HIPAA-compliant content', 'Patient engagement', 'Brand trust'],
  },
  {
    icon: <Megaphone className="h-8 w-8 text-white" />,
    title: 'Sponsored Ads Marketing',
    description: 'Targeted PPC campaigns that reach potential patients when they\'re searching for healthcare services.',
    points: ['Google Ads', 'Social media ads', 'Lead generation'],
  },
  {
    icon: <Share2 className="h-8 w-8 text-white" />,
    title: 'Clinic Software Development',
    description: 'Custom software solutions to streamline your clinic\'s operations and enhance patient experience.',
    points: ['Appointment systems', 'Patient portals', 'Practice management'],
  },
  {
    icon: <Video className="h-8 w-8 text-white" />,
    title: 'Video Shoot Services',
    description: 'Professional healthcare video production to showcase your services and build patient trust.',
    points: ['Doctor interviews', 'Facility tours', 'Patient testimonials'],
  },
  {
    icon: <Code className="h-8 w-8 text_white" />,
    title: 'Healthcare Website Design',
    description: 'Mobile-friendly, accessible websites designed specifically for healthcare providers.',
    points: ['ADA compliant', 'Easy to use', 'Patient-focused UX'],
  },
];

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

export function HealthcareSolutions() {
  return (
    <section>
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl mt-2">
          Comprehensive solutions tailored for the Healthcare Industry
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <GlowingCard className="bg-glass h-full transition-all duration-300 flex flex-col text-left">
              <div className="p-6 flex-grow flex flex-col">
                <div className="h-16 w-16 rounded-lg bg-accent/10 flex items-center justify-center border border-white/20 mb-4">
                  {solution.icon}
                </div>
                <h3 className="font-headline text-xl text-white mb-2">{solution.title}</h3>
                <p className="text-white/80 text-sm flex-grow mb-4">{solution.description}</p>
                <ul className="space-y-2 text-sm text-white/70 mb-6">
                  {solution.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </GlowingCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
