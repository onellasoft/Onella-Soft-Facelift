import { content } from '@/lib/onella-content';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-background via-primary/10 to-background py-24 sm:py-32">
       <div className="absolute inset-0 animated-gradient bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 opacity-50"></div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="bg-glass rounded-xl p-6 md:p-10 shadow-2xl shadow-primary/10">
            <div className="flex items-center justify-center gap-1 text-sm font-medium text-white">
              <span>{content.hero.breadcrumb.home}</span>
              <ChevronRight className="h-4 w-4 text-white" />
              <span className="text-white">{content.hero.breadcrumb.about}</span>
            </div>
            <h1 className="mt-4 font-headline text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {content.hero.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              {content.hero.subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
