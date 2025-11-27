import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Footer } from '@/components/onella/Footer';
import { GetInTouch } from '@/components/onella/GetInTouch';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function IndustrialMarketingPage() {
  const image = PlaceHolderImages.find(
    (img) => img.id === 'blog-industrial-marketing'
  );

  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
      <main className="flex-grow">
        <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" asChild className="mb-8">
              <Link href="/blogs">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blogs
              </Link>
            </Button>
            <h1 className="font-headline text-3xl md:text-5xl font-bold text-white leading-tight">
              4 Reasons Why Digital Marketing For Industrial Products Is So Powerful
            </h1>
            
            {image && (
              <div className="my-8 rounded-xl overflow-hidden shadow-2xl shadow-primary/20">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={1200}
                  height={675}
                  data-ai-hint={image.imageHint}
                  className="w-full object-cover"
                  priority
                />
              </div>
            )}

            <div className="prose prose-invert prose-lg max-w-none text-white/80">
              <p>
                The rise of digital marketing has transformed the way industrial products are promoted and sold. Companies are increasingly investing significant amounts in digital marketing, with a growing emphasis on digital advertising, branding, marketing automation, and more. According to a report, B2B companies that focus on products typically allocate 10.4% of their operating costs to marketing. Therefore, if your business hasn't yet embraced digital marketing, now is the perfect time to do so and capitalize on its advantages.
              </p>

              <h2 className="text-white font-headline">1. Improved Conversion Rates</h2>
              <p>
                Digital marketing strategies such as personalized email campaigns, retargeting ads, and optimized landing pages can greatly enhance conversion rates. By segmenting their audience and delivering customized messages, manufacturers can boost the chances of turning leads into customers. Additionally, digital marketing enables A/B testing and ongoing optimization, allowing companies to continually refine their approaches and maximize conversion rates over time.
              </p>

              <h2 className="text-white font-headline">2. Enhanced Customer Engagement and Relationship Building</h2>
              <p>
                A strong manufacturing marketing strategy allows manufacturers to engage with customers on multiple platforms and build stronger relationships. Through social media platforms, email marketing, and personalized content, companies can foster ongoing communication with customers, address their concerns, and provide valuable insights. This engagement helps build trust and loyalty, leading to repeat business and positive word-of-mouth referrals.
              </p>

              <h2 className="text-white font-headline">3. Enhanced Brand Awareness and Reputation Management</h2>
              <p>
                Digital marketing agencies assist manufacturers in enhancing their brand awareness across diverse channels, positioning them as industry leaders. Through consistent publication of informative content online, manufacturers establish themselves as authoritative voices in their field, earning credibility and confidence. Furthermore, digital marketing facilitates efficient reputation management, enabling companies to monitor discussions, respond to feedback, and uphold a favorable brand perception. This cultivates trust among potential customers, ultimately driving higher conversion rates and fostering enduring relationships.
              </p>

              <h2 className="text-white font-headline">4. Cost-Effectiveness and Measurable ROI</h2>
              <p>
                Digital marketing presents a more economical alternative for promoting industrial products compared to traditional marketing approaches. Through digital advertising campaigns like PPC, businesses can allocate their budget according to precise objectives and gauge the return on investment (ROI) accurately. Manufacturers can access real-time data to identify successful marketing strategies and make necessary adjustments.
              </p>
              <p>
                Moreover, digital marketing channels typically entail lower entry barriers than traditional avenues. Small and medium-sized enterprises can vie on a more equitable platform, utilizing tactics such as content marketing, email marketing, and social media marketing without substantial initial expenditures.
              </p>
            </div>
          </div>
        </article>
        <GetInTouch />
      </main>
      <Footer />
    </div>
  );
}
