import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { GlowingCard } from '../ui/glowing-card';
import { CheckCircle } from 'lucide-react';

export function BrandAwareness() {
  const image = PlaceHolderImages.find(
    (img) => img.id === 'brand-awareness'
  );

  return (
    <section>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="flex items-center md:order-2">
          {image && (
            <GlowingCard className="w-full h-full">
              <Image
                src={image.imageUrl}
                alt={image.description}
                width={600}
                height={400}
                data-ai-hint={image.imageHint}
                className="rounded-lg object-cover w-full h-full aspect-[4/3] shadow-2xl shadow-primary/20"
              />
            </GlowingCard>
          )}
        </div>
        <div className="flex items-center p-6 md:order-1">
          <div>
            <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl">
              Increased Brand Awareness
            </h2>
            <p className="mt-4 text-white">
              Even if users don’t click on your ad, seeing your brand repeatedly at the top of search results reinforces their brand recognition and tradition.
            </p>
            <ul className="mt-6 space-y-4 text-white">
               <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <span>Targeted Views: You can place your ads before brands appear on the web, making a large audience and increasing visibility.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <span>Creative targeted ads based on specific keywords, interests, behaviors, and demographics to create more brand awareness.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <span>Use visually compelling ads and promos to form an ad that is creative and creates a memorable brand experience.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
