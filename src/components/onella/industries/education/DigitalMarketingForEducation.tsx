import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { GlowingCard } from '@/components/ui/glowing-card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

export function DigitalMarketingForEducation() {
  const image = PlaceHolderImages.find(
    (img) => img.id === 'education-dm'
  );

  return (
    <section>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="flex items-center p-6">
          <div>
            <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl">
              Digital Marketing For Education Industry
            </h2>
            <p className="mt-4 text-white">
              The landscape of Digital Marketing for Education brands is always changing. By connecting with prospects, we enable the education sector to attract national and international mobile audiences.
            </p>
            <ul className="mt-6 space-y-4 text-white">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <span>Lead Generation</span>
              </li>
               <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <span>Branding</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <span>Social Media Marketing</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <span>Website Design & Development</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center">
          {image && (
            <GlowingCard className="w-full h-full">
              <Image
                src={image.imageUrl}
                alt={image.description}
                width={600}
                height={400}
                data-ai-hint={image.imageHint}
                className="rounded-lg object-cover w-full h-full aspect-[4/3]"
              />
            </GlowingCard>
          )}
        </div>
      </div>
    </section>
  );
}
