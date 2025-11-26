
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { GlowingCard } from '@/components/ui/glowing-card';
import { Button as MovingBorderButton } from '@/components/ui/moving-border';
import { ArrowRight, CheckSquare } from 'lucide-react';

export function AttractGuests() {
  const image = PlaceHolderImages.find(
    (img) => img.id === 'hospitality-attract'
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
                className="rounded-lg object-cover w-full h-full aspect-[4/3]"
              />
            </GlowingCard>
          )}
        </div>
        <div className="flex items-center p-6">
          <div>
            <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl">
              Attract More Guests and Drive Direct Bookings
            </h2>
            <p className="mt-4 text-white">
              We are a specialized digital marketing agency that intimately knows the unique challenges of hotel and restaurant brands. Our team's deep understanding of hotel operations and restaurant trends helps us craft effective campaigns.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-white">
              <li className="flex items-start gap-3">
                <CheckSquare className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <span>Useful travel updates to stay relevant with the real-time updates</span>
              </li>
               <li className="flex items-start gap-3">
                <CheckSquare className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <span>Profitable ad strategies that reduce reliance on OTAs and increase profitability</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckSquare className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <span>Content-driven process that ensures your brand’s voice resonates your audience</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckSquare className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <span>Proven results for hotels and restaurants to drive more direct bookings</span>
              </li>
            </ul>
             <MovingBorderButton
                containerClassName="h-11 w-auto mt-6"
                className="bg-transparent text-white px-8"
                borderRadius="0.5rem"
              >
                Explore Solutions <ArrowRight className="ml-2 h-4 w-4" />
              </MovingBorderButton>
          </div>
        </div>
      </div>
    </section>
  );
}
