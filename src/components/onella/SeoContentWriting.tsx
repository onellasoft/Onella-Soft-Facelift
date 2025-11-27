import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { GlowingCard } from '../ui/glowing-card';
import { CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

export function SeoContentWriting() {
  const image = PlaceHolderImages.find(
    (img) => img.id === 'seo-content'
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
              SEO Content Writing
            </h2>
            <p className="mt-4 text-white">
              We go beyond just keywords. Our SEO content writing strategy focuses on creating high-quality content and meta-tags to the latest search engine algorithms. We conduct thorough keyword research and competitor analysis to ensure your content ranks on google first page.
            </p>
            <ul className="mt-6 space-y-4 text-white">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <span>The goal is to improve a website's ranking in search engine results pages.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <span>Well-written SEO content attracts more users from organic search.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <span>Well-written SEO content can attract leads and convert them into customers.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
