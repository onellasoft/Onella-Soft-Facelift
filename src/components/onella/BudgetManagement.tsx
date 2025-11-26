import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { GlowingCard } from '../ui/glowing-card';
import { CheckCircle } from 'lucide-react';

export function BudgetManagement() {
  const image = PlaceHolderImages.find(
    (img) => img.id === 'budget-management'
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
              Budget Management and Optimization
            </h2>
            <p className="mt-4 text-white">
              Effective budget management and optimization in Google Ads involve a few elements, dynamic ad spend adjustments, and strategic planning. We’re well versed in optimizing ad spend by reallocating your budget where it serves an advertiser’s best interests.
            </p>
             <ul className="mt-6 space-y-4 text-white">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <span>Allocate a specific budget per campaign based on goals.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <span>We’ll find the campaign that aligns with your goals, and we Reach, Clicks, Sessions.</span>
              </li>
               <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <span>Adjust your budget based on your real-time performance and growth of the ad.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
