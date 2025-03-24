"use client"

import { useState } from "react"
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

export default function MapPage() {
    const [selectedRide, setSelectedRide] = useState<number | null>(null)

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
                                    <InteractiveMap onSelectRide={setSelectedRide} />
                                </div>
                            </CardContent>
                        </Card>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-semibold">Available Rides</h2>
                                <Sheet>
                                    <SheetTrigger asChild>
                                        <Button variant="outline" size="sm">
                                            <Filter className="h-4 w-4 mr-2" />
                                            Filters
                                        </Button>
                                    </SheetTrigger>
                                    <SheetContent>
                                        <SheetHeader>
                                            <SheetTitle>Filter Rides</SheetTitle>
                                            <SheetDescription>
                                                Customize your search criteria
                                            </SheetDescription>
                                        </SheetHeader>
                                        <div className="py-4 space-y-6">
                                            <div className="space-y-2">
                                                <Label>Price Range</Label>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-sm">₹5</span>
                                                    <span className="text-sm">₹50</span>
                                                </div>
                                                <Slider defaultValue={[25]} max={50} step={1} />
                                                <div className="text-center text-sm text-muted-foreground">
                                                    Max: ₹25
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <Label>Ride Type</Label>
                                                <div className="space-y-2">
                                                    <div className="flex items-center justify-between">
                                                        <Label htmlFor="standard">Standard</Label>
                                                        <Switch id="standard" defaultChecked />
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <Label htmlFor="comfort">Comfort</Label>
                                                        <Switch id="comfort" defaultChecked />
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <Label htmlFor="premium">Premium</Label>
                                                        <Switch id="premium" defaultChecked />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <Label>Driver Rating</Label>
                                                <Select defaultValue="4">
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Minimum rating" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="3">3+ Stars</SelectItem>
                                                        <SelectItem value="4">4+ Stars</SelectItem>
                                                        <SelectItem value="4.5">4.5+ Stars</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label>Additional Options</Label>
                                                <div className="space-y-2">
                                                    <div className="flex items-center justify-between">
                                                        <Label htmlFor="pet-friendly">Pet Friendly</Label>
                                                        <Switch id="pet-friendly" />
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <Label htmlFor="wheelchair">Wheelchair Accessible</Label>
                                                        <Switch id="wheelchair" />
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <Label htmlFor="child-seat">Child Seat Available</Label>
                                                        <Switch id="child-seat" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-4">
                                                <Button className="w-full">Apply Filters</Button>
                                            </div>
                                        </div>
                                    </SheetContent>
                                </Sheet>
                            </div>

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
                                    <CardTitle>Search Location</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="relative">
                                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                            <Input placeholder="Search for a location" className="pl-9" />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-sm font-medium">Recent Searches</h3>
                                            <div className="space-y-2">
                                                <Button variant="outline" className="w-full justify-start">
                                                    <MapPin className="mr-2 h-4 w-4" />
                                                    Downtown Area
                                                </Button>
                                                <Button variant="outline" className="w-full justify-start">
                                                    <MapPin className="mr-2 h-4 w-4" />
                                                    Airport Terminal
                                                </Button>
                                                <Button variant="outline" className="w-full justify-start">
                                                    <MapPin className="mr-2 h-4 w-4" />
                                                    Shopping Mall
                                                </Button>
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

                            <Card className="shadow-md rounded-2xl">
                                <CardHeader>
                                    <CardTitle>Quick Options</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2">
                                        <Button variant="outline" className="w-full justify-start">
                                            <User className="mr-2 h-4 w-4" />
                                            Saved Locations
                                        </Button>
                                        <Button variant="outline" className="w-full justify-start">
                                            <Star className="mr-2 h-4 w-4" />
                                            Favorite Drivers
                                        </Button>
                                        <Button variant="outline" className="w-full justify-start">
                                            <Car className="mr-2 h-4 w-4" />
                                            Schedule a Ride
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
