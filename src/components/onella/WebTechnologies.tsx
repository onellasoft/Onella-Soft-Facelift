import CardDemo from '@/components/ui/cards-demo-3';
import { GlowingCard } from '../ui/glowing-card';
import { Code, Bot, Database } from 'lucide-react';

const technologies = [
    {
        Icon: Code,
        title: "Frontend Frameworks",
        description: "React & Next.js for fast, modern, and scalable user interfaces.",
    },
    {
        Icon: Bot,
        title: "Generative AI",
        description: "Leveraging Genkit and Gemini for intelligent, AI-powered features.",
    },
    {
        Icon: Database,
        title: "Backend & Database",
        description: "Node.js and Firebase for robust, real-time applications.",
    }
]

export function WebTechnologies() {
  return (
    <section className="text-center">
      <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl">
        Webs & Technologies We Use
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-white">
        We leverage the latest and most robust technologies to build cutting-edge web solutions. Our tech stack is chosen to ensure performance, scalability, and a great user experience.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch justify-center">
        {technologies.map((tech, index) => (
            <GlowingCard key={index} className="bg-glass text-left flex flex-col">
                <div className="p-6 flex-grow">
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center border border-white/20 mb-4">
                        <tech.Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-headline text-xl text-white mb-2">{tech.title}</h3>
                    <p className="text-white/80">{tech.description}</p>
                </div>
            </GlowingCard>
        ))}
      </div>
    </section>
  );
}
