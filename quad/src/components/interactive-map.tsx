"use client"

import { useEffect, useRef } from "react"

interface InteractiveMapProps {
  onSelectRide?: (id: number) => void
}

export function InteractiveMap({ onSelectRide }: InteractiveMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Store the current ref value to avoid React warning
    const currentMapRef = mapRef.current

    if (currentMapRef) {
      const canvas = document.createElement("canvas")
      canvas.width = currentMapRef.clientWidth
      canvas.height = currentMapRef.clientHeight
      currentMapRef.appendChild(canvas)

      const ctx = canvas.getContext("2d")
      if (ctx) {
        // Draw a simple map placeholder
        ctx.fillStyle = "#f0f0f0"
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Draw some roads
        ctx.strokeStyle = "#ffffff"
        ctx.lineWidth = 8

        // Horizontal roads
        for (let i = 1; i < 8; i++) {
          ctx.beginPath()
          ctx.moveTo(0, canvas.height * (i / 8))
          ctx.lineTo(canvas.width, canvas.height * (i / 8))
          ctx.stroke()
        }

        // Vertical roads
        for (let i = 1; i < 8; i++) {
          ctx.beginPath()
          ctx.moveTo(canvas.width * (i / 8), 0)
          ctx.lineTo(canvas.width * (i / 8), canvas.height)
          ctx.stroke()
        }

        // Draw road outlines
        ctx.strokeStyle = "#dddddd"
        ctx.lineWidth = 1

        // Horizontal road outlines
        for (let i = 1; i < 8; i++) {
          ctx.beginPath()
          ctx.moveTo(0, canvas.height * (i / 8) - 4)
          ctx.lineTo(canvas.width, canvas.height * (i / 8) - 4)
          ctx.stroke()

          ctx.beginPath()
          ctx.moveTo(0, canvas.height * (i / 8) + 4)
          ctx.lineTo(canvas.width, canvas.height * (i / 8) + 4)
          ctx.stroke()
        }

        // Vertical road outlines
        for (let i = 1; i < 8; i++) {
          ctx.beginPath()
          ctx.moveTo(canvas.width * (i / 8) - 4, 0)
          ctx.lineTo(canvas.width * (i / 8) - 4, canvas.height)
          ctx.stroke()

          ctx.beginPath()
          ctx.moveTo(canvas.width * (i / 8) + 4, 0)
          ctx.lineTo(canvas.width * (i / 8) + 4, canvas.height)
          ctx.stroke()
        }

        // Draw user location
        const userX = canvas.width * 0.5
        const userY = canvas.height * 0.5

        ctx.fillStyle = "#3b82f6"
        ctx.beginPath()
        ctx.arc(userX, userY, 8, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = "rgba(59, 130, 246, 0.2)"
        ctx.beginPath()
        ctx.arc(userX, userY, 16, 0, Math.PI * 2)
        ctx.fill()

        // Draw available cars
        const carPositions = [
          { x: canvas.width * 0.3, y: canvas.height * 0.6, id: 1 },
          { x: canvas.width * 0.7, y: canvas.height * 0.2, id: 2 },
          { x: canvas.width * 0.2, y: canvas.height * 0.3, id: 3 },
          { x: canvas.width * 0.8, y: canvas.height * 0.7, id: 4 },
        ]

        // Create click event handler for cars
        const handleCarClick = (event: MouseEvent) => {
          const rect = canvas.getBoundingClientRect()
          const x = event.clientX - rect.left
          const y = event.clientY - rect.top

          carPositions.forEach((car) => {
            // Check if click is within car radius
            const distance = Math.sqrt(Math.pow(x - car.x, 2) + Math.pow(y - car.y, 2))
            if (distance <= 10) {
              onSelectRide?.(car.id)
            }
          })
        }

        carPositions.forEach((car) => {
          ctx.fillStyle = "#10b981"
          ctx.beginPath()
          ctx.arc(car.x, car.y, 6, 0, Math.PI * 2)
          ctx.fill()
        })

        // Add event listener once
        canvas.addEventListener("click", handleCarClick)

        // Add some labels for areas
        const areas = [
          { x: canvas.width * 0.2, y: canvas.height * 0.2, name: "Downtown" },
          { x: canvas.width * 0.8, y: canvas.height * 0.2, name: "Airport" },
          { x: canvas.width * 0.2, y: canvas.height * 0.8, name: "Suburbs" },
          { x: canvas.width * 0.8, y: canvas.height * 0.8, name: "Mall" },
        ]

        areas.forEach((area) => {
          ctx.fillStyle = "rgba(0, 0, 0, 0.7)"
          ctx.font = "12px Arial"
          ctx.fillText(area.name, area.x - 25, area.y)
        })
      }

      return () => {
        // Use the stored ref value in the cleanup function
        if (currentMapRef && currentMapRef.contains(canvas)) {
          currentMapRef.removeChild(canvas)
        }
      }
    }
  }, [onSelectRide])

  return <div ref={mapRef} className="w-full h-full bg-muted rounded-lg"></div>
}