import { Github, Twitter, Linkedin } from 'lucide-react';
import { Button } from '../ui/button';

export function Footer() {
  return (
    <footer className="bg-background/50 border-t">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-foreground">
            &copy; {new Date().getFullYear()} OnellaSoft. All rights reserved.
          </p>
          <div className="flex items-center gap-2 mt-4 sm:mt-0">
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-white" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="GitHub">
                <Github className="h-5 w-5 text-white" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
