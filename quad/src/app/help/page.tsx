"use client"

import React from 'react';
import Navigation from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MessageCircle, Phone, HelpCircle } from "lucide-react"

const HelpPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
            <Navigation />
            <main className="relative z-10">
                {/* Hero Section */}
                <section className="py-16 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                            <HelpCircle className="w-8 h-8 text-primary" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">
                            Help & Support Center
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Find answers to common questions and get the support you need to make the most of your Quad experience.
                        </p>
                    </div>
                </section>

                {/* Quick Contact Cards */}
                <section className="py-12 px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-card rounded-lg p-6 shadow-sm">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <h2 className="text-2xl font-bold mb-4">Email Support</h2>
                                <p className="text-muted-foreground mb-4">Get in touch with our support team via email</p>
                                <Button variant="outline" className="w-full">
                                    <a href="mailto:support@quad.com">support@quad.com</a>
                                </Button>
                            </div>

                            <div className="bg-card rounded-lg p-6 shadow-sm">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                                    <Phone className="w-6 h-6 text-primary" />
                                </div>
                                <h2 className="text-2xl font-bold mb-4">Phone Support</h2>
                                <p className="text-muted-foreground mb-4">Speak directly with our support team</p>
                                <Button variant="outline" className="w-full">
                                    <a href="tel:+1234567890">+91 9262353846</a>
                                </Button>
                            </div>

                            <div className="bg-card rounded-lg p-6 shadow-sm">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                                    <MessageCircle className="w-6 h-6 text-primary" />
                                </div>
                                <h2 className="text-2xl font-bold mb-4">Live Chat</h2>
                                <p className="text-muted-foreground mb-4">Chat with our support team in real-time</p>
                                <Button variant="outline" className="w-full">
                                    <a href = "">Start Chat</a></Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-12 px-4 bg-muted/50">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            <div className="bg-card rounded-lg p-6 shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">How do I use the map feature?</h3>
                                <p className="text-muted-foreground">
                                    You can use the map feature to find available rides near your location. Simply enter your destination 
                                    and select a ride from the options displayed on the map. The map will show you real-time locations 
                                    of available drivers and estimated arrival times.
                                </p>
                            </div>

                            <div className="bg-card rounded-lg p-6 shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">How do I book a ride?</h3>
                                <p className="text-muted-foreground">
                                    To book a ride, select the ride you want from the list or map, and click the "Book" button. 
                                    Follow the prompts to complete your booking. You'll receive a confirmation email with all the 
                                    details of your ride.
                                </p>
                            </div>

                            <div className="bg-card rounded-lg p-6 shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">What payment methods are accepted?</h3>
                                <p className="text-muted-foreground">
                                    We accept various payment methods including credit/debit cards, mobile wallets, and digital 
                                    payment solutions. All payments are processed securely through our encrypted payment system.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Need Help Section */}
                <section className="bg-primary text-primary-foreground py-16 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Need Help?</h2>
                        <p className="text-xl mb-8 text-primary-foreground/90">
                            Our support team is available 24/7 to assist you with any questions or concerns.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" className="text-lg px-8">
                                Contact Support
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="text-lg px-8 bg-transparent border-white hover:bg-white/10"
                            >
                                View Documentation
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default HelpPage;
