
import { FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ResumeSection = () => {
  return (
    <section id="resume" className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Resume</h2>
        <p className="section-subtitle">
          My educational background, work experience, and achievements.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Education */}
          <div className="space-y-8 animate-fade-in">
            <h3 className="text-2xl font-bold font-heading border-l-4 border-primary pl-4">Education</h3>
            
            <div className="space-y-6">
              <div className="border-l border-border pl-6 pb-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1"></div>
                <h4 className="text-lg font-semibold">Computer Science</h4>
                <p className="text-muted-foreground">Higher School of Technology, 2023 - Present</p>
                <p className="mt-2">
                  Second-year student focusing on software development, algorithms, and artificial intelligence. 
                  Participating in coding competitions and collaborative projects.
                </p>
              </div>
              
              <div className="border-l border-border pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1"></div>
                <h4 className="text-lg font-semibold">High School Diploma</h4>
                <p className="text-muted-foreground">Moulay Youssef High School, 2023</p>
                <p className="mt-2">
                  Focused on mathematics and science courses.
                </p>
              </div>
            </div>
          </div>
          
          {/* Experience */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold font-heading border-l-4 border-primary pl-4">Experience</h3>
            
            <div className="space-y-6">
              <div className="border-l border-border pl-6 pb-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1"></div>
                <h4 className="text-lg font-semibold">Freelance Developer</h4>
                <p className="text-muted-foreground">Self-developemnt, 2023 - Present</p>
                <p className="mt-2">
                  Developing web and mobile applications. Projects include e-commerce 
                  platforms, educational websites, and API-driven applications.
                </p>
              </div>
              
              <div className="border-l border-border pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1"></div>
                <h4 className="text-lg font-semibold">Web Development Intern</h4>
                <p className="text-muted-foreground">IMACAB, Summer 2024</p>
                <p className="mt-2">
                  Assisted in developing and maintaining company websites. Collaborated with 
                  the design team to implement responsive interfaces. Participated in code reviews and agile processes.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-16">
          <Button className="flex items-center space-x-2">
            <FileDown size={18} />
            <a href='/resume.pdf' download={true} >Download Resume</a>
          </Button>
        </div>

        
      </div>
    </section>
  );
};

export default ResumeSection;
