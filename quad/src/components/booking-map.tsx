"use client"

import { useEffect, useRef, useState } from "react"

interface BookingMapProps {
  pickupLocation?: string
  destination?: string
}

export function BookingMap({ pickupLocation, destination }: BookingMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<any>(null)
  const [platform, setPlatform] = useState<any>(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [pickupMarker, setPickupMarker] = useState<any>(null)
  const [destinationMarker, setDestinationMarker] = useState<any>(null)
  const [routeLine, setRouteLine] = useState<any>(null)

  // Load HERE Maps scripts
  useEffect(() => {
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

  // Initialize the map
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
          center: { lat: 12.9716, lng: 77.5946 }, // Default center (can be adjusted)
          zoom: 12,
          pixelRatio: window.devicePixelRatio || 1
        }
      )
      setMap(map)

      // Enable map interaction (pan, zoom, etc.)
      const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map))

      // Create the default UI components
      const ui = H.ui.UI.createDefault(map, defaultLayers)

      // Make the map responsive
      window.addEventListener('resize', () => {
        map.getViewPort().resize()
      })

      setMapLoaded(true)
    }
  }

  // Update map when pickup or destination changes
  useEffect(() => {
    if (!mapLoaded || !map || !platform || !pickupLocation || !destination) return

    const H = (window as any).H
    const geocodingService = platform.getSearchService()

    // Clear previous markers and route
    if (pickupMarker) map.removeObject(pickupMarker)
    if (destinationMarker) map.removeObject(destinationMarker)
    if (routeLine) map.removeObject(routeLine)

    // Geocode pickup location
    geocodingService.geocode(
      { q: pickupLocation, limit: 1 },
      (result: any) => {
        if (result.items && result.items.length > 0) {
          const location = result.items[0]
          const pickupPoint = {
            lat: location.position.lat,
            lng: location.position.lng
          }
          
          // Create pickup marker
          const marker = new H.map.Marker(pickupPoint)
          map.addObject(marker)
          setPickupMarker(marker)

          // Now geocode destination
          geocodingService.geocode(
            { q: destination, limit: 1 },
            (result: any) => {
              if (result.items && result.items.length > 0) {
                const location = result.items[0]
                const destinationPoint = {
                  lat: location.position.lat,
                  lng: location.position.lng
                }
                
                // Create destination marker
                const marker = new H.map.Marker(destinationPoint)
                map.addObject(marker)
                setDestinationMarker(marker)

                // Calculate route between points
                const routingService = platform.getRoutingService(null, 8)
                const routingParameters = {
                  'routingMode': 'fast',
                  'transportMode': 'car',
                  'origin': `${pickupPoint.lat},${pickupPoint.lng}`,
                  'destination': `${destinationPoint.lat},${destinationPoint.lng}`,
                  'return': 'polyline,summary'
                }

                routingService.calculateRoute(
                  routingParameters,
                  (result: any) => {
                    if (result.routes.length) {
                      const route = result.routes[0]
                      
                      // Create a linestring to use as a route line
                      const lineString = H.geo.LineString.fromFlexiblePolyline(route.sections[0].polyline)
                      
                      // Create a polyline to display the route
                      const routeLine = new H.map.Polyline(lineString, {
                        style: { strokeColor: '#0077CC', lineWidth: 5 }
                      })

                      // Add the route polyline to the map
                      map.addObject(routeLine)
                      setRouteLine(routeLine)

                      // Set the map's viewport to make the whole route visible
                      map.getViewModel().setLookAtData({
                        bounds: routeLine.getBoundingBox()
                      })
                    }
                  },
                  (error: any) => {
                    console.error('Route calculation error:', error)
                  }
                )
              }
            },
            (error: any) => {
              console.error('Destination geocoding error:', error)
            }
          )
        }
      },
      (error: any) => {
        console.error('Pickup geocoding error:', error)
      }
    )
  }, [mapLoaded, map, platform, pickupLocation, destination])

  return (
    <div className="w-full h-full">
      <div ref={mapRef} className="w-full h-full rounded-lg" />
      <link rel="stylesheet" type="text/css" href="https://js.api.here.com/v3/3.1/mapsjs-ui.css" />
    </div>
  )
}