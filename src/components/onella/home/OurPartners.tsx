
"use client";

import { RulerCarousel, type CarouselItem } from "@/components/ui/ruler-carousel";

export function OurPartners() {
  const originalItems: CarouselItem[] = [
    { id: 1, title: "firsrate company" },
    { id: 2, title: "Kaya Skin Care" },
    { id: 3, title: "Sri Sai Diabetes Centre" },
    { id: 4, title: "Podar Learn School" },
    { id: 5, title: "Unik Super Market" },
    { id: 6, title: "Amrapali E-commerce" },
    { id: 7, title: "Visawa Hotel" },
  ];
  return (
    <section className="bg-background dark:bg-black">
        <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl">
                Our Partners
            </h2>
            <p className="mt-4 text-white/80">
                We are proud to collaborate with a diverse range of businesses, helping them achieve their digital marketing goals.
            </p>
        </div>
        <RulerCarousel originalItems={originalItems} />
    </section>
  );
}
