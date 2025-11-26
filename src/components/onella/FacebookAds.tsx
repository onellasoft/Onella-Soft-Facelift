import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { GlowingCard } from '../ui/glowing-card';
import { CheckCircle } from 'lucide-react';

export function FacebookAds() {
  const image = PlaceHolderImages.find(
    (img) => img.id === 'fb-insta-ads'
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
              Facebook and Instagram Ads
            </h2>
            <p className="mt-4 text-white">
              Facebook and Instagram ads are an essential part of a comprehensive social media marketing strategy to reach new and targeted audiences. They give brands access to customized exchanges, videos, and carousels.
            </p>
            <ul className="mt-6 space-y-4 text-white">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <span>Targeting advertising features can help find people based on specific demographics, interests, and behaviors.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <span>Measurable results: Meta Ads Manager provides helpful insights into ad performance, such as reach, engagement, and conversions.</span>
              </li>
               <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <span>Increased reach to people that can grow your organic posts.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
