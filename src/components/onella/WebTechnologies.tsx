import CardDemo from '@/components/ui/cards-demo-3';

export function WebTechnologies() {
  return (
    <section className="text-center">
      <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl">
        Webs & Technologies We Use
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-white">
        We leverage the latest and most robust technologies to build cutting-edge web solutions. Our tech stack is chosen to ensure performance, scalability, and a great user experience.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center">
        <CardDemo />
        <CardDemo />
        <CardDemo />
      </div>
    </section>
  );
}
