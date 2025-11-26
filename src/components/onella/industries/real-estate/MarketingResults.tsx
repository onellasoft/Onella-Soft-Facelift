'use client';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { GlowingCard } from '@/components/ui/glowing-card';
import { Button as MovingBorderButton } from '@/components/ui/moving-border';
import { ArrowRight } from 'lucide-react';

const results = [
    {
        id: 'real-estate-result-1',
        title: 'Residential Development',
        description: 'A stunning high-rise apartment complex in a prime urban location.',
    },
    {
        id: 'real-estate-result-2',
        title: 'Commercial Real Estate',
        description: 'A modern office building with a sleek glass facade and cityscape views.',
    },
    {
        id: 'real-estate-result-3',
        title: 'Multi-use Complex',
        description: 'A contemporary architectural design with striking color contrasts and sunset lighting.',
    }
]

export function MarketingResults() {
  return (
    <section>
      <div className="text-center">
        <p className="text-sm font-bold tracking-wider uppercase text-primary">Case Studies</p>
        <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl mt-2">
          Our Real Estate Marketing Results
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-white">
          We offer a tailored approach to digital marketing for real estate, developing strategies that align with your specific goals and target audience.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {results.map((result) => {
            const image = PlaceHolderImages.find((img) => img.id === result.id);
            return (
                <GlowingCard key={result.id} className="bg-glass">
                    {image && (
                         <Image
                            src={image.imageUrl}
                            alt={image.description}
                            width={400}
                            height={300}
                            data-ai-hint={image.imageHint}
                            className="rounded-t-lg object-cover w-full aspect-[4/3]"
                        />
                    )}
                    <div className='p-6'>
                        <h3 className="font-headline text-xl text-white mt-4">{result.title}</h3>
                        <p className="text-white/80 mt-2 text-sm">{result.description}</p>
                        <MovingBorderButton
                            as="a"
                            href="#"
                            containerClassName="h-11 w-auto mt-4"
                            className="bg-transparent text-white px-0"
                            borderRadius="0.5rem"
                        >
                            Explore work <ArrowRight className="ml-2 h-4 w-4" />
                        </MovingBorderButton>
                    </div>
                </GlowingCard>
            )
        })}
      </div>
      <div className="text-center mt-12">
        <MovingBorderButton
            containerClassName="h-11 w-auto"
            className="bg-glass text-white px-8"
            borderRadius="0.5rem"
          >
            View All Projects
          </MovingBorderButton>
      </div>
    </section>
  );
}
