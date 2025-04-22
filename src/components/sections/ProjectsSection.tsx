
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ProjectProps {
  title: string;
  description: string;
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  tags: string[];
}

const projects: ProjectProps[] = [
  {
    title: "Study Resource Website",
    description: "An SEO-optimized educational platform providing study resources for engineering students. Features resource sharing, community contributions, and search functionality.",
    imageUrl: "/placeholder.svg",
    liveUrl: "https://est-fes-genie-informatique.web.app",
    tags: ["React", "Firebase", "SEO", "JavaScript"]
  },
  {
    title: "AI-Powered E-commerce Platform",
    description: "An innovative e-commerce platform leveraging AI for product recommendations, search optimization, and personalized shopping experiences.",
    imageUrl: "/placeholder.svg",
    liveUrl: "https://so9lik.vercel.app",
    tags: ["Next.js", "AI", "Tailwind CSS", "E-commerce"]
  },
  {
    title: "Stock Management Flutter App",
    description: "Mobile application for inventory and stock management with real-time updates, barcode scanning, and analytics dashboard.",
    imageUrl: "/placeholder.svg",
    tags: ["Flutter", "Dart", "API Integration", "Mobile"]
  },
  {
    title: "API Integration Application",
    description: "Flutter application showcasing seamless integration with multiple third-party APIs, featuring data visualization and cross-platform compatibility.",
    imageUrl: "/placeholder.svg",
    tags: ["Flutter", "APIs", "Data Visualization", "Cross-platform"]
  }
];

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  return (
    <Card className="card-hover h-full flex flex-col overflow-hidden">
      {project.imageUrl && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
          />
        </div>
      )}
      
      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription className="line-clamp-2">{project.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag, index) => (
            <Badge key={index} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="flex gap-2 pt-2">
        {project.liveUrl && (
          <Button variant="outline" size="sm" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <ExternalLink size={14} className="mr-1" /> Live Demo
            </a>
          </Button>
        )}
        
        {project.githubUrl && (
          <Button variant="outline" size="sm" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Github size={14} className="mr-1" /> Code
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here's a selection of my recent work showcasing my technical skills and problem-solving abilities.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
