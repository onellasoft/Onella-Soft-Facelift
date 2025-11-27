
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Footer } from '@/components/onella/Footer';
import { GetInTouch } from '@/components/onella/GetInTouch';
import { ArrowLeft, CheckCircle, Lightbulb, Image as ImageIcon, Sparkles, Star } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ProductPhotographyPage() {
  const image = PlaceHolderImages.find(
    (img) => img.id === 'blog-product-photography'
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
              The Power of Professional Product Photography: Sell More, Look Better!
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
                In today's online world, everyone’s scrolling, scrolling, scrolling. Whether it’s on social media, an e-commerce website, or a blog, we’re constantly bombarded with images. So how do you make your products stand out? The answer is simple: professional product photography.
              </p>
              <p>
                Think about it. When you’re buying something online, what’s the first thing you look at? The pictures, right? If the photos are blurry, dark, or just plain boring, chances are you’ll click away. But if the photos are bright, clean, and show the product in its best light, you’re much more likely to be interested.
              </p>

              <h2 className="text-white font-headline">Why is Professional Product Photography So Important?</h2>
              <p>
                Here are just a few reasons why investing in professional product photos is a game-changer for your business:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 mt-1 text-accent flex-shrink-0" />
                  <span><strong>First Impressions Matter (A Lot!):</strong> Your product photos are often the very first thing a potential customer sees. High-quality images instantly build trust and make your brand look more professional and reliable.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 mt-1 text-accent flex-shrink-0" />
                  <span><strong>Ideas, Don’t Just Tell:</strong> You can describe your product all day long, but nothing beats seeing it. Professional photos allow customers to truly visualize what they’re getting, from every angle and in various settings.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 mt-1 text-accent flex-shrink-0" />
                  <span><strong>Boost Your Sales:</strong> It’s a proven fact: great product photos lead to more sales. When customers can clearly see the quality and features of your product, they’re more likely to hit that “buy now” button.</span>
                </li>
                 <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 mt-1 text-accent flex-shrink-0" />
                  <span><strong>Stand Out from the Crowd:</strong> The online marketplace is crowded. If your competitors have amazing photos and you don’t, guess who’s going to get the attention?</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 mt-1 text-accent flex-shrink-0" />
                  <span><strong>Build Brand Identity:</strong> Consistent, high-quality images help to define your brand’s look and feel. This creates a strong, recognizable identity that customers will remember.</span>
                </li>
              </ul>

              <h2 className="text-white font-headline">What Does "Professional" Even Mean?</h2>
              <p>
                It’s more than just having a fancy camera. Professional product photography involves:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <li className="flex items-start gap-3 p-4 bg-card/50 rounded-lg">
                    <Lightbulb className="h-6 w-6 mt-1 text-accent flex-shrink-0" />
                    <div>
                        <h4 className="font-semibold text-white">Excellent Lighting</h4>
                        <p className="text-sm text-white/80">Making sure your product is well-lit and free of harsh shadows.</p>
                    </div>
                </li>
                <li className="flex items-start gap-3 p-4 bg-card/50 rounded-lg">
                    <Star className="h-6 w-6 mt-1 text-accent flex-shrink-0" />
                     <div>
                        <h4 className="font-semibold text-white">Sharp Focus</h4>
                        <p className="text-sm text-white/80">Every detail should be crisp and clear.</p>
                    </div>
                </li>
                <li className="flex items-start gap-3 p-4 bg-card/50 rounded-lg">
                    <Sparkles className="h-6 w-6 mt-1 text-accent flex-shrink-0" />
                     <div>
                        <h4 className="font-semibold text-white">Consistent Style</h4>
                        <p className="text-sm text-white/80">All your product photos should have a similar look and feel.</p>
                    </div>
                </li>
                <li className="flex items-start gap-3 p-4 bg-card/50 rounded-lg">
                    <ImageIcon className="h-6 w-6 mt-1 text-accent flex-shrink-0" />
                     <div>
                        <h4 className="font-semibold text-white">Appropriate Backgrounds</h4>
                        <p className="text-sm text-white/80">Simple, clean backgrounds that don’t distract from the product.</p>
                    </div>
                </li>
              </ul>
              

              <h2 className="text-white font-headline">Ready to Power Up Your Products?</h2>
              <p>
                If you’re serious about growing your online business, don’t underestimate the power of professional product photography. It’s an investment that pays for itself many times over in increased sales, stronger brand recognition, and happier customers.
              </p>
              <p>
                Onella Soft understands the importance of visual appeal in digital marketing. We can help you connect with professional photographers who specialize in making products shine. Let’s talk about how stunning visuals can transform your online presence!
              </p>
              <p>
                Contact us today for a free consultation...
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
