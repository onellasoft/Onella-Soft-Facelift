import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { GlowingCard } from '../ui/glowing-card';
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { CheckCircle, ArrowRight } from 'lucide-react';

export function StrengthenBrand() {
  const image = PlaceHolderImages.find(
    (img) => img.id === 'strengthen-brand'
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
              Strengthen Your Brand Voice
            </h2>
            <ul className="mt-6 space-y-4 text-white">
               <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <span>Create a consistent and recognizable identity of business to enhance your brand voice.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <span>leverage brand voice that helps you create a distinct identity in the market.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <span>human-oriented messaging approach, you can gain a loyal customer base with a comprehensive content strategy.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
