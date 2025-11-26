import { SocialMediaHero } from '@/components/ui/social-media-hero';
import { ManageSocial } from '@/components/onella/ManageSocial';
import { StrengthenBrand } from '@/components/onella/StrengthenBrand';
import { SocialPlatforms } from '@/components/onella/SocialPlatforms';
import { SocialFeatures } from '@/components/onella/SocialFeatures';
import { IntegratedFavorites } from '@/components/onella/IntegratedFavorites';
import { GetInTouch } from '@/components/onella/GetInTouch';
import { Footer } from '@/components/onella/Footer';

export default function SocialMediaMarketingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
      <main className="flex-grow">
        <SocialMediaHero />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24 py-24 md:py-32">
          <ManageSocial />
          <StrengthenBrand />
          <SocialPlatforms />
          <SocialFeatures />
          <IntegratedFavorites />
        </div>
        <GetInTouch />
      </main>
      <Footer />
    </div>
  );
}
