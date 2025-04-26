import { Car, CreditCard, FileText, MapPin, Search } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { BookingMap } from "@/components/booking-map"

export function AgencyDashboard() {
  return (
    <div className="grid gap-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Agency Dashboard</h2>
          <p className="text-muted-foreground">Manage your fleet, drivers, and bookings.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button className="rounded-full">
            <Car className="mr-2 h-4 w-4" />
            Add Vehicle
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="shadow-md rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Fleet Status</CardTitle>
            <CardDescription>Vehicle availability</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-4">
              <p className="text-3xl font-bold">24</p>
              <p className="text-sm text-muted-foreground">Total Vehicles</p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                <p className="text-xl font-bold text-green-600 dark:text-green-400">18</p>
                <p className="text-xs text-green-600 dark:text-green-400">Available</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                <p className="text-xl font-bold text-blue-600 dark:text-blue-400">6</p>
                <p className="text-xs text-blue-600 dark:text-blue-400">On Ride</p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg">
                <p className="text-xl font-bold text-yellow-600 dark:text-yellow-400">2</p>
                <p className="text-xs text-yellow-600 dark:text-yellow-400">Maintenance</p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                <p className="text-xl font-bold text-red-600 dark:text-red-400">0</p>
                <p className="text-xs text-red-600 dark:text-red-400">Issues</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Driver Status</CardTitle>
            <CardDescription>Driver availability</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-4">
              <p className="text-3xl font-bold">16</p>
              <p className="text-sm text-muted-foreground">Total Drivers</p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                <p className="text-xl font-bold text-green-600 dark:text-green-400">10</p>
                <p className="text-xs text-green-600 dark:text-green-400">Active</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                <p className="text-xl font-bold text-blue-600 dark:text-blue-400">6</p>
                <p className="text-xs text-blue-600 dark:text-blue-400">On Duty</p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg">
                <p className="text-xl font-bold text-yellow-600 dark:text-yellow-400">3</p>
                <p className="text-xs text-yellow-600 dark:text-yellow-400">Off Duty</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                <p className="text-xl font-bold text-purple-600 dark:text-purple-400">2</p>
                <p className="text-xs text-purple-600 dark:text-purple-400">New Hires</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Today&apos;s Rides</CardTitle>
            <CardDescription>Ride statistics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-4">
              <p className="text-3xl font-bold">42</p>
              <p className="text-sm text-muted-foreground">Total Rides Today</p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                <p className="text-xl font-bold text-green-600 dark:text-green-400">28</p>
                <p className="text-xs text-green-600 dark:text-green-400">Completed</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                <p className="text-xl font-bold text-blue-600 dark:text-blue-400">6</p>
                <p className="text-xs text-blue-600 dark:text-blue-400">In Progress</p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg">
                <p className="text-xl font-bold text-yellow-600 dark:text-yellow-400">8</p>
                <p className="text-xs text-yellow-600 dark:text-yellow-400">Scheduled</p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                <p className="text-xl font-bold text-red-600 dark:text-red-400">0</p>
                <p className="text-xs text-red-600 dark:text-red-400">Cancelled</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Revenue</CardTitle>
            <CardDescription>Today&apos;s earnings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-4">
              <p className="text-3xl font-bold">₹92,450</p>
              <p className="text-sm text-green-500">+12% from yesterday</p>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Daily Goal</span>
                  <span className="text-sm font-medium">₹1,00,000</span>
                </div>
                <Progress value={83} className="h-2" />
                <p className="text-xs text-right mt-1 text-muted-foreground">83% of daily goal</p>
              </div>
              <div className="pt-2 border-t">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-sm text-muted-foreground">Week to Date</p>
                    <p className="font-medium">₹4,25,842</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Month to Date</p>
                    <p className="font-medium">₹12,45,925</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="shadow-md rounded-2xl">
          <CardHeader>
            <CardTitle>Fleet Management</CardTitle>
            <CardDescription>Manage your vehicles and maintenance</CardDescription>
            <div className="relative mt-2">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search vehicles..." className="pl-9" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Car className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Maruti Swift (2022)</p>
                    <p className="text-xs text-muted-foreground">License: MH01-AB-1234</p>
                  </div>
                </div>
                <Badge className="bg-green-500">Available</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Car className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Honda Civic (2023)</p>
                    <p className="text-xs text-muted-foreground">License: XYZ-5678</p>
                  </div>
                </div>
                <Badge className="bg-blue-500">On Ride</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Car className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Ford Escape (2021)</p>
                    <p className="text-xs text-muted-foreground">License: DEF-9012</p>
                  </div>
                </div>
                <Badge className="bg-yellow-500">Maintenance</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Car className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Nissan Altima (2022)</p>
                    <p className="text-xs text-muted-foreground">License: GHI-3456</p>
                  </div>
                </div>
                <Badge className="bg-green-500">Available</Badge>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">View All Vehicles</Button>
          </CardFooter>
        </Card>

        <Card className="shadow-md rounded-2xl">
          <CardHeader>
            <CardTitle>Driver Assignments</CardTitle>
            <CardDescription>Manage your drivers and schedules</CardDescription>
            <div className="relative mt-2">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search drivers..." className="pl-9" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/placeholder.svg" alt="Driver" />
                    <AvatarFallback>MS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">Rajesh Kumar</p>
                    <p className="text-xs text-muted-foreground">ID: DRV-001 • Rating: 4.9</p>
                  </div>
                </div>
                <Badge className="bg-blue-500">On Duty</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/placeholder.svg" alt="Driver" />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">Priya Sharma</p>
                    <p className="text-xs text-muted-foreground">ID: DRV-002 • Rating: 4.8</p>
                  </div>
                </div>
                <Badge className="bg-green-500">Available</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/placeholder.svg" alt="Driver" />
                    <AvatarFallback>RB</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">Robert Brown</p>
                    <p className="text-xs text-muted-foreground">ID: DRV-003 • Rating: 4.7</p>
                  </div>
                </div>
                <Badge className="bg-yellow-500">Off Duty</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/placeholder.svg" alt="Driver" />
                    <AvatarFallback>JW</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">Jennifer Wilson</p>
                    <p className="text-xs text-muted-foreground">ID: DRV-004 • Rating: 4.9</p>
                  </div>
                </div>
                <Badge className="bg-blue-500">On Duty</Badge>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">View All Drivers</Button>
          </CardFooter>
        </Card>
      </div>

      <Tabs defaultValue="map" className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:w-[500px]">
          <TabsTrigger value="map">Fleet Map</TabsTrigger>
          <TabsTrigger value="rides">Rides Overview</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="map" className="mt-4">
          <Card className="shadow-md rounded-2xl">
            <CardHeader>
              <CardTitle>Fleet Tracking</CardTitle>
              <CardDescription>Real-time location of all vehicles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] rounded-lg overflow-hidden">
                <BookingMap pickupLocation="Downtown" destination="Airport" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="rides" className="mt-4">
          <Card className="shadow-md rounded-2xl">
            <CardHeader>
              <CardTitle>Today&apos;s Rides</CardTitle>
              <CardDescription>All rides scheduled for today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <MapPin className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Downtown to Airport</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>Driver: Michael S.</span>
                          <span>•</span>
                          <span>Vehicle: ABC-1234</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{i === 2 ? "In Progress" : i === 3 ? "Scheduled" : "Completed"}</p>
                      <p className="text-xs text-muted-foreground">10:3{i} AM</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View All Rides</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="reports" className="mt-4">
          <Card className="shadow-md rounded-2xl">
            <CardHeader>
              <CardTitle>Financial Reports</CardTitle>
              <CardDescription>Revenue and expense overview</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Revenue (This Month)</p>
                    <p className="text-2xl font-bold">₹12,45,925</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Expenses (This Month)</p>
                    <p className="text-2xl font-bold">₹7,842.50</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Net Profit (This Month)</p>
                    <p className="text-2xl font-bold text-green-500">₹4,616.75</p>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <p className="font-medium mb-4">Recent Transactions</p>
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="bg-primary/10 p-2 rounded-full">
                            <CreditCard className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-sm">Payment Received</p>
                            <p className="text-xs text-muted-foreground">Transaction ID: TXN-{1000 + i}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-green-500">+₹124.5{i}</p>
                          <p className="text-xs text-muted-foreground">March {20 + i}, 2025</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <FileText className="mr-2 h-4 w-4" />
                Download Full Report
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
