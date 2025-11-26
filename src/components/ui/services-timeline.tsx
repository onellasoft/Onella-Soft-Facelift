"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function ServicesTimeline() {
  const data = [
    {
      title: "SEO",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            We improve your visibility on search engines with keyword strategy, 
            technical SEO, and high-quality optimised content.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1562577309-2592ab84b1bc"
              alt="SEO strategy"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 w-full shadow"
            />
            <Image
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
              alt="SEO analytics"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 w-full shadow"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Performance Marketing",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Data-driven paid media campaigns designed to maximize ROI 
            using Google Ads, Meta Ads, and advanced audience segmentation.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1556767576-cf2cdeb4f1fd"
              alt="Performance marketing dashboard"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 w-full shadow"
            />
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              alt="Digital ads"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 w-full shadow"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Social Media Marketing",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Building communities and brand presence through creative storytelling, 
            trends, and platform-specific strategies.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1474631245212-32dc3c8310c6"
              alt="Social media planning"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 w-full shadow"
            />
            <Image
              src="https://images.unsplash.com/photo-1557838923-2985c318be48"
              alt="Social media marketing"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 w-full shadow"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Content Marketing",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Engaging, high-value content crafted to educate, inspire, and convert — 
            blogs, ads, long-form, short-form, and more.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1522199710521-72d69614c702"
              alt="Content creation"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 w-full shadow"
            />
            <Image
              src="https://images.unsplash.com/photo-1581276879432-15a19d654956"
              alt="Copywriting"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 w-full shadow"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen w-full">
      <Timeline data={data} />
    </div>
  );
}
