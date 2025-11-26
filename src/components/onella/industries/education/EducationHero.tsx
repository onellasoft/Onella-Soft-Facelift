import { Button } from "@/components/ui/button";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { SparklesCore } from "@/components/ui/sparkles";
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function EducationHero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'education-hero-bg');

  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              layout="fill"
              objectFit="cover"
              className="opacity-30"
              data-ai-hint={heroImage.imageHint}
            />
          )}
        </div>

      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-black/30 backdrop-blur-sm p-8 rounded-lg">
          <h1 className="text-white text-4xl sm:text-5xl font-bold tracking-tight">
            Best Digital Marketing Agency for Educational Institutes
          </h1>
          <p className="mt-4 text-neutral-200 text-lg">
            We're a digital marketing agency dedicated to empowering the education sector. We help institutes reach their full potential and connect with the right students.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
             <Button
              className="bg-white text-black hover:bg-white/90 px-8 h-11"
            >
              Get Started
            </Button>
            <MovingBorderButton
              containerClassName="h-11 w-auto"
              className="bg-transparent text-white px-8"
              borderRadius="0.5rem"
            >
              Explore More
            </MovingBorderButton>
          </div>
        </div>
      </div>
    </section>
  );
}
