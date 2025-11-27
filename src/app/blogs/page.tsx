import { BlogsHero } from '@/components/ui/blogs-hero';
import { BlogGrid } from '@/components/onella/BlogGrid';
import { Footer } from '@/components/onella/Footer';

export default function BlogsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
      <main className="flex-grow">
        <BlogsHero />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <BlogGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
}
