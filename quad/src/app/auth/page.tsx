"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import Navigation from "@/components/navigation"
import AnimatedBackground from "@/components/animated-background"

export default function AuthPage() {
  const [userType, setUserType] = useState<string>("commuter-self")

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navigation />
        <main className="container max-w-6xl mx-auto pt-24 pb-16 px-4">
          <div className="flex flex-col items-center justify-center w-full">
            <h1 className="text-3xl font-bold mb-8 text-center">Join Quad Today</h1>

            <Tabs defaultValue="signup" className="w-full max-w-3xl">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
                <TabsTrigger value="login">Login</TabsTrigger>
              </TabsList>

              <TabsContent value="signup">
                <Card>
                  <CardHeader>
                    <CardTitle>Create an account</CardTitle>
                    <CardDescription>
                      Choose your user type and fill in your details to get started with Quad.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="user-type">I am a:</Label>
                        <RadioGroup
                          defaultValue="commuter-self"
                          onValueChange={setUserType}
                          className="grid grid-cols-1 md:grid-cols-2 gap-4"
                        >
                          <div className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:border-primary transition-colors">
                            <RadioGroupItem value="commuter-self" id="commuter-self" />
                            <Label htmlFor="commuter-self" className="cursor-pointer font-medium">
                              Commuter (Self)
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:border-primary transition-colors">
                            <RadioGroupItem value="commuter-parent" id="commuter-parent" />
                            <Label htmlFor="commuter-parent" className="cursor-pointer font-medium">
                              Commuter (Parent)
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:border-primary transition-colors">
                            <RadioGroupItem value="driver" id="driver" />
                            <Label htmlFor="driver" className="cursor-pointer font-medium">
                              Driver
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:border-primary transition-colors">
                            <RadioGroupItem value="agency" id="agency" />
                            <Label htmlFor="agency" className="cursor-pointer font-medium">
                              Agency
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      {userType === "commuter-self" && <CommuterSelfForm />}

                      {userType === "commuter-parent" && <CommuterParentForm />}

                      {userType === "driver" && <DriverForm />}

                      {userType === "agency" && <AgencyForm />}
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-4">
                    <Button className="w-full">Create Account</Button>
                    <p className="text-sm text-muted-foreground text-center">
                      By creating an account, you agree to our{" "}
                      <Link href="#" className="text-primary hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="#" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                    </p>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="login">
                <Card>
                  <CardHeader>
                    <CardTitle>Welcome back</CardTitle>
                    <CardDescription>Enter your credentials to access your account</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="name@example.com" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <Link href="#" className="text-sm text-primary hover:underline">
                          Forgot password?
                        </Link>
                      </div>
                      <Input id="password" type="password" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Login</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

function CommuterSelfForm() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="full-name">Full Name</Label>
          <Input id="full-name" placeholder="Ravi Kumar" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="name@example.com" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="+91 98765 43210" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirm-password">Confirm Password</Label>
        <Input id="confirm-password" type="password" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="home-address">Home Address</Label>
        <Input id="home-address" placeholder="123 Main St, Mumbai, Maharashtra" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="work-address">Work/School Address</Label>
        <Input id="work-address" placeholder="456 Office Blvd, Bangalore, Karnataka" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="travel-time">Preferred Travel Time</Label>
          <Select>
            <SelectTrigger id="travel-time">
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="morning">Morning (6AM - 9AM)</SelectItem>
              <SelectItem value="midday">Midday (11AM - 2PM)</SelectItem>
              <SelectItem value="evening">Evening (4PM - 7PM)</SelectItem>
              <SelectItem value="night">Night (8PM - 11PM)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="preferred-role">Preferred Role</Label>
          <Select>
            <SelectTrigger id="preferred-role">
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="passenger">Passenger</SelectItem>
              <SelectItem value="driver">Driver</SelectItem>
              <SelectItem value="both">Both</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}

function CommuterParentForm() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="parent-name">Parent's Full Name</Label>
          <Input id="parent-name" placeholder="Anita Sharma" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="parent-email">Parent's Email</Label>
          <Input id="parent-email" type="email" placeholder="parent@example.com" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="parent-phone">Parent's Phone Number</Label>
          <Input id="parent-phone" placeholder="+91 98765 43210" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirm-password">Confirm Password</Label>
        <Input id="confirm-password" type="password" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="child-name">Child's Full Name</Label>
          <Input id="child-name" placeholder="Rahul Sharma" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="child-age">Child's Age</Label>
          <Input id="child-age" type="number" min="1" max="18" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="pickup-address">Pickup Address</Label>
        <Input id="pickup-address" placeholder="123 Home St, Mumbai, Maharashtra" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="dropoff-address">Drop-off Address</Label>
        <Input id="dropoff-address" placeholder="456 School Ave, Bangalore, Karnataka" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="school-name">School Name</Label>
        <Input id="school-name" placeholder="Springfield School" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="emergency-contact">Emergency Contact</Label>
        <Input id="emergency-contact" placeholder="Name: Priya, Relation: Aunt, Phone: +91 98765 43210" />
      </div>
    </div>
  )
}

function DriverForm() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="full-name">Full Name</Label>
          <Input id="full-name" placeholder="Rajesh Gupta" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="name@example.com" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="+91 98765 43210" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirm-password">Confirm Password</Label>
        <Input id="confirm-password" type="password" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="license-number">Driver's License Number</Label>
        <Input id="license-number" placeholder="DL12345678" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="car-model">Car Make & Model</Label>
          <Input id="car-model" placeholder="Maruti Suzuki Swift" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="car-registration">Car Registration Number</Label>
          <Input id="car-registration" placeholder="MH12AB1234" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="seating-capacity">Seating Capacity</Label>
        <Select>
          <SelectTrigger id="seating-capacity">
            <SelectValue placeholder="Select capacity" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2">2 seats</SelectItem>
            <SelectItem value="3">3 seats</SelectItem>
            <SelectItem value="4">4 seats</SelectItem>
            <SelectItem value="5">5 seats</SelectItem>
            <SelectItem value="6">6 seats</SelectItem>
            <SelectItem value="7+">7+ seats</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="route-preferences">Route Preferences</Label>
        <Input id="route-preferences" placeholder="Downtown to Suburbs, Highway routes, etc." />
      </div>

      <div className="space-y-2">
        <Label htmlFor="availability">Availability (Days & Time)</Label>
        <Input id="availability" placeholder="Weekdays 7AM-9AM and 5PM-7PM" />
      </div>
    </div>
  )
}

function AgencyForm() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="agency-name">Agency Name</Label>
          <Input id="agency-name" placeholder="City Transport Services" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="agency-email">Agency Email</Label>
          <Input id="agency-email" type="email" placeholder="contact@agency.com" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="agency-phone">Agency Phone Number</Label>
          <Input id="agency-phone" placeholder="+91 98765 43210" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirm-password">Confirm Password</Label>
        <Input id="confirm-password" type="password" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="office-address">Office Address</Label>
        <Input id="office-address" placeholder="123 Business Ave, Mumbai, Maharashtra" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="vehicle-count">Number of Vehicles</Label>
        <Input id="vehicle-count" type="number" min="1" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="driver-details">Driver Details (Optional)</Label>
        <Input id="driver-details" placeholder="Number of drivers, experience, etc." />
      </div>

      <div className="space-y-2">
        <Label htmlFor="service-areas">Service Areas</Label>
        <Input id="service-areas" placeholder="Downtown, North Side, West County, etc." />
      </div>

      <div className="space-y-2">
        <Label htmlFor="license-upload">License & Certification Upload (Optional)</Label>
        <Input id="license-upload" type="file" className="cursor-pointer" />
      </div>
    </div>
  )
}

