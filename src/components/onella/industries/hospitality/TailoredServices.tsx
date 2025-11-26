
'use client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Hotel, Megaphone, Users, Search, Tv, Globe } from 'lucide-react';
import { GlowingCard } from '@/components/ui/glowing-card';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Hotel className="h-8 w-8 text-white" />,
    title: 'Hotel Management',
    description: 'Channel, revenue and booking engine integrated in property management systems.',
  },
  {
    icon: <Megaphone className="h-8 w-8 text-white" />,
    title: 'Digital Marketing',
    description: "We craft engaging, result-driven social media content tailored to your restaurant's unique identity.",
  },
  {
    icon: <Globe className="h-8 w-8 text-white" />,
    title: 'Direct Bookings & Reservations',
    description: 'Our primary goal is to help you reduce reliance on OTAs and drive more direct bookings.',
  },
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: 'Influencer Marketing',
    description: 'Partnering with the right food influencers can take your restaurants reach to the next level.',
  },
  {
    icon: <Search className="h-8 w-8 text-white" />,
    title: 'SEO & Local Search Optimization',
    description: 'We specialize in SEO and local search optimization to ensure your restaurant appears at the top of local search results.',
  },
  {
    icon: <Tv className="h-8 w-8 text-white" />,
    title: 'Hotel Website Design',
    description: 'Our web design services can help you increase bookings, improve user experience, and optimize for search engines.',
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


export function TailoredServices() {
  return (
    <section className='py-16 md:py-24 bg-card/30 rounded-2xl'>
      <div className="text-center container mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-sm font-bold tracking-wider uppercase text-primary">Our Services</span>
        <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl mt-2">
          Tailored for Hospitality Businesses
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-4 sm:px-6 lg:px-8">
        {services.map((service, index) => (
           <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <GlowingCard key={index} className="bg-glass h-full transition-all duration-300 flex flex-col text-left">
                <CardHeader>
                    <div className="h-16 w-16 rounded-lg bg-accent/10 flex items-center justify-center border border-white/20 mb-4">
                        {service.icon}
                    </div>
                    <CardTitle className="font-headline text-xl text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                <p className="text-white/80">{service.description}</p>
                </CardContent>
            </GlowingCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
