
import React from 'react';
import { MapPin, Users, Book } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <MapPin className="h-8 w-8 text-primary" />
            <div className="absolute -top-1 -right-1 h-3 w-3 bg-accent rounded-full animate-pulse" />
          </div>
          <div>
            <h1 className="text-2xl font-serif font-bold text-foreground">EchoSteps</h1>
            <p className="text-xs text-muted-foreground">Stories of Every Street</p>
          </div>
        </div>
        
        <nav className="flex items-center space-x-6">
          <button className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <Book className="h-4 w-4" />
            <span>Stories</span>
          </button>
          <button className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <Users className="h-4 w-4" />
            <span>Community</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
