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
              src="https://images.unsplash.com/photo-1620021392901-a47e27042217?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwc29jaWFsJTIwbWVkaWF8ZW58MHx8fHwxNzIxODE4NDU1fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Healthcare Social Media"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 w-full shadow"
              data-ai-hint="healthcare socialmedia"
            />
            <Image
              src="https://images.unsplash.com/photo-1557838923-2985c318be48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxoZWFsdGhjYXJlJTIwc29jaWFsJTIwbWVkaWF8ZW58MHx8fHwxNzIxODE4NDU1fDA&ixlib=rb-4.1.0&q=80&w=1080"
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
              src="https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8ZGlnaXRhbCUyMGFkdmVydGlzaW5nfGVufDB8fHx8MTc2NDA3MDY3MXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Google Ads for Healthcare"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 w-full shadow"
              data-ai-hint="digital advertising"
            />
            <Image
              src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxkYXRhJTIwYW5hbHl0aWNzfGVufDB8fHx8MTc2Mzk3Nzk4OHww&ixlib=rb-4.1.0&q=80&w=1080"
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
              src="https://images.unsplash.com/photo-1646392206581-2527b1cae5cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxkb2N0b3IlMjB0YWJsZXR8ZW58MHx8fHwxNzY0MDg4OTU1fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Doctor using a tablet"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 w-full shadow"
              data-ai-hint="doctor tablet"
            />
            <Image
              src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NjM5OTkzMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
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
              src="https://images.unsplash.com/photo-1528823793053-625124b89913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb258ZW58MHx8fHwxNzY0MDY3Nzg2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Video production setup"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 w-full shadow"
              data-ai-hint="video production"
            />
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neXxlbnwwfHx8fDE3MjE4MTg0NTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
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
              src="https://images.unsplash.com/photo-1581093450029-14831599a349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwd2Vic2l0ZXxlbnwwfHx8fDE3MjI0MTM4MTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Healthcare website on a laptop"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 w-full shadow"
              data-ai-hint="healthcare website"
            />
            <Image
              src="https://images.unsplash.com/photo-1522199710521-72d69614c702?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8d2ViJTIwZGVzaWdufGVufDB8fHx8MTc2Mzk3NjQyNXww&ixlib=rb-4.1.0&q=80&w=1080"
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
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl">
          Comprehensive solutions tailored for the Healthcare Industry
        </h2>
      </div>
      <Timeline data={data} />
    </div>
  );
}
