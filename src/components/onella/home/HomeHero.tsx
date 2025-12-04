
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const FormSchema = z.object({
  fullName: z.string().min(2, {
    message: 'Full name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phone: z.string().min(10, {
    message: 'Phone number must be at least 10 digits.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

export function HomeHero() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'Appointment Registered!',
      description: 'We have received your request and will get back to you shortly.',
    });
    form.reset();
  }

  const backgroundImages = [
    { id: 'digital-marketing-1', src: 'https://picsum.photos/seed/dm1/800/600', hint: 'digital marketing' },
    { id: 'digital-marketing-2', src: 'https://picsum.photos/seed/dm2/800/600', hint: 'social media' },
    { id: 'digital-marketing-3', src: 'https://picsum.photos/seed/dm3/800/600', hint: 'seo analytics' },
    { id: 'digital-marketing-4', src: 'https://picsum.photos/seed/dm4/800/600', hint: 'content strategy' },
    { id: 'digital-marketing-5', src: 'https://picsum.photos/seed/dm5/800/600', hint: 'email campaign' },
    { id: 'digital-marketing-6', src: 'https://picsum.photos/seed/dm6/800/600', hint: 'ppc ads' },
    { id: 'digital-marketing-7', src: 'https://picsum.photos/seed/dm7/800/600', hint: 'influencer marketing' },
    { id: 'digital-marketing-8', src: 'https://picsum.photos/seed/dm8/800/600', hint: 'data dashboard' },
    { id: 'digital-marketing-9', src: 'https://picsum.photos/seed/dm9/800/600', hint: 'web analytics' },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-background pt-32 md:pt-48">
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 opacity-15 [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]">
        {backgroundImages.map((image) => (
          <div key={image.id} className="relative h-full w-full">
            <Image
              src={image.src}
              alt={image.hint}
              data-ai-hint={image.hint}
              fill
              className="object-cover"
              priority
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <p className="text-primary font-semibold">Grow Your Business with</p>
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-white leading-tight mt-2">
              Expert Digital Marketing Solutions
            </h1>
            <p className="mt-4 text-white/80 max-w-lg mx-auto md:mx-0">
              Generate more leads, boost sales, or enhance your brand's online visibility with our experienced digital marketing specialists.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
                <Link href="/about-us">
                  <User className="mr-2" />
                  Meet Us
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20">
                <Link href="/company-overview">
                  Explore Onella Soft <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl shadow-primary/10">
            <h2 className="font-headline text-2xl font-bold text-white mb-2">Register Your Appointment</h2>
            <p className="text-white/70 text-sm mb-6">We're here to help you 24/7 with experts</p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/80">Full Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your name" {...field} className="bg-background/50 border-white/20"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/80">Email Address *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Email" {...field} className="bg-background/50 border-white/20"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/80">Mobile Number *</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="Phone" {...field} className="bg-background/50 border-white/20"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/80">Message *</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Message" {...field} className="bg-background/50 border-white/20" rows={3}/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground text-base"
                >
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
