import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { GlowingCard } from '../ui/glowing-card';
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { ArrowRight } from 'lucide-react';
import CardStackDemo from '../ui/card-stack-demo';

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
        <div className="flex items-center justify-center">
            <CardStackDemo />
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
