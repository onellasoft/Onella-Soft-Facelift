
import { Button } from "@/components/ui/button";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { SparklesCore } from "@/components/ui/sparkles";

export function RealEstateHero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-start text-left overflow-hidden">
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
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl bg-glass p-8 rounded-lg shadow-2xl">
          <h1 className="text-white text-4xl sm:text-5xl font-bold tracking-tight">
            No 1 digital marketing agency for real estate
          </h1>
          <p className="mt-4 text-neutral-200 text-lg">
            We are a 360-degree digital marketing agency that specializes in
            real estate branding and marketing for real estate.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <MovingBorderButton
              containerClassName="h-11"
              className="bg-transparent text-white px-8"
              borderRadius="0.5rem"
            >
              Get a Free Proposal
            </MovingBorderButton>
            <Button variant="outline" className="bg-transparent text-white border-white">
              Our Process
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
