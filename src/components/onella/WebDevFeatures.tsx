import { Card, CardContent } from '@/components/ui/card';
import { Target, Search, FileText, BarChart, Users, LineChart, Code, Smartphone, Rocket } from 'lucide-react';
import { GlowingCard } from '../ui/glowing-card';

const features = [
  {
    icon: <Code className="h-8 w-8 text-white" />,
    title: 'Precision-driven Development',
    description: 'Our development process is meticulous, ensuring every line of code is clean, efficient, and scalable for future growth.',
  },
  {
    icon: <Smartphone className="h-8 w-8 text-white" />,
    title: 'Agile Project Management',
    description: 'We use agile methodologies to stay flexible, adapt to changes, and deliver your project on time and within budget.',
  },
  {
    icon: <Rocket className="h-8 w-8 text-white" />,
    title: 'Increase Sales with Great UX/UI',
    description: 'We design intuitive and beautiful interfaces that provide a seamless user experience, encouraging conversions and sales.',
  },
];

export function WebDevFeatures() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <GlowingCard key={index} className="bg-glass h-full transition-all duration-300 flex flex-col text-center">
             <CardContent className="p-6 flex flex-col items-center flex-grow">
                 <div className="h-16 w-16 rounded-lg bg-accent/10 flex items-center justify-center border border-white/20 mb-4">
                    {feature.icon}
                </div>
              <h3 className="font-headline text-xl text-white mb-2">{feature.title}</h3>
              <p className="text-white/80 flex-grow">{feature.description}</p>
            </CardContent>
          </GlowingCard>
        ))}
      </div>
    </section>
  );
}