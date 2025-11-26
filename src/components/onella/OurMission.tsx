import Image from 'next/image';
import { Button as MovingBorderButton } from '@/components/ui/moving-border';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Send } from 'lucide-react';
import { GlowingCard } from '../ui/glowing-card';

export function OurMission() {
  const missionImage = PlaceHolderImages.find(
    (img) => img.id === 'company-mission'
  );

  return (
    <section>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="flex items-center md:order-2">
          {missionImage && (
            <GlowingCard className="w-full h-full">
              <Image
                src={missionImage.imageUrl}
                alt={missionImage.description}
                width={600}
                height={400}
                data-ai-hint={missionImage.imageHint}
                className="rounded-lg object-cover w-full h-full aspect-video shadow-2xl shadow-primary/20"
              />
            </GlowingCard>
          )}
        </div>
        <div className="flex items-center p-6 md:order-1">
          <div>
            <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl">
              Our Mission
            </h2>
            <p className="mt-4 text-white">
              At Onella Soft, our mission is to be a value-driven digital
              partner, empowering brands through expert digital marketing and
              development services. We go beyond execution by delivering
              strategic insight and innovative solutions that align with our
              clients' core business goals.
            </p>
            <p className="mt-4 text-white">
              With deep industry expertise, we help businesses confidently
              navigate the digital landscape—building lasting partnerships
              based on trust, measurable outcomes, and shared success.
            </p>
            <div className="mt-6">
              <MovingBorderButton
                containerClassName="h-14 w-auto"
                className="bg-transparent text-white px-8"
                borderRadius="1rem"
              >
                Work With Us <ArrowRight className="ml-2 h-4 w-4" />
              </MovingBorderButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
