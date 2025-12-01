"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Stethoscope, Megaphone, Share2, Video, Code } from 'lucide-react';

export function HealthcareTimeline() {
  const data = [
    {
      title: "Social Media Marketing",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Strategic social media campaigns to engage patients and build trust across platforms. We create HIPAA-compliant content, drive patient engagement, and establish brand trust.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://picsum.photos/seed/healthcaresocial/500/500"
              alt="Healthcare Social Media"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 w-full shadow"
              data-ai-hint="healthcare socialmedia"
            />
            <Image
              src="https://picsum.photos/seed/patientengagement/500/500"
              alt="Patient engagement on social media"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 w-full shadow"
              data-ai-hint="patient engagement"
            />
          </div>
        </div>
      ),
      icon: <Share2 className="h-4 w-4 text-white" />
    },
    {
      title: "Sponsored Ads",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Targeted PPC campaigns that reach potential patients when they're searching for healthcare services, focusing on Google Ads and social media ads for lead generation.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://picsum.photos/seed/digitalad/500/500"
              alt="Google Ads for Healthcare"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 w-full shadow"
              data-ai-hint="digital advertising"
            />
            <Image
              src="https://picsum.photos/seed/dataanalytic/500/500"
              alt="Healthcare ad analytics"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 w-full shadow"
              data-ai-hint="data analytics"
            />
          </div>
        </div>
      ),
      icon: <Megaphone className="h-4 w-4 text-white" />
    },
    {
      title: "Clinic Software Dev",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Custom software solutions to streamline your clinic's operations and enhance patient experience, including appointment systems, patient portals, and practice management.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://picsum.photos/seed/doctortablet/500/500"
              alt="Doctor using a tablet"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 w-full shadow"
              data-ai-hint="doctor tablet"
            />
            <Image
              src="https://picsum.photos/seed/webdevelopment/500/500"
              alt="Healthcare software development"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 w-full shadow"
              data-ai-hint="web development"
            />
          </div>
        </div>
      ),
      icon: <Stethoscope className="h-4 w-4 text-white" />
    },
    {
      title: "Video Shoot Services",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Professional healthcare video production to showcase your services and build patient trust through doctor interviews, facility tours, and patient testimonials.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://picsum.photos/seed/videoproduction/500/500"
              alt="Video production setup"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 w-full shadow"
              data-ai-hint="video production"
            />
            <Image
              src="https://picsum.photos/seed/healthtech/500/500"
              alt="Doctor explaining on video"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 w-full shadow"
              data-ai-hint="healthcare technology"
            />
          </div>
        </div>
      ),
      icon: <Video className="h-4 w-4 text-white" />
    },
    {
      title: "Healthcare Website Design",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Mobile-friendly, accessible websites designed specifically for healthcare providers, ensuring they are ADA compliant, easy to use, and patient-focused.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://picsum.photos/seed/healthcarewebsite/500/500"
              alt="Healthcare website on a laptop"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 w-full shadow"
              data-ai-hint="healthcare website"
            />
            <Image
              src="https://picsum.photos/seed/webdesignsketch/500/500"
              alt="Website design sketch"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 w-full shadow"
              data-ai-hint="web design"
            />
          </div>
        </div>
      ),
      icon: <Code className="h-4 w-4 text-white" />
    },
  ];

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl">
          Comprehensive solutions tailored for the Healthcare Industry
        </h2>
      </div>
      <Timeline data={data} />
    </div>
  );
}
