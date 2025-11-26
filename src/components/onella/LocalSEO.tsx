import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MapPin, Building, Star } from 'lucide-react';
import { GlowingCard } from '../ui/glowing-card';

export function LocalSEO() {
  const image = PlaceHolderImages.find(
    (img) => img.id === 'local-seo-indian-business'
  );

  return (
    <section>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
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
        <div className="flex items-center p-6">
          <div>
            <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl">
              Local SEO for Indian Businesses
            </h2>
            <p className="mt-4 text-white">
              For businesses targeting local customers in a surrounding area, we optimize
              your Google My Business profile and implement local SEO strategies to
              help you appear in local search results and maps.
            </p>
            <ul className="mt-6 space-y-4 text-white">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <span>Focuses on improving the online visibility of businesses in a specific geographic area.</span>
              </li>
              <li className="flex items-start gap-3">
                <Building className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <span>It helps businesses get listed in Google Maps and other search engine results pages.</span>
              </li>
               <li className="flex items-start gap-3">
                <Star className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <span>It is particularly important for businesses that serve local customers.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
