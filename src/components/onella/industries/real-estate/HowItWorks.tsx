import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Users, FileText, Video } from 'lucide-react';
import { GlowingCard } from '@/components/ui/glowing-card';
import { Button } from '@/components/ui/button';

const benefits = [
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: 'Customized Digital Marketing Campaigns',
    description: 'We develop custom marketing campaigns based on our clients\' specific requirements to meet their business goals. We are known for our best ROI-driven marketing campaigns.',
  },
  {
    icon: <FileText className="h-8 w-8 text-white" />,
    title: 'Proven Quality and Generate Leads',
    description: 'We are a real estate digital marketing company and our priority is to provide our clients with proven quality leads. We do this with our best digital marketing solutions which includes social media marketing, PPC, and many more.',
  },
  {
    icon: <Video className="h-8 w-8 text-white" />,
    title: 'Data-driven marketing solutions',
    description: 'Being the No.1 digital marketing agency, our team of experts provides our clients with data-driven marketing solutions so our clients stay ahead of their competitors.',
  },
];

export function HowItWorks() {
  return (
    <section>
      <div className="text-center">
        <span className="text-sm font-bold tracking-wider uppercase text-primary">Our Process</span>
        <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl mt-2">
          How Our Real Estate Solutions Work
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-white">
          We are committed to providing ROI-based digital marketing services for our real estate clients to meet their business needs and stay ahead in the market.
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
        <Button>Get a Quote</Button>
      </div>
    </section>
  );
}
