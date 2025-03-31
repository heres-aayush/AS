import Link from "next/link"
import { UserPlus, Search, Calendar, MapPin, Shield, Star, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HowToUsePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative z-10">
        {/* Navigation */}
        <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 border-b">
          <Link href="/" className="mr-6 flex items-center">
            <span className="text-xl font-bold">Quad</span>
          </Link>
          <nav className="hidden md:flex flex-1 items-center gap-6 text-sm">
            <Link href="/" className="transition-colors hover:text-foreground/80">
              Home
            </Link>
            <Link href="/dashboard" className="transition-colors hover:text-foreground/80">
              Dashboard
            </Link>
            <Link href="/booking" className="transition-colors hover:text-foreground/80">
              Booking
            </Link>
            <Link href="/map" className="transition-colors hover:text-foreground/80">
              Map
            </Link>
            <Link href="/help" className="transition-colors hover:text-foreground/80">
              Help
            </Link>
            <Link href="/how-to-use" className="font-medium transition-colors hover:text-foreground/80">
              How to Use
            </Link>
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="outline" asChild className="hidden md:flex">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </header>

        <main>
          {/* Hero Section */}
          <section className="relative px-4 pt-12 md:pt-20 pb-16 md:pb-24 max-w-4xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">How to Use Our Carpooling Platform</h1>
              <p className="text-xl text-muted-foreground">
                Get started with Quad in just a few simple steps and join thousands of users already sharing rides.
              </p>
            </div>

            <div className="grid gap-12 md:gap-16">
              {/* Step 1 */}
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <UserPlus className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Sign Up & Log In</h2>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary mr-3 mt-1 flex-shrink-0">
                      1
                    </span>
                    <span>Create an account by signing up with your email and password.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary mr-3 mt-1 flex-shrink-0">
                      2
                    </span>
                    <span>Log in to access your dashboard and start using the platform.</span>
                  </li>
                </ul>
              </div>

              {/* Step 2 */}
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Find or Offer a Ride</h2>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary mr-3 mt-1 flex-shrink-0">
                      1
                    </span>
                    <span>
                      <strong>Looking for a ride?</strong> Use the search feature to find available carpool options.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary mr-3 mt-1 flex-shrink-0">
                      2
                    </span>
                    <span>
                      <strong>Offering a ride?</strong> Post ride details, including departure, destination, and time.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Book & Confirm</h2>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary mr-3 mt-1 flex-shrink-0">
                      1
                    </span>
                    <span>Select a ride that suits your schedule and confirm your booking.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary mr-3 mt-1 flex-shrink-0">
                      2
                    </span>
                    <span>Drivers and passengers will receive notifications about their trips.</span>
                  </li>
                </ul>
              </div>

              {/* Step 4 */}
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Track & Manage</h2>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary mr-3 mt-1 flex-shrink-0">
                      1
                    </span>
                    <span>View upcoming rides, track your bookings, and manage reservations from your dashboard.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary mr-3 mt-1 flex-shrink-0">
                      2
                    </span>
                    <span>Use the integrated map to check ride routes and meeting points.</span>
                  </li>
                </ul>
              </div>

              {/* Step 5 */}
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Safe & Secure Rides</h2>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary mr-3 mt-1 flex-shrink-0">
                      1
                    </span>
                    <span>Communicate with drivers/passengers through the platform.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary mr-3 mt-1 flex-shrink-0">
                      2
                    </span>
                    <span>Review profiles and ride history for a safe experience.</span>
                  </li>
                </ul>
              </div>

              {/* Step 6 */}
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Complete & Review</h2>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary mr-3 mt-1 flex-shrink-0">
                      1
                    </span>
                    <span>After the ride, provide feedback to help improve the service for everyone.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary mr-3 mt-1 flex-shrink-0">
                      2
                    </span>
                    <span>Rate your experience and leave comments for other users.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Need Help Section */}
          <section className="bg-muted/50 py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <HelpCircle className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help?</h2>
              <p className="text-xl mb-8">
                Have questions or need assistance? We're here to help you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  Visit FAQ Page
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Contact Support
                </Button>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-primary text-primary-foreground py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to start your journey?</h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Join thousands of travelers who are already saving money and reducing their carbon footprint.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Book a Ride
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 bg-transparent border-white hover:bg-white/10"
                >
                  Offer a Ride
                </Button>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-muted py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Quad</h3>
                <p className="text-muted-foreground">Share the journey, save the planet.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                      Press
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                      Safety
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                      Community Guidelines
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
              <p>© {new Date().getFullYear()} Quad. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

