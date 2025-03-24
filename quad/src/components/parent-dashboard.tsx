import { AlertCircle, CalendarClock, Car, Clock, MapPin, Phone, Shield, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RideMap } from "@/components/ride-map"
import { Badge } from "@/components/ui/badge"

export function ParentDashboard() {
  return (
    <div className="grid gap-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Welcome back, Parent</h2>
          <p className="text-muted-foreground">Monitor your child&apos;s rides and schedule new ones.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button className="rounded-full">
            <MapPin className="mr-2 h-4 w-4" />
            Book a Ride for Child
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-md rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Child&apos;s Upcoming Ride</CardTitle>
            <CardDescription>Next scheduled ride for Priya</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <CalendarClock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-medium">Today, 3:30 PM</p>
                <p className="text-sm text-muted-foreground">School to Home</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Estimated arrival: 4:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Car className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Mahindra XUV300 (Blue) • UP15-XY-5678</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Driver: Sunita J. (Trusted)</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-500" />
                <span className="text-sm text-green-500">Background Checked</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button variant="outline" className="flex-1">
              Track
            </Button>
            <Button variant="outline" className="flex-1">
              Contact
            </Button>
          </CardFooter>
        </Card>

        <Card className="shadow-md rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Emergency Contacts</CardTitle>
            <CardDescription>Quick access to important contacts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/placeholder.svg" alt="Contact" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">Driver: Sunita Joshi</p>
                    <p className="text-xs text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
                <Button size="icon" variant="ghost">
                  <Phone className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/placeholder.svg" alt="Contact" />
                    <AvatarFallback>CS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">Customer Support</p>
                    <p className="text-xs text-muted-foreground">1800 123 4567</p>
                  </div>
                </div>
                <Button size="icon" variant="ghost">
                  <Phone className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-red-100 flex items-center justify-center">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Emergency Services</p>
                    <p className="text-xs text-muted-foreground">911</p>
                  </div>
                </div>
                <Button size="icon" variant="ghost">
                  <Phone className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Manage Contacts
            </Button>
          </CardFooter>
        </Card>

        <Card className="shadow-md rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Trusted Drivers</CardTitle>
            <CardDescription>Drivers approved for your child</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/placeholder.svg" alt="Driver" />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">Sarah Johnson</p>
                    <div className="flex items-center">
                      <Badge variant="outline" className="text-xs mr-1">
                        Verified
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        4.9 ★
                      </Badge>
                    </div>
                  </div>
                </div>
                <Button size="sm" variant="ghost">
                  View
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/placeholder.svg" alt="Driver" />
                    <AvatarFallback>RB</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">Robert Brown</p>
                    <div className="flex items-center">
                      <Badge variant="outline" className="text-xs mr-1">
                        Verified
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        4.8 ★
                      </Badge>
                    </div>
                  </div>
                </div>
                <Button size="sm" variant="ghost">
                  View
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Add Trusted Driver
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
              <CardTitle>Live Child Tracking</CardTitle>
              <CardDescription>Track your child&apos;s current ride in real-time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] rounded-lg overflow-hidden">
                <RideMap />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="history" className="mt-4">
          <Card className="shadow-md rounded-2xl">
            <CardHeader>
              <CardTitle>Child&apos;s Recent Rides</CardTitle>
              <CardDescription>Ride history for the past month</CardDescription>
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
                        <p className="font-medium">School to Home</p>
                        <p className="text-sm text-muted-foreground">March {10 + i}, 2025 • ₹450</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">₹450</p>
                      <div className="flex items-center text-yellow-500">
                        <Badge variant="outline" className="text-xs mr-1">
                          4.9 ★
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All History
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

