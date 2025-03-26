
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { foodLocations } from '../data/foodData';
import FoodMarker from './FoodMarker';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { createRoot } from 'react-dom/client';

interface MapProps {
  className?: string;
  selectedId: string | null;
  onMarkerClick: (id: string) => void;
  mapboxToken: string;
}

const Map: React.FC<MapProps> = ({ 
  className, 
  selectedId, 
  onMarkerClick,
  mapboxToken 
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<{ [key: string]: mapboxgl.Marker }>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;
    
    // Check if token is empty
    if (!mapboxToken || mapboxToken.trim() === '') {
      toast.error('Please enter a valid Mapbox token');
      return;
    }

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-75.695, 45.421], // Downtown Ottawa coordinates
        zoom: 13,
        attributionControl: false,
        pitch: 0,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          showCompass: true,
          visualizePitch: true,
        }),
        'top-right'
      );

      map.current.on('load', () => {
        setLoaded(true);
        
        // Add markers once map is loaded
        foodLocations.forEach(location => {
          const markerElement = document.createElement('div');
          markerElement.className = 'marker-container';
          
          // Render our custom React marker into this div
          const root = createRoot(markerElement);
          root.render(
            <FoodMarker 
              id={location.id}
              name={location.name}
              category={location.category}
              selected={location.id === selectedId}
              onClick={() => onMarkerClick(location.id)}
            />
          );
          
          // Create and add marker to map
          const marker = new mapboxgl.Marker({
            element: markerElement,
            anchor: 'bottom',
          })
            .setLngLat([location.longitude, location.latitude])
            .addTo(map.current!);
          
          // Store marker reference for later use
          markersRef.current[location.id] = marker;
        });
      });

      return () => {
        map.current?.remove();
        map.current = null;
      };
    } catch (error) {
      console.error('Error initializing map:', error);
      toast.error('Error initializing map. Please check your Mapbox token.');
    }
  }, [mapboxToken, onMarkerClick, selectedId]);

  // Update marker selection state when selectedId changes
  useEffect(() => {
    if (!loaded) return;
    
    // Update all markers
    foodLocations.forEach(location => {
      const markerElement = markersRef.current[location.id]?.getElement();
      if (markerElement) {
        const markerContainer = markerElement.querySelector('.marker-container');
        if (markerContainer) {
          const root = createRoot(markerContainer);
          root.render(
            <FoodMarker 
              id={location.id}
              name={location.name}
              category={location.category}
              selected={location.id === selectedId}
              onClick={() => onMarkerClick(location.id)}
            />
          );
        }
      }
    });
    
    // Fly to selected marker
    if (selectedId) {
      const selectedLocation = foodLocations.find(l => l.id === selectedId);
      if (selectedLocation && map.current) {
        map.current.flyTo({
          center: [selectedLocation.longitude, selectedLocation.latitude],
          zoom: 15,
          duration: 800,
          essential: true,
        });
      }
    }
  }, [selectedId, loaded, onMarkerClick]);

  return (
    <div className={cn("relative w-full h-full", className)}>
      {!mapboxToken && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-background/80 backdrop-blur-sm">
          <div className="text-center p-6 max-w-md">
            <h3 className="text-lg font-medium mb-2">Mapbox Token Required</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Please enter your Mapbox public token to display the map.
            </p>
          </div>
        </div>
      )}
      <div ref={mapContainer} className="absolute inset-0 rounded-lg overflow-hidden" />
    </div>
  );
};

export default Map;
