import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { GlowingCard } from '../ui/glowing-card';

export function WebsiteRedesign() {
  const image = PlaceHolderImages.find((i) => i.id === 'web-redesign-after');

  return (
    <section>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="flex items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl">
              Website Redesign & Revitalization
            </h2>
            <p className="mt-4 text-white">
             Refresh your online presence with our website redesign services. We revitalize outdated sites, improving aesthetics, functionality, and user experience to re-engage your audience.
            </p>
          </div>
        </div>
        <div className="flex items-center">
          {image && (
            <GlowingCard>
              <Image
                src={image.imageUrl}
                alt={image.description}
                data-ai-hint={image.imageHint}
                width={1920}
                height={1080}
                priority
                className="w-full h-full aspect-video rounded-2xl select-none"
              />
            </GlowingCard>
          )}
        </div>
      </div>
    </section>
  );
}
