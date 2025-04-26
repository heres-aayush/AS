import { CalendarClock, Car, Clock, MapPin, Search, User, Star } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { BookingMap } from "@/components/booking-map"

export function CommuterDashboard() {
  return (
    <div className="grid gap-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Welcome back</h2>
          <p className="text-muted-foreground">Here&apos;s what&apos;s happening with your rides today.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button className="rounded-full">
            <MapPin className="mr-2 h-4 w-4" />
            Find a Ride
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-md rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Upcoming Ride</CardTitle>
            <CardDescription>Your next scheduled ride</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <CalendarClock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-medium">Today, 5:30 PM</p>
                <p className="text-sm text-muted-foreground">Office to Home</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Estimated arrival: 6:15 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Car className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Toyota Camry (Silver) • ABC-1234</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Driver: Ramesh S.</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">View Details</Button>
          </CardFooter>
        </Card>

        <Card className="shadow-md rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Ride Requests</CardTitle>
            <CardDescription>Pending approval from drivers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/placeholder.svg" alt="Driver" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">Home to Office</p>
                    <p className="text-xs text-muted-foreground">Tomorrow, 8:30 AM</p>
                  </div>
                </div>
                <Badge>Pending</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/placeholder.svg" alt="Driver" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">Office to Gym</p>
                    <p className="text-xs text-muted-foreground">Friday, 6:00 PM</p>
                  </div>
                </div>
                <Badge>Pending</Badge>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">View All Requests</Button>
          </CardFooter>
        </Card>

        <Card className="shadow-md rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Quick Search</CardTitle>
            <CardDescription>Find available rides</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="relative">
                <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Pickup location" className="pl-9" />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Destination" className="pl-9" />
              </div>
              <div className="relative">
                <Clock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Date & Time" className="pl-9" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <Search className="mr-2 h-4 w-4" />
              Search Rides
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Tabs defaultValue="map" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
          <TabsTrigger value="map">Live Tracking</TabsTrigger>
          <TabsTrigger value="history">Ride History</TabsTrigger>
        </TabsList>
        <TabsContent value="map" className="mt-4">
          <Card className="shadow-md rounded-2xl">
            <CardHeader>
              <CardTitle>Live Ride Tracking</CardTitle>
              <CardDescription>Track your current or upcoming ride</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] rounded-lg overflow-hidden">
                <BookingMap pickupLocation="Office" destination="Home" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="history" className="mt-4">
          <Card className="shadow-md rounded-2xl">
            <CardHeader>
              <CardTitle>Recent Rides</CardTitle>
              <CardDescription>Your ride history for the past month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Car className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Home to Office</p>
                        <p className="text-sm text-muted-foreground">March {10 + i}, 2025 • ₹850</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">₹850</p>
                      <div className="flex items-center text-yellow-500">
                        <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                        <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                        <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                        <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                        <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View All History</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
