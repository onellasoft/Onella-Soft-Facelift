import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { GlowingCard } from '../ui/glowing-card';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

export function PostLaunchSupport() {
  const image = PlaceHolderImages.find(
    (img) => img.id === 'post-launch-support'
  );

  return (
    <section>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="flex items-center md:order-2">
          <div>
            <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl">
              Post Launch Support & Maintenance
            </h2>
            <p className="mt-4 text-white">
             Our commitment doesn't end at launch. We provide ongoing support and maintenance to ensure your website remains secure, up-to-date, and performing optimally.
            </p>
          </div>
        </div>
        <div className="flex items-center md:order-1">
          {image && (
            <GlowingCard className="w-full h-full">
              <Image
                src={image.imageUrl}
                alt={image.description}
                width={600}
                height={400}
                data-ai-hint={image.imageHint}
                className="rounded-lg object-cover w-full h-full aspect-video shadow-2xl shadow-primary/20"
              />
            </GlowingCard>
          )}
        </div>
      </div>
    </section>
  );
}
