import { Footer } from '@/components/onella/Footer';
import CareerHero from '@/components/ui/career-hero';
import { FeaturedJobs } from '@/components/onella/FeaturedJobs';

export default function CareerPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
      <main className="flex-grow">
        <CareerHero />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24 py-16 md:py-24">
          <FeaturedJobs />
        </div>
      </main>
      <Footer />
    </div>
  );
}
