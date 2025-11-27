
'use client';

import Image from 'next/image';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button as MovingBorderButton } from '@/components/ui/moving-border';

interface BlogCardProps {
  title: string;
  imageUrl: string;
  imageAlt: string;
  imageHint?: string;
  href?: string;
}

export function BlogCard({
  title,
  imageUrl,
  imageAlt,
  imageHint,
  href = '#',
}: BlogCardProps) {
  return (
    <CardContainer containerClassName="p-0">
      <CardBody className="bg-transparent w-full h-auto group/card rounded-xl">
        <Link href={href} className="block">
          <CardItem translateZ="50" className="w-full">
            <Image
              src={imageUrl}
              height="400"
              width="600"
              data-ai-hint={imageHint}
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt={imageAlt}
            />
          </CardItem>
          <div className="p-4">
            <CardItem
              as="h3"
              translateZ="60"
              className="text-lg font-semibold tracking-wide text-white mt-2"
            >
              {title}
            </CardItem>
            <CardItem
              translateZ="40"
              className="mt-4"
            >
              <MovingBorderButton
                containerClassName="h-11 w-auto"
                className="bg-white text-black"
                borderClassName="bg-[conic-gradient(from_90deg_at_50%_50%,#fff_0%,#fff_50%,#fff_100%)]"
                borderRadius="0.5rem"
              >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
              </MovingBorderButton>
            </CardItem>
          </div>
        </Link>
      </CardBody>
    </CardContainer>
  );
}
