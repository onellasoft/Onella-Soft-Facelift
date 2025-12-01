import { HealthcareHero } from '@/components/onella/industries/healthcare/HealthcareHero';
import { HealthcarePartners } from '@/components/onella/industries/healthcare/HealthcarePartners';
import { WhoWeServe } from '@/components/onella/industries/healthcare/WhoWeServe';
import { WhyChooseUs } from '@/components/onella/industries/healthcare/WhyChooseUs';
import { GetInTouch } from '@/components/onella/GetInTouch';
import { Footer } from '@/components/onella/Footer';
import { HealthcareTimeline } from '@/components/ui/healthcare-timeline';

export default function HealthcarePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
      <main className="flex-grow">
        <HealthcareHero />
        <HealthcarePartners />
        <HealthcareTimeline />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24 py-16 md:py-24">
          <WhoWeServe />
          <WhyChooseUs />
        </div>
        <GetInTouch />
      </main>
      <Footer />
    </div>
  );
}
