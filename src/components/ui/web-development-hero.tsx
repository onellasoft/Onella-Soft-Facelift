
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button as MovingBorderButton } from '@/components/ui/moving-border';
import { ArrowRight } from 'lucide-react';
import { GlowingCard } from './glowing-card';
import { SparklesCore } from './sparkles';
import Link from 'next/link';

export function WebDevelopmentHero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'web-dev-hero');

  return (
    <section className="relative w-full overflow-hidden bg-background py-24 sm:py-32">
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
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-1 gap-12 items-center">
            <div className="text-center">
                 <div className="flex items-center justify-center gap-1 text-sm font-medium text-white mb-4">
                    <Link href="/" className="hover:text-white/80 transition-colors">HOME</Link>
                    <ChevronRight className="h-4 w-4 text-white" />
                    <span>SOLUTIONS</span>
                    <ChevronRight className="h-4 w-4 text-white" />
                    <span className="text-white">WEB DEVELOPMENT</span>
                </div>
                <h1 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-6xl">
                    We don't just build websites We build digital experiences
                </h1>
                <p className="mt-6 text-lg leading-8 text-white max-w-3xl mx-auto">
                    As a premier web design and development company, we create captivating, high-performance websites that engage your audience and drive business growth. Our expert team combines creative design with robust functionality to deliver seamless digital experiences.
                </p>
                <div className="mt-8 flex justify-center">
                    <MovingBorderButton
                        containerClassName="h-11"
                        className="bg-transparent text-white px-8"
                        borderRadius="0.5rem"
                    >
                        Get a Quote
                    </MovingBorderButton>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
