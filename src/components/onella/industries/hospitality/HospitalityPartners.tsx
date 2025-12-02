
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const partnerIds = [
  'hospitality-img-1',
  'hospitality-img-2',
  'hospitality-img-3',
  'hospitality-img-4',
];

export function HospitalityPartners() {
  const partnerImages = partnerIds.map(id => PlaceHolderImages.find(img => img.id === id)).filter(Boolean);

  return (
    <section className="bg-background py-16">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {partnerImages.map((image, index) => (
            image && (
              <div key={index} className="overflow-hidden rounded-xl group">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={400}
                  height={500}
                  data-ai-hint={image.imageHint}
                  className="w-full h-full object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
