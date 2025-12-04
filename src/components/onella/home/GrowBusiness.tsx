
import { ArrowRight, BarChart, Users, Settings, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { GlowingCard } from '@/components/ui/glowing-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const features = [
  {
    icon: <Settings className="h-6 w-6 text-accent" />,
    title: 'Customized Strategies',
    description: 'Tailored strategies crafted uniquely for your business goals—never generic.',
  },
  {
    icon: <Users className="h-6 w-6 text-accent" />,
    title: 'Client-Centric Focus',
    description: 'Your success drives us—supportive, aligned, refined strategies for leads.',
  },
  {
    icon: <BarChart className="h-6 w-6 text-accent" />,
    title: 'Targeted High-quality Leads',
    description: 'Boost traffic, leads, sales, and visibility with expert digital marketers.',
  },
  {
    icon: <Briefcase className="h-6 w-6 text-accent" />,
    title: 'Experienced Team',
    description: 'Certified experts mastering trends, algorithms, and lead generation strategies daily.',
  },
];

export function GrowBusiness() {
  return (
    <section className="pb-16 md:pb-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <GlowingCard key={index} className="bg-card/50 h-full">
                <CardContent className="p-6 text-center">
                  <div className="inline-block p-3 bg-accent/10 rounded-full mb-4 border border-accent/20">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-headline font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{feature.description}</p>
                </CardContent>
              </GlowingCard>
            ))}
          </div>
          <div className="text-center lg:text-left">
            <span className="text-sm font-bold tracking-wider uppercase text-primary">About Us</span>
            <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl mt-2">
              Grow Your Business with Expert Digital Marketing Solutions
            </h2>
            <p className="mt-4 text-white/80">
              Start working with Onella Soft that can provide everything you need to generate awareness, drive traffic, connect.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/about-us">
                Explore More <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
