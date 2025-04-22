
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
}

const blogPosts: BlogPostProps[] = [
  {
    title: "Getting Started with React Hooks",
    excerpt: "An introduction to React Hooks and how they can simplify your React components and state management.",
    date: "April 15, 2023",
    tags: ["React", "JavaScript", "Frontend"]
  },
  {
    title: "Building RESTful APIs with Express",
    excerpt: "A guide to creating robust and scalable RESTful APIs using Express.js and Node.js.",
    date: "March 22, 2023",
    tags: ["Node.js", "Express", "Backend", "API"]
  },
  {
    title: "Introduction to Machine Learning Classification",
    excerpt: "Understanding the fundamentals of classification algorithms in machine learning and their applications.",
    date: "February 10, 2023",
    tags: ["Machine Learning", "AI", "Classification", "Data Science"]
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Blog</h2>
        <p className="section-subtitle">
          Technical insights, tutorials, and my learning journey in software development and AI.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post, index) => (
            <Card key={index} className="card-hover animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto text-primary flex items-center hover:bg-transparent hover:text-primary/80">
                  Read More <ArrowRight size={16} className="ml-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="font-medium">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
