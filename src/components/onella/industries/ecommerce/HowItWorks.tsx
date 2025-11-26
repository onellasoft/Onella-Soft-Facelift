import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { FileText, Building, Replace } from 'lucide-react';
import { GlowingCard } from '@/components/ui/glowing-card';
import { Button } from '@/components/ui/button';

const benefits = [
  {
    icon: <FileText className="h-8 w-8 text-white" />,
    title: 'Developing Tailored Strategies',
    description: 'No one-size-fits-all solutions. Your strategy will be uniquely designed for your specific goals.',
  },
  {
    icon: <Building className="h-8 w-8 text-white" />,
    title: 'Understanding Your Business',
    description: 'We immerse ourselves in your brand, products, target audience and competitive landscape.',
  },
  {
    icon: <Replace className="h-8 w-8 text-white" />,
    title: '360° Solution Implementation',
    description: "We're not just service providers; we're your dedicated digital marketing team.",
  },
];

export function HowItWorks() {
  return (
    <section>
      <div className="text-center">
        <span className="text-sm font-bold tracking-wider uppercase text-primary">Our Process</span>
        <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl mt-2">
          How it Works?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-white">
          Let's make your e-commerce business shine: a reality with our proven process.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <GlowingCard key={index} className="bg-glass h-full transition-all duration-300 flex flex-col text-center">
            <CardHeader className="items-center">
              <div className="h-16 w-16 rounded-lg bg-accent/10 flex items-center justify-center border border-white/20 mb-4">
                {benefit.icon}
              </div>
              <CardTitle className="font-headline text-xl text-white">{benefit.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-white">{benefit.description}</p>
            </CardContent>
          </GlowingCard>
        ))}
      </div>
       <div className="text-center mt-12">
        <Button size="lg">Ready to Grow Your E-commerce Brand?</Button>
      </div>
    </section>
  );
}
