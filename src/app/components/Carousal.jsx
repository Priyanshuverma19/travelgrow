import React from "react"
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

const Carousal = ({ data }) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {data.map((item) => (
          <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <Card className="relative group overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-opacity-80">
                {/* Card Header */}
                <CardHeader className="bg-blue-600 items-center rounded-t-lg h-3 pt-4 sticky top-0 z-10">
                  <CardTitle className="text-white text-lg">{item.title}</CardTitle>
                  <CardDescription className="text-gray-800">{item.description}</CardDescription>
                </CardHeader>
                {/* Card Content */}
                <CardContent className="flex aspect-square items-center justify-center p-0.6">
                  <Image
                    width={200}
                    height={200}
                    src={item.image}
                    alt={item.title}
                    className="object-cover rounded-md w-full h-full"
                  />
                </CardContent>
                {/* Card Footer */}
                <CardFooter className="absolute bottom-0 left-0 w-full flex flex-col bg-blue-600 text-start items-center opacity-0 transform translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                  <h1 className="text-2xl text-white font-bold">{item.footerItem1}</h1>
                  <h1 className="text-white font-semibold text-sm">
                    Starting From ₹
                    <span className="text-lg">{item.footerItem2}</span>
                  </h1>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default Carousal
