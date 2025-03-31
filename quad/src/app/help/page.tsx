"use client"

import React from 'react';

const HelpPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
            <div className="container mx-auto py-8 px-4">
                <h1 className="text-3xl font-bold mb-4">Help & Support</h1>
                <p className="text-muted-foreground mb-4">
                    Welcome to the Help Page! Here you can find answers to common questions and support resources.
                </p>

                <h2 className="text-2xl font-semibold mb-2">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="font-medium">1. How do I use the map feature?</h3>
                        <p>
                            You can use the map feature to find available rides near your location. Simply enter your destination and select a ride from the options displayed on the map.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-medium">2. How do I book a ride?</h3>
                        <p>
                            To book a ride, select the ride you want from the list or map, and click the "Book" button. Follow the prompts to complete your booking.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-medium">3. What payment methods are accepted?</h3>
                        <p>
                            We accept various payment methods including credit/debit cards and mobile wallets. Please check the payment options available in your account settings.
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Support</h2>
                <p>
                    If you need further assistance, please contact our support team at <a href="mailto:support@example.com" className="text-blue-500">support@example.com</a>.
                </p>
            </div>
        </div>
    );
};

export default HelpPage; 