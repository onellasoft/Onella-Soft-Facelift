import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { GlowingCard } from '../ui/glowing-card';
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { ArrowRight } from 'lucide-react';

export function ManageSocial() {
  const image = PlaceHolderImages.find(
    (img) => img.id === 'manage-smm'
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
              Manage Your Social Media Account
            </h2>
            <p className="mt-4 text-white">
              Years of expertise across various digital marketing channels, social media isn't just a buzzword for us; it's a powerful tool for businesses to reach their customer audience. We take a holistic approach to social media marketing, ensuring we stay ahead of the curve and connect with your target audience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
