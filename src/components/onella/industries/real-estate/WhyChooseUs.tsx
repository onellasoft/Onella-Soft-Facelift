import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { GlowingCard } from '@/components/ui/glowing-card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

export function WhyChooseUs() {
  const image = PlaceHolderImages.find(
    (img) => img.id === 'real-estate-why-choose-us'
  );

  return (
    <section>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="flex items-center p-6 md:order-1">
          <div>
             <p className="text-sm font-bold tracking-wider uppercase text-primary">Why Us?</p>
            <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl mt-2">
              Why Choose Onella Soft for Your Real Estate Business marketing?
            </h2>
            <p className="mt-4 text-white">
              We are a team of passionate digital marketing specialists who are committed to delivering the best results. We are well-versed in our digital marketing services to provide a full-service to our clients.
            </p>
            <ul className="mt-6 space-y-4 text-white">
               <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <span>Result-driven services</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <span>Team of real estate experts</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <span>Data-driven marketing</span>
              </li>
            </ul>
             <Button variant="outline" className="mt-6">
                Get a Quote
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
            </GlowingCard>
          )}
        </div>
      </div>
    </section>
  );
}
