import { EducationHero } from '@/components/onella/industries/education/EducationHero';
import { DigitalMarketingForEducation } from '@/components/onella/industries/education/DigitalMarketingForEducation';
import { OurStrategy } from '@/components/onella/industries/education/OurStrategy';
import { WorkProcess } from '@/components/onella/industries/education/WorkProcess';
import { GetInTouch } from '@/components/onella/GetInTouch';
import { Footer } from '@/components/onella/Footer';

export default function EducationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
      <main className="flex-grow">
        <EducationHero />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24 py-16 md:py-24">
          <DigitalMarketingForEducation />
          <OurStrategy />
          <WorkProcess />
        </div>
        <GetInTouch />
      </main>
      <Footer />
    </div>
  );
}
