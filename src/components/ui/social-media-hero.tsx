
import { ChevronRight } from 'lucide-react';
import { SparklesCore } from "./sparkles";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export function SocialMediaHero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'smm-hero');

  return (
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
          <span>SOLUTIONS</span>
           <ChevronRight className="h-4 w-4 text-white" />
          <span className="text-white">SOCIAL MEDIA MARKETING</span>
        </div>
        <h1 className="text-white text-5xl font-bold tracking-tight">
          Social Media Marketing That Drives Results
        </h1>
        <p className="mt-4 text-neutral-300 text-lg leading-relaxed">
          As a top social media marketing company in Pune, we know that platforms like Instagram, Facebook, and LinkedIn are not just for engagement but crucial for driving customer conversions. Social media marketing is a prominent aspect of digital marketing. Working with the best social media agency in India ensures you stay ahead of trends, build your brand, and grow your digital presence.
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
  );
}
