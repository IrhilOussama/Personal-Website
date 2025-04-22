
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  scrollToSection: (id: string) => void;
}

const Navbar = ({ scrollToSection }: NavbarProps) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // Check local storage first
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme === 'dark') return 'dark';
      if (storedTheme === 'light') return 'light';
    }
    
    // If no theme in storage, check system preference
    if (typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light';
  });
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Apply theme
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Resume', id: 'resume' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto flex justify-between items-center h-16 px-4">
        <a 
          href="#" 
          className="text-xl font-bold font-heading text-primary"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
            setIsMenuOpen(false);
          }}
        >
          My Portfolio
        </a>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-foreground/80 hover:text-primary font-medium transition-colors"
            >
              {item.label}
            </button>
          ))}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme} 
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </Button>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border py-4 px-4 flex flex-col space-y-4 animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMenuOpen(false);
                }}
                className="text-foreground/80 hover:text-primary font-medium transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleTheme}
              className="flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <>
                  <Moon size={16} className="mr-2" />
                  <span>Dark Mode</span>
                </>
              ) : (
                <>
                  <Sun size={16} className="mr-2" />
                  <span>Light Mode</span>
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
