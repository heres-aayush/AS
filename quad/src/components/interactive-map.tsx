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
  const [infoBubble, setInfoBubble] = useState<any>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)

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
  }, [])

  const initializeMap = () => {
    if (mapRef.current && (window as any).H) {
      const H = (window as any).H
      // Initialize the platform object
      const platform = new H.service.Platform({
        apikey: process.env.NEXT_PUBLIC_HERE_API_KEY
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
      setInfoBubble(new H.ui.InfoBubble({ lat: 0, lng: 0 }, {
        content: ''
      }))

      // Add markers for each location
      locations.forEach(location => {
        const marker = new H.map.Marker(location.coordinates)
        marker.setData(location)
        marker.addEventListener('tap', (evt: any) => {
          const loc = evt.target.getData()
          setSelectedLocation(loc)
          onSelectRide?.(loc.id)
          
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
        })
        map.addObject(marker)
      })

      // Make the map responsive
      window.addEventListener('resize', () => {
        map.getViewPort().resize()
      })
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!platform || !map || !searchQuery.trim()) return
    
    setIsSearching(true)
    // Call the onSearch callback with the search query
    onSearch?.(searchQuery)
    
    // Use the HERE Maps Geocoding API
    const geocodingService = platform.getSearchService()
    
    geocodingService.geocode(
      {
        q: searchQuery,
        limit: 1
      },
      (result: any) => {
        setIsSearching(false)
        
        if (result.items && result.items.length > 0) {
          const location = result.items[0]
          const position = {
            lat: location.position.lat,
            lng: location.position.lng
          }
          
          console.log("Found location:", location.title, position)
          
          // Center the map on the found location
          map.setCenter(position)
          map.setZoom(15)
          
          // Create a marker for the found location
          const H = (window as any).H
          
          // Clear previous search results
          const objectsToRemove = map.getObjects().filter((obj: any) => 
            obj.getData && obj.getData().isSearchResult
          )
          if (objectsToRemove.length > 0) {
            map.removeObjects(objectsToRemove)
          }
          
          // Create and add the new marker
          const marker = new H.map.Marker(position)
          
          // Tag this marker as a search result
          marker.setData({
            isSearchResult: true,
            title: location.title,
            address: location.address
          })
          
          map.addObject(marker)
          
          // Show an info bubble
          const ui = H.ui.UI.createDefault(map, platform.createDefaultLayers())
          const bubble = new H.ui.InfoBubble(position, {
            content: `
              <div class="p-4">
                <h3 class="font-medium">${location.title}</h3>
                <p class="text-sm text-gray-600">${location.address.label || ''}</p>
              </div>
            `
          })
          ui.addBubble(bubble)
        } else {
          console.error("No results found for:", searchQuery)
          alert("No results found")
        }
      },
      (error: any) => {
        setIsSearching(false)
        console.error("Geocoding error:", error)
        alert("Error searching location")
      }
    )
  }

  return (
    <div className="relative w-full h-full">
      <div className="absolute top-4 left-0 right-0 z-10 px-4">
        <form onSubmit={handleSearch} className="flex w-full max-w-md mx-auto">
          <input
            type="text"
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