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
    console.log("BookingMap useEffect triggered", { pickupLocation, destination });

    if (!mapLoaded) {
      console.log("BookingMap: Map not loaded yet");
      return;
    }
    if (!map) {
      console.log("BookingMap: Map object not available");
      return;
    }
    if (!platform) {
      console.log("BookingMap: Platform object not available");
      return;
    }
    if (!pickupLocation || !destination) {
      console.log("BookingMap: Pickup or destination location missing");
      // Clear previous markers and route if one location is cleared
      if (pickupMarker) map.removeObject(pickupMarker)
      if (destinationMarker) map.removeObject(destinationMarker)
      if (routeLine) map.removeObject(routeLine)
      setPickupMarker(null);
      setDestinationMarker(null);
      setRouteLine(null);
      return;
    }

    console.log("BookingMap: Proceeding with geocoding and routing...");

    const H = (window as any).H
    const geocodingService = platform.getSearchService()

    // Clear previous markers and route
    console.log("BookingMap: Clearing previous map objects");
    if (pickupMarker) map.removeObject(pickupMarker)
    if (destinationMarker) map.removeObject(destinationMarker)
    if (routeLine) map.removeObject(routeLine)
    setPickupMarker(null); // Reset state too
    setDestinationMarker(null);
    setRouteLine(null);

    // Geocode pickup location
    console.log(`BookingMap: Geocoding pickup: ${pickupLocation}`);
    geocodingService.geocode(
      { q: pickupLocation, limit: 1 },
      (pickupResult: any) => {
        console.log("BookingMap: Pickup geocoding result:", pickupResult);
        if (pickupResult.items && pickupResult.items.length > 0) {
          const pickupLocationData = pickupResult.items[0]
          const pickupPoint = {
            lat: pickupLocationData.position.lat,
            lng: pickupLocationData.position.lng
          }
          console.log(`BookingMap: Pickup location found at:`, pickupPoint);
          
          // Create pickup marker
          const newPickupMarker = new H.map.Marker(pickupPoint)
          map.addObject(newPickupMarker)
          setPickupMarker(newPickupMarker)
          console.log("BookingMap: Pickup marker added");

          // Now geocode destination
          console.log(`BookingMap: Geocoding destination: ${destination}`);
          geocodingService.geocode(
            { q: destination, limit: 1 },
            (destinationResult: any) => {
              console.log("BookingMap: Destination geocoding result:", destinationResult);
              if (destinationResult.items && destinationResult.items.length > 0) {
                const destinationLocationData = destinationResult.items[0]
                const destinationPoint = {
                  lat: destinationLocationData.position.lat,
                  lng: destinationLocationData.position.lng
                }
                console.log(`BookingMap: Destination location found at:`, destinationPoint);
                
                // Create destination marker
                const newDestinationMarker = new H.map.Marker(destinationPoint)
                map.addObject(newDestinationMarker)
                setDestinationMarker(newDestinationMarker)
                console.log("BookingMap: Destination marker added");

                // Calculate route between points
                console.log("BookingMap: Calculating route...");
                const routingService = platform.getRoutingService(null, 8)
                const routingParameters = {
                  'routingMode': 'fast',
                  'transportMode': 'car',
                  'origin': `${pickupPoint.lat},${pickupPoint.lng}`,
                  'destination': `${destinationPoint.lat},${destinationPoint.lng}`,
                  'return': 'polyline,summary'
                }
                console.log("BookingMap: Routing parameters:", routingParameters);

                routingService.calculateRoute(
                  routingParameters,
                  (routeResult: any) => {
                    console.log("BookingMap: Route calculation result:", routeResult);
                    if (routeResult.routes && routeResult.routes.length > 0) { // Check routes array specifically
                      const route = routeResult.routes[0]
                      console.log("BookingMap: Route found:", route);
                      
                      // Create a linestring to use as a route line
                      const lineString = H.geo.LineString.fromFlexiblePolyline(route.sections[0].polyline)
                      
                      // Create a polyline to display the route
                      const newRouteLine = new H.map.Polyline(lineString, {
                        style: { strokeColor: '#0077CC', lineWidth: 5 }
                      })

                      // Add the route polyline to the map
                      map.addObject(newRouteLine)
                      setRouteLine(newRouteLine)
                      console.log("BookingMap: Route line added to map");

                      // Set the map's viewport to make the whole route visible
                      try {
                        const bounds = newRouteLine.getBoundingBox();
                        if (bounds) {
                           console.log("BookingMap: Setting map viewport to bounds:", bounds);
                           map.getViewModel().setLookAtData({ bounds });
                        } else {
                           console.warn("BookingMap: Could not get bounds for route line, centering map instead.");
                           map.setCenter(pickupPoint); // Fallback centering
                           map.setZoom(12); // Fallback zoom
                        }
                      } catch(boundsError) {
                         console.error("BookingMap: Error setting map viewport:", boundsError);
                      }
                    } else {
                      console.warn("BookingMap: No routes found in the result.");
                    }
                  },
                  (error: any) => {
                    console.error('BookingMap: Route calculation error:', error)
                  }
                )
              } else {
                console.warn("BookingMap: No items found for destination geocoding.");
              }
            },
            (error: any) => {
              console.error('BookingMap: Destination geocoding error:', error)
            }
          )
        } else {
          console.warn("BookingMap: No items found for pickup geocoding.");
        }
      },
      (error: any) => {
        console.error('BookingMap: Pickup geocoding error:', error)
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