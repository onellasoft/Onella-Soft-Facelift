
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { SparklesCore } from '@/components/ui/sparkles';
import Link from 'next/link';
import { PhotoGallery } from '@/components/ui/photo-gallery';

export function EcommerceHero() {
  return (
    <>
      <section className="relative w-full min-h-[70vh] flex items-center justify-center text-center overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0">
          <SparklesCore
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            particleColor="#FFFFFF"
            className="w-full h-full"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90"></div>

        <div className="relative z-20 max-w-3xl mx-auto px-6">
          <div className="flex items-center justify-center gap-1 text-sm font-medium text-white mb-4">
            <Link href="/" className="hover:text-white/80 transition-colors">HOME</Link>
            <ChevronRight className="h-4 w-4 text-white" />
            <span>INDUSTRIES</span>
            <ChevronRight className="h-4 w-4 text-white" />
            <span className="text-white">E-COMMERCE</span>
          </div>
          <h1 className="text-white text-4xl sm:text-5xl font-bold tracking-tight">
            Premium Digital Marketing Solutions for E-commerce Businesses
          </h1>
          <p className="mt-4 text-neutral-300 text-lg leading-relaxed">
            We specialize in digital marketing strategies that drive online sales, enhance customer experience, and optimize conversions for e-commerce stores of all sizes.
          </p>
          <MovingBorderButton
            containerClassName="h-11 mt-8"
            className="bg-transparent text-white px-8"
            borderRadius="0.5rem"
          >
            Get Started
          </MovingBorderButton>
        </div>
      </section>
      <section className="bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <PhotoGallery imageSet="ecommerce" />
        </div>
      </section>
    </>
  );
}
