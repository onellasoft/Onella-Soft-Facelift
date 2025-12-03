
'use client';
import {
  HoverSlider,
  TextStaggerHover,
  HoverSliderImageWrap,
  HoverSliderImage,
} from '@/components/ui/HoverSlider';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motion, AnimatePresence } from 'framer-motion';

const sliderData = [
  {
    id: 'local-seo',
    title: 'Local SEO for Indian Businesses',
    description:
      'For businesses targeting local customers in a surrounding area, we optimize your Google My Business profile and implement local SEO strategies to help you appear in local search results and maps.',
    imageId: 'local-seo-indian-business',
  },
  {
    id: 'multilingual-seo',
    title: 'Multi Lingual SEO Strategies',
    description:
      'Multilingual SEO is the process of optimizing websites for multiple languages, enabling businesses to reach wider audiences. We handle technical aspects like site speed, crawlability, and structured data.',
    imageId: 'multilingual-seo',
  },
  {
    id: 'seo-reporting',
    title: 'SEO Reporting and Analytics',
    description:
      "SEO reporting and analytics are crucial for understanding and improving a website's performance. We track and document KPIs like keyword rankings, organic traffic, and back-links.",
    imageId: 'seo-reporting-analytics',
  },
  {
    id: 'technical-seo-audit',
    title: 'Technical SEO Audits',
    description:
      'Technical SEO Audits involve a business of non-promotional SEO devices. We focus on the technical aspects of your website, ensure that your site is easily accessible to search engines, and facilitates improved crawlability, a better user experience, and signal search rankings.',
    imageId: 'technical-seo-audit',
  },
];

export function SeoHoverSlider() {
  const images = sliderData.map((item) => {
    const imageData = PlaceHolderImages.find((img) => img.id === item.imageId);
    return {
      ...item,
      imageUrl: imageData?.imageUrl,
      imageAlt: imageData?.description,
      imageHint: imageData?.imageHint,
    };
  });

  return (
    <section>
      <div className="text-center">
        <span className="text-sm font-bold tracking-wider uppercase text-primary">
          Our Services
        </span>
        <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl mt-2">
          Tailored SEO Solutions
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-white">
          We offer a tailored approach to SEO, developing strategies that align
          with your specific goals and target audience.
        </p>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <HoverSlider>
          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
            <div className="flex flex-col gap-10 lg:gap-16">
              {sliderData.map((item, index) => (
                <div key={item.id} className="flex flex-col gap-2">
                  <h3 className="text-2xl font-semibold text-white">
                    <TextStaggerHover index={index} text={item.title} />
                  </h3>
                  <AnimatePresence>
                     <p className="max-w-md text-muted-foreground">
                        {item.description}
                      </p>
                  </AnimatePresence>
                </div>
              ))}
            </div>
            <div className="sticky top-28">
              <HoverSliderImageWrap className="aspect-video h-auto w-full overflow-hidden rounded-2xl md:aspect-[4/3] lg:aspect-video">
                {images.map(
                  (item, index) =>
                    item.imageUrl && (
                      <HoverSliderImage
                        index={index}
                        key={item.id}
                        src={item.imageUrl}
                        alt={item.imageAlt || ''}
                        data-ai-hint={item.imageHint}
                        className="object-cover"
                      />
                    )
                )}
              </HoverSliderImageWrap>
            </div>
          </div>
        </HoverSlider>
      </div>
    </section>
  );
}
