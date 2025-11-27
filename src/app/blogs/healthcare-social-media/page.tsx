import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Footer } from '@/components/onella/Footer';
import { GetInTouch } from '@/components/onella/GetInTouch';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HealthcareSocialMediaPage() {
  const image = PlaceHolderImages.find(
    (img) => img.id === 'blog-healthcare-social-media'
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
              4 Best Practices to Elevate Your Healthcare Marketing with Social Media
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
                In this blog post, we'll explore four best practices to help you elevate your healthcare marketing with social media.
              </p>

              <h2 className="text-white font-headline">1. Humanize Your Brand</h2>
              <p>
                In the healthcare industry, building trust and credibility is paramount. Social media provides an opportunity to humanize your brand and connect with your audience on a personal level. Share stories about your staff, highlight patient testimonials, and showcase the human side of your organization. By demonstrating empathy, compassion, and authenticity, you can foster stronger connections with your followers and establish your brand as a trusted source of information and care.
              </p>

              <h2 className="text-white font-headline">2. Provide Valuable and Educational Content</h2>
              <p>
                Educating your audience is key to effective healthcare marketing on social media. Share informative and relevant content that addresses common health concerns, dispels myths, and promotes preventive care. Whether it's blog posts, articles, infographics, or videos, strive to provide value to your audience and position your organization as a thought leader in the field. Remember to use plain language and avoid medical jargon to ensure your content is accessible and easy to understand for all demographics.
              </p>

              <h2 className="text-white font-headline">3. Engage and Interact with Your Audience</h2>
              <p>
                Social media is a two-way street, and engagement is essential for building relationships with your audience. Encourage interaction by asking questions, soliciting feedback, and responding promptly to comments and messages. Host live Q&A sessions, share user-generated content, and participate in relevant conversations within your community. By actively engaging with your audience, you can foster a sense of belonging and loyalty while gaining valuable insights into their needs and preferences.
              </p>
              
              <h2 className="text-white font-headline">4. Post Infographics Regularly</h2>
              <p>
                Infographics are visually appealing tools that effectively communicate complex information in a concise and engaging manner. Utilize infographics to summarize research findings, illustrate disease progression or compare treatment options. This type of content grabs attention, enhances understanding, and makes your social media presence more interactive.
              </p>

              <h2 className="text-white font-headline">Conclusion</h2>
              <p>
                Social media offers a powerful platform for healthcare organizations to connect with patients, educate the public, and enhance their marketing efforts. By humanizing your brand, providing valuable content, engaging with your audience, and adhering to HIPAA guidelines, you can elevate your healthcare marketing on social media and achieve meaningful results. Embrace the opportunities that social media presents, and leverage its potential to build stronger relationships, foster trust, and make a positive impact on the health and well-being of your community.
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
