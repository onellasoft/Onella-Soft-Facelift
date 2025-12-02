
import { Footer } from '@/components/onella/Footer';

export default function PrivacyPolicyPage() {
  const lastUpdatedDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-headline text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/70">Last Updated: {lastUpdatedDate}</p>
          <div className="prose prose-invert prose-lg max-w-none text-white/80 mt-8">
            <p>
              We value your privacy and are committed to protecting your personal data. This policy explains what information we collect, how we use it, and your rights under Indian law, including the Digital Personal Data Protection Act, 2023 (DPDP Act).
            </p>

            <h2 className="text-white font-headline !mt-12 !mb-4">1. Information We Collect</h2>
            <p>We collect:</p>
            <ul>
                <li>Personal details (name, email, phone, company, project info)</li>
                <li>Technical data (IP address, device, browser, pages visited)</li>
                <li>Marketing data from tools like Google Analytics, Meta Pixel, LinkedIn Tag</li>
            </ul>

            <h2 className="text-white font-headline !mt-12 !mb-4">2. How We Use Your Data</h2>
            <p>We use your information to:</p>
            <ul>
                <li>Respond to enquiries</li>
                <li>Provide requested services and proposals</li>
                <li>Improve website experience</li>
                <li>Run analytics, ads, and remarketing</li>
                <li>Send updates or newsletters (only with your consent)</li>
            </ul>
            <p>We never sell your personal data.</p>

            <h2 className="text-white font-headline !mt-12 !mb-4">3. Cookies</h2>
            <p>Our website uses cookies for:</p>
            <ul>
                <li>Essential site functionality</li>
                <li>Analytics</li>
                <li>Advertising and remarketing</li>
            </ul>
            <p>You may disable cookies in your browser settings.</p>

            <h2 className="text-white font-headline !mt-12 !mb-4">4. Sharing of Data</h2>
            <p>We may share data with:</p>
            <ul>
                <li>Internal team members</li>
                <li>Hosting providers</li>
                <li>Analytics and marketing tools</li>
                <li>CRM or email platforms</li>
            </ul>
            <p>Only for business use. No unauthorized sharing.</p>

            <h2 className="text-white font-headline !mt-12 !mb-4">5. Data Storage & Security</h2>
            <p>
              We use secure servers, encryption, and access controls to protect your data. Some data may be processed in other countries by third-party tools.
            </p>

            <h2 className="text-white font-headline !mt-12 !mb-4">6. Your Rights</h2>
            <p>You may:</p>
            <ul>
                <li>Request access or correction of your data</li>
                <li>Ask us to delete your data</li>
                <li>Withdraw consent anytime</li>
                <li>Opt out of marketing communications</li>
            </ul>
            <p>Contact us to exercise these rights.</p>

            <h2 className="text-white font-headline !mt-12 !mb-4">7. Third-Party Links</h2>
            <p>
              We are not responsible for the privacy practices of external websites linked from ours.
            </p>

            <h2 className="text-white font-headline !mt-12 !mb-4">8. Children’s Privacy</h2>
            <p>
              We do not knowingly collect data from individuals under 18.
            </p>

            <h2 className="text-white font-headline !mt-12 !mb-4">9. Grievance Officer</h2>
            <p>As required by Indian law:</p>
            <ul className="list-none !pl-0">
                <li><strong>Name:</strong> Onella Soft</li>
                <li><strong>Email:</strong> info@onellasoft.com</li>
                <li><strong>Phone:</strong> +919834410388</li>
                <li><strong>Address:</strong> Office No - 401, sanskruti enclave, Chilekar Nagar, Vishnu Dev Nagar, Wakad, pune, Pimpri-Chinchwad, Maharashtra 411057</li>
            </ul>

            <h2 className="text-white font-headline !mt-12 !mb-4">10. Updates to This Policy</h2>
            <p>
              We may update this policy periodically. Continued use of the website means you accept the updated version.
            </p>

            <h2 className="text-white font-headline !mt-12 !mb-4">Contact Us</h2>
            <p>For privacy-related queries:</p>
             <ul className="list-none !pl-0">
                <li><strong>Email:</strong> info@onellasoft.com</li>
                <li><strong>Phone:</strong> +919834410388</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
