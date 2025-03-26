
import React from 'react';
import { cn } from '@/lib/utils';

interface FoodMarkerProps {
  id: string;
  name: string;
  category: string;
  selected: boolean;
  onClick: () => void;
}

const FoodMarker: React.FC<FoodMarkerProps> = ({ 
  id, 
  name, 
  category, 
  selected, 
  onClick 
}) => {
  // Determine color based on category
  const getCategoryColor = (category: string): string => {
    switch(category.toLowerCase()) {
      case 'cafe':
        return 'bg-amber-500';
      case 'restaurant':
        return 'bg-rose-500';
      case 'fast food':
        return 'bg-orange-500';
      case 'pub':
        return 'bg-emerald-500';
      case 'bakery':
        return 'bg-purple-500';
      default:
        return 'bg-sky-500';
    }
  };

  const markerColor = getCategoryColor(category);

  return (
    <div 
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div 
        className={cn(
          "relative flex flex-col items-center transition-all duration-300 ease-out",
          selected ? "scale-110" : "hover:scale-105"
        )}
      >
        {/* Label that appears on hover or when selected */}
        <div 
          className={cn(
            "absolute -top-9 px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap",
            "transition-all duration-300 pointer-events-none text-white",
            "shadow-lg transform-gpu",
            markerColor,
            selected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0"
          )}
        >
          {name}
        </div>
        
        {/* Marker pin */}
        <div className="relative">
          {/* Pin body */}
          <div 
            className={cn(
              "h-6 w-6 rounded-full shadow-md transform-gpu",
              "flex items-center justify-center", 
              "border-2 border-white",
              markerColor,
              selected ? "scale-110" : ""
            )}
          >
            <span 
              className={cn(
                "h-2 w-2 rounded-full bg-white transform-gpu",
                selected ? "scale-110" : ""
              )}
            />
          </div>
          
          {/* Pin shadow */}
          <div 
            className={cn(
              "absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-1 rounded-full bg-black/20 blur-sm",
              selected ? "opacity-80" : "opacity-50"
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default FoodMarker;
