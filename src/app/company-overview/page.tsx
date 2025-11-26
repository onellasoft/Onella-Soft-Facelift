import { Footer } from '@/components/onella/Footer';
import CompanyOverviewHero from '@/components/ui/company-overview-hero';
import { OurVision } from '@/components/onella/OurVision';
import { OurMission } from '@/components/onella/OurMission';

export default function CompanyOverviewPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
      <main className="flex-grow">
        <CompanyOverviewHero />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24 py-16 md:py-24">
          <OurVision />
          <OurMission />
        </div>
      </main>
      <Footer />
    </div>
  );
}
