import { GlowingCard } from '../ui/glowing-card';
import { Figma, Film, Sparkles, LineChart, Video } from 'lucide-react';

const technologies = [
  {
    Icon: () => (
       <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-[#31A8FF]"
        fill="currentColor"
      >
        <title>Adobe Photoshop</title>
        <path d="M21.525 2.475H2.475C1.113 2.475 0 3.588 0 4.95v14.1C0 20.412 1.113 21.525 2.475 21.525h19.05C22.887 21.525 24 20.412 24 19.05V4.95c0-1.362-1.113-2.475-2.475-2.475zM8.34 16.63h-2.3L4.5 12.3h3.04l.8 4.33zm6.65.25c-1.64 0-3.32-.43-3.32-2.5 0-1.54.9-2.05 2-2.3.69-.15 1.5-.27 2.4-.41.87-.14 1.22-.38 1.22-.82 0-.5-.52-.77-1.3-.77-.82 0-1.6.2-2.35.48l-.37-1.78c.86-.3 2.02-.51 3.2-.51 2.25 0 3.5 1.05 3.5 2.57 0 1.9-1.33 2.4-2.5 2.65-.8.16-1.88.33-2.5.48-.8.2-.95.5-.95.8 0 .42.4.6.9.6.95 0 1.8-.26 2.5-.55l.41 1.77c-.8.36-2.06.6-3.26.6z" />
      </svg>
    ),
    title: 'Photoshop',
  },
  {
    Icon: () => <Film className="h-8 w-8 text-[#d887ff]" />,
    title: 'After Effects',
  },
  {
    Icon: () => <Figma className="h-8 w-8 text-white" />,
    title: 'Figma',
  },
  {
    Icon: () => <LineChart className="h-8 w-8 text-[#f9ab00]" />,
    title: 'Google Analytics',
  },
  {
    Icon: () => <Video className="h-8 w-8 text-white" />,
    title: 'DaVinci Resolve',
  }
];

export function WebTechnologies() {
  return (
    <section className="text-center">
      <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl">
        Website Technologies We Use
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-white">
        As one of India's leading web developers, our advanced technology
        solutions—including web applications, and mobile apps—encompass a range
        of services that help us respond to customer demands quickly and
        efficiently.
      </p>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center">
        {technologies.map((tech, index) => (
          <GlowingCard
            key={index}
            className="bg-glass text-center flex flex-col items-center justify-center"
          >
            <div className="p-6 flex-grow flex flex-col items-center justify-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <tech.Icon />
              </div>
              <h3 className="font-headline text-lg text-white">
                {tech.title}
              </h3>
            </div>
          </GlowingCard>
        ))}
      </div>
    </section>
  );
}
