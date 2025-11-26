import { CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { content } from '@/lib/onella-content';
import { Lightbulb, Milestone, Target, ChevronRight } from 'lucide-react';
import { GlowingCard } from '../ui/glowing-card';

const icons = {
  discover: <Lightbulb className="h-8 w-8 text-white" />,
  strategize: <Milestone className="h-8 w-8 text-white" />,
  optimize: <Target className="h-8 w-8 text-white" />,
};

export function WorkProcess() {
  return (
    <section>
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl">
          {content.workProcess.title}
        </h2>
        <p className="mt-2 text-lg text-white">{content.workProcess.subtitle}</p>
        <p className="mt-4 max-w-2xl mx-auto text-white">{content.workProcess.subtext}</p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <ProcessCard
          step="01"
          title={content.workProcess.steps[0].title}
          description={content.workProcess.steps[0].description}
          icon={icons.discover}
        />
        
        <ProcessCard
          step="02"
          title={content.workProcess.steps[1].title}
          description={content.workProcess.steps[1].description}
          icon={icons.strategize}
        />

        <ProcessCard
          step="03"
          title={content.workProcess.steps[2].title}
          description={content.workProcess.steps[2].description}
          icon={icons.optimize}
        />
      </div>
    </section>
  );
}

interface ProcessCardProps {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

function ProcessCard({ step, title, description, icon }: ProcessCardProps) {
  return (
    <GlowingCard className="bg-glass h-full transition-all duration-300 flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center border border-white/20">
            {icon}
          </div>
          <span className="font-headline text-4xl font-bold text-foreground/10">{step}</span>
        </div>
        <CardTitle className="pt-4 font-headline text-xl text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-white">{description}</p>
      </CardContent>
    </GlowingCard>
  );
}
