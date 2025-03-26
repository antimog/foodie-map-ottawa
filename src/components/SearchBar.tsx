
import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ChevronDown } from 'lucide-react';
import { cn } from "@/lib/utils";
import { foodLocations } from '../data/foodData';

interface SearchBarProps {
  onSelectLocation: (id: string) => void;
  selectedId: string | null;
  isActive: boolean;
  onToggleActive: (active: boolean) => void;
  className?: string;
}

const CATEGORIES = ['All', 'Restaurant', 'Cafe', 'Fast Food', 'Pub', 'Bakery'];

const SearchBar: React.FC<SearchBarProps> = ({ 
  onSelectLocation, 
  selectedId, 
  isActive,
  onToggleActive,
  className 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isActive]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCategoryOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filteredLocations = foodLocations.filter(location => {
    const matchesSearch = location.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || location.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (!isActive) {
      onToggleActive(true);
    }
  };

  const handleLocationSelect = (id: string) => {
    onSelectLocation(id);
    onToggleActive(false);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsCategoryOpen(false);
  };

  return (
    <div className={cn(
      "w-full transition-all duration-300",
      isActive ? "max-h-[calc(100vh-12rem)]" : "max-h-14",
      className
    )}>
      <div className={cn(
        "relative flex w-full items-center transition-all duration-300",
        isActive ? "bg-background shadow-md rounded-t-lg border border-border" : "bg-secondary/80 backdrop-blur-sm rounded-full"
      )}>
        <Search className="absolute left-4 h-4 w-4 text-muted-foreground" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search for restaurants..."
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={() => onToggleActive(true)}
          className={cn(
            "w-full bg-transparent border-none pl-10 pr-4 py-3.5 outline-none",
            "placeholder:text-muted-foreground text-sm"
          )}
        />

        {searchTerm && (
          <button 
            className="absolute right-14 p-1 rounded-full hover:bg-muted/50 transition-colors"
            onClick={() => setSearchTerm('')}
          >
            <X className="h-3.5 w-3.5 text-muted-foreground" />
          </button>
        )}

        <div className="relative h-full" ref={dropdownRef}>
          <button 
            className={cn(
              "flex items-center text-xs font-medium mr-2 px-2.5 py-1.5 rounded-full transition-all duration-200",
              "border border-border",
              isCategoryOpen ? "bg-muted text-foreground" : "bg-transparent text-muted-foreground hover:text-foreground"
            )}
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          >
            {selectedCategory}
            <ChevronDown className={cn(
              "h-3.5 w-3.5 ml-1 transition-transform duration-200",
              isCategoryOpen ? "rotate-180" : ""
            )} />
          </button>

          {isCategoryOpen && (
            <div className="absolute top-full right-2 mt-1 w-40 py-1 rounded-lg bg-background border border-border shadow-lg z-10 overflow-hidden animate-fade-in">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  className={cn(
                    "w-full px-3 py-2 text-left text-sm transition-colors duration-200",
                    selectedCategory === category 
                      ? "bg-primary/10 text-primary font-medium" 
                      : "hover:bg-muted text-foreground"
                  )}
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {isActive && filteredLocations.length > 0 && (
        <div className="bg-background rounded-b-lg border-x border-b border-border shadow-md max-h-96 overflow-y-auto animate-slide-up">
          {filteredLocations.map((location) => (
            <button
              key={location.id}
              className={cn(
                "w-full flex items-start p-3 text-left border-b border-border/50 last:border-0 transition-colors duration-200",
                selectedId === location.id 
                  ? "bg-primary/5" 
                  : "hover:bg-muted/50"
              )}
              onClick={() => handleLocationSelect(location.id)}
            >
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{location.name}</p>
                <p className="text-xs text-muted-foreground truncate mt-0.5">{location.address}</p>
              </div>
              <span 
                className={cn(
                  "text-xs font-medium px-2 py-0.5 rounded-full ml-2 mt-0.5", 
                  location.category === 'Restaurant' ? "bg-rose-100 text-rose-700" :
                  location.category === 'Cafe' ? "bg-amber-100 text-amber-700" :
                  location.category === 'Fast Food' ? "bg-orange-100 text-orange-700" :
                  location.category === 'Pub' ? "bg-emerald-100 text-emerald-700" :
                  "bg-purple-100 text-purple-700"
                )}
              >
                {location.category}
              </span>
            </button>
          ))}
        </div>
      )}

      {isActive && searchTerm && filteredLocations.length === 0 && (
        <div className="bg-background rounded-b-lg border-x border-b border-border p-6 text-center animate-fade-in">
          <p className="text-sm text-muted-foreground">No restaurants found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
