import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Footer } from '@/components/onella/Footer';
import { GetInTouch } from '@/components/onella/GetInTouch';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function SeoUxPage() {
  const image = PlaceHolderImages.find(
    (img) => img.id === 'blog-seo-ux'
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
              Why SEO & UX Are Your Website's Dream Team
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
                Ever landed on a website that was super hard to use? Maybe you couldn't find what you were looking for, or it looked messy on your phone. You probably left pretty quickly, right? Well, search engines like Google don't like those websites either! And that's where SEO (Search Engine Optimization) and UX (User Experience) come in. They might sound like fancy terms, but they're basically best friends when it comes to making your website successful.
              </p>

              <h2 className="text-white font-headline">What is SEO?</h2>
              <p>
                Think of SEO as making your website easy for search engines to find and understand. When someone types something into Google, SEO helps your website show up higher in the results. This means more people see your site!
              </p>

              <h2 className="text-white font-headline">What is UX?</h2>
              <p>
                UX is all about making your website easy and enjoyable for people to use. It's about how it looks, how it feels, and how simple it is to navigate. A good UX means visitors stay longer, find what they need, and have a positive experience.
              </p>

              <h2 className="text-white font-headline">Why Do They Need Each Other?</h2>
              <p>
                Here's the cool part: SEO and UX work hand-in-hand.
              </p>
              <ul>
                <li><strong>Google loves happy users:</strong> If people come to your site and have a great experience (good UX), Google notices! They see that your site is helpful and relevant, which can boost your SEO.</li>
                <li><strong>Easy to find, easy to use:</strong> You can have the best content in the world, but if no one can find it (bad SEO) or it's a nightmare to read (bad UX), it won't help your business.</li>
                <li><strong>More time on your site:</strong> When your site is well-designed and easy to use, visitors spend more time exploring. This "dwell time" is another signal to Google that your site is valuable.</li>
                <li><strong>Lesser "bounce rate":</strong> A high "bounce rate" means people are leaving your site quickly. A good UX keeps them engaged, which helps your SEO.</li>
              </ul>

              <h2 className="text-white font-headline">Simple Ways to Make Your Website SEO & UX Friendly:</h2>
              <p>
                You don't need to be a tech wizard to make your website better for both search engines and users. Here are a few simple tips:
              </p>
              <ul>
                <li><strong>Make it mobile-friendly:</strong> Most people browse on their phones. Your website must look good and be easy to use on any device.</li>
                <li><strong>Fast loading speed:</strong> No one likes waiting! Optimize your images and code to make your website load quickly.</li>
                <li><strong>Clear navigation:</strong> Make it super easy for visitors to find what they're looking for. Use clear menus and links.</li>
                <li><strong>Easy-to-read content:</strong> Use short paragraphs, headings, and bullet points. Break up long blocks of text.</li>
                <li><strong>High-quality images and videos:</strong> Visuals make your site more engaging and professional.</li>
                <li><strong>Valuable content:</strong> Provide helpful, interesting, and unique content that answers your visitors' questions.</li>
              </ul>

              <h2 className="text-white font-headline">The Takeaway</h2>
              <p>
                In today's digital world, having a great website isn't just about looking pretty. It's about being found and being useful. By focusing on both SEO and UX, you're not just pleasing search engines; you're pleasing your potential customers. And that's the ultimate goal for any business!
              </p>
              <p>
                Ready to make your website a magnet for new customers? Contact Onella Soft today to learn how our SEO and UX strategies can help your business grow!
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
