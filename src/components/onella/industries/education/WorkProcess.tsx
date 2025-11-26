import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { TrendingUp, Users, DollarSign, Zap, FileText, CheckCircle, Search } from 'lucide-react';
import { GlowingCard } from '@/components/ui/glowing-card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: <Search className="h-8 w-8 text-white" />,
    step: "Step 01",
    title: 'Data-Driven Strategies',
    description: 'Every campaign we launch is backed by thorough research, analytics, and continuous optimization, ensuring maximum ROI.',
  },
  {
    icon: <FileText className="h-8 w-8 text-white" />,
    step: "Step 02",
    title: 'Comprehensive Service',
    description: 'From SEO and paid advertising to content marketing and social media management, we offer a full suite of services.',
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-white" />,
    step: "Step 03",
    title: 'Transparent Reporting',
    description: 'We provide clear, regular reports on campaign performance, so you always know how your marketing budget is working.',
  },
];

export function WorkProcess() {
  return (
    <section>
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl mt-2">
          Work Process
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-white">
          Choosing the right digital marketing partner is crucial for your institution's success. Here's why we stand out.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <GlowingCard key={index} className="bg-glass h-full transition-all duration-300 flex flex-col text-left">
            <CardHeader>
                <div className="flex justify-between items-start">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center border border-white/20">
                    {step.icon}
                </div>
                <span className="font-headline text-4xl font-bold text-foreground/10">{step.step}</span>
                </div>
                <CardTitle className="pt-4 font-headline text-xl text-white">{step.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-white">{step.description}</p>
              <Button variant="link" className="text-white mt-4 px-0">
                Read more <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </GlowingCard>
        ))}
      </div>
    </section>
  );
}
