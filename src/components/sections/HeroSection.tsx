
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight">
              <span className="block">Full-Stack Developer</span>
              <span className="text-primary block mt-2">&amp; AI Enthusiast</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-md">
              I'm a second-year computer science student passionate about building useful applications
              and exploring new technologies.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                onClick={() => scrollToSection('projects')}
                size="lg"
                className="font-medium"
              >
                View My Work
              </Button>
              
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline" 
                size="lg"
                className="font-medium"
              >
                Contact Me
              </Button>
            </div>
          </div>
          
          <div className="relative lg:h-[450px] flex items-center justify-center animate-fade-in">
            <div className="relative w-full max-w-md aspect-square rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-1">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-background to-accent/20 animate-pulse" style={{ animationDuration: '8s' }}></div>
              <div className="h-full w-full rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                {/* Insert profile image here if available */}
                <div className="text-6xl font-bold text-primary opacity-80">FSD</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:flex">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => scrollToSection('projects')}
            aria-label="Scroll down"
          >
            <ArrowDown />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
