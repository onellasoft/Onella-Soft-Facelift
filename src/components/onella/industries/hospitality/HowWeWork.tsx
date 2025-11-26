
'use client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { MessageSquare, Play, Pencil } from 'lucide-react';
import { GlowingCard } from '@/components/ui/glowing-card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare className="h-10 w-10 text-white" />,
    title: 'Free Consultation',
    description: 'We listen, we learn, and we ask questions during our free consultation.',
  },
  {
    icon: <Play className="h-10 w-10 text-white" />,
    title: 'Define Goals',
    description: 'We spend considerable time understanding your restaurant and then based objectives.',
  },
  {
    icon: <Pencil className="h-10 w-10 text-white" />,
    title: 'Content Creation',
    description: 'Advanced digital marketing strategy to promote restaurants. We are a reliable partner.',
  },
];

export function HowWeWork() {
  return (
    <section>
      <div className="text-center">
        <span className="text-sm font-bold tracking-wider uppercase text-primary">Our Process</span>
        <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl mt-2">
          How We Work
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-white">
          We use a result-driven, time-proven methodology. We break the execution process into three milestones, and we are also very flexible and accommodating.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <GlowingCard key={index} className="bg-transparent border-0 shadow-none h-full transition-all duration-300 flex flex-col text-center">
              <div className='p-6 flex flex-col items-center'>
                 <div className="h-20 w-20 rounded-lg bg-primary flex items-center justify-center border-4 border-primary/50 mb-4">
                    {step.icon}
                </div>
                <h3 className="font-headline text-xl text-white">{step.title}</h3>
                <p className="text-white/80 mt-2 flex-grow">{step.description}</p>
              </div>
          </GlowingCard>
        ))}
      </div>
      <div className="text-center mt-8">
          <Button variant="link" className="text-white text-lg">
                Start Your Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
      </div>
    </section>
  );
}
