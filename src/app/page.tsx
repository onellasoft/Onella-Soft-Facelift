
'use client';
import Hero from "@/components/ui/animated-shader-hero";
import { Footer } from '@/components/onella/Footer';
import { Partners } from '@/components/onella/Partners';
import { GrowBusiness } from '@/components/onella/home/GrowBusiness';
import { DigitalSolutions } from '@/components/onella/home/DigitalSolutions';
import { GetInTouchHome } from '@/components/onella/home/GetInTouchHome';

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
        <Hero
          trustBadge={{
            text: "Trusted by forward-thinking teams.",
            icons: ["✨"]
          }}
          headline={{
            line1: "Expert Digital Marketing",
            line2: "Solutions for Your Business"
          }}
          subtitle="Generate more leads, boost sales, or enhance your brand's online visibility with our experienced digital marketing specialists."
          buttons={{
            primary: {
              text: "Get Started for Free",
              onClick: handlePrimaryClick
            },
            secondary: {
              text: "Explore Features",
              onClick: handleSecondaryClick
            }
          }}
        />
        <Partners />
        <GrowBusiness />
        <DigitalSolutions />
        <GetInTouchHome />
      </main>
      <Footer />
    </div>
  );
}
