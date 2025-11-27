import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { GlowingCard } from '../ui/glowing-card';
import { CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

export function BlogWritingServices() {
  const image = PlaceHolderImages.find(
    (img) => img.id === 'blog-writing'
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
              Blog Writing Services
            </h2>
            <p className="mt-4 text-white">
              Regular blog posts are essential for driving traffic, improving SEO and establishing your brand as a thought leader. We research trending topics and craft shareable blog content.
            </p>
            <ul className="mt-6 space-y-4 text-white">
               <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <span>Keyword Research & Competitor Analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <span>Content Planning & Outline</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <span>We deliver high-quality SEO-optimized blogs with the right title, description, headings.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
