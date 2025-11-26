
'use client';
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function HospitalityHero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hospitality-hero');
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center text-center overflow-hidden py-24 sm:py-32">
       {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto p-8 rounded-lg">
          <h1 className="text-white text-4xl sm:text-5xl font-bold tracking-tight">
            Expert Digital Marketing Solutions for Hotels, Travel, and Hospitality
          </h1>
          <p className="mt-4 text-neutral-200 text-lg">
            We are a specialized digital marketing agency dedicated to crafting powerful solutions that utilize digital technology to boost hotel bookings and enhance the guest experience.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
             <MovingBorderButton
              containerClassName="h-11 w-auto"
              className="bg-primary text-primary-foreground px-8"
              borderRadius="0.5rem"
            >
              Get Started
            </MovingBorderButton>
            <MovingBorderButton
              containerClassName="h-11 w-auto"
              className="bg-transparent text-white px-8"
              borderRadius="0.5rem"
            >
              Our Process
            </MovingBorderButton>
          </div>
        </div>
      </div>
    </section>
  );
}
