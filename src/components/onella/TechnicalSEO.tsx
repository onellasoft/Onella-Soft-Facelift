import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Wrench, ShieldCheck, Search } from 'lucide-react';
import { GlowingCard } from '../ui/glowing-card';

export function TechnicalSEO() {
  const image = PlaceHolderImages.find(
    (img) => img.id === 'technical-seo-audit'
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
              Technical SEO Audits
            </h2>
            <p className="mt-4 text-white">
              Technical SEO Audits involve a business of non-promotional SEO devices. We focus on the technical aspects of your website, ensure that your site is easily accessible to search engines, and facilitates improved crawlability, a better user experience, and signal search rankings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
