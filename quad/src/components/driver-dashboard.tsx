import { CalendarClock, Car, Clock, CreditCard, MapPin, Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RideMap } from "@/components/ride-map"
import { Badge } from "@/components/ui/badge"
import { BookingMap } from "@/components/booking-map"

export function DriverDashboard() {
  return (
    <div className="grid gap-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Welcome back, Driver</h2>
          <p className="text-muted-foreground">Here&apos;s your driving schedule and earnings.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button className="rounded-full">
            <Car className="mr-2 h-4 w-4" />
            Start Driving
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-md rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Upcoming Trip</CardTitle>
            <CardDescription>Your next scheduled ride</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <CalendarClock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-medium">Today, 5:30 PM</p>
                <p className="text-sm text-muted-foreground">Downtown to Suburbs</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Estimated duration: 45 min</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">3 passengers • 2 stops</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Estimated earnings: $24.50</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button variant="outline" className="flex-1">
              Navigate
            </Button>
            <Button variant="outline" className="flex-1">
              Contact
            </Button>
          </CardFooter>
        </Card>

        <Card className="shadow-md rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Ride Requests</CardTitle>
            <CardDescription>Pending approval from you</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/placeholder.svg" alt="Passenger" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">Downtown to Airport</p>
                    <p className="text-xs text-muted-foreground">Tomorrow, 10:30 AM • $18.75</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                    ✓
                  </Button>
                  <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                    ✕
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/placeholder.svg" alt="Passenger" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">Suburbs to Mall</p>
                    <p className="text-xs text-muted-foreground">Friday, 4:00 PM • $12.25</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                    ✓
                  </Button>
                  <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                    ✕
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Requests
            </Button>
          </CardFooter>
        </Card>

        <Card className="shadow-md rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Earnings Overview</CardTitle>
            <CardDescription>This week&apos;s earnings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-4">
              <p className="text-3xl font-bold">₹24,575</p>
              <p className="text-sm text-muted-foreground">15 rides completed</p>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Weekly Goal</span>
                  <span className="text-sm font-medium">₹35,000</span>
                </div>
                <Progress value={69} className="h-2" />
                <p className="text-xs text-right mt-1 text-muted-foreground">69% of weekly goal</p>
              </div>
              <div className="pt-2 border-t">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-sm text-muted-foreground">Today</p>
                    <p className="font-medium">₹5,850</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Yesterday</p>
                    <p className="font-medium">₹6,225</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View Earnings Details
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Tabs defaultValue="map" className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:w-[500px]">
          <TabsTrigger value="map">Live Map</TabsTrigger>
          <TabsTrigger value="ratings">Ratings</TabsTrigger>
          <TabsTrigger value="car">Car Details</TabsTrigger>
        </TabsList>
        <TabsContent value="map" className="mt-4">
          <Card className="shadow-md rounded-2xl">
            <CardHeader>
              <CardTitle>Live Navigation</CardTitle>
              <CardDescription>Your current route and nearby passengers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full">
                <BookingMap pickupLocation="Start Location" destination="End Location" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="ratings" className="mt-4">
          <Card className="shadow-md rounded-2xl">
            <CardHeader>
              <CardTitle>Ratings & Feedback</CardTitle>
              <CardDescription>What passengers are saying about you</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-6">
                <div className="text-center">
                  <p className="text-4xl font-bold">4.9</p>
                  <div className="flex items-center text-yellow-500 justify-center">
                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  </div>
                  <p className="text-sm text-muted-foreground">Overall Rating</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs">5★</span>
                    <Progress value={92} className="h-2 w-32" />
                    <span className="text-xs">92%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs">4★</span>
                    <Progress value={6} className="h-2 w-32" />
                    <span className="text-xs">6%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs">3★</span>
                    <Progress value={2} className="h-2 w-32" />
                    <span className="text-xs">2%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs">2★</span>
                    <Progress value={0} className="h-2 w-32" />
                    <span className="text-xs">0%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs">1★</span>
                    <Progress value={0} className="h-2 w-32" />
                    <span className="text-xs">0%</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/placeholder.svg" alt="User" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-sm">John D.</span>
                    <div className="flex items-center text-yellow-500 ml-auto">
                      <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                      <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                      <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                      <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                      <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                    </div>
                  </div>
                  <p className="text-sm">Very professional and punctual. Car was clean and ride was smooth.</p>
                </div>
                <div className="border-b pb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/placeholder.svg" alt="User" />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-sm">Sarah M.</span>
                    <div className="flex items-center text-yellow-500 ml-auto">
                      <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                      <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                      <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                      <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                      <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                    </div>
                  </div>
                  <p className="text-sm">Great conversation and safe driving. Would ride again!</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="car" className="mt-4">
          <Card className="shadow-md rounded-2xl">
            <CardHeader>
              <CardTitle>Car Details</CardTitle>
              <CardDescription>Your registered vehicle information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Car className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Tata Nexon (2022)</p>
                  <p className="text-sm text-muted-foreground">License: DL05-AB-1234</p>
                </div>
                <Badge className="ml-auto">Verified</Badge>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Color</p>
                    <p className="font-medium">Silver</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Seats</p>
                    <p className="font-medium">4 Passengers</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Last Maintenance</p>
                    <p className="font-medium">March 1, 2025</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Next Maintenance</p>
                    <p className="font-medium">June 1, 2025</p>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm font-medium mb-2">Maintenance Status</p>
                  <div className="space-y-2">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">Oil Change</span>
                        <span className="text-sm">75%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">Tire Rotation</span>
                        <span className="text-sm">50%</span>
                      </div>
                      <Progress value={50} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">Brake Pads</span>
                        <span className="text-sm">80%</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Update Car Details
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

