import { FuturisticIllustration } from './FuturisticIllustration';
import { content } from '@/lib/onella-content';
import { GlowingCard } from '../ui/glowing-card';

export function WhoWeAre() {
  return (
    <section>
      <div className="overflow-hidden bg-card/50">
        <div className="grid md:grid-cols-2">
          <div className="p-6 md:p-8 flex items-center">
            <GlowingCard>
              <FuturisticIllustration />
            </GlowingCard>
          </div>
          <div className="flex items-center p-6 md:p-8">
            <div>
              <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl">
                {content.whoWeAre.title}
              </h2>
              <p className="mt-4 text-white">
                {content.whoWeAre.paragraph1}
              </p>
              <p className="mt-4 text-white">
                {content.whoWeAre.paragraph2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
