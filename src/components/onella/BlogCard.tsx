
'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

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
    <Card className="bg-transparent w-full h-auto group/card rounded-xl border-0 p-0">
        <Link href={href} className="block">
            <Image
              src={imageUrl}
              height="400"
              width="600"
              data-ai-hint={imageHint}
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt={imageAlt}
            />
          <div className="p-4">
              <h3
              className="text-lg font-semibold tracking-wide text-white mt-2"
            >
              {title}
            </h3>
              <div
              className="mt-4"
            >
              <Button variant="outline" className="text-white">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </Link>
    </Card>
  );
}
