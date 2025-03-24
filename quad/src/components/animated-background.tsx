"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Car and road elements
    class Car {
      x: number
      y: number
      width: number
      height: number
      speed: number
      color: string

      constructor(x: number, y: number, width: number, height: number, speed: number, color: string) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.speed = speed
        this.color = color
      }

      draw() {
        if (!ctx) return

        // Car body
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)

        // Windows
        ctx.fillStyle = "#a8d5ff"
        ctx.fillRect(this.x + this.width * 0.2, this.y, this.width * 0.6, this.height * 0.4)

        // Wheels
        ctx.fillStyle = "#333"
        ctx.fillRect(this.x + this.width * 0.1, this.y + this.height * 0.8, this.width * 0.2, this.height * 0.2)
        ctx.fillRect(this.x + this.width * 0.7, this.y + this.height * 0.8, this.width * 0.2, this.height * 0.2)
      }

      update() {
        const canvas = canvasRef.current
        if (!canvas) return

        this.x += this.speed
        if (this.speed > 0 && this.x > canvas.width) {
          this.x = -this.width
        } else if (this.speed < 0 && this.x < -this.width) {
          this.x = canvas.width
        }
        this.draw()
      }
    }

    // Road markings
    class RoadMarking {
      x: number
      y: number
      width: number
      height: number
      speed: number

      constructor(x: number, y: number, width: number, height: number, speed: number) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.speed = speed
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = "#ffffff"
        ctx.fillRect(this.x, this.y, this.width, this.height)
      }

      update() {
        const canvas = canvasRef.current
        if (!canvas) return
        this.x += this.speed
        if (this.speed > 0 && this.x > canvas.width) {
          this.x = -this.width
        } else if (this.speed < 0 && this.x < -this.width) {
          this.x = canvas.width
        }
        this.draw()
      }
    }

    // Create cars
    const cars: Car[] = []
    const roadY = canvas.height * 0.6
    const roadHeight = 100

    // Cars going right
    for (let i = 0; i < 3; i++) {
      const x = Math.random() * canvas.width
      const y = roadY + 10
      const width = 60
      const height = 30
      const speed = 1 + Math.random() * 1.5
      const colors = ["#ff6b6b", "#48dbfb", "#1dd1a1", "#feca57", "#5f27cd"]
      const color = colors[Math.floor(Math.random() * colors.length)]
      cars.push(new Car(x, y, width, height, speed, color))
    }

    // Cars going left
    for (let i = 0; i < 3; i++) {
      const x = Math.random() * canvas.width
      const y = roadY + roadHeight - 40
      const width = 60
      const height = 30
      const speed = -1 - Math.random() * 1.5
      const colors = ["#ff6b6b", "#48dbfb", "#1dd1a1", "#feca57", "#5f27cd"]
      const color = colors[Math.floor(Math.random() * colors.length)]
      cars.push(new Car(x, y, width, height, speed, color))
    }

    // Create road markings
    const roadMarkings: RoadMarking[] = []
    const markingWidth = 50
    const markingHeight = 5
    const gap = 30
    const totalWidth = markingWidth + gap
    const numMarkings = Math.ceil(canvas.width / totalWidth) + 1

    // Center line markings
    for (let i = 0; i < numMarkings; i++) {
      const x = i * totalWidth
      const y = roadY + roadHeight / 2 - markingHeight / 2
      roadMarkings.push(new RoadMarking(x, y, markingWidth, markingHeight, 1))
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return

      // Clear canvas with a slight opacity to create trail effect
      ctx.fillStyle = "rgba(255, 255, 255, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw road
      ctx.fillStyle = "#f0f0f0"
      ctx.fillRect(0, roadY, canvas.width, roadHeight)

      // Update road markings
      roadMarkings.forEach((marking) => marking.update())

      // Update cars
      cars.forEach((car) => car.update())

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-20" />
}

