import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { TrendingUp, Users, DollarSign, Zap } from 'lucide-react';
import { GlowingCard } from '../ui/glowing-card';

const benefits = [
  {
    icon: <TrendingUp className="h-8 w-8 text-white" />,
    title: 'Grow your traffic',
    description: 'Higher rankings on search engines mean more visibility for your products or services. This brings in highly qualified traffic from users actively searching for solutions.',
  },
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: 'Get quality leads',
    description: 'Appearing at the top of search results establishes your brand as an authority and builds trust with potential customers. It also generates quality leads who are more likely to convert.',
  },
  {
    icon: <DollarSign className="h-8 w-8 text-white" />,
    title: 'Drive more sales',
    description: 'Ultimately, good advertising translates into increased sales. By reaching the right people, driving more website traffic, and establishing your brand, you will drive more sales for your product or service.',
  },
];

export function HowItWorks() {
  return (
    <section>
      <div className="text-center">
        <span className="text-sm font-bold tracking-wider uppercase text-primary">Work Process</span>
        <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl mt-2">
          How it works?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-white">
          We offer a tailored approach to SEO, developing strategies that align with your specific goals and target audience.
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
    </section>
  );
}