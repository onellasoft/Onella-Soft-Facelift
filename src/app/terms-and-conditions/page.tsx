
import { Footer } from '@/components/onella/Footer';
import { ChevronRight } from 'lucide-react';

export default function TermsAndConditionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-start gap-1 text-sm font-medium text-white mb-4">
                <span>HOME</span>
                <ChevronRight className="h-4 w-4 text-white" />
                <span className="text-white">TERMS & CONDITIONS</span>
            </div>
          <h1 className="font-headline text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
            Terms and Conditions
          </h1>
          <div className="prose prose-invert prose-lg max-w-none text-white/80">
            <h2 className="text-white font-headline !mb-2">Introduction</h2>
            <p>
              Welcome to Onella Soft. These Terms and Conditions outline the rules and regulations for the use of our website.
            </p>
            <p>
              By accessing this website, we assume you accept these terms and conditions. Do not continue to use Onella Soft website if you do not agree to all of the terms and conditions stated on this page.
            </p>
            
            <h2 className="text-white font-headline">1. Services</h2>
            <p>
              Onella Soft provides digital marketing services including, but not limited to, SEO, social media marketing, content creation, paid advertising, and web design. Specific service details and pricing will be outlined in separate proposals or agreements.
            </p>

            <h2 className="text-white font-headline">2. Intellectual Property</h2>
            <p>
              Unless otherwise stated, Onella Soft and/or its licensors own the intellectual property rights for all material on website. All intellectual property rights are reserved. You may access this from Onella Soft for your own personal use subject to restrictions set in these terms and conditions.
            </p>
            <p>You must not:</p>
            <ul>
                <li>Republish material from Onella Soft</li>
                <li>Sell, rent, or sub-license material from Onella Soft</li>
                <li>Reproduce, duplicate or copy material from Onella Soft</li>
                <li>Redistribute content from Onella Soft</li>
            </ul>

            <h2 className="text-white font-headline">3. User Content</h2>
            <p>
              Any content you submit to our website (e.g., comments, testimonials) grants Onella Soft a non-exclusive, worldwide, irrevocable, royalty-free, sublicensable license to use, reproduce, adapt, publish, translate, and distribute it in any and all media. You warrant that your content does not infringe on any third party's rights.
            </p>

            <h2 className="text-white font-headline">4. Limitation of Liability</h2>
            <p>
              Onella Soft will not be held responsible for any direct, indirect, or consequential loss or damage arising out of or in connection with the use of our website or services. While we strive for accuracy, we do not guarantee the completeness or accuracy of information on this website.
            </p>

            <h2 className="text-white font-headline">5. Privacy</h2>
            <p>
             Your use of our website is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal data. By using this website, you consent to the data practices described in our Privacy Policy.
            </p>

            <h2 className="text-white font-headline">6. Links to Other Websites</h2>
            <p>
              Our website may contain links to third-party websites or services that are not owned or controlled by Onella Soft. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
            </p>

            <h2 className="text-white font-headline">7. Changes to Terms</h2>
            <p>
             Onella Soft reserves the right to revise these terms and conditions at any time as it sees fit, and by using this website you are expected to review these terms on a regular basis.
            </p>

            <h2 className="text-white font-headline">8. Governing Law & Jurisdiction</h2>
            <p>
              These terms will be governed by and interpreted in accordance with the laws of Onella Soft and you submit to the non-exclusive jurisdiction of the state and federal courts located in India for the resolution of any disputes.
            </p>

            <h2 className="text-white font-headline">9. Contact Us</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
