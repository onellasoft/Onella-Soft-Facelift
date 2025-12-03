
import { ArrowRight, BarChart2, Search, Share2, PenTool } from 'lucide-react';
import Link from 'next/link';
import { GlowingCard } from '@/components/ui/glowing-card';
import { CardContent } from '@/components/ui/card';

const services = [
  {
    icon: <Search className="h-6 w-6 text-accent" />,
    title: 'Search Engine Optimization (SEO)',
    description: 'Dominate search results and attract organic traffic with our cutting-edge SEO strategies.',
    href: '/solutions/seo',
  },
  {
    icon: <BarChart2 className="h-6 w-6 text-accent" />,
    title: 'Performance Marketing (Pay-Per-Click)',
    description: 'Even if users don’t click on your ad, seeing your brand repeatedly at the top of search results builds brand recognition and credibility.',
    href: '/solutions/performance-marketing',
  },
  {
    icon: <Share2 className="h-6 w-6 text-accent" />,
    title: 'Social Media Marketing (SMM)',
    description: 'Build a strong brand presence, engage with your audience, and drive conversions across popular social media platforms.',
    href: '/solutions/social-media-marketing',
  },
  {
    icon: <PenTool className="h-6 w-6 text-accent" />,
    title: 'Content Marketing',
    description: 'Attract, engage, and convert your target audience with valuable, relevant, and consistent content. We develop content strategies.',
    href: '/solutions/content-marketing',
  },
];

export function DigitalSolutions() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl">
            We Provide 360 Degree Digital Solutions For Business
          </h2>
          <p className="mt-4 text-white/80">
            Onella Soft offer a full spectrum of services tailored to your unique business needs, all designed with one core objective: to attract targeted, high-quality leads that are most likely to convert into paying customers.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="h-full">
              <GlowingCard className="bg-card/50 h-full hover:border-accent/50 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="p-3 bg-accent/10 rounded-full border border-accent/20">
                        {service.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-headline font-semibold text-white">{service.title}</h3>
                      <p className="mt-1 text-sm text-white/70">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </GlowingCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
