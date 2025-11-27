import { WebDevelopmentHero } from '@/components/ui/web-development-hero';
import { WebDevFeatures } from '@/components/onella/WebDevFeatures';
import { GetNotified } from '@/components/onella/GetNotified';
import { FreeConsultation } from '@/components/onella/FreeConsultation';
import { CustomWebDev } from '@/components/onella/CustomWebDev';
import { EcommerceWebDev } from '@/components/onella/EcommerceWebDev';
import { WebsiteRedesign } from '@/components/onella/WebsiteRedesign';
import { PostLaunchSupport } from '@/components/onella/PostLaunchSupport';
import OrbitingSkills from '@/components/ui/orbiting-skills';
import { Footer } from '@/components/onella/Footer';
import { GetInTouch } from '@/components/onella/GetInTouch';

export default function WebDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
      <main className="flex-grow">
        <WebDevelopmentHero />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24 py-16 md:py-24">
          <WebDevFeatures />
          <GetNotified />
          <FreeConsultation />
          <CustomWebDev />
          <EcommerceWebDev />
          <WebsiteRedesign />
          <PostLaunchSupport />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
          <OrbitingSkills />
        </div>
        <GetInTouch />
      </main>
      <Footer />
    </div>
  );
}
