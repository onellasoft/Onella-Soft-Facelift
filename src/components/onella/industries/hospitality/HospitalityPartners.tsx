
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const partnerIds = [
  'partner-marriott',
  'partner-hilton',
  'partner-hyatt',
  'partner-fourseasons',
  'partner-airbnb',
  'partner-opentable'
];

export function HospitalityPartners() {
  const partnerImages = partnerIds.map(id => PlaceHolderImages.find(img => img.id === id)).filter(Boolean);

  return (
    <section className="bg-background">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap py-8">
          {partnerImages.map((logo, index) => (
            logo && (
              <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={logo.imageUrl}
                  alt={logo.description}
                  width={140}
                  height={40}
                  data-ai-hint={logo.imageHint}
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
