import { ChevronRight } from 'lucide-react';
import { SparklesCore } from "./sparkles";
import Link from 'next/link';

export default function AboutHero() {
  return (
    <section className="relative w-full h-[70vh] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={250}
          particleColor="#FFFFFF"
          className="w-full h-full"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/90"></div>

      <div className="relative z-20 max-w-3xl mx-auto px-6">
        <div className="flex items-center justify-center gap-1 text-sm font-medium text-white mb-4">
          <Link href="/" className="hover:text-white/80 transition-colors">HOME</Link>
          <ChevronRight className="h-4 w-4 text-white" />
          <span>ABOUT</span>
          <ChevronRight className="h-4 w-4 text-white" />
          <span className="text-white">ABOUT US</span>
        </div>
        <h1 className="text-white text-5xl font-bold tracking-tight">
          About Us
        </h1>
        <p className="mt-4 text-neutral-300 text-lg leading-relaxed">
          We are a modern digital agency crafting intelligent, human-centered, and futuristic experiences.
        </p>
      </div>
    </section>
  );
}
