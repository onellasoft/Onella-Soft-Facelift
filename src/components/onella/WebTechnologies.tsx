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
        <path d="M17.48 10.252c.272 0 .53.01.777.025a5.753 5.753 0 0 1-2.926 5.035 5.723 5.723 0 0 1-5.918-.737 5.753 5.753 0 0 1-1.378-6.84c.05-.084.1-.167.158-.248a5.723 5.723 0 0 1 8.528 2.664cאין.023.394-.04.58-.05zm-5.26-4.996c.272 0 .53.01.777.025a5.753 5.753 0 0 1-2.926 5.035 5.723 5.723 0 0 1-5.918-.737 5.753 5.753 0 0 1-1.378-6.84c.05-.084.1-.167.158-.248a5.723 5.723 0 0 1 8.528 2.664c.2-.023.394-.04.58-.05zM21.03 2.62H2.97C1.33 2.62 0 3.95 0 5.59v12.82c0 1.64 1.33 2.97 2.97 2.97h18.06c1.64 0 2.97-1.33 2.97-2.97V5.59c0-1.64-1.33-2.97-2.97-2.97zM9.47 18.232c-1.04 0-2.02-.3-2.85-.85l.89-.9c.7.45 1.51.72 2.37.72 1.54 0 2.46-.83 2.46-2.05v-5.2h2.23v5.34c0 2.51-1.48 3.87-4.1 3.87zm9.31-3.6c0-2.73-2.22-3.95-4.6-3.95h-2.2v7.7h2.25c2.51 0 4.55-1.28 4.55-3.75zm-2.23-1.68c0 .94-.65 1.48-1.58 1.48h-1.05v-2.9h1.1c.96 0 1.53.52 1.53 1.42z" />
      </svg>
    ),
    title: 'Photoshop',
  },
   {
    Icon: () => (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-[#d887ff]"
        fill="currentColor"
      >
        <title>Adobe After Effects</title>
        <path d="M22.02 2.6H1.98C.8 2.6 0 3.65 0 4.84v14.32c0 1.19.8 2.24 1.98 2.24h20.04c1.18 0 1.98-1.05 1.98-2.24V4.84c0-1.19-.8-2.24-1.98-2.24zM8.34 16.63h-2.3L4.5 12.3h3.04l.8 4.33zm6.65.25c-1.64 0-3.32-.43-3.32-2.5 0-1.54.9-2.05 2-2.3.69-.15 1.5-.27 2.4-.41.87-.14 1.22-.38 1.22-.82 0-.5-.52-.77-1.3-.77-.82 0-1.6.2-2.35.48l-.37-1.78c.86-.3 2.02-.51 3.2-.51 2.25 0 3.5 1.05 3.5 2.57 0 1.9-1.33 2.4-2.5 2.65-.8.16-1.88.33-2.5.48-.8.2-.95.5-.95.8 0 .42.4.6.9.6.95 0 1.8-.26 2.5-.55l.41 1.77c-.8.36-2.06.6-3.26.6z"/>
      </svg>
    ),
    title: 'After Effects',
  },
  {
    Icon: () => (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-[#0082fb]"
        fill="currentColor"
      >
        <title>Meta</title>
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0Zm3.71 18.29c-1.983 0-3.35-1.464-3.35-3.325 0-.877.34-1.755 1.012-2.522.684-.78 1.58-1.25 2.54-1.25.96 0 1.854.47 2.538 1.25.673.767 1.012 1.645 1.012 2.522 0 1.861-1.367 3.325-3.352 3.325Zm-7.42 0c-1.983 0-3.35-1.464-3.35-3.325 0-.877.34-1.755 1.012-2.522.684-.78 1.58-1.25 2.54-1.25.96 0 1.854.47 2.538 1.25.673.767 1.012 1.645 1.012 2.522 0 1.861-1.367 3.325-3.352 3.325ZM12 9.77c-.93 0-2.02.32-2.02 1.61v.37c.05-.01.1-.01.16-.01.96 0 1.85.47 2.54 1.25.68.78 1.01 1.65 1.01 2.52 0 .87-.34 1.75-1.01 2.52-.69.78-1.58 1.25-2.54 1.25-.96 0-1.85-.47-2.54-1.25a3.32 3.32 0 0 1-1.01-2.52c0-1.29 2.02-1.61 2.02-1.61V9.77Z"/>
      </svg>
    ),
    title: 'Meta Ads',
  },
  {
    Icon: () => (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-[#f9ab00]"
        fill="currentColor"
      >
        <title>Google Analytics</title>
        <path d="M10.15 12.012a9.38 9.38 0 0 0 3.708 0l-1.854-3.21zm.004 0L12 14.78l1.846-2.768h-3.691zM12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zM5.59 10.176h3.208l-3.208 5.564V10.176zm4.568 8.652h3.692l-1.846 3.2zm4.04-8.652h3.209v5.564l-3.209-5.564z"/>
      </svg>
    ),
    title: 'Google Analytics',
  },
  {
    Icon: () => (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-white"
        fill="currentColor"
      >
        <title>DaVinci Resolve</title>
        <path d="M11.64 0C5.21 0 0 5.21 0 11.64c0 6.43 5.21 11.64 11.64 11.64s11.64-5.21 11.64-11.64C23.28 5.21 18.07 0 11.64 0zm5.637 15.347c-3.111 3.111-8.163 3.111-11.274 0-3.111-3.111-3.111-8.163 0-11.274s8.163-3.111 11.274 0c3.111 3.111 3.111 8.163 0 11.274zM11.64 3.73c-4.37 0-7.91 3.54-7.91 7.91s3.54 7.91 7.91 7.91 7.91-3.54 7.91-7.91-3.54-7.91-7.91-7.91zm-2.435 3.325h4.87v2.095h-4.87V7.055zm0 3.79h4.87v2.095h-4.87v-2.095zm0 3.79h4.87v2.095h-4.87v-2.095z"/>
      </svg>
    ),
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
