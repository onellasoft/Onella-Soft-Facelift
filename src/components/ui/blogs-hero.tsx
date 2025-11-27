import { ChevronRight } from 'lucide-react';

export function BlogsHero() {
  return (
    <section className="w-full bg-background pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 text-sm font-medium text-neutral-400 border border-neutral-700 bg-neutral-900/50 rounded-full px-4 py-2 w-fit mx-auto">
          <span>ONELLA SOFT</span>
          <ChevronRight className="h-4 w-4" />
          <span className="text-white">BLOG GRID</span>
        </div>
      </div>
    </section>
  );
}
