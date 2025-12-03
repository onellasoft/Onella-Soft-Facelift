import SeoHero from '@/components/ui/seo-hero';
import { TechnicalSEO } from '@/components/onella/TechnicalSEO';
import { GetInTouch } from '@/components/onella/GetInTouch';
import { Footer } from '@/components/onella/Footer';
import { SeoHoverSlider } from '@/components/onella/SeoHoverSlider';

export default function SeoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
      <main className="flex-grow">
        <SeoHero />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24 py-16 md:py-24">
          <SeoHoverSlider />
          <TechnicalSEO />
        </div>
        <GetInTouch />
      </main>
      <Footer />
    </div>
  );
}
