"use client"

import { useEffect, useRef, useState, useCallback } from 'react'

// Define specific types for HERE Maps
interface Platform {
  createDefaultLayers: () => DefaultLayers;
}

interface DefaultLayers {
  vector: {
    normal: {
      map: unknown;
    };
  };
}

interface HMapObject {
  getData: () => Location;
}

interface MapEvent {
  target: HMapObject;
}

interface Marker {
  setData: (data: Location) => void;
  addEventListener: (event: string, callback: (evt: MapEvent) => void) => void;
}

interface HMap {
  dispose: () => void;
  addObject: (object: Marker) => void;
  getViewPort: () => { resize: () => void };
}

interface HService {
  Platform: new (options: { apikey: string | undefined }) => Platform;
}

// Fixed MapEvents interface to prevent type error
interface MapEventsInstance {
  // This is the return type for new MapEvents()
}

// Fixed MapEvents constructor 
interface MapEventsConstructor {
  new (map: HMap): MapEventsInstance;
}

// Fixed Behavior constructor
interface BehaviorConstructor {
  new (events: MapEventsInstance): unknown;
}

interface HMapEvents {
  Behavior: BehaviorConstructor;
  MapEvents: MapEventsConstructor;
}

interface InfoBubble {
  new (coordinates: { lat: number, lng: number }, options: { content: string }): unknown;
}

interface HUI {
  UI: {
    createDefault: (map: HMap, layers: DefaultLayers) => {
      addBubble: (bubble: unknown) => void;
    };
  };
  InfoBubble: InfoBubble;
}

interface HMapConstructor {
  new (
    element: HTMLElement,
    layer: unknown,
    options: { 
      center: { lat: number, lng: number }, 
      zoom: number,
      pixelRatio: number
    }
  ): HMap;
}

interface HMapAPI {
  Map: HMapConstructor;
  map: {
    Marker: new (coordinates: { lat: number, lng: number }) => Marker;
  };
  service: HService;
  mapevents: HMapEvents;
  ui: HUI;
}

// Extend the Window interface to include the H property
interface HWindow extends Window {
  H: HMapAPI;
}

interface InteractiveMapProps {
  onSelectRide?: (id: number) => void
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

export function InteractiveMap({ onSelectRide }: InteractiveMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<HMap | null>(null)
  
  // Use the selectedLocation state if you need to access it elsewhere in the component
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)
  
  // Convert initializeMap to useCallback to properly include it in dependencies
  const initializeMap = useCallback(() => {
    if (mapRef.current) {
      const hWindow = window as unknown as HWindow; // Cast to unknown first
      if (!hWindow.H) return;
      
      // Initialize the platform object
      const platform = new hWindow.H.service.Platform({
        apikey: process.env.NEXT_PUBLIC_HERE_API_KEY
      });

      // Get the default map types from the platform object
      const defaultLayers = platform.createDefaultLayers();

      // Instantiate the map
      const newMap = new hWindow.H.Map(
        mapRef.current,
        defaultLayers.vector.normal.map,
        {
          center: { lat: 12.9716, lng: 77.5946 },
          zoom: 13,
          pixelRatio: window.devicePixelRatio || 1
        }
      );
      setMap(newMap);

      // Enable map interaction (pan, zoom, etc.)
      // Fixed type issue by ensuring MapEvents returns the correct type
      const mapEvents = new hWindow.H.mapevents.MapEvents(newMap);
      new hWindow.H.mapevents.Behavior(mapEvents);

      // Create the default UI components
      const ui = hWindow.H.ui.UI.createDefault(newMap, defaultLayers);

      // Add markers for each location
      locations.forEach(location => {
        const marker = new hWindow.H.map.Marker(location.coordinates);
        marker.setData(location);
        marker.addEventListener('tap', (evt: MapEvent) => {
          const loc = evt.target.getData();
          setSelectedLocation(loc);
          onSelectRide?.(loc.id);
          
          const bubble = new hWindow.H.ui.InfoBubble(loc.coordinates, {
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
          });
          ui.addBubble(bubble);
        });
        newMap.addObject(marker);
      });

      // Make the map responsive
      window.addEventListener('resize', () => {
        newMap.getViewPort().resize();
      });
    }
  }, [onSelectRide]); // Include onSelectRide in the dependencies

  useEffect(() => {
    // Load HERE Maps scripts
    const loadHereMaps = () => {
      const script = document.createElement('script')
      script.src = 'https://js.api.here.com/v3/3.1/mapsjs-core.js'
      script.async = true
      document.body.appendChild(script)

      script.onload = () => {
        const script2 = document.createElement('script')
        script2.src = 'https://js.api.here.com/v3/3.1/mapsjs-service.js'
        document.body.appendChild(script2)

        script2.onload = () => {
          const script3 = document.createElement('script')
          script3.src = 'https://js.api.here.com/v3/3.1/mapsjs-ui.js'
          document.body.appendChild(script3)

          const script4 = document.createElement('script')
          script4.src = 'https://js.api.here.com/v3/3.1/mapsjs-mapevents.js'
          document.body.appendChild(script4)

          script4.onload = initializeMap
        }
      }
    }

    loadHereMaps()

    return () => {
      if (map) {
        map.dispose()
      }
    }
  }, [initializeMap, map]); // Added initializeMap as a dependency

  // Example of how you could use selectedLocation if needed
  const renderSelectedLocationInfo = () => {
    if (!selectedLocation) return null;
    
    return (
      <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md">
        <h4 className="font-medium">{selectedLocation.driver}</h4>
        <p className="text-sm">{selectedLocation.car}</p>
      </div>
    );
  };

  return (
    <div className="relative w-full h-full">
      <div ref={mapRef} className="w-full h-full rounded-lg" />
      {renderSelectedLocationInfo()}
      <link rel="stylesheet" type="text/css" href="https://js.api.here.com/v3/3.1/mapsjs-ui.css" />
    </div>
  );
}