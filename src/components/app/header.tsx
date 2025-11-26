import { Sparkles } from "lucide-react";

export function Header() {
  return (
    <header className="py-8 md:py-12 text-center border-b">
      <div className="container mx-auto">
        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight flex items-center justify-center gap-3 text-foreground">
          <Sparkles className="w-10 h-10 text-accent" />
          Onella
        </h1>
        <p className="text-muted-foreground mt-3 text-lg">
          AI-Powered Soft Facelift Simulation
        </p>
      </div>
    </header>
  );
}
