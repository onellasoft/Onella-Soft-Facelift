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
              src="https://picsum.photos/seed/seostrategy/500/500"
              alt="SEO strategy"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 w-full shadow"
              data-ai-hint="SEO strategy"
            />
            <Image
              src="https://picsum.photos/seed/seoanalytics/500/500"
              alt="SEO analytics"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 w-full shadow"
              data-ai-hint="SEO analytics"
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
              src="https://picsum.photos/seed/performancedashboard/500/500"
              alt="Performance marketing dashboard"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 w-full shadow"
              data-ai-hint="marketing dashboard"
            />
            <Image
              src="https://picsum.photos/seed/digitalads/500/500"
              alt="Digital ads"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 w-full shadow"
              data-ai-hint="digital ads"
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
              src="https://picsum.photos/seed/socialplanning/500/500"
              alt="Social media planning"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 w-full shadow"
              data-ai-hint="social media"
            />
            <Image
              src="https://picsum.photos/seed/socialmarketing/500/500"
              alt="Social media marketing"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 w-full shadow"
              data-ai-hint="social media"
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
              src="https://picsum.photos/seed/contentcreation/500/500"
              alt="Content creation"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 w-full shadow"
              data-ai-hint="content creation"
            />
            <Image
              src="https://picsum.photos/seed/copywriting/500/500"
              alt="Copywriting"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 w-full shadow"
              data-ai-hint="copywriting"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
