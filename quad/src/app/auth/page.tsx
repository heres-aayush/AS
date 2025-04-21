"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Link from "next/link"
import Navigation from "@/components/navigation"
import AnimatedBackground from "@/components/animated-background"
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export default function AuthPage() {
  const router = useRouter()
  const [userType, setUserType] = useState<string>("commuter-self")
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    address: "",
    password: ""
  })
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          userType: userType.replace('-', '_').toUpperCase(),
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed')
      }

      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify({
        email: formData.email,
        userType: userType,
        name: formData.email.split('@')[0], // Using email username as name for now
        isLoggedIn: true
      }))

      toast.success('Account created successfully!')
      router.push('/dashboard')
    } catch (error: any) {
      console.error('Registration error:', error)
      toast.error(error.message || 'Failed to create account. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleLoginInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Login failed')
      }

      // Store user data in localStorage with the same structure as registration
      localStorage.setItem('user', JSON.stringify({
        email: loginData.email, // Use the email from login form
        name: loginData.email.split('@')[0], // Use email username as name
        isLoggedIn: true
      }))

      toast.success('Logged in successfully!')
      router.push('/dashboard')
    } catch (error: any) {
      console.error('Login error:', error)
      toast.error(error.message || 'Failed to login. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

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
                  <form onSubmit={handleSubmit}>
                    <CardHeader>
                      <CardTitle>Create an account</CardTitle>
                      <CardDescription>
                        Choose your user type and provide basic information to get started.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
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

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input
                          id="address"
                          name="address"
                          placeholder="123 Main St, City, State"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                          id="password"
                          name="password"
                          type="password"
                          placeholder="Enter your password"
                          value={formData.password}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4">
                      <Button className="w-full" type="submit" disabled={isLoading}>
                        {isLoading ? 'Creating Account...' : 'Create Account'}
                      </Button>
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
                  </form>
                </Card>
              </TabsContent>

              <TabsContent value="login">
                <Card>
                  <form onSubmit={handleLogin}>
                    <CardHeader>
                      <CardTitle>Welcome back</CardTitle>
                      <CardDescription>Enter your credentials to access your account</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="login-email">Email</Label>
                        <Input 
                          id="login-email" 
                          name="email"
                          type="email" 
                          placeholder="name@example.com"
                          value={loginData.email}
                          onChange={handleLoginInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="login-password">Password</Label>
                          <Link href="#" className="text-sm text-primary hover:underline">
                            Forgot password?
                          </Link>
                        </div>
                        <Input 
                          id="login-password" 
                          name="password"
                          type="password"
                          value={loginData.password}
                          onChange={handleLoginInputChange}
                          required
                        />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" type="submit" disabled={isLoading}>
                        {isLoading ? 'Logging in...' : 'Login'}
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}