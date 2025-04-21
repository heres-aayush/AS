"use client"

import { useEffect, useState } from "react"
import { Car, Filter, MapPin, Search, Star, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { InteractiveMap } from "@/components/interactive-map"
import { Separator } from "@/components/ui/separator"
import Link from 'next/link'

export default function MapPage() {
    const [selectedRide, setSelectedRide] = useState<number | null>(null)
    const [recentSearches, setRecentSearches] = useState<string[]>([])
    
    // Load recent searches from localStorage when component mounts
    useEffect(() => {
        const savedSearches = localStorage.getItem('recentSearches')
        if (savedSearches) {
            try {
                setRecentSearches(JSON.parse(savedSearches))
            } catch (error) {
                console.error('Error parsing saved searches:', error)
            }
        }
    }, [])
    
    // Handle new searches
    const handleSearch = (query: string) => {
        if (!query.trim()) return
        
        // Add new search to the beginning of the array and remove duplicates
        setRecentSearches(prev => {
            const updatedSearches = [query, ...prev.filter(item => item !== query)].slice(0, 3)
            // Save to localStorage
            localStorage.setItem('recentSearches', JSON.stringify(updatedSearches))
            return updatedSearches
        })
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
            <div className="container mx-auto py-8 px-4">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold">Find Rides Near You</h1>
                    <p className="text-muted-foreground">Explore available rides and drivers in your area</p>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                        <Card className="shadow-md rounded-2xl mb-6">
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <CardTitle>Map View</CardTitle>
                                    <Tabs defaultValue="all" className="w-[200px]">
                                        <TabsList className="grid w-full grid-cols-2">
                                            <TabsTrigger value="all">All</TabsTrigger>
                                            <TabsTrigger value="available">Available</TabsTrigger>
                                        </TabsList>
                                    </Tabs>
                                </div>
                                <CardDescription>Find rides and drivers near your location</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="h-[500px] rounded-lg overflow-hidden">
                                    <InteractiveMap 
                                        onSelectRide={setSelectedRide} 
                                        onSearch={handleSearch}
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        <div className="space-y-4">
                            <div className="space-y-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <Card 
                                        key={i} 
                                        className={`shadow-md rounded-2xl cursor-pointer transition-all ${selectedRide === i ? 'border-primary' : 'hover:border-primary/50'}`}
                                        onClick={() => setSelectedRide(i)}
                                    >
                                        <CardContent className="p-4">
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center gap-4">
                                                    <Avatar className="h-12 w-12">
                                                        <AvatarImage src="/placeholder.svg" alt="Driver" />
                                                        <AvatarFallback>{`D${i}`}</AvatarFallback>
                                                    </Avatar>
                                                    <div>
                                                        <h3 className="font-medium">{["Michael Smith", "Sarah Johnson", "Robert Brown", "Jennifer Wilson"][i-1]}</h3>
                                                        <div className="flex items-center gap-2">
                                                            <Badge variant="outline" className="text-xs">4.{8+i % 2} ★</Badge>
                                                            <span className="text-xs text-muted-foreground">{100 + i*50}+ rides</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-medium">₹{10 + i*2}.50</p>
                                                    <p className="text-xs text-muted-foreground">{10 + i} min away</p>
                                                </div>
                                            </div>
                                            <div className="mt-4 flex justify-between items-center">
                                                <div className="flex items-center gap-2">
                                                    <Car className="h-4 w-4 text-muted-foreground" />
                                                    <span className="text-sm">{["Toyota Camry", "Honda Civic", "Ford Escape", "Nissan Altima"][i-1]} • {["Silver", "Blue", "Black", "White"][i-1]}</span>
                                                </div>
                                                <Badge>{["Standard", "Comfort", "Premium", "Standard"][i-1]}</Badge>
                                            </div>
                                            <div className="mt-2 flex justify-between">
                                                <div className="flex items-start gap-2">
                                                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                                                    <div className="text-sm">
                                                        <p>Downtown to Airport</p>
                                                        <p className="text-xs text-muted-foreground">5.{i} miles • {15 + i} min</p>
                                                    </div>
                                                </div>
                                                <Button size="sm">Book</Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="space-y-6">
                            <Card className="shadow-md rounded-2xl">
                                <CardHeader>
                                    <CardTitle>Recent Searches</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <div className="space-y-2">
                                                {recentSearches.length > 0 ? (
                                                    recentSearches.map((search, index) => (
                                                        <Button 
                                                            key={index} 
                                                            variant="outline" 
                                                            className="w-full justify-between group relative px-4 py-2 h-auto"
                                                            onClick={(e) => {
                                                                // Prevent click on the button if clicked on the delete icon
                                                                if ((e.target as HTMLElement).closest('.delete-icon')) {
                                                                    return;
                                                                }
                                                                
                                                                const mapElement = document.querySelector('input[placeholder="Search location..."]') as HTMLInputElement
                                                                if (mapElement) {
                                                                    mapElement.value = search
                                                                    // Trigger a synthetic submit event for the form
                                                                    const form = mapElement.closest('form')
                                                                    if (form) {
                                                                        form.dispatchEvent(new Event('submit', { cancelable: true }))
                                                                    }
                                                                }
                                                            }}
                                                        >
                                                            <div className="flex items-center overflow-hidden">
                                                                <MapPin className="mr-2 h-4 w-4 flex-shrink-0" />
                                                                <span className="truncate text-left">{search}</span>
                                                            </div>
                                                            <span 
                                                                className="delete-icon ml-2 h-5 w-5 flex items-center justify-center rounded-full opacity-70 hover:opacity-100 hover:bg-red-100 hover:text-red-500 dark:hover:bg-red-900/30 transition-all"
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    setRecentSearches(prev => {
                                                                        const updatedSearches = prev.filter((_, i) => i !== index)
                                                                        localStorage.setItem('recentSearches', JSON.stringify(updatedSearches))
                                                                        return updatedSearches
                                                                    })
                                                                }}
                                                                title="Remove search"
                                                            >
                                                                ✕
                                                            </span>
                                                        </Button>
                                                    ))
                                                ) : (
                                                    <p className="text-center text-sm text-muted-foreground">No recent searches</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {selectedRide && (
                                <Card className="shadow-md rounded-2xl">
                                    <CardHeader>
                                        <CardTitle>Selected Ride</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-4">
                                                <Avatar className="h-16 w-16">
                                                    <AvatarImage src="/placeholder.svg" alt="Driver" />
                                                    <AvatarFallback>{`D${selectedRide}`}</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <h3 className="font-medium">{["Michael Smith", "Sarah Johnson", "Robert Brown", "Jennifer Wilson"][selectedRide-1]}</h3>
                                                    <div className="flex items-center">
                                                        <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                                                        <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                                                        <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                                                        <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                                                        <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                                                        <span className="ml-1 text-sm">4.{8+selectedRide % 2}</span>
                                                    </div>
                                                    <p className="text-sm text-muted-foreground">{100 + selectedRide*50}+ rides</p>
                                                </div>
                                            </div>
                                            <Separator />
                                            <div>
                                                <h3 className="text-sm font-medium mb-2">Vehicle</h3>
                                                <div className="flex items-center gap-2">
                                                    <Car className="h-4 w-4 text-muted-foreground" />
                                                    <span>{["Toyota Camry", "Honda Civic", "Ford Escape", "Nissan Altima"][selectedRide-1]} • {["Silver", "Blue", "Black", "White"][selectedRide-1]}</span>
                                                </div>
                                                <p className="text-sm text-muted-foreground mt-1">License: {["ABC-1234", "XYZ-5678", "DEF-9012", "GHI-3456"][selectedRide-1]}</p>
                                            </div>
                                            <Separator />
                                            <div>
                                                <h3 className="text-sm font-medium mb-2">Ride Details</h3>
                                                <div className="space-y-2">
                                                    <div className="flex justify-between">
                                                        <span className="text-sm text-muted-foreground">Pickup</span>
                                                        <span className="text-sm">Current Location</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-sm text-muted-foreground">Destination</span>
                                                        <span className="text-sm">Airport</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-sm text-muted-foreground">Distance</span>
                                                        <span className="text-sm">5.{selectedRide} miles</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-sm text-muted-foreground">Estimated Time</span>
                                                        <span className="text-sm">{15 + selectedRide} min</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-sm text-muted-foreground">Fare</span>
                                                        <span className="text-sm font-medium">₹{10 + selectedRide*2}.50</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="w-full">Book This Ride</Button>
                                    </CardFooter>
                                </Card>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Link href="/help" className="text-blue-500 underline">
                Help & Support
            </Link>
        </div>
    )
}