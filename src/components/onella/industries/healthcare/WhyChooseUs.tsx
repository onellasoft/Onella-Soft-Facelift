import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { GlowingCard } from '@/components/ui/glowing-card';
import { CheckCircle } from 'lucide-react';

const benefits = [
    'We combine healthcare expertise with digital marketing excellence',
    'Our team combines deep market knowledge with a wide-ranging understanding of the healthcare ecosystem',
    'Our strategies are designed to meet patients at every stage of their journey',
    'We provide valuable marketing data that is dedicated to client success'
];

const benefitTitles = [
    'Deep Industry Expertise',
    'Patient-Centric Approach',
    'Data-Driven Results',
];

export function WhyChooseUs() {
  const image = PlaceHolderImages.find(
    (img) => img.id === 'healthcare-why-choose-us'
  );

  return (
    <section>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="flex items-center">
          {image && (
            <GlowingCard className="w-full h-full bg-transparent">
              <Image
                src={image.imageUrl}
                alt={image.description}
                width={600}
                height={700}
                data-ai-hint={image.imageHint}
                className="rounded-lg object-cover w-full h-full aspect-[3/4]"
              />
            </GlowingCard>
          )}
        </div>
        <div className="flex items-center p-6">
          <div>
            <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl">
             We combine healthcare expertise with digital marketing excellence
            </h2>
            <p className="mt-4 text-white">
              At Onella Soft we combine deep market knowledge with a wide-ranging understanding of the healthcare ecosystem. Our strategies are designed to meet patients at every stage of their journey. We provide valuable marketing data that is dedicated to client success.
            </p>
             <ul className="mt-6 space-y-4 text-white">
               <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Deep Industry Expertise</h4>
                  <p className="text-white/80">Our team combines deep market knowledge with a wide-ranging understanding of the healthcare ecosystem.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                 <div>
                  <h4 className="font-semibold">Patient-Centric Approach</h4>
                  <p className="text-white/80">Our strategies are designed to meet patients at every stage of their journey.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                 <div>
                  <h4 className="font-semibold">Data-Driven Results</h4>
                  <p className="text-white/80">We provide valuable marketing data that is dedicated to client success.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
