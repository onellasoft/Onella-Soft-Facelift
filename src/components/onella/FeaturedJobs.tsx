
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { Send, Code, PenTool, Target, Users, Brush } from 'lucide-react';
import { FeaturedJobCard } from '@/components/careers/featured-job-card';
import { PulseBeams } from '../ui/pulse-beams';

const jobs = [
  { title: "Senior UX Designer", icon: <PenTool className="h-8 w-8 text-white" />, experience: "3+ Years Experience" },
  { title: "React Frontend Engineer", icon: <Code className="h-8 w-8 text-white" />, experience: "2+ Years Experience" },
  { title: "Marketing Strategist", icon: <Target className="h-8 w-8 text-white" />, experience: "4+ Years Experience" },
  { title: "Consultant", icon: <Users className="h-8 w-8 text-white" />, experience: "2+ Years Experience" },
  { title: "Graphics Designer", icon: <Brush className="h-8 w-8 text-white" />, experience: "1+ Years Experience" },
];

const beams = [
  {
    path: "M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5",
    gradientConfig: {
      initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
      animate: { x1: ["0%", "0%", "200%"], x2: ["0%", "0%", "180%"], y1: ["80%", "0%", "0%"], y2: ["100%", "20%", "20%"] },
      transition: { duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear", repeatDelay: 2, delay: Math.random() * 2 },
    },
    connectionPoints: [{ cx: 6.5, cy: 398.5, r: 6 }, { cx: 269, cy: 220.5, r: 6 }]
  },
  {
    path: "M568 200H841C846.523 200 851 195.523 851 190V40",
    gradientConfig: {
      initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
      animate: { x1: ["20%", "100%", "100%"], x2: ["0%", "90%", "90%"], y1: ["80%", "80%", "-20%"], y2: ["100%", "100%", "0%"] },
      transition: { duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear", repeatDelay: 2, delay: Math.random() * 2 },
    },
    connectionPoints: [{ cx: 851, cy: 34, r: 6.5 }, { cx: 568, cy: 200, r: 6 }]
  },
];

const gradientColors = {
  start: "hsl(var(--primary))",
  middle: "hsl(var(--accent))",
  end: "hsl(var(--primary))"
};

export function FeaturedJobs() {
  return (
    <section>
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl">
          Featured Jobs
        </h2>
        <p className="mt-4 text-white">
          Start working with Onella Soft that can provide everything you need to generate awareness, drive traffic, connect.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-0 gap-x-8 items-center justify-center">
        {jobs.map((job) => (
          <FeaturedJobCard
            key={job.title}
            title={job.title}
            icon={job.icon}
            experience={job.experience}
          />
        ))}
      </div>

      <div className="relative text-center mt-4 flex justify-center items-center py-20">
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <PulseBeams
            beams={beams}
            gradientColors={gradientColors}
            baseColor="hsl(var(--foreground) / 0.1)"
            accentColor="hsl(var(--foreground) / 0.2)"
            width={400}
            height={200}
            className="pointer-events-none"
          />
        </div>
        <MovingBorderButton
          as="a"
          href="mailto:hr@onellasoft.com"
          containerClassName="h-14 w-auto"
          className="bg-transparent text-white px-8"
          borderRadius="1rem"
        >
            Send Your Resume <Send className="ml-2 h-4 w-4" />
        </MovingBorderButton>
      </div>
    </section>
  );
}
