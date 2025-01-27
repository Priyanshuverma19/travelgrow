'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    title: "Expert Travel Guides",
    description: "Our team of experts curates unforgettable travel experiences tailored to you.",
    image: "/guide.png", // Replace with actual image paths
  },
  {
    title: "Affordable Packages",
    description: "Quality travel packages at prices that suit your budget.",
    image: "/cheap.png", // Replace with actual image paths
  },
  {
    title: "Exclusive Offers",
    description: "Access to special deals and discounts for our loyal customers.",
    image: "/offers.png", // Replace with actual image paths
  },
  {
    title: "Eco-Friendly Tours",
    description: "Enjoy sustainable travel experiences that help preserve our planet.",
    image: "/eco.png", // Replace with actual image paths
  },
  {
    title: "Easy Booking",
    description: "Simple, fast, and secure booking process for a hassle-free experience.",
    image: "/bus.png", // Replace with actual image paths
  },
  {
    title: "24/7 Customer Support",
    description: "We’re always here to assist with your travel needs.",
    image: "/castsupport.png", // Replace with actual image paths
  },
  {
    title: "Secure and Safe Travel",
    description: "Your safety is our priority; we ensure safe and comfortable journeys.",
    image: "/travelage.png", // Replace with actual image paths
  },
  {
    title: "Top Travel Agents",
    description: "Ensuring your safety and comfort with every trip.",
    image: "/tagent.png", // Replace with actual image paths
  },
];

const WhyChooseUs = () => {
  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl lg:text-3xl font-bold text-center mb-6">Why Choose Us</h2>
      <p className="text-md text-center text-gray-800 mb-10">
        Discover the Benefits of Traveling With Us. Curated travel packages for unforgettable journeys.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300 ">
              <CardHeader className="flex flex-col items-center">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <CardTitle className="text-xl font-semibold mt-4 text-center">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-muted-foreground text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
