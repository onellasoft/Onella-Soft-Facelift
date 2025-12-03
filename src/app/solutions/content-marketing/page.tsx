import ContentMarketingHero from '@/components/ui/content-marketing-hero';
import { Partners } from '@/components/onella/Partners';
import { SocialMediaContent } from '@/components/onella/SocialMediaContent';
import { BlogWritingServices } from '@/components/onella/BlogWritingServices';
import { SeoContentWriting } from '@/components/onella/SeoContentWriting';
import { WebsiteContentWriting } from '@/components/onella/WebsiteContentWriting';
import { GetInTouch } from '@/components/onella/GetInTouch';
import { Footer } from '@/components/onella/Footer';

export default function ContentMarketingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
      <main className="flex-grow">
        <ContentMarketingHero />
        <Partners />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24 pt-8 md:pt-12 pb-16 md:pb-24">
          <SocialMediaContent />
          <BlogWritingServices />
          <SeoContentWriting />
          <WebsiteContentWriting />
        </div>
        <GetInTouch />
      </main>
      <Footer />
    </div>
  );
}
