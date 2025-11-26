import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { GlowingCard } from '../ui/glowing-card';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

export function GetNotified() {
  const image = PlaceHolderImages.find(
    (img) => img.id === 'get-notified'
  );

  return (
    <section>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-card/30 p-8 rounded-2xl">
        <div className="flex items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl">
              Get Notified About Important Email
            </h2>
            <p className="mt-4 text-white">
              Stay ahead with instant notifications for crucial emails. Our system ensures you never miss important updates, keeping you informed and responsive.
            </p>
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
                className="rounded-lg object-cover w-full h-full aspect-video shadow-2xl shadow-primary/20"
              />
            </GlowingCard>
          )}
        </div>
      </div>
    </section>
  );
}
