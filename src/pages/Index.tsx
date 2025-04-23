
import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ResumeSection from '@/components/sections/ResumeSection';
import ContactSection from '@/components/sections/ContactSection';
// import BlogSection from '@/components/sections/BlogSection';

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 64, // Adjust for navbar height
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar scrollToSection={scrollToSection} />
      
      <main className="flex-grow">
        <HeroSection scrollToSection={scrollToSection} />
        <ProjectsSection />
        <SkillsSection />
        <ResumeSection />
        <ContactSection />
        {/* <BlogSection /> */}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
