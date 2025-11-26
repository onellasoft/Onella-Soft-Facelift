import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { GlowingCard } from '@/components/ui/glowing-card';
import { Button } from '@/components/ui/button';

export function GrowYourBusiness() {
  const image = PlaceHolderImages.find(
    (img) => img.id === 'ecommerce-grow-business'
  );

  return (
    <section>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="flex items-center">
          {image && (
            <GlowingCard className="w-full h-full bg-transparent border-0">
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
            <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl">
              Onella Soft Grow your E-commerce Business Through Digital Marketing
            </h2>
            <p className="mt-4 text-white">
              At Onella Soft we are more than just a digital marketing agency, we are architects of e-commerce growth. In today's dynamic online marketplace, simply having a product isn't enough. You need to be seen, heard, and desired. We specialize in crafting bespoke digital strategies.
            </p>
            <Button className="mt-6">
                Let&apos;s Grow Your Business
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
