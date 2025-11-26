import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { GlowingCard } from '../ui/glowing-card';
import { CheckCircle } from 'lucide-react';

export function GoogleAdsManagement() {
  const image = PlaceHolderImages.find(
    (img) => img.id === 'google-ads'
  );

  return (
    <section>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="flex items-center">
          {image && (
            <GlowingCard className="w-full h-full">
              <Image
                src={image.imageUrl}
                alt={image.description}
                width={600}
                height={400}
                data-ai-hint={image.imageHint}
                className="rounded-lg object-cover w-full h-full aspect-[4/3] shadow-2xl shadow-primary/20"
              />
            </GlowingCard>
          )}
        </div>
        <div className="flex items-center p-6">
          <div>
            <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl">
              Google Ads Management
            </h2>
            <p className="mt-4 text-white">
             Onella Soft is a leading Google Ads Marketing Company in Pune, India. Our team is a Google Ads certified team that ensures a smooth and balanced process to help you boost your paid search campaign and outgrow your competition.
            </p>
             <ul className="mt-6 space-y-4 text-white">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <span>We work with you to help you turn your landing page visitors into customers.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <span>You’ll understand every detail about your campaign’s performance, including your progress.</span>
              </li>
               <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <span>We give you our full time and devotion to make sure we make results-oriented campaigns.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
