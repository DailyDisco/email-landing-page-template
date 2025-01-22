/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Desktop App",
    description: "Access your content from anywhere with our powerful desktop application",
    image: "/custom-images/desktop-app.jpg",
    alt: "Desktop application interface screenshot"
  },
  {
    title: "Mobile Experience",
    description: "Stay connected on the go with our mobile-first design",
    image: "/custom-images/mobile-app.jpg",
    alt: "Mobile app interface screenshot"
  },
  {
    title: "Cloud Storage",
    description: "Secure cloud storage keeps your data safe and accessible",
    image: "/custom-images/cloud-app.jpg",
    alt: "Cloud storage illustration"
  }
];

export default function Home() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // Make sure the email is valid by checking if it matches the email regex pattern
  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Handle form submission and display appropriate message
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);

    if (!email || !validateEmail(email)) {
      setIsError(true);
      setMessage('Please enter a valid email address 📧');
      setIsLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage(`Welcome aboard! 🎉 We'll keep you in the loop!`);
    } catch (error) {
      setIsError(true);
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-indigo-600 mb-4">
            Join Our Community! ✨
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Be the first to know about our latest features and updates.
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4 font-semibold transition-colors duration-200 hover:text-indigo-600">
            Sign up and receive an email to get a reminder for when the product launches!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 mb-16 transform hover:scale-105 transition-transform duration-300"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
                aria-describedby="email-message"
                className={`w-full px-4 py-3 rounded-lg border-2 focus:ring-2 transition-colors duration-200 ${isError ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                  : 'border-indigo-100 focus:border-indigo-500 focus:ring-indigo-200'
                  }`}
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transform hover:-translate-y-1 transition-all duration-200 disabled:opacity-50"
            >
              {isLoading ? 'Signing up...' : 'Get Started →'}
            </Button>
          </form>
          {message && (
            <p
              id="email-message"
              className={`mt-4 text-center font-medium ${isError ? 'text-red-600' : 'text-indigo-600'
                }`}
            >
              {message}
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                <img
                  src={feature.image}
                  alt={feature.alt}
                  className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}