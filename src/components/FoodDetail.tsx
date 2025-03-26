
import React from 'react';
import { Phone, Globe, Clock, MapPin, Star, X } from 'lucide-react';
import { foodLocations } from '../data/foodData';
import { cn } from '@/lib/utils';

interface FoodDetailProps {
  id: string | null;
  onClose: () => void;
  className?: string;
}

const FoodDetail: React.FC<FoodDetailProps> = ({ id, onClose, className }) => {
  if (!id) return null;
  
  const location = foodLocations.find(loc => loc.id === id);
  if (!location) return null;
  
  // Create star rating
  const renderRating = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <div key={i} className="relative">
            <Star className="h-4 w-4 text-muted" />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            </div>
          </div>
        );
      } else {
        stars.push(<Star key={i} className="h-4 w-4 text-muted" />);
      }
    }
    
    return (
      <div className="flex items-center">
        <div className="flex">{stars}</div>
        <span className="ml-1.5 text-sm font-medium">{rating.toFixed(1)}</span>
      </div>
    );
  };
  
  return (
    <div className={cn(
      "bg-background rounded-lg border border-border shadow-lg overflow-hidden animate-slide-up",
      className
    )}>
      <div className="relative h-48">
        <img 
          src={location.image} 
          alt={location.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h2 className="text-xl font-medium leading-tight">{location.name}</h2>
          <div className="flex items-center mt-1">
            <span 
              className={cn(
                "text-xs font-medium px-2 py-0.5 rounded-full mr-2",
                location.category === 'Restaurant' ? "bg-rose-500" :
                location.category === 'Cafe' ? "bg-amber-500" :
                location.category === 'Fast Food' ? "bg-orange-500" :
                location.category === 'Pub' ? "bg-emerald-500" :
                "bg-purple-500"
              )}
            >
              {location.category}
            </span>
            <div className="flex items-center text-white/90">
              {renderRating(location.rating)}
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="space-y-3">
          <div className="flex items-start">
            <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 mr-2 flex-shrink-0" />
            <p className="text-sm">{location.address}</p>
          </div>
          
          {location.phone && (
            <div className="flex items-center">
              <Phone className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0" />
              <p className="text-sm">{location.phone}</p>
            </div>
          )}
          
          {location.website && (
            <div className="flex items-center">
              <Globe className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0" />
              <a 
                href={location.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline truncate"
              >
                {location.website.replace(/^https?:\/\//, '').replace(/\/$/, '')}
              </a>
            </div>
          )}
          
          {location.hours && (
            <div className="flex items-start">
              <Clock className="h-4 w-4 text-muted-foreground mt-0.5 mr-2 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium mb-1">Hours</p>
                <div className="space-y-1">
                  {location.hours.map((hour, index) => (
                    <p key={index} className="text-xs text-muted-foreground">{hour}</p>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        
        {location.description && (
          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">{location.description}</p>
          </div>
        )}
        
        <div className="mt-4 pt-4 border-t border-border flex justify-between">
          <a 
            href={`https://www.google.com/maps/dir/?api=1&destination=${location.latitude},${location.longitude}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary hover:underline"
          >
            Get Directions
          </a>
          
          <button className="px-3 py-1.5 text-sm font-medium rounded-full bg-primary text-white hover:bg-primary/90 transition-colors">
            Visit Website
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;
