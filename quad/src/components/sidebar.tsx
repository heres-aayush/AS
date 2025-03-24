"use client"

import { Car, Clock, CreditCard, Home, MapPin, Settings, Star, Users } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  userType: "commuter" | "parent" | "driver" | "agency"
  onUserTypeChange: (userType: "commuter" | "parent" | "driver" | "agency") => void
}

export function Sidebar({ userType, onUserTypeChange }: SidebarProps) {
  const navItems = {
    commuter: [
      { icon: <Home className="h-5 w-5" />, label: "Dashboard", href: "#" },
      { icon: <Clock className="h-5 w-5" />, label: "Upcoming Rides", href: "#" },
      { icon: <MapPin className="h-5 w-5" />, label: "Find a Ride", href: "#" },
      { icon: <Clock className="h-5 w-5" />, label: "Ride History", href: "#" },
      { icon: <Settings className="h-5 w-5" />, label: "Profile & Preferences", href: "#" },
    ],
    parent: [
      { icon: <Home className="h-5 w-5" />, label: "Dashboard", href: "#" },
      { icon: <Clock className="h-5 w-5" />, label: "Child's Scheduled Rides", href: "#" },
      { icon: <MapPin className="h-5 w-5" />, label: "Book a Ride", href: "#" },
      { icon: <Users className="h-5 w-5" />, label: "Trusted Drivers", href: "#" },
      { icon: <Settings className="h-5 w-5" />, label: "Emergency Contacts", href: "#" },
    ],
    driver: [
      { icon: <Home className="h-5 w-5" />, label: "Dashboard", href: "#" },
      { icon: <Clock className="h-5 w-5" />, label: "Upcoming Trips", href: "#" },
      { icon: <Users className="h-5 w-5" />, label: "Ride Requests", href: "#" },
      { icon: <CreditCard className="h-5 w-5" />, label: "Earnings", href: "#" },
      { icon: <Star className="h-5 w-5" />, label: "Ratings & Feedback", href: "#" },
      { icon: <Car className="h-5 w-5" />, label: "Car Details", href: "#" },
    ],
    agency: [
      { icon: <Home className="h-5 w-5" />, label: "Dashboard", href: "#" },
      { icon: <Car className="h-5 w-5" />, label: "Fleet Management", href: "#" },
      { icon: <Users className="h-5 w-5" />, label: "Driver Assignments", href: "#" },
      { icon: <MapPin className="h-5 w-5" />, label: "Rides Overview", href: "#" },
      { icon: <CreditCard className="h-5 w-5" />, label: "Earnings & Reports", href: "#" },
      { icon: <Settings className="h-5 w-5" />, label: "Customer Support", href: "#" },
    ],
  }

  return (
    <div className="flex h-full w-64 flex-col border-r bg-background">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Car className="h-6 w-6 text-primary" />
          <span>RideShare</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-xs font-semibold uppercase tracking-tight text-muted-foreground">User Type</h2>
          <div className="space-y-1">
            <Button
              variant={userType === "commuter" ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => onUserTypeChange("commuter")}
            >
              <Users className="mr-2 h-4 w-4" />
              Commuter
            </Button>
            <Button
              variant={userType === "parent" ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => onUserTypeChange("parent")}
            >
              <Users className="mr-2 h-4 w-4" />
              Parent
            </Button>
            <Button
              variant={userType === "driver" ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => onUserTypeChange("driver")}
            >
              <Car className="mr-2 h-4 w-4" />
              Driver
            </Button>
            <Button
              variant={userType === "agency" ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => onUserTypeChange("agency")}
            >
              <Home className="mr-2 h-4 w-4" />
              Agency
            </Button>
          </div>
        </div>
        <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
          {navItems[userType].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                index === 0 ? "bg-accent text-accent-foreground" : "text-muted-foreground",
              )}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

