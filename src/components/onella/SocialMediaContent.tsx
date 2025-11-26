import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { GlowingCard } from '../ui/glowing-card';
import { CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

export function SocialMediaContent() {
  const image = PlaceHolderImages.find(
    (img) => img.id === 'social-media-content'
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
              Social Media Content
            </h2>
            <p className="mt-4 text-white">
              From engaging captions to compelling ad copy, we create social media content that sparks conversations, drives engagement, and expands your brand’s online presence.
            </p>
            <ul className="mt-6 space-y-4 text-white">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <span>Graphics or illustrations used to visually enhance content and engage audiences.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <span>Short-form or long-form videos used for storytelling.</span>
              </li>
               <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <span>We provide a well-defined content strategy, ensuring consistency, not just to post.</span>
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
