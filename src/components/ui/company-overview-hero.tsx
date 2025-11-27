import { ChevronRight } from 'lucide-react';
import { SparklesCore } from './sparkles';

export default function CompanyOverviewHero() {
  return (
    <section className="relative w-full h-[70vh] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0">
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
          <span>HOME</span>
          <ChevronRight className="h-4 w-4 text-white" />
          <span className="text-white">COMPANY OVERVIEW</span>
        </div>
        <h1 className="text-white text-5xl font-bold tracking-tight">
          Company Overview
        </h1>
        <p className="mt-4 text-neutral-300 text-lg leading-relaxed">
          Discover our mission, vision, and the core values that drive us forward.
        </p>
      </div>
    </section>
  );
}
