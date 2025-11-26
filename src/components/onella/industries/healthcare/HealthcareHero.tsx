
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { SparklesCore } from "@/components/ui/sparkles";

export function HealthcareHero() {
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
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto p-8 rounded-lg">
          <h1 className="text-white text-4xl sm:text-5xl font-bold tracking-tight">
            Empowering Healthcare Through Strategic Digital Marketing
          </h1>
          <p className="mt-4 text-neutral-200 text-lg">
            We're your dedicated partner in building a robust online presence, fostering patient trust, and driving measurable growth.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <MovingBorderButton
              containerClassName="h-11 w-auto"
              className="bg-primary text-primary-foreground px-8"
              borderRadius="0.5rem"
            >
              Get Free Consultation
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
