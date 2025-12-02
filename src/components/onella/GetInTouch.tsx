import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { ArrowRight } from "lucide-react";

export function GetInTouch() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-900 to-neutral-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl">
          Have Question? Get in touch!
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-white">
          Start working with Onella Soft that can provide everything you need to generate awareness, drive traffic, connect.
        </p>
        <div className="mt-8 flex justify-center">
          <MovingBorderButton
            containerClassName="h-14 w-auto"
            className="bg-glass text-white px-8"
            borderRadius="1rem"
          >
            Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
          </MovingBorderButton>
        </div>
      </div>
    </section>
  );
}
