
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
                <p className="text-muted-foreground">University Name, 2022 - Present</p>
                <p className="mt-2">
                  Second-year student focusing on software development, algorithms, and artificial intelligence. 
                  Participating in coding competitions and collaborative projects.
                </p>
              </div>
              
              <div className="border-l border-border pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1"></div>
                <h4 className="text-lg font-semibold">High School Diploma</h4>
                <p className="text-muted-foreground">School Name, 2018 - 2022</p>
                <p className="mt-2">
                  Graduated with honors. Focused on mathematics and science courses.
                  Participated in various programming clubs and competitions.
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
                <p className="text-muted-foreground">Self-employed, 2022 - Present</p>
                <p className="mt-2">
                  Developing web and mobile applications for various clients. Projects include e-commerce 
                  platforms, educational websites, and API-driven applications.
                </p>
              </div>
              
              <div className="border-l border-border pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1"></div>
                <h4 className="text-lg font-semibold">Web Development Intern</h4>
                <p className="text-muted-foreground">Company Name, Summer 2022</p>
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
            <span>Download Resume</span>
          </Button>
        </div>

        {/* Certification and awards section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 font-heading">Certifications & Awards</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h4 className="font-semibold">Web Development Certification</h4>
              <p className="text-sm text-muted-foreground">Issuing Organization, 2023</p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h4 className="font-semibold">Data Science Fundamentals</h4>
              <p className="text-sm text-muted-foreground">Issuing Organization, 2023</p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <h4 className="font-semibold">Hackathon Finalist</h4>
              <p className="text-sm text-muted-foreground">Event Name, 2022</p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <h4 className="font-semibold">Programming Competition Award</h4>
              <p className="text-sm text-muted-foreground">Competition Name, 2022</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
