
import Image from 'next/image';

const partnerLogos = [
  { name: 'Marriott', src: 'https://picsum.photos/seed/marriottlogo/140/40', hint: 'logo text' },
  { name: 'Hilton', src: 'https://picsum.photos/seed/hiltonlogo/140/40', hint: 'logo text' },
  { name: 'Hyatt', src: 'https://picsum.photos/seed/hyattlogo/140/40', hint: 'logo text' },
  { name: 'Four Seasons', src: 'https://picsum.photos/seed/fourseasonslogo/140/40', hint: 'logo text' },
  { name: 'Airbnb', src: 'https://picsum.photos/seed/airbnblogo/140/40', hint: 'logo text' },
  { name: 'OpenTable', src: 'https://picsum.photos/seed/opentablelogo/140/40', hint: 'logo text' },
];

export function HospitalityPartners() {
  return (
    <section className="bg-background">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap py-8">
          {partnerLogos.map((logo) => (
            <div key={logo.name} className="grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
                width={140}
                height={40}
                data-ai-hint={logo.hint}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
