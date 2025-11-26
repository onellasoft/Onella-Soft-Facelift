'use client';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { GlowingCard } from '@/components/ui/glowing-card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        id: 'healthcare-hospitals',
        title: 'Hospitals',
        subtitle: 'Small & Mid-Sized',
        description: 'Digital marketing techniques improve reputation management, local SEO, patient acquisition, and physician referrals.',
        points: ['Local search', 'Reputation', 'Service promotion', 'Physician outreach']
    },
    {
        id: 'healthcare-pharma',
        title: 'Pharma Companies',
        subtitle: 'B2B & B2C Engagement',
        description: 'Customized healthcare digital marketing services help pharmaceutical brands drive engagement and boost product visibility while maintaining compliance.',
        points: ['Reputation-content', 'Compliance', 'PCP marketing', 'Patient education']
    },
    {
        id: 'healthcare-startups',
        title: 'Healthcare Startups',
        subtitle: 'Innovative Solutions',
        description: 'Growth-driven digital marketing solutions help healthcare startups scale through targeted social media, paid search, and AI-powered strategies.',
        points: ['Brand positioning', 'Investor-focused', 'Growth hacking']
    }
]

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

export function WhoWeServe() {
  return (
    <section>
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl mt-2">
          Who We Serve Best
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-white">
          Tailored digital marketing solutions for different healthcare providers.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => {
            const image = PlaceHolderImages.find((img) => img.id === service.id);
            return (
                <motion.div
                    key={service.id}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={cardVariants}
                >
                    <GlowingCard className="bg-glass h-full">
                        {image && (
                             <Image
                                src={image.imageUrl}
                                alt={image.description}
                                width={400}
                                height={300}
                                data-ai-hint={image.imageHint}
                                className="rounded-t-lg object-cover w-full aspect-[4/3]"
                            />
                        )}
                        <div className='p-6'>
                            <h3 className="font-headline text-xl text-white">{service.title}</h3>
                            <p className="text-accent text-sm font-semibold mb-2">{service.subtitle}</p>
                            <p className="text-white/80 mt-2 text-sm mb-4">{service.description}</p>
                             <ul className="space-y-2 text-sm text-white/70 mb-6">
                                {service.points.map((point, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                    <ArrowRight className="h-4 w-4 text-accent" />
                                    <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </GlowingCard>
                </motion.div>
            )
        })}
      </div>
    </section>
  );
}
