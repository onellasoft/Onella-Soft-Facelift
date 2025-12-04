import { RealEstateHero } from '@/components/onella/industries/real-estate/RealEstateHero';
import { WhoWeAre } from '@/components/onella/industries/real-estate/WhoWeAre';
import { WhyChooseUs } from '@/components/onella/industries/real-estate/WhyChooseUs';
import { HowItWorks } from '@/components/onella/industries/real-estate/HowItWorks';
import { MarketingResults } from '@/components/onella/industries/real-estate/MarketingResults';
import { GetInTouch } from '@/components/onella/GetInTouch';
import { Footer } from '@/components/onella/Footer';

export default function RealEstatePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
      <main className="flex-grow">
        <RealEstateHero />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24 py-16 md:py-24">
          <WhoWeAre />
          <WhyChooseUs />
          <HowItWorks />
          <MarketingResults />
        </div>
        <GetInTouch />
      </main>
      <Footer />
    </div>
  );
}
