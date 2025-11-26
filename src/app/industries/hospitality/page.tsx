
import { HospitalityHero } from '@/components/onella/industries/hospitality/HospitalityHero';
import { HospitalityPartners } from '@/components/onella/industries/hospitality/HospitalityPartners';
import { AttractGuests } from '@/components/onella/industries/hospitality/AttractGuests';
import { TailoredServices } from '@/components/onella/industries/hospitality/TailoredServices';
import { HowWeWork } from '@/components/onella/industries/hospitality/HowWeWork';
import { GetInTouch } from '@/components/onella/GetInTouch';
import { Footer } from '@/components/onella/Footer';

export default function HospitalityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
      <main className="flex-grow">
        <HospitalityHero />
        <HospitalityPartners />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24 py-16 md:py-24">
          <AttractGuests />
          <TailoredServices />
          <HowWeWork />
        </div>
        <GetInTouch />
      </main>
      <Footer />
    </div>
  );
}
