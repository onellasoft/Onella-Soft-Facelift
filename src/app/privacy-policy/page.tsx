
import { Footer } from '@/components/onella/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-headline text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-invert prose-lg max-w-none text-white/80">
            <p>
              Your privacy is important to us. It is OnellaSoft's policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate.
            </p>
            <p>
              We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
            </p>
            {/* Add more privacy policy content here */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
