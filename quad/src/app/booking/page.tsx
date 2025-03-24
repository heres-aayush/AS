"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Calendar, Car, Clock, CreditCard, Info, MapPin, Plus, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { BookingMap } from "@/components/booking-map"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from 'lucide-react'
import { format } from "date-fns"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"

export default function BookingPage() {
    const router = useRouter()
    const [date, setDate] = useState<Date>()
    const [bookingStep, setBookingStep] = useState(1)
    const [rideType, setRideType] = useState("standard")
    const [paymentMethod, setPaymentMethod] = useState("card")

    const handleNextStep = () => {
        if (bookingStep < 4) {
            setBookingStep(bookingStep + 1)
            window.scrollTo(0, 0)
        } else {
            // Booking complete, redirect to confirmation
            router.push("/booking/confirmation")
        }
    }

    const handlePreviousStep = () => {
        if (bookingStep > 1) {
            setBookingStep(bookingStep - 1)
      window.scrollTo(0, 0)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Book a Ride</h1>
          <p className="text-muted-foreground">Find and book your perfect ride</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="shadow-md rounded-2xl">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Booking Details</CardTitle>
                  <div className="flex items-center gap-2">
                    <span className={cn("flex h-8 w-8 items-center justify-center rounded-full", 
                      bookingStep >= 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground")}>1</span>
                    <Separator className="w-8" />
                    <span className={cn("flex h-8 w-8 items-center justify-center rounded-full", 
                      bookingStep >= 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground")}>2</span>
                    <Separator className="w-8" />
                    <span className={cn("flex h-8 w-8 items-center justify-center rounded-full", 
                      bookingStep >= 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground")}>3</span>
                    <Separator className="w-8" />
                    <span className={cn("flex h-8 w-8 items-center justify-center rounded-full", 
                      bookingStep >= 4 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground")}>4</span>
                  </div>
                </div>
                <CardDescription>
                  {bookingStep === 1 && "Enter your ride details"}
                  {bookingStep === 2 && "Choose your ride type"}
                  {bookingStep === 3 && "Select your driver"}
                  {bookingStep === 4 && "Review and payment"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {bookingStep === 1 && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="pickup">Pickup Location</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input id="pickup" placeholder="Enter pickup address" className="pl-9" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="destination">Destination</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input id="destination" placeholder="Enter destination address" className="pl-9" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="date">Date</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !date && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : "Select date"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <CalendarComponent
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="time">Time</Label>
                          <div className="relative">
                            <Clock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Select>
                              <SelectTrigger className="pl-9">
                                <SelectValue placeholder="Select time" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="8:00">8:00 AM</SelectItem>
                                <SelectItem value="8:30">8:30 AM</SelectItem>
                                <SelectItem value="9:00">9:00 AM</SelectItem>
                                <SelectItem value="9:30">9:30 AM</SelectItem>
                                <SelectItem value="10:00">10:00 AM</SelectItem>
                                <SelectItem value="10:30">10:30 AM</SelectItem>
                                <SelectItem value="11:00">11:00 AM</SelectItem>
                                <SelectItem value="11:30">11:30 AM</SelectItem>
                                <SelectItem value="12:00">12:00 PM</SelectItem>
                                <SelectItem value="12:30">12:30 PM</SelectItem>
                                <SelectItem value="13:00">1:00 PM</SelectItem>
                                <SelectItem value="13:30">1:30 PM</SelectItem>
                                <SelectItem value="14:00">2:00 PM</SelectItem>
                                <SelectItem value="14:30">2:30 PM</SelectItem>
                                <SelectItem value="15:00">3:00 PM</SelectItem>
                                <SelectItem value="15:30">3:30 PM</SelectItem>
                                <SelectItem value="16:00">4:00 PM</SelectItem>
                                <SelectItem value="16:30">4:30 PM</SelectItem>
                                <SelectItem value="17:00">5:00 PM</SelectItem>
                                <SelectItem value="17:30">5:30 PM</SelectItem>
                                <SelectItem value="18:00">6:00 PM</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="passengers">Number of Passengers</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Select>
                            <SelectTrigger className="pl-9">
                              <SelectValue placeholder="Select passengers" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 Passenger</SelectItem>
                              <SelectItem value="2">2 Passengers</SelectItem>
                              <SelectItem value="3">3 Passengers</SelectItem>
                              <SelectItem value="4">4 Passengers</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="notes">Additional Notes</Label>
                        <Textarea id="notes" placeholder="Any special requirements or instructions" />
                      </div>
                    </div>
                  </div>
                )}

                {bookingStep === 2 && (
                  <div className="space-y-6">
                    <RadioGroup defaultValue="standard" value={rideType} onValueChange={setRideType}>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="standard" id="standard" />
                          <Label htmlFor="standard" className="flex-1 cursor-pointer">
                            <Card className={cn("cursor-pointer", rideType === "standard" ? "border-primary" : "")}>
                              <CardContent className="p-4">
                                <div className="flex justify-between items-center">
                                  <div className="flex items-center gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                      <Car className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                      <h3 className="font-medium">Standard</h3>
                                      <p className="text-sm text-muted-foreground">Affordable everyday rides</p>
                                    </div>
                                  </div>
                                  <div className="text-right">
                                    <p className="font-medium">$12.50</p>
                                    <p className="text-sm text-muted-foreground">20 min</p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="comfort" id="comfort" />
                          <Label htmlFor="comfort" className="flex-1 cursor-pointer">
                            <Card className={cn("cursor-pointer", rideType === "comfort" ? "border-primary" : "")}>
                              <CardContent className="p-4">
                                <div className="flex justify-between items-center">
                                  <div className="flex items-center gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                      <Car className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                      <h3 className="font-medium">Comfort</h3>
                                      <p className="text-sm text-muted-foreground">Newer cars with extra legroom</p>
                                    </div>
                                  </div>
                                  <div className="text-right">
                                    <p className="font-medium">$18.75</p>
                                    <p className="text-sm text-muted-foreground">20 min</p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="premium" id="premium" />
                          <Label htmlFor="premium" className="flex-1 cursor-pointer">
                            <Card className={cn("cursor-pointer", rideType === "premium" ? "border-primary" : "")}>
                              <CardContent className="p-4">
                                <div className="flex justify-between items-center">
                                  <div className="flex items-center gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                      <Car className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                      <h3 className="font-medium">Premium</h3>
                                      <p className="text-sm text-muted-foreground">Luxury vehicles with top-rated drivers</p>
                                    </div>
                                  </div>
                                  <div className="text-right">
                                    <p className="font-medium">$25.00</p>
                                    <p className="text-sm text-muted-foreground">20 min</p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>

                    <div className="space-y-4 pt-4">
                      <h3 className="font-medium">Ride Options</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Label htmlFor="quiet-ride">Quiet Ride</Label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full p-0">
                                  <Info className="h-4 w-4" />
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent>
                                Let your driver know you prefer a quiet ride with minimal conversation.
                              </PopoverContent>
                            </Popover>
                          </div>
                          <Switch id="quiet-ride" />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Label htmlFor="extra-luggage">Extra Luggage Space</Label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full p-0">
                                  <Info className="h-4 w-4" />
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent>
                                Request a vehicle with additional luggage space.
                              </PopoverContent>
                            </Popover>
                          </div>
                          <Switch id="extra-luggage" />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Label htmlFor="pet-friendly">Pet Friendly</Label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full p-0">
                                  <Info className="h-4 w-4" />
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent>
                                Request a driver who accepts pets in their vehicle.
                              </PopoverContent>
                            </Popover>
                          </div>
                          <Switch id="pet-friendly" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {bookingStep === 3 && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="any" id="any" defaultChecked />
                        <Label htmlFor="any" className="flex-1 cursor-pointer">
                          <Card className="cursor-pointer border-primary">
                            <CardContent className="p-4">
                              <div className="flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                  <div className="bg-primary/10 p-3 rounded-full">
                                    <User className="h-6 w-6 text-primary" />
                                  </div>
                                  <div>
                                    <h3 className="font-medium">Any Available Driver</h3>
                                    <p className="text-sm text-muted-foreground">We&apos;ll match you with the best available driver</p>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </Label>
                      </div>
                      <div className="pt-4">
                        <h3 className="font-medium mb-4">Or choose a specific driver:</h3>
                        <div className="space-y-4">
                          {[1, 2, 3].map((i) => (
                            <Card key={i} className="cursor-pointer hover:border-primary">
                              <CardContent className="p-4">
                                <div className="flex justify-between items-center">
                                  <div className="flex items-center gap-4">
                                    <Avatar className="h-12 w-12">
                                      <AvatarImage src="/placeholder.svg" alt="Driver" />
                                      <AvatarFallback>{`D${i}`}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                      <h3 className="font-medium">{["Michael Smith", "Sarah Johnson", "Robert Brown"][i-1]}</h3>
                                      <div className="flex items-center gap-2">
                                        <Badge variant="outline" className="text-xs">4.{8+i} ★</Badge>
                                        <span className="text-xs text-muted-foreground">{100 + i*50}+ rides</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="text-right">
                                    <p className="font-medium">{["Toyota Camry", "Honda Civic", "Ford Escape"][i-1]}</p>
                                    <p className="text-xs text-muted-foreground">{["Silver", "Blue", "Black"][i-1]} • {["ABC-1234", "XYZ-5678", "DEF-9012"][i-1]}</p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {bookingStep === 4 && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-medium">Ride Summary</h3>
                      <Card>
                        <CardContent className="p-4">
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-muted-foreground" />
                                <span>123 Main St, Downtown</span>
                              </div>
                              <Badge>Pickup</Badge>
                            </div>
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-muted-foreground" />
                                <span>456 Park Ave, Uptown</span>
                              </div>
                              <Badge>Destination</Badge>
                            </div>
                            <Separator />
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                <span>March 25, 2025</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-muted-foreground" />
                                <span>10:30 AM</span>
                              </div>
                            </div>
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-2">
                                <Car className="h-4 w-4 text-muted-foreground" />
                                <span>{rideType === "standard" ? "Standard" : rideType === "comfort" ? "Comfort" : "Premium"}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <User className="h-4 w-4 text-muted-foreground" />
                                <span>2 Passengers</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <h3 className="font-medium pt-4">Payment Method</h3>
                      <RadioGroup defaultValue="card" value={paymentMethod} onValueChange={setPaymentMethod}>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="card" id="card" />
                            <Label htmlFor="card" className="flex-1 cursor-pointer">
                              <Card className={cn("cursor-pointer", paymentMethod === "card" ? "border-primary" : "")}>
                                <CardContent className="p-4">
                                  <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                      <div className="bg-primary/10 p-3 rounded-full">
                                        <CreditCard className="h-6 w-6 text-primary" />
                                      </div>
                                      <div>
                                        <h3 className="font-medium">Credit Card</h3>
                                        <p className="text-sm text-muted-foreground">**** **** **** 4242</p>
                                      </div>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="cash" id="cash" />
                            <Label htmlFor="cash" className="flex-1 cursor-pointer">
                              <Card className={cn("cursor-pointer", paymentMethod === "cash" ? "border-primary" : "")}>
                                <CardContent className="p-4">
                                  <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                      <div className="bg-primary/10 p-3 rounded-full">
                                        <CreditCard className="h-6 w-6 text-primary" />
                                      </div>
                                      <div>
                                        <h3 className="font-medium">Cash</h3>
                                        <p className="text-sm text-muted-foreground">Pay directly to the driver</p>
                                      </div>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </Label>
                          </div>
                          <Button variant="outline" className="w-full">
                            <Plus className="mr-2 h-4 w-4" />
                            Add Payment Method
                          </Button>
                        </div>
                      </RadioGroup>

                      <div className="pt-4 space-y-2">
                        <div className="flex justify-between">
                          <span>Base fare</span>
                          <span>₹12.50</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Service fee</span>
                          <span>₹1.50</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Tax</span>
                          <span>₹1.00</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between font-medium">
                          <span>Total</span>
                          <span>₹15.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                {bookingStep > 1 ? (
                  <Button variant="outline" onClick={handlePreviousStep}>
                    Back
                  </Button>
                ) : (
                  <div></div>
                )}
                <Button onClick={handleNextStep}>
                  {bookingStep < 4 ? "Continue" : "Confirm Booking"}
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <div className="space-y-6">
              <Card className="shadow-md rounded-2xl">
                <CardHeader>
                  <CardTitle>Route Preview</CardTitle>
                  <CardDescription>Your ride route</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] rounded-lg overflow-hidden">
                    <BookingMap />
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-md rounded-2xl">
                <CardHeader>
                  <CardTitle>Ride Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Distance</span>
                      <span className="font-medium">5.2 miles</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Estimated Time</span>
                      <span className="font-medium">20 minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Estimated Fare</span>
                      <span className="font-medium">₹12.50 - ₹25.00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-md rounded-2xl">
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      If you need assistance with your booking, our support team is here to help.
                    </p>
                    <Button variant="outline" className="w-full">
                      Contact Support
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
