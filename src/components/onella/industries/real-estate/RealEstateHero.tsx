
import { Button } from "@/components/ui/button";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { SparklesCore } from "@/components/ui/sparkles";
import { ChevronRight } from "lucide-react";

export function RealEstateHero() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center text-center overflow-hidden">
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
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-transparent p-8 rounded-lg">
          <div className="flex items-center justify-center gap-1 text-sm font-medium text-white mb-4">
            <span>HOME</span>
            <ChevronRight className="h-4 w-4 text-white" />
            <span>INDUSTRIES</span>
            <ChevronRight className="h-4 w-4 text-white" />
            <span className="text-white">REAL ESTATE</span>
          </div>
          <h1 className="text-white text-4xl sm:text-5xl font-bold tracking-tight">
            No 1 digital marketing agency for real estate
          </h1>
          <p className="mt-4 text-neutral-200 text-lg">
            We are a 360-degree digital marketing agency that specializes in
            real estate branding and marketing for real estate.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <MovingBorderButton
              containerClassName="h-11 w-auto"
              className="bg-transparent text-white px-8"
              borderRadius="0.5rem"
            >
              Get a Free Proposal
            </MovingBorderButton>
          </div>
        </div>
      </div>
    </section>
  );
}
