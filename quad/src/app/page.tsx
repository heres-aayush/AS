import Image from "next/image"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import AnimatedBackground from "@/components/animated-background"

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navigation />
        <main>
          {/* Hero Section */}
          <section className="relative px-4 pt-12 md:pt-20 pb-16 md:pb-24 max-w-7xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  <span className="block">Share the journey,</span>
                  <span className="block text-primary">save the planet.</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-md">
                  Quad connects drivers with empty seats to people traveling the same way. Save money, reduce traffic,
                  and make new friends.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="text-lg px-8">
                    Book a Ride
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    Offer a Ride
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[500px] rounded-xl overflow-hidden flex items-center justify-center">
                <Image
                  src="/gaadi.jpg"
                  alt="People carpooling"
                  width={800}
                  height={600}
                  className="object-contain max-w-full max-h-full"
                  priority
                />
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="bg-muted/50 py-16 md:py-24 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How Quad Works</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-background rounded-xl p-6 text-center shadow-sm">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Request a Ride</h3>
                  <p className="text-muted-foreground">
                    Enter your destination and find available rides going your way.
                  </p>
                </div>
                <div className="bg-background rounded-xl p-6 text-center shadow-sm">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Book Instantly</h3>
                  <p className="text-muted-foreground">Choose your ride and book your seat with just a few taps.</p>
                </div>
                <div className="bg-background rounded-xl p-6 text-center shadow-sm">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Travel Together</h3>
                  <p className="text-muted-foreground">Meet at the pickup point and enjoy your shared journey.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 md:py-24 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Quad</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-600"
                      >
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Save Money</h3>
                      <p className="text-muted-foreground">
                        Split travel costs and save up to 75% compared to other transportation options.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-600"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                        <path d="m15 9-6 6" />
                        <path d="m9 9 6 6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Reduce Emissions</h3>
                      <p className="text-muted-foreground">
                        Help reduce CO2 emissions by sharing rides instead of driving alone.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-purple-600"
                      >
                        <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Meet New People</h3>
                      <p className="text-muted-foreground">
                        Connect with like-minded travelers and make your journey more enjoyable.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-orange-600"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
                      <p className="text-muted-foreground">
                        Verified profiles, ratings, and 24/7 customer support for peace of mind.
                      </p>
                    </div>
                  </div>
                </div>
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
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Download the App
              </Button>
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

