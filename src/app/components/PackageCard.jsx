'use client'
import React from "react";

import Image from "next/image";
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const PackageCard = ({ id, title, description, price, image }) => {
  const router = useRouter();

  const handleViewDetails = () => {
    router.push(`/packages/${id}`); // Navigate to the details page dynamically
  };

  const handleContactUs = () => {
    alert(`Contact us about the "${title}" package!`); // Replace this with your contact logic
  };

  return (
    <Card className="hover:shadow-lg transition-all">
      <CardHeader className="p-0">
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className="rounded-t-lg object-cover w-full h-48"
        />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <p className="text-muted-foreground text-sm mt-2">{description}</p>
        <p className="text-blue-600 font-bold mt-4">Starting from ₹{price}</p>
      </CardContent>
      <CardFooter className="flex justify-between mt-4 p-4">
        <Button variant="default" onClick={handleViewDetails}>
          View Details
        </Button>
        <Button variant="outline" onClick={handleContactUs}>
          Contact Us
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PackageCard;
