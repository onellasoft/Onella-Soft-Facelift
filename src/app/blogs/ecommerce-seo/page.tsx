import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Footer } from '@/components/onella/Footer';
import { GetInTouch } from '@/components/onella/GetInTouch';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function EcommerceSeoPage() {
  const image = PlaceHolderImages.find(
    (img) => img.id === 'blog-ecommerce-seo'
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
              How Digital Marketing Fuels Your E-commerce Business
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
                In today's world, everyone is shopping online. From clothes to gadgets, groceries to furniture – e-commerce is booming! But with so many online stores out there, how do you make yours stand out? The answer is simple: Digital Marketing.
              </p>
              <p>
                Digital marketing isn't just a fancy term; it's the secret sauce that helps your e-commerce business thrive. Let's see how:
              </p>

              <h2 className="text-white font-headline">1. Get Found Online (and by the Right People!)</h2>
              <p>
                Imagine having a beautiful store tucked away on a hidden street. No one would find it, right? The same goes for your online store. Digital marketing helps people discover your business when they're searching for products you sell.
              </p>
              <p>
                <strong>Search Engine Optimization (SEO):</strong> This is like putting up clear signs for Google. When someone types “best running shoes” or “unique handmade jewelry,” SEO helps your store appear higher in the search results. More visibility means more clicks!
              </p>
              <p>
                <strong>Social Media Marketing:</strong> Billions of people are on Facebook, Instagram, TikTok, and more. We help you showcase your products where your customers spend their time. Imagine showing off your new collection directly to people who love fashion!
              </p>

              <h2 className="text-white font-headline">2. Attract More Customers (and Keep Them Coming Back)</h2>
              <p>
                Once people find you, digital marketing helps you turn them into loyal customers.
              </p>
              <p>
                <strong>Paid Advertising (PPC):</strong> Want instant visibility? We can create targeted ads that show up on Google and social media, reaching people who are actively looking for what you offer. It's like putting your product right in front of someone who's ready to buy.
              </p>
              <p>
                <strong>Email Marketing:</strong> Ever bought something online and then received an email about a special discount or new arrivals? That's email marketing! It's a fantastic way to build relationships, remind customers about your store, and encourage repeat purchases.
              </p>

              <h2 className="text-white font-headline">3. Build Your Brand and Trust</h2>
              <p>
                In the online world, trust is everything. Digital marketing helps you build a strong brand identity and gain customer confidence.
              </p>
              <p>
                <strong>Content Marketing:</strong> Sharing helpful blog posts, fun videos, or informative guides about your products establishes you as an expert. For example, if you sell kitchenware, you could share recipes! This builds trust and shows customers you're more than just a store.
              </p>
              <p>
                <strong>Online Reviews and Reputation Management:</strong> People often check reviews before buying. We help you encourage positive reviews and manage any negative feedback, showing customers that you care about their experience.
              </p>

              <h2 className="text-white font-headline">Ready to Boost Your Online Sales?</h2>
              <p>
                Don't let your amazing products get lost in the vast online marketplace. Digital marketing is the engine that drives traffic, generates sales, and builds a strong brand for your e-commerce business.
              </p>
              <p>
                Onella Soft specializes in helping e-commerce businesses like yours succeed online. We offer tailored digital marketing solutions to fit your unique needs.
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
