import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { GlowingCard } from '../ui/glowing-card';

export function SEOReporting() {
  const image = PlaceHolderImages.find(
    (img) => img.id === 'seo-reporting-analytics'
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
              SEO Reporting and Analytics
            </h2>
            <p className="mt-4 text-white">
              SEO reporting and analytics are crucial for understanding and improving a website's performance in search engine rankings. SEO reporting involves tracking and documenting data related to key performance indicators (KPIs) like keyword rankings, organic traffic, back-links, and technical health.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
