
import React, { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Map from '@/components/Map';
import SearchBar from '@/components/SearchBar';
import FoodDetail from '@/components/FoodDetail';
import { toast } from '@/components/ui/sonner';
import { MapPin } from 'lucide-react';

const Index = () => {
  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(null);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  useEffect(() => {
    // Check for token in localStorage
    const savedToken = localStorage.getItem('mapboxToken');
    if (savedToken) {
      setMapboxToken(savedToken);
      setShowTokenInput(false);
    }
  }, []);

  const handleSaveToken = (token: string) => {
    if (token.trim()) {
      setMapboxToken(token);
      localStorage.setItem('mapboxToken', token);
      setShowTokenInput(false);
      toast.success('Mapbox token saved successfully!');
    } else {
      toast.error('Please enter a valid Mapbox token');
    }
  };

  const handleResetToken = () => {
    setMapboxToken('');
    localStorage.removeItem('mapboxToken');
    setShowTokenInput(true);
    toast.info('Mapbox token has been reset');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <NavBar 
        onSearchFocus={() => setIsSearchActive(true)} 
        className={selectedLocationId ? "opacity-0 pointer-events-none" : ""}
      />

      {/* Main Content */}
      <div className="flex flex-col h-screen">
        <div className="relative flex-1 overflow-hidden">
          {/* Map Component */}
          <Map 
            selectedId={selectedLocationId} 
            onMarkerClick={setSelectedLocationId}
            mapboxToken={mapboxToken}
          />

          {/* Mapbox Token Input */}
          {showTokenInput && (
            <div className="absolute inset-0 flex items-center justify-center z-10 bg-background/90 backdrop-blur-md p-4">
              <div className="w-full max-w-md bg-card border border-border rounded-lg p-6 shadow-lg animate-fade-in">
                <div className="flex items-center text-primary mb-4">
                  <MapPin className="h-5 w-5 mr-2" />
                  <h2 className="text-lg font-medium">Mapbox Token Required</h2>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">
                  To display the map, please enter your Mapbox public token below. 
                  You can find or create your token at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>.
                </p>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="token" className="text-sm font-medium">
                      Mapbox Public Token
                    </label>
                    <input
                      id="token"
                      type="text"
                      value={mapboxToken}
                      onChange={(e) => setMapboxToken(e.target.value)}
                      placeholder="pk.eyJ1IjoieW91..."
                      className="w-full px-3 py-2 text-sm border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  
                  <button
                    onClick={() => handleSaveToken(mapboxToken)}
                    className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-200"
                  >
                    Save Token
                  </button>
                </div>
                
                <p className="text-xs text-muted-foreground mt-4">
                  Your token will be stored locally in your browser and is not sent to our servers.
                </p>
              </div>
            </div>
          )}

          {/* Search Bar */}
          <div className={`absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-xl px-4 z-20 transition-all duration-300 ${selectedLocationId ? "opacity-0 pointer-events-none" : ""}`}>
            <SearchBar 
              onSelectLocation={setSelectedLocationId}
              selectedId={selectedLocationId}
              isActive={isSearchActive}
              onToggleActive={setIsSearchActive}
            />
          </div>

          {/* Location Detail Sidebar */}
          <div 
            className={`absolute top-0 right-0 bottom-0 w-full md:w-96 p-4 transition-transform duration-500 ease-in-out z-20
              ${selectedLocationId ? "translate-x-0" : "translate-x-full"}`}
          >
            <div className="h-full flex flex-col mt-4">
              <FoodDetail 
                id={selectedLocationId} 
                onClose={() => setSelectedLocationId(null)} 
              />
            </div>
          </div>

          {/* Mapbox Attribution */}
          <div className="absolute bottom-2 left-2 text-xs text-muted-foreground z-10 flex items-center opacity-80 hover:opacity-100 transition-opacity">
            <a 
              href="https://www.mapbox.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline"
            >
              © Mapbox
            </a>
            <span className="mx-1">|</span>
            <button 
              onClick={handleResetToken}
              className="text-xs hover:underline"
            >
              Reset Token
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
