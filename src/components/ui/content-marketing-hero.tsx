
import { ChevronRight } from 'lucide-react';
import { SparklesCore } from "./sparkles";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ContentMarketingHero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'content-hero');

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
          <span>HOME</span>
          <ChevronRight className="h-4 w-4 text-white" />
          <span>SOLUTIONS</span>
           <ChevronRight className="h-4 w-4 text-white" />
          <span className="text-white">CONTENT MARKETING</span>
        </div>
        <h1 className="text-white text-5xl font-bold tracking-tight">
          Content Marketing is the Best Ever
        </h1>
        <p className="mt-4 text-neutral-300 text-lg leading-relaxed">
          At Onella Soft, a leading digital marketing company in Pune, content marketing and SEO go hand-in-glove. A robust content marketing plan must be based on a sound SEO foundation. Content marketing encompasses the creation and dissemination of content assets like blogs, e-books, guides, infographics, interactive tools, videos, website content, newspaper articles etc.
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
