
import { Footer } from '@/components/onella/Footer';

export default function TermsAndConditionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-headline text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
            Terms & Conditions
          </h1>
          <div className="prose prose-invert prose-lg max-w-none text-white/80">
            <p>
              By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
            </p>
            <p>
              If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trade mark law.
            </p>
            {/* Add more terms and conditions content here */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
