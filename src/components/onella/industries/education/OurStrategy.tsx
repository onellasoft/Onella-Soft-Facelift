import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { GlowingCard } from '@/components/ui/glowing-card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

export function OurStrategy() {
  const image = PlaceHolderImages.find(
    (img) => img.id === 'education-strategy'
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
              Our Strategy for Reaching the Appropriate Audience in School Marketing
            </h2>
            <p className="mt-4 text-white">
              We are a dedicated digital marketing company specializing exclusively in the education sector, committed to empower high schools and colleges to reach their full potential and connect with the right students for their brands.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-accent" />
                    <span>Branding for Education Sector</span>
                </li>
                <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-accent" />
                    <span>Social Media Marketing for Institutions</span>
                </li>
                <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-accent" />
                    <span>Video Marketing for Educational sector</span>
                </li>
            </ul>
             <Button variant="link" className="text-white mt-4 px-0">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
