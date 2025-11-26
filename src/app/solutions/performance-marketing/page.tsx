import PerformanceMarketingHero from '@/components/ui/performance-marketing-hero';
import { PerformanceWhatWeDo } from '@/components/onella/PerformanceWhatWeDo';
import { FacebookAds } from '@/components/onella/FacebookAds';
import { BrandAwareness } from '@/components/onella/BrandAwareness';
import { GoogleAdsManagement } from '@/components/onella/GoogleAdsManagement';
import { BudgetManagement } from '@/components/onella/BudgetManagement';
import { GetInTouch } from '@/components/onella/GetInTouch';
import { Footer } from '@/components/onella/Footer';

export default function PerformanceMarketingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
      <main className="flex-grow">
        <PerformanceMarketingHero />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24 py-16 md:py-24">
          <PerformanceWhatWeDo />
          <FacebookAds />
          <BrandAwareness />
          <GoogleAdsManagement />
          <BudgetManagement />
        </div>
        <GetInTouch />
      </main>
      <Footer />
    </div>
  );
}
