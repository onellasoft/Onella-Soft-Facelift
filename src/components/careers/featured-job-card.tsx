"use client";

import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { GlowingCard } from "../ui/glowing-card";

export function FeaturedJobCard({ title, icon, experience }: {
  title: string;
  icon: React.ReactNode;
  experience: string;
}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-transparent w-[22rem] h-auto group/card">
        <GlowingCard>
            <div className="p-6">
                <CardItem translateZ="40" className="w-full flex justify-center mb-4">
                  {icon}
                </CardItem>
                <CardItem translateZ="50" className="text-xl text-center font-semibold text-neutral-700 dark:text-white">
                  {title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-center dark:text-neutral-300 text-sm mt-2"
                >
                  {experience}
                </CardItem>
            </div>
        </GlowingCard>
      </CardBody>
    </CardContainer>
  );
}
