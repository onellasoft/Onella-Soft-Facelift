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
import { toast } from '@/hooks/use-toast';
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  ChevronRight,
} from 'lucide-react';
import { SparklesCore } from '@/components/ui/sparkles';
import { Footer } from '@/components/onella/Footer';

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

export default function SupportPage() {
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
      title: 'Message Sent!',
      description: 'We have received your message and will get back to you shortly.',
    });
    form.reset();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
       <main className="flex-grow">
         <section className="relative w-full overflow-hidden bg-background py-24 sm:py-32">
          <div className="absolute inset-0">
            <SparklesCore
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              particleColor="#FFFFFF"
              className="w-full h-full"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90"></div>
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <div className="flex items-center justify-center gap-1 text-sm font-medium text-white mb-4">
                    <span>HOME</span>
                    <ChevronRight className="h-4 w-4 text-white" />
                    <span className="text-white">SUPPORT</span>
                </div>
                <h1 className="text-white text-4xl sm:text-5xl font-bold tracking-tight">
                    Get In Touch
                </h1>
                <p className="mt-6 text-lg leading-8 text-white">
                    Have a question or a project in mind? We'd love to hear from you.
                </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="bg-card/30 p-8 rounded-2xl">
                        <h2 className="font-headline text-3xl font-bold text-white mb-8">Get In Touch !</h2>
                        <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="flex items-center gap-2 text-white">
                                    <User className="h-5 w-5" /> Full Name
                                </FormLabel>
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
                                <FormLabel className="flex items-center gap-2 text-white">
                                    <Mail className="h-5 w-5" /> Email Address
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="Email :" {...field} className="bg-background/50 border-white/20"/>
                               - </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="flex items-center gap-2 text-white">
                                    <Phone className="h-5 w-5" /> Mobile Number
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="Phone :" {...field} className="bg-background/50 border-white/20"/>
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
                                <FormLabel className="flex items-center gap-2 text-white">
                                    <MessageSquare className="h-5 w-5" /> Message
                                </FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Message :" {...field} className="bg-background/50 border-white/20" rows={5}/>
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <Button type="submit" className="w-full bg-primary text-primary-foreground text-lg py-6 mt-4 hover:bg-primary/90">
                            Send Message
                            </Button>
                        </form>
                        </Form>
                    </div>
                    <div className="w-full h-[400px] md:h-full rounded-2xl overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.1691942044813!2d73.78498877527663!3d18.58810218253724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b91873115457%3A0x13c72f3e83de3551!2sOnella%20Soft!5e0!3m2!1sen!2sin!4v1722421379103!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
