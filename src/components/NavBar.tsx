
import React from 'react';
import { Search, MapPin, ChevronDown } from 'lucide-react';
import { cn } from "@/lib/utils";

interface NavBarProps {
  onSearchFocus: () => void;
  className?: string;
}

const NavBar: React.FC<NavBarProps> = ({ onSearchFocus, className }) => {
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border transition-all duration-300",
      className
    )}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <MapPin className="h-5 w-5 text-primary animate-float" />
          <h1 className="text-lg font-medium">Ottawa Eats</h1>
        </div>
        
        <div className="relative w-full max-w-md mx-4 hidden md:block">
          <div 
            className="group relative flex items-center h-10 w-full rounded-full bg-secondary pl-4 pr-5 transition-all duration-200 hover:bg-secondary/80"
            onClick={onSearchFocus}
          >
            <Search className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
            <span className="ml-2.5 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">
              Search for restaurants...
            </span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="hidden md:flex items-center space-x-1 text-sm font-medium hover:text-primary transition-colors duration-200">
            <span>Categories</span>
            <ChevronDown className="h-4 w-4" />
          </button>
          <div className="w-px h-5 bg-border hidden md:block"></div>
          <button className="text-sm font-medium py-1.5 px-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200">
            Explore
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
