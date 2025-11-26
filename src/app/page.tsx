import { Hero } from '@/components/onella/Hero';
import { WhoWeAre } from '@/components/onella/WhoWeAre';
import { WhatWeDo } from '@/components/onella/WhatWeDo';
import { WorkProcess } from '@/components/onella/WorkProcess';
import { Footer } from '@/components/onella/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
      <main className="flex-grow">
        <Hero />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24 py-16 md:py-24">
          <WhoWeAre />
          <WorkProcess />
          <WhatWeDo />
        </div>
      </main>
      <Footer />
    </div>
  );
}
