import { GlowingCard } from '../ui/glowing-card';

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
        <path d="M17.48 10.252c.272 0 .53.01.777.025a5.753 5.753 0 0 1-2.926 5.035 5.723 5.723 0 0 1-5.918-.737 5.753 5.753 0 0 1-1.378-6.84c.05-.084.1-.167.158-.248a5.723 5.723 0 0 1 8.528 2.664c.2-.023.394-.04.58-.05zm-5.26-4.996c.272 0 .53.01.777.025a5.753 5.753 0 0 1-2.926 5.035 5.723 5.723 0 0 1-5.918-.737 5.753 5.753 0 0 1-1.378-6.84c.05-.084.1-.167.158-.248a5.723 5.723 0 0 1 8.528 2.664c.2-.023.394-.04.58-.05zM21.03 2.62H2.97C1.33 2.62 0 3.95 0 5.59v12.82c0 1.64 1.33 2.97 2.97 2.97h18.06c1.64 0 2.97-1.33 2.97-2.97V5.59c0-1.64-1.33-2.97-2.97-2.97zM9.47 18.232c-1.04 0-2.02-.3-2.85-.85l.89-.9c.7.45 1.51.72 2.37.72 1.54 0 2.46-.83 2.46-2.05v-5.2h2.23v5.34c0 2.51-1.48 3.87-4.1 3.87zm9.31-3.6c0-2.73-2.22-3.95-4.6-3.95h-2.2v7.7h2.25c2.51 0 4.55-1.28 4.55-3.75zm-2.23-1.68c0 .94-.65 1.48-1.58 1.48h-1.05v-2.9h1.1c.96 0 1.53.52 1.53 1.42z" />
      </svg>
    ),
    title: 'Photoshop',
  },
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
      <div className="mt-12 flex justify-center">
        {technologies.map((tech, index) => (
          <GlowingCard
            key={index}
            className="bg-glass text-center flex flex-col items-center justify-center w-60"
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
