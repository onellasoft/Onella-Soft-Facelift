import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Globe, Languages, Target } from 'lucide-react';
import { GlowingCard } from '../ui/glowing-card';

export function MultilingualSEO() {
  const image = PlaceHolderImages.find(
    (img) => img.id === 'multilingual-seo'
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
              Multi Lingual SEO Strategies (e.g., Hindi, English, etc.)
            </h2>
            <p className="mt-4 text-white">
              Multilingual SEO is the process of optimizing websites for multiple languages, enabling businesses to reach wider audiences.
            </p>
            <ul className="mt-6 space-y-4 text-white">
               <li className="flex items-start gap-3">
                <Globe className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <span>Technical aspects of your website, such as site speed, crawlability, mobile responsiveness, structured data, and sitemaps to ensure search engines can easily access and index your content.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
