import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { GlowingCard } from '@/components/ui/glowing-card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function WhoWeAre() {
  const image = PlaceHolderImages.find(
    (img) => img.id === 'real-estate-who-we-are'
  );

  return (
    <section>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="flex items-center">
          {image && (
            <GlowingCard className="w-full h-full bg-transparent">
              <Image
                src={image.imageUrl}
                alt={image.description}
                width={600}
                height={400}
                data-ai-hint={image.imageHint}
                className="rounded-lg object-contain w-full h-full"
              />
            </GlowingCard>
          )}
        </div>
        <div className="flex items-center p-6">
          <div>
            <p className="text-sm font-bold tracking-wider uppercase text-primary">About Us</p>
            <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl mt-2">
              Who We Are: A Team of Real Estate Digital Marketing Specialists
            </h2>
            <p className="mt-4 text-white">
              We are a team of expert digital marketing specialists helping real estate brands to meet their business goals with an extensive range of digital marketing services. We are dedicated to providing the best digital marketing services for the real estate industry, from planning to execution.
            </p>
            <Button variant="link" className="text-white mt-4 px-0">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
