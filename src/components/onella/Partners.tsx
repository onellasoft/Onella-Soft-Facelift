import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const partnerIds = [
  'partner-logo-1',
  'partner-logo-2',
  'partner-logo-3',
  'partner-logo-4',
  'partner-logo-5',
  'partner-logo-6',
];

export function Partners() {
  const partnerImages = partnerIds.map(id => PlaceHolderImages.find(img => img.id === id)).filter(Boolean);

  return (
    <section className="bg-background border-y border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap py-8">
          {partnerImages.map((image, index) => (
            image && (
              <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={150}
                  height={50}
                  data-ai-hint={image.imageHint}
                  className="object-contain"
                />
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
