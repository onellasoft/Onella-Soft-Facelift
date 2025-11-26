import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { GlowingCard } from '../ui/glowing-card';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

export function FreeConsultation() {
  const image = PlaceHolderImages.find(
    (img) => img.id === 'free-consultation'
  );

  return (
    <section>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="flex items-center md:order-2">
          <div>
            <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl">
              Get Free Consultation For your Business
            </h2>
            <p className="mt-4 text-white">
              Unlock your business's potential with a free consultation. Our experts will analyze your needs and provide strategic insights to help you succeed.
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
