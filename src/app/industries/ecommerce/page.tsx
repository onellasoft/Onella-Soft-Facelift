import { EcommerceHero } from '@/components/onella/industries/ecommerce/EcommerceHero';
import { GrowYourBusiness } from '@/components/onella/industries/ecommerce/GrowYourBusiness';
import { OurVision } from '@/components/onella/industries/ecommerce/OurVision';
import { HowItWorks } from '@/components/onella/industries/ecommerce/HowItWorks';
import { GetInTouch } from '@/components/onella/GetInTouch';
import { Footer } from '@/components/onella/Footer';

export default function EcommercePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
      <main className="flex-grow">
        <EcommerceHero />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24 py-16 md:py-24">
          <GrowYourBusiness />
          <OurVision />
          <HowItWorks />
        </div>
        <GetInTouch />
      </main>
      <Footer />
    </div>
  );
}
