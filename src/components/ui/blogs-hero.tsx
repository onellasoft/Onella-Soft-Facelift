import { ChevronRight } from 'lucide-react';
import { SparklesCore } from './sparkles';
import Link from 'next/link';

export function BlogsHero() {
  return (
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
                <Link href="/" className="hover:text-white/80 transition-colors">HOME</Link>
                <ChevronRight className="h-4 w-4 text-white" />
                <span className="text-white">BLOGS</span>
            </div>
            <h1 className="text-white text-4xl sm:text-5xl font-bold tracking-tight">
                From the OnellaSoft Blog
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
                Stay informed with our latest articles, insights, and industry trends.
            </p>
        </div>
      </div>
    </section>
  );
}
