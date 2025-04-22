
import {
  Code, Database, Server, Cpu,
  Layers, Globe, Terminal, Monitor,
  PenTool, Figma, Smartphone
} from 'lucide-react';

interface SkillCategory {
  name: string;
  icon: React.ElementType;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: Monitor,
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"]
  },
  {
    name: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "PHP", "Laravel", "MVC Architecture", "RESTful APIs"]
  },
  {
    name: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "Oracle", "MongoDB", "Firebase"]
  },
  {
    name: "AI & ML",
    icon: Cpu,
    skills: ["Machine Learning", "Classification Models", "Clustering Algorithms", "Data Preprocessing"]
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-muted/30 py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          A comprehensive overview of my technical expertise and capabilities.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            
            return (
              <div 
                key={index} 
                className="bg-card rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                
                <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
                
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 font-heading">Other Skills & Interests</h3>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {["Git", "Docker", "CI/CD", "Agile Methodology", "UI/UX Design", "Mobile Development", 
              "Testing", "SEO", "Responsive Design", "Performance Optimization"].map((skill, index) => (
              <div 
                key={index}
                className="bg-background border border-border rounded-full px-4 py-2 text-sm animate-fade-in"
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
