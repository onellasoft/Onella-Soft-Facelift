
import { Button } from "@/components/ui/button";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import Link from 'next/link';

export function GetInTouchHome() {
  return (
    <section className="py-16 md:py-24 bg-card/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl">
          Have Question? Get in touch!
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-white/80">
          Start working with Onella Soft that can provide everything you need to generate awareness, drive traffic, connect.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
             <Link href="/support">Get Started Now</Link>
          </Button>
          <MovingBorderButton
            asChild
            containerClassName="h-11 w-auto"
            className="bg-transparent text-white px-8"
            borderRadius="0.5rem"
          >
             <Link href="/about-us">Explore More</Link>
          </MovingBorderButton>
        </div>
      </div>
    </section>
  );
}
