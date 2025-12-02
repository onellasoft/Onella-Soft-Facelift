import { ChevronRight } from 'lucide-react';
import { SparklesCore } from "./sparkles";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import Link from 'next/link';

export default function SeoHero() {
  return (
    <section className="relative w-full h-[70vh] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0">
        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          particleColor="#FFFFFF"
          className="w-full h-full"
        />
         <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{backgroundImage: "url('https://picsum.photos/seed/seohero/1920/1080')"}}
          data-ai-hint="abstract technology"
        ></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90"></div>

      <div className="relative z-20 max-w-3xl mx-auto px-6">
        <div className="flex items-center justify-center gap-1 text-sm font-medium text-white mb-4">
          <Link href="/" className="hover:text-white/80 transition-colors">HOME</Link>
          <ChevronRight className="h-4 w-4 text-white" />
          <span>SOLUTIONS</span>
           <ChevronRight className="h-4 w-4 text-white" />
          <span className="text-white">SEO</span>
        </div>
        <h1 className="text-white text-5xl font-bold tracking-tight">
          An expert search engine optimization
        </h1>
        <p className="mt-4 text-neutral-300 text-lg leading-relaxed">
          SEO is the practice of optimizing your website to rank higher in search engine results pages.
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
