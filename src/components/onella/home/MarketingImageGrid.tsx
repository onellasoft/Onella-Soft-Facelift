
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { GlowingCard } from '@/components/ui/glowing-card';

const marketingImages = [
  {
    id: 'what-we-do-seo',
    description: 'A person holding a lightbulb with SEO concepts floating around it.',
    imageHint: 'SEO concept',
  },
  {
    id: 'what-we-do-performance',
    description: 'A dashboard showing performance marketing metrics and charts.',
    imageHint: 'marketing dashboard',
  },
  {
    id: 'what-we-do-social',
    description: 'A grid of social media icons and engagement metrics.',
    imageHint: 'social media',
  },
];

export function MarketingImageGrid() {
  const images = marketingImages.map(item => {
    const imageData = PlaceHolderImages.find((img) => img.id === item.id);
    return { ...item, ...imageData };
  }).filter(item => item.imageUrl);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image) => (
            image.imageUrl && (
              <GlowingCard key={image.id} className="bg-card/50">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={600}
                  height={400}
                  data-ai-hint={image.imageHint}
                  className="rounded-lg object-cover w-full h-full aspect-[4/3] shadow-lg"
                />
              </GlowingCard>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
