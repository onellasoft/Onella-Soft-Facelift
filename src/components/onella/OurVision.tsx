import Image from 'next/image';
import { Button as MovingBorderButton } from '@/components/ui/moving-border';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import { GlowingCard } from '../ui/glowing-card';

export function OurVision() {
  const visionImage = PlaceHolderImages.find(
    (img) => img.id === 'company-vision'
  );

  return (
    <section>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="flex items-center">
          {visionImage && (
            <GlowingCard className="w-full h-full">
              <Image
                src={visionImage.imageUrl}
                alt={visionImage.description}
                width={600}
                height={400}
                data-ai-hint={visionImage.imageHint}
                className="rounded-lg object-cover w-full h-full aspect-video shadow-2xl shadow-primary/20"
              />
            </GlowingCard>
          )}
        </div>
        <div className="flex items-center p-6">
          <div>
            <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl">
              Our Vision
            </h2>
            <p className="mt-4 text-white">
              At Onella Soft, we position ourselves as a reliable and
              innovative digital marketing and development agency, empowering
              businesses with customized solutions that drive measurable
              growth, engagement, and visibility. Our expertise in evolving
              digital trends ensures every strategy aligns with long-term
              business goals.
            </p>
            <p className="mt-4 text-white">
              Our mission is to partner with entrepreneurs and enterprises
              through strategic thinking, transparent communication, and a
              performance-focused approach that fosters sustainable success.
            </p>
            <div className="mt-6">
              <MovingBorderButton
                containerClassName="h-14 w-auto"
                className="bg-transparent text-white px-8"
                borderRadius="1rem"
              >
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </MovingBorderButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
