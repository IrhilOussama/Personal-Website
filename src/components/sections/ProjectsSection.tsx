
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
    title: "AI-Powered E-commerce Platform",
    description: "An innovative e-commerce platform leveraging AI for product recommendations, search optimization, and personalized shopping experiences.",
    imageUrl: "/projects/1.png",
    liveUrl: "https://so9lik.vercel.app",
    tags: ["Next.js", "AI", "Tailwind CSS", "E-commerce"],
    githubUrl: 'https://github.com/IrhilOussama/ai-powered-ecomerce'
  },
  {
    title: "Study Resource Website",
    description: "An SEO-optimized educational platform providing study resources for engineering students. Features resource sharing, community contributions, and search functionality.",
    imageUrl: "/projects/2.png",
    liveUrl: "https://est-fes-genie-informatique.web.app",
    tags: ["React", "Firebase", "SEO", "JavaScript"],
    githubUrl: 'https://github.com/IrhilOussama/est-fes-genie-informatique'
  },
  {
    title: "Stock Management Flutter App",
    description: "Mobile application for inventory and stock management with real-time updates, barcode scanning, and analytics dashboard.",
    imageUrl: "/placeholder.svg",
    tags: ["Flutter", "Dart", "API Integration", "Mobile"]
  },
  {
    title: "Printer Management – Centralized Web Application",
    description: "A user-friendly web application for efficiently managing printers, toners, users, and departments within an organization. Built with React.js, Tailwind CSS, PHP, and SQL, it offers smooth CRUD operations, a modern interface, and streamlined navigation for optimal usability and productivity.",
    imageUrl: "/projects/3.png",
    tags: ["React", "PHP", "MVC", "MySQL", "TailwindCSS", "HTML", "API"],
    githubUrl: "https://github.com/IrhilOussama/Systeme-de-gestion-des-imprimantes"
  },
  {
    title: "Moroccan Dishes – Culinary Showcase with Firebase Integration",
    description: "A visually rich website featuring traditional Moroccan dishes, created as a learning project to explore and integrate Firebase services, especially Firebase Storage for managing and displaying images.",
    imageUrl: "/projects/3.png",
    tags: ["Nextjs", "React", "Firebase", "TailwindCSS", "API"],
    githubUrl: "https://github.com/IrhilOussama/moroccan-kitchen"
  },
  {
    title: "Blogging Progressive Web App With Laravel",
    description: "A mobile-first blog platform built with Next.js, React, TailwindCSS, and Material UI for a modern and responsive frontend. The backend is powered by Laravel.",
    imageUrl: "/placeholder.svg",
    tags: ["Nextjs", "Material UI", "PWA", "React", "Laravel", "PHP", "MySQL"],
    githubUrl: "https://github.com/IrhilOussama/blogs-web-app"
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
