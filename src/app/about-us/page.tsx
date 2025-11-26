import { WhoWeAre } from '@/components/onella/WhoWeAre';
import { WorkProcess } from '@/components/onella/WorkProcess';
import { Footer } from '@/components/onella/Footer';
import AboutHero from '@/components/ui/about-hero';
import { ServicesTimeline } from '@/components/ui/services-timeline';

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
      <main className="flex-grow">
        <AboutHero />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24 py-16 md:py-24">
          <WhoWeAre />
          <WorkProcess />
        </div>
        <ServicesTimeline />
      </main>
      <Footer />
    </div>
  );
}
