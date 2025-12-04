'use client';
import { HomeHero } from '@/components/onella/home/HomeHero';
import { Footer } from '@/components/onella/Footer';
import { Partners } from '@/components/onella/Partners';
import { GrowBusiness } from '@/components/onella/home/GrowBusiness';
import { DigitalSolutions } from '@/components/onella/home/DigitalSolutions';
import { GetInTouchHome } from '@/components/onella/home/GetInTouchHome';
import { ThreeDPhotoCarousel } from '@/components/ui/3d-carousel';

export default function Home() {
  const handlePrimaryClick = () => {
    console.log('Get Started clicked!');
    // Add your logic here
  };

  const handleSecondaryClick = () => {
    console.log('Explore Features clicked!');
    // Add your logic here
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main>
        <HomeHero />
        <div className="relative z-20 bg-background">
          <ThreeDPhotoCarousel />
          <Partners />
          <GrowBusiness />
          <DigitalSolutions />
          <GetInTouchHome />
        </div>
      </main>
      <Footer />
    </div>
  );
}
