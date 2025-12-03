
import { Footer } from '@/components/onella/Footer';
import { HomeHero } from '@/components/onella/home/HomeHero';
import { Partners } from '@/components/onella/Partners';
import { GrowBusiness } from '@/components/onella/home/GrowBusiness';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        <HomeHero />
        <Partners />
        <GrowBusiness />
      </main>
      <Footer />
    </div>
  );
}
