import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Target, Search, FileText, BarChart, Users, LineChart } from 'lucide-react';
import { GlowingCard } from '../ui/glowing-card';

const features = [
  {
    icon: <Search className="h-8 w-8 text-white" />,
    title: 'Keyword Research & Strategy',
    description: 'We conduct in-depth keyword research, identifying the most profitable and relevant keywords for your business, ensuring every search leads to a potential conversion or discovery.',
  },
  {
    icon: <BarChart className="h-8 w-8 text-white" />,
    title: 'Ad Conversion & Creation',
    description: 'Our expert copywriters and creative specialists craft compelling ad copy that makes users want to click and highlight your unique selling proposition.',
  },
  {
    icon: <FileText className="h-8 w-8 text-white" />,
    title: 'Landing Page Optimization',
    description: 'We review and fully optimize all of our landing pages for maximum conversion rates, a seamless user experience, and conversions after the click.',
  },
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: 'Campaign Setup & Management',
    description: 'With seamless PPC management and optimization, we handle all aspects of your PPC efforts.',
  },
  {
    icon: <LineChart className="h-8 w-8 text-white" />,
    title: 'Performance Tracking & Reporting',
    description: 'We’ll actively track and measure all vital to your campaign’s performance, leveraging metrics and valuable insights.',
  },
  {
    icon: <Target className="h-8 w-8 text-white" />,
    title: 'Competitor Analysis',
    description: 'We analyze your competition’s PPC strategies to identify opportunities and stay ahead of the curve.',
  },
];

export function PerformanceWhatWeDo() {
  return (
    <section>
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl mt-2">
          What We Do?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-white">
          At Onella, our data-centric teams are equipped to analyze and improve PPC campaigns that put your business directly in front of motivated customers, driving conversions and maximizing your return on investment.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <GlowingCard key={index} className="bg-glass h-full transition-all duration-300 flex flex-col text-center">
            <CardHeader className="items-center">
              <div className="h-16 w-16 rounded-lg bg-accent/10 flex items-center justify-center border border-white/20 mb-4">
                {feature.icon}
              </div>
              <CardTitle className="font-headline text-xl text-white">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-white">{feature.description}</p>
            </CardContent>
          </GlowingCard>
        ))}
      </div>
    </section>
  );
}
