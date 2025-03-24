"use client"

import { useEffect, useRef } from "react"

export function BookingMap() {
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
        for (let i = 1; i < 5; i++) {
          ctx.beginPath()
          ctx.moveTo(0, canvas.height * (i / 5))
          ctx.lineTo(canvas.width, canvas.height * (i / 5))
          ctx.stroke()
        }

        // Vertical roads
        for (let i = 1; i < 5; i++) {
          ctx.beginPath()
          ctx.moveTo(canvas.width * (i / 5), 0)
          ctx.lineTo(canvas.width * (i / 5), canvas.height)
          ctx.stroke()
        }

        // Draw road outlines
        ctx.strokeStyle = "#dddddd"
        ctx.lineWidth = 1

        // Horizontal road outlines
        for (let i = 1; i < 5; i++) {
          ctx.beginPath()
          ctx.moveTo(0, canvas.height * (i / 5) - 4)
          ctx.lineTo(canvas.width, canvas.height * (i / 5) - 4)
          ctx.stroke()

          ctx.beginPath()
          ctx.moveTo(0, canvas.height * (i / 5) + 4)
          ctx.lineTo(canvas.width, canvas.height * (i / 5) + 4)
          ctx.stroke()
        }

        // Vertical road outlines
        for (let i = 1; i < 5; i++) {
          ctx.beginPath()
          ctx.moveTo(canvas.width * (i / 5) - 4, 0)
          ctx.lineTo(canvas.width * (i / 5) - 4, canvas.height)
          ctx.stroke()

          ctx.beginPath()
          ctx.moveTo(canvas.width * (i / 5) + 4, 0)
          ctx.lineTo(canvas.width * (i / 5) + 4, canvas.height)
          ctx.stroke()
        }

        // Draw a start point
        const startX = canvas.width * 0.2
        const startY = canvas.height * 0.7

        ctx.fillStyle = "#3b82f6"
        ctx.beginPath()
        ctx.arc(startX, startY, 8, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = "rgba(59, 130, 246, 0.2)"
        ctx.beginPath()
        ctx.arc(startX, startY, 16, 0, Math.PI * 2)
        ctx.fill()

        // Draw a destination marker
        const destX = canvas.width * 0.8
        const destY = canvas.height * 0.3

        ctx.fillStyle = "#ef4444"
        ctx.beginPath()
        ctx.moveTo(destX, destY - 20)
        ctx.lineTo(destX + 10, destY)
        ctx.lineTo(destX - 10, destY)
        ctx.closePath()
        ctx.fill()

        // Draw a route
        ctx.strokeStyle = "#3b82f6"
        ctx.lineWidth = 3
        ctx.setLineDash([5, 5])
        ctx.beginPath()
        ctx.moveTo(startX, startY)
        ctx.lineTo(startX, canvas.height * 0.4)
        ctx.lineTo(canvas.width * 0.6, canvas.height * 0.4)
        ctx.lineTo(canvas.width * 0.6, destY)
        ctx.lineTo(destX, destY)
        ctx.stroke()
      }

      return () => {
        // Use the stored ref value in the cleanup function
        if (currentMapRef && currentMapRef.contains(canvas)) {
          currentMapRef.removeChild(canvas)
        }
      }
    }
  }, [])

  return <div ref={mapRef} className="w-full h-full bg-muted rounded-lg"></div>
}