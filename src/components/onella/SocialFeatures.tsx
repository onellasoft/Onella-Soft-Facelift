import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { GlowingCard } from '../ui/glowing-card';
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { ArrowRight } from 'lucide-react';

const features = [
  {
    title: 'Social Media Strategy Development',
    description: 'We\'ll work directly with you to understand your objectives and create a custom-tailored social media strategy.',
  },
  {
    title: 'Paid Social Media Advertising',
    description: 'Maximize your reach and target specific customers with highly effective paid ad campaigns.',
  },
  {
    title: 'Content Creation',
    description: 'From engaging graphics and compelling videos to captivating captions, we craft high-quality, shareable content that resonates with your audience.',
  },
  {
    title: 'Social Media Consultation',
    description: 'Onella Soft provides expert consultation and ongoing support to help you optimize your social media performance. Whether you\'re new to social media or looking to refine your existing strategies.',
  },
];

export function SocialFeatures() {
  return (
    <section>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <GlowingCard key={index} className="bg-glass h-full transition-all duration-300 flex flex-col text-left p-6">
                  <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center border border-white/20 mb-4">
                    <div className="h-8 w-8 rounded-full bg-background" />
                  </div>
                  <h3 className="font-headline text-xl text-white mb-2">{feature.title}</h3>
                  <p className="text-white/80 text-sm flex-grow">{feature.description}</p>
              </GlowingCard>
            ))}
        </div>
        <div className="flex items-center p-6">
          <div>
            <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl">
              Our Great Features
            </h2>
            <p className="mt-4 text-white">
              Our concept-to-digital execution combines creativity, research, and a commitment to results. As a forward-thinking digital marketing company, we start where other technology firms stop—from engaging with social media marketing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
