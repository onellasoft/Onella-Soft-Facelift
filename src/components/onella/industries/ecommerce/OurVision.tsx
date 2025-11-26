import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { GlowingCard } from '@/components/ui/glowing-card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function OurVision() {
  const image = PlaceHolderImages.find(
    (img) => img.id === 'ecommerce-our-vision'
  );

  return (
    <section>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="flex items-center p-6 md:order-1">
          <div>
            <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl">
              Our Vision for Your E-commerce Success
            </h2>
            <p className="mt-4 text-white">
              We have deep understanding of the challenges and opportunities within the e-commerce landscape. We witnessed firsthand the struggles businesses faced in cutting through the digital noise and recognized the critical need for a holistic, results-driven approach to online marketing. Our vision is simple yet profound: to be the trusted partner that empowers e-commerce businesses of all sizes - from budding startups to established enterprises.
            </p>
            <Button variant="outline" className="mt-6">
                Start Your Journey With Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex items-center md:order-2">
          {image && (
            <GlowingCard className="w-full h-full p-4 text-center">
              <Image
                src={image.imageUrl}
                alt={image.description}
                width={600}
                height={400}
                data-ai-hint={image.imageHint}
                className="rounded-lg object-cover w-full h-full aspect-video shadow-2xl shadow-primary/20"
              />
              <h3 className='font-bold mt-4 text-white'>Our Story & Vision</h3>
              <p className='text-sm text-white/80'>Empowering e-commerce businesses of all sizes</p>
            </GlowingCard>
          )}
        </div>
      </div>
    </section>
  );
}
