// @/components/onella/WhatWeDo.tsx
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import { content } from '@/lib/onella-content';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import { GlowingCard } from '../ui/glowing-card';

export function WhatWeDo() {
  const [activeTab, setActiveTab] = useState(content.whatWeDo.services[0].id);

  return (
    <section>
      <div className="text-left max-w-2xl">
        <p className="text-white font-semibold">{content.whatWeDo.superTitle}</p>
        <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl mt-2">
          {content.whatWeDo.title}
        </h2>
        <p className="mt-4 text-white">{content.whatWeDo.subtitle}</p>
      </div>

      <div className="mt-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="grid md:grid-cols-3 gap-8 items-start">
          <TabsList className="flex flex-col h-auto w-full max-w-xs bg-transparent p-0 border border-white rounded-lg">
            {content.whatWeDo.services.map(service => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className="w-full justify-start text-left p-4 data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-lg rounded-none first:rounded-t-lg last:rounded-b-lg"
              >
                {service.title}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="md:col-span-2">
              {content.whatWeDo.services.map(service => {
                const serviceData = content.whatWeDo.services.find(s => s.id === service.id);
                const imageData = PlaceHolderImages.find(img => img.id === serviceData?.imageId);
                return (
                <TabsContent key={service.id} value={service.id}>
                    <GlowingCard className="bg-card/50">
                        <CardContent className="p-8 text-center">
                        {imageData && (
                            <div className="mb-6">
                            <Image
                                src={imageData.imageUrl}
                                alt={imageData.description}
                                width={600}
                                height={400}
                                data-ai-hint={imageData.imageHint}
                                className="rounded-lg object-cover w-full aspect-video shadow-lg"
                            />
                            </div>
                        )}
                        <p className="text-white text-left">
                            {service.description}
                        </p>
                        <Button variant="outline" className="mt-6 bg-foreground text-background">
                            See How It Works <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        </CardContent>
                    </GlowingCard>
                </TabsContent>
              )})}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
