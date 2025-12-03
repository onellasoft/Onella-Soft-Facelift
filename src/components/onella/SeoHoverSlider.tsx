'use client';
import {
  HoverSlider,
  TextStaggerHover,
  HoverSliderImageWrap,
  HoverSliderImage,
} from '@/components/ui/HoverSlider';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const sliderData = [
  {
    id: 'seo-slider-1',
    title: 'Grow your traffic',
    description:
      'Higher rankings on search engines mean more visibility for your products or services. This brings in highly qualified traffic from users actively searching for solutions.',
    imageId: 'seo-slider-traffic',
  },
  {
    id: 'seo-slider-2',
    title: 'Get quality leads',
    description:
      'Appearing at the top of search results establishes your brand as an authority and builds trust with potential customers. It also generates quality leads who are more likely to convert.',
    imageId: 'seo-slider-leads',
  },
  {
    id: 'seo-slider-3',
    title: 'Drive more sales',
    description:
      'Ultimately, good advertising translates into increased sales. By reaching the right people, driving more website traffic, and establishing your brand, you will drive more sales for your product or service.',
    imageId: 'seo-slider-sales',
  },
];

export function SeoHoverSlider() {
  const images = sliderData.map((item) => {
    const imageData = PlaceHolderImages.find((img) => img.id === item.imageId);
    return {
      ...item,
      imageUrl: imageData?.imageUrl,
      imageAlt: imageData?.description,
    };
  });

  return (
    <section>
      <div className="text-center">
        <span className="text-sm font-bold tracking-wider uppercase text-primary">
          Work Process
        </span>
        <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl mt-2">
          How it works?
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
                  <p className="max-w-md text-muted-foreground">
                    {item.description}
                  </p>
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
