"use client"

import { useEffect, useRef, useState } from 'react'
import { Car, Search } from 'lucide-react'

interface InteractiveMapProps {
  onSelectRide?: (id: number) => void
  onSearch?: (query: string) => void
}

interface Location {
  id: number
  coordinates: {
    lat: number
    lng: number
  }
  title: string
  rating: number
  price: number
  driver: string
  car: string
}

const locations: Location[] = [
  {
    id: 1,
    coordinates: { lat: 12.9716, lng: 77.5946 },
    title: "Downtown",
    rating: 4.8,
    price: 12.50,
    driver: "Michael Smith",
    car: "Toyota Camry"
  },
  {
    id: 2,
    coordinates: { lat: 12.9816, lng: 77.5846 },
    title: "Airport",
    rating: 4.9,
    price: 14.50,
    driver: "Sarah Johnson",
    car: "Honda Civic"
  },
  {
    id: 3,
    coordinates: { lat: 12.9616, lng: 77.6046 },
    title: "Suburbs",
    rating: 4.7,
    price: 16.50,
    driver: "Robert Brown",
    car: "Ford Escape"
  },
  {
    id: 4,
    coordinates: { lat: 12.9916, lng: 77.5746 },
    title: "Mall",
    rating: 4.8,
    price: 18.50,
    driver: "Jennifer Wilson",
    car: "Nissan Altima"
  }
]

export function InteractiveMap({ onSelectRide, onSearch }: InteractiveMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)
  const [map, setMap] = useState<any>(null)
  const [platform, setPlatform] = useState<any>(null)
  const [ui, setUi] = useState<any>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [currentBubble, setCurrentBubble] = useState<any>(null)

  useEffect(() => {
    // Clear any existing scripts first
    const existingScripts = document.querySelectorAll('script[src*="js.api.here.com"]');
    existingScripts.forEach(script => script.remove());

    // The order of script loading is important
    const loadScript = (url: string, callback?: () => void) => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = url;
      script.async = false;  // Important: load scripts in sequence
      
      if (callback) {
        script.onload = callback;
      }
      
      document.body.appendChild(script);
      return script;
    };
    
    // Sequential loading to ensure dependencies are respected
    loadScript('https://js.api.here.com/v3/3.1/mapsjs-core.js', () => {
      loadScript('https://js.api.here.com/v3/3.1/mapsjs-service.js', () => {
        loadScript('https://js.api.here.com/v3/3.1/mapsjs-ui.js', () => {
          loadScript('https://js.api.here.com/v3/3.1/mapsjs-mapevents.js', () => {
            console.log("All HERE scripts loaded, initializing map");
            // Add CSS for UI components
            if (!document.querySelector('link[href*="mapsjs-ui.css"]')) {
              const link = document.createElement('link');
              link.rel = 'stylesheet';
              link.type = 'text/css';
              link.href = 'https://js.api.here.com/v3/3.1/mapsjs-ui.css';
              document.head.appendChild(link);
            }
            
            // Now it's safe to initialize the map
            setTimeout(() => {
              initializeMap();
            }, 100); // Small delay to ensure everything is ready
          });
        });
      });
    });

    return () => {
      if (map) {
        map.dispose();
      }
      
      // Clean up scripts and CSS
      const scripts = document.querySelectorAll('script[src*="js.api.here.com"]');
      scripts.forEach(script => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      });
      
      const links = document.querySelectorAll('link[href*="mapsjs-ui.css"]');
      links.forEach(link => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      });
    };
  }, [])

  const initializeMap = () => {
    const H = (window as any).H;
    
    if (!mapRef.current || !H) {
      console.error("Map initialization failed: Map reference or H namespace not available");
      return;
    }
    
    // Make sure all required modules are loaded
    if (!H.service || !H.Map || !H.ui || !H.ui.UI || !H.mapevents) {
      console.error("Map initialization failed: Required modules not loaded");
      console.log("Available modules:", {
        service: !!H.service,
        Map: !!H.Map,
        ui: !!H.ui,
        UI: H.ui ? !!H.ui.UI : false,
        mapevents: !!H.mapevents
      });
      return;
    }
    
    try {
      // Initialize the platform object
      const platform = new H.service.Platform({
        apikey: '8THaPCbMuqIqkI5ELLnp7b5NcMuXAD94oTirWIACfCI' // Hardcoded key for now
      })
      setPlatform(platform)

      // Get the default map types from the platform object
      const defaultLayers = platform.createDefaultLayers()

      // Instantiate the map
      const map = new H.Map(
        mapRef.current,
        defaultLayers.vector.normal.map,
        {
          center: { lat: 12.9716, lng: 77.5946 },
          zoom: 13,
          pixelRatio: window.devicePixelRatio || 1
        }
      )
      setMap(map)

      // Enable map interaction (pan, zoom, etc.)
      const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map))

      // Create the default UI components
      const ui = H.ui.UI.createDefault(map, defaultLayers)
      setUi(ui)

      // Add markers for each location
      locations.forEach(location => {
        const marker = new H.map.Marker(location.coordinates)
        marker.setData(location)
        marker.addEventListener('tap', (evt: any) => {
          const loc = evt.target.getData()
          setSelectedLocation(loc)
          onSelectRide?.(loc.id)
          
          // Close previous bubble if it exists
          if (currentBubble) {
            ui.removeBubble(currentBubble)
          }
          
          const bubble = new H.ui.InfoBubble(loc.coordinates, {
            content: `
              <div class="p-4">
                <h3 class="font-medium">${loc.driver}</h3>
                <p class="text-sm text-gray-600">${loc.car}</p>
                <div class="flex items-center gap-1 mt-1">
                  <span class="text-yellow-500">★</span>
                  <span class="text-sm">${loc.rating}</span>
                </div>
                <p class="text-sm font-medium mt-1">₹${loc.price}</p>
                <div class="text-xs text-gray-500 mt-1">${loc.title}</div>
              </div>
            `
          })
          ui.addBubble(bubble)
          setCurrentBubble(bubble)
        })
        map.addObject(marker)
      })

      // Make the map responsive
      window.addEventListener('resize', () => {
        map.getViewPort().resize()
      })
    } catch (error) {
      console.error("Map initialization error:", error);
    }
  }
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Get current form data directly from input
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const query = formData.get('search') as string;
    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      alert("Please enter a search term");
      return;
    }

    // Update state with cleaned query
    setSearchQuery(trimmedQuery);

    if (!map || !ui) {
      alert("Map is not fully initialized yet");
      return;
    }

    setIsSearching(true);

    // Use the HERE Geocoding API
    const apiKey = '8THaPCbMuqIqkI5ELLnp7b5NcMuXAD94oTirWIACfCI';
    const encodedQuery = encodeURIComponent(trimmedQuery);
    const url = `https://geocode.search.hereapi.com/v1/geocode?q=${encodedQuery}&apiKey=${apiKey}`;

    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error(`Search failed: ${response.status}`);
        return response.json();
      })
      .then(data => {
        setIsSearching(false);
        
        if (data.items?.length > 0) {
          const item = data.items[0];
          const position = item.position;
          
          // Update map view
          map.setCenter(position);
          map.setZoom(15);

          // Clear previous search markers
          const oldMarkers = map.getObjects().filter((obj: any) => 
            obj.getData?.isSearchResult
          );
          map.removeObjects(oldMarkers);

          // Add new marker
          const H = (window as any).H;
          const marker = new H.map.Marker(position);
          marker.setData({ isSearchResult: true, title: item.title });
          map.addObject(marker);

          // Update info bubble
          if (currentBubble) ui.removeBubble(currentBubble);
          const bubble = new H.ui.InfoBubble(position, {
            content: `<div class="p-4"><h3 class="font-medium">${item.title}</h3></div>`
          });
          ui.addBubble(bubble);
          setCurrentBubble(bubble);
        } else {
          alert("No results found for: " + trimmedQuery);
        }
      })
      .catch(error => {
        setIsSearching(false);
        alert("Search error: " + error.message);
      });
  }
  
  

  return (
    <div className="relative w-full h-full">
      <div className="absolute top-4 left-0 right-0 z-10 px-4">
        <form onSubmit={handleSearch} className="flex w-full max-w-md mx-auto">
          <input
            type="text"
            name="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search location..."
            className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            type="submit"
            disabled={isSearching}
            className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {isSearching ? 'Searching...' : <Search size={18} />}
          </button>
        </form>
      </div>
      <div ref={mapRef} className="w-full h-full rounded-lg" />
      <link rel="stylesheet" type="text/css" href="https://js.api.here.com/v3/3.1/mapsjs-ui.css" />
    </div>
  )
}