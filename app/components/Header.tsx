"use client"
import { useEffect, useState } from 'react';
import { cn } from '@/public/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-4 md:px-8 py-6",
        isScrolled ? "bg-background/90 backdrop-blur-sm border-b" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-lg font-medium tracking-tight">Louis Sanson</a>
        
        <nav className="hidden md:flex space-x-8 text-sm">
          <a href="#work" className="hover-underline transition-colors hover:text-foreground/80">Work</a>
          <a href="#about" className="hover-underline transition-colors hover:text-foreground/80">About</a>
          <a href="#contact" className="hover-underline transition-colors hover:text-foreground/80">Contact</a>
        </nav>
        
        <div className="md:hidden">
          <button className="text-foreground" aria-label="Toggle menu">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};
