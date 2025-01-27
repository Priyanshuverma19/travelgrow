'use client';
import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

const PackageDetails = () => {
  const { id } = useParams(); // Extract the 'id' from the route params
  console.log(id);

  // Dummy package data (replace with API call)
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
