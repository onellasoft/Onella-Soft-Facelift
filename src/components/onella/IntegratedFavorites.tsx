import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { GlowingCard } from '../ui/glowing-card';
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { ArrowRight } from 'lucide-react';

export function IntegratedFavorites() {
  const image = PlaceHolderImages.find(
    (img) => img.id === 'integrated-favorites'
  );

  return (
    <section>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="flex items-center p-6">
          <div>
            <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl">
              We Integrated your Favorite social media platforms
            </h2>
            <p className="mt-4 text-white">
             Furthermore, social media platforms enable Onella Soft to help your company build together their presence, strengthen customer connections, and drive measurable growth through tailored digital strategies.
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
                className="rounded-lg object-cover w-full h-full aspect-[4/3] shadow-2xl shadow-primary/20"
              />
            </GlowingCard>
          )}
        </div>
      </div>
    </section>
  );
}
