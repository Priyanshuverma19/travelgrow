'use client';

import React from "react";
import Image from "next/image";

const PackageDetails = ({ id }) => {
  const packages = [
    {
      id: 1,
      title: "Explore the Himalayas",
      description: "Experience the beauty of snow-capped mountains.",
      price: 15000,
      image: "/images/himalayas.jpg",
      details: "This tour includes trekking, camping, and stunning views of the Himalayan range.",
    },
    {
      id: 2,
      title: "Beach Paradise in Goa",
      description: "Relax on the serene beaches of Goa.",
      price: 12000,
      image: "/images/goa.jpg",
      details: "Enjoy sunbathing, water sports, and vibrant nightlife in Goa.",
    },
    {
      id: 3,
      title: "Desert Adventure in Rajasthan",
      description: "Discover the vibrant culture of Rajasthan.",
      price: 18000,
      image: "/images/rajasthan.jpg",
      details: "Camel safaris, royal palaces, and the Thar desert await you.",
    },
    {
      id: 4,
      title: "Backwaters of Kerala",
      description: "Experience tranquility in the serene backwaters.",
      price: 20000,
      image: "/images/kerala.jpg",
      details: "Houseboat stays, traditional meals, and lush greenery in Kerala.",
    },
  ];

  const packageDetails = packages.find((pkg) => pkg.id === parseInt(id));

  if (!packageDetails) return <p>Loading...</p>;

  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">{packageDetails.title}</h1>
      <Image
        src={packageDetails.image}
        alt={packageDetails.title}
        width={600}
        height={400}
        className="rounded-lg"
      />
      <p className="mt-4 text-lg">{packageDetails.details}</p>
      <p className="mt-4 text-xl font-bold">Price: ₹{packageDetails.price}</p>
    </div>
  );
};

export default PackageDetails;
